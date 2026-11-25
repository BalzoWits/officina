# Pubblica il sito su GitHub (BalzoWits/officina) tramite le API Git di GitHub.
# Serve perché "git push" dalla rete aziendale fallisce per SSL: gh api passa, git no.
# Uso: powershell -File publish.ps1 "messaggio del commit"
param([string]$Message = "Aggiorna il sito")
$ErrorActionPreference = 'Stop'
$repo = 'BalzoWits/officina'
$root = $PSScriptRoot
$tmp = Join-Path $env:TEMP 'officina-publish.json'
$utf8 = New-Object System.Text.UTF8Encoding($false)

function Api([string]$method, [string]$path, $body) {
  if ($null -ne $body) {
    [IO.File]::WriteAllText($tmp, ($body | ConvertTo-Json -Depth 10 -Compress), $utf8)
    $out = gh api -X $method $path --input $tmp
  } else {
    $out = gh api -X $method $path
  }
  if ($LASTEXITCODE -ne 0) { throw "gh api $method $path fallita" }
  return $out | ConvertFrom-Json
}

# build aggiornata prima di pubblicare
Push-Location $root
node build.mjs
if ($LASTEXITCODE -ne 0) { Pop-Location; throw 'build fallita' }
Pop-Location

# file pubblicati: tutto tranne dipendenze, output dei test e cartelle di servizio
$exclude = '\\(node_modules|out|\.git)\\'
$files = Get-ChildItem $root -Recurse -File | Where-Object { $_.FullName -notmatch $exclude -and $_.Name -ne 'package-lock.json' }

$head = Api GET "repos/$repo/git/ref/heads/main" $null
$parent = $head.object.sha
$baseTree = (Api GET "repos/$repo/git/commits/$parent" $null).tree.sha
$current = @{}
foreach ($e in (Api GET "repos/$repo/git/trees/${baseTree}?recursive=1" $null).tree) { if ($e.type -eq 'blob') { $current[$e.path] = $e.sha } }

$tree = @()
foreach ($f in $files) {
  $rel = $f.FullName.Substring($root.Length + 1).Replace('\', '/')
  $bytes = [IO.File]::ReadAllBytes($f.FullName)
  # sha del blob git: se il file è già identico nel repo non lo ricarico (il wasm pesa 22 MB)
  $header = [Text.Encoding]::ASCII.GetBytes("blob $($bytes.Length)`0")
  $sha1 = [Security.Cryptography.SHA1]::Create()
  [void]$sha1.TransformBlock($header, 0, $header.Length, $null, 0)
  [void]$sha1.TransformFinalBlock($bytes, 0, $bytes.Length)
  $gitSha = -join ($sha1.Hash | ForEach-Object { $_.ToString('x2') })
  if ($current[$rel] -eq $gitSha) {
    $tree += @{ path = $rel; mode = '100644'; type = 'blob'; sha = $gitSha }
    continue
  }
  $blob = Api POST "repos/$repo/git/blobs" @{ content = [Convert]::ToBase64String($bytes); encoding = 'base64' }
  $tree += @{ path = $rel; mode = '100644'; type = 'blob'; sha = $blob.sha }
  Write-Host "  $rel"
}
# albero completo (senza base_tree): i file tolti in locale spariscono anche dal repo
$t = Api POST "repos/$repo/git/trees" @{ tree = $tree }
$c = Api POST "repos/$repo/git/commits" @{ message = $Message; tree = $t.sha; parents = @($parent) }
Api PATCH "repos/$repo/git/refs/heads/main" @{ sha = $c.sha } | Out-Null
Remove-Item $tmp -ErrorAction SilentlyContinue
Write-Host "Pubblicato $($c.sha.Substring(0,7)) su $repo ($($files.Count) file)"
