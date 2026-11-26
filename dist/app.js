var zm=Object.defineProperty;var Hm=(n,t)=>{for(var e in t)zm(n,e,{get:t[e],enumerable:!0})};var Gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},df=0,kh=1,uf=2;var pa=1,ff=2,sr=3,Zn=0,bi=1,Mi=2,ds=0,rr=1,Dh=2,Nh=3,Uh=4,pf=5;var us=100,mf=101,gf=102,_f=103,yf=104,vf=200,xf=201,bf=202,Mf=203,Oh=204,Fh=205,Sf=206,wf=207,Ef=208,Tf=209,Af=210,Cf=211,Rf=212,Pf=213,If=214,Lo=0,ko=1,Do=2,Gs=3,No=4,Uo=5,Oo=6,Fo=7,Bh=0,Lf=1,kf=2,un=0,zh=1,Hh=2,Vh=3,Gh=4,Wh=5,$h=6,Xh=7;var qh=300,fs=301,ar=302,vl=303,xl=304,Bo=1e3,dn=1001,zo=1002,Ke=1003,Df=1004;var ma=1005;var vi=1006,bl=1007;var Rn=1008;var Ci=1009,jh=1010,Yh=1011,or=1012,Ml=1013,Qi=1014,tn=1015,en=1016,Sl=1017,wl=1018,ps=1020,Zh=35902,Jh=35899,Kh=1021,Qh=1022,nn=1023,wn=1026,Pn=1027,td=1028,El=1029,Jn=1030,Tl=1031;var Al=1033,ga=33776,_a=33777,ya=33778,va=33779,Cl=35840,Rl=35841,Pl=35842,Il=35843,Ll=36196,kl=37492,Dl=37496,Nl=37488,Ul=37489,xa=37490,Ol=37491,Fl=37808,Bl=37809,zl=37810,Hl=37811,Vl=37812,Gl=37813,Wl=37814,$l=37815,Xl=37816,ql=37817,jl=37818,Yl=37819,Zl=37820,Jl=37821,Kl=36492,Ql=36494,tc=36495,ec=36283,ic=36284,ba=36285,nc=36286;var kr=2300,Ho=2301,Po=2302,Mh=2303,Sh=2400,wh=2401,Eh=2402;var Nf=3200;var sc=0,Uf=1,In="",Li="srgb",Dr="srgb-linear",Nr="linear",Te="srgb";var Io=7680;var Of=519,Ff=512,Bf=513,zf=514,ed=515,Hf=516,Vf=517,id=518,nd=519,sd=35044;var rd="300 es",Hi=2e3,Ws=2001;function Vm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Gm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ur(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gf(){let n=Ur("canvas");return n.style.display="block",n}var wu={},$s=null;function Or(...n){let t="THREE."+n.shift();$s?$s("log",t,...n):console.log(t,...n)}function Wf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Kt(...n){n=Wf(n);let t="THREE."+n.shift();if($s)$s("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ie(...n){n=Wf(n);let t="THREE."+n.shift();if($s)$s("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Cr(...n){let t=n.join(" ");t in wu||(wu[t]=!0,Kt(...n))}function $f(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Xf={[Lo]:Lo,[Do]:Oo,[No]:No,[Gs]:Uo,[ko]:ko,[Oo]:Do,[Fo]:Fo,[Uo]:Gs},Zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},oi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eu=1234567,Rr=Math.PI/180,Xs=180/Math.PI;function Ln(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(oi[n&255]+oi[n>>8&255]+oi[n>>16&255]+oi[n>>24&255]+"-"+oi[t&255]+oi[t>>8&255]+"-"+oi[t>>16&15|64]+oi[t>>24&255]+"-"+oi[e&63|128]+oi[e>>8&255]+"-"+oi[e>>16&255]+oi[e>>24&255]+oi[i&255]+oi[i>>8&255]+oi[i>>16&255]+oi[i>>24&255]).toLowerCase()}function re(n,t,e){return Math.max(t,Math.min(e,n))}function ad(n,t){return(n%t+t)%t}function Wm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function $m(n,t,e){return n!==t?(e-n)/(t-n):0}function Pr(n,t,e){return(1-e)*n+e*t}function Xm(n,t,e,i){return Pr(n,t,1-Math.exp(-e*i))}function qm(n,t=1){return t-Math.abs(ad(n,t*2)-t)}function jm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Ym(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Zm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Jm(n,t){return n+Math.random()*(t-n)}function Km(n){return n*(.5-Math.random())}function Qm(n){n!==void 0&&(Eu=n);let t=Eu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tg(n){return n*Rr}function eg(n){return n*Xs}function ig(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function ng(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function od(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function sg(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:Kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ld(n,t){if(t.constructor===Float32Array)return n;let e=rc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function cd(n,t){if(t.constructor===Float32Array)return n;let e=rc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Ma={DEG2RAD:Rr,RAD2DEG:Xs,generateUUID:Ln,clamp:re,euclideanModulo:ad,mapLinear:Wm,inverseLerp:$m,lerp:Pr,damp:Xm,pingpong:qm,smoothstep:jm,smootherstep:Ym,randInt:Zm,randFloat:Jm,randFloatSpread:Km,seededRandom:Qm,degToRad:tg,radToDeg:eg,isPowerOfTwo:ig,ceilPowerOfTwo:ng,floorPowerOfTwo:od,setQuaternionFromProperEuler:sg,normalize:cd,denormalize:ld},md=class md{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};md.prototype.isVector2=!0;var It=md,ki=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(u!==y||l!==d||c!==f||h!==g){let p=l*d+c*f+h*g+u*y;p<0&&(d=-d,f=-f,g=-g,y=-y,p=-p);let m=1-o;if(p<.9995){let _=Math.acos(p),M=Math.sin(_);m=Math.sin(m*_)/M,o=Math.sin(o*_)/M,l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+y*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+y*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gd=class gd{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Jc.copy(this).projectOnVector(t),this.sub(Jc)}reflect(t){return this.sub(Jc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gd.prototype.isVector3=!0;var N=gd,Jc=new N,Tu=new ki,_d=class _d{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],y=s[0],p=s[3],m=s[6],_=s[1],M=s[4],x=s[7],E=s[2],C=s[5],v=s[8];return r[0]=a*y+o*_+l*E,r[3]=a*p+o*M+l*C,r[6]=a*m+o*x+l*v,r[1]=c*y+h*_+u*E,r[4]=c*p+h*M+u*C,r[7]=c*m+h*x+u*v,r[2]=d*y+f*_+g*E,r[5]=d*p+f*M+g*C,r[8]=d*m+f*x+g*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kc.makeScale(t,e)),this}rotate(t){return Cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kc.makeRotation(-t)),this}translate(t,e){return Cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_d.prototype.isMatrix3=!0;var ae=_d,Kc=new ae,Au=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rg(){let n={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Te&&(s.r=Sn(s.r),s.g=Sn(s.g),s.b=Sn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Te&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===In?Nr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Dr]:{primaries:t,whitePoint:i,transfer:Nr,toXYZ:Au,fromXYZ:Cu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Li},outputColorSpaceConfig:{drawingBufferColorSpace:Li}},[Li]:{primaries:t,whitePoint:i,transfer:Te,toXYZ:Au,fromXYZ:Cu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Li}}}),n}var ye=rg();function Sn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ts,Vo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ts===void 0&&(Ts=Ur("canvas")),Ts.width=t.width,Ts.height=t.height;let s=Ts.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ts}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ur("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Sn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Sn(e[i]/255)*255):e[i]=Sn(e[i]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ag=0,qs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Ln(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qc(s[a].image)):r.push(Qc(s[a]))}else r=Qc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Qc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var og=0,th=new N,Ai=class n extends Zi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=dn,s=dn,r=vi,a=Rn,o=nn,l=Ci,c=n.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Ln(),this.name="",this.source=new qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(th).x}get height(){return this.source.getSize(th).y}get depth(){return this.source.getSize(th).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bo:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bo:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ai.DEFAULT_IMAGE=null;Ai.DEFAULT_MAPPING=qh;Ai.DEFAULT_ANISOTROPY=1;var yd=class yd{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,x=(f+1)/2,E=(m+1)/2,C=(h+d)/4,v=(u+y)/4,A=(g+p)/4;return M>x&&M>E?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=C/i,r=v/i):x>E?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=C/s,r=A/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=v/r,s=A/r),this.set(i,s,r,e),this}let _=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yd.prototype.isVector4=!0;var Ae=yd,Go=class extends Zi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Ai({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:vi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new qs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Di=class extends Go{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Fr=class extends Ai{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wo=class extends Ai{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var yl=class yl{constructor(t,e,i,s,r,a,o,l,c,h,u,d,f,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,u,d,f,g,y,p)}set(t,e,i,s,r,a,o,l,c,h,u,d,f,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/As.setFromMatrixColumn(t,0).length(),r=1/As.setFromMatrixColumn(t,1).length(),a=1/As.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lg,t,cg)}lookAt(t,e,i){let s=this.elements;return Pi.subVectors(t,e),Pi.lengthSq()===0&&(Pi.z=1),Pi.normalize(),On.crossVectors(i,Pi),On.lengthSq()===0&&(Math.abs(i.z)===1?Pi.x+=1e-4:Pi.z+=1e-4,Pi.normalize(),On.crossVectors(i,Pi)),On.normalize(),so.crossVectors(Pi,On),s[0]=On.x,s[4]=so.x,s[8]=Pi.x,s[1]=On.y,s[5]=so.y,s[9]=Pi.y,s[2]=On.z,s[6]=so.z,s[10]=Pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],y=i[6],p=i[10],m=i[14],_=i[3],M=i[7],x=i[11],E=i[15],C=s[0],v=s[4],A=s[8],B=s[12],k=s[1],F=s[5],V=s[9],Q=s[13],U=s[2],G=s[6],tt=s[10],Y=s[14],ht=s[3],$=s[7],lt=s[11],dt=s[15];return r[0]=a*C+o*k+l*U+c*ht,r[4]=a*v+o*F+l*G+c*$,r[8]=a*A+o*V+l*tt+c*lt,r[12]=a*B+o*Q+l*Y+c*dt,r[1]=h*C+u*k+d*U+f*ht,r[5]=h*v+u*F+d*G+f*$,r[9]=h*A+u*V+d*tt+f*lt,r[13]=h*B+u*Q+d*Y+f*dt,r[2]=g*C+y*k+p*U+m*ht,r[6]=g*v+y*F+p*G+m*$,r[10]=g*A+y*V+p*tt+m*lt,r[14]=g*B+y*Q+p*Y+m*dt,r[3]=_*C+M*k+x*U+E*ht,r[7]=_*v+M*F+x*G+E*$,r[11]=_*A+M*V+x*tt+E*lt,r[15]=_*B+M*Q+x*Y+E*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],y=t[7],p=t[11],m=t[15],_=l*f-c*d,M=o*f-c*u,x=o*d-l*u,E=a*f-c*h,C=a*d-l*h,v=a*u-o*h;return e*(y*_-p*M+m*x)-i*(g*_-p*E+m*C)+s*(g*M-y*E+m*v)-r*(g*x-y*C+p*v)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],y=t[13],p=t[14],m=t[15],_=e*o-i*a,M=e*l-s*a,x=e*c-r*a,E=i*l-s*o,C=i*c-r*o,v=s*c-r*l,A=h*y-u*g,B=h*p-d*g,k=h*m-f*g,F=u*p-d*y,V=u*m-f*y,Q=d*m-f*p,U=_*Q-M*V+x*F+E*k-C*B+v*A;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/U;return t[0]=(o*Q-l*V+c*F)*G,t[1]=(s*V-i*Q-r*F)*G,t[2]=(y*v-p*C+m*E)*G,t[3]=(d*C-u*v-f*E)*G,t[4]=(l*k-a*Q-c*B)*G,t[5]=(e*Q-s*k+r*B)*G,t[6]=(p*x-g*v-m*M)*G,t[7]=(h*v-d*x+f*M)*G,t[8]=(a*V-o*k+c*A)*G,t[9]=(i*k-e*V-r*A)*G,t[10]=(g*C-y*x+m*_)*G,t[11]=(u*x-h*C-f*_)*G,t[12]=(o*B-a*F-l*A)*G,t[13]=(e*F-i*B+s*A)*G,t[14]=(y*M-g*E-p*_)*G,t[15]=(h*E-u*M+d*_)*G,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,y=a*h,p=a*u,m=o*u,_=l*c,M=l*h,x=l*u,E=i.x,C=i.y,v=i.z;return s[0]=(1-(y+m))*E,s[1]=(f+x)*E,s[2]=(g-M)*E,s[3]=0,s[4]=(f-x)*C,s[5]=(1-(d+m))*C,s[6]=(p+_)*C,s[7]=0,s[8]=(g+M)*v,s[9]=(p-_)*v,s[10]=(1-(d+y))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=As.set(s[0],s[1],s[2]).length(),o=As.set(s[4],s[5],s[6]).length(),l=As.set(s[8],s[9],s[10]).length();r<0&&(a=-a),qi.copy(this);let c=1/a,h=1/o,u=1/l;return qi.elements[0]*=c,qi.elements[1]*=c,qi.elements[2]*=c,qi.elements[4]*=h,qi.elements[5]*=h,qi.elements[6]*=h,qi.elements[8]*=u,qi.elements[9]*=u,qi.elements[10]*=u,e.setFromRotationMatrix(qi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Hi,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Hi)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ws)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Hi,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Hi)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ws)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};yl.prototype.isMatrix4=!0;var Pe=yl,As=new N,qi=new Pe,lg=new N(0,0,0),cg=new N(1,1,1),On=new N,so=new N,Pi=new N,Ru=new Pe,Pu=new ki,En=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ru,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hg=0,Iu=new N,Cs=new ki,yn=new Pe,ro=new N,Mr=new N,dg=new N,ug=new ki,Lu=new N(1,0,0),ku=new N(0,1,0),Du=new N(0,0,1),Nu={type:"added"},fg={type:"removed"},Rs={type:"childadded",child:null},eh={type:"childremoved",child:null},ti=class n extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new N,e=new En,i=new ki,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new ae}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(Lu,t)}rotateY(t){return this.rotateOnAxis(ku,t)}rotateZ(t){return this.rotateOnAxis(Du,t)}translateOnAxis(t,e){return Iu.copy(t).applyQuaternion(this.quaternion),this.position.add(Iu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lu,t)}translateY(t){return this.translateOnAxis(ku,t)}translateZ(t){return this.translateOnAxis(Du,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ro.copy(t):ro.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Mr,ro,this.up):yn.lookAt(ro,Mr,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(yn),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nu),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fg),eh.child=t,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nu),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,dg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,ug,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ti.DEFAULT_UP=new N(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ci=class extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}},pg={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ci;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},ao={h:0,s:0,l:0};function ih(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var _e=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ye.workingColorSpace){return this.r=t,this.g=e,this.b=i,ye.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ye.workingColorSpace){if(t=ad(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ih(a,r,t+1/3),this.g=ih(a,r,t),this.b=ih(a,r,t-1/3)}return ye.colorSpaceToWorking(this,s),this}setStyle(t,e=Li){function i(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Li){let i=qf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sn(t.r),this.g=Sn(t.g),this.b=Sn(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Li){return ye.workingToColorSpace(li.copy(this),t),Math.round(re(li.r*255,0,255))*65536+Math.round(re(li.g*255,0,255))*256+Math.round(re(li.b*255,0,255))}getHexString(t=Li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.workingToColorSpace(li.copy(this),e);let i=li.r,s=li.g,r=li.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ye.workingColorSpace){return ye.workingToColorSpace(li.copy(this),e),t.r=li.r,t.g=li.g,t.b=li.b,t}getStyle(t=Li){ye.workingToColorSpace(li.copy(this),t);let e=li.r,i=li.g,s=li.b;return t!==Li?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(ao);let i=Pr(Fn.h,ao.h,e),s=Pr(Fn.s,ao.s,e),r=Pr(Fn.l,ao.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},li=new _e;_e.NAMES=qf;var Br=class extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ji=new N,vn=new N,nh=new N,xn=new N,Ps=new N,Is=new N,Uu=new N,sh=new N,rh=new N,ah=new N,oh=new Ae,lh=new Ae,ch=new Ae,Vn=class n{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ji.subVectors(t,e),s.cross(ji);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ji.subVectors(s,e),vn.subVectors(i,e),nh.subVectors(t,e);let a=ji.dot(ji),o=ji.dot(vn),l=ji.dot(nh),c=vn.dot(vn),h=vn.dot(nh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return oh.setScalar(0),lh.setScalar(0),ch.setScalar(0),oh.fromBufferAttribute(t,e),lh.fromBufferAttribute(t,i),ch.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(oh,r.x),a.addScaledVector(lh,r.y),a.addScaledVector(ch,r.z),a}static isFrontFacing(t,e,i,s){return ji.subVectors(i,e),vn.subVectors(t,e),ji.cross(vn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ji.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),ji.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Ps.subVectors(s,i),Is.subVectors(r,i),sh.subVectors(t,i);let l=Ps.dot(sh),c=Is.dot(sh);if(l<=0&&c<=0)return e.copy(i);rh.subVectors(t,s);let h=Ps.dot(rh),u=Is.dot(rh);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(Ps,a);ah.subVectors(t,r);let f=Ps.dot(ah),g=Is.dot(ah);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Is,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Uu.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Uu,o);let m=1/(p+y+d);return a=y*m,o=d*m,e.copy(i).addScaledVector(Ps,a).addScaledVector(Is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},di=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Yi):Yi.fromBufferAttribute(r,a),Yi.applyMatrix4(t.matrixWorld),this.expandByPoint(Yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oo.copy(i.boundingBox)),oo.applyMatrix4(t.matrixWorld),this.union(oo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yi),Yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),lo.subVectors(this.max,Sr),Ls.subVectors(t.a,Sr),ks.subVectors(t.b,Sr),Ds.subVectors(t.c,Sr),Bn.subVectors(ks,Ls),zn.subVectors(Ds,ks),ss.subVectors(Ls,Ds);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ss.z,ss.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ss.z,0,-ss.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ss.y,ss.x,0];return!hh(e,Ls,ks,Ds,lo)||(e=[1,0,0,0,1,0,0,0,1],!hh(e,Ls,ks,Ds,lo))?!1:(co.crossVectors(Bn,zn),e=[co.x,co.y,co.z],hh(e,Ls,ks,Ds,lo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},bn=[new N,new N,new N,new N,new N,new N,new N,new N],Yi=new N,oo=new di,Ls=new N,ks=new N,Ds=new N,Bn=new N,zn=new N,ss=new N,Sr=new N,lo=new N,co=new N,rs=new N;function hh(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){rs.fromArray(n,r);let o=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=t.dot(rs),c=e.dot(rs),h=i.dot(rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var $e=new N,ho=new It,mg=0,hi=class extends Zi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=sd,this.updateRanges=[],this.gpuType=tn,this.version=0,this._normalizationScale=t!==void 0?rc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ho.fromBufferAttribute(this,e),ho.applyMatrix3(t),this.setXY(e,ho.x,ho.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ld(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):cd(t,this.array)}};var zr=class extends hi{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Hr=class extends hi{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Me=class extends hi{constructor(t,e,i){super(new Float32Array(t),e,i)}},gg=new di,wr=new N,dh=new N,xi=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):gg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);let e=wr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(wr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(dh)),this.expandByPoint(wr.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},_g=0,zi=new Pe,uh=new ti,Ns=new N,Ii=new di,Er=new di,Je=new N,He=class n extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vm(t)?Hr:zr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ae().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return zi.makeRotationFromQuaternion(t),this.applyMatrix4(zi),this}rotateX(t){return zi.makeRotationX(t),this.applyMatrix4(zi),this}rotateY(t){return zi.makeRotationY(t),this.applyMatrix4(zi),this}rotateZ(t){return zi.makeRotationZ(t),this.applyMatrix4(zi),this}translate(t,e,i){return zi.makeTranslation(t,e,i),this.applyMatrix4(zi),this}scale(t,e,i){return zi.makeScale(t,e,i),this.applyMatrix4(zi),this}lookAt(t){return uh.lookAt(t),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ii.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Ii.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Ii.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Ii.min),this.boundingBox.expandByPoint(Ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let i=this.boundingSphere.center;if(Ii.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(Ii.min,Er.min),Ii.expandByPoint(Je),Je.addVectors(Ii.max,Er.max),Ii.expandByPoint(Je)):(Ii.expandByPoint(Er.min),Ii.expandByPoint(Er.max))}Ii.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Je.fromBufferAttribute(o,c),l&&(Ns.fromBufferAttribute(t,c),Je.add(Ns)),s=Math.max(s,i.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new hi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let B=0;B<i.count;B++)o[B]=new N,l[B]=new N;let h=new N,u=new N,d=new N,f=new It,g=new It,y=new It,p=new N,m=new N;function _(B,k,F){c[B]=c[k]=c[F]=1,h.fromBufferAttribute(i,B),u.fromBufferAttribute(i,k),d.fromBufferAttribute(i,F),f.fromBufferAttribute(r,B),g.fromBufferAttribute(r,k),y.fromBufferAttribute(r,F),u.sub(h),d.sub(h),g.sub(f),y.sub(f);let V=1/(g.x*y.y-y.x*g.y);isFinite(V)&&(p.copy(u).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(V),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-y.x).multiplyScalar(V),o[B].add(p),o[k].add(p),o[F].add(p),l[B].add(m),l[k].add(m),l[F].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let B=0,k=M.length;B<k;++B){let F=M[B],V=F.start,Q=F.count;for(let U=V,G=V+Q;U<G;U+=3)_(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let x=new N,E=new N,C=new N,v=new N;function A(B){C.fromBufferAttribute(s,B),v.copy(C);let k=o[B];x.copy(k),x.sub(C.multiplyScalar(C.dot(k))).normalize(),E.crossVectors(v,k);let V=E.dot(l[B])<0?-1:1;a.setXYZW(B,x.x,x.y,x.z,V)}for(let B=0,k=i.count;B<k;++B)c[B]&&A(B);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new hi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),y=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new hi(d,h,u)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},$o=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sd,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Ou(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Ou(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Ou(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Ln()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var gi=new N,Ji=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?rc(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)gi.fromBufferAttribute(this,e),gi.applyMatrix4(t),this.setXYZ(e,gi.x,gi.y,gi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)gi.fromBufferAttribute(this,e),gi.applyNormalMatrix(t),this.setXYZ(e,gi.x,gi.y,gi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)gi.fromBufferAttribute(this,e),gi.transformDirection(t),this.setXYZ(e,gi.x,gi.y,gi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Or("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new hi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Or("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ld(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):cd(t,this.data.array)}},fh=new N,yg=new N,vg=new ae,_i=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=fh.subVectors(i,e).cross(yg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(fh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||vg.getNormalMatrix(t),s=this.coplanarPoint(fh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},xg=0,Tn=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=rr,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=Fh,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Io,this.stencilZFail=Io,this.stencilZPass=Io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new _e().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new _i().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new It().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Mn=new N,ph=new N,uo=new N,fo=new N,Gn=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ph.copy(t).add(e).multiplyScalar(.5),uo.copy(e).sub(t).normalize(),fo.copy(this.origin).sub(ph);let r=t.distanceTo(e)*.5,a=-this.direction.dot(uo),o=fo.dot(this.direction),l=-fo.dot(uo),c=fo.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ph).addScaledVector(uo,d),f}intersectSphere(t,e){if(t.radius<0)return null;Mn.subVectors(t.center,this.origin);let i=Mn.dot(this.direction),s=Mn.dot(Mn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,g=e.x-a.x,y=e.y-a.y,p=e.z-a.z,m=i.x-a.x,_=i.y-a.y,M=i.z-a.z,x=Math.abs(l),E=Math.abs(c),C=Math.abs(h),v,A,B,k,F,V,Q,U,G,tt,Y,ht;if(x>=E&&x>=C?(B=l,V=u,G=g,ht=m,l>=0?(v=c,A=h,k=d,F=f,Q=y,U=p,tt=_,Y=M):(v=h,A=c,k=f,F=d,Q=p,U=y,tt=M,Y=_)):E>=C?(B=c,V=d,G=y,ht=_,c>=0?(v=h,A=l,k=f,F=u,Q=p,U=g,tt=M,Y=m):(v=l,A=h,k=u,F=f,Q=g,U=p,tt=m,Y=M)):(B=h,V=f,G=p,ht=M,h>=0?(v=l,A=c,k=u,F=d,Q=g,U=y,tt=m,Y=_):(v=c,A=l,k=d,F=u,Q=y,U=g,tt=_,Y=m)),B===0)return null;let $=v/B,lt=A/B,dt=1/B,Ot=k-$*V,te=F-lt*V,nt=Q-$*G,Pt=U-lt*G,Vt=tt-$*ht,Jt=Y-lt*ht,Nt=Vt*Pt-Jt*nt,ne=Ot*Jt-te*Vt,Ne=nt*te-Pt*Ot;if(s){if(Nt<0||ne<0||Ne<0)return null}else if((Nt<0||ne<0||Ne<0)&&(Nt>0||ne>0||Ne>0))return null;let Qt=Nt+ne+Ne;if(Qt===0)return null;let xe=dt*(Nt*V+ne*G+Ne*ht);return(Qt>0?xe<0:xe>0)?null:this.at(xe/Qt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},An=class extends Tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Fu=new Pe,as=new Gn,po=new xi,Bu=new N,mo=new N,go=new N,_o=new N,mh=new N,yo=new N,zu=new N,vo=new N,Ve=class extends ti{constructor(t=new He,e=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){yo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(mh.fromBufferAttribute(u,t),a?yo.addScaledVector(mh,h):yo.addScaledVector(mh.sub(e),h))}e.add(yo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),as.copy(t.ray).recast(t.near),!(po.containsPoint(as.origin)===!1&&(as.intersectSphere(po,Bu)===null||as.origin.distanceToSquared(Bu)>(t.far-t.near)**2))&&(Fu.copy(r).invert(),as.copy(t.ray).applyMatrix4(Fu),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,as)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let p=d[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),M=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let x=_,E=M;x<E;x+=3){let C=o.getX(x),v=o.getX(x+1),A=o.getX(x+2);s=xo(this,m,t,i,c,h,u,C,v,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let _=o.getX(p),M=o.getX(p+1),x=o.getX(p+2);s=xo(this,a,t,i,c,h,u,_,M,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let p=d[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=_,E=M;x<E;x+=3){let C=x,v=x+1,A=x+2;s=xo(this,m,t,i,c,h,u,C,v,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let _=p,M=p+1,x=p+2;s=xo(this,a,t,i,c,h,u,_,M,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function bg(n,t,e,i,s,r,a,o){let l;if(t.side===bi?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Zn,o),l===null)return null;vo.copy(o),vo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(vo);return c<e.near||c>e.far?null:{distance:c,point:vo.clone(),object:n}}function xo(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,mo),n.getVertexPosition(l,go),n.getVertexPosition(c,_o);let h=bg(n,t,e,i,mo,go,_o,zu);if(h){let u=new N;Vn.getBarycoord(zu,mo,go,_o,u),s&&(h.uv=Vn.getInterpolatedAttribute(s,o,l,c,u,new It)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,o,l,c,u,new It)),a&&(h.normal=Vn.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new N,materialIndex:0};Vn.getNormal(mo,go,_o,d.normal),h.face=d,h.barycoord=u}return h}var Xo=class extends Ai{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ke,h=Ke,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var os=new xi,Mg=new It(.5,.5),bo=new N,Wn=class{constructor(t=new _i,e=new _i,i=new _i,s=new _i,r=new _i,a=new _i){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Hi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],y=r[9],p=r[10],m=r[11],_=r[12],M=r[13],x=r[14],E=r[15];if(s[0].setComponents(c-a,f-h,m-g,E-_).normalize(),s[1].setComponents(c+a,f+h,m+g,E+_).normalize(),s[2].setComponents(c+o,f+u,m+y,E+M).normalize(),s[3].setComponents(c-o,f-u,m-y,E-M).normalize(),i)s[4].setComponents(l,d,p,x).normalize(),s[5].setComponents(c-l,f-d,m-p,E-x).normalize();else if(s[4].setComponents(c-l,f-d,m-p,E-x).normalize(),e===Hi)s[5].setComponents(c+l,f+d,m+p,E+x).normalize();else if(e===Ws)s[5].setComponents(l,d,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(t){os.center.set(0,0,0);let e=Mg.distanceTo(t.center);return os.radius=.7071067811865476+e,os.applyMatrix4(t.matrixWorld),this.intersectsSphere(os)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(bo.x=s.normal.x>0?t.max.x:t.min.x,bo.y=s.normal.y>0?t.max.y:t.min.y,bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Hu=new Pe,qo=class n{constructor(){this.coordinateSystem=Hi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Hu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Wn),i[s].setFromProjectionMatrix(Hu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Wn),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var $n=class extends Tn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},jo=new N,Yo=new N,Vu=new Pe,Tr=new Gn,Mo=new xi,gh=new N,Gu=new N,Vr=class extends ti{constructor(t=new He,e=new $n){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)jo.fromBufferAttribute(e,s-1),Yo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=jo.distanceTo(Yo);t.setAttribute("lineDistance",new Me(i,1))}else Kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,t.ray.intersectsSphere(Mo)===!1)return;Vu.copy(s).invert(),Tr.copy(t.ray).applyMatrix4(Vu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,p=g-1;y<p;y+=c){let m=h.getX(y),_=h.getX(y+1),M=So(this,t,Tr,l,m,_,y);M&&e.push(M)}if(this.isLineLoop){let y=h.getX(g-1),p=h.getX(f),m=So(this,t,Tr,l,y,p,g-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,p=g-1;y<p;y+=c){let m=So(this,t,Tr,l,y,y+1,y);m&&e.push(m)}if(this.isLineLoop){let y=So(this,t,Tr,l,g-1,f,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function So(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(jo.fromBufferAttribute(o,s),Yo.fromBufferAttribute(o,r),e.distanceSqToSegment(jo,Yo,gh,Gu)>i)return;gh.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(gh);if(!(c<t.near||c>t.far))return{distance:c,point:Gu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Wu=new N,$u=new N,Zs=class extends Vr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Wu.fromBufferAttribute(e,s),$u.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Wu.distanceTo($u);t.setAttribute("lineDistance",new Me(i,1))}else Kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Gr=class extends Vr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var Wr=class extends Ai{constructor(t=[],e=fs,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Cn=class extends Ai{constructor(t,e,i=Qi,s,r,a,o=Ke,l=Ke,c,h=wn,u=1){if(h!==wn&&h!==Pn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},$r=class extends Cn{constructor(t,e=Qi,i=fs,s,r,a=Ke,o=Ke,l,c=wn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xr=class extends Ai{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Js=class n extends He{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2));function g(y,p,m,_,M,x,E,C,v,A,B){let k=x/v,F=E/A,V=x/2,Q=E/2,U=C/2,G=v+1,tt=A+1,Y=0,ht=0,$=new N;for(let lt=0;lt<tt;lt++){let dt=lt*F-Q;for(let Ot=0;Ot<G;Ot++){let te=Ot*k-V;$[y]=te*_,$[p]=dt*M,$[m]=U,c.push($.x,$.y,$.z),$[y]=0,$[p]=0,$[m]=C>0?1:-1,h.push($.x,$.y,$.z),u.push(Ot/v),u.push(1-lt/A),Y+=1}}for(let lt=0;lt<A;lt++)for(let dt=0;dt<v;dt++){let Ot=d+dt+G*lt,te=d+dt+G*(lt+1),nt=d+(dt+1)+G*(lt+1),Pt=d+(dt+1)+G*lt;l.push(Ot,te,Pt),l.push(te,nt,Pt),ht+=6}o.addGroup(f,ht,B),f+=ht,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Zo=class n extends He{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],p=i/2,m=0;_(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function _(){let x=new N,E=new N,C=0,v=(e-t)/i;for(let A=0;A<=r;A++){let B=[],k=A/r,F=k*(e-t)+t;for(let V=0;V<=s;V++){let Q=V/s,U=Q*l+o,G=Math.sin(U),tt=Math.cos(U);E.x=F*G,E.y=-k*i+p,E.z=F*tt,u.push(E.x,E.y,E.z),x.set(G,v,tt).normalize(),d.push(x.x,x.y,x.z),f.push(Q,1-k),B.push(g++)}y.push(B)}for(let A=0;A<s;A++)for(let B=0;B<r;B++){let k=y[B][A],F=y[B+1][A],V=y[B+1][A+1],Q=y[B][A+1];(t>0||B!==0)&&(h.push(k,F,Q),C+=3),(e>0||B!==r-1)&&(h.push(F,V,Q),C+=3)}c.addGroup(m,C,0),m+=C}function M(x){let E=g,C=new It,v=new N,A=0,B=x===!0?t:e,k=x===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,p*k,0),d.push(0,k,0),f.push(.5,.5),g++;let F=g;for(let V=0;V<=s;V++){let U=V/s*l+o,G=Math.cos(U),tt=Math.sin(U);v.x=B*tt,v.y=p*k,v.z=B*G,u.push(v.x,v.y,v.z),d.push(0,k,0),C.x=G*.5+.5,C.y=tt*.5*k+.5,f.push(C.x,C.y),g++}for(let V=0;V<s;V++){let Q=E+V,U=F+V;x===!0?h.push(U,U+1,Q):h.push(U+1,U,Q),A+=3}c.addGroup(m,A,x===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qr=class n extends Zo{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new It:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new N,s=[],r=[],a=[],o=new N,l=new Pe;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(re(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(re(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ks=class extends Ni{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new It){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Jo=class extends Ks{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function hd(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Xu=new N,qu=new N,_h=new hd,yh=new hd,vh=new hd,Ko=class extends Ni{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new N){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(qu.subVectors(s[0],s[1]).add(s[0]),c=qu);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Xu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),_h.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,p),yh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,p),vh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(_h.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),yh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),vh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(_h.calc(l),yh.calc(l),vh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ju(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Sg(n,t){let e=1-n;return e*e*t}function wg(n,t){return 2*(1-n)*n*t}function Eg(n,t){return n*n*t}function Ir(n,t,e,i){return Sg(n,t)+wg(n,e)+Eg(n,i)}function Tg(n,t){let e=1-n;return e*e*e*t}function Ag(n,t){let e=1-n;return 3*e*e*n*t}function Cg(n,t){return 3*(1-n)*n*n*t}function Rg(n,t){return n*n*n*t}function Lr(n,t,e,i,s){return Tg(n,t)+Ag(n,e)+Cg(n,i)+Rg(n,s)}var jr=class extends Ni{constructor(t=new It,e=new It,i=new It,s=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new It){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Lr(t,s.x,r.x,a.x,o.x),Lr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qo=class extends Ni{constructor(t=new N,e=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Lr(t,s.x,r.x,a.x,o.x),Lr(t,s.y,r.y,a.y,o.y),Lr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Yr=class extends Ni{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tl=class extends Ni{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zr=class extends Ni{constructor(t=new It,e=new It,i=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new It){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ir(t,s.x,r.x,a.x),Ir(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},el=class extends Ni{constructor(t=new N,e=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ir(t,s.x,r.x,a.x),Ir(t,s.y,r.y,a.y),Ir(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jr=class extends Ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(ju(o,l.x,c.x,h.x,u.x),ju(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new It().fromArray(s))}return this}},Yu=Object.freeze({__proto__:null,ArcCurve:Jo,CatmullRomCurve3:Ko,CubicBezierCurve:jr,CubicBezierCurve3:Qo,EllipseCurve:Ks,LineCurve:Yr,LineCurve3:tl,QuadraticBezierCurve:Zr,QuadraticBezierCurve3:el,SplineCurve:Jr}),il=class extends Ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yu[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Yu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ls=class extends il{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Yr(this.currentPoint.clone(),new It(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Zr(this.currentPoint.clone(),new It(t,e),new It(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new jr(this.currentPoint.clone(),new It(t,e),new It(i,s),new It(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Jr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new Ks(t,e,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Qs=class extends ls{constructor(t){super(t),this.uuid=Ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new ls().fromJSON(s))}return this}};function Pg(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=jf(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Ng(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,u=l;for(let d=e;d<s;d+=e){let f=n[d],g=n[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Kr(r,a,e,o,l,c,0),a}function jf(n,t,e,i,s){let r;if(s===Xg(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Zu(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Zu(a/i|0,n[a],n[a+1],r);return r&&tr(r,r.next)&&(ta(r),r=r.next),r}function cs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(tr(e,e.next)||Ue(e.prev,e,e.next)===0)){if(ta(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Kr(n,t,e,i,s,r,a){if(!n)return;!a&&r&&zg(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Lg(n,i,s,r):Ig(n)){t.push(l.i,n.i,c.i),ta(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=kg(cs(n),t),Kr(n,t,e,i,s,r,2)):a===2&&Dg(n,t,e,i,s,r):Kr(cs(n),t,e,i,s,r,1);break}}}function Ig(n){let t=n.prev,e=n,i=n.next;if(Ue(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ar(s,o,r,l,a,c,g.x,g.y)&&Ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lg(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Ue(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),y=Math.max(o,l,c),p=Math.max(h,u,d),m=Th(f,g,t,e,i),_=Th(y,p,t,e,i),M=n.prevZ,x=n.nextZ;for(;M&&M.z>=m&&x&&x.z<=_;){if(M.x>=f&&M.x<=y&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&Ar(o,h,l,u,c,d,M.x,M.y)&&Ue(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=y&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&Ar(o,h,l,u,c,d,x.x,x.y)&&Ue(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=y&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&Ar(o,h,l,u,c,d,M.x,M.y)&&Ue(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&Ar(o,h,l,u,c,d,x.x,x.y)&&Ue(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function kg(n,t){let e=n;do{let i=e.prev,s=e.next.next;!tr(i,s)&&Zf(i,e,e.next,s)&&Qr(i,s)&&Qr(s,i)&&(t.push(i.i,e.i,s.i),ta(e),ta(e.next),e=n=s),e=e.next}while(e!==n);return cs(e)}function Dg(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gg(a,o)){let l=Jf(a,o);a=cs(a,a.next),l=cs(l,l.next),Kr(a,t,e,i,s,r,0),Kr(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Ng(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=jf(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Vg(c))}s.sort(Ug);for(let r=0;r<s.length;r++)e=Og(s[r],e);return e}function Ug(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Og(n,t){let e=Fg(n,t);if(!e)return t;let i=Jf(e,n);return cs(i,i.next),cs(e,e.next)}function Fg(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(tr(n,e))return e;do{if(tr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Yf(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);Qr(e,n)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Bg(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Bg(n,t){return Ue(n.prev,n,t.prev)<0&&Ue(t.next,n,n.next)<0}function zg(n,t,e,i){let s=n;do s.z===0&&(s.z=Th(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Hg(s)}function Hg(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Th(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Vg(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Yf(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Ar(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Yf(n,t,e,i,s,r,a,o)}function Gg(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Wg(n,t)&&(Qr(n,t)&&Qr(t,n)&&$g(n,t)&&(Ue(n.prev,n,t.prev)||Ue(n,t.prev,t))||tr(n,t)&&Ue(n.prev,n,n.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function tr(n,t){return n.x===t.x&&n.y===t.y}function Zf(n,t,e,i){let s=Eo(Ue(n,t,e)),r=Eo(Ue(n,t,i)),a=Eo(Ue(e,i,n)),o=Eo(Ue(e,i,t));return!!(s!==r&&a!==o||s===0&&wo(n,e,t)||r===0&&wo(n,i,t)||a===0&&wo(e,n,i)||o===0&&wo(e,t,i))}function wo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Eo(n){return n>0?1:n<0?-1:0}function Wg(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Zf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Qr(n,t){return Ue(n.prev,n,n.next)<0?Ue(n,t,n.next)>=0&&Ue(n,n.prev,t)>=0:Ue(n,t,n.prev)<0||Ue(n,n.next,t)<0}function $g(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Jf(n,t){let e=Ah(n.i,n.x,n.y),i=Ah(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Zu(n,t,e,i){let s=Ah(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ta(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ah(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xg(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Ch=class{static triangulate(t,e,i=2){return Pg(t,e,i)}},Vs=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Ju(t),Ku(i,t);let a=t.length;e.forEach(Ju);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Ku(i,e[l]);let o=Ch.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ju(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ku(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var ea=class n extends He{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let _=m*d-a;for(let M=0;M<c;M++){let x=M*u-r;g.push(x,-_,0),y.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let M=_+c*m,x=_+c*(m+1),E=_+1+c*(m+1),C=_+1+c*m;f.push(M,x,C),f.push(x,E,C)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(y,3)),this.setAttribute("uv",new Me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var ia=class n extends He{constructor(t=new Qs([new It(0,.5),new It(-.5,-.5),new It(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Me(s,3)),this.setAttribute("normal",new Me(r,3)),this.setAttribute("uv",new Me(a,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;Vs.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let _=g[p];Vs.isClockWise(_)===!0&&(g[p]=_.reverse())}let y=Vs.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let _=g[p];f=f.concat(_)}for(let p=0,m=f.length;p<m;p++){let _=f[p];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let p=0,m=y.length;p<m;p++){let _=y[p],M=_[0]+u,x=_[1]+u,E=_[2]+u;i.push(M,x,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return qg(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};function qg(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var na=class n extends He{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new N,d=new N,f=[],g=[],y=[],p=[];for(let m=0;m<=i;m++){let _=[],M=m/i,x=a+M*o,E=t*Math.cos(x),C=Math.sqrt(t*t-E*E),v=0;m===0&&a===0?v=.5/e:m===i&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){let B=A/e,k=s+B*r;u.x=-C*Math.cos(k),u.y=E,u.z=C*Math.sin(k),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),p.push(B+v,1-M),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<e;_++){let M=h[m][_+1],x=h[m][_],E=h[m+1][_],C=h[m+1][_+1];(m!==0||a>0)&&f.push(M,x,C),(m!==i-1||l<Math.PI)&&f.push(x,E,C)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(y,3)),this.setAttribute("uv",new Me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var sa=class extends He{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,s=new N,r=new N;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let g=d,y=d+f;g<y;g+=3)for(let p=0;p<3;p++){let m=o.getX(g+p),_=o.getX(g+(p+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,_),Qu(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Qu(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Me(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Qu(n,t,e){let i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}function ms(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(tf(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(tf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function ui(n){let t={};for(let e=0;e<n.length;e++){let i=ms(n[e]);for(let s in i)t[s]=i[s]}return t}function tf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function jg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function dd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}var Sa={clone:ms,merge:ui},Yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vi=class extends Tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yg,this.fragmentShader=Zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=jg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new _e().setHex(s.value);break;case"v2":this.uniforms[i].value=new It().fromArray(s.value);break;case"v3":this.uniforms[i].value=new N().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ae().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ae().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Pe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},nl=class extends Vi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ra=class extends Tn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sc,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var sl=class extends Tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rl=class extends Tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Us(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function To(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Xn=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];t:{e:{let a;i:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break e}a=e.length;break i}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break e}a=i,i=0;break i}break t}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},al=class extends Xn{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sh,endingEnd:Sh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case wh:r=t,o=2*e-i;break;case Eh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case wh:a=t,l=2*i-e;break;case Eh:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),y=g*g,p=y*g,m=-d*p+2*d*y-d*g,_=(1+d)*p+(-1.5-2*d)*y+(-.5+d)*g+1,M=(-1-f)*p+(1.5+f)*y+.5*g,x=f*p-f*y;for(let E=0;E!==o;++E)r[E]=m*a[h+E]+_*a[c+E]+M*a[l+E]+x*a[u+E];return r}},ol=class extends Xn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},ll=class extends Xn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},cl=class extends Xn{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-e)/(s-e),y=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*y+a[l+p]*g;return r}let d=o*2,f=t-1;for(let g=0;g!==o;++g){let y=a[c+g],p=a[l+g],m=f*d+g*2,_=u[m],M=u[m+1],x=t*d+g*2,E=h[x],C=h[x+1],v=Kg(i,e,_,E,s);r[g]=Kf(v,y,M,C,p)}return r}};function Kf(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Jg(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Kg(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Kf(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Jg(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ui=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Us(e,this.TimeBufferType),this.values=Us(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Us(t.times,Array),values:Us(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),To(t.settings)&&(i.settings={inTangents:Us(t.settings.inTangents,Array),outTangents:Us(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new cl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case kr:e=this.InterpolantFactoryMethodDiscrete;break;case Ho:e=this.InterpolantFactoryMethodLinear;break;case Po:e=this.InterpolantFactoryMethodSmooth;break;case Mh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Kt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return Ho;case this.InterpolantFactoryMethodSmooth:return Po;case this.InterpolantFactoryMethodBezier:return Mh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;To(this.settings)&&(ef(this.settings.inTangents,t),ef(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;To(this.settings)&&(nf(this.settings.inTangents,t),nf(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ie("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ie("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ie("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ie("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Gm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ie("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Po,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,To(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ef(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function nf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Ui.prototype.ValueTypeName="";Ui.prototype.TimeBufferType=Float32Array;Ui.prototype.ValueBufferType=Float32Array;Ui.prototype.DefaultInterpolation=Ho;var qn=class extends Ui{constructor(t,e,i){super(t,e,i)}};qn.prototype.ValueTypeName="bool";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=kr;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends Ui{constructor(t,e,i,s){super(t,e,i,s)}};hl.prototype.ValueTypeName="color";var dl=class extends Ui{constructor(t,e,i,s){super(t,e,i,s)}};dl.prototype.ValueTypeName="number";var ul=class extends Xn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)ki.slerpFlat(r,0,a,c-o,a,c,l);return r}},aa=class extends Ui{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}};aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;var jn=class extends Ui{constructor(t,e,i){super(t,e,i)}};jn.prototype.ValueTypeName="string";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=kr;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends Ui{constructor(t,e,i,s){super(t,e,i,s)}};fl.prototype.ValueTypeName="vector";var pl=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qf=new pl,ml=class{constructor(t){this.manager=t!==void 0?t:Qf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var oa=class extends ti{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},la=class extends oa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},xh=new Pe,sf=new N,rf=new N,gl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=Ci,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wn,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;sf.setFromMatrixPosition(t.matrixWorld),e.position.copy(sf),rf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){xh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(xh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ws||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(xh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ao=new N,Co=new ki,hn=new N,ca=class extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ao,Co,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,Co,hn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ao,Co,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,Co,hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hn=new N,af=new It,of=new It,yi=class extends ca{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z)}getViewSize(t,e){return this.getViewBounds(t,af,of),e.subVectors(of,af)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Rr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var hs=class extends ca{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rh=class extends gl{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ha=class extends oa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.shadow=new Rh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var da=class extends He{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Os=-90,Fs=1,er=class extends ti{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yi(Os,Fs,t,e);s.layers=this.layers,this.add(s);let r=new yi(Os,Fs,t,e);r.layers=this.layers,this.add(r);let a=new yi(Os,Fs,t,e);a.layers=this.layers,this.add(a);let o=new yi(Os,Fs,t,e);o.layers=this.layers,this.add(o);let l=new yi(Os,Fs,t,e);l.layers=this.layers,this.add(l);let c=new yi(Os,Fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},_l=class extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ud="\\[\\]\\.:\\/",Qg=new RegExp("["+ud+"]","g"),fd="[^"+ud+"]",t_="[^"+ud.replace("\\.","")+"]",e_=/((?:WC+[\/:])*)/.source.replace("WC",fd),i_=/(WCOD+)?/.source.replace("WCOD",t_),n_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fd),s_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fd),r_=new RegExp("^"+e_+i_+n_+s_+"$"),a_=["material","materials","bones","map"],Ph=class{constructor(t,e,i){let s=i||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},De=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qg,"")}static parseTrackName(t){let e=r_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);a_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ie("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=Ph;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DM=new Float32Array(1);var Yn=class extends $o{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var lf=new Pe,ir=class{constructor(t,e,i=0,s=1/0){this.ray=new Gn(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return lf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lf),this}intersectObject(t,e=!0,i=[]){return Ih(t,this,i,e),i.sort(cf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ih(t[s],this,i,e);return i.sort(cf),i}};function cf(n,t){return n.distance-t.distance}function Ih(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Ih(r[a],t,e,!0)}}var nr=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=re(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var vd=class vd{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};vd.prototype.isMatrix2=!0;var Lh=vd;var hf=new N,Ro=new N,Bs=new N,zs=new N,bh=new N,o_=new N,l_=new N,ua=class{constructor(t=new N,e=new N){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){hf.subVectors(t,this.start),Ro.subVectors(this.end,this.start);let i=Ro.dot(Ro);if(i===0)return 0;let r=Ro.dot(hf)/i;return e&&(r=re(r,0,1)),r}closestPointToPoint(t,e,i){let s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=o_,i=l_){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;Bs.subVectors(c,o),zs.subVectors(h,l),bh.subVectors(o,l);let u=Bs.dot(Bs),d=zs.dot(zs),f=zs.dot(bh);if(u<=s&&d<=s)return e.copy(o),i.copy(l),e.distanceToSquared(i);if(u<=s)r=0,a=f/d,a=re(a,0,1);else{let g=Bs.dot(bh);if(d<=s)a=0,r=re(-g/u,0,1);else{let y=Bs.dot(zs),p=u*d-y*y;p!==0?r=re((y*f-g*d)/p,0,1):r=0,a=(y*r+f)/d,a<0?(a=0,r=re(-g/u,0,1)):a>1&&(a=1,r=re((y-g)/u,0,1))}}return e.copy(o).addScaledVector(Bs,r),i.copy(l).addScaledVector(zs,a),e.distanceToSquared(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var fa=class extends Zi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function pd(n,t,e,i){let s=c_(i);switch(e){case Kh:return n*t;case td:return n*t/s.components*s.byteLength;case El:return n*t/s.components*s.byteLength;case Jn:return n*t*2/s.components*s.byteLength;case Tl:return n*t*2/s.components*s.byteLength;case Qh:return n*t*3/s.components*s.byteLength;case nn:return n*t*4/s.components*s.byteLength;case Al:return n*t*4/s.components*s.byteLength;case ga:case _a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ya:case va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Rl:case Il:return Math.max(n,16)*Math.max(t,8)/4;case Cl:case Pl:return Math.max(n,8)*Math.max(t,8)/2;case Ll:case kl:case Nl:case Ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Dl:case xa:case Ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case zl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case $l:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ql:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case jl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Kl:case Ql:case tc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ec:case ic:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ba:case nc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function c_(n){switch(n){case Ci:case jh:return{byteLength:1,components:1};case or:case Yh:case en:return{byteLength:2,components:1};case Sl:case wl:return{byteLength:2,components:4};case Qi:case Ml:case tn:return{byteLength:4,components:1};case Zh:case Jh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function bp(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function d_(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var u_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,p_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,__=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,v_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,b_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,E_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,T_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,L_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,k_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,D_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,N_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,U_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,O_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H_="gl_FragColor = linearToOutputTexel( gl_FragColor );",V_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,X_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,j_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,n0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,s0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,c0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,d0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,p0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,b0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,C0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,P0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,D0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,N0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,H0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Z0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,J0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ty=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ey=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ny=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ry=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ay=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,My=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ey=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ty=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ay=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ry=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Py=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ly=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ky=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ny=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:u_,alphahash_pars_fragment:f_,alphamap_fragment:p_,alphamap_pars_fragment:m_,alphatest_fragment:g_,alphatest_pars_fragment:__,aomap_fragment:y_,aomap_pars_fragment:v_,batching_pars_vertex:x_,batching_vertex:b_,begin_vertex:M_,beginnormal_vertex:S_,bsdfs:w_,iridescence_fragment:E_,bumpmap_pars_fragment:T_,clipping_planes_fragment:A_,clipping_planes_pars_fragment:C_,clipping_planes_pars_vertex:R_,clipping_planes_vertex:P_,color_fragment:I_,color_pars_fragment:L_,color_pars_vertex:k_,color_vertex:D_,common:N_,defaultnormal_vertex:U_,displacementmap_pars_vertex:O_,displacementmap_vertex:F_,emissivemap_fragment:B_,emissivemap_pars_fragment:z_,colorspace_fragment:H_,colorspace_pars_fragment:V_,envmap_fragment:G_,envmap_common_pars_fragment:W_,envmap_pars_fragment:$_,envmap_pars_vertex:X_,envmap_physical_pars_fragment:n0,envmap_vertex:q_,fog_vertex:j_,fog_pars_vertex:Y_,fog_fragment:Z_,fog_pars_fragment:J_,gradientmap_pars_fragment:K_,lightmap_pars_fragment:Q_,lights_lambert_fragment:t0,lights_lambert_pars_fragment:e0,lights_pars_begin:i0,lights_toon_fragment:s0,lights_toon_pars_fragment:r0,lights_phong_fragment:a0,lights_phong_pars_fragment:o0,lights_physical_fragment:l0,lights_physical_pars_fragment:c0,lights_fragment_begin:h0,lights_fragment_maps:d0,lights_fragment_end:u0,lightprobes_pars_fragment:f0,logdepthbuf_fragment:p0,logdepthbuf_pars_fragment:m0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:_0,map_fragment:y0,map_pars_fragment:v0,map_particle_fragment:x0,map_particle_pars_fragment:b0,metalnessmap_fragment:M0,metalnessmap_pars_fragment:S0,morphinstance_vertex:w0,morphcolor_vertex:E0,morphnormal_vertex:T0,morphtarget_pars_vertex:A0,morphtarget_vertex:C0,normal_fragment_begin:R0,normal_fragment_maps:P0,normal_pars_fragment:I0,normal_pars_vertex:L0,normal_vertex:k0,normalmap_pars_fragment:D0,clearcoat_normal_fragment_begin:N0,clearcoat_normal_fragment_maps:U0,clearcoat_pars_fragment:O0,iridescence_pars_fragment:F0,opaque_fragment:B0,packing:z0,premultiplied_alpha_fragment:H0,project_vertex:V0,dithering_fragment:G0,dithering_pars_fragment:W0,roughnessmap_fragment:$0,roughnessmap_pars_fragment:X0,shadowmap_pars_fragment:q0,shadowmap_pars_vertex:j0,shadowmap_vertex:Y0,shadowmask_pars_fragment:Z0,skinbase_vertex:J0,skinning_pars_vertex:K0,skinning_vertex:Q0,skinnormal_vertex:ty,specularmap_fragment:ey,specularmap_pars_fragment:iy,tonemapping_fragment:ny,tonemapping_pars_fragment:sy,transmission_fragment:ry,transmission_pars_fragment:ay,uv_pars_fragment:oy,uv_pars_vertex:ly,uv_vertex:cy,worldpos_vertex:hy,background_vert:dy,background_frag:uy,backgroundCube_vert:fy,backgroundCube_frag:py,cube_vert:my,cube_frag:gy,depth_vert:_y,depth_frag:yy,distance_vert:vy,distance_frag:xy,equirect_vert:by,equirect_frag:My,linedashed_vert:Sy,linedashed_frag:wy,meshbasic_vert:Ey,meshbasic_frag:Ty,meshlambert_vert:Ay,meshlambert_frag:Cy,meshmatcap_vert:Ry,meshmatcap_frag:Py,meshnormal_vert:Iy,meshnormal_frag:Ly,meshphong_vert:ky,meshphong_frag:Dy,meshphysical_vert:Ny,meshphysical_frag:Uy,meshtoon_vert:Oy,meshtoon_frag:Fy,points_vert:By,points_frag:zy,shadow_vert:Hy,shadow_frag:Vy,sprite_vert:Gy,sprite_frag:Wy},kt={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},Si={basic:{uniforms:ui([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:ui([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new _e(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:ui([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:ui([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:ui([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new _e(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:ui([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:ui([kt.points,kt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:ui([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:ui([kt.common,kt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:ui([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:ui([kt.sprite,kt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:ui([kt.common,kt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:ui([kt.lights,kt.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Si.physical={uniforms:ui([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};var ac={r:0,b:0,g:0},$y=new Pe,Mp=new ae;Mp.set(-1,0,0,0,1,0,0,0,1);function Xy(n,t,e,i,s,r){let a=new _e(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let x=_.backgroundBlurriness>0;M=t.get(M,x)}return M}function g(_){let M=!1,x=f(_);x===null?p(a,o):x&&x.isColor&&(p(x,1),M=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(_,M){let x=f(M);x&&x.isCubeTexture?(c===void 0&&(c=new Ve(new Js(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:ms(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($y.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Mp),c.material.toneMapped=ye.getTransfer(x.colorSpace)!==Te,(h!==x||u!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ve(new ea(2,2),new Vi({name:"BackgroundMaterial",uniforms:ms(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ye.getTransfer(x.colorSpace)!==Te,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,M){_.getRGB(ac,dd(n)),e.buffers.color.setClear(ac.r,ac.g,ac.b,M,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(a,o)},render:g,addToRenderList:y,dispose:m}}function qy(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(F,V,Q,U,G){let tt=!1,Y=u(F,U,Q,V);r!==Y&&(r=Y,c(r.object)),tt=f(F,U,Q,G),tt&&g(F,U,Q,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(tt||a)&&(a=!1,x(F,V,Q,U),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function h(F){return n.deleteVertexArray(F)}function u(F,V,Q,U){let G=U.wireframe===!0,tt=i[V.id];tt===void 0&&(tt={},i[V.id]=tt);let Y=F.isInstancedMesh===!0?F.id:0,ht=tt[Y];ht===void 0&&(ht={},tt[Y]=ht);let $=ht[Q.id];$===void 0&&($={},ht[Q.id]=$);let lt=$[G];return lt===void 0&&(lt=d(l()),$[G]=lt),lt}function d(F){let V=[],Q=[],U=[];for(let G=0;G<e;G++)V[G]=0,Q[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Q,attributeDivisors:U,object:F,attributes:{},index:null}}function f(F,V,Q,U){let G=r.attributes,tt=V.attributes,Y=0,ht=Q.getAttributes();for(let $ in ht)if(ht[$].location>=0){let dt=G[$],Ot=tt[$];if(Ot===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(Ot=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(Ot=F.instanceColor)),dt===void 0||dt.attribute!==Ot||Ot&&dt.data!==Ot.data)return!0;Y++}return r.attributesNum!==Y||r.index!==U}function g(F,V,Q,U){let G={},tt=V.attributes,Y=0,ht=Q.getAttributes();for(let $ in ht)if(ht[$].location>=0){let dt=tt[$];dt===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(dt=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(dt=F.instanceColor));let Ot={};Ot.attribute=dt,dt&&dt.data&&(Ot.data=dt.data),G[$]=Ot,Y++}r.attributes=G,r.attributesNum=Y,r.index=U}function y(){let F=r.newAttributes;for(let V=0,Q=F.length;V<Q;V++)F[V]=0}function p(F){m(F,0)}function m(F,V){let Q=r.newAttributes,U=r.enabledAttributes,G=r.attributeDivisors;Q[F]=1,U[F]===0&&(n.enableVertexAttribArray(F),U[F]=1),G[F]!==V&&(n.vertexAttribDivisor(F,V),G[F]=V)}function _(){let F=r.newAttributes,V=r.enabledAttributes;for(let Q=0,U=V.length;Q<U;Q++)V[Q]!==F[Q]&&(n.disableVertexAttribArray(Q),V[Q]=0)}function M(F,V,Q,U,G,tt,Y){Y===!0?n.vertexAttribIPointer(F,V,Q,G,tt):n.vertexAttribPointer(F,V,Q,U,G,tt)}function x(F,V,Q,U){y();let G=U.attributes,tt=Q.getAttributes(),Y=V.defaultAttributeValues;for(let ht in tt){let $=tt[ht];if($.location>=0){let lt=G[ht];if(lt===void 0&&(ht==="instanceMatrix"&&F.instanceMatrix&&(lt=F.instanceMatrix),ht==="instanceColor"&&F.instanceColor&&(lt=F.instanceColor)),lt!==void 0){let dt=lt.normalized,Ot=lt.itemSize,te=t.get(lt);if(te===void 0)continue;let nt=te.buffer,Pt=te.type,Vt=te.bytesPerElement,Jt=Pt===n.INT||Pt===n.UNSIGNED_INT||lt.gpuType===Ml;if(lt.isInterleavedBufferAttribute){let Nt=lt.data,ne=Nt.isInterleavedBuffer===!0?Nt.stride:Nt.itemSize,Ne=lt.offset;if(Nt.isInstancedInterleavedBuffer||Nt.isInstancedBufferAttribute){for(let Qt=0;Qt<$.locationSize;Qt++)m($.location+Qt,Nt.meshPerAttribute);F.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let Qt=0;Qt<$.locationSize;Qt++)p($.location+Qt);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Qt=0;Qt<$.locationSize;Qt++)M($.location+Qt,Ot/$.locationSize,Pt,dt,ne*Vt,(Ne+Ot/$.locationSize*Qt)*Vt,Jt)}else{if(lt.isInstancedBufferAttribute){for(let Nt=0;Nt<$.locationSize;Nt++)m($.location+Nt,lt.meshPerAttribute);F.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Nt=0;Nt<$.locationSize;Nt++)p($.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Nt=0;Nt<$.locationSize;Nt++)M($.location+Nt,Ot/$.locationSize,Pt,dt,Ot*Vt,Ot/$.locationSize*Nt*Vt,Jt)}}else if(Y!==void 0){let dt=Y[ht];if(dt!==void 0)switch(dt.length){case 2:n.vertexAttrib2fv($.location,dt);break;case 3:n.vertexAttrib3fv($.location,dt);break;case 4:n.vertexAttrib4fv($.location,dt);break;default:n.vertexAttrib1fv($.location,dt)}}}}_()}function E(){B();for(let F in i){let V=i[F];for(let Q in V){let U=V[Q];for(let G in U){let tt=U[G];for(let Y in tt)h(tt[Y].object),delete tt[Y];delete U[G]}}delete i[F]}}function C(F){if(i[F.id]===void 0)return;let V=i[F.id];for(let Q in V){let U=V[Q];for(let G in U){let tt=U[G];for(let Y in tt)h(tt[Y].object),delete tt[Y];delete U[G]}}delete i[F.id]}function v(F){for(let V in i){let Q=i[V];for(let U in Q){let G=Q[U];if(G[F.id]===void 0)continue;let tt=G[F.id];for(let Y in tt)h(tt[Y].object),delete tt[Y];delete G[F.id]}}}function A(F){for(let V in i){let Q=i[V],U=F.isInstancedMesh===!0?F.id:0,G=Q[U];if(G!==void 0){for(let tt in G){let Y=G[tt];for(let ht in Y)h(Y[ht].object),delete Y[ht];delete G[tt]}delete Q[U],Object.keys(Q).length===0&&delete i[V]}}}function B(){k(),a=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:k,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfObject:A,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:p,disableUnusedAttributes:_}}function jy(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Yy(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==nn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let A=v===en&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==Ci&&v!==tn&&!A&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Kt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:x,maxSamples:E,samples:C}}function Zy(n){let t=this,e=null,i=0,s=!1,r=!1,a=new _i,o=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let _=r?0:i,M=_*4,x=m.clippingState||null;l.value=x,x=h(g,d,M,f);for(let E=0;E!==M;++E)x[E]=e[E];m.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=f+y*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,x=f;M!==y;++M,x+=4)a.copy(u[M]).applyMatrix4(_,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var Ta=class extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Wr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Js(5,5,5),r=new Vi({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bi,blending:ds});r.uniforms.tEquirect.value=e;let a=new Ve(s,r),o=e.minFilter;return e.minFilter===Rn&&(e.minFilter=vi),new er(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},tp=256,Jy=3,Ky=20,Sp=256,wp=16,Qy=3,tv=new N,ev=new _e,lc=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new er(1,10,null),this._boxMesh=new Ve(new Js(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=tv}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(ev));let p=new er(i,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=np(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(tp,od(t))}_fromTexture(t,e){t.mapping===fs||t.mapping===ar?this._setSize(t.image.length===0?tp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=ep(t,!1,!1),i=Math.log2(t)-Jy;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=ep(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===fs||t.mapping===ar?(this._cubemapMaterial===null&&(this._cubemapMaterial=np()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ip()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=iv(),this._integrationMaterial=nv());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/wp);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Qy)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Sp*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=sv());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function ep(n,t,e){return new Ta(n,{minFilter:Rn,generateMipmaps:t,type:en,colorSpace:Dr,depthBuffer:e})}function Aa(n,t,e){return new Vi({name:n,uniforms:t,vertexShader:pe.cube_vert,fragmentShader:e,side:bi,blending:ds,depthTest:!1,depthWrite:!1})}function iv(){return Aa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Sp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function nv(){return Aa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:wp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function sv(){return Aa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ky}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ip(){return Aa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function np(){return Aa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function rv(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===vl||f===xl)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new Ta(g.height);return y.fromEquirectangularTexture(n,d),t.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===vl||f===xl,y=f===fs||f===ar;if(g||y){let p=e.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new lc(n)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let _=d.image;return g&&_&&_.height>0||y&&_&&l(_)?(i===null&&(i=new lc(n)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===vl?d.mapping=fs:f===xl&&(d.mapping=ar),d}function l(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function av(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Cr("WebGLRenderer: "+i+" extension not supported."),s}}}function ov(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(t.remove(y),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(g){let y=g.attributes;for(let p in y)t.update(y[p],n.ARRAY_BUFFER)}function u(g){let y=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let _=y!==null?y.array.length:p.array.length/3-1,M=p.count>=65535?Hr:zr,x=new M(Math.ceil(_/3)*6,1),E=x.array;if(y!==null){let v=y.array;m=y.version;for(let A=0,B=0;A<_;A+=3){let k=v[A+0],F=v[A+1],V=v[A+2];E[B++]=k,E[B++]=F,E[B++]=F,E[B++]=V,E[B++]=V,E[B++]=k}}else{m=p.version;for(let v=0,A=0;v<_;v+=3){let B=v+0,k=v+1,F=v+2;E[A++]=B,E[A++]=k,E[A++]=k,E[A++]=F,E[A++]=F,E[A++]=B}}x.version=m;let C=r.get(g);C&&t.remove(C),r.set(g,x)}function d(g){let y=r.get(g);if(y){let p=g.index;p!==null&&y.version<p.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function lv(n,t,e){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*a),e.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*a,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let y=0;for(let p=0;p<f;p++)y+=d[p];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function cv(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function hv(n,t,e){let i=new WeakMap,s=new Ae;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let B=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",B)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let x=o.attributes.position.count*M,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let C=new Float32Array(x*E*4*u),v=new Fr(C,x,E,u);v.type=tn,v.needsUpdate=!0;let A=M*4;for(let k=0;k<u;k++){let F=p[k],V=m[k],Q=_[k],U=x*E*4*k;for(let G=0;G<F.count;G++){let tt=G*A;f===!0&&(s.fromBufferAttribute(F,G),C[U+tt+0]=s.x,C[U+tt+1]=s.y,C[U+tt+2]=s.z,C[U+tt+3]=0),g===!0&&(s.fromBufferAttribute(V,G),C[U+tt+4]=s.x,C[U+tt+5]=s.y,C[U+tt+6]=s.z,C[U+tt+7]=0),y===!0&&(s.fromBufferAttribute(Q,G),C[U+tt+8]=s.x,C[U+tt+9]=s.y,C[U+tt+10]=s.z,C[U+tt+11]=Q.itemSize===4?s.w:1)}}d={count:u,texture:v,size:new It(x,E)},i.set(o,d),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function dv(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var uv={[zh]:"LINEAR_TONE_MAPPING",[Hh]:"REINHARD_TONE_MAPPING",[Vh]:"CINEON_TONE_MAPPING",[Gh]:"ACES_FILMIC_TONE_MAPPING",[$h]:"AGX_TONE_MAPPING",[Xh]:"NEUTRAL_TONE_MAPPING",[Wh]:"CUSTOM_TONE_MAPPING"};function fv(n,t,e,i,s,r){let a=new Di(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new He;h.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Me([0,2,0,0,2,0],2));let u=new nl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ve(h,u),f=new hs(-1,1,1,-1,0,1),g=null,y=null,p=!1,m,_=null,M=[],x=!1;this.setSize=function(E,C){a.setSize(E,C),o!==null&&o.setSize(E,C),l!==null&&l.setSize(E,C);for(let v=0;v<M.length;v++){let A=M[v];A.setSize&&A.setSize(E,C)}},this.setEffects=function(E){M=E,x=M.length>0&&M[0].isRenderPass===!0;let C=a.width,v=a.height;M.length>0&&o===null&&(o=new Di(C,v,{type:en,depthBuffer:!1,stencilBuffer:!1}),l=new Di(C,v,{type:en,depthBuffer:!1,stencilBuffer:!1}));let A=s===!0&&M.some(B=>B.needsDepthTexture===!0);A!==(a.depthTexture!==null)&&(A===!0&&c===null&&(c=new Cn(C,v),r===!0&&(c.format=Pn,c.type=ps)),a.dispose(),a.depthTexture=A?c:null,a.resolveDepthBuffer=A,a.storeMultisampledDepthBuffer=A);for(let B=0;B<M.length;B++){let k=M[B];k.setSize&&k.setSize(C,v),A&&k.needsDepthTexture===!0&&k.setDepthTexture&&k.setDepthTexture(c)}},this.begin=function(E,C){if(p||E.toneMapping===un&&M.length===0)return!1;if(_=C,C!==null){let v=C.width,A=C.height;(a.width!==v||a.height!==A)&&this.setSize(v,A)}return x===!1&&E.setRenderTarget(a),m=E.toneMapping,E.toneMapping=un,!0},this.hasRenderPass=function(){return x},this.end=function(E,C){E.toneMapping=m,p=!0;let v=a,A=o;for(let B=0;B<M.length;B++){let k=M[B];k.enabled!==!1&&(k.render(E,A,v,C),k.needsSwap!==!1&&(v=A,A=A===o?l:o))}if(g!==E.outputColorSpace||y!==E.toneMapping){g=E.outputColorSpace,y=E.toneMapping,u.defines={},ye.getTransfer(g)===Te&&(u.defines.SRGB_TRANSFER="");let B=uv[y];B&&(u.defines[B]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,E.setRenderTarget(_),E.render(d,f),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Ep=new Ai,Tp=new Cn(1,1),Ap=new $r(1),Cp=new Fr,Rp=new Wo,Pp=new Wr,sp=[],rp=[],ap=new Float32Array(16),op=new Float32Array(9),lp=new Float32Array(4);function cr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=sp[s];if(r===void 0&&(r=new Float32Array(s),sp[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function je(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function hc(n,t){let e=rp[t];e===void 0&&(e=new Int32Array(t),rp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function pv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function mv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2fv(this.addr,t),je(e,t)}}function gv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;n.uniform3fv(this.addr,t),je(e,t)}}function _v(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4fv(this.addr,t),je(e,t)}}function yv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(qe(e,i))return;lp.set(i),n.uniformMatrix2fv(this.addr,!1,lp),je(e,i)}}function vv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(qe(e,i))return;op.set(i),n.uniformMatrix3fv(this.addr,!1,op),je(e,i)}}function xv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(qe(e,i))return;ap.set(i),n.uniformMatrix4fv(this.addr,!1,ap),je(e,i)}}function bv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Mv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2iv(this.addr,t),je(e,t)}}function Sv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3iv(this.addr,t),je(e,t)}}function wv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4iv(this.addr,t),je(e,t)}}function Ev(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Tv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2uiv(this.addr,t),je(e,t)}}function Av(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3uiv(this.addr,t),je(e,t)}}function Cv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4uiv(this.addr,t),je(e,t)}}function dc(n){return n.version===0&&(n.compareFunction=nd,n.needsUpdate=!0),n}function Rv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=dc(Tp):r=Ep,e.setTexture2D(t||r,s)}function Pv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Rp,s)}function Iv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=dc(Ap):r=Pp,e.setTextureCube(t||r,s)}function Lv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Cp,s)}function kv(n){switch(n){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return _v;case 35674:return yv;case 35675:return vv;case 35676:return xv;case 5124:case 35670:return bv;case 35667:case 35671:return Mv;case 35668:case 35672:return Sv;case 35669:case 35673:return wv;case 5125:return Ev;case 36294:return Tv;case 36295:return Av;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Lv}}function Dv(n,t){n.uniform1fv(this.addr,t)}function Nv(n,t){let e=cr(t,this.size,2);n.uniform2fv(this.addr,e)}function Uv(n,t){let e=cr(t,this.size,3);n.uniform3fv(this.addr,e)}function Ov(n,t){let e=cr(t,this.size,4);n.uniform4fv(this.addr,e)}function Fv(n,t){let e=cr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Bv(n,t){let e=cr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function zv(n,t){let e=cr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Hv(n,t){n.uniform1iv(this.addr,t)}function Vv(n,t){n.uniform2iv(this.addr,t)}function Gv(n,t){n.uniform3iv(this.addr,t)}function Wv(n,t){n.uniform4iv(this.addr,t)}function $v(n,t){n.uniform1uiv(this.addr,t)}function Xv(n,t){n.uniform2uiv(this.addr,t)}function qv(n,t){n.uniform3uiv(this.addr,t)}function jv(n,t){n.uniform4uiv(this.addr,t)}function Yv(n,t,e){let i=this.cache,s=t.length,r=hc(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),je(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=dc(Tp):a=Ep;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Zv(n,t,e){let i=this.cache,s=t.length,r=hc(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Rp,r[a])}function Jv(n,t,e){let i=this.cache,s=t.length,r=hc(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),je(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=dc(Ap):a=Pp;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Kv(n,t,e){let i=this.cache,s=t.length,r=hc(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Cp,r[a])}function Qv(n){switch(n){case 5126:return Dv;case 35664:return Nv;case 35665:return Uv;case 35666:return Ov;case 35674:return Fv;case 35675:return Bv;case 35676:return zv;case 5124:case 35670:return Hv;case 35667:case 35671:return Vv;case 35668:case 35672:return Gv;case 35669:case 35673:return Wv;case 5125:return $v;case 36294:return Xv;case 36295:return qv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return Kv}}var Md=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=kv(e.type)}},Sd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qv(e.type)}},wd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},xd=/(\w+)(\])?(\[|\.)?/g;function cp(n,t){n.seq.push(t),n.map[t.id]=t}function tx(n,t,e){let i=n.name,s=i.length;for(xd.lastIndex=0;;){let r=xd.exec(i),a=xd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cp(e,c===void 0?new Md(o,n,t):new Sd(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new wd(o),cp(e,u)),e=u}}}var lr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);tx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function hp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var ex=37297,ix=0;function nx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var dp=new ae;function sx(n){ye._getMatrix(dp,ye.workingColorSpace,n);let t=`mat3( ${dp.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(n)){case Nr:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function up(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+nx(n.getShaderSource(t),o)}else return r}function rx(n,t){let e=sx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var ax={[zh]:"Linear",[Hh]:"Reinhard",[Vh]:"Cineon",[Gh]:"ACESFilmic",[$h]:"AgX",[Xh]:"Neutral",[Wh]:"Custom"};function ox(n,t){let e=ax[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var oc=new N;function lx(){ye.getLuminanceCoefficients(oc);let n=oc.x.toFixed(4),t=oc.y.toFixed(4),e=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function hx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ea(n){return n!==""}function fp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function pp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(n){return n.replace(ux,fx)}function fx(n,t){let e=pe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ed(e)}var px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mp(n){return n.replace(px,mx)}function mx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var gx={[pa]:"SHADOWMAP_TYPE_PCF",[sr]:"SHADOWMAP_TYPE_VSM"};function _x(n){return gx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yx={[ar]:"ENVMAP_MODE_REFRACTION"};function vx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":yx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xx={[Bh]:"ENVMAP_BLENDING_MULTIPLY",[Lf]:"ENVMAP_BLENDING_MIX",[kf]:"ENVMAP_BLENDING_ADD"};function bx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":xx[n.combine]||"ENVMAP_BLENDING_NONE"}function Mx(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=_x(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=vx(e),u=bx(e),d=cx(e),f=hx(r),g=s.createProgram(),y,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ea).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ea).join(`
`),p.length>0&&(p+=`
`)):(y=[gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),p=[gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==un?"#define TONE_MAPPING":"",e.toneMapping!==un?pe.tonemapping_pars_fragment:"",e.toneMapping!==un?ox("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,rx("linearToOutputTexel",e.outputColorSpace),lx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ea).join(`
`)),a=Ed(a),a=fp(a,e),a=pp(a,e),o=Ed(o),o=fp(o,e),o=pp(o,e),a=mp(a),o=mp(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",e.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=m+y+a,M=m+p+o,x=hp(s,s.VERTEX_SHADER,_),E=hp(s,s.FRAGMENT_SHADER,M);s.attachShader(g,x),s.attachShader(g,E),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(k){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(g)||"",V=s.getShaderInfoLog(x)||"",Q=s.getShaderInfoLog(E)||"",U=F.trim(),G=V.trim(),tt=Q.trim(),Y=!0,ht=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,x,E);else{let $=up(s,x,"vertex"),lt=up(s,E,"fragment");ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+U+`
`+$+`
`+lt)}else U!==""?Kt("WebGLProgram: Program Info Log:",U):(G===""||tt==="")&&(ht=!1);ht&&(k.diagnostics={runnable:Y,programLog:U,vertexShader:{log:G,prefix:y},fragmentShader:{log:tt,prefix:p}})}s.deleteShader(x),s.deleteShader(E),v=new lr(s,g),A=dx(s,g)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(g,ex)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ix++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=x,this.fragmentShader=E,this}var Sx=0,Td=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ad(t),e.set(t,i)),i}},Ad=class{constructor(t){this.id=Sx++,this.code=t,this.usedTimes=0}};function wx(n){return n===Jn||n===xa||n===ba}function Ex(n,t,e,i,s,r){let a=new js,o=new Td,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,A,B,k,F,V){let Q=k.fog,U=F.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?k.environment:null,tt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Y=t.get(v.envMap||G,tt),ht=d[v.type],$=i.precision;v.precision!==null&&($=i.getMaxPrecision(v.precision),$!==v.precision&&Kt("WebGLProgram.getParameters:",v.precision,"not supported, using",$,"instead."));let lt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,dt=lt!==void 0?lt.length:0,Ot=0;U.morphAttributes.position!==void 0&&(Ot=1),U.morphAttributes.normal!==void 0&&(Ot=2),U.morphAttributes.color!==void 0&&(Ot=3);let te,nt,Pt,Vt;if(ht){let Dt=Si[ht];te=Dt.vertexShader,nt=Dt.fragmentShader}else{te=v.vertexShader,nt=v.fragmentShader;let Dt=o.getVertexShaderStage(v),be=o.getFragmentShaderStage(v);o.update(v,Dt,be),Pt=Dt.id,Vt=be.id}let Jt=n.getRenderTarget(),Nt=n.state.buffers.depth.getReversed(),ne=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,Qt=!!v.map,xe=!!v.matcap,Ce=!!Y,ue=Ce&&Y.isPMREMTexture===!0,Oe=!!v.aoMap,Fe=!!v.lightMap,si=!!v.bumpMap&&v.wireframe===!1,Ie=!!v.normalMap,Bi=!!v.displacementMap,Ge=!!v.emissiveMap,ri=!!v.metalnessMap,ai=!!v.roughnessMap,Ei=v.anisotropy>0,H=v.clearcoat>0,Ti=v.diffuseRoughness>0,Re=v.dispersion>0,Le=v.retroreflectivity>0,Lt=v.iridescence>0,Be=v.sheen>0,Zt=v.transmission>0,ee=Ei&&!!v.anisotropyMap,L=H&&!!v.clearcoatMap,w=H&&!!v.clearcoatNormalMap,q=H&&!!v.clearcoatRoughnessMap,ft=Ti&&!!v.diffuseRoughnessMap,ot=Lt&&!!v.iridescenceMap,Mt=Lt&&!!v.iridescenceThicknessMap,At=Be&&!!v.sheenColorMap,it=Be&&!!v.sheenRoughnessMap,st=!!v.specularMap,wt=!!v.specularColorMap,O=!!v.specularIntensityMap,rt=Zt&&!!v.transmissionMap,et=Zt&&!!v.thicknessMap,Et=!!v.gradientMap,mt=!!v.alphaMap,St=v.alphaTest>0,qt=!!v.alphaHash,ce=!!v.extensions,gt=un;v.toneMapped&&(Jt===null||Jt.isXRRenderTarget===!0)&&(gt=n.toneMapping);let jt=ue?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,he={shaderID:ht,shaderType:v.type,shaderName:v.name,vertexShader:te,fragmentShader:nt,defines:v.defines,customVertexShaderID:Pt,customFragmentShaderID:Vt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:$,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:ne,instancingColor:ne&&F.instanceColor!==null,instancingMorph:ne&&F.morphTexture!==null,outputColorSpace:Jt===null?n.outputColorSpace:Jt.isXRRenderTarget===!0?Jt.texture.colorSpace:ye.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Qt,matcap:xe,envMap:Ce,envMapMode:Ce&&Y.mapping,envMapPMREM:ue,envMapMaxLod:ue?jt.length-1:null,envMapSize:ue?jt[0].width:null,aoMap:Oe,lightMap:Fe,bumpMap:si,normalMap:Ie,displacementMap:Bi,emissiveMap:Ge,normalMapObjectSpace:Ie&&v.normalMapType===Uf,normalMapTangentSpace:Ie&&v.normalMapType===sc,packedNormalMap:Ie&&v.normalMapType===sc&&wx(v.normalMap.format),metalnessMap:ri,roughnessMap:ai,anisotropy:Ei,anisotropyMap:ee,clearcoat:H,clearcoatMap:L,clearcoatNormalMap:w,clearcoatRoughnessMap:q,diffuseRoughness:Ti,diffuseRoughnessMap:ft,dispersion:Re,retroreflection:Le,iridescence:Lt,iridescenceMap:ot,iridescenceThicknessMap:Mt,sheen:Be,sheenColorMap:At,sheenRoughnessMap:it,specularMap:st,specularColorMap:wt,specularIntensityMap:O,transmission:Zt,transmissionMap:rt,thicknessMap:et,gradientMap:Et,opaque:v.transparent===!1&&v.blending===rr&&v.alphaToCoverage===!1,alphaMap:mt,alphaTest:St,alphaHash:qt,combine:v.combine,mapUv:Qt&&f(v.map.channel),aoMapUv:Oe&&f(v.aoMap.channel),lightMapUv:Fe&&f(v.lightMap.channel),bumpMapUv:si&&f(v.bumpMap.channel),normalMapUv:Ie&&f(v.normalMap.channel),displacementMapUv:Bi&&f(v.displacementMap.channel),emissiveMapUv:Ge&&f(v.emissiveMap.channel),metalnessMapUv:ri&&f(v.metalnessMap.channel),roughnessMapUv:ai&&f(v.roughnessMap.channel),anisotropyMapUv:ee&&f(v.anisotropyMap.channel),clearcoatMapUv:L&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ft&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:At&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:it&&f(v.sheenRoughnessMap.channel),specularMapUv:st&&f(v.specularMap.channel),specularColorMapUv:wt&&f(v.specularColorMap.channel),specularIntensityMapUv:O&&f(v.specularIntensityMap.channel),transmissionMapUv:rt&&f(v.transmissionMap.channel),thicknessMapUv:et&&f(v.thicknessMap.channel),alphaMapUv:mt&&f(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ie||Ei),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!U.attributes.uv&&(Qt||mt),fog:!!Q,useFog:v.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&Ie===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Nt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Ot,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:V.filter(Dt=>Dt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,decodeVideoTexture:Qt&&v.map.isVideoTexture===!0&&ye.getTransfer(v.map.colorSpace)===Te,decodeVideoTextureEmissive:Ge&&v.emissiveMap.isVideoTexture===!0&&ye.getTransfer(v.emissiveMap.colorSpace)===Te,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mi,flipSided:v.side===bi,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ce&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&v.extensions.multiDraw===!0||Ne)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return he.vertexUv1s=l.has(1),he.vertexUv2s=l.has(2),he.vertexUv3s=l.has(3),l.clear(),he}function y(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let B in v.defines)A.push(B),A.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(p(A,v),m(A,v),A.push(n.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function p(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapPMREM),v.push(A.envMapMaxLod),v.push(A.envMapSize),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.diffuseRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.numSunLights),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numSunLightShadows),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.numLightProbeGrids),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function m(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.diffuseRoughness&&a.enable(25),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function _(v){let A=d[v.type],B;if(A){let k=Si[A];B=Sa.clone(k.uniforms)}else B=v.uniforms;return B}function M(v,A){let B=h.get(A);return B!==void 0?++B.usedTimes:(B=new Mx(n,A,v,s),c.push(B),h.set(A,B)),B}function x(v){if(--v.usedTimes===0){let A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function C(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:_,acquireProgram:M,releaseProgram:x,releaseShaderCache:E,programs:c,dispose:C}}function Tx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Ax(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function _p(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function yp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,y,p,m){let _=n[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:p,group:m},n[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.materialVariant=a(d),_.groupOrder=y,_.renderOrder=d.renderOrder,_.z=p,_.group=m),t++,_}function l(d,f,g,y,p,m,_){_.reversedDepth===!0&&(p=-p);let M=o(d,f,g,y,p,m);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):e.push(M)}function c(d,f,g,y,p,m){let _=o(d,f,g,y,p,m);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):e.unshift(_)}function h(d,f){e.length>1&&e.sort(d||Ax),i.length>1&&i.sort(f||_p),s.length>1&&s.sort(f||_p)}function u(){for(let d=t,f=n.length;d<f;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Cx(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new yp,n.set(i,[a])):s>=r.length?(a=new yp,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Rx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new _e};break;case"SpotLight":e={position:new N,direction:new N,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new _e,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":e={color:new _e,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function Px(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Ix=0;function Lx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function kx(n){let t=new Rx,e=Px(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let s=new N,r=new Pe,a=new Pe;function o(c){let h=0,u=0,d=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let f=0,g=0,y=0,p=0,m=0,_=0,M=0,x=0,E=0,C=0,v=0,A=0,B=0,k=0;c.sort(Lx);for(let V=0,Q=c.length;V<Q;V++){let U=c[V],G=U.color,tt=U.intensity,Y=U.distance,ht=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Jn?ht=U.shadow.map.texture:ht=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=G.r*tt,u+=G.g*tt,d+=G.b*tt;else if(U.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(U.sh.coefficients[$],tt);k++}else if(U.isSunLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let lt=U.shadow,dt=e.get(U);dt.shadowIntensity=lt.intensity,dt.shadowBias=lt.bias,dt.shadowNormalBias=lt.normalBias,dt.shadowRadius=lt.radius,dt.shadowMapSize.copy(lt.mapSize).multiply(lt.getFrameExtents()),i.sunShadow[g]=dt,i.sunShadowMap[g]=ht;let Ot=lt.getViewportCount();for(let te=0;te<Ot;te++)i.sunShadowMatrix[y+te]=lt.getMatrix(te),i.sunShadowCascade[y+te]=lt._cascadeData[te];y+=Ot,g++}i.sun[f]=$,f++}else if(U.isDirectionalLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let lt=U.shadow,dt=e.get(U);dt.shadowIntensity=lt.intensity,dt.shadowBias=lt.bias,dt.shadowNormalBias=lt.normalBias,dt.shadowRadius=lt.radius,dt.shadowMapSize=lt.mapSize,i.directionalShadow[p]=dt,i.directionalShadowMap[p]=ht,i.directionalShadowMatrix[p]=U.shadow.matrix,E++}i.directional[p]=$,p++}else if(U.isSpotLight){let $=t.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(G).multiplyScalar(tt),$.distance=Y,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,i.spot[_]=$;let lt=U.shadow;if(U.map&&(i.spotLightMap[A]=U.map,A++,lt.updateMatrices(U),U.castShadow&&B++),i.spotLightMatrix[_]=lt.matrix,U.castShadow){let dt=e.get(U);dt.shadowIntensity=lt.intensity,dt.shadowBias=lt.bias,dt.shadowNormalBias=lt.normalBias,dt.shadowRadius=lt.radius,dt.shadowMapSize=lt.mapSize,i.spotShadow[_]=dt,i.spotShadowMap[_]=ht,v++}_++}else if(U.isRectAreaLight){let $=t.get(U);$.color.copy(G).multiplyScalar(tt),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),i.rectArea[M]=$,M++}else if(U.isPointLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){let lt=U.shadow,dt=e.get(U);dt.shadowIntensity=lt.intensity,dt.shadowBias=lt.bias,dt.shadowNormalBias=lt.normalBias,dt.shadowRadius=lt.radius,dt.shadowMapSize=lt.mapSize,dt.shadowCameraNear=lt.camera.near,dt.shadowCameraFar=lt.camera.far,i.pointShadow[m]=dt,i.pointShadowMap[m]=ht,i.pointShadowMatrix[m]=U.shadow.matrix,C++}i.point[m]=$,m++}else if(U.isHemisphereLight){let $=t.get(U);$.skyColor.copy(U.color).multiplyScalar(tt),$.groundColor.copy(U.groundColor).multiplyScalar(tt),i.hemi[x]=$,x++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=kt.LTC_FLOAT_1,i.rectAreaLTC2=kt.LTC_FLOAT_2):(i.rectAreaLTC1=kt.LTC_HALF_1,i.rectAreaLTC2=kt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let F=i.hash;(F.sunLength!==f||F.directionalLength!==p||F.pointLength!==m||F.spotLength!==_||F.rectAreaLength!==M||F.hemiLength!==x||F.numSunShadows!==g||F.numDirectionalShadows!==E||F.numPointShadows!==C||F.numSpotShadows!==v||F.numSpotMaps!==A||F.numLightProbes!==k)&&(i.sun.length=f,i.directional.length=p,i.spot.length=_,i.rectArea.length=M,i.point.length=m,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=C,i.pointShadowMap.length=C,i.pointShadowMatrix.length=C,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+A-B,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=k,F.sunLength=f,F.directionalLength=p,F.pointLength=m,F.spotLength=_,F.rectAreaLength=M,F.hemiLength=x,F.numSunShadows=g,F.numDirectionalShadows=E,F.numPointShadows=C,F.numSpotShadows=v,F.numSpotMaps=A,F.numLightProbes=k,i.version=Ix++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,p=0,m=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let x=c[_];if(x.isSunLight){let E=i.sun[u];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),u++}else if(x.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(x.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),g++}else if(x.isRectAreaLight){let E=i.rectArea[y];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let E=i.hemi[p];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function vp(n){let t=new kx(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){i.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Dx(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new vp(n),t.set(s,[o])):r>=a.length?(o=new vp(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ox=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Fx=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],xp=new Pe,wa=new N,bd=new N;function Bx(n,t,e){let i=new Wn,s=new It,r=new It,a=new Ae,o=new sl,l=new rl,c={},h=e.maxTextureSize,u={[Zn]:bi,[bi]:Zn,[Mi]:Mi},d=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Nx,fragmentShader:Ux}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new He;g.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ve(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pa;let m=this.type;this.render=function(C,v,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;this.type===ff&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pa);let B=n.getRenderTarget(),k=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),V=n.state;V.setBlending(ds),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let Q=m!==this.type;Q&&v.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(G=>G.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,G=C.length;U<G;U++){let tt=C[U],Y=tt.shadow;if(Y===void 0){Kt("WebGLShadowMap:",tt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ht=Y.getFrameExtents();s.multiply(ht),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,Y.mapSize.y=r.y));let $=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=$,Y.map===null||Q===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===sr){if(tt.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Di(s.x,s.y,{format:Jn,type:en,minFilter:vi,magFilter:vi,generateMipmaps:!1}),Y.map.texture.name=tt.name+".shadowMap",Y.map.depthTexture=new Cn(s.x,s.y,tn),Y.map.depthTexture.name=tt.name+".shadowMapDepth",Y.map.depthTexture.format=wn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ke,Y.map.depthTexture.magFilter=Ke}else tt.isPointLight?(Y.map=new Ta(s.x),Y.map.depthTexture=new $r(s.x,Qi)):(Y.map=new Di(s.x,s.y),Y.map.depthTexture=new Cn(s.x,s.y,Qi)),Y.map.depthTexture.name=tt.name+".shadowMap",Y.map.depthTexture.format=wn,this.type===pa?(Y.map.depthTexture.compareFunction=$?id:ed,Y.map.depthTexture.minFilter=vi,Y.map.depthTexture.magFilter=vi):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ke,Y.map.depthTexture.magFilter=Ke);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let lt=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();tt.isPointLight!==!0&&Y.updateMatrices(tt,A);let dt=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:A.layers;for(let Ot=0;Ot<lt;Ot++){let te=Y.getCamera(Ot);if(tt.isPointLight){let nt=Y.camera,Pt=Y.matrix,Vt=tt.distance||nt.far;Vt!==nt.far&&(nt.far=Vt,nt.updateProjectionMatrix()),wa.setFromMatrixPosition(tt.matrixWorld),nt.position.copy(wa),bd.copy(nt.position),bd.add(Ox[Ot]),nt.up.copy(Fx[Ot]),nt.lookAt(bd),nt.updateMatrixWorld(),Pt.makeTranslation(-wa.x,-wa.y,-wa.z),xp.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(xp,nt.coordinateSystem,nt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,Ot),n.clear();else{Ot===0&&(n.setRenderTarget(Y.map),n.clear());let nt=Y.getViewport(Ot);a.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),V.viewport(a)}i=Y.getFrustum(Ot),x(v,A,te,tt,dt,this.type)}Y.isPointLightShadow!==!0&&this.type===sr&&_(Y,A),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(B,k,F)};function _(C,v){let A=t.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null?C.mapPass=new Di(s.x,s.y,{format:Jn,type:en}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(v,null,A,d,y,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(v,null,A,f,y,null)}function M(C,v,A,B){let k=null,F=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0)k=F;else if(k=A.isPointLight===!0?l:o,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let V=k.uuid,Q=v.uuid,U=c[V];U===void 0&&(U={},c[V]=U);let G=U[Q];G===void 0&&(G=k.clone(),U[Q]=G,v.addEventListener("dispose",E)),k=G}if(k.visible=v.visible,k.wireframe=v.wireframe,B===sr?k.side=v.shadowSide!==null?v.shadowSide:v.side:k.side=v.shadowSide!==null?v.shadowSide:u[v.side],k.alphaMap=v.alphaMap,k.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,k.map=v.map,k.clipShadows=v.clipShadows,k.clippingPlanes=v.clippingPlanes,k.clipIntersection=v.clipIntersection,k.displacementMap=v.displacementMap,k.displacementScale=v.displacementScale,k.displacementBias=v.displacementBias,k.wireframeLinewidth=v.wireframeLinewidth,k.linewidth=v.linewidth,A.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let V=n.properties.get(k);V.light=A}return k}function x(C,v,A,B,k,F){if(C.visible===!1)return;if(C.layers.test(k)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&F===sr)&&(!C.frustumCulled||C.intersectsFrustum(i))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);let U=t.update(C),G=C.material;if(Array.isArray(G)){let tt=U.groups;for(let Y=0,ht=tt.length;Y<ht;Y++){let $=tt[Y],lt=G[$.materialIndex];if(lt&&lt.visible){let dt=M(C,lt,B,F);C.onBeforeShadow(n,C,v,A,U,dt,$),n.renderBufferDirect(A,null,U,dt,C,$),C.onAfterShadow(n,C,v,A,U,dt,$)}}}else if(G.visible){let tt=M(C,G,B,F);C.onBeforeShadow(n,C,v,A,U,tt,null),n.renderBufferDirect(A,null,U,tt,C,null),C.onAfterShadow(n,C,v,A,U,tt,null)}}let Q=C.children;for(let U=0,G=Q.length;U<G;U++)x(Q[U],v,A,B,k,F)}function E(C){C.target.removeEventListener("dispose",E);for(let A in c){let B=c[A],k=C.target.uuid;k in B&&(B[k].dispose(),delete B[k])}}}function zx(n,t){function e(){let O=!1,rt=new Ae,et=null,Et=new Ae(0,0,0,0);return{setMask:function(mt){et!==mt&&!O&&(n.colorMask(mt,mt,mt,mt),et=mt)},setLocked:function(mt){O=mt},setClear:function(mt,St,qt,ce,gt){gt===!0&&(mt*=ce,St*=ce,qt*=ce),rt.set(mt,St,qt,ce),Et.equals(rt)===!1&&(n.clearColor(mt,St,qt,ce),Et.copy(rt))},reset:function(){O=!1,et=null,Et.set(-1,0,0,0)}}}function i(){let O=!1,rt=!1,et=null,Et=null,mt=null;return{setReversed:function(St){if(rt!==St){let qt=t.get("EXT_clip_control");St?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),rt=St;let ce=mt;mt=null,this.setClear(ce)}},getReversed:function(){return rt},setTest:function(St){St?Nt(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(St){et!==St&&!O&&(n.depthMask(St),et=St)},setFunc:function(St){if(rt&&(St=Xf[St]),Et!==St){switch(St){case Lo:n.depthFunc(n.NEVER);break;case ko:n.depthFunc(n.ALWAYS);break;case Do:n.depthFunc(n.LESS);break;case Gs:n.depthFunc(n.LEQUAL);break;case No:n.depthFunc(n.EQUAL);break;case Uo:n.depthFunc(n.GEQUAL);break;case Oo:n.depthFunc(n.GREATER);break;case Fo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Et=St}},setLocked:function(St){O=St},setClear:function(St){mt!==St&&(mt=St,rt&&(St=1-St),n.clearDepth(St))},reset:function(){O=!1,et=null,Et=null,mt=null,rt=!1}}}function s(){let O=!1,rt=null,et=null,Et=null,mt=null,St=null,qt=null,ce=null,gt=null;return{setTest:function(jt){O||(jt?Nt(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(jt){rt!==jt&&!O&&(n.stencilMask(jt),rt=jt)},setFunc:function(jt,he,Dt){(et!==jt||Et!==he||mt!==Dt)&&(n.stencilFunc(jt,he,Dt),et=jt,Et=he,mt=Dt)},setOp:function(jt,he,Dt){(St!==jt||qt!==he||ce!==Dt)&&(n.stencilOp(jt,he,Dt),St=jt,qt=he,ce=Dt)},setLocked:function(jt){O=jt},setClear:function(jt){gt!==jt&&(n.clearStencil(jt),gt=jt)},reset:function(){O=!1,rt=null,et=null,Et=null,mt=null,St=null,qt=null,ce=null,gt=null}}}let r=new e,a=new i,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],y=null,p=!1,m=null,_=null,M=null,x=null,E=null,C=null,v=null,A=new _e(0,0,0),B=0,k=!1,F=null,V=null,Q=null,U=null,G=null,tt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ht=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=ht>=1):$.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=ht>=2);let lt=null,dt={},Ot=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),nt=new Ae().fromArray(Ot),Pt=new Ae().fromArray(te);function Vt(O,rt,et,Et){let mt=new Uint8Array(4),St=n.createTexture();n.bindTexture(O,St),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qt=0;qt<et;qt++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(rt,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(rt+qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return St}let Jt={};Jt[n.TEXTURE_2D]=Vt(n.TEXTURE_2D,n.TEXTURE_2D,1),Jt[n.TEXTURE_CUBE_MAP]=Vt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Jt[n.TEXTURE_2D_ARRAY]=Vt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Jt[n.TEXTURE_3D]=Vt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Nt(n.DEPTH_TEST),a.setFunc(Gs),si(!1),Ie(kh),Nt(n.CULL_FACE),Oe(ds);function Nt(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function ne(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function Ne(O,rt){return d[O]!==rt?(n.bindFramebuffer(O,rt),d[O]=rt,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=rt),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=rt),!0):!1}function Qt(O,rt){let et=g,Et=!1;if(O){et=f.get(rt),et===void 0&&(et=[],f.set(rt,et));let mt=O.textures;if(et.length!==mt.length||et[0]!==n.COLOR_ATTACHMENT0){for(let St=0,qt=mt.length;St<qt;St++)et[St]=n.COLOR_ATTACHMENT0+St;et.length=mt.length,Et=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,Et=!0);Et&&n.drawBuffers(et)}function xe(O){return y!==O?(n.useProgram(O),y=O,!0):!1}let Ce={[us]:n.FUNC_ADD,[mf]:n.FUNC_SUBTRACT,[gf]:n.FUNC_REVERSE_SUBTRACT};Ce[_f]=n.MIN,Ce[yf]=n.MAX;let ue={[vf]:n.ZERO,[xf]:n.ONE,[bf]:n.SRC_COLOR,[Oh]:n.SRC_ALPHA,[Af]:n.SRC_ALPHA_SATURATE,[Ef]:n.DST_COLOR,[Sf]:n.DST_ALPHA,[Mf]:n.ONE_MINUS_SRC_COLOR,[Fh]:n.ONE_MINUS_SRC_ALPHA,[Tf]:n.ONE_MINUS_DST_COLOR,[wf]:n.ONE_MINUS_DST_ALPHA,[Cf]:n.CONSTANT_COLOR,[Rf]:n.ONE_MINUS_CONSTANT_COLOR,[Pf]:n.CONSTANT_ALPHA,[If]:n.ONE_MINUS_CONSTANT_ALPHA};function Oe(O,rt,et,Et,mt,St,qt,ce,gt,jt){if(O===ds){p===!0&&(ne(n.BLEND),p=!1);return}if(p===!1&&(Nt(n.BLEND),p=!0),O!==pf){if(O!==m||jt!==k){if((_!==us||E!==us)&&(n.blendEquation(n.FUNC_ADD),_=us,E=us),jt)switch(O){case rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dh:n.blendFunc(n.ONE,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ie("WebGLState: Invalid blending: ",O);break}else switch(O){case rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Nh:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uh:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",O);break}M=null,x=null,C=null,v=null,A.set(0,0,0),B=0,m=O,k=jt}return}mt=mt||rt,St=St||et,qt=qt||Et,(rt!==_||mt!==E)&&(n.blendEquationSeparate(Ce[rt],Ce[mt]),_=rt,E=mt),(et!==M||Et!==x||St!==C||qt!==v)&&(n.blendFuncSeparate(ue[et],ue[Et],ue[St],ue[qt]),M=et,x=Et,C=St,v=qt),(ce.equals(A)===!1||gt!==B)&&(n.blendColor(ce.r,ce.g,ce.b,gt),A.copy(ce),B=gt),m=O,k=!1}function Fe(O,rt){O.side===Mi?ne(n.CULL_FACE):Nt(n.CULL_FACE);let et=O.side===bi;rt&&(et=!et),si(et),O.blending===rr&&O.transparent===!1?Oe(ds):Oe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let Et=O.stencilWrite;o.setTest(Et),Et&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ge(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Nt(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function si(O){F!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),F=O)}function Ie(O){O!==df?(Nt(n.CULL_FACE),O!==V&&(O===kh?n.cullFace(n.BACK):O===uf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),V=O}function Bi(O){O!==Q&&(Y&&n.lineWidth(O),Q=O)}function Ge(O,rt,et){O?(Nt(n.POLYGON_OFFSET_FILL),(U!==rt||G!==et)&&(U=rt,G=et,a.getReversed()&&(rt=-rt,et=-et),n.polygonOffset(rt,et))):ne(n.POLYGON_OFFSET_FILL)}function ri(O){O?Nt(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function ai(O){O===void 0&&(O=n.TEXTURE0+tt-1),lt!==O&&(n.activeTexture(O),lt=O)}function Ei(O,rt,et){et===void 0&&(lt===null?et=n.TEXTURE0+tt-1:et=lt);let Et=dt[et];Et===void 0&&(Et={type:void 0,texture:void 0},dt[et]=Et),(Et.type!==O||Et.texture!==rt)&&(lt!==et&&(n.activeTexture(et),lt=et),n.bindTexture(O,rt||Jt[O]),Et.type=O,Et.texture=rt)}function H(){let O=dt[lt];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ti(){try{n.compressedTexImage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function Re(){try{n.compressedTexImage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function Le(){try{n.texSubImage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function Lt(){try{n.texSubImage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function Be(){try{n.compressedTexSubImage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function Zt(){try{n.compressedTexSubImage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function ee(){try{n.texStorage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function L(){try{n.texStorage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function w(){try{n.texImage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function q(){try{n.texImage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function ft(O){return u[O]!==void 0?u[O]:n.getParameter(O)}function ot(O,rt){u[O]!==rt&&(n.pixelStorei(O,rt),u[O]=rt)}function Mt(O){nt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),nt.copy(O))}function At(O){Pt.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Pt.copy(O))}function it(O,rt){let et=c.get(rt);et===void 0&&(et=new WeakMap,c.set(rt,et));let Et=et.get(O);Et===void 0&&(Et=n.getUniformBlockIndex(rt,O.name),n.uniformBlockBinding(rt,Et,Et),et.set(O,Et))}function st(O,rt,et){let mt=c.get(rt).get(O);l[mt]!==et&&(n.bindBufferBase(n.UNIFORM_BUFFER,mt,et),l[mt]=et)}function wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},lt=null,dt={},d={},l={},f=new WeakMap,g=[],y=null,p=!1,m=null,_=null,M=null,x=null,E=null,C=null,v=null,A=new _e(0,0,0),B=0,k=!1,F=null,V=null,Q=null,U=null,G=null,nt.set(0,0,n.canvas.width,n.canvas.height),Pt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Nt,disable:ne,bindFramebuffer:Ne,drawBuffers:Qt,useProgram:xe,setBlending:Oe,setMaterial:Fe,setFlipSided:si,setCullFace:Ie,setLineWidth:Bi,setPolygonOffset:Ge,setScissorTest:ri,activeTexture:ai,bindTexture:Ei,unbindTexture:H,compressedTexImage2D:Ti,compressedTexImage3D:Re,texImage2D:w,texImage3D:q,pixelStorei:ot,getParameter:ft,updateUBOMapping:it,uniformBlockBinding:st,texStorage2D:ee,texStorage3D:L,texSubImage2D:Le,texSubImage3D:Lt,compressedTexSubImage2D:Be,compressedTexSubImage3D:Zt,scissor:Mt,viewport:At,reset:wt}}function Hx(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,y=new FinalizationRegistry(L=>g.delete(L)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,w){return p?new OffscreenCanvas(L,w):Ur("canvas")}function _(L,w,q){let ft=1,ot=ee(L);if((ot.width>q||ot.height>q)&&(ft=q/Math.max(ot.width,ot.height)),ft<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Mt=Math.floor(ft*ot.width),At=Math.floor(ft*ot.height);d===void 0&&(d=m(Mt,At));let it=w?m(Mt,At):d;return it.width=Mt,it.height=At,it.getContext("2d").drawImage(L,0,0,Mt,At),Kt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Mt+"x"+At+")."),it}else return"data"in L&&Kt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),L;return L}function M(L){return L.generateMipmaps}function x(L){n.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(L,w,q,ft,ot,Mt=!1){if(L!==null){if(n[L]!==void 0)return n[L];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let At;ft&&(At=t.get("EXT_texture_norm16"),At||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=w;if(w===n.RED&&(q===n.FLOAT&&(it=n.R32F),q===n.HALF_FLOAT&&(it=n.R16F),q===n.UNSIGNED_BYTE&&(it=n.R8),q===n.UNSIGNED_SHORT&&At&&(it=At.R16_EXT),q===n.SHORT&&At&&(it=At.R16_SNORM_EXT)),w===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(it=n.R8UI),q===n.UNSIGNED_SHORT&&(it=n.R16UI),q===n.UNSIGNED_INT&&(it=n.R32UI),q===n.BYTE&&(it=n.R8I),q===n.SHORT&&(it=n.R16I),q===n.INT&&(it=n.R32I)),w===n.RG&&(q===n.FLOAT&&(it=n.RG32F),q===n.HALF_FLOAT&&(it=n.RG16F),q===n.UNSIGNED_BYTE&&(it=n.RG8),q===n.UNSIGNED_SHORT&&At&&(it=At.RG16_EXT),q===n.SHORT&&At&&(it=At.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(it=n.RG8UI),q===n.UNSIGNED_SHORT&&(it=n.RG16UI),q===n.UNSIGNED_INT&&(it=n.RG32UI),q===n.BYTE&&(it=n.RG8I),q===n.SHORT&&(it=n.RG16I),q===n.INT&&(it=n.RG32I)),w===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(it=n.RGB8UI),q===n.UNSIGNED_SHORT&&(it=n.RGB16UI),q===n.UNSIGNED_INT&&(it=n.RGB32UI),q===n.BYTE&&(it=n.RGB8I),q===n.SHORT&&(it=n.RGB16I),q===n.INT&&(it=n.RGB32I)),w===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(it=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(it=n.RGBA16UI),q===n.UNSIGNED_INT&&(it=n.RGBA32UI),q===n.BYTE&&(it=n.RGBA8I),q===n.SHORT&&(it=n.RGBA16I),q===n.INT&&(it=n.RGBA32I)),w===n.RGB&&(q===n.UNSIGNED_SHORT&&At&&(it=At.RGB16_EXT),q===n.SHORT&&At&&(it=At.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(it=n.R11F_G11F_B10F)),w===n.RGBA){let st=Mt?Nr:ye.getTransfer(ot);q===n.FLOAT&&(it=n.RGBA32F),q===n.HALF_FLOAT&&(it=n.RGBA16F),q===n.UNSIGNED_BYTE&&(it=st===Te?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&At&&(it=At.RGBA16_EXT),q===n.SHORT&&At&&(it=At.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function v(L,w){let q;return L?w===null||w===Qi||w===ps?q=n.DEPTH24_STENCIL8:w===tn?q=n.DEPTH32F_STENCIL8:w===or&&(q=n.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Qi||w===ps?q=n.DEPTH_COMPONENT24:w===tn?q=n.DEPTH_COMPONENT32F:w===or&&(q=n.DEPTH_COMPONENT16),q}function A(L,w){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ke&&L.minFilter!==vi?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function B(L){let w=new WeakRef(L);i.get(L).__ref=w,g.add(w),y.register(L,w,w)}function k(L){let w=i.get(L).__ref;w!==void 0&&(g.delete(w),y.unregister(w))}function F(L){Q(L.target)}function V(L){U(L.target)}function Q(L){L.removeEventListener("dispose",F),k(L),tt(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&u.delete(L)}function U(L){L.removeEventListener("dispose",V),k(L),ht(L)}function G(){for(let L of g){let w=L.deref();w!==void 0&&(w.isRenderTarget===!0?U(w):Q(w))}g.clear(),u.clear()}function tt(L){let w=i.get(L);if(w.__webglInit===void 0)return;let q=L.source,ft=f.get(q);if(ft){let ot=ft[w.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&Y(L),Object.keys(ft).length===0&&f.delete(q)}i.remove(L)}function Y(L){let w=i.get(L);n.deleteTexture(w.__webglTexture);let q=L.source,ft=f.get(q);delete ft[w.__cacheKey],a.memory.textures--}function ht(L){let w=i.get(L);w.__depthDisposeCallback&&w.__depthDisposeCallback();let q=L.depthTexture;if(q&&q.renderTarget===L&&Q(q),L.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(w.__webglFramebuffer[ot]))for(let Mt=0;Mt<w.__webglFramebuffer[ot].length;Mt++)n.deleteFramebuffer(w.__webglFramebuffer[ot][Mt]);else n.deleteFramebuffer(w.__webglFramebuffer[ot]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ot])}else{if(Array.isArray(w.__webglFramebuffer))for(let ot=0;ot<w.__webglFramebuffer.length;ot++)n.deleteFramebuffer(w.__webglFramebuffer[ot]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ot=0;ot<w.__webglColorRenderbuffer.length;ot++)w.__webglColorRenderbuffer[ot]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ot]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ft=L.textures;for(let ot=0,Mt=ft.length;ot<Mt;ot++){let At=i.get(ft[ot]);At.__webglTexture&&(n.deleteTexture(At.__webglTexture),a.memory.textures--),i.remove(ft[ot])}i.remove(L)}let $=0;function lt(){$=0}function dt(){return $}function Ot(L){$=L}function te(){let L=$;return L>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,L}function nt(L){let w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.mipmapsAutoUpdate),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function Pt(L,w){let q=i.get(L);if(L.isVideoTexture&&Be(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){let ft=L.image;if(ft===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(q,L,w);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+w)}function Vt(L,w){let q=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){Fe(q,L,w);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+w)}function Jt(L,w){let q=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){Fe(q,L,w);return}e.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+w)}function Nt(L,w){let q=i.get(L);if(L.version>0&&q.__version!==L.version){si(q,L,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+w)}let ne={[Bo]:n.REPEAT,[dn]:n.CLAMP_TO_EDGE,[zo]:n.MIRRORED_REPEAT},Ne={[Ke]:n.NEAREST,[Df]:n.NEAREST_MIPMAP_NEAREST,[ma]:n.NEAREST_MIPMAP_LINEAR,[vi]:n.LINEAR,[bl]:n.LINEAR_MIPMAP_NEAREST,[Rn]:n.LINEAR_MIPMAP_LINEAR},Qt={[Ff]:n.NEVER,[nd]:n.ALWAYS,[Bf]:n.LESS,[ed]:n.LEQUAL,[zf]:n.EQUAL,[id]:n.GEQUAL,[Hf]:n.GREATER,[Vf]:n.NOTEQUAL};function xe(L,w){if(w.type===tn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===vi||w.magFilter===bl||w.magFilter===ma||w.magFilter===Rn||w.minFilter===vi||w.minFilter===bl||w.minFilter===ma||w.minFilter===Rn)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,ne[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ne[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ne[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,Ne[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,Ne[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Qt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ke||w.minFilter!==ma&&w.minFilter!==Rn||w.type===tn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ce(L,w){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",F),B(w));let ft=w.source,ot=f.get(ft);ot===void 0&&(ot={},f.set(ft,ot));let Mt=nt(w);if(Mt!==L.__cacheKey){ot[Mt]===void 0&&(ot[Mt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ot[Mt].usedTimes++;let At=ot[L.__cacheKey];At!==void 0&&(ot[L.__cacheKey].usedTimes--,At.usedTimes===0&&Y(w)),L.__cacheKey=Mt,L.__webglTexture=ot[Mt].texture}return q}function ue(L,w,q){return Math.floor(Math.floor(L/q)/w)}function Oe(L,w,q,ft){let Mt=L.updateRanges;if(Mt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,q,ft,w.data);else{Mt.sort((O,rt)=>O.start-rt.start);let At=0;for(let O=1;O<Mt.length;O++){let rt=Mt[At],et=Mt[O],Et=rt.start+rt.count,mt=ue(et.start,w.width,4),St=ue(rt.start,w.width,4);et.start<=Et+1&&mt===St&&ue(et.start+et.count-1,w.width,4)===mt?rt.count=Math.max(rt.count,et.start+et.count-rt.start):(++At,Mt[At]=et)}Mt.length=At+1;let it=e.getParameter(n.UNPACK_ROW_LENGTH),st=e.getParameter(n.UNPACK_SKIP_PIXELS),wt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let O=0,rt=Mt.length;O<rt;O++){let et=Mt[O],Et=Math.floor(et.start/4),mt=Math.ceil(et.count/4),St=Et%w.width,qt=Math.floor(Et/w.width),ce=mt,gt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,St),e.pixelStorei(n.UNPACK_SKIP_ROWS,qt),e.texSubImage2D(n.TEXTURE_2D,0,St,qt,ce,gt,q,ft,w.data)}L.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,it),e.pixelStorei(n.UNPACK_SKIP_PIXELS,st),e.pixelStorei(n.UNPACK_SKIP_ROWS,wt)}}function Fe(L,w,q){let ft=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ft=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ft=n.TEXTURE_3D);let ot=Ce(L,w),Mt=w.source;e.bindTexture(ft,L.__webglTexture,n.TEXTURE0+q);let At=i.get(Mt);if(Mt.version!==At.__version||ot===!0){if(e.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let gt=ye.getPrimaries(ye.workingColorSpace),jt=w.colorSpace===In?null:ye.getPrimaries(w.colorSpace),he=w.colorSpace===In||gt===jt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let st=_(w.image,!1,s.maxTextureSize);st=Zt(w,st);let wt=r.convert(w.format,w.colorSpace),O=r.convert(w.type),rt=C(w.internalFormat,wt,O,w.normalized,w.colorSpace,w.isVideoTexture);xe(ft,w);let et,Et=w.mipmaps,mt=w.isVideoTexture!==!0,St=At.__version===void 0||ot===!0,qt=Mt.dataReady,ce=A(w,st);if(w.isDepthTexture)rt=v(w.format===Pn,w.type),St&&(mt?e.texStorage2D(n.TEXTURE_2D,1,rt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,rt,st.width,st.height,0,wt,O,null));else if(w.isDataTexture)if(Et.length>0){mt&&St&&e.texStorage2D(n.TEXTURE_2D,ce,rt,Et[0].width,Et[0].height);for(let gt=0,jt=Et.length;gt<jt;gt++)et=Et[gt],mt?qt&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,et.width,et.height,wt,O,et.data):e.texImage2D(n.TEXTURE_2D,gt,rt,et.width,et.height,0,wt,O,et.data);w.generateMipmaps=!1}else mt?(St&&e.texStorage2D(n.TEXTURE_2D,ce,rt,st.width,st.height),qt&&Oe(w,st,wt,O)):e.texImage2D(n.TEXTURE_2D,0,rt,st.width,st.height,0,wt,O,st.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){mt&&St&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ce,rt,Et[0].width,Et[0].height,st.depth);for(let gt=0,jt=Et.length;gt<jt;gt++)if(et=Et[gt],w.format!==nn)if(wt!==null)if(mt){if(qt)if(w.layerUpdates.size>0){let he=pd(et.width,et.height,w.format,w.type);for(let Dt of w.layerUpdates){let be=et.data.subarray(Dt*he/et.data.BYTES_PER_ELEMENT,(Dt+1)*he/et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,Dt,et.width,et.height,1,wt,be)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,0,et.width,et.height,st.depth,wt,et.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,gt,rt,et.width,et.height,st.depth,0,et.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?qt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,0,et.width,et.height,st.depth,wt,O,et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,gt,rt,et.width,et.height,st.depth,0,wt,O,et.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{mt&&St&&e.texStorage2D(n.TEXTURE_2D,ce,rt,Et[0].width,Et[0].height);for(let gt=0,jt=Et.length;gt<jt;gt++)et=Et[gt],w.format!==nn?wt!==null?mt?qt&&e.compressedTexSubImage2D(n.TEXTURE_2D,gt,0,0,et.width,et.height,wt,et.data):e.compressedTexImage2D(n.TEXTURE_2D,gt,rt,et.width,et.height,0,et.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?qt&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,et.width,et.height,wt,O,et.data):e.texImage2D(n.TEXTURE_2D,gt,rt,et.width,et.height,0,wt,O,et.data)}else if(w.isDataArrayTexture)if(mt){if(St&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ce,rt,st.width,st.height,st.depth),qt)if(w.layerUpdates.size>0){let gt=pd(st.width,st.height,w.format,w.type);for(let jt of w.layerUpdates){let he=st.data.subarray(jt*gt/st.data.BYTES_PER_ELEMENT,(jt+1)*gt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,jt,st.width,st.height,1,wt,O,he)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,wt,O,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,rt,st.width,st.height,st.depth,0,wt,O,st.data);else if(w.isData3DTexture)mt?(St&&e.texStorage3D(n.TEXTURE_3D,ce,rt,st.width,st.height,st.depth),qt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,wt,O,st.data)):e.texImage3D(n.TEXTURE_3D,0,rt,st.width,st.height,st.depth,0,wt,O,st.data);else if(w.isFramebufferTexture){if(St)if(mt)e.texStorage2D(n.TEXTURE_2D,ce,rt,st.width,st.height);else{let gt=st.width,jt=st.height;for(let he=0;he<ce;he++)e.texImage2D(n.TEXTURE_2D,he,rt,gt,jt,0,wt,O,null),gt>>=1,jt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){let gt=n.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),st.parentNode!==gt){gt.appendChild(st),u.add(w),gt.onpaint=jt=>{let he=jt.changedElements;for(let Dt of u)he.includes(Dt.image)&&(Dt.needsUpdate=!0)},gt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,st);else{let he=n.RGBA,Dt=n.RGBA,be=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,he,Dt,be,st)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Et.length>0){if(mt&&St){let gt=ee(Et[0]);e.texStorage2D(n.TEXTURE_2D,ce,rt,gt.width,gt.height)}for(let gt=0,jt=Et.length;gt<jt;gt++)et=Et[gt],mt?qt&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,wt,O,et):e.texImage2D(n.TEXTURE_2D,gt,rt,wt,O,et);w.generateMipmaps=!1}else if(mt){if(St){let gt=ee(st);e.texStorage2D(n.TEXTURE_2D,ce,rt,gt.width,gt.height)}qt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,wt,O,st)}else e.texImage2D(n.TEXTURE_2D,0,rt,wt,O,st);M(w)&&w.mipmapsAutoUpdate===!0&&x(ft),At.__version=Mt.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function si(L,w,q){if(w.image.length!==6)return;let ft=Ce(L,w),ot=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+q);let Mt=i.get(ot);if(ot.version!==Mt.__version||ft===!0){e.activeTexture(n.TEXTURE0+q);let At=ye.getPrimaries(ye.workingColorSpace),it=w.colorSpace===In?null:ye.getPrimaries(w.colorSpace),st=w.colorSpace===In||At===it?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let wt=w.isCompressedTexture||w.image[0].isCompressedTexture,O=w.image[0]&&w.image[0].isDataTexture,rt=[];for(let Dt=0;Dt<6;Dt++)!wt&&!O?rt[Dt]=_(w.image[Dt],!0,s.maxCubemapSize):rt[Dt]=O?w.image[Dt].image:w.image[Dt],rt[Dt]=Zt(w,rt[Dt]);let et=rt[0],Et=r.convert(w.format,w.colorSpace),mt=r.convert(w.type),St=C(w.internalFormat,Et,mt,w.normalized,w.colorSpace),qt=w.isVideoTexture!==!0,ce=Mt.__version===void 0||ft===!0,gt=ot.dataReady,jt=A(w,et);xe(n.TEXTURE_CUBE_MAP,w);let he;if(w.isDepthTexture){if(St=v(w.format===Pn,w.type),ce)if(qt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,St,et.width,et.height);else for(let Dt=0;Dt<6;Dt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,St,et.width,et.height,0,Et,mt,null)}else if(wt){qt&&ce&&e.texStorage2D(n.TEXTURE_CUBE_MAP,jt,St,et.width,et.height);for(let Dt=0;Dt<6;Dt++){he=rt[Dt].mipmaps;for(let be=0;be<he.length;be++){let We=he[be];w.format!==nn?Et!==null?qt?gt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,be,0,0,We.width,We.height,Et,We.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,be,St,We.width,We.height,0,We.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,be,0,0,We.width,We.height,Et,mt,We.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,be,St,We.width,We.height,0,Et,mt,We.data)}}}else{if(he=w.mipmaps,qt&&ce){he.length>0&&jt++;let Dt=ee(rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,jt,St,Dt.width,Dt.height)}for(let Dt=0;Dt<6;Dt++)if(O){qt?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,rt[Dt].width,rt[Dt].height,Et,mt,rt[Dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,St,rt[Dt].width,rt[Dt].height,0,Et,mt,rt[Dt].data);for(let be=0;be<he.length;be++){let on=he[be].image[Dt].image;qt?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,be+1,0,0,on.width,on.height,Et,mt,on.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,be+1,St,on.width,on.height,0,Et,mt,on.data)}}else{qt?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,Et,mt,rt[Dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,St,Et,mt,rt[Dt]);for(let be=0;be<he.length;be++){let We=he[be];qt?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,be+1,0,0,Et,mt,We.image[Dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,be+1,St,Et,mt,We.image[Dt])}}}M(w)&&w.mipmapsAutoUpdate===!0&&x(n.TEXTURE_CUBE_MAP),Mt.__version=ot.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ie(L,w,q,ft,ot,Mt){let At=r.convert(q.format,q.colorSpace),it=r.convert(q.type),st=C(q.internalFormat,At,it,q.normalized,q.colorSpace),wt=i.get(w),O=i.get(q);if(O.__renderTarget=w,!wt.__hasExternalTextures){let rt=Math.max(1,w.width>>Mt),et=Math.max(1,w.height>>Mt);ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?e.texImage3D(ot,Mt,st,rt,et,w.depth,0,At,it,null):e.texImage2D(ot,Mt,st,rt,et,0,At,it,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),Lt(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,ot,O.__webglTexture,0,Le(w)):(ot===n.TEXTURE_2D||ot>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ft,ot,O.__webglTexture,Mt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bi(L,w,q){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){let ft=w.depthTexture,ot=ft&&ft.isDepthTexture?ft.type:null,Mt=v(w.stencilBuffer,ot),At=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Lt(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le(w),Mt,w.width,w.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le(w),Mt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,L)}else{let ft=w.textures;for(let ot=0;ot<ft.length;ot++){let Mt=ft[ot],At=r.convert(Mt.format,Mt.colorSpace),it=r.convert(Mt.type),st=C(Mt.internalFormat,At,it,Mt.normalized,Mt.colorSpace);Lt(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le(w),st,w.width,w.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le(w),st,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,st,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ge(L,w,q){let ft=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=i.get(w.depthTexture);ot.__renderTarget=w;let Mt=ft?w.depthTexture.image[0]:w.depthTexture.image;(!ot.__webglTexture||Mt.width!==w.width||Mt.height!==w.height)&&(Mt.width=w.width,Mt.height=w.height,w.depthTexture.needsUpdate=!0),ft?Nt(w.depthTexture,0):Pt(w.depthTexture,0);let At=ot.__webglTexture,it=Le(w),st=ft?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,wt=w.depthTexture.format===Pn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===wn)Lt(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,wt,st,At,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,wt,st,At,0);else if(w.depthTexture.format===Pn)Lt(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,wt,st,At,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,wt,st,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ri(L){let w=i.get(L),q=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){let ft=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ft){let ot=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ft.removeEventListener("dispose",ot)};ft.addEventListener("dispose",ot),w.__depthDisposeCallback=ot}w.__boundDepthTexture=ft}if(L.depthTexture&&!w.__autoAllocateDepthBuffer)if(q)for(let ft=0;ft<6;ft++)Ge(w.__webglFramebuffer[ft],L,ft);else L.texture.mipmaps.length>0?Ge(w.__webglFramebuffer[0],L,0):Ge(w.__webglFramebuffer,L,0);else if(q){w.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ft]),w.__webglDepthbuffer[ft]===void 0)w.__webglDepthbuffer[ft]=n.createRenderbuffer(),Bi(w.__webglDepthbuffer[ft],L,!1);else{let ot=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=w.__webglDepthbuffer[ft];n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,Mt)}}else if(L.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Bi(w.__webglDepthbuffer,L,!1);else{let ot=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,Mt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ai(L,w,q){let ft=i.get(L);w!==void 0&&Ie(ft.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&ri(L)}function Ei(L){let w=L.texture,q=i.get(L),ft=i.get(w);L.addEventListener("dispose",V),B(L);let ot=L.textures,Mt=L.isWebGLCubeRenderTarget===!0,At=ot.length>1;if(At||(ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture()),ft.__version=w.version,a.memory.textures++),Mt){q.__webglFramebuffer=[];for(let it=0;it<6;it++)if(w.mipmaps.length>0){q.__webglFramebuffer[it]=[];for(let st=0;st<w.mipmaps.length;st++)q.__webglFramebuffer[it][st]=n.createFramebuffer()}else q.__webglFramebuffer[it]=n.createFramebuffer()}else{if(w.mipmaps.length>0){q.__webglFramebuffer=[];for(let it=0;it<w.mipmaps.length;it++)q.__webglFramebuffer[it]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(At)for(let it=0,st=ot.length;it<st;it++){let wt=i.get(ot[it]);wt.__webglTexture===void 0&&(wt.__webglTexture=n.createTexture(),a.memory.textures++)}if(L.samples>0&&Lt(L)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let it=0;it<ot.length;it++){let st=ot[it];q.__webglColorRenderbuffer[it]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[it]);let wt=r.convert(st.format,st.colorSpace),O=r.convert(st.type),rt=C(st.internalFormat,wt,O,st.normalized,st.colorSpace,L.isXRRenderTarget===!0),et=Le(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,et,rt,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,q.__webglColorRenderbuffer[it])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Bi(q.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(n.TEXTURE_CUBE_MAP,ft.__webglTexture),xe(n.TEXTURE_CUBE_MAP,w);for(let it=0;it<6;it++)if(w.mipmaps.length>0)for(let st=0;st<w.mipmaps.length;st++)Ie(q.__webglFramebuffer[it][st],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,st);else Ie(q.__webglFramebuffer[it],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);M(w)?x(n.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(At){for(let it=0,st=ot.length;it<st;it++){let wt=ot[it],O=i.get(wt),rt=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(rt=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,O.__webglTexture),xe(rt,wt),Ie(q.__webglFramebuffer,L,wt,n.COLOR_ATTACHMENT0+it,rt,0),M(wt)&&x(rt)}e.unbindTexture()}else{let it=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(it=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,ft.__webglTexture),xe(it,w),w.mipmaps.length>0)for(let st=0;st<w.mipmaps.length;st++)Ie(q.__webglFramebuffer[st],L,w,n.COLOR_ATTACHMENT0,it,st);else Ie(q.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,it,0);M(w)?x(it):w.mipmaps.length>0&&n.texParameteri(it,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}L.depthBuffer&&ri(L)}function H(L){let w=L.textures;for(let q=0,ft=w.length;q<ft;q++){let ot=w[q];if(M(ot)&&ot.mipmapsAutoUpdate===!0){let Mt=E(L),At=i.get(ot).__webglTexture;e.bindTexture(Mt,At),x(Mt),e.unbindTexture()}}}let Ti=[];function Re(L){if(L.samples>0){if(Lt(L)===!1){let w=L.textures,q=L.width,ft=L.height,ot=n.COLOR_BUFFER_BIT,Mt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(L),it=w.length>1;if(it)for(let wt=0;wt<w.length;wt++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let wt=0;wt<w.length;wt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ot|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ot|=n.STENCIL_BUFFER_BIT)),it){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[wt]);let O=i.get(w[wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,O,0)}n.blitFramebuffer(0,0,q,ft,0,0,q,ft,ot,n.NEAREST),l===!0&&(Ti.length=0,Ti.push(n.COLOR_ATTACHMENT0+wt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Ti.push(Mt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ti))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),it)for(let wt=0;wt<w.length;wt++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,At.__webglColorRenderbuffer[wt]);let O=i.get(w[wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,O,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Le(L){return Math.min(s.maxSamples,L.samples)}function Lt(L){let w=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Be(L){let w=a.render.frame;h.get(L)!==w&&(h.set(L,w),L.update())}function Zt(L,w){let q=L.colorSpace,ft=L.format,ot=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Dr&&q!==In&&(ye.getTransfer(q)===Te?(ft!==nn||ot!==Ci)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",q)),w}function ee(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=lt,this.getTextureUnits=dt,this.setTextureUnits=Ot,this.setTexture2D=Pt,this.setTexture2DArray=Vt,this.setTexture3D=Jt,this.setTextureCube=Nt,this.rebindTextures=ai,this.setupRenderTarget=Ei,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=ri,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Lt,this.dispose=G}function Vx(n,t){function e(i,s=In){let r,a=ye.getTransfer(s);if(i===Ci)return n.UNSIGNED_BYTE;if(i===Sl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===jh)return n.BYTE;if(i===Yh)return n.SHORT;if(i===or)return n.UNSIGNED_SHORT;if(i===Ml)return n.INT;if(i===Qi)return n.UNSIGNED_INT;if(i===tn)return n.FLOAT;if(i===en)return n.HALF_FLOAT;if(i===Kh)return n.ALPHA;if(i===Qh)return n.RGB;if(i===nn)return n.RGBA;if(i===wn)return n.DEPTH_COMPONENT;if(i===Pn)return n.DEPTH_STENCIL;if(i===td)return n.RED;if(i===El)return n.RED_INTEGER;if(i===Jn)return n.RG;if(i===Tl)return n.RG_INTEGER;if(i===Al)return n.RGBA_INTEGER;if(i===ga||i===_a||i===ya||i===va)if(a===Te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cl||i===Rl||i===Pl||i===Il)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ll||i===kl||i===Dl||i===Nl||i===Ul||i===xa||i===Ol)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ll||i===kl)return a===Te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Dl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Nl)return r.COMPRESSED_R11_EAC;if(i===Ul)return r.COMPRESSED_SIGNED_R11_EAC;if(i===xa)return r.COMPRESSED_RG11_EAC;if(i===Ol)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fl||i===Bl||i===zl||i===Hl||i===Vl||i===Gl||i===Wl||i===$l||i===Xl||i===ql||i===jl||i===Yl||i===Zl||i===Jl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$l)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ql)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kl||i===Ql||i===tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Kl)return a===Te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ec||i===ic||i===ba||i===nc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ec)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Cd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Xr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Vi({vertexShader:Gx,fragmentShader:Wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ve(new ea(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rd=class extends Zi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",p=new Cd,m={},_=e.getContextAttributes(),M=null,x=null,E=[],C=[],v=new It,A=null,B=null,k=new yi;k.viewport=new Ae;let F=new yi;F.viewport=new Ae;let V=[k,F],Q=new _l,U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let Pt=E[nt];return Pt===void 0&&(Pt=new Ys,E[nt]=Pt),Pt.getTargetRaySpace()},this.getControllerGrip=function(nt){let Pt=E[nt];return Pt===void 0&&(Pt=new Ys,E[nt]=Pt),Pt.getGripSpace()},this.getHand=function(nt){let Pt=E[nt];return Pt===void 0&&(Pt=new Ys,E[nt]=Pt),Pt.getHandSpace()};function tt(nt){let Pt=C.indexOf(nt.inputSource);if(Pt===-1)return;let Vt=E[Pt];Vt!==void 0&&(Vt.update(nt.inputSource,nt.frame,c||a),Vt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function Y(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ht);for(let nt=0;nt<E.length;nt++){let Pt=C[nt];Pt!==null&&(C[nt]=null,E[nt].disconnect(Pt))}U=null,G=null,p.reset();for(let nt in m)delete m[nt];if(t.setRenderTarget(M),f=null,d=null,u=null,s=null,x=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(v.width,v.height,!1),B!==null){let nt=B.camera;nt.fov=B.fov,nt.zoom=B.zoom,nt.updateProjectionMatrix(),B=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,i.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,i.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ht),_.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Vt=null,Jt=null,Nt=null;_.depth&&(Nt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Vt=_.stencil?Pn:wn,Jt=_.stencil?ps:Qi);let ne={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ne),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Di(d.textureWidth,d.textureHeight,{format:nn,type:Ci,depthTexture:new Cn(d.textureWidth,d.textureHeight,Jt,void 0,void 0,void 0,void 0,void 0,void 0,Vt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Vt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Vt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Di(f.framebufferWidth,f.framebufferHeight,{format:nn,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ht(nt){for(let Pt=0;Pt<nt.removed.length;Pt++){let Vt=nt.removed[Pt],Jt=C.indexOf(Vt);Jt>=0&&(C[Jt]=null,E[Jt].disconnect(Vt))}for(let Pt=0;Pt<nt.added.length;Pt++){let Vt=nt.added[Pt],Jt=C.indexOf(Vt);if(Jt===-1){for(let ne=0;ne<E.length;ne++)if(ne>=C.length){C.push(Vt),Jt=ne;break}else if(C[ne]===null){C[ne]=Vt,Jt=ne;break}if(Jt===-1)break}let Nt=E[Jt];Nt&&Nt.connect(Vt)}}function $(nt,Pt){Pt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(Pt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let Pt=nt.near,Vt=nt.far;p.texture!==null&&(p.depthNear>0&&(Pt=p.depthNear),p.depthFar>0&&(Vt=p.depthFar)),Q.near=F.near=k.near=Pt,Q.far=F.far=k.far=Vt,(U!==Q.near||G!==Q.far)&&(s.updateRenderState({depthNear:Q.near,depthFar:Q.far}),U=Q.near,G=Q.far),Q.layers.mask=nt.layers.mask|6,k.layers.mask=Q.layers.mask&-5,F.layers.mask=Q.layers.mask&-3;let Jt=nt.parent,Nt=Q.cameras;$(Q,Jt);for(let ne=0;ne<Nt.length;ne++)$(Nt[ne],Jt);Q.projectionMatrix.copy(k.projectionMatrix),Q.projectionMatrixInverse.copy(k.projectionMatrixInverse),B===null&&nt.isPerspectiveCamera&&(B={camera:nt,fov:nt.fov,zoom:nt.zoom}),lt(nt,Q,Jt)};function lt(nt,Pt,Vt){Vt===null?nt.matrix.copy(Pt.matrixWorld):(nt.matrix.copy(Vt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(Pt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(Pt.projectionMatrix),nt.projectionMatrixInverse.copy(Pt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Xs*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(nt){l=nt,d!==null&&(d.fixedFoveation=nt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=nt)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(Q)},this.getCameraTexture=function(nt){return m[nt]};let dt=null;function Ot(nt,Pt){if(h=Pt.getViewerPose(c||a),g=Pt,h!==null){let Vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Jt=!1;Vt.length!==Q.cameras.length&&(Q.cameras.length=0,Jt=!0);for(let Qt=0;Qt<Vt.length;Qt++){let xe=Vt[Qt],Ce=null;if(f!==null)Ce=f.getViewport(xe);else{let Oe=u.getViewSubImage(d,xe);Ce=Oe.viewport,Qt===0&&(t.setRenderTargetTextures(x,Oe.colorTexture,Oe.depthStencilTexture),t.setRenderTarget(x))}let ue=V[Qt];ue===void 0&&(ue=new yi,ue.layers.enable(Qt),ue.viewport=new Ae,V[Qt]=ue),ue.matrix.fromArray(xe.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(xe.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Qt===0&&(Q.matrix.copy(ue.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Jt===!0&&Q.cameras.push(ue)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=i.getBinding();let Qt=u.getDepthInformation(Vt[0]);Qt&&Qt.isValid&&Qt.texture&&p.init(Qt,s.renderState)}if(Nt&&Nt.includes("camera-access")&&y){t.state.unbindTexture(),u=i.getBinding();for(let Qt=0;Qt<Vt.length;Qt++){let xe=Vt[Qt].camera;if(xe){let Ce=m[xe];Ce||(Ce=new Xr,m[xe]=Ce);let ue=u.getCameraImage(xe);Ce.sourceTexture=ue}}}}for(let Vt=0;Vt<E.length;Vt++){let Jt=C[Vt],Nt=E[Vt];Jt!==null&&Nt!==void 0&&Nt.update(Jt,Pt,c||a)}dt&&dt(nt,Pt),Pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Pt}),g=null}let te=new bp;te.setAnimationLoop(Ot),this.setAnimationLoop=function(nt){dt=nt},this.dispose=function(){}}},$x=new Pe,Ip=new ae;Ip.set(-1,0,0,0,1,0,0,0,1);function Xx(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,dd(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,M,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,_,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===bi&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===bi&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=t.get(m),M=_.envMap,x=_.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4($x.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ip),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===bi&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qx(n,t,e,i){let s={},r={};function a(_,M){let x=M.program;i.uniformBlockBinding(_,x,s[_.id])}function o(_,M){let x=s[_.id];x===void 0&&(g(_),x=l(_),s[_.id]=x,_.addEventListener("dispose",p));let E=M.program;i.updateUBOMapping(_,E);let C=t.render.frame;r[_.id]!==C&&(c(_),r[_.id]=C)}function l(_){let M=n.createBuffer(),x=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,x,E),n.bindBuffer(n.UNIFORM_BUFFER,null),M}function c(_){let M=s[_.id],x=_.uniforms,E=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,v=x.length;C<v;C++){let A=x[C];if(Array.isArray(A))for(let B=0,k=A.length;B<k;B++)h(A[B],C,B,E);else h(A,C,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(_,M,x,E){if(d(_,M,x,E)===!0){let C=_.__offset,v=_.value;if(Array.isArray(v)){let A=0;for(let B=0;B<v.length;B++){let k=v[B],F=y(k,!0);u(k,_.__data,A),A+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,C,_.__data)}}function u(_,M,x){typeof _=="number"||typeof _=="boolean"?M[x]=_:_.isMatrix3?(M[x]=_.elements[0],M[x+1]=_.elements[1],M[x+2]=_.elements[2],M[x+3]=0,M[x+4]=_.elements[3],M[x+5]=_.elements[4],M[x+6]=_.elements[5],M[x+7]=0,M[x+8]=_.elements[6],M[x+9]=_.elements[7],M[x+10]=_.elements[8],M[x+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-x),x):_.toArray(M,x)}function d(_,M,x,E){let C=_.value,v=M+"_"+x;if(Array.isArray(C)){E[v]===void 0&&(E[v]=[]);let A=E[v],B=!1;for(let k=0;k<C.length;k++)f(C[k],A,k)===!0&&(B=!0);return B}return f(C,E,v)}function f(_,M,x){if(M[x]===void 0)return typeof _=="number"||typeof _=="boolean"?M[x]=_:ArrayBuffer.isView(_)?M[x]=_.slice():M[x]=_.clone(),!0;{let E=M[x];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return M[x]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function g(_){let M=_.uniforms,x=0,E=16;for(let v=0,A=M.length;v<A;v++){let B=Array.isArray(M[v])?M[v]:[M[v]];for(let k=0,F=B.length;k<F;k++){let V=B[k],Q=Array.isArray(V.value)?V.value:[V.value],U=Array.isArray(M[v])||Array.isArray(V.value),G=x;for(let Y=0,ht=Q.length;Y<ht;Y++){let $=Q[Y],lt=y($,U),dt=x%E,Ot=dt%lt.boundary,te=dt+Ot;x+=Ot,te!==0&&E-te<lt.storage&&(x+=E-te),Y===0&&(G=x),x+=lt.storage}let tt=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new tt((x-G)/Float32Array.BYTES_PER_ELEMENT),V.__offset=G}}let C=x%E;return C>0&&(x+=E-C),_.__size=x,_.__cache={},this}function y(_,M){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=16,x.storage=48):_.isMatrix4?(x.boundary=16,x.storage=64):_.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(x.boundary=16,x.storage=_.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function p(_){let M=_.target;M.removeEventListener("dispose",p),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:m}}var jx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fn=null;function Yx(){return fn===null&&(fn=new Xo(jx,16,16,Jn,en),fn.name="DFG_LUT",fn.minFilter=vi,fn.magFilter=vi,fn.wrapS=dn,fn.wrapT=dn,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn}var cc=class{constructor(t={}){let{canvas:e=Gf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ci}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=f,p=new Set([Al,Tl,El]),m=new Set([Ci,Qi,or,ps,Sl,wl]),_=new Uint32Array(4),M=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},E=null,C=null,v=[],A=[],B=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,F=!1,V=null,Q=null,U=null,G=null;this._outputColorSpace=Li;let tt=0,Y=0,ht=null,$=-1,lt=null,dt=new Ae,Ot=new Ae,te=null,nt=new _e(0),Pt=0,Vt=e.width,Jt=e.height,Nt=1,ne=null,Ne=null,Qt=new Ae(0,0,Vt,Jt),xe=new Ae(0,0,Vt,Jt),Ce=!1,ue=new Wn,Oe=new qo,Fe=!1,si=!1,Ie=new Pe,Bi=new N,Ge=new Ae,ri={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ai=!1;function Ei(){return ht===null?Nt:1}let H=i;function Ti(T,z){return e.getContext(T,z)}let Re,Le,Lt,Be,Zt,ee,L,w,q,ft,ot,Mt,At,it,st,wt,O,rt,et,Et,mt,St,qt;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",jt,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),H===null){let z="webgl2";if(H=Ti(z,T),H===null)throw Ti(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ce()}catch(T){throw e.removeEventListener("webglcontextlost",jt,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),ie("WebGLRenderer: "+T.message),T}function ce(){Re=new av(H),Re.init(),mt=new Vx(H,Re),Le=new Yy(H,Re,t,mt),Lt=new zx(H,Re),Le.reversedDepthBuffer&&d&&Lt.buffers.depth.setReversed(!0),Q=H.createFramebuffer(),U=H.createFramebuffer(),G=H.createFramebuffer(),Be=new cv(H),Zt=new Tx,ee=new Hx(H,Re,Lt,Zt,Le,mt,Be),L=new rv(k),w=new d_(H),St=new qy(H,w),q=new ov(H,w,Be,St),ft=new dv(H,q,w,St,Be),rt=new hv(H,Le,ee),st=new Zy(Zt),ot=new Ex(k,L,Re,Le,St,st),Mt=new Xx(k,Zt),At=new Cx,it=new Dx(Re),O=new Xy(k,L,Lt,ft,g,l),wt=new Bx(k,ft,Le),qt=new qx(H,Be,Le,Lt),et=new jy(H,Re,Be),Et=new lv(H,Re,Be),Be.programs=ot.programs,k.capabilities=Le,k.extensions=Re,k.properties=Zt,k.renderLists=At,k.shadowMap=wt,k.state=Lt,k.info=Be}y!==Ci&&(B=new fv(y,e.width,e.height,o,s,r));let gt=new Rd(k,H);this.xr=gt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let T=Re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Nt},this.setPixelRatio=function(T){T!==void 0&&(Nt=T,this.setSize(Vt,Jt,!1))},this.getSize=function(T){return T.set(Vt,Jt)},this.setSize=function(T,z,J=!0){if(gt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Vt=T,Jt=z,e.width=Math.floor(T*Nt),e.height=Math.floor(z*Nt),J===!0&&(e.style.width=T+"px",e.style.height=z+"px"),B!==null&&B.setSize(e.width,e.height),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(Vt*Nt,Jt*Nt).floor()},this.setDrawingBufferSize=function(T,z,J){Vt=T,Jt=z,Nt=J,e.width=Math.floor(T*J),e.height=Math.floor(z*J),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(y===Ci){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(dt)},this.getViewport=function(T){return T.copy(Qt)},this.setViewport=function(T,z,J,X){T.isVector4?Qt.set(T.x,T.y,T.z,T.w):Qt.set(T,z,J,X),Lt.viewport(dt.copy(Qt).multiplyScalar(Ei()).round())},this.getScissor=function(T){return T.copy(xe)},this.setScissor=function(T,z,J,X){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,z,J,X),Lt.scissor(Ot.copy(xe).multiplyScalar(Ei()).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(T){Lt.setScissorTest(Ce=T)},this.setOpaqueSort=function(T){ne=T},this.setTransparentSort=function(T){Ne=T},this.getClearColor=function(T){return T.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,J=!0){let X=0;if(T){let j=!1;if(ht!==null){let Rt=ht.texture.format;j=p.has(Rt)}if(j){let Rt=ht.texture.type,zt=m.has(Rt),Tt=O.getClearColor(),Ut=O.getClearAlpha(),Xt=Tt.r,se=Tt.g,me=Tt.b;zt?(_[0]=Xt,_[1]=se,_[2]=me,_[3]=Ut,H.clearBufferuiv(H.COLOR,0,_)):(M[0]=Xt,M[1]=se,M[2]=me,M[3]=Ut,H.clearBufferiv(H.COLOR,0,M))}else X|=H.COLOR_BUFFER_BIT}z&&(X|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),V=T},this.dispose=function(){e.removeEventListener("webglcontextlost",jt,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),O.dispose(),At.dispose(),it.dispose(),ee.dispose(),Zt.dispose(),L.dispose(),ft.dispose(),q.dispose(),St.dispose(),qt.dispose(),ot.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",yr),gt.removeEventListener("sessionend",vr),cn.stop()};function jt(T){T.preventDefault(),Or("WebGLRenderer: Context Lost."),F=!0}function he(){Or("WebGLRenderer: Context Restored."),F=!1;let T=Be.autoReset,z=wt.enabled,J=wt.autoUpdate,X=wt.needsUpdate,j=wt.type;ce(),Be.autoReset=T,wt.enabled=z,wt.autoUpdate=J,wt.needsUpdate=X,wt.type=j}function Dt(T){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function be(T){let z=T.target;z.removeEventListener("dispose",be),We(z)}function We(T){on(T),Zt.remove(T)}function on(T){let z=Zt.get(T).programs;z!==void 0&&(z.forEach(function(J){ot.releaseProgram(J)}),T.isShaderMaterial&&ot.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,J,X,j,Rt){z===null&&(z=ri);let zt=j.isMesh&&j.matrixWorld.determinantAffine()<0,Tt=jc(T,z,J,X,j);Lt.setMaterial(X,zt);let Ut=J.index,Xt=1;if(X.wireframe===!0){if(Ut=q.getWireframeAttribute(J),Ut===void 0)return;Xt=2}let se=J.drawRange,me=J.attributes.position,Gt=se.start*Xt,fe=(se.start+se.count)*Xt;Rt!==null&&(Gt=Math.max(Gt,Rt.start*Xt),fe=Math.min(fe,(Rt.start+Rt.count)*Xt)),Ut!==null?(Gt=Math.max(Gt,0),fe=Math.min(fe,Ut.count)):me!=null&&(Gt=Math.max(Gt,0),fe=Math.min(fe,me.count));let S=fe-Gt;if(S<0||S===1/0)return;St.setup(j,X,Tt,J,Ut);let b,R=et;if(Ut!==null&&(b=w.get(Ut),R=Et,R.setIndex(b)),j.isMesh)X.wireframe===!0?(Lt.setLineWidth(X.wireframeLinewidth*Ei()),R.setMode(H.LINES)):R.setMode(H.TRIANGLES);else if(j.isLine){let P=X.linewidth;P===void 0&&(P=1),Lt.setLineWidth(P*Ei()),j.isLineSegments?R.setMode(H.LINES):j.isLineLoop?R.setMode(H.LINE_LOOP):R.setMode(H.LINE_STRIP)}else j.isPoints?R.setMode(H.POINTS):j.isSprite&&R.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(Re.get("WEBGL_multi_draw"))R.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let P=j._multiDrawStarts,D=j._multiDrawCounts,K=j._multiDrawCount,W=Ut?w.get(Ut).bytesPerElement:1,Z=Zt.get(X).currentProgram.getUniforms();for(let at=0;at<K;at++)Z.setValue(H,"_gl_DrawID",at),R.render(P[at]/W,D[at])}else if(j.isInstancedMesh)R.renderInstances(Gt,S,j.count);else if(J.isInstancedBufferGeometry){let P=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,D=Math.min(J.instanceCount,P);R.renderInstances(Gt,S,D)}else R.render(Gt,S)};function Za(T,z,J,X){V!==null&&T.isNodeMaterial&&V.setObject(X,T),Fe===!0&&st.setState(T,J,!1),T.transparent===!0&&T.side===Mi&&T.forceSinglePass===!1?(T.side=bi,T.needsUpdate=!0,is(T,z,X),T.side=Zn,T.needsUpdate=!0,is(T,z,X),T.side=Mi):is(T,z,X)}this.compile=function(T,z,J=null){J===null&&(J=T),V!==null&&V.renderStart(T,z,J),C=it.get(J),C.init(z),A.push(C),J.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(C.pushLight(j),j.castShadow&&C.pushShadow(j))}),T!==J&&T.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(C.pushLight(j),j.castShadow&&C.pushShadow(j))}),C.setupLights(),V!==null&&V.updateLights(C.state.lightsArray),si=this.localClippingEnabled,Fe=st.init(this.clippingPlanes,si),Fe===!0&&st.setGlobalState(this.clippingPlanes,z),V!==null&&wt.render(C.state.shadowsArray,J,z);let X=new Set;return T.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Rt=j.material;if(Rt)if(Array.isArray(Rt))for(let zt=0;zt<Rt.length;zt++){let Tt=Rt[zt];Za(Tt,J,z,j),X.add(Tt)}else Za(Rt,J,z,j),X.add(Rt)}),C=A.pop(),V!==null&&V.renderEnd(),X},this.compileAsync=function(T,z,J=null){let X=this.compile(T,z,J);return new Promise(j=>{function Rt(){if(X.forEach(function(zt){let Ut=Zt.get(zt).currentProgram;(Ut===void 0||Ut.isReady())&&X.delete(zt)}),X.size===0){j(T);return}setTimeout(Rt,10)}Re.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let ln=null;function Ja(T){ln&&ln(T)}function yr(){cn.stop()}function vr(){cn.start()}let cn=new bp;cn.setAnimationLoop(Ja),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(T){ln=T,gt.setAnimationLoop(T),T===null?cn.stop():cn.start()},gt.addEventListener("sessionstart",yr),gt.addEventListener("sessionend",vr),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;V!==null&&V.renderStart(T,z);let J=gt.enabled===!0&&gt.isPresenting===!0,X=B!==null&&(ht===null||J)&&B.begin(k,ht);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(z),z=gt.getCamera()),T.isScene===!0&&T.onBeforeRender(k,T,z,ht),C=it.get(T,A.length),C.init(z),C.state.textureUnits=ee.getTextureUnits(),A.push(C),Ie.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?Oe.setFromArrayCamera(z):ue.setFromProjectionMatrix(Ie,Hi,z.reversedDepth),si=this.localClippingEnabled,Fe=st.init(this.clippingPlanes,si),E=At.get(T,v.length),E.init(),v.push(E),this.info.render.frame++,gt.enabled===!0&&gt.isPresenting===!0){let zt=k.xr.getDepthSensingMesh();zt!==null&&Ss(zt,z,-1/0,k.sortObjects)}Ss(T,z,0,k.sortObjects),E.finish(),V!==null&&V.updateLights(C.state.lightsArray),k.sortObjects===!0&&E.sort(ne,Ne),ai=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,ai&&O.addToRenderList(E,T),this.info.autoReset===!0&&this.info.reset(),Fe===!0&&st.beginShadows();let j=C.state.shadowsArray;if(wt.render(j,T,z),Fe===!0&&st.endShadows(),(X&&B.hasRenderPass())===!1){let zt=E.opaque,Tt=E.transmissive;if(C.setupLights(),z.isArrayCamera){let Ut=z.cameras;if(Tt.length>0)for(let Xt=0,se=Ut.length;Xt<se;Xt++){let me=Ut[Xt];Qa(zt,Tt,T,me)}ai&&O.render(T);for(let Xt=0,se=Ut.length;Xt<se;Xt++){let me=Ut[Xt];Ka(E,T,me,me.viewport)}}else Tt.length>0&&Qa(zt,Tt,T,z),ai&&O.render(T),Ka(E,T,z)}ht!==null&&Y===0&&(ee.updateMultisampleRenderTarget(ht),ee.updateRenderTargetMipmap(ht)),X&&B.end(k),T.isScene===!0&&T.onAfterRender(k,T,z),St.resetDefaultState(),$=-1,lt=null,A.pop(),A.length>0?(C=A[A.length-1],ee.setTextureUnits(C.state.textureUnits),Fe===!0&&st.setGlobalState(k.clippingPlanes,C.state.camera)):C=null,v.pop(),v.length>0?E=v[v.length-1]:E=null,V!==null&&V.renderEnd()};function Ss(T,z,J,X){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)C.pushLight(T),T.castShadow&&C.pushShadow(T);else if(T.isSprite){let zt=z.isArrayCamera?Oe:ue;if(!T.frustumCulled||T.intersectsFrustum(zt)){X&&Ge.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ie);let Tt=ft.update(T),Ut=T.material;Ut.visible&&E.push(T,Tt,Ut,J,Ge.z,null,z)}}else if(T.isMesh||T.isLine||T.isPoints){let zt=z.isArrayCamera?Oe:ue;if(!T.frustumCulled||T.intersectsFrustum(zt)){let Tt=ft.update(T),Ut=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ge.copy(T.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Ge.copy(Tt.boundingSphere.center)),Ge.applyMatrix4(T.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ut)){let Xt=Tt.groups;for(let se=0,me=Xt.length;se<me;se++){let Gt=Xt[se],fe=Ut[Gt.materialIndex];fe&&fe.visible&&E.push(T,Tt,fe,J,Ge.z,Gt,z)}}else Ut.visible&&E.push(T,Tt,Ut,J,Ge.z,null,z)}}}let Rt=T.children;for(let zt=0,Tt=Rt.length;zt<Tt;zt++)Ss(Rt[zt],z,J,X)}function Ka(T,z,J,X){let{opaque:j,transmissive:Rt,transparent:zt}=T;C.setupLightsView(J),Fe===!0&&st.setGlobalState(k.clippingPlanes,J),X&&Lt.viewport(dt.copy(X)),j.length>0&&ws(j,z,J),Rt.length>0&&ws(Rt,z,J),zt.length>0&&ws(zt,z,J),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function Qa(T,z,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[X.id]===void 0){let Gt=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[X.id]=new Di(1,1,{generateMipmaps:!0,type:Gt?en:Ci,minFilter:Rn,samples:Math.max(4,Le.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ye.workingColorSpace})}let Rt=C.state.transmissionRenderTarget[X.id],zt=X.viewport||dt;Rt.setSize(zt.z*k.transmissionResolutionScale,zt.w*k.transmissionResolutionScale);let Tt=k.getRenderTarget(),Ut=k.getActiveCubeFace(),Xt=k.getActiveMipmapLevel();k.setRenderTarget(Rt),k.getClearColor(nt),Pt=k.getClearAlpha(),Pt<1&&k.setClearColor(16777215,.5),k.clear(),ai&&O.render(J);let se=k.toneMapping;k.toneMapping=un;let me=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),C.setupLightsView(X),Fe===!0&&st.setGlobalState(k.clippingPlanes,X),ws(T,J,X),ee.updateMultisampleRenderTarget(Rt),ee.updateRenderTargetMipmap(Rt),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let fe=0,S=z.length;fe<S;fe++){let b=z[fe],{object:R,geometry:P,material:D,group:K}=b;if(D.side===Mi&&R.layers.test(X.layers)){let W=D.side;D.side=bi,D.needsUpdate=!0,to(R,J,X,P,D,K),D.side=W,D.needsUpdate=!0,Gt=!0}}Gt===!0&&(ee.updateMultisampleRenderTarget(Rt),ee.updateRenderTargetMipmap(Rt))}k.setRenderTarget(Tt,Ut,Xt),k.setClearColor(nt,Pt),me!==void 0&&(X.viewport=me),k.toneMapping=se}function ws(T,z,J){let X=z.isScene===!0?z.overrideMaterial:null;for(let j=0,Rt=T.length;j<Rt;j++){let zt=T[j],{object:Tt,geometry:Ut,group:Xt}=zt,se=zt.material;se.allowOverride===!0&&X!==null&&(se=X),Tt.layers.test(J.layers)&&to(Tt,z,J,Ut,se,Xt)}}function to(T,z,J,X,j,Rt){V!==null&&j.isNodeMaterial&&V.setObject(T,j),T.onBeforeRender(k,z,J,X,j,Rt),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(k,z,J,X,T,Rt),j.transparent===!0&&j.side===Mi&&j.forceSinglePass===!1?(j.side=bi,j.needsUpdate=!0,k.renderBufferDirect(J,z,X,j,T,Rt),j.side=Zn,j.needsUpdate=!0,k.renderBufferDirect(J,z,X,j,T,Rt),j.side=Mi):k.renderBufferDirect(J,z,X,j,T,Rt),T.onAfterRender(k,z,J,X,j,Rt)}function eo(T){let z=0;for(let J of T)J.texture!==null&&z++;return z}function is(T,z,J){z.isScene!==!0&&(z=ri);let X=Zt.get(T),j=C.state.lights,Rt=C.state.shadowsArray,zt=j.state.version,Tt=ot.getParameters(T,j.state,Rt,z,J,C.state.lightProbeGridArray),Ut=ot.getProgramCacheKey(Tt),Xt=X.programs;X.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,X.fog=z.fog;let se=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;X.envMap=L.get(T.envMap||X.environment,se),X.envMapRotation=X.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Xt===void 0&&(T.addEventListener("dispose",be),Xt=new Map,X.programs=Xt,X.programVariants=new Map);let me=Xt.get(Ut);if(me!==void 0){if(X.currentProgram===me&&X.lightsStateVersion===zt)return no(T,Tt),me}else Tt.uniforms=ot.getUniforms(T),V!==null&&T.isNodeMaterial&&V.build(T,J,Tt),T.onBeforeCompile(Tt,k),me=ot.acquireProgram(Tt,Ut),Xt.set(Ut,me),X.uniforms=Tt.uniforms;let Gt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Gt.clippingPlanes=st.uniform),no(T,Tt),X.needsLights=Zc(T),X.lightsStateVersion=zt,X.needsLights&&(Gt.ambientLightColor.value=j.state.ambient,Gt.lightProbe.value=j.state.probe,Gt.sunLights.value=j.state.sun,Gt.sunLightShadows.value=j.state.sunShadow,Gt.directionalLights.value=j.state.directional,Gt.directionalLightShadows.value=j.state.directionalShadow,Gt.spotLights.value=j.state.spot,Gt.spotLightShadows.value=j.state.spotShadow,Gt.rectAreaLights.value=j.state.rectArea,Gt.ltc_1.value=j.state.rectAreaLTC1,Gt.ltc_2.value=j.state.rectAreaLTC2,Gt.pointLights.value=j.state.point,Gt.pointLightShadows.value=j.state.pointShadow,Gt.hemisphereLights.value=j.state.hemi,Gt.sunShadowMatrix.value=j.state.sunShadowMatrix,Gt.sunShadowCascade.value=j.state.sunShadowCascade,Gt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Gt.spotLightMatrix.value=j.state.spotLightMatrix,Gt.spotLightMap.value=j.state.spotLightMap,Gt.pointShadowMatrix.value=j.state.pointShadowMatrix),X.numLightProbeGrids=eo(C.state.lightProbeGridArray),X.currentProgram=me,X.uniformsList=null,me}function xr(T,z,J,X,j){let Rt=Zt.get(T),zt=Rt.currentProgram.id+","+X+","+j,Tt=Rt.programVariants.get(zt);return Tt===void 0?(Tt=is(T,z,J),Rt.programVariants.set(zt,Tt)):(Rt.currentProgram=Tt,Rt.uniformsList=null,Rt.outputColorSpace=X,Rt.toneMapping=j),Tt}function io(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=lr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function no(T,z){let J=Zt.get(T);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function jc(T,z,J,X,j){z.isScene!==!0&&(z=ri),ee.resetTextureUnits();let Rt=z.fog,zt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?z.environment:null,Tt=ht===null?k.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ye.workingColorSpace,Ut=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Xt=L.get(X.envMap||zt,Ut),se=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,me=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Gt=!!J.morphAttributes.position,fe=!!J.morphAttributes.normal,S=!!J.morphAttributes.color,b=un;X.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(b=k.toneMapping);let R=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,P=R!==void 0?R.length:0,D=Zt.get(X),K=C.state.lights;if(Fe===!0&&(si===!0||T!==lt)){let ct=T===lt&&X.id===$;st.setState(X,T,ct)}let W=!1,Z=!1;X.version===D.__version?D.needsLights&&D.lightsStateVersion!==K.state.version||j.isBatchedMesh&&D.batching===!1||!j.isBatchedMesh&&D.batching===!0||j.isBatchedMesh&&D.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&D.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&D.instancing===!1||!j.isInstancedMesh&&D.instancing===!0||j.isSkinnedMesh&&D.skinning===!1||!j.isSkinnedMesh&&D.skinning===!0||j.isInstancedMesh&&D.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&D.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&D.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&D.instancingMorph===!1&&j.morphTexture!==null||D.envMap!==Xt||X.fog===!0&&D.fog!==Rt||D.numClippingPlanes!==void 0&&(D.numClippingPlanes!==st.numPlanes||D.numIntersection!==st.numIntersection)||D.vertexAlphas!==se||D.vertexTangents!==me||D.morphTargets!==Gt||D.morphNormals!==fe||D.morphColors!==S||D.morphTargetsCount!==P||D.numLightProbeGrids!==eo(C.state.lightProbeGridArray)?W=!0:(D.outputColorSpace!==Tt||D.toneMapping!==b)&&(Z=!0):(W=!0,D.__version=X.version);let at=D.currentProgram;(W===!0||Z===!0)&&(at=Z===!0?xr(X,z,j,Tt,b):is(X,z,j),V&&X.isNodeMaterial&&V.onUpdateProgram(X,at,D));let bt=!1,_t=!1,Ft=!1,ut=at.getUniforms(),pt=D.uniforms;if(Lt.useProgram(at.program)&&(bt=!0,_t=!0,Ft=!0),X.id!==$&&($=X.id,_t=!0),bt||lt!==T){Lt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ut.setValue(H,"projectionMatrix",T.projectionMatrix),ut.setValue(H,"viewMatrix",T.matrixWorldInverse);let vt=ut.map.cameraPosition;vt!==void 0&&vt.setValue(H,Bi.setFromMatrixPosition(T.matrixWorld)),Le.logarithmicDepthBuffer&&ut.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ut.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),lt!==T&&(lt=T,_t=!0,Ft=!0)}if(D.needsLights&&(K.state.sunShadowMap.length>0&&ut.setValue(H,"sunShadowMap",K.state.sunShadowMap,ee),K.state.directionalShadowMap.length>0&&ut.setValue(H,"directionalShadowMap",K.state.directionalShadowMap,ee),K.state.spotShadowMap.length>0&&ut.setValue(H,"spotShadowMap",K.state.spotShadowMap,ee),K.state.pointShadowMap.length>0&&ut.setValue(H,"pointShadowMap",K.state.pointShadowMap,ee)),j.isSkinnedMesh){ut.setOptional(H,j,"bindMatrix"),ut.setOptional(H,j,"bindMatrixInverse");let ct=j.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),ut.setValue(H,"boneTexture",ct.boneTexture,ee))}j.isBatchedMesh&&(ut.setOptional(H,j,"batchingTexture"),ut.setValue(H,"batchingTexture",j._matricesTexture,ee),ut.setOptional(H,j,"batchingIdTexture"),ut.setValue(H,"batchingIdTexture",j._indirectTexture,ee),ut.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&ut.setValue(H,"batchingColorTexture",j._colorsTexture,ee));let yt=J.morphAttributes;if((yt.position!==void 0||yt.normal!==void 0||yt.color!==void 0)&&rt.update(j,J,at),(_t||D.receiveShadow!==j.receiveShadow)&&(D.receiveShadow=j.receiveShadow,ut.setValue(H,"receiveShadow",j.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&z.environment!==null&&(pt.envMapIntensity.value=z.environmentIntensity),pt.dfgLUT!==void 0&&(pt.dfgLUT.value=Yx()),_t){if(ut.setValue(H,"toneMappingExposure",k.toneMappingExposure),D.needsLights&&Yc(pt,Ft),Rt&&X.fog===!0&&Mt.refreshFogUniforms(pt,Rt),Mt.refreshMaterialUniforms(pt,X,Nt,Jt,C.state.transmissionRenderTarget[T.id]),D.needsLights&&D.numLightProbeGrids>0){let ct=x,vt=0;for(let xt of C.state.lightProbeGridArray)xt.texture!==null&&(ct.textures[vt]=xt.texture,ct.min[vt]=xt.boundingBox.min,ct.max[vt]=xt.boundingBox.max,ct.resolution[vt]=xt.resolution,vt++);for(let xt in ct)ct[xt].length=vt;pt.probesSH.value=ct.textures,pt.probesMin.value=ct.min,pt.probesMax.value=ct.max,pt.probesResolution.value=ct.resolution}lr.upload(H,io(D),pt,ee)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(lr.upload(H,io(D),pt,ee),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ut.setValue(H,"center",j.center),ut.setValue(H,"modelViewMatrix",j.modelViewMatrix),ut.setValue(H,"normalMatrix",j.normalMatrix),ut.setValue(H,"modelMatrix",j.matrixWorld),X.uniformsGroups!==void 0){let ct=X.uniformsGroups;for(let vt=0,xt=ct.length;vt<xt;vt++){let Ht=ct[vt];qt.update(Ht,at),qt.bind(Ht,at)}}return at}function Yc(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.sunLights.needsUpdate=z,T.sunLightShadows.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Zc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(T,z,J){let X=Zt.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Zt.get(T.texture).__webglTexture=z,Zt.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){let J=Zt.get(T);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,J=0){ht=T,tt=z,Y=J;let X=null,j=!1,Rt=!1;if(T){let Tt=Zt.get(T);if(Tt.__useDefaultFramebuffer!==void 0){Lt.bindFramebuffer(H.FRAMEBUFFER,Tt.__webglFramebuffer),dt.copy(T.viewport),Ot.copy(T.scissor),te=T.scissorTest,Lt.viewport(dt),Lt.scissor(Ot),Lt.setScissorTest(te),$=-1;return}else if(Tt.__webglFramebuffer===void 0)ee.setupRenderTarget(T);else if(Tt.__hasExternalTextures)ee.rebindTextures(T,Zt.get(T.texture).__webglTexture,Zt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let se=T.depthTexture;if(Tt.__boundDepthTexture!==se){if(se!==null&&Zt.has(se)&&(T.width!==se.image.width||T.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(T)}}let Ut=T.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Rt=!0);let Xt=Zt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xt[z])?X=Xt[z][J]:X=Xt[z],j=!0):T.samples>0&&ee.useMultisampledRTT(T)===!1?X=Zt.get(T).__webglMultisampledFramebuffer:Array.isArray(Xt)?X=Xt[J]:X=Xt,dt.copy(T.viewport),Ot.copy(T.scissor),te=T.scissorTest}else dt.copy(Qt).multiplyScalar(Nt).floor(),Ot.copy(xe).multiplyScalar(Nt).floor(),te=Ce;if(J!==0&&(X=Q),Lt.bindFramebuffer(H.FRAMEBUFFER,X)&&Lt.drawBuffers(T,X),Lt.viewport(dt),Lt.scissor(Ot),Lt.setScissorTest(te),j){let Tt=Zt.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,Tt.__webglTexture,J)}else if(Rt){let Tt=z;for(let Ut=0;Ut<T.textures.length;Ut++){let Xt=Zt.get(T.textures[Ut]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ut,Xt.__webglTexture,J,Tt)}}else if(T!==null&&J!==0){let Tt=Zt.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Tt.__webglTexture,J)}$=-1};function Es(T){let z=Zt.get(T);return(z.__readFormat!==T.format||z.__readType!==T.type)&&(z.__readFormat=T.format,z.__readType=T.type,z.__formatReadable=Le.textureFormatReadable(T.format),z.__typeReadable=Le.textureTypeReadable(T.type)),z}this.readRenderTargetPixels=function(T,z,J,X,j,Rt,zt,Tt=0){if(!(T&&T.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Zt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&zt!==void 0&&(Ut=Ut[zt],Array.isArray(Ut)&&(Ut=Ut[0])),Ut){Lt.bindFramebuffer(H.FRAMEBUFFER,Ut);try{let Xt=T.textures[Tt],se=Xt.format,me=Xt.type;T.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Tt);let Gt=Es(Xt);if(Gt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-X&&J>=0&&J<=T.height-j&&H.readPixels(z,J,X,j,mt.convert(se),mt.convert(me),Rt)}finally{let Xt=ht!==null?Zt.get(ht).__webglFramebuffer:null;Lt.bindFramebuffer(H.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(T,z,J,X,j,Rt,zt,Tt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Zt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&zt!==void 0&&(Ut=Ut[zt],Array.isArray(Ut)&&(Ut=Ut[0])),Ut)if(z>=0&&z<=T.width-X&&J>=0&&J<=T.height-j){Lt.bindFramebuffer(H.FRAMEBUFFER,Ut);let Xt=T.textures[Tt],se=Xt.format,me=Xt.type;T.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Tt);let Gt=Es(Xt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,fe),H.bufferData(H.PIXEL_PACK_BUFFER,Rt.byteLength,H.STREAM_READ),H.readPixels(z,J,X,j,mt.convert(se),mt.convert(me),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let S=ht!==null?Zt.get(ht).__webglFramebuffer:null;Lt.bindFramebuffer(H.FRAMEBUFFER,S);let b=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await $f(H,b,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,fe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Rt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(fe),H.deleteSync(b),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,J=0){let X=Math.pow(2,-J),j=Math.floor(T.image.width*X),Rt=Math.floor(T.image.height*X),zt=z!==null?z.x:0,Tt=z!==null?z.y:0;ee.setTexture2D(T,0),H.copyTexSubImage2D(H.TEXTURE_2D,J,0,0,zt,Tt,j,Rt),Lt.unbindTexture()},this.copyTextureToTexture=function(T,z,J=null,X=null,j=0,Rt=0){let zt,Tt,Ut,Xt,se,me,Gt,fe,S,b=T.isCompressedTexture?T.mipmaps[Rt]:T.image;if(J!==null)zt=J.max.x-J.min.x,Tt=J.max.y-J.min.y,Ut=J.isBox3?J.max.z-J.min.z:1,Xt=J.min.x,se=J.min.y,me=J.isBox3?J.min.z:0;else{let ut=Math.pow(2,-j);zt=Math.floor(b.width*ut),Tt=Math.floor(b.height*ut),T.isDataArrayTexture?Ut=b.depth:T.isData3DTexture?Ut=Math.floor(b.depth*ut):Ut=1,Xt=0,se=0,me=0}X!==null?(Gt=X.x,fe=X.y,S=X.z):(Gt=0,fe=0,S=0);let R=mt.convert(z.format),P=mt.convert(z.type),D;z.isData3DTexture?(ee.setTexture3D(z,0),D=H.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ee.setTexture2DArray(z,0),D=H.TEXTURE_2D_ARRAY):(ee.setTexture2D(z,0),D=H.TEXTURE_2D),Lt.activeTexture(H.TEXTURE0),Lt.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,z.flipY),Lt.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Lt.pixelStorei(H.UNPACK_ALIGNMENT,z.unpackAlignment);let K=Lt.getParameter(H.UNPACK_ROW_LENGTH),W=Lt.getParameter(H.UNPACK_IMAGE_HEIGHT),Z=Lt.getParameter(H.UNPACK_SKIP_PIXELS),at=Lt.getParameter(H.UNPACK_SKIP_ROWS),bt=Lt.getParameter(H.UNPACK_SKIP_IMAGES);Lt.pixelStorei(H.UNPACK_ROW_LENGTH,b.width),Lt.pixelStorei(H.UNPACK_IMAGE_HEIGHT,b.height),Lt.pixelStorei(H.UNPACK_SKIP_PIXELS,Xt),Lt.pixelStorei(H.UNPACK_SKIP_ROWS,se),Lt.pixelStorei(H.UNPACK_SKIP_IMAGES,me);let _t=T.isDataArrayTexture||T.isData3DTexture,Ft=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){let ut=Zt.get(T),pt=Zt.get(z),yt=Zt.get(ut.__renderTarget),ct=Zt.get(pt.__renderTarget);Lt.bindFramebuffer(H.READ_FRAMEBUFFER,yt.__webglFramebuffer),Lt.bindFramebuffer(H.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let vt=0;vt<Ut;vt++)_t&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Zt.get(T).__webglTexture,j,me+vt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Zt.get(z).__webglTexture,Rt,S+vt)),H.blitFramebuffer(Xt,se,Xt+zt,se+Tt,Gt,fe,Gt+zt,fe+Tt,H.DEPTH_BUFFER_BIT,H.NEAREST);Lt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||T.isRenderTargetTexture||Zt.has(T)){let ut=Zt.get(T),pt=Zt.get(z);Lt.bindFramebuffer(H.READ_FRAMEBUFFER,U),Lt.bindFramebuffer(H.DRAW_FRAMEBUFFER,G);for(let yt=0;yt<Ut;yt++)_t?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ut.__webglTexture,j,me+yt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ut.__webglTexture,j),Ft?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pt.__webglTexture,Rt,S+yt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pt.__webglTexture,Rt),j!==0?H.blitFramebuffer(Xt,se,Xt+zt,se+Tt,Gt,fe,Gt+zt,fe+Tt,H.COLOR_BUFFER_BIT,H.NEAREST):Ft?H.copyTexSubImage3D(D,Rt,Gt,fe,S+yt,Xt,se,zt,Tt):H.copyTexSubImage2D(D,Rt,Gt,fe,Xt,se,zt,Tt);Lt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ft?T.isDataTexture||T.isData3DTexture?H.texSubImage3D(D,Rt,Gt,fe,S,zt,Tt,Ut,R,P,b.data):z.isCompressedArrayTexture?H.compressedTexSubImage3D(D,Rt,Gt,fe,S,zt,Tt,Ut,R,b.data):H.texSubImage3D(D,Rt,Gt,fe,S,zt,Tt,Ut,R,P,b):T.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Rt,Gt,fe,zt,Tt,R,P,b.data):T.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Rt,Gt,fe,b.width,b.height,R,b.data):H.texSubImage2D(H.TEXTURE_2D,Rt,Gt,fe,zt,Tt,R,P,b);Lt.pixelStorei(H.UNPACK_ROW_LENGTH,K),Lt.pixelStorei(H.UNPACK_IMAGE_HEIGHT,W),Lt.pixelStorei(H.UNPACK_SKIP_PIXELS,Z),Lt.pixelStorei(H.UNPACK_SKIP_ROWS,at),Lt.pixelStorei(H.UNPACK_SKIP_IMAGES,bt),Rt===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&H.generateMipmap(D),Lt.unbindTexture()},this.initRenderTarget=function(T){Zt.get(T).__webglFramebuffer===void 0&&ee.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ee.setTextureCube(T,0):T.isData3DTexture?ee.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ee.setTexture2DArray(T,0):ee.setTexture2D(T,0),Lt.unbindTexture()},this.resetState=function(){tt=0,Y=0,ht=null,Lt.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}};var Lp={type:"change"},Id={type:"start"},Dp={type:"end"},uc=new Gn,kp=new _i,Jx=Math.cos(70*Ma.DEG2RAD),Ye=new N,Ri=2*Math.PI,Ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pd=1e-6,fc=class extends fa{constructor(t,e=null){super(t,e),this.state=Ee.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new ki,this._lastTargetPosition=new N,this._quat=new ki().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nr,this._sphericalDelta=new nr,this._scale=1,this._panOffset=new N,this._rotateStart=new It,this._rotateEnd=new It,this._rotateDelta=new It,this._panStart=new It,this._panEnd=new It,this._panDelta=new It,this._dollyStart=new It,this._dollyEnd=new It,this._dollyDelta=new It,this._dollyDirection=new N,this._mouse=new It,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qx.bind(this),this._onPointerDown=Kx.bind(this),this._onPointerUp=tb.bind(this),this._onContextMenu=ob.bind(this),this._onMouseWheel=nb.bind(this),this._onKeyDown=sb.bind(this),this._onTouchStart=rb.bind(this),this._onTouchMove=ab.bind(this),this._onMouseDown=eb.bind(this),this._onMouseMove=ib.bind(this),this._interceptControlDown=lb.bind(this),this._interceptControlUp=cb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ee.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lp),this.update(),this.state=Ee.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ye.copy(e).sub(this.target),Ye.applyQuaternion(this._quat),this._spherical.setFromVector3(Ye),this.autoRotate&&this.state===Ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ri:i>Math.PI&&(i-=Ri),s<-Math.PI?s+=Ri:s>Math.PI&&(s-=Ri),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ye.setFromSpherical(this._spherical),Ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ye.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(uc.origin.copy(this.object.position),uc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uc.direction))<Jx?this.object.lookAt(this.target):(kp.setFromNormalAndCoplanarPoint(this.object.up,this.target),uc.intersectPlane(kp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Pd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pd||this._lastTargetPosition.distanceToSquared(this.target)>Pd?(this.dispatchEvent(Lp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ri/60*this.autoRotateSpeed*t:Ri/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ye.setFromMatrixColumn(e,0),Ye.multiplyScalar(-t),this._panOffset.add(Ye)}_panUp(t,e){this.screenSpacePanning===!0?Ye.setFromMatrixColumn(e,1):(Ye.setFromMatrixColumn(e,0),Ye.crossVectors(this.object.up,Ye)),Ye.multiplyScalar(t),this._panOffset.add(Ye)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ye.copy(s).sub(this.target);let r=Ye.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ri*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ri*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ri*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ri*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new It,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Kx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Qx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function tb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dp),this.state=Ee.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function eb(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ee.DOLLY;break;case Gi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ee.ROTATE}break;case Gi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ee.PAN}break;default:this.state=Ee.NONE}this.state!==Ee.NONE&&this.dispatchEvent(Id)}function ib(n){switch(this.state){case Ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function nb(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ee.NONE||(n.preventDefault(),this.dispatchEvent(Id),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Dp))}function sb(n){this.enabled!==!1&&this._handleKeyDown(n)}function rb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ki.ROTATE:if(this.enableRotate===!1){this.state=Ee.NONE;break}this._handleTouchStartRotate(n),this.state=Ee.TOUCH_ROTATE;break;case Ki.PAN:if(this.enablePan===!1){this.state=Ee.NONE;break}this._handleTouchStartPan(n),this.state=Ee.TOUCH_PAN;break;default:this.state=Ee.NONE}break;case 2:switch(this.touches.TWO){case Ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ee.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ee.TOUCH_DOLLY_ROTATE;break;default:this.state=Ee.NONE}break;default:this.state=Ee.NONE}this.state!==Ee.NONE&&this.dispatchEvent(Id)}function ab(n){switch(this._trackPointer(n),this.state){case Ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ee.NONE}}function ob(n){this.enabled!==!1&&n.preventDefault()}function lb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Np=new di,pc=new N,kn=class extends da{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Me(t,3)),this.setAttribute("uv",new Me(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new Yn(e,6,1);return this.setAttribute("instanceStart",new Ji(i,3,0)),this.setAttribute("instanceEnd",new Ji(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new Yn(e,6,1);return this.setAttribute("instanceColorStart",new Ji(i,3,0)),this.setAttribute("instanceColorEnd",new Ji(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new sa(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Np.setFromBufferAttribute(e),this.boundingBox.union(Np))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)pc.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(pc)),pc.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(pc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};kt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new It},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Si.line={uniforms:Sa.merge([kt.common,kt.fog,kt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = perspective ? normalize( mix( start.xyz, end.xyz, 0.5 ) ) : vec3( 0.0, 0.0, - 1.0 );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;

				// only shift the depth of vertices in front of the camera (#35137)
				if ( clip.w > 0.0 ) clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				float len;

				if ( isOrthographic ) {

					// View rays are parallel to the z axis so the distance reduces to camera-space XY
					vec2 lineDir = worldEnd.xy - worldStart.xy;
					float t = clamp( dot( worldPos.xy - worldStart.xy, lineDir ) / dot( lineDir, lineDir ), 0.0, 1.0 );
					len = length( worldStart.xy + lineDir * t - worldPos.xy );

				} else {

					// Find the closest points on the view ray and the line segment
					vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
					vec3 lineDir = worldEnd - worldStart;
					vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

					vec3 p1 = worldStart + lineDir * params.x;
					vec3 p2 = rayEnd * params.y;
					vec3 delta = p1 - p2;
					len = length( delta );

				}

				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var hr=class extends Vi{constructor(t){super({type:"LineMaterial",uniforms:Sa.clone(Si.line.uniforms),vertexShader:Si.line.vertexShader,fragmentShader:Si.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Ld=new Ae,Up=new N,Op=new N,ei=new Ae,ii=new Ae,pn=new Ae,kd=new N,Dd=new Pe,ni=new ua,Fp=new N,mc=new di,gc=new xi,mn=new Ae,gn,gs;function Bp(n,t,e){return mn.set(0,0,-t,1).applyMatrix4(n.projectionMatrix),mn.multiplyScalar(1/mn.w),mn.x=gs/e.width,mn.y=gs/e.height,mn.applyMatrix4(n.projectionMatrixInverse),mn.multiplyScalar(1/mn.w),Math.abs(Math.max(mn.x,mn.y))}function hb(n,t){let e=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,a=Math.min(i.instanceCount,s.count);for(let o=0,l=a;o<l;o++){ni.start.fromBufferAttribute(s,o),ni.end.fromBufferAttribute(r,o),ni.applyMatrix4(e);let c=new N,h=new N;gn.distanceSqToSegment(ni.start,ni.end,h,c),h.distanceTo(c)<gs*.5&&t.push({point:h,pointOnLine:c,distance:gn.origin.distanceTo(h),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function db(n,t,e){let i=t.projectionMatrix,r=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-t.near;gn.at(1,pn),pn.w=1,pn.applyMatrix4(t.matrixWorldInverse),pn.applyMatrix4(i),pn.multiplyScalar(1/pn.w),pn.x*=r.x/2,pn.y*=r.y/2,pn.z=0,kd.copy(pn),Dd.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,f=h;d<f;d++){if(ei.fromBufferAttribute(l,d),ii.fromBufferAttribute(c,d),ei.w=1,ii.w=1,ei.applyMatrix4(Dd),ii.applyMatrix4(Dd),ei.z>u&&ii.z>u)continue;if(ei.z>u){let M=ei.z-ii.z,x=(ei.z-u)/M;ei.lerp(ii,x)}else if(ii.z>u){let M=ii.z-ei.z,x=(ii.z-u)/M;ii.lerp(ei,x)}ei.applyMatrix4(i),ii.applyMatrix4(i),ei.multiplyScalar(1/ei.w),ii.multiplyScalar(1/ii.w),ei.x*=r.x/2,ei.y*=r.y/2,ii.x*=r.x/2,ii.y*=r.y/2,ni.start.copy(ei),ni.start.z=0,ni.end.copy(ii),ni.end.z=0;let y=ni.closestPointToPointParameter(kd,!0);ni.at(y,Fp);let p=Ma.lerp(ei.z,ii.z,y),m=p>=-1&&p<=1,_=kd.distanceTo(Fp)<gs*.5;if(m&&_){ni.start.fromBufferAttribute(l,d),ni.end.fromBufferAttribute(c,d),ni.start.applyMatrix4(a),ni.end.applyMatrix4(a);let M=new N,x=new N;gn.distanceSqToSegment(ni.start,ni.end,x,M),e.push({point:x,pointOnLine:M,distance:gn.origin.distanceTo(x),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}var _s=class extends Ve{constructor(t=new kn,e=new hr({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Up.fromBufferAttribute(e,a),Op.fromBufferAttribute(i,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Up.distanceTo(Op);let r=new Yn(s,2,1);return t.setAttribute("instanceDistanceStart",new Ji(r,1,0)),t.setAttribute("instanceDistanceEnd",new Ji(r,1,1)),this}raycast(t,e){let i=this.material.worldUnits,s=t.camera;if(s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;gn=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;gs=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),gc.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=gs*.5;else{let u=Math.max(s.near,gc.distanceToPoint(gn.origin));c=Bp(s,u,l.resolution)}if(gc.radius+=c,gn.intersectsSphere(gc)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),mc.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=gs*.5;else{let u=Math.max(s.near,mc.distanceToPoint(gn.origin));h=Bp(s,u,l.resolution)}mc.expandByScalar(h),gn.intersectsBox(mc)!==!1&&(i?hb(this,e):db(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Ld),this.material.uniforms.resolution.value.set(Ld.z,Ld.w))}};var zp=(n,t)=>[n[0]+t[0],n[1]+t[1],n[2]+t[2]],Ud=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],Ca=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],dr=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],Hp=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],ub=n=>Math.hypot(n[0],n[1],n[2]),Nd=n=>{let t=ub(n)||1;return[n[0]/t,n[1]/t,n[2]/t]},_c={XY:{o:[0,0,0],x:[1,0,0],y:[0,1,0],n:[0,0,1]},XZ:{o:[0,0,0],x:[1,0,0],y:[0,0,1],n:[0,-1,0]},YZ:{o:[0,0,0],x:[0,1,0],y:[0,0,1],n:[1,0,0]}};function Od(n,t){n=Nd(n);let e,i;return Math.abs(n[2])>.9?(e=Nd(Ud([1,0,0],Ca(n,n[0]))),i=Hp(n,e)):(i=Nd(Ud([0,0,1],Ca(n,n[2]))),e=Hp(i,n)),{o:Ca(n,dr(t,n)),x:e,y:i,n}}var Ra=(n,t)=>zp(n.o,zp(Ca(n.x,t[0]),Ca(n.y,t[1]))),Vp=(n,t)=>{let e=Ud(t,n.o);return[dr(e,n.x),dr(e,n.y)]};var Gp=["#b9c3cf","#d9b38c","#9fc7a8","#c9a3c9","#e0c56e","#8fb6d9","#d99a9a","#a8b38f"],Fd=n=>Gp[n%Gp.length],Pa=2063072,Wp=16747039,yc=class{constructor(t){this.host=t,this.renderer=new cc({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setClearColor(15330802),t.appendChild(this.renderer.domElement),this.canvas=this.renderer.domElement,this.canvas.style.touchAction="none",this.scene=new Br,this.persp=new yi(35,1,.1,1e5),this.persp.up.set(0,0,1),this.persp.position.set(160,-220,150),this.ortho=new hs(-1,1,1,-1,-1e5,1e5),this.camera=this.persp,this.controls=new fc(this.persp,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.15,this.controls.zoomToCursor=!0,this.controls.screenSpacePanning=!0,this.controls.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.controls.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.PAN,RIGHT:Gi.PAN};let e=new la(16777215,8425632,1.6);this.scene.add(e),this.sun=new ha(16777215,1.5),this.scene.add(this.sun),this.scene.add(this.sun.target),this.lineMats=[],this.world=new ci,this.scene.add(this.world),this.buildGrid(),this.bodiesGroup=new ci,this.overlay=new ci,this.planesGroup=new ci,this.world.add(this.bodiesGroup,this.overlay,this.planesGroup),this.buildPlanes(),this.bodies=new Map,this.meshCache=new Map,this.selection={faces:[],edges:[],bodies:[]},this.preselect=null,this.sketchMode=null,this.dirty=!0,this.tapHandlers=[],this.hoverHandler=null,this.controls.addEventListener("change",()=>{this.dirty=!0}),this.setupTap(),this.setupHandles(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize();let i=()=>{(this.camera===this.persp&&this.controls.update()||this.dirty)&&this.render(),requestAnimationFrame(i)};requestAnimationFrame(i)}lineMat(t,e,i={}){let s=new hr({color:t,linewidth:e,worldUnits:!1,...i});return s.resolution.set(this.w||1,this.h||1),this.lineMats.push(s),s}buildGrid(){let t=new ci,e=(s,r,a,o)=>{let l=[];for(let h=-r;h<=r+1e-9;h+=s)l.push(h,-r,0,h,r,0),l.push(-r,h,0,r,h,0);let c=new He;return c.setAttribute("position",new Me(l,3)),new Zs(c,new $n({color:a,transparent:!0,opacity:o,depthWrite:!1}))};t.add(e(10,300,8030102,.22)),t.add(e(50,300,5661551,.35));let i=new He;i.setAttribute("position",new Me([0,0,0,60,0,0,0,0,0,0,60,0,0,0,0,0,0,60],3)),i.setAttribute("color",new Me([.85,.2,.2,.85,.2,.2,.2,.65,.25,.2,.65,.25,.2,.35,.9,.2,.35,.9],3)),t.add(new Zs(i,new $n({vertexColors:!0,depthTest:!1,transparent:!0}))),t.renderOrder=-1,this.grid=t,this.world.add(t)}buildPlanes(){this.planeMeshes={};let t={XY:3832789,XZ:3847019,YZ:13980474};for(let[e,i]of Object.entries(_c)){let r=new He,a=(c,h)=>[i.x[0]*c+i.y[0]*h,i.x[1]*c+i.y[1]*h,i.x[2]*c+i.y[2]*h];r.setAttribute("position",new Me([...a(0,0),...a(40,0),...a(40,40),...a(0,40)],3)),r.setIndex([0,1,2,0,2,3]);let o=new Ve(r,new An({color:t[e],transparent:!0,opacity:.16,side:Mi,depthWrite:!1}));o.userData={plane:e};let l=new Gr(new He().setAttribute("position",new Me([...a(0,0),...a(40,0),...a(40,40),...a(0,40)],3)),new $n({color:t[e]}));o.add(l),this.planesGroup.add(o),this.planeMeshes[e]=o}this.planesGroup.visible=!1}setPlanesVisible(t,e=null){this.planesGroup.visible=t;for(let[i,s]of Object.entries(this.planeMeshes))s.material.opacity=e===i?.42:.16;this.dirty=!0}resize(){let t=this.host.getBoundingClientRect();this.w=Math.max(1,t.width),this.h=Math.max(1,t.height),this.renderer.setSize(this.w,this.h,!1),this.canvas.style.width=this.w+"px",this.canvas.style.height=this.h+"px",this.persp.aspect=this.w/this.h,this.persp.updateProjectionMatrix();for(let e of this.lineMats)e.resolution.set(this.w,this.h);this.sketchMode&&this.applySketchView(),this.dirty=!0,this.onResize&&this.onResize()}render(){this.dirty=!1,this.updateHandles();let t=this.camera;this.sun.position.copy(t.position).add(new N(0,0,1).multiplyScalar(this.sceneRadius()*.5)),this.sun.target.position.copy(this.controls.target),this.renderer.render(this.scene,t)}sceneRadius(){let t=this.bodiesBox();return t.isEmpty()?100:t.getBoundingSphere(new xi).radius||100}bodiesBox(){let t=new di;for(let e of this.bodies.values())e.visible&&e.mesh&&t.expandByObject(e.mesh);return t}ingest(t){for(let e of t)e.mesh&&!this.meshCache.has(e.key)&&this.meshCache.set(e.key,this.buildGeom(e.mesh))}setPickBodies(t){if(!t){this.pickSet=null,this.refreshSelection();return}this.pickSet=new Map;for(let e of t){let i=this.meshCache.get(e.key);if(!i)continue;let s=new Ve(i.geom);s.userData={body:e.id},this.pickSet.set(e.id,{id:e.id,key:e.key,data:i.data,mesh:s,visible:e.visible!==!1})}this.refreshSelection()}get pickBodies(){return this.pickSet||this.bodies}gc(){let t=new Set([...this.bodies.values()].map(e=>e.key));if(this.pickSet)for(let e of this.pickSet.values())t.add(e.key);for(let[e,i]of this.meshCache)t.has(e)||(i.geom.dispose(),i.lineGeom.dispose(),this.meshCache.delete(e))}setBodies(t){let e=new Set;t.forEach(i=>{e.add(i.id);let s=this.bodies.get(i.id);s||(s={id:i.id},this.bodies.set(i.id,s));let r=this.meshCache.get(i.key);s.key!==i.key&&r&&(s.mesh&&this.bodiesGroup.remove(s.mesh,s.edges),s.key=i.key,s.data=r.data,s.mesh=new Ve(r.geom,new ra({color:i.color,roughness:.55,metalness:.05,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,side:Mi})),s.mesh.userData={body:i.id},s.edges=new _s(r.lineGeom,this.edgeMat||(this.edgeMat=this.lineMat(1910579,1.3))),this.bodiesGroup.add(s.mesh,s.edges)),s.mesh&&(s.mesh.material.color.set(i.color),s.mesh.material.transparent=!!i.ghost,s.mesh.material.opacity=i.ghost?.35:1,s.mesh.material.depthWrite=!i.ghost,s.visible=i.visible!==!1,s.mesh.visible=s.visible,s.edges.visible=s.visible),s.name=i.name});for(let[i,s]of this.bodies)e.has(i)||(s.mesh&&this.bodiesGroup.remove(s.mesh,s.edges),this.bodies.delete(i));this.refreshSelection(),this.dirty=!0}buildGeom(t){let e=new He;e.setAttribute("position",new hi(t.vertices,3)),e.setAttribute("normal",new hi(t.normals,3)),e.setIndex(new hi(t.triangles,1)),e.computeBoundingSphere(),e.computeBoundingBox();let i=new kn;return i.setPositions(t.lines.length?t.lines:new Float32Array(6)),{geom:e,lineGeom:i,data:t}}setSelection(t){this.selection={faces:t.faces||[],edges:t.edges||[],bodies:t.bodies||[]},this.refreshSelection()}setPreselect(t){this.preselect=t,this.refreshSelection()}refreshSelection(){this.selGroup&&(this.overlay.remove(this.selGroup),this.selGroup.traverse(a=>{a.geometry&&a.userData.own&&a.geometry.dispose()}));let t=new ci,e=(a,o)=>new An({color:a,transparent:!0,opacity:o,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,side:Mi}),i=(a,o,l)=>{let c=this.pickBodies.get(a.body);if(!c||!c.data)return;let h=c.data.faceGroups.find(g=>g.i===a.i);if(!h)return;let u=c.data.triangles.slice(h.start,h.start+h.count),d=new He;d.setAttribute("position",c.mesh.geometry.getAttribute("position")),d.setIndex(new hi(u,1));let f=new Ve(d,e(o,l));f.userData.own=!0,t.add(f)},s=(a,o,l)=>{let c=this.pickBodies.get(a.body);if(!c||!c.data)return;let h=c.data.edgeGroups.find(g=>g.i===a.i);if(!h)return;let u=c.data.lines.slice(h.start*3,(h.start+h.count)*3),d=new kn;d.setPositions(u);let f=new _s(d,this.lineMat(o,l,{depthTest:!1,transparent:!0}));f.renderOrder=5,f.userData.own=!0,t.add(f)};for(let a of this.selection.faces)i(a,Pa,.45);for(let a of this.selection.edges)s(a,Pa,4);for(let a of this.selection.bodies){let o=this.pickBodies.get(a);if(o&&o.mesh){let l=new Ve(o.mesh.geometry,e(Pa,.25));t.add(l)}}let r=this.preselect;r&&(r.kind==="face"&&i(r,Wp,.35),r.kind==="edge"&&s(r,Wp,4)),this.selGroup=t,this.overlay.add(t),this.dirty=!0}setSketchOverlays(t){this.sketchGroup&&(this.overlay.remove(this.sketchGroup),this.sketchGroup.traverse(i=>i.geometry&&i.geometry.dispose()));let e=new ci;this.regionMeshes=[],this.sketchLines=[];for(let i of t){let s=i.frame,r=(l,c)=>[s.o[0]+s.x[0]*l+s.y[0]*c,s.o[1]+s.x[1]*l+s.y[1]*c,s.o[2]+s.x[2]*l+s.y[2]*c],a=[],o=[];for(let l of i.polylines){let c=l.construction?o:a;for(let h=0;h+1<l.pts.length;h++)c.push(...r(...l.pts[h]),...r(...l.pts[h+1]));i.pickLines&&!l.construction&&l.kind==="line"&&this.sketchLines.push({sketch:i.id,id:l.id,a:r(...l.pts[0]),b:r(...l.pts[l.pts.length-1])}),i.pickLines&&l.construction&&l.kind==="line"&&this.sketchLines.push({sketch:i.id,id:l.id,a:r(...l.pts[0]),b:r(...l.pts[l.pts.length-1])})}for(let[l,c,h]of[[a,2060241,2],[o,13666858,1.2]]){if(!l.length)continue;let u=new kn;u.setPositions(l);let d=new _s(u,this.lineMat(c,h,{depthTest:!1,transparent:!0,opacity:.95}));d.renderOrder=3,e.add(d)}i.regions&&i.regions.forEach((l,c)=>{let h=new Qs(l.poly.map(([y,p])=>new It(y,p)));for(let y of l.holePolys)h.holes.push(new ls(y.map(([p,m])=>new It(p,m))));let u=new ia(h),d=u.getAttribute("position");for(let y=0;y<d.count;y++){let p=r(d.getX(y),d.getY(y));d.setXYZ(y,p[0],p[1],p[2])}u.computeBoundingSphere();let f=i.selected&&i.selected.includes(c),g=new Ve(u,new An({color:f?Pa:8368362,transparent:!0,opacity:f?.55:.22,side:Mi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));g.renderOrder=2,g.userData={sketch:i.id,region:c},e.add(g),this.regionMeshes.push(g)})}this.sketchGroup=e,this.overlay.add(e),this.dirty=!0}setupTap(){let t=new Map,e=!1;this.canvas.addEventListener("pointerdown",s=>{t.set(s.pointerId,{x:s.clientX,y:s.clientY,t:performance.now()}),t.size>1&&(e=!0)});let i=s=>{let r=t.get(s.pointerId);if(t.delete(s.pointerId),!r)return;let a=e;if(t.size||(e=!1),a||s.type==="pointercancel")return;if(Math.hypot(s.clientX-r.x,s.clientY-r.y)<9&&performance.now()-r.t<600){let l=this.canvas.getBoundingClientRect();for(let c of this.tapHandlers)c(s.clientX-l.left,s.clientY-l.top,s.pointerType)}};this.canvas.addEventListener("pointerup",i),this.canvas.addEventListener("pointercancel",i),this.canvas.addEventListener("pointermove",s=>{if(s.pointerType!=="mouse"||t.size||!this.hoverHandler)return;let r=this.canvas.getBoundingClientRect();this.hoverHandler(s.clientX-r.left,s.clientY-r.top)}),this.canvas.addEventListener("pointerleave",()=>{this.hoverHandler&&this.hoverHandler(null)})}onTap(t){this.tapHandlers.push(t)}boundsOf(t){let e=new di;for(let i of t){let s=this.pickBodies.get(i);s&&s.mesh&&(s.mesh.geometry.computeBoundingBox(),e.union(s.mesh.geometry.boundingBox))}return e.isEmpty()?null:{center:e.getCenter(new N).toArray(),size:e.getSize(new N).length()}}setHandles(t){if(this.hdrag){this.pendingHandles=t||[];return}this.handleGroup&&(this.overlay.remove(this.handleGroup),this.handleGroup.traverse(i=>{i.geometry&&i.geometry.dispose()})),this.handles=(t||[]).map(i=>({offset:0,scale:1,...i}));let e=new ci;for(let i of this.handles){let s=i.locked?10134702:i.color??Pa,r=new An({color:s,depthTest:!1,transparent:!0,opacity:.95});i.knob=new Ve(new na(1,20,14),r),i.line=new _s(new kn,this.lineMat(s,2.5,{depthTest:!1,transparent:!0})),i.knob.renderOrder=i.line.renderOrder=20,e.add(i.knob,i.line),i.kind==="linear"&&(i.cone=new Ve(new qr(.75,2.2,20),r),i.cone.renderOrder=20,e.add(i.cone))}this.handleGroup=e,this.overlay.add(e),this.updateHandles(),this.dirty=!0}worldPerPx(t){return this.camera===this.persp?2*this.persp.position.distanceTo(t)*Math.tan(this.persp.fov*Math.PI/360)/this.h:(this.ortho.top-this.ortho.bottom)/this.h}handlePos(t,e=t.value){if(t.kind==="linear"){let o=t.offset+e*t.scale;return new N(t.origin[0]+t.dir[0]*o,t.origin[1]+t.dir[1]*o,t.origin[2]+t.dir[2]*o)}let i=e*Math.PI/180,s=new N(...t.ref),r=new N(...t.axis),a=new N().crossVectors(r,s);return new N(...t.center).addScaledVector(s,Math.cos(i)*t.radius).addScaledVector(a,Math.sin(i)*t.radius)}updateHandles(){if(!(!this.handles||!this.handles.length))for(let t of this.handles){let e=this.handlePos(t),i=this.worldPerPx(e)*8;if(t.knob.position.copy(e),t.knob.scale.setScalar(i),t.kind==="linear"){let s=new N(...t.dir),r=t.offset+t.value*t.scale>=0?1:-1;t.cone.position.copy(e).addScaledVector(s,r*i*2.2),t.cone.quaternion.setFromUnitVectors(new N(0,1,0),s.clone().multiplyScalar(r)),t.cone.scale.setScalar(i),t.line.geometry.setPositions([...t.origin,e.x,e.y,e.z])}else{let s=[];for(let a=0;a<48;a++){let o=this.handlePos(t,t.value*a/48),l=this.handlePos(t,t.value*(a+1)/48);s.push(o.x,o.y,o.z,l.x,l.y,l.z)}t.line.geometry.setPositions(s.length?s:[0,0,0,0,0,0])}}}niceStep(t,e){for(let i of e)if(i*t>=6)return i;return e[e.length-1]}setupHandles(){let t=this.canvas;t.addEventListener("pointerdown",i=>{if(!this.handles||!this.handles.length)return;let s=t.getBoundingClientRect(),r=i.clientX-s.left,a=i.clientY-s.top,o=i.pointerType==="touch"?28:16,l=null,c=o;for(let h of this.handles){let u=this.project(this.handlePos(h).toArray()),d=Math.hypot(u[0]-r,u[1]-a);d<c&&(c=d,l=h)}if(l){if(i.stopImmediatePropagation(),i.preventDefault(),l.locked){this.onHandleLocked&&this.onHandleLocked(l);return}this.hdrag={h:l,id:i.pointerId},t.setPointerCapture(i.pointerId),this.controls.enabled=!1}},{capture:!0}),t.addEventListener("pointermove",i=>{let s=this.hdrag;if(!s||i.pointerId!==s.id)return;i.stopImmediatePropagation();let r=t.getBoundingClientRect(),a=new ir;a.setFromCamera(this.ndc(i.clientX-r.left,i.clientY-r.top),this.camera);let o=s.h,l;if(o.kind==="linear"){let c=new N(...o.origin),h=new N(...o.dir),u=a.ray.origin,d=a.ray.direction,f=h.dot(h),g=h.dot(d),y=d.dot(d),p=c.clone().sub(u),m=f*y-g*g;if(Math.abs(m)<1e-9)return;l=((g*d.dot(p)-y*h.dot(p))/m-o.offset)/o.scale;let M=this.niceStep(o.scale/this.worldPerPx(this.handlePos(o)),[.01,.05,.1,.5,1,5,10,50]);l=Math.round(l/M)*M,o.min!=null&&(l=Math.max(o.min,l))}else{let c=new N(...o.center),h=new N(...o.axis),u=new N;if(!a.ray.intersectPlane(new _i().setFromNormalAndCoplanarPoint(h,c),u))return;let d=new N(...o.ref),f=new N().crossVectors(h,d),g=u.sub(c),y=Math.atan2(g.dot(f),g.dot(d))*180/Math.PI;for(;y-o.value>180;)y-=360;for(;o.value-y>180;)y+=360;let p=o.radius/this.worldPerPx(c)*(Math.PI/180),m=this.niceStep(p,[.5,1,5,15,45]);l=Math.max(m,Math.min(360,Math.round(y/m)*m))}l!==o.value&&(o.value=l,this.dirty=!0,this.onHandle&&this.onHandle(o.id,l,!1))},{capture:!0});let e=i=>{let s=this.hdrag;if(!(!s||i.pointerId!==s.id)&&(i.stopImmediatePropagation(),this.hdrag=null,this.controls.enabled=!this.sketchMode,this.onHandle&&this.onHandle(s.h.id,s.h.value,!0),this.pendingHandles)){let r=this.pendingHandles;this.pendingHandles=null,this.setHandles(r)}};t.addEventListener("pointerup",e,{capture:!0}),t.addEventListener("pointercancel",e,{capture:!0})}ndc(t,e){return new It(t/this.w*2-1,-(e/this.h)*2+1)}project(t){let e=new N(t[0],t[1],t[2]).project(this.camera);return[(e.x+1)/2*this.w,(1-e.y)/2*this.h,e.z]}pick(t,e,i,s=14){let r=new ir;r.setFromCamera(this.ndc(t,e),this.camera);let a=[...this.pickBodies.values()].filter(f=>f.visible&&f.mesh).map(f=>f.mesh),l=r.intersectObjects(a,!1)[0],c=this.camera===this.persp?this.camera.position:null,h=f=>c?c.distanceTo(f):-new N().copy(f).applyMatrix4(this.camera.matrixWorldInverse).z,u=l?h(l.point):1/0,d=this.sceneRadius()*.015+.1;if(i.sketchLine&&this.sketchLines&&this.sketchLines.length){let f=null,g=s;for(let y of this.sketchLines){let p=this.project(y.a),m=this.project(y.b),_=$p([t,e],p,m);_<g&&(g=_,f=y)}if(f)return{kind:"sketchLine",sketch:f.sketch,id:f.id}}if(i.region&&this.regionMeshes&&this.regionMeshes.length){let f=r.intersectObjects(this.regionMeshes,!1);if(f.length)return{kind:"region",sketch:f[0].object.userData.sketch,region:f[0].object.userData.region,point:f[0].point.toArray()}}if(i.edge){let f=null,g=s;for(let y of this.pickBodies.values()){if(!y.visible||!y.data)continue;let p=y.data.lines;for(let m of y.data.edgeGroups)for(let _=m.start;_<m.start+m.count;_+=2){let M=[p[_*3],p[_*3+1],p[_*3+2]],x=[p[_*3+3],p[_*3+4],p[_*3+5]],E=this.project(M),C=this.project(x),v=$p([t,e],E,C);if(v<g){let A=new N;if(r.ray.distanceSqToSegment(new N(...M),new N(...x),null,A),h(A)>u+d)continue;g=v,f={kind:"edge",body:y.id,i:m.i}}}}if(f)return f}if(l&&(i.face||i.body)){let f=l.object.userData.body;if(i.face){let g=this.pickBodies.get(f),y=l.faceIndex*3,p=g.data.faceGroups.find(m=>y>=m.start&&y<m.start+m.count);if(p){let m=l.face?l.face.normal.clone().transformDirection(l.object.matrixWorld).toArray():null;return{kind:"face",body:f,i:p.i,point:l.point.toArray(),normal:m}}}if(i.body)return{kind:"body",body:f}}if(i.plane&&this.planesGroup.visible){let f=r.intersectObjects(Object.values(this.planeMeshes),!1);if(f.length)return{kind:"plane",plane:f[0].object.userData.plane}}return null}fit(t=!0){let e=this.bodiesBox(),i=new N(0,0,0),s=80;if(!e.isEmpty()){let o=e.getBoundingSphere(new xi);i=o.center,s=Math.max(o.radius,5)}let r=this.persp.position.clone().sub(this.controls.target).normalize(),a=s/Math.sin(this.persp.fov*Math.PI/360)*1.15;this.animateTo(i.clone().add(r.multiplyScalar(a)),i,t)}view(t){let e={top:[0,0,1],bottom:[0,0,-1],front:[0,-1,0],back:[0,1,0],right:[1,0,0],left:[-1,0,0],iso:[1,-1.25,.9]},i=new N(...e[t]).normalize(),s=this.bodiesBox(),r=new N,a=80;if(!s.isEmpty()){let l=s.getBoundingSphere(new xi);r=l.center,a=Math.max(l.radius,5)}let o=a/Math.sin(this.persp.fov*Math.PI/360)*1.15;t==="top"||t==="bottom"?this.persp.up.set(0,1,0):this.persp.up.set(0,0,1),this.animateTo(r.clone().add(i.multiplyScalar(o)),r,!0,()=>{this.persp.up.set(0,0,1),this.controls.update()})}animateTo(t,e,i=!0,s){let r=this.persp.position.clone(),a=this.controls.target.clone();if(!i){this.persp.position.copy(t),this.controls.target.copy(e),this.controls.update(),this.dirty=!0,s&&s();return}let o=performance.now(),l=380,c=()=>{let h=Math.min(1,(performance.now()-o)/l),u=h<.5?2*h*h:1-(-2*h+2)**2/2;this.persp.position.lerpVectors(r,t,u),this.controls.target.lerpVectors(a,e,u),this.persp.lookAt(this.controls.target),this.dirty=!0,h<1?requestAnimationFrame(c):(this.controls.update(),s&&s())};c()}enterSketch(t,e){this.sketchMode={frame:t,view:e},this.camera=this.ortho,this.controls.enabled=!1,this.grid.visible=!1,this.applySketchView()}setSketchView(t){this.sketchMode&&(this.sketchMode.view=t,this.applySketchView())}applySketchView(){let{frame:t,view:e}=this.sketchMode,i=this.w/2/e.s,s=this.h/2/e.s,r=[t.o[0]+t.x[0]*e.cx+t.y[0]*e.cy,t.o[1]+t.x[1]*e.cx+t.y[1]*e.cy,t.o[2]+t.x[2]*e.cx+t.y[2]*e.cy],a=5e3;this.ortho.position.set(r[0]+t.n[0]*a,r[1]+t.n[1]*a,r[2]+t.n[2]*a),this.ortho.up.set(t.y[0],t.y[1],t.y[2]),this.ortho.lookAt(r[0],r[1],r[2]),this.ortho.left=-i,this.ortho.right=i,this.ortho.top=s,this.ortho.bottom=-s,this.ortho.near=.1,this.ortho.far=a*2,this.ortho.updateProjectionMatrix(),this.ortho.updateMatrixWorld(),this.dirty=!0}exitSketch(){this.sketchMode=null,this.camera=this.persp,this.controls.enabled=!0,this.grid.visible=this.gridOn!==!1,this.dirty=!0}setGrid(t){this.gridOn=t,this.sketchMode||(this.grid.visible=t),this.dirty=!0}};function fb(n,t,e){let i=e[0]-t[0],s=e[1]-t[1],r=i*i+s*s;return r?Math.max(0,Math.min(1,((n[0]-t[0])*i+(n[1]-t[1])*s)/r)):0}function $p(n,t,e){if(t[2]>1||e[2]>1)return 1/0;let i=fb(n,t,e);return Math.hypot(n[0]-t[0]-i*(e[0]-t[0]),n[1]-t[1]-i*(e[1]-t[1]))}var Bd={NoInternalAlignment:0,InternalAlignment:1},vc={Success:0,Converged:1,Failed:2,SuccessfulSolutionInvalid:3},zd={BFGS:0,LevenbergMarquardt:1,DogLeg:2};var pb=["point","line","circle","arc","ellipse","arc_of_ellipse","hyperbola","arc_of_hyperbola","parabola","arc_of_parabola","bspline"];function ur(n){return n===void 0||n.type==="param"?!1:pb.includes(n.type)}function Hd(n){return n===void 0?!1:!ur(n)}var Vd=class{get_primitive_or_fail(t){let e=this.get_primitive(t);if(e===void 0)throw new Error(`sketch object ${t} not found`);return e}get_sketch_point(t){let e=this.get_primitive_or_fail(t);if(e.type!=="point")throw new Error(`sketch object ${t} is not a sketch point`);return e}get_sketch_line(t){let e=this.get_primitive_or_fail(t);if(e.type!=="line")throw new Error(`sketch object ${t} is not a sketch line`);return e}get_sketch_circle(t){let e=this.get_primitive_or_fail(t);if(e.type!=="circle")throw new Error(`sketch object ${t} is not a sketch circle`);return e}get_sketch_arc(t){let e=this.get_primitive_or_fail(t);if(e.type!=="arc")throw new Error(`sketch object ${t} is not a sketch arc`);return e}get_constraints(){return this.get_primitives().filter(t=>!ur(t))}toString(){return this.get_primitives().map(t=>JSON.stringify(t)).join(`
`)}},Ia=class extends Vd{constructor(){super(...arguments),this.index=new Map,this.primitive_ids=[]}has(t){return this.index.has(t)}delete_primitive(t){return this.index.delete(t)}set_primitive(t){this.has(t.id)||this.primitive_ids.push(t.id),this.index.set(t.id,t)}get_primitive(t){return this.index.get(t)}get_primitives(){return Array.from(this.index.values())}get_id_by_index(t){return this.primitive_ids[t-1]}clear(){this.index.clear(),this.primitive_ids=[]}counter(){return this.primitive_ids.length}};async function mb(n={}){var t=n,e=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,s=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(s){let{createRequire:S}=await import("node:module");var r=S(import.meta.url)}var a="./this.program",o=import.meta.url,l="",c,h;if(s){var u=r("node:fs");o.startsWith("file:")&&(l=r("node:path").dirname(r("node:url").fileURLToPath(o))+"/"),h=S=>(S=g(S)?new URL(S):S,u.readFileSync(S)),c=async S=>(S=g(S)?new URL(S):S,u.readFileSync(S,void 0)),process.argv.length>1&&(a=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2)}else if(e||i){try{l=new URL(".",o).href}catch{}i&&(h=S=>{var b=new XMLHttpRequest;return b.open("GET",S,!1),b.responseType="arraybuffer",b.send(null),new Uint8Array(b.response)}),c=async S=>{if(g(S))return new Promise((R,P)=>{var D=new XMLHttpRequest;D.open("GET",S,!0),D.responseType="arraybuffer",D.onload=()=>{D.status==200||D.status==0&&D.response?R(D.response):P(D.status)},D.onerror=P,D.send(null)});var b=await fetch(S,{credentials:"same-origin"});if(b.ok)return b.arrayBuffer();throw Error(b.status+" : "+b.url)}}console.log.bind(console);var d=console.error.bind(console),f=!1,g=S=>S.startsWith("file://");function y(){var S=t.preRun;for(S&&(typeof S=="function"&&(S=[S]),v.push(...S)),S=v;S.length>0;)S.shift()(t)}function p(){var S=t.postRun;for(S&&(typeof S=="function"&&(S=[S]),C.push(...S)),S=C;S.length>0;)S.shift()(t)}function m(S){throw t.onAbort?.(S),S=`Aborted(${S})`,d(S),f=!0,new WebAssembly.RuntimeError(S+". Build with -sASSERTIONS for more info.")}var _;async function M(S){try{var b=await c(S);return new Uint8Array(b)}catch{}if(h)S=h(S);else throw"both async and sync fetching of the wasm failed";return S}async function x(S,b){try{var R=await M(S);return await WebAssembly.instantiate(R,b)}catch(P){d(`failed to asynchronously prepare wasm: ${P}`),m(P)}}async function E(S){var b=_;if(!g(b)&&!s)try{var R=fetch(b,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(R,S)}catch(P){d(`wasm streaming compile failed: ${P}`),d("falling back to ArrayBuffer instantiation")}return x(b,S)}var C=[],v=[],A=S=>Ut(S),B=()=>Xt(),k,F;class V{constructor(b){this.L=b-24}init(b,R){F[this.L+16>>2]=0,F[this.L+4>>2]=b,F[this.L+8>>2]=R}}var Q=0,U,G=S=>{for(var b="";;){var R=U[S++];if(!R)return b;b+=String.fromCharCode(R)}},tt={},Y={},ht={};class $ extends Error{constructor(b){super(b),this.name="BindingError"}}var lt=S=>{throw new $(S)};function dt(S,b,R={}){var P=b.name;if(!S)throw new $(`type "${P}" must have a positive integer typeid pointer`);if(Y.hasOwnProperty(S)){if(R.sa)return;throw new $(`Cannot register type '${P}' twice`)}Y[S]=b,delete ht[S],tt.hasOwnProperty(S)&&(b=tt[S],delete tt[S],b.forEach(D=>D()))}function Ot(S,b,R={}){return dt(S,b,R)}var te,nt,Pt,Vt,Jt,Nt=(S,b,R)=>{switch(b){case 1:return R?P=>k[P]:P=>U[P];case 2:return R?P=>te[P>>1]:P=>nt[P>>1];case 4:return R?P=>Pt[P>>2]:P=>F[P>>2];case 8:return R?P=>Vt[P>>3]:P=>Jt[P>>3];default:throw new TypeError(`invalid integer width (${b}): ${S}`)}},ne=S=>{throw new $(S.J.N.K.name+" instance already deleted")},Ne=!1,Qt=()=>{},xe=S=>globalThis.FinalizationRegistry?(Ne=new FinalizationRegistry(b=>{b=b.J,--b.count.value,b.count.value===0&&(b.P?b.U.W(b.P):b.N.K.W(b.L))}),xe=b=>{var R=b.J;return R.P&&Ne.register(b,{J:R},b),b},Qt=b=>{Ne.unregister(b)},xe(S)):(xe=b=>b,S),Ce=[];function ue(){}var Oe=(S,b)=>Object.defineProperty(b,"name",{value:S}),Fe={},si=(S,b,R)=>{if(S[b].V===void 0){var P=S[b];S[b]=function(...D){if(!S[b].V.hasOwnProperty(D.length))throw new $(`Function '${R}' called with an invalid number of arguments (${D.length}) - expects one of (${S[b].V})!`);return S[b].V[D.length].apply(this,D)},S[b].V=[],S[b].V[P.X]=P}},Ie=(S,b)=>{if(t.hasOwnProperty(S))throw new $(`Cannot register public name '${S}' twice`);t[S]=b,t[S].X=void 0},Bi=S=>{S=S.replace(/[^a-zA-Z0-9_]/g,"$");var b=S.charCodeAt(0);return b>=48&&b<=57?`_${S}`:S};function Ge(S,b,R,P,D,K,W,Z){this.name=S,this.constructor=b,this.Z=R,this.W=P,this.S=D,this.qa=K,this.ba=W,this.pa=Z,this.ua=[]}var ri=(S,b,R)=>{for(;b!==R;){if(!b.ba)throw new $(`Expected null or instance of ${R.name}, got an instance of ${b.name}`);S=b.ba(S),b=b.S}return S},ai=S=>{if(S===null)return"null";var b=typeof S;return b==="object"||b==="array"||b==="function"?S.toString():""+S};function Ei(S,b){if(b===null){if(this.fa)throw new $(`null is not a valid ${this.name}`);return 0}if(!b.J)throw new $(`Cannot pass "${ai(b)}" as a ${this.name}`);if(!b.J.L)throw new $(`Cannot pass deleted object as a pointer of type ${this.name}`);return ri(b.J.L,b.J.N.K,this.K)}function H(S,b){if(b===null){if(this.fa)throw new $(`null is not a valid ${this.name}`);if(this.ea){var R=this.va();return S!==null&&S.push(this.W,R),R}return 0}if(!b||!b.J)throw new $(`Cannot pass "${ai(b)}" as a ${this.name}`);if(!b.J.L)throw new $(`Cannot pass deleted object as a pointer of type ${this.name}`);if(!this.da&&b.J.N.da)throw new $(`Cannot convert argument of type ${b.J.U?b.J.U.name:b.J.N.name} to parameter type ${this.name}`);if(R=ri(b.J.L,b.J.N.K,this.K),this.ea){if(b.J.P===void 0)throw new $("Passing raw pointer to smart pointer is illegal");switch(this.xa){case 0:if(b.J.U===this)R=b.J.P;else throw new $(`Cannot convert argument of type ${b.J.U?b.J.U.name:b.J.N.name} to parameter type ${this.name}`);break;case 1:R=b.J.P;break;case 2:if(b.J.U===this)R=b.J.P;else{var P=b.clone();R=this.wa(R,ce(()=>P.delete())),S!==null&&S.push(this.W,R)}break;default:throw new $("Unsupported sharing policy")}}return R}function Ti(S,b){if(b===null){if(this.fa)throw new $(`null is not a valid ${this.name}`);return 0}if(!b.J)throw new $(`Cannot pass "${ai(b)}" as a ${this.name}`);if(!b.J.L)throw new $(`Cannot pass deleted object as a pointer of type ${this.name}`);if(b.J.N.da)throw new $(`Cannot convert argument of type ${b.J.N.name} to parameter type ${this.name}`);return ri(b.J.L,b.J.N.K,this.K)}function Re(S){return this.M(F[S>>2])}var Le=(S,b,R)=>b===R?S:R.S===void 0?null:(S=Le(S,b,R.S),S===null?null:R.pa(S)),Lt={},Be=(S,b)=>{if(b===void 0)throw new $("ptr should not be undefined");for(;S.S;)b=S.ba(b),S=S.S;return Lt[b]};class Zt extends Error{constructor(b){super(b),this.name="InternalError"}}var ee=(S,b)=>{if(!b.N||!b.L)throw new Zt("makeClassHandle requires ptr and ptrType");if(!!b.U!=!!b.P)throw new Zt("Both smartPtrType and smartPtr must be specified");return b.count={value:1},xe(Object.create(S,{J:{value:b,writable:!0}}))};function L(S,b,R,P,D,K,W,Z,at,bt,_t){this.name=S,this.K=b,this.fa=R,this.da=P,this.ea=D,this.ta=K,this.xa=W,this.ka=Z,this.va=at,this.wa=bt,this.W=_t,D||b.S!==void 0?this.R=H:(this.R=P?Ei:Ti,this.O=null)}var w=(S,b)=>{if(!t.hasOwnProperty(S))throw new Zt("Replacing nonexistent public symbol");t[S]=b,t[S].X=void 0},q=[],ft=(S,b)=>{S=G(S);var R;if((R=q[b])||(q[b]=R=me.get(b)),typeof R!="function")throw new $(`unknown function pointer with signature ${S}: ${b}`);return R};class ot extends Error{}var Mt=S=>{S=Rt(S);var b=G(S);return zt(S),b},At=(S,b)=>{function R(K){D[K]||Y[K]||(ht[K]?ht[K].forEach(R):(P.push(K),D[K]=!0))}var P=[],D={};throw b.forEach(R),new ot(`${S}: `+P.map(Mt).join([", "]))},it=(S,b,R)=>{function P(Z){if(Z=R(Z),Z.length!==S.length)throw new Zt("Mismatched type converter count");for(var at=0;at<S.length;++at)Ot(S[at],Z[at])}S.forEach(Z=>ht[Z]=b);var D=Array(b.length),K=[],W=0;for(let[Z,at]of b.entries())Y.hasOwnProperty(at)?D[Z]=Y[at]:(K.push(at),tt.hasOwnProperty(at)||(tt[at]=[]),tt[at].push(()=>{D[Z]=Y[at],++W,W===K.length&&P(D)}));K.length===0&&P(D)},st=(S,b)=>{for(var R=[],P=0;P<S;P++)R.push(F[b+P*4>>2]);return R},wt=S=>{for(;S.length;){var b=S.pop();S.pop()(b)}},O={ftf:function(S,b,R,P,D,K){return function(){var W=R(P);return K(W)}},tffnn:function(S,b,R,P,D,K,W,Z){return function(at){var bt=W(null,this);at=Z(null,at),R(P,bt,at)}},tffnnn:function(S,b,R,P,D,K,W,Z,at){return function(bt,_t){var Ft=W(null,this);bt=Z(null,bt),_t=at(null,_t),R(P,Ft,bt,_t)}},ttfn:function(S,b,R,P,D,K,W){return function(){var Z=W(null,this);return Z=R(P,Z),K(Z)}},ttfnn:function(S,b,R,P,D,K,W,Z){return function(at){var bt=W(null,this);return at=Z(null,at),bt=R(P,bt,at),K(bt)}},ttfnnn:function(S,b,R,P,D,K,W,Z,at){return function(bt,_t){var Ft=W(null,this);return bt=Z(null,bt),_t=at(null,_t),Ft=R(P,Ft,bt,_t),K(Ft)}},tffnnnn:function(S,b,R,P,D,K,W,Z,at,bt){return function(_t,Ft,ut){var pt=W(null,this);_t=Z(null,_t),Ft=at(null,Ft),ut=bt(null,ut),R(P,pt,_t,Ft,ut)}},tffn:function(S,b,R,P,D,K,W){return function(){var Z=W(null,this);R(P,Z)}},ttfnnnnn:function(S,b,R,P,D,K,W,Z,at,bt,_t){return function(Ft,ut,pt,yt){var ct=W(null,this);return Ft=Z(null,Ft),ut=at(null,ut),pt=bt(null,pt),yt=_t(null,yt),ct=R(P,ct,Ft,ut,pt,yt),K(ct)}},ttfnnnn:function(S,b,R,P,D,K,W,Z,at,bt){return function(_t,Ft,ut){var pt=W(null,this);return _t=Z(null,_t),Ft=at(null,Ft),ut=bt(null,ut),pt=R(P,pt,_t,Ft,ut),K(pt)}},ttfnnnnnn:function(S,b,R,P,D,K,W,Z,at,bt,_t,Ft){return function(ut,pt,yt,ct,vt){var xt=W(null,this);return ut=Z(null,ut),pt=at(null,pt),yt=bt(null,yt),ct=_t(null,ct),vt=Ft(null,vt),xt=R(P,xt,ut,pt,yt,ct,vt),K(xt)}},ttfnnnnnnnnnn:function(S,b,R,P,D,K,W,Z,at,bt,_t,Ft,ut,pt,yt,ct){return function(vt,xt,Ht,Bt,de,ge,ke,ze,Xe){var Qe=W(null,this);return vt=Z(null,vt),xt=at(null,xt),Ht=bt(null,Ht),Bt=_t(null,Bt),de=Ft(null,de),ge=ut(null,ge),ke=pt(null,ke),ze=yt(null,ze),Xe=ct(null,Xe),Qe=R(P,Qe,vt,xt,Ht,Bt,de,ge,ke,ze,Xe),K(Qe)}},ttfnnnnnnnnnnnn:function(S,b,R,P,D,K,W,Z,at,bt,_t,Ft,ut,pt,yt,ct,vt,xt){return function(Ht,Bt,de,ge,ke,ze,Xe,Qe,$i,Xi,ns){var br=W(null,this);return Ht=Z(null,Ht),Bt=at(null,Bt),de=bt(null,de),ge=_t(null,ge),ke=Ft(null,ke),ze=ut(null,ze),Xe=pt(null,Xe),Qe=yt(null,Qe),$i=ct(null,$i),Xi=vt(null,Xi),ns=xt(null,ns),br=R(P,br,Ht,Bt,de,ge,ke,ze,Xe,Qe,$i,Xi,ns),K(br)}},ttfnnnnnnnnnnn:function(S,b,R,P,D,K,W,Z,at,bt,_t,Ft,ut,pt,yt,ct,vt){return function(xt,Ht,Bt,de,ge,ke,ze,Xe,Qe,$i){var Xi=W(null,this);return xt=Z(null,xt),Ht=at(null,Ht),Bt=bt(null,Bt),de=_t(null,de),ge=Ft(null,ge),ke=ut(null,ke),ze=pt(null,ze),Xe=yt(null,Xe),Qe=ct(null,Qe),$i=vt(null,$i),Xi=R(P,Xi,xt,Ht,Bt,de,ge,ke,ze,Xe,Qe,$i),K(Xi)}},tffnnnnnnn:function(S,b,R,P,D,K,W,Z,at,bt,_t,Ft,ut){return function(pt,yt,ct,vt,xt,Ht){var Bt=W(null,this);pt=Z(null,pt),yt=at(null,yt),ct=bt(null,ct),vt=_t(null,vt),xt=Ft(null,xt),Ht=ut(null,Ht),R(P,Bt,pt,yt,ct,vt,xt,Ht)}},tffnnnnnnnn:function(S,b,R,P,D,K,W,Z,at,bt,_t,Ft,ut,pt){return function(yt,ct,vt,xt,Ht,Bt,de){var ge=W(null,this);yt=Z(null,yt),ct=at(null,ct),vt=bt(null,vt),xt=_t(null,xt),Ht=Ft(null,Ht),Bt=ut(null,Bt),de=pt(null,de),R(P,ge,yt,ct,vt,xt,Ht,Bt,de)}},tffnnunnnn:function(S,b,R,P,D,K,W,Z,at,bt,_t,Ft,ut){return function(pt,yt,ct,vt,xt,Ht){var Bt=[],de=W(Bt,this);pt=Z(Bt,pt),yt=at(Bt,yt),ct=bt(Bt,ct),vt=_t(Bt,vt),xt=Ft(Bt,xt),Ht=ut(Bt,Ht),R(P,de,pt,yt,ct,vt,xt,Ht),D(Bt)}},tffnnunnn:function(S,b,R,P,D,K,W,Z,at,bt,_t,Ft){return function(ut,pt,yt,ct,vt){var xt=[],Ht=W(xt,this);ut=Z(xt,ut),pt=at(xt,pt),yt=bt(xt,yt),ct=_t(xt,ct),vt=Ft(xt,vt),R(P,Ht,ut,pt,yt,ct,vt),D(xt)}},tffnuunnn:function(S,b,R,P,D,K,W,Z,at,bt,_t,Ft){return function(ut,pt,yt,ct,vt){var xt=[],Ht=W(xt,this);ut=Z(xt,ut),pt=at(xt,pt),yt=bt(xt,yt),ct=_t(xt,ct),vt=Ft(xt,vt),R(P,Ht,ut,pt,yt,ct,vt),D(xt)}},tffnuunnnn:function(S,b,R,P,D,K,W,Z,at,bt,_t,Ft,ut){return function(pt,yt,ct,vt,xt,Ht){var Bt=[],de=W(Bt,this);pt=Z(Bt,pt),yt=at(Bt,yt),ct=bt(Bt,ct),vt=_t(Bt,vt),xt=Ft(Bt,xt),Ht=ut(Bt,Ht),R(P,de,pt,yt,ct,vt,xt,Ht),D(Bt)}},tffnnnnnnnnn:function(S,b,R,P,D,K,W,Z,at,bt,_t,Ft,ut,pt,yt){return function(ct,vt,xt,Ht,Bt,de,ge,ke){var ze=W(null,this);ct=Z(null,ct),vt=at(null,vt),xt=bt(null,xt),Ht=_t(null,Ht),Bt=Ft(null,Bt),de=ut(null,de),ge=pt(null,ge),ke=yt(null,ke),R(P,ze,ct,vt,xt,Ht,Bt,de,ge,ke)}},tffnnnnnnnnnn:function(S,b,R,P,D,K,W,Z,at,bt,_t,Ft,ut,pt,yt,ct){return function(vt,xt,Ht,Bt,de,ge,ke,ze,Xe){var Qe=W(null,this);vt=Z(null,vt),xt=at(null,xt),Ht=bt(null,Ht),Bt=_t(null,Bt),de=Ft(null,de),ge=ut(null,ge),ke=pt(null,ke),ze=yt(null,ze),Xe=ct(null,Xe),R(P,Qe,vt,xt,Ht,Bt,de,ge,ke,ze,Xe)}},tffnnnnnn:function(S,b,R,P,D,K,W,Z,at,bt,_t,Ft){return function(ut,pt,yt,ct,vt){var xt=W(null,this);ut=Z(null,ut),pt=at(null,pt),yt=bt(null,yt),ct=_t(null,ct),vt=Ft(null,vt),R(P,xt,ut,pt,yt,ct,vt)}},tffnunnn:function(S,b,R,P,D,K,W,Z,at,bt,_t){return function(Ft,ut,pt,yt){var ct=[],vt=W(ct,this);Ft=Z(ct,Ft),ut=at(ct,ut),pt=bt(ct,pt),yt=_t(ct,yt),R(P,vt,Ft,ut,pt,yt),D(ct)}},tffnnnunnn:function(S,b,R,P,D,K,W,Z,at,bt,_t,Ft,ut){return function(pt,yt,ct,vt,xt,Ht){var Bt=[],de=W(Bt,this);pt=Z(Bt,pt),yt=at(Bt,yt),ct=bt(Bt,ct),vt=_t(Bt,vt),xt=Ft(Bt,xt),Ht=ut(Bt,Ht),R(P,de,pt,yt,ct,vt,xt,Ht),D(Bt)}},tffnunnnnn:function(S,b,R,P,D,K,W,Z,at,bt,_t,Ft,ut){return function(pt,yt,ct,vt,xt,Ht){var Bt=[],de=W(Bt,this);pt=Z(Bt,pt),yt=at(Bt,yt),ct=bt(Bt,ct),vt=_t(Bt,vt),xt=Ft(Bt,xt),Ht=ut(Bt,Ht),R(P,de,pt,yt,ct,vt,xt,Ht),D(Bt)}},tffnununnnn:function(S,b,R,P,D,K,W,Z,at,bt,_t,Ft,ut,pt){return function(yt,ct,vt,xt,Ht,Bt,de){var ge=[],ke=W(ge,this);yt=Z(ge,yt),ct=at(ge,ct),vt=bt(ge,vt),xt=_t(ge,xt),Ht=Ft(ge,Ht),Bt=ut(ge,Bt),de=pt(ge,de),R(P,ke,yt,ct,vt,xt,Ht,Bt,de),D(ge)}},tffnunnnn:function(S,b,R,P,D,K,W,Z,at,bt,_t,Ft){return function(ut,pt,yt,ct,vt){var xt=[],Ht=W(xt,this);ut=Z(xt,ut),pt=at(xt,pt),yt=bt(xt,yt),ct=_t(xt,ct),vt=Ft(xt,vt),R(P,Ht,ut,pt,yt,ct,vt),D(xt)}},tffnnnnnnnnnnnn:function(S,b,R,P,D,K,W,Z,at,bt,_t,Ft,ut,pt,yt,ct,vt,xt){return function(Ht,Bt,de,ge,ke,ze,Xe,Qe,$i,Xi,ns){var br=W(null,this);Ht=Z(null,Ht),Bt=at(null,Bt),de=bt(null,de),ge=_t(null,ge),ke=Ft(null,ke),ze=ut(null,ze),Xe=pt(null,Xe),Qe=yt(null,Qe),$i=ct(null,$i),Xi=vt(null,Xi),ns=xt(null,ns),R(P,br,Ht,Bt,de,ge,ke,ze,Xe,Qe,$i,Xi,ns)}}};function rt(S,b,R,P,D,K){var W=b.length;if(W<2)throw new $("argTypes array size mismatch! Must at least get return value and receiver (this) types!");R=b[1]!==null&&R!==null;var Z;t:{for(Z=1;Z<b.length;++Z)if(b[Z]!==null&&b[Z].O===void 0){Z=!0;break t}Z=!1}var at;t:{for(at=1;at<b.length;++at)if(b[at]!==null&&b[at].na){at=!0;break t}at=!1}var bt=at&&!K&&!Z;at&&!bt&&(Z=!0),at=!b[0].ja;var _t=b[0],Ft=b[1];for(P=[S,lt,P,D,wt,_t.M.bind(_t),Ft?.R.bind(Ft)],bt&&P.push(B,A),D=2;D<W;++D)bt=b[D],P.push(bt.R.bind(bt));if(!Z)for(D=R?1:2;D<b.length;++D)b[D].O!==null&&P.push(b[D].O);for(K=[R?"t":"f",at?"t":"f",K?"t":"f"],W=R?1:2;W<b.length;++W)R=b[W],K.push(R.na?"s":R.O===void 0?"u":R.O===null?"n":"t");return b=O[K.join("")](...P),Oe(S,b)}var et=S=>{S=S.trim();var b=S.indexOf("(");return b===-1?S:S.slice(0,b)},Et=[],mt=[0,1,,1,null,1,!0,1,!1,1],St=S=>{S>9&&--mt[S+1]===0&&(mt[S]=void 0,Et.push(S))},qt=S=>{if(!S)throw new $(`Cannot use deleted val. handle = ${S}`);return mt[S]},ce=S=>{switch(S){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let b=Et.pop()||mt.length;return mt[b]=S,mt[b+1]=1,b}},gt={name:"emscripten::val",M:S=>{var b=qt(S);return St(S),b},R:(S,b)=>ce(b),T:Re,O:null},jt=(S,b,R)=>{switch(b){case 1:return R?function(P){return this.M(k[P])}:function(P){return this.M(U[P])};case 2:return R?function(P){return this.M(te[P>>1])}:function(P){return this.M(nt[P>>1])};case 4:return R?function(P){return this.M(Pt[P>>2])}:function(P){return this.M(F[P>>2])};default:throw new TypeError(`invalid integer width (${b}): ${S}`)}},he=(S,b)=>{var R=Y[S];if(R===void 0)throw S=`${b} has unknown type ${Mt(S)}`,new $(S);return R},Dt,be,We=(S,b)=>{switch(b){case 4:return function(R){return this.M(Dt[R>>2])};case 8:return function(R){return this.M(be[R>>3])};default:throw new TypeError(`invalid float width (${b}): ${S}`)}},on=(S,b,R)=>{var P=(D,K)=>{var W=0;return{next(){if(W>=D)return{done:!0};var Z=W;return W++,{value:K(Z),done:!1}},[Symbol.iterator](){return this}}};S[Symbol.iterator]||(S[Symbol.iterator]=function(){var D=this[b]();return P(D,K=>this[R](K))})},Za=Object.assign({optional:!0},gt),ln=(S,b,R)=>{var P=U;if(!(R>0))return 0;var D=b;R=b+R-1;for(var K=0;K<S.length;++K){var W=S.codePointAt(K);if(W<=127){if(b>=R)break;P[b++]=W}else if(W<=2047){if(b+1>=R)break;P[b++]=192|W>>6,P[b++]=128|W&63}else if(W<=65535){if(b+2>=R)break;P[b++]=224|W>>12,P[b++]=128|W>>6&63,P[b++]=128|W&63}else{if(b+3>=R)break;P[b++]=240|W>>18,P[b++]=128|W>>12&63,P[b++]=128|W>>6&63,P[b++]=128|W&63,K++}}return P[b]=0,b-D},Ja=S=>{for(var b=0,R=0;R<S.length;++R){var P=S.charCodeAt(R);P<=127?b++:P<=2047?b+=2:P>=55296&&P<=57343?(b+=4,++R):b+=3}return b},yr=globalThis.TextDecoder&&new TextDecoder,vr=(S,b,R,P)=>{if(R=b+R,P)return R;for(;S[b]&&!(b>=R);)++b;return b},cn=(S=0,b,R)=>{var P=U;if(b=vr(P,S,b,R),b-S>16&&P.buffer&&yr)return yr.decode(P.subarray(S,b));for(R="";S<b;){var D=P[S++];if(D&128){var K=P[S++]&63;if((D&224)==192)R+=String.fromCharCode((D&31)<<6|K);else{var W=P[S++]&63;D=(D&240)==224?(D&15)<<12|K<<6|W:(D&7)<<18|K<<12|W<<6|P[S++]&63,D<65536?R+=String.fromCharCode(D):(D-=65536,R+=String.fromCharCode(55296|D>>10,56320|D&1023))}}else R+=String.fromCharCode(D)}return R},Ss=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Ka=(S,b,R)=>{if(S>>=1,b=vr(nt,S,b/2,R),b-S>16&&Ss)return Ss.decode(nt.subarray(S,b));for(R="";S<b;++S)R+=String.fromCharCode(nt[S]);return R},Qa=(S,b,R=2147483647)=>{if(R<2)return 0;R-=2;var P=b;R=R<S.length*2?R/2:S.length;for(var D=0;D<R;++D)te[b>>1]=S.charCodeAt(D),b+=2;return te[b>>1]=0,b-P},ws=S=>S.length*2,to=(S,b,R)=>{var P="";S>>=2;for(var D=0;!(D>=b/4);D++){var K=F[S+D];if(!K&&!R)break;P+=String.fromCodePoint(K)}return P},eo=(S,b,R=2147483647)=>{if(R<4)return 0;var P=b;R=P+R-4;for(var D=0;D<S.length;++D){var K=S.codePointAt(D);if(K>65535&&D++,Pt[b>>2]=K,b+=4,b+4>R)break}return Pt[b>>2]=0,b-P},is=S=>{for(var b=0,R=0;R<S.length;++R)S.codePointAt(R)>65535&&R++,b+=4;return b},xr=[],io=S=>{var b=xr.length;return xr.push(S),b},no=(S,b)=>{for(var R=Array(S),P=0;P<S;++P)R[P]=he(F[b+P*4>>2],`parameter ${P}`);return R},jc=(S,b,R)=>{var P=[];return S=S(P,R),P.length&&(F[b>>2]=ce(P)),S},Yc={},Zc=S=>{var b=Yc[S];return b===void 0?G(S):b},Es=[],T={},z=()=>{if(!J){var S={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:a},b;for(b in T)T[b]===void 0?delete S[b]:S[b]=T[b];var R=[];for(b in S)R.push(`${b}=${S[b]}`);J=R}return J},J;(()=>{var S=ue.prototype;Object.assign(S,{isAliasOf:function(R){if(!(this instanceof ue&&R instanceof ue))return!1;var P=this.J.N.K,D=this.J.L;R.J=R.J;var K=R.J.N.K;for(R=R.J.L;P.S;)D=P.ba(D),P=P.S;for(;K.S;)R=K.ba(R),K=K.S;return P===K&&D===R},clone:function(){if(this.J.L||ne(this),this.J.aa)return this.J.count.value+=1,this;var R=xe,P=Object,D=P.create,K=Object.getPrototypeOf(this),W=this.J;return R=R(D.call(P,K,{J:{value:{count:W.count,$:W.$,aa:W.aa,L:W.L,N:W.N,P:W.P,U:W.U}}})),R.J.count.value+=1,R.J.$=!1,R},delete(){if(this.J.L||ne(this),this.J.$&&!this.J.aa)throw new $("Object already scheduled for deletion");Qt(this);var R=this.J;--R.count.value,R.count.value===0&&(R.P?R.U.W(R.P):R.N.K.W(R.L)),this.J.aa||(this.J.P=void 0,this.J.L=void 0)},isDeleted:function(){return!this.J.L},deleteLater:function(){if(this.J.L||ne(this),this.J.$&&!this.J.aa)throw new $("Object already scheduled for deletion");return Ce.push(this),this.J.$=!0,this}});var b=Symbol.dispose;b&&(S[b]=S.delete)})(),Object.assign(L.prototype,{ra(S){return this.ka&&(S=this.ka(S)),S},ia(S){this.W?.(S)},T:Re,M:function(S){function b(){return this.ea?ee(this.K.Z,{N:this.ta,L:R,U:this,P:S}):ee(this.K.Z,{N:this,L:S})}var R=this.ra(S);if(!R)return this.ia(S),null;var P=Be(this.K,R);if(P!==void 0)return P.J.count.value===0?(P.J.L=R,P.J.P=S,P.clone()):(P=P.clone(),this.ia(S),P);if(P=this.K.qa(R),P=Fe[P],!P)return b.call(this);P=this.da?P.oa:P.pointerType;var D=Le(R,this.K,P.K);return D===null?b.call(this):this.ea?ee(P.K.Z,{N:P,L:D,U:this,P:S}):ee(P.K.Z,{N:P,L:D})}}),t.printErr&&(d=t.printErr),t.thisProgram&&(a=t.thisProgram);var X=t.preInit;if(X)for(typeof X=="function"&&(t.preInit=X=[X]);X.length>0;)X.shift()();var j={40176:()=>{console.log(`Solving with DogLeg
`)},40218:()=>{console.log(`Solving with LevenbergMarquardt
`)},40272:()=>{console.log(`Solving with BFGS
`)}},Rt,zt,Tt,Ut,Xt,se,me,Gt={b:(S,b,R)=>{new V(S).init(b,R),Q++,m()},v:()=>m(""),n:(S,b,R,P,D)=>{b=G(b),P=P===0n;var K=W=>W;if(P){let W=R*8;K=Z=>BigInt.asUintN(W,Z),D=K(D)}Ot(S,{name:b,M:K,R:(W,Z)=>(typeof Z=="number"&&(Z=BigInt(Z)),Z),T:Nt(b,R,!P),O:null})},z:(S,b,R,P)=>{b=G(b),Ot(S,{name:b,M:function(D){return!!D},R:function(D,K){return K?R:P},T:function(D){return this.M(U[D])},O:null})},e:(S,b,R,P,D,K,W,Z,at,bt,_t,Ft,ut)=>{_t=G(_t),K=ft(D,K),Z&&=ft(W,Z),bt&&=ft(at,bt),ut=ft(Ft,ut);var pt=Bi(_t);Ie(pt,function(){At(`Cannot construct ${_t} due to unbound types`,[P])}),it([S,b,R],P?[P]:[],yt=>{if(yt=yt[0],P)var ct=yt.K,vt=ct.Z;else vt=ue.prototype;yt=Oe(_t,function(...de){if(Object.getPrototypeOf(this)!==xt)throw new $(`Use 'new' to construct ${_t}`);if(Ht.Y===void 0)throw new $(`${_t} has no accessible constructor`);var ge=Ht.Y[de.length];if(ge===void 0)throw new $(`Tried to invoke ctor of ${_t} with invalid number of parameters (${de.length}) - expected (${Object.keys(Ht.Y).toString()}) parameters instead!`);return ge.apply(this,de)});var xt=Object.create(vt,{constructor:{value:yt}});yt.prototype=xt;var Ht=new Ge(_t,yt,xt,ut,ct,K,Z,bt);if(Ht.S){var Bt;(Bt=Ht.S).ha??(Bt.ha=[]),Ht.S.ha.push(Ht)}return ct=new L(_t,Ht,!0,!1,!1),Bt=new L(_t+"*",Ht,!1,!1,!1),vt=new L(_t+" const*",Ht,!1,!0,!1),Fe[S]={pointerType:Bt,oa:vt},w(pt,yt),[ct,Bt,vt]})},h:(S,b,R,P,D,K)=>{var W=st(b,R);D=ft(P,D),it([],[S],Z=>{Z=Z[0];var at=`constructor ${Z.name}`;if(Z.K.Y===void 0&&(Z.K.Y=[]),Z.K.Y[b-1]!==void 0)throw new $(`Cannot register multiple constructors with identical number of parameters (${b-1}) for class '${Z.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return Z.K.Y[b-1]=()=>{At(`Cannot construct ${Z.name} due to unbound types`,W)},it([],W,bt=>(bt.splice(1,0,null),Z.K.Y[b-1]=rt(at,bt,null,D,K),[])),[]})},a:(S,b,R,P,D,K,W,Z,at)=>{var bt=st(R,P);b=G(b),b=et(b),K=ft(D,K),it([],[S],_t=>{function Ft(){At(`Cannot call ${ut} due to unbound types`,bt)}_t=_t[0];var ut=`${_t.name}.${b}`;b.startsWith("@@")&&(b=Symbol[b.substring(2)]),Z&&_t.K.ua.push(b);var pt=_t.K.Z,yt=pt[b];return yt===void 0||yt.V===void 0&&yt.className!==_t.name&&yt.X===R-2?(Ft.X=R-2,Ft.className=_t.name,pt[b]=Ft):(si(pt,b,ut),pt[b].V[R-2]=Ft),it([],bt,ct=>(ct=rt(ut,ct,_t,K,W,at),pt[b].V===void 0?(ct.X=R-2,pt[b]=ct):pt[b].V[R-2]=ct,[])),[]})},x:S=>Ot(S,gt),g:(S,b,R,P,D)=>{switch(b=G(b),D=D?D===1?"number":"string":"object",D){case"object":let W=function(){};W.values={},Ot(S,{name:b,constructor:W,valueType:D,M:function(Z){return this.constructor.values[Z]},R:(Z,at)=>at.value,T:jt(b,R,P),O:null}),Ie(b,W);break;case"number":var K={};Ot(S,{name:b,ga:K,valueType:D,M:Z=>Z,R:(Z,at)=>at,T:jt(b,R,P),O:null}),Ie(b,K),delete t[b].X;break;case"string":K={},Ot(S,{name:b,ma:{},la:{},ga:K,valueType:D,M:function(Z){return this.la[Z]},R:function(Z,at){return this.ma[at]},T:jt(b,R,P),O:null}),Ie(b,K),delete t[b].X}},c:(S,b,R)=>{var P=he(S,"enum");switch(b=G(b),P.valueType){case"object":S=P.constructor,P=Object.create(P.constructor.prototype,{value:{value:R},constructor:{value:Oe(`${P.name}_${b}`,function(){})}}),S.values[R]=P,S[b]=P;break;case"number":P.ga[b]=R;break;case"string":P.ma[b]=R,P.la[R]=b,P.ga[b]=b}},m:(S,b,R)=>{b=G(b),Ot(S,{name:b,M:P=>P,R:(P,D)=>D,T:We(b,R),O:null})},f:(S,b,R,P,D)=>{b=G(b);var K=Z=>Z;if(P===0){var W=32-8*R;K=Z=>Z<<W>>>W,D=K(D)}Ot(S,{name:b,M:K,R:(Z,at)=>at,T:Nt(b,R,P!==0),O:null})},k:(S,b,R,P)=>{R=G(R),P=G(P),it([],[S,b],D=>(on(D[0].K.Z,R,P),[]))},d:(S,b,R)=>{function P(K){return new D(k.buffer,F[K+4>>2],F[K>>2])}var D=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][b];R=G(R),Ot(S,{name:R,M:P,T:P},{sa:!0})},l:S=>{Ot(S,Za)},y:(S,b)=>{b=G(b),Ot(S,{name:b,M(R){var P=(P=R+4)?cn(P,F[R>>2],!0):"";return zt(R),P},R(R,P){P instanceof ArrayBuffer&&(P=new Uint8Array(P));var D=typeof P=="string";if(!(D||ArrayBuffer.isView(P)&&P.BYTES_PER_ELEMENT==1))throw new $("Cannot pass non-string to std::string");var K=D?Ja(P):P.length,W=Tt(4+K+1),Z=W+4;return F[W>>2]=K,D?ln(P,Z,K+1):U.set(P,Z),R!==null&&R.push(zt,W),W},T:Re,O(R){zt(R)}})},i:(S,b,R)=>{if(R=G(R),b===2)var P=Ka,D=Qa,K=ws;else P=to,D=eo,K=is;Ot(S,{name:R,M:W=>{var Z=P(W+4,F[W>>2]*b,!0);return zt(W),Z},R:(W,Z)=>{if(typeof Z!="string")throw new $(`Cannot pass non-string to C++ string type ${R}`);var at=K(Z),bt=Tt(4+at+b);return F[bt>>2]=at/b,D(Z,bt+4,at+b),W!==null&&W.push(zt,bt),bt},T:Re,O(W){zt(W)}})},A:(S,b)=>{b=G(b),Ot(S,{ja:!0,name:b,M:()=>{},R:()=>{}})},j:(S,b,R)=>{var P;[b,...P]=no(S,b);var D=b.R.bind(b),K=P.map(at=>at.T.bind(at));S--;var W={toValue:qt};switch(S=K.map((at,bt)=>{var _t=`argFromPtr${bt}`;return W[_t]=at,`${_t}(args${bt?"+"+bt*8:""})`}),R){case 0:var Z="toValue(handle)";break;case 2:Z="new (toValue(handle))";break;case 3:Z="";break;case 1:W.getStringOrSymbol=Zc,Z="toValue(handle)[getStringOrSymbol(methodName)]"}return Z+=`(${S})`,b.ja||(W.toReturnWire=D,W.emval_returnValue=jc,Z=`return emval_returnValue(toReturnWire, destructorsRef, ${Z})`),Z=`return function (handle, methodName, destructorsRef, args) {
${Z}
}`,R=new Function(Object.keys(W),Z)(...Object.values(W)),b=`methodCaller<(${P.map(at=>at.name)}) => ${b.name}>`,io(Oe(b,R))},p:(S,b,R,P,D)=>xr[S](b,R,P,D),o:S=>{var b=qt(S);wt(b),St(S)},t:(S,b,R,P)=>{var D=new Date().getFullYear(),K=new Date(D,0,1).getTimezoneOffset();D=new Date(D,6,1).getTimezoneOffset(),F[S>>2]=Math.max(K,D)*60,Pt[b>>2]=+(K!=D),b=W=>{var Z=Math.abs(W);return`UTC${W>=0?"-":"+"}${String(Math.floor(Z/60)).padStart(2,"0")}${String(Z%60).padStart(2,"0")}`},S=b(K),b=b(D),D<K?(ln(S,R,17),ln(b,P,17)):(ln(S,P,17),ln(b,R,17))},q:(S,b,R)=>{Es.length=0;for(var P;P=U[b++];){var D=P!=105;D&=P!=112,R+=D&&R%8?4:0,Es.push(P==112?F[R>>2]:P==106?Vt[R>>3]:P==105?Pt[R>>2]:be[R>>3]),R+=D?8:4}return j[S](...Es)},u:()=>{m("OOM")},r:(S,b)=>{var R=0,P=0,D;for(D of z()){var K=b+R;F[S+P>>2]=K,R+=ln(D,K,1/0)+1,P+=4}return 0},s:(S,b)=>{var R=z();F[S>>2]=R.length,S=0;for(var P of R)S+=Ja(P)+1;return F[b>>2]=S,0},w:function(S){console.log(S?cn(S):"")}},fe;return fe=await(async function(){function S(P){return P=fe=P.exports,Rt=P.D,zt=P.F,Tt=P.G,Ut=P.H,Xt=P.I,se=P.B,me=P.E,P=se.buffer,k=new Int8Array(P),te=new Int16Array(P),U=new Uint8Array(P),nt=new Uint16Array(P),Pt=new Int32Array(P),F=new Uint32Array(P),Dt=new Float32Array(P),be=new Float64Array(P),Vt=new BigInt64Array(P),Jt=new BigUint64Array(P),fe}var b={a:Gt},R=t.instantiateWasm;return R?new Promise(P=>{R(b,D=>P(S(D)))}):(_??=t.locateFile?t.locateFile?t.locateFile("planegcs.wasm",l):l+"planegcs.wasm":new URL("planegcs.wasm",import.meta.url).href,(function(P){return S(P.instance)})(await E(b)))})(),await(async function(){y();var S=t.setStatus;S&&(S("Running..."),await new Promise(b=>setTimeout(b,1)),setTimeout(S,1,"")),f||(fe.C(),t.onRuntimeInitialized?.(),p())})(),t}var Gd=mb;var Xp={equal:{param1:"object_param_or_number",param2:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type",internalalignment:"primitive_type"},proportional:{param1:"object_param_or_number",param2:"object_param_or_number",ratio:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},difference:{param1:"object_param_or_number",param2:"object_param_or_number",difference:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},p2p_distance:{p1_id:"object_id",p2_id:"object_id",distance:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},p2p_angle_incr_angle:{p1_id:"object_id",p2_id:"object_id",angle:"object_param_or_number",incrAngle:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},p2p_angle:{p1_id:"object_id",p2_id:"object_id",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},p2l_distance:{p_id:"object_id",l_id:"object_id",distance:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},point_on_line_pl:{p_id:"object_id",l_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_line_ppp:{p_id:"object_id",lp1_id:"object_id",lp2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_perp_bisector_pl:{p_id:"object_id",l_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_perp_bisector_ppp:{p_id:"object_id",lp1_id:"object_id",lp2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},parallel:{l1_id:"object_id",l2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},perpendicular_ll:{l1_id:"object_id",l2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},perpendicular_pppp:{l1p1_id:"object_id",l1p2_id:"object_id",l2p1_id:"object_id",l2p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},l2l_angle_ll:{l1_id:"object_id",l2_id:"object_id",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},l2l_angle_pppp:{l1p1_id:"object_id",l1p2_id:"object_id",l2p1_id:"object_id",l2p2_id:"object_id",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},angle_via_point:{crv1_id:"object_id",crv2_id:"object_id",p_id:"object_id",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},angle_via_two_points:{crv1_id:"object_id",crv2_id:"object_id",p1_id:"object_id",p2_id:"object_id",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},angle_via_point_and_param:{crv1_id:"object_id",crv2_id:"object_id",p_id:"object_id",cparam:"object_param_or_number",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},angle_via_point_and_two_params:{crv1_id:"object_id",crv2_id:"object_id",p_id:"object_id",cparam1:"object_param_or_number",cparam2:"object_param_or_number",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},midpoint_on_line_ll:{l1_id:"object_id",l2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},midpoint_on_line_pppp:{l1p1_id:"object_id",l1p2_id:"object_id",l2p1_id:"object_id",l2p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},tangent_circumf:{p1_id:"object_id",p2_id:"object_id",rd1:"object_param_or_number",rd2:"object_param_or_number",internal:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},tangent_at_bspline_knot:{b_id:"object_id",l_id:"object_id",knotindex:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},p2p_coincident:{p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},horizontal_l:{l_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},horizontal_pp:{p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},vertical_l:{l_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},vertical_pp:{p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},coordinate_x:{p_id:"object_id",x:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},coordinate_y:{p_id:"object_id",y:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},arc_rules:{a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_circle:{p_id:"object_id",c_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_ellipse:{p_id:"object_id",e_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_hyperbolic_arc:{p_id:"object_id",e_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_parabolic_arc:{p_id:"object_id",e_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_bspline:{p_id:"object_id",b_id:"object_id",pointparam:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},arc_of_ellipse_rules:{a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},curve_value:{p_id:"object_id",a_id:"object_id",u:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},arc_of_hyperbola_rules:{a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},arc_of_parabola_rules:{a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_arc:{p_id:"object_id",a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},perpendicular_line2arc:{p1_id:"object_id",p2_id:"object_id",a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},perpendicular_arc2line:{a_id:"object_id",p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},perpendicular_circle2arc:{center_id:"object_id",radius:"object_param_or_number",a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},perpendicular_arc2circle:{a_id:"object_id",center_id:"object_id",radius:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},perpendicular_arc2arc:{a1_id:"object_id",reverse1:"primitive_type",a2_id:"object_id",reverse2:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},tangent_lc:{l_id:"object_id",c_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},tangent_le:{l_id:"object_id",e_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},tangent_la:{l_id:"object_id",a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},tangent_cc:{c1_id:"object_id",c2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},tangent_aa:{a1_id:"object_id",a2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},tangent_ca:{c_id:"object_id",a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},circle_radius:{c_id:"object_id",radius:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},arc_radius:{a_id:"object_id",radius:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},circle_diameter:{c_id:"object_id",diameter:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},arc_diameter:{a_id:"object_id",diameter:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},equal_length:{l1_id:"object_id",l2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},equal_radius_cc:{c1_id:"object_id",c2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},equal_radii_ee:{e1_id:"object_id",e2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},equal_radii_ahah:{a1_id:"object_id",a2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},equal_radius_ca:{c1_id:"object_id",a2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},equal_radius_aa:{a1_id:"object_id",a2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},equal_focus:{a1_id:"object_id",a2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},p2p_symmetric_ppl:{p1_id:"object_id",p2_id:"object_id",l_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},p2p_symmetric_ppp:{p1_id:"object_id",p2_id:"object_id",p_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},snells_law:{ray1_id:"object_id",ray2_id:"object_id",boundary_id:"object_id",p_id:"object_id",n1:"object_param_or_number",n2:"object_param_or_number",flipn1:"primitive_type",flipn2:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},c2cdistance:{c1_id:"object_id",c2_id:"object_id",dist:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},c2ldistance:{c_id:"object_id",l_id:"object_id",dist:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},p2cdistance:{p_id:"object_id",c_id:"object_id",distance:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},arc_length:{a_id:"object_id",dist:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_point2ellipse:{e_id:"object_id",p1_id:"object_id",alignmentType:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_ellipse_major_diameter:{e_id:"object_id",p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_ellipse_minor_diameter:{e_id:"object_id",p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_ellipse_focus1:{e_id:"object_id",p1_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_ellipse_focus2:{e_id:"object_id",p1_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_point2hyperbola:{e_id:"object_id",p1_id:"object_id",alignmentType:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_hyperbola_major_diameter:{e_id:"object_id",p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_hyperbola_minor_diameter:{e_id:"object_id",p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_hyperbola_focus:{e_id:"object_id",p1_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_parabola_focus:{e_id:"object_id",p1_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_bspline_control_point:{b_id:"object_id",c_id:"object_id",poleindex:"primitive_type",tag:"primitive_type",driving:"primitive_type"},internal_alignment_knot_point:{b_id:"object_id",p_id:"object_id",knotindex:"primitive_type",tagId:"primitive_type",driving:"primitive_type"}};function La(n,t){let e=new n.IntVector;for(let i of t)e.push_back(i);return e}function ka(n){let t=[];for(let e=0;e<n.size();++e)t.push(n.get(e));return n.delete(),t}var Ct={point:{x:0,y:1},circle:{radius:0},arc:{start_angle:0,end_angle:1,radius:2},ellipse:{radmin:0},arc_of_ellipse:{start_angle:0,end_angle:1,radmin:2},parabola:{},arc_of_parabola:{start_angle:0,end_angle:1},hyperbola:{radmin:0},arc_of_hyperbola:{start_angle:0,end_angle:1,radmin:2},line:{},bspline:{}};function Wd(n,t){let e=Ct[n];if(e){let i=e[t];if(i!==void 0)return i}throw new Error(`Unknown property ${t} for primitive <${n}>`)}var Da=class{get debug_mode(){return this.gcs.get_debug_mode()}set debug_mode(t){this.gcs.set_debug_mode(t)}get equal_optimization(){return this.enable_equal_optimization}set equal_optimization(t){this.enable_equal_optimization=t}constructor(t,e){this.p_param_index=new Map,this.sketch_index=new Ia,this.bspline_gcs_cache=new Map,this.sketch_param_index=new Map,this.nondriving_constraint_params_order=new Map,this.enable_equal_optimization=!1,this.gcs=t,this.module=e}destroy_gcs_module(){this.gcs.clear_data(),this.gcs.delete()}clear_data(){this.nondriving_constraint_params_order.clear(),this.gcs.clear_data(),this.p_param_index.clear(),this.sketch_param_index.clear(),this.sketch_index.clear(),this.bspline_gcs_cache.clear()}push_primitive(t){switch(t.type){case"point":this.push_point(t);break;case"line":this.push_line(t);break;case"circle":this.push_circle(t);break;case"arc":this.push_arc(t);break;case"ellipse":this.push_ellipse(t);break;case"arc_of_ellipse":this.push_arc_of_ellipse(t);break;case"hyperbola":this.push_hyperbola(t);break;case"arc_of_hyperbola":this.push_arc_of_hyperbola(t);break;case"parabola":this.push_parabola(t);break;case"arc_of_parabola":this.push_arc_of_parabola(t);break;case"bspline":this.push_bspline(t);break;default:this.push_constraint(t)}if(this.sketch_index.has(t.id))throw new Error(`object with id ${t.id} already exists`);this.sketch_index.set_primitive(t)}push_primitives_and_params(t){for(let e of t)e.type==="param"?this.push_sketch_param(e.name,e.value):this.push_primitive(e)}solve(t=zd.DogLeg){return this.gcs.solve_system(t)}apply_solution(){this.gcs.apply_solution();for(let t of this.sketch_index.get_primitives())this.pull_primitive(t)}set_convergence_threshold(t){this.gcs.set_covergence_threshold(t)}get_convergence_threshold(){return this.gcs.get_convergence_threshold()}set_max_iterations(t){this.gcs.set_max_iterations(t)}get_max_iterations(){return this.gcs.get_max_iterations()}get_gcs_params(){return ka(this.gcs.get_p_params())}get_gcs_conflicting_constraints(){return ka(this.gcs.get_conflicting()).map(t=>this.sketch_index.get_id_by_index(t))}get_gcs_redundant_constraints(){return ka(this.gcs.get_redundant()).map(t=>this.sketch_index.get_id_by_index(t))}get_gcs_partially_redundant_constraints(){return ka(this.gcs.get_partially_redundant()).map(t=>this.sketch_index.get_id_by_index(t))}has_gcs_conflicting_constraints(){return this.gcs.has_conflicting()}has_gcs_redundant_constraints(){return this.gcs.has_redundant()}has_gcs_partially_redundant_constraints(){return this.gcs.has_partially_redundant()}push_sketch_param(t,e,i=!0){let s=this.gcs.params_size();return this.gcs.push_p_param(e,i),this.sketch_param_index.set(t,s),s}set_sketch_param(t,e){let i=this.sketch_param_index.get(t);if(i===void 0)throw new Error(`sketch param ${t} not found`);this.gcs.set_p_param(i,e,!0)}get_sketch_param_value(t){let e=this.sketch_param_index.get(t);return e===void 0?void 0:this.gcs.get_p_param(e)}get_sketch_param_values(){let t=new Map;for(let[e,i]of this.sketch_param_index)t.set(e,this.gcs.get_p_param(i));return t}push_p_params(t,e,i=!1){let s=this.gcs.params_size();for(let r of e)this.gcs.push_p_param(r,i);return this.p_param_index.has(t)||this.p_param_index.set(t,s),s}push_point(t){this.p_param_index.has(t.id)||this.push_p_params(t.id,[t.x,t.y],t.fixed)}push_line(t){let e=this.sketch_index.get_sketch_point(t.p1_id),i=this.sketch_index.get_sketch_point(t.p2_id);this.push_point(e),this.push_point(i)}push_circle(t){let e=this.sketch_index.get_sketch_point(t.c_id);this.push_point(e),this.push_p_params(t.id,[t.radius],!1)}push_arc(t){let e=this.sketch_index.get_sketch_point(t.c_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.start_id);this.push_point(i);let s=this.sketch_index.get_sketch_point(t.end_id);this.push_point(s),this.push_p_params(t.id,[t.start_angle,t.end_angle,t.radius],!1)}push_ellipse(t){let e=this.sketch_index.get_sketch_point(t.c_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.focus1_id);this.push_point(i),this.push_p_params(t.id,[t.radmin],!1)}push_hyperbola(t){let e=this.sketch_index.get_sketch_point(t.c_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.focus1_id);this.push_point(i),this.push_p_params(t.id,[t.radmin],!1)}push_arc_of_hyperbola(t){let e=this.sketch_index.get_sketch_point(t.c_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.focus1_id);this.push_point(i);let s=this.sketch_index.get_sketch_point(t.start_id);this.push_point(s);let r=this.sketch_index.get_sketch_point(t.end_id);this.push_point(r),this.push_p_params(t.id,[t.start_angle,t.end_angle,t.radmin],!1)}push_parabola(t){let e=this.sketch_index.get_sketch_point(t.vertex_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.focus1_id);this.push_point(i)}push_arc_of_parabola(t){let e=this.sketch_index.get_sketch_point(t.vertex_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.focus1_id);this.push_point(i);let s=this.sketch_index.get_sketch_point(t.start_id);this.push_point(s);let r=this.sketch_index.get_sketch_point(t.end_id);this.push_point(r),this.push_p_params(t.id,[t.start_angle,t.end_angle],!1)}push_arc_of_ellipse(t){let e=this.sketch_index.get_sketch_point(t.c_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.focus1_id);this.push_point(i);let s=this.sketch_index.get_sketch_point(t.start_id);this.push_point(s);let r=this.sketch_index.get_sketch_point(t.end_id);this.push_point(r),this.push_p_params(t.id,[t.start_angle,t.end_angle,t.radmin],!1)}push_bspline(t){for(let e of t.pole_ids){let i=this.sketch_index.get_sketch_point(e);this.push_point(i)}}sketch_primitive_to_gcs(t){switch(t.type){case"point":{let e=this.get_primitive_addr(t.id);return this.gcs.make_point(e+Ct.point.x,e+Ct.point.y)}case"line":{let e=this.get_primitive_addr(t.p1_id),i=this.get_primitive_addr(t.p2_id);return this.gcs.make_line(e+Ct.point.x,e+Ct.point.y,i+Ct.point.x,i+Ct.point.y)}case"circle":{let e=this.get_primitive_addr(t.c_id),i=this.get_primitive_addr(t.id);return this.gcs.make_circle(e+Ct.point.x,e+Ct.point.y,i+Ct.circle.radius)}case"arc":{let e=this.get_primitive_addr(t.c_id),i=this.get_primitive_addr(t.start_id),s=this.get_primitive_addr(t.end_id),r=this.get_primitive_addr(t.id);return this.gcs.make_arc(e+Ct.point.x,e+Ct.point.y,i+Ct.point.x,i+Ct.point.y,s+Ct.point.x,s+Ct.point.y,r+Ct.arc.start_angle,r+Ct.arc.end_angle,r+Ct.arc.radius)}case"ellipse":{let e=this.get_primitive_addr(t.c_id),i=this.get_primitive_addr(t.focus1_id),s=this.get_primitive_addr(t.id);return this.gcs.make_ellipse(e+Ct.point.x,e+Ct.point.y,i+Ct.point.x,i+Ct.point.y,s+Ct.ellipse.radmin)}case"arc_of_ellipse":{let e=this.get_primitive_addr(t.c_id),i=this.get_primitive_addr(t.focus1_id),s=this.get_primitive_addr(t.start_id),r=this.get_primitive_addr(t.end_id),a=this.get_primitive_addr(t.id);return this.gcs.make_arc_of_ellipse(e+Ct.point.x,e+Ct.point.y,i+Ct.point.x,i+Ct.point.y,s+Ct.point.x,s+Ct.point.y,r+Ct.point.x,r+Ct.point.y,a+Ct.arc_of_ellipse.start_angle,a+Ct.arc_of_ellipse.end_angle,a+Ct.arc_of_ellipse.radmin)}case"hyperbola":{let e=this.get_primitive_addr(t.c_id),i=this.get_primitive_addr(t.focus1_id),s=this.get_primitive_addr(t.id+Ct.hyperbola.radmin);return this.gcs.make_hyperbola(e+Ct.point.x,e+Ct.point.y,i+Ct.point.x,i+Ct.point.y,s+Ct.hyperbola.radmin)}case"arc_of_hyperbola":{let e=this.get_primitive_addr(t.c_id),i=this.get_primitive_addr(t.focus1_id),s=this.get_primitive_addr(t.start_id),r=this.get_primitive_addr(t.end_id),a=this.get_primitive_addr(t.id);return this.gcs.make_arc_of_hyperbola(e+Ct.point.x,e+Ct.point.y,i+Ct.point.x,i+Ct.point.y,s+Ct.point.x,s+Ct.point.y,r+Ct.point.x,r+Ct.point.y,a+Ct.arc_of_hyperbola.start_angle,a+Ct.arc_of_hyperbola.end_angle,a+Ct.arc_of_hyperbola.radmin)}case"parabola":{let e=this.get_primitive_addr(t.vertex_id),i=this.get_primitive_addr(t.focus1_id);return this.gcs.make_parabola(e+Ct.point.x,e+Ct.point.y,i+Ct.point.x,i+Ct.point.y)}case"arc_of_parabola":{let e=this.get_primitive_addr(t.vertex_id),i=this.get_primitive_addr(t.focus1_id),s=this.get_primitive_addr(t.start_id),r=this.get_primitive_addr(t.end_id),a=this.get_primitive_addr(t.id);return this.gcs.make_arc_of_parabola(e+Ct.point.x,e+Ct.point.y,i+Ct.point.x,i+Ct.point.y,s+Ct.point.x,s+Ct.point.y,r+Ct.point.x,r+Ct.point.y,a+Ct.arc_of_parabola.start_angle,a+Ct.arc_of_parabola.end_angle)}case"bspline":{if(!this.module)throw new Error("ModuleStatic required for BSpline creation");let e=t,i=this.bspline_gcs_cache.get(e.id);if(i!==void 0)return i;if(e.pole_ids.length<2)throw new Error("BSpline must have at least 2 control points, got "+e.pole_ids.length);let s=[];for(let p of e.pole_ids){let m=this.get_primitive_addr(p);s.push(m+Ct.point.x),s.push(m+Ct.point.y)}let r=this.gcs.push_p_param(this.gcs.get_p_param(s[0]),!1),a=this.gcs.push_p_param(this.gcs.get_p_param(s[1]),!1),o=this.gcs.push_p_param(this.gcs.get_p_param(s[s.length-2]),!1),l=this.gcs.push_p_param(this.gcs.get_p_param(s[s.length-1]),!1),c=[];for(let p of e.weights)c.push(this.gcs.push_p_param(p,!0));let h=[];for(let p of e.knots)h.push(this.gcs.push_p_param(p,!0));let u=La(this.module,s),d=La(this.module,c),f=La(this.module,h),g=La(this.module,e.mult),y=this.gcs.make_bspline(r,a,o,l,u,d,f,g,e.degree,e.periodic);return this.bspline_gcs_cache.set(e.id,y),y}default:throw new Error(`not-implemented object type: ${t.type}`)}}push_constraint(t){var e,i,s,r;let a=[],o=[],l=Xp[t.type];if(l===void 0)throw new Error(`unknown constraint type: ${t.type}`);let c=-1;t.temporary||(c=this.sketch_index.counter()+1);for(let u of Object.keys(l)){let d=l[u];if(d===void 0)throw new Error(`unknown parameter type: ${d} in constraint ${t.type}`);if(u==="tagId"){a.push(c);continue}if(u==="driving"){a.push((e=t.driving)!==null&&e!==void 0?e:!0);continue}if(u==="internalalignment"&&t.type==="equal"){a.push((i=t.internalalignment)!==null&&i!==void 0?i:Bd.NoInternalAlignment);continue}let f=t[u],g=(s=t.driving)!==null&&s!==void 0?s:!0;if(d==="object_param_or_number"){if(typeof f=="number"){if(!t.driving){let p=this.nondriving_constraint_params_order.get(t.id);p===void 0?this.nondriving_constraint_params_order.set(t.id,[u]):p.push(u)}let y=this.push_p_params(t.id,[f],g);a.push(y)}else if(typeof f=="string"){let y=this.sketch_param_index.get(f);if(y===void 0)throw new Error(`couldn't parse object param: ${u} in constraint ${t.type}: unknown param ${f}`);a.push(y)}else if(typeof f=="boolean")a.push(f);else if(f!==void 0){let y=this.sketch_index.get_primitive_or_fail(f.o_id);if(!ur(y))throw new Error(`Primitive #${f.o_id} (${y.type}) is not supported to be referenced from a constraint.`);let p=this.get_primitive_addr(f.o_id)+Wd(y.type,f.prop);a.push(p)}}else if(d==="object_id"&&typeof f=="string"){let y=this.sketch_index.get_primitive_or_fail(f),p=this.sketch_primitive_to_gcs(y);a.push(p),y.type!=="bspline"&&o.push(p)}else if(d==="primitive_type"&&(typeof f=="number"||typeof f=="boolean"))a.push(f);else throw new Error(`unhandled parameter ${u} type: ${d}`)}let h=t.type;if(this.gcs[`add_constraint_${h}`](...a,(r=t.scale)!==null&&r!==void 0?r:1),this.enable_equal_optimization&&h==="equal"){let[u,d]=[a[0],a[1]];typeof u=="number"&&typeof d=="number"&&(this.gcs.get_is_fixed(u)&&!this.gcs.get_is_fixed(d)?this.gcs.set_p_param(d,this.gcs.get_p_param(u),!1):this.gcs.get_is_fixed(d)&&!this.gcs.get_is_fixed(u)&&this.gcs.set_p_param(u,this.gcs.get_p_param(d),!1))}for(let u of o)u.delete()}get_primitive_addr(t){let e=this.p_param_index.get(t);if(e===void 0)throw new Error(`sketch object ${t} not found in p-params index`);return e}pull_primitive(t){this.p_param_index.has(t.id)?t.type==="point"?this.pull_point(t):t.type==="line"?this.pull_line(t):t.type==="arc"?this.pull_arc(t):t.type==="circle"?this.pull_circle(t):t.type==="ellipse"?this.pull_ellipse(t):t.type==="arc_of_ellipse"?this.pull_arc_of_ellipse(t):t.type==="hyperbola"?this.pull_hyperbola(t):t.type==="arc_of_hyperbola"?this.pull_arc_of_hyperbola(t):t.type==="parabola"?this.pull_parabola(t):t.type==="arc_of_parabola"?this.pull_arc_of_parabola(t):t.type==="bspline"?this.pull_bspline(t):Hd(t)?this.pull_constraint(t):this.sketch_index.set_primitive(t):this.sketch_index.set_primitive(t)}pull_point(t){let e=this.get_primitive_addr(t.id),i=Object.assign(Object.assign({},t),{x:this.gcs.get_p_param(e+Ct.point.x),y:this.gcs.get_p_param(e+Ct.point.y)});this.sketch_index.set_primitive(i)}pull_line(t){this.sketch_index.set_primitive(t)}pull_arc(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{start_angle:this.gcs.get_p_param(e+Ct.arc.start_angle),end_angle:this.gcs.get_p_param(e+Ct.arc.end_angle),radius:this.gcs.get_p_param(e+Ct.arc.radius)}))}pull_circle(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{radius:this.gcs.get_p_param(e+Ct.circle.radius)}))}pull_ellipse(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{radmin:this.gcs.get_p_param(e+Ct.ellipse.radmin)}))}pull_arc_of_ellipse(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{start_angle:this.gcs.get_p_param(e+Ct.arc_of_ellipse.start_angle),end_angle:this.gcs.get_p_param(e+Ct.arc_of_ellipse.end_angle),radmin:this.gcs.get_p_param(e+Ct.arc_of_ellipse.radmin)}))}pull_hyperbola(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{radmin:this.gcs.get_p_param(e+Ct.hyperbola.radmin)}))}pull_arc_of_hyperbola(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{start_angle:this.gcs.get_p_param(e+Ct.arc_of_hyperbola.start_angle),end_angle:this.gcs.get_p_param(e+Ct.arc_of_hyperbola.end_angle),radmin:this.gcs.get_p_param(e+Ct.arc_of_hyperbola.radmin)}))}pull_parabola(t){this.sketch_index.set_primitive(t)}pull_arc_of_parabola(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{start_angle:this.gcs.get_p_param(e+Ct.arc_of_parabola.start_angle),end_angle:this.gcs.get_p_param(e+Ct.arc_of_parabola.end_angle)}))}pull_bspline(t){this.sketch_index.set_primitive(t)}pull_constraint(t){if(t.driving!==!1)return;let e=this.get_primitive_addr(t.id),i=this.nondriving_constraint_params_order.get(t.id);if(!i){console.warn(`No offsets for constraint type ${t.type}`);return}let s=Object.assign({},t);function r(a,o,l){a[o]=l}for(let[a,o]of i.entries()){let l=this.gcs.get_p_param(e+a);r(s,o,l)}this.sketch_index.set_primitive(s)}};var qp={sqrt:Math.sqrt,abs:Math.abs,round:Math.round,floor:Math.floor,ceil:Math.ceil,min:Math.min,max:Math.max,sin:n=>Math.sin(n*Math.PI/180),cos:n=>Math.cos(n*Math.PI/180),tan:n=>Math.tan(n*Math.PI/180),asin:n=>Math.asin(n)*180/Math.PI,acos:n=>Math.acos(n)*180/Math.PI,atan:n=>Math.atan(n)*180/Math.PI},$d={pi:Math.PI,PI:Math.PI};function gb(n){let t=[],e=0,i=String(n).replace(/,/g,".");for(;e<i.length;){let s=i[e];if(/\s/.test(s)){e++;continue}if(/[0-9.]/.test(s)){let r=e;for(;r<i.length&&/[0-9.eE]/.test(i[r]);)(i[r]==="e"||i[r]==="E")&&(i[r+1]==="-"||i[r+1]==="+")&&r++,r++;let a=Number(i.slice(e,r));if(!Number.isFinite(a))throw new Error(`Numero non valido: ${i.slice(e,r)}`);t.push({t:"n",v:a}),e=r;continue}if(/[A-Za-z_À-ſ]/.test(s)){let r=e;for(;r<i.length&&/[A-Za-z0-9_À-ſ]/.test(i[r]);)r++;let a=i.slice(e,r);if(["mm","deg","gradi"].includes(a)&&t.length&&t[t.length-1].t==="n"){e=r;continue}t.push({t:"id",v:a}),e=r;continue}if("+-*/^();".includes(s)){t.push({t:s}),e++;continue}if(s==="\xB0"){e++;continue}throw new Error(`Carattere non valido: ${s}`)}return t}function fi(n,t={}){if(typeof n=="number")return n;let e=gb(n);if(!e.length)throw new Error("Valore mancante");let i=0,s=()=>e[i],r=d=>{if(!e[i]||e[i].t!==d)throw new Error(`Atteso "${d}"`);return e[i++]};function a(){let d=e[i++];if(!d)throw new Error("Espressione incompleta");if(d.t==="n")return d.v;if(d.t==="("){let f=h();return r(")"),f}if(d.t==="-")return-o();if(d.t==="+")return o();if(d.t==="id"){if(s()&&s().t==="("){let f=qp[d.v];if(!f)throw new Error(`Funzione sconosciuta: ${d.v}`);i++;let g=[];if(s()&&s().t!==")")for(g.push(h());s()&&s().t===";";)i++,g.push(h());return r(")"),f(...g)}if(d.v in t)return t[d.v];if(d.v in $d)return $d[d.v];throw new Error(`Parametro sconosciuto: ${d.v}`)}throw new Error("Espressione non valida")}function o(){return l()}function l(){let d=a();return s()&&s().t==="^"?(i++,d**o()):d}function c(){let d=o();for(;s()&&(s().t==="*"||s().t==="/");){let f=e[i++].t,g=o();d=f==="*"?d*g:d/g}return d}function h(){let d=c();for(;s()&&(s().t==="+"||s().t==="-");){let f=e[i++].t,g=c();d=f==="+"?d+g:d-g}return d}let u=h();if(i<e.length)throw new Error("Espressione non valida");if(!Number.isFinite(u))throw new Error("Risultato non numerico");return u}function Oi(n=[]){let t={},e={};for(let i of n)try{t[i.name]=fi(i.expr,t)}catch(s){e[i.name]=s.message,t[i.name]=0}return{scope:t,errors:e}}function Xd(n){return/^[A-Za-z_][A-Za-z0-9_]*$/.test(n)&&!(n in qp)&&!(n in $d)}function ve(n,t=3){if(!Number.isFinite(n))return"?";let e=Number(n.toFixed(t));return String(Object.is(e,-0)?0:e)}var Wi=null;async function Yp(n){let t=await Gd(n?{locateFile:()=>n}:void 0);Wi=new Da(new t.GcsSystem,t)}var _b={point:["id","type","x","y","fixed"],line:["id","type","p1_id","p2_id"],circle:["id","type","c_id","radius"],arc:["id","type","c_id","radius","start_angle","end_angle","start_id","end_id"]},Zp=Math.PI/180;function qd(n){switch(n.type){case"p2p_distance":case"p2l_distance":return{k:"distance"};case"circle_diameter":case"arc_diameter":return{k:"diameter"};case"circle_radius":case"arc_radius":return{k:"radius"};case"l2l_angle_ll":return{k:"angle",deg:!0};case"difference":return{k:"difference",signed:!0};case"coordinate_x":return{k:"x"};case"coordinate_y":return{k:"y"};default:return null}}function jp(n){let t=_b[n.type],e={};for(let i of t)e[i]=n[i];return n.type==="point"&&(e.fixed=!!(n.fixed||n.ref)),e}function xc(n,t={},e=null){if(!Wi)throw new Error("Solver non pronto");let i=n.geo,s=[],r=i.filter(p=>p.type==="point"),a=i.filter(p=>p.type!=="point");for(let p of r)s.push(jp(p));for(let p of a)s.push(jp(p));for(let p of a)p.type==="arc"&&s.push({id:`${p.id}#r`,type:"arc_rules",a_id:p.id});let o=null;for(let p of n.cons||[]){if(p.off)continue;let m={...p};delete m.expr,delete m.lx,delete m.ly,delete m.sign,delete m.off,delete m.grp,delete m.nolabel;let _=qd(p);if(_&&p.expr!=null)try{let M=fi(p.expr,t);_.deg&&(M*=Zp),_.signed&&(M*=p.sign||1),m[_.k]=M}catch(M){o=M.message;continue}s.push(m)}(e?Array.isArray(e)?e:[e]:[]).forEach((p,m)=>{s.push({id:`#dx${m}`,type:"coordinate_x",p_id:p.id,x:p.x,temporary:!0}),s.push({id:`#dy${m}`,type:"coordinate_y",p_id:p.id,y:p.y,temporary:!0})}),Wi.clear_data(),Wi.push_primitives_and_params(s);let c=Wi.solve(),h=c===vc.Success||c===vc.Converged,u=null;try{u=Wi.gcs.dof()}catch{}let d=Wi.has_gcs_conflicting_constraints()?Wi.get_gcs_conflicting_constraints():[],f=Wi.has_gcs_redundant_constraints()?Wi.get_gcs_redundant_constraints():[];if(!h)return{ok:h,geo:i,dof:u,conflicting:d,redundant:f,error:o||"Vincoli incompatibili"};Wi.apply_solution();let g=new Map(Wi.sketch_index.get_primitives().map(p=>[p.id,p])),y=i.map(p=>{let m=g.get(p.id);return m?p.type==="point"?{...p,x:m.x,y:m.y}:p.type==="circle"?{...p,radius:m.radius}:p.type==="arc"?{...p,radius:m.radius,start_angle:m.start_angle,end_angle:m.end_angle}:p:p});return{ok:h,geo:y,dof:u,conflicting:d,redundant:f,error:o}}function jd(n,t){let e=new Map(t.map(s=>[s.id,s])),i=s=>e.get(s);switch(n.type){case"p2p_distance":{let s=i(n.p1_id),r=i(n.p2_id);return Math.hypot(r.x-s.x,r.y-s.y)}case"p2l_distance":{let s=i(n.p_id),r=i(n.l_id),a=i(r.p1_id),o=i(r.p2_id),l=o.x-a.x,c=o.y-a.y;return Math.abs((s.x-a.x)*c-(s.y-a.y)*l)/(Math.hypot(l,c)||1)}case"circle_diameter":return i(n.c_id).radius*2;case"arc_diameter":return i(n.a_id).radius*2;case"circle_radius":return i(n.c_id).radius;case"arc_radius":return i(n.a_id).radius;case"l2l_angle_ll":{let s=i(n.l1_id),r=i(n.l2_id),a=l=>{let c=i(l.p1_id),h=i(l.p2_id);return Math.atan2(h.y-c.y,h.x-c.x)},o=a(r)-a(s);for(;o<=-Math.PI;)o+=2*Math.PI;for(;o>Math.PI;)o-=2*Math.PI;return o/Zp}case"difference":{let s=i(n.param1.o_id)[n.param1.prop],r=i(n.param2.o_id)[n.param2.prop];return Math.abs(s-r)}default:return 0}}var _n=Math.PI*2,yb=1e-7,Mc=n=>(n%=_n,n<0?n+_n:n),Na=(n,t)=>Math.hypot(n[0]-t[0],n[1]-t[1]);function vb(n){let t=new Map(n.map(s=>[s.id,s])),e=s=>{let r=t.get(s);return[r.x,r.y]},i=[];for(let s of n)if(!(s.construction||s.ref)){if(s.type==="line")i.push({src:s.id,kind:"line",a:e(s.p1_id),b:e(s.p2_id)});else if(s.type==="circle")i.push({src:s.id,kind:"circle",c:e(s.c_id),r:s.radius});else if(s.type==="arc"){let r=e(s.c_id),a=Mc(s.start_angle),o=Mc(s.end_angle-s.start_angle);o<1e-9&&(o=_n),i.push({src:s.id,kind:"arc",c:r,r:s.radius,a0:a,sw:o})}}return i}function Kn(n,t){if(n.kind==="line")return[n.a[0]+(n.b[0]-n.a[0])*t,n.a[1]+(n.b[1]-n.a[1])*t];let e=n.kind==="circle"?_n*t:n.a0+n.sw*t;return[n.c[0]+n.r*Math.cos(e),n.c[1]+n.r*Math.sin(e)]}function Yd(n,t){if(n.kind==="circle")return Mc(t)/_n;let e=Mc(t-n.a0);return e<=n.sw+1e-9?Math.min(1,e/n.sw):_n-e<1e-9?0:null}function xb(n){return n.kind==="line"?Na(n.a,n.b):n.r*(n.kind==="circle"?_n:n.sw)}function Qp(n,t){let e=[];if(n.kind==="line"&&t.kind==="line"){let f=[n.b[0]-n.a[0],n.b[1]-n.a[1]],g=[t.b[0]-t.a[0],t.b[1]-t.a[1]],y=f[0]*g[1]-f[1]*g[0],p=Math.max(Math.hypot(...f),Math.hypot(...g));if(Math.abs(y)<1e-12*p*p)return e;let m=[t.a[0]-n.a[0],t.a[1]-n.a[1]],_=(m[0]*g[1]-m[1]*g[0])/y,M=(m[0]*f[1]-m[1]*f[0])/y,x=1e-9/Math.max(Math.hypot(...f),1e-12)*1e3,E=1e-9/Math.max(Math.hypot(...g),1e-12)*1e3;return _>=-x&&_<=1+x&&M>=-E&&M<=1+E&&e.push([bc(_),bc(M)]),e}if(n.kind==="line")return Qp(t,n).map(([f,g])=>[g,f]);if(t.kind==="line"){let f=[t.b[0]-t.a[0],t.b[1]-t.a[1]],g=[t.a[0]-n.c[0],t.a[1]-n.c[1]],y=f[0]*f[0]+f[1]*f[1],p=2*(g[0]*f[0]+g[1]*f[1]),m=g[0]*g[0]+g[1]*g[1]-n.r*n.r,_=p*p-4*y*m;if(y<1e-18)return e;let M=1e-9*y*n.r;if(_<-M)return e;_=Math.max(0,_);let x=Math.sqrt(_),E=_<1e-18?[-p/(2*y)]:[(-p-x)/(2*y),(-p+x)/(2*y)],C=1e-6/Math.sqrt(y);for(let v of E){if(v<-C||v>1+C)continue;let A=Kn(t,bc(v)),B=Yd(n,Math.atan2(A[1]-n.c[1],A[0]-n.c[0]));B!==null&&e.push([B,bc(v)])}return e}let i=t.c[0]-n.c[0],s=t.c[1]-n.c[1],r=Math.hypot(i,s);if(r<1e-9)return e;let a=1e-7*Math.max(n.r,t.r,1);if(r>n.r+t.r+a||r<Math.abs(n.r-t.r)-a)return e;let o=(n.r*n.r-t.r*t.r+r*r)/(2*r),l=n.r*n.r-o*o,c=l>0?Math.sqrt(l):0,h=n.c[0]+o*i/r,u=n.c[1]+o*s/r,d=c<1e-9?[[h,u]]:[[h+c*-s/r,u+c*i/r],[h-c*-s/r,u-c*i/r]];for(let f of d){let g=Yd(n,Math.atan2(f[1]-n.c[1],f[0]-n.c[0])),y=Yd(t,Math.atan2(f[1]-t.c[1],f[0]-t.c[0]));g!==null&&y!==null&&e.push([g,y])}return e}var bc=n=>Math.min(1,Math.max(0,n));function bb(n,t,e){if(n.kind==="line")return{src:n.src,kind:"line",a:Kn(n,t),b:Kn(n,e)};let i=n.a0+n.sw*t,s=n.a0+n.sw*e;return{src:n.src,kind:"arc",c:n.c,r:n.r,a0:i,sw:s-i,a:Kn(n,t),b:Kn(n,e)}}function Mb(n,t){let e=n.a0+n.sw*t;return[n.c[0]+n.r*Math.cos(e),n.c[1]+n.r*Math.sin(e)]}function Ua(n,t){let e=n.e,i=n.fwd?t:1-t;return e.kind==="line"?[e.a[0]+(e.b[0]-e.a[0])*i,e.a[1]+(e.b[1]-e.a[1])*i]:Mb(e,i)}function Zd(n){let t=0;for(let e=0,i=n.length;e<i;e++){let s=n[e],r=n[(e+1)%i];t+=s[0]*r[1]-r[0]*s[1]}return t/2}function ys(n,t){let e=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){let r=t[i],a=t[s];r[1]>n[1]!=a[1]>n[1]&&n[0]<(a[0]-r[0])*(n[1]-r[1])/(a[1]-r[1])+r[0]&&(e=!e)}return e}function Sb(n,t,e){let i=e[0]-t[0],s=e[1]-t[1],r=i*i+s*s,a=r?((n[0]-t[0])*i+(n[1]-t[1])*s)/r:0;return a=Math.max(0,Math.min(1,a)),Math.hypot(n[0]-t[0]-a*i,n[1]-t[1]-a*s)}function Jp(n,t){let e=1/0;for(let i=0;i<t.length;i++)e=Math.min(e,Sb(n,t[i],t[(i+1)%t.length]));return e}function wb(n,t){let e=n.e;if(e.kind==="line"){t.push(n.fwd?e.a:e.b);return}let i=Math.max(2,Math.ceil(Math.abs(e.sw)/_n*96));for(let s=0;s<i;s++)t.push(Ua(n,s/i))}function Eb(n){let t=n.e;return t.kind==="line"?n.fwd?{k:"line",a:t.a,b:t.b,src:t.src}:{k:"line",a:t.b,b:t.a,src:t.src}:{k:"arc",a:Ua(n,0),b:Ua(n,1),m:Ua(n,.5),c:t.c,r:t.r,src:t.src}}function Sc(n){let t=vb(n).filter(_=>xb(_)>yb),e=t.length,i=t.map(_=>_.kind==="circle"?[]:[0,1]);for(let _=0;_<e;_++)for(let M=_+1;M<e;M++)for(let[x,E]of Qp(t[_],t[M]))i[_].push(x),i[M].push(E);let s=[],r=[];t.forEach((_,M)=>{let x=i[M].map(E=>_.kind==="circle"?E%1:E).sort((E,C)=>E-C);if(x=x.filter((E,C)=>C===0||E-x[C-1]>1e-9),_.kind==="circle"){if(x.length>1&&1-x[x.length-1]+x[0]<1e-9&&x.pop(),!x.length){r.push(_);return}for(let E=0;E<x.length;E++){let C=x[E],v=E+1<x.length?x[E+1]:x[0]+1;s.push({src:_.src,kind:"arc",c:_.c,r:_.r,a0:_n*C,sw:_n*(v-C),a:Kn(_,C),b:Kn(_,v%1)})}return}for(let E=0;E+1<x.length;E++)s.push(bb(_,x[E],x[E+1]))});let a=s.filter(_=>(_.kind==="line"?Na(_.a,_.b):Math.abs(_.sw)*_.r)>1e-6),o=[],l=_=>{for(let M=0;M<o.length;M++)if(Na(o[M],_)<1e-5)return M;return o.push(_),o.length-1};for(let _ of a)_.u=l(_.a),_.v=l(_.b),_.len=_.kind==="line"?Na(_.a,_.b):Math.abs(_.sw)*_.r;let c=a.slice();for(;;){let _=new Array(o.length).fill(0);for(let x of c)_[x.u]++,_[x.v]++;let M=c.filter(x=>_[x.u]>1&&_[x.v]>1);if(M.length===c.length)break;c=M}let h=o.map(()=>[]),u=[];for(let _ of c){let M={e:_,fwd:!0,from:_.u,to:_.v},x={e:_,fwd:!1,from:_.v,to:_.u};M.twin=x,x.twin=M,u.push(M,x),h[_.u].push(M),h[_.v].push(x)}h.forEach((_,M)=>{if(!_.length)return;let x=Math.min(..._.map(E=>E.e.len));for(let E of _){let C=Math.min(.02,.02*x/E.e.len),v=Ua(E,C);E.ang=Math.atan2(v[1]-o[M][1],v[0]-o[M][0])}_.sort((E,C)=>E.ang-C.ang)});let d=o.map((_,M)=>M),f=_=>d[_]===_?_:d[_]=f(d[_]);for(let _ of c)d[f(_.u)]=f(_.v);let g=[],y=new Set;for(let _ of u){if(y.has(_))continue;let M=[],x=_,E=0;for(;!y.has(x)&&E++<1e5;){y.add(x),M.push(x);let v=h[x.to],A=v.indexOf(x.twin);x=v[(A-1+v.length)%v.length]}let C=[];for(let v of M)wb(v,C);g.push({hes:M,poly:C,area:Zd(C),comp:f(_.from),segs:M.map(Eb)})}for(let _ of r){let M=[];for(let C=0;C<96;C++)M.push(Kn(_,C/96));let x=[{k:"circle",c:_.c,r:_.r,src:_.src}],E=`c${_.src}`;g.push({poly:M,area:Zd(M),comp:E,segs:x}),g.push({poly:M.slice().reverse(),area:-Zd(M),comp:E,segs:x,outer:!0})}let p=g.filter(_=>_.area>1e-9&&!_.outer),m=g.filter(_=>_.area<-1e-9);for(let _ of m){let M=null;for(let x of p)x.comp!==_.comp&&ys(_.poly[0],x.poly)&&(!M||x.area<M.area)&&(M=x);M&&(M.holes||=[]).push(_)}return p.map(_=>{let M=_.holes||[],x=Kp(_.segs)+(M.length?"/"+M.map(C=>Kp(C.segs)).sort().join("/"):""),E=M.map(C=>C.poly);return{key:x,segs:_.segs,holes:M.map(C=>C.segs),poly:_.poly,holePolys:E,area:_.area-M.reduce((C,v)=>C+Math.abs(v.area),0),sample:Tb(_.poly,E)}}).sort((_,M)=>M.area-_.area)}function Kp(n){return[...new Set(n.map(t=>t.src))].sort().join(",")}function Tb(n,t){let e=1/0,i=1/0,s=-1/0,r=-1/0;for(let[c,h]of n)e=Math.min(e,c),i=Math.min(i,h),s=Math.max(s,c),r=Math.max(r,h);let a=null,o=-1,l=28;for(let c=1;c<l;c++)for(let h=1;h<l;h++){let u=[e+(s-e)*c/l,i+(r-i)*h/l];if(!ys(u,n)||t.some(f=>ys(u,f)))continue;let d=Math.min(Jp(u,n),...t.map(f=>Jp(u,f)));d>o&&(o=d,a=u)}return a||n[0]}function Ab(n,t){return ys(t,n.poly)&&!n.holePolys.some(e=>ys(t,e))}function Qn(n,t){let e=n.filter(s=>s.key===t.key);if(e.length===1)return e[0];let i=e.length?e:n;if(t.seed){let s=i.find(r=>Ab(r,t.seed));if(s)return s;if(e.length){let r=null,a=1/0;for(let o of e){let l=Na(o.sample,t.seed);l<a&&(a=l,r=o)}return r}}return e[0]||null}var Cb={coincident:"Coincidente: tocca due punti, oppure un punto e la linea/curva su cui deve stare",horizontal:"Orizzontale: tocca una linea (o due punti da allineare)",vertical:"Verticale: tocca una linea (o due punti da allineare)",parallel:"Parallela: tocca due linee",perpendicular:"Perpendicolare: tocca due linee",tangent:"Tangente: tocca una linea e un cerchio/arco, o due curve",equal:"Uguale: tocca due linee (stessa lunghezza) o due cerchi/archi (stesso raggio)",midpoint:"Punto medio: tocca un punto e poi la linea",concentric:"Concentrico: tocca due cerchi o archi",symmetric:"Simmetria: tocca due punti e poi la linea di simmetria",fix:"Fissa: tocca i punti da bloccare (tocca di nuovo per sbloccare)"},Se=Math.PI*2,em=()=>[{id:"O",type:"point",x:0,y:0,fixed:!0,ref:!0},{id:"X1",type:"point",x:1,y:0,fixed:!0,ref:!0},{id:"Y1",type:"point",x:0,y:1,fixed:!0,ref:!0},{id:"AX",type:"line",p1_id:"O",p2_id:"X1",ref:!0},{id:"AY",type:"line",p1_id:"O",p2_id:"Y1",ref:!0}];function Ac(){return em()}var wc=new Set(["X1","Y1"]),Rb={horizontal_l:"H",vertical_l:"V",horizontal_pp:"H",vertical_pp:"V",parallel:"\u2225",perpendicular_ll:"\u22A5",tangent_lc:"T",tangent_la:"T",tangent_cc:"T",tangent_aa:"T",tangent_ca:"T",equal_length:"=",equal_radius_cc:"=",equal_radius_aa:"=",equal_radius_ca:"=",p2p_symmetric_ppp:"M",p2p_symmetric_ppl:"\u21CB",p2p_coincident:"\u25CF"},Pb=new Set(["p2p_distance","p2l_distance","circle_diameter","arc_diameter","circle_radius","arc_radius","l2l_angle_ll","difference"]),Ec=class{constructor({host:t,viewport:e,onChange:i,toast:s,promptValue:r,getScope:a,onExit:o}){this.host=t,this.vp=e,this.onChange=i,this.toast=s,this.promptValue=r,this.getScope=a,this.onExit=o,this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.classList.add("sketch-svg"),t.appendChild(this.svg),this.active=!1,this.pointers=new Map,this.bind()}open(t,e){this.sk=JSON.parse(JSON.stringify(t)),this.sk.geo.some(i=>i.id==="O")||(this.sk.geo=[...em(),...this.sk.geo]),this.sk.cons||=[],this.frame=e,this.seq=0;for(let i of[...this.sk.geo,...this.sk.cons]){let s=/^[a-z](\d+)$/.exec(i.id);s&&(this.seq=Math.max(this.seq,+s[1]))}this.sel=new Set,this.tool="line",this.state=null,this.undoStack=[],this.redoStack=[],this.active=!0,this.svg.style.display="block",this.view=this.fitView(),this.vp.enterSketch(e,this.view),this.vp.onResize=()=>this.render(),this.resolve(),this.render(),this.emit()}close(){return this.active=!1,this.svg.style.display="none",this.svg.innerHTML="",this.vp.onResize=null,this.vp.exitSketch(),this.sk}fitView(){let t=this.vp.canvas.getBoundingClientRect();if(!this.sk.geo.filter(c=>c.type==="point"&&!c.ref).length)return{cx:0,cy:0,s:Math.min(t.width,t.height)/160};let i=1/0,s=1/0,r=-1/0,a=-1/0;for(let c of this.sk.geo)if(c.type==="point"&&!wc.has(c.id)&&(i=Math.min(i,c.x),r=Math.max(r,c.x),s=Math.min(s,c.y),a=Math.max(a,c.y)),c.type==="circle"||c.type==="arc"){let h=this.P(c.c_id);i=Math.min(i,h.x-c.radius),r=Math.max(r,h.x+c.radius),s=Math.min(s,h.y-c.radius),a=Math.max(a,h.y+c.radius)}let o=Math.max(r-i,10),l=Math.max(a-s,10);return{cx:(i+r)/2,cy:(s+a)/2,s:Math.min(t.width/(o*1.6),t.height/(l*1.6))}}get W(){return this.vp.w}get H(){return this.vp.h}toS(t,e){let i=this.view;return[this.W/2+(t-i.cx)*i.s,this.H/2-(e-i.cy)*i.s]}toK(t,e){let i=this.view;return[(t-this.W/2)/i.s+i.cx,-(e-this.H/2)/i.s+i.cy]}P(t){return this.sk.geo.find(e=>e.id===t)}nid(t="g"){return this.seq+=1,`${t}${this.seq}`}snapshot(){return JSON.stringify({geo:this.sk.geo,cons:this.sk.cons})}push(){this.undoStack.push(this.snapshot()),this.undoStack.length>200&&this.undoStack.shift(),this.redoStack=[]}undo(){this.undoStack.length&&(this.redoStack.push(this.snapshot()),Object.assign(this.sk,JSON.parse(this.undoStack.pop())),this.sel.clear(),this.state=null,this.resolve(),this.changed())}redo(){this.redoStack.length&&(this.undoStack.push(this.snapshot()),Object.assign(this.sk,JSON.parse(this.redoStack.pop())),this.sel.clear(),this.resolve(),this.changed())}resolve(t=null){let e=xc(this.sk,this.getScope(),t);return this.status=e,e.ok&&(this.sk.geo=e.geo),e}changed(){this.regions=null,this.render(),this.emit()}emit(){this.onChange&&this.onChange(this.statusInfo())}statusInfo(){let t=this.status||{};return{hint:this.hintText(),exact:this.exactFields(),cmd:this.cmdInfo(),lastPointer:this.lastPointer,dof:t.dof,ok:t.ok!==!1,conflicting:t.conflicting||[],tool:this.tool,sel:this.sel.size,canUndo:this.undoStack.length>0,canRedo:this.redoStack.length>0,selTypes:this.selTypes()}}attempt(t,e="Vincolo in conflitto con quelli esistenti"){let i=this.snapshot();t();let s=this.resolve();return!s.ok||s.conflicting&&s.conflicting.length?(Object.assign(this.sk,JSON.parse(i)),this.resolve(),this.toast(e,"warn"),this.changed(),!1):(this.undoStack.push(i),this.redoStack=[],this.changed(),!0)}setTool(t){if(t.startsWith("cmd:")){this.clearLocks(),this.startCmd(t.slice(4));return}this.cmd=null,this.clearLocks(),this.tool=t,this.state=null,t!=="select"&&t!=="dim"&&this.sel.clear(),this.render(),this.emit()}tolFor(t){return t==="touch"?22:t==="pen"?13:9}hit(t,e,i,s={}){let r=this.tolFor(i),[a,o]=this.toK(t,e),l=this.view.s,c=null,h=r,u=(d,f)=>{d<h&&(h=d,c=f)};if(s.points!==!1){for(let d of this.sk.geo){if(d.type!=="point"||wc.has(d.id)||s.exclude&&s.exclude.has(d.id))continue;let[f,g]=this.toS(d.x,d.y);u(Math.hypot(f-t,g-e)*.8,{kind:"point",id:d.id})}if(c)return c}if(s.dims!==!1&&this.labelBoxes){for(let d of this.labelBoxes)if(t>=d.x0-4&&t<=d.x1+4&&e>=d.y0-4&&e<=d.y1+4)return{kind:"dim",id:d.id}}if(s.glyphs!==!1&&this.glyphBoxes){for(let d of this.glyphBoxes)if(Math.hypot(t-d.x,e-d.y)<Math.max(12,r*.7))return{kind:"cons",id:d.id}}for(let d of this.sk.geo)if(!(d.type==="point"||s.exclude&&s.exclude.has(d.id))){if(d.ref){if(s.axes===!1)continue;let f=d.id==="AX"?Math.abs(o)*l:Math.abs(a)*l;u(f+2,{kind:"curve",id:d.id,ref:!0});continue}if(d.type==="line"){let f=this.P(d.p1_id),g=this.P(d.p2_id);u(Ob([a,o],[f.x,f.y],[g.x,g.y])*l,{kind:"curve",id:d.id})}else if(d.type==="circle"){let f=this.P(d.c_id);u(Math.abs(Math.hypot(a-f.x,o-f.y)-d.radius)*l,{kind:"curve",id:d.id})}else if(d.type==="arc"){let f=this.P(d.c_id),g=Math.atan2(o-f.y,a-f.x);Fb(g,d.start_angle,d.end_angle)&&u(Math.abs(Math.hypot(a-f.x,o-f.y)-d.radius)*l,{kind:"curve",id:d.id})}}return c}placement(t,e,i,s){let r=this.hit(t,e,i,{dims:!1,glyphs:!1,exclude:s}),[a,o]=this.toK(t,e);if(r&&r.kind==="point"){let l=this.P(r.id);return{x:l.x,y:l.y,point:r.id}}if(r&&r.kind==="curve"){let l=this.P(r.id);if(l.type==="line"){let c=this.P(l.p1_id),h=this.P(l.p2_id);if(l.ref)l.id==="AX"?o=0:a=0;else{let u=im([a,o],[c.x,c.y],[h.x,h.y]);a=c.x+(h.x-c.x)*u,o=c.y+(h.y-c.y)*u}}else{let c=this.P(l.c_id),h=Math.atan2(o-c.y,a-c.x);a=c.x+l.radius*Math.cos(h),o=c.y+l.radius*Math.sin(h)}return{x:a,y:o,curve:r.id}}if(this.snapGrid){let l=this.gridStep();return{x:Math.round(a/l)*l,y:Math.round(o/l)*l,grid:!0}}return{x:a,y:o}}gridStep(){let t=1;for(let e of[.1,.2,.5,1,2,5,10,20,50,100,200,500,1e3])if(t=e,e*this.view.s>=22)break;return t}setSnapGrid(t){this.snapGrid=t,this.lastCursor&&this.state&&this.trackCursor(...this.lastCursor,this.lastPointer||"mouse"),this.render()}materialize(t){if(t.point)return t.point;let e=this.nid("p");if(this.sk.geo.push({id:e,type:"point",x:t.x,y:t.y,fixed:!1}),t.curve){let i=this.P(t.curve),s=this.nid("c");i.type==="line"?this.sk.cons.push({id:s,type:"point_on_line_pl",p_id:e,l_id:i.id}):i.type==="circle"?this.sk.cons.push({id:s,type:"point_on_circle",p_id:e,c_id:i.id}):this.sk.cons.push({id:s,type:"point_on_arc",p_id:e,a_id:i.id})}return e}addLine(t,e,i=!0){let s=this.nid("l");if(this.sk.geo.push({id:s,type:"line",p1_id:t,p2_id:e}),i){let r=this.P(t),a=this.P(e),o=Math.abs(Math.atan2(a.y-r.y,a.x-r.x)),l=3*Math.PI/180,c=o<l||Math.abs(o-Math.PI)<l,h=Math.abs(o-Math.PI/2)<l;c?this.sk.cons.push({id:this.nid("c"),type:"horizontal_l",l_id:s}):h&&this.sk.cons.push({id:this.nid("c"),type:"vertical_l",l_id:s})}return s}down(t,e,i){let s=this.tool,r=()=>this.placement(e,i,t.pointerType);if(this.gesture={sx:e,sy:i,moved:!1,type:t.pointerType},this.lastPointer=t.pointerType,s==="select"){let a=this.hit(e,i,t.pointerType);if(this.gesture.hit=a,a&&a.kind==="point"){let o=this.P(a.id);!o.ref&&!o.fixed&&(this.gesture.drag={kind:"point",id:a.id,before:this.snapshot()})}else if(a&&a.kind==="curve"&&!a.ref){let o=this.P(a.id),[l,c]=this.toK(e,i);if(o.type==="line"){let h=this.P(o.p1_id),u=this.P(o.p2_id);this.gesture.drag={kind:"line",ids:[h.id,u.id],off:[[h.x-l,h.y-c],[u.x-l,u.y-c]],before:this.snapshot()}}else this.gesture.drag={kind:"radius",id:o.id,before:this.snapshot()}}else a&&a.kind==="dim"?this.gesture.drag={kind:"label",id:a.id,before:this.snapshot()}:this.gesture.pan={cx:this.view.cx,cy:this.view.cy};return}if(this.isTapTool()){this.gesture.pan={cx:this.view.cx,cy:this.view.cy};return}s==="line"?(this.state?this.state.fresh=!1:this.state={kind:"line",start:r(),fresh:!0},this.state.cur=r()):s==="rect"||s==="circle"||s==="poly"?(this.state?this.state.fresh=!1:this.state={kind:s,start:r(),fresh:!0},this.state.cur=r()):s==="arc"?(this.state?this.state.fresh=!1:this.state={kind:"arc",pts:[r()],fresh:!0},this.state.cur=r()):s==="point"&&(this.state={kind:"point",cur:r()}),this.render()}move(t,e,i){let s=this.gesture;if(s&&Math.hypot(e-s.sx,i-s.sy)>8&&(s.moved=!0),this.tool==="select"||this.isTapTool()){if(!s)return;if(s.pan&&s.moved){this.view.cx=s.pan.cx-(e-s.sx)/this.view.s,this.view.cy=s.pan.cy+(i-s.sy)/this.view.s,this.vp.setSketchView(this.view),this.render();return}s.drag&&s.moved&&this.dragTo(s.drag,e,i);return}this.trackCursor(e,i,t.pointerType)}trackCursor(t,e,i){this.lastPointer=i,this.lastCursor=[t,e],!(!this.state||this.tool==="select"||this.isTapTool())&&(this.state.cur=this.applyLocks(this.placement(t,e,i)),this.render(),this.onCursor&&this.onCursor())}applyLocks(t){let e=this.locks||{},i=this.state;if(!i||!Object.keys(e).length)return t;if(i.kind==="line"&&(i.lastId||i.start)){let s=i.lastId?this.P(i.lastId):i.start,r=t.x-s.x,a=t.y-s.y,o=Math.hypot(r,a),l=Math.atan2(a,r);return e.ang!=null?(l=e.ang*Math.PI/180,o=e.len!=null?e.len:Math.max(r*Math.cos(l)+a*Math.sin(l),.001)):e.len!=null&&(o=e.len),{x:s.x+o*Math.cos(l),y:s.y+o*Math.sin(l)}}if(i.kind==="rect"&&i.start){let s=i.start,r=t.x<s.x?-1:1,a=t.y<s.y?-1:1;return{x:e.w!=null?s.x+r*e.w:t.x,y:e.h!=null?s.y+a*e.h:t.y}}if(i.kind==="poly"&&i.start&&e.size!=null){let s=i.start,r=sn([t.x-s.x,t.y-s.y]);return{x:s.x+(r[0]||1)*e.size/2,y:s.y+r[1]*e.size/2}}if(i.kind==="circle"&&i.start&&e.d!=null){let s=i.start,r=sn([t.x-s.x,t.y-s.y]);return{x:s.x+(r[0]||1)*e.d/2,y:s.y+r[1]*e.d/2}}return t}setLock(t,e){if(this.locks||={},this.lockExpr||={},t==="n"){try{String(e).trim()&&this.setPolyN(this.evalExpr(e))}catch{return!1}return this.lastCursor&&this.trackCursor(...this.lastCursor,this.lastPointer||"mouse"),!0}if(e==null||String(e).trim()==="")delete this.locks[t],delete this.lockExpr[t];else{let i;try{i=this.evalExpr(e)}catch{return!1}this.locks[t]=i,this.lockExpr[t]=String(e).trim()}return this.lastCursor&&this.trackCursor(...this.lastCursor,this.lastPointer||"mouse"),!0}clearLocks(){this.locks={},this.lockExpr={}}hasLocks(){return!!(this.lockExpr&&Object.keys(this.lockExpr).length)}exactAnchor(){let t=this.state,e=t&&(t.cur||t.start);return e?this.toS(e.x,e.y):null}up(t,e,i){this.upInner(t,e,i),this.emit()}upInner(t,e,i){let s=this.gesture;if(this.gesture=null,this.tool==="select"){if(!s)return;if(s.drag&&s.moved){this.undoStack.push(s.drag.before),this.redoStack=[],this.changed();return}s.moved||this.tapSelect(s.hit);return}if(this.isTapTool()){if(s&&s.moved)return;this.tool==="dim"?this.tapDim(e,i,t.pointerType):this.tool==="trim"?this.tapTrim(e,i,t.pointerType):this.tool.startsWith("cmd:")?this.tapCmd(e,i,t.pointerType):this.tapConsTool(e,i,t.pointerType);return}let r=this.state;if(!r)return;let a=this.placement(e,i,t.pointerType);if(this.hasLocks()&&!r.fresh&&(r.kind==="line"||r.kind==="rect"||r.kind==="circle"||r.kind==="poly")){r.cur=this.applyLocks(a),this.placeExact({...this.lockExpr},o=>this.evalExpr(o));return}if(r.kind==="point"){a.point||(this.push(),this.materialize(a),this.resolve()),this.state=null,this.changed();return}if(r.fresh&&!(s&&s.moved)){r.fresh=!1,this.render();return}if(r.kind==="line"){let o=r.lastId?this.P(r.lastId):r.start;if(Math.hypot(a.x-o.x,a.y-o.y)*this.view.s<4){this.render();return}this.push();let l=r.lastId||this.materialize(r.start),c=this.materialize(a);this.addLine(l,c),this.resolve();let h=r.firstId||l;c===h?(this.state=null,this.toast("Profilo chiuso","ok")):this.state={kind:"line",lastId:c,firstId:h},this.changed();return}if(r.kind==="rect"||r.kind==="circle"||r.kind==="poly"){let o=r.start;if(Math.hypot(a.x-o.x,a.y-o.y)*this.view.s<4){this.render();return}if(this.push(),r.kind==="rect")this.makeRect(o,a);else if(r.kind==="poly")this.makePoly(o,this.polyGeom(o,a));else{let l=this.materialize(o),c=this.P(l);this.sk.geo.push({id:this.nid("k"),type:"circle",c_id:l,radius:Math.hypot(a.x-c.x,a.y-c.y)})}this.state=null,this.resolve(),this.changed();return}if(r.kind==="arc"){if(r.pts.push(a),r.pts.length<3){this.render();return}this.push(),this.makeArc(r.pts[0],r.pts[1],r.pts[2]),this.state=null,this.resolve(),this.changed()}}makeRect(t,e){let i=this.materialize(t),s=this.materialize(e),r=this.P(i),a=this.P(s),o=this.nid("p"),l=this.nid("p");this.sk.geo.push({id:o,type:"point",x:a.x,y:r.y,fixed:!1},{id:l,type:"point",x:r.x,y:a.y,fixed:!1});let c=this.addLine(i,o,!1),h=this.addLine(o,s,!1),u=this.addLine(s,l,!1),d=this.addLine(l,i,!1);return this.sk.cons.push({id:this.nid("c"),type:"horizontal_l",l_id:c},{id:this.nid("c"),type:"horizontal_l",l_id:u},{id:this.nid("c"),type:"vertical_l",l_id:h},{id:this.nid("c"),type:"vertical_l",l_id:d}),{p1:i,p2:o,p3:s,p4:l,l1:c,l2:h,l3:u,l4:d}}setPolyN(t){let e=Math.round(Number(t));if(!(e>=3&&e<=12))throw new Error("Lati da 3 a 12");this.polyN=e,this.onPolyPrefs&&this.onPolyPrefs()}setPolyMode(t){this.polyMode=t==="corners"?"corners":"flats",this.onPolyPrefs&&this.onPolyPrefs(),this.lastCursor&&this.trackCursor(...this.lastCursor,this.lastPointer||"mouse"),this.emit()}polyGeom(t,e,i=null){let s=this.polyN,r=this.polyMode==="flats",a=Math.atan2(e.y-t.y,e.x-t.x);this.snapGrid&&(a=Math.round(a/(Math.PI/12))*(Math.PI/12));let o=i??Math.hypot(e.x-t.x,e.y-t.y),l=r?o/Math.cos(Math.PI/s):o,c=r?a-Math.PI/s:a,h=[];for(let u=0;u<s;u++)h.push([t.x+l*Math.cos(c+Se*u/s),t.y+l*Math.sin(c+Se*u/s)]);return{R:l,apo:l*Math.cos(Math.PI/s),rot:c,verts:h}}makePoly(t,e,i=null){let s=this.materialize(t),r=this.P(s),a=e.verts.length,o=this.nid("k");this.sk.geo.push({id:o,type:"circle",c_id:s,radius:e.R,construction:!0});let l=e.verts.map(([d,f])=>{let g=this.nid("p");return this.sk.geo.push({id:g,type:"point",x:d,y:f,fixed:!1}),g}),c=l.map((d,f)=>this.addLine(d,l[(f+1)%a],!1));for(let d of l)this.sk.cons.push({id:this.nid("c"),type:"point_on_circle",p_id:d,c_id:o});for(let d=1;d<a;d++)this.sk.cons.push({id:this.nid("c"),type:"equal_length",l1_id:c[0],l2_id:c[d]});let h=c.findIndex((d,f)=>{let g=e.verts[f],y=e.verts[(f+1)%a];return Math.abs(g[1]-y[1])<1e-6}),u=h<0?c.findIndex((d,f)=>{let g=e.verts[f],y=e.verts[(f+1)%a];return Math.abs(g[0]-y[0])<1e-6}):-1;if(h>=0?this.sk.cons.push({id:this.nid("c"),type:"horizontal_l",l_id:c[h]}):u>=0&&this.sk.cons.push({id:this.nid("c"),type:"vertical_l",l_id:c[u]}),i!=null){let d=e.rot+Math.PI/a;if(this.polyMode==="flats"){let f=this.nid("k");this.sk.geo.push({id:f,type:"circle",c_id:s,radius:e.apo,construction:!0}),this.sk.cons.push({id:this.nid("c"),type:"tangent_lc",l_id:c[0],c_id:f}),this.sk.cons.push({id:this.nid("d"),type:"circle_diameter",c_id:f,diameter:2*e.apo,expr:i,lx:r.x+Math.cos(d)*e.R*1.35,ly:r.y+Math.sin(d)*e.R*1.35})}else this.sk.cons.push({id:this.nid("d"),type:"circle_diameter",c_id:o,diameter:2*e.R,expr:i,lx:r.x+Math.cos(d)*e.R*1.35,ly:r.y+Math.sin(d)*e.R*1.35})}return{cId:s,pts:l,lines:c}}isTapTool(){return this.tool==="dim"||this.tool==="trim"||this.tool.startsWith("cmd:")||this.tool.startsWith("c:")}hintText(){let t=this.tool,e=this.state;if(t==="line")return e?"Tocca il punto successivo \xB7 torna al primo punto per chiudere \xB7 doppio tocco o Esc per finire":"Tocca (o trascina) per il primo punto della linea";if(t==="rect")return e?"Tocca l'angolo opposto (o scrivi le misure)":"Tocca il primo angolo del rettangolo";if(t==="circle")return e?"Tocca per il raggio (o scrivi il diametro)":"Tocca il centro del cerchio";if(t==="poly")return e?`Tocca per grandezza e rotazione (${this.polyMode==="flats"?"il punto \xE8 a met\xE0 di un lato":"il punto \xE8 un vertice"}) o scrivi la misura`:`Poligono a ${this.polyN} lati: tocca il centro`;if(t==="arc")return e?e.pts.length===1?"Tocca la fine dell'arco":"Tocca un punto per cui passa l'arco":"Tocca l'inizio dell'arco";if(t==="point")return"Tocca per aggiungere un punto (serve ad esempio come centro dei fori)";if(t==="dim")return e&&e.items&&e.items.length?"Tocca un secondo elemento, oppure un punto vuoto per quotare la lunghezza":"Tocca una linea, un cerchio o due punti da quotare";if(t==="select")return"Tocca per selezionare \xB7 trascina punti e linee \xB7 tocca una quota per cambiarla";if(t==="trim")return"Taglia: tocca il pezzo di linea o curva da togliere (si taglia tra gli incroci)";if(t.startsWith("cmd:")&&this.cmd){let i=this.cmd.spec.fields.find(s=>s.k===this.cmd.active);return i?`${this.cmd.spec.title} \xB7 ${i.label}: ${i.hint}`:""}return t.startsWith("c:")&&Cb[t.slice(2)]||""}exactFields(){if(!this.state)return null;let e=this.exactRaw();if(e)for(let i of e.fields)Math.abs(Number(i.ph))<1e-9&&(i.ph="");return e}exactRaw(){let t=this.state;if(t.kind==="line"&&(t.lastId||t.start)){let e=t.lastId?this.P(t.lastId):t.start,i=t.cur||e;return{kind:"line",fields:[{k:"len",label:"Lunghezza",unit:"mm",ph:ve(Math.hypot(i.x-e.x,i.y-e.y),2)},{k:"ang",label:"Angolo",unit:"\xB0",ph:ve(Math.atan2(i.y-e.y,i.x-e.x)*180/Math.PI,1)}]}}if(t.kind==="rect"&&t.start){let e=t.cur||t.start;return{kind:"rect",fields:[{k:"w",label:"Larghezza",unit:"mm",ph:ve(Math.abs(e.x-t.start.x),2)},{k:"h",label:"Altezza",unit:"mm",ph:ve(Math.abs(e.y-t.start.y),2)}]}}if(t.kind==="circle"&&t.start){let e=t.cur||t.start;return{kind:"circle",fields:[{k:"d",label:"Diametro",unit:"mm",ph:ve(2*Math.hypot(e.x-t.start.x,e.y-t.start.y),2)}]}}if(t.kind==="poly"&&t.start){let e=this.polyGeom(t.start,t.cur||t.start),i=this.polyMode==="flats";return{kind:`poly-${this.polyMode}`,fields:[{k:"size",label:i?"Tra i lati piatti":"Tra gli angoli",unit:"mm",ph:ve(2*(i?e.apo:e.R),2)},{k:"n",label:"Lati",unit:"",ph:String(this.polyN)}],choice:{k:"mode",value:this.polyMode,options:[["flats","Lati piatti"],["corners","Angoli"]]}}}return null}placeExact(t,e){let i=this.state,s=this.exactFields();if(!s)return!1;let r=o=>t[o]!=null&&String(t[o]).trim()!==""?{expr:String(t[o]).trim(),v:e(t[o])}:null,a=o=>Number(s.fields.find(l=>l.k===o).ph);if(this.push(),s.kind==="line"){let o=r("len"),l=r("ang"),c=o?o.v:a("len"),h=l?l.v:a("ang");if(!(c>0))return this.undoStack.pop(),!1;let u=i.lastId||this.materialize(i.start),d=this.P(u),f=this.nid("p"),g=h*Math.PI/180;this.sk.geo.push({id:f,type:"point",x:d.x+c*Math.cos(g),y:d.y+c*Math.sin(g),fixed:!1});let y=this.addLine(u,f,!l),p=this.P(f),m=[(d.x+p.x)/2,(d.y+p.y)/2],_=18/this.view.s;if(o&&this.sk.cons.push({id:this.nid("d"),type:"p2p_distance",p1_id:u,p2_id:f,distance:c,expr:o.expr,lx:m[0]-Math.sin(g)*_,ly:m[1]+Math.cos(g)*_}),l){let M=(h%180+180)%180;M<1e-9?this.sk.cons.push({id:this.nid("c"),type:"horizontal_l",l_id:y}):Math.abs(M-90)<1e-9?this.sk.cons.push({id:this.nid("c"),type:"vertical_l",l_id:y}):this.sk.cons.push({id:this.nid("d"),type:"l2l_angle_ll",l1_id:"AX",l2_id:y,angle:g,expr:l.expr,lx:d.x+Math.cos(g/2)*_*2.5,ly:d.y+Math.sin(g/2)*_*2.5})}this.state={kind:"line",lastId:f,firstId:i.firstId||u}}else if(s.kind==="rect"){let o=r("w"),l=r("h"),c=i.cur||i.start,h=c.x<i.start.x?-1:1,u=c.y<i.start.y?-1:1,d=o?o.v:a("w"),f=l?l.v:a("h");if(!(d>0&&f>0))return this.undoStack.pop(),!1;let g=this.makeRect(i.start,{x:i.start.x+h*d,y:i.start.y+u*f}),y=this.P(g.p1),p=this.P(g.p3),m=18/this.view.s;o&&this.sk.cons.push({id:this.nid("d"),type:"p2p_distance",p1_id:g.p1,p2_id:g.p2,distance:d,expr:o.expr,lx:(y.x+p.x)/2,ly:Math.min(y.y,p.y)-m}),l&&this.sk.cons.push({id:this.nid("d"),type:"p2p_distance",p1_id:g.p2,p2_id:g.p3,distance:f,expr:l.expr,lx:Math.max(y.x,p.x)+m,ly:(y.y+p.y)/2}),this.state=null}else if(s.kind.startsWith("poly")){let o=r("size");t.n!=null&&String(t.n).trim()!==""&&this.setPolyN(e(t.n));let l=this.polyGeom(i.start,i.cur||i.start),c=o?o.v:2*(this.polyMode==="flats"?l.apo:l.R);if(!(c>0))return this.undoStack.pop(),!1;let h=this.polyGeom(i.start,i.cur||i.start,c/2);this.makePoly(i.start,h,o?o.expr:null),this.state=null}else if(s.kind==="circle"){let o=r("d"),l=o?o.v:a("d");if(!(l>0))return this.undoStack.pop(),!1;let c=this.materialize(i.start),h=this.nid("k");this.sk.geo.push({id:h,type:"circle",c_id:c,radius:l/2});let u=this.P(c);o&&this.sk.cons.push({id:this.nid("d"),type:"circle_diameter",c_id:h,diameter:l,expr:o.expr,lx:u.x+l*.45,ly:u.y+l*.45}),this.state=null}return this.clearLocks(),this.resolve(),this.changed(),!0}consReady(t){let e=this.selTypes(),i=e.line+e.axis,s=e.circle+e.arc,r=e.point,a=this.sel.size;switch(t){case"coincident":return r===2&&a===2||r===1&&i+s===1&&a===2;case"horizontal":case"vertical":return e.line>=1&&a===e.line||r===2&&a===2;case"parallel":case"perpendicular":return i===2&&a===2;case"tangent":return(i===1&&s===1||s===2)&&a===2;case"equal":return(e.line===2||s===2)&&a===2;case"midpoint":return r===1&&e.line===1&&a===2;case"concentric":return(s===2||s===1&&r===1)&&a===2;case"symmetric":return r===2&&i===1&&a===3;case"fix":return r>=1&&a===r;default:return!1}}tapConsTool(t,e,i){let s=this.tool.slice(2),r=this.hit(t,e,i,{dims:!1,glyphs:!1});if(!r){this.sel.clear(),this.render(),this.emit();return}this.sel.has(r.id)?this.sel.delete(r.id):this.sel.add(r.id);let a={symmetric:3}[s]||2;if(this.sel.size>a&&(this.sel.clear(),this.sel.add(r.id)),this.consReady(s)){this.applyConstraint(s);return}this.render(),this.emit()}startCmd(t){let e=tu[t],i={type:t,spec:e,vals:{},active:null};for(let r of e.fields)i.vals[r.k]=r.kind==="pick"?[]:r.kind==="toggle"?!1:r.init;let s=[...this.sel];this.cmd=i,this.tool="cmd:"+t,this.state=null;for(let r of s)if(!(e.fields.some(a=>a.what==="corner")&&this.P(r)&&this.P(r).type==="line"))for(let a of e.fields){if(a.kind!=="pick")continue;let o=this.cmdAccept(a,r,null);if(o&&o.length&&(a.multi||!i.vals[a.k].length)){for(let l of o)i.vals[a.k].includes(l)||i.vals[a.k].push(l);break}}if(t==="sfillet"||t==="schamfer"){let r=s.map(a=>this.P(a)).filter(a=>a&&a.type==="line"&&!a.ref);for(let a=0;a<r.length;a++)for(let o=a+1;o<r.length;o++){let l=r[a],c=r[o],h=[l.p1_id,l.p2_id].find(u=>u===c.p1_id||u===c.p2_id);h&&this.cornerInfo(h)&&!i.vals.corners.includes(h)&&i.vals.corners.push(h)}}i.active=(e.fields.find(r=>r.kind==="pick"&&!i.vals[r.k].length)||e.fields.find(r=>r.kind==="pick")||{}).k,this.syncCmdSel(),this.render(),this.emit()}cmdAccept(t,e,i){let s=this.P(e);if(!s)return null;if(t.what==="line")return s.type==="line"?[e]:null;if(t.what==="curves")return s.ref?null:[e];if(t.what==="corner"){if(s.type==="point")return this.cornerInfo(e)?[e]:null;if(s.type==="line"&&!s.ref){let r=[s.p1_id,s.p2_id].filter(l=>this.cornerInfo(l));if(!r.length)return null;if(!i||r.length===1)return[r[0]];let[a,o]=this.toK(...i);return r.sort((l,c)=>Math.hypot(this.P(l).x-a,this.P(l).y-o)-Math.hypot(this.P(c).x-a,this.P(c).y-o)),[r[0]]}return null}return t.what==="chain"&&s.type!=="point"&&!s.ref?this.chainOf(e):null}tapCmd(t,e,i){let s=this.cmd,r=s.spec.fields.find(h=>h.k===s.active);if(!r)return;let a=this.hit(t,e,i,{dims:!1,glyphs:!1,axes:r.what==="line",points:r.what!=="chain"});if(!a)return;let o=this.cmdAccept(r,a.id,[t,e]);if(!o){this.toast(r.hint,"warn");return}let l=s.vals[r.k],c=o.every(h=>l.includes(h));if(!r.multi)s.vals[r.k]=c?[]:o.slice(0,1);else if(c)s.vals[r.k]=l.filter(h=>!o.includes(h));else for(let h of o)l.includes(h)||l.push(h);if(!r.multi&&s.vals[r.k].length){let h=s.spec.fields.find(u=>u.kind==="pick"&&u.k!==r.k&&!s.vals[u.k].length);h&&(s.active=h.k)}this.syncCmdSel(),this.render(),this.emit()}syncCmdSel(){if(this.sel.clear(),!!this.cmd){for(let t of this.cmd.spec.fields)if(t.kind==="pick"&&t.what!=="line")for(let e of this.cmd.vals[t.k])this.sel.add(e)}}cmdSetActive(t){this.cmd&&(this.cmd.active=t,this.render(),this.emit())}cmdClear(t){this.cmd&&(this.cmd.vals[t]=[],this.cmd.active=t,this.syncCmdSel(),this.render(),this.emit())}cmdSetVal(t,e){this.cmd&&(this.cmd.vals[t]=e,this.render(),this.emit())}cmdReady(){let t=this.cmd;return!!t&&t.spec.fields.every(e=>e.kind!=="pick"||t.vals[e.k].length)}cmdCancel(){this.cmd=null,this.sel.clear(),this.tool="select",this.render(),this.emit()}cmdInfo(){let t=this.cmd;return t?{type:t.type,title:t.spec.title,active:t.active,ready:this.cmdReady(),fields:t.spec.fields.map(e=>({...e,value:t.vals[e.k]}))}:null}cmdApply(){let t=this.cmd;if(!this.cmdReady()){this.toast("Completa i campi del comando","warn");return}let e=t.vals,i=null,s=null,r=t.spec.fields.find(o=>o.kind==="num");if(r){s=String(e[r.k]).trim();try{i=this.evalExpr(s)}catch{this.toast("Valore non valido","warn");return}if(!(i>0)){this.toast("Il valore deve essere maggiore di zero","warn");return}}let a=!1;if(t.type==="smirror")a=this.attempt(()=>this.mirrorOp(e.objects,e.axis[0]),"Specchio non applicabile con questi vincoli");else if(t.type==="sfillet"||t.type==="schamfer"){let o=e.corners.find(l=>!this.cornerInfo(l)||i>this.cornerInfo(l)[t.type==="sfillet"?"maxR":"maxD"]);if(o){let l=this.cornerInfo(o);this.toast(l?`Misura troppo grande per un angolo (massimo ${ve(t.type==="sfillet"?l.maxR:l.maxD,2)} mm)`:"Angolo non pi\xF9 valido","warn");return}a=this.attempt(()=>{for(let l of e.corners)t.type==="sfillet"?this.filletCorner(l,i,s):this.chamferCorner(l,i,s)},"Non applicabile con i vincoli presenti")}else if(t.type==="offset"){let o;try{o=this.offsetCompute(e.objects,i,e.flip)}catch(l){this.toast(l.message,"warn");return}a=this.attempt(()=>this.offsetCommit(o,s),"Offset non applicabile con questi vincoli")}a&&(this.cmd=null,this.sel.clear(),this.tool="select",this.render(),this.emit())}mirrorOp(t,e){let i=this.P(e),s=this.P(i.p1_id),r=this.P(i.p2_id),a=sn([r.x-s.x,r.y-s.y]),o=u=>{let d=(u.x-s.x)*a[0]+(u.y-s.y)*a[1],f=s.x+a[0]*d,g=s.y+a[1]*d;return{x:2*f-u.x,y:2*g-u.y,on:Math.hypot(f-u.x,g-u.y)<1e-6}},l=new Map,c=u=>this.sk.cons.push({id:this.nid("c"),...u}),h=u=>{if(l.has(u))return l.get(u);let d=this.P(u),f=o(d);if(f.on||d.ref)return l.set(u,u),u;let g=this.nid("p");return this.sk.geo.push({id:g,type:"point",x:f.x,y:f.y,fixed:!1,construction:d.construction}),c({type:"p2p_symmetric_ppl",p1_id:u,p2_id:g,l_id:i.id}),l.set(u,g),g};for(let u of t.map(d=>this.P(d)).filter(Boolean))if(u.id!==e){if(u.type==="point")h(u.id);else if(u.type==="line")this.sk.geo.push({id:this.nid("l"),type:"line",p1_id:h(u.p1_id),p2_id:h(u.p2_id),construction:u.construction});else if(u.type==="circle"){let d=this.nid("k");this.sk.geo.push({id:d,type:"circle",c_id:h(u.c_id),radius:u.radius,construction:u.construction}),c({type:"equal_radius_cc",c1_id:u.id,c2_id:d})}else if(u.type==="arc"){let d=h(u.c_id),f=h(u.end_id),g=h(u.start_id),y=this.P(d),p=this.P(f),m=this.P(g),_=this.nid("a");this.sk.geo.push({id:_,type:"arc",c_id:d,radius:u.radius,start_id:f,end_id:g,start_angle:Math.atan2(p.y-y.y,p.x-y.x),end_angle:Math.atan2(m.y-y.y,m.x-y.x),construction:u.construction}),c({type:"equal_radius_aa",a1_id:u.id,a2_id:_})}}}cornerInfo(t){let e=this.sk.geo.filter(d=>d.type==="line"&&!d.ref&&!d.construction&&(d.p1_id===t||d.p2_id===t));if(e.length!==2)return null;let i=this.P(t),s=d=>this.P(d.p1_id===t?d.p2_id:d.p1_id),r=s(e[0]),a=s(e[1]),o=Math.hypot(r.x-i.x,r.y-i.y),l=Math.hypot(a.x-i.x,a.y-i.y);if(o<1e-9||l<1e-9)return null;let c=[(r.x-i.x)/o,(r.y-i.y)/o],h=[(a.x-i.x)/l,(a.y-i.y)/l],u=Math.acos(Math.max(-1,Math.min(1,c[0]*h[0]+c[1]*h[1])));return u<.02||u>Math.PI-.02?null:{lines:e,C:i,u1:c,u2:h,th:u,maxR:Math.min(o,l)*Math.tan(u/2)*.98,maxD:Math.min(o,l)*.98}}keepVirtualCorner(t,e){let i=this.P(t);!this.sk.geo.some(r=>["p1_id","p2_id","c_id","start_id","end_id"].some(a=>r[a]===t))&&!i.ref&&(i.construction=!0),this.sk.cons.push({id:this.nid("c"),type:"point_on_line_pl",p_id:t,l_id:e[0].id},{id:this.nid("c"),type:"point_on_line_pl",p_id:t,l_id:e[1].id})}filletCorner(t,e,i){let{lines:s,C:r,u1:a,u2:o,th:l}=this.cornerInfo(t),c=e/Math.tan(l/2),h=sn([a[0]+o[0],a[1]+o[1]]),u=e/Math.sin(l/2),d=this.nid("p"),f=this.nid("p"),g=this.nid("p");this.sk.geo.push({id:d,type:"point",x:r.x+a[0]*c,y:r.y+a[1]*c,fixed:!1},{id:f,type:"point",x:r.x+o[0]*c,y:r.y+o[1]*c,fixed:!1},{id:g,type:"point",x:r.x+h[0]*u,y:r.y+h[1]*u,fixed:!1});for(let[C,v]of[[s[0],d],[s[1],f]])C.p1_id===t?C.p1_id=v:C.p2_id=v;let y=this.P(g),p=this.P(d),m=this.P(f),_=Math.atan2(p.y-y.y,p.x-y.x),M=Math.atan2(m.y-y.y,m.x-y.x),x=((M-_)%Se+Se)%Se<=Math.PI,E=this.nid("a");this.sk.geo.push({id:E,type:"arc",c_id:g,radius:e,start_id:x?d:f,end_id:x?f:d,start_angle:x?_:M,end_angle:x?M:_}),this.sk.cons.push({id:this.nid("c"),type:"tangent_la",l_id:s[0].id,a_id:E},{id:this.nid("c"),type:"tangent_la",l_id:s[1].id,a_id:E},{id:this.nid("d"),type:"arc_radius",a_id:E,radius:e,expr:i,lx:y.x+h[0]*e*1.8,ly:y.y+h[1]*e*1.8}),this.keepVirtualCorner(t,s)}chamferCorner(t,e,i){let{lines:s,C:r,u1:a,u2:o}=this.cornerInfo(t),l=this.nid("p"),c=this.nid("p");this.sk.geo.push({id:l,type:"point",x:r.x+a[0]*e,y:r.y+a[1]*e,fixed:!1},{id:c,type:"point",x:r.x+o[0]*e,y:r.y+o[1]*e,fixed:!1});for(let[d,f]of[[s[0],l],[s[1],c]])d.p1_id===t?d.p1_id=f:d.p2_id=f;this.addLine(l,c,!1),this.keepVirtualCorner(t,s);let h=this.nid("q"),u=[r.x+a[0]*e*.5,r.y+a[1]*e*.5];this.sk.cons.push({id:this.nid("d"),type:"p2p_distance",p1_id:t,p2_id:l,distance:e,expr:i,grp:h,lx:u[0]-a[1]*3,ly:u[1]+a[0]*3},{id:this.nid("d"),type:"p2p_distance",p1_id:t,p2_id:c,distance:e,expr:i,grp:h,nolabel:!0})}chainOf(t){let e=this.P(t);if(e.type==="circle")return[t];let i=o=>o.type==="line"?[o.p1_id,o.p2_id]:o.type==="arc"?[o.start_id,o.end_id]:[],s=this.sk.geo.filter(o=>(o.type==="line"||o.type==="arc")&&!o.ref&&!!o.construction==!!e.construction),r=new Set([t]),a=[e];for(;a.length;){let o=a.pop();for(let l of i(o))for(let c of s)!r.has(c.id)&&i(c).includes(l)&&(r.add(c.id),a.push(c))}return[...r]}offsetCompute(t,e,i){let s=h=>this.P(h),r=h=>h.type==="line"?[h.p1_id,h.p2_id]:[h.start_id,h.end_id],a=t.map(s).filter(h=>h&&!h.ref&&h.type!=="point"),o=new Set,l=[];for(let h of a){if(o.has(h.id))continue;if(h.type==="circle"){o.add(h.id),l.push({circle:h});continue}let u=[h];o.add(h.id);for(let m=0;m<u.length;m++)for(let _ of a)!o.has(_.id)&&_.type!=="circle"&&r(_).some(M=>r(u[m]).includes(M))&&(o.add(_.id),u.push(_));let d=new Map;for(let m of u)for(let _ of r(m))d.set(_,(d.get(_)||0)+1);if([...d.values()].some(m=>m>2))throw new Error("Il contorno si ramifica: seleziona un percorso senza diramazioni");let f=[...d.entries()].find(([,m])=>m===1)?.[0]||r(u[0])[0],g=new Set,y=[],p=f;for(;y.length<u.length;){let m=u.find(M=>!g.has(M.id)&&r(M).includes(p));if(!m)break;g.add(m.id);let _=r(m)[0]!==p;y.push({g:m,rev:_}),p=r(m)[_?0:1]}l.push({segs:y,closed:p===f&&y.length>1})}let c=[];for(let h of l){if(h.circle){let p=h.circle.radius+(i?-e:e);if(p<=1e-6)throw new Error("Distanza troppo grande per un cerchio");c.push({circle:h.circle,r:p,sgn:i?-1:1});continue}let u=[];for(let p of h.segs){let m=s(r(p.g)[p.rev?1:0]);if(u.push([m.x,m.y]),p.g.type==="arc"){let _=kb(this,p.g);u.push([_.x,_.y])}}let d=0;for(let p=0;p<u.length;p++){let m=u[p],_=u[(p+1)%u.length];d+=m[0]*_[1]-_[0]*m[1]}let f=h.closed&&d>0?-1:1;i&&(f=-f);let g=h.segs.map(({g:p,rev:m})=>{if(p.type==="line"){let v=s(m?p.p2_id:p.p1_id),A=s(m?p.p1_id:p.p2_id),B=sn([A.x-v.x,A.y-v.y]),k=[-B[1]*f*e,B[0]*f*e];return{g:p,rev:m,kind:"line",a:[v.x+k[0],v.y+k[1]],b:[A.x+k[0],A.y+k[1]]}}let _=s(p.c_id),M=p.radius+(m?1:-1)*f*e;if(M<=1e-6)throw new Error("Distanza troppo grande per un arco del contorno");let x=s(m?p.end_id:p.start_id),E=s(m?p.start_id:p.end_id),C=v=>{let A=sn([v.x-_.x,v.y-_.y]);return[_.x+A[0]*M,_.y+A[1]*M]};return{g:p,rev:m,kind:"arc",c:[_.x,_.y],r:M,a:C(x),b:C(E),dr:M-p.radius}}),y=g.length;for(let p=0;p<(h.closed?y:y-1);p++){let m=g[p],_=g[(p+1)%y];if(Math.hypot(m.b[0]-_.a[0],m.b[1]-_.a[1])<1e-7)continue;let M=[(m.b[0]+_.a[0])/2,(m.b[1]+_.a[1])/2],x=Lb(m,_,M)||M;m.b=x,_.a=x}c.push({segs:g,closed:h.closed})}return c}offsetCommit(t,e){let i=this.nid("q"),s=!0,r=a=>{this.sk.cons.push({id:this.nid("d"),grp:i,...a,...s?{}:{nolabel:!0}}),s=!1};for(let a of t){if(a.circle){let c=this.nid("k");this.sk.geo.push({id:c,type:"circle",c_id:a.circle.c_id,radius:a.r,construction:a.circle.construction}),r({type:"difference",param1:{o_id:c,prop:"radius"},param2:{o_id:a.circle.id,prop:"radius"},difference:Math.abs(a.r-a.circle.radius),sign:a.sgn,expr:e});continue}let o=c=>{let h=this.nid("p");return this.sk.geo.push({id:h,type:"point",x:c[0],y:c[1],fixed:!1}),h},l=[o(a.segs[0].a)];for(let c=0;c<a.segs.length;c++)l.push(a.closed&&c===a.segs.length-1?l[0]:o(a.segs[c].b));a.segs.forEach((c,h)=>{let u=l[h],d=l[h+1];if(c.kind==="line"){let f=this.nid("l");this.sk.geo.push({id:f,type:"line",p1_id:c.rev?d:u,p2_id:c.rev?u:d,construction:c.g.construction}),this.sk.cons.push({id:this.nid("c"),type:"parallel",l1_id:c.g.id,l2_id:f});let g=this.P(u);r({type:"p2l_distance",p_id:u,l_id:c.g.id,distance:Math.abs(Db(g,this.P(c.g.p1_id),this.P(c.g.p2_id))),expr:e,lx:g.x,ly:g.y})}else{let f=c.rev?d:u,g=c.rev?u:d,y=this.P(f),p=this.P(g),m=this.nid("a");this.sk.geo.push({id:m,type:"arc",c_id:c.g.c_id,radius:c.r,start_id:f,end_id:g,start_angle:Math.atan2(y.y-c.c[1],y.x-c.c[0]),end_angle:Math.atan2(p.y-c.c[1],p.x-c.c[0]),construction:c.g.construction}),a.segs.length===1&&r({type:"difference",param1:{o_id:m,prop:"radius"},param2:{o_id:c.g.id,prop:"radius"},difference:Math.abs(c.dr),sign:Math.sign(c.dr)||1,expr:e})}})}}tapTrim(t,e,i){let s=this.hit(t,e,i,{dims:!1,glyphs:!1,points:!1,axes:!1});if(!s)return;let r=this.P(s.id),[a,o]=this.toK(t,e),l=this.cutsOn(r);this.attempt(()=>this.trimAt(r,[a,o],l),"Taglio non applicabile con i vincoli presenti")&&this.toast("Tagliato","ok")}cutsOn(t){let e=Kd(this,t),i=[];for(let s of this.sk.geo)if(!(s.id===t.id||s.ref||s.type==="point"))for(let r of Ib(e,Kd(this,s))){let a=Tc(e,r);a!=null&&i.push({t:a,pt:r,other:s.id})}return i.sort((s,r)=>s.t-r.t),i.filter((s,r)=>r===0||s.t-i[r-1].t>1e-7)}trimAt(t,e,i){let s=Kd(this,t),r=Tc(s,e,!0),a=s.kind==="line"?1:s.kind==="circle"?Se:s.sw,o=i.filter(d=>s.kind==="circle"?!0:d.t>1e-6&&d.t<a-1e-6);if(!o.length||s.kind==="circle"&&o.length<2){this.removeCurves([t.id]);return}let l=d=>this.pointAtCut(d);if(s.kind==="circle"){let d=o.find(p=>p.t>r)||o[0],f=[...o].reverse().find(p=>p.t<r)||o[o.length-1],g=l(d),y=l(f);Nb(this,t,g,y);return}let c=[...o].reverse().find(d=>d.t<r),h=o.find(d=>d.t>r),u=s.kind==="line"?[t.p1_id,t.p2_id]:[t.start_id,t.end_id];if(!c&&!h){this.removeCurves([t.id]);return}if(c)if(h){let d=l(c),f=l(h);if(s.kind==="line"){let g=t.p2_id;t.p2_id=d;let y=this.nid("l");this.sk.geo.push({id:y,type:"line",p1_id:f,p2_id:g,construction:t.construction}),this.sk.cons.push({id:this.nid("c"),type:"point_on_line_pl",p_id:f,l_id:t.id},{id:this.nid("c"),type:"point_on_line_pl",p_id:g,l_id:t.id})}else{let g=t.end_id,y=t.end_angle;t.end_id=d,t.end_angle=fr(this,t,d);let p=this.nid("a");this.sk.geo.push({id:p,type:"arc",c_id:t.c_id,radius:t.radius,start_id:f,end_id:g,start_angle:fr(this,t,f),end_angle:y,construction:t.construction}),this.sk.cons.push({id:this.nid("c"),type:"equal_radius_aa",a1_id:t.id,a2_id:p})}}else{let d=l(c);s.kind==="line"?t.p2_id=d:(t.end_id=d,t.end_angle=fr(this,t,d))}else{let d=l(h);s.kind==="line"?t.p1_id=d:(t.start_id=d,t.start_angle=fr(this,t,d))}this.dropOrphans(u)}pointAtCut(t){let e=this.sk.geo.find(a=>a.type==="point"&&!wc.has(a.id)&&Math.hypot(a.x-t.pt[0],a.y-t.pt[1])<1e-6);if(e)return e.id;let i=this.nid("p");this.sk.geo.push({id:i,type:"point",x:t.pt[0],y:t.pt[1],fixed:!1});let s=this.P(t.other),r=this.nid("c");return s.type==="line"?this.sk.cons.push({id:r,type:"point_on_line_pl",p_id:i,l_id:s.id}):s.type==="circle"?this.sk.cons.push({id:r,type:"point_on_circle",p_id:i,c_id:s.id}):this.sk.cons.push({id:r,type:"point_on_arc",p_id:i,a_id:s.id}),i}removeCurves(t){let i=t.map(s=>this.P(s)).filter(Boolean).flatMap(s=>[s.p1_id,s.p2_id,s.start_id,s.end_id,s.type==="arc"||s.type==="circle"?s.c_id:null].filter(Boolean));this.sk.geo=this.sk.geo.filter(s=>!t.includes(s.id)),this.sk.cons=this.sk.cons.filter(s=>!Jd(s).some(r=>t.includes(r))),this.dropOrphans(i)}dropOrphans(t){for(let e of t){let i=this.P(e);!i||i.ref||i.construction||this.sk.geo.some(r=>["p1_id","p2_id","c_id","start_id","end_id"].some(a=>r[a]===e))||(this.sk.geo=this.sk.geo.filter(r=>r.id!==e),this.sk.cons=this.sk.cons.filter(r=>!Jd(r).includes(e)))}}cmdPreviewSvg(){let t=this.cmd;if(!t||!this.cmdReady())return"";let e=t.spec.fields.find(a=>a.kind==="num"),i;try{i=this.evalExpr(t.vals[e?e.k:"x"])}catch{return""}if(!(i>0))return"";let s=a=>this.toS(a[0],a[1]).map(o=>o.toFixed(1)).join(" "),r=[];if(t.type==="offset"){let a;try{a=this.offsetCompute(t.vals.objects,i,t.vals.flip)}catch{return""}for(let o of a){if(o.circle){let l=this.P(o.circle.c_id),[c,h]=this.toS(l.x,l.y);r.push(`<circle cx="${c.toFixed(1)}" cy="${h.toFixed(1)}" r="${(o.r*this.view.s).toFixed(1)}" class="sk-preview"/>`);continue}for(let l of o.segs)if(l.kind==="line")r.push(`<path d="M${s(l.a)}L${s(l.b)}" class="sk-preview"/>`);else{let c=Math.atan2(l.a[1]-l.c[1],l.a[0]-l.c[0]),h=Math.atan2(l.b[1]-l.c[1],l.b[0]-l.c[0]),[u,d]=l.rev?[h,c]:[c,h];r.push(`<path d="${this.arcPath({radius:l.r,start_angle:u,end_angle:d},{x:l.c[0],y:l.c[1]})}" class="sk-preview"/>`)}}}else if(t.type==="sfillet"||t.type==="schamfer")for(let a of t.vals.corners){let o=this.cornerInfo(a);if(!o)continue;let l=t.type==="sfillet"?o.maxR:o.maxD,c=i>l;if(t.type==="sfillet"){let h=Math.min(i,l),u=h/Math.tan(o.th/2),d=[o.C.x+o.u1[0]*u,o.C.y+o.u1[1]*u],f=[o.C.x+o.u2[0]*u,o.C.y+o.u2[1]*u],g=sn([o.u1[0]+o.u2[0],o.u1[1]+o.u2[1]]),y=h/Math.sin(o.th/2),p=[o.C.x+g[0]*y,o.C.y+g[1]*y],m=Math.atan2(d[1]-p[1],d[0]-p[0]),M=((Math.atan2(f[1]-p[1],f[0]-p[0])-m)%Se+Se)%Se<=Math.PI,x=h*this.view.s;r.push(`<path d="M${s(d)}A${x.toFixed(1)} ${x.toFixed(1)} 0 0 ${M?0:1} ${s(f)}" class="sk-preview ${c?"bad":""}"/>`)}else{let h=Math.min(i,l);r.push(`<path d="M${s([o.C.x+o.u1[0]*h,o.C.y+o.u1[1]*h])}L${s([o.C.x+o.u2[0]*h,o.C.y+o.u2[1]*h])}" class="sk-preview ${c?"bad":""}"/>`)}}return r.join("")}evalExpr(t){return fi(t,this.getScope())}makeArc(t,e,i){let s=tm(t,i,e);if(!s){this.toast("I tre punti sono allineati","warn");return}let r=(i.x-t.x)*(e.y-i.y)-(i.y-t.y)*(e.x-i.x)>0,a=this.materialize(t),o=this.materialize(e),l=this.nid("p");this.sk.geo.push({id:l,type:"point",x:s.x,y:s.y,fixed:!1});let[c,h]=r?[a,o]:[o,a],u=this.P(c),d=this.P(h);this.sk.geo.push({id:this.nid("a"),type:"arc",c_id:l,radius:s.r,start_angle:Math.atan2(u.y-s.y,u.x-s.x),end_angle:Math.atan2(d.y-s.y,d.x-s.x),start_id:c,end_id:h})}dragTo(t,e,i){let[s,r]=this.toK(e,i);if(t.kind==="label"){let l=this.sk.cons.find(c=>c.id===t.id);l&&(l.lx=s,l.ly=r,this.render());return}if(t.kind==="radius"){let l=this.P(t.id),c=this.P(l.c_id),h=Math.hypot(s-c.x,r-c.y);l.radius=Math.max(h,.01),l.type==="arc"?this.resolve():this.resolve(),this.render();return}let a=l=>this.snapGrid?Math.round(l/this.gridStep())*this.gridStep():l,o=t.kind==="point"?[{id:t.id,x:a(s),y:a(r)}]:t.ids.map((l,c)=>({id:l,x:s+t.off[c][0],y:r+t.off[c][1]}));this.resolve(o),this.render()}tapSelect(t){if(!t){this.sel.clear(),this.render(),this.emit();return}if(t.kind==="dim"){this.editDim(t.id);return}let e=t.id;this.sel.has(e)?this.sel.delete(e):this.sel.add(e),this.render(),this.emit()}tapDim(t,e,i){let s=this.hit(t,e,i,{glyphs:!1});if(s&&s.kind==="dim"){this.editDim(s.id);return}let r=this.state&&this.state.kind==="dim"?this.state:this.state={kind:"dim",items:[]},[a,o]=this.toK(t,e);if(!s){if(r.items.length===1){let c=this.P(r.items[0].id);if(c.type==="line"&&!c.ref){this.createDim({type:"p2p_distance",p1_id:c.p1_id,p2_id:c.p2_id},[a,o]);return}}this.state=null,this.sel.clear(),this.render(),this.emit();return}let l=this.P(s.id);if(s.kind==="curve"&&(l.type==="circle"||l.type==="arc")&&!r.items.length){this.createDim(l.type==="circle"?{type:"circle_diameter",c_id:l.id}:{type:"arc_radius",a_id:l.id},[a,o]);return}if(r.items.push(s),this.sel.add(s.id),r.items.length===2){let[c,h]=r.items.map(g=>this.P(g.id)),u=g=>g.type==="line",d=g=>g.type==="point",f=null;if(d(c)&&d(h))f={type:"p2p_distance",p1_id:c.id,p2_id:h.id};else if(d(c)&&u(h))f={type:"p2l_distance",p_id:c.id,l_id:h.id};else if(u(c)&&d(h))f={type:"p2l_distance",p_id:h.id,l_id:c.id};else if(u(c)&&u(h)){let g=m=>{let _=this.P(m.p1_id),M=this.P(m.p2_id);return sn([M.x-_.x,M.y-_.y])},y=g(c),p=g(h);Math.abs(y[0]*p[1]-y[1]*p[0])<1e-6?f={type:"p2l_distance",p_id:h.p1_id,l_id:c.id}:f={type:"l2l_angle_ll",l1_id:c.id,l2_id:h.id}}f?this.createDim(f,[a,o]):(this.toast("Combinazione non quotabile","warn"),this.state=null,this.sel.clear(),this.render());return}this.render(),this.emit()}async createDim(t,e){t.id=this.nid("d"),t.lx=e[0],t.ly=e[1];let i=jd(t,this.sk.geo);t.expr=ve(i);let s=qd(t);t[s.k]=s.deg?i*Math.PI/180:i,this.state=null,this.sel.clear(),this.attempt(()=>this.sk.cons.push(t),"Quota non applicabile: lo schizzo \xE8 gi\xE0 vincolato qui")&&await this.editDim(t.id,!0)}async editDim(t,e=!1){let i=this.sk.cons.find(c=>c.id===t);if(!i)return;let r=i.type==="p2p_distance"||i.type==="difference"&&i.param1&&(i.param1.prop==="x"||i.param1.prop==="y")?[["al","Allineata"],["h","Orizzontale"],["v","Verticale"]]:null,a=i.type==="difference"?i.param1.prop==="x"?"h":"v":"al",o=i.type==="l2l_angle_ll",l=await this.promptValue({title:o?"Angolo (\xB0)":i.type.includes("diameter")?"Diametro (mm)":i.type.includes("radius")?"Raggio (mm)":"Distanza (mm)",value:i.expr,options:r,option:a,allowDelete:!e});if(l){if(l.remove){this.attempt(()=>{this.sk.cons=this.sk.cons.filter(c=>c.id!==t)});return}this.attempt(()=>{let c=this.sk.cons.find(h=>h.id===t);if(r&&l.option!==a){let h=c.type==="difference"?c.param2.o_id:c.p1_id,u=c.type==="difference"?c.param1.o_id:c.p2_id;for(let d of["p1_id","p2_id","param1","param2","distance","difference","sign"])delete c[d];if(l.option==="al")c.type="p2p_distance",c.p1_id=h,c.p2_id=u;else{let d=l.option==="h"?"x":"y",f=this.P(h),g=this.P(u);c.type="difference",c.param1={o_id:u,prop:d},c.param2={o_id:h,prop:d},c.sign=g[d]-f[d]<0?-1:1}}if(c.expr=l.value,c.grp)for(let h of this.sk.cons)h.grp===c.grp&&(h.expr=l.value)},"Valore non applicabile: controlla la quota o i vincoli")}}selTypes(){let t={point:0,line:0,circle:0,arc:0,cons:0,axis:0};for(let e of this.sel){let i=this.P(e);if(!i){t.cons++;continue}i.ref&&i.type==="line"?t.axis++:t[i.type]++}return t}applyConstraint(t){let e=[...this.sel].map(c=>this.P(c)).filter(Boolean),i=e.filter(c=>c.type==="point"),s=e.filter(c=>c.type==="line"),r=e.filter(c=>c.type==="circle"||c.type==="arc"),a=[],o=c=>a.push({id:this.nid("c"),...c}),l=c=>{this.toast(c,"warn")};switch(t){case"coincident":if(i.length===2)o({type:"p2p_coincident",p1_id:i[0].id,p2_id:i[1].id});else if(i.length===1&&s.length===1)o({type:"point_on_line_pl",p_id:i[0].id,l_id:s[0].id});else if(i.length===1&&r.length===1)o(r[0].type==="circle"?{type:"point_on_circle",p_id:i[0].id,c_id:r[0].id}:{type:"point_on_arc",p_id:i[0].id,a_id:r[0].id});else return l("Seleziona due punti, o un punto e una curva");break;case"horizontal":case"vertical":{let c=t==="horizontal"?"horizontal":"vertical",h=s.filter(u=>!u.ref);if(h.length)h.forEach(u=>o({type:`${c}_l`,l_id:u.id}));else if(i.length===2)o({type:`${c}_pp`,p1_id:i[0].id,p2_id:i[1].id});else return l("Seleziona linee o due punti");break}case"parallel":case"perpendicular":if(s.length!==2)return l("Seleziona due linee");o({type:t==="parallel"?"parallel":"perpendicular_ll",l1_id:s[0].id,l2_id:s[1].id});break;case"tangent":{if(s.length===1&&r.length===1){let c=r[0];o(c.type==="circle"?{type:"tangent_lc",l_id:s[0].id,c_id:c.id}:{type:"tangent_la",l_id:s[0].id,a_id:c.id})}else if(r.length===2){let[c,h]=r;if(c.type==="circle"&&h.type==="circle")o({type:"tangent_cc",c1_id:c.id,c2_id:h.id});else if(c.type==="arc"&&h.type==="arc")o({type:"tangent_aa",a1_id:c.id,a2_id:h.id});else{let u=c.type==="circle"?c:h,d=c.type==="arc"?c:h;o({type:"tangent_ca",c_id:u.id,a_id:d.id})}}else return l("Seleziona una linea e una curva, o due curve");break}case"equal":if(s.length>=2)for(let c=1;c<s.length;c++)o({type:"equal_length",l1_id:s[0].id,l2_id:s[c].id});else if(r.length>=2)for(let c=1;c<r.length;c++){let h=r[0],u=r[c];if(h.type==="circle"&&u.type==="circle")o({type:"equal_radius_cc",c1_id:h.id,c2_id:u.id});else if(h.type==="arc"&&u.type==="arc")o({type:"equal_radius_aa",a1_id:h.id,a2_id:u.id});else{let d=h.type==="circle"?h:u,f=h.type==="arc"?h:u;o({type:"equal_radius_ca",c_id:d.id,a_id:f.id})}}else return l("Seleziona due o pi\xF9 linee, o due o pi\xF9 cerchi/archi");break;case"midpoint":if(i.length===1&&s.length===1)o({type:"p2p_symmetric_ppp",p1_id:s[0].p1_id,p2_id:s[0].p2_id,p_id:i[0].id});else return l("Seleziona un punto e una linea");break;case"concentric":if(r.length===2)o({type:"p2p_coincident",p1_id:r[0].c_id,p2_id:r[1].c_id});else if(r.length===1&&i.length===1)o({type:"p2p_coincident",p1_id:r[0].c_id,p2_id:i[0].id});else return l("Seleziona due cerchi o archi");break;case"symmetric":if(i.length===2&&s.length===1)o({type:"p2p_symmetric_ppl",p1_id:i[0].id,p2_id:i[1].id,l_id:s[0].id});else return l("Seleziona due punti e la linea di simmetria");break;case"fix":{let c=i.filter(h=>!h.ref);if(!c.length)return l("Seleziona dei punti");this.attempt(()=>c.forEach(h=>{let u=this.P(h.id);u.fixed=!u.fixed})),this.sel.clear(),this.render(),this.emit();return}default:return}this.attempt(()=>this.sk.cons.push(...a))&&(this.sel.clear(),this.render(),this.emit())}toggleConstruction(){let t=[...this.sel].map(i=>this.P(i)).filter(i=>i&&i.type!=="point"&&!i.ref);if(!t.length){this.toast("Seleziona linee, cerchi o archi","warn");return}this.push();let e=!t.every(i=>i.construction);t.forEach(i=>{i.construction=e}),this.sel.clear(),this.changed()}deleteSelection(){if(!this.sel.size){this.toast("Seleziona cosa eliminare","warn");return}this.push();let t=new Set;for(let s of this.sel){let r=this.P(s);r&&r.ref||t.add(s)}for(let s of this.sk.geo)["p1_id","p2_id","c_id","start_id","end_id"].some(r=>s[r]&&t.has(s[r]))&&t.add(s.id);let e=this.sk.geo.filter(s=>t.has(s.id)&&s.type!=="point"),i=new Set;for(let s of this.sk.geo)if(!t.has(s.id))for(let r of["p1_id","p2_id","c_id","start_id","end_id"])s[r]&&i.add(s[r]);for(let s of e)for(let r of["p1_id","p2_id","c_id","start_id","end_id"])s[r]&&!i.has(s[r])&&!this.P(s[r]).ref&&t.add(s[r]);this.sk.geo=this.sk.geo.filter(s=>!t.has(s.id)),this.sk.cons=this.sk.cons.filter(s=>!t.has(s.id)&&!Jd(s).some(r=>t.has(r))),this.sel.clear(),this.state=null,this.resolve(),this.changed()}cancel(){return this.cmd?(this.cmdCancel(),!0):this.hasLocks()?(this.clearLocks(),this.lastCursor&&this.trackCursor(...this.lastCursor,this.lastPointer||"mouse"),this.emit(),!0):this.state?(this.state=null,this.sel.clear(),this.render(),this.emit(),!0):this.sel.size?(this.sel.clear(),this.render(),this.emit(),!0):!1}bind(){let t=this.svg;t.addEventListener("pointerdown",i=>{if(!this.active)return;t.setPointerCapture(i.pointerId);let s=t.getBoundingClientRect();if(this.pointers.set(i.pointerId,{x:i.clientX-s.left,y:i.clientY-s.top}),this.pointers.size===2){this.gesture=null,this.state&&this.state.fresh&&this.state.kind!=="dim"&&(this.state=null);let[r,a]=[...this.pointers.values()];this.pinch={d:Math.hypot(r.x-a.x,r.y-a.y),m:[(r.x+a.x)/2,(r.y+a.y)/2],view:{...this.view}},this.render();return}this.pointers.size>2||this.down(i,i.clientX-s.left,i.clientY-s.top)}),t.addEventListener("pointermove",i=>{if(!this.active)return;let s=t.getBoundingClientRect(),r=i.clientX-s.left,a=i.clientY-s.top;if(this.pointers.has(i.pointerId)&&this.pointers.set(i.pointerId,{x:r,y:a}),this.pinch&&this.pointers.size>=2){let[o,l]=[...this.pointers.values()],c=Math.hypot(o.x-l.x,o.y-l.y),h=[(o.x+l.x)/2,(o.y+l.y)/2],u=this.pinch.view,d=Math.min(500,Math.max(.02,u.s*(c/Math.max(this.pinch.d,1)))),f=(this.pinch.m[0]-this.W/2)/u.s+u.cx,g=-(this.pinch.m[1]-this.H/2)/u.s+u.cy;this.view={s:d,cx:f-(h[0]-this.W/2)/d,cy:g+(h[1]-this.H/2)/d},this.vp.setSketchView(this.view),this.render();return}if(!(this.pointers.size>1)){if(!this.pointers.size&&i.pointerType==="mouse"){this.trackCursor(r,a,"mouse");return}this.move(i,r,a)}});let e=i=>{if(!this.active)return;let s=this.pointers.has(i.pointerId);if(this.pointers.delete(i.pointerId),this.pinch){this.pointers.size||(this.pinch=null);return}if(!s||i.type==="pointercancel"){this.gesture=null;return}let r=t.getBoundingClientRect();this.up(i,i.clientX-r.left,i.clientY-r.top)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("dblclick",()=>{this.state&&this.state.kind==="line"&&(this.state=null,this.render())}),t.addEventListener("wheel",i=>{if(!this.active)return;i.preventDefault();let s=t.getBoundingClientRect(),r=i.clientX-s.left,a=i.clientY-s.top,[o,l]=this.toK(r,a),c=Math.min(500,Math.max(.02,this.view.s*Math.exp(-i.deltaY*.0015)));this.view={s:c,cx:o-(r-this.W/2)/c,cy:l+(a-this.H/2)/c},this.vp.setSketchView(this.view),this.render()},{passive:!1})}render(){if(!this.active)return;let t=this.W,e=this.H;this.svg.setAttribute("width",t),this.svg.setAttribute("height",e),this.svg.setAttribute("viewBox",`0 0 ${t} ${e}`);let i=[],s=(E,C)=>this.toS(E,C),r=E=>E.toFixed(1),a=this.view,o=1;o=this.gridStep();let[l,c]=this.toK(0,0),[h,u]=this.toK(t,e),d=[],f=[];for(let E=Math.ceil(l/o)*o;E<=h;E+=o){let C=r(s(E,0)[0]);(Math.abs(E/(o*5)-Math.round(E/(o*5)))<1e-6?f:d).push(`M${C} 0V${e}`)}for(let E=Math.ceil(u/o)*o;E<=c;E+=o){let C=r(s(0,E)[1]);(Math.abs(E/(o*5)-Math.round(E/(o*5)))<1e-6?f:d).push(`M0 ${C}H${t}`)}if(i.push(`<path d="${d.join("")}" class="sk-grid"/><path d="${f.join("")}" class="sk-grid major"/>`),!this.regions)try{this.regions=Sc(this.sk.geo)}catch{this.regions=[]}for(let E of this.regions){let C=[E.poly,...E.holePolys].map(v=>"M"+v.map(([A,B])=>s(A,B).map(r).join(" ")).join("L")+"Z").join("");i.push(`<path d="${C}" class="sk-region" fill-rule="evenodd"/>`)}let g=this.cmd&&this.cmd.vals.axis?this.cmd.vals.axis[0]:null,[y,p]=s(0,0);i.push(`<path d="M0 ${r(p)}H${t}" class="sk-axis x ${this.sel.has("AX")||g==="AX"?"sel":""}"/><path d="M${r(y)} 0V${e}" class="sk-axis y ${this.sel.has("AY")||g==="AY"?"sel":""}"/>`);let m=this.status&&this.status.dof===0,_=new Set(this.status&&this.status.conflicting||[]);for(let E of this.sk.geo){if(E.ref||E.type==="point")continue;let C=["sk-curve",E.construction?"cons":"",m?"full":"",this.sel.has(E.id)?"sel":"",g===E.id?"maxis":""].join(" ");if(E.type==="line"){let v=this.P(E.p1_id),A=this.P(E.p2_id),[B,k]=s(v.x,v.y),[F,V]=s(A.x,A.y);i.push(`<path d="M${r(B)} ${r(k)}L${r(F)} ${r(V)}" class="${C}"/>`)}else if(E.type==="circle"){let v=this.P(E.c_id),[A,B]=s(v.x,v.y);i.push(`<circle cx="${r(A)}" cy="${r(B)}" r="${r(E.radius*a.s)}" class="${C}"/>`)}else E.type==="arc"&&i.push(`<path d="${this.arcPath(E)}" class="${C}"/>`)}let M=new Set;for(let E of this.sk.geo)for(let C of["p1_id","p2_id","c_id","start_id","end_id"])E[C]&&!E.ref&&M.add(E[C]);for(let E of this.sk.geo){if(E.type!=="point"||wc.has(E.id))continue;let[C,v]=s(E.x,E.y);if(E.id==="O"){i.push(`<circle cx="${r(C)}" cy="${r(v)}" r="5" class="sk-origin ${this.sel.has("O")?"sel":""}"/>`);continue}let A=!M.has(E.id),B=["sk-pt",A?"lone":"",E.fixed?"fixed":"",E.construction?"cpt":"",this.sel.has(E.id)?"sel":"",m?"full":""].join(" ");i.push(A?`<path d="M${r(C-6)} ${r(v)}H${r(C+6)}M${r(C)} ${r(v-6)}V${r(v+6)}" class="${B}"/><circle cx="${r(C)}" cy="${r(v)}" r="3" class="${B}"/>`:`<circle cx="${r(C)}" cy="${r(v)}" r="${E.fixed?4.5:3.5}" class="${B}"/>`)}this.glyphBoxes=[];let x=new Map;for(let E of this.sk.cons){let C=Rb[E.type];if(!C||E.type==="p2p_coincident")continue;let v=this.consAnchor(E);if(!v)continue;let A=v.map(V=>Math.round(V/4)).join(","),B=x.get(A)||0;x.set(A,B+1);let[k,F]=[v[0]+12+B*18,v[1]-12];this.glyphBoxes.push({id:E.id,x:k,y:F}),i.push(`<g class="sk-glyph ${this.sel.has(E.id)?"sel":""} ${_.has(E.id)?"bad":""}"><rect x="${r(k-8)}" y="${r(F-8)}" width="16" height="16" rx="4"/><text x="${r(k)}" y="${r(F+4.2)}">${C}</text></g>`)}this.labelBoxes=[];for(let E of this.sk.cons)Pb.has(E.type)&&!E.nolabel&&i.push(this.dimSvg(E,_.has(E.id)));i.push(this.previewSvg()),i.push(this.cmdPreviewSvg()),this.svg.innerHTML=i.join("")}arcPath(t,e=null){let i=e||this.P(t.c_id),s=t.start_angle,r=t.end_angle,a=r-s;for(;a<=0;)a+=Se;for(;a>Se;)a-=Se;let[o,l]=this.toS(i.x+t.radius*Math.cos(s),i.y+t.radius*Math.sin(s)),[c,h]=this.toS(i.x+t.radius*Math.cos(r),i.y+t.radius*Math.sin(r)),u=t.radius*this.view.s;return`M${o.toFixed(1)} ${l.toFixed(1)}A${u.toFixed(1)} ${u.toFixed(1)} 0 ${a>Math.PI?1:0} 0 ${c.toFixed(1)} ${h.toFixed(1)}`}consAnchor(t){let e=r=>{let a=this.P(r.p1_id),o=this.P(r.p2_id);return this.toS((a.x+o.x)/2,(a.y+o.y)/2)},i=r=>{let a=this.P(r);if(!a)return null;if(a.type==="line")return a.ref?this.toS(0,0):e(a);if(a.type==="circle"){let o=this.P(a.c_id);return this.toS(o.x+a.radius*.707,o.y+a.radius*.707)}if(a.type==="arc"){let o=this.P(a.c_id),l=(a.start_angle+a.end_angle)/2+(a.end_angle<a.start_angle?Math.PI:0);return this.toS(o.x+a.radius*Math.cos(l),o.y+a.radius*Math.sin(l))}return a.type==="point"?this.toS(a.x,a.y):null},s=t.l_id||t.l1_id||t.c_id||t.a_id||t.c1_id||t.a1_id||t.p_id||t.p1_id;return i(s)}dimSvg(t,e){let i=(m,_)=>this.toS(m,_),s=m=>m.toFixed(1),r=m=>this.P(m),a="",o=jd(t,this.sk.geo),l=t.type==="l2l_angle_ll",c=t.lx,h=t.ly;try{if(t.type==="p2p_distance"||t.type==="difference"){let m=t.type==="difference"?r(t.param2.o_id):r(t.p1_id),_=t.type==="difference"?r(t.param1.o_id):r(t.p2_id),M,x;if(t.type==="difference"&&t.param1.prop==="x")M=[m.x,h],x=[_.x,h];else if(t.type==="difference")M=[c,m.y],x=[c,_.y];else{let Q=sn([_.x-m.x,_.y-m.y]),U=[-Q[1],Q[0]],G=(c-m.x)*U[0]+(h-m.y)*U[1];M=[m.x+U[0]*G,m.y+U[1]*G],x=[_.x+U[0]*G,_.y+U[1]*G]}let[E,C]=i(m.x,m.y),[v,A]=i(_.x,_.y),[B,k]=i(...M),[F,V]=i(...x);a=`M${s(E)} ${s(C)}L${s(B)} ${s(k)}M${s(v)} ${s(A)}L${s(F)} ${s(V)}M${s(B)} ${s(k)}L${s(F)} ${s(V)}`,a+=Qd([B,k],[F,V])}else if(t.type==="p2l_distance"){let m=r(t.p_id),_=r(t.l_id),M=r(_.p1_id),x=r(_.p2_id),E=Ub([m.x,m.y],[M.x,M.y],[x.x,x.y]),C=[M.x+(x.x-M.x)*E,M.y+(x.y-M.y)*E],[v,A]=i(m.x,m.y),[B,k]=i(...C);a=`M${s(v)} ${s(A)}L${s(B)} ${s(k)}`+Qd([v,A],[B,k])}else if(t.type==="circle_diameter"||t.type==="arc_diameter"||t.type==="circle_radius"||t.type==="arc_radius"){let m=r(t.c_id||t.a_id),_=r(m.c_id),M=sn([c-_.x,h-_.y]),x=t.type.includes("diameter"),E=x?[_.x-M[0]*m.radius,_.y-M[1]*m.radius]:[_.x,_.y],C=[_.x+M[0]*m.radius,_.y+M[1]*m.radius],[v,A]=i(...E),[B,k]=i(...C),[F,V]=i(c,h);a=`M${s(v)} ${s(A)}L${s(B)} ${s(k)}L${s(F)} ${s(V)}`+Qd([v,A],[B,k],!x)}else if(l){let m=r(t.l1_id),_=r(t.l2_id),M=Bb(r(m.p1_id),r(m.p2_id),r(_.p1_id),r(_.p2_id));if(m.ref&&!_.ref){let x=r(_.p1_id);M=[x.x,x.y];let[E,C]=i(x.x,x.y),v=m.id==="AX"?1:0,A=m.id==="AX"?0:-1,B=Math.hypot(c-x.x,h-x.y)*this.view.s+10;a+=`M${s(E)} ${s(C)}L${s(E+v*B)} ${s(C+A*B)}`}if(M){let x=Math.hypot(c-M[0],h-M[1])*this.view.s,E=Math.atan2(r(m.p2_id).y-r(m.p1_id).y,r(m.p2_id).x-r(m.p1_id).x),[C,v]=i(M[0],M[1]),A=E,B=E+o*Math.PI/180,k=[C+x*Math.cos(A),v-x*Math.sin(A)],F=[C+x*Math.cos(B),v-x*Math.sin(B)];a+=`M${s(k[0])} ${s(k[1])}A${s(x)} ${s(x)} 0 0 ${o>0?0:1} ${s(F[0])} ${s(F[1])}`}o=Math.abs(o)}}catch{}let[u,d]=i(c,h),f=Number(t.expr),g=t.type.includes("diameter")?"\u2300":t.type.includes("radius")?"R":"",y=Number.isFinite(f)&&String(t.expr).trim()!==""?`${g}${ve(o,2)}${l?"\xB0":""}`:`${g}${t.expr} = ${ve(o,2)}${l?"\xB0":""}`,p=y.length*7.4+14;return this.labelBoxes.push({id:t.id,x0:u-p/2,x1:u+p/2,y0:d-12,y1:d+12}),`<g class="sk-dim ${e?"bad":""} ${this.sel.has(t.id)?"sel":""}"><path d="${a}"/><rect x="${s(u-p/2)}" y="${s(d-11)}" width="${s(p)}" height="22" rx="6"/><text x="${s(u)}" y="${s(d+4.5)}">${zb(y)}</text></g>`}previewSvg(){let t=this.state;if(!t||!t.cur)return"";let e=(o,l)=>this.toS(o,l),i=o=>o.toFixed(1),s=t.cur,r=[],a=o=>{if(o.point||o.curve){let[l,c]=e(o.x,o.y);r.push(`<circle cx="${i(l)}" cy="${i(c)}" r="9" class="sk-snap ${o.point?"pt":""}"/>`)}else if(o.grid){let[l,c]=e(o.x,o.y);r.push(`<path d="M${i(l-6)} ${i(c)}L${i(l)} ${i(c-6)}L${i(l+6)} ${i(c)}L${i(l)} ${i(c+6)}Z" class="sk-snap grid"/>`)}};if(t.kind==="line"){let o=t.lastId?this.P(t.lastId):t.start,[l,c]=e(o.x,o.y),[h,u]=e(s.x,s.y);if(!t.fresh||this.gesture?.moved){r.push(`<path d="M${i(l)} ${i(c)}L${i(h)} ${i(u)}" class="sk-preview"/>`);let d=Math.hypot(s.x-o.x,s.y-o.y),f=Math.atan2(s.y-o.y,s.x-o.x)*180/Math.PI,g=Math.min(42,Math.hypot(h-l,u-c)*.6);if(g>12&&Math.abs(f)>.5&&Math.abs(Math.abs(f)-180)>.5){let m=l+g*Math.cos(f*Math.PI/180),_=c-g*Math.sin(f*Math.PI/180);r.push(`<path d="M${i(l)} ${i(c)}H${i(l+g+10)}" class="sk-preview thin"/><path d="M${i(l+g)} ${i(c)}A${i(g)} ${i(g)} 0 0 ${f>0?0:1} ${i(m)} ${i(_)}" class="sk-angle"/>`)}r.push(`<text x="${i(h+14)}" y="${i(u-14)}" class="sk-hint">${ve(d,2)} mm  \u2220 ${ve(f,1)}\xB0</text>`);let y=Math.abs(Math.atan2(s.y-o.y,s.x-o.x)),p=3*Math.PI/180;y<p||Math.abs(y-Math.PI)<p?r.push(`<text x="${i((l+h)/2)}" y="${i((c+u)/2-10)}" class="sk-hint hv">H</text>`):Math.abs(y-Math.PI/2)<p&&r.push(`<text x="${i((l+h)/2+10)}" y="${i((c+u)/2)}" class="sk-hint hv">V</text>`)}r.push(`<circle cx="${i(l)}" cy="${i(c)}" r="4" class="sk-pt sel"/>`)}else if(t.kind==="rect"){let o=t.start,[l,c]=e(o.x,o.y),[h,u]=e(s.x,s.y);r.push(`<path d="M${i(l)} ${i(c)}H${i(h)}V${i(u)}H${i(l)}Z" class="sk-preview"/>`),r.push(`<text x="${i(h+14)}" y="${i(u-14)}" class="sk-hint">${ve(Math.abs(s.x-o.x),2)} \xD7 ${ve(Math.abs(s.y-o.y),2)}</text>`)}else if(t.kind==="circle"){let o=t.start,[l,c]=e(o.x,o.y),h=Math.hypot(s.x-o.x,s.y-o.y);r.push(`<circle cx="${i(l)}" cy="${i(c)}" r="${i(h*this.view.s)}" class="sk-preview"/><circle cx="${i(l)}" cy="${i(c)}" r="3" class="sk-pt sel"/>`);let[u,d]=e(s.x,s.y);r.push(`<text x="${i(u+14)}" y="${i(d-14)}" class="sk-hint">\u2300 ${ve(h*2,2)}</text>`)}else if(t.kind==="poly"){let o=this.polyGeom(t.start,s),l=o.verts.map(([f,g])=>e(f,g).map(i).join(" ")),[c,h]=e(t.start.x,t.start.y);r.push(`<path d="M${l.join("L")}Z" class="sk-preview"/><circle cx="${i(c)}" cy="${i(h)}" r="${i(o.R*this.view.s)}" class="sk-preview thin"/><circle cx="${i(c)}" cy="${i(h)}" r="3" class="sk-pt sel"/>`);let[u,d]=e(s.x,s.y);r.push(`<text x="${i(u+14)}" y="${i(d-14)}" class="sk-hint">${this.polyN} lati \xB7 ${this.polyMode==="flats"?"lati piatti":"angoli"} ${ve(2*(this.polyMode==="flats"?o.apo:o.R),2)} mm</text>`)}else if(t.kind==="arc"){let o=[...t.pts,s];for(let l of t.pts){let[c,h]=e(l.x,l.y);r.push(`<circle cx="${i(c)}" cy="${i(h)}" r="4" class="sk-pt sel"/>`)}if(o.length===2){let[l,c]=e(o[0].x,o[0].y),[h,u]=e(o[1].x,o[1].y);r.push(`<path d="M${i(l)} ${i(c)}L${i(h)} ${i(u)}" class="sk-preview thin"/>`)}if(o.length===3){let l=tm(o[0],o[2],o[1]);if(l){let c=(o[2].x-o[0].x)*(o[1].y-o[2].y)-(o[2].y-o[0].y)*(o[1].x-o[2].x)>0,[h,u]=c?[o[0],o[1]]:[o[1],o[0]];r.push(`<path d="${this.arcPath({radius:l.r,start_angle:Math.atan2(h.y-l.y,h.x-l.x),end_angle:Math.atan2(u.y-l.y,u.x-l.x)},l)}" class="sk-preview"/>`)}}}else if(t.kind==="point"){let[o,l]=e(s.x,s.y);r.push(`<circle cx="${i(o)}" cy="${i(l)}" r="4" class="sk-pt sel"/>`)}return a(s),r.join("")}};function Jd(n){let t=[];for(let[e,i]of Object.entries(n))e!=="id"&&e.endsWith("_id")&&typeof i=="string"&&t.push(i),i&&typeof i=="object"&&i.o_id&&t.push(i.o_id);return t}var tu={smirror:{title:"Specchia",icon:"mirror",fields:[{k:"objects",kind:"pick",what:"curves",multi:!0,label:"Oggetti",hint:"Tocca linee, cerchi, archi o punti da specchiare"},{k:"axis",kind:"pick",what:"line",multi:!1,label:"Linea di specchio",hint:"Tocca la linea di simmetria (vanno bene anche gli assi tratteggiati)"}]},sfillet:{title:"Raccordo",icon:"fillet",fields:[{k:"corners",kind:"pick",what:"corner",multi:!0,label:"Angoli",hint:"Tocca gli angoli tra due linee (o una linea vicino all'angolo)"},{k:"r",kind:"num",label:"Raggio",unit:"mm",init:"3"}]},schamfer:{title:"Smusso",icon:"chamfer",fields:[{k:"corners",kind:"pick",what:"corner",multi:!0,label:"Angoli",hint:"Tocca gli angoli tra due linee (o una linea vicino all'angolo)"},{k:"d",kind:"num",label:"Distanza",unit:"mm",init:"2"}]},offset:{title:"Offset",icon:"offset",fields:[{k:"objects",kind:"pick",what:"chain",multi:!0,label:"Contorno",hint:"Tocca il contorno da copiare: si prende tutto il tratto collegato"},{k:"d",kind:"num",label:"Distanza",unit:"mm",init:"2"},{k:"flip",kind:"toggle",label:"Dall'altro lato"}]}};function Kd(n,t){let e=a=>n.P(a);if(t.type==="line"){let a=e(t.p1_id),o=e(t.p2_id);return{kind:"line",a:[a.x,a.y],b:[o.x,o.y]}}let i=e(t.c_id);if(t.type==="circle")return{kind:"circle",c:[i.x,i.y],r:t.radius};let s=(t.start_angle%Se+Se)%Se,r=((t.end_angle-t.start_angle)%Se+Se)%Se;return r<1e-9&&(r=Se),{kind:"arc",c:[i.x,i.y],r:t.radius,a0:s,sw:r}}function Tc(n,t,e=!1){if(n.kind==="line"){let r=n.b[0]-n.a[0],a=n.b[1]-n.a[1],o=r*r+a*a,l=o?((t[0]-n.a[0])*r+(t[1]-n.a[1])*a)/o:0;return e?Math.max(0,Math.min(1,l)):l<-1e-7||l>1+1e-7?null:Math.max(0,Math.min(1,l))}let i=(Math.atan2(t[1]-n.c[1],t[0]-n.c[0])%Se+Se)%Se;if(n.kind==="circle")return i;let s=((i-n.a0)%Se+Se)%Se;if(s>n.sw+1e-7)if(Se-s<1e-7)s=0;else return e?s-n.sw<Se-s?n.sw:0:null;return Math.min(s,n.sw)}function Ib(n,t){return eu(n,t).filter(i=>Tc(n,i)!=null&&Tc(t,i)!=null)}function eu(n,t){let e=h=>h.kind==="line";if(e(n)&&e(t)){let h=[n.b[0]-n.a[0],n.b[1]-n.a[1]],u=[t.b[0]-t.a[0],t.b[1]-t.a[1]],d=h[0]*u[1]-h[1]*u[0];if(Math.abs(d)<1e-12)return[];let f=((t.a[0]-n.a[0])*u[1]-(t.a[1]-n.a[1])*u[0])/d;return[[n.a[0]+h[0]*f,n.a[1]+h[1]*f]]}if(!e(n)&&e(t))return eu(t,n);if(e(n)){let h=[n.b[0]-n.a[0],n.b[1]-n.a[1]],u=[n.a[0]-t.c[0],n.a[1]-t.c[1]],d=h[0]*h[0]+h[1]*h[1],f=2*(u[0]*h[0]+u[1]*h[1]),g=u[0]*u[0]+u[1]*u[1]-t.r*t.r,y=f*f-4*d*g;if(d<1e-18||y<-1e-9*d*t.r)return[];y=Math.max(0,y);let p=Math.sqrt(y);return(p<1e-12?[-f/(2*d)]:[(-f-p)/(2*d),(-f+p)/(2*d)]).map(_=>[n.a[0]+h[0]*_,n.a[1]+h[1]*_])}let i=t.c[0]-n.c[0],s=t.c[1]-n.c[1],r=Math.hypot(i,s);if(r<1e-9||r>n.r+t.r+1e-7||r<Math.abs(n.r-t.r)-1e-7)return[];let a=(n.r*n.r-t.r*t.r+r*r)/(2*r),o=Math.sqrt(Math.max(0,n.r*n.r-a*a)),l=n.c[0]+a*i/r,c=n.c[1]+a*s/r;return o<1e-9?[[l,c]]:[[l-o*s/r,c+o*i/r],[l+o*s/r,c-o*i/r]]}function Lb(n,t,e){let i=r=>r.kind==="line"?{kind:"line",a:r.a,b:r.b}:{kind:"circle",c:r.c,r:r.r},s=eu(i(n),i(t));return s.length?(s.sort((r,a)=>Math.hypot(r[0]-e[0],r[1]-e[1])-Math.hypot(a[0]-e[0],a[1]-e[1])),s[0]):null}function kb(n,t){let e=n.P(t.c_id),i=t.end_angle-t.start_angle;for(;i<=0;)i+=Se;let s=t.start_angle+i/2;return{x:e.x+t.radius*Math.cos(s),y:e.y+t.radius*Math.sin(s)}}function Db(n,t,e){let i=e.x-t.x,s=e.y-t.y;return((n.x-t.x)*s-(n.y-t.y)*i)/(Math.hypot(i,s)||1)}function fr(n,t,e){let i=n.P(t.c_id),s=n.P(e);return Math.atan2(s.y-i.y,s.x-i.x)}function Nb(n,t,e,i){t.type="arc",t.start_id=e,t.end_id=i,t.start_angle=fr(n,t,e),t.end_angle=fr(n,t,i);for(let s of n.sk.cons)if(s.type==="circle_diameter"&&s.c_id===t.id)s.type="arc_diameter",s.a_id=t.id,delete s.c_id;else if(s.type==="circle_radius"&&s.c_id===t.id)s.type="arc_radius",s.a_id=t.id,delete s.c_id;else if(s.type==="point_on_circle"&&s.c_id===t.id)s.type="point_on_arc",s.a_id=t.id,delete s.c_id;else if(s.type==="tangent_lc"&&s.c_id===t.id)s.type="tangent_la",s.a_id=t.id,delete s.c_id;else if((s.type==="equal_radius_cc"||s.type==="tangent_cc")&&(s.c1_id===t.id||s.c2_id===t.id)){let r=s.c1_id===t.id?s.c2_id:s.c1_id;s.type=s.type==="equal_radius_cc"?"equal_radius_ca":"tangent_ca",s.c_id=r,s.a_id=t.id,delete s.c1_id,delete s.c2_id}else if((s.type==="equal_radius_ca"||s.type==="tangent_ca")&&s.c_id===t.id){let r=s.a_id;s.type=s.type==="equal_radius_ca"?"equal_radius_aa":"tangent_aa",s.a1_id=t.id,s.a2_id=r,delete s.c_id,delete s.a_id}}function im(n,t,e){let i=e[0]-t[0],s=e[1]-t[1],r=i*i+s*s;return r?Math.max(0,Math.min(1,((n[0]-t[0])*i+(n[1]-t[1])*s)/r)):0}function Ub(n,t,e){let i=e[0]-t[0],s=e[1]-t[1],r=i*i+s*s;return r?((n[0]-t[0])*i+(n[1]-t[1])*s)/r:0}function Ob(n,t,e){let i=im(n,t,e);return Math.hypot(n[0]-t[0]-i*(e[0]-t[0]),n[1]-t[1]-i*(e[1]-t[1]))}function sn(n){let t=Math.hypot(n[0],n[1])||1;return[n[0]/t,n[1]/t]}function Fb(n,t,e){let i=r=>(r%Se+Se)%Se,s=i(e-t)||Se;return i(n-t)<=s+1e-9}function tm(n,t,e){let i=2*(n.x*(t.y-e.y)+t.x*(e.y-n.y)+e.x*(n.y-t.y));if(Math.abs(i)<1e-12)return null;let s=n.x*n.x+n.y*n.y,r=t.x*t.x+t.y*t.y,a=e.x*e.x+e.y*e.y,o=(s*(t.y-e.y)+r*(e.y-n.y)+a*(n.y-t.y))/i,l=(s*(e.x-t.x)+r*(n.x-e.x)+a*(t.x-n.x))/i;return{x:o,y:l,r:Math.hypot(n.x-o,n.y-l)}}function Bb(n,t,e,i){let s=[t.x-n.x,t.y-n.y],r=[i.x-e.x,i.y-e.y],a=s[0]*r[1]-s[1]*r[0];if(Math.abs(a)<1e-12)return null;let o=((e.x-n.x)*r[1]-(e.y-n.y)*r[0])/a;return[n.x+s[0]*o,n.y+s[1]*o]}function Qd(n,t,e=!1){let i=sn([t[0]-n[0],t[1]-n[1]]),s=[-i[1],i[0]],r=8,a=3,o=(l,c)=>`M${(l[0]-c[0]*r+s[0]*a).toFixed(1)} ${(l[1]-c[1]*r+s[1]*a).toFixed(1)}L${l[0].toFixed(1)} ${l[1].toFixed(1)}L${(l[0]-c[0]*r-s[0]*a).toFixed(1)} ${(l[1]-c[1]*r-s[1]*a).toFixed(1)}`;return(e?"":o(n,[-i[0],-i[1]]))+o(t,i)}function zb(n){return String(n).replace(/[<>&]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[t])}var Cc={mm:1,cm:10,in:25.4,pt:.35277777777777775,pc:4.233333333333333,px:.26458333333333334,"":.26458333333333334};function am(n){let t=new DOMParser().parseFromString(n,"image/svg+xml"),e=t.documentElement;if(!e||e.nodeName.toLowerCase()!=="svg"||t.querySelector("parsererror"))throw new Error("Il file non \xE8 un SVG valido");let i=(e.getAttribute("viewBox")||"").trim().split(/[\s,]+/).map(Number),r=(m=>{let _=/^\s*([\d.eE+-]+)\s*([a-z%]*)\s*$/.exec(m||"");return _?{v:+_[1],u:_[2]}:null})(e.getAttribute("width")),a=Cc.px;r&&r.u!=="%"&&Cc[r.u]!=null&&(a=i.length===4&&i[2]>0?r.v*Cc[r.u]/i[2]:Cc[r.u]);let o=document.createElement("div");o.style.cssText="position:absolute;left:-10000px;top:0;width:1px;height:1px;overflow:hidden;visibility:hidden";let l=document.importNode(e,!0);l.removeAttribute("viewBox"),l.setAttribute("width","1000"),l.setAttribute("height","1000"),o.appendChild(l),document.body.appendChild(o);let c=[],h=[],u=0;try{for(let m of l.querySelectorAll("path,rect,circle,ellipse,line,polyline,polygon")){if(m.closest("defs,clipPath,mask,symbol,marker,pattern")||getComputedStyle(m).display==="none")continue;let M=m.getCTM();if(!M){u++;continue}let x=k=>[(M.a*k[0]+M.c*k[1]+M.e)*a,-(M.b*k[0]+M.d*k[1]+M.f)*a],E=Math.abs(M.a-M.d)<1e-9&&Math.abs(M.b+M.c)<1e-9,C=Math.hypot(M.a,M.b)*a,v=k=>parseFloat(m.getAttribute(k))||0,A=m.nodeName.toLowerCase();if(A==="circle"&&E){h.push({c:x([v("cx"),v("cy")]),r:v("r")*C});continue}let B="";if(A==="path")B=m.getAttribute("d")||"";else if(A==="rect")B=Hb(v("x"),v("y"),v("width"),v("height"),m.getAttribute("rx"),m.getAttribute("ry"));else if(A==="circle")B=nm(v("cx"),v("cy"),v("r"),v("r"));else if(A==="ellipse")B=nm(v("cx"),v("cy"),v("rx"),v("ry"));else if(A==="line")B=`M${v("x1")} ${v("y1")}L${v("x2")} ${v("y2")}`;else{let k=(m.getAttribute("points")||"").trim().split(/[\s,]+/).map(Number);k.length>=4&&(B="M"+k.join(" ")+(A==="polygon"?"Z":""))}for(let k of Vb(B)){let F=k.segs.map(V=>V.k==="L"?{k:"L",a:x(V.a),b:x(V.b)}:{k:"C",p:V.p.map(x)});F.length&&c.push({segs:F,closed:k.closed})}}}finally{o.remove()}l.querySelector("text")&&u++;let d=1/0,f=1/0,g=-1/0,y=-1/0,p=m=>{d=Math.min(d,m[0]),g=Math.max(g,m[0]),f=Math.min(f,m[1]),y=Math.max(y,m[1])};for(let m of c)for(let _ of m.segs)(_.k==="L"?[_.a,_.b]:_.p).forEach(p);for(let m of h)p([m.c[0]-m.r,m.c[1]-m.r]),p([m.c[0]+m.r,m.c[1]+m.r]);if(!Number.isFinite(d))throw new Error("Nell'SVG non ci sono forme da importare (i testi vanno convertiti in tracciati)");return{loops:c,circles:h,box:{x0:d,y0:f,x1:g,y1:y,w:g-d,h:y-f},skipped:u}}function om(n,t={}){let e=t.scale||1,{box:i}=n,s=t.anchor==="corner"?i.x0:(i.x0+i.x1)/2,r=t.anchor==="corner"?i.y0:(i.y0+i.y1)/2,a=y=>[(y[0]-s)*e,(y[1]-r)*e],o=[],l=0,c=y=>`${y}${++l+1e5}`,h=t.fixed!==!1,u=y=>{let p=c("p");return o.push({id:p,type:"point",x:y[0],y:y[1],fixed:h}),p},d=0,f=0,g=0;for(let y of n.circles){let p=u(a(y.c));o.push({id:c("k"),type:"circle",c_id:p,radius:y.r*e}),g++}for(let y of n.loops){let p=[];for(let x of y.segs)if(x.k==="L"){let E=a(x.a),C=a(x.b);Dn(E,C)>1e-6&&p.push({k:"L",a:E,b:C})}else iu(x.p.map(a),p,0);if(!p.length)continue;let m=y.closed||Dn(p[0].a,p[p.length-1].b)<1e-6;m&&Dn(p[0].a,p[p.length-1].b)>1e-6&&p.push({k:"L",a:p[p.length-1].b,b:p[0].a});let _=u(p[0].a),M=_;p.forEach((x,E)=>{let v=E===p.length-1&&m?_:u(x.b);if(x.k==="L")o.push({id:c("l"),type:"line",p1_id:M,p2_id:v}),d++;else{let A=u(x.c),B=lm(Rc(x.m,x.a),Rc(x.b,x.m))>0,[k,F,V,Q]=B?[M,v,x.a,x.b]:[v,M,x.b,x.a];o.push({id:c("a"),type:"arc",c_id:A,radius:x.r,start_id:k,end_id:F,start_angle:Math.atan2(V[1]-x.c[1],V[0]-x.c[0]),end_angle:Math.atan2(Q[1]-x.c[1],Q[0]-x.c[0])}),f++}M=v})}return{geo:o,stats:{lines:d,arcs:f,circles:g}}}function Hb(n,t,e,i,s,r){let a=parseFloat(s),o=parseFloat(r);return Number.isNaN(a)&&(a=Number.isNaN(o)?0:o),Number.isNaN(o)&&(o=a),a=Math.min(a,e/2),o=Math.min(o,i/2),a>0&&o>0?`M${n+a} ${t}H${n+e-a}A${a} ${o} 0 0 1 ${n+e} ${t+o}V${t+i-o}A${a} ${o} 0 0 1 ${n+e-a} ${t+i}H${n+a}A${a} ${o} 0 0 1 ${n} ${t+i-o}V${t+o}A${a} ${o} 0 0 1 ${n+a} ${t}Z`:`M${n} ${t}H${n+e}V${t+i}H${n}Z`}function nm(n,t,e,i){return`M${n+e} ${t}A${e} ${i} 0 0 1 ${n} ${t+i}A${e} ${i} 0 0 1 ${n-e} ${t}A${e} ${i} 0 0 1 ${n} ${t-i}A${e} ${i} 0 0 1 ${n+e} ${t}Z`}function Vb(n){let t=String(n).match(/[MmLlHhVvCcSsQqTtAaZz]|[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g)||[],e=[],i=0,s="",r=[0,0],a=[0,0],o=null,l=null,c=null,h=()=>parseFloat(t[i++]),u=()=>i<t.length&&!/^[A-Za-z]$/.test(t[i]),d=y=>{c={segs:[],closed:!1},e.push(c),a=y,r=y},f=y=>{c||d(r),c.segs.push({k:"L",a:r,b:y}),r=y},g=(y,p,m)=>{c||d(r),c.segs.push({k:"C",p:[r,y,p,m]}),r=m};for(;i<t.length;){/^[A-Za-z]$/.test(t[i])&&(s=t[i++]);let y=s===s.toLowerCase(),p=(_,M)=>y?[r[0]+_,r[1]+M]:[_,M],m=s.toUpperCase();if(m==="Z"){c&&(Dn(r,a)>1e-9&&c.segs.push({k:"L",a:r,b:a}),c.closed=!0),r=a,c=null,o=l=null;continue}if(!u()){i++;continue}if(m==="M"){d(p(h(),h())),s=y?"l":"L",o=l=null;continue}if(m==="L")f(p(h(),h())),o=l=null;else if(m==="H"){let _=h();f([y?r[0]+_:_,r[1]]),o=l=null}else if(m==="V"){let _=h();f([r[0],y?r[1]+_:_]),o=l=null}else if(m==="C"){let _=p(h(),h()),M=p(h(),h()),x=p(h(),h());g(_,M,x),o=M,l=null}else if(m==="S"){let _=o?[2*r[0]-o[0],2*r[1]-o[1]]:r,M=p(h(),h()),x=p(h(),h());g(_,M,x),o=M,l=null}else if(m==="Q"||m==="T"){let _=m==="Q"?p(h(),h()):l?[2*r[0]-l[0],2*r[1]-l[1]]:r,M=p(h(),h()),x=r;g([x[0]+2/3*(_[0]-x[0]),x[1]+2/3*(_[1]-x[1])],[M[0]+2/3*(_[0]-M[0]),M[1]+2/3*(_[1]-M[1])],M),l=_,o=null}else if(m==="A"){let _=Math.abs(h()),M=Math.abs(h()),x=h(),E=h(),C=h(),v=p(h(),h());for(let A of Gb(r,v,_,M,x,E,C))g(A[0],A[1],A[2]);(!_||!M)&&f(v),r=v,o=l=null}else i++}return e.filter(y=>y.segs.length)}function Gb(n,t,e,i,s,r,a){if(!e||!i||Dn(n,t)<1e-12)return[];let o=s*Math.PI/180,l=Math.cos(o),c=Math.sin(o),h=(n[0]-t[0])/2,u=(n[1]-t[1])/2,d=l*h+c*u,f=-c*h+l*u,g=d*d/(e*e)+f*f/(i*i);g>1&&(e*=Math.sqrt(g),i*=Math.sqrt(g));let y=e*e*i*i-e*e*f*f-i*i*d*d,p=e*e*f*f+i*i*d*d,m=Math.sqrt(Math.max(0,y/p));r===a&&(m=-m);let _=m*e*f/i,M=-m*i*d/e,x=l*_-c*M+(n[0]+t[0])/2,E=c*_+l*M+(n[1]+t[1])/2,C=(G,tt,Y,ht)=>Math.atan2(G*ht-tt*Y,G*Y+tt*ht),v=C(1,0,(d-_)/e,(f-M)/i),A=C((d-_)/e,(f-M)/i,(-d-_)/e,(-f-M)/i);!a&&A>0&&(A-=2*Math.PI),a&&A<0&&(A+=2*Math.PI);let B=Math.max(1,Math.ceil(Math.abs(A)/(Math.PI/2)-1e-9)),k=A/B,F=4/3*Math.tan(k/4),V=G=>[x+e*Math.cos(G)*l-i*Math.sin(G)*c,E+e*Math.cos(G)*c+i*Math.sin(G)*l],Q=G=>[-e*Math.sin(G)*l-i*Math.cos(G)*c,-e*Math.sin(G)*c+i*Math.cos(G)*l],U=[];for(let G=0;G<B;G++){let tt=v+G*k,Y=tt+k,ht=V(tt),$=V(Y),lt=Q(tt),dt=Q(Y);U.push([[ht[0]+F*lt[0],ht[1]+F*lt[1]],[$[0]-F*dt[0],$[1]-F*dt[1]],G===B-1?t:$])}return U}function sm(n,t){let e=1-t,i=e*e*e,s=3*e*e*t,r=3*e*t*t,a=t*t*t;return[i*n[0][0]+s*n[1][0]+r*n[2][0]+a*n[3][0],i*n[0][1]+s*n[1][1]+r*n[2][1]+a*n[3][1]]}function Wb(n,t){let e=(c,h)=>[c[0]+(h[0]-c[0])*t,c[1]+(h[1]-c[1])*t],i=e(n[0],n[1]),s=e(n[1],n[2]),r=e(n[2],n[3]),a=e(i,s),o=e(s,r),l=e(a,o);return[[n[0],i,a,l],[l,o,r,n[3]]]}function iu(n,t,e){let i=n[0],s=n[3],r=Dn(i,s);if(Math.max(rm(n[1],i,s),rm(n[2],i,s))<=.02){r>1e-6&&t.push({k:"L",a:i,b:s});return}let o=sm(n,.5),l=$b(i,o,s);if(l&&r>1e-6){let u=0;for(let d=1;d<10;d++){let f=sm(n,d/10);u=Math.max(u,Math.abs(Dn(f,l.c)-l.r))}if(u<=.02||e>14){t.push({k:"A",a:i,b:s,m:o,c:l.c,r:l.r});return}}else if(e>14){t.push({k:"L",a:i,b:s});return}let[c,h]=Wb(n,.5);iu(c,t,e+1),iu(h,t,e+1)}var Dn=(n,t)=>Math.hypot(n[0]-t[0],n[1]-t[1]),Rc=(n,t)=>[n[0]-t[0],n[1]-t[1]],lm=(n,t)=>n[0]*t[1]-n[1]*t[0];function rm(n,t,e){let i=Dn(t,e);return i<1e-12?Dn(n,t):Math.abs(lm(Rc(e,t),Rc(n,t)))/i}function $b(n,t,e){let i=2*(n[0]*(t[1]-e[1])+t[0]*(e[1]-n[1])+e[0]*(n[1]-t[1]));if(Math.abs(i)<1e-12)return null;let s=n[0]*n[0]+n[1]*n[1],r=t[0]*t[0]+t[1]*t[1],a=e[0]*e[0]+e[1]*e[1],o=(s*(t[1]-e[1])+r*(e[1]-n[1])+a*(n[1]-t[1]))/i,l=(s*(e[0]-t[0])+r*(n[0]-e[0])+a*(t[0]-n[0]))/i,c=Math.hypot(n[0]-o,n[1]-l);return c>1e6?null:{c:[o,l],r:c}}var Pc={apiKey:"AIzaSyAL-1FJzLz0u3tZybk4SQiA_9cOJT3-MSg",authDomain:"officina-dee34.firebaseapp.com",databaseURL:"https://officina-dee34-default-rtdb.europe-west1.firebasedatabase.app",projectId:"officina-dee34",storageBucket:"officina-dee34.firebasestorage.app",messagingSenderId:"1067111827646",appId:"1:1067111827646:web:22600688832cc5d80cf6ef"};var Xb="https://www.gstatic.com/firebasejs/10.12.2/",qb=15e6,Ic=()=>!!(globalThis.__officinaFakeCloud||Pc.apiKey&&!Pc.apiKey.startsWith("INSERISCI"));async function jb(){let n=c=>import(Xb+c),[{initializeApp:t},e,i]=await Promise.all([n("firebase-app.js"),n("firebase-auth.js"),n("firebase-database.js")]),s=t(Pc),r=e.getAuth(s),a=i.getDatabase(s),o=null,l=c=>i.ref(a,`users/${o}/${c}`);return{onUser(c){e.getRedirectResult(r).catch(()=>{}),e.onAuthStateChanged(r,h=>{o=h?h.uid:null,c(h?{uid:h.uid,name:h.displayName,email:h.email,photo:h.photoURL}:null)})},async signIn(){let c=new e.GoogleAuthProvider;try{await e.signInWithPopup(r,c)}catch(h){if(/popup|cancelled|operation-not-supported/i.test(String(h&&h.code)))await e.signInWithRedirect(r,c);else throw h}},signOut:()=>e.signOut(r),async list(){let c=await i.get(l("meta"));return Object.entries(c.val()||{}).map(([h,u])=>({id:h,...u}))},async getData(c){return(await i.get(l(`data/${c}`))).val()},async claim(c,h,u){let d=null,f=await i.runTransaction(l(`meta/${c}`),g=>{if(d=g,(g&&g.rev||0)===h)return{...u,rev:h+1}},{applyLocally:!1});return f.committed?{ok:!0,rev:h+1}:{ok:!1,remote:f.snapshot.val()||d}},putData:(c,h,u)=>i.set(l(`data/${c}`),{rev:h,json:u}),async remove(c){await i.remove(l(`data/${c}`)),await i.remove(l(`meta/${c}`))},watch(c,h){return i.onValue(l(`meta/${c}`),u=>{u.exists()&&h(u.val())})}}}function Yb(){let n=(t,...e)=>globalThis.__officinaFakeCloud(t,...e);return{onUser(t){this._cb=t,n("user").then(e=>t(e))},async signIn(){let t=await n("signIn");this._cb(t)},async signOut(){await n("signOut"),this._cb(null)},list:()=>n("list"),getData:t=>n("getData",t),claim:(t,e,i)=>n("claim",t,e,i),putData:(t,e,i)=>n("putData",t,e,i),remove:t=>n("remove",t),watch(t,e){let i=null,s=setInterval(async()=>{let r=await n("meta",t);r&&JSON.stringify(r)!==i&&(i=JSON.stringify(r),e(r))},300);return()=>clearInterval(s)}}}var Lc=class{constructor(t){this.d=t,this.user=null,this.backend=null,this.timers=new Map,this.busy=new Set,this.unwatch=null,this.status={state:Ic()?"out":"off"}}setStatus(t,e={}){this.status={state:t,...e},this.d.onStatus(this.status)}async start(){if(!Ic()){this.setStatus("off");return}try{this.backend=globalThis.__officinaFakeCloud?Yb():await jb()}catch{this.setStatus("error",{msg:"Servizio online non raggiungibile"});return}this.backend.onUser(async t=>{if(this.user=t,this.d.onUser(t),!t){this.setStatus("out"),this.unwatch&&(this.unwatch(),this.unwatch=null);return}await this.syncAll(),this.watch(this.d.currentId())}),window.addEventListener("online",()=>{this.user&&this.syncAll()})}async signIn(){if(this.backend||await this.start(),!this.backend)throw new Error("Salvataggio online non disponibile");await this.backend.signIn()}async signOut(){this.backend&&await this.backend.signOut()}schedulePush(t,e=1500){this.user&&(clearTimeout(this.timers.get(t)),this.timers.set(t,setTimeout(()=>this.push(t),e)),this.setStatus("pending"))}async push(t){if(!this.user||this.busy.has(t)){this.user&&this.schedulePush(t,1e3);return}let e=await this.d.store.loadProject(t);if(!e||!e.dirty||!e.doc){this.setStatus("ok");return}let i=JSON.stringify(e.doc);if(i.length>qb){this.setStatus("warn",{msg:`\xAB${e.name}\xBB \xE8 troppo grande per il salvataggio online (oltre 15 MB, di solito per STL importati)`});return}if(!navigator.onLine){this.setStatus("offline");return}this.busy.add(t),this.setStatus("sync");try{let s={name:e.name,updated:e.updated,size:i.length},r=await this.backend.claim(t,e.rev||0,s);if(!r.ok){let l=await this.d.askConflict(e,r.remote);if(l==="remote"){await this.pull(t,!0);return}if(l==="both"){let c={...e,id:this.d.store.newId(),name:`${e.name} (questo dispositivo)`,rev:0,dirty:!0};await this.d.store.saveProject(c,{keepTime:!0}),await this.pull(t,!0),this.busy.delete(t),await this.push(c.id);return}if(r=await this.backend.claim(t,r.remote&&r.remote.rev||0,s),!r.ok)throw new Error("Il progetto \xE8 cambiato di nuovo online: riprova")}await this.backend.putData(t,r.rev,i);let a=await this.d.store.loadProject(t),o=a&&a.updated!==e.updated;if(await this.d.store.saveProject({...a||e,rev:r.rev,dirty:!!o},{keepTime:!0}),this.d.onSynced&&this.d.onSynced(t,r.rev),o){this.busy.delete(t),this.schedulePush(t,500);return}this.setStatus("ok")}catch(s){this.setStatus(navigator.onLine?"error":"offline",{msg:s.message})}finally{this.busy.delete(t)}}async pull(t,e=!1){let i=await this.d.store.loadProject(t);if(i&&i.dirty&&!e)return!1;let s=null;for(let o=0;o<8;o++){s=await this.backend.getData(t);let c=(await this.backend.list()).find(h=>h.id===t);if(s&&c&&s.rev>=c.rev)break;await new Promise(h=>setTimeout(h,400))}if(!s)return!1;let r=JSON.parse(s.json),a={id:t,name:r.name||i&&i.name||"Progetto",doc:r,rev:s.rev,dirty:!1,remoteOnly:!1,updated:Date.now()};return await this.d.store.saveProject(a,{keepTime:!0}),this.d.onRemoteDoc(t,r,s.rev),!0}async syncAll(){if(this.user){this.setStatus("sync");try{let t=await this.backend.list(),e=await this.d.store.listFull();for(let i of t){let s=e.find(r=>r.id===i.id);s?(i.rev||0)>(s.rev||0)&&!s.remoteOnly&&(s.dirty?await this.push(i.id):s.id===this.d.currentId()?await this.pull(i.id):await this.d.store.saveProject({...s,remoteOnly:!0,doc:s.doc,staleRev:i.rev},{keepTime:!0})):await this.d.store.saveProject({id:i.id,name:i.name,doc:null,rev:0,dirty:!1,remoteOnly:!0,updated:i.updated},{keepTime:!0})}for(let i of e){if(i.remoteOnly)continue;let s=t.find(r=>r.id===i.id);!s&&!i.dirty&&await this.d.store.saveProject({...i,dirty:!0},{keepTime:!0}),(!s||i.dirty)&&await this.push(i.id)}this.status.state==="sync"&&this.setStatus("ok")}catch(t){this.setStatus(navigator.onLine?"error":"offline",{msg:t.message})}}}watch(t){this.unwatch&&(this.unwatch(),this.unwatch=null),!(!this.user||!t)&&(this.unwatch=this.backend.watch(t,async e=>{let i=await this.d.store.loadProject(t);!i||(e.rev||0)<=(i.rev||0)||this.busy.has(t)||(i.dirty?await this.push(t):await this.pull(t))}))}async ensureLocal(t){let e=await this.d.store.loadProject(t);if(e&&!e.remoteOnly&&e.doc)return e;if(!this.user)throw new Error("Questo progetto \xE8 online: accedi per aprirlo");if(!navigator.onLine&&!(e&&e.doc))throw new Error("Serve la connessione per scaricare questo progetto");return e&&e.doc&&!navigator.onLine?{...e,remoteOnly:!1}:(await this.pull(t,!0),this.d.store.loadProject(t))}async remove(t){if(this.user&&this.backend)try{await this.backend.remove(t)}catch{}}};var kc=class{constructor(t){this.worker=new Worker(t,{type:"module"}),this.seq=0,this.pending=new Map,this.worker.onmessage=({data:e})=>{let i=this.pending.get(e.id);i&&(this.pending.delete(e.id),e.ok?i.resolve(e.result):i.reject(new Error(e.error)))},this.worker.onerror=e=>{for(let i of this.pending.values())i.reject(new Error(e.message||"Errore del motore CAD"));this.pending.clear()}}call(t,e={}){let i=++this.seq;return new Promise((s,r)=>{this.pending.set(i,{resolve:s,reject:r}),this.worker.postMessage({id:i,cmd:t,args:e})})}};var cm=[["new","Nuovo corpo"],["join","Unisci"],["cut","Taglia"],["intersect","Interseca"]],dm=[["X","X"],["Y","Y"],["Z","Z"]],um={sketch:"Schizzo",extrude:"Estrusione",revolve:"Rivoluzione",fillet:"Raccordo",chamfer:"Smusso",shell:"Guscio",hole:"Foro",pattern:"Serie",mirror:"Specchio",combine:"Combina",move:"Sposta",import:"Importazione"},nu={sketch:"sketch",extrude:"extrude",revolve:"revolve",fillet:"fillet",chamfer:"chamfer",shell:"shell",hole:"hole",pattern:"pattern",mirror:"mirror",combine:"combine",move:"move",import:"import"},Dc=(n,t,e=!1,i=[])=>({k:n,kind:"seg",label:t,options:[...e?[["none","\u2014"]]:[],...dm,...i],get:s=>s[n]==="none"||!s[n]?"none":s[n].world||(s[n].edge?"edge":s[n].line?"line":"Z"),set:(s,r)=>{s[n]=r==="none"?"none":r==="edge"?{edge:null}:r==="line"?{line:null}:{world:r}}}),hm=(n,t)=>[{k:"srcMode",kind:"seg",label:"Cosa ripetere",options:[["feature","Feature"],["body","Corpo"]],get:e=>e.src&&e.src.body!==void 0?"body":"feature",set:(e,i)=>{e.src=i==="body"?{body:null}:{feature:t.toolFeatures.length?t.toolFeatures[t.toolFeatures.length-1].id:null}}},n.src&&n.src.body!==void 0?{k:"srcBody",kind:"pick",pick:"body",label:"Corpo",get:e=>e.src.body?[e.src.body]:[],set:(e,i)=>{e.src={body:i[i.length-1]||null}}}:{k:"srcFeature",kind:"select",label:"Feature",options:t.toolFeatures.map(e=>[e.id,e.name]),get:e=>e.src&&e.src.feature,set:(e,i)=>{e.src={feature:i}}}],fm={extrude:{title:"Estrudi",init:n=>({type:"extrude",sketch:n.autoRegions?.sketch||null,regions:n.autoRegions?.regions||[],dist:"10",mode:"one",dist2:"10",flip:!1,op:n.hasBodies?"join":"new",targets:[]}),fields:n=>[{k:"regions",kind:"pick",pick:"region",multi:!0,label:"Profili",hint:"Tocca dentro le forme azzurre per sceglierle (tocca di nuovo per toglierle)"},{k:"dist",kind:"num",label:n.mode==="sym"?"Distanza totale":"Distanza",unit:"mm"},{k:"mode",kind:"seg",label:"Estensione",options:[["one","Un lato"],["sym","Simmetrica"],["two","Due lati"]]},n.mode==="two"&&{k:"dist2",kind:"num",label:"Distanza lato 2",unit:"mm"},{k:"flip",kind:"toggle",label:"Inverti direzione"},{k:"op",kind:"seg",label:"Operazione",options:cm},n.op!=="new"&&{k:"targets",kind:"pick",pick:"body",multi:!0,label:"Corpi coinvolti",hint:"Vuoto = automatico",optional:!0}]},revolve:{title:"Rivoluzione",init:n=>({type:"revolve",sketch:n.autoRegions?.sketch||null,regions:n.autoRegions?.regions||[],axis:{world:"Z"},angle:"360",flip:!1,op:n.hasBodies?"join":"new",targets:[]}),fields:n=>[{k:"regions",kind:"pick",pick:"region",multi:!0,label:"Profili",hint:"Tocca dentro le forme azzurre da far ruotare"},Dc("axis","Asse",!1,[["line","Linea"]]),n.axis&&n.axis.line!==void 0&&{k:"axisLine",kind:"pick",pick:"sketchLine",label:"Linea asse",hint:"Tocca una linea dello schizzo",get:t=>t.axis.line?[t.axis.line]:[],set:(t,e)=>{t.axis={line:e[e.length-1]||null}}},{k:"angle",kind:"num",label:"Angolo",unit:"\xB0"},{k:"flip",kind:"toggle",label:"Inverti verso"},{k:"op",kind:"seg",label:"Operazione",options:cm},n.op!=="new"&&{k:"targets",kind:"pick",pick:"body",multi:!0,label:"Corpi coinvolti",hint:"Vuoto = automatico",optional:!0}]},fillet:{title:"Raccordo",init:()=>({type:"fillet",edges:[],r:"2"}),fields:()=>[{k:"edges",kind:"pick",pick:"edge",multi:!0,label:"Spigoli",hint:"Tocca gli spigoli da arrotondare"},{k:"r",kind:"num",label:"Raggio",unit:"mm"}]},chamfer:{title:"Smusso",init:()=>({type:"chamfer",edges:[],d:"1"}),fields:()=>[{k:"edges",kind:"pick",pick:"edge",multi:!0,label:"Spigoli",hint:"Tocca gli spigoli da smussare"},{k:"d",kind:"num",label:"Distanza",unit:"mm"}]},shell:{title:"Guscio",init:()=>({type:"shell",faces:[],t:"2",outside:!1}),fields:()=>[{k:"faces",kind:"pick",pick:"face",multi:!0,label:"Facce da aprire",hint:"Tocca le facce da togliere"},{k:"t",kind:"num",label:"Spessore",unit:"mm"},{k:"outside",kind:"toggle",label:"Verso l'esterno"}]},hole:{title:"Foro",init:()=>({type:"hole",place:{face:null,pts:[]},dia:"5",depth:"10",through:!1,cbore:!1,cdia:"9",cdepth:"3",flip:!1}),fields:n=>[n.place?{k:"place",kind:"pick",pick:"facePoint",multi:!0,label:"Posizioni",hint:"Tocca una faccia piana dove forare (anche pi\xF9 punti)"}:{k:"note",kind:"note",text:"Le posizioni dei fori sono i punti dello schizzo collegato: modificalo per spostarli o quotarli."},{k:"dia",kind:"num",label:"Diametro",unit:"mm"},{k:"through",kind:"toggle",label:"Passante"},!n.through&&{k:"depth",kind:"num",label:"Profondit\xE0",unit:"mm"},{k:"cbore",kind:"toggle",label:"Lamatura"},n.cbore&&{k:"cdia",kind:"num",label:"Diametro lamatura",unit:"mm"},n.cbore&&{k:"cdepth",kind:"num",label:"Profondit\xE0 lamatura",unit:"mm"},{k:"flip",kind:"toggle",label:"Inverti direzione"}]},pattern:{title:"Serie",init:n=>({type:"pattern",kind:"rect",src:n.toolFeatures.length?{feature:n.toolFeatures[n.toolFeatures.length-1].id}:{body:n.lastBody||null},d1:{world:"X"},n1:"3",s1:"20",d2:"none",n2:"2",s2:"20",axis:{world:"Z"},n:"6",angle:"360",op:"join"}),fields:(n,t)=>[{k:"kind",kind:"seg",label:"Tipo",options:[["rect","Rettangolare"],["circ","Circolare"]]},...hm(n,t),...n.kind==="rect"?[Dc("d1","Direzione 1"),{k:"n1",kind:"num",label:"Quantit\xE0",unit:""},{k:"s1",kind:"num",label:"Passo",unit:"mm"},Dc("d2","Direzione 2",!0),n.d2&&n.d2!=="none"&&{k:"n2",kind:"num",label:"Quantit\xE0 2",unit:""},n.d2&&n.d2!=="none"&&{k:"s2",kind:"num",label:"Passo 2",unit:"mm"}]:[Dc("axis","Asse",!1,[["edge","Spigolo"]]),n.axis&&n.axis.edge!==void 0&&{k:"axisEdge",kind:"pick",pick:"edge",label:"Spigolo asse",hint:"Tocca uno spigolo dritto o circolare",get:e=>e.axis.edge?[e.axis.edge]:[],set:(e,i)=>{e.axis={edge:i[i.length-1]||null}}},{k:"n",kind:"num",label:"Quantit\xE0",unit:""},{k:"angle",kind:"num",label:"Angolo totale",unit:"\xB0"}],n.src&&n.src.body!==void 0&&{k:"op",kind:"seg",label:"Risultato",options:[["join","Unisci"],["new","Nuovi corpi"]]}]},mirror:{title:"Specchio",init:n=>({type:"mirror",src:n.toolFeatures.length?{feature:n.toolFeatures[n.toolFeatures.length-1].id}:{body:n.lastBody||null},plane:{std:"YZ"},op:"join"}),fields:(n,t)=>[...hm(n,t),{k:"planeMode",kind:"seg",label:"Piano",options:[["XY","XY"],["XZ","XZ"],["YZ","YZ"],["face","Faccia"]],get:e=>e.plane.face!==void 0?"face":e.plane.std,set:(e,i)=>{e.plane=i==="face"?{face:null}:{std:i}}},n.plane.face!==void 0&&{k:"planeFace",kind:"pick",pick:"planarFace",label:"Faccia piana",get:e=>e.plane.face?[e.plane.face]:[],set:(e,i)=>{e.plane={face:i[i.length-1]||null}}},n.src&&n.src.body!==void 0&&{k:"op",kind:"seg",label:"Risultato",options:[["join","Unisci"],["new","Nuovo corpo"]]}]},combine:{title:"Combina",init:()=>({type:"combine",target:null,tools:[],op:"join",keep:!1}),fields:()=>[{k:"targetPick",kind:"pick",pick:"body",label:"Corpo di destinazione",get:n=>n.target?[n.target]:[],set:(n,t)=>{n.target=t[t.length-1]||null}},{k:"tools",kind:"pick",pick:"body",multi:!0,label:"Corpi utensile"},{k:"op",kind:"seg",label:"Operazione",options:[["join","Unisci"],["cut","Taglia"],["intersect","Interseca"]]},{k:"keep",kind:"toggle",label:"Mantieni gli utensili"}]},move:{title:"Sposta",init:n=>({type:"move",bodies:n.lastBody?[n.lastBody]:[],dx:"0",dy:"0",dz:"0",raxis:"Z",angle:"0",cx:"0",cy:"0",cz:"0"}),fields:n=>[{k:"bodies",kind:"pick",pick:"body",multi:!0,label:"Corpi"},{k:"dx",kind:"num",label:"X",unit:"mm"},{k:"dy",kind:"num",label:"Y",unit:"mm"},{k:"dz",kind:"num",label:"Z",unit:"mm"},{k:"raxis",kind:"seg",label:"Rotazione attorno a",options:dm},{k:"angle",kind:"num",label:"Angolo",unit:"\xB0"},Number(n.angle)!==0&&{k:"cx",kind:"num",label:"Centro X",unit:"mm"},Number(n.angle)!==0&&{k:"cy",kind:"num",label:"Centro Y",unit:"mm"},Number(n.angle)!==0&&{k:"cz",kind:"num",label:"Centro Z",unit:"mm"}]}};function Oa(n){switch(n.type){case"extrude":case"revolve":return n.regions.length>0&&(n.type!=="revolve"||!n.axis||n.axis.line!==null);case"fillet":case"chamfer":return n.edges.length>0;case"shell":return n.faces.length>0;case"hole":return n.place?n.place.pts.length>0:!!n.sketch;case"pattern":case"mirror":return!!(n.src&&(n.src.feature||n.src.body))&&(n.type!=="mirror"||!n.plane||n.plane.face!==null);case"combine":return!!n.target&&n.tools.length>0;case"move":return n.bodies.length>0;default:return!0}}var Zb={sketch:'<path d="M4 20l4-1L19 8l-3-3L5 16z"/><path d="M14 7l3 3"/><path d="M3 21h8" opacity=".5"/>',extrude:'<path d="M4 15l8 4 8-4-8-4z"/><path d="M12 11V3"/><path d="M9 6l3-3 3 3"/><path d="M4 15v-3m16 3v-3" opacity=".5"/>',revolve:'<ellipse cx="12" cy="7" rx="7" ry="2.5"/><path d="M5 7v10c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V7"/><path d="M12 3v18" stroke-dasharray="2 2"/>',hole:'<path d="M3 9l9-5 9 5-9 5z"/><ellipse cx="12" cy="9" rx="3" ry="1.6"/><path d="M9 9v8m6-8v8"/><path d="M9 17c0 .9 1.3 1.6 3 1.6s3-.7 3-1.6"/>',fillet:'<path d="M4 20V10a6 6 0 016-6h10"/><path d="M4 4h4M4 4v4" opacity=".45"/>',chamfer:'<path d="M4 20V11l7-7h9"/><path d="M4 4h4M4 4v4" opacity=".45"/>',shell:'<path d="M3 8l9-4 9 4v9l-9 4-9-4z"/><path d="M7 9.5l5-2.2 5 2.2v6l-5 2.2-5-2.2z"/>',pattern:'<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1" opacity=".55"/><rect x="3" y="15" width="6" height="6" rx="1" opacity=".55"/><rect x="15" y="15" width="6" height="6" rx="1" opacity=".55"/>',mirror:'<path d="M12 2v20" stroke-dasharray="2 2"/><path d="M9 6L3 18h6z"/><path d="M15 6l6 12h-6z" opacity=".55"/>',combine:'<circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/>',move:'<path d="M12 3v18M3 12h18"/><path d="M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>',import:'<path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M4 17v3h16v-3"/>',export:'<path d="M12 15V3"/><path d="M7 8l5-5 5 5"/><path d="M4 17v3h16v-3"/>',params:'<path d="M10 4c-2 0-3 1-3 3v3H4m3 0h4M7 10v7c0 2-1 3-3 3"/><path d="M14 11l6 7M20 11l-6 7"/>',undo:'<path d="M9 7L4 12l5 5"/><path d="M4 12h11a5 5 0 010 10h-3"/>',redo:'<path d="M15 7l5 5-5 5"/><path d="M20 12H9a5 5 0 000 10h3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',tree:'<path d="M5 4h6M5 4v16M5 10h6M5 16h6"/><rect x="13" y="2" width="8" height="4" rx="1"/><rect x="13" y="8" width="8" height="4" rx="1"/><rect x="13" y="14" width="8" height="4" rx="1"/>',home:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',eye:'<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 6.1A10.8 10.8 0 0112 6c6.5 0 10 6 10 6a17 17 0 01-3.2 3.8M6.6 6.6C3.7 8.4 2 12 2 12s3.5 6 10 6c1.6 0 3-.4 4.3-.9"/>',body:'<path d="M3 8l9-5 9 5v8l-9 5-9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',check:'<path d="M4 12l5 5L20 6"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',line:'<path d="M4 20L20 4"/><circle cx="4" cy="20" r="1.8"/><circle cx="20" cy="4" r="1.8"/>',rect:'<rect x="4" y="6" width="16" height="12" rx="0.5"/>',circle:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="1.2"/>',arc:'<path d="M4 18a10 10 0 0116 0"/><circle cx="4" cy="18" r="1.8"/><circle cx="20" cy="18" r="1.8"/><circle cx="12" cy="8" r="1.5"/>',point:'<path d="M12 6v12M6 12h12"/><circle cx="12" cy="12" r="2.5"/>',dim:'<path d="M4 8v8M20 8v8M4 12h16"/><path d="M7 9l-3 3 3 3M17 9l3 3-3 3"/>',select:'<path d="M5 3l14 8-6 1.5L10 19z"/>',coincident:'<circle cx="9" cy="12" r="4"/><circle cx="15" cy="12" r="4"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/>',horizontal:'<path d="M3 12h18"/><path d="M7 8v8M17 8v8" opacity=".45"/>',vertical:'<path d="M12 3v18"/><path d="M8 7h8M8 17h8" opacity=".45"/>',parallel:'<path d="M8 20L14 4M12 20L18 4"/>',perpendicular:'<path d="M4 20h16M12 20V4"/><path d="M12 16h4v4" opacity=".6"/>',tangent:'<circle cx="12" cy="14" r="6"/><path d="M3 8h18"/>',equal:'<path d="M5 9h14M5 15h14"/>',midpoint:'<path d="M3 16L21 8"/><circle cx="12" cy="12" r="2.4" fill="currentColor"/>',concentric:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/>',symmetric:'<path d="M12 3v18" stroke-dasharray="2 2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="12" r="2"/>',fix:'<path d="M8 4h8l-1 6 3 3H6l3-3z"/><path d="M12 13v8"/>',construction:'<path d="M4 20L20 4" stroke-dasharray="3 2.5"/>',offset:'<rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7.5" y="7.5" width="9" height="9" rx="1" stroke-dasharray="2.5 2"/>',trim:'<path d="M3 12h7M14 12h7" /><path d="M10 12h4" stroke-dasharray="1.5 1.5" opacity=".5"/><path d="M12 4v4M12 16v4"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><path d="M8.5 16.5L15 9M15.5 16.5L9 9"/>',select3:'<path d="M5 3l14 8-6 1.5L10 19z"/><path d="M15 17h6M18 14v6"/>',cloud:'<path d="M7 18h10a4 4 0 00.6-7.95A6 6 0 006.1 9.2 4.5 4.5 0 007 18z"/>',cloudok:'<path d="M7 18h10a4 4 0 00.6-7.95A6 6 0 006.1 9.2 4.5 4.5 0 007 18z"/><path d="M9.5 13.5l2 2 3.5-4"/>',cloudup:'<path d="M7 18h10a4 4 0 00.6-7.95A6 6 0 006.1 9.2 4.5 4.5 0 007 18z"/><path d="M12 16v-5M9.8 13l2.2-2.2 2.2 2.2"/>',cloudoff:'<path d="M7 18h10a4 4 0 00.6-7.95A6 6 0 006.1 9.2 4.5 4.5 0 007 18z"/><path d="M4 4l16 16"/>',cloudwarn:'<path d="M7 18h10a4 4 0 00.6-7.95A6 6 0 006.1 9.2 4.5 4.5 0 007 18z"/><path d="M12 10.5v3M12 15.6v.1"/>',cloudsync:'<path d="M7 18h10a4 4 0 00.6-7.95A6 6 0 006.1 9.2 4.5 4.5 0 007 18z"/><path d="M9.5 13a2.5 2.5 0 014.6-1.3M14.5 14a2.5 2.5 0 01-4.6 1.3"/>',polygon:'<path d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9z"/>',magnet:'<path d="M6 3v8a6 6 0 0012 0V3"/><path d="M6 3h4v8a2 2 0 004 0V3h4"/><path d="M6 7h4M14 7h4"/>',svg:'<path d="M4 18c3-10 6-12 8-6s5 4 8-6"/><circle cx="4" cy="18" r="1.6"/><circle cx="20" cy="6" r="1.6"/>',finish:'<path d="M4 12l5 5L20 6"/>',view:'<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/>',grid:'<path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"/>',plus:'<path d="M12 5v14M5 12h14"/>',more:'<circle cx="5" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="19" cy="12" r="1.6" fill="currentColor"/>',rollback:'<path d="M6 4v16"/><path d="M20 12H10"/><path d="M14 8l-4 4 4 4"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',folder:'<path d="M3 6a1 1 0 011-1h5l2 2h9a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>'};function le(n,t=22){return`<svg class="ic" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Zb[n]||""}</svg>`}var Uc={};Hm(Uc,{deleteProject:()=>au,lastProjectId:()=>ou,listFull:()=>ru,listProjects:()=>Nc,loadProject:()=>pr,newDoc:()=>za,newId:()=>vs,saveProject:()=>Ba,setLastProjectId:()=>lu});var Jb="officina",su="projects";function Kb(){return new Promise((n,t)=>{let e=indexedDB.open(Jb,1);e.onupgradeneeded=()=>e.result.createObjectStore(su,{keyPath:"id"}),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function Fa(n,t){let e=await Kb();return new Promise((i,s)=>{let r=e.transaction(su,n),a=r.objectStore(su),o=t(a);r.oncomplete=()=>i(o&&o.result),r.onerror=()=>s(r.error)})}async function Nc(){return(await Fa("readonly",t=>t.getAll())||[]).map(t=>({id:t.id,name:t.name,updated:t.updated,features:t.doc?t.doc.features.length:null,dirty:!!t.dirty,remoteOnly:!!t.remoteOnly,rev:t.rev||0})).sort((t,e)=>e.updated-t.updated)}var ru=async()=>await Fa("readonly",n=>n.getAll())||[],pr=n=>Fa("readonly",t=>t.get(n)),Ba=(n,{keepTime:t=!1}={})=>Fa("readwrite",e=>e.put({...n,updated:t&&n.updated?n.updated:Date.now()})),au=n=>Fa("readwrite",t=>t.delete(n));function vs(){return Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4)}function za(n="Senza titolo"){return{app:"officina",v:1,name:n,params:[],features:[],rollback:null,ui:{hidden:{},colors:{},names:{},sketchVis:{}}}}function ou(){try{return localStorage.getItem("officina.last")}catch{return null}}function lu(n){try{localStorage.setItem("officina.last",n)}catch{}}var $t=(n,t=document)=>t.querySelector(n),Wt=n=>String(n??"").replace(/[<>&"]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[t]),_u=n=>JSON.parse(JSON.stringify(n)),Ga=()=>"f"+Math.random().toString(36).slice(2,9),I={project:null,doc:null,undo:[],redo:[],model:null,base:null,preview:null,mode:"loading",cmd:null,sketch:null,selBody:null},oe=new yc($t("#viewport")),Yt=new Ec({host:$t("#viewport"),viewport:oe,onChange:n=>pM(n),toast:we,promptValue:RM,getScope:()=>Oi(I.doc.params).scope}),Wa=new kc(new URL("./worker.js",import.meta.url)),pi=new Lc({store:Uc,toast:we,currentId:()=>I.project&&I.project.id,onStatus:()=>pm(),onUser:()=>pm(),onSynced:(n,t)=>{I.project&&I.project.id===n&&(I.project.rev=t)},onRemoteDoc:(n,t,e)=>{!I.project||I.project.id!==n||(I.pendingRemote={doc:t,rev:e},vm())},askConflict:(n,t)=>Qb(n,t)});function vm(){let n=I.pendingRemote;!n||I.mode!=="model"||Fc||(I.pendingRemote=null,JSON.stringify(I.doc)===I.savedJson&&(I.undo.push(JSON.stringify(I.doc)),I.redo=[],I.doc=bm(n.doc),I.savedJson=JSON.stringify(I.doc),I.project.rev=n.rev,I.project.name=I.doc.name,we("Progetto aggiornato da un altro dispositivo (Annulla per tornare indietro)","ok"),Un(),Fi()))}function Qb(n,t){let e=i=>i?new Date(i).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}):"?";return new Promise(i=>{an(`<h2>Modificato su due dispositivi</h2>
      <p class="note">\xAB${Wt(n.name)}\xBB \xE8 stato salvato su un altro dispositivo (${e(t&&t.updated)}) mentre lo modificavi qui (${e(n.updated)}). Quale versione tieni?</p>
      <div class="conflict">
        <button class="btn primary" data-c="local">Questo dispositivo<small>sovrascrive la versione online</small></button>
        <button class="btn" data-c="remote">L'altro dispositivo<small>le modifiche fatte qui si perdono</small></button>
        <button class="btn" data-c="both">Tieni entrambe<small>questa diventa una copia separata</small></button>
      </div>`,(a,o)=>{a.addEventListener("click",l=>{let c=l.target.closest("[data-c]");c&&(o(),i(c.dataset.c))})});let s=$t("#modal"),r=new MutationObserver(()=>{s.hidden&&(r.disconnect(),i("both"))});r.observe(s,{attributes:!0})})}var uu={out:["cloud","Accedi per salvare online"],sync:["cloudsync","Sincronizzo\u2026"],ok:["cloudok","Salvato online"],pending:["cloudup","Da caricare"],offline:["cloudoff","Offline: caricher\xF2 al ritorno della rete"],warn:["cloudwarn",""],error:["cloudwarn","Errore di sincronizzazione"]};function pm(){let n=$t("#btnCloud");if(!n)return;let t=pi.status;if(n.hidden=t.state==="off",t.state==="off")return;let[e,i]=uu[t.state]||uu.out;n.innerHTML=le(e,22),n.title=t.msg||i,n.className=`icon cloud ${t.state}`}function xm(){let n=pi.user,t=pi.status;an(`<h2>Salvataggio online</h2>
    ${n?`<div class="acct">${n.photo?`<img src="${Wt(n.photo)}" alt="" referrerpolicy="no-referrer">`:""}<div><b>${Wt(n.name||"")}</b><small>${Wt(n.email||"")}</small></div></div>
      <p class="note">${Wt(t.msg||(uu[t.state]||[])[1]||"")}. I progetti si salvano online da soli e li ritrovi su ogni dispositivo in cui accedi con questo account. Solo tu puoi vederli.</p>
      <footer><button class="btn" data-out>Esci</button><span class="grow"></span><button class="btn" data-syncnow>Sincronizza ora</button><button class="btn primary" data-close>Chiudi</button></footer>`:`<p class="note">Accedi con Google per ritrovare i tuoi progetti su PC, iPad e telefono. Ogni modifica si salva online da sola; senza rete continui a lavorare e si carica al ritorno della connessione. Solo tu puoi vedere i tuoi progetti.</p>
      <footer><button class="btn" data-close>Non ora</button><button class="btn primary" data-in>Accedi con Google</button></footer>`}`,(e,i)=>{e.addEventListener("click",async s=>{let r=s.target.closest("button");if(r)try{r.dataset.in!==void 0?(i(),await pi.signIn()):r.dataset.out!==void 0?(i(),await pi.signOut(),we("Disconnesso: i progetti restano su questo dispositivo")):r.dataset.syncnow!==void 0&&(i(),await pi.syncAll())}catch(a){we("Accesso non riuscito: "+a.message,"warn")}})})}async function tM(){du("Carico il motore CAD (circa 20 MB la prima volta)\u2026");try{await Promise.all([Yp(new URL("./planegcs.wasm",import.meta.url).href),Wa.call("init")])}catch(e){du("Il motore CAD non si \xE8 avviato: "+e.message+". Ricarica la pagina.",!0);return}let n=null,t=ou();if(t)try{n=await pr(t)}catch{}n&&!n.doc&&(n=(await ru()).find(e=>e.doc)||null),n||(n={id:vs(),name:"Primo progetto",doc:za("Primo progetto"),dirty:!0}),await xs(n),du(null),pi.start()}async function xs(n){if(!n.doc)try{n=await pi.ensureLocal(n.id)}catch(t){we(t.message,"warn");return}I.project={id:n.id,name:n.name,rev:n.rev||0},I.doc=bm(n.doc),I.savedJson=JSON.stringify(I.doc),I.undo=[],I.redo=[],I.mode="model",I.cmd=null,I.pendingRemote=null,lu(n.id),await Ba({id:n.id,name:n.name,doc:I.doc,rev:n.rev||0,dirty:n.dirty!==void 0?!!n.dirty:!0},{keepTime:!!n.updated}),(n.dirty||n.dirty===void 0)&&pi.schedulePush(n.id),pi.watch(n.id),oe.setGrid(I.doc.ui.grid!==!1),Un(),await Fi(),oe.fit(!1)}function bm(n){n.ui||={};for(let t of["hidden","colors","names","sketchVis"])n.ui[t]||={};return n.params||=[],n.rollback===void 0&&(n.rollback=null),n}var mm=null;function yu(){clearTimeout(mm),mm=setTimeout(()=>(I.savedJson=JSON.stringify(I.doc),Ba({id:I.project.id,name:I.doc.name,doc:I.doc,rev:I.project.rev||0,dirty:!0})).then(()=>pi.schedulePush(I.project.id)).catch(()=>we("Salvataggio non riuscito","warn")),500)}function Ze(n,{rebuild:t=!0}={}){I.undo.push(JSON.stringify(I.doc)),I.undo.length>100&&I.undo.shift(),I.redo=[],n(I.doc),yu(),rn(),t?Fi():(Su(),Xc())}function Mm(){if(I.mode==="sketch"){Yt.undo();return}I.mode!=="model"||!I.undo.length||(I.redo.push(JSON.stringify(I.doc)),I.doc=JSON.parse(I.undo.pop()),yu(),rn(),Fi())}function fu(){if(I.mode==="sketch"){Yt.redo();return}I.mode!=="model"||!I.redo.length||(I.undo.push(JSON.stringify(I.doc)),I.doc=JSON.parse(I.redo.pop()),yu(),rn(),Fi())}var Fc=!1,cu=!1;async function Fi(){if(Fc){cu=!0;return}Fc=!0;try{await eM()}catch(n){we(n.message,"warn")}finally{Fc=!1,cu&&(cu=!1,Fi())}}async function Bc(n,t=null){let e={...I.doc,features:n},i=await Wa.call("rebuild",{doc:e,upto:t,have:[...oe.meshCache.keys()]});return oe.ingest(i.bodies),i}var _r=()=>I.doc.rollback==null?I.doc.features.length:I.doc.rollback;async function eM(){Vc(!0);try{if(I.mode==="command"&&I.cmd){let n=I.cmd,t=I.doc.features.slice(0,n.index);I.base=await Bc(t);let e=vu();I.preview=Oa(n.draft)?await Bc([...t,...e]):null,mi(),Ms()}else if(I.mode==="model"){let n=!!(I.model&&I.model.bodies.length);I.model=await Bc(I.doc.features,I.doc.rollback),mi(),!n&&I.model.bodies.length&&oe.fit(),Su(),Xc();let t=Object.keys(I.model.errors).length;PM(t?`${t} feature con errori`:`Ricostruito in ${I.model.ms} ms`,t?"warn":"")}}finally{Vc(!1)}}function vu(){let n=I.cmd,t=_u(n.draft);if(t.type==="hole"&&t.place){let e=t.place;if(delete t.place,!e.face||!e.pts.length)return[t];let i=Od(e.face.n,e.face.p),s=n.holeSketchId||(n.holeSketchId=Ga()),r=Ac();e.pts.forEach((o,l)=>{let[c,h]=Vp(i,o);r.push({id:`p${l+1}`,type:"point",x:c,y:h,fixed:!1})});let a={id:s,type:"sketch",name:"Schizzo foro",plane:{face:iM(e.face)},geo:r,cons:[]};return t.sketch=s,[a,t]}return[t]}var iM=n=>{let t={...n};return delete t.i,t};function gm(n){return n?n.bodies.map((t,e)=>({id:t.id,key:t.key,name:I.doc.ui.names[t.id]||t.name,color:I.doc.ui.colors[t.id]||Fd(e),visible:!I.doc.ui.hidden[t.id]})):[]}function Va(n){let t=I.doc.ui.sketchVis[n.id];return t!==void 0?t:!I.doc.features.some(e=>e.sketch===n.id)}function nM(n){let t=new Map(n.map(i=>[i.id,i])),e=[];for(let i of n)if(!(i.ref||i.type==="point"))if(i.type==="line"){let s=t.get(i.p1_id),r=t.get(i.p2_id);e.push({id:i.id,kind:"line",construction:i.construction,pts:[[s.x,s.y],[r.x,r.y]]})}else{let s=t.get(i.c_id),r=0,a=Math.PI*2;if(i.type==="arc")for(r=i.start_angle,a=i.end_angle-i.start_angle;a<=0;)a+=Math.PI*2;let o=Math.max(8,Math.ceil(a/(Math.PI*2)*72)),l=[];for(let c=0;c<=o;c++){let h=r+a*c/o;l.push([s.x+i.radius*Math.cos(h),s.y+i.radius*Math.sin(h)])}e.push({id:i.id,kind:i.type,construction:i.construction,pts:l})}return e}function Sm(n){return n.filter(t=>!n.some(e=>e!==t&&e.holePolys.some(i=>ys(t.sample,i))))}var Ha=new Map;function Nn(n){let t=n.id+":"+JSON.stringify(n.geo),e=Ha.get(t);return e||(e=Sc(n.geo),Ha.set(t,e),Ha.size>50&&Ha.delete(Ha.keys().next().value)),e}function mi(){let n=I.mode==="command"?I.cmd:null,t=I.model;n&&(t=I.preview&&!I.preview.errors[n.draft.id]&&!Object.keys(I.preview.errors).some(l=>!I.base.errors[l])?I.preview:I.base),oe.setBodies(gm(t)),oe.setPickBodies(n?gm(I.base):null),oe.gc();let e=(n?I.base:I.model)?.frames||{},i=n?n.index:_r(),s=[],r=n?qa():null;for(let l of I.doc.features.slice(0,i)){if(l.type!=="sketch"||l.suppressed||!e[l.id])continue;let c=n&&n.draft.sketch===l.id;if(!Va(l)&&!c)continue;let h={id:l.id,frame:e[l.id].frame,polylines:nM(l.geo)};if(r&&r.pick==="region")h.regions=Nn(l),h.selected=c?n.draft.regions.map(u=>h.regions.indexOf(Qn(h.regions,u))).filter(u=>u>=0):[];else if(c&&n.draft.regions){let u=Nn(l);h.regions=n.draft.regions.map(d=>Qn(u,d)).filter(Boolean),h.selected=h.regions.map((d,f)=>f)}else!n&&I.mode==="model"&&(h.regions=Nn(l),h.selected=I.msel.sketch===l.id?I.msel.regions.map(u=>h.regions.indexOf(Qn(h.regions,u))).filter(u=>u>=0):[]);if(r&&r.pick==="sketchLine"&&c){h.pickLines=!0;let u=1e3;h.polylines.push({id:"AX",kind:"line",construction:!0,pts:[[-u,0],[u,0]]},{id:"AY",kind:"line",construction:!0,pts:[[0,-u],[0,u]]})}s.push(h)}oe.setSketchOverlays(s);let a={faces:[],edges:[],bodies:[]};if(n)oM(n.draft,a);else{I.selBody&&a.bodies.push(I.selBody);for(let l of I.msel.edges){let c=Gc(l);c>=0&&a.edges.push({body:l.body,i:c})}for(let l of I.msel.faces){let c=zc(l);c>=0&&a.faces.push({body:l.body,i:c})}}oe.setSelection(a),oe.setPlanesVisible(I.mode==="pickPlane"||!!(r&&r.pick==="planarFace")||!!I.doc.ui.showPlanes);let o=[];try{o=n?aM(n):[]}catch{o=[]}oe.setHandles(o)}var sM={X:[1,0,0],Y:[0,1,0],Z:[0,0,1]},hu=n=>{let t=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/t,n[1]/t,n[2]/t]},_m=(n,t,e=1)=>[n[0]+t[0]*e,n[1]+t[1]*e,n[2]+t[2]*e],rM=n=>String(n??"").trim()!==""&&Number.isFinite(Number(String(n).replace(",",".")));function aM(n){let t=n.draft,e=Oi(I.doc.params).scope,i=l=>{try{return fi(t[l],e)}catch{return null}},s=(l,c)=>{let h=i(l);return h==null?null:{id:l,value:h,locked:!rM(t[l]),...c}},r=I.base&&I.base.frames||{},a=[],o=()=>{let l=I.doc.features.find(u=>u.id===t.sketch),c=r[t.sketch];if(!l||!c||!t.regions||!t.regions.length)return null;let h=Qn(Nn(l),t.regions[0]);return h?{p:Ra(c.frame,h.sample),frame:c.frame,sk:l}:null};if(t.type==="extrude"){let l=o();if(l){let c=t.flip?l.frame.n.map(h=>-h):l.frame.n;a.push(s("dist",{kind:"linear",origin:l.p,dir:c,scale:t.mode==="sym"?.5:1})),t.mode==="two"&&a.push(s("dist2",{kind:"linear",origin:l.p,dir:c.map(h=>-h)}))}}else if(t.type==="revolve"){let l=o();if(l){let c=[0,0,0],h=sM[t.axis&&t.axis.world||"Z"];if(t.axis&&t.axis.line){let p=l.sk.geo.find(_=>_.id===t.axis.line),m=_=>{let M=l.sk.geo.find(x=>x.id===_);return[M.x,M.y]};if(p){let _=Ra(l.frame,m(p.p1_id)),M=Ra(l.frame,m(p.p2_id));c=_,h=hu([M[0]-_[0],M[1]-_[1],M[2]-_[2]])}}t.flip&&(h=h.map(p=>-p));let u=[l.p[0]-c[0],l.p[1]-c[1],l.p[2]-c[2]],d=dr(u,h),f=_m(c,h,d),g=[l.p[0]-f[0],l.p[1]-f[1],l.p[2]-f[2]],y=Math.hypot(...g);y>1e-6&&a.push(s("angle",{kind:"arc",center:f,axis:h,ref:hu(g),radius:y}))}}else if(t.type==="hole"&&!t.through){let l=null,c=null;if(t.place&&t.place.face&&t.place.pts.length)l=t.place.pts[0],c=t.place.face.n;else if(t.sketch&&r[t.sketch]){let h=I.doc.features.find(d=>d.id===t.sketch),u=h&&h.geo.find(d=>d.type==="point"&&!d.ref&&!d.construction);u&&(l=Ra(r[t.sketch].frame,[u.x,u.y]),c=r[t.sketch].frame.n)}l&&a.push(s("depth",{kind:"linear",origin:l,dir:t.flip?c:c.map(h=>-h),min:.1}))}else if((t.type==="fillet"||t.type==="chamfer")&&t.edges.length){let l=t.edges[0],c=oe.pickBodies.get(l.body),h=Gc(l);if(c&&h>=0){let u=c.data.edgeInfo[h],d=u.f.map(f=>f.n).filter(Boolean);if(d.length){let f=hu(d.reduce((g,y)=>_m(g,y),[0,0,0]));a.push(s(t.type==="fillet"?"r":"d",{kind:"linear",origin:u.m,dir:f,min:.05}))}}}else if(t.type==="shell"&&t.faces.length){let l=t.faces[0];l.n&&a.push(s("t",{kind:"linear",origin:l.p,dir:t.outside?l.n:l.n.map(c=>-c),min:.1}))}else if(t.type==="move"&&t.bodies.length){let l=oe.boundsOf(t.bodies);if(l){let c=l.center,h=Math.max(5,l.size*.35),u=i("dx")||0,d=i("dy")||0,f=i("dz")||0,g={dx:14042437,dy:3120727,dz:3108832};a.push(s("dx",{kind:"linear",origin:[c[0],c[1]+d,c[2]+f],dir:[1,0,0],offset:h,color:g.dx})),a.push(s("dy",{kind:"linear",origin:[c[0]+u,c[1],c[2]+f],dir:[0,1,0],offset:h,color:g.dy})),a.push(s("dz",{kind:"linear",origin:[c[0]+u,c[1]+d,c[2]],dir:[0,0,1],offset:h,color:g.dz}))}}return a.filter(Boolean)}oe.onHandle=(n,t)=>{let e=I.cmd&&I.cmd.draft;e&&(e[n]=ve(t,3),Ms(),Xa())};oe.onHandleLocked=()=>we("Questo valore viene da un parametro: cambialo nel pannello","warn");function Gc(n){let t=oe.pickBodies.get(n.body);if(!t||!t.data)return-1;if(n.i!=null&&t.data.edgeInfo[n.i]){let s=t.data.edgeInfo[n.i].m;if(Math.hypot(s[0]-n.p[0],s[1]-n.p[1],s[2]-n.p[2])<.001)return n.i}let e=-1,i=1/0;return t.data.edgeInfo.forEach((s,r)=>{let a=Math.hypot(s.m[0]-n.p[0],s.m[1]-n.p[1],s.m[2]-n.p[2]);a<i&&(i=a,e=r)}),e}function zc(n){let t=oe.pickBodies.get(n.body);if(!t||!t.data)return-1;if(n.i!=null&&t.data.faceInfo[n.i]&&t.data.faceInfo[n.i].t===n.t)return n.i;let e=-1,i=1/0;return t.data.faceInfo.forEach((s,r)=>{let a=Math.hypot(s.c[0]-n.p[0],s.c[1]-n.p[1],s.c[2]-n.p[2]);n.n&&s.n&&(a+=50*(1-dr(n.n,s.n))),a<i&&(i=a,e=r)}),e}function oM(n,t){let e=s=>{if(!s)return;let r=Gc(s);r>=0&&t.edges.push({body:s.body,i:r})},i=s=>{if(!s)return;let r=zc(s);r>=0&&t.faces.push({body:s.body,i:r})};(n.edges||[]).forEach(e),(n.faces||[]).forEach(i),n.axis&&n.axis.edge&&e(n.axis.edge),n.plane&&n.plane.face&&i(n.plane.face),n.place&&n.place.face&&i(n.place.face);for(let s of[...n.targets||[],...n.tools||[],...n.bodies||[],n.target,n.src&&n.src.body])s&&t.bodies.push(s)}oe.onTap((n,t,e)=>{let i=e==="touch"?22:e==="pen"?14:9;if(I.mode==="pickPlane"){let s=oe.pick(n,t,{plane:!0,face:!0},i);if(!s)return;if(s.kind==="plane")pu({std:s.plane});else if(s.kind==="face"){let r=oe.pickBodies.get(s.body).data.faceInfo[s.i];if(r.t!=="PLANE"){we("Serve una faccia piana","warn");return}pu({face:{body:s.body,p:s.point,n:r.n,t:"PLANE"}})}return}if(I.mode==="command"){let s=qa();if(!s)return;let r={region:{region:!0},edge:{edge:!0},face:{face:!0},planarFace:{face:!0},facePoint:{face:!0},body:{body:!0},sketchLine:{sketchLine:!0}}[s.pick],a=oe.pick(n,t,r,i);if(!a)return;wm(s,a);return}if(I.mode==="model"){let s=oe.pick(n,t,{region:!0,edge:!0,face:!0},i);if(s&&s.kind==="region"){lM(s);return}if(I.selBody=null,!s){Hc();return}dM(s)}});var $a=()=>({edges:[],faces:[],regions:[],sketch:null});I.msel=$a();function lM(n){let t=I.msel;(t.sketch!==n.sketch||t.edges.length||t.faces.length)&&(I.msel=$a(),I.msel.sketch=n.sketch);let e=I.doc.features.find(o=>o.id===n.sketch),i=Nn(e),s=i[n.region],r=I.msel.regions,a=r.findIndex(o=>Qn(i,o)===s);a>=0?r.splice(a,1):r.push({key:s.key,seed:s.sample}),r.length||(I.msel.sketch=null),mi(),xu()}function cM(n){let t=oe.pickBodies.get(n.body).data,e=t.edgeInfo[n.i];return{body:n.body,i:n.i,p:e.m,d:e.d,t:e.t,f:e.f.map(i=>({n:i.n,t:t.faceInfo[i.i].t}))}}function hM(n){let t=oe.pickBodies.get(n.body).data.faceInfo[n.i];return{body:n.body,i:n.i,p:n.point,n:t.t==="PLANE"?t.n:n.normal,t:t.t}}function dM(n){I.msel.regions.length&&(I.msel=$a());let t=n.kind==="edge"?I.msel.edges:I.msel.faces,e=t.findIndex(i=>i.body===n.body&&i.i===n.i);e>=0?t.splice(e,1):t.push(n.kind==="edge"?cM(n):hM(n)),mi(),xu()}function Hc(){I.msel=$a(),mi(),xu()}function mr(){return[...new Set([...I.msel.edges,...I.msel.faces].map(n=>n.body))]}function uM(n){let{edges:t,faces:e,regions:i}=I.msel;if(i.length&&(n==="extrude"||n==="revolve"))return{sketch:I.msel.sketch,regions:i.map(r=>({...r}))};if(!t.length&&!e.length)return null;let s=r=>({...r});return(n==="fillet"||n==="chamfer")&&t.length?{edges:t.map(s)}:n==="shell"&&e.length?{faces:e.map(s)}:n==="move"?{bodies:mr()}:(n==="pattern"||n==="mirror")&&mr().length===1?{src:{body:mr()[0]}}:n==="combine"&&mr().length>=2?{target:mr()[0],tools:mr().slice(1)}:null}function xu(){let n=$t("#selbar"),{edges:t,faces:e,regions:i}=I.msel;if(I.mode!=="model"||!t.length&&!e.length&&!i.length){n.hidden=!0;return}if(ts(),i.length){let a=I.doc.features.find(o=>o.id===I.msel.sketch);n.hidden=!1,n.innerHTML=`<span><b>${i.length} ${i.length===1?"forma":"forme"}</b> di \xAB${Wt(a?a.name:"")}\xBB</span>
      <button class="btn primary" data-scmd="extrude">${le("extrude",18)} Estrudi</button>
      <button class="btn" data-scmd="revolve">${le("revolve",18)} Rivoluzione</button>
      <button class="btn" data-sedit>${le("sketch",18)} Modifica schizzo</button>
      <button class="icon" data-sclear aria-label="Deseleziona">${le("close",18)}</button>`;return}let s=[];t.length&&s.push(`${t.length} ${t.length===1?"spigolo":"spigoli"}`),e.length&&s.push(`${e.length} ${e.length===1?"faccia":"facce"}`);let r=(a,o,l)=>`<button class="btn" data-scmd="${a}">${le(o,18)} ${l}</button>`;n.hidden=!1,n.innerHTML=`<span><b>${s.join(" \xB7 ")}</b> selezionati</span>
    ${t.length?r("fillet","fillet","Raccordo")+r("chamfer","chamfer","Smusso"):""}
    ${e.length?r("shell","shell","Guscio"):""}
    ${r("move","move","Sposta corpo")}
    <button class="icon" data-sclear aria-label="Deseleziona">${le("close",18)}</button>`}$t("#selbar").addEventListener("click",n=>{let t=n.target.closest("button");if(t)if(t.dataset.sclear!==void 0)Hc();else if(t.dataset.sedit!==void 0){let e=I.doc.features.find(i=>i.id===I.msel.sketch);Hc(),e&&Wc(e)}else t.dataset.scmd&&wi(t.dataset.scmd)});oe.hoverHandler=(n,t)=>{if(I.mode==="model"){let r=n==null?null:oe.pick(n,t,{edge:!0,face:!0},9),a=r?`${r.kind}${r.body}${r.i}`:"";a!==I.hoverKey&&(I.hoverKey=a,oe.setPreselect(r));return}if(I.mode!=="command"){oe.preselect&&oe.setPreselect(null);return}let e=qa();if(n==null||!e||!["edge","face","planarFace"].includes(e.pick)){oe.preselect&&oe.setPreselect(null);return}let i=oe.pick(n,t,{edge:e.pick==="edge",face:e.pick!=="edge"},9),s=i?`${i.kind}${i.body}${i.i}`:"";s!==I.hoverKey&&(I.hoverKey=s,oe.setPreselect(i))};function wm(n,t){let e=I.cmd.draft,i=()=>(n.get?n.get(e):e[n.k])||[],s=o=>{n.set?n.set(e,o):e[n.k]=o},r=(o,l,c)=>{let h=o.findIndex(u=>c(u,l));return h>=0?(o.splice(h,1),o):n.multi?(o.push(l),o):[l]},a=o=>oe.pickBodies.get(o).data;if(n.pick==="region"){let o=I.doc.features.find(u=>u.id===t.sketch),l=Nn(o)[t.region],c={key:l.key,seed:l.sample};e.sketch&&e.sketch!==t.sketch&&(e.regions=[]),e.sketch=t.sketch;let h=Nn(o);e.regions=r(e.regions.slice(),c,(u,d)=>Qn(h,u)===Qn(h,d)),e.regions.length||(e.sketch=null)}else if(n.pick==="edge"){let o=a(t.body),l=o.edgeInfo[t.i],c={body:t.body,i:t.i,p:l.m,d:l.d,t:l.t,f:l.f.map(h=>({n:h.n,t:o.faceInfo[h.i].t}))};s(r(i().slice(),c,(h,u)=>h.body===u.body&&Gc(h)===u.i))}else if(n.pick==="face"||n.pick==="planarFace"){let o=a(t.body).faceInfo[t.i];if(n.pick==="planarFace"&&o.t!=="PLANE"){we("Serve una faccia piana","warn");return}let l={body:t.body,i:t.i,p:t.point,n:o.t==="PLANE"?o.n:t.normal,t:o.t};s(r(i().slice(),l,(c,h)=>c.body===h.body&&zc(c)===h.i))}else if(n.pick==="facePoint"){let o=a(t.body).faceInfo[t.i];if(o.t!=="PLANE"){we("I fori vanno su una faccia piana","warn");return}let l=e.place;l.face&&l.face.body===t.body&&zc(l.face)===t.i||(l.face={body:t.body,i:t.i,p:t.point,n:o.n,t:"PLANE"},l.pts=[]);let h=l.pts.findIndex(u=>Math.hypot(u[0]-t.point[0],u[1]-t.point[1],u[2]-t.point[2])<1.5);h>=0?l.pts.splice(h,1):l.pts.push(t.point.map(u=>Math.round(u*100)/100))}else if(n.pick==="body")s(r(i().slice(),t.body,(o,l)=>o===l));else if(n.pick==="sketchLine"){if(t.sketch!==e.sketch){we("Scegli una linea dello stesso schizzo","warn");return}s([t.id])}Ms(),mi(),Xa()}var ym=null;function Xa(){clearTimeout(ym),ym=setTimeout(Fi,140)}function fM(n){let t=I.doc.features.slice(0,n).filter(a=>!a.suppressed),e=t.filter(a=>["extrude","revolve","hole"].includes(a.type)).map(a=>({id:a.id,name:a.name})),i=I.model&&I.model.bodies||[],s=null,r=[...t].reverse().find(a=>a.type==="sketch");if(r&&!I.doc.features.some(a=>a.sketch===r.id)){let a=Sm(Nn(r));a.length&&(s={sketch:r.id,regions:a.map(o=>({key:o.key,seed:o.sample}))})}return{hasBodies:i.length>0,lastBody:i.length?i[i.length-1].id:null,toolFeatures:e,autoRegions:s}}function wi(n,t=null,e=null){if(I.mode==="sketch")return;I.mode==="command"&&ja(),ts();let i=fm[n],s=t?I.doc.features.findIndex(h=>h.id===t.id):_r(),r=fM(s),a=e||(t?null:uM(n)),o=t?_u(t):{id:Ga(),...i.init(r),...a||{}};I.msel=$a(),$t("#selbar").hidden=!0,I.cmd={type:n,spec:i,draft:o,index:s,editing:!!t,ctx:r,active:null},I.mode="command";let l=gr().filter(h=>h.kind==="pick"),c=l.find(h=>!((h.get?h.get(o):o[h.k])||[]).length&&!h.optional);I.cmd.active=(c||l[0]||{}).k||null,I.selBody=null,Un(),Fi()}function gr(){let n=I.cmd;return n.spec.fields(n.draft,n.ctx).filter(Boolean)}function qa(){return I.cmd&&gr().find(n=>n.kind==="pick"&&n.k===I.cmd.active)||null}function ja(){I.cmd=null,I.mode="model",I.preview=null,Un(),Fi()}function bu(){let n=I.cmd;if(!Oa(n.draft)){we("Completa la selezione","warn");return}let t=vu(),e=I.preview&&t.map(i=>I.preview.errors[i.id]).find(Boolean);if(e){we(e,"warn");return}Ze(i=>{let s=r=>i.features.filter(a=>a.type===r).length+1;for(let r of t)r.name||(r.name=`${um[r.type]} ${s(r.type)}`);n.editing?i.features.splice(n.index,1,...t):(i.features.splice(n.index,0,...t),i.rollback!=null&&(i.rollback+=t.length))},{rebuild:!1}),I.cmd=null,I.mode="model",Un(),Fi()}function Mu(){I.mode==="command"&&ja(),ts(),I.mode="pickPlane",Un(),mi(),Ya("Dove disegni? Tocca un piano colorato (blu = pianta XY, verde = fronte XZ, rosso = lato YZ) o una faccia piana di un corpo")}function pu(n){let t=I.doc.features.filter(s=>s.type==="sketch").length+1,e={id:Ga(),type:"sketch",name:`Schizzo ${t}`,plane:n.face?{face:n.face}:{std:n.std},geo:Ac(),cons:[]},i=n.face?Od(n.face.n,n.face.p):_c[n.std];Em(e,i,_r(),!0)}async function Wc(n){ts();let t=I.doc.features.findIndex(s=>s.id===n.id);Vc(!0);let e;try{e=await Bc(I.doc.features,t+1)}finally{Vc(!1)}let i=e.frames[n.id];if(!i){we(e.errors[n.id]||"Il piano dello schizzo non \xE8 disponibile","warn");return}I.model=e,mi(),Em(n,i.frame,t,!1)}function Em(n,t,e,i){I.mode="sketch",I.sketch={index:e,isNew:i,id:n.id},Ya(""),Un(),oe.setSketchOverlays([]),oe.setSelection({}),oe.setPlanesVisible(!1),Yt.open(n,t)}function $c(n=!0){let t=I.sketch,e=Yt.close();I.mode="model",I.sketch=null,n&&Ze(i=>{t.isNew?(i.features.splice(t.index,0,e),i.rollback!=null&&(i.rollback+=1)):i.features[t.index]=e},{rebuild:!1}),Un(),Fi(),n&&!I.doc.features.some(i=>i.sketch===e.id)&&Tm(e)}function Tm(n){let t=$t("#quickbar"),e=Sm(Nn(n));if(!n.geo.some(s=>!s.ref&&s.type!=="point")){ts();return}t.hidden=!1,e.length?(t.className="",t.innerHTML=`<span><b>${Wt(n.name)}</b> \xB7 ${e.length===1?"1 forma chiusa":`${e.length} forme chiuse`}. Cosa vuoi farne?</span>
      <button class="btn primary" data-qcmd="extrude">${le("extrude",18)} Estrudi</button><button class="btn" data-qcmd="revolve">${le("revolve",18)} Rivoluzione</button>
      <button class="icon" data-qclose aria-label="Chiudi">${le("close",18)}</button>`):(t.className="warn",t.innerHTML=`<span>${le("info",18)} \xAB${Wt(n.name)}\xBB non ha forme chiuse: per estrudere il contorno deve chiudersi (l'ultima linea deve finire sul primo punto).</span>
      <button class="btn" data-qedit>Modifica schizzo</button><button class="icon" data-qclose aria-label="Chiudi">${le("close",18)}</button>`),t.onclick=s=>{let r=s.target.closest("button");r&&(r.dataset.qcmd?wi(r.dataset.qcmd,null,{sketch:n.id,regions:e.map(a=>({key:a.key,seed:a.sample}))}):r.dataset.qedit!==void 0&&(ts(),Wc(I.doc.features.find(a=>a.id===n.id))),ts())}}function ts(){$t("#quickbar").hidden=!0}var Am=[{group:"Crea"},["sketch","Schizzo",()=>Mu()],["extrude","Estrudi",()=>wi("extrude")],["revolve","Rivoluzione",()=>wi("revolve")],["hole","Foro",()=>wi("hole")],{group:"Modifica"},["fillet","Raccordo",()=>wi("fillet")],["chamfer","Smusso",()=>wi("chamfer")],["shell","Guscio",()=>wi("shell")],["combine","Combina",()=>wi("combine")],["move","Sposta",()=>wi("move")],{group:"Ripeti"},["pattern","Serie",()=>wi("pattern")],["mirror","Specchio",()=>wi("mirror")],{group:"Inserisci"},["import","Importa",()=>AM()]],Cm=[{group:"Disegna"},["select","Seleziona","tool"],["line","Linea","tool"],["rect","Rettangolo","tool"],["circle","Cerchio","tool"],["polygon","Poligono","tool","poly"],["arc","Arco","tool"],["point","Punto","tool"],["magnet","Magnete","toggle"],{group:"Misura"},["dim","Quota","tool"],{group:"Modifica"},["trim","Taglia","tool"],["offset","Offset","tool","cmd:offset"],["fillet","Raccordo","tool","cmd:sfillet"],["chamfer","Smusso","tool","cmd:schamfer"],["mirror","Specchia","tool","cmd:smirror"],["construction","Costruzione","act"],["trash","Elimina","act"],{group:"Vincoli"},["coincident","Coincidente","cons"],["horizontal","Orizzontale","cons"],["vertical","Verticale","cons"],["parallel","Parallela","cons"],["perpendicular","Perpendic.","cons"],["tangent","Tangente","cons"],["equal","Uguale","cons"],["midpoint","Punto medio","cons"],["concentric","Concentrico","cons"],["symmetric","Simmetria","cons"],["fix","Fissa","cons"]];function rn(){let n=$t("#toolbar"),t=I.mode==="sketch";$t("#docName").textContent=I.doc?I.doc.name:"",$t("#btnUndo").disabled=t?!Yt.undoStack?.length:I.mode!=="model"||!I.undo.length,$t("#btnRedo").disabled=t?!Yt.redoStack?.length:I.mode!=="model"||!I.redo.length,$t("#topRight").hidden=t,$t("#sketchFinish").hidden=!t;let e=t?Cm:Am;n.innerHTML=e.map((i,s)=>{if(i.group)return`<span class="grp">${i.group}</span>`;let[r,a,o,l]=i;return`<button class="tool ${(t?o==="tool"&&Yt.tool===(l||r)||o==="cons"&&Yt.tool==="c:"+r||o==="toggle"&&r==="magnet"&&Yt.snapGrid:I.mode==="command"&&I.cmd.type===r||r==="sketch"&&I.mode==="pickPlane")?"on":""}" data-i="${s}" title="${a}">${le(r)}<span>${a}</span></button>`}).join(""),n.className=t?"sketch":""}$t("#toolbar").addEventListener("click",n=>{let t=n.target.closest("button[data-i]");if(!t)return;let e=(I.mode==="sketch"?Cm:Am)[+t.dataset.i];if(I.mode==="sketch"){let[i,,s,r]=e;if(s==="toggle"&&i==="magnet"){Yt.setSnapGrid(!Yt.snapGrid);try{localStorage.setItem("officina.snap",Yt.snapGrid?"1":"0")}catch{}we(Yt.snapGrid?"Magnete acceso: i punti si agganciano ai quadretti":"Magnete spento","ok")}else s==="tool"?Yt.setTool(r||i):s==="cons"?Yt.sel.size&&Yt.consReady(i)?Yt.applyConstraint(i):Yt.setTool("c:"+i):i==="construction"?Yt.toggleConstruction():i==="trash"&&Yt.deleteSelection();rn();return}I.mode==="pickPlane"&&(I.mode="model",Ya("")),e[2]()});function pM(n){rn();let t=$t("#sketchStatus");if(I.mode!=="sketch"){t.hidden=!0,$t("#sketchInput").hidden=!0,$t("#sketchInput").dataset.kind="";return}t.hidden=!1;let e,i="";n.conflicting&&n.conflicting.length?(e="Vincoli in conflitto",i="bad"):n.dof===0?(e="Completamente vincolato",i="ok"):e=n.dof==null?"":`Liberi: ${n.dof}`,t.innerHTML=`<span class="dof ${i}" title="Gradi di libert\xE0: quanti movimenti restano da bloccare con quote e vincoli">${e}</span><span class="hint">${Wt(n.hint||"")}</span>`,Rm(n)}function Rm(n){vM(n.cmd);let t=$t("#sketchInput"),e=$t("#dynInput"),i=n.exact;if(!i||n.cmd){Oc(t),Oc(e);return}n.lastPointer==="mouse"?(Oc(t),Lm(i)):(Oc(e),mM(i))}function Oc(n){n.hidden=!0,n.dataset.kind=""}function mM(n){let t=$t("#sketchInput");if(t.hidden=!1,t.dataset.kind===n.kind){for(let e of n.fields){let i=t.querySelector(`input[data-k="${e.k}"]`);i&&(i.placeholder=e.ph)}return}t.dataset.kind=n.kind,t.innerHTML=`<span class="lbl">Misure esatte</span>${Pm(n)}${n.fields.map(e=>`<label class="xf"><span>${Wt(e.label)}</span><input data-k="${e.k}" placeholder="${Wt(e.ph)}" inputmode="decimal" autocomplete="off" autocapitalize="off" spellcheck="false"><em>${Wt(e.unit)}</em></label>`).join("")}
    <button class="btn primary" data-xok>Inserisci</button>`}$t("#sketchInput").addEventListener("click",n=>{let t=n.target.closest("[data-pchoice]");if(t){Yt.setPolyMode(t.dataset.pchoice);return}n.target.closest("[data-xok]")&&Im()});function Pm(n){return n.choice?`<span class="seg xchoice">${n.choice.options.map(([t,e])=>`<button data-pchoice="${t}" class="${n.choice.value===t?"on":""}">${Wt(e)}</button>`).join("")}</span>`:""}$t("#sketchInput").addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),Im())});$t("#sketchInput").addEventListener("input",n=>{if(!(n.target.dataset.k!=="n"||!n.target.value.trim()))try{Yt.setPolyN(fi(n.target.value,Oi(I.doc.params).scope)),Yt.render()}catch{}});function Im(){let n=$t("#sketchInput"),t={};for(let i of n.querySelectorAll("input"))t[i.dataset.k]=i.value;if(!Object.values(t).some(i=>i.trim())){we("Scrivi almeno un valore (vuoto = valore del disegno)","warn");return}let e=Oi(I.doc.params).scope;try{for(let i of Object.values(t))i.trim()&&fi(i,e)}catch(i){we(i.message,"warn");return}n.dataset.kind="",Yt.placeExact(t,i=>fi(i,e))&&setTimeout(()=>{let i=$t("#sketchInput input");i&&i.focus()},30)}function Lm(n){let t=$t("#dynInput");t.hidden=!1,t.dataset.kind!==n.kind&&(t.dataset.kind=n.kind,t.innerHTML=Pm(n)+n.fields.map(i=>`<label class="df" title="${Wt(i.label)}"><input data-k="${i.k}" inputmode="decimal" autocomplete="off" spellcheck="false" aria-label="${Wt(i.label)}"><em>${Wt(i.unit)}</em><b class="lock" title="Valore bloccato">${le("fix",12)}</b></label>`).join("")+'<span class="dhint">scrivi \xB7 Tab cambia campo \xB7 Invio conferma</span>');let e=Yt.lockExpr||{};for(let i of n.fields){let s=t.querySelector(`input[data-k="${i.k}"]`);s&&(document.activeElement!==s&&(s.value=e[i.k]??""),s.placeholder=i.ph,s.parentElement.classList.toggle("locked",e[i.k]!=null))}gM()}function gM(){let n=$t("#dynInput"),t=Yt.exactAnchor();if(!t||n.hidden)return;let e=Math.min(oe.w-n.offsetWidth-8,t[0]+22),i=Math.min(oe.h-n.offsetHeight-8,t[1]+22);n.style.left=Math.max(8,e)+"px",n.style.top=Math.max(8,i)+"px"}Yt.onCursor=()=>{if(I.mode!=="sketch")return;let n=Yt.statusInfo();n.exact&&n.lastPointer==="mouse"&&!n.cmd?Lm(n.exact):Rm(n)};var es=$t("#dynInput");es.addEventListener("mousedown",n=>{n.target.closest("[data-pchoice]")&&n.preventDefault()});es.addEventListener("click",n=>{let t=n.target.closest("[data-pchoice]");t&&Yt.setPolyMode(t.dataset.pchoice)});es.addEventListener("input",n=>{let t=n.target;if(!t.dataset.k)return;let e=Yt.setLock(t.dataset.k,t.value);t.parentElement.classList.toggle("bad",!e),t.parentElement.classList.toggle("locked",e&&!!t.value.trim())});es.addEventListener("keydown",n=>{let t=[...es.querySelectorAll("input")],e=t.indexOf(n.target);if(n.key==="Tab"){n.preventDefault();let i=t[(e+(n.shiftKey?-1:1)+t.length)%t.length];i.focus(),i.select()}else n.key==="Enter"?(n.preventDefault(),_M()):n.key==="Escape"&&(n.preventDefault(),n.target.blur(),Yt.cancel(),rn());n.stopPropagation()});function _M(){let n={...Yt.lockExpr||{}};if(!Object.keys(n).length){we("Scrivi un valore, oppure clicca nel disegno","warn");return}document.activeElement&&document.activeElement.blur(),es.dataset.kind="";let t=Oi(I.doc.params).scope;Yt.placeExact(n,e=>fi(e,t))}function yM(n){if(I.mode!=="sketch"||es.hidden||n.ctrlKey||n.metaKey||n.altKey||!/^[0-9.,\-(]$/.test(n.key)&&n.key!=="Tab")return!1;let t=[...es.querySelectorAll("input")];if(!t.length)return!1;n.preventDefault();let e=n.key==="Tab"?t[Math.min(1,t.length-1)]:t[0];return e.focus(),n.key!=="Tab"&&(e.value=n.key,Yt.setLock(e.dataset.k,e.value),e.parentElement.classList.add("locked")),!0}function vM(n){let t=$t("#panel");if(I.mode!=="sketch")return;if(!n){t.hidden=!0,t.innerHTML="";return}let e=document.activeElement&&t.contains(document.activeElement)?document.activeElement.dataset.skk:null,i=e?document.activeElement.selectionStart:null;t.hidden=!1;let s={curves:["elemento","elementi"],line:["linea","linee"],corner:["angolo","angoli"],chain:["tratto","tratti"]},r=n.fields.map(a=>{if(a.kind==="pick"){let o=a.value.length,l=s[a.what],c=n.active===a.k;return`<div class="field"><label>${Wt(a.label)}</label><div class="pick ${c?"on":""} ${o?"has":""}" data-skpick="${a.k}"><span class="dot"></span><span class="txt">${o?`${o} ${o===1?l[0]:l[1]}`:"Nessuna selezione"}</span>${o?`<button class="clr" data-skclear="${a.k}" aria-label="Svuota">${le("close",16)}</button>`:""}</div>${c?`<div class="val">${Wt(a.hint)}</div>`:""}</div>`}return a.kind==="num"?`<div class="field"><label>${Wt(a.label)}</label><div class="num"><button data-skstep="-1" data-k="${a.k}" aria-label="meno">\u2212</button><input data-skk="${a.k}" value="${Wt(a.value)}" inputmode="decimal" autocomplete="off" autocapitalize="off" spellcheck="false"><span class="unit">${Wt(a.unit)}</span><button data-skstep="1" data-k="${a.k}" aria-label="pi\xF9">+</button></div></div>`:`<div class="field row"><label>${Wt(a.label)}</label><button class="switch ${a.value?"on":""}" data-sktoggle="${a.k}" role="switch" aria-checked="${!!a.value}"><span></span></button></div>`}).join("");if(t.innerHTML=`<header>${le(tu[n.type].icon)}<h2>${Wt(n.title)}</h2></header><div class="fields">${r}</div>
    <footer><button class="btn" data-skcancel>Annulla</button><button class="btn primary" data-skok ${n.ready?"":"disabled"}>OK</button></footer>`,e){let a=t.querySelector(`input[data-skk="${e}"]`);if(a){a.focus();try{a.setSelectionRange(i,i)}catch{}}}}function xM(n){let t=n.target.closest("button,[data-skpick]");if(t){if(t.dataset.skcancel!==void 0)Yt.cmdCancel();else if(t.dataset.skok!==void 0)Yt.cmdApply();else if(t.dataset.skclear)n.stopPropagation(),Yt.cmdClear(t.dataset.skclear);else if(t.dataset.skpick)Yt.cmdSetActive(t.dataset.skpick);else if(t.dataset.skstep){let e=t.dataset.k,i;try{i=fi(Yt.cmd.vals[e],Oi(I.doc.params).scope)}catch{return}let s=Math.abs(i)<5?.5:1;Yt.cmdSetVal(e,ve(Math.max(s,i+s*Number(t.dataset.skstep))))}else t.dataset.sktoggle&&Yt.cmdSetVal(t.dataset.sktoggle,!Yt.cmd.vals[t.dataset.sktoggle]);rn()}}function Ms(){let n=$t("#panel");if(I.mode!=="command"||!I.cmd){n.hidden=!0,n.innerHTML="";return}let t=I.cmd,e=t.draft;n.hidden=!1;let i=Oi(I.doc.params).scope,s=gr().map(l=>{if(l.kind==="note")return`<p class="note">${Wt(l.text)}</p>`;if(l.kind==="num"){let c=!0,h=null;try{h=fi(e[l.k],i)}catch{c=!1}let u=c&&String(e[l.k]).trim()!==ve(h);return`<div class="field"><label>${Wt(l.label)}</label><div class="num ${c?"":"bad"}">
        <button data-step="-1" data-k="${l.k}" aria-label="meno">\u2212</button>
        <input data-k="${l.k}" value="${Wt(e[l.k])}" inputmode="decimal" autocomplete="off" autocapitalize="off" spellcheck="false">
        <span class="unit">${Wt(l.unit||"")}</span>
        <button data-step="1" data-k="${l.k}" aria-label="pi\xF9">+</button></div>
        ${u?`<div class="val">= ${ve(h)} ${Wt(l.unit||"")}</div>`:""}${c?"":'<div class="val bad">Espressione non valida</div>'}</div>`}if(l.kind==="seg"){let c=l.get?l.get(e):e[l.k];return`<div class="field"><label>${Wt(l.label)}</label><div class="seg">${l.options.map(([h,u])=>`<button data-seg="${l.k}" data-v="${Wt(h)}" class="${c===h?"on":""}">${Wt(u)}</button>`).join("")}</div></div>`}if(l.kind==="toggle")return`<div class="field row"><label>${Wt(l.label)}</label><button class="switch ${e[l.k]?"on":""}" data-toggle="${l.k}" role="switch" aria-checked="${!!e[l.k]}"><span></span></button></div>`;if(l.kind==="select"){let c=l.get?l.get(e):e[l.k];return`<div class="field"><label>${Wt(l.label)}</label><select data-sel="${l.k}">${l.options.length?"":'<option value="">(nessuna)</option>'}${l.options.map(([h,u])=>`<option value="${Wt(h)}" ${c===h?"selected":""}>${Wt(u)}</option>`).join("")}</select></div>`}if(l.kind==="pick"){let c;l.pick==="facePoint"?c=e.place?e.place.pts.length:0:c=((l.get?l.get(e):e[l.k])||[]).length;let h=t.active===l.k,u={region:["profilo","profili"],edge:["spigolo","spigoli"],face:["faccia","facce"],planarFace:["faccia","facce"],body:["corpo","corpi"],sketchLine:["linea","linee"],facePoint:["foro","fori"]}[l.pick],d=c?`${c} ${c===1?u[0]:u[1]}`:l.optional?"Automatico":"Nessuna selezione";return`<div class="field"><label>${Wt(l.label)}</label><div class="pick ${h?"on":""} ${c?"has":""}" data-pick="${l.k}">
        <span class="dot"></span><span class="txt">${Wt(d)}</span>${c?`<button class="clr" data-clear="${l.k}" aria-label="Svuota">${le("close",16)}</button>`:""}</div>
        ${h?`<div class="val">${Wt(l.hint||"Tocca nella vista")}</div>`:""}</div>`}return""}).join(""),r=vu(),a=I.preview?r.map(l=>I.preview.errors[l.id]).find(Boolean):null;n.innerHTML=`<header>${le(nu[t.type])}<h2>${Wt(t.spec.title)}${t.editing?" <small>modifica</small>":""}</h2></header>
    <div class="fields">${s}</div>
    ${a?`<div class="err">${Wt(a)}</div>`:""}
    <footer><button class="btn" data-act="cancel">Annulla</button><button class="btn primary" data-act="ok" ${Oa(e)&&!a?"":"disabled"}>OK</button></footer>`;let o=qa();Ya(o?o.hint||"Tocca nella vista":"")}var bs=$t("#panel");bs.addEventListener("click",n=>{if(I.mode==="sketch"){xM(n);return}let t=I.cmd&&I.cmd.draft;if(!t)return;let e=n.target.closest("button,[data-pick]");if(!e)return;let i=gr(),s=r=>i.find(a=>a.k===r);if(e.dataset.act==="cancel"){ja();return}if(e.dataset.act==="ok"){bu();return}if(e.dataset.clear){n.stopPropagation();let r=s(e.dataset.clear);r.pick==="facePoint"?t.place.pts=[]:r.set?r.set(t,[]):t[r.k]=[],r.pick==="region"&&(t.sketch=null)}else if(e.dataset.pick)I.cmd.active=e.dataset.pick;else if(e.dataset.step){let r=e.dataset.k,a=s(r),o=0;try{o=fi(t[r],Oi(I.doc.params).scope)}catch{return}let l=a.unit==="\xB0"?15:a.unit===""?1:Math.abs(o)<5?.5:1;t[r]=ve(o+l*Number(e.dataset.step))}else if(e.dataset.seg){let r=s(e.dataset.seg);r.set?r.set(t,e.dataset.v):t[r.k]=e.dataset.v;let a=gr().find(o=>o.kind==="pick"&&!(o.get?o.get(t):t[o.k]||[]).length&&!o.optional);a&&(I.cmd.active=a.k)}else if(e.dataset.toggle)t[e.dataset.toggle]=!t[e.dataset.toggle];else return;Ms(),mi(),Xa()});bs.addEventListener("input",n=>{if(I.mode==="sketch"){n.target.dataset.skk&&Yt.cmdSetVal(n.target.dataset.skk,n.target.value);return}let t=I.cmd&&I.cmd.draft;t&&n.target.dataset.k&&(t[n.target.dataset.k]=n.target.value,clearTimeout(bs._t),bs._t=setTimeout(()=>{let e=n.target.selectionStart,i=n.target.dataset.k;Ms();let s=bs.querySelector(`input[data-k="${i}"]`);if(s){s.focus();try{s.setSelectionRange(e,e)}catch{}}Xa()},350))});bs.addEventListener("change",n=>{let t=I.cmd&&I.cmd.draft;if(!t||!n.target.dataset.sel)return;let e=gr().find(i=>i.k===n.target.dataset.sel);e.set?e.set(t,n.target.value):t[e.k]=n.target.value,Ms(),Xa()});bs.addEventListener("keydown",n=>{if(I.mode==="sketch"){n.key==="Enter"&&n.target.tagName==="INPUT"&&(n.preventDefault(),n.target.blur(),Yt.cmdApply(),rn());return}n.key==="Enter"&&n.target.tagName==="INPUT"&&(n.target.blur(),Fi().then(()=>{Oa(I.cmd?.draft||{})&&bu()}))});function Su(){let n=$t("#timeline"),t=I.doc,e=I.model&&I.model.errors||{},i=t.rollback,s=t.features.map((o,l)=>{let c=["tl-item",e[o.id]?"err":"",o.suppressed?"sup":"",i!=null&&l>=i?"after":"",I.cmd&&I.cmd.editing&&I.cmd.index===l?"on":""].join(" ");return`${i!=null&&i===l?'<span class="tl-marker" title="Fine cronologia"></span>':""}<button class="${c}" data-f="${l}" title="${Wt(o.name)}${e[o.id]?" \u2014 "+Wt(e[o.id]):""}">${le(nu[o.type]||"body",20)}<span>${Wt(o.name)}</span></button>`}).join(""),r=i!=null?`<button class="tl-end" data-end="1">${le("rollback",18)}<span>Vai alla fine</span></button>`:"";n.innerHTML=`<div class="tl-track">${s||'<span class="tl-empty">La cronologia \xE8 vuota: inizia con uno schizzo</span>'}${i==null&&s?'<span class="tl-marker" title="Fine cronologia"></span>':""}${r}</div>`;let a=n.querySelector(".tl-item.on");a&&a.scrollIntoView({inline:"nearest",block:"nearest"}),Fm()}$t("#timeline").addEventListener("click",n=>{if(I.mode!=="model")return;if(n.target.closest("[data-end]")){Ze(a=>{a.rollback=null});return}let e=n.target.closest("[data-f]");if(!e)return;let i=+e.dataset.f,s=I.doc.features[i],r=I.model&&I.model.errors[s.id];Om(e,[r?{label:r,cls:"err",disabled:!0}:null,{label:"Modifica",icon:"sketch",act:()=>bM(s)},{label:"Rinomina",act:async()=>{let a=await qc("Nome della feature",s.name);a&&Ze(o=>{o.features[i].name=a},{rebuild:!1})}},{label:s.suppressed?"Riattiva":"Sopprimi",act:()=>Ze(a=>{a.features[i].suppressed=!s.suppressed})},{label:"Riporta la cronologia qui",icon:"rollback",act:()=>Ze(a=>{a.rollback=i+1>=a.features.length?null:i+1})},s.type==="sketch"?{label:Va(s)?"Nascondi schizzo":"Mostra schizzo",act:()=>Ze(a=>{a.ui.sketchVis[s.id]=!Va(s)},{rebuild:!1})}:null,{label:"Elimina",icon:"trash",cls:"danger",act:()=>MM(i)}])});function bM(n){n.type==="sketch"?Wc(n):n.type==="import"?we("Le importazioni non hanno parametri da modificare"):wi(n.type,n)}function MM(n){let t=I.doc.features[n],e=I.doc.features.filter(i=>i.sketch===t.id||i.src&&i.src.feature===t.id);Ze(i=>{if(i.features.splice(n,1),t.type==="hole"&&t.sketch){let s=i.features.findIndex(r=>r.id===t.sketch);s>=0&&i.features[s].name.startsWith("Schizzo foro")&&!i.features.some(r=>r.sketch===t.sketch)&&i.features.splice(s,1)}i.rollback!=null&&i.rollback>n&&(i.rollback-=1),i.rollback!=null&&i.rollback>=i.features.length&&(i.rollback=null)}),e.length&&we(`Attenzione: ${e.map(i=>i.name).join(", ")} dipendeva da ${t.name}`,"warn")}function Xc(){let n=$t("#browser");if(!I.doc)return;let t=I.model&&I.model.bodies||[],e=I.doc.ui,i=_r(),s=I.doc.features.slice(0,i).filter(a=>a.type==="sketch"),r=a=>le(a?"eye":"eyeoff",18);n.innerHTML=`
    <section><h3>Corpi <small>${t.length}</small></h3>
    ${t.map((a,o)=>`<div class="br-row ${I.selBody===a.id?"on":""}"><button class="eye" data-hide="${a.id}">${r(!e.hidden[a.id])}</button>
      <span class="sw" style="background:${Wt(e.colors[a.id]||Fd(o))}"></span>
      <button class="name" data-body="${a.id}">${Wt(e.names[a.id]||a.name)}</button></div>`).join("")||'<p class="empty">Nessun corpo</p>'}
    </section>
    <section><h3>Schizzi <small>${s.length}</small></h3>
    ${s.map(a=>`<div class="br-row"><button class="eye" data-skvis="${a.id}">${r(Va(a))}</button>
      <button class="name" data-sketch="${a.id}">${Wt(a.name)}</button></div>`).join("")||'<p class="empty">Nessuno schizzo</p>'}
    </section>
    <section><h3>Origine</h3>
      <div class="br-row"><button class="eye" data-planes="1">${r(!!e.showPlanes)}</button><span class="name">Piani XY \xB7 XZ \xB7 YZ</span></div>
      <div class="br-row"><button class="eye" data-grid="1">${r(e.grid!==!1)}</button><span class="name">Griglia</span></div>
    </section>
    <section><h3>Parametri <small>${I.doc.params.length}</small></h3>
      ${I.doc.params.map(a=>`<div class="br-row param"><span class="name">${Wt(a.name)}</span><span class="pv">${Wt(a.expr)}</span></div>`).join("")}
      <button class="btn small" data-params="1">${le("params",16)} Gestisci parametri</button>
    </section>`}$t("#browser").addEventListener("click",n=>{let t=n.target.closest("button");if(!t||I.mode!=="model")return;let e=I.doc.ui;if(t.dataset.hide){let i=t.dataset.hide;Ze(s=>{s.ui.hidden[i]=!e.hidden[i]},{rebuild:!1}),mi()}else if(t.dataset.skvis){let i=I.doc.features.find(s=>s.id===t.dataset.skvis);Ze(s=>{s.ui.sketchVis[i.id]=!Va(i)},{rebuild:!1}),mi()}else if(t.dataset.planes)Ze(i=>{i.ui.showPlanes=!e.showPlanes},{rebuild:!1}),mi();else if(t.dataset.grid)Ze(i=>{i.ui.grid=e.grid===!1},{rebuild:!1}),oe.setGrid(I.doc.ui.grid!==!1);else if(t.dataset.params)km();else if(t.dataset.sketch){let i=I.doc.features.find(s=>s.id===t.dataset.sketch);Wc(i),IM()}else t.dataset.body&&SM(t,t.dataset.body)});function SM(n,t){let e=I.model.bodies,i=e.findIndex(a=>a.id===t),s=e[i],r=I.doc.ui.names[t]||s.name;I.selBody=t,mi(),Xc(),Om(n,[{label:"Rinomina",act:async()=>{let a=await qc("Nome del corpo",r);a&&Ze(o=>{o.ui.names[t]=a},{rebuild:!1}),mi()}},{label:"Colore",act:()=>EM(t,i)},{label:"Propriet\xE0",icon:"info",act:()=>TM(t,r)},{label:"Esporta questo corpo",icon:"export",act:()=>Dm([t])}])}var wM=["#b9c3cf","#d9b38c","#9fc7a8","#c9a3c9","#e0c56e","#8fb6d9","#d99a9a","#a8b38f","#5d6b7a","#e8e4da","#3c3c3c","#d4553f"];function EM(n,t){an(`<h2>Colore</h2><div class="swatches">${wM.map(e=>`<button style="background:${e}" data-c="${e}"></button>`).join("")}</div><footer><button class="btn" data-close>Chiudi</button></footer>`,(e,i)=>{e.addEventListener("click",s=>{let r=s.target.closest("[data-c]");r&&(Ze(a=>{a.ui.colors[n]=r.dataset.c},{rebuild:!1}),mi(),i())})})}async function TM(n,t){try{let[e]=await Wa.call("measure",{ids:[n]}),i=e.bbox?e.bbox[1].map((s,r)=>s-e.bbox[0][r]):null;an(`<h2>${Wt(t)}</h2><dl class="props">
      <dt>Volume</dt><dd>${e.volume!=null?ve(e.volume/1e3,2)+" cm\xB3":"\u2014"}</dd>
      <dt>Area superficie</dt><dd>${e.area!=null?ve(e.area/100,2)+" cm\xB2":"\u2014"}</dd>
      <dt>Ingombro</dt><dd>${i?i.map(s=>ve(s,2)).join(" \xD7 ")+" mm":"\u2014"}</dd>
      <dt>Peso in PLA</dt><dd>${e.volume!=null?ve(e.volume/1e3*1.24,1)+" g":"\u2014"} <small>(pieno, 1,24 g/cm\xB3)</small></dd>
      <dt>Peso in PETG</dt><dd>${e.volume!=null?ve(e.volume/1e3*1.27,1)+" g":"\u2014"}</dd></dl>
      <footer><button class="btn" data-close>Chiudi</button></footer>`)}catch(e){we(e.message,"warn")}}function km(){let n=_u(I.doc.params);an(`<h2>Parametri</h2><p class="note">Usa i nomi nelle quote e nei campi numerici, ad es. <code>larghezza/2 + 3</code>.</p><div class="params"></div>
    <button class="btn small" data-add>${le("plus",16)} Aggiungi parametro</button>
    <footer><button class="btn" data-close>Annulla</button><button class="btn primary" data-apply>Applica</button></footer>`,(t,e)=>{let i=()=>{let{scope:s,errors:r}=Oi(n);t.querySelector(".params").innerHTML=n.length?'<div class="prow head"><span>Nome</span><span>Espressione</span><span>Valore</span><span></span></div>'+n.map((a,o)=>`
        <div class="prow"><input data-i="${o}" data-f="name" value="${Wt(a.name)}" autocapitalize="off" autocomplete="off" spellcheck="false" class="${Xd(a.name)&&n.filter(l=>l.name===a.name).length===1?"":"bad"}">
        <input data-i="${o}" data-f="expr" value="${Wt(a.expr)}" inputmode="decimal" autocapitalize="off" autocomplete="off" spellcheck="false" class="${r[a.name]?"bad":""}">
        <span class="pv">${r[a.name]?"\u26A0":ve(s[a.name])}</span><button class="icon" data-del="${o}" aria-label="Elimina">${le("trash",18)}</button></div>`).join(""):'<p class="empty">Nessun parametro</p>'};i(),t.addEventListener("input",s=>{let r=s.target.dataset.i;r!=null&&(n[+r][s.target.dataset.f]=s.target.value.trim(),clearTimeout(t._t),t._t=setTimeout(()=>{let a=document.activeElement,o=a&&a.dataset?[a.dataset.i,a.dataset.f,a.selectionStart]:null;if(i(),o){let l=t.querySelector(`input[data-i="${o[0]}"][data-f="${o[1]}"]`);if(l){l.focus();try{l.setSelectionRange(o[2],o[2])}catch{}}}},400))}),t.addEventListener("click",s=>{let r=s.target.closest("button");if(r){if(r.dataset.add!==void 0){let a=n.length+1;for(;n.some(o=>o.name===`p${a}`);)a++;n.push({name:`p${a}`,expr:"10"}),i()}else if(r.dataset.del)n.splice(+r.dataset.del,1),i();else if(r.dataset.apply!==void 0){let a=n.find(l=>!Xd(l.name)||n.filter(c=>c.name===l.name).length>1);if(a){we(`Nome non valido: ${a.name}`,"warn");return}let{scope:o}=Oi(n);Ze(l=>{l.params=n;for(let c of l.features)if(c.type==="sketch"&&(c.cons||[]).some(h=>h.expr!=null&&!Number.isFinite(Number(h.expr)))){let h=xc(c,o);h.ok&&(c.geo=h.geo)}}),e()}}})})}function AM(){let n=document.createElement("input");n.type="file",n.accept=".stl,.step,.stp,.svg",n.onchange=async()=>{let t=n.files[0];if(!t)return;if(/\.svg$/i.test(t.name)){CM(t);return}if(t.size>25e6){we("File troppo grande (max 25 MB)","warn");return}let e=new Uint8Array(await t.arrayBuffer()),i="";for(let a=0;a<e.length;a+=32768)i+=String.fromCharCode.apply(null,e.subarray(a,a+32768));let s=/\.stl$/i.test(t.name)?"stl":"step",r={id:Ga(),type:"import",name:t.name,format:s,fname:t.name,data:btoa(i),hash:`${t.size}-${t.lastModified}`};Ze(a=>{a.features.splice(_r(),0,r),a.rollback!=null&&(a.rollback+=1)})},n.click()}async function CM(n){let t;try{t=am(await n.text())}catch(a){we(a.message,"warn");return}let{box:e}=t,i="XY",s="center",r=n.name.replace(/\.svg$/i,"");an(`<h2>Importa SVG come schizzo</h2>
    <p class="note"><b>${Wt(n.name)}</b> \xB7 misure nel file: ${ve(e.w,2)} \xD7 ${ve(e.h,2)} mm${t.skipped?` \xB7 ${t.skipped} elementi non importabili (testi o riferimenti: convertili in tracciati)`:""}</p>
    <div class="field"><label>Piano</label><div class="seg wide"><button data-pl="XY" class="on">XY <small>pianta</small></button><button data-pl="XZ">XZ <small>fronte</small></button><button data-pl="YZ">YZ <small>lato</small></button></div></div>
    <div class="field"><label>Larghezza finale (le proporzioni restano)</label><div class="num"><input data-w value="${ve(e.w,2)}" inputmode="decimal" autocomplete="off"><span class="unit">mm</span></div><div class="val" data-h></div></div>
    <div class="field"><label>Posizione</label><div class="seg"><button data-an="center" class="on">Centrato sull'origine</button><button data-an="corner">Angolo in basso a sinistra sull'origine</button></div></div>
    <div class="field row"><label>Blocca la forma importata <small class="note">(consigliato: lo schizzo resta veloce)</small></label><button class="switch on" data-fix role="switch"><span></span></button></div>
    <footer><button class="btn" data-close>Annulla</button><button class="btn primary" data-go>Importa</button></footer>`,(a,o)=>{let l=a.querySelector("[data-w]"),c=a.querySelector("[data-h]"),h=()=>{let u=parseFloat(l.value.replace(",","."));c.textContent=u>0?`altezza ${ve(e.h*u/e.w,2)} mm`:"valore non valido",c.classList.toggle("bad",!(u>0))};h(),l.oninput=h,a.addEventListener("click",u=>{let d=u.target.closest("button");if(d){if(d.dataset.pl)i=d.dataset.pl,a.querySelectorAll("[data-pl]").forEach(f=>f.classList.toggle("on",f===d));else if(d.dataset.an)s=d.dataset.an,a.querySelectorAll("[data-an]").forEach(f=>f.classList.toggle("on",f===d));else if(d.dataset.fix!==void 0)d.classList.toggle("on");else if(d.dataset.go!==void 0){let f=parseFloat(l.value.replace(",","."));if(!(f>0))return;let{geo:g,stats:y}=om(t,{scale:e.w>0?f/e.w:1,anchor:s,fixed:a.querySelector("[data-fix]").classList.contains("on")}),p={id:Ga(),type:"sketch",name:r,plane:{std:i},geo:[...Ac(),...g],cons:[]};o(),Ze(m=>{m.features.splice(_r(),0,p),m.rollback!=null&&(m.rollback+=1)}),we(`Importati ${y.lines} segmenti, ${y.arcs} archi, ${y.circles} cerchi`,"ok"),Tm(p),oe.view(i==="XY"?"top":i==="XZ"?"front":"right")}}})})}function Dm(n=null){let t=(I.model&&I.model.bodies||[]).filter(s=>!I.doc.ui.hidden[s.id]);if(!t.length){we("Non ci sono corpi visibili da esportare","warn");return}let e=new Set(n||t.map(s=>s.id)),i="threemf";an(`<h2>Esporta</h2>
    <div class="field"><label>Formato</label><div class="seg wide">
      <button data-fmt="threemf" class="on">3MF <small>stampa 3D</small></button><button data-fmt="stl">STL</button><button data-fmt="step">STEP <small>CAD</small></button></div></div>
    <p class="note fmt-note">Il 3MF tiene separati i corpi: in Bambu Studio diventano oggetti distinti.</p>
    <div class="field"><label>Corpi</label><div class="checks">${t.map(s=>`<label class="chk"><input type="checkbox" value="${s.id}" ${e.has(s.id)?"checked":""}> ${Wt(I.doc.ui.names[s.id]||s.name)}</label>`).join("")}</div></div>
    <div class="out"></div>
    <footer><button class="btn" data-close>Chiudi</button><button class="btn primary" data-go>Prepara file</button></footer>`,s=>{let r={threemf:"Il 3MF tiene separati i corpi: in Bambu Studio diventano oggetti distinti.",stl:"L'STL unisce i corpi scelti in un'unica mesh.",step:"Lo STEP conserva le superfici esatte: si riapre in Fusion, FreeCAD, Onshape."};s.addEventListener("click",async a=>{let o=a.target.closest("button");if(!o)return;if(o.dataset.fmt){i=o.dataset.fmt,s.querySelectorAll("[data-fmt]").forEach(h=>h.classList.toggle("on",h===o)),s.querySelector(".fmt-note").textContent=r[i];return}if(o.dataset.go===void 0)return;let l=[...s.querySelectorAll(".checks input:checked")].map(h=>h.value);if(!l.length){we("Scegli almeno un corpo","warn");return}o.disabled=!0;let c=s.querySelector(".out");c.innerHTML='<p class="note">Preparo il file\u2026</p>';try{let h=i==="threemf"?"3mf":i,u=await Wa.call("export",{format:h,ids:l,name:I.doc.name}),d={"3mf":"3mf",stl:"stl",step:"step"}[h],f={"3mf":"model/3mf",stl:"model/stl",step:"model/step"}[h],g=l.length===1?I.doc.ui.names[l[0]]||t.find(m=>m.id===l[0]).name:I.doc.name,y=new File([u],`${Nm(g)}.${d}`,{type:f});c.innerHTML=`<div class="ready">${le("check",18)} <b>${Wt(y.name)}</b> <small>${ve(y.size/1024/1024,2)} MB</small></div><div class="ready-act">${Um(y)?'<button class="btn primary" data-share>Condividi / Salva su File</button>':""}<button class="btn" data-dl>Scarica</button></div>`,c.querySelector("[data-dl]").onclick=()=>mu(y);let p=c.querySelector("[data-share]");p&&(p.onclick=()=>navigator.share({files:[y],title:y.name}).catch(()=>{}))}catch(h){c.innerHTML=`<p class="err">${Wt(h.message)}</p>`}o.disabled=!1})})}var Nm=n=>String(n).replace(/[\\/:*?"<>|]+/g,"_").trim()||"modello";function Um(n){try{return!!(navigator.canShare&&navigator.canShare({files:[n]})&&matchMedia("(pointer: coarse)").matches)}catch{return!1}}function mu(n){let t=URL.createObjectURL(n),e=document.createElement("a");e.href=t,e.download=n.name,document.body.appendChild(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}async function gu(){let n=await Nc(),t=pi.user,e=s=>t?s.remoteOnly?`<span class="badge on">${le("cloud",14)} online</span>`:s.dirty?`<span class="badge up">${le("cloudup",14)} da caricare</span>`:`<span class="badge ok">${le("cloudok",14)}</span>`:"",i=Ic()?t?`<button class="acctbar" data-acct>${le("cloudok",18)}<span>Salvati online come <b>${Wt(t.name||t.email||"")}</b></span></button>`:`<button class="acctbar off" data-acct>${le("cloud",18)}<span>Questi progetti sono solo su questo dispositivo. <b>Accedi con Google</b> per ritrovarli ovunque.</span></button>`:"";an(`<h2>Progetti</h2>${i}
    <div class="proj-actions"><button class="btn primary" data-new>${le("plus",16)} Nuovo</button><button class="btn" data-import>${le("import",16)} Apri file .officina</button><button class="btn" data-export>${le("export",16)} Salva copia su file</button></div>
    <div class="projects">${n.map(s=>`<div class="proj ${s.id===I.project.id?"on":""}"><button class="name" data-open="${s.id}"><b>${Wt(s.name)}</b><small>${s.features!=null?`${s.features} feature \xB7 `:""}${new Date(s.updated).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})} ${e(s)}</small></button>
      <button class="icon" data-dup="${s.id}" title="Duplica">${le("plus",18)}</button><button class="icon" data-del="${s.id}" title="Elimina">${le("trash",18)}</button></div>`).join("")}</div>
    <footer><button class="btn" data-close>Chiudi</button></footer>`,(s,r)=>{s.addEventListener("click",async a=>{let o=a.target.closest("button");if(o){if(o.dataset.acct!==void 0){r(),xm();return}if(o.dataset.new!==void 0){let l=await qc("Nome del nuovo progetto","Nuovo progetto");if(!l)return;r(),await xs({id:vs(),name:l,doc:za(l),dirty:!0})}else if(o.dataset.open){if(o.dataset.open===I.project.id){r();return}let l=await pr(o.dataset.open);r(),await xs(l)}else if(o.dataset.dup){let l=await pr(o.dataset.dup);if(!l.doc)try{l=await pi.ensureLocal(l.id)}catch(u){we(u.message,"warn");return}let c=`${l.name} (copia)`;l.doc.name=c;let h=vs();await Ba({id:h,name:c,doc:l.doc,rev:0,dirty:!0}),pi.schedulePush(h),r(),gu()}else if(o.dataset.del){if(o.dataset.confirm!=="1"){o.dataset.confirm="1",o.classList.add("danger"),o.title="Tocca di nuovo per eliminare",we("Tocca di nuovo il cestino per eliminare","warn");return}if(await au(o.dataset.del),pi.remove(o.dataset.del),o.dataset.del===I.project.id){let l=await Nc();r(),l.length?await xs(await pr(l[0].id)):await xs({id:vs(),name:"Nuovo progetto",doc:za("Nuovo progetto"),dirty:!0})}else r(),gu()}else if(o.dataset.export!==void 0){let l=new File([JSON.stringify(I.doc)],`${Nm(I.doc.name)}.officina`,{type:"application/json"});Um(l)?navigator.share({files:[l]}).catch(()=>mu(l)):mu(l)}else if(o.dataset.import!==void 0){let l=document.createElement("input");l.type="file",l.accept=".officina,.json,application/json",l.onchange=async()=>{try{let c=JSON.parse(await l.files[0].text());if(c.app!=="officina")throw new Error("Non \xE8 un progetto Officina");r(),await xs({id:vs(),name:c.name,doc:c,dirty:!0})}catch(c){we(c.message,"warn")}},l.click()}}})})}function an(n,t){let e=$t("#modal");e.hidden=!1,e.innerHTML=`<div class="sheet" role="dialog" aria-modal="true">${n}</div>`;let i=e.firstElementChild,s=()=>{e.hidden=!0,e.innerHTML="",document.removeEventListener("keydown",r)},r=a=>{a.key==="Escape"&&s()};return document.addEventListener("keydown",r),e.onclick=a=>{(a.target===e||a.target.closest("[data-close]"))&&s()},t&&t(i,s),s}function qc(n,t){return new Promise(e=>{let i=!1,s=an(`<h2>${Wt(n)}</h2><input class="big" value="${Wt(t)}" autocomplete="off"><footer><button class="btn" data-close>Annulla</button><button class="btn primary" data-ok>OK</button></footer>`,(o,l)=>{let c=o.querySelector("input");setTimeout(()=>{c.focus(),c.select()},30);let h=()=>{i=!0,e(c.value.trim()),l()};o.querySelector("[data-ok]").onclick=h,c.onkeydown=u=>{u.key==="Enter"&&h()}}),r=$t("#modal"),a=new MutationObserver(()=>{r.hidden&&(a.disconnect(),i||e(null))});a.observe(r,{attributes:!0})})}function RM({title:n,value:t,options:e,option:i,allowDelete:s}){return new Promise(r=>{let a=!1,o=i;an(`<h2>${Wt(n)}</h2>
      ${e?`<div class="seg wide">${e.map(([h,u])=>`<button data-o="${h}" class="${h===i?"on":""}">${u}</button>`).join("")}</div>`:""}
      <input class="big" value="${Wt(t)}" inputmode="decimal" autocomplete="off" autocapitalize="off" spellcheck="false">
      <div class="val"></div>
      ${I.doc.params.length?`<div class="chips">${I.doc.params.map(h=>`<button class="chip" data-p="${Wt(h.name)}">${Wt(h.name)}</button>`).join("")}</div>`:""}
      <footer>${s?`<button class="btn danger" data-rm>${le("trash",16)} Elimina quota</button>`:""}<span class="grow"></span><button class="btn" data-close>Annulla</button><button class="btn primary" data-ok>OK</button></footer>`,(h,u)=>{let d=h.querySelector("input"),f=h.querySelector(".val"),g=()=>{try{let p=fi(d.value,Oi(I.doc.params).scope);f.textContent=String(d.value).trim()===ve(p)?"":`= ${ve(p)}`,f.classList.remove("bad")}catch(p){f.textContent=p.message,f.classList.add("bad")}};g(),setTimeout(()=>{d.focus(),d.select()},30),d.oninput=g;let y=()=>{try{fi(d.value,Oi(I.doc.params).scope)}catch{return}a=!0,r({value:d.value.trim(),option:o}),u()};d.onkeydown=p=>{p.key==="Enter"&&y()},h.addEventListener("click",p=>{let m=p.target.closest("button");if(m){if(m.dataset.ok!==void 0)y();else if(m.dataset.rm!==void 0)a=!0,r({remove:!0}),u();else if(m.dataset.o)o=m.dataset.o,h.querySelectorAll("[data-o]").forEach(_=>_.classList.toggle("on",_===m));else if(m.dataset.p){let _=d.selectionStart??d.value.length;d.value=d.value.slice(0,_)+m.dataset.p+d.value.slice(d.selectionEnd??_),d.focus(),g()}}})});let l=$t("#modal"),c=new MutationObserver(()=>{l.hidden&&(c.disconnect(),a||r(null))});c.observe(l,{attributes:!0})})}function Om(n,t){let e=$t("#popover"),i=t.filter(Boolean);e.innerHTML=`<div class="menu">${i.map((h,u)=>`<button data-mi="${u}" class="${h.cls||""}" ${h.disabled?"disabled":""}>${h.disabled?"":h.icon?le(h.icon,18):'<span class="ic-pad"></span>'}<span>${Wt(h.label)}</span></button>`).join("")}</div>`,e.hidden=!1;let s=e.firstElementChild,r=n.getBoundingClientRect(),a=s.offsetWidth,o=s.offsetHeight,l=Math.min(window.innerWidth-a-8,Math.max(8,r.left)),c=r.top-o-6;c<8&&(c=Math.min(window.innerHeight-o-8,r.bottom+6)),s.style.left=l+"px",s.style.top=c+"px",e.onclick=h=>{let u=h.target.closest("[data-mi]");e.hidden=!0,e.innerHTML="",u&&i[+u.dataset.mi].act()}}function we(n,t=""){let e=document.createElement("div");e.className=`toast ${t}`,e.textContent=n,$t("#toasts").appendChild(e),setTimeout(()=>e.classList.add("out"),3200),setTimeout(()=>e.remove(),3700)}function Ya(n){let t=$t("#hint");t.textContent=n||"",t.hidden=!n}function PM(n,t=""){let e=$t("#status");e.textContent=n,e.className=t}function Vc(n){document.body.classList.toggle("busy",n)}function du(n,t=!1){let e=$t("#loading");if(!n){e.hidden=!0;return}e.hidden=!1,e.querySelector("p").textContent=n,e.classList.toggle("err",t)}var IM=()=>{$t("#browser").classList.remove("open")};function Un(){rn(),Ms(),Su(),Xc(),document.body.dataset.mode=I.mode,$t("#sketchStatus").hidden=I.mode!=="sketch",I.mode!=="model"&&(ts(),$t("#selbar").hidden=!0),I.mode==="model"&&I.pendingRemote&&setTimeout(vm,0),(I.mode==="model"||I.mode==="sketch")&&Ya(""),Fm()}function Fm(){let n=$t("#welcome"),t=I.mode==="model"&&I.doc&&I.doc.features.length===0;n.hidden=!t,!(!t||n.dataset.ready)&&(n.dataset.ready="1",n.innerHTML=`<h2>Come si crea un pezzo</h2>
    <ol>
      <li>${le("sketch")}<div><b>Schizzo</b><span>Scegli un piano e disegna una forma chiusa: linee, rettangoli, cerchi. Dai le misure con <i>Quota</i>.</span></div></li>
      <li>${le("extrude")}<div><b>Estrudi</b><span>Tocca la forma azzurra e scegli lo spessore: diventa un solido.</span></div></li>
      <li>${le("fillet")}<div><b>Rifinisci</b><span>Raccordi, fori, gusci\u2026 ogni passo resta nella cronologia in basso e si pu\xF2 modificare.</span></div></li>
      <li>${le("export")}<div><b>Esporta</b><span>3MF per Bambu Studio, STL o STEP.</span></div></li>
    </ol>
    <div class="w-act"><button class="btn primary" data-wstart>${le("sketch",18)} Inizia uno schizzo</button><button class="btn" data-whelp>Guida completa</button></div>`,n.onclick=e=>{e.target.closest("[data-wstart]")?Mu():e.target.closest("[data-whelp]")&&Bm()})}var LM={model:[["Muoversi",[["view","Un dito ruota, due dita spostano e ingrandiscono. In basso a sinistra: viste Alto, Fronte, Destra e Adatta."],["tree","Il pannello Corpi elenca corpi, schizzi e parametri: con l'occhio li mostri o nascondi."]]],["Creare",[["sketch","Schizzo: tocca un piano (o una faccia piana) e disegna. Si chiude con \xABFine schizzo\xBB."],["extrude","Estrudi: tocca le forme azzurre (diventano blu, poi scegli Estrudi dalla barra in basso) e regola lo spessore. \xABTaglia\xBB la scava dentro un corpo."],["move","Frecce di controllo: in Estrudi, Foro, Raccordo, Smusso, Guscio, Rivoluzione (arco) e Sposta (X/Y/Z) trascina la freccia blu per cambiare la misura; il passo si adatta allo zoom. Grigia = misura legata a un parametro, si cambia nel pannello."],["revolve","Rivoluzione: fa ruotare una forma attorno a un asse (X, Y, Z o una linea dello schizzo), come al tornio."],["hole","Foro: tocca una faccia piana dove forare, anche pi\xF9 punti. Diametro, profondit\xE0 o passante, lamatura."],["svg","Importa: STL e STEP diventano corpi; un SVG diventa uno schizzo (scegli piano e larghezza), pronto da estrudere."]]],["Modificare",[["fillet","Raccordo e Smusso: tocca gli spigoli da arrotondare o smussare. Puoi anche selezionarli prima nel modello (tocco sugli spigoli) e poi premere il comando, o usare i pulsanti della barra di selezione."],["shell","Guscio: tocca le facce da togliere, il pezzo si svuota con lo spessore scelto."],["combine","Combina: unisce, sottrae o interseca corpi diversi."],["pattern","Serie: ripete una feature o un corpo in fila o in cerchio. Specchio: lo copia simmetrico rispetto a un piano."]]],["Cronologia e parametri",[["rollback","Ogni comando \xE8 un passo nella barra in basso: toccalo per modificarlo, sopprimerlo o eliminarlo."],["params","fx Parametri: dai un nome alle misure (es. larghezza = 60) e usale ovunque, anche come larghezza/2."]]]],sketch:[["Disegnare",[["line","Linea: tocca un punto dopo l'altro; la catena continua finch\xE9 non torni al primo punto. Doppio tocco o Esc per fermarti."],["rect","Rettangolo: due angoli opposti. Cerchio: centro e raggio. Arco: inizio, fine e un punto di passaggio."],["polygon","Poligono: esagono, ottagono\u2026 (da 3 a 12 lati). Tocca il centro, poi grandezza e rotazione. Nella barra scegli se la misura \xE8 tra i lati piatti (la chiave, es. dado M5 = 8 mm) o tra gli angoli. Resta regolare anche cambiando la quota."],["point","Punto: punti liberi, ad esempio i centri dei fori."],["dim","Misure esatte. Col dito: mentre disegni compare in basso la barra per lunghezza e angolo, larghezza e altezza, diametro. Col mouse: scrivi subito il numero, Tab passa all'angolo, Invio conferma; il valore scritto si blocca e il punto segue il mouse solo sull'altra misura."]]],["Quote",[["dim","Quota: tocca una linea (lunghezza), un cerchio (diametro), due punti (distanza) o due linee (angolo). Tocca una quota esistente per cambiarla; accetta parametri."]]],["Modificare",[["select","Seleziona: trascina punti e linee; un dito sul vuoto sposta la vista."],["trim","Taglia: tocca il pezzo di linea o cerchio da togliere; si taglia tra gli incroci con le altre curve."],["offset","Offset: tocca un contorno (si prende tutto il tratto collegato), scrivi la distanza; \xABDall'altro lato\xBB lo sposta dentro/fuori."],["fillet","Raccordo e Smusso: tocca gli angoli (anche pi\xF9 di uno) e scrivi raggio o distanza. Se avevi gi\xE0 selezionato angoli o coppie di linee, sono gi\xE0 dentro."],["mirror","Specchia: il pannello ha due campi, Oggetti e Linea di specchio. Tocca un campo per attivarlo, poi tocca nel disegno. La copia resta simmetrica anche se modifichi l'originale."],["construction","Costruzione: trasforma le linee selezionate in tratteggiate di riferimento (non formano profili, servono come aiuto o asse)."]]],["Vincoli",[["horizontal","Tocca il vincolo e poi gli elementi, uno dopo l'altro: Orizzontale/Verticale (una linea), Parallela/Perpendicolare (due linee), Tangente, Uguale, Coincidente\u2026"],["fix","In basso a sinistra \xABLiberi: N\xBB dice quanti movimenti restano: a 0 lo schizzo \xE8 completamente definito e diventa nero."]]]]};function Bm(n=I.mode==="sketch"?"sketch":"model"){let t=(i,s)=>`<h3 class="hs">${s}</h3>`+LM[i].map(([r,a])=>`<h4>${r}</h4><ul class="help">${a.map(([o,l])=>`<li>${le(o)}<span>${Wt(l)}</span></li>`).join("")}</ul>`).join(""),e=n==="sketch"?[t("sketch","Nello schizzo"),t("model","Nel modello 3D")]:[t("model","Nel modello 3D"),t("sketch","Nello schizzo")];an(`<h2>Guida rapida</h2>${e.join("")}<footer><button class="btn primary" data-close>Ho capito</button></footer>`)}$t("#btnHelp").onclick=()=>Bm();$t("#btnProjects").onclick=gu;$t("#btnCloud").onclick=xm;$t("#btnTree").onclick=()=>$t("#browser").classList.toggle("open");$t("#btnUndo").onclick=Mm;$t("#btnRedo").onclick=fu;$t("#btnParams").onclick=km;$t("#btnExport").onclick=()=>Dm();$t("#docName").onclick=async()=>{if(I.mode!=="model")return;let n=await qc("Nome del progetto",I.doc.name);n&&(Ze(t=>{t.name=n},{rebuild:!1}),I.project.name=n)};$t("#sketchFinish").querySelector("[data-finish]").onclick=()=>$c(!0);$t("#sketchFinish").querySelector("[data-discard]").onclick=()=>$c(!1);$t("#viewbar").addEventListener("click",n=>{let t=n.target.closest("[data-view]");!t||I.mode==="sketch"||(t.dataset.view==="fit"?oe.fit():oe.view(t.dataset.view))});window.addEventListener("keydown",n=>{if(!n.target.closest("input,select,textarea")&&$t("#modal").hidden&&yM(n)||n.target.closest("input,select,textarea")||!$t("#modal").hidden)return;let t=n.key.toLowerCase();if((n.ctrlKey||n.metaKey)&&t==="z"){n.preventDefault(),n.shiftKey?fu():Mm();return}if((n.ctrlKey||n.metaKey)&&t==="y"){n.preventDefault(),fu();return}if(I.mode==="sketch"){let i={l:"line",r:"rect",c:"circle",a:"arc",p:"point",d:"dim",s:"select",t:"trim",o:"cmd:offset",m:"cmd:smirror",f:"cmd:sfillet"};i[t]&&!n.ctrlKey&&!n.metaKey?(Yt.setTool(i[t]),rn()):t==="delete"||t==="backspace"?Yt.deleteSelection():t==="escape"?(Yt.cancel()||Yt.setTool("select"),rn()):t==="enter"&&$c(!0);return}if(t==="escape"){if(I.mode==="model"&&(I.msel.edges.length||I.msel.faces.length||I.msel.regions.length)){Hc();return}I.mode==="command"?ja():I.mode==="pickPlane"&&(I.mode="model",Un(),mi());return}if(I.mode!=="model")return;let e={e:"extrude",f:"fillet",h:"hole"};t==="s"?Mu():e[t]&&wi(e[t])});document.addEventListener("gesturestart",n=>n.preventDefault());document.addEventListener("dblclick",n=>{n.target.closest("input")||n.preventDefault()});try{Yt.polyN=Math.min(12,Math.max(3,Number(localStorage.getItem("officina.polyN"))||6))}catch{Yt.polyN=6}try{Yt.polyMode=localStorage.getItem("officina.polyMode")==="corners"?"corners":"flats"}catch{Yt.polyMode="flats"}Yt.onPolyPrefs=()=>{try{localStorage.setItem("officina.polyN",String(Yt.polyN)),localStorage.setItem("officina.polyMode",Yt.polyMode)}catch{}};try{Yt.snapGrid=localStorage.getItem("officina.snap")!=="0"}catch{Yt.snapGrid=!0}window.officina={app:I,vp:oe,sketcher:Yt,cad:Wa,commit:Ze,sync:pi,openProject:xs,store:Uc,startSketch:pu,openCommand:wi,okCommand:bu,cancelCommand:ja,finishSketch:$c,refresh:Fi,applyPick:wm,activePickField:qa};for(let n of document.querySelectorAll("[data-icon]"))n.insertAdjacentHTML("afterbegin",le(n.dataset.icon,n.classList.contains("btn")?18:22));"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{});tM();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
