var zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ju=0,yh=1,Yu=2;var la=1,Zu=2,Zs=3,Xn=0,yi=1,xi=2,ls=0,Js=1,xh=2,vh=3,bh=4,Ju=5;var cs=100,Ku=101,Qu=102,tf=103,ef=104,nf=200,sf=201,rf=202,af=203,Mh=204,Sh=205,of=206,lf=207,cf=208,hf=209,df=210,uf=211,ff=212,pf=213,mf=214,bo=0,Mo=1,So=2,Us=3,wo=4,Eo=5,To=6,Ao=7,wh=0,gf=1,_f=2,cn=0,Eh=1,Th=2,Ah=3,Ch=4,Rh=5,Ph=6,Ih=7;var Lh=300,hs=301,Ks=302,ol=303,ll=304,Co=1e3,ln=1001,Ro=1002,Je=1003,yf=1004;var ca=1005;var mi=1006,cl=1007;var Tn=1008;var Ei=1009,Dh=1010,kh=1011,Qs=1012,hl=1013,Ji=1014,Ki=1015,Qi=1016,dl=1017,ul=1018,ds=1020,Nh=35902,Uh=35899,Oh=1021,Fh=1022,tn=1023,Mn=1026,An=1027,Bh=1028,fl=1029,qn=1030,pl=1031;var ml=1033,ha=33776,da=33777,ua=33778,fa=33779,gl=35840,_l=35841,yl=35842,xl=35843,vl=36196,bl=37492,Ml=37496,Sl=37488,wl=37489,pa=37490,El=37491,Tl=37808,Al=37809,Cl=37810,Rl=37811,Pl=37812,Il=37813,Ll=37814,Dl=37815,kl=37816,Nl=37817,Ul=37818,Ol=37819,Fl=37820,Bl=37821,zl=36492,Vl=36494,Hl=36495,Gl=36283,Wl=36284,ma=36285,$l=36286;var Cr=2300,Po=2301,xo=2302,oh=2303,lh=2400,ch=2401,hh=2402;var xf=3200;var Xl=0,vf=1,Cn="",Pi="srgb",Rr="srgb-linear",Pr="linear",Se="srgb";var vo=7680;var bf=519,Mf=512,Sf=513,wf=514,zh=515,Ef=516,Tf=517,Vh=518,Hh=519,Gh=35044;var Wh="300 es",Fi=2e3,Os=2001;function vm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function bm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ir(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Af(){let n=Ir("canvas");return n.style.display="block",n}var lu={},Fs=null;function Lr(...n){let t="THREE."+n.shift();Fs?Fs("log",t,...n):console.log(t,...n)}function Cf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Jt(...n){n=Cf(n);let t="THREE."+n.shift();if(Fs)Fs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ee(...n){n=Cf(n);let t="THREE."+n.shift();if(Fs)Fs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Sr(...n){let t=n.join(" ");t in lu||(lu[t]=!0,Jt(...n))}function Rf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Pf={[bo]:bo,[So]:To,[wo]:wo,[Us]:Eo,[Mo]:Mo,[To]:So,[Ao]:Ao,[Eo]:Us},ji=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cu=1234567,wr=Math.PI/180,Bs=180/Math.PI;function Rn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(li[n&255]+li[n>>8&255]+li[n>>16&255]+li[n>>24&255]+"-"+li[t&255]+li[t>>8&255]+"-"+li[t>>16&15|64]+li[t>>24&255]+"-"+li[e&63|128]+li[e>>8&255]+"-"+li[e>>16&255]+li[e>>24&255]+li[i&255]+li[i>>8&255]+li[i>>16&255]+li[i>>24&255]).toLowerCase()}function se(n,t,e){return Math.max(t,Math.min(e,n))}function $h(n,t){return(n%t+t)%t}function Mm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Sm(n,t,e){return n!==t?(e-n)/(t-n):0}function Er(n,t,e){return(1-e)*n+e*t}function wm(n,t,e,i){return Er(n,t,1-Math.exp(-e*i))}function Em(n,t=1){return t-Math.abs($h(n,t*2)-t)}function Tm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Am(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Cm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Rm(n,t){return n+Math.random()*(t-n)}function Pm(n){return n*(.5-Math.random())}function Im(n){n!==void 0&&(cu=n);let t=cu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lm(n){return n*wr}function Dm(n){return n*Bs}function km(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Nm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Um(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:Jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ql(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function qh(n,t){if(t.constructor===Float32Array)return n;let e=ql(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function jh(n,t){if(t.constructor===Float32Array)return n;let e=ql(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var ga={DEG2RAD:wr,RAD2DEG:Bs,generateUUID:Rn,clamp:se,euclideanModulo:$h,mapLinear:Mm,inverseLerp:Sm,lerp:Er,damp:wm,pingpong:Em,smoothstep:Tm,smootherstep:Am,randInt:Cm,randFloat:Rm,randFloatSpread:Pm,seededRandom:Im,degToRad:Lm,radToDeg:Dm,isPowerOfTwo:km,ceilPowerOfTwo:Nm,floorPowerOfTwo:Xh,setQuaternionFromProperEuler:Um,normalize:jh,denormalize:qh},td=class td{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};td.prototype.isVector2=!0;var Lt=td,Li=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==g){let p=l*d+c*f+h*g+u*x;p<0&&(d=-d,f=-f,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){let _=Math.acos(p),M=Math.sin(_);m=Math.sin(m*_)/M,o=Math.sin(o*_)/M,l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+x*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+x*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ed=class ed{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Uc.copy(this).projectOnVector(t),this.sub(Uc)}reflect(t){return this.sub(Uc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ed.prototype.isVector3=!0;var F=ed,Uc=new F,hu=new Li,id=class id{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],p=s[3],m=s[6],_=s[1],M=s[4],b=s[7],T=s[2],R=s[5],y=s[8];return r[0]=a*x+o*_+l*T,r[3]=a*p+o*M+l*R,r[6]=a*m+o*b+l*y,r[1]=c*x+h*_+u*T,r[4]=c*p+h*M+u*R,r[7]=c*m+h*b+u*y,r[2]=d*x+f*_+g*T,r[5]=d*p+f*M+g*R,r[8]=d*m+f*b+g*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(o*i-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oc.makeScale(t,e)),this}rotate(t){return Sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oc.makeRotation(-t)),this}translate(t,e){return Sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};id.prototype.isMatrix3=!0;var re=id,Oc=new re,du=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uu=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Om(){let n={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Se&&(s.r=bn(s.r),s.g=bn(s.g),s.b=bn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Se&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?Pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Rr]:{primaries:t,whitePoint:i,transfer:Pr,toXYZ:du,fromXYZ:uu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pi},outputColorSpaceConfig:{drawingBufferColorSpace:Pi}},[Pi]:{primaries:t,whitePoint:i,transfer:Se,toXYZ:du,fromXYZ:uu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pi}}}),n}var _e=Om();function bn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var xs,Io=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{xs===void 0&&(xs=Ir("canvas")),xs.width=t.width,xs.height=t.height;let s=xs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=xs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ir("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(bn(e[i]/255)*255):e[i]=bn(e[i]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fm=0,zs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Rn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fc(s[a].image)):r.push(Fc(s[a]))}else r=Fc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Fc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Io.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}var Bm=0,Bc=new F,wi=class n extends ji{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ln,s=ln,r=mi,a=Tn,o=tn,l=Ei,c=n.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Rn(),this.name="",this.source=new zs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Bc).x}get height(){return this.source.getSize(Bc).y}get depth(){return this.source.getSize(Bc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Co:t.x=t.x-Math.floor(t.x);break;case ln:t.x=t.x<0?0:1;break;case Ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Co:t.y=t.y-Math.floor(t.y);break;case ln:t.y=t.y<0?0:1;break;case Ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wi.DEFAULT_IMAGE=null;wi.DEFAULT_MAPPING=Lh;wi.DEFAULT_ANISOTROPY=1;var nd=class nd{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,b=(f+1)/2,T=(m+1)/2,R=(h+d)/4,y=(u+x)/4,A=(g+p)/4;return M>b&&M>T?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=R/i,r=y/i):b>T?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=R/s,r=A/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=y/r,s=A/r),this.set(i,s,r,e),this}let _=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nd.prototype.isVector4=!0;var we=nd,Lo=class extends ji{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new wi({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:mi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new zs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Di=class extends Lo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Dr=class extends wi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Do=class extends wi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var al=class al{constructor(t,e,i,s,r,a,o,l,c,h,u,d,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,u,d,f,g,x,p)}set(t,e,i,s,r,a,o,l,c,h,u,d,f,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new al().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/vs.setFromMatrixColumn(t,0).length(),r=1/vs.setFromMatrixColumn(t,1).length(),a=1/vs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zm,t,Vm)}lookAt(t,e,i){let s=this.elements;return Ci.subVectors(t,e),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),Ln.crossVectors(i,Ci),Ln.lengthSq()===0&&(Math.abs(i.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),Ln.crossVectors(i,Ci)),Ln.normalize(),qa.crossVectors(Ci,Ln),s[0]=Ln.x,s[4]=qa.x,s[8]=Ci.x,s[1]=Ln.y,s[5]=qa.y,s[9]=Ci.y,s[2]=Ln.z,s[6]=qa.z,s[10]=Ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],_=i[3],M=i[7],b=i[11],T=i[15],R=s[0],y=s[4],A=s[8],z=s[12],k=s[1],O=s[5],X=s[9],Q=s[13],U=s[2],G=s[6],tt=s[10],Y=s[14],ht=s[3],W=s[7],lt=s[11],dt=s[15];return r[0]=a*R+o*k+l*U+c*ht,r[4]=a*y+o*O+l*G+c*W,r[8]=a*A+o*X+l*tt+c*lt,r[12]=a*z+o*Q+l*Y+c*dt,r[1]=h*R+u*k+d*U+f*ht,r[5]=h*y+u*O+d*G+f*W,r[9]=h*A+u*X+d*tt+f*lt,r[13]=h*z+u*Q+d*Y+f*dt,r[2]=g*R+x*k+p*U+m*ht,r[6]=g*y+x*O+p*G+m*W,r[10]=g*A+x*X+p*tt+m*lt,r[14]=g*z+x*Q+p*Y+m*dt,r[3]=_*R+M*k+b*U+T*ht,r[7]=_*y+M*O+b*G+T*W,r[11]=_*A+M*X+b*tt+T*lt,r[15]=_*z+M*Q+b*Y+T*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15],_=l*f-c*d,M=o*f-c*u,b=o*d-l*u,T=a*f-c*h,R=a*d-l*h,y=a*u-o*h;return e*(x*_-p*M+m*b)-i*(g*_-p*T+m*R)+s*(g*M-x*T+m*y)-r*(g*b-x*R+p*y)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],_=e*o-i*a,M=e*l-s*a,b=e*c-r*a,T=i*l-s*o,R=i*c-r*o,y=s*c-r*l,A=h*x-u*g,z=h*p-d*g,k=h*m-f*g,O=u*p-d*x,X=u*m-f*x,Q=d*m-f*p,U=_*Q-M*X+b*O+T*k-R*z+y*A;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/U;return t[0]=(o*Q-l*X+c*O)*G,t[1]=(s*X-i*Q-r*O)*G,t[2]=(x*y-p*R+m*T)*G,t[3]=(d*R-u*y-f*T)*G,t[4]=(l*k-a*Q-c*z)*G,t[5]=(e*Q-s*k+r*z)*G,t[6]=(p*b-g*y-m*M)*G,t[7]=(h*y-d*b+f*M)*G,t[8]=(a*X-o*k+c*A)*G,t[9]=(i*k-e*X-r*A)*G,t[10]=(g*R-x*b+m*_)*G,t[11]=(u*b-h*R-f*_)*G,t[12]=(o*z-a*O-l*A)*G,t[13]=(e*O-i*z+s*A)*G,t[14]=(x*M-g*T-p*_)*G,t[15]=(h*T-u*M+d*_)*G,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,p=a*u,m=o*u,_=l*c,M=l*h,b=l*u,T=i.x,R=i.y,y=i.z;return s[0]=(1-(x+m))*T,s[1]=(f+b)*T,s[2]=(g-M)*T,s[3]=0,s[4]=(f-b)*R,s[5]=(1-(d+m))*R,s[6]=(p+_)*R,s[7]=0,s[8]=(g+M)*y,s[9]=(p-_)*y,s[10]=(1-(d+x))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=vs.set(s[0],s[1],s[2]).length(),o=vs.set(s[4],s[5],s[6]).length(),l=vs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),$i.copy(this);let c=1/a,h=1/o,u=1/l;return $i.elements[0]*=c,$i.elements[1]*=c,$i.elements[2]*=c,$i.elements[4]*=h,$i.elements[5]*=h,$i.elements[6]*=h,$i.elements[8]*=u,$i.elements[9]*=u,$i.elements[10]*=u,e.setFromRotationMatrix($i),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Fi,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===Fi)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Os)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Fi,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===Fi)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Os)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};al.prototype.isMatrix4=!0;var Ce=al,vs=new F,$i=new Ce,zm=new F(0,0,0),Vm=new F(1,1,1),Ln=new F,qa=new F,Ci=new F,fu=new Ce,pu=new Li,Sn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pu.setFromEuler(this),this.setFromQuaternion(pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Vs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hm=0,mu=new F,bs=new Li,gn=new Ce,ja=new F,_r=new F,Gm=new F,Wm=new Li,gu=new F(1,0,0),_u=new F(0,1,0),yu=new F(0,0,1),xu={type:"added"},$m={type:"removed"},Ms={type:"childadded",child:null},zc={type:"childremoved",child:null},ti=class n extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,e=new Sn,i=new Li,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new re}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(gu,t)}rotateY(t){return this.rotateOnAxis(_u,t)}rotateZ(t){return this.rotateOnAxis(yu,t)}translateOnAxis(t,e){return mu.copy(t).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gu,t)}translateY(t){return this.translateOnAxis(_u,t)}translateZ(t){return this.translateOnAxis(yu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ja.copy(t):ja.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(_r,ja,this.up):gn.lookAt(ja,_r,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(gn),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xu),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($m),zc.child=t,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xu),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,Gm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,Wm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ti.DEFAULT_UP=new F(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pi=class extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xm={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new pi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},If={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function Vc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ge=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=i,_e.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=_e.workingColorSpace){if(t=$h(t,1),e=se(e,0,1),i=se(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Vc(a,r,t+1/3),this.g=Vc(a,r,t),this.b=Vc(a,r,t-1/3)}return _e.colorSpaceToWorking(this,s),this}setStyle(t,e=Pi){function i(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pi){let i=If[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bn(t.r),this.g=bn(t.g),this.b=bn(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pi){return _e.workingToColorSpace(ci.copy(this),t),Math.round(se(ci.r*255,0,255))*65536+Math.round(se(ci.g*255,0,255))*256+Math.round(se(ci.b*255,0,255))}getHexString(t=Pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(ci.copy(this),e);let i=ci.r,s=ci.g,r=ci.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(ci.copy(this),e),t.r=ci.r,t.g=ci.g,t.b=ci.b,t}getStyle(t=Pi){_e.workingToColorSpace(ci.copy(this),t);let e=ci.r,i=ci.g,s=ci.b;return t!==Pi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(Ya);let i=Er(Dn.h,Ya.h,e),s=Er(Dn.s,Ya.s,e),r=Er(Dn.l,Ya.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ci=new ge;ge.NAMES=If;var kr=class extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Xi=new F,_n=new F,Hc=new F,yn=new F,Ss=new F,ws=new F,vu=new F,Gc=new F,Wc=new F,$c=new F,Xc=new we,qc=new we,jc=new we,On=class n{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Xi.subVectors(t,e),s.cross(Xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Xi.subVectors(s,e),_n.subVectors(i,e),Hc.subVectors(t,e);let a=Xi.dot(Xi),o=Xi.dot(_n),l=Xi.dot(Hc),c=_n.dot(_n),h=_n.dot(Hc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yn.x),l.addScaledVector(a,yn.y),l.addScaledVector(o,yn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Xc.setScalar(0),qc.setScalar(0),jc.setScalar(0),Xc.fromBufferAttribute(t,e),qc.fromBufferAttribute(t,i),jc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Xc,r.x),a.addScaledVector(qc,r.y),a.addScaledVector(jc,r.z),a}static isFrontFacing(t,e,i,s){return Xi.subVectors(i,e),_n.subVectors(t,e),Xi.cross(_n).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xi.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Xi.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Ss.subVectors(s,i),ws.subVectors(r,i),Gc.subVectors(t,i);let l=Ss.dot(Gc),c=ws.dot(Gc);if(l<=0&&c<=0)return e.copy(i);Wc.subVectors(t,s);let h=Ss.dot(Wc),u=ws.dot(Wc);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(Ss,a);$c.subVectors(t,r);let f=Ss.dot($c),g=ws.dot($c);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(ws,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return vu.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(vu,o);let m=1/(p+x+d);return a=x*m,o=d*m,e.copy(i).addScaledVector(Ss,a).addScaledVector(ws,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gi=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(qi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(qi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=qi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qi):qi.fromBufferAttribute(r,a),qi.applyMatrix4(t.matrixWorld),this.expandByPoint(qi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Za.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Za.copy(i.boundingBox)),Za.applyMatrix4(t.matrixWorld),this.union(Za)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qi),qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yr),Ja.subVectors(this.max,yr),Es.subVectors(t.a,yr),Ts.subVectors(t.b,yr),As.subVectors(t.c,yr),kn.subVectors(Ts,Es),Nn.subVectors(As,Ts),es.subVectors(Es,As);let e=[0,-kn.z,kn.y,0,-Nn.z,Nn.y,0,-es.z,es.y,kn.z,0,-kn.x,Nn.z,0,-Nn.x,es.z,0,-es.x,-kn.y,kn.x,0,-Nn.y,Nn.x,0,-es.y,es.x,0];return!Yc(e,Es,Ts,As,Ja)||(e=[1,0,0,0,1,0,0,0,1],!Yc(e,Es,Ts,As,Ja))?!1:(Ka.crossVectors(kn,Nn),e=[Ka.x,Ka.y,Ka.z],Yc(e,Es,Ts,As,Ja))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xn=[new F,new F,new F,new F,new F,new F,new F,new F],qi=new F,Za=new gi,Es=new F,Ts=new F,As=new F,kn=new F,Nn=new F,es=new F,yr=new F,Ja=new F,Ka=new F,is=new F;function Yc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){is.fromArray(n,r);let o=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=t.dot(is),c=e.dot(is),h=i.dot(is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ge=new F,Qa=new Lt,qm=0,hi=class extends ji{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Gh,this.updateRanges=[],this.gpuType=Ki,this.version=0,this._normalizationScale=t!==void 0?ql(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Qa.fromBufferAttribute(this,e),Qa.applyMatrix3(t),this.setXY(e,Qa.x,Qa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):qh(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):jh(t,this.array)}};var Nr=class extends hi{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ur=class extends hi{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ie=class extends hi{constructor(t,e,i){super(new Float32Array(t),e,i)}},jm=new gi,xr=new F,Zc=new F,_i=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):jm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);let e=xr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(xr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(Zc)),this.expandByPoint(xr.copy(t.center).sub(Zc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ym=0,Oi=new Ce,Jc=new ti,Cs=new F,Ri=new gi,vr=new gi,Ze=new F,$e=class n extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vm(t)?Ur:Nr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new re().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Oi.makeRotationFromQuaternion(t),this.applyMatrix4(Oi),this}rotateX(t){return Oi.makeRotationX(t),this.applyMatrix4(Oi),this}rotateY(t){return Oi.makeRotationY(t),this.applyMatrix4(Oi),this}rotateZ(t){return Oi.makeRotationZ(t),this.applyMatrix4(Oi),this}translate(t,e,i){return Oi.makeTranslation(t,e,i),this.applyMatrix4(Oi),this}scale(t,e,i){return Oi.makeScale(t,e,i),this.applyMatrix4(Oi),this}lookAt(t){return Jc.lookAt(t),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(Ri.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(Ri.min,vr.min),Ri.expandByPoint(Ze),Ze.addVectors(Ri.max,vr.max),Ri.expandByPoint(Ze)):(Ri.expandByPoint(vr.min),Ri.expandByPoint(vr.max))}Ri.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ze.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(t,c),Ze.add(Cs)),s=Math.max(s,i.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new hi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let z=0;z<i.count;z++)o[z]=new F,l[z]=new F;let h=new F,u=new F,d=new F,f=new Lt,g=new Lt,x=new Lt,p=new F,m=new F;function _(z,k,O){c[z]=c[k]=c[O]=1,h.fromBufferAttribute(i,z),u.fromBufferAttribute(i,k),d.fromBufferAttribute(i,O),f.fromBufferAttribute(r,z),g.fromBufferAttribute(r,k),x.fromBufferAttribute(r,O),u.sub(h),d.sub(h),g.sub(f),x.sub(f);let X=1/(g.x*x.y-x.x*g.y);isFinite(X)&&(p.copy(u).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(X),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(X),o[z].add(p),o[k].add(p),o[O].add(p),l[z].add(m),l[k].add(m),l[O].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let z=0,k=M.length;z<k;++z){let O=M[z],X=O.start,Q=O.count;for(let U=X,G=X+Q;U<G;U+=3)_(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let b=new F,T=new F,R=new F,y=new F;function A(z){R.fromBufferAttribute(s,z),y.copy(R);let k=o[z];b.copy(k),b.sub(R.multiplyScalar(R.dot(k))).normalize(),T.crossVectors(y,k);let X=T.dot(l[z])<0?-1:1;a.setXYZW(z,b.x,b.y,b.z,X)}for(let z=0,k=i.count;z<k;++z)c[z]&&A(z);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new hi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new hi(d,h,u)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ko=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gh,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=bu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=bu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function bu(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Rn()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var ui=new F,Yi=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?ql(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ui.fromBufferAttribute(this,e),ui.applyMatrix4(t),this.setXYZ(e,ui.x,ui.y,ui.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ui.fromBufferAttribute(this,e),ui.applyNormalMatrix(t),this.setXYZ(e,ui.x,ui.y,ui.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ui.fromBufferAttribute(this,e),ui.transformDirection(t),this.setXYZ(e,ui.x,ui.y,ui.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Lr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new hi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Lr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):qh(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):jh(t,this.data.array)}},Kc=new F,Zm=new F,Jm=new re,Ii=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Kc.subVectors(i,e).cross(Zm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Kc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Jm.getNormalMatrix(t),s=this.coplanarPoint(Kc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Km=0,wn=class extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Js,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=Sh,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ge().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ii().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Lt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var vn=new F,Qc=new F,to=new F,eo=new F,Fn=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Qc.copy(t).add(e).multiplyScalar(.5),to.copy(e).sub(t).normalize(),eo.copy(this.origin).sub(Qc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(to),o=eo.dot(this.direction),l=-eo.dot(to),c=eo.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Qc).addScaledVector(to,d),f}intersectSphere(t,e){if(t.radius<0)return null;vn.subVectors(t.center,this.origin);let i=vn.dot(this.direction),s=vn.dot(vn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,g=e.x-a.x,x=e.y-a.y,p=e.z-a.z,m=i.x-a.x,_=i.y-a.y,M=i.z-a.z,b=Math.abs(l),T=Math.abs(c),R=Math.abs(h),y,A,z,k,O,X,Q,U,G,tt,Y,ht;if(b>=T&&b>=R?(z=l,X=u,G=g,ht=m,l>=0?(y=c,A=h,k=d,O=f,Q=x,U=p,tt=_,Y=M):(y=h,A=c,k=f,O=d,Q=p,U=x,tt=M,Y=_)):T>=R?(z=c,X=d,G=x,ht=_,c>=0?(y=h,A=l,k=f,O=u,Q=p,U=g,tt=M,Y=m):(y=l,A=h,k=u,O=f,Q=g,U=p,tt=m,Y=M)):(z=h,X=f,G=p,ht=M,h>=0?(y=l,A=c,k=u,O=d,Q=g,U=x,tt=m,Y=_):(y=c,A=l,k=d,O=u,Q=x,U=g,tt=_,Y=m)),z===0)return null;let W=y/z,lt=A/z,dt=1/z,Ot=k-W*X,Qt=O-lt*X,nt=Q-W*G,Pt=U-lt*G,Ht=tt-W*ht,Zt=Y-lt*ht,Nt=Ht*Pt-Zt*nt,ie=Ot*Zt-Qt*Ht,ke=nt*Qt-Pt*Ot;if(s){if(Nt<0||ie<0||ke<0)return null}else if((Nt<0||ie<0||ke<0)&&(Nt>0||ie>0||ke>0))return null;let Kt=Nt+ie+ke;if(Kt===0)return null;let ye=dt*(Nt*X+ie*G+ke*ht);return(Kt>0?ye<0:ye>0)?null:this.at(ye/Kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bn=class extends wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Mu=new Ce,ns=new Fn,io=new _i,Su=new F,no=new F,so=new F,ro=new F,th=new F,ao=new F,wu=new F,oo=new F,Xe=class extends ti{constructor(t=new $e,e=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(th.fromBufferAttribute(u,t),a?ao.addScaledVector(th,h):ao.addScaledVector(th.sub(e),h))}e.add(ao)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(io.containsPoint(ns.origin)===!1&&(ns.intersectSphere(io,Su)===null||ns.origin.distanceToSquared(Su)>(t.far-t.near)**2))&&(Mu.copy(r).invert(),ns.copy(t.ray).applyMatrix4(Mu),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),M=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let b=_,T=M;b<T;b+=3){let R=o.getX(b),y=o.getX(b+1),A=o.getX(b+2);s=lo(this,m,t,i,c,h,u,R,y,A),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let _=o.getX(p),M=o.getX(p+1),b=o.getX(p+2);s=lo(this,a,t,i,c,h,u,_,M,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=_,T=M;b<T;b+=3){let R=b,y=b+1,A=b+2;s=lo(this,m,t,i,c,h,u,R,y,A),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let _=p,M=p+1,b=p+2;s=lo(this,a,t,i,c,h,u,_,M,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Qm(n,t,e,i,s,r,a,o){let l;if(t.side===yi?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Xn,o),l===null)return null;oo.copy(o),oo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(oo);return c<e.near||c>e.far?null:{distance:c,point:oo.clone(),object:n}}function lo(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,no),n.getVertexPosition(l,so),n.getVertexPosition(c,ro);let h=Qm(n,t,e,i,no,so,ro,wu);if(h){let u=new F;On.getBarycoord(wu,no,so,ro,u),s&&(h.uv=On.getInterpolatedAttribute(s,o,l,c,u,new Lt)),r&&(h.uv1=On.getInterpolatedAttribute(r,o,l,c,u,new Lt)),a&&(h.normal=On.getInterpolatedAttribute(a,o,l,c,u,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new F,materialIndex:0};On.getNormal(no,so,ro,d.normal),h.face=d,h.barycoord=u}return h}var No=class extends wi{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Je,h=Je,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ss=new _i,tg=new Lt(.5,.5),co=new F,zn=class{constructor(t=new Ii,e=new Ii,i=new Ii,s=new Ii,r=new Ii,a=new Ii){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Fi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],_=r[12],M=r[13],b=r[14],T=r[15];if(s[0].setComponents(c-a,f-h,m-g,T-_).normalize(),s[1].setComponents(c+a,f+h,m+g,T+_).normalize(),s[2].setComponents(c+o,f+u,m+x,T+M).normalize(),s[3].setComponents(c-o,f-u,m-x,T-M).normalize(),i)s[4].setComponents(l,d,p,b).normalize(),s[5].setComponents(c-l,f-d,m-p,T-b).normalize();else if(s[4].setComponents(c-l,f-d,m-p,T-b).normalize(),e===Fi)s[5].setComponents(c+l,f+d,m+p,T+b).normalize();else if(e===Os)s[5].setComponents(l,d,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){ss.center.set(0,0,0);let e=tg.distanceTo(t.center);return ss.radius=.7071067811865476+e,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(co.x=s.normal.x>0?t.max.x:t.min.x,co.y=s.normal.y>0?t.max.y:t.min.y,co.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(co)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Eu=new Ce,Uo=class n{constructor(){this.coordinateSystem=Fi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Eu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new zn),i[s].setFromProjectionMatrix(Eu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new zn),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Vn=class extends wn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Oo=new F,Fo=new F,Tu=new Ce,br=new Fn,ho=new _i,eh=new F,Au=new F,Or=class extends ti{constructor(t=new $e,e=new Vn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Oo.fromBufferAttribute(e,s-1),Fo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Oo.distanceTo(Fo);t.setAttribute("lineDistance",new Ie(i,1))}else Jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(s),ho.radius+=r,t.ray.intersectsSphere(ho)===!1)return;Tu.copy(s).invert(),br.copy(t.ray).applyMatrix4(Tu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=c){let m=h.getX(x),_=h.getX(x+1),M=uo(this,t,br,l,m,_,x);M&&e.push(M)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(f),m=uo(this,t,br,l,x,p,g-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=c){let m=uo(this,t,br,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=uo(this,t,br,l,g-1,f,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function uo(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(Oo.fromBufferAttribute(o,s),Fo.fromBufferAttribute(o,r),e.distanceSqToSegment(Oo,Fo,eh,Au)>i)return;eh.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(eh);if(!(c<t.near||c>t.far))return{distance:c,point:Au.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Cu=new F,Ru=new F,Gs=class extends Or{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Cu.fromBufferAttribute(e,s),Ru.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Cu.distanceTo(Ru);t.setAttribute("lineDistance",new Ie(i,1))}else Jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fr=class extends Or{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var Br=class extends wi{constructor(t=[],e=hs,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var En=class extends wi{constructor(t,e,i=Ji,s,r,a,o=Je,l=Je,c,h=Mn,u=1){if(h!==Mn&&h!==An)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},zr=class extends En{constructor(t,e=Ji,i=hs,s,r,a=Je,o=Je,l,c=Mn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Vr=class extends wi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ws=class n extends $e{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2));function g(x,p,m,_,M,b,T,R,y,A,z){let k=b/y,O=T/A,X=b/2,Q=T/2,U=R/2,G=y+1,tt=A+1,Y=0,ht=0,W=new F;for(let lt=0;lt<tt;lt++){let dt=lt*O-Q;for(let Ot=0;Ot<G;Ot++){let Qt=Ot*k-X;W[x]=Qt*_,W[p]=dt*M,W[m]=U,c.push(W.x,W.y,W.z),W[x]=0,W[p]=0,W[m]=R>0?1:-1,h.push(W.x,W.y,W.z),u.push(Ot/y),u.push(1-lt/A),Y+=1}}for(let lt=0;lt<A;lt++)for(let dt=0;dt<y;dt++){let Ot=d+dt+G*lt,Qt=d+dt+G*(lt+1),nt=d+(dt+1)+G*(lt+1),Pt=d+(dt+1)+G*lt;l.push(Ot,Qt,Pt),l.push(Qt,nt,Pt),ht+=6}o.addGroup(f,ht,z),f+=ht,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ki=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Lt:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new F,s=[],r=[],a=[],o=new F,l=new Ce;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(se(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(se(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},$s=class extends ki{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Lt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Bo=class extends $s{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yh(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Pu=new F,Iu=new F,ih=new Yh,nh=new Yh,sh=new Yh,zo=class extends ki{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new F){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Iu.subVectors(s[0],s[1]).add(s[0]),c=Iu);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Pu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Pu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),ih.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,p),nh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,p),sh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(ih.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),nh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),sh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(ih.calc(l),nh.calc(l),sh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Lu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function eg(n,t){let e=1-n;return e*e*t}function ig(n,t){return 2*(1-n)*n*t}function ng(n,t){return n*n*t}function Tr(n,t,e,i){return eg(n,t)+ig(n,e)+ng(n,i)}function sg(n,t){let e=1-n;return e*e*e*t}function rg(n,t){let e=1-n;return 3*e*e*n*t}function ag(n,t){return 3*(1-n)*n*n*t}function og(n,t){return n*n*n*t}function Ar(n,t,e,i,s){return sg(n,t)+rg(n,e)+ag(n,i)+og(n,s)}var Hr=class extends ki{constructor(t=new Lt,e=new Lt,i=new Lt,s=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Lt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ar(t,s.x,r.x,a.x,o.x),Ar(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vo=class extends ki{constructor(t=new F,e=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new F){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ar(t,s.x,r.x,a.x,o.x),Ar(t,s.y,r.y,a.y,o.y),Ar(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Gr=class extends ki{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ho=class extends ki{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wr=class extends ki{constructor(t=new Lt,e=new Lt,i=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Lt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Tr(t,s.x,r.x,a.x),Tr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Go=class extends ki{constructor(t=new F,e=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new F){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Tr(t,s.x,r.x,a.x),Tr(t,s.y,r.y,a.y),Tr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$r=class extends ki{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Lu(o,l.x,c.x,h.x,u.x),Lu(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Lt().fromArray(s))}return this}},Du=Object.freeze({__proto__:null,ArcCurve:Bo,CatmullRomCurve3:zo,CubicBezierCurve:Hr,CubicBezierCurve3:Vo,EllipseCurve:$s,LineCurve:Gr,LineCurve3:Ho,QuadraticBezierCurve:Wr,QuadraticBezierCurve3:Go,SplineCurve:$r}),Wo=class extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Du[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Du[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},rs=class extends Wo{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Gr(this.currentPoint.clone(),new Lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Wr(this.currentPoint.clone(),new Lt(t,e),new Lt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Hr(this.currentPoint.clone(),new Lt(t,e),new Lt(i,s),new Lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new $r(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new $s(t,e,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Xs=class extends rs{constructor(t){super(t),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new rs().fromJSON(s))}return this}};function lg(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Lf(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=fg(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,u=l;for(let d=e;d<s;d+=e){let f=n[d],g=n[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Xr(r,a,e,o,l,c,0),a}function Lf(n,t,e,i,s){let r;if(s===wg(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=ku(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=ku(a/i|0,n[a],n[a+1],r);return r&&qs(r,r.next)&&(jr(r),r=r.next),r}function as(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(qs(e,e.next)||Ue(e.prev,e,e.next)===0)){if(jr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Xr(n,t,e,i,s,r,a){if(!n)return;!a&&r&&yg(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?hg(n,i,s,r):cg(n)){t.push(l.i,n.i,c.i),jr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=dg(as(n),t),Xr(n,t,e,i,s,r,2)):a===2&&ug(n,t,e,i,s,r):Xr(as(n),t,e,i,s,r,1);break}}}function cg(n){let t=n.prev,e=n,i=n.next;if(Ue(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Mr(s,o,r,l,a,c,g.x,g.y)&&Ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hg(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Ue(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),x=Math.max(o,l,c),p=Math.max(h,u,d),m=dh(f,g,t,e,i),_=dh(x,p,t,e,i),M=n.prevZ,b=n.nextZ;for(;M&&M.z>=m&&b&&b.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&Mr(o,h,l,u,c,d,M.x,M.y)&&Ue(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=f&&b.x<=x&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&Mr(o,h,l,u,c,d,b.x,b.y)&&Ue(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&Mr(o,h,l,u,c,d,M.x,M.y)&&Ue(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=_;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&Mr(o,h,l,u,c,d,b.x,b.y)&&Ue(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function dg(n,t){let e=n;do{let i=e.prev,s=e.next.next;!qs(i,s)&&kf(i,e,e.next,s)&&qr(i,s)&&qr(s,i)&&(t.push(i.i,e.i,s.i),jr(e),jr(e.next),e=n=s),e=e.next}while(e!==n);return as(e)}function ug(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&bg(a,o)){let l=Nf(a,o);a=as(a,a.next),l=as(l,l.next),Xr(a,t,e,i,s,r,0),Xr(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function fg(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=Lf(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(vg(c))}s.sort(pg);for(let r=0;r<s.length;r++)e=mg(s[r],e);return e}function pg(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function mg(n,t){let e=gg(n,t);if(!e)return t;let i=Nf(e,n);return as(i,i.next),as(e,e.next)}function gg(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(qs(n,e))return e;do{if(qs(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Df(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);qr(e,n)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&_g(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function _g(n,t){return Ue(n.prev,n,t.prev)<0&&Ue(t.next,n,n.next)<0}function yg(n,t,e,i){let s=n;do s.z===0&&(s.z=dh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,xg(s)}function xg(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function dh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function vg(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Df(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Mr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Df(n,t,e,i,s,r,a,o)}function bg(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Mg(n,t)&&(qr(n,t)&&qr(t,n)&&Sg(n,t)&&(Ue(n.prev,n,t.prev)||Ue(n,t.prev,t))||qs(n,t)&&Ue(n.prev,n,n.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function qs(n,t){return n.x===t.x&&n.y===t.y}function kf(n,t,e,i){let s=po(Ue(n,t,e)),r=po(Ue(n,t,i)),a=po(Ue(e,i,n)),o=po(Ue(e,i,t));return!!(s!==r&&a!==o||s===0&&fo(n,e,t)||r===0&&fo(n,i,t)||a===0&&fo(e,n,i)||o===0&&fo(e,t,i))}function fo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function po(n){return n>0?1:n<0?-1:0}function Mg(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&kf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function qr(n,t){return Ue(n.prev,n,n.next)<0?Ue(n,t,n.next)>=0&&Ue(n,n.prev,t)>=0:Ue(n,t,n.prev)<0||Ue(n,n.next,t)<0}function Sg(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Nf(n,t){let e=uh(n.i,n.x,n.y),i=uh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function ku(n,t,e,i){let s=uh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function jr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function uh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wg(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var fh=class{static triangulate(t,e,i=2){return lg(t,e,i)}},Ns=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Nu(t),Uu(i,t);let a=t.length;e.forEach(Nu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Uu(i,e[l]);let o=fh.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Nu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Uu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Yr=class n extends $e{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let _=m*d-a;for(let M=0;M<c;M++){let b=M*u-r;g.push(b,-_,0),x.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let M=_+c*m,b=_+c*(m+1),T=_+1+c*(m+1),R=_+1+c*m;f.push(M,b,R),f.push(b,T,R)}this.setIndex(f),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var Zr=class n extends $e{constructor(t=new Xs([new Lt(0,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(r,3)),this.setAttribute("uv",new Ie(a,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;Ns.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let _=g[p];Ns.isClockWise(_)===!0&&(g[p]=_.reverse())}let x=Ns.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let _=g[p];f=f.concat(_)}for(let p=0,m=f.length;p<m;p++){let _=f[p];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let p=0,m=x.length;p<m;p++){let _=x[p],M=_[0]+u,b=_[1]+u,T=_[2]+u;i.push(M,b,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Eg(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};function Eg(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Jr=class extends $e{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,s=new F,r=new F;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let g=d,x=d+f;g<x;g+=3)for(let p=0;p<3;p++){let m=o.getX(g+p),_=o.getX(g+(p+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,_),Ou(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Ou(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ie(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Ou(n,t,e){let i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}function us(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Fu(s))s.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Fu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function di(n){let t={};for(let e=0;e<n.length;e++){let i=us(n[e]);for(let s in i)t[s]=i[s]}return t}function Fu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Tg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Zh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var _a={clone:us,merge:di},Ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bi=class extends wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ag,this.fragmentShader=Cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=Tg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ge().setHex(s.value);break;case"v2":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new we().fromArray(s.value);break;case"m3":this.uniforms[i].value=new re().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ce().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$o=class extends Bi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Kr=class extends wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xl,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Xo=class extends wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qo=class extends wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Rs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function mo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Hn=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];t:{e:{let a;i:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break e}a=e.length;break i}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break e}a=i,i=0;break i}break t}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},jo=class extends Hn{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lh,endingEnd:lh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ch:r=t,o=2*e-i;break;case hh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ch:a=t,l=2*i-e;break;case hh:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,_=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,M=(-1-f)*p+(1.5+f)*x+.5*g,b=f*p-f*x;for(let T=0;T!==o;++T)r[T]=m*a[h+T]+_*a[c+T]+M*a[l+T]+b*a[u+T];return r}},Yo=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Zo=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Jo=class extends Hn{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-e)/(s-e),x=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*x+a[l+p]*g;return r}let d=o*2,f=t-1;for(let g=0;g!==o;++g){let x=a[c+g],p=a[l+g],m=f*d+g*2,_=u[m],M=u[m+1],b=t*d+g*2,T=h[b],R=h[b+1],y=Pg(i,e,_,T,s);r[g]=Uf(y,x,M,R,p)}return r}};function Uf(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Rg(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Pg(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Uf(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Rg(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ni=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rs(e,this.TimeBufferType),this.values=Rs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Rs(t.times,Array),values:Rs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),mo(t.settings)&&(i.settings={inTangents:Rs(t.settings.inTangents,Array),outTangents:Rs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Jo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Cr:e=this.InterpolantFactoryMethodDiscrete;break;case Po:e=this.InterpolantFactoryMethodLinear;break;case xo:e=this.InterpolantFactoryMethodSmooth;break;case oh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Jt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return Po;case this.InterpolantFactoryMethodSmooth:return xo;case this.InterpolantFactoryMethodBezier:return oh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;mo(this.settings)&&(Bu(this.settings.inTangents,t),Bu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;mo(this.settings)&&(zu(this.settings.inTangents,t),zu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ee("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&bm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===xo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,mo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Bu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function zu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Ni.prototype.ValueTypeName="";Ni.prototype.TimeBufferType=Float32Array;Ni.prototype.ValueBufferType=Float32Array;Ni.prototype.DefaultInterpolation=Po;var Gn=class extends Ni{constructor(t,e,i){super(t,e,i)}};Gn.prototype.ValueTypeName="bool";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=Cr;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ko=class extends Ni{constructor(t,e,i,s){super(t,e,i,s)}};Ko.prototype.ValueTypeName="color";var Qo=class extends Ni{constructor(t,e,i,s){super(t,e,i,s)}};Qo.prototype.ValueTypeName="number";var tl=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Li.slerpFlat(r,0,a,c-o,a,c,l);return r}},Qr=class extends Ni{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}};Qr.prototype.ValueTypeName="quaternion";Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Wn=class extends Ni{constructor(t,e,i){super(t,e,i)}};Wn.prototype.ValueTypeName="string";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=Cr;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends Ni{constructor(t,e,i,s){super(t,e,i,s)}};el.prototype.ValueTypeName="vector";var il=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Of=new il,nl=class{constructor(t){this.manager=t!==void 0?t:Of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};nl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ta=class extends ti{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ea=class extends ta{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},rh=new Ce,Vu=new F,Hu=new F,sl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Ei,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zn,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Vu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vu),Hu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){rh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(rh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Os||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(rh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},go=new F,_o=new Li,on=new F,ia=class extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(go,_o,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,_o,on.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(go,_o,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,_o,on.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Un=new F,Gu=new Lt,Wu=new Lt,fi=class extends ia{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,Gu,Wu),e.subVectors(Wu,Gu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(wr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var os=class extends ia{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ph=class extends sl{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},na=class extends ta{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.shadow=new ph}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var sa=class extends $e{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Ps=-90,Is=1,js=class extends ti{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fi(Ps,Is,t,e);s.layers=this.layers,this.add(s);let r=new fi(Ps,Is,t,e);r.layers=this.layers,this.add(r);let a=new fi(Ps,Is,t,e);a.layers=this.layers,this.add(a);let o=new fi(Ps,Is,t,e);o.layers=this.layers,this.add(o);let l=new fi(Ps,Is,t,e);l.layers=this.layers,this.add(l);let c=new fi(Ps,Is,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Os)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},rl=class extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Jh="\\[\\]\\.:\\/",Ig=new RegExp("["+Jh+"]","g"),Kh="[^"+Jh+"]",Lg="[^"+Jh.replace("\\.","")+"]",Dg=/((?:WC+[\/:])*)/.source.replace("WC",Kh),kg=/(WCOD+)?/.source.replace("WCOD",Lg),Ng=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kh),Ug=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kh),Og=new RegExp("^"+Dg+kg+Ng+Ug+"$"),Fg=["material","materials","bones","map"],mh=class{constructor(t,e,i){let s=i||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},De=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ig,"")}static parseTrackName(t){let e=Og.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Fg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=mh;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rM=new Float32Array(1);var $n=class extends ko{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var $u=new Ce,ra=class{constructor(t,e,i=0,s=1/0){this.ray=new Fn(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $u.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($u),this}intersectObject(t,e=!0,i=[]){return gh(t,this,i,e),i.sort(Xu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)gh(t[s],this,i,e);return i.sort(Xu),i}};function Xu(n,t){return n.distance-t.distance}function gh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)gh(r[a],t,e,!0)}}var Ys=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var sd=class sd{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};sd.prototype.isMatrix2=!0;var _h=sd;var qu=new F,yo=new F,Ls=new F,Ds=new F,ah=new F,Bg=new F,zg=new F,aa=class{constructor(t=new F,e=new F){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){qu.subVectors(t,this.start),yo.subVectors(this.end,this.start);let i=yo.dot(yo);if(i===0)return 0;let r=yo.dot(qu)/i;return e&&(r=se(r,0,1)),r}closestPointToPoint(t,e,i){let s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Bg,i=zg){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;Ls.subVectors(c,o),Ds.subVectors(h,l),ah.subVectors(o,l);let u=Ls.dot(Ls),d=Ds.dot(Ds),f=Ds.dot(ah);if(u<=s&&d<=s)return e.copy(o),i.copy(l),e.distanceToSquared(i);if(u<=s)r=0,a=f/d,a=se(a,0,1);else{let g=Ls.dot(ah);if(d<=s)a=0,r=se(-g/u,0,1);else{let x=Ls.dot(Ds),p=u*d-x*x;p!==0?r=se((x*f-g*d)/p,0,1):r=0,a=(x*r+f)/d,a<0?(a=0,r=se(-g/u,0,1)):a>1&&(a=1,r=se((x-g)/u,0,1))}}return e.copy(o).addScaledVector(Ls,r),i.copy(l).addScaledVector(Ds,a),e.distanceToSquared(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var oa=class extends ji{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Qh(n,t,e,i){let s=Vg(i);switch(e){case Oh:return n*t;case Bh:return n*t/s.components*s.byteLength;case fl:return n*t/s.components*s.byteLength;case qn:return n*t*2/s.components*s.byteLength;case pl:return n*t*2/s.components*s.byteLength;case Fh:return n*t*3/s.components*s.byteLength;case tn:return n*t*4/s.components*s.byteLength;case ml:return n*t*4/s.components*s.byteLength;case ha:case da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ua:case fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _l:case xl:return Math.max(n,16)*Math.max(t,8)/4;case gl:case yl:return Math.max(n,8)*Math.max(t,8)/2;case vl:case bl:case Sl:case wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ml:case pa:case El:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Il:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case kl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case zl:case Vl:case Hl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Gl:case Wl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ma:case $l:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vg(n){switch(n){case Ei:case Dh:return{byteLength:1,components:1};case Qs:case kh:case Qi:return{byteLength:2,components:1};case dl:case ul:return{byteLength:2,components:4};case Ji:case hl:case Ki:return{byteLength:4,components:1};case Nh:case Uh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function rp(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Gg(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$g=`#ifdef USE_ALPHAHASH
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
#endif`,Xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zg=`#ifdef USE_AOMAP
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
#endif`,Jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kg=`#ifdef USE_BATCHING
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
#endif`,Qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n_=`#ifdef USE_IRIDESCENCE
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
#endif`,s_=`#ifdef USE_BUMPMAP
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
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,h_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,d_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,u_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,f_=`#define PI 3.141592653589793
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
} // validated`,p_=`vec3 transformedNormal = objectNormal;
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
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,__=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x_="gl_FragColor = linearToOutputTexel( gl_FragColor );",v_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b_=`#ifdef USE_ENVMAP
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
#endif`,M_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
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
#endif`,w_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
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
#endif`,T_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P_=`#ifdef USE_GRADIENTMAP
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
}`,I_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,N_=`#ifdef USE_ENVMAP
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
#endif`,U_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z_=`PhysicalMaterial material;
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
#endif`,V_=`uniform sampler2D dfgLUT;
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
}`,H_=`
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
#endif`,G_=`#if defined( RE_IndirectDiffuse )
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
#endif`,W_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,X_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Q_=`#if defined( USE_POINTS_UV )
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
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n0=`#if defined( USE_MORPHCOLORS )
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
#endif`,s0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`#ifdef USE_MORPHTARGETS
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
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
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
#endif`,f0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C0=`float getShadowMask() {
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
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P0=`#ifdef USE_SKINNING
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
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,G0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W0=`uniform sampler2D t2D;
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform float backgroundBlurriness;
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`#include <common>
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
}`,Z0=`#if DEPTH_PACKING == 3200
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
}`,J0=`#define DISTANCE
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
}`,K0=`#define DISTANCE
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ty=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`uniform float scale;
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
}`,iy=`uniform vec3 diffuse;
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
}`,ny=`#include <common>
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
}`,sy=`uniform vec3 diffuse;
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
}`,ry=`#define LAMBERT
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
}`,ay=`#define LAMBERT
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
}`,oy=`#define MATCAP
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
}`,ly=`#define MATCAP
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
}`,cy=`#define NORMAL
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
}`,hy=`#define NORMAL
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
}`,dy=`#define PHONG
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
}`,uy=`#define PHONG
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
}`,fy=`#define STANDARD
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
}`,py=`#define STANDARD
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
}`,my=`#define TOON
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
}`,gy=`#define TOON
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
}`,_y=`uniform float size;
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
}`,yy=`uniform vec3 diffuse;
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
}`,xy=`#include <common>
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
}`,vy=`uniform vec3 color;
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
}`,by=`uniform float rotation;
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
}`,My=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:Wg,alphahash_pars_fragment:$g,alphamap_fragment:Xg,alphamap_pars_fragment:qg,alphatest_fragment:jg,alphatest_pars_fragment:Yg,aomap_fragment:Zg,aomap_pars_fragment:Jg,batching_pars_vertex:Kg,batching_vertex:Qg,begin_vertex:t_,beginnormal_vertex:e_,bsdfs:i_,iridescence_fragment:n_,bumpmap_pars_fragment:s_,clipping_planes_fragment:r_,clipping_planes_pars_fragment:a_,clipping_planes_pars_vertex:o_,clipping_planes_vertex:l_,color_fragment:c_,color_pars_fragment:h_,color_pars_vertex:d_,color_vertex:u_,common:f_,defaultnormal_vertex:p_,displacementmap_pars_vertex:m_,displacementmap_vertex:g_,emissivemap_fragment:__,emissivemap_pars_fragment:y_,colorspace_fragment:x_,colorspace_pars_fragment:v_,envmap_fragment:b_,envmap_common_pars_fragment:M_,envmap_pars_fragment:S_,envmap_pars_vertex:w_,envmap_physical_pars_fragment:N_,envmap_vertex:E_,fog_vertex:T_,fog_pars_vertex:A_,fog_fragment:C_,fog_pars_fragment:R_,gradientmap_pars_fragment:P_,lightmap_pars_fragment:I_,lights_lambert_fragment:L_,lights_lambert_pars_fragment:D_,lights_pars_begin:k_,lights_toon_fragment:U_,lights_toon_pars_fragment:O_,lights_phong_fragment:F_,lights_phong_pars_fragment:B_,lights_physical_fragment:z_,lights_physical_pars_fragment:V_,lights_fragment_begin:H_,lights_fragment_maps:G_,lights_fragment_end:W_,lightprobes_pars_fragment:$_,logdepthbuf_fragment:X_,logdepthbuf_pars_fragment:q_,logdepthbuf_pars_vertex:j_,logdepthbuf_vertex:Y_,map_fragment:Z_,map_pars_fragment:J_,map_particle_fragment:K_,map_particle_pars_fragment:Q_,metalnessmap_fragment:t0,metalnessmap_pars_fragment:e0,morphinstance_vertex:i0,morphcolor_vertex:n0,morphnormal_vertex:s0,morphtarget_pars_vertex:r0,morphtarget_vertex:a0,normal_fragment_begin:o0,normal_fragment_maps:l0,normal_pars_fragment:c0,normal_pars_vertex:h0,normal_vertex:d0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:f0,clearcoat_normal_fragment_maps:p0,clearcoat_pars_fragment:m0,iridescence_pars_fragment:g0,opaque_fragment:_0,packing:y0,premultiplied_alpha_fragment:x0,project_vertex:v0,dithering_fragment:b0,dithering_pars_fragment:M0,roughnessmap_fragment:S0,roughnessmap_pars_fragment:w0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:T0,shadowmap_vertex:A0,shadowmask_pars_fragment:C0,skinbase_vertex:R0,skinning_pars_vertex:P0,skinning_vertex:I0,skinnormal_vertex:L0,specularmap_fragment:D0,specularmap_pars_fragment:k0,tonemapping_fragment:N0,tonemapping_pars_fragment:U0,transmission_fragment:O0,transmission_pars_fragment:F0,uv_pars_fragment:B0,uv_pars_vertex:z0,uv_vertex:V0,worldpos_vertex:H0,background_vert:G0,background_frag:W0,backgroundCube_vert:$0,backgroundCube_frag:X0,cube_vert:q0,cube_frag:j0,depth_vert:Y0,depth_frag:Z0,distance_vert:J0,distance_frag:K0,equirect_vert:Q0,equirect_frag:ty,linedashed_vert:ey,linedashed_frag:iy,meshbasic_vert:ny,meshbasic_frag:sy,meshlambert_vert:ry,meshlambert_frag:ay,meshmatcap_vert:oy,meshmatcap_frag:ly,meshnormal_vert:cy,meshnormal_frag:hy,meshphong_vert:dy,meshphong_frag:uy,meshphysical_vert:fy,meshphysical_frag:py,meshtoon_vert:my,meshtoon_frag:gy,points_vert:_y,points_frag:yy,shadow_vert:xy,shadow_frag:vy,sprite_vert:by,sprite_frag:My},Dt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},vi={basic:{uniforms:di([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:di([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:di([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:di([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:di([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new ge(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:di([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:di([Dt.points,Dt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:di([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:di([Dt.common,Dt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:di([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:di([Dt.sprite,Dt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:di([Dt.common,Dt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:di([Dt.lights,Dt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};vi.physical={uniforms:di([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var jl={r:0,b:0,g:0},Sy=new Ce,ap=new re;ap.set(-1,0,0,0,1,0,0,0,1);function wy(n,t,e,i,s,r){let a=new ge(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let b=_.backgroundBlurriness>0;M=t.get(M,b)}return M}function g(_){let M=!1,b=f(_);b===null?p(a,o):b&&b.isColor&&(p(b,1),M=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,M){let b=f(M);b&&b.isCubeTexture?(c===void 0&&(c=new Xe(new Ws(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:us(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,R,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ap),c.material.toneMapped=_e.getTransfer(b.colorSpace)!==Se,(h!==b||u!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Xe(new Yr(2,2),new Bi({name:"BackgroundMaterial",uniforms:us(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=_e.getTransfer(b.colorSpace)!==Se,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,M){_.getRGB(jl,Zh(n)),e.buffers.color.setClear(jl.r,jl.g,jl.b,M,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(a,o)},render:g,addToRenderList:x,dispose:m}}function Ey(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(O,X,Q,U,G){let tt=!1,Y=u(O,U,Q,X);r!==Y&&(r=Y,c(r.object)),tt=f(O,U,Q,G),tt&&g(O,U,Q,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(tt||a)&&(a=!1,b(O,X,Q,U),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(O){return n.bindVertexArray(O)}function h(O){return n.deleteVertexArray(O)}function u(O,X,Q,U){let G=U.wireframe===!0,tt=i[X.id];tt===void 0&&(tt={},i[X.id]=tt);let Y=O.isInstancedMesh===!0?O.id:0,ht=tt[Y];ht===void 0&&(ht={},tt[Y]=ht);let W=ht[Q.id];W===void 0&&(W={},ht[Q.id]=W);let lt=W[G];return lt===void 0&&(lt=d(l()),W[G]=lt),lt}function d(O){let X=[],Q=[],U=[];for(let G=0;G<e;G++)X[G]=0,Q[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Q,attributeDivisors:U,object:O,attributes:{},index:null}}function f(O,X,Q,U){let G=r.attributes,tt=X.attributes,Y=0,ht=Q.getAttributes();for(let W in ht)if(ht[W].location>=0){let dt=G[W],Ot=tt[W];if(Ot===void 0&&(W==="instanceMatrix"&&O.instanceMatrix&&(Ot=O.instanceMatrix),W==="instanceColor"&&O.instanceColor&&(Ot=O.instanceColor)),dt===void 0||dt.attribute!==Ot||Ot&&dt.data!==Ot.data)return!0;Y++}return r.attributesNum!==Y||r.index!==U}function g(O,X,Q,U){let G={},tt=X.attributes,Y=0,ht=Q.getAttributes();for(let W in ht)if(ht[W].location>=0){let dt=tt[W];dt===void 0&&(W==="instanceMatrix"&&O.instanceMatrix&&(dt=O.instanceMatrix),W==="instanceColor"&&O.instanceColor&&(dt=O.instanceColor));let Ot={};Ot.attribute=dt,dt&&dt.data&&(Ot.data=dt.data),G[W]=Ot,Y++}r.attributes=G,r.attributesNum=Y,r.index=U}function x(){let O=r.newAttributes;for(let X=0,Q=O.length;X<Q;X++)O[X]=0}function p(O){m(O,0)}function m(O,X){let Q=r.newAttributes,U=r.enabledAttributes,G=r.attributeDivisors;Q[O]=1,U[O]===0&&(n.enableVertexAttribArray(O),U[O]=1),G[O]!==X&&(n.vertexAttribDivisor(O,X),G[O]=X)}function _(){let O=r.newAttributes,X=r.enabledAttributes;for(let Q=0,U=X.length;Q<U;Q++)X[Q]!==O[Q]&&(n.disableVertexAttribArray(Q),X[Q]=0)}function M(O,X,Q,U,G,tt,Y){Y===!0?n.vertexAttribIPointer(O,X,Q,G,tt):n.vertexAttribPointer(O,X,Q,U,G,tt)}function b(O,X,Q,U){x();let G=U.attributes,tt=Q.getAttributes(),Y=X.defaultAttributeValues;for(let ht in tt){let W=tt[ht];if(W.location>=0){let lt=G[ht];if(lt===void 0&&(ht==="instanceMatrix"&&O.instanceMatrix&&(lt=O.instanceMatrix),ht==="instanceColor"&&O.instanceColor&&(lt=O.instanceColor)),lt!==void 0){let dt=lt.normalized,Ot=lt.itemSize,Qt=t.get(lt);if(Qt===void 0)continue;let nt=Qt.buffer,Pt=Qt.type,Ht=Qt.bytesPerElement,Zt=Pt===n.INT||Pt===n.UNSIGNED_INT||lt.gpuType===hl;if(lt.isInterleavedBufferAttribute){let Nt=lt.data,ie=Nt.isInterleavedBuffer===!0?Nt.stride:Nt.itemSize,ke=lt.offset;if(Nt.isInstancedInterleavedBuffer||Nt.isInstancedBufferAttribute){for(let Kt=0;Kt<W.locationSize;Kt++)m(W.location+Kt,Nt.meshPerAttribute);O.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let Kt=0;Kt<W.locationSize;Kt++)p(W.location+Kt);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Kt=0;Kt<W.locationSize;Kt++)M(W.location+Kt,Ot/W.locationSize,Pt,dt,ie*Ht,(ke+Ot/W.locationSize*Kt)*Ht,Zt)}else{if(lt.isInstancedBufferAttribute){for(let Nt=0;Nt<W.locationSize;Nt++)m(W.location+Nt,lt.meshPerAttribute);O.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Nt=0;Nt<W.locationSize;Nt++)p(W.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Nt=0;Nt<W.locationSize;Nt++)M(W.location+Nt,Ot/W.locationSize,Pt,dt,Ot*Ht,Ot/W.locationSize*Nt*Ht,Zt)}}else if(Y!==void 0){let dt=Y[ht];if(dt!==void 0)switch(dt.length){case 2:n.vertexAttrib2fv(W.location,dt);break;case 3:n.vertexAttrib3fv(W.location,dt);break;case 4:n.vertexAttrib4fv(W.location,dt);break;default:n.vertexAttrib1fv(W.location,dt)}}}}_()}function T(){z();for(let O in i){let X=i[O];for(let Q in X){let U=X[Q];for(let G in U){let tt=U[G];for(let Y in tt)h(tt[Y].object),delete tt[Y];delete U[G]}}delete i[O]}}function R(O){if(i[O.id]===void 0)return;let X=i[O.id];for(let Q in X){let U=X[Q];for(let G in U){let tt=U[G];for(let Y in tt)h(tt[Y].object),delete tt[Y];delete U[G]}}delete i[O.id]}function y(O){for(let X in i){let Q=i[X];for(let U in Q){let G=Q[U];if(G[O.id]===void 0)continue;let tt=G[O.id];for(let Y in tt)h(tt[Y].object),delete tt[Y];delete G[O.id]}}}function A(O){for(let X in i){let Q=i[X],U=O.isInstancedMesh===!0?O.id:0,G=Q[U];if(G!==void 0){for(let tt in G){let Y=G[tt];for(let ht in Y)h(Y[ht].object),delete Y[ht];delete G[tt]}delete Q[U],Object.keys(Q).length===0&&delete i[X]}}}function z(){k(),a=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:z,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfObject:A,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function Ty(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ay(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==tn&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){let A=y===Qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==Ei&&y!==Ki&&!A&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Jt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:b,maxSamples:T,samples:R}}function Cy(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Ii,o=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let _=r?0:i,M=_*4,b=m.clippingState||null;l.value=b,b=h(g,d,M,f);for(let T=0;T!==M;++T)b[T]=e[T];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,b=f;M!==x;++M,b+=4)a.copy(u[M]).applyMatrix4(_,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var va=class extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Br(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ws(5,5,5),r=new Bi({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yi,blending:ls});r.uniforms.tEquirect.value=e;let a=new Xe(s,r),o=e.minFilter;return e.minFilter===Tn&&(e.minFilter=mi),new js(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Ff=256,Ry=3,Py=20,op=256,lp=16,Iy=3,Ly=new F,Dy=new ge,Zl=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new js(1,10,null),this._boxMesh=new Xe(new Ws(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Ly}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Dy));let p=new js(i,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Ff,Xh(t))}_fromTexture(t,e){t.mapping===hs||t.mapping===Ks?this._setSize(t.image.length===0?Ff:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Bf(t,!1,!1),i=Math.log2(t)-Ry;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Bf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===hs||t.mapping===Ks?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=zf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=ky(),this._integrationMaterial=Ny());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/lp);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Iy)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(op*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Uy());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Bf(n,t,e){return new va(n,{minFilter:Tn,generateMipmaps:t,type:Qi,colorSpace:Rr,depthBuffer:e})}function ba(n,t,e){return new Bi({name:n,uniforms:t,vertexShader:ue.cube_vert,fragmentShader:e,side:yi,blending:ls,depthTest:!1,depthWrite:!1})}function ky(){return ba("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${op}u

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
	`)}function Ny(){return ba("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lp}},`

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
	`)}function Uy(){return ba("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Py}
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
	`)}function zf(){return ba("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Vf(){return ba("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Oy(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===ol||f===ll)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new va(g.height);return x.fromEquirectangularTexture(n,d),t.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===ol||f===ll,x=f===hs||f===Ks;if(g||x){let p=e.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Zl(n)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let _=d.image;return g&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new Zl(n)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===ol?d.mapping=hs:f===ll&&(d.mapping=Ks),d}function l(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function Fy(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Sr("WebGLRenderer: "+i+" extension not supported."),s}}}function By(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let x=r.get(g);x&&(t.remove(x),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(g){let x=g.attributes;for(let p in x)t.update(x[p],n.ARRAY_BUFFER)}function u(g){let x=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let _=x!==null?x.array.length:p.array.length/3-1,M=p.count>=65535?Ur:Nr,b=new M(Math.ceil(_/3)*6,1),T=b.array;if(x!==null){let y=x.array;m=x.version;for(let A=0,z=0;A<_;A+=3){let k=y[A+0],O=y[A+1],X=y[A+2];T[z++]=k,T[z++]=O,T[z++]=O,T[z++]=X,T[z++]=X,T[z++]=k}}else{m=p.version;for(let y=0,A=0;y<_;y+=3){let z=y+0,k=y+1,O=y+2;T[A++]=z,T[A++]=k,T[A++]=k,T[A++]=O,T[A++]=O,T[A++]=z}}b.version=m;let R=r.get(g);R&&t.remove(R),r.set(g,b)}function d(g){let x=r.get(g);if(x){let p=g.index;p!==null&&x.version<p.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let x=s[g].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function zy(n,t,e){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*a),e.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*a,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let x=0;for(let p=0;p<f;p++)x+=d[p];e.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Vy(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ee("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Hy(n,t,e){let i=new WeakMap,s=new we;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let z=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",z)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let b=o.attributes.position.count*M,T=1;b>t.maxTextureSize&&(T=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let R=new Float32Array(b*T*4*u),y=new Dr(R,b,T,u);y.type=Ki,y.needsUpdate=!0;let A=M*4;for(let k=0;k<u;k++){let O=p[k],X=m[k],Q=_[k],U=b*T*4*k;for(let G=0;G<O.count;G++){let tt=G*A;f===!0&&(s.fromBufferAttribute(O,G),R[U+tt+0]=s.x,R[U+tt+1]=s.y,R[U+tt+2]=s.z,R[U+tt+3]=0),g===!0&&(s.fromBufferAttribute(X,G),R[U+tt+4]=s.x,R[U+tt+5]=s.y,R[U+tt+6]=s.z,R[U+tt+7]=0),x===!0&&(s.fromBufferAttribute(Q,G),R[U+tt+8]=s.x,R[U+tt+9]=s.y,R[U+tt+10]=s.z,R[U+tt+11]=Q.itemSize===4?s.w:1)}}d={count:u,texture:y,size:new Lt(b,T)},i.set(o,d),o.addEventListener("dispose",z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Gy(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Wy={[Eh]:"LINEAR_TONE_MAPPING",[Th]:"REINHARD_TONE_MAPPING",[Ah]:"CINEON_TONE_MAPPING",[Ch]:"ACES_FILMIC_TONE_MAPPING",[Ph]:"AGX_TONE_MAPPING",[Ih]:"NEUTRAL_TONE_MAPPING",[Rh]:"CUSTOM_TONE_MAPPING"};function $y(n,t,e,i,s,r){let a=new Di(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new $e;h.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ie([0,2,0,0,2,0],2));let u=new $o({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Xe(h,u),f=new os(-1,1,1,-1,0,1),g=null,x=null,p=!1,m,_=null,M=[],b=!1;this.setSize=function(T,R){a.setSize(T,R),o!==null&&o.setSize(T,R),l!==null&&l.setSize(T,R);for(let y=0;y<M.length;y++){let A=M[y];A.setSize&&A.setSize(T,R)}},this.setEffects=function(T){M=T,b=M.length>0&&M[0].isRenderPass===!0;let R=a.width,y=a.height;M.length>0&&o===null&&(o=new Di(R,y,{type:Qi,depthBuffer:!1,stencilBuffer:!1}),l=new Di(R,y,{type:Qi,depthBuffer:!1,stencilBuffer:!1}));let A=s===!0&&M.some(z=>z.needsDepthTexture===!0);A!==(a.depthTexture!==null)&&(A===!0&&c===null&&(c=new En(R,y),r===!0&&(c.format=An,c.type=ds)),a.dispose(),a.depthTexture=A?c:null,a.resolveDepthBuffer=A,a.storeMultisampledDepthBuffer=A);for(let z=0;z<M.length;z++){let k=M[z];k.setSize&&k.setSize(R,y),A&&k.needsDepthTexture===!0&&k.setDepthTexture&&k.setDepthTexture(c)}},this.begin=function(T,R){if(p||T.toneMapping===cn&&M.length===0)return!1;if(_=R,R!==null){let y=R.width,A=R.height;(a.width!==y||a.height!==A)&&this.setSize(y,A)}return b===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=cn,!0},this.hasRenderPass=function(){return b},this.end=function(T,R){T.toneMapping=m,p=!0;let y=a,A=o;for(let z=0;z<M.length;z++){let k=M[z];k.enabled!==!1&&(k.render(T,A,y,R),k.needsSwap!==!1&&(y=A,A=A===o?l:o))}if(g!==T.outputColorSpace||x!==T.toneMapping){g=T.outputColorSpace,x=T.toneMapping,u.defines={},_e.getTransfer(g)===Se&&(u.defines.SRGB_TRANSFER="");let z=Wy[x];z&&(u.defines[z]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,T.setRenderTarget(_),T.render(d,f),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var cp=new wi,hp=new En(1,1),dp=new zr(1),up=new Dr,fp=new Do,pp=new Br,Hf=[],Gf=[],Wf=new Float32Array(16),$f=new Float32Array(9),Xf=new Float32Array(4);function er(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Hf[s];if(r===void 0&&(r=new Float32Array(s),Hf[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function je(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Kl(n,t){let e=Gf[t];e===void 0&&(e=new Int32Array(t),Gf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Xy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function qy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2fv(this.addr,t),je(e,t)}}function jy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;n.uniform3fv(this.addr,t),je(e,t)}}function Yy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4fv(this.addr,t),je(e,t)}}function Zy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(qe(e,i))return;Xf.set(i),n.uniformMatrix2fv(this.addr,!1,Xf),je(e,i)}}function Jy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(qe(e,i))return;$f.set(i),n.uniformMatrix3fv(this.addr,!1,$f),je(e,i)}}function Ky(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(qe(e,i))return;Wf.set(i),n.uniformMatrix4fv(this.addr,!1,Wf),je(e,i)}}function Qy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function tx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2iv(this.addr,t),je(e,t)}}function ex(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3iv(this.addr,t),je(e,t)}}function ix(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4iv(this.addr,t),je(e,t)}}function nx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function sx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2uiv(this.addr,t),je(e,t)}}function rx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3uiv(this.addr,t),je(e,t)}}function ax(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4uiv(this.addr,t),je(e,t)}}function Ql(n){return n.version===0&&(n.compareFunction=Hh,n.needsUpdate=!0),n}function ox(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Ql(hp):r=cp,e.setTexture2D(t||r,s)}function lx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||fp,s)}function cx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Ql(dp):r=pp,e.setTextureCube(t||r,s)}function hx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||up,s)}function dx(n){switch(n){case 5126:return Xy;case 35664:return qy;case 35665:return jy;case 35666:return Yy;case 35674:return Zy;case 35675:return Jy;case 35676:return Ky;case 5124:case 35670:return Qy;case 35667:case 35671:return tx;case 35668:case 35672:return ex;case 35669:case 35673:return ix;case 5125:return nx;case 36294:return sx;case 36295:return rx;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return hx}}function ux(n,t){n.uniform1fv(this.addr,t)}function fx(n,t){let e=er(t,this.size,2);n.uniform2fv(this.addr,e)}function px(n,t){let e=er(t,this.size,3);n.uniform3fv(this.addr,e)}function mx(n,t){let e=er(t,this.size,4);n.uniform4fv(this.addr,e)}function gx(n,t){let e=er(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function _x(n,t){let e=er(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function yx(n,t){let e=er(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function xx(n,t){n.uniform1iv(this.addr,t)}function vx(n,t){n.uniform2iv(this.addr,t)}function bx(n,t){n.uniform3iv(this.addr,t)}function Mx(n,t){n.uniform4iv(this.addr,t)}function Sx(n,t){n.uniform1uiv(this.addr,t)}function wx(n,t){n.uniform2uiv(this.addr,t)}function Ex(n,t){n.uniform3uiv(this.addr,t)}function Tx(n,t){n.uniform4uiv(this.addr,t)}function Ax(n,t,e){let i=this.cache,s=t.length,r=Kl(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),je(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Ql(hp):a=cp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Cx(n,t,e){let i=this.cache,s=t.length,r=Kl(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||fp,r[a])}function Rx(n,t,e){let i=this.cache,s=t.length,r=Kl(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),je(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Ql(dp):a=pp;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Px(n,t,e){let i=this.cache,s=t.length,r=Kl(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||up,r[a])}function Ix(n){switch(n){case 5126:return ux;case 35664:return fx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return _x;case 35676:return yx;case 5124:case 35670:return xx;case 35667:case 35671:return vx;case 35668:case 35672:return bx;case 35669:case 35673:return Mx;case 5125:return Sx;case 36294:return wx;case 36295:return Ex;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Px}}var od=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=dx(e.type)}},ld=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ix(e.type)}},cd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},rd=/(\w+)(\])?(\[|\.)?/g;function qf(n,t){n.seq.push(t),n.map[t.id]=t}function Lx(n,t,e){let i=n.name,s=i.length;for(rd.lastIndex=0;;){let r=rd.exec(i),a=rd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){qf(e,c===void 0?new od(o,n,t):new ld(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new cd(o),qf(e,u)),e=u}}}var tr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Lx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function jf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Dx=37297,kx=0;function Nx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Yf=new re;function Ux(n){_e._getMatrix(Yf,_e.workingColorSpace,n);let t=`mat3( ${Yf.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(n)){case Pr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Zf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Nx(n.getShaderSource(t),o)}else return r}function Ox(n,t){let e=Ux(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Fx={[Eh]:"Linear",[Th]:"Reinhard",[Ah]:"Cineon",[Ch]:"ACESFilmic",[Ph]:"AgX",[Ih]:"Neutral",[Rh]:"Custom"};function Bx(n,t){let e=Fx[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Yl=new F;function zx(){_e.getLuminanceCoefficients(Yl);let n=Yl.x.toFixed(4),t=Yl.y.toFixed(4),e=Yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function Hx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Gx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function xa(n){return n!==""}function Jf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Kf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function hd(n){return n.replace(Wx,$x)}function $x(n,t){let e=ue[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return hd(e)}var Xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qf(n){return n.replace(Xx,qx)}function qx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var jx={[la]:"SHADOWMAP_TYPE_PCF",[Zs]:"SHADOWMAP_TYPE_VSM"};function Yx(n){return jx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zx={[Ks]:"ENVMAP_MODE_REFRACTION"};function Jx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Zx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kx={[wh]:"ENVMAP_BLENDING_MULTIPLY",[gf]:"ENVMAP_BLENDING_MIX",[_f]:"ENVMAP_BLENDING_ADD"};function Qx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Kx[n.combine]||"ENVMAP_BLENDING_NONE"}function tv(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Yx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Jx(e),u=Qx(e),d=Vx(e),f=Hx(r),g=s.createProgram(),x,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(xa).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(xa).join(`
`),p.length>0&&(p+=`
`)):(x=[tp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),p=[tp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cn?"#define TONE_MAPPING":"",e.toneMapping!==cn?ue.tonemapping_pars_fragment:"",e.toneMapping!==cn?Bx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,Ox("linearToOutputTexel",e.outputColorSpace),zx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xa).join(`
`)),a=hd(a),a=Jf(a,e),a=Kf(a,e),o=hd(o),o=Jf(o,e),o=Kf(o,e),a=Qf(a),o=Qf(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=m+x+a,M=m+p+o,b=jf(s,s.VERTEX_SHADER,_),T=jf(s,s.FRAGMENT_SHADER,M);s.attachShader(g,b),s.attachShader(g,T),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(k){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(g)||"",X=s.getShaderInfoLog(b)||"",Q=s.getShaderInfoLog(T)||"",U=O.trim(),G=X.trim(),tt=Q.trim(),Y=!0,ht=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,b,T);else{let W=Zf(s,b,"vertex"),lt=Zf(s,T,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+U+`
`+W+`
`+lt)}else U!==""?Jt("WebGLProgram: Program Info Log:",U):(G===""||tt==="")&&(ht=!1);ht&&(k.diagnostics={runnable:Y,programLog:U,vertexShader:{log:G,prefix:x},fragmentShader:{log:tt,prefix:p}})}s.deleteShader(b),s.deleteShader(T),y=new tr(s,g),A=Gx(s,g)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(g,Dx)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=T,this}var ev=0,dd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ud(t),e.set(t,i)),i}},ud=class{constructor(t){this.id=ev++,this.code=t,this.usedTimes=0}};function iv(n){return n===qn||n===pa||n===ma}function nv(n,t,e,i,s,r){let a=new Vs,o=new dd,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,A,z,k,O,X){let Q=k.fog,U=O.geometry,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?k.environment:null,tt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Y=t.get(y.envMap||G,tt),ht=d[y.type],W=i.precision;y.precision!==null&&(W=i.getMaxPrecision(y.precision),W!==y.precision&&Jt("WebGLProgram.getParameters:",y.precision,"not supported, using",W,"instead."));let lt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,dt=lt!==void 0?lt.length:0,Ot=0;U.morphAttributes.position!==void 0&&(Ot=1),U.morphAttributes.normal!==void 0&&(Ot=2),U.morphAttributes.color!==void 0&&(Ot=3);let Qt,nt,Pt,Ht;if(ht){let kt=vi[ht];Qt=kt.vertexShader,nt=kt.fragmentShader}else{Qt=y.vertexShader,nt=y.fragmentShader;let kt=o.getVertexShaderStage(y),ve=o.getFragmentShaderStage(y);o.update(y,kt,ve),Pt=kt.id,Ht=ve.id}let Zt=n.getRenderTarget(),Nt=n.state.buffers.depth.getReversed(),ie=O.isInstancedMesh===!0,ke=O.isBatchedMesh===!0,Kt=!!y.map,ye=!!y.matcap,Te=!!Y,he=Te&&Y.isPMREMTexture===!0,Oe=!!y.aoMap,Fe=!!y.lightMap,ri=!!y.bumpMap&&y.wireframe===!1,Re=!!y.normalMap,Ui=!!y.displacementMap,Ve=!!y.emissiveMap,ai=!!y.metalnessMap,oi=!!y.roughnessMap,Mi=y.anisotropy>0,V=y.clearcoat>0,Si=y.diffuseRoughness>0,Ae=y.dispersion>0,Pe=y.retroreflectivity>0,It=y.iridescence>0,Be=y.sheen>0,Yt=y.transmission>0,te=Mi&&!!y.anisotropyMap,I=V&&!!y.clearcoatMap,w=V&&!!y.clearcoatNormalMap,q=V&&!!y.clearcoatRoughnessMap,ft=Si&&!!y.diffuseRoughnessMap,ot=It&&!!y.iridescenceMap,Mt=It&&!!y.iridescenceThicknessMap,At=Be&&!!y.sheenColorMap,it=Be&&!!y.sheenRoughnessMap,st=!!y.specularMap,wt=!!y.specularColorMap,N=!!y.specularIntensityMap,rt=Yt&&!!y.transmissionMap,et=Yt&&!!y.thicknessMap,Et=!!y.gradientMap,mt=!!y.alphaMap,St=y.alphaTest>0,$t=!!y.alphaHash,ae=!!y.extensions,gt=cn;y.toneMapped&&(Zt===null||Zt.isXRRenderTarget===!0)&&(gt=n.toneMapping);let qt=he?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,oe={shaderID:ht,shaderType:y.type,shaderName:y.name,vertexShader:Qt,fragmentShader:nt,defines:y.defines,customVertexShaderID:Pt,customFragmentShaderID:Ht,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:W,batching:ke,batchingColor:ke&&O._colorsTexture!==null,instancing:ie,instancingColor:ie&&O.instanceColor!==null,instancingMorph:ie&&O.morphTexture!==null,outputColorSpace:Zt===null?n.outputColorSpace:Zt.isXRRenderTarget===!0?Zt.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Kt,matcap:ye,envMap:Te,envMapMode:Te&&Y.mapping,envMapPMREM:he,envMapMaxLod:he?qt.length-1:null,envMapSize:he?qt[0].width:null,aoMap:Oe,lightMap:Fe,bumpMap:ri,normalMap:Re,displacementMap:Ui,emissiveMap:Ve,normalMapObjectSpace:Re&&y.normalMapType===vf,normalMapTangentSpace:Re&&y.normalMapType===Xl,packedNormalMap:Re&&y.normalMapType===Xl&&iv(y.normalMap.format),metalnessMap:ai,roughnessMap:oi,anisotropy:Mi,anisotropyMap:te,clearcoat:V,clearcoatMap:I,clearcoatNormalMap:w,clearcoatRoughnessMap:q,diffuseRoughness:Si,diffuseRoughnessMap:ft,dispersion:Ae,retroreflection:Pe,iridescence:It,iridescenceMap:ot,iridescenceThicknessMap:Mt,sheen:Be,sheenColorMap:At,sheenRoughnessMap:it,specularMap:st,specularColorMap:wt,specularIntensityMap:N,transmission:Yt,transmissionMap:rt,thicknessMap:et,gradientMap:Et,opaque:y.transparent===!1&&y.blending===Js&&y.alphaToCoverage===!1,alphaMap:mt,alphaTest:St,alphaHash:$t,combine:y.combine,mapUv:Kt&&f(y.map.channel),aoMapUv:Oe&&f(y.aoMap.channel),lightMapUv:Fe&&f(y.lightMap.channel),bumpMapUv:ri&&f(y.bumpMap.channel),normalMapUv:Re&&f(y.normalMap.channel),displacementMapUv:Ui&&f(y.displacementMap.channel),emissiveMapUv:Ve&&f(y.emissiveMap.channel),metalnessMapUv:ai&&f(y.metalnessMap.channel),roughnessMapUv:oi&&f(y.roughnessMap.channel),anisotropyMapUv:te&&f(y.anisotropyMap.channel),clearcoatMapUv:I&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&f(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ft&&f(y.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:At&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:it&&f(y.sheenRoughnessMap.channel),specularMapUv:st&&f(y.specularMap.channel),specularColorMapUv:wt&&f(y.specularColorMap.channel),specularIntensityMapUv:N&&f(y.specularIntensityMap.channel),transmissionMapUv:rt&&f(y.transmissionMap.channel),thicknessMapUv:et&&f(y.thicknessMap.channel),alphaMapUv:mt&&f(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Re||Mi),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!U.attributes.uv&&(Kt||mt),fog:!!Q,useFog:y.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&Re===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Nt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Ot,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.filter(kt=>kt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,decodeVideoTexture:Kt&&y.map.isVideoTexture===!0&&_e.getTransfer(y.map.colorSpace)===Se,decodeVideoTextureEmissive:Ve&&y.emissiveMap.isVideoTexture===!0&&_e.getTransfer(y.emissiveMap.colorSpace)===Se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===xi,flipSided:y.side===yi,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ae&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&y.extensions.multiDraw===!0||ke)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return oe.vertexUv1s=l.has(1),oe.vertexUv2s=l.has(2),oe.vertexUv3s=l.has(3),l.clear(),oe}function x(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let z in y.defines)A.push(z),A.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(p(A,y),m(A,y),A.push(n.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function p(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapPMREM),y.push(A.envMapMaxLod),y.push(A.envMapSize),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.diffuseRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.numLightProbeGrids),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function m(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.diffuseRoughness&&a.enable(25),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function _(y){let A=d[y.type],z;if(A){let k=vi[A];z=_a.clone(k.uniforms)}else z=y.uniforms;return z}function M(y,A){let z=h.get(A);return z!==void 0?++z.usedTimes:(z=new tv(n,A,y,s),c.push(z),h.set(A,z)),z}function b(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function R(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:_,acquireProgram:M,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:R}}function sv(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function rv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function ep(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ip(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,x,p,m){let _=n[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:m},n[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.materialVariant=a(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=p,_.group=m),t++,_}function l(d,f,g,x,p,m,_){_.reversedDepth===!0&&(p=-p);let M=o(d,f,g,x,p,m);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):e.push(M)}function c(d,f,g,x,p,m){let _=o(d,f,g,x,p,m);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):e.unshift(_)}function h(d,f){e.length>1&&e.sort(d||rv),i.length>1&&i.sort(f||ep),s.length>1&&s.sort(f||ep)}function u(){for(let d=t,f=n.length;d<f;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function av(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new ip,n.set(i,[a])):s>=r.length?(a=new ip,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function ov(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new ge};break;case"SpotLight":e={position:new F,direction:new F,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new ge,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":e={color:new ge,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function lv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var cv=0;function hv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function dv(n){let t=new ov,e=lv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new Ce,a=new Ce;function o(c){let h=0,u=0,d=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,_=0,M=0,b=0,T=0,R=0,y=0,A=0,z=0,k=0;c.sort(hv);for(let X=0,Q=c.length;X<Q;X++){let U=c[X],G=U.color,tt=U.intensity,Y=U.distance,ht=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===qn?ht=U.shadow.map.texture:ht=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=G.r*tt,u+=G.g*tt,d+=G.b*tt;else if(U.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(U.sh.coefficients[W],tt);k++}else if(U.isSunLight){let W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let lt=U.shadow,dt=e.get(U);dt.shadowIntensity=lt.intensity,dt.shadowBias=lt.bias,dt.shadowNormalBias=lt.normalBias,dt.shadowRadius=lt.radius,dt.shadowMapSize.copy(lt.mapSize).multiply(lt.getFrameExtents()),i.sunShadow[g]=dt,i.sunShadowMap[g]=ht;let Ot=lt.getViewportCount();for(let Qt=0;Qt<Ot;Qt++)i.sunShadowMatrix[x+Qt]=lt.getMatrix(Qt),i.sunShadowCascade[x+Qt]=lt._cascadeData[Qt];x+=Ot,g++}i.sun[f]=W,f++}else if(U.isDirectionalLight){let W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let lt=U.shadow,dt=e.get(U);dt.shadowIntensity=lt.intensity,dt.shadowBias=lt.bias,dt.shadowNormalBias=lt.normalBias,dt.shadowRadius=lt.radius,dt.shadowMapSize=lt.mapSize,i.directionalShadow[p]=dt,i.directionalShadowMap[p]=ht,i.directionalShadowMatrix[p]=U.shadow.matrix,T++}i.directional[p]=W,p++}else if(U.isSpotLight){let W=t.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(G).multiplyScalar(tt),W.distance=Y,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,i.spot[_]=W;let lt=U.shadow;if(U.map&&(i.spotLightMap[A]=U.map,A++,lt.updateMatrices(U),U.castShadow&&z++),i.spotLightMatrix[_]=lt.matrix,U.castShadow){let dt=e.get(U);dt.shadowIntensity=lt.intensity,dt.shadowBias=lt.bias,dt.shadowNormalBias=lt.normalBias,dt.shadowRadius=lt.radius,dt.shadowMapSize=lt.mapSize,i.spotShadow[_]=dt,i.spotShadowMap[_]=ht,y++}_++}else if(U.isRectAreaLight){let W=t.get(U);W.color.copy(G).multiplyScalar(tt),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),i.rectArea[M]=W,M++}else if(U.isPointLight){let W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),W.distance=U.distance,W.decay=U.decay,U.castShadow){let lt=U.shadow,dt=e.get(U);dt.shadowIntensity=lt.intensity,dt.shadowBias=lt.bias,dt.shadowNormalBias=lt.normalBias,dt.shadowRadius=lt.radius,dt.shadowMapSize=lt.mapSize,dt.shadowCameraNear=lt.camera.near,dt.shadowCameraFar=lt.camera.far,i.pointShadow[m]=dt,i.pointShadowMap[m]=ht,i.pointShadowMatrix[m]=U.shadow.matrix,R++}i.point[m]=W,m++}else if(U.isHemisphereLight){let W=t.get(U);W.skyColor.copy(U.color).multiplyScalar(tt),W.groundColor.copy(U.groundColor).multiplyScalar(tt),i.hemi[b]=W,b++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let O=i.hash;(O.sunLength!==f||O.directionalLength!==p||O.pointLength!==m||O.spotLength!==_||O.rectAreaLength!==M||O.hemiLength!==b||O.numSunShadows!==g||O.numDirectionalShadows!==T||O.numPointShadows!==R||O.numSpotShadows!==y||O.numSpotMaps!==A||O.numLightProbes!==k)&&(i.sun.length=f,i.directional.length=p,i.spot.length=_,i.rectArea.length=M,i.point.length=m,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+A-z,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=k,O.sunLength=f,O.directionalLength=p,O.pointLength=m,O.spotLength=_,O.rectAreaLength=M,O.hemiLength=b,O.numSunShadows=g,O.numDirectionalShadows=T,O.numPointShadows=R,O.numSpotShadows=y,O.numSpotMaps=A,O.numLightProbes=k,i.version=cv++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,p=0,m=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let b=c[_];if(b.isSunLight){let T=i.sun[u];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(m),u++}else if(b.isDirectionalLight){let T=i.directional[d];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(b.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(b.isRectAreaLight){let T=i.rectArea[x];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let T=i.hemi[p];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function np(n){let t=new dv(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){i.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function uv(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new np(n),t.set(s,[o])):r>=a.length?(o=new np(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pv=`uniform sampler2D shadow_pass;
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
}`,mv=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],gv=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],sp=new Ce,ya=new F,ad=new F;function _v(n,t,e){let i=new zn,s=new Lt,r=new Lt,a=new we,o=new Xo,l=new qo,c={},h=e.maxTextureSize,u={[Xn]:yi,[yi]:Xn,[xi]:xi},d=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:fv,fragmentShader:pv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new $e;g.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=la;let m=this.type;this.render=function(R,y,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;this.type===Zu&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=la);let z=n.getRenderTarget(),k=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),X=n.state;X.setBlending(ls),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let Q=m!==this.type;Q&&y.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(G=>G.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,G=R.length;U<G;U++){let tt=R[U],Y=tt.shadow;if(Y===void 0){Jt("WebGLShadowMap:",tt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ht=Y.getFrameExtents();s.multiply(ht),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,Y.mapSize.y=r.y));let W=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=W,Y.map===null||Q===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Zs){if(tt.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Di(s.x,s.y,{format:qn,type:Qi,minFilter:mi,magFilter:mi,generateMipmaps:!1}),Y.map.texture.name=tt.name+".shadowMap",Y.map.depthTexture=new En(s.x,s.y,Ki),Y.map.depthTexture.name=tt.name+".shadowMapDepth",Y.map.depthTexture.format=Mn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Je,Y.map.depthTexture.magFilter=Je}else tt.isPointLight?(Y.map=new va(s.x),Y.map.depthTexture=new zr(s.x,Ji)):(Y.map=new Di(s.x,s.y),Y.map.depthTexture=new En(s.x,s.y,Ji)),Y.map.depthTexture.name=tt.name+".shadowMap",Y.map.depthTexture.format=Mn,this.type===la?(Y.map.depthTexture.compareFunction=W?Vh:zh,Y.map.depthTexture.minFilter=mi,Y.map.depthTexture.magFilter=mi):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Je,Y.map.depthTexture.magFilter=Je);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let lt=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();tt.isPointLight!==!0&&Y.updateMatrices(tt,A);let dt=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:A.layers;for(let Ot=0;Ot<lt;Ot++){let Qt=Y.getCamera(Ot);if(tt.isPointLight){let nt=Y.camera,Pt=Y.matrix,Ht=tt.distance||nt.far;Ht!==nt.far&&(nt.far=Ht,nt.updateProjectionMatrix()),ya.setFromMatrixPosition(tt.matrixWorld),nt.position.copy(ya),ad.copy(nt.position),ad.add(mv[Ot]),nt.up.copy(gv[Ot]),nt.lookAt(ad),nt.updateMatrixWorld(),Pt.makeTranslation(-ya.x,-ya.y,-ya.z),sp.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(sp,nt.coordinateSystem,nt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,Ot),n.clear();else{Ot===0&&(n.setRenderTarget(Y.map),n.clear());let nt=Y.getViewport(Ot);a.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),X.viewport(a)}i=Y.getFrustum(Ot),b(y,A,Qt,tt,dt,this.type)}Y.isPointLightShadow!==!0&&this.type===Zs&&_(Y,A),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(z,k,O)};function _(R,y){let A=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null?R.mapPass=new Di(s.x,s.y,{format:qn,type:Qi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(y,null,A,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(y,null,A,f,x,null)}function M(R,y,A,z){let k=null,O=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)k=O;else if(k=A.isPointLight===!0?l:o,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let X=k.uuid,Q=y.uuid,U=c[X];U===void 0&&(U={},c[X]=U);let G=U[Q];G===void 0&&(G=k.clone(),U[Q]=G,y.addEventListener("dispose",T)),k=G}if(k.visible=y.visible,k.wireframe=y.wireframe,z===Zs?k.side=y.shadowSide!==null?y.shadowSide:y.side:k.side=y.shadowSide!==null?y.shadowSide:u[y.side],k.alphaMap=y.alphaMap,k.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,k.map=y.map,k.clipShadows=y.clipShadows,k.clippingPlanes=y.clippingPlanes,k.clipIntersection=y.clipIntersection,k.displacementMap=y.displacementMap,k.displacementScale=y.displacementScale,k.displacementBias=y.displacementBias,k.wireframeLinewidth=y.wireframeLinewidth,k.linewidth=y.linewidth,A.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let X=n.properties.get(k);X.light=A}return k}function b(R,y,A,z,k,O){if(R.visible===!1)return;if(R.layers.test(k)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&O===Zs)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);let U=t.update(R),G=R.material;if(Array.isArray(G)){let tt=U.groups;for(let Y=0,ht=tt.length;Y<ht;Y++){let W=tt[Y],lt=G[W.materialIndex];if(lt&&lt.visible){let dt=M(R,lt,z,O);R.onBeforeShadow(n,R,y,A,U,dt,W),n.renderBufferDirect(A,null,U,dt,R,W),R.onAfterShadow(n,R,y,A,U,dt,W)}}}else if(G.visible){let tt=M(R,G,z,O);R.onBeforeShadow(n,R,y,A,U,tt,null),n.renderBufferDirect(A,null,U,tt,R,null),R.onAfterShadow(n,R,y,A,U,tt,null)}}let Q=R.children;for(let U=0,G=Q.length;U<G;U++)b(Q[U],y,A,z,k,O)}function T(R){R.target.removeEventListener("dispose",T);for(let A in c){let z=c[A],k=R.target.uuid;k in z&&(z[k].dispose(),delete z[k])}}}function yv(n,t){function e(){let N=!1,rt=new we,et=null,Et=new we(0,0,0,0);return{setMask:function(mt){et!==mt&&!N&&(n.colorMask(mt,mt,mt,mt),et=mt)},setLocked:function(mt){N=mt},setClear:function(mt,St,$t,ae,gt){gt===!0&&(mt*=ae,St*=ae,$t*=ae),rt.set(mt,St,$t,ae),Et.equals(rt)===!1&&(n.clearColor(mt,St,$t,ae),Et.copy(rt))},reset:function(){N=!1,et=null,Et.set(-1,0,0,0)}}}function i(){let N=!1,rt=!1,et=null,Et=null,mt=null;return{setReversed:function(St){if(rt!==St){let $t=t.get("EXT_clip_control");St?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),rt=St;let ae=mt;mt=null,this.setClear(ae)}},getReversed:function(){return rt},setTest:function(St){St?Nt(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(St){et!==St&&!N&&(n.depthMask(St),et=St)},setFunc:function(St){if(rt&&(St=Pf[St]),Et!==St){switch(St){case bo:n.depthFunc(n.NEVER);break;case Mo:n.depthFunc(n.ALWAYS);break;case So:n.depthFunc(n.LESS);break;case Us:n.depthFunc(n.LEQUAL);break;case wo:n.depthFunc(n.EQUAL);break;case Eo:n.depthFunc(n.GEQUAL);break;case To:n.depthFunc(n.GREATER);break;case Ao:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Et=St}},setLocked:function(St){N=St},setClear:function(St){mt!==St&&(mt=St,rt&&(St=1-St),n.clearDepth(St))},reset:function(){N=!1,et=null,Et=null,mt=null,rt=!1}}}function s(){let N=!1,rt=null,et=null,Et=null,mt=null,St=null,$t=null,ae=null,gt=null;return{setTest:function(qt){N||(qt?Nt(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(qt){rt!==qt&&!N&&(n.stencilMask(qt),rt=qt)},setFunc:function(qt,oe,kt){(et!==qt||Et!==oe||mt!==kt)&&(n.stencilFunc(qt,oe,kt),et=qt,Et=oe,mt=kt)},setOp:function(qt,oe,kt){(St!==qt||$t!==oe||ae!==kt)&&(n.stencilOp(qt,oe,kt),St=qt,$t=oe,ae=kt)},setLocked:function(qt){N=qt},setClear:function(qt){gt!==qt&&(n.clearStencil(qt),gt=qt)},reset:function(){N=!1,rt=null,et=null,Et=null,mt=null,St=null,$t=null,ae=null,gt=null}}}let r=new e,a=new i,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],x=null,p=!1,m=null,_=null,M=null,b=null,T=null,R=null,y=null,A=new ge(0,0,0),z=0,k=!1,O=null,X=null,Q=null,U=null,G=null,tt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ht=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=ht>=1):W.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=ht>=2);let lt=null,dt={},Ot=n.getParameter(n.SCISSOR_BOX),Qt=n.getParameter(n.VIEWPORT),nt=new we().fromArray(Ot),Pt=new we().fromArray(Qt);function Ht(N,rt,et,Et){let mt=new Uint8Array(4),St=n.createTexture();n.bindTexture(N,St),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $t=0;$t<et;$t++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(rt,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(rt+$t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return St}let Zt={};Zt[n.TEXTURE_2D]=Ht(n.TEXTURE_2D,n.TEXTURE_2D,1),Zt[n.TEXTURE_CUBE_MAP]=Ht(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Zt[n.TEXTURE_2D_ARRAY]=Ht(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Zt[n.TEXTURE_3D]=Ht(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Nt(n.DEPTH_TEST),a.setFunc(Us),ri(!1),Re(yh),Nt(n.CULL_FACE),Oe(ls);function Nt(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function ie(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function ke(N,rt){return d[N]!==rt?(n.bindFramebuffer(N,rt),d[N]=rt,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=rt),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=rt),!0):!1}function Kt(N,rt){let et=g,Et=!1;if(N){et=f.get(rt),et===void 0&&(et=[],f.set(rt,et));let mt=N.textures;if(et.length!==mt.length||et[0]!==n.COLOR_ATTACHMENT0){for(let St=0,$t=mt.length;St<$t;St++)et[St]=n.COLOR_ATTACHMENT0+St;et.length=mt.length,Et=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,Et=!0);Et&&n.drawBuffers(et)}function ye(N){return x!==N?(n.useProgram(N),x=N,!0):!1}let Te={[cs]:n.FUNC_ADD,[Ku]:n.FUNC_SUBTRACT,[Qu]:n.FUNC_REVERSE_SUBTRACT};Te[tf]=n.MIN,Te[ef]=n.MAX;let he={[nf]:n.ZERO,[sf]:n.ONE,[rf]:n.SRC_COLOR,[Mh]:n.SRC_ALPHA,[df]:n.SRC_ALPHA_SATURATE,[cf]:n.DST_COLOR,[of]:n.DST_ALPHA,[af]:n.ONE_MINUS_SRC_COLOR,[Sh]:n.ONE_MINUS_SRC_ALPHA,[hf]:n.ONE_MINUS_DST_COLOR,[lf]:n.ONE_MINUS_DST_ALPHA,[uf]:n.CONSTANT_COLOR,[ff]:n.ONE_MINUS_CONSTANT_COLOR,[pf]:n.CONSTANT_ALPHA,[mf]:n.ONE_MINUS_CONSTANT_ALPHA};function Oe(N,rt,et,Et,mt,St,$t,ae,gt,qt){if(N===ls){p===!0&&(ie(n.BLEND),p=!1);return}if(p===!1&&(Nt(n.BLEND),p=!0),N!==Ju){if(N!==m||qt!==k){if((_!==cs||T!==cs)&&(n.blendEquation(n.FUNC_ADD),_=cs,T=cs),qt)switch(N){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xh:n.blendFunc(n.ONE,n.ONE);break;case vh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ee("WebGLState: Invalid blending: ",N);break}else switch(N){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vh:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bh:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",N);break}M=null,b=null,R=null,y=null,A.set(0,0,0),z=0,m=N,k=qt}return}mt=mt||rt,St=St||et,$t=$t||Et,(rt!==_||mt!==T)&&(n.blendEquationSeparate(Te[rt],Te[mt]),_=rt,T=mt),(et!==M||Et!==b||St!==R||$t!==y)&&(n.blendFuncSeparate(he[et],he[Et],he[St],he[$t]),M=et,b=Et,R=St,y=$t),(ae.equals(A)===!1||gt!==z)&&(n.blendColor(ae.r,ae.g,ae.b,gt),A.copy(ae),z=gt),m=N,k=!1}function Fe(N,rt){N.side===xi?ie(n.CULL_FACE):Nt(n.CULL_FACE);let et=N.side===yi;rt&&(et=!et),ri(et),N.blending===Js&&N.transparent===!1?Oe(ls):Oe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let Et=N.stencilWrite;o.setTest(Et),Et&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ve(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Nt(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function ri(N){O!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),O=N)}function Re(N){N!==ju?(Nt(n.CULL_FACE),N!==X&&(N===yh?n.cullFace(n.BACK):N===Yu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),X=N}function Ui(N){N!==Q&&(Y&&n.lineWidth(N),Q=N)}function Ve(N,rt,et){N?(Nt(n.POLYGON_OFFSET_FILL),(U!==rt||G!==et)&&(U=rt,G=et,a.getReversed()&&(rt=-rt,et=-et),n.polygonOffset(rt,et))):ie(n.POLYGON_OFFSET_FILL)}function ai(N){N?Nt(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function oi(N){N===void 0&&(N=n.TEXTURE0+tt-1),lt!==N&&(n.activeTexture(N),lt=N)}function Mi(N,rt,et){et===void 0&&(lt===null?et=n.TEXTURE0+tt-1:et=lt);let Et=dt[et];Et===void 0&&(Et={type:void 0,texture:void 0},dt[et]=Et),(Et.type!==N||Et.texture!==rt)&&(lt!==et&&(n.activeTexture(et),lt=et),n.bindTexture(N,rt||Zt[N]),Et.type=N,Et.texture=rt)}function V(){let N=dt[lt];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Si(){try{n.compressedTexImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function Ae(){try{n.compressedTexImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function Pe(){try{n.texSubImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function It(){try{n.texSubImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function Be(){try{n.compressedTexSubImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function Yt(){try{n.compressedTexSubImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function te(){try{n.texStorage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function I(){try{n.texStorage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function w(){try{n.texImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function q(){try{n.texImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function ft(N){return u[N]!==void 0?u[N]:n.getParameter(N)}function ot(N,rt){u[N]!==rt&&(n.pixelStorei(N,rt),u[N]=rt)}function Mt(N){nt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),nt.copy(N))}function At(N){Pt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Pt.copy(N))}function it(N,rt){let et=c.get(rt);et===void 0&&(et=new WeakMap,c.set(rt,et));let Et=et.get(N);Et===void 0&&(Et=n.getUniformBlockIndex(rt,N.name),n.uniformBlockBinding(rt,Et,Et),et.set(N,Et))}function st(N,rt,et){let mt=c.get(rt).get(N);l[mt]!==et&&(n.bindBufferBase(n.UNIFORM_BUFFER,mt,et),l[mt]=et)}function wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},lt=null,dt={},d={},l={},f=new WeakMap,g=[],x=null,p=!1,m=null,_=null,M=null,b=null,T=null,R=null,y=null,A=new ge(0,0,0),z=0,k=!1,O=null,X=null,Q=null,U=null,G=null,nt.set(0,0,n.canvas.width,n.canvas.height),Pt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Nt,disable:ie,bindFramebuffer:ke,drawBuffers:Kt,useProgram:ye,setBlending:Oe,setMaterial:Fe,setFlipSided:ri,setCullFace:Re,setLineWidth:Ui,setPolygonOffset:Ve,setScissorTest:ai,activeTexture:oi,bindTexture:Mi,unbindTexture:V,compressedTexImage2D:Si,compressedTexImage3D:Ae,texImage2D:w,texImage3D:q,pixelStorei:ot,getParameter:ft,updateUBOMapping:it,uniformBlockBinding:st,texStorage2D:te,texStorage3D:I,texSubImage2D:Pe,texSubImage3D:It,compressedTexSubImage2D:Be,compressedTexSubImage3D:Yt,scissor:Mt,viewport:At,reset:wt}}function xv(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,x=new FinalizationRegistry(I=>g.delete(I)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,w){return p?new OffscreenCanvas(I,w):Ir("canvas")}function _(I,w,q){let ft=1,ot=te(I);if((ot.width>q||ot.height>q)&&(ft=q/Math.max(ot.width,ot.height)),ft<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Mt=Math.floor(ft*ot.width),At=Math.floor(ft*ot.height);d===void 0&&(d=m(Mt,At));let it=w?m(Mt,At):d;return it.width=Mt,it.height=At,it.getContext("2d").drawImage(I,0,0,Mt,At),Jt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Mt+"x"+At+")."),it}else return"data"in I&&Jt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),I;return I}function M(I){return I.generateMipmaps}function b(I){n.generateMipmap(I)}function T(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(I,w,q,ft,ot,Mt=!1){if(I!==null){if(n[I]!==void 0)return n[I];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let At;ft&&(At=t.get("EXT_texture_norm16"),At||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=w;if(w===n.RED&&(q===n.FLOAT&&(it=n.R32F),q===n.HALF_FLOAT&&(it=n.R16F),q===n.UNSIGNED_BYTE&&(it=n.R8),q===n.UNSIGNED_SHORT&&At&&(it=At.R16_EXT),q===n.SHORT&&At&&(it=At.R16_SNORM_EXT)),w===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(it=n.R8UI),q===n.UNSIGNED_SHORT&&(it=n.R16UI),q===n.UNSIGNED_INT&&(it=n.R32UI),q===n.BYTE&&(it=n.R8I),q===n.SHORT&&(it=n.R16I),q===n.INT&&(it=n.R32I)),w===n.RG&&(q===n.FLOAT&&(it=n.RG32F),q===n.HALF_FLOAT&&(it=n.RG16F),q===n.UNSIGNED_BYTE&&(it=n.RG8),q===n.UNSIGNED_SHORT&&At&&(it=At.RG16_EXT),q===n.SHORT&&At&&(it=At.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(it=n.RG8UI),q===n.UNSIGNED_SHORT&&(it=n.RG16UI),q===n.UNSIGNED_INT&&(it=n.RG32UI),q===n.BYTE&&(it=n.RG8I),q===n.SHORT&&(it=n.RG16I),q===n.INT&&(it=n.RG32I)),w===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(it=n.RGB8UI),q===n.UNSIGNED_SHORT&&(it=n.RGB16UI),q===n.UNSIGNED_INT&&(it=n.RGB32UI),q===n.BYTE&&(it=n.RGB8I),q===n.SHORT&&(it=n.RGB16I),q===n.INT&&(it=n.RGB32I)),w===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(it=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(it=n.RGBA16UI),q===n.UNSIGNED_INT&&(it=n.RGBA32UI),q===n.BYTE&&(it=n.RGBA8I),q===n.SHORT&&(it=n.RGBA16I),q===n.INT&&(it=n.RGBA32I)),w===n.RGB&&(q===n.UNSIGNED_SHORT&&At&&(it=At.RGB16_EXT),q===n.SHORT&&At&&(it=At.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(it=n.R11F_G11F_B10F)),w===n.RGBA){let st=Mt?Pr:_e.getTransfer(ot);q===n.FLOAT&&(it=n.RGBA32F),q===n.HALF_FLOAT&&(it=n.RGBA16F),q===n.UNSIGNED_BYTE&&(it=st===Se?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&At&&(it=At.RGBA16_EXT),q===n.SHORT&&At&&(it=At.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function y(I,w){let q;return I?w===null||w===Ji||w===ds?q=n.DEPTH24_STENCIL8:w===Ki?q=n.DEPTH32F_STENCIL8:w===Qs&&(q=n.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ji||w===ds?q=n.DEPTH_COMPONENT24:w===Ki?q=n.DEPTH_COMPONENT32F:w===Qs&&(q=n.DEPTH_COMPONENT16),q}function A(I,w){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==Je&&I.minFilter!==mi?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function z(I){let w=new WeakRef(I);i.get(I).__ref=w,g.add(w),x.register(I,w,w)}function k(I){let w=i.get(I).__ref;w!==void 0&&(g.delete(w),x.unregister(w))}function O(I){Q(I.target)}function X(I){U(I.target)}function Q(I){I.removeEventListener("dispose",O),k(I),tt(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function U(I){I.removeEventListener("dispose",X),k(I),ht(I)}function G(){for(let I of g){let w=I.deref();w!==void 0&&(w.isRenderTarget===!0?U(w):Q(w))}g.clear(),u.clear()}function tt(I){let w=i.get(I);if(w.__webglInit===void 0)return;let q=I.source,ft=f.get(q);if(ft){let ot=ft[w.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&Y(I),Object.keys(ft).length===0&&f.delete(q)}i.remove(I)}function Y(I){let w=i.get(I);n.deleteTexture(w.__webglTexture);let q=I.source,ft=f.get(q);delete ft[w.__cacheKey],a.memory.textures--}function ht(I){let w=i.get(I);w.__depthDisposeCallback&&w.__depthDisposeCallback();let q=I.depthTexture;if(q&&q.renderTarget===I&&Q(q),I.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(w.__webglFramebuffer[ot]))for(let Mt=0;Mt<w.__webglFramebuffer[ot].length;Mt++)n.deleteFramebuffer(w.__webglFramebuffer[ot][Mt]);else n.deleteFramebuffer(w.__webglFramebuffer[ot]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ot])}else{if(Array.isArray(w.__webglFramebuffer))for(let ot=0;ot<w.__webglFramebuffer.length;ot++)n.deleteFramebuffer(w.__webglFramebuffer[ot]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ot=0;ot<w.__webglColorRenderbuffer.length;ot++)w.__webglColorRenderbuffer[ot]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ot]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ft=I.textures;for(let ot=0,Mt=ft.length;ot<Mt;ot++){let At=i.get(ft[ot]);At.__webglTexture&&(n.deleteTexture(At.__webglTexture),a.memory.textures--),i.remove(ft[ot])}i.remove(I)}let W=0;function lt(){W=0}function dt(){return W}function Ot(I){W=I}function Qt(){let I=W;return I>=s.maxTextures&&Jt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,I}function nt(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.mipmapsAutoUpdate),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function Pt(I,w){let q=i.get(I);if(I.isVideoTexture&&Be(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){let ft=I.image;if(ft===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(q,I,w);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+w)}function Ht(I,w){let q=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){Fe(q,I,w);return}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+w)}function Zt(I,w){let q=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){Fe(q,I,w);return}e.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+w)}function Nt(I,w){let q=i.get(I);if(I.version>0&&q.__version!==I.version){ri(q,I,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+w)}let ie={[Co]:n.REPEAT,[ln]:n.CLAMP_TO_EDGE,[Ro]:n.MIRRORED_REPEAT},ke={[Je]:n.NEAREST,[yf]:n.NEAREST_MIPMAP_NEAREST,[ca]:n.NEAREST_MIPMAP_LINEAR,[mi]:n.LINEAR,[cl]:n.LINEAR_MIPMAP_NEAREST,[Tn]:n.LINEAR_MIPMAP_LINEAR},Kt={[Mf]:n.NEVER,[Hh]:n.ALWAYS,[Sf]:n.LESS,[zh]:n.LEQUAL,[wf]:n.EQUAL,[Vh]:n.GEQUAL,[Ef]:n.GREATER,[Tf]:n.NOTEQUAL};function ye(I,w){if(w.type===Ki&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===mi||w.magFilter===cl||w.magFilter===ca||w.magFilter===Tn||w.minFilter===mi||w.minFilter===cl||w.minFilter===ca||w.minFilter===Tn)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,ie[w.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,ie[w.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,ie[w.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ke[w.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ke[w.minFilter]),w.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Kt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Je||w.minFilter!==ca&&w.minFilter!==Tn||w.type===Ki&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Te(I,w){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",O),z(w));let ft=w.source,ot=f.get(ft);ot===void 0&&(ot={},f.set(ft,ot));let Mt=nt(w);if(Mt!==I.__cacheKey){ot[Mt]===void 0&&(ot[Mt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ot[Mt].usedTimes++;let At=ot[I.__cacheKey];At!==void 0&&(ot[I.__cacheKey].usedTimes--,At.usedTimes===0&&Y(w)),I.__cacheKey=Mt,I.__webglTexture=ot[Mt].texture}return q}function he(I,w,q){return Math.floor(Math.floor(I/q)/w)}function Oe(I,w,q,ft){let Mt=I.updateRanges;if(Mt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,q,ft,w.data);else{Mt.sort((N,rt)=>N.start-rt.start);let At=0;for(let N=1;N<Mt.length;N++){let rt=Mt[At],et=Mt[N],Et=rt.start+rt.count,mt=he(et.start,w.width,4),St=he(rt.start,w.width,4);et.start<=Et+1&&mt===St&&he(et.start+et.count-1,w.width,4)===mt?rt.count=Math.max(rt.count,et.start+et.count-rt.start):(++At,Mt[At]=et)}Mt.length=At+1;let it=e.getParameter(n.UNPACK_ROW_LENGTH),st=e.getParameter(n.UNPACK_SKIP_PIXELS),wt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let N=0,rt=Mt.length;N<rt;N++){let et=Mt[N],Et=Math.floor(et.start/4),mt=Math.ceil(et.count/4),St=Et%w.width,$t=Math.floor(Et/w.width),ae=mt,gt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,St),e.pixelStorei(n.UNPACK_SKIP_ROWS,$t),e.texSubImage2D(n.TEXTURE_2D,0,St,$t,ae,gt,q,ft,w.data)}I.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,it),e.pixelStorei(n.UNPACK_SKIP_PIXELS,st),e.pixelStorei(n.UNPACK_SKIP_ROWS,wt)}}function Fe(I,w,q){let ft=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ft=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ft=n.TEXTURE_3D);let ot=Te(I,w),Mt=w.source;e.bindTexture(ft,I.__webglTexture,n.TEXTURE0+q);let At=i.get(Mt);if(Mt.version!==At.__version||ot===!0){if(e.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let gt=_e.getPrimaries(_e.workingColorSpace),qt=w.colorSpace===Cn?null:_e.getPrimaries(w.colorSpace),oe=w.colorSpace===Cn||gt===qt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let st=_(w.image,!1,s.maxTextureSize);st=Yt(w,st);let wt=r.convert(w.format,w.colorSpace),N=r.convert(w.type),rt=R(w.internalFormat,wt,N,w.normalized,w.colorSpace,w.isVideoTexture);ye(ft,w);let et,Et=w.mipmaps,mt=w.isVideoTexture!==!0,St=At.__version===void 0||ot===!0,$t=Mt.dataReady,ae=A(w,st);if(w.isDepthTexture)rt=y(w.format===An,w.type),St&&(mt?e.texStorage2D(n.TEXTURE_2D,1,rt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,rt,st.width,st.height,0,wt,N,null));else if(w.isDataTexture)if(Et.length>0){mt&&St&&e.texStorage2D(n.TEXTURE_2D,ae,rt,Et[0].width,Et[0].height);for(let gt=0,qt=Et.length;gt<qt;gt++)et=Et[gt],mt?$t&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,et.width,et.height,wt,N,et.data):e.texImage2D(n.TEXTURE_2D,gt,rt,et.width,et.height,0,wt,N,et.data);w.generateMipmaps=!1}else mt?(St&&e.texStorage2D(n.TEXTURE_2D,ae,rt,st.width,st.height),$t&&Oe(w,st,wt,N)):e.texImage2D(n.TEXTURE_2D,0,rt,st.width,st.height,0,wt,N,st.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){mt&&St&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ae,rt,Et[0].width,Et[0].height,st.depth);for(let gt=0,qt=Et.length;gt<qt;gt++)if(et=Et[gt],w.format!==tn)if(wt!==null)if(mt){if($t)if(w.layerUpdates.size>0){let oe=Qh(et.width,et.height,w.format,w.type);for(let kt of w.layerUpdates){let ve=et.data.subarray(kt*oe/et.data.BYTES_PER_ELEMENT,(kt+1)*oe/et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,kt,et.width,et.height,1,wt,ve)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,0,et.width,et.height,st.depth,wt,et.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,gt,rt,et.width,et.height,st.depth,0,et.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?$t&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,0,et.width,et.height,st.depth,wt,N,et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,gt,rt,et.width,et.height,st.depth,0,wt,N,et.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{mt&&St&&e.texStorage2D(n.TEXTURE_2D,ae,rt,Et[0].width,Et[0].height);for(let gt=0,qt=Et.length;gt<qt;gt++)et=Et[gt],w.format!==tn?wt!==null?mt?$t&&e.compressedTexSubImage2D(n.TEXTURE_2D,gt,0,0,et.width,et.height,wt,et.data):e.compressedTexImage2D(n.TEXTURE_2D,gt,rt,et.width,et.height,0,et.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?$t&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,et.width,et.height,wt,N,et.data):e.texImage2D(n.TEXTURE_2D,gt,rt,et.width,et.height,0,wt,N,et.data)}else if(w.isDataArrayTexture)if(mt){if(St&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ae,rt,st.width,st.height,st.depth),$t)if(w.layerUpdates.size>0){let gt=Qh(st.width,st.height,w.format,w.type);for(let qt of w.layerUpdates){let oe=st.data.subarray(qt*gt/st.data.BYTES_PER_ELEMENT,(qt+1)*gt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,qt,st.width,st.height,1,wt,N,oe)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,wt,N,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,rt,st.width,st.height,st.depth,0,wt,N,st.data);else if(w.isData3DTexture)mt?(St&&e.texStorage3D(n.TEXTURE_3D,ae,rt,st.width,st.height,st.depth),$t&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,wt,N,st.data)):e.texImage3D(n.TEXTURE_3D,0,rt,st.width,st.height,st.depth,0,wt,N,st.data);else if(w.isFramebufferTexture){if(St)if(mt)e.texStorage2D(n.TEXTURE_2D,ae,rt,st.width,st.height);else{let gt=st.width,qt=st.height;for(let oe=0;oe<ae;oe++)e.texImage2D(n.TEXTURE_2D,oe,rt,gt,qt,0,wt,N,null),gt>>=1,qt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){let gt=n.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),st.parentNode!==gt){gt.appendChild(st),u.add(w),gt.onpaint=qt=>{let oe=qt.changedElements;for(let kt of u)oe.includes(kt.image)&&(kt.needsUpdate=!0)},gt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,st);else{let oe=n.RGBA,kt=n.RGBA,ve=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,oe,kt,ve,st)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Et.length>0){if(mt&&St){let gt=te(Et[0]);e.texStorage2D(n.TEXTURE_2D,ae,rt,gt.width,gt.height)}for(let gt=0,qt=Et.length;gt<qt;gt++)et=Et[gt],mt?$t&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,wt,N,et):e.texImage2D(n.TEXTURE_2D,gt,rt,wt,N,et);w.generateMipmaps=!1}else if(mt){if(St){let gt=te(st);e.texStorage2D(n.TEXTURE_2D,ae,rt,gt.width,gt.height)}$t&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,wt,N,st)}else e.texImage2D(n.TEXTURE_2D,0,rt,wt,N,st);M(w)&&w.mipmapsAutoUpdate===!0&&b(ft),At.__version=Mt.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ri(I,w,q){if(w.image.length!==6)return;let ft=Te(I,w),ot=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+q);let Mt=i.get(ot);if(ot.version!==Mt.__version||ft===!0){e.activeTexture(n.TEXTURE0+q);let At=_e.getPrimaries(_e.workingColorSpace),it=w.colorSpace===Cn?null:_e.getPrimaries(w.colorSpace),st=w.colorSpace===Cn||At===it?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let wt=w.isCompressedTexture||w.image[0].isCompressedTexture,N=w.image[0]&&w.image[0].isDataTexture,rt=[];for(let kt=0;kt<6;kt++)!wt&&!N?rt[kt]=_(w.image[kt],!0,s.maxCubemapSize):rt[kt]=N?w.image[kt].image:w.image[kt],rt[kt]=Yt(w,rt[kt]);let et=rt[0],Et=r.convert(w.format,w.colorSpace),mt=r.convert(w.type),St=R(w.internalFormat,Et,mt,w.normalized,w.colorSpace),$t=w.isVideoTexture!==!0,ae=Mt.__version===void 0||ft===!0,gt=ot.dataReady,qt=A(w,et);ye(n.TEXTURE_CUBE_MAP,w);let oe;if(w.isDepthTexture){if(St=y(w.format===An,w.type),ae)if($t)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,St,et.width,et.height);else for(let kt=0;kt<6;kt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,St,et.width,et.height,0,Et,mt,null)}else if(wt){$t&&ae&&e.texStorage2D(n.TEXTURE_CUBE_MAP,qt,St,et.width,et.height);for(let kt=0;kt<6;kt++){oe=rt[kt].mipmaps;for(let ve=0;ve<oe.length;ve++){let He=oe[ve];w.format!==tn?Et!==null?$t?gt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+kt,ve,0,0,He.width,He.height,Et,He.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+kt,ve,St,He.width,He.height,0,He.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+kt,ve,0,0,He.width,He.height,Et,mt,He.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+kt,ve,St,He.width,He.height,0,Et,mt,He.data)}}}else{if(oe=w.mipmaps,$t&&ae){oe.length>0&&qt++;let kt=te(rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,qt,St,kt.width,kt.height)}for(let kt=0;kt<6;kt++)if(N){$t?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,0,0,rt[kt].width,rt[kt].height,Et,mt,rt[kt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,St,rt[kt].width,rt[kt].height,0,Et,mt,rt[kt].data);for(let ve=0;ve<oe.length;ve++){let sn=oe[ve].image[kt].image;$t?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+kt,ve+1,0,0,sn.width,sn.height,Et,mt,sn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+kt,ve+1,St,sn.width,sn.height,0,Et,mt,sn.data)}}else{$t?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,0,0,Et,mt,rt[kt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,St,Et,mt,rt[kt]);for(let ve=0;ve<oe.length;ve++){let He=oe[ve];$t?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+kt,ve+1,0,0,Et,mt,He.image[kt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+kt,ve+1,St,Et,mt,He.image[kt])}}}M(w)&&w.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),Mt.__version=ot.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Re(I,w,q,ft,ot,Mt){let At=r.convert(q.format,q.colorSpace),it=r.convert(q.type),st=R(q.internalFormat,At,it,q.normalized,q.colorSpace),wt=i.get(w),N=i.get(q);if(N.__renderTarget=w,!wt.__hasExternalTextures){let rt=Math.max(1,w.width>>Mt),et=Math.max(1,w.height>>Mt);ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?e.texImage3D(ot,Mt,st,rt,et,w.depth,0,At,it,null):e.texImage2D(ot,Mt,st,rt,et,0,At,it,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),It(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,ot,N.__webglTexture,0,Pe(w)):(ot===n.TEXTURE_2D||ot>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ft,ot,N.__webglTexture,Mt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ui(I,w,q){if(n.bindRenderbuffer(n.RENDERBUFFER,I),w.depthBuffer){let ft=w.depthTexture,ot=ft&&ft.isDepthTexture?ft.type:null,Mt=y(w.stencilBuffer,ot),At=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;It(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe(w),Mt,w.width,w.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe(w),Mt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,I)}else{let ft=w.textures;for(let ot=0;ot<ft.length;ot++){let Mt=ft[ot],At=r.convert(Mt.format,Mt.colorSpace),it=r.convert(Mt.type),st=R(Mt.internalFormat,At,it,Mt.normalized,Mt.colorSpace);It(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe(w),st,w.width,w.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe(w),st,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,st,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ve(I,w,q){let ft=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=i.get(w.depthTexture);ot.__renderTarget=w;let Mt=ft?w.depthTexture.image[0]:w.depthTexture.image;(!ot.__webglTexture||Mt.width!==w.width||Mt.height!==w.height)&&(Mt.width=w.width,Mt.height=w.height,w.depthTexture.needsUpdate=!0),ft?Nt(w.depthTexture,0):Pt(w.depthTexture,0);let At=ot.__webglTexture,it=Pe(w),st=ft?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,wt=w.depthTexture.format===An?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Mn)It(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,wt,st,At,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,wt,st,At,0);else if(w.depthTexture.format===An)It(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,wt,st,At,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,wt,st,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ai(I){let w=i.get(I),q=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let ft=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ft){let ot=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ft.removeEventListener("dispose",ot)};ft.addEventListener("dispose",ot),w.__depthDisposeCallback=ot}w.__boundDepthTexture=ft}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(q)for(let ft=0;ft<6;ft++)Ve(w.__webglFramebuffer[ft],I,ft);else I.texture.mipmaps.length>0?Ve(w.__webglFramebuffer[0],I,0):Ve(w.__webglFramebuffer,I,0);else if(q){w.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ft]),w.__webglDepthbuffer[ft]===void 0)w.__webglDepthbuffer[ft]=n.createRenderbuffer(),Ui(w.__webglDepthbuffer[ft],I,!1);else{let ot=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=w.__webglDepthbuffer[ft];n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,Mt)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Ui(w.__webglDepthbuffer,I,!1);else{let ot=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,Mt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function oi(I,w,q){let ft=i.get(I);w!==void 0&&Re(ft.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&ai(I)}function Mi(I){let w=I.texture,q=i.get(I),ft=i.get(w);I.addEventListener("dispose",X),z(I);let ot=I.textures,Mt=I.isWebGLCubeRenderTarget===!0,At=ot.length>1;if(At||(ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture()),ft.__version=w.version,a.memory.textures++),Mt){q.__webglFramebuffer=[];for(let it=0;it<6;it++)if(w.mipmaps.length>0){q.__webglFramebuffer[it]=[];for(let st=0;st<w.mipmaps.length;st++)q.__webglFramebuffer[it][st]=n.createFramebuffer()}else q.__webglFramebuffer[it]=n.createFramebuffer()}else{if(w.mipmaps.length>0){q.__webglFramebuffer=[];for(let it=0;it<w.mipmaps.length;it++)q.__webglFramebuffer[it]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(At)for(let it=0,st=ot.length;it<st;it++){let wt=i.get(ot[it]);wt.__webglTexture===void 0&&(wt.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&It(I)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let it=0;it<ot.length;it++){let st=ot[it];q.__webglColorRenderbuffer[it]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[it]);let wt=r.convert(st.format,st.colorSpace),N=r.convert(st.type),rt=R(st.internalFormat,wt,N,st.normalized,st.colorSpace,I.isXRRenderTarget===!0),et=Pe(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,et,rt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,q.__webglColorRenderbuffer[it])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Ui(q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(n.TEXTURE_CUBE_MAP,ft.__webglTexture),ye(n.TEXTURE_CUBE_MAP,w);for(let it=0;it<6;it++)if(w.mipmaps.length>0)for(let st=0;st<w.mipmaps.length;st++)Re(q.__webglFramebuffer[it][st],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,st);else Re(q.__webglFramebuffer[it],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);M(w)?b(n.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(At){for(let it=0,st=ot.length;it<st;it++){let wt=ot[it],N=i.get(wt),rt=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(rt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,N.__webglTexture),ye(rt,wt),Re(q.__webglFramebuffer,I,wt,n.COLOR_ATTACHMENT0+it,rt,0),M(wt)&&b(rt)}e.unbindTexture()}else{let it=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(it=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,ft.__webglTexture),ye(it,w),w.mipmaps.length>0)for(let st=0;st<w.mipmaps.length;st++)Re(q.__webglFramebuffer[st],I,w,n.COLOR_ATTACHMENT0,it,st);else Re(q.__webglFramebuffer,I,w,n.COLOR_ATTACHMENT0,it,0);M(w)?b(it):w.mipmaps.length>0&&n.texParameteri(it,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&ai(I)}function V(I){let w=I.textures;for(let q=0,ft=w.length;q<ft;q++){let ot=w[q];if(M(ot)&&ot.mipmapsAutoUpdate===!0){let Mt=T(I),At=i.get(ot).__webglTexture;e.bindTexture(Mt,At),b(Mt),e.unbindTexture()}}}let Si=[];function Ae(I){if(I.samples>0){if(It(I)===!1){let w=I.textures,q=I.width,ft=I.height,ot=n.COLOR_BUFFER_BIT,Mt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(I),it=w.length>1;if(it)for(let wt=0;wt<w.length;wt++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let wt=0;wt<w.length;wt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ot|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ot|=n.STENCIL_BUFFER_BIT)),it){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[wt]);let N=i.get(w[wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,q,ft,0,0,q,ft,ot,n.NEAREST),l===!0&&(Si.length=0,Si.push(n.COLOR_ATTACHMENT0+wt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Si.push(Mt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Si))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),it)for(let wt=0;wt<w.length;wt++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,At.__webglColorRenderbuffer[wt]);let N=i.get(w[wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,N,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let w=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Pe(I){return Math.min(s.maxSamples,I.samples)}function It(I){let w=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Be(I){let w=a.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function Yt(I,w){let q=I.colorSpace,ft=I.format,ot=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==Rr&&q!==Cn&&(_e.getTransfer(q)===Se?(ft!==tn||ot!==Ei)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",q)),w}function te(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Qt,this.resetTextureUnits=lt,this.getTextureUnits=dt,this.setTextureUnits=Ot,this.setTexture2D=Pt,this.setTexture2DArray=Ht,this.setTexture3D=Zt,this.setTextureCube=Nt,this.rebindTextures=oi,this.setupRenderTarget=Mi,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=ai,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=It,this.dispose=G}function vv(n,t){function e(i,s=Cn){let r,a=_e.getTransfer(s);if(i===Ei)return n.UNSIGNED_BYTE;if(i===dl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ul)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Uh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Dh)return n.BYTE;if(i===kh)return n.SHORT;if(i===Qs)return n.UNSIGNED_SHORT;if(i===hl)return n.INT;if(i===Ji)return n.UNSIGNED_INT;if(i===Ki)return n.FLOAT;if(i===Qi)return n.HALF_FLOAT;if(i===Oh)return n.ALPHA;if(i===Fh)return n.RGB;if(i===tn)return n.RGBA;if(i===Mn)return n.DEPTH_COMPONENT;if(i===An)return n.DEPTH_STENCIL;if(i===Bh)return n.RED;if(i===fl)return n.RED_INTEGER;if(i===qn)return n.RG;if(i===pl)return n.RG_INTEGER;if(i===ml)return n.RGBA_INTEGER;if(i===ha||i===da||i===ua||i===fa)if(a===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gl||i===_l||i===yl||i===xl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vl||i===bl||i===Ml||i===Sl||i===wl||i===pa||i===El)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===vl||i===bl)return a===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ml)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sl)return r.COMPRESSED_R11_EAC;if(i===wl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===pa)return r.COMPRESSED_RG11_EAC;if(i===El)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Tl||i===Al||i===Cl||i===Rl||i===Pl||i===Il||i===Ll||i===Dl||i===kl||i===Nl||i===Ul||i===Ol||i===Fl||i===Bl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Tl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Al)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Il)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ll)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ul)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ol)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zl||i===Vl||i===Hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===zl)return a===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gl||i===Wl||i===ma||i===$l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Gl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ds?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mv=`
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

}`,fd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Vr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Bi({vertexShader:bv,fragmentShader:Mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xe(new Yr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pd=class extends ji{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new fd,m={},_=e.getContextAttributes(),M=null,b=null,T=[],R=[],y=new Lt,A=null,z=null,k=new fi;k.viewport=new we;let O=new fi;O.viewport=new we;let X=[k,O],Q=new rl,U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let Pt=T[nt];return Pt===void 0&&(Pt=new Hs,T[nt]=Pt),Pt.getTargetRaySpace()},this.getControllerGrip=function(nt){let Pt=T[nt];return Pt===void 0&&(Pt=new Hs,T[nt]=Pt),Pt.getGripSpace()},this.getHand=function(nt){let Pt=T[nt];return Pt===void 0&&(Pt=new Hs,T[nt]=Pt),Pt.getHandSpace()};function tt(nt){let Pt=R.indexOf(nt.inputSource);if(Pt===-1)return;let Ht=T[Pt];Ht!==void 0&&(Ht.update(nt.inputSource,nt.frame,c||a),Ht.dispatchEvent({type:nt.type,data:nt.inputSource}))}function Y(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ht);for(let nt=0;nt<T.length;nt++){let Pt=R[nt];Pt!==null&&(R[nt]=null,T[nt].disconnect(Pt))}U=null,G=null,p.reset();for(let nt in m)delete m[nt];if(t.setRenderTarget(M),f=null,d=null,u=null,s=null,b=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(y.width,y.height,!1),z!==null){let nt=z.camera;nt.fov=z.fov,nt.zoom=z.zoom,nt.updateProjectionMatrix(),z=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,i.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,i.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ht),_.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ht=null,Zt=null,Nt=null;_.depth&&(Nt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ht=_.stencil?An:Mn,Zt=_.stencil?ds:Ji);let ie={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ie),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Di(d.textureWidth,d.textureHeight,{format:tn,type:Ei,depthTexture:new En(d.textureWidth,d.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,Ht),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ht={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Ht),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Di(f.framebufferWidth,f.framebufferHeight,{format:tn,type:Ei,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ht(nt){for(let Pt=0;Pt<nt.removed.length;Pt++){let Ht=nt.removed[Pt],Zt=R.indexOf(Ht);Zt>=0&&(R[Zt]=null,T[Zt].disconnect(Ht))}for(let Pt=0;Pt<nt.added.length;Pt++){let Ht=nt.added[Pt],Zt=R.indexOf(Ht);if(Zt===-1){for(let ie=0;ie<T.length;ie++)if(ie>=R.length){R.push(Ht),Zt=ie;break}else if(R[ie]===null){R[ie]=Ht,Zt=ie;break}if(Zt===-1)break}let Nt=T[Zt];Nt&&Nt.connect(Ht)}}function W(nt,Pt){Pt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(Pt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let Pt=nt.near,Ht=nt.far;p.texture!==null&&(p.depthNear>0&&(Pt=p.depthNear),p.depthFar>0&&(Ht=p.depthFar)),Q.near=O.near=k.near=Pt,Q.far=O.far=k.far=Ht,(U!==Q.near||G!==Q.far)&&(s.updateRenderState({depthNear:Q.near,depthFar:Q.far}),U=Q.near,G=Q.far),Q.layers.mask=nt.layers.mask|6,k.layers.mask=Q.layers.mask&-5,O.layers.mask=Q.layers.mask&-3;let Zt=nt.parent,Nt=Q.cameras;W(Q,Zt);for(let ie=0;ie<Nt.length;ie++)W(Nt[ie],Zt);Q.projectionMatrix.copy(k.projectionMatrix),Q.projectionMatrixInverse.copy(k.projectionMatrixInverse),z===null&&nt.isPerspectiveCamera&&(z={camera:nt,fov:nt.fov,zoom:nt.zoom}),lt(nt,Q,Zt)};function lt(nt,Pt,Ht){Ht===null?nt.matrix.copy(Pt.matrixWorld):(nt.matrix.copy(Ht.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(Pt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(Pt.projectionMatrix),nt.projectionMatrixInverse.copy(Pt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Bs*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(nt){l=nt,d!==null&&(d.fixedFoveation=nt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=nt)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(Q)},this.getCameraTexture=function(nt){return m[nt]};let dt=null;function Ot(nt,Pt){if(h=Pt.getViewerPose(c||a),g=Pt,h!==null){let Ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let Zt=!1;Ht.length!==Q.cameras.length&&(Q.cameras.length=0,Zt=!0);for(let Kt=0;Kt<Ht.length;Kt++){let ye=Ht[Kt],Te=null;if(f!==null)Te=f.getViewport(ye);else{let Oe=u.getViewSubImage(d,ye);Te=Oe.viewport,Kt===0&&(t.setRenderTargetTextures(b,Oe.colorTexture,Oe.depthStencilTexture),t.setRenderTarget(b))}let he=X[Kt];he===void 0&&(he=new fi,he.layers.enable(Kt),he.viewport=new we,X[Kt]=he),he.matrix.fromArray(ye.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ye.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Te.x,Te.y,Te.width,Te.height),Kt===0&&(Q.matrix.copy(he.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Zt===!0&&Q.cameras.push(he)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let Kt=u.getDepthInformation(Ht[0]);Kt&&Kt.isValid&&Kt.texture&&p.init(Kt,s.renderState)}if(Nt&&Nt.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let Kt=0;Kt<Ht.length;Kt++){let ye=Ht[Kt].camera;if(ye){let Te=m[ye];Te||(Te=new Vr,m[ye]=Te);let he=u.getCameraImage(ye);Te.sourceTexture=he}}}}for(let Ht=0;Ht<T.length;Ht++){let Zt=R[Ht],Nt=T[Ht];Zt!==null&&Nt!==void 0&&Nt.update(Zt,Pt,c||a)}dt&&dt(nt,Pt),Pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Pt}),g=null}let Qt=new rp;Qt.setAnimationLoop(Ot),this.setAnimationLoop=function(nt){dt=nt},this.dispose=function(){}}},Sv=new Ce,mp=new re;mp.set(-1,0,0,0,1,0,0,0,1);function wv(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Zh(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,M,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,_,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===yi&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===yi&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=t.get(m),M=_.envMap,b=_.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(mp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yi&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ev(n,t,e,i){let s={},r={};function a(_,M){let b=M.program;i.uniformBlockBinding(_,b,s[_.id])}function o(_,M){let b=s[_.id];b===void 0&&(g(_),b=l(_),s[_.id]=b,_.addEventListener("dispose",p));let T=M.program;i.updateUBOMapping(_,T);let R=t.render.frame;r[_.id]!==R&&(c(_),r[_.id]=R)}function l(_){let M=n.createBuffer(),b=_.__size,T=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,b,T),n.bindBuffer(n.UNIFORM_BUFFER,null),M}function c(_){let M=s[_.id],b=_.uniforms,T=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,y=b.length;R<y;R++){let A=b[R];if(Array.isArray(A))for(let z=0,k=A.length;z<k;z++)h(A[z],R,z,T);else h(A,R,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(_,M,b,T){if(d(_,M,b,T)===!0){let R=_.__offset,y=_.value;if(Array.isArray(y)){let A=0;for(let z=0;z<y.length;z++){let k=y[z],O=x(k,!0);u(k,_.__data,A),A+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else u(y,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,R,_.__data)}}function u(_,M,b){typeof _=="number"||typeof _=="boolean"?M[b]=_:_.isMatrix3?(M[b]=_.elements[0],M[b+1]=_.elements[1],M[b+2]=_.elements[2],M[b+3]=0,M[b+4]=_.elements[3],M[b+5]=_.elements[4],M[b+6]=_.elements[5],M[b+7]=0,M[b+8]=_.elements[6],M[b+9]=_.elements[7],M[b+10]=_.elements[8],M[b+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-b),b):_.toArray(M,b)}function d(_,M,b,T){let R=_.value,y=M+"_"+b;if(Array.isArray(R)){T[y]===void 0&&(T[y]=[]);let A=T[y],z=!1;for(let k=0;k<R.length;k++)f(R[k],A,k)===!0&&(z=!0);return z}return f(R,T,y)}function f(_,M,b){if(M[b]===void 0)return typeof _=="number"||typeof _=="boolean"?M[b]=_:ArrayBuffer.isView(_)?M[b]=_.slice():M[b]=_.clone(),!0;{let T=M[b];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return M[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function g(_){let M=_.uniforms,b=0,T=16;for(let y=0,A=M.length;y<A;y++){let z=Array.isArray(M[y])?M[y]:[M[y]];for(let k=0,O=z.length;k<O;k++){let X=z[k],Q=Array.isArray(X.value)?X.value:[X.value],U=Array.isArray(M[y])||Array.isArray(X.value),G=b;for(let Y=0,ht=Q.length;Y<ht;Y++){let W=Q[Y],lt=x(W,U),dt=b%T,Ot=dt%lt.boundary,Qt=dt+Ot;b+=Ot,Qt!==0&&T-Qt<lt.storage&&(b+=T-Qt),Y===0&&(G=b),b+=lt.storage}let tt=X.type==="int"?Int32Array:X.type==="uint"?Uint32Array:Float32Array;X.__data=new tt((b-G)/Float32Array.BYTES_PER_ELEMENT),X.__offset=G}}let R=b%T;return R>0&&(b+=T-R),_.__size=b,_.__cache={},this}function x(_,M){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=16,b.storage=48):_.isMatrix4?(b.boundary=16,b.storage=64):_.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(_){let M=_.target;M.removeEventListener("dispose",p),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:m}}var Tv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hn=null;function Av(){return hn===null&&(hn=new No(Tv,16,16,qn,Qi),hn.name="DFG_LUT",hn.minFilter=mi,hn.magFilter=mi,hn.wrapS=ln,hn.wrapT=ln,hn.generateMipmaps=!1,hn.needsUpdate=!0),hn}var Jl=class{constructor(t={}){let{canvas:e=Af(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ei}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let x=f,p=new Set([ml,pl,fl]),m=new Set([Ei,Ji,Qs,ds,dl,ul]),_=new Uint32Array(4),M=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},T=null,R=null,y=[],A=[],z=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,O=!1,X=null,Q=null,U=null,G=null;this._outputColorSpace=Pi;let tt=0,Y=0,ht=null,W=-1,lt=null,dt=new we,Ot=new we,Qt=null,nt=new ge(0),Pt=0,Ht=e.width,Zt=e.height,Nt=1,ie=null,ke=null,Kt=new we(0,0,Ht,Zt),ye=new we(0,0,Ht,Zt),Te=!1,he=new zn,Oe=new Uo,Fe=!1,ri=!1,Re=new Ce,Ui=new F,Ve=new we,ai={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oi=!1;function Mi(){return ht===null?Nt:1}let V=i;function Si(E,B){return e.getContext(E,B)}let Ae,Pe,It,Be,Yt,te,I,w,q,ft,ot,Mt,At,it,st,wt,N,rt,et,Et,mt,St,$t;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",qt,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",kt,!1),V===null){let B="webgl2";if(V=Si(B,E),V===null)throw Si(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ae()}catch(E){throw e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",kt,!1),ee("WebGLRenderer: "+E.message),E}function ae(){Ae=new Fy(V),Ae.init(),mt=new vv(V,Ae),Pe=new Ay(V,Ae,t,mt),It=new yv(V,Ae),Pe.reversedDepthBuffer&&d&&It.buffers.depth.setReversed(!0),Q=V.createFramebuffer(),U=V.createFramebuffer(),G=V.createFramebuffer(),Be=new Vy(V),Yt=new sv,te=new xv(V,Ae,It,Yt,Pe,mt,Be),I=new Oy(k),w=new Gg(V),St=new Ey(V,w),q=new By(V,w,Be,St),ft=new Gy(V,q,w,St,Be),rt=new Hy(V,Pe,te),st=new Cy(Yt),ot=new nv(k,I,Ae,Pe,St,st),Mt=new wv(k,Yt),At=new av,it=new uv(Ae),N=new wy(k,I,It,ft,g,l),wt=new _v(k,ft,Pe),$t=new Ev(V,Be,Pe,It),et=new Ty(V,Ae,Be),Et=new zy(V,Ae,Be),Be.programs=ot.programs,k.capabilities=Pe,k.extensions=Ae,k.properties=Yt,k.renderLists=At,k.shadowMap=wt,k.state=It,k.info=Be}x!==Ei&&(z=new $y(x,e.width,e.height,o,s,r));let gt=new pd(k,V);this.xr=gt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let E=Ae.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ae.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Nt},this.setPixelRatio=function(E){E!==void 0&&(Nt=E,this.setSize(Ht,Zt,!1))},this.getSize=function(E){return E.set(Ht,Zt)},this.setSize=function(E,B,J=!0){if(gt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ht=E,Zt=B,e.width=Math.floor(E*Nt),e.height=Math.floor(B*Nt),J===!0&&(e.style.width=E+"px",e.style.height=B+"px"),z!==null&&z.setSize(e.width,e.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Ht*Nt,Zt*Nt).floor()},this.setDrawingBufferSize=function(E,B,J){Ht=E,Zt=B,Nt=J,e.width=Math.floor(E*J),e.height=Math.floor(B*J),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(x===Ei){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(dt)},this.getViewport=function(E){return E.copy(Kt)},this.setViewport=function(E,B,J,$){E.isVector4?Kt.set(E.x,E.y,E.z,E.w):Kt.set(E,B,J,$),It.viewport(dt.copy(Kt).multiplyScalar(Mi()).round())},this.getScissor=function(E){return E.copy(ye)},this.setScissor=function(E,B,J,$){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,B,J,$),It.scissor(Ot.copy(ye).multiplyScalar(Mi()).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(E){It.setScissorTest(Te=E)},this.setOpaqueSort=function(E){ie=E},this.setTransparentSort=function(E){ke=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,J=!0){let $=0;if(E){let j=!1;if(ht!==null){let Rt=ht.texture.format;j=p.has(Rt)}if(j){let Rt=ht.texture.type,zt=m.has(Rt),Tt=N.getClearColor(),Ut=N.getClearAlpha(),Wt=Tt.r,ne=Tt.g,pe=Tt.b;zt?(_[0]=Wt,_[1]=ne,_[2]=pe,_[3]=Ut,V.clearBufferuiv(V.COLOR,0,_)):(M[0]=Wt,M[1]=ne,M[2]=pe,M[3]=Ut,V.clearBufferiv(V.COLOR,0,M))}else $|=V.COLOR_BUFFER_BIT}B&&($|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),X=E},this.dispose=function(){e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",kt,!1),N.dispose(),At.dispose(),it.dispose(),te.dispose(),Yt.dispose(),I.dispose(),ft.dispose(),q.dispose(),St.dispose(),$t.dispose(),ot.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",fr),gt.removeEventListener("sessionend",pr),an.stop()};function qt(E){E.preventDefault(),Lr("WebGLRenderer: Context Lost."),O=!0}function oe(){Lr("WebGLRenderer: Context Restored."),O=!1;let E=Be.autoReset,B=wt.enabled,J=wt.autoUpdate,$=wt.needsUpdate,j=wt.type;ae(),Be.autoReset=E,wt.enabled=B,wt.autoUpdate=J,wt.needsUpdate=$,wt.type=j}function kt(E){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ve(E){let B=E.target;B.removeEventListener("dispose",ve),He(B)}function He(E){sn(E),Yt.remove(E)}function sn(E){let B=Yt.get(E).programs;B!==void 0&&(B.forEach(function(J){ot.releaseProgram(J)}),E.isShaderMaterial&&ot.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,J,$,j,Rt){B===null&&(B=ai);let zt=j.isMesh&&j.matrixWorld.determinantAffine()<0,Tt=Dc(E,B,J,$,j);It.setMaterial($,zt);let Ut=J.index,Wt=1;if($.wireframe===!0){if(Ut=q.getWireframeAttribute(J),Ut===void 0)return;Wt=2}let ne=J.drawRange,pe=J.attributes.position,Gt=ne.start*Wt,de=(ne.start+ne.count)*Wt;Rt!==null&&(Gt=Math.max(Gt,Rt.start*Wt),de=Math.min(de,(Rt.start+Rt.count)*Wt)),Ut!==null?(Gt=Math.max(Gt,0),de=Math.min(de,Ut.count)):pe!=null&&(Gt=Math.max(Gt,0),de=Math.min(de,pe.count));let S=de-Gt;if(S<0||S===1/0)return;St.setup(j,$,Tt,J,Ut);let v,C=et;if(Ut!==null&&(v=w.get(Ut),C=Et,C.setIndex(v)),j.isMesh)$.wireframe===!0?(It.setLineWidth($.wireframeLinewidth*Mi()),C.setMode(V.LINES)):C.setMode(V.TRIANGLES);else if(j.isLine){let P=$.linewidth;P===void 0&&(P=1),It.setLineWidth(P*Mi()),j.isLineSegments?C.setMode(V.LINES):j.isLineLoop?C.setMode(V.LINE_LOOP):C.setMode(V.LINE_STRIP)}else j.isPoints?C.setMode(V.POINTS):j.isSprite&&C.setMode(V.TRIANGLES);if(j.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))C.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let P=j._multiDrawStarts,L=j._multiDrawCounts,K=j._multiDrawCount,H=Ut?w.get(Ut).bytesPerElement:1,Z=Yt.get($).currentProgram.getUniforms();for(let at=0;at<K;at++)Z.setValue(V,"_gl_DrawID",at),C.render(P[at]/H,L[at])}else if(j.isInstancedMesh)C.renderInstances(Gt,S,j.count);else if(J.isInstancedBufferGeometry){let P=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,L=Math.min(J.instanceCount,P);C.renderInstances(Gt,S,L)}else C.render(Gt,S)};function Ba(E,B,J,$){X!==null&&E.isNodeMaterial&&X.setObject($,E),Fe===!0&&st.setState(E,J,!1),E.transparent===!0&&E.side===xi&&E.forceSinglePass===!1?(E.side=yi,E.needsUpdate=!0,Qn(E,B,$),E.side=Xn,E.needsUpdate=!0,Qn(E,B,$),E.side=xi):Qn(E,B,$)}this.compile=function(E,B,J=null){J===null&&(J=E),X!==null&&X.renderStart(E,B,J),R=it.get(J),R.init(B),A.push(R),J.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(R.pushLight(j),j.castShadow&&R.pushShadow(j))}),E!==J&&E.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(R.pushLight(j),j.castShadow&&R.pushShadow(j))}),R.setupLights(),X!==null&&X.updateLights(R.state.lightsArray),ri=this.localClippingEnabled,Fe=st.init(this.clippingPlanes,ri),Fe===!0&&st.setGlobalState(this.clippingPlanes,B),X!==null&&wt.render(R.state.shadowsArray,J,B);let $=new Set;return E.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Rt=j.material;if(Rt)if(Array.isArray(Rt))for(let zt=0;zt<Rt.length;zt++){let Tt=Rt[zt];Ba(Tt,J,B,j),$.add(Tt)}else Ba(Rt,J,B,j),$.add(Rt)}),R=A.pop(),X!==null&&X.renderEnd(),$},this.compileAsync=function(E,B,J=null){let $=this.compile(E,B,J);return new Promise(j=>{function Rt(){if($.forEach(function(zt){let Ut=Yt.get(zt).currentProgram;(Ut===void 0||Ut.isReady())&&$.delete(zt)}),$.size===0){j(E);return}setTimeout(Rt,10)}Ae.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let rn=null;function za(E){rn&&rn(E)}function fr(){an.stop()}function pr(){an.start()}let an=new rp;an.setAnimationLoop(za),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(E){rn=E,gt.setAnimationLoop(E),E===null?an.stop():an.start()},gt.addEventListener("sessionstart",fr),gt.addEventListener("sessionend",pr),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;X!==null&&X.renderStart(E,B);let J=gt.enabled===!0&&gt.isPresenting===!0,$=z!==null&&(ht===null||J)&&z.begin(k,ht);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(B),B=gt.getCamera()),E.isScene===!0&&E.onBeforeRender(k,E,B,ht),R=it.get(E,A.length),R.init(B),R.state.textureUnits=te.getTextureUnits(),A.push(R),Re.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?Oe.setFromArrayCamera(B):he.setFromProjectionMatrix(Re,Fi,B.reversedDepth),ri=this.localClippingEnabled,Fe=st.init(this.clippingPlanes,ri),T=At.get(E,y.length),T.init(),y.push(T),this.info.render.frame++,gt.enabled===!0&&gt.isPresenting===!0){let zt=k.xr.getDepthSensingMesh();zt!==null&&gs(zt,B,-1/0,k.sortObjects)}gs(E,B,0,k.sortObjects),T.finish(),X!==null&&X.updateLights(R.state.lightsArray),k.sortObjects===!0&&T.sort(ie,ke),oi=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,oi&&N.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),Fe===!0&&st.beginShadows();let j=R.state.shadowsArray;if(wt.render(j,E,B),Fe===!0&&st.endShadows(),($&&z.hasRenderPass())===!1){let zt=T.opaque,Tt=T.transmissive;if(R.setupLights(),B.isArrayCamera){let Ut=B.cameras;if(Tt.length>0)for(let Wt=0,ne=Ut.length;Wt<ne;Wt++){let pe=Ut[Wt];Ha(zt,Tt,E,pe)}oi&&N.render(E);for(let Wt=0,ne=Ut.length;Wt<ne;Wt++){let pe=Ut[Wt];Va(T,E,pe,pe.viewport)}}else Tt.length>0&&Ha(zt,Tt,E,B),oi&&N.render(E),Va(T,E,B)}ht!==null&&Y===0&&(te.updateMultisampleRenderTarget(ht),te.updateRenderTargetMipmap(ht)),$&&z.end(k),E.isScene===!0&&E.onAfterRender(k,E,B),St.resetDefaultState(),W=-1,lt=null,A.pop(),A.length>0?(R=A[A.length-1],te.setTextureUnits(R.state.textureUnits),Fe===!0&&st.setGlobalState(k.clippingPlanes,R.state.camera)):R=null,y.pop(),y.length>0?T=y[y.length-1]:T=null,X!==null&&X.renderEnd()};function gs(E,B,J,$){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)R.pushLight(E),E.castShadow&&R.pushShadow(E);else if(E.isSprite){let zt=B.isArrayCamera?Oe:he;if(!E.frustumCulled||E.intersectsFrustum(zt)){$&&Ve.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Re);let Tt=ft.update(E),Ut=E.material;Ut.visible&&T.push(E,Tt,Ut,J,Ve.z,null,B)}}else if(E.isMesh||E.isLine||E.isPoints){let zt=B.isArrayCamera?Oe:he;if(!E.frustumCulled||E.intersectsFrustum(zt)){let Tt=ft.update(E),Ut=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ve.copy(E.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Ve.copy(Tt.boundingSphere.center)),Ve.applyMatrix4(E.matrixWorld).applyMatrix4(Re)),Array.isArray(Ut)){let Wt=Tt.groups;for(let ne=0,pe=Wt.length;ne<pe;ne++){let Gt=Wt[ne],de=Ut[Gt.materialIndex];de&&de.visible&&T.push(E,Tt,de,J,Ve.z,Gt,B)}}else Ut.visible&&T.push(E,Tt,Ut,J,Ve.z,null,B)}}}let Rt=E.children;for(let zt=0,Tt=Rt.length;zt<Tt;zt++)gs(Rt[zt],B,J,$)}function Va(E,B,J,$){let{opaque:j,transmissive:Rt,transparent:zt}=E;R.setupLightsView(J),Fe===!0&&st.setGlobalState(k.clippingPlanes,J),$&&It.viewport(dt.copy($)),j.length>0&&_s(j,B,J),Rt.length>0&&_s(Rt,B,J),zt.length>0&&_s(zt,B,J),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Ha(E,B,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[$.id]===void 0){let Gt=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[$.id]=new Di(1,1,{generateMipmaps:!0,type:Gt?Qi:Ei,minFilter:Tn,samples:Math.max(4,Pe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let Rt=R.state.transmissionRenderTarget[$.id],zt=$.viewport||dt;Rt.setSize(zt.z*k.transmissionResolutionScale,zt.w*k.transmissionResolutionScale);let Tt=k.getRenderTarget(),Ut=k.getActiveCubeFace(),Wt=k.getActiveMipmapLevel();k.setRenderTarget(Rt),k.getClearColor(nt),Pt=k.getClearAlpha(),Pt<1&&k.setClearColor(16777215,.5),k.clear(),oi&&N.render(J);let ne=k.toneMapping;k.toneMapping=cn;let pe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),R.setupLightsView($),Fe===!0&&st.setGlobalState(k.clippingPlanes,$),_s(E,J,$),te.updateMultisampleRenderTarget(Rt),te.updateRenderTargetMipmap(Rt),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let de=0,S=B.length;de<S;de++){let v=B[de],{object:C,geometry:P,material:L,group:K}=v;if(L.side===xi&&C.layers.test($.layers)){let H=L.side;L.side=yi,L.needsUpdate=!0,Ga(C,J,$,P,L,K),L.side=H,L.needsUpdate=!0,Gt=!0}}Gt===!0&&(te.updateMultisampleRenderTarget(Rt),te.updateRenderTargetMipmap(Rt))}k.setRenderTarget(Tt,Ut,Wt),k.setClearColor(nt,Pt),pe!==void 0&&($.viewport=pe),k.toneMapping=ne}function _s(E,B,J){let $=B.isScene===!0?B.overrideMaterial:null;for(let j=0,Rt=E.length;j<Rt;j++){let zt=E[j],{object:Tt,geometry:Ut,group:Wt}=zt,ne=zt.material;ne.allowOverride===!0&&$!==null&&(ne=$),Tt.layers.test(J.layers)&&Ga(Tt,B,J,Ut,ne,Wt)}}function Ga(E,B,J,$,j,Rt){X!==null&&j.isNodeMaterial&&X.setObject(E,j),E.onBeforeRender(k,B,J,$,j,Rt),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(k,B,J,$,E,Rt),j.transparent===!0&&j.side===xi&&j.forceSinglePass===!1?(j.side=yi,j.needsUpdate=!0,k.renderBufferDirect(J,B,$,j,E,Rt),j.side=Xn,j.needsUpdate=!0,k.renderBufferDirect(J,B,$,j,E,Rt),j.side=xi):k.renderBufferDirect(J,B,$,j,E,Rt),E.onAfterRender(k,B,J,$,j,Rt)}function Wa(E){let B=0;for(let J of E)J.texture!==null&&B++;return B}function Qn(E,B,J){B.isScene!==!0&&(B=ai);let $=Yt.get(E),j=R.state.lights,Rt=R.state.shadowsArray,zt=j.state.version,Tt=ot.getParameters(E,j.state,Rt,B,J,R.state.lightProbeGridArray),Ut=ot.getProgramCacheKey(Tt),Wt=$.programs;$.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,$.fog=B.fog;let ne=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;$.envMap=I.get(E.envMap||$.environment,ne),$.envMapRotation=$.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Wt===void 0&&(E.addEventListener("dispose",ve),Wt=new Map,$.programs=Wt,$.programVariants=new Map);let pe=Wt.get(Ut);if(pe!==void 0){if($.currentProgram===pe&&$.lightsStateVersion===zt)return Xa(E,Tt),pe}else Tt.uniforms=ot.getUniforms(E),X!==null&&E.isNodeMaterial&&X.build(E,J,Tt),E.onBeforeCompile(Tt,k),pe=ot.acquireProgram(Tt,Ut),Wt.set(Ut,pe),$.uniforms=Tt.uniforms;let Gt=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Gt.clippingPlanes=st.uniform),Xa(E,Tt),$.needsLights=Nc(E),$.lightsStateVersion=zt,$.needsLights&&(Gt.ambientLightColor.value=j.state.ambient,Gt.lightProbe.value=j.state.probe,Gt.sunLights.value=j.state.sun,Gt.sunLightShadows.value=j.state.sunShadow,Gt.directionalLights.value=j.state.directional,Gt.directionalLightShadows.value=j.state.directionalShadow,Gt.spotLights.value=j.state.spot,Gt.spotLightShadows.value=j.state.spotShadow,Gt.rectAreaLights.value=j.state.rectArea,Gt.ltc_1.value=j.state.rectAreaLTC1,Gt.ltc_2.value=j.state.rectAreaLTC2,Gt.pointLights.value=j.state.point,Gt.pointLightShadows.value=j.state.pointShadow,Gt.hemisphereLights.value=j.state.hemi,Gt.sunShadowMatrix.value=j.state.sunShadowMatrix,Gt.sunShadowCascade.value=j.state.sunShadowCascade,Gt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Gt.spotLightMatrix.value=j.state.spotLightMatrix,Gt.spotLightMap.value=j.state.spotLightMap,Gt.pointShadowMatrix.value=j.state.pointShadowMatrix),$.numLightProbeGrids=Wa(R.state.lightProbeGridArray),$.currentProgram=pe,$.uniformsList=null,pe}function mr(E,B,J,$,j){let Rt=Yt.get(E),zt=Rt.currentProgram.id+","+$+","+j,Tt=Rt.programVariants.get(zt);return Tt===void 0?(Tt=Qn(E,B,J),Rt.programVariants.set(zt,Tt)):(Rt.currentProgram=Tt,Rt.uniformsList=null,Rt.outputColorSpace=$,Rt.toneMapping=j),Tt}function $a(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=tr.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Xa(E,B){let J=Yt.get(E);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function Dc(E,B,J,$,j){B.isScene!==!0&&(B=ai),te.resetTextureUnits();let Rt=B.fog,zt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?B.environment:null,Tt=ht===null?k.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:_e.workingColorSpace,Ut=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Wt=I.get($.envMap||zt,Ut),ne=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pe=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Gt=!!J.morphAttributes.position,de=!!J.morphAttributes.normal,S=!!J.morphAttributes.color,v=cn;$.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(v=k.toneMapping);let C=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,P=C!==void 0?C.length:0,L=Yt.get($),K=R.state.lights;if(Fe===!0&&(ri===!0||E!==lt)){let ct=E===lt&&$.id===W;st.setState($,E,ct)}let H=!1,Z=!1;$.version===L.__version?L.needsLights&&L.lightsStateVersion!==K.state.version||j.isBatchedMesh&&L.batching===!1||!j.isBatchedMesh&&L.batching===!0||j.isBatchedMesh&&L.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&L.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&L.instancing===!1||!j.isInstancedMesh&&L.instancing===!0||j.isSkinnedMesh&&L.skinning===!1||!j.isSkinnedMesh&&L.skinning===!0||j.isInstancedMesh&&L.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&L.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&L.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&L.instancingMorph===!1&&j.morphTexture!==null||L.envMap!==Wt||$.fog===!0&&L.fog!==Rt||L.numClippingPlanes!==void 0&&(L.numClippingPlanes!==st.numPlanes||L.numIntersection!==st.numIntersection)||L.vertexAlphas!==ne||L.vertexTangents!==pe||L.morphTargets!==Gt||L.morphNormals!==de||L.morphColors!==S||L.morphTargetsCount!==P||L.numLightProbeGrids!==Wa(R.state.lightProbeGridArray)?H=!0:(L.outputColorSpace!==Tt||L.toneMapping!==v)&&(Z=!0):(H=!0,L.__version=$.version);let at=L.currentProgram;(H===!0||Z===!0)&&(at=Z===!0?mr($,B,j,Tt,v):Qn($,B,j),X&&$.isNodeMaterial&&X.onUpdateProgram($,at,L));let bt=!1,_t=!1,Ft=!1,ut=at.getUniforms(),pt=L.uniforms;if(It.useProgram(at.program)&&(bt=!0,_t=!0,Ft=!0),$.id!==W&&(W=$.id,_t=!0),bt||lt!==E){It.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ut.setValue(V,"projectionMatrix",E.projectionMatrix),ut.setValue(V,"viewMatrix",E.matrixWorldInverse);let xt=ut.map.cameraPosition;xt!==void 0&&xt.setValue(V,Ui.setFromMatrixPosition(E.matrixWorld)),Pe.logarithmicDepthBuffer&&ut.setValue(V,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ut.setValue(V,"isOrthographic",E.isOrthographicCamera===!0),lt!==E&&(lt=E,_t=!0,Ft=!0)}if(L.needsLights&&(K.state.sunShadowMap.length>0&&ut.setValue(V,"sunShadowMap",K.state.sunShadowMap,te),K.state.directionalShadowMap.length>0&&ut.setValue(V,"directionalShadowMap",K.state.directionalShadowMap,te),K.state.spotShadowMap.length>0&&ut.setValue(V,"spotShadowMap",K.state.spotShadowMap,te),K.state.pointShadowMap.length>0&&ut.setValue(V,"pointShadowMap",K.state.pointShadowMap,te)),j.isSkinnedMesh){ut.setOptional(V,j,"bindMatrix"),ut.setOptional(V,j,"bindMatrixInverse");let ct=j.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),ut.setValue(V,"boneTexture",ct.boneTexture,te))}j.isBatchedMesh&&(ut.setOptional(V,j,"batchingTexture"),ut.setValue(V,"batchingTexture",j._matricesTexture,te),ut.setOptional(V,j,"batchingIdTexture"),ut.setValue(V,"batchingIdTexture",j._indirectTexture,te),ut.setOptional(V,j,"batchingColorTexture"),j._colorsTexture!==null&&ut.setValue(V,"batchingColorTexture",j._colorsTexture,te));let yt=J.morphAttributes;if((yt.position!==void 0||yt.normal!==void 0||yt.color!==void 0)&&rt.update(j,J,at),(_t||L.receiveShadow!==j.receiveShadow)&&(L.receiveShadow=j.receiveShadow,ut.setValue(V,"receiveShadow",j.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&B.environment!==null&&(pt.envMapIntensity.value=B.environmentIntensity),pt.dfgLUT!==void 0&&(pt.dfgLUT.value=Av()),_t){if(ut.setValue(V,"toneMappingExposure",k.toneMappingExposure),L.needsLights&&kc(pt,Ft),Rt&&$.fog===!0&&Mt.refreshFogUniforms(pt,Rt),Mt.refreshMaterialUniforms(pt,$,Nt,Zt,R.state.transmissionRenderTarget[E.id]),L.needsLights&&L.numLightProbeGrids>0){let ct=b,xt=0;for(let vt of R.state.lightProbeGridArray)vt.texture!==null&&(ct.textures[xt]=vt.texture,ct.min[xt]=vt.boundingBox.min,ct.max[xt]=vt.boundingBox.max,ct.resolution[xt]=vt.resolution,xt++);for(let vt in ct)ct[vt].length=xt;pt.probesSH.value=ct.textures,pt.probesMin.value=ct.min,pt.probesMax.value=ct.max,pt.probesResolution.value=ct.resolution}tr.upload(V,$a(L),pt,te)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(tr.upload(V,$a(L),pt,te),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ut.setValue(V,"center",j.center),ut.setValue(V,"modelViewMatrix",j.modelViewMatrix),ut.setValue(V,"normalMatrix",j.normalMatrix),ut.setValue(V,"modelMatrix",j.matrixWorld),$.uniformsGroups!==void 0){let ct=$.uniformsGroups;for(let xt=0,vt=ct.length;xt<vt;xt++){let Vt=ct[xt];$t.update(Vt,at),$t.bind(Vt,at)}}return at}function kc(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.sunLights.needsUpdate=B,E.sunLightShadows.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Nc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(E,B,J){let $=Yt.get(E);$.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Yt.get(E.texture).__webglTexture=B,Yt.get(E.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:J,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){let J=Yt.get(E);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,J=0){ht=E,tt=B,Y=J;let $=null,j=!1,Rt=!1;if(E){let Tt=Yt.get(E);if(Tt.__useDefaultFramebuffer!==void 0){It.bindFramebuffer(V.FRAMEBUFFER,Tt.__webglFramebuffer),dt.copy(E.viewport),Ot.copy(E.scissor),Qt=E.scissorTest,It.viewport(dt),It.scissor(Ot),It.setScissorTest(Qt),W=-1;return}else if(Tt.__webglFramebuffer===void 0)te.setupRenderTarget(E);else if(Tt.__hasExternalTextures)te.rebindTextures(E,Yt.get(E.texture).__webglTexture,Yt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ne=E.depthTexture;if(Tt.__boundDepthTexture!==ne){if(ne!==null&&Yt.has(ne)&&(E.width!==ne.image.width||E.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(E)}}let Ut=E.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Rt=!0);let Wt=Yt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Wt[B])?$=Wt[B][J]:$=Wt[B],j=!0):E.samples>0&&te.useMultisampledRTT(E)===!1?$=Yt.get(E).__webglMultisampledFramebuffer:Array.isArray(Wt)?$=Wt[J]:$=Wt,dt.copy(E.viewport),Ot.copy(E.scissor),Qt=E.scissorTest}else dt.copy(Kt).multiplyScalar(Nt).floor(),Ot.copy(ye).multiplyScalar(Nt).floor(),Qt=Te;if(J!==0&&($=Q),It.bindFramebuffer(V.FRAMEBUFFER,$)&&It.drawBuffers(E,$),It.viewport(dt),It.scissor(Ot),It.setScissorTest(Qt),j){let Tt=Yt.get(E.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+B,Tt.__webglTexture,J)}else if(Rt){let Tt=B;for(let Ut=0;Ut<E.textures.length;Ut++){let Wt=Yt.get(E.textures[Ut]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ut,Wt.__webglTexture,J,Tt)}}else if(E!==null&&J!==0){let Tt=Yt.get(E.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Tt.__webglTexture,J)}W=-1};function ys(E){let B=Yt.get(E);return(B.__readFormat!==E.format||B.__readType!==E.type)&&(B.__readFormat=E.format,B.__readType=E.type,B.__formatReadable=Pe.textureFormatReadable(E.format),B.__typeReadable=Pe.textureTypeReadable(E.type)),B}this.readRenderTargetPixels=function(E,B,J,$,j,Rt,zt,Tt=0){if(!(E&&E.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&zt!==void 0&&(Ut=Ut[zt],Array.isArray(Ut)&&(Ut=Ut[0])),Ut){It.bindFramebuffer(V.FRAMEBUFFER,Ut);try{let Wt=E.textures[Tt],ne=Wt.format,pe=Wt.type;E.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Tt);let Gt=ys(Wt);if(Gt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-$&&J>=0&&J<=E.height-j&&V.readPixels(B,J,$,j,mt.convert(ne),mt.convert(pe),Rt)}finally{let Wt=ht!==null?Yt.get(ht).__webglFramebuffer:null;It.bindFramebuffer(V.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(E,B,J,$,j,Rt,zt,Tt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&zt!==void 0&&(Ut=Ut[zt],Array.isArray(Ut)&&(Ut=Ut[0])),Ut)if(B>=0&&B<=E.width-$&&J>=0&&J<=E.height-j){It.bindFramebuffer(V.FRAMEBUFFER,Ut);let Wt=E.textures[Tt],ne=Wt.format,pe=Wt.type;E.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Tt);let Gt=ys(Wt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,de),V.bufferData(V.PIXEL_PACK_BUFFER,Rt.byteLength,V.STREAM_READ),V.readPixels(B,J,$,j,mt.convert(ne),mt.convert(pe),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let S=ht!==null?Yt.get(ht).__webglFramebuffer:null;It.bindFramebuffer(V.FRAMEBUFFER,S);let v=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Rf(V,v,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,de),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Rt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(de),V.deleteSync(v),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,J=0){let $=Math.pow(2,-J),j=Math.floor(E.image.width*$),Rt=Math.floor(E.image.height*$),zt=B!==null?B.x:0,Tt=B!==null?B.y:0;te.setTexture2D(E,0),V.copyTexSubImage2D(V.TEXTURE_2D,J,0,0,zt,Tt,j,Rt),It.unbindTexture()},this.copyTextureToTexture=function(E,B,J=null,$=null,j=0,Rt=0){let zt,Tt,Ut,Wt,ne,pe,Gt,de,S,v=E.isCompressedTexture?E.mipmaps[Rt]:E.image;if(J!==null)zt=J.max.x-J.min.x,Tt=J.max.y-J.min.y,Ut=J.isBox3?J.max.z-J.min.z:1,Wt=J.min.x,ne=J.min.y,pe=J.isBox3?J.min.z:0;else{let ut=Math.pow(2,-j);zt=Math.floor(v.width*ut),Tt=Math.floor(v.height*ut),E.isDataArrayTexture?Ut=v.depth:E.isData3DTexture?Ut=Math.floor(v.depth*ut):Ut=1,Wt=0,ne=0,pe=0}$!==null?(Gt=$.x,de=$.y,S=$.z):(Gt=0,de=0,S=0);let C=mt.convert(B.format),P=mt.convert(B.type),L;B.isData3DTexture?(te.setTexture3D(B,0),L=V.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(te.setTexture2DArray(B,0),L=V.TEXTURE_2D_ARRAY):(te.setTexture2D(B,0),L=V.TEXTURE_2D),It.activeTexture(V.TEXTURE0),It.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,B.flipY),It.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),It.pixelStorei(V.UNPACK_ALIGNMENT,B.unpackAlignment);let K=It.getParameter(V.UNPACK_ROW_LENGTH),H=It.getParameter(V.UNPACK_IMAGE_HEIGHT),Z=It.getParameter(V.UNPACK_SKIP_PIXELS),at=It.getParameter(V.UNPACK_SKIP_ROWS),bt=It.getParameter(V.UNPACK_SKIP_IMAGES);It.pixelStorei(V.UNPACK_ROW_LENGTH,v.width),It.pixelStorei(V.UNPACK_IMAGE_HEIGHT,v.height),It.pixelStorei(V.UNPACK_SKIP_PIXELS,Wt),It.pixelStorei(V.UNPACK_SKIP_ROWS,ne),It.pixelStorei(V.UNPACK_SKIP_IMAGES,pe);let _t=E.isDataArrayTexture||E.isData3DTexture,Ft=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){let ut=Yt.get(E),pt=Yt.get(B),yt=Yt.get(ut.__renderTarget),ct=Yt.get(pt.__renderTarget);It.bindFramebuffer(V.READ_FRAMEBUFFER,yt.__webglFramebuffer),It.bindFramebuffer(V.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let xt=0;xt<Ut;xt++)_t&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Yt.get(E).__webglTexture,j,pe+xt),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Yt.get(B).__webglTexture,Rt,S+xt)),V.blitFramebuffer(Wt,ne,Wt+zt,ne+Tt,Gt,de,Gt+zt,de+Tt,V.DEPTH_BUFFER_BIT,V.NEAREST);It.bindFramebuffer(V.READ_FRAMEBUFFER,null),It.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(j!==0||E.isRenderTargetTexture||Yt.has(E)){let ut=Yt.get(E),pt=Yt.get(B);It.bindFramebuffer(V.READ_FRAMEBUFFER,U),It.bindFramebuffer(V.DRAW_FRAMEBUFFER,G);for(let yt=0;yt<Ut;yt++)_t?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ut.__webglTexture,j,pe+yt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ut.__webglTexture,j),Ft?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pt.__webglTexture,Rt,S+yt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pt.__webglTexture,Rt),j!==0?V.blitFramebuffer(Wt,ne,Wt+zt,ne+Tt,Gt,de,Gt+zt,de+Tt,V.COLOR_BUFFER_BIT,V.NEAREST):Ft?V.copyTexSubImage3D(L,Rt,Gt,de,S+yt,Wt,ne,zt,Tt):V.copyTexSubImage2D(L,Rt,Gt,de,Wt,ne,zt,Tt);It.bindFramebuffer(V.READ_FRAMEBUFFER,null),It.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ft?E.isDataTexture||E.isData3DTexture?V.texSubImage3D(L,Rt,Gt,de,S,zt,Tt,Ut,C,P,v.data):B.isCompressedArrayTexture?V.compressedTexSubImage3D(L,Rt,Gt,de,S,zt,Tt,Ut,C,v.data):V.texSubImage3D(L,Rt,Gt,de,S,zt,Tt,Ut,C,P,v):E.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Rt,Gt,de,zt,Tt,C,P,v.data):E.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Rt,Gt,de,v.width,v.height,C,v.data):V.texSubImage2D(V.TEXTURE_2D,Rt,Gt,de,zt,Tt,C,P,v);It.pixelStorei(V.UNPACK_ROW_LENGTH,K),It.pixelStorei(V.UNPACK_IMAGE_HEIGHT,H),It.pixelStorei(V.UNPACK_SKIP_PIXELS,Z),It.pixelStorei(V.UNPACK_SKIP_ROWS,at),It.pixelStorei(V.UNPACK_SKIP_IMAGES,bt),Rt===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&V.generateMipmap(L),It.unbindTexture()},this.initRenderTarget=function(E){Yt.get(E).__webglFramebuffer===void 0&&te.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?te.setTextureCube(E,0):E.isData3DTexture?te.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?te.setTexture2DArray(E,0):te.setTexture2D(E,0),It.unbindTexture()},this.resetState=function(){tt=0,Y=0,ht=null,It.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};var gp={type:"change"},gd={type:"start"},yp={type:"end"},tc=new Fn,_p=new Ii,Rv=Math.cos(70*ga.DEG2RAD),Ye=new F,Ti=2*Math.PI,Me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},md=1e-6,ec=class extends oa{constructor(t,e=null){super(t,e),this.state=Me.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Li,this._lastTargetPosition=new F,this._quat=new Li().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ys,this._sphericalDelta=new Ys,this._scale=1,this._panOffset=new F,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new F,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Iv.bind(this),this._onPointerDown=Pv.bind(this),this._onPointerUp=Lv.bind(this),this._onContextMenu=Bv.bind(this),this._onMouseWheel=Nv.bind(this),this._onKeyDown=Uv.bind(this),this._onTouchStart=Ov.bind(this),this._onTouchMove=Fv.bind(this),this._onMouseDown=Dv.bind(this),this._onMouseMove=kv.bind(this),this._interceptControlDown=zv.bind(this),this._interceptControlUp=Vv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Me.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gp),this.update(),this.state=Me.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ye.copy(e).sub(this.target),Ye.applyQuaternion(this._quat),this._spherical.setFromVector3(Ye),this.autoRotate&&this.state===Me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ti:i>Math.PI&&(i-=Ti),s<-Math.PI?s+=Ti:s>Math.PI&&(s-=Ti),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ye.setFromSpherical(this._spherical),Ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ye.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(tc.origin.copy(this.object.position),tc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tc.direction))<Rv?this.object.lookAt(this.target):(_p.setFromNormalAndCoplanarPoint(this.object.up,this.target),tc.intersectPlane(_p,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>md||8*(1-this._lastQuaternion.dot(this.object.quaternion))>md||this._lastTargetPosition.distanceToSquared(this.target)>md?(this.dispatchEvent(gp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ti/60*this.autoRotateSpeed*t:Ti/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ye.setFromMatrixColumn(e,0),Ye.multiplyScalar(-t),this._panOffset.add(Ye)}_panUp(t,e){this.screenSpacePanning===!0?Ye.setFromMatrixColumn(e,1):(Ye.setFromMatrixColumn(e,0),Ye.crossVectors(this.object.up,Ye)),Ye.multiplyScalar(t),this._panOffset.add(Ye)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ye.copy(s).sub(this.target);let r=Ye.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ti*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ti*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ti*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ti*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Pv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Iv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Lv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yp),this.state=Me.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Dv(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Me.DOLLY;break;case zi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Me.ROTATE}break;case zi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Me.PAN}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent(gd)}function kv(n){switch(this.state){case Me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Nv(n){this.enabled===!1||this.enableZoom===!1||this.state!==Me.NONE||(n.preventDefault(),this.dispatchEvent(gd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(yp))}function Uv(n){this.enabled!==!1&&this._handleKeyDown(n)}function Ov(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Zi.ROTATE:if(this.enableRotate===!1){this.state=Me.NONE;break}this._handleTouchStartRotate(n),this.state=Me.TOUCH_ROTATE;break;case Zi.PAN:if(this.enablePan===!1){this.state=Me.NONE;break}this._handleTouchStartPan(n),this.state=Me.TOUCH_PAN;break;default:this.state=Me.NONE}break;case 2:switch(this.touches.TWO){case Zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Me.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Me.TOUCH_DOLLY_ROTATE;break;default:this.state=Me.NONE}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent(gd)}function Fv(n){switch(this._trackPointer(n),this.state){case Me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Me.NONE}}function Bv(n){this.enabled!==!1&&n.preventDefault()}function zv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Vv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var xp=new gi,ic=new F,jn=class extends sa{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Ie(t,3)),this.setAttribute("uv",new Ie(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new $n(e,6,1);return this.setAttribute("instanceStart",new Yi(i,3,0)),this.setAttribute("instanceEnd",new Yi(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new $n(e,6,1);return this.setAttribute("instanceColorStart",new Yi(i,3,0)),this.setAttribute("instanceColorEnd",new Yi(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Jr(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),xp.setFromBufferAttribute(e),this.boundingBox.union(xp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)ic.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ic)),ic.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ic));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Dt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Lt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};vi.line={uniforms:_a.merge([Dt.common,Dt.fog,Dt.line]),vertexShader:`
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
		`};var ir=class extends Bi{constructor(t){super({type:"LineMaterial",uniforms:_a.clone(vi.line.uniforms),vertexShader:vi.line.vertexShader,fragmentShader:vi.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var _d=new we,vp=new F,bp=new F,ei=new we,ii=new we,dn=new we,yd=new F,xd=new Ce,ni=new aa,Mp=new F,nc=new gi,sc=new _i,un=new we,fn,fs;function Sp(n,t,e){return un.set(0,0,-t,1).applyMatrix4(n.projectionMatrix),un.multiplyScalar(1/un.w),un.x=fs/e.width,un.y=fs/e.height,un.applyMatrix4(n.projectionMatrixInverse),un.multiplyScalar(1/un.w),Math.abs(Math.max(un.x,un.y))}function Hv(n,t){let e=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,a=Math.min(i.instanceCount,s.count);for(let o=0,l=a;o<l;o++){ni.start.fromBufferAttribute(s,o),ni.end.fromBufferAttribute(r,o),ni.applyMatrix4(e);let c=new F,h=new F;fn.distanceSqToSegment(ni.start,ni.end,h,c),h.distanceTo(c)<fs*.5&&t.push({point:h,pointOnLine:c,distance:fn.origin.distanceTo(h),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function Gv(n,t,e){let i=t.projectionMatrix,r=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-t.near;fn.at(1,dn),dn.w=1,dn.applyMatrix4(t.matrixWorldInverse),dn.applyMatrix4(i),dn.multiplyScalar(1/dn.w),dn.x*=r.x/2,dn.y*=r.y/2,dn.z=0,yd.copy(dn),xd.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,f=h;d<f;d++){if(ei.fromBufferAttribute(l,d),ii.fromBufferAttribute(c,d),ei.w=1,ii.w=1,ei.applyMatrix4(xd),ii.applyMatrix4(xd),ei.z>u&&ii.z>u)continue;if(ei.z>u){let M=ei.z-ii.z,b=(ei.z-u)/M;ei.lerp(ii,b)}else if(ii.z>u){let M=ii.z-ei.z,b=(ii.z-u)/M;ii.lerp(ei,b)}ei.applyMatrix4(i),ii.applyMatrix4(i),ei.multiplyScalar(1/ei.w),ii.multiplyScalar(1/ii.w),ei.x*=r.x/2,ei.y*=r.y/2,ii.x*=r.x/2,ii.y*=r.y/2,ni.start.copy(ei),ni.start.z=0,ni.end.copy(ii),ni.end.z=0;let x=ni.closestPointToPointParameter(yd,!0);ni.at(x,Mp);let p=ga.lerp(ei.z,ii.z,x),m=p>=-1&&p<=1,_=yd.distanceTo(Mp)<fs*.5;if(m&&_){ni.start.fromBufferAttribute(l,d),ni.end.fromBufferAttribute(c,d),ni.start.applyMatrix4(a),ni.end.applyMatrix4(a);let M=new F,b=new F;fn.distanceSqToSegment(ni.start,ni.end,b,M),e.push({point:b,pointOnLine:M,distance:fn.origin.distanceTo(b),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}var nr=class extends Xe{constructor(t=new jn,e=new ir({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)vp.fromBufferAttribute(e,a),bp.fromBufferAttribute(i,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+vp.distanceTo(bp);let r=new $n(s,2,1);return t.setAttribute("instanceDistanceStart",new Yi(r,1,0)),t.setAttribute("instanceDistanceEnd",new Yi(r,1,1)),this}raycast(t,e){let i=this.material.worldUnits,s=t.camera;if(s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;fn=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;fs=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),sc.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=fs*.5;else{let u=Math.max(s.near,sc.distanceToPoint(fn.origin));c=Sp(s,u,l.resolution)}if(sc.radius+=c,fn.intersectsSphere(sc)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),nc.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=fs*.5;else{let u=Math.max(s.near,nc.distanceToPoint(fn.origin));h=Sp(s,u,l.resolution)}nc.expandByScalar(h),fn.intersectsBox(nc)!==!1&&(i?Hv(this,e):Gv(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(_d),this.material.uniforms.resolution.value.set(_d.z,_d.w))}};var Md=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],vd=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],Ma=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],wp=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],Wv=n=>Math.hypot(n[0],n[1],n[2]),bd=n=>{let t=Wv(n)||1;return[n[0]/t,n[1]/t,n[2]/t]},rc={XY:{o:[0,0,0],x:[1,0,0],y:[0,1,0],n:[0,0,1]},XZ:{o:[0,0,0],x:[1,0,0],y:[0,0,1],n:[0,-1,0]},YZ:{o:[0,0,0],x:[0,1,0],y:[0,0,1],n:[1,0,0]}};function Sd(n,t){n=bd(n);let e,i;return Math.abs(n[2])>.9?(e=bd(Md([1,0,0],vd(n,n[0]))),i=wp(n,e)):(i=bd(Md([0,0,1],vd(n,n[2]))),e=wp(i,n)),{o:vd(n,Ma(t,n)),x:e,y:i,n}}var Ep=(n,t)=>{let e=Md(t,n.o);return[Ma(e,n.x),Ma(e,n.y)]};var Tp=["#b9c3cf","#d9b38c","#9fc7a8","#c9a3c9","#e0c56e","#8fb6d9","#d99a9a","#a8b38f"],wd=n=>Tp[n%Tp.length],ac=2063072,Ap=16747039,oc=class{constructor(t){this.host=t,this.renderer=new Jl({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setClearColor(15330802),t.appendChild(this.renderer.domElement),this.canvas=this.renderer.domElement,this.canvas.style.touchAction="none",this.scene=new kr,this.persp=new fi(35,1,.1,1e5),this.persp.up.set(0,0,1),this.persp.position.set(160,-220,150),this.ortho=new os(-1,1,1,-1,-1e5,1e5),this.camera=this.persp,this.controls=new ec(this.persp,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.15,this.controls.zoomToCursor=!0,this.controls.screenSpacePanning=!0,this.controls.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.controls.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.PAN,RIGHT:zi.PAN};let e=new ea(16777215,8425632,1.6);this.scene.add(e),this.sun=new na(16777215,1.5),this.scene.add(this.sun),this.scene.add(this.sun.target),this.lineMats=[],this.world=new pi,this.scene.add(this.world),this.buildGrid(),this.bodiesGroup=new pi,this.overlay=new pi,this.planesGroup=new pi,this.world.add(this.bodiesGroup,this.overlay,this.planesGroup),this.buildPlanes(),this.bodies=new Map,this.meshCache=new Map,this.selection={faces:[],edges:[],bodies:[]},this.preselect=null,this.sketchMode=null,this.dirty=!0,this.tapHandlers=[],this.hoverHandler=null,this.controls.addEventListener("change",()=>{this.dirty=!0}),this.setupTap(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize();let i=()=>{(this.camera===this.persp&&this.controls.update()||this.dirty)&&this.render(),requestAnimationFrame(i)};requestAnimationFrame(i)}lineMat(t,e,i={}){let s=new ir({color:t,linewidth:e,worldUnits:!1,...i});return s.resolution.set(this.w||1,this.h||1),this.lineMats.push(s),s}buildGrid(){let t=new pi,e=(s,r,a,o)=>{let l=[];for(let h=-r;h<=r+1e-9;h+=s)l.push(h,-r,0,h,r,0),l.push(-r,h,0,r,h,0);let c=new $e;return c.setAttribute("position",new Ie(l,3)),new Gs(c,new Vn({color:a,transparent:!0,opacity:o,depthWrite:!1}))};t.add(e(10,300,8030102,.22)),t.add(e(50,300,5661551,.35));let i=new $e;i.setAttribute("position",new Ie([0,0,0,60,0,0,0,0,0,0,60,0,0,0,0,0,0,60],3)),i.setAttribute("color",new Ie([.85,.2,.2,.85,.2,.2,.2,.65,.25,.2,.65,.25,.2,.35,.9,.2,.35,.9],3)),t.add(new Gs(i,new Vn({vertexColors:!0,depthTest:!1,transparent:!0}))),t.renderOrder=-1,this.grid=t,this.world.add(t)}buildPlanes(){this.planeMeshes={};let t={XY:3832789,XZ:3847019,YZ:13980474};for(let[e,i]of Object.entries(rc)){let r=new $e,a=(c,h)=>[i.x[0]*c+i.y[0]*h,i.x[1]*c+i.y[1]*h,i.x[2]*c+i.y[2]*h];r.setAttribute("position",new Ie([...a(0,0),...a(40,0),...a(40,40),...a(0,40)],3)),r.setIndex([0,1,2,0,2,3]);let o=new Xe(r,new Bn({color:t[e],transparent:!0,opacity:.16,side:xi,depthWrite:!1}));o.userData={plane:e};let l=new Fr(new $e().setAttribute("position",new Ie([...a(0,0),...a(40,0),...a(40,40),...a(0,40)],3)),new Vn({color:t[e]}));o.add(l),this.planesGroup.add(o),this.planeMeshes[e]=o}this.planesGroup.visible=!1}setPlanesVisible(t,e=null){this.planesGroup.visible=t;for(let[i,s]of Object.entries(this.planeMeshes))s.material.opacity=e===i?.42:.16;this.dirty=!0}resize(){let t=this.host.getBoundingClientRect();this.w=Math.max(1,t.width),this.h=Math.max(1,t.height),this.renderer.setSize(this.w,this.h,!1),this.canvas.style.width=this.w+"px",this.canvas.style.height=this.h+"px",this.persp.aspect=this.w/this.h,this.persp.updateProjectionMatrix();for(let e of this.lineMats)e.resolution.set(this.w,this.h);this.sketchMode&&this.applySketchView(),this.dirty=!0,this.onResize&&this.onResize()}render(){this.dirty=!1;let t=this.camera;this.sun.position.copy(t.position).add(new F(0,0,1).multiplyScalar(this.sceneRadius()*.5)),this.sun.target.position.copy(this.controls.target),this.renderer.render(this.scene,t)}sceneRadius(){let t=this.bodiesBox();return t.isEmpty()?100:t.getBoundingSphere(new _i).radius||100}bodiesBox(){let t=new gi;for(let e of this.bodies.values())e.visible&&e.mesh&&t.expandByObject(e.mesh);return t}ingest(t){for(let e of t)e.mesh&&!this.meshCache.has(e.key)&&this.meshCache.set(e.key,this.buildGeom(e.mesh))}setPickBodies(t){if(!t){this.pickSet=null,this.refreshSelection();return}this.pickSet=new Map;for(let e of t){let i=this.meshCache.get(e.key);if(!i)continue;let s=new Xe(i.geom);s.userData={body:e.id},this.pickSet.set(e.id,{id:e.id,key:e.key,data:i.data,mesh:s,visible:e.visible!==!1})}this.refreshSelection()}get pickBodies(){return this.pickSet||this.bodies}gc(){let t=new Set([...this.bodies.values()].map(e=>e.key));if(this.pickSet)for(let e of this.pickSet.values())t.add(e.key);for(let[e,i]of this.meshCache)t.has(e)||(i.geom.dispose(),i.lineGeom.dispose(),this.meshCache.delete(e))}setBodies(t){let e=new Set;t.forEach(i=>{e.add(i.id);let s=this.bodies.get(i.id);s||(s={id:i.id},this.bodies.set(i.id,s));let r=this.meshCache.get(i.key);s.key!==i.key&&r&&(s.mesh&&this.bodiesGroup.remove(s.mesh,s.edges),s.key=i.key,s.data=r.data,s.mesh=new Xe(r.geom,new Kr({color:i.color,roughness:.55,metalness:.05,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,side:xi})),s.mesh.userData={body:i.id},s.edges=new nr(r.lineGeom,this.edgeMat||(this.edgeMat=this.lineMat(1910579,1.3))),this.bodiesGroup.add(s.mesh,s.edges)),s.mesh&&(s.mesh.material.color.set(i.color),s.mesh.material.transparent=!!i.ghost,s.mesh.material.opacity=i.ghost?.35:1,s.mesh.material.depthWrite=!i.ghost,s.visible=i.visible!==!1,s.mesh.visible=s.visible,s.edges.visible=s.visible),s.name=i.name});for(let[i,s]of this.bodies)e.has(i)||(s.mesh&&this.bodiesGroup.remove(s.mesh,s.edges),this.bodies.delete(i));this.refreshSelection(),this.dirty=!0}buildGeom(t){let e=new $e;e.setAttribute("position",new hi(t.vertices,3)),e.setAttribute("normal",new hi(t.normals,3)),e.setIndex(new hi(t.triangles,1)),e.computeBoundingSphere(),e.computeBoundingBox();let i=new jn;return i.setPositions(t.lines.length?t.lines:new Float32Array(6)),{geom:e,lineGeom:i,data:t}}setSelection(t){this.selection={faces:t.faces||[],edges:t.edges||[],bodies:t.bodies||[]},this.refreshSelection()}setPreselect(t){this.preselect=t,this.refreshSelection()}refreshSelection(){this.selGroup&&(this.overlay.remove(this.selGroup),this.selGroup.traverse(a=>{a.geometry&&a.userData.own&&a.geometry.dispose()}));let t=new pi,e=(a,o)=>new Bn({color:a,transparent:!0,opacity:o,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,side:xi}),i=(a,o,l)=>{let c=this.pickBodies.get(a.body);if(!c||!c.data)return;let h=c.data.faceGroups.find(g=>g.i===a.i);if(!h)return;let u=c.data.triangles.slice(h.start,h.start+h.count),d=new $e;d.setAttribute("position",c.mesh.geometry.getAttribute("position")),d.setIndex(new hi(u,1));let f=new Xe(d,e(o,l));f.userData.own=!0,t.add(f)},s=(a,o,l)=>{let c=this.pickBodies.get(a.body);if(!c||!c.data)return;let h=c.data.edgeGroups.find(g=>g.i===a.i);if(!h)return;let u=c.data.lines.slice(h.start*3,(h.start+h.count)*3),d=new jn;d.setPositions(u);let f=new nr(d,this.lineMat(o,l,{depthTest:!1,transparent:!0}));f.renderOrder=5,f.userData.own=!0,t.add(f)};for(let a of this.selection.faces)i(a,ac,.45);for(let a of this.selection.edges)s(a,ac,4);for(let a of this.selection.bodies){let o=this.pickBodies.get(a);if(o&&o.mesh){let l=new Xe(o.mesh.geometry,e(ac,.25));t.add(l)}}let r=this.preselect;r&&(r.kind==="face"&&i(r,Ap,.35),r.kind==="edge"&&s(r,Ap,4)),this.selGroup=t,this.overlay.add(t),this.dirty=!0}setSketchOverlays(t){this.sketchGroup&&(this.overlay.remove(this.sketchGroup),this.sketchGroup.traverse(i=>i.geometry&&i.geometry.dispose()));let e=new pi;this.regionMeshes=[],this.sketchLines=[];for(let i of t){let s=i.frame,r=(l,c)=>[s.o[0]+s.x[0]*l+s.y[0]*c,s.o[1]+s.x[1]*l+s.y[1]*c,s.o[2]+s.x[2]*l+s.y[2]*c],a=[],o=[];for(let l of i.polylines){let c=l.construction?o:a;for(let h=0;h+1<l.pts.length;h++)c.push(...r(...l.pts[h]),...r(...l.pts[h+1]));i.pickLines&&!l.construction&&l.kind==="line"&&this.sketchLines.push({sketch:i.id,id:l.id,a:r(...l.pts[0]),b:r(...l.pts[l.pts.length-1])}),i.pickLines&&l.construction&&l.kind==="line"&&this.sketchLines.push({sketch:i.id,id:l.id,a:r(...l.pts[0]),b:r(...l.pts[l.pts.length-1])})}for(let[l,c,h]of[[a,2060241,2],[o,13666858,1.2]]){if(!l.length)continue;let u=new jn;u.setPositions(l);let d=new nr(u,this.lineMat(c,h,{depthTest:!1,transparent:!0,opacity:.95}));d.renderOrder=3,e.add(d)}i.regions&&i.regions.forEach((l,c)=>{let h=new Xs(l.poly.map(([x,p])=>new Lt(x,p)));for(let x of l.holePolys)h.holes.push(new rs(x.map(([p,m])=>new Lt(p,m))));let u=new Zr(h),d=u.getAttribute("position");for(let x=0;x<d.count;x++){let p=r(d.getX(x),d.getY(x));d.setXYZ(x,p[0],p[1],p[2])}u.computeBoundingSphere();let f=i.selected&&i.selected.includes(c),g=new Xe(u,new Bn({color:f?ac:8368362,transparent:!0,opacity:f?.55:.22,side:xi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));g.renderOrder=2,g.userData={sketch:i.id,region:c},e.add(g),this.regionMeshes.push(g)})}this.sketchGroup=e,this.overlay.add(e),this.dirty=!0}setupTap(){let t=new Map,e=!1;this.canvas.addEventListener("pointerdown",s=>{t.set(s.pointerId,{x:s.clientX,y:s.clientY,t:performance.now()}),t.size>1&&(e=!0)});let i=s=>{let r=t.get(s.pointerId);if(t.delete(s.pointerId),!r)return;let a=e;if(t.size||(e=!1),a||s.type==="pointercancel")return;if(Math.hypot(s.clientX-r.x,s.clientY-r.y)<9&&performance.now()-r.t<600){let l=this.canvas.getBoundingClientRect();for(let c of this.tapHandlers)c(s.clientX-l.left,s.clientY-l.top,s.pointerType)}};this.canvas.addEventListener("pointerup",i),this.canvas.addEventListener("pointercancel",i),this.canvas.addEventListener("pointermove",s=>{if(s.pointerType!=="mouse"||t.size||!this.hoverHandler)return;let r=this.canvas.getBoundingClientRect();this.hoverHandler(s.clientX-r.left,s.clientY-r.top)}),this.canvas.addEventListener("pointerleave",()=>{this.hoverHandler&&this.hoverHandler(null)})}onTap(t){this.tapHandlers.push(t)}ndc(t,e){return new Lt(t/this.w*2-1,-(e/this.h)*2+1)}project(t){let e=new F(t[0],t[1],t[2]).project(this.camera);return[(e.x+1)/2*this.w,(1-e.y)/2*this.h,e.z]}pick(t,e,i,s=14){let r=new ra;r.setFromCamera(this.ndc(t,e),this.camera);let a=[...this.pickBodies.values()].filter(f=>f.visible&&f.mesh).map(f=>f.mesh),l=r.intersectObjects(a,!1)[0],c=this.camera===this.persp?this.camera.position:null,h=f=>c?c.distanceTo(f):-new F().copy(f).applyMatrix4(this.camera.matrixWorldInverse).z,u=l?h(l.point):1/0,d=this.sceneRadius()*.015+.1;if(i.sketchLine&&this.sketchLines&&this.sketchLines.length){let f=null,g=s;for(let x of this.sketchLines){let p=this.project(x.a),m=this.project(x.b),_=Cp([t,e],p,m);_<g&&(g=_,f=x)}if(f)return{kind:"sketchLine",sketch:f.sketch,id:f.id}}if(i.region&&this.regionMeshes&&this.regionMeshes.length){let f=r.intersectObjects(this.regionMeshes,!1);if(f.length)return{kind:"region",sketch:f[0].object.userData.sketch,region:f[0].object.userData.region,point:f[0].point.toArray()}}if(i.edge){let f=null,g=s;for(let x of this.pickBodies.values()){if(!x.visible||!x.data)continue;let p=x.data.lines;for(let m of x.data.edgeGroups)for(let _=m.start;_<m.start+m.count;_+=2){let M=[p[_*3],p[_*3+1],p[_*3+2]],b=[p[_*3+3],p[_*3+4],p[_*3+5]],T=this.project(M),R=this.project(b),y=Cp([t,e],T,R);if(y<g){let A=new F;if(r.ray.distanceSqToSegment(new F(...M),new F(...b),null,A),h(A)>u+d)continue;g=y,f={kind:"edge",body:x.id,i:m.i}}}}if(f)return f}if(l&&(i.face||i.body)){let f=l.object.userData.body;if(i.face){let g=this.pickBodies.get(f),x=l.faceIndex*3,p=g.data.faceGroups.find(m=>x>=m.start&&x<m.start+m.count);if(p){let m=l.face?l.face.normal.clone().transformDirection(l.object.matrixWorld).toArray():null;return{kind:"face",body:f,i:p.i,point:l.point.toArray(),normal:m}}}if(i.body)return{kind:"body",body:f}}if(i.plane&&this.planesGroup.visible){let f=r.intersectObjects(Object.values(this.planeMeshes),!1);if(f.length)return{kind:"plane",plane:f[0].object.userData.plane}}return null}fit(t=!0){let e=this.bodiesBox(),i=new F(0,0,0),s=80;if(!e.isEmpty()){let o=e.getBoundingSphere(new _i);i=o.center,s=Math.max(o.radius,5)}let r=this.persp.position.clone().sub(this.controls.target).normalize(),a=s/Math.sin(this.persp.fov*Math.PI/360)*1.15;this.animateTo(i.clone().add(r.multiplyScalar(a)),i,t)}view(t){let e={top:[0,0,1],bottom:[0,0,-1],front:[0,-1,0],back:[0,1,0],right:[1,0,0],left:[-1,0,0],iso:[1,-1.25,.9]},i=new F(...e[t]).normalize(),s=this.bodiesBox(),r=new F,a=80;if(!s.isEmpty()){let l=s.getBoundingSphere(new _i);r=l.center,a=Math.max(l.radius,5)}let o=a/Math.sin(this.persp.fov*Math.PI/360)*1.15;t==="top"||t==="bottom"?this.persp.up.set(0,1,0):this.persp.up.set(0,0,1),this.animateTo(r.clone().add(i.multiplyScalar(o)),r,!0,()=>{this.persp.up.set(0,0,1),this.controls.update()})}animateTo(t,e,i=!0,s){let r=this.persp.position.clone(),a=this.controls.target.clone();if(!i){this.persp.position.copy(t),this.controls.target.copy(e),this.controls.update(),this.dirty=!0,s&&s();return}let o=performance.now(),l=380,c=()=>{let h=Math.min(1,(performance.now()-o)/l),u=h<.5?2*h*h:1-(-2*h+2)**2/2;this.persp.position.lerpVectors(r,t,u),this.controls.target.lerpVectors(a,e,u),this.persp.lookAt(this.controls.target),this.dirty=!0,h<1?requestAnimationFrame(c):(this.controls.update(),s&&s())};c()}enterSketch(t,e){this.sketchMode={frame:t,view:e},this.camera=this.ortho,this.controls.enabled=!1,this.grid.visible=!1,this.applySketchView()}setSketchView(t){this.sketchMode&&(this.sketchMode.view=t,this.applySketchView())}applySketchView(){let{frame:t,view:e}=this.sketchMode,i=this.w/2/e.s,s=this.h/2/e.s,r=[t.o[0]+t.x[0]*e.cx+t.y[0]*e.cy,t.o[1]+t.x[1]*e.cx+t.y[1]*e.cy,t.o[2]+t.x[2]*e.cx+t.y[2]*e.cy],a=5e3;this.ortho.position.set(r[0]+t.n[0]*a,r[1]+t.n[1]*a,r[2]+t.n[2]*a),this.ortho.up.set(t.y[0],t.y[1],t.y[2]),this.ortho.lookAt(r[0],r[1],r[2]),this.ortho.left=-i,this.ortho.right=i,this.ortho.top=s,this.ortho.bottom=-s,this.ortho.near=.1,this.ortho.far=a*2,this.ortho.updateProjectionMatrix(),this.ortho.updateMatrixWorld(),this.dirty=!0}exitSketch(){this.sketchMode=null,this.camera=this.persp,this.controls.enabled=!0,this.grid.visible=this.gridOn!==!1,this.dirty=!0}setGrid(t){this.gridOn=t,this.sketchMode||(this.grid.visible=t),this.dirty=!0}};function $v(n,t,e){let i=e[0]-t[0],s=e[1]-t[1],r=i*i+s*s;return r?Math.max(0,Math.min(1,((n[0]-t[0])*i+(n[1]-t[1])*s)/r)):0}function Cp(n,t,e){if(t[2]>1||e[2]>1)return 1/0;let i=$v(n,t,e);return Math.hypot(n[0]-t[0]-i*(e[0]-t[0]),n[1]-t[1]-i*(e[1]-t[1]))}var Ed={NoInternalAlignment:0,InternalAlignment:1},lc={Success:0,Converged:1,Failed:2,SuccessfulSolutionInvalid:3},Td={BFGS:0,LevenbergMarquardt:1,DogLeg:2};var Xv=["point","line","circle","arc","ellipse","arc_of_ellipse","hyperbola","arc_of_hyperbola","parabola","arc_of_parabola","bspline"];function sr(n){return n===void 0||n.type==="param"?!1:Xv.includes(n.type)}function Ad(n){return n===void 0?!1:!sr(n)}var Cd=class{get_primitive_or_fail(t){let e=this.get_primitive(t);if(e===void 0)throw new Error(`sketch object ${t} not found`);return e}get_sketch_point(t){let e=this.get_primitive_or_fail(t);if(e.type!=="point")throw new Error(`sketch object ${t} is not a sketch point`);return e}get_sketch_line(t){let e=this.get_primitive_or_fail(t);if(e.type!=="line")throw new Error(`sketch object ${t} is not a sketch line`);return e}get_sketch_circle(t){let e=this.get_primitive_or_fail(t);if(e.type!=="circle")throw new Error(`sketch object ${t} is not a sketch circle`);return e}get_sketch_arc(t){let e=this.get_primitive_or_fail(t);if(e.type!=="arc")throw new Error(`sketch object ${t} is not a sketch arc`);return e}get_constraints(){return this.get_primitives().filter(t=>!sr(t))}toString(){return this.get_primitives().map(t=>JSON.stringify(t)).join(`
`)}},Sa=class extends Cd{constructor(){super(...arguments),this.index=new Map,this.primitive_ids=[]}has(t){return this.index.has(t)}delete_primitive(t){return this.index.delete(t)}set_primitive(t){this.has(t.id)||this.primitive_ids.push(t.id),this.index.set(t.id,t)}get_primitive(t){return this.index.get(t)}get_primitives(){return Array.from(this.index.values())}get_id_by_index(t){return this.primitive_ids[t-1]}clear(){this.index.clear(),this.primitive_ids=[]}counter(){return this.primitive_ids.length}};async function qv(n={}){var t=n,e=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,s=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(s){let{createRequire:S}=await import("node:module");var r=S(import.meta.url)}var a="./this.program",o=import.meta.url,l="",c,h;if(s){var u=r("node:fs");o.startsWith("file:")&&(l=r("node:path").dirname(r("node:url").fileURLToPath(o))+"/"),h=S=>(S=g(S)?new URL(S):S,u.readFileSync(S)),c=async S=>(S=g(S)?new URL(S):S,u.readFileSync(S,void 0)),process.argv.length>1&&(a=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2)}else if(e||i){try{l=new URL(".",o).href}catch{}i&&(h=S=>{var v=new XMLHttpRequest;return v.open("GET",S,!1),v.responseType="arraybuffer",v.send(null),new Uint8Array(v.response)}),c=async S=>{if(g(S))return new Promise((C,P)=>{var L=new XMLHttpRequest;L.open("GET",S,!0),L.responseType="arraybuffer",L.onload=()=>{L.status==200||L.status==0&&L.response?C(L.response):P(L.status)},L.onerror=P,L.send(null)});var v=await fetch(S,{credentials:"same-origin"});if(v.ok)return v.arrayBuffer();throw Error(v.status+" : "+v.url)}}console.log.bind(console);var d=console.error.bind(console),f=!1,g=S=>S.startsWith("file://");function x(){var S=t.preRun;for(S&&(typeof S=="function"&&(S=[S]),y.push(...S)),S=y;S.length>0;)S.shift()(t)}function p(){var S=t.postRun;for(S&&(typeof S=="function"&&(S=[S]),R.push(...S)),S=R;S.length>0;)S.shift()(t)}function m(S){throw t.onAbort?.(S),S=`Aborted(${S})`,d(S),f=!0,new WebAssembly.RuntimeError(S+". Build with -sASSERTIONS for more info.")}var _;async function M(S){try{var v=await c(S);return new Uint8Array(v)}catch{}if(h)S=h(S);else throw"both async and sync fetching of the wasm failed";return S}async function b(S,v){try{var C=await M(S);return await WebAssembly.instantiate(C,v)}catch(P){d(`failed to asynchronously prepare wasm: ${P}`),m(P)}}async function T(S){var v=_;if(!g(v)&&!s)try{var C=fetch(v,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(C,S)}catch(P){d(`wasm streaming compile failed: ${P}`),d("falling back to ArrayBuffer instantiation")}return b(v,S)}var R=[],y=[],A=S=>Ut(S),z=()=>Wt(),k,O;class X{constructor(v){this.L=v-24}init(v,C){O[this.L+16>>2]=0,O[this.L+4>>2]=v,O[this.L+8>>2]=C}}var Q=0,U,G=S=>{for(var v="";;){var C=U[S++];if(!C)return v;v+=String.fromCharCode(C)}},tt={},Y={},ht={};class W extends Error{constructor(v){super(v),this.name="BindingError"}}var lt=S=>{throw new W(S)};function dt(S,v,C={}){var P=v.name;if(!S)throw new W(`type "${P}" must have a positive integer typeid pointer`);if(Y.hasOwnProperty(S)){if(C.sa)return;throw new W(`Cannot register type '${P}' twice`)}Y[S]=v,delete ht[S],tt.hasOwnProperty(S)&&(v=tt[S],delete tt[S],v.forEach(L=>L()))}function Ot(S,v,C={}){return dt(S,v,C)}var Qt,nt,Pt,Ht,Zt,Nt=(S,v,C)=>{switch(v){case 1:return C?P=>k[P]:P=>U[P];case 2:return C?P=>Qt[P>>1]:P=>nt[P>>1];case 4:return C?P=>Pt[P>>2]:P=>O[P>>2];case 8:return C?P=>Ht[P>>3]:P=>Zt[P>>3];default:throw new TypeError(`invalid integer width (${v}): ${S}`)}},ie=S=>{throw new W(S.J.N.K.name+" instance already deleted")},ke=!1,Kt=()=>{},ye=S=>globalThis.FinalizationRegistry?(ke=new FinalizationRegistry(v=>{v=v.J,--v.count.value,v.count.value===0&&(v.P?v.U.W(v.P):v.N.K.W(v.L))}),ye=v=>{var C=v.J;return C.P&&ke.register(v,{J:C},v),v},Kt=v=>{ke.unregister(v)},ye(S)):(ye=v=>v,S),Te=[];function he(){}var Oe=(S,v)=>Object.defineProperty(v,"name",{value:S}),Fe={},ri=(S,v,C)=>{if(S[v].V===void 0){var P=S[v];S[v]=function(...L){if(!S[v].V.hasOwnProperty(L.length))throw new W(`Function '${C}' called with an invalid number of arguments (${L.length}) - expects one of (${S[v].V})!`);return S[v].V[L.length].apply(this,L)},S[v].V=[],S[v].V[P.X]=P}},Re=(S,v)=>{if(t.hasOwnProperty(S))throw new W(`Cannot register public name '${S}' twice`);t[S]=v,t[S].X=void 0},Ui=S=>{S=S.replace(/[^a-zA-Z0-9_]/g,"$");var v=S.charCodeAt(0);return v>=48&&v<=57?`_${S}`:S};function Ve(S,v,C,P,L,K,H,Z){this.name=S,this.constructor=v,this.Z=C,this.W=P,this.S=L,this.qa=K,this.ba=H,this.pa=Z,this.ua=[]}var ai=(S,v,C)=>{for(;v!==C;){if(!v.ba)throw new W(`Expected null or instance of ${C.name}, got an instance of ${v.name}`);S=v.ba(S),v=v.S}return S},oi=S=>{if(S===null)return"null";var v=typeof S;return v==="object"||v==="array"||v==="function"?S.toString():""+S};function Mi(S,v){if(v===null){if(this.fa)throw new W(`null is not a valid ${this.name}`);return 0}if(!v.J)throw new W(`Cannot pass "${oi(v)}" as a ${this.name}`);if(!v.J.L)throw new W(`Cannot pass deleted object as a pointer of type ${this.name}`);return ai(v.J.L,v.J.N.K,this.K)}function V(S,v){if(v===null){if(this.fa)throw new W(`null is not a valid ${this.name}`);if(this.ea){var C=this.va();return S!==null&&S.push(this.W,C),C}return 0}if(!v||!v.J)throw new W(`Cannot pass "${oi(v)}" as a ${this.name}`);if(!v.J.L)throw new W(`Cannot pass deleted object as a pointer of type ${this.name}`);if(!this.da&&v.J.N.da)throw new W(`Cannot convert argument of type ${v.J.U?v.J.U.name:v.J.N.name} to parameter type ${this.name}`);if(C=ai(v.J.L,v.J.N.K,this.K),this.ea){if(v.J.P===void 0)throw new W("Passing raw pointer to smart pointer is illegal");switch(this.xa){case 0:if(v.J.U===this)C=v.J.P;else throw new W(`Cannot convert argument of type ${v.J.U?v.J.U.name:v.J.N.name} to parameter type ${this.name}`);break;case 1:C=v.J.P;break;case 2:if(v.J.U===this)C=v.J.P;else{var P=v.clone();C=this.wa(C,ae(()=>P.delete())),S!==null&&S.push(this.W,C)}break;default:throw new W("Unsupported sharing policy")}}return C}function Si(S,v){if(v===null){if(this.fa)throw new W(`null is not a valid ${this.name}`);return 0}if(!v.J)throw new W(`Cannot pass "${oi(v)}" as a ${this.name}`);if(!v.J.L)throw new W(`Cannot pass deleted object as a pointer of type ${this.name}`);if(v.J.N.da)throw new W(`Cannot convert argument of type ${v.J.N.name} to parameter type ${this.name}`);return ai(v.J.L,v.J.N.K,this.K)}function Ae(S){return this.M(O[S>>2])}var Pe=(S,v,C)=>v===C?S:C.S===void 0?null:(S=Pe(S,v,C.S),S===null?null:C.pa(S)),It={},Be=(S,v)=>{if(v===void 0)throw new W("ptr should not be undefined");for(;S.S;)v=S.ba(v),S=S.S;return It[v]};class Yt extends Error{constructor(v){super(v),this.name="InternalError"}}var te=(S,v)=>{if(!v.N||!v.L)throw new Yt("makeClassHandle requires ptr and ptrType");if(!!v.U!=!!v.P)throw new Yt("Both smartPtrType and smartPtr must be specified");return v.count={value:1},ye(Object.create(S,{J:{value:v,writable:!0}}))};function I(S,v,C,P,L,K,H,Z,at,bt,_t){this.name=S,this.K=v,this.fa=C,this.da=P,this.ea=L,this.ta=K,this.xa=H,this.ka=Z,this.va=at,this.wa=bt,this.W=_t,L||v.S!==void 0?this.R=V:(this.R=P?Mi:Si,this.O=null)}var w=(S,v)=>{if(!t.hasOwnProperty(S))throw new Yt("Replacing nonexistent public symbol");t[S]=v,t[S].X=void 0},q=[],ft=(S,v)=>{S=G(S);var C;if((C=q[v])||(q[v]=C=pe.get(v)),typeof C!="function")throw new W(`unknown function pointer with signature ${S}: ${v}`);return C};class ot extends Error{}var Mt=S=>{S=Rt(S);var v=G(S);return zt(S),v},At=(S,v)=>{function C(K){L[K]||Y[K]||(ht[K]?ht[K].forEach(C):(P.push(K),L[K]=!0))}var P=[],L={};throw v.forEach(C),new ot(`${S}: `+P.map(Mt).join([", "]))},it=(S,v,C)=>{function P(Z){if(Z=C(Z),Z.length!==S.length)throw new Yt("Mismatched type converter count");for(var at=0;at<S.length;++at)Ot(S[at],Z[at])}S.forEach(Z=>ht[Z]=v);var L=Array(v.length),K=[],H=0;for(let[Z,at]of v.entries())Y.hasOwnProperty(at)?L[Z]=Y[at]:(K.push(at),tt.hasOwnProperty(at)||(tt[at]=[]),tt[at].push(()=>{L[Z]=Y[at],++H,H===K.length&&P(L)}));K.length===0&&P(L)},st=(S,v)=>{for(var C=[],P=0;P<S;P++)C.push(O[v+P*4>>2]);return C},wt=S=>{for(;S.length;){var v=S.pop();S.pop()(v)}},N={ftf:function(S,v,C,P,L,K){return function(){var H=C(P);return K(H)}},tffnn:function(S,v,C,P,L,K,H,Z){return function(at){var bt=H(null,this);at=Z(null,at),C(P,bt,at)}},tffnnn:function(S,v,C,P,L,K,H,Z,at){return function(bt,_t){var Ft=H(null,this);bt=Z(null,bt),_t=at(null,_t),C(P,Ft,bt,_t)}},ttfn:function(S,v,C,P,L,K,H){return function(){var Z=H(null,this);return Z=C(P,Z),K(Z)}},ttfnn:function(S,v,C,P,L,K,H,Z){return function(at){var bt=H(null,this);return at=Z(null,at),bt=C(P,bt,at),K(bt)}},ttfnnn:function(S,v,C,P,L,K,H,Z,at){return function(bt,_t){var Ft=H(null,this);return bt=Z(null,bt),_t=at(null,_t),Ft=C(P,Ft,bt,_t),K(Ft)}},tffnnnn:function(S,v,C,P,L,K,H,Z,at,bt){return function(_t,Ft,ut){var pt=H(null,this);_t=Z(null,_t),Ft=at(null,Ft),ut=bt(null,ut),C(P,pt,_t,Ft,ut)}},tffn:function(S,v,C,P,L,K,H){return function(){var Z=H(null,this);C(P,Z)}},ttfnnnnn:function(S,v,C,P,L,K,H,Z,at,bt,_t){return function(Ft,ut,pt,yt){var ct=H(null,this);return Ft=Z(null,Ft),ut=at(null,ut),pt=bt(null,pt),yt=_t(null,yt),ct=C(P,ct,Ft,ut,pt,yt),K(ct)}},ttfnnnn:function(S,v,C,P,L,K,H,Z,at,bt){return function(_t,Ft,ut){var pt=H(null,this);return _t=Z(null,_t),Ft=at(null,Ft),ut=bt(null,ut),pt=C(P,pt,_t,Ft,ut),K(pt)}},ttfnnnnnn:function(S,v,C,P,L,K,H,Z,at,bt,_t,Ft){return function(ut,pt,yt,ct,xt){var vt=H(null,this);return ut=Z(null,ut),pt=at(null,pt),yt=bt(null,yt),ct=_t(null,ct),xt=Ft(null,xt),vt=C(P,vt,ut,pt,yt,ct,xt),K(vt)}},ttfnnnnnnnnnn:function(S,v,C,P,L,K,H,Z,at,bt,_t,Ft,ut,pt,yt,ct){return function(xt,vt,Vt,Bt,le,me,Le,ze,We){var Qe=H(null,this);return xt=Z(null,xt),vt=at(null,vt),Vt=bt(null,Vt),Bt=_t(null,Bt),le=Ft(null,le),me=ut(null,me),Le=pt(null,Le),ze=yt(null,ze),We=ct(null,We),Qe=C(P,Qe,xt,vt,Vt,Bt,le,me,Le,ze,We),K(Qe)}},ttfnnnnnnnnnnnn:function(S,v,C,P,L,K,H,Z,at,bt,_t,Ft,ut,pt,yt,ct,xt,vt){return function(Vt,Bt,le,me,Le,ze,We,Qe,Gi,Wi,ts){var gr=H(null,this);return Vt=Z(null,Vt),Bt=at(null,Bt),le=bt(null,le),me=_t(null,me),Le=Ft(null,Le),ze=ut(null,ze),We=pt(null,We),Qe=yt(null,Qe),Gi=ct(null,Gi),Wi=xt(null,Wi),ts=vt(null,ts),gr=C(P,gr,Vt,Bt,le,me,Le,ze,We,Qe,Gi,Wi,ts),K(gr)}},ttfnnnnnnnnnnn:function(S,v,C,P,L,K,H,Z,at,bt,_t,Ft,ut,pt,yt,ct,xt){return function(vt,Vt,Bt,le,me,Le,ze,We,Qe,Gi){var Wi=H(null,this);return vt=Z(null,vt),Vt=at(null,Vt),Bt=bt(null,Bt),le=_t(null,le),me=Ft(null,me),Le=ut(null,Le),ze=pt(null,ze),We=yt(null,We),Qe=ct(null,Qe),Gi=xt(null,Gi),Wi=C(P,Wi,vt,Vt,Bt,le,me,Le,ze,We,Qe,Gi),K(Wi)}},tffnnnnnnn:function(S,v,C,P,L,K,H,Z,at,bt,_t,Ft,ut){return function(pt,yt,ct,xt,vt,Vt){var Bt=H(null,this);pt=Z(null,pt),yt=at(null,yt),ct=bt(null,ct),xt=_t(null,xt),vt=Ft(null,vt),Vt=ut(null,Vt),C(P,Bt,pt,yt,ct,xt,vt,Vt)}},tffnnnnnnnn:function(S,v,C,P,L,K,H,Z,at,bt,_t,Ft,ut,pt){return function(yt,ct,xt,vt,Vt,Bt,le){var me=H(null,this);yt=Z(null,yt),ct=at(null,ct),xt=bt(null,xt),vt=_t(null,vt),Vt=Ft(null,Vt),Bt=ut(null,Bt),le=pt(null,le),C(P,me,yt,ct,xt,vt,Vt,Bt,le)}},tffnnunnnn:function(S,v,C,P,L,K,H,Z,at,bt,_t,Ft,ut){return function(pt,yt,ct,xt,vt,Vt){var Bt=[],le=H(Bt,this);pt=Z(Bt,pt),yt=at(Bt,yt),ct=bt(Bt,ct),xt=_t(Bt,xt),vt=Ft(Bt,vt),Vt=ut(Bt,Vt),C(P,le,pt,yt,ct,xt,vt,Vt),L(Bt)}},tffnnunnn:function(S,v,C,P,L,K,H,Z,at,bt,_t,Ft){return function(ut,pt,yt,ct,xt){var vt=[],Vt=H(vt,this);ut=Z(vt,ut),pt=at(vt,pt),yt=bt(vt,yt),ct=_t(vt,ct),xt=Ft(vt,xt),C(P,Vt,ut,pt,yt,ct,xt),L(vt)}},tffnuunnn:function(S,v,C,P,L,K,H,Z,at,bt,_t,Ft){return function(ut,pt,yt,ct,xt){var vt=[],Vt=H(vt,this);ut=Z(vt,ut),pt=at(vt,pt),yt=bt(vt,yt),ct=_t(vt,ct),xt=Ft(vt,xt),C(P,Vt,ut,pt,yt,ct,xt),L(vt)}},tffnuunnnn:function(S,v,C,P,L,K,H,Z,at,bt,_t,Ft,ut){return function(pt,yt,ct,xt,vt,Vt){var Bt=[],le=H(Bt,this);pt=Z(Bt,pt),yt=at(Bt,yt),ct=bt(Bt,ct),xt=_t(Bt,xt),vt=Ft(Bt,vt),Vt=ut(Bt,Vt),C(P,le,pt,yt,ct,xt,vt,Vt),L(Bt)}},tffnnnnnnnnn:function(S,v,C,P,L,K,H,Z,at,bt,_t,Ft,ut,pt,yt){return function(ct,xt,vt,Vt,Bt,le,me,Le){var ze=H(null,this);ct=Z(null,ct),xt=at(null,xt),vt=bt(null,vt),Vt=_t(null,Vt),Bt=Ft(null,Bt),le=ut(null,le),me=pt(null,me),Le=yt(null,Le),C(P,ze,ct,xt,vt,Vt,Bt,le,me,Le)}},tffnnnnnnnnnn:function(S,v,C,P,L,K,H,Z,at,bt,_t,Ft,ut,pt,yt,ct){return function(xt,vt,Vt,Bt,le,me,Le,ze,We){var Qe=H(null,this);xt=Z(null,xt),vt=at(null,vt),Vt=bt(null,Vt),Bt=_t(null,Bt),le=Ft(null,le),me=ut(null,me),Le=pt(null,Le),ze=yt(null,ze),We=ct(null,We),C(P,Qe,xt,vt,Vt,Bt,le,me,Le,ze,We)}},tffnnnnnn:function(S,v,C,P,L,K,H,Z,at,bt,_t,Ft){return function(ut,pt,yt,ct,xt){var vt=H(null,this);ut=Z(null,ut),pt=at(null,pt),yt=bt(null,yt),ct=_t(null,ct),xt=Ft(null,xt),C(P,vt,ut,pt,yt,ct,xt)}},tffnunnn:function(S,v,C,P,L,K,H,Z,at,bt,_t){return function(Ft,ut,pt,yt){var ct=[],xt=H(ct,this);Ft=Z(ct,Ft),ut=at(ct,ut),pt=bt(ct,pt),yt=_t(ct,yt),C(P,xt,Ft,ut,pt,yt),L(ct)}},tffnnnunnn:function(S,v,C,P,L,K,H,Z,at,bt,_t,Ft,ut){return function(pt,yt,ct,xt,vt,Vt){var Bt=[],le=H(Bt,this);pt=Z(Bt,pt),yt=at(Bt,yt),ct=bt(Bt,ct),xt=_t(Bt,xt),vt=Ft(Bt,vt),Vt=ut(Bt,Vt),C(P,le,pt,yt,ct,xt,vt,Vt),L(Bt)}},tffnunnnnn:function(S,v,C,P,L,K,H,Z,at,bt,_t,Ft,ut){return function(pt,yt,ct,xt,vt,Vt){var Bt=[],le=H(Bt,this);pt=Z(Bt,pt),yt=at(Bt,yt),ct=bt(Bt,ct),xt=_t(Bt,xt),vt=Ft(Bt,vt),Vt=ut(Bt,Vt),C(P,le,pt,yt,ct,xt,vt,Vt),L(Bt)}},tffnununnnn:function(S,v,C,P,L,K,H,Z,at,bt,_t,Ft,ut,pt){return function(yt,ct,xt,vt,Vt,Bt,le){var me=[],Le=H(me,this);yt=Z(me,yt),ct=at(me,ct),xt=bt(me,xt),vt=_t(me,vt),Vt=Ft(me,Vt),Bt=ut(me,Bt),le=pt(me,le),C(P,Le,yt,ct,xt,vt,Vt,Bt,le),L(me)}},tffnunnnn:function(S,v,C,P,L,K,H,Z,at,bt,_t,Ft){return function(ut,pt,yt,ct,xt){var vt=[],Vt=H(vt,this);ut=Z(vt,ut),pt=at(vt,pt),yt=bt(vt,yt),ct=_t(vt,ct),xt=Ft(vt,xt),C(P,Vt,ut,pt,yt,ct,xt),L(vt)}},tffnnnnnnnnnnnn:function(S,v,C,P,L,K,H,Z,at,bt,_t,Ft,ut,pt,yt,ct,xt,vt){return function(Vt,Bt,le,me,Le,ze,We,Qe,Gi,Wi,ts){var gr=H(null,this);Vt=Z(null,Vt),Bt=at(null,Bt),le=bt(null,le),me=_t(null,me),Le=Ft(null,Le),ze=ut(null,ze),We=pt(null,We),Qe=yt(null,Qe),Gi=ct(null,Gi),Wi=xt(null,Wi),ts=vt(null,ts),C(P,gr,Vt,Bt,le,me,Le,ze,We,Qe,Gi,Wi,ts)}}};function rt(S,v,C,P,L,K){var H=v.length;if(H<2)throw new W("argTypes array size mismatch! Must at least get return value and receiver (this) types!");C=v[1]!==null&&C!==null;var Z;t:{for(Z=1;Z<v.length;++Z)if(v[Z]!==null&&v[Z].O===void 0){Z=!0;break t}Z=!1}var at;t:{for(at=1;at<v.length;++at)if(v[at]!==null&&v[at].na){at=!0;break t}at=!1}var bt=at&&!K&&!Z;at&&!bt&&(Z=!0),at=!v[0].ja;var _t=v[0],Ft=v[1];for(P=[S,lt,P,L,wt,_t.M.bind(_t),Ft?.R.bind(Ft)],bt&&P.push(z,A),L=2;L<H;++L)bt=v[L],P.push(bt.R.bind(bt));if(!Z)for(L=C?1:2;L<v.length;++L)v[L].O!==null&&P.push(v[L].O);for(K=[C?"t":"f",at?"t":"f",K?"t":"f"],H=C?1:2;H<v.length;++H)C=v[H],K.push(C.na?"s":C.O===void 0?"u":C.O===null?"n":"t");return v=N[K.join("")](...P),Oe(S,v)}var et=S=>{S=S.trim();var v=S.indexOf("(");return v===-1?S:S.slice(0,v)},Et=[],mt=[0,1,,1,null,1,!0,1,!1,1],St=S=>{S>9&&--mt[S+1]===0&&(mt[S]=void 0,Et.push(S))},$t=S=>{if(!S)throw new W(`Cannot use deleted val. handle = ${S}`);return mt[S]},ae=S=>{switch(S){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let v=Et.pop()||mt.length;return mt[v]=S,mt[v+1]=1,v}},gt={name:"emscripten::val",M:S=>{var v=$t(S);return St(S),v},R:(S,v)=>ae(v),T:Ae,O:null},qt=(S,v,C)=>{switch(v){case 1:return C?function(P){return this.M(k[P])}:function(P){return this.M(U[P])};case 2:return C?function(P){return this.M(Qt[P>>1])}:function(P){return this.M(nt[P>>1])};case 4:return C?function(P){return this.M(Pt[P>>2])}:function(P){return this.M(O[P>>2])};default:throw new TypeError(`invalid integer width (${v}): ${S}`)}},oe=(S,v)=>{var C=Y[S];if(C===void 0)throw S=`${v} has unknown type ${Mt(S)}`,new W(S);return C},kt,ve,He=(S,v)=>{switch(v){case 4:return function(C){return this.M(kt[C>>2])};case 8:return function(C){return this.M(ve[C>>3])};default:throw new TypeError(`invalid float width (${v}): ${S}`)}},sn=(S,v,C)=>{var P=(L,K)=>{var H=0;return{next(){if(H>=L)return{done:!0};var Z=H;return H++,{value:K(Z),done:!1}},[Symbol.iterator](){return this}}};S[Symbol.iterator]||(S[Symbol.iterator]=function(){var L=this[v]();return P(L,K=>this[C](K))})},Ba=Object.assign({optional:!0},gt),rn=(S,v,C)=>{var P=U;if(!(C>0))return 0;var L=v;C=v+C-1;for(var K=0;K<S.length;++K){var H=S.codePointAt(K);if(H<=127){if(v>=C)break;P[v++]=H}else if(H<=2047){if(v+1>=C)break;P[v++]=192|H>>6,P[v++]=128|H&63}else if(H<=65535){if(v+2>=C)break;P[v++]=224|H>>12,P[v++]=128|H>>6&63,P[v++]=128|H&63}else{if(v+3>=C)break;P[v++]=240|H>>18,P[v++]=128|H>>12&63,P[v++]=128|H>>6&63,P[v++]=128|H&63,K++}}return P[v]=0,v-L},za=S=>{for(var v=0,C=0;C<S.length;++C){var P=S.charCodeAt(C);P<=127?v++:P<=2047?v+=2:P>=55296&&P<=57343?(v+=4,++C):v+=3}return v},fr=globalThis.TextDecoder&&new TextDecoder,pr=(S,v,C,P)=>{if(C=v+C,P)return C;for(;S[v]&&!(v>=C);)++v;return v},an=(S=0,v,C)=>{var P=U;if(v=pr(P,S,v,C),v-S>16&&P.buffer&&fr)return fr.decode(P.subarray(S,v));for(C="";S<v;){var L=P[S++];if(L&128){var K=P[S++]&63;if((L&224)==192)C+=String.fromCharCode((L&31)<<6|K);else{var H=P[S++]&63;L=(L&240)==224?(L&15)<<12|K<<6|H:(L&7)<<18|K<<12|H<<6|P[S++]&63,L<65536?C+=String.fromCharCode(L):(L-=65536,C+=String.fromCharCode(55296|L>>10,56320|L&1023))}}else C+=String.fromCharCode(L)}return C},gs=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Va=(S,v,C)=>{if(S>>=1,v=pr(nt,S,v/2,C),v-S>16&&gs)return gs.decode(nt.subarray(S,v));for(C="";S<v;++S)C+=String.fromCharCode(nt[S]);return C},Ha=(S,v,C=2147483647)=>{if(C<2)return 0;C-=2;var P=v;C=C<S.length*2?C/2:S.length;for(var L=0;L<C;++L)Qt[v>>1]=S.charCodeAt(L),v+=2;return Qt[v>>1]=0,v-P},_s=S=>S.length*2,Ga=(S,v,C)=>{var P="";S>>=2;for(var L=0;!(L>=v/4);L++){var K=O[S+L];if(!K&&!C)break;P+=String.fromCodePoint(K)}return P},Wa=(S,v,C=2147483647)=>{if(C<4)return 0;var P=v;C=P+C-4;for(var L=0;L<S.length;++L){var K=S.codePointAt(L);if(K>65535&&L++,Pt[v>>2]=K,v+=4,v+4>C)break}return Pt[v>>2]=0,v-P},Qn=S=>{for(var v=0,C=0;C<S.length;++C)S.codePointAt(C)>65535&&C++,v+=4;return v},mr=[],$a=S=>{var v=mr.length;return mr.push(S),v},Xa=(S,v)=>{for(var C=Array(S),P=0;P<S;++P)C[P]=oe(O[v+P*4>>2],`parameter ${P}`);return C},Dc=(S,v,C)=>{var P=[];return S=S(P,C),P.length&&(O[v>>2]=ae(P)),S},kc={},Nc=S=>{var v=kc[S];return v===void 0?G(S):v},ys=[],E={},B=()=>{if(!J){var S={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:a},v;for(v in E)E[v]===void 0?delete S[v]:S[v]=E[v];var C=[];for(v in S)C.push(`${v}=${S[v]}`);J=C}return J},J;(()=>{var S=he.prototype;Object.assign(S,{isAliasOf:function(C){if(!(this instanceof he&&C instanceof he))return!1;var P=this.J.N.K,L=this.J.L;C.J=C.J;var K=C.J.N.K;for(C=C.J.L;P.S;)L=P.ba(L),P=P.S;for(;K.S;)C=K.ba(C),K=K.S;return P===K&&L===C},clone:function(){if(this.J.L||ie(this),this.J.aa)return this.J.count.value+=1,this;var C=ye,P=Object,L=P.create,K=Object.getPrototypeOf(this),H=this.J;return C=C(L.call(P,K,{J:{value:{count:H.count,$:H.$,aa:H.aa,L:H.L,N:H.N,P:H.P,U:H.U}}})),C.J.count.value+=1,C.J.$=!1,C},delete(){if(this.J.L||ie(this),this.J.$&&!this.J.aa)throw new W("Object already scheduled for deletion");Kt(this);var C=this.J;--C.count.value,C.count.value===0&&(C.P?C.U.W(C.P):C.N.K.W(C.L)),this.J.aa||(this.J.P=void 0,this.J.L=void 0)},isDeleted:function(){return!this.J.L},deleteLater:function(){if(this.J.L||ie(this),this.J.$&&!this.J.aa)throw new W("Object already scheduled for deletion");return Te.push(this),this.J.$=!0,this}});var v=Symbol.dispose;v&&(S[v]=S.delete)})(),Object.assign(I.prototype,{ra(S){return this.ka&&(S=this.ka(S)),S},ia(S){this.W?.(S)},T:Ae,M:function(S){function v(){return this.ea?te(this.K.Z,{N:this.ta,L:C,U:this,P:S}):te(this.K.Z,{N:this,L:S})}var C=this.ra(S);if(!C)return this.ia(S),null;var P=Be(this.K,C);if(P!==void 0)return P.J.count.value===0?(P.J.L=C,P.J.P=S,P.clone()):(P=P.clone(),this.ia(S),P);if(P=this.K.qa(C),P=Fe[P],!P)return v.call(this);P=this.da?P.oa:P.pointerType;var L=Pe(C,this.K,P.K);return L===null?v.call(this):this.ea?te(P.K.Z,{N:P,L,U:this,P:S}):te(P.K.Z,{N:P,L})}}),t.printErr&&(d=t.printErr),t.thisProgram&&(a=t.thisProgram);var $=t.preInit;if($)for(typeof $=="function"&&(t.preInit=$=[$]);$.length>0;)$.shift()();var j={40176:()=>{console.log(`Solving with DogLeg
`)},40218:()=>{console.log(`Solving with LevenbergMarquardt
`)},40272:()=>{console.log(`Solving with BFGS
`)}},Rt,zt,Tt,Ut,Wt,ne,pe,Gt={b:(S,v,C)=>{new X(S).init(v,C),Q++,m()},v:()=>m(""),n:(S,v,C,P,L)=>{v=G(v),P=P===0n;var K=H=>H;if(P){let H=C*8;K=Z=>BigInt.asUintN(H,Z),L=K(L)}Ot(S,{name:v,M:K,R:(H,Z)=>(typeof Z=="number"&&(Z=BigInt(Z)),Z),T:Nt(v,C,!P),O:null})},z:(S,v,C,P)=>{v=G(v),Ot(S,{name:v,M:function(L){return!!L},R:function(L,K){return K?C:P},T:function(L){return this.M(U[L])},O:null})},e:(S,v,C,P,L,K,H,Z,at,bt,_t,Ft,ut)=>{_t=G(_t),K=ft(L,K),Z&&=ft(H,Z),bt&&=ft(at,bt),ut=ft(Ft,ut);var pt=Ui(_t);Re(pt,function(){At(`Cannot construct ${_t} due to unbound types`,[P])}),it([S,v,C],P?[P]:[],yt=>{if(yt=yt[0],P)var ct=yt.K,xt=ct.Z;else xt=he.prototype;yt=Oe(_t,function(...le){if(Object.getPrototypeOf(this)!==vt)throw new W(`Use 'new' to construct ${_t}`);if(Vt.Y===void 0)throw new W(`${_t} has no accessible constructor`);var me=Vt.Y[le.length];if(me===void 0)throw new W(`Tried to invoke ctor of ${_t} with invalid number of parameters (${le.length}) - expected (${Object.keys(Vt.Y).toString()}) parameters instead!`);return me.apply(this,le)});var vt=Object.create(xt,{constructor:{value:yt}});yt.prototype=vt;var Vt=new Ve(_t,yt,vt,ut,ct,K,Z,bt);if(Vt.S){var Bt;(Bt=Vt.S).ha??(Bt.ha=[]),Vt.S.ha.push(Vt)}return ct=new I(_t,Vt,!0,!1,!1),Bt=new I(_t+"*",Vt,!1,!1,!1),xt=new I(_t+" const*",Vt,!1,!0,!1),Fe[S]={pointerType:Bt,oa:xt},w(pt,yt),[ct,Bt,xt]})},h:(S,v,C,P,L,K)=>{var H=st(v,C);L=ft(P,L),it([],[S],Z=>{Z=Z[0];var at=`constructor ${Z.name}`;if(Z.K.Y===void 0&&(Z.K.Y=[]),Z.K.Y[v-1]!==void 0)throw new W(`Cannot register multiple constructors with identical number of parameters (${v-1}) for class '${Z.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return Z.K.Y[v-1]=()=>{At(`Cannot construct ${Z.name} due to unbound types`,H)},it([],H,bt=>(bt.splice(1,0,null),Z.K.Y[v-1]=rt(at,bt,null,L,K),[])),[]})},a:(S,v,C,P,L,K,H,Z,at)=>{var bt=st(C,P);v=G(v),v=et(v),K=ft(L,K),it([],[S],_t=>{function Ft(){At(`Cannot call ${ut} due to unbound types`,bt)}_t=_t[0];var ut=`${_t.name}.${v}`;v.startsWith("@@")&&(v=Symbol[v.substring(2)]),Z&&_t.K.ua.push(v);var pt=_t.K.Z,yt=pt[v];return yt===void 0||yt.V===void 0&&yt.className!==_t.name&&yt.X===C-2?(Ft.X=C-2,Ft.className=_t.name,pt[v]=Ft):(ri(pt,v,ut),pt[v].V[C-2]=Ft),it([],bt,ct=>(ct=rt(ut,ct,_t,K,H,at),pt[v].V===void 0?(ct.X=C-2,pt[v]=ct):pt[v].V[C-2]=ct,[])),[]})},x:S=>Ot(S,gt),g:(S,v,C,P,L)=>{switch(v=G(v),L=L?L===1?"number":"string":"object",L){case"object":let H=function(){};H.values={},Ot(S,{name:v,constructor:H,valueType:L,M:function(Z){return this.constructor.values[Z]},R:(Z,at)=>at.value,T:qt(v,C,P),O:null}),Re(v,H);break;case"number":var K={};Ot(S,{name:v,ga:K,valueType:L,M:Z=>Z,R:(Z,at)=>at,T:qt(v,C,P),O:null}),Re(v,K),delete t[v].X;break;case"string":K={},Ot(S,{name:v,ma:{},la:{},ga:K,valueType:L,M:function(Z){return this.la[Z]},R:function(Z,at){return this.ma[at]},T:qt(v,C,P),O:null}),Re(v,K),delete t[v].X}},c:(S,v,C)=>{var P=oe(S,"enum");switch(v=G(v),P.valueType){case"object":S=P.constructor,P=Object.create(P.constructor.prototype,{value:{value:C},constructor:{value:Oe(`${P.name}_${v}`,function(){})}}),S.values[C]=P,S[v]=P;break;case"number":P.ga[v]=C;break;case"string":P.ma[v]=C,P.la[C]=v,P.ga[v]=v}},m:(S,v,C)=>{v=G(v),Ot(S,{name:v,M:P=>P,R:(P,L)=>L,T:He(v,C),O:null})},f:(S,v,C,P,L)=>{v=G(v);var K=Z=>Z;if(P===0){var H=32-8*C;K=Z=>Z<<H>>>H,L=K(L)}Ot(S,{name:v,M:K,R:(Z,at)=>at,T:Nt(v,C,P!==0),O:null})},k:(S,v,C,P)=>{C=G(C),P=G(P),it([],[S,v],L=>(sn(L[0].K.Z,C,P),[]))},d:(S,v,C)=>{function P(K){return new L(k.buffer,O[K+4>>2],O[K>>2])}var L=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][v];C=G(C),Ot(S,{name:C,M:P,T:P},{sa:!0})},l:S=>{Ot(S,Ba)},y:(S,v)=>{v=G(v),Ot(S,{name:v,M(C){var P=(P=C+4)?an(P,O[C>>2],!0):"";return zt(C),P},R(C,P){P instanceof ArrayBuffer&&(P=new Uint8Array(P));var L=typeof P=="string";if(!(L||ArrayBuffer.isView(P)&&P.BYTES_PER_ELEMENT==1))throw new W("Cannot pass non-string to std::string");var K=L?za(P):P.length,H=Tt(4+K+1),Z=H+4;return O[H>>2]=K,L?rn(P,Z,K+1):U.set(P,Z),C!==null&&C.push(zt,H),H},T:Ae,O(C){zt(C)}})},i:(S,v,C)=>{if(C=G(C),v===2)var P=Va,L=Ha,K=_s;else P=Ga,L=Wa,K=Qn;Ot(S,{name:C,M:H=>{var Z=P(H+4,O[H>>2]*v,!0);return zt(H),Z},R:(H,Z)=>{if(typeof Z!="string")throw new W(`Cannot pass non-string to C++ string type ${C}`);var at=K(Z),bt=Tt(4+at+v);return O[bt>>2]=at/v,L(Z,bt+4,at+v),H!==null&&H.push(zt,bt),bt},T:Ae,O(H){zt(H)}})},A:(S,v)=>{v=G(v),Ot(S,{ja:!0,name:v,M:()=>{},R:()=>{}})},j:(S,v,C)=>{var P;[v,...P]=Xa(S,v);var L=v.R.bind(v),K=P.map(at=>at.T.bind(at));S--;var H={toValue:$t};switch(S=K.map((at,bt)=>{var _t=`argFromPtr${bt}`;return H[_t]=at,`${_t}(args${bt?"+"+bt*8:""})`}),C){case 0:var Z="toValue(handle)";break;case 2:Z="new (toValue(handle))";break;case 3:Z="";break;case 1:H.getStringOrSymbol=Nc,Z="toValue(handle)[getStringOrSymbol(methodName)]"}return Z+=`(${S})`,v.ja||(H.toReturnWire=L,H.emval_returnValue=Dc,Z=`return emval_returnValue(toReturnWire, destructorsRef, ${Z})`),Z=`return function (handle, methodName, destructorsRef, args) {
${Z}
}`,C=new Function(Object.keys(H),Z)(...Object.values(H)),v=`methodCaller<(${P.map(at=>at.name)}) => ${v.name}>`,$a(Oe(v,C))},p:(S,v,C,P,L)=>mr[S](v,C,P,L),o:S=>{var v=$t(S);wt(v),St(S)},t:(S,v,C,P)=>{var L=new Date().getFullYear(),K=new Date(L,0,1).getTimezoneOffset();L=new Date(L,6,1).getTimezoneOffset(),O[S>>2]=Math.max(K,L)*60,Pt[v>>2]=+(K!=L),v=H=>{var Z=Math.abs(H);return`UTC${H>=0?"-":"+"}${String(Math.floor(Z/60)).padStart(2,"0")}${String(Z%60).padStart(2,"0")}`},S=v(K),v=v(L),L<K?(rn(S,C,17),rn(v,P,17)):(rn(S,P,17),rn(v,C,17))},q:(S,v,C)=>{ys.length=0;for(var P;P=U[v++];){var L=P!=105;L&=P!=112,C+=L&&C%8?4:0,ys.push(P==112?O[C>>2]:P==106?Ht[C>>3]:P==105?Pt[C>>2]:ve[C>>3]),C+=L?8:4}return j[S](...ys)},u:()=>{m("OOM")},r:(S,v)=>{var C=0,P=0,L;for(L of B()){var K=v+C;O[S+P>>2]=K,C+=rn(L,K,1/0)+1,P+=4}return 0},s:(S,v)=>{var C=B();O[S>>2]=C.length,S=0;for(var P of C)S+=za(P)+1;return O[v>>2]=S,0},w:function(S){console.log(S?an(S):"")}},de;return de=await(async function(){function S(P){return P=de=P.exports,Rt=P.D,zt=P.F,Tt=P.G,Ut=P.H,Wt=P.I,ne=P.B,pe=P.E,P=ne.buffer,k=new Int8Array(P),Qt=new Int16Array(P),U=new Uint8Array(P),nt=new Uint16Array(P),Pt=new Int32Array(P),O=new Uint32Array(P),kt=new Float32Array(P),ve=new Float64Array(P),Ht=new BigInt64Array(P),Zt=new BigUint64Array(P),de}var v={a:Gt},C=t.instantiateWasm;return C?new Promise(P=>{C(v,L=>P(S(L)))}):(_??=t.locateFile?t.locateFile?t.locateFile("planegcs.wasm",l):l+"planegcs.wasm":new URL("planegcs.wasm",import.meta.url).href,(function(P){return S(P.instance)})(await T(v)))})(),await(async function(){x();var S=t.setStatus;S&&(S("Running..."),await new Promise(v=>setTimeout(v,1)),setTimeout(S,1,"")),f||(de.C(),t.onRuntimeInitialized?.(),p())})(),t}var Rd=qv;var Rp={equal:{param1:"object_param_or_number",param2:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type",internalalignment:"primitive_type"},proportional:{param1:"object_param_or_number",param2:"object_param_or_number",ratio:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},difference:{param1:"object_param_or_number",param2:"object_param_or_number",difference:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},p2p_distance:{p1_id:"object_id",p2_id:"object_id",distance:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},p2p_angle_incr_angle:{p1_id:"object_id",p2_id:"object_id",angle:"object_param_or_number",incrAngle:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},p2p_angle:{p1_id:"object_id",p2_id:"object_id",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},p2l_distance:{p_id:"object_id",l_id:"object_id",distance:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},point_on_line_pl:{p_id:"object_id",l_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_line_ppp:{p_id:"object_id",lp1_id:"object_id",lp2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_perp_bisector_pl:{p_id:"object_id",l_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_perp_bisector_ppp:{p_id:"object_id",lp1_id:"object_id",lp2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},parallel:{l1_id:"object_id",l2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},perpendicular_ll:{l1_id:"object_id",l2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},perpendicular_pppp:{l1p1_id:"object_id",l1p2_id:"object_id",l2p1_id:"object_id",l2p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},l2l_angle_ll:{l1_id:"object_id",l2_id:"object_id",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},l2l_angle_pppp:{l1p1_id:"object_id",l1p2_id:"object_id",l2p1_id:"object_id",l2p2_id:"object_id",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},angle_via_point:{crv1_id:"object_id",crv2_id:"object_id",p_id:"object_id",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},angle_via_two_points:{crv1_id:"object_id",crv2_id:"object_id",p1_id:"object_id",p2_id:"object_id",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},angle_via_point_and_param:{crv1_id:"object_id",crv2_id:"object_id",p_id:"object_id",cparam:"object_param_or_number",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},angle_via_point_and_two_params:{crv1_id:"object_id",crv2_id:"object_id",p_id:"object_id",cparam1:"object_param_or_number",cparam2:"object_param_or_number",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},midpoint_on_line_ll:{l1_id:"object_id",l2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},midpoint_on_line_pppp:{l1p1_id:"object_id",l1p2_id:"object_id",l2p1_id:"object_id",l2p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},tangent_circumf:{p1_id:"object_id",p2_id:"object_id",rd1:"object_param_or_number",rd2:"object_param_or_number",internal:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},tangent_at_bspline_knot:{b_id:"object_id",l_id:"object_id",knotindex:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},p2p_coincident:{p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},horizontal_l:{l_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},horizontal_pp:{p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},vertical_l:{l_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},vertical_pp:{p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},coordinate_x:{p_id:"object_id",x:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},coordinate_y:{p_id:"object_id",y:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},arc_rules:{a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_circle:{p_id:"object_id",c_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_ellipse:{p_id:"object_id",e_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_hyperbolic_arc:{p_id:"object_id",e_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_parabolic_arc:{p_id:"object_id",e_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_bspline:{p_id:"object_id",b_id:"object_id",pointparam:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},arc_of_ellipse_rules:{a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},curve_value:{p_id:"object_id",a_id:"object_id",u:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},arc_of_hyperbola_rules:{a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},arc_of_parabola_rules:{a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_arc:{p_id:"object_id",a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},perpendicular_line2arc:{p1_id:"object_id",p2_id:"object_id",a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},perpendicular_arc2line:{a_id:"object_id",p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},perpendicular_circle2arc:{center_id:"object_id",radius:"object_param_or_number",a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},perpendicular_arc2circle:{a_id:"object_id",center_id:"object_id",radius:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},perpendicular_arc2arc:{a1_id:"object_id",reverse1:"primitive_type",a2_id:"object_id",reverse2:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},tangent_lc:{l_id:"object_id",c_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},tangent_le:{l_id:"object_id",e_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},tangent_la:{l_id:"object_id",a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},tangent_cc:{c1_id:"object_id",c2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},tangent_aa:{a1_id:"object_id",a2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},tangent_ca:{c_id:"object_id",a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},circle_radius:{c_id:"object_id",radius:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},arc_radius:{a_id:"object_id",radius:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},circle_diameter:{c_id:"object_id",diameter:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},arc_diameter:{a_id:"object_id",diameter:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},equal_length:{l1_id:"object_id",l2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},equal_radius_cc:{c1_id:"object_id",c2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},equal_radii_ee:{e1_id:"object_id",e2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},equal_radii_ahah:{a1_id:"object_id",a2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},equal_radius_ca:{c1_id:"object_id",a2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},equal_radius_aa:{a1_id:"object_id",a2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},equal_focus:{a1_id:"object_id",a2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},p2p_symmetric_ppl:{p1_id:"object_id",p2_id:"object_id",l_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},p2p_symmetric_ppp:{p1_id:"object_id",p2_id:"object_id",p_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},snells_law:{ray1_id:"object_id",ray2_id:"object_id",boundary_id:"object_id",p_id:"object_id",n1:"object_param_or_number",n2:"object_param_or_number",flipn1:"primitive_type",flipn2:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},c2cdistance:{c1_id:"object_id",c2_id:"object_id",dist:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},c2ldistance:{c_id:"object_id",l_id:"object_id",dist:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},p2cdistance:{p_id:"object_id",c_id:"object_id",distance:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},arc_length:{a_id:"object_id",dist:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_point2ellipse:{e_id:"object_id",p1_id:"object_id",alignmentType:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_ellipse_major_diameter:{e_id:"object_id",p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_ellipse_minor_diameter:{e_id:"object_id",p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_ellipse_focus1:{e_id:"object_id",p1_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_ellipse_focus2:{e_id:"object_id",p1_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_point2hyperbola:{e_id:"object_id",p1_id:"object_id",alignmentType:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_hyperbola_major_diameter:{e_id:"object_id",p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_hyperbola_minor_diameter:{e_id:"object_id",p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_hyperbola_focus:{e_id:"object_id",p1_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_parabola_focus:{e_id:"object_id",p1_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_bspline_control_point:{b_id:"object_id",c_id:"object_id",poleindex:"primitive_type",tag:"primitive_type",driving:"primitive_type"},internal_alignment_knot_point:{b_id:"object_id",p_id:"object_id",knotindex:"primitive_type",tagId:"primitive_type",driving:"primitive_type"}};function wa(n,t){let e=new n.IntVector;for(let i of t)e.push_back(i);return e}function Ea(n){let t=[];for(let e=0;e<n.size();++e)t.push(n.get(e));return n.delete(),t}var Ct={point:{x:0,y:1},circle:{radius:0},arc:{start_angle:0,end_angle:1,radius:2},ellipse:{radmin:0},arc_of_ellipse:{start_angle:0,end_angle:1,radmin:2},parabola:{},arc_of_parabola:{start_angle:0,end_angle:1},hyperbola:{radmin:0},arc_of_hyperbola:{start_angle:0,end_angle:1,radmin:2},line:{},bspline:{}};function Pd(n,t){let e=Ct[n];if(e){let i=e[t];if(i!==void 0)return i}throw new Error(`Unknown property ${t} for primitive <${n}>`)}var Ta=class{get debug_mode(){return this.gcs.get_debug_mode()}set debug_mode(t){this.gcs.set_debug_mode(t)}get equal_optimization(){return this.enable_equal_optimization}set equal_optimization(t){this.enable_equal_optimization=t}constructor(t,e){this.p_param_index=new Map,this.sketch_index=new Sa,this.bspline_gcs_cache=new Map,this.sketch_param_index=new Map,this.nondriving_constraint_params_order=new Map,this.enable_equal_optimization=!1,this.gcs=t,this.module=e}destroy_gcs_module(){this.gcs.clear_data(),this.gcs.delete()}clear_data(){this.nondriving_constraint_params_order.clear(),this.gcs.clear_data(),this.p_param_index.clear(),this.sketch_param_index.clear(),this.sketch_index.clear(),this.bspline_gcs_cache.clear()}push_primitive(t){switch(t.type){case"point":this.push_point(t);break;case"line":this.push_line(t);break;case"circle":this.push_circle(t);break;case"arc":this.push_arc(t);break;case"ellipse":this.push_ellipse(t);break;case"arc_of_ellipse":this.push_arc_of_ellipse(t);break;case"hyperbola":this.push_hyperbola(t);break;case"arc_of_hyperbola":this.push_arc_of_hyperbola(t);break;case"parabola":this.push_parabola(t);break;case"arc_of_parabola":this.push_arc_of_parabola(t);break;case"bspline":this.push_bspline(t);break;default:this.push_constraint(t)}if(this.sketch_index.has(t.id))throw new Error(`object with id ${t.id} already exists`);this.sketch_index.set_primitive(t)}push_primitives_and_params(t){for(let e of t)e.type==="param"?this.push_sketch_param(e.name,e.value):this.push_primitive(e)}solve(t=Td.DogLeg){return this.gcs.solve_system(t)}apply_solution(){this.gcs.apply_solution();for(let t of this.sketch_index.get_primitives())this.pull_primitive(t)}set_convergence_threshold(t){this.gcs.set_covergence_threshold(t)}get_convergence_threshold(){return this.gcs.get_convergence_threshold()}set_max_iterations(t){this.gcs.set_max_iterations(t)}get_max_iterations(){return this.gcs.get_max_iterations()}get_gcs_params(){return Ea(this.gcs.get_p_params())}get_gcs_conflicting_constraints(){return Ea(this.gcs.get_conflicting()).map(t=>this.sketch_index.get_id_by_index(t))}get_gcs_redundant_constraints(){return Ea(this.gcs.get_redundant()).map(t=>this.sketch_index.get_id_by_index(t))}get_gcs_partially_redundant_constraints(){return Ea(this.gcs.get_partially_redundant()).map(t=>this.sketch_index.get_id_by_index(t))}has_gcs_conflicting_constraints(){return this.gcs.has_conflicting()}has_gcs_redundant_constraints(){return this.gcs.has_redundant()}has_gcs_partially_redundant_constraints(){return this.gcs.has_partially_redundant()}push_sketch_param(t,e,i=!0){let s=this.gcs.params_size();return this.gcs.push_p_param(e,i),this.sketch_param_index.set(t,s),s}set_sketch_param(t,e){let i=this.sketch_param_index.get(t);if(i===void 0)throw new Error(`sketch param ${t} not found`);this.gcs.set_p_param(i,e,!0)}get_sketch_param_value(t){let e=this.sketch_param_index.get(t);return e===void 0?void 0:this.gcs.get_p_param(e)}get_sketch_param_values(){let t=new Map;for(let[e,i]of this.sketch_param_index)t.set(e,this.gcs.get_p_param(i));return t}push_p_params(t,e,i=!1){let s=this.gcs.params_size();for(let r of e)this.gcs.push_p_param(r,i);return this.p_param_index.has(t)||this.p_param_index.set(t,s),s}push_point(t){this.p_param_index.has(t.id)||this.push_p_params(t.id,[t.x,t.y],t.fixed)}push_line(t){let e=this.sketch_index.get_sketch_point(t.p1_id),i=this.sketch_index.get_sketch_point(t.p2_id);this.push_point(e),this.push_point(i)}push_circle(t){let e=this.sketch_index.get_sketch_point(t.c_id);this.push_point(e),this.push_p_params(t.id,[t.radius],!1)}push_arc(t){let e=this.sketch_index.get_sketch_point(t.c_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.start_id);this.push_point(i);let s=this.sketch_index.get_sketch_point(t.end_id);this.push_point(s),this.push_p_params(t.id,[t.start_angle,t.end_angle,t.radius],!1)}push_ellipse(t){let e=this.sketch_index.get_sketch_point(t.c_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.focus1_id);this.push_point(i),this.push_p_params(t.id,[t.radmin],!1)}push_hyperbola(t){let e=this.sketch_index.get_sketch_point(t.c_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.focus1_id);this.push_point(i),this.push_p_params(t.id,[t.radmin],!1)}push_arc_of_hyperbola(t){let e=this.sketch_index.get_sketch_point(t.c_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.focus1_id);this.push_point(i);let s=this.sketch_index.get_sketch_point(t.start_id);this.push_point(s);let r=this.sketch_index.get_sketch_point(t.end_id);this.push_point(r),this.push_p_params(t.id,[t.start_angle,t.end_angle,t.radmin],!1)}push_parabola(t){let e=this.sketch_index.get_sketch_point(t.vertex_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.focus1_id);this.push_point(i)}push_arc_of_parabola(t){let e=this.sketch_index.get_sketch_point(t.vertex_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.focus1_id);this.push_point(i);let s=this.sketch_index.get_sketch_point(t.start_id);this.push_point(s);let r=this.sketch_index.get_sketch_point(t.end_id);this.push_point(r),this.push_p_params(t.id,[t.start_angle,t.end_angle],!1)}push_arc_of_ellipse(t){let e=this.sketch_index.get_sketch_point(t.c_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.focus1_id);this.push_point(i);let s=this.sketch_index.get_sketch_point(t.start_id);this.push_point(s);let r=this.sketch_index.get_sketch_point(t.end_id);this.push_point(r),this.push_p_params(t.id,[t.start_angle,t.end_angle,t.radmin],!1)}push_bspline(t){for(let e of t.pole_ids){let i=this.sketch_index.get_sketch_point(e);this.push_point(i)}}sketch_primitive_to_gcs(t){switch(t.type){case"point":{let e=this.get_primitive_addr(t.id);return this.gcs.make_point(e+Ct.point.x,e+Ct.point.y)}case"line":{let e=this.get_primitive_addr(t.p1_id),i=this.get_primitive_addr(t.p2_id);return this.gcs.make_line(e+Ct.point.x,e+Ct.point.y,i+Ct.point.x,i+Ct.point.y)}case"circle":{let e=this.get_primitive_addr(t.c_id),i=this.get_primitive_addr(t.id);return this.gcs.make_circle(e+Ct.point.x,e+Ct.point.y,i+Ct.circle.radius)}case"arc":{let e=this.get_primitive_addr(t.c_id),i=this.get_primitive_addr(t.start_id),s=this.get_primitive_addr(t.end_id),r=this.get_primitive_addr(t.id);return this.gcs.make_arc(e+Ct.point.x,e+Ct.point.y,i+Ct.point.x,i+Ct.point.y,s+Ct.point.x,s+Ct.point.y,r+Ct.arc.start_angle,r+Ct.arc.end_angle,r+Ct.arc.radius)}case"ellipse":{let e=this.get_primitive_addr(t.c_id),i=this.get_primitive_addr(t.focus1_id),s=this.get_primitive_addr(t.id);return this.gcs.make_ellipse(e+Ct.point.x,e+Ct.point.y,i+Ct.point.x,i+Ct.point.y,s+Ct.ellipse.radmin)}case"arc_of_ellipse":{let e=this.get_primitive_addr(t.c_id),i=this.get_primitive_addr(t.focus1_id),s=this.get_primitive_addr(t.start_id),r=this.get_primitive_addr(t.end_id),a=this.get_primitive_addr(t.id);return this.gcs.make_arc_of_ellipse(e+Ct.point.x,e+Ct.point.y,i+Ct.point.x,i+Ct.point.y,s+Ct.point.x,s+Ct.point.y,r+Ct.point.x,r+Ct.point.y,a+Ct.arc_of_ellipse.start_angle,a+Ct.arc_of_ellipse.end_angle,a+Ct.arc_of_ellipse.radmin)}case"hyperbola":{let e=this.get_primitive_addr(t.c_id),i=this.get_primitive_addr(t.focus1_id),s=this.get_primitive_addr(t.id+Ct.hyperbola.radmin);return this.gcs.make_hyperbola(e+Ct.point.x,e+Ct.point.y,i+Ct.point.x,i+Ct.point.y,s+Ct.hyperbola.radmin)}case"arc_of_hyperbola":{let e=this.get_primitive_addr(t.c_id),i=this.get_primitive_addr(t.focus1_id),s=this.get_primitive_addr(t.start_id),r=this.get_primitive_addr(t.end_id),a=this.get_primitive_addr(t.id);return this.gcs.make_arc_of_hyperbola(e+Ct.point.x,e+Ct.point.y,i+Ct.point.x,i+Ct.point.y,s+Ct.point.x,s+Ct.point.y,r+Ct.point.x,r+Ct.point.y,a+Ct.arc_of_hyperbola.start_angle,a+Ct.arc_of_hyperbola.end_angle,a+Ct.arc_of_hyperbola.radmin)}case"parabola":{let e=this.get_primitive_addr(t.vertex_id),i=this.get_primitive_addr(t.focus1_id);return this.gcs.make_parabola(e+Ct.point.x,e+Ct.point.y,i+Ct.point.x,i+Ct.point.y)}case"arc_of_parabola":{let e=this.get_primitive_addr(t.vertex_id),i=this.get_primitive_addr(t.focus1_id),s=this.get_primitive_addr(t.start_id),r=this.get_primitive_addr(t.end_id),a=this.get_primitive_addr(t.id);return this.gcs.make_arc_of_parabola(e+Ct.point.x,e+Ct.point.y,i+Ct.point.x,i+Ct.point.y,s+Ct.point.x,s+Ct.point.y,r+Ct.point.x,r+Ct.point.y,a+Ct.arc_of_parabola.start_angle,a+Ct.arc_of_parabola.end_angle)}case"bspline":{if(!this.module)throw new Error("ModuleStatic required for BSpline creation");let e=t,i=this.bspline_gcs_cache.get(e.id);if(i!==void 0)return i;if(e.pole_ids.length<2)throw new Error("BSpline must have at least 2 control points, got "+e.pole_ids.length);let s=[];for(let p of e.pole_ids){let m=this.get_primitive_addr(p);s.push(m+Ct.point.x),s.push(m+Ct.point.y)}let r=this.gcs.push_p_param(this.gcs.get_p_param(s[0]),!1),a=this.gcs.push_p_param(this.gcs.get_p_param(s[1]),!1),o=this.gcs.push_p_param(this.gcs.get_p_param(s[s.length-2]),!1),l=this.gcs.push_p_param(this.gcs.get_p_param(s[s.length-1]),!1),c=[];for(let p of e.weights)c.push(this.gcs.push_p_param(p,!0));let h=[];for(let p of e.knots)h.push(this.gcs.push_p_param(p,!0));let u=wa(this.module,s),d=wa(this.module,c),f=wa(this.module,h),g=wa(this.module,e.mult),x=this.gcs.make_bspline(r,a,o,l,u,d,f,g,e.degree,e.periodic);return this.bspline_gcs_cache.set(e.id,x),x}default:throw new Error(`not-implemented object type: ${t.type}`)}}push_constraint(t){var e,i,s,r;let a=[],o=[],l=Rp[t.type];if(l===void 0)throw new Error(`unknown constraint type: ${t.type}`);let c=-1;t.temporary||(c=this.sketch_index.counter()+1);for(let u of Object.keys(l)){let d=l[u];if(d===void 0)throw new Error(`unknown parameter type: ${d} in constraint ${t.type}`);if(u==="tagId"){a.push(c);continue}if(u==="driving"){a.push((e=t.driving)!==null&&e!==void 0?e:!0);continue}if(u==="internalalignment"&&t.type==="equal"){a.push((i=t.internalalignment)!==null&&i!==void 0?i:Ed.NoInternalAlignment);continue}let f=t[u],g=(s=t.driving)!==null&&s!==void 0?s:!0;if(d==="object_param_or_number"){if(typeof f=="number"){if(!t.driving){let p=this.nondriving_constraint_params_order.get(t.id);p===void 0?this.nondriving_constraint_params_order.set(t.id,[u]):p.push(u)}let x=this.push_p_params(t.id,[f],g);a.push(x)}else if(typeof f=="string"){let x=this.sketch_param_index.get(f);if(x===void 0)throw new Error(`couldn't parse object param: ${u} in constraint ${t.type}: unknown param ${f}`);a.push(x)}else if(typeof f=="boolean")a.push(f);else if(f!==void 0){let x=this.sketch_index.get_primitive_or_fail(f.o_id);if(!sr(x))throw new Error(`Primitive #${f.o_id} (${x.type}) is not supported to be referenced from a constraint.`);let p=this.get_primitive_addr(f.o_id)+Pd(x.type,f.prop);a.push(p)}}else if(d==="object_id"&&typeof f=="string"){let x=this.sketch_index.get_primitive_or_fail(f),p=this.sketch_primitive_to_gcs(x);a.push(p),x.type!=="bspline"&&o.push(p)}else if(d==="primitive_type"&&(typeof f=="number"||typeof f=="boolean"))a.push(f);else throw new Error(`unhandled parameter ${u} type: ${d}`)}let h=t.type;if(this.gcs[`add_constraint_${h}`](...a,(r=t.scale)!==null&&r!==void 0?r:1),this.enable_equal_optimization&&h==="equal"){let[u,d]=[a[0],a[1]];typeof u=="number"&&typeof d=="number"&&(this.gcs.get_is_fixed(u)&&!this.gcs.get_is_fixed(d)?this.gcs.set_p_param(d,this.gcs.get_p_param(u),!1):this.gcs.get_is_fixed(d)&&!this.gcs.get_is_fixed(u)&&this.gcs.set_p_param(u,this.gcs.get_p_param(d),!1))}for(let u of o)u.delete()}get_primitive_addr(t){let e=this.p_param_index.get(t);if(e===void 0)throw new Error(`sketch object ${t} not found in p-params index`);return e}pull_primitive(t){this.p_param_index.has(t.id)?t.type==="point"?this.pull_point(t):t.type==="line"?this.pull_line(t):t.type==="arc"?this.pull_arc(t):t.type==="circle"?this.pull_circle(t):t.type==="ellipse"?this.pull_ellipse(t):t.type==="arc_of_ellipse"?this.pull_arc_of_ellipse(t):t.type==="hyperbola"?this.pull_hyperbola(t):t.type==="arc_of_hyperbola"?this.pull_arc_of_hyperbola(t):t.type==="parabola"?this.pull_parabola(t):t.type==="arc_of_parabola"?this.pull_arc_of_parabola(t):t.type==="bspline"?this.pull_bspline(t):Ad(t)?this.pull_constraint(t):this.sketch_index.set_primitive(t):this.sketch_index.set_primitive(t)}pull_point(t){let e=this.get_primitive_addr(t.id),i=Object.assign(Object.assign({},t),{x:this.gcs.get_p_param(e+Ct.point.x),y:this.gcs.get_p_param(e+Ct.point.y)});this.sketch_index.set_primitive(i)}pull_line(t){this.sketch_index.set_primitive(t)}pull_arc(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{start_angle:this.gcs.get_p_param(e+Ct.arc.start_angle),end_angle:this.gcs.get_p_param(e+Ct.arc.end_angle),radius:this.gcs.get_p_param(e+Ct.arc.radius)}))}pull_circle(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{radius:this.gcs.get_p_param(e+Ct.circle.radius)}))}pull_ellipse(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{radmin:this.gcs.get_p_param(e+Ct.ellipse.radmin)}))}pull_arc_of_ellipse(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{start_angle:this.gcs.get_p_param(e+Ct.arc_of_ellipse.start_angle),end_angle:this.gcs.get_p_param(e+Ct.arc_of_ellipse.end_angle),radmin:this.gcs.get_p_param(e+Ct.arc_of_ellipse.radmin)}))}pull_hyperbola(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{radmin:this.gcs.get_p_param(e+Ct.hyperbola.radmin)}))}pull_arc_of_hyperbola(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{start_angle:this.gcs.get_p_param(e+Ct.arc_of_hyperbola.start_angle),end_angle:this.gcs.get_p_param(e+Ct.arc_of_hyperbola.end_angle),radmin:this.gcs.get_p_param(e+Ct.arc_of_hyperbola.radmin)}))}pull_parabola(t){this.sketch_index.set_primitive(t)}pull_arc_of_parabola(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{start_angle:this.gcs.get_p_param(e+Ct.arc_of_parabola.start_angle),end_angle:this.gcs.get_p_param(e+Ct.arc_of_parabola.end_angle)}))}pull_bspline(t){this.sketch_index.set_primitive(t)}pull_constraint(t){if(t.driving!==!1)return;let e=this.get_primitive_addr(t.id),i=this.nondriving_constraint_params_order.get(t.id);if(!i){console.warn(`No offsets for constraint type ${t.type}`);return}let s=Object.assign({},t);function r(a,o,l){a[o]=l}for(let[a,o]of i.entries()){let l=this.gcs.get_p_param(e+a);r(s,o,l)}this.sketch_index.set_primitive(s)}};var Pp={sqrt:Math.sqrt,abs:Math.abs,round:Math.round,floor:Math.floor,ceil:Math.ceil,min:Math.min,max:Math.max,sin:n=>Math.sin(n*Math.PI/180),cos:n=>Math.cos(n*Math.PI/180),tan:n=>Math.tan(n*Math.PI/180),asin:n=>Math.asin(n)*180/Math.PI,acos:n=>Math.acos(n)*180/Math.PI,atan:n=>Math.atan(n)*180/Math.PI},Id={pi:Math.PI,PI:Math.PI};function jv(n){let t=[],e=0,i=String(n).replace(/,/g,".");for(;e<i.length;){let s=i[e];if(/\s/.test(s)){e++;continue}if(/[0-9.]/.test(s)){let r=e;for(;r<i.length&&/[0-9.eE]/.test(i[r]);)(i[r]==="e"||i[r]==="E")&&(i[r+1]==="-"||i[r+1]==="+")&&r++,r++;let a=Number(i.slice(e,r));if(!Number.isFinite(a))throw new Error(`Numero non valido: ${i.slice(e,r)}`);t.push({t:"n",v:a}),e=r;continue}if(/[A-Za-z_À-ſ]/.test(s)){let r=e;for(;r<i.length&&/[A-Za-z0-9_À-ſ]/.test(i[r]);)r++;let a=i.slice(e,r);if(["mm","deg","gradi"].includes(a)&&t.length&&t[t.length-1].t==="n"){e=r;continue}t.push({t:"id",v:a}),e=r;continue}if("+-*/^();".includes(s)){t.push({t:s}),e++;continue}if(s==="\xB0"){e++;continue}throw new Error(`Carattere non valido: ${s}`)}return t}function Ai(n,t={}){if(typeof n=="number")return n;let e=jv(n);if(!e.length)throw new Error("Valore mancante");let i=0,s=()=>e[i],r=d=>{if(!e[i]||e[i].t!==d)throw new Error(`Atteso "${d}"`);return e[i++]};function a(){let d=e[i++];if(!d)throw new Error("Espressione incompleta");if(d.t==="n")return d.v;if(d.t==="("){let f=h();return r(")"),f}if(d.t==="-")return-o();if(d.t==="+")return o();if(d.t==="id"){if(s()&&s().t==="("){let f=Pp[d.v];if(!f)throw new Error(`Funzione sconosciuta: ${d.v}`);i++;let g=[];if(s()&&s().t!==")")for(g.push(h());s()&&s().t===";";)i++,g.push(h());return r(")"),f(...g)}if(d.v in t)return t[d.v];if(d.v in Id)return Id[d.v];throw new Error(`Parametro sconosciuto: ${d.v}`)}throw new Error("Espressione non valida")}function o(){return l()}function l(){let d=a();return s()&&s().t==="^"?(i++,d**o()):d}function c(){let d=o();for(;s()&&(s().t==="*"||s().t==="/");){let f=e[i++].t,g=o();d=f==="*"?d*g:d/g}return d}function h(){let d=c();for(;s()&&(s().t==="+"||s().t==="-");){let f=e[i++].t,g=c();d=f==="+"?d+g:d-g}return d}let u=h();if(i<e.length)throw new Error("Espressione non valida");if(!Number.isFinite(u))throw new Error("Risultato non numerico");return u}function en(n=[]){let t={},e={};for(let i of n)try{t[i.name]=Ai(i.expr,t)}catch(s){e[i.name]=s.message,t[i.name]=0}return{scope:t,errors:e}}function Ld(n){return/^[A-Za-z_][A-Za-z0-9_]*$/.test(n)&&!(n in Pp)&&!(n in Id)}function be(n,t=3){if(!Number.isFinite(n))return"?";let e=Number(n.toFixed(t));return String(Object.is(e,-0)?0:e)}var Vi=null;async function Lp(n){let t=await Rd(n?{locateFile:()=>n}:void 0);Vi=new Ta(new t.GcsSystem,t)}var Yv={point:["id","type","x","y","fixed"],line:["id","type","p1_id","p2_id"],circle:["id","type","c_id","radius"],arc:["id","type","c_id","radius","start_angle","end_angle","start_id","end_id"]},Dp=Math.PI/180;function Dd(n){switch(n.type){case"p2p_distance":case"p2l_distance":return{k:"distance"};case"circle_diameter":case"arc_diameter":return{k:"diameter"};case"circle_radius":case"arc_radius":return{k:"radius"};case"l2l_angle_ll":return{k:"angle",deg:!0};case"difference":return{k:"difference",signed:!0};case"coordinate_x":return{k:"x"};case"coordinate_y":return{k:"y"};default:return null}}function Ip(n){let t=Yv[n.type],e={};for(let i of t)e[i]=n[i];return n.type==="point"&&(e.fixed=!!(n.fixed||n.ref)),e}function cc(n,t={},e=null){if(!Vi)throw new Error("Solver non pronto");let i=n.geo,s=[],r=i.filter(p=>p.type==="point"),a=i.filter(p=>p.type!=="point");for(let p of r)s.push(Ip(p));for(let p of a)s.push(Ip(p));for(let p of a)p.type==="arc"&&s.push({id:`${p.id}#r`,type:"arc_rules",a_id:p.id});let o=null;for(let p of n.cons||[]){if(p.off)continue;let m={...p};delete m.expr,delete m.lx,delete m.ly,delete m.sign,delete m.off,delete m.grp,delete m.nolabel;let _=Dd(p);if(_&&p.expr!=null)try{let M=Ai(p.expr,t);_.deg&&(M*=Dp),_.signed&&(M*=p.sign||1),m[_.k]=M}catch(M){o=M.message;continue}s.push(m)}(e?Array.isArray(e)?e:[e]:[]).forEach((p,m)=>{s.push({id:`#dx${m}`,type:"coordinate_x",p_id:p.id,x:p.x,temporary:!0}),s.push({id:`#dy${m}`,type:"coordinate_y",p_id:p.id,y:p.y,temporary:!0})}),Vi.clear_data(),Vi.push_primitives_and_params(s);let c=Vi.solve(),h=c===lc.Success||c===lc.Converged,u=null;try{u=Vi.gcs.dof()}catch{}let d=Vi.has_gcs_conflicting_constraints()?Vi.get_gcs_conflicting_constraints():[],f=Vi.has_gcs_redundant_constraints()?Vi.get_gcs_redundant_constraints():[];if(!h)return{ok:h,geo:i,dof:u,conflicting:d,redundant:f,error:o||"Vincoli incompatibili"};Vi.apply_solution();let g=new Map(Vi.sketch_index.get_primitives().map(p=>[p.id,p])),x=i.map(p=>{let m=g.get(p.id);return m?p.type==="point"?{...p,x:m.x,y:m.y}:p.type==="circle"?{...p,radius:m.radius}:p.type==="arc"?{...p,radius:m.radius,start_angle:m.start_angle,end_angle:m.end_angle}:p:p});return{ok:h,geo:x,dof:u,conflicting:d,redundant:f,error:o}}function kd(n,t){let e=new Map(t.map(s=>[s.id,s])),i=s=>e.get(s);switch(n.type){case"p2p_distance":{let s=i(n.p1_id),r=i(n.p2_id);return Math.hypot(r.x-s.x,r.y-s.y)}case"p2l_distance":{let s=i(n.p_id),r=i(n.l_id),a=i(r.p1_id),o=i(r.p2_id),l=o.x-a.x,c=o.y-a.y;return Math.abs((s.x-a.x)*c-(s.y-a.y)*l)/(Math.hypot(l,c)||1)}case"circle_diameter":return i(n.c_id).radius*2;case"arc_diameter":return i(n.a_id).radius*2;case"circle_radius":return i(n.c_id).radius;case"arc_radius":return i(n.a_id).radius;case"l2l_angle_ll":{let s=i(n.l1_id),r=i(n.l2_id),a=l=>{let c=i(l.p1_id),h=i(l.p2_id);return Math.atan2(h.y-c.y,h.x-c.x)},o=a(r)-a(s);for(;o<=-Math.PI;)o+=2*Math.PI;for(;o>Math.PI;)o-=2*Math.PI;return o/Dp}case"difference":{let s=i(n.param1.o_id)[n.param1.prop],r=i(n.param2.o_id)[n.param2.prop];return Math.abs(s-r)}default:return 0}}var pn=Math.PI*2,Zv=1e-7,dc=n=>(n%=pn,n<0?n+pn:n),Aa=(n,t)=>Math.hypot(n[0]-t[0],n[1]-t[1]);function Jv(n){let t=new Map(n.map(s=>[s.id,s])),e=s=>{let r=t.get(s);return[r.x,r.y]},i=[];for(let s of n)if(!(s.construction||s.ref)){if(s.type==="line")i.push({src:s.id,kind:"line",a:e(s.p1_id),b:e(s.p2_id)});else if(s.type==="circle")i.push({src:s.id,kind:"circle",c:e(s.c_id),r:s.radius});else if(s.type==="arc"){let r=e(s.c_id),a=dc(s.start_angle),o=dc(s.end_angle-s.start_angle);o<1e-9&&(o=pn),i.push({src:s.id,kind:"arc",c:r,r:s.radius,a0:a,sw:o})}}return i}function Yn(n,t){if(n.kind==="line")return[n.a[0]+(n.b[0]-n.a[0])*t,n.a[1]+(n.b[1]-n.a[1])*t];let e=n.kind==="circle"?pn*t:n.a0+n.sw*t;return[n.c[0]+n.r*Math.cos(e),n.c[1]+n.r*Math.sin(e)]}function Nd(n,t){if(n.kind==="circle")return dc(t)/pn;let e=dc(t-n.a0);return e<=n.sw+1e-9?Math.min(1,e/n.sw):pn-e<1e-9?0:null}function Kv(n){return n.kind==="line"?Aa(n.a,n.b):n.r*(n.kind==="circle"?pn:n.sw)}function Up(n,t){let e=[];if(n.kind==="line"&&t.kind==="line"){let f=[n.b[0]-n.a[0],n.b[1]-n.a[1]],g=[t.b[0]-t.a[0],t.b[1]-t.a[1]],x=f[0]*g[1]-f[1]*g[0],p=Math.max(Math.hypot(...f),Math.hypot(...g));if(Math.abs(x)<1e-12*p*p)return e;let m=[t.a[0]-n.a[0],t.a[1]-n.a[1]],_=(m[0]*g[1]-m[1]*g[0])/x,M=(m[0]*f[1]-m[1]*f[0])/x,b=1e-9/Math.max(Math.hypot(...f),1e-12)*1e3,T=1e-9/Math.max(Math.hypot(...g),1e-12)*1e3;return _>=-b&&_<=1+b&&M>=-T&&M<=1+T&&e.push([hc(_),hc(M)]),e}if(n.kind==="line")return Up(t,n).map(([f,g])=>[g,f]);if(t.kind==="line"){let f=[t.b[0]-t.a[0],t.b[1]-t.a[1]],g=[t.a[0]-n.c[0],t.a[1]-n.c[1]],x=f[0]*f[0]+f[1]*f[1],p=2*(g[0]*f[0]+g[1]*f[1]),m=g[0]*g[0]+g[1]*g[1]-n.r*n.r,_=p*p-4*x*m;if(x<1e-18)return e;let M=1e-9*x*n.r;if(_<-M)return e;_=Math.max(0,_);let b=Math.sqrt(_),T=_<1e-18?[-p/(2*x)]:[(-p-b)/(2*x),(-p+b)/(2*x)],R=1e-6/Math.sqrt(x);for(let y of T){if(y<-R||y>1+R)continue;let A=Yn(t,hc(y)),z=Nd(n,Math.atan2(A[1]-n.c[1],A[0]-n.c[0]));z!==null&&e.push([z,hc(y)])}return e}let i=t.c[0]-n.c[0],s=t.c[1]-n.c[1],r=Math.hypot(i,s);if(r<1e-9)return e;let a=1e-7*Math.max(n.r,t.r,1);if(r>n.r+t.r+a||r<Math.abs(n.r-t.r)-a)return e;let o=(n.r*n.r-t.r*t.r+r*r)/(2*r),l=n.r*n.r-o*o,c=l>0?Math.sqrt(l):0,h=n.c[0]+o*i/r,u=n.c[1]+o*s/r,d=c<1e-9?[[h,u]]:[[h+c*-s/r,u+c*i/r],[h-c*-s/r,u-c*i/r]];for(let f of d){let g=Nd(n,Math.atan2(f[1]-n.c[1],f[0]-n.c[0])),x=Nd(t,Math.atan2(f[1]-t.c[1],f[0]-t.c[0]));g!==null&&x!==null&&e.push([g,x])}return e}var hc=n=>Math.min(1,Math.max(0,n));function Qv(n,t,e){if(n.kind==="line")return{src:n.src,kind:"line",a:Yn(n,t),b:Yn(n,e)};let i=n.a0+n.sw*t,s=n.a0+n.sw*e;return{src:n.src,kind:"arc",c:n.c,r:n.r,a0:i,sw:s-i,a:Yn(n,t),b:Yn(n,e)}}function tb(n,t){let e=n.a0+n.sw*t;return[n.c[0]+n.r*Math.cos(e),n.c[1]+n.r*Math.sin(e)]}function Ca(n,t){let e=n.e,i=n.fwd?t:1-t;return e.kind==="line"?[e.a[0]+(e.b[0]-e.a[0])*i,e.a[1]+(e.b[1]-e.a[1])*i]:tb(e,i)}function Ud(n){let t=0;for(let e=0,i=n.length;e<i;e++){let s=n[e],r=n[(e+1)%i];t+=s[0]*r[1]-r[0]*s[1]}return t/2}function ps(n,t){let e=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){let r=t[i],a=t[s];r[1]>n[1]!=a[1]>n[1]&&n[0]<(a[0]-r[0])*(n[1]-r[1])/(a[1]-r[1])+r[0]&&(e=!e)}return e}function eb(n,t,e){let i=e[0]-t[0],s=e[1]-t[1],r=i*i+s*s,a=r?((n[0]-t[0])*i+(n[1]-t[1])*s)/r:0;return a=Math.max(0,Math.min(1,a)),Math.hypot(n[0]-t[0]-a*i,n[1]-t[1]-a*s)}function kp(n,t){let e=1/0;for(let i=0;i<t.length;i++)e=Math.min(e,eb(n,t[i],t[(i+1)%t.length]));return e}function ib(n,t){let e=n.e;if(e.kind==="line"){t.push(n.fwd?e.a:e.b);return}let i=Math.max(2,Math.ceil(Math.abs(e.sw)/pn*96));for(let s=0;s<i;s++)t.push(Ca(n,s/i))}function nb(n){let t=n.e;return t.kind==="line"?n.fwd?{k:"line",a:t.a,b:t.b,src:t.src}:{k:"line",a:t.b,b:t.a,src:t.src}:{k:"arc",a:Ca(n,0),b:Ca(n,1),m:Ca(n,.5),c:t.c,r:t.r,src:t.src}}function uc(n){let t=Jv(n).filter(_=>Kv(_)>Zv),e=t.length,i=t.map(_=>_.kind==="circle"?[]:[0,1]);for(let _=0;_<e;_++)for(let M=_+1;M<e;M++)for(let[b,T]of Up(t[_],t[M]))i[_].push(b),i[M].push(T);let s=[],r=[];t.forEach((_,M)=>{let b=i[M].map(T=>_.kind==="circle"?T%1:T).sort((T,R)=>T-R);if(b=b.filter((T,R)=>R===0||T-b[R-1]>1e-9),_.kind==="circle"){if(b.length>1&&1-b[b.length-1]+b[0]<1e-9&&b.pop(),!b.length){r.push(_);return}for(let T=0;T<b.length;T++){let R=b[T],y=T+1<b.length?b[T+1]:b[0]+1;s.push({src:_.src,kind:"arc",c:_.c,r:_.r,a0:pn*R,sw:pn*(y-R),a:Yn(_,R),b:Yn(_,y%1)})}return}for(let T=0;T+1<b.length;T++)s.push(Qv(_,b[T],b[T+1]))});let a=s.filter(_=>(_.kind==="line"?Aa(_.a,_.b):Math.abs(_.sw)*_.r)>1e-6),o=[],l=_=>{for(let M=0;M<o.length;M++)if(Aa(o[M],_)<1e-5)return M;return o.push(_),o.length-1};for(let _ of a)_.u=l(_.a),_.v=l(_.b),_.len=_.kind==="line"?Aa(_.a,_.b):Math.abs(_.sw)*_.r;let c=a.slice();for(;;){let _=new Array(o.length).fill(0);for(let b of c)_[b.u]++,_[b.v]++;let M=c.filter(b=>_[b.u]>1&&_[b.v]>1);if(M.length===c.length)break;c=M}let h=o.map(()=>[]),u=[];for(let _ of c){let M={e:_,fwd:!0,from:_.u,to:_.v},b={e:_,fwd:!1,from:_.v,to:_.u};M.twin=b,b.twin=M,u.push(M,b),h[_.u].push(M),h[_.v].push(b)}h.forEach((_,M)=>{if(!_.length)return;let b=Math.min(..._.map(T=>T.e.len));for(let T of _){let R=Math.min(.02,.02*b/T.e.len),y=Ca(T,R);T.ang=Math.atan2(y[1]-o[M][1],y[0]-o[M][0])}_.sort((T,R)=>T.ang-R.ang)});let d=o.map((_,M)=>M),f=_=>d[_]===_?_:d[_]=f(d[_]);for(let _ of c)d[f(_.u)]=f(_.v);let g=[],x=new Set;for(let _ of u){if(x.has(_))continue;let M=[],b=_,T=0;for(;!x.has(b)&&T++<1e5;){x.add(b),M.push(b);let y=h[b.to],A=y.indexOf(b.twin);b=y[(A-1+y.length)%y.length]}let R=[];for(let y of M)ib(y,R);g.push({hes:M,poly:R,area:Ud(R),comp:f(_.from),segs:M.map(nb)})}for(let _ of r){let M=[];for(let R=0;R<96;R++)M.push(Yn(_,R/96));let b=[{k:"circle",c:_.c,r:_.r,src:_.src}],T=`c${_.src}`;g.push({poly:M,area:Ud(M),comp:T,segs:b}),g.push({poly:M.slice().reverse(),area:-Ud(M),comp:T,segs:b,outer:!0})}let p=g.filter(_=>_.area>1e-9&&!_.outer),m=g.filter(_=>_.area<-1e-9);for(let _ of m){let M=null;for(let b of p)b.comp!==_.comp&&ps(_.poly[0],b.poly)&&(!M||b.area<M.area)&&(M=b);M&&(M.holes||=[]).push(_)}return p.map(_=>{let M=_.holes||[],b=Np(_.segs)+(M.length?"/"+M.map(R=>Np(R.segs)).sort().join("/"):""),T=M.map(R=>R.poly);return{key:b,segs:_.segs,holes:M.map(R=>R.segs),poly:_.poly,holePolys:T,area:_.area-M.reduce((R,y)=>R+Math.abs(y.area),0),sample:sb(_.poly,T)}}).sort((_,M)=>M.area-_.area)}function Np(n){return[...new Set(n.map(t=>t.src))].sort().join(",")}function sb(n,t){let e=1/0,i=1/0,s=-1/0,r=-1/0;for(let[c,h]of n)e=Math.min(e,c),i=Math.min(i,h),s=Math.max(s,c),r=Math.max(r,h);let a=null,o=-1,l=28;for(let c=1;c<l;c++)for(let h=1;h<l;h++){let u=[e+(s-e)*c/l,i+(r-i)*h/l];if(!ps(u,n)||t.some(f=>ps(u,f)))continue;let d=Math.min(kp(u,n),...t.map(f=>kp(u,f)));d>o&&(o=d,a=u)}return a||n[0]}function rb(n,t){return ps(t,n.poly)&&!n.holePolys.some(e=>ps(t,e))}function Ra(n,t){let e=n.filter(s=>s.key===t.key);if(e.length===1)return e[0];let i=e.length?e:n;if(t.seed){let s=i.find(r=>rb(r,t.seed));if(s)return s;if(e.length){let r=null,a=1/0;for(let o of e){let l=Aa(o.sample,t.seed);l<a&&(a=l,r=o)}return r}}return e[0]||null}var ab={coincident:"Coincidente: tocca due punti, oppure un punto e la linea/curva su cui deve stare",horizontal:"Orizzontale: tocca una linea (o due punti da allineare)",vertical:"Verticale: tocca una linea (o due punti da allineare)",parallel:"Parallela: tocca due linee",perpendicular:"Perpendicolare: tocca due linee",tangent:"Tangente: tocca una linea e un cerchio/arco, o due curve",equal:"Uguale: tocca due linee (stessa lunghezza) o due cerchi/archi (stesso raggio)",midpoint:"Punto medio: tocca un punto e poi la linea",concentric:"Concentrico: tocca due cerchi o archi",symmetric:"Simmetria: tocca due punti e poi la linea di simmetria",fix:"Fissa: tocca i punti da bloccare (tocca di nuovo per sbloccare)"},Ee=Math.PI*2,Fp=()=>[{id:"O",type:"point",x:0,y:0,fixed:!0,ref:!0},{id:"X1",type:"point",x:1,y:0,fixed:!0,ref:!0},{id:"Y1",type:"point",x:0,y:1,fixed:!0,ref:!0},{id:"AX",type:"line",p1_id:"O",p2_id:"X1",ref:!0},{id:"AY",type:"line",p1_id:"O",p2_id:"Y1",ref:!0}];function gc(){return Fp()}var fc=new Set(["X1","Y1"]),ob={horizontal_l:"H",vertical_l:"V",horizontal_pp:"H",vertical_pp:"V",parallel:"\u2225",perpendicular_ll:"\u22A5",tangent_lc:"T",tangent_la:"T",tangent_cc:"T",tangent_aa:"T",tangent_ca:"T",equal_length:"=",equal_radius_cc:"=",equal_radius_aa:"=",equal_radius_ca:"=",p2p_symmetric_ppp:"M",p2p_symmetric_ppl:"\u21CB",p2p_coincident:"\u25CF"},lb=new Set(["p2p_distance","p2l_distance","circle_diameter","arc_diameter","circle_radius","arc_radius","l2l_angle_ll","difference"]),pc=class{constructor({host:t,viewport:e,onChange:i,toast:s,promptValue:r,getScope:a,onExit:o}){this.host=t,this.vp=e,this.onChange=i,this.toast=s,this.promptValue=r,this.getScope=a,this.onExit=o,this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.classList.add("sketch-svg"),t.appendChild(this.svg),this.active=!1,this.pointers=new Map,this.bind()}open(t,e){this.sk=JSON.parse(JSON.stringify(t)),this.sk.geo.some(i=>i.id==="O")||(this.sk.geo=[...Fp(),...this.sk.geo]),this.sk.cons||=[],this.frame=e,this.seq=0;for(let i of[...this.sk.geo,...this.sk.cons]){let s=/^[a-z](\d+)$/.exec(i.id);s&&(this.seq=Math.max(this.seq,+s[1]))}this.sel=new Set,this.tool="line",this.state=null,this.undoStack=[],this.redoStack=[],this.active=!0,this.svg.style.display="block",this.view=this.fitView(),this.vp.enterSketch(e,this.view),this.vp.onResize=()=>this.render(),this.resolve(),this.render(),this.emit()}close(){return this.active=!1,this.svg.style.display="none",this.svg.innerHTML="",this.vp.onResize=null,this.vp.exitSketch(),this.sk}fitView(){let t=this.vp.canvas.getBoundingClientRect();if(!this.sk.geo.filter(c=>c.type==="point"&&!c.ref).length)return{cx:0,cy:0,s:Math.min(t.width,t.height)/160};let i=1/0,s=1/0,r=-1/0,a=-1/0;for(let c of this.sk.geo)if(c.type==="point"&&!fc.has(c.id)&&(i=Math.min(i,c.x),r=Math.max(r,c.x),s=Math.min(s,c.y),a=Math.max(a,c.y)),c.type==="circle"||c.type==="arc"){let h=this.P(c.c_id);i=Math.min(i,h.x-c.radius),r=Math.max(r,h.x+c.radius),s=Math.min(s,h.y-c.radius),a=Math.max(a,h.y+c.radius)}let o=Math.max(r-i,10),l=Math.max(a-s,10);return{cx:(i+r)/2,cy:(s+a)/2,s:Math.min(t.width/(o*1.6),t.height/(l*1.6))}}get W(){return this.vp.w}get H(){return this.vp.h}toS(t,e){let i=this.view;return[this.W/2+(t-i.cx)*i.s,this.H/2-(e-i.cy)*i.s]}toK(t,e){let i=this.view;return[(t-this.W/2)/i.s+i.cx,-(e-this.H/2)/i.s+i.cy]}P(t){return this.sk.geo.find(e=>e.id===t)}nid(t="g"){return this.seq+=1,`${t}${this.seq}`}snapshot(){return JSON.stringify({geo:this.sk.geo,cons:this.sk.cons})}push(){this.undoStack.push(this.snapshot()),this.undoStack.length>200&&this.undoStack.shift(),this.redoStack=[]}undo(){this.undoStack.length&&(this.redoStack.push(this.snapshot()),Object.assign(this.sk,JSON.parse(this.undoStack.pop())),this.sel.clear(),this.state=null,this.resolve(),this.changed())}redo(){this.redoStack.length&&(this.undoStack.push(this.snapshot()),Object.assign(this.sk,JSON.parse(this.redoStack.pop())),this.sel.clear(),this.resolve(),this.changed())}resolve(t=null){let e=cc(this.sk,this.getScope(),t);return this.status=e,e.ok&&(this.sk.geo=e.geo),e}changed(){this.regions=null,this.render(),this.emit()}emit(){this.onChange&&this.onChange(this.statusInfo())}statusInfo(){let t=this.status||{};return{hint:this.hintText(),exact:this.exactFields(),cmd:this.cmdInfo(),lastPointer:this.lastPointer,dof:t.dof,ok:t.ok!==!1,conflicting:t.conflicting||[],tool:this.tool,sel:this.sel.size,canUndo:this.undoStack.length>0,canRedo:this.redoStack.length>0,selTypes:this.selTypes()}}attempt(t,e="Vincolo in conflitto con quelli esistenti"){let i=this.snapshot();t();let s=this.resolve();return!s.ok||s.conflicting&&s.conflicting.length?(Object.assign(this.sk,JSON.parse(i)),this.resolve(),this.toast(e,"warn"),this.changed(),!1):(this.undoStack.push(i),this.redoStack=[],this.changed(),!0)}setTool(t){if(t.startsWith("cmd:")){this.clearLocks(),this.startCmd(t.slice(4));return}this.cmd=null,this.clearLocks(),this.tool=t,this.state=null,t!=="select"&&t!=="dim"&&this.sel.clear(),this.render(),this.emit()}tolFor(t){return t==="touch"?22:t==="pen"?13:9}hit(t,e,i,s={}){let r=this.tolFor(i),[a,o]=this.toK(t,e),l=this.view.s,c=null,h=r,u=(d,f)=>{d<h&&(h=d,c=f)};if(s.points!==!1){for(let d of this.sk.geo){if(d.type!=="point"||fc.has(d.id)||s.exclude&&s.exclude.has(d.id))continue;let[f,g]=this.toS(d.x,d.y);u(Math.hypot(f-t,g-e)*.8,{kind:"point",id:d.id})}if(c)return c}if(s.dims!==!1&&this.labelBoxes){for(let d of this.labelBoxes)if(t>=d.x0-4&&t<=d.x1+4&&e>=d.y0-4&&e<=d.y1+4)return{kind:"dim",id:d.id}}if(s.glyphs!==!1&&this.glyphBoxes){for(let d of this.glyphBoxes)if(Math.hypot(t-d.x,e-d.y)<Math.max(12,r*.7))return{kind:"cons",id:d.id}}for(let d of this.sk.geo)if(!(d.type==="point"||s.exclude&&s.exclude.has(d.id))){if(d.ref){if(s.axes===!1)continue;let f=d.id==="AX"?Math.abs(o)*l:Math.abs(a)*l;u(f+2,{kind:"curve",id:d.id,ref:!0});continue}if(d.type==="line"){let f=this.P(d.p1_id),g=this.P(d.p2_id);u(mb([a,o],[f.x,f.y],[g.x,g.y])*l,{kind:"curve",id:d.id})}else if(d.type==="circle"){let f=this.P(d.c_id);u(Math.abs(Math.hypot(a-f.x,o-f.y)-d.radius)*l,{kind:"curve",id:d.id})}else if(d.type==="arc"){let f=this.P(d.c_id),g=Math.atan2(o-f.y,a-f.x);gb(g,d.start_angle,d.end_angle)&&u(Math.abs(Math.hypot(a-f.x,o-f.y)-d.radius)*l,{kind:"curve",id:d.id})}}return c}placement(t,e,i,s){let r=this.hit(t,e,i,{dims:!1,glyphs:!1,exclude:s}),[a,o]=this.toK(t,e);if(r&&r.kind==="point"){let l=this.P(r.id);return{x:l.x,y:l.y,point:r.id}}if(r&&r.kind==="curve"){let l=this.P(r.id);if(l.type==="line"){let c=this.P(l.p1_id),h=this.P(l.p2_id);if(l.ref)l.id==="AX"?o=0:a=0;else{let u=Bp([a,o],[c.x,c.y],[h.x,h.y]);a=c.x+(h.x-c.x)*u,o=c.y+(h.y-c.y)*u}}else{let c=this.P(l.c_id),h=Math.atan2(o-c.y,a-c.x);a=c.x+l.radius*Math.cos(h),o=c.y+l.radius*Math.sin(h)}return{x:a,y:o,curve:r.id}}return{x:a,y:o}}materialize(t){if(t.point)return t.point;let e=this.nid("p");if(this.sk.geo.push({id:e,type:"point",x:t.x,y:t.y,fixed:!1}),t.curve){let i=this.P(t.curve),s=this.nid("c");i.type==="line"?this.sk.cons.push({id:s,type:"point_on_line_pl",p_id:e,l_id:i.id}):i.type==="circle"?this.sk.cons.push({id:s,type:"point_on_circle",p_id:e,c_id:i.id}):this.sk.cons.push({id:s,type:"point_on_arc",p_id:e,a_id:i.id})}return e}addLine(t,e,i=!0){let s=this.nid("l");if(this.sk.geo.push({id:s,type:"line",p1_id:t,p2_id:e}),i){let r=this.P(t),a=this.P(e),o=Math.abs(Math.atan2(a.y-r.y,a.x-r.x)),l=3*Math.PI/180,c=o<l||Math.abs(o-Math.PI)<l,h=Math.abs(o-Math.PI/2)<l;c?this.sk.cons.push({id:this.nid("c"),type:"horizontal_l",l_id:s}):h&&this.sk.cons.push({id:this.nid("c"),type:"vertical_l",l_id:s})}return s}down(t,e,i){let s=this.tool,r=()=>this.placement(e,i,t.pointerType);if(this.gesture={sx:e,sy:i,moved:!1,type:t.pointerType},this.lastPointer=t.pointerType,s==="select"){let a=this.hit(e,i,t.pointerType);if(this.gesture.hit=a,a&&a.kind==="point"){let o=this.P(a.id);!o.ref&&!o.fixed&&(this.gesture.drag={kind:"point",id:a.id,before:this.snapshot()})}else if(a&&a.kind==="curve"&&!a.ref){let o=this.P(a.id),[l,c]=this.toK(e,i);if(o.type==="line"){let h=this.P(o.p1_id),u=this.P(o.p2_id);this.gesture.drag={kind:"line",ids:[h.id,u.id],off:[[h.x-l,h.y-c],[u.x-l,u.y-c]],before:this.snapshot()}}else this.gesture.drag={kind:"radius",id:o.id,before:this.snapshot()}}else a&&a.kind==="dim"?this.gesture.drag={kind:"label",id:a.id,before:this.snapshot()}:this.gesture.pan={cx:this.view.cx,cy:this.view.cy};return}if(this.isTapTool()){this.gesture.pan={cx:this.view.cx,cy:this.view.cy};return}s==="line"?(this.state?this.state.fresh=!1:this.state={kind:"line",start:r(),fresh:!0},this.state.cur=r()):s==="rect"||s==="circle"||s==="rect3"||s==="circle2"?(this.state?this.state.fresh=!1:this.state={kind:s,start:r(),fresh:!0},this.state.cur=r()):s==="arc"?(this.state?this.state.fresh=!1:this.state={kind:"arc",pts:[r()],fresh:!0},this.state.cur=r()):s==="point"&&(this.state={kind:"point",cur:r()}),this.render()}move(t,e,i){let s=this.gesture;if(s&&Math.hypot(e-s.sx,i-s.sy)>8&&(s.moved=!0),this.tool==="select"||this.isTapTool()){if(!s)return;if(s.pan&&s.moved){this.view.cx=s.pan.cx-(e-s.sx)/this.view.s,this.view.cy=s.pan.cy+(i-s.sy)/this.view.s,this.vp.setSketchView(this.view),this.render();return}s.drag&&s.moved&&this.dragTo(s.drag,e,i);return}this.trackCursor(e,i,t.pointerType)}trackCursor(t,e,i){this.lastPointer=i,this.lastCursor=[t,e],!(!this.state||this.tool==="select"||this.isTapTool())&&(this.state.cur=this.applyLocks(this.placement(t,e,i)),this.render(),this.onCursor&&this.onCursor())}applyLocks(t){let e=this.locks||{},i=this.state;if(!i||!Object.keys(e).length)return t;if(i.kind==="line"&&(i.lastId||i.start)){let s=i.lastId?this.P(i.lastId):i.start,r=t.x-s.x,a=t.y-s.y,o=Math.hypot(r,a),l=Math.atan2(a,r);return e.ang!=null?(l=e.ang*Math.PI/180,o=e.len!=null?e.len:Math.max(r*Math.cos(l)+a*Math.sin(l),.001)):e.len!=null&&(o=e.len),{x:s.x+o*Math.cos(l),y:s.y+o*Math.sin(l)}}if(i.kind==="rect"&&i.start){let s=i.start,r=t.x<s.x?-1:1,a=t.y<s.y?-1:1;return{x:e.w!=null?s.x+r*e.w:t.x,y:e.h!=null?s.y+a*e.h:t.y}}if(i.kind==="circle"&&i.start&&e.d!=null){let s=i.start,r=mn([t.x-s.x,t.y-s.y]);return{x:s.x+(r[0]||1)*e.d/2,y:s.y+r[1]*e.d/2}}return t}setLock(t,e){if(this.locks||={},this.lockExpr||={},e==null||String(e).trim()==="")delete this.locks[t],delete this.lockExpr[t];else{let i;try{i=this.evalExpr(e)}catch{return!1}this.locks[t]=i,this.lockExpr[t]=String(e).trim()}return this.lastCursor&&this.trackCursor(...this.lastCursor,this.lastPointer||"mouse"),!0}clearLocks(){this.locks={},this.lockExpr={}}hasLocks(){return!!(this.lockExpr&&Object.keys(this.lockExpr).length)}exactAnchor(){let t=this.state,e=t&&(t.cur||t.start);return e?this.toS(e.x,e.y):null}up(t,e,i){this.upInner(t,e,i),this.emit()}upInner(t,e,i){let s=this.gesture;if(this.gesture=null,this.tool==="select"){if(!s)return;if(s.drag&&s.moved){this.undoStack.push(s.drag.before),this.redoStack=[],this.changed();return}s.moved||this.tapSelect(s.hit);return}if(this.isTapTool()){if(s&&s.moved)return;this.tool==="dim"?this.tapDim(e,i,t.pointerType):this.tool==="trim"?this.tapTrim(e,i,t.pointerType):this.tool.startsWith("cmd:")?this.tapCmd(e,i,t.pointerType):this.tapConsTool(e,i,t.pointerType);return}let r=this.state;if(!r)return;let a=this.placement(e,i,t.pointerType);if(this.hasLocks()&&!r.fresh&&(r.kind==="line"||r.kind==="rect"||r.kind==="circle")){r.cur=this.applyLocks(a),this.placeExact({...this.lockExpr},o=>this.evalExpr(o));return}if(r.kind==="point"){a.point||(this.push(),this.materialize(a),this.resolve()),this.state=null,this.changed();return}if(r.fresh&&!(s&&s.moved)){r.fresh=!1,this.render();return}if(r.kind==="line"){let o=r.lastId?this.P(r.lastId):r.start;if(Math.hypot(a.x-o.x,a.y-o.y)*this.view.s<4){this.render();return}this.push();let l=r.lastId||this.materialize(r.start),c=this.materialize(a);this.addLine(l,c),this.resolve();let h=r.firstId||l;c===h?(this.state=null,this.toast("Profilo chiuso","ok")):this.state={kind:"line",lastId:c,firstId:h},this.changed();return}if(r.kind==="rect"||r.kind==="circle"){let o=r.start;if(Math.hypot(a.x-o.x,a.y-o.y)*this.view.s<4){this.render();return}if(this.push(),r.kind==="rect")this.makeRect(o,a);else{let l=this.materialize(o),c=this.P(l);this.sk.geo.push({id:this.nid("k"),type:"circle",c_id:l,radius:Math.hypot(a.x-c.x,a.y-c.y)})}this.state=null,this.resolve(),this.changed();return}if(r.kind==="arc"){if(r.pts.push(a),r.pts.length<3){this.render();return}this.push(),this.makeArc(r.pts[0],r.pts[1],r.pts[2]),this.state=null,this.resolve(),this.changed()}}makeRect(t,e){let i=this.materialize(t),s=this.materialize(e),r=this.P(i),a=this.P(s),o=this.nid("p"),l=this.nid("p");this.sk.geo.push({id:o,type:"point",x:a.x,y:r.y,fixed:!1},{id:l,type:"point",x:r.x,y:a.y,fixed:!1});let c=this.addLine(i,o,!1),h=this.addLine(o,s,!1),u=this.addLine(s,l,!1),d=this.addLine(l,i,!1);return this.sk.cons.push({id:this.nid("c"),type:"horizontal_l",l_id:c},{id:this.nid("c"),type:"horizontal_l",l_id:u},{id:this.nid("c"),type:"vertical_l",l_id:h},{id:this.nid("c"),type:"vertical_l",l_id:d}),{p1:i,p2:o,p3:s,p4:l,l1:c,l2:h,l3:u,l4:d}}isTapTool(){return this.tool==="dim"||this.tool==="trim"||this.tool.startsWith("cmd:")||this.tool.startsWith("c:")}hintText(){let t=this.tool,e=this.state;if(t==="line")return e?"Tocca il punto successivo \xB7 torna al primo punto per chiudere \xB7 doppio tocco o Esc per finire":"Tocca (o trascina) per il primo punto della linea";if(t==="rect")return e?"Tocca l'angolo opposto (o scrivi le misure qui sotto)":"Tocca il primo angolo del rettangolo";if(t==="circle")return e?"Tocca per il raggio (o scrivi il diametro qui sotto)":"Tocca il centro del cerchio";if(t==="arc")return e?e.pts.length===1?"Tocca la fine dell'arco":"Tocca un punto per cui passa l'arco":"Tocca l'inizio dell'arco";if(t==="point")return"Tocca per aggiungere un punto (serve ad esempio come centro dei fori)";if(t==="dim")return e&&e.items&&e.items.length?"Tocca un secondo elemento, oppure un punto vuoto per quotare la lunghezza":"Tocca una linea, un cerchio o due punti da quotare";if(t==="select")return"Tocca per selezionare \xB7 trascina punti e linee \xB7 tocca una quota per cambiarla";if(t==="trim")return"Taglia: tocca il pezzo di linea o curva da togliere (si taglia tra gli incroci)";if(t.startsWith("cmd:")&&this.cmd){let i=this.cmd.spec.fields.find(s=>s.k===this.cmd.active);return i?`${this.cmd.spec.title} \xB7 ${i.label}: ${i.hint}`:""}return t.startsWith("c:")&&ab[t.slice(2)]||""}exactFields(){if(!this.state)return null;let e=this.exactRaw();if(e)for(let i of e.fields)Math.abs(Number(i.ph))<1e-9&&(i.ph="");return e}exactRaw(){let t=this.state;if(t.kind==="line"&&(t.lastId||t.start)){let e=t.lastId?this.P(t.lastId):t.start,i=t.cur||e;return{kind:"line",fields:[{k:"len",label:"Lunghezza",unit:"mm",ph:be(Math.hypot(i.x-e.x,i.y-e.y),2)},{k:"ang",label:"Angolo",unit:"\xB0",ph:be(Math.atan2(i.y-e.y,i.x-e.x)*180/Math.PI,1)}]}}if(t.kind==="rect"&&t.start){let e=t.cur||t.start;return{kind:"rect",fields:[{k:"w",label:"Larghezza",unit:"mm",ph:be(Math.abs(e.x-t.start.x),2)},{k:"h",label:"Altezza",unit:"mm",ph:be(Math.abs(e.y-t.start.y),2)}]}}if(t.kind==="circle"&&t.start){let e=t.cur||t.start;return{kind:"circle",fields:[{k:"d",label:"Diametro",unit:"mm",ph:be(2*Math.hypot(e.x-t.start.x,e.y-t.start.y),2)}]}}return null}placeExact(t,e){let i=this.state,s=this.exactFields();if(!s)return!1;let r=o=>t[o]!=null&&String(t[o]).trim()!==""?{expr:String(t[o]).trim(),v:e(t[o])}:null,a=o=>Number(s.fields.find(l=>l.k===o).ph);if(this.push(),s.kind==="line"){let o=r("len"),l=r("ang"),c=o?o.v:a("len"),h=l?l.v:a("ang");if(!(c>0))return this.undoStack.pop(),!1;let u=i.lastId||this.materialize(i.start),d=this.P(u),f=this.nid("p"),g=h*Math.PI/180;this.sk.geo.push({id:f,type:"point",x:d.x+c*Math.cos(g),y:d.y+c*Math.sin(g),fixed:!1});let x=this.addLine(u,f,!l),p=this.P(f),m=[(d.x+p.x)/2,(d.y+p.y)/2],_=18/this.view.s;if(o&&this.sk.cons.push({id:this.nid("d"),type:"p2p_distance",p1_id:u,p2_id:f,distance:c,expr:o.expr,lx:m[0]-Math.sin(g)*_,ly:m[1]+Math.cos(g)*_}),l){let M=(h%180+180)%180;M<1e-9?this.sk.cons.push({id:this.nid("c"),type:"horizontal_l",l_id:x}):Math.abs(M-90)<1e-9?this.sk.cons.push({id:this.nid("c"),type:"vertical_l",l_id:x}):this.sk.cons.push({id:this.nid("d"),type:"l2l_angle_ll",l1_id:"AX",l2_id:x,angle:g,expr:l.expr,lx:d.x+Math.cos(g/2)*_*2.5,ly:d.y+Math.sin(g/2)*_*2.5})}this.state={kind:"line",lastId:f,firstId:i.firstId||u}}else if(s.kind==="rect"){let o=r("w"),l=r("h"),c=i.cur||i.start,h=c.x<i.start.x?-1:1,u=c.y<i.start.y?-1:1,d=o?o.v:a("w"),f=l?l.v:a("h");if(!(d>0&&f>0))return this.undoStack.pop(),!1;let g=this.makeRect(i.start,{x:i.start.x+h*d,y:i.start.y+u*f}),x=this.P(g.p1),p=this.P(g.p3),m=18/this.view.s;o&&this.sk.cons.push({id:this.nid("d"),type:"p2p_distance",p1_id:g.p1,p2_id:g.p2,distance:d,expr:o.expr,lx:(x.x+p.x)/2,ly:Math.min(x.y,p.y)-m}),l&&this.sk.cons.push({id:this.nid("d"),type:"p2p_distance",p1_id:g.p2,p2_id:g.p3,distance:f,expr:l.expr,lx:Math.max(x.x,p.x)+m,ly:(x.y+p.y)/2}),this.state=null}else if(s.kind==="circle"){let o=r("d"),l=o?o.v:a("d");if(!(l>0))return this.undoStack.pop(),!1;let c=this.materialize(i.start),h=this.nid("k");this.sk.geo.push({id:h,type:"circle",c_id:c,radius:l/2});let u=this.P(c);o&&this.sk.cons.push({id:this.nid("d"),type:"circle_diameter",c_id:h,diameter:l,expr:o.expr,lx:u.x+l*.45,ly:u.y+l*.45}),this.state=null}return this.clearLocks(),this.resolve(),this.changed(),!0}consReady(t){let e=this.selTypes(),i=e.line+e.axis,s=e.circle+e.arc,r=e.point,a=this.sel.size;switch(t){case"coincident":return r===2&&a===2||r===1&&i+s===1&&a===2;case"horizontal":case"vertical":return e.line>=1&&a===e.line||r===2&&a===2;case"parallel":case"perpendicular":return i===2&&a===2;case"tangent":return(i===1&&s===1||s===2)&&a===2;case"equal":return(e.line===2||s===2)&&a===2;case"midpoint":return r===1&&e.line===1&&a===2;case"concentric":return(s===2||s===1&&r===1)&&a===2;case"symmetric":return r===2&&i===1&&a===3;case"fix":return r>=1&&a===r;default:return!1}}tapConsTool(t,e,i){let s=this.tool.slice(2),r=this.hit(t,e,i,{dims:!1,glyphs:!1});if(!r){this.sel.clear(),this.render(),this.emit();return}this.sel.has(r.id)?this.sel.delete(r.id):this.sel.add(r.id);let a={symmetric:3}[s]||2;if(this.sel.size>a&&(this.sel.clear(),this.sel.add(r.id)),this.consReady(s)){this.applyConstraint(s);return}this.render(),this.emit()}startCmd(t){let e=zd[t],i={type:t,spec:e,vals:{},active:null};for(let r of e.fields)i.vals[r.k]=r.kind==="pick"?[]:r.kind==="toggle"?!1:r.init;let s=[...this.sel];this.cmd=i,this.tool="cmd:"+t,this.state=null;for(let r of s)if(!(e.fields.some(a=>a.what==="corner")&&this.P(r)&&this.P(r).type==="line"))for(let a of e.fields){if(a.kind!=="pick")continue;let o=this.cmdAccept(a,r,null);if(o&&o.length&&(a.multi||!i.vals[a.k].length)){for(let l of o)i.vals[a.k].includes(l)||i.vals[a.k].push(l);break}}if(t==="sfillet"||t==="schamfer"){let r=s.map(a=>this.P(a)).filter(a=>a&&a.type==="line"&&!a.ref);for(let a=0;a<r.length;a++)for(let o=a+1;o<r.length;o++){let l=r[a],c=r[o],h=[l.p1_id,l.p2_id].find(u=>u===c.p1_id||u===c.p2_id);h&&this.cornerInfo(h)&&!i.vals.corners.includes(h)&&i.vals.corners.push(h)}}i.active=(e.fields.find(r=>r.kind==="pick"&&!i.vals[r.k].length)||e.fields.find(r=>r.kind==="pick")||{}).k,this.syncCmdSel(),this.render(),this.emit()}cmdAccept(t,e,i){let s=this.P(e);if(!s)return null;if(t.what==="line")return s.type==="line"?[e]:null;if(t.what==="curves")return s.ref?null:[e];if(t.what==="corner"){if(s.type==="point")return this.cornerInfo(e)?[e]:null;if(s.type==="line"&&!s.ref){let r=[s.p1_id,s.p2_id].filter(l=>this.cornerInfo(l));if(!r.length)return null;if(!i||r.length===1)return[r[0]];let[a,o]=this.toK(...i);return r.sort((l,c)=>Math.hypot(this.P(l).x-a,this.P(l).y-o)-Math.hypot(this.P(c).x-a,this.P(c).y-o)),[r[0]]}return null}return t.what==="chain"&&s.type!=="point"&&!s.ref?this.chainOf(e):null}tapCmd(t,e,i){let s=this.cmd,r=s.spec.fields.find(h=>h.k===s.active);if(!r)return;let a=this.hit(t,e,i,{dims:!1,glyphs:!1,axes:r.what==="line",points:r.what!=="chain"});if(!a)return;let o=this.cmdAccept(r,a.id,[t,e]);if(!o){this.toast(r.hint,"warn");return}let l=s.vals[r.k],c=o.every(h=>l.includes(h));if(!r.multi)s.vals[r.k]=c?[]:o.slice(0,1);else if(c)s.vals[r.k]=l.filter(h=>!o.includes(h));else for(let h of o)l.includes(h)||l.push(h);if(!r.multi&&s.vals[r.k].length){let h=s.spec.fields.find(u=>u.kind==="pick"&&u.k!==r.k&&!s.vals[u.k].length);h&&(s.active=h.k)}this.syncCmdSel(),this.render(),this.emit()}syncCmdSel(){if(this.sel.clear(),!!this.cmd){for(let t of this.cmd.spec.fields)if(t.kind==="pick"&&t.what!=="line")for(let e of this.cmd.vals[t.k])this.sel.add(e)}}cmdSetActive(t){this.cmd&&(this.cmd.active=t,this.render(),this.emit())}cmdClear(t){this.cmd&&(this.cmd.vals[t]=[],this.cmd.active=t,this.syncCmdSel(),this.render(),this.emit())}cmdSetVal(t,e){this.cmd&&(this.cmd.vals[t]=e,this.render(),this.emit())}cmdReady(){let t=this.cmd;return!!t&&t.spec.fields.every(e=>e.kind!=="pick"||t.vals[e.k].length)}cmdCancel(){this.cmd=null,this.sel.clear(),this.tool="select",this.render(),this.emit()}cmdInfo(){let t=this.cmd;return t?{type:t.type,title:t.spec.title,active:t.active,ready:this.cmdReady(),fields:t.spec.fields.map(e=>({...e,value:t.vals[e.k]}))}:null}cmdApply(){let t=this.cmd;if(!this.cmdReady()){this.toast("Completa i campi del comando","warn");return}let e=t.vals,i=null,s=null,r=t.spec.fields.find(o=>o.kind==="num");if(r){s=String(e[r.k]).trim();try{i=this.evalExpr(s)}catch{this.toast("Valore non valido","warn");return}if(!(i>0)){this.toast("Il valore deve essere maggiore di zero","warn");return}}let a=!1;if(t.type==="smirror")a=this.attempt(()=>this.mirrorOp(e.objects,e.axis[0]),"Specchio non applicabile con questi vincoli");else if(t.type==="sfillet"||t.type==="schamfer"){let o=e.corners.find(l=>!this.cornerInfo(l)||i>this.cornerInfo(l)[t.type==="sfillet"?"maxR":"maxD"]);if(o){let l=this.cornerInfo(o);this.toast(l?`Misura troppo grande per un angolo (massimo ${be(t.type==="sfillet"?l.maxR:l.maxD,2)} mm)`:"Angolo non pi\xF9 valido","warn");return}a=this.attempt(()=>{for(let l of e.corners)t.type==="sfillet"?this.filletCorner(l,i,s):this.chamferCorner(l,i,s)},"Non applicabile con i vincoli presenti")}else if(t.type==="offset"){let o;try{o=this.offsetCompute(e.objects,i,e.flip)}catch(l){this.toast(l.message,"warn");return}a=this.attempt(()=>this.offsetCommit(o,s),"Offset non applicabile con questi vincoli")}a&&(this.cmd=null,this.sel.clear(),this.tool="select",this.render(),this.emit())}mirrorOp(t,e){let i=this.P(e),s=this.P(i.p1_id),r=this.P(i.p2_id),a=mn([r.x-s.x,r.y-s.y]),o=u=>{let d=(u.x-s.x)*a[0]+(u.y-s.y)*a[1],f=s.x+a[0]*d,g=s.y+a[1]*d;return{x:2*f-u.x,y:2*g-u.y,on:Math.hypot(f-u.x,g-u.y)<1e-6}},l=new Map,c=u=>this.sk.cons.push({id:this.nid("c"),...u}),h=u=>{if(l.has(u))return l.get(u);let d=this.P(u),f=o(d);if(f.on||d.ref)return l.set(u,u),u;let g=this.nid("p");return this.sk.geo.push({id:g,type:"point",x:f.x,y:f.y,fixed:!1,construction:d.construction}),c({type:"p2p_symmetric_ppl",p1_id:u,p2_id:g,l_id:i.id}),l.set(u,g),g};for(let u of t.map(d=>this.P(d)).filter(Boolean))if(u.id!==e){if(u.type==="point")h(u.id);else if(u.type==="line")this.sk.geo.push({id:this.nid("l"),type:"line",p1_id:h(u.p1_id),p2_id:h(u.p2_id),construction:u.construction});else if(u.type==="circle"){let d=this.nid("k");this.sk.geo.push({id:d,type:"circle",c_id:h(u.c_id),radius:u.radius,construction:u.construction}),c({type:"equal_radius_cc",c1_id:u.id,c2_id:d})}else if(u.type==="arc"){let d=h(u.c_id),f=h(u.end_id),g=h(u.start_id),x=this.P(d),p=this.P(f),m=this.P(g),_=this.nid("a");this.sk.geo.push({id:_,type:"arc",c_id:d,radius:u.radius,start_id:f,end_id:g,start_angle:Math.atan2(p.y-x.y,p.x-x.x),end_angle:Math.atan2(m.y-x.y,m.x-x.x),construction:u.construction}),c({type:"equal_radius_aa",a1_id:u.id,a2_id:_})}}}cornerInfo(t){let e=this.sk.geo.filter(d=>d.type==="line"&&!d.ref&&!d.construction&&(d.p1_id===t||d.p2_id===t));if(e.length!==2)return null;let i=this.P(t),s=d=>this.P(d.p1_id===t?d.p2_id:d.p1_id),r=s(e[0]),a=s(e[1]),o=Math.hypot(r.x-i.x,r.y-i.y),l=Math.hypot(a.x-i.x,a.y-i.y);if(o<1e-9||l<1e-9)return null;let c=[(r.x-i.x)/o,(r.y-i.y)/o],h=[(a.x-i.x)/l,(a.y-i.y)/l],u=Math.acos(Math.max(-1,Math.min(1,c[0]*h[0]+c[1]*h[1])));return u<.02||u>Math.PI-.02?null:{lines:e,C:i,u1:c,u2:h,th:u,maxR:Math.min(o,l)*Math.tan(u/2)*.98,maxD:Math.min(o,l)*.98}}keepVirtualCorner(t,e){let i=this.P(t);!this.sk.geo.some(r=>["p1_id","p2_id","c_id","start_id","end_id"].some(a=>r[a]===t))&&!i.ref&&(i.construction=!0),this.sk.cons.push({id:this.nid("c"),type:"point_on_line_pl",p_id:t,l_id:e[0].id},{id:this.nid("c"),type:"point_on_line_pl",p_id:t,l_id:e[1].id})}filletCorner(t,e,i){let{lines:s,C:r,u1:a,u2:o,th:l}=this.cornerInfo(t),c=e/Math.tan(l/2),h=mn([a[0]+o[0],a[1]+o[1]]),u=e/Math.sin(l/2),d=this.nid("p"),f=this.nid("p"),g=this.nid("p");this.sk.geo.push({id:d,type:"point",x:r.x+a[0]*c,y:r.y+a[1]*c,fixed:!1},{id:f,type:"point",x:r.x+o[0]*c,y:r.y+o[1]*c,fixed:!1},{id:g,type:"point",x:r.x+h[0]*u,y:r.y+h[1]*u,fixed:!1});for(let[R,y]of[[s[0],d],[s[1],f]])R.p1_id===t?R.p1_id=y:R.p2_id=y;let x=this.P(g),p=this.P(d),m=this.P(f),_=Math.atan2(p.y-x.y,p.x-x.x),M=Math.atan2(m.y-x.y,m.x-x.x),b=((M-_)%Ee+Ee)%Ee<=Math.PI,T=this.nid("a");this.sk.geo.push({id:T,type:"arc",c_id:g,radius:e,start_id:b?d:f,end_id:b?f:d,start_angle:b?_:M,end_angle:b?M:_}),this.sk.cons.push({id:this.nid("c"),type:"tangent_la",l_id:s[0].id,a_id:T},{id:this.nid("c"),type:"tangent_la",l_id:s[1].id,a_id:T},{id:this.nid("d"),type:"arc_radius",a_id:T,radius:e,expr:i,lx:x.x+h[0]*e*1.8,ly:x.y+h[1]*e*1.8}),this.keepVirtualCorner(t,s)}chamferCorner(t,e,i){let{lines:s,C:r,u1:a,u2:o}=this.cornerInfo(t),l=this.nid("p"),c=this.nid("p");this.sk.geo.push({id:l,type:"point",x:r.x+a[0]*e,y:r.y+a[1]*e,fixed:!1},{id:c,type:"point",x:r.x+o[0]*e,y:r.y+o[1]*e,fixed:!1});for(let[d,f]of[[s[0],l],[s[1],c]])d.p1_id===t?d.p1_id=f:d.p2_id=f;this.addLine(l,c,!1),this.keepVirtualCorner(t,s);let h=this.nid("q"),u=[r.x+a[0]*e*.5,r.y+a[1]*e*.5];this.sk.cons.push({id:this.nid("d"),type:"p2p_distance",p1_id:t,p2_id:l,distance:e,expr:i,grp:h,lx:u[0]-a[1]*3,ly:u[1]+a[0]*3},{id:this.nid("d"),type:"p2p_distance",p1_id:t,p2_id:c,distance:e,expr:i,grp:h,nolabel:!0})}chainOf(t){let e=this.P(t);if(e.type==="circle")return[t];let i=o=>o.type==="line"?[o.p1_id,o.p2_id]:o.type==="arc"?[o.start_id,o.end_id]:[],s=this.sk.geo.filter(o=>(o.type==="line"||o.type==="arc")&&!o.ref&&!!o.construction==!!e.construction),r=new Set([t]),a=[e];for(;a.length;){let o=a.pop();for(let l of i(o))for(let c of s)!r.has(c.id)&&i(c).includes(l)&&(r.add(c.id),a.push(c))}return[...r]}offsetCompute(t,e,i){let s=h=>this.P(h),r=h=>h.type==="line"?[h.p1_id,h.p2_id]:[h.start_id,h.end_id],a=t.map(s).filter(h=>h&&!h.ref&&h.type!=="point"),o=new Set,l=[];for(let h of a){if(o.has(h.id))continue;if(h.type==="circle"){o.add(h.id),l.push({circle:h});continue}let u=[h];o.add(h.id);for(let m=0;m<u.length;m++)for(let _ of a)!o.has(_.id)&&_.type!=="circle"&&r(_).some(M=>r(u[m]).includes(M))&&(o.add(_.id),u.push(_));let d=new Map;for(let m of u)for(let _ of r(m))d.set(_,(d.get(_)||0)+1);if([...d.values()].some(m=>m>2))throw new Error("Il contorno si ramifica: seleziona un percorso senza diramazioni");let f=[...d.entries()].find(([,m])=>m===1)?.[0]||r(u[0])[0],g=new Set,x=[],p=f;for(;x.length<u.length;){let m=u.find(M=>!g.has(M.id)&&r(M).includes(p));if(!m)break;g.add(m.id);let _=r(m)[0]!==p;x.push({g:m,rev:_}),p=r(m)[_?0:1]}l.push({segs:x,closed:p===f&&x.length>1})}let c=[];for(let h of l){if(h.circle){let p=h.circle.radius+(i?-e:e);if(p<=1e-6)throw new Error("Distanza troppo grande per un cerchio");c.push({circle:h.circle,r:p,sgn:i?-1:1});continue}let u=[];for(let p of h.segs){let m=s(r(p.g)[p.rev?1:0]);if(u.push([m.x,m.y]),p.g.type==="arc"){let _=db(this,p.g);u.push([_.x,_.y])}}let d=0;for(let p=0;p<u.length;p++){let m=u[p],_=u[(p+1)%u.length];d+=m[0]*_[1]-_[0]*m[1]}let f=h.closed&&d>0?-1:1;i&&(f=-f);let g=h.segs.map(({g:p,rev:m})=>{if(p.type==="line"){let y=s(m?p.p2_id:p.p1_id),A=s(m?p.p1_id:p.p2_id),z=mn([A.x-y.x,A.y-y.y]),k=[-z[1]*f*e,z[0]*f*e];return{g:p,rev:m,kind:"line",a:[y.x+k[0],y.y+k[1]],b:[A.x+k[0],A.y+k[1]]}}let _=s(p.c_id),M=p.radius+(m?1:-1)*f*e;if(M<=1e-6)throw new Error("Distanza troppo grande per un arco del contorno");let b=s(m?p.end_id:p.start_id),T=s(m?p.start_id:p.end_id),R=y=>{let A=mn([y.x-_.x,y.y-_.y]);return[_.x+A[0]*M,_.y+A[1]*M]};return{g:p,rev:m,kind:"arc",c:[_.x,_.y],r:M,a:R(b),b:R(T),dr:M-p.radius}}),x=g.length;for(let p=0;p<(h.closed?x:x-1);p++){let m=g[p],_=g[(p+1)%x];if(Math.hypot(m.b[0]-_.a[0],m.b[1]-_.a[1])<1e-7)continue;let M=[(m.b[0]+_.a[0])/2,(m.b[1]+_.a[1])/2],b=hb(m,_,M)||M;m.b=b,_.a=b}c.push({segs:g,closed:h.closed})}return c}offsetCommit(t,e){let i=this.nid("q"),s=!0,r=a=>{this.sk.cons.push({id:this.nid("d"),grp:i,...a,...s?{}:{nolabel:!0}}),s=!1};for(let a of t){if(a.circle){let c=this.nid("k");this.sk.geo.push({id:c,type:"circle",c_id:a.circle.c_id,radius:a.r,construction:a.circle.construction}),r({type:"difference",param1:{o_id:c,prop:"radius"},param2:{o_id:a.circle.id,prop:"radius"},difference:Math.abs(a.r-a.circle.radius),sign:a.sgn,expr:e});continue}let o=c=>{let h=this.nid("p");return this.sk.geo.push({id:h,type:"point",x:c[0],y:c[1],fixed:!1}),h},l=[o(a.segs[0].a)];for(let c=0;c<a.segs.length;c++)l.push(a.closed&&c===a.segs.length-1?l[0]:o(a.segs[c].b));a.segs.forEach((c,h)=>{let u=l[h],d=l[h+1];if(c.kind==="line"){let f=this.nid("l");this.sk.geo.push({id:f,type:"line",p1_id:c.rev?d:u,p2_id:c.rev?u:d,construction:c.g.construction}),this.sk.cons.push({id:this.nid("c"),type:"parallel",l1_id:c.g.id,l2_id:f});let g=this.P(u);r({type:"p2l_distance",p_id:u,l_id:c.g.id,distance:Math.abs(ub(g,this.P(c.g.p1_id),this.P(c.g.p2_id))),expr:e,lx:g.x,ly:g.y})}else{let f=c.rev?d:u,g=c.rev?u:d,x=this.P(f),p=this.P(g),m=this.nid("a");this.sk.geo.push({id:m,type:"arc",c_id:c.g.c_id,radius:c.r,start_id:f,end_id:g,start_angle:Math.atan2(x.y-c.c[1],x.x-c.c[0]),end_angle:Math.atan2(p.y-c.c[1],p.x-c.c[0]),construction:c.g.construction}),a.segs.length===1&&r({type:"difference",param1:{o_id:m,prop:"radius"},param2:{o_id:c.g.id,prop:"radius"},difference:Math.abs(c.dr),sign:Math.sign(c.dr)||1,expr:e})}})}}tapTrim(t,e,i){let s=this.hit(t,e,i,{dims:!1,glyphs:!1,points:!1,axes:!1});if(!s)return;let r=this.P(s.id),[a,o]=this.toK(t,e),l=this.cutsOn(r);this.attempt(()=>this.trimAt(r,[a,o],l),"Taglio non applicabile con i vincoli presenti")&&this.toast("Tagliato","ok")}cutsOn(t){let e=Fd(this,t),i=[];for(let s of this.sk.geo)if(!(s.id===t.id||s.ref||s.type==="point"))for(let r of cb(e,Fd(this,s))){let a=mc(e,r);a!=null&&i.push({t:a,pt:r,other:s.id})}return i.sort((s,r)=>s.t-r.t),i.filter((s,r)=>r===0||s.t-i[r-1].t>1e-7)}trimAt(t,e,i){let s=Fd(this,t),r=mc(s,e,!0),a=s.kind==="line"?1:s.kind==="circle"?Ee:s.sw,o=i.filter(d=>s.kind==="circle"?!0:d.t>1e-6&&d.t<a-1e-6);if(!o.length||s.kind==="circle"&&o.length<2){this.removeCurves([t.id]);return}let l=d=>this.pointAtCut(d);if(s.kind==="circle"){let d=o.find(p=>p.t>r)||o[0],f=[...o].reverse().find(p=>p.t<r)||o[o.length-1],g=l(d),x=l(f);fb(this,t,g,x);return}let c=[...o].reverse().find(d=>d.t<r),h=o.find(d=>d.t>r),u=s.kind==="line"?[t.p1_id,t.p2_id]:[t.start_id,t.end_id];if(!c&&!h){this.removeCurves([t.id]);return}if(c)if(h){let d=l(c),f=l(h);if(s.kind==="line"){let g=t.p2_id;t.p2_id=d;let x=this.nid("l");this.sk.geo.push({id:x,type:"line",p1_id:f,p2_id:g,construction:t.construction}),this.sk.cons.push({id:this.nid("c"),type:"point_on_line_pl",p_id:f,l_id:t.id},{id:this.nid("c"),type:"point_on_line_pl",p_id:g,l_id:t.id})}else{let g=t.end_id,x=t.end_angle;t.end_id=d,t.end_angle=rr(this,t,d);let p=this.nid("a");this.sk.geo.push({id:p,type:"arc",c_id:t.c_id,radius:t.radius,start_id:f,end_id:g,start_angle:rr(this,t,f),end_angle:x,construction:t.construction}),this.sk.cons.push({id:this.nid("c"),type:"equal_radius_aa",a1_id:t.id,a2_id:p})}}else{let d=l(c);s.kind==="line"?t.p2_id=d:(t.end_id=d,t.end_angle=rr(this,t,d))}else{let d=l(h);s.kind==="line"?t.p1_id=d:(t.start_id=d,t.start_angle=rr(this,t,d))}this.dropOrphans(u)}pointAtCut(t){let e=this.sk.geo.find(a=>a.type==="point"&&!fc.has(a.id)&&Math.hypot(a.x-t.pt[0],a.y-t.pt[1])<1e-6);if(e)return e.id;let i=this.nid("p");this.sk.geo.push({id:i,type:"point",x:t.pt[0],y:t.pt[1],fixed:!1});let s=this.P(t.other),r=this.nid("c");return s.type==="line"?this.sk.cons.push({id:r,type:"point_on_line_pl",p_id:i,l_id:s.id}):s.type==="circle"?this.sk.cons.push({id:r,type:"point_on_circle",p_id:i,c_id:s.id}):this.sk.cons.push({id:r,type:"point_on_arc",p_id:i,a_id:s.id}),i}removeCurves(t){let i=t.map(s=>this.P(s)).filter(Boolean).flatMap(s=>[s.p1_id,s.p2_id,s.start_id,s.end_id,s.type==="arc"||s.type==="circle"?s.c_id:null].filter(Boolean));this.sk.geo=this.sk.geo.filter(s=>!t.includes(s.id)),this.sk.cons=this.sk.cons.filter(s=>!Od(s).some(r=>t.includes(r))),this.dropOrphans(i)}dropOrphans(t){for(let e of t){let i=this.P(e);!i||i.ref||i.construction||this.sk.geo.some(r=>["p1_id","p2_id","c_id","start_id","end_id"].some(a=>r[a]===e))||(this.sk.geo=this.sk.geo.filter(r=>r.id!==e),this.sk.cons=this.sk.cons.filter(r=>!Od(r).includes(e)))}}cmdPreviewSvg(){let t=this.cmd;if(!t||!this.cmdReady())return"";let e=t.spec.fields.find(a=>a.kind==="num"),i;try{i=this.evalExpr(t.vals[e?e.k:"x"])}catch{return""}if(!(i>0))return"";let s=a=>this.toS(a[0],a[1]).map(o=>o.toFixed(1)).join(" "),r=[];if(t.type==="offset"){let a;try{a=this.offsetCompute(t.vals.objects,i,t.vals.flip)}catch{return""}for(let o of a){if(o.circle){let l=this.P(o.circle.c_id),[c,h]=this.toS(l.x,l.y);r.push(`<circle cx="${c.toFixed(1)}" cy="${h.toFixed(1)}" r="${(o.r*this.view.s).toFixed(1)}" class="sk-preview"/>`);continue}for(let l of o.segs)if(l.kind==="line")r.push(`<path d="M${s(l.a)}L${s(l.b)}" class="sk-preview"/>`);else{let c=Math.atan2(l.a[1]-l.c[1],l.a[0]-l.c[0]),h=Math.atan2(l.b[1]-l.c[1],l.b[0]-l.c[0]),[u,d]=l.rev?[h,c]:[c,h];r.push(`<path d="${this.arcPath({radius:l.r,start_angle:u,end_angle:d},{x:l.c[0],y:l.c[1]})}" class="sk-preview"/>`)}}}else if(t.type==="sfillet"||t.type==="schamfer")for(let a of t.vals.corners){let o=this.cornerInfo(a);if(!o)continue;let l=t.type==="sfillet"?o.maxR:o.maxD,c=i>l;if(t.type==="sfillet"){let h=Math.min(i,l),u=h/Math.tan(o.th/2),d=[o.C.x+o.u1[0]*u,o.C.y+o.u1[1]*u],f=[o.C.x+o.u2[0]*u,o.C.y+o.u2[1]*u],g=mn([o.u1[0]+o.u2[0],o.u1[1]+o.u2[1]]),x=h/Math.sin(o.th/2),p=[o.C.x+g[0]*x,o.C.y+g[1]*x],m=Math.atan2(d[1]-p[1],d[0]-p[0]),M=((Math.atan2(f[1]-p[1],f[0]-p[0])-m)%Ee+Ee)%Ee<=Math.PI,b=h*this.view.s;r.push(`<path d="M${s(d)}A${b.toFixed(1)} ${b.toFixed(1)} 0 0 ${M?0:1} ${s(f)}" class="sk-preview ${c?"bad":""}"/>`)}else{let h=Math.min(i,l);r.push(`<path d="M${s([o.C.x+o.u1[0]*h,o.C.y+o.u1[1]*h])}L${s([o.C.x+o.u2[0]*h,o.C.y+o.u2[1]*h])}" class="sk-preview ${c?"bad":""}"/>`)}}return r.join("")}evalExpr(t){return Ai(t,this.getScope())}makeArc(t,e,i){let s=Op(t,i,e);if(!s){this.toast("I tre punti sono allineati","warn");return}let r=(i.x-t.x)*(e.y-i.y)-(i.y-t.y)*(e.x-i.x)>0,a=this.materialize(t),o=this.materialize(e),l=this.nid("p");this.sk.geo.push({id:l,type:"point",x:s.x,y:s.y,fixed:!1});let[c,h]=r?[a,o]:[o,a],u=this.P(c),d=this.P(h);this.sk.geo.push({id:this.nid("a"),type:"arc",c_id:l,radius:s.r,start_angle:Math.atan2(u.y-s.y,u.x-s.x),end_angle:Math.atan2(d.y-s.y,d.x-s.x),start_id:c,end_id:h})}dragTo(t,e,i){let[s,r]=this.toK(e,i);if(t.kind==="label"){let o=this.sk.cons.find(l=>l.id===t.id);o&&(o.lx=s,o.ly=r,this.render());return}if(t.kind==="radius"){let o=this.P(t.id),l=this.P(o.c_id),c=Math.hypot(s-l.x,r-l.y);o.radius=Math.max(c,.01),o.type==="arc"?this.resolve():this.resolve(),this.render();return}let a=t.kind==="point"?[{id:t.id,x:s,y:r}]:t.ids.map((o,l)=>({id:o,x:s+t.off[l][0],y:r+t.off[l][1]}));this.resolve(a),this.render()}tapSelect(t){if(!t){this.sel.clear(),this.render(),this.emit();return}if(t.kind==="dim"){this.editDim(t.id);return}let e=t.id;this.sel.has(e)?this.sel.delete(e):this.sel.add(e),this.render(),this.emit()}tapDim(t,e,i){let s=this.hit(t,e,i,{glyphs:!1});if(s&&s.kind==="dim"){this.editDim(s.id);return}let r=this.state&&this.state.kind==="dim"?this.state:this.state={kind:"dim",items:[]},[a,o]=this.toK(t,e);if(!s){if(r.items.length===1){let c=this.P(r.items[0].id);if(c.type==="line"&&!c.ref){this.createDim({type:"p2p_distance",p1_id:c.p1_id,p2_id:c.p2_id},[a,o]);return}}this.state=null,this.sel.clear(),this.render(),this.emit();return}let l=this.P(s.id);if(s.kind==="curve"&&(l.type==="circle"||l.type==="arc")&&!r.items.length){this.createDim(l.type==="circle"?{type:"circle_diameter",c_id:l.id}:{type:"arc_radius",a_id:l.id},[a,o]);return}if(r.items.push(s),this.sel.add(s.id),r.items.length===2){let[c,h]=r.items.map(g=>this.P(g.id)),u=g=>g.type==="line",d=g=>g.type==="point",f=null;if(d(c)&&d(h))f={type:"p2p_distance",p1_id:c.id,p2_id:h.id};else if(d(c)&&u(h))f={type:"p2l_distance",p_id:c.id,l_id:h.id};else if(u(c)&&d(h))f={type:"p2l_distance",p_id:h.id,l_id:c.id};else if(u(c)&&u(h)){let g=m=>{let _=this.P(m.p1_id),M=this.P(m.p2_id);return mn([M.x-_.x,M.y-_.y])},x=g(c),p=g(h);Math.abs(x[0]*p[1]-x[1]*p[0])<1e-6?f={type:"p2l_distance",p_id:h.p1_id,l_id:c.id}:f={type:"l2l_angle_ll",l1_id:c.id,l2_id:h.id}}f?this.createDim(f,[a,o]):(this.toast("Combinazione non quotabile","warn"),this.state=null,this.sel.clear(),this.render());return}this.render(),this.emit()}async createDim(t,e){t.id=this.nid("d"),t.lx=e[0],t.ly=e[1];let i=kd(t,this.sk.geo);t.expr=be(i);let s=Dd(t);t[s.k]=s.deg?i*Math.PI/180:i,this.state=null,this.sel.clear(),this.attempt(()=>this.sk.cons.push(t),"Quota non applicabile: lo schizzo \xE8 gi\xE0 vincolato qui")&&await this.editDim(t.id,!0)}async editDim(t,e=!1){let i=this.sk.cons.find(c=>c.id===t);if(!i)return;let r=i.type==="p2p_distance"||i.type==="difference"&&i.param1&&(i.param1.prop==="x"||i.param1.prop==="y")?[["al","Allineata"],["h","Orizzontale"],["v","Verticale"]]:null,a=i.type==="difference"?i.param1.prop==="x"?"h":"v":"al",o=i.type==="l2l_angle_ll",l=await this.promptValue({title:o?"Angolo (\xB0)":i.type.includes("diameter")?"Diametro (mm)":i.type.includes("radius")?"Raggio (mm)":"Distanza (mm)",value:i.expr,options:r,option:a,allowDelete:!e});if(l){if(l.remove){this.attempt(()=>{this.sk.cons=this.sk.cons.filter(c=>c.id!==t)});return}this.attempt(()=>{let c=this.sk.cons.find(h=>h.id===t);if(r&&l.option!==a){let h=c.type==="difference"?c.param2.o_id:c.p1_id,u=c.type==="difference"?c.param1.o_id:c.p2_id;for(let d of["p1_id","p2_id","param1","param2","distance","difference","sign"])delete c[d];if(l.option==="al")c.type="p2p_distance",c.p1_id=h,c.p2_id=u;else{let d=l.option==="h"?"x":"y",f=this.P(h),g=this.P(u);c.type="difference",c.param1={o_id:u,prop:d},c.param2={o_id:h,prop:d},c.sign=g[d]-f[d]<0?-1:1}}if(c.expr=l.value,c.grp)for(let h of this.sk.cons)h.grp===c.grp&&(h.expr=l.value)},"Valore non applicabile: controlla la quota o i vincoli")}}selTypes(){let t={point:0,line:0,circle:0,arc:0,cons:0,axis:0};for(let e of this.sel){let i=this.P(e);if(!i){t.cons++;continue}i.ref&&i.type==="line"?t.axis++:t[i.type]++}return t}applyConstraint(t){let e=[...this.sel].map(c=>this.P(c)).filter(Boolean),i=e.filter(c=>c.type==="point"),s=e.filter(c=>c.type==="line"),r=e.filter(c=>c.type==="circle"||c.type==="arc"),a=[],o=c=>a.push({id:this.nid("c"),...c}),l=c=>{this.toast(c,"warn")};switch(t){case"coincident":if(i.length===2)o({type:"p2p_coincident",p1_id:i[0].id,p2_id:i[1].id});else if(i.length===1&&s.length===1)o({type:"point_on_line_pl",p_id:i[0].id,l_id:s[0].id});else if(i.length===1&&r.length===1)o(r[0].type==="circle"?{type:"point_on_circle",p_id:i[0].id,c_id:r[0].id}:{type:"point_on_arc",p_id:i[0].id,a_id:r[0].id});else return l("Seleziona due punti, o un punto e una curva");break;case"horizontal":case"vertical":{let c=t==="horizontal"?"horizontal":"vertical",h=s.filter(u=>!u.ref);if(h.length)h.forEach(u=>o({type:`${c}_l`,l_id:u.id}));else if(i.length===2)o({type:`${c}_pp`,p1_id:i[0].id,p2_id:i[1].id});else return l("Seleziona linee o due punti");break}case"parallel":case"perpendicular":if(s.length!==2)return l("Seleziona due linee");o({type:t==="parallel"?"parallel":"perpendicular_ll",l1_id:s[0].id,l2_id:s[1].id});break;case"tangent":{if(s.length===1&&r.length===1){let c=r[0];o(c.type==="circle"?{type:"tangent_lc",l_id:s[0].id,c_id:c.id}:{type:"tangent_la",l_id:s[0].id,a_id:c.id})}else if(r.length===2){let[c,h]=r;if(c.type==="circle"&&h.type==="circle")o({type:"tangent_cc",c1_id:c.id,c2_id:h.id});else if(c.type==="arc"&&h.type==="arc")o({type:"tangent_aa",a1_id:c.id,a2_id:h.id});else{let u=c.type==="circle"?c:h,d=c.type==="arc"?c:h;o({type:"tangent_ca",c_id:u.id,a_id:d.id})}}else return l("Seleziona una linea e una curva, o due curve");break}case"equal":if(s.length>=2)for(let c=1;c<s.length;c++)o({type:"equal_length",l1_id:s[0].id,l2_id:s[c].id});else if(r.length>=2)for(let c=1;c<r.length;c++){let h=r[0],u=r[c];if(h.type==="circle"&&u.type==="circle")o({type:"equal_radius_cc",c1_id:h.id,c2_id:u.id});else if(h.type==="arc"&&u.type==="arc")o({type:"equal_radius_aa",a1_id:h.id,a2_id:u.id});else{let d=h.type==="circle"?h:u,f=h.type==="arc"?h:u;o({type:"equal_radius_ca",c_id:d.id,a_id:f.id})}}else return l("Seleziona due o pi\xF9 linee, o due o pi\xF9 cerchi/archi");break;case"midpoint":if(i.length===1&&s.length===1)o({type:"p2p_symmetric_ppp",p1_id:s[0].p1_id,p2_id:s[0].p2_id,p_id:i[0].id});else return l("Seleziona un punto e una linea");break;case"concentric":if(r.length===2)o({type:"p2p_coincident",p1_id:r[0].c_id,p2_id:r[1].c_id});else if(r.length===1&&i.length===1)o({type:"p2p_coincident",p1_id:r[0].c_id,p2_id:i[0].id});else return l("Seleziona due cerchi o archi");break;case"symmetric":if(i.length===2&&s.length===1)o({type:"p2p_symmetric_ppl",p1_id:i[0].id,p2_id:i[1].id,l_id:s[0].id});else return l("Seleziona due punti e la linea di simmetria");break;case"fix":{let c=i.filter(h=>!h.ref);if(!c.length)return l("Seleziona dei punti");this.attempt(()=>c.forEach(h=>{let u=this.P(h.id);u.fixed=!u.fixed})),this.sel.clear(),this.render(),this.emit();return}default:return}this.attempt(()=>this.sk.cons.push(...a))&&(this.sel.clear(),this.render(),this.emit())}toggleConstruction(){let t=[...this.sel].map(i=>this.P(i)).filter(i=>i&&i.type!=="point"&&!i.ref);if(!t.length){this.toast("Seleziona linee, cerchi o archi","warn");return}this.push();let e=!t.every(i=>i.construction);t.forEach(i=>{i.construction=e}),this.sel.clear(),this.changed()}deleteSelection(){if(!this.sel.size){this.toast("Seleziona cosa eliminare","warn");return}this.push();let t=new Set;for(let s of this.sel){let r=this.P(s);r&&r.ref||t.add(s)}for(let s of this.sk.geo)["p1_id","p2_id","c_id","start_id","end_id"].some(r=>s[r]&&t.has(s[r]))&&t.add(s.id);let e=this.sk.geo.filter(s=>t.has(s.id)&&s.type!=="point"),i=new Set;for(let s of this.sk.geo)if(!t.has(s.id))for(let r of["p1_id","p2_id","c_id","start_id","end_id"])s[r]&&i.add(s[r]);for(let s of e)for(let r of["p1_id","p2_id","c_id","start_id","end_id"])s[r]&&!i.has(s[r])&&!this.P(s[r]).ref&&t.add(s[r]);this.sk.geo=this.sk.geo.filter(s=>!t.has(s.id)),this.sk.cons=this.sk.cons.filter(s=>!t.has(s.id)&&!Od(s).some(r=>t.has(r))),this.sel.clear(),this.state=null,this.resolve(),this.changed()}cancel(){return this.cmd?(this.cmdCancel(),!0):this.hasLocks()?(this.clearLocks(),this.lastCursor&&this.trackCursor(...this.lastCursor,this.lastPointer||"mouse"),this.emit(),!0):this.state?(this.state=null,this.sel.clear(),this.render(),this.emit(),!0):this.sel.size?(this.sel.clear(),this.render(),this.emit(),!0):!1}bind(){let t=this.svg;t.addEventListener("pointerdown",i=>{if(!this.active)return;t.setPointerCapture(i.pointerId);let s=t.getBoundingClientRect();if(this.pointers.set(i.pointerId,{x:i.clientX-s.left,y:i.clientY-s.top}),this.pointers.size===2){this.gesture=null,this.state&&this.state.fresh&&this.state.kind!=="dim"&&(this.state=null);let[r,a]=[...this.pointers.values()];this.pinch={d:Math.hypot(r.x-a.x,r.y-a.y),m:[(r.x+a.x)/2,(r.y+a.y)/2],view:{...this.view}},this.render();return}this.pointers.size>2||this.down(i,i.clientX-s.left,i.clientY-s.top)}),t.addEventListener("pointermove",i=>{if(!this.active)return;let s=t.getBoundingClientRect(),r=i.clientX-s.left,a=i.clientY-s.top;if(this.pointers.has(i.pointerId)&&this.pointers.set(i.pointerId,{x:r,y:a}),this.pinch&&this.pointers.size>=2){let[o,l]=[...this.pointers.values()],c=Math.hypot(o.x-l.x,o.y-l.y),h=[(o.x+l.x)/2,(o.y+l.y)/2],u=this.pinch.view,d=Math.min(500,Math.max(.02,u.s*(c/Math.max(this.pinch.d,1)))),f=(this.pinch.m[0]-this.W/2)/u.s+u.cx,g=-(this.pinch.m[1]-this.H/2)/u.s+u.cy;this.view={s:d,cx:f-(h[0]-this.W/2)/d,cy:g+(h[1]-this.H/2)/d},this.vp.setSketchView(this.view),this.render();return}if(!(this.pointers.size>1)){if(!this.pointers.size&&i.pointerType==="mouse"){this.trackCursor(r,a,"mouse");return}this.move(i,r,a)}});let e=i=>{if(!this.active)return;let s=this.pointers.has(i.pointerId);if(this.pointers.delete(i.pointerId),this.pinch){this.pointers.size||(this.pinch=null);return}if(!s||i.type==="pointercancel"){this.gesture=null;return}let r=t.getBoundingClientRect();this.up(i,i.clientX-r.left,i.clientY-r.top)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("dblclick",()=>{this.state&&this.state.kind==="line"&&(this.state=null,this.render())}),t.addEventListener("wheel",i=>{if(!this.active)return;i.preventDefault();let s=t.getBoundingClientRect(),r=i.clientX-s.left,a=i.clientY-s.top,[o,l]=this.toK(r,a),c=Math.min(500,Math.max(.02,this.view.s*Math.exp(-i.deltaY*.0015)));this.view={s:c,cx:o-(r-this.W/2)/c,cy:l+(a-this.H/2)/c},this.vp.setSketchView(this.view),this.render()},{passive:!1})}render(){if(!this.active)return;let t=this.W,e=this.H;this.svg.setAttribute("width",t),this.svg.setAttribute("height",e),this.svg.setAttribute("viewBox",`0 0 ${t} ${e}`);let i=[],s=(T,R)=>this.toS(T,R),r=T=>T.toFixed(1),a=this.view,o=1;for(let T of[.1,.2,.5,1,2,5,10,20,50,100,200,500,1e3])if(o=T,T*a.s>=22)break;let[l,c]=this.toK(0,0),[h,u]=this.toK(t,e),d=[],f=[];for(let T=Math.ceil(l/o)*o;T<=h;T+=o){let R=r(s(T,0)[0]);(Math.abs(T/(o*5)-Math.round(T/(o*5)))<1e-6?f:d).push(`M${R} 0V${e}`)}for(let T=Math.ceil(u/o)*o;T<=c;T+=o){let R=r(s(0,T)[1]);(Math.abs(T/(o*5)-Math.round(T/(o*5)))<1e-6?f:d).push(`M0 ${R}H${t}`)}if(i.push(`<path d="${d.join("")}" class="sk-grid"/><path d="${f.join("")}" class="sk-grid major"/>`),!this.regions)try{this.regions=uc(this.sk.geo)}catch{this.regions=[]}for(let T of this.regions){let R=[T.poly,...T.holePolys].map(y=>"M"+y.map(([A,z])=>s(A,z).map(r).join(" ")).join("L")+"Z").join("");i.push(`<path d="${R}" class="sk-region" fill-rule="evenodd"/>`)}let g=this.cmd&&this.cmd.vals.axis?this.cmd.vals.axis[0]:null,[x,p]=s(0,0);i.push(`<path d="M0 ${r(p)}H${t}" class="sk-axis x ${this.sel.has("AX")||g==="AX"?"sel":""}"/><path d="M${r(x)} 0V${e}" class="sk-axis y ${this.sel.has("AY")||g==="AY"?"sel":""}"/>`);let m=this.status&&this.status.dof===0,_=new Set(this.status&&this.status.conflicting||[]);for(let T of this.sk.geo){if(T.ref||T.type==="point")continue;let R=["sk-curve",T.construction?"cons":"",m?"full":"",this.sel.has(T.id)?"sel":"",g===T.id?"maxis":""].join(" ");if(T.type==="line"){let y=this.P(T.p1_id),A=this.P(T.p2_id),[z,k]=s(y.x,y.y),[O,X]=s(A.x,A.y);i.push(`<path d="M${r(z)} ${r(k)}L${r(O)} ${r(X)}" class="${R}"/>`)}else if(T.type==="circle"){let y=this.P(T.c_id),[A,z]=s(y.x,y.y);i.push(`<circle cx="${r(A)}" cy="${r(z)}" r="${r(T.radius*a.s)}" class="${R}"/>`)}else T.type==="arc"&&i.push(`<path d="${this.arcPath(T)}" class="${R}"/>`)}let M=new Set;for(let T of this.sk.geo)for(let R of["p1_id","p2_id","c_id","start_id","end_id"])T[R]&&!T.ref&&M.add(T[R]);for(let T of this.sk.geo){if(T.type!=="point"||fc.has(T.id))continue;let[R,y]=s(T.x,T.y);if(T.id==="O"){i.push(`<circle cx="${r(R)}" cy="${r(y)}" r="5" class="sk-origin ${this.sel.has("O")?"sel":""}"/>`);continue}let A=!M.has(T.id),z=["sk-pt",A?"lone":"",T.fixed?"fixed":"",T.construction?"cpt":"",this.sel.has(T.id)?"sel":"",m?"full":""].join(" ");i.push(A?`<path d="M${r(R-6)} ${r(y)}H${r(R+6)}M${r(R)} ${r(y-6)}V${r(y+6)}" class="${z}"/><circle cx="${r(R)}" cy="${r(y)}" r="3" class="${z}"/>`:`<circle cx="${r(R)}" cy="${r(y)}" r="${T.fixed?4.5:3.5}" class="${z}"/>`)}this.glyphBoxes=[];let b=new Map;for(let T of this.sk.cons){let R=ob[T.type];if(!R||T.type==="p2p_coincident")continue;let y=this.consAnchor(T);if(!y)continue;let A=y.map(X=>Math.round(X/4)).join(","),z=b.get(A)||0;b.set(A,z+1);let[k,O]=[y[0]+12+z*18,y[1]-12];this.glyphBoxes.push({id:T.id,x:k,y:O}),i.push(`<g class="sk-glyph ${this.sel.has(T.id)?"sel":""} ${_.has(T.id)?"bad":""}"><rect x="${r(k-8)}" y="${r(O-8)}" width="16" height="16" rx="4"/><text x="${r(k)}" y="${r(O+4.2)}">${R}</text></g>`)}this.labelBoxes=[];for(let T of this.sk.cons)lb.has(T.type)&&!T.nolabel&&i.push(this.dimSvg(T,_.has(T.id)));i.push(this.previewSvg()),i.push(this.cmdPreviewSvg()),this.svg.innerHTML=i.join("")}arcPath(t,e=null){let i=e||this.P(t.c_id),s=t.start_angle,r=t.end_angle,a=r-s;for(;a<=0;)a+=Ee;for(;a>Ee;)a-=Ee;let[o,l]=this.toS(i.x+t.radius*Math.cos(s),i.y+t.radius*Math.sin(s)),[c,h]=this.toS(i.x+t.radius*Math.cos(r),i.y+t.radius*Math.sin(r)),u=t.radius*this.view.s;return`M${o.toFixed(1)} ${l.toFixed(1)}A${u.toFixed(1)} ${u.toFixed(1)} 0 ${a>Math.PI?1:0} 0 ${c.toFixed(1)} ${h.toFixed(1)}`}consAnchor(t){let e=r=>{let a=this.P(r.p1_id),o=this.P(r.p2_id);return this.toS((a.x+o.x)/2,(a.y+o.y)/2)},i=r=>{let a=this.P(r);if(!a)return null;if(a.type==="line")return a.ref?this.toS(0,0):e(a);if(a.type==="circle"){let o=this.P(a.c_id);return this.toS(o.x+a.radius*.707,o.y+a.radius*.707)}if(a.type==="arc"){let o=this.P(a.c_id),l=(a.start_angle+a.end_angle)/2+(a.end_angle<a.start_angle?Math.PI:0);return this.toS(o.x+a.radius*Math.cos(l),o.y+a.radius*Math.sin(l))}return a.type==="point"?this.toS(a.x,a.y):null},s=t.l_id||t.l1_id||t.c_id||t.a_id||t.c1_id||t.a1_id||t.p_id||t.p1_id;return i(s)}dimSvg(t,e){let i=(m,_)=>this.toS(m,_),s=m=>m.toFixed(1),r=m=>this.P(m),a="",o=kd(t,this.sk.geo),l=t.type==="l2l_angle_ll",c=t.lx,h=t.ly;try{if(t.type==="p2p_distance"||t.type==="difference"){let m=t.type==="difference"?r(t.param2.o_id):r(t.p1_id),_=t.type==="difference"?r(t.param1.o_id):r(t.p2_id),M,b;if(t.type==="difference"&&t.param1.prop==="x")M=[m.x,h],b=[_.x,h];else if(t.type==="difference")M=[c,m.y],b=[c,_.y];else{let Q=mn([_.x-m.x,_.y-m.y]),U=[-Q[1],Q[0]],G=(c-m.x)*U[0]+(h-m.y)*U[1];M=[m.x+U[0]*G,m.y+U[1]*G],b=[_.x+U[0]*G,_.y+U[1]*G]}let[T,R]=i(m.x,m.y),[y,A]=i(_.x,_.y),[z,k]=i(...M),[O,X]=i(...b);a=`M${s(T)} ${s(R)}L${s(z)} ${s(k)}M${s(y)} ${s(A)}L${s(O)} ${s(X)}M${s(z)} ${s(k)}L${s(O)} ${s(X)}`,a+=Bd([z,k],[O,X])}else if(t.type==="p2l_distance"){let m=r(t.p_id),_=r(t.l_id),M=r(_.p1_id),b=r(_.p2_id),T=pb([m.x,m.y],[M.x,M.y],[b.x,b.y]),R=[M.x+(b.x-M.x)*T,M.y+(b.y-M.y)*T],[y,A]=i(m.x,m.y),[z,k]=i(...R);a=`M${s(y)} ${s(A)}L${s(z)} ${s(k)}`+Bd([y,A],[z,k])}else if(t.type==="circle_diameter"||t.type==="arc_diameter"||t.type==="circle_radius"||t.type==="arc_radius"){let m=r(t.c_id||t.a_id),_=r(m.c_id),M=mn([c-_.x,h-_.y]),b=t.type.includes("diameter"),T=b?[_.x-M[0]*m.radius,_.y-M[1]*m.radius]:[_.x,_.y],R=[_.x+M[0]*m.radius,_.y+M[1]*m.radius],[y,A]=i(...T),[z,k]=i(...R),[O,X]=i(c,h);a=`M${s(y)} ${s(A)}L${s(z)} ${s(k)}L${s(O)} ${s(X)}`+Bd([y,A],[z,k],!b)}else if(l){let m=r(t.l1_id),_=r(t.l2_id),M=_b(r(m.p1_id),r(m.p2_id),r(_.p1_id),r(_.p2_id));if(m.ref&&!_.ref){let b=r(_.p1_id);M=[b.x,b.y];let[T,R]=i(b.x,b.y),y=m.id==="AX"?1:0,A=m.id==="AX"?0:-1,z=Math.hypot(c-b.x,h-b.y)*this.view.s+10;a+=`M${s(T)} ${s(R)}L${s(T+y*z)} ${s(R+A*z)}`}if(M){let b=Math.hypot(c-M[0],h-M[1])*this.view.s,T=Math.atan2(r(m.p2_id).y-r(m.p1_id).y,r(m.p2_id).x-r(m.p1_id).x),[R,y]=i(M[0],M[1]),A=T,z=T+o*Math.PI/180,k=[R+b*Math.cos(A),y-b*Math.sin(A)],O=[R+b*Math.cos(z),y-b*Math.sin(z)];a+=`M${s(k[0])} ${s(k[1])}A${s(b)} ${s(b)} 0 0 ${o>0?0:1} ${s(O[0])} ${s(O[1])}`}o=Math.abs(o)}}catch{}let[u,d]=i(c,h),f=Number(t.expr),g=t.type.includes("diameter")?"\u2300":t.type.includes("radius")?"R":"",x=Number.isFinite(f)&&String(t.expr).trim()!==""?`${g}${be(o,2)}${l?"\xB0":""}`:`${g}${t.expr} = ${be(o,2)}${l?"\xB0":""}`,p=x.length*7.4+14;return this.labelBoxes.push({id:t.id,x0:u-p/2,x1:u+p/2,y0:d-12,y1:d+12}),`<g class="sk-dim ${e?"bad":""} ${this.sel.has(t.id)?"sel":""}"><path d="${a}"/><rect x="${s(u-p/2)}" y="${s(d-11)}" width="${s(p)}" height="22" rx="6"/><text x="${s(u)}" y="${s(d+4.5)}">${yb(x)}</text></g>`}previewSvg(){let t=this.state;if(!t||!t.cur)return"";let e=(o,l)=>this.toS(o,l),i=o=>o.toFixed(1),s=t.cur,r=[],a=o=>{if(o.point||o.curve){let[l,c]=e(o.x,o.y);r.push(`<circle cx="${i(l)}" cy="${i(c)}" r="9" class="sk-snap ${o.point?"pt":""}"/>`)}};if(t.kind==="line"){let o=t.lastId?this.P(t.lastId):t.start,[l,c]=e(o.x,o.y),[h,u]=e(s.x,s.y);if(!t.fresh||this.gesture?.moved){r.push(`<path d="M${i(l)} ${i(c)}L${i(h)} ${i(u)}" class="sk-preview"/>`);let d=Math.hypot(s.x-o.x,s.y-o.y),f=Math.atan2(s.y-o.y,s.x-o.x)*180/Math.PI,g=Math.min(42,Math.hypot(h-l,u-c)*.6);if(g>12&&Math.abs(f)>.5&&Math.abs(Math.abs(f)-180)>.5){let m=l+g*Math.cos(f*Math.PI/180),_=c-g*Math.sin(f*Math.PI/180);r.push(`<path d="M${i(l)} ${i(c)}H${i(l+g+10)}" class="sk-preview thin"/><path d="M${i(l+g)} ${i(c)}A${i(g)} ${i(g)} 0 0 ${f>0?0:1} ${i(m)} ${i(_)}" class="sk-angle"/>`)}r.push(`<text x="${i(h+14)}" y="${i(u-14)}" class="sk-hint">${be(d,2)} mm  \u2220 ${be(f,1)}\xB0</text>`);let x=Math.abs(Math.atan2(s.y-o.y,s.x-o.x)),p=3*Math.PI/180;x<p||Math.abs(x-Math.PI)<p?r.push(`<text x="${i((l+h)/2)}" y="${i((c+u)/2-10)}" class="sk-hint hv">H</text>`):Math.abs(x-Math.PI/2)<p&&r.push(`<text x="${i((l+h)/2+10)}" y="${i((c+u)/2)}" class="sk-hint hv">V</text>`)}r.push(`<circle cx="${i(l)}" cy="${i(c)}" r="4" class="sk-pt sel"/>`)}else if(t.kind==="rect"){let o=t.start,[l,c]=e(o.x,o.y),[h,u]=e(s.x,s.y);r.push(`<path d="M${i(l)} ${i(c)}H${i(h)}V${i(u)}H${i(l)}Z" class="sk-preview"/>`),r.push(`<text x="${i(h+14)}" y="${i(u-14)}" class="sk-hint">${be(Math.abs(s.x-o.x),2)} \xD7 ${be(Math.abs(s.y-o.y),2)}</text>`)}else if(t.kind==="circle"){let o=t.start,[l,c]=e(o.x,o.y),h=Math.hypot(s.x-o.x,s.y-o.y);r.push(`<circle cx="${i(l)}" cy="${i(c)}" r="${i(h*this.view.s)}" class="sk-preview"/><circle cx="${i(l)}" cy="${i(c)}" r="3" class="sk-pt sel"/>`);let[u,d]=e(s.x,s.y);r.push(`<text x="${i(u+14)}" y="${i(d-14)}" class="sk-hint">\u2300 ${be(h*2,2)}</text>`)}else if(t.kind==="arc"){let o=[...t.pts,s];for(let l of t.pts){let[c,h]=e(l.x,l.y);r.push(`<circle cx="${i(c)}" cy="${i(h)}" r="4" class="sk-pt sel"/>`)}if(o.length===2){let[l,c]=e(o[0].x,o[0].y),[h,u]=e(o[1].x,o[1].y);r.push(`<path d="M${i(l)} ${i(c)}L${i(h)} ${i(u)}" class="sk-preview thin"/>`)}if(o.length===3){let l=Op(o[0],o[2],o[1]);if(l){let c=(o[2].x-o[0].x)*(o[1].y-o[2].y)-(o[2].y-o[0].y)*(o[1].x-o[2].x)>0,[h,u]=c?[o[0],o[1]]:[o[1],o[0]];r.push(`<path d="${this.arcPath({radius:l.r,start_angle:Math.atan2(h.y-l.y,h.x-l.x),end_angle:Math.atan2(u.y-l.y,u.x-l.x)},l)}" class="sk-preview"/>`)}}}else if(t.kind==="point"){let[o,l]=e(s.x,s.y);r.push(`<circle cx="${i(o)}" cy="${i(l)}" r="4" class="sk-pt sel"/>`)}return a(s),r.join("")}};function Od(n){let t=[];for(let[e,i]of Object.entries(n))e!=="id"&&e.endsWith("_id")&&typeof i=="string"&&t.push(i),i&&typeof i=="object"&&i.o_id&&t.push(i.o_id);return t}var zd={smirror:{title:"Specchia",icon:"mirror",fields:[{k:"objects",kind:"pick",what:"curves",multi:!0,label:"Oggetti",hint:"Tocca linee, cerchi, archi o punti da specchiare"},{k:"axis",kind:"pick",what:"line",multi:!1,label:"Linea di specchio",hint:"Tocca la linea di simmetria (vanno bene anche gli assi tratteggiati)"}]},sfillet:{title:"Raccordo",icon:"fillet",fields:[{k:"corners",kind:"pick",what:"corner",multi:!0,label:"Angoli",hint:"Tocca gli angoli tra due linee (o una linea vicino all'angolo)"},{k:"r",kind:"num",label:"Raggio",unit:"mm",init:"3"}]},schamfer:{title:"Smusso",icon:"chamfer",fields:[{k:"corners",kind:"pick",what:"corner",multi:!0,label:"Angoli",hint:"Tocca gli angoli tra due linee (o una linea vicino all'angolo)"},{k:"d",kind:"num",label:"Distanza",unit:"mm",init:"2"}]},offset:{title:"Offset",icon:"offset",fields:[{k:"objects",kind:"pick",what:"chain",multi:!0,label:"Contorno",hint:"Tocca il contorno da copiare: si prende tutto il tratto collegato"},{k:"d",kind:"num",label:"Distanza",unit:"mm",init:"2"},{k:"flip",kind:"toggle",label:"Dall'altro lato"}]}};function Fd(n,t){let e=a=>n.P(a);if(t.type==="line"){let a=e(t.p1_id),o=e(t.p2_id);return{kind:"line",a:[a.x,a.y],b:[o.x,o.y]}}let i=e(t.c_id);if(t.type==="circle")return{kind:"circle",c:[i.x,i.y],r:t.radius};let s=(t.start_angle%Ee+Ee)%Ee,r=((t.end_angle-t.start_angle)%Ee+Ee)%Ee;return r<1e-9&&(r=Ee),{kind:"arc",c:[i.x,i.y],r:t.radius,a0:s,sw:r}}function mc(n,t,e=!1){if(n.kind==="line"){let r=n.b[0]-n.a[0],a=n.b[1]-n.a[1],o=r*r+a*a,l=o?((t[0]-n.a[0])*r+(t[1]-n.a[1])*a)/o:0;return e?Math.max(0,Math.min(1,l)):l<-1e-7||l>1+1e-7?null:Math.max(0,Math.min(1,l))}let i=(Math.atan2(t[1]-n.c[1],t[0]-n.c[0])%Ee+Ee)%Ee;if(n.kind==="circle")return i;let s=((i-n.a0)%Ee+Ee)%Ee;if(s>n.sw+1e-7)if(Ee-s<1e-7)s=0;else return e?s-n.sw<Ee-s?n.sw:0:null;return Math.min(s,n.sw)}function cb(n,t){return Vd(n,t).filter(i=>mc(n,i)!=null&&mc(t,i)!=null)}function Vd(n,t){let e=h=>h.kind==="line";if(e(n)&&e(t)){let h=[n.b[0]-n.a[0],n.b[1]-n.a[1]],u=[t.b[0]-t.a[0],t.b[1]-t.a[1]],d=h[0]*u[1]-h[1]*u[0];if(Math.abs(d)<1e-12)return[];let f=((t.a[0]-n.a[0])*u[1]-(t.a[1]-n.a[1])*u[0])/d;return[[n.a[0]+h[0]*f,n.a[1]+h[1]*f]]}if(!e(n)&&e(t))return Vd(t,n);if(e(n)){let h=[n.b[0]-n.a[0],n.b[1]-n.a[1]],u=[n.a[0]-t.c[0],n.a[1]-t.c[1]],d=h[0]*h[0]+h[1]*h[1],f=2*(u[0]*h[0]+u[1]*h[1]),g=u[0]*u[0]+u[1]*u[1]-t.r*t.r,x=f*f-4*d*g;if(d<1e-18||x<-1e-9*d*t.r)return[];x=Math.max(0,x);let p=Math.sqrt(x);return(p<1e-12?[-f/(2*d)]:[(-f-p)/(2*d),(-f+p)/(2*d)]).map(_=>[n.a[0]+h[0]*_,n.a[1]+h[1]*_])}let i=t.c[0]-n.c[0],s=t.c[1]-n.c[1],r=Math.hypot(i,s);if(r<1e-9||r>n.r+t.r+1e-7||r<Math.abs(n.r-t.r)-1e-7)return[];let a=(n.r*n.r-t.r*t.r+r*r)/(2*r),o=Math.sqrt(Math.max(0,n.r*n.r-a*a)),l=n.c[0]+a*i/r,c=n.c[1]+a*s/r;return o<1e-9?[[l,c]]:[[l-o*s/r,c+o*i/r],[l+o*s/r,c-o*i/r]]}function hb(n,t,e){let i=r=>r.kind==="line"?{kind:"line",a:r.a,b:r.b}:{kind:"circle",c:r.c,r:r.r},s=Vd(i(n),i(t));return s.length?(s.sort((r,a)=>Math.hypot(r[0]-e[0],r[1]-e[1])-Math.hypot(a[0]-e[0],a[1]-e[1])),s[0]):null}function db(n,t){let e=n.P(t.c_id),i=t.end_angle-t.start_angle;for(;i<=0;)i+=Ee;let s=t.start_angle+i/2;return{x:e.x+t.radius*Math.cos(s),y:e.y+t.radius*Math.sin(s)}}function ub(n,t,e){let i=e.x-t.x,s=e.y-t.y;return((n.x-t.x)*s-(n.y-t.y)*i)/(Math.hypot(i,s)||1)}function rr(n,t,e){let i=n.P(t.c_id),s=n.P(e);return Math.atan2(s.y-i.y,s.x-i.x)}function fb(n,t,e,i){t.type="arc",t.start_id=e,t.end_id=i,t.start_angle=rr(n,t,e),t.end_angle=rr(n,t,i);for(let s of n.sk.cons)if(s.type==="circle_diameter"&&s.c_id===t.id)s.type="arc_diameter",s.a_id=t.id,delete s.c_id;else if(s.type==="circle_radius"&&s.c_id===t.id)s.type="arc_radius",s.a_id=t.id,delete s.c_id;else if(s.type==="point_on_circle"&&s.c_id===t.id)s.type="point_on_arc",s.a_id=t.id,delete s.c_id;else if(s.type==="tangent_lc"&&s.c_id===t.id)s.type="tangent_la",s.a_id=t.id,delete s.c_id;else if((s.type==="equal_radius_cc"||s.type==="tangent_cc")&&(s.c1_id===t.id||s.c2_id===t.id)){let r=s.c1_id===t.id?s.c2_id:s.c1_id;s.type=s.type==="equal_radius_cc"?"equal_radius_ca":"tangent_ca",s.c_id=r,s.a_id=t.id,delete s.c1_id,delete s.c2_id}else if((s.type==="equal_radius_ca"||s.type==="tangent_ca")&&s.c_id===t.id){let r=s.a_id;s.type=s.type==="equal_radius_ca"?"equal_radius_aa":"tangent_aa",s.a1_id=t.id,s.a2_id=r,delete s.c_id,delete s.a_id}}function Bp(n,t,e){let i=e[0]-t[0],s=e[1]-t[1],r=i*i+s*s;return r?Math.max(0,Math.min(1,((n[0]-t[0])*i+(n[1]-t[1])*s)/r)):0}function pb(n,t,e){let i=e[0]-t[0],s=e[1]-t[1],r=i*i+s*s;return r?((n[0]-t[0])*i+(n[1]-t[1])*s)/r:0}function mb(n,t,e){let i=Bp(n,t,e);return Math.hypot(n[0]-t[0]-i*(e[0]-t[0]),n[1]-t[1]-i*(e[1]-t[1]))}function mn(n){let t=Math.hypot(n[0],n[1])||1;return[n[0]/t,n[1]/t]}function gb(n,t,e){let i=r=>(r%Ee+Ee)%Ee,s=i(e-t)||Ee;return i(n-t)<=s+1e-9}function Op(n,t,e){let i=2*(n.x*(t.y-e.y)+t.x*(e.y-n.y)+e.x*(n.y-t.y));if(Math.abs(i)<1e-12)return null;let s=n.x*n.x+n.y*n.y,r=t.x*t.x+t.y*t.y,a=e.x*e.x+e.y*e.y,o=(s*(t.y-e.y)+r*(e.y-n.y)+a*(n.y-t.y))/i,l=(s*(e.x-t.x)+r*(n.x-e.x)+a*(t.x-n.x))/i;return{x:o,y:l,r:Math.hypot(n.x-o,n.y-l)}}function _b(n,t,e,i){let s=[t.x-n.x,t.y-n.y],r=[i.x-e.x,i.y-e.y],a=s[0]*r[1]-s[1]*r[0];if(Math.abs(a)<1e-12)return null;let o=((e.x-n.x)*r[1]-(e.y-n.y)*r[0])/a;return[n.x+s[0]*o,n.y+s[1]*o]}function Bd(n,t,e=!1){let i=mn([t[0]-n[0],t[1]-n[1]]),s=[-i[1],i[0]],r=8,a=3,o=(l,c)=>`M${(l[0]-c[0]*r+s[0]*a).toFixed(1)} ${(l[1]-c[1]*r+s[1]*a).toFixed(1)}L${l[0].toFixed(1)} ${l[1].toFixed(1)}L${(l[0]-c[0]*r-s[0]*a).toFixed(1)} ${(l[1]-c[1]*r-s[1]*a).toFixed(1)}`;return(e?"":o(n,[-i[0],-i[1]]))+o(t,i)}function yb(n){return String(n).replace(/[<>&]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[t])}var _c={mm:1,cm:10,in:25.4,pt:.35277777777777775,pc:4.233333333333333,px:.26458333333333334,"":.26458333333333334};function Gp(n){let t=new DOMParser().parseFromString(n,"image/svg+xml"),e=t.documentElement;if(!e||e.nodeName.toLowerCase()!=="svg"||t.querySelector("parsererror"))throw new Error("Il file non \xE8 un SVG valido");let i=(e.getAttribute("viewBox")||"").trim().split(/[\s,]+/).map(Number),r=(m=>{let _=/^\s*([\d.eE+-]+)\s*([a-z%]*)\s*$/.exec(m||"");return _?{v:+_[1],u:_[2]}:null})(e.getAttribute("width")),a=_c.px;r&&r.u!=="%"&&_c[r.u]!=null&&(a=i.length===4&&i[2]>0?r.v*_c[r.u]/i[2]:_c[r.u]);let o=document.createElement("div");o.style.cssText="position:absolute;left:-10000px;top:0;width:1px;height:1px;overflow:hidden;visibility:hidden";let l=document.importNode(e,!0);l.removeAttribute("viewBox"),l.setAttribute("width","1000"),l.setAttribute("height","1000"),o.appendChild(l),document.body.appendChild(o);let c=[],h=[],u=0;try{for(let m of l.querySelectorAll("path,rect,circle,ellipse,line,polyline,polygon")){if(m.closest("defs,clipPath,mask,symbol,marker,pattern")||getComputedStyle(m).display==="none")continue;let M=m.getCTM();if(!M){u++;continue}let b=k=>[(M.a*k[0]+M.c*k[1]+M.e)*a,-(M.b*k[0]+M.d*k[1]+M.f)*a],T=Math.abs(M.a-M.d)<1e-9&&Math.abs(M.b+M.c)<1e-9,R=Math.hypot(M.a,M.b)*a,y=k=>parseFloat(m.getAttribute(k))||0,A=m.nodeName.toLowerCase();if(A==="circle"&&T){h.push({c:b([y("cx"),y("cy")]),r:y("r")*R});continue}let z="";if(A==="path")z=m.getAttribute("d")||"";else if(A==="rect")z=xb(y("x"),y("y"),y("width"),y("height"),m.getAttribute("rx"),m.getAttribute("ry"));else if(A==="circle")z=zp(y("cx"),y("cy"),y("r"),y("r"));else if(A==="ellipse")z=zp(y("cx"),y("cy"),y("rx"),y("ry"));else if(A==="line")z=`M${y("x1")} ${y("y1")}L${y("x2")} ${y("y2")}`;else{let k=(m.getAttribute("points")||"").trim().split(/[\s,]+/).map(Number);k.length>=4&&(z="M"+k.join(" ")+(A==="polygon"?"Z":""))}for(let k of vb(z)){let O=k.segs.map(X=>X.k==="L"?{k:"L",a:b(X.a),b:b(X.b)}:{k:"C",p:X.p.map(b)});O.length&&c.push({segs:O,closed:k.closed})}}}finally{o.remove()}l.querySelector("text")&&u++;let d=1/0,f=1/0,g=-1/0,x=-1/0,p=m=>{d=Math.min(d,m[0]),g=Math.max(g,m[0]),f=Math.min(f,m[1]),x=Math.max(x,m[1])};for(let m of c)for(let _ of m.segs)(_.k==="L"?[_.a,_.b]:_.p).forEach(p);for(let m of h)p([m.c[0]-m.r,m.c[1]-m.r]),p([m.c[0]+m.r,m.c[1]+m.r]);if(!Number.isFinite(d))throw new Error("Nell'SVG non ci sono forme da importare (i testi vanno convertiti in tracciati)");return{loops:c,circles:h,box:{x0:d,y0:f,x1:g,y1:x,w:g-d,h:x-f},skipped:u}}function Wp(n,t={}){let e=t.scale||1,{box:i}=n,s=t.anchor==="corner"?i.x0:(i.x0+i.x1)/2,r=t.anchor==="corner"?i.y0:(i.y0+i.y1)/2,a=x=>[(x[0]-s)*e,(x[1]-r)*e],o=[],l=0,c=x=>`${x}${++l+1e5}`,h=t.fixed!==!1,u=x=>{let p=c("p");return o.push({id:p,type:"point",x:x[0],y:x[1],fixed:h}),p},d=0,f=0,g=0;for(let x of n.circles){let p=u(a(x.c));o.push({id:c("k"),type:"circle",c_id:p,radius:x.r*e}),g++}for(let x of n.loops){let p=[];for(let b of x.segs)if(b.k==="L"){let T=a(b.a),R=a(b.b);Pn(T,R)>1e-6&&p.push({k:"L",a:T,b:R})}else Hd(b.p.map(a),p,0);if(!p.length)continue;let m=x.closed||Pn(p[0].a,p[p.length-1].b)<1e-6;m&&Pn(p[0].a,p[p.length-1].b)>1e-6&&p.push({k:"L",a:p[p.length-1].b,b:p[0].a});let _=u(p[0].a),M=_;p.forEach((b,T)=>{let y=T===p.length-1&&m?_:u(b.b);if(b.k==="L")o.push({id:c("l"),type:"line",p1_id:M,p2_id:y}),d++;else{let A=u(b.c),z=$p(yc(b.m,b.a),yc(b.b,b.m))>0,[k,O,X,Q]=z?[M,y,b.a,b.b]:[y,M,b.b,b.a];o.push({id:c("a"),type:"arc",c_id:A,radius:b.r,start_id:k,end_id:O,start_angle:Math.atan2(X[1]-b.c[1],X[0]-b.c[0]),end_angle:Math.atan2(Q[1]-b.c[1],Q[0]-b.c[0])}),f++}M=y})}return{geo:o,stats:{lines:d,arcs:f,circles:g}}}function xb(n,t,e,i,s,r){let a=parseFloat(s),o=parseFloat(r);return Number.isNaN(a)&&(a=Number.isNaN(o)?0:o),Number.isNaN(o)&&(o=a),a=Math.min(a,e/2),o=Math.min(o,i/2),a>0&&o>0?`M${n+a} ${t}H${n+e-a}A${a} ${o} 0 0 1 ${n+e} ${t+o}V${t+i-o}A${a} ${o} 0 0 1 ${n+e-a} ${t+i}H${n+a}A${a} ${o} 0 0 1 ${n} ${t+i-o}V${t+o}A${a} ${o} 0 0 1 ${n+a} ${t}Z`:`M${n} ${t}H${n+e}V${t+i}H${n}Z`}function zp(n,t,e,i){return`M${n+e} ${t}A${e} ${i} 0 0 1 ${n} ${t+i}A${e} ${i} 0 0 1 ${n-e} ${t}A${e} ${i} 0 0 1 ${n} ${t-i}A${e} ${i} 0 0 1 ${n+e} ${t}Z`}function vb(n){let t=String(n).match(/[MmLlHhVvCcSsQqTtAaZz]|[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g)||[],e=[],i=0,s="",r=[0,0],a=[0,0],o=null,l=null,c=null,h=()=>parseFloat(t[i++]),u=()=>i<t.length&&!/^[A-Za-z]$/.test(t[i]),d=x=>{c={segs:[],closed:!1},e.push(c),a=x,r=x},f=x=>{c||d(r),c.segs.push({k:"L",a:r,b:x}),r=x},g=(x,p,m)=>{c||d(r),c.segs.push({k:"C",p:[r,x,p,m]}),r=m};for(;i<t.length;){/^[A-Za-z]$/.test(t[i])&&(s=t[i++]);let x=s===s.toLowerCase(),p=(_,M)=>x?[r[0]+_,r[1]+M]:[_,M],m=s.toUpperCase();if(m==="Z"){c&&(Pn(r,a)>1e-9&&c.segs.push({k:"L",a:r,b:a}),c.closed=!0),r=a,c=null,o=l=null;continue}if(!u()){i++;continue}if(m==="M"){d(p(h(),h())),s=x?"l":"L",o=l=null;continue}if(m==="L")f(p(h(),h())),o=l=null;else if(m==="H"){let _=h();f([x?r[0]+_:_,r[1]]),o=l=null}else if(m==="V"){let _=h();f([r[0],x?r[1]+_:_]),o=l=null}else if(m==="C"){let _=p(h(),h()),M=p(h(),h()),b=p(h(),h());g(_,M,b),o=M,l=null}else if(m==="S"){let _=o?[2*r[0]-o[0],2*r[1]-o[1]]:r,M=p(h(),h()),b=p(h(),h());g(_,M,b),o=M,l=null}else if(m==="Q"||m==="T"){let _=m==="Q"?p(h(),h()):l?[2*r[0]-l[0],2*r[1]-l[1]]:r,M=p(h(),h()),b=r;g([b[0]+2/3*(_[0]-b[0]),b[1]+2/3*(_[1]-b[1])],[M[0]+2/3*(_[0]-M[0]),M[1]+2/3*(_[1]-M[1])],M),l=_,o=null}else if(m==="A"){let _=Math.abs(h()),M=Math.abs(h()),b=h(),T=h(),R=h(),y=p(h(),h());for(let A of bb(r,y,_,M,b,T,R))g(A[0],A[1],A[2]);(!_||!M)&&f(y),r=y,o=l=null}else i++}return e.filter(x=>x.segs.length)}function bb(n,t,e,i,s,r,a){if(!e||!i||Pn(n,t)<1e-12)return[];let o=s*Math.PI/180,l=Math.cos(o),c=Math.sin(o),h=(n[0]-t[0])/2,u=(n[1]-t[1])/2,d=l*h+c*u,f=-c*h+l*u,g=d*d/(e*e)+f*f/(i*i);g>1&&(e*=Math.sqrt(g),i*=Math.sqrt(g));let x=e*e*i*i-e*e*f*f-i*i*d*d,p=e*e*f*f+i*i*d*d,m=Math.sqrt(Math.max(0,x/p));r===a&&(m=-m);let _=m*e*f/i,M=-m*i*d/e,b=l*_-c*M+(n[0]+t[0])/2,T=c*_+l*M+(n[1]+t[1])/2,R=(G,tt,Y,ht)=>Math.atan2(G*ht-tt*Y,G*Y+tt*ht),y=R(1,0,(d-_)/e,(f-M)/i),A=R((d-_)/e,(f-M)/i,(-d-_)/e,(-f-M)/i);!a&&A>0&&(A-=2*Math.PI),a&&A<0&&(A+=2*Math.PI);let z=Math.max(1,Math.ceil(Math.abs(A)/(Math.PI/2)-1e-9)),k=A/z,O=4/3*Math.tan(k/4),X=G=>[b+e*Math.cos(G)*l-i*Math.sin(G)*c,T+e*Math.cos(G)*c+i*Math.sin(G)*l],Q=G=>[-e*Math.sin(G)*l-i*Math.cos(G)*c,-e*Math.sin(G)*c+i*Math.cos(G)*l],U=[];for(let G=0;G<z;G++){let tt=y+G*k,Y=tt+k,ht=X(tt),W=X(Y),lt=Q(tt),dt=Q(Y);U.push([[ht[0]+O*lt[0],ht[1]+O*lt[1]],[W[0]-O*dt[0],W[1]-O*dt[1]],G===z-1?t:W])}return U}function Vp(n,t){let e=1-t,i=e*e*e,s=3*e*e*t,r=3*e*t*t,a=t*t*t;return[i*n[0][0]+s*n[1][0]+r*n[2][0]+a*n[3][0],i*n[0][1]+s*n[1][1]+r*n[2][1]+a*n[3][1]]}function Mb(n,t){let e=(c,h)=>[c[0]+(h[0]-c[0])*t,c[1]+(h[1]-c[1])*t],i=e(n[0],n[1]),s=e(n[1],n[2]),r=e(n[2],n[3]),a=e(i,s),o=e(s,r),l=e(a,o);return[[n[0],i,a,l],[l,o,r,n[3]]]}function Hd(n,t,e){let i=n[0],s=n[3],r=Pn(i,s);if(Math.max(Hp(n[1],i,s),Hp(n[2],i,s))<=.02){r>1e-6&&t.push({k:"L",a:i,b:s});return}let o=Vp(n,.5),l=Sb(i,o,s);if(l&&r>1e-6){let u=0;for(let d=1;d<10;d++){let f=Vp(n,d/10);u=Math.max(u,Math.abs(Pn(f,l.c)-l.r))}if(u<=.02||e>14){t.push({k:"A",a:i,b:s,m:o,c:l.c,r:l.r});return}}else if(e>14){t.push({k:"L",a:i,b:s});return}let[c,h]=Mb(n,.5);Hd(c,t,e+1),Hd(h,t,e+1)}var Pn=(n,t)=>Math.hypot(n[0]-t[0],n[1]-t[1]),yc=(n,t)=>[n[0]-t[0],n[1]-t[1]],$p=(n,t)=>n[0]*t[1]-n[1]*t[0];function Hp(n,t,e){let i=Pn(t,e);return i<1e-12?Pn(n,t):Math.abs($p(yc(e,t),yc(n,t)))/i}function Sb(n,t,e){let i=2*(n[0]*(t[1]-e[1])+t[0]*(e[1]-n[1])+e[0]*(n[1]-t[1]));if(Math.abs(i)<1e-12)return null;let s=n[0]*n[0]+n[1]*n[1],r=t[0]*t[0]+t[1]*t[1],a=e[0]*e[0]+e[1]*e[1],o=(s*(t[1]-e[1])+r*(e[1]-n[1])+a*(n[1]-t[1]))/i,l=(s*(e[0]-t[0])+r*(n[0]-e[0])+a*(t[0]-n[0]))/i,c=Math.hypot(n[0]-o,n[1]-l);return c>1e6?null:{c:[o,l],r:c}}var xc=class{constructor(t){this.worker=new Worker(t,{type:"module"}),this.seq=0,this.pending=new Map,this.worker.onmessage=({data:e})=>{let i=this.pending.get(e.id);i&&(this.pending.delete(e.id),e.ok?i.resolve(e.result):i.reject(new Error(e.error)))},this.worker.onerror=e=>{for(let i of this.pending.values())i.reject(new Error(e.message||"Errore del motore CAD"));this.pending.clear()}}call(t,e={}){let i=++this.seq;return new Promise((s,r)=>{this.pending.set(i,{resolve:s,reject:r}),this.worker.postMessage({id:i,cmd:t,args:e})})}};var Xp=[["new","Nuovo corpo"],["join","Unisci"],["cut","Taglia"],["intersect","Interseca"]],jp=[["X","X"],["Y","Y"],["Z","Z"]],Yp={sketch:"Schizzo",extrude:"Estrusione",revolve:"Rivoluzione",fillet:"Raccordo",chamfer:"Smusso",shell:"Guscio",hole:"Foro",pattern:"Serie",mirror:"Specchio",combine:"Combina",move:"Sposta",import:"Importazione"},Gd={sketch:"sketch",extrude:"extrude",revolve:"revolve",fillet:"fillet",chamfer:"chamfer",shell:"shell",hole:"hole",pattern:"pattern",mirror:"mirror",combine:"combine",move:"move",import:"import"},vc=(n,t,e=!1,i=[])=>({k:n,kind:"seg",label:t,options:[...e?[["none","\u2014"]]:[],...jp,...i],get:s=>s[n]==="none"||!s[n]?"none":s[n].world||(s[n].edge?"edge":s[n].line?"line":"Z"),set:(s,r)=>{s[n]=r==="none"?"none":r==="edge"?{edge:null}:r==="line"?{line:null}:{world:r}}}),qp=(n,t)=>[{k:"srcMode",kind:"seg",label:"Cosa ripetere",options:[["feature","Feature"],["body","Corpo"]],get:e=>e.src&&e.src.body!==void 0?"body":"feature",set:(e,i)=>{e.src=i==="body"?{body:null}:{feature:t.toolFeatures.length?t.toolFeatures[t.toolFeatures.length-1].id:null}}},n.src&&n.src.body!==void 0?{k:"srcBody",kind:"pick",pick:"body",label:"Corpo",get:e=>e.src.body?[e.src.body]:[],set:(e,i)=>{e.src={body:i[i.length-1]||null}}}:{k:"srcFeature",kind:"select",label:"Feature",options:t.toolFeatures.map(e=>[e.id,e.name]),get:e=>e.src&&e.src.feature,set:(e,i)=>{e.src={feature:i}}}],Zp={extrude:{title:"Estrudi",init:n=>({type:"extrude",sketch:n.autoRegions?.sketch||null,regions:n.autoRegions?.regions||[],dist:"10",mode:"one",dist2:"10",flip:!1,op:n.hasBodies?"join":"new",targets:[]}),fields:n=>[{k:"regions",kind:"pick",pick:"region",multi:!0,label:"Profili",hint:"Tocca dentro le forme azzurre per sceglierle (tocca di nuovo per toglierle)"},{k:"dist",kind:"num",label:n.mode==="sym"?"Distanza totale":"Distanza",unit:"mm"},{k:"mode",kind:"seg",label:"Estensione",options:[["one","Un lato"],["sym","Simmetrica"],["two","Due lati"]]},n.mode==="two"&&{k:"dist2",kind:"num",label:"Distanza lato 2",unit:"mm"},{k:"flip",kind:"toggle",label:"Inverti direzione"},{k:"op",kind:"seg",label:"Operazione",options:Xp},n.op!=="new"&&{k:"targets",kind:"pick",pick:"body",multi:!0,label:"Corpi coinvolti",hint:"Vuoto = automatico",optional:!0}]},revolve:{title:"Rivoluzione",init:n=>({type:"revolve",sketch:n.autoRegions?.sketch||null,regions:n.autoRegions?.regions||[],axis:{world:"Z"},angle:"360",flip:!1,op:n.hasBodies?"join":"new",targets:[]}),fields:n=>[{k:"regions",kind:"pick",pick:"region",multi:!0,label:"Profili",hint:"Tocca dentro le forme azzurre da far ruotare"},vc("axis","Asse",!1,[["line","Linea"]]),n.axis&&n.axis.line!==void 0&&{k:"axisLine",kind:"pick",pick:"sketchLine",label:"Linea asse",hint:"Tocca una linea dello schizzo",get:t=>t.axis.line?[t.axis.line]:[],set:(t,e)=>{t.axis={line:e[e.length-1]||null}}},{k:"angle",kind:"num",label:"Angolo",unit:"\xB0"},{k:"flip",kind:"toggle",label:"Inverti verso"},{k:"op",kind:"seg",label:"Operazione",options:Xp},n.op!=="new"&&{k:"targets",kind:"pick",pick:"body",multi:!0,label:"Corpi coinvolti",hint:"Vuoto = automatico",optional:!0}]},fillet:{title:"Raccordo",init:()=>({type:"fillet",edges:[],r:"2"}),fields:()=>[{k:"edges",kind:"pick",pick:"edge",multi:!0,label:"Spigoli",hint:"Tocca gli spigoli da arrotondare"},{k:"r",kind:"num",label:"Raggio",unit:"mm"}]},chamfer:{title:"Smusso",init:()=>({type:"chamfer",edges:[],d:"1"}),fields:()=>[{k:"edges",kind:"pick",pick:"edge",multi:!0,label:"Spigoli",hint:"Tocca gli spigoli da smussare"},{k:"d",kind:"num",label:"Distanza",unit:"mm"}]},shell:{title:"Guscio",init:()=>({type:"shell",faces:[],t:"2",outside:!1}),fields:()=>[{k:"faces",kind:"pick",pick:"face",multi:!0,label:"Facce da aprire",hint:"Tocca le facce da togliere"},{k:"t",kind:"num",label:"Spessore",unit:"mm"},{k:"outside",kind:"toggle",label:"Verso l'esterno"}]},hole:{title:"Foro",init:()=>({type:"hole",place:{face:null,pts:[]},dia:"5",depth:"10",through:!1,cbore:!1,cdia:"9",cdepth:"3",flip:!1}),fields:n=>[n.place?{k:"place",kind:"pick",pick:"facePoint",multi:!0,label:"Posizioni",hint:"Tocca una faccia piana dove forare (anche pi\xF9 punti)"}:{k:"note",kind:"note",text:"Le posizioni dei fori sono i punti dello schizzo collegato: modificalo per spostarli o quotarli."},{k:"dia",kind:"num",label:"Diametro",unit:"mm"},{k:"through",kind:"toggle",label:"Passante"},!n.through&&{k:"depth",kind:"num",label:"Profondit\xE0",unit:"mm"},{k:"cbore",kind:"toggle",label:"Lamatura"},n.cbore&&{k:"cdia",kind:"num",label:"Diametro lamatura",unit:"mm"},n.cbore&&{k:"cdepth",kind:"num",label:"Profondit\xE0 lamatura",unit:"mm"},{k:"flip",kind:"toggle",label:"Inverti direzione"}]},pattern:{title:"Serie",init:n=>({type:"pattern",kind:"rect",src:n.toolFeatures.length?{feature:n.toolFeatures[n.toolFeatures.length-1].id}:{body:n.lastBody||null},d1:{world:"X"},n1:"3",s1:"20",d2:"none",n2:"2",s2:"20",axis:{world:"Z"},n:"6",angle:"360",op:"join"}),fields:(n,t)=>[{k:"kind",kind:"seg",label:"Tipo",options:[["rect","Rettangolare"],["circ","Circolare"]]},...qp(n,t),...n.kind==="rect"?[vc("d1","Direzione 1"),{k:"n1",kind:"num",label:"Quantit\xE0",unit:""},{k:"s1",kind:"num",label:"Passo",unit:"mm"},vc("d2","Direzione 2",!0),n.d2&&n.d2!=="none"&&{k:"n2",kind:"num",label:"Quantit\xE0 2",unit:""},n.d2&&n.d2!=="none"&&{k:"s2",kind:"num",label:"Passo 2",unit:"mm"}]:[vc("axis","Asse",!1,[["edge","Spigolo"]]),n.axis&&n.axis.edge!==void 0&&{k:"axisEdge",kind:"pick",pick:"edge",label:"Spigolo asse",hint:"Tocca uno spigolo dritto o circolare",get:e=>e.axis.edge?[e.axis.edge]:[],set:(e,i)=>{e.axis={edge:i[i.length-1]||null}}},{k:"n",kind:"num",label:"Quantit\xE0",unit:""},{k:"angle",kind:"num",label:"Angolo totale",unit:"\xB0"}],n.src&&n.src.body!==void 0&&{k:"op",kind:"seg",label:"Risultato",options:[["join","Unisci"],["new","Nuovi corpi"]]}]},mirror:{title:"Specchio",init:n=>({type:"mirror",src:n.toolFeatures.length?{feature:n.toolFeatures[n.toolFeatures.length-1].id}:{body:n.lastBody||null},plane:{std:"YZ"},op:"join"}),fields:(n,t)=>[...qp(n,t),{k:"planeMode",kind:"seg",label:"Piano",options:[["XY","XY"],["XZ","XZ"],["YZ","YZ"],["face","Faccia"]],get:e=>e.plane.face!==void 0?"face":e.plane.std,set:(e,i)=>{e.plane=i==="face"?{face:null}:{std:i}}},n.plane.face!==void 0&&{k:"planeFace",kind:"pick",pick:"planarFace",label:"Faccia piana",get:e=>e.plane.face?[e.plane.face]:[],set:(e,i)=>{e.plane={face:i[i.length-1]||null}}},n.src&&n.src.body!==void 0&&{k:"op",kind:"seg",label:"Risultato",options:[["join","Unisci"],["new","Nuovo corpo"]]}]},combine:{title:"Combina",init:()=>({type:"combine",target:null,tools:[],op:"join",keep:!1}),fields:()=>[{k:"targetPick",kind:"pick",pick:"body",label:"Corpo di destinazione",get:n=>n.target?[n.target]:[],set:(n,t)=>{n.target=t[t.length-1]||null}},{k:"tools",kind:"pick",pick:"body",multi:!0,label:"Corpi utensile"},{k:"op",kind:"seg",label:"Operazione",options:[["join","Unisci"],["cut","Taglia"],["intersect","Interseca"]]},{k:"keep",kind:"toggle",label:"Mantieni gli utensili"}]},move:{title:"Sposta",init:n=>({type:"move",bodies:n.lastBody?[n.lastBody]:[],dx:"0",dy:"0",dz:"0",raxis:"Z",angle:"0",cx:"0",cy:"0",cz:"0"}),fields:n=>[{k:"bodies",kind:"pick",pick:"body",multi:!0,label:"Corpi"},{k:"dx",kind:"num",label:"X",unit:"mm"},{k:"dy",kind:"num",label:"Y",unit:"mm"},{k:"dz",kind:"num",label:"Z",unit:"mm"},{k:"raxis",kind:"seg",label:"Rotazione attorno a",options:jp},{k:"angle",kind:"num",label:"Angolo",unit:"\xB0"},Number(n.angle)!==0&&{k:"cx",kind:"num",label:"Centro X",unit:"mm"},Number(n.angle)!==0&&{k:"cy",kind:"num",label:"Centro Y",unit:"mm"},Number(n.angle)!==0&&{k:"cz",kind:"num",label:"Centro Z",unit:"mm"}]}};function Pa(n){switch(n.type){case"extrude":case"revolve":return n.regions.length>0&&(n.type!=="revolve"||!n.axis||n.axis.line!==null);case"fillet":case"chamfer":return n.edges.length>0;case"shell":return n.faces.length>0;case"hole":return n.place?n.place.pts.length>0:!!n.sketch;case"pattern":case"mirror":return!!(n.src&&(n.src.feature||n.src.body))&&(n.type!=="mirror"||!n.plane||n.plane.face!==null);case"combine":return!!n.target&&n.tools.length>0;case"move":return n.bodies.length>0;default:return!0}}var wb={sketch:'<path d="M4 20l4-1L19 8l-3-3L5 16z"/><path d="M14 7l3 3"/><path d="M3 21h8" opacity=".5"/>',extrude:'<path d="M4 15l8 4 8-4-8-4z"/><path d="M12 11V3"/><path d="M9 6l3-3 3 3"/><path d="M4 15v-3m16 3v-3" opacity=".5"/>',revolve:'<ellipse cx="12" cy="7" rx="7" ry="2.5"/><path d="M5 7v10c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V7"/><path d="M12 3v18" stroke-dasharray="2 2"/>',hole:'<path d="M3 9l9-5 9 5-9 5z"/><ellipse cx="12" cy="9" rx="3" ry="1.6"/><path d="M9 9v8m6-8v8"/><path d="M9 17c0 .9 1.3 1.6 3 1.6s3-.7 3-1.6"/>',fillet:'<path d="M4 20V10a6 6 0 016-6h10"/><path d="M4 4h4M4 4v4" opacity=".45"/>',chamfer:'<path d="M4 20V11l7-7h9"/><path d="M4 4h4M4 4v4" opacity=".45"/>',shell:'<path d="M3 8l9-4 9 4v9l-9 4-9-4z"/><path d="M7 9.5l5-2.2 5 2.2v6l-5 2.2-5-2.2z"/>',pattern:'<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1" opacity=".55"/><rect x="3" y="15" width="6" height="6" rx="1" opacity=".55"/><rect x="15" y="15" width="6" height="6" rx="1" opacity=".55"/>',mirror:'<path d="M12 2v20" stroke-dasharray="2 2"/><path d="M9 6L3 18h6z"/><path d="M15 6l6 12h-6z" opacity=".55"/>',combine:'<circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/>',move:'<path d="M12 3v18M3 12h18"/><path d="M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>',import:'<path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M4 17v3h16v-3"/>',export:'<path d="M12 15V3"/><path d="M7 8l5-5 5 5"/><path d="M4 17v3h16v-3"/>',params:'<path d="M10 4c-2 0-3 1-3 3v3H4m3 0h4M7 10v7c0 2-1 3-3 3"/><path d="M14 11l6 7M20 11l-6 7"/>',undo:'<path d="M9 7L4 12l5 5"/><path d="M4 12h11a5 5 0 010 10h-3"/>',redo:'<path d="M15 7l5 5-5 5"/><path d="M20 12H9a5 5 0 000 10h3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',tree:'<path d="M5 4h6M5 4v16M5 10h6M5 16h6"/><rect x="13" y="2" width="8" height="4" rx="1"/><rect x="13" y="8" width="8" height="4" rx="1"/><rect x="13" y="14" width="8" height="4" rx="1"/>',home:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',eye:'<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 6.1A10.8 10.8 0 0112 6c6.5 0 10 6 10 6a17 17 0 01-3.2 3.8M6.6 6.6C3.7 8.4 2 12 2 12s3.5 6 10 6c1.6 0 3-.4 4.3-.9"/>',body:'<path d="M3 8l9-5 9 5v8l-9 5-9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',check:'<path d="M4 12l5 5L20 6"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',line:'<path d="M4 20L20 4"/><circle cx="4" cy="20" r="1.8"/><circle cx="20" cy="4" r="1.8"/>',rect:'<rect x="4" y="6" width="16" height="12" rx="0.5"/>',circle:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="1.2"/>',arc:'<path d="M4 18a10 10 0 0116 0"/><circle cx="4" cy="18" r="1.8"/><circle cx="20" cy="18" r="1.8"/><circle cx="12" cy="8" r="1.5"/>',point:'<path d="M12 6v12M6 12h12"/><circle cx="12" cy="12" r="2.5"/>',dim:'<path d="M4 8v8M20 8v8M4 12h16"/><path d="M7 9l-3 3 3 3M17 9l3 3-3 3"/>',select:'<path d="M5 3l14 8-6 1.5L10 19z"/>',coincident:'<circle cx="9" cy="12" r="4"/><circle cx="15" cy="12" r="4"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/>',horizontal:'<path d="M3 12h18"/><path d="M7 8v8M17 8v8" opacity=".45"/>',vertical:'<path d="M12 3v18"/><path d="M8 7h8M8 17h8" opacity=".45"/>',parallel:'<path d="M8 20L14 4M12 20L18 4"/>',perpendicular:'<path d="M4 20h16M12 20V4"/><path d="M12 16h4v4" opacity=".6"/>',tangent:'<circle cx="12" cy="14" r="6"/><path d="M3 8h18"/>',equal:'<path d="M5 9h14M5 15h14"/>',midpoint:'<path d="M3 16L21 8"/><circle cx="12" cy="12" r="2.4" fill="currentColor"/>',concentric:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/>',symmetric:'<path d="M12 3v18" stroke-dasharray="2 2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="12" r="2"/>',fix:'<path d="M8 4h8l-1 6 3 3H6l3-3z"/><path d="M12 13v8"/>',construction:'<path d="M4 20L20 4" stroke-dasharray="3 2.5"/>',offset:'<rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7.5" y="7.5" width="9" height="9" rx="1" stroke-dasharray="2.5 2"/>',trim:'<path d="M3 12h7M14 12h7" /><path d="M10 12h4" stroke-dasharray="1.5 1.5" opacity=".5"/><path d="M12 4v4M12 16v4"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><path d="M8.5 16.5L15 9M15.5 16.5L9 9"/>',select3:'<path d="M5 3l14 8-6 1.5L10 19z"/><path d="M15 17h6M18 14v6"/>',svg:'<path d="M4 18c3-10 6-12 8-6s5 4 8-6"/><circle cx="4" cy="18" r="1.6"/><circle cx="20" cy="6" r="1.6"/>',finish:'<path d="M4 12l5 5L20 6"/>',view:'<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/>',grid:'<path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"/>',plus:'<path d="M12 5v14M5 12h14"/>',more:'<circle cx="5" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="19" cy="12" r="1.6" fill="currentColor"/>',rollback:'<path d="M6 4v16"/><path d="M20 12H10"/><path d="M14 8l-4 4 4 4"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',folder:'<path d="M3 6a1 1 0 011-1h5l2 2h9a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>'};function xe(n,t=22){return`<svg class="ic" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${wb[n]||""}</svg>`}var Eb="officina",Wd="projects";function Tb(){return new Promise((n,t)=>{let e=indexedDB.open(Eb,1);e.onupgradeneeded=()=>e.result.createObjectStore(Wd,{keyPath:"id"}),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function bc(n,t){let e=await Tb();return new Promise((i,s)=>{let r=e.transaction(Wd,n),a=r.objectStore(Wd),o=t(a);r.oncomplete=()=>i(o&&o.result),r.onerror=()=>s(r.error)})}async function $d(){return(await bc("readonly",t=>t.getAll())||[]).map(t=>({id:t.id,name:t.name,updated:t.updated,features:t.doc.features.length})).sort((t,e)=>e.updated-t.updated)}var Ia=n=>bc("readonly",t=>t.get(n)),Mc=n=>bc("readwrite",t=>t.put({...n,updated:Date.now()})),Jp=n=>bc("readwrite",t=>t.delete(n));function ar(){return Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4)}function Sc(n="Senza titolo"){return{app:"officina",v:1,name:n,params:[],features:[],rollback:null,ui:{hidden:{},colors:{},names:{},sketchVis:{}}}}function Kp(){try{return localStorage.getItem("officina.last")}catch{return null}}function Qp(n){try{localStorage.setItem("officina.last",n)}catch{}}var Xt=(n,t=document)=>t.querySelector(n),jt=n=>String(n??"").replace(/[<>&"]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[t]),Qd=n=>JSON.parse(JSON.stringify(n)),ka=()=>"f"+Math.random().toString(36).slice(2,9),D={project:null,doc:null,undo:[],redo:[],model:null,base:null,preview:null,mode:"loading",cmd:null,sketch:null,selBody:null},ce=new oc(Xt("#viewport")),fe=new pc({host:Xt("#viewport"),viewport:ce,onChange:n=>zb(n),toast:Ne,promptValue:eM,getScope:()=>en(D.doc.params).scope}),Na=new xc(new URL("./worker.js",import.meta.url));async function Cb(){jd("Carico il motore CAD (circa 20 MB la prima volta)\u2026");try{await Promise.all([Lp(new URL("./planegcs.wasm",import.meta.url).href),Na.call("init")])}catch(e){jd("Il motore CAD non si \xE8 avviato: "+e.message+". Ricarica la pagina.",!0);return}let n=null,t=Kp();if(t)try{n=await Ia(t)}catch{}n||(n={id:ar(),name:"Primo progetto",doc:Sc("Primo progetto")}),await lr(n),jd(null)}async function lr(n){D.project={id:n.id,name:n.name},D.doc=Rb(n.doc),D.undo=[],D.redo=[],D.mode="model",D.cmd=null,Qp(n.id),await Mc({id:n.id,name:n.name,doc:D.doc}),ce.setGrid(D.doc.ui.grid!==!1),Kn(),await Hi(),ce.fit(!1)}function Rb(n){n.ui||={};for(let t of["hidden","colors","names","sketchVis"])n.ui[t]||={};return n.params||=[],n.rollback===void 0&&(n.rollback=null),n}var tm=null;function tu(){clearTimeout(tm),tm=setTimeout(()=>Mc({id:D.project.id,name:D.doc.name,doc:D.doc}).catch(()=>Ne("Salvataggio non riuscito","warn")),500)}function Ke(n,{rebuild:t=!0}={}){D.undo.push(JSON.stringify(D.doc)),D.undo.length>100&&D.undo.shift(),D.redo=[],n(D.doc),tu(),nn(),t?Hi():(au(),Ic())}function nm(){if(D.mode==="sketch"){fe.undo();return}D.mode!=="model"||!D.undo.length||(D.redo.push(JSON.stringify(D.doc)),D.doc=JSON.parse(D.undo.pop()),tu(),nn(),Hi())}function Yd(){if(D.mode==="sketch"){fe.redo();return}D.mode!=="model"||!D.redo.length||(D.undo.push(JSON.stringify(D.doc)),D.doc=JSON.parse(D.redo.pop()),tu(),nn(),Hi())}var Xd=!1,qd=!1;async function Hi(){if(Xd){qd=!0;return}Xd=!0;try{await Pb()}catch(n){Ne(n.message,"warn")}finally{Xd=!1,qd&&(qd=!1,Hi())}}async function Ec(n,t=null){let e={...D.doc,features:n},i=await Na.call("rebuild",{doc:e,upto:t,have:[...ce.meshCache.keys()]});return ce.ingest(i.bodies),i}var dr=()=>D.doc.rollback==null?D.doc.features.length:D.doc.rollback;async function Pb(){Ac(!0);try{if(D.mode==="command"&&D.cmd){let n=D.cmd,t=D.doc.features.slice(0,n.index);D.base=await Ec(t);let e=eu();D.preview=Pa(n.draft)?await Ec([...t,...e]):null,bi(),ur()}else if(D.mode==="model"){let n=!!(D.model&&D.model.bodies.length);D.model=await Ec(D.doc.features,D.doc.rollback),bi(),!n&&D.model.bodies.length&&ce.fit(),au(),Ic();let t=Object.keys(D.model.errors).length;iM(t?`${t} feature con errori`:`Ricostruito in ${D.model.ms} ms`,t?"warn":"")}}finally{Ac(!1)}}function eu(){let n=D.cmd,t=Qd(n.draft);if(t.type==="hole"&&t.place){let e=t.place;if(delete t.place,!e.face||!e.pts.length)return[t];let i=Sd(e.face.n,e.face.p),s=n.holeSketchId||(n.holeSketchId=ka()),r=gc();e.pts.forEach((o,l)=>{let[c,h]=Ep(i,o);r.push({id:`p${l+1}`,type:"point",x:c,y:h,fixed:!1})});let a={id:s,type:"sketch",name:"Schizzo foro",plane:{face:Ib(e.face)},geo:r,cons:[]};return t.sketch=s,[a,t]}return[t]}var Ib=n=>{let t={...n};return delete t.i,t};function em(n){return n?n.bodies.map((t,e)=>({id:t.id,key:t.key,name:D.doc.ui.names[t.id]||t.name,color:D.doc.ui.colors[t.id]||wd(e),visible:!D.doc.ui.hidden[t.id]})):[]}function Da(n){let t=D.doc.ui.sketchVis[n.id];return t!==void 0?t:!D.doc.features.some(e=>e.sketch===n.id)}function Lb(n){let t=new Map(n.map(i=>[i.id,i])),e=[];for(let i of n)if(!(i.ref||i.type==="point"))if(i.type==="line"){let s=t.get(i.p1_id),r=t.get(i.p2_id);e.push({id:i.id,kind:"line",construction:i.construction,pts:[[s.x,s.y],[r.x,r.y]]})}else{let s=t.get(i.c_id),r=0,a=Math.PI*2;if(i.type==="arc")for(r=i.start_angle,a=i.end_angle-i.start_angle;a<=0;)a+=Math.PI*2;let o=Math.max(8,Math.ceil(a/(Math.PI*2)*72)),l=[];for(let c=0;c<=o;c++){let h=r+a*c/o;l.push([s.x+i.radius*Math.cos(h),s.y+i.radius*Math.sin(h)])}e.push({id:i.id,kind:i.type,construction:i.construction,pts:l})}return e}function sm(n){return n.filter(t=>!n.some(e=>e!==t&&e.holePolys.some(i=>ps(t.sample,i))))}var La=new Map;function Zn(n){let t=n.id+":"+JSON.stringify(n.geo),e=La.get(t);return e||(e=uc(n.geo),La.set(t,e),La.size>50&&La.delete(La.keys().next().value)),e}function bi(){let n=D.mode==="command"?D.cmd:null,t=D.model;n&&(t=D.preview&&!D.preview.errors[n.draft.id]&&!Object.keys(D.preview.errors).some(o=>!D.base.errors[o])?D.preview:D.base),ce.setBodies(em(t)),ce.setPickBodies(n?em(D.base):null),ce.gc();let e=(n?D.base:D.model)?.frames||{},i=n?n.index:dr(),s=[],r=n?Ua():null;for(let o of D.doc.features.slice(0,i)){if(o.type!=="sketch"||o.suppressed||!e[o.id])continue;let l=n&&n.draft.sketch===o.id;if(!Da(o)&&!l)continue;let c={id:o.id,frame:e[o.id].frame,polylines:Lb(o.geo)};if(r&&r.pick==="region")c.regions=Zn(o),c.selected=l?n.draft.regions.map(h=>c.regions.indexOf(Ra(c.regions,h))).filter(h=>h>=0):[];else if(l&&n.draft.regions){let h=Zn(o);c.regions=n.draft.regions.map(u=>Ra(h,u)).filter(Boolean),c.selected=c.regions.map((u,d)=>d)}else!n&&D.mode==="model"&&(c.regions=Zn(o),c.selected=[]);if(r&&r.pick==="sketchLine"&&l){c.pickLines=!0;let h=1e3;c.polylines.push({id:"AX",kind:"line",construction:!0,pts:[[-h,0],[h,0]]},{id:"AY",kind:"line",construction:!0,pts:[[0,-h],[0,h]]})}s.push(c)}ce.setSketchOverlays(s);let a={faces:[],edges:[],bodies:[]};if(n)Db(n.draft,a);else{D.selBody&&a.bodies.push(D.selBody);for(let o of D.msel.edges){let l=iu(o);l>=0&&a.edges.push({body:o.body,i:l})}for(let o of D.msel.faces){let l=Tc(o);l>=0&&a.faces.push({body:o.body,i:l})}}ce.setSelection(a),ce.setPlanesVisible(D.mode==="pickPlane"||!!(r&&r.pick==="planarFace")||!!D.doc.ui.showPlanes)}function iu(n){let t=ce.pickBodies.get(n.body);if(!t||!t.data)return-1;if(n.i!=null&&t.data.edgeInfo[n.i]){let s=t.data.edgeInfo[n.i].m;if(Math.hypot(s[0]-n.p[0],s[1]-n.p[1],s[2]-n.p[2])<.001)return n.i}let e=-1,i=1/0;return t.data.edgeInfo.forEach((s,r)=>{let a=Math.hypot(s.m[0]-n.p[0],s.m[1]-n.p[1],s.m[2]-n.p[2]);a<i&&(i=a,e=r)}),e}function Tc(n){let t=ce.pickBodies.get(n.body);if(!t||!t.data)return-1;if(n.i!=null&&t.data.faceInfo[n.i]&&t.data.faceInfo[n.i].t===n.t)return n.i;let e=-1,i=1/0;return t.data.faceInfo.forEach((s,r)=>{let a=Math.hypot(s.c[0]-n.p[0],s.c[1]-n.p[1],s.c[2]-n.p[2]);n.n&&s.n&&(a+=50*(1-Ma(n.n,s.n))),a<i&&(i=a,e=r)}),e}function Db(n,t){let e=s=>{if(!s)return;let r=iu(s);r>=0&&t.edges.push({body:s.body,i:r})},i=s=>{if(!s)return;let r=Tc(s);r>=0&&t.faces.push({body:s.body,i:r})};(n.edges||[]).forEach(e),(n.faces||[]).forEach(i),n.axis&&n.axis.edge&&e(n.axis.edge),n.plane&&n.plane.face&&i(n.plane.face),n.place&&n.place.face&&i(n.place.face);for(let s of[...n.targets||[],...n.tools||[],...n.bodies||[],n.target,n.src&&n.src.body])s&&t.bodies.push(s)}ce.onTap((n,t,e)=>{let i=e==="touch"?22:e==="pen"?14:9;if(D.mode==="pickPlane"){let s=ce.pick(n,t,{plane:!0,face:!0},i);if(!s)return;if(s.kind==="plane")Zd({std:s.plane});else if(s.kind==="face"){let r=ce.pickBodies.get(s.body).data.faceInfo[s.i];if(r.t!=="PLANE"){Ne("Serve una faccia piana","warn");return}Zd({face:{body:s.body,p:s.point,n:r.n,t:"PLANE"}})}return}if(D.mode==="command"){let s=Ua();if(!s)return;let r={region:{region:!0},edge:{edge:!0},face:{face:!0},planarFace:{face:!0},facePoint:{face:!0},body:{body:!0},sketchLine:{sketchLine:!0}}[s.pick],a=ce.pick(n,t,r,i);if(!a)return;am(s,a);return}if(D.mode==="model"){let s=ce.pick(n,t,{region:!0,edge:!0,face:!0},i);if(s&&s.kind==="region"){Fb(s,n,t);return}if(D.selBody=null,!s){nu();return}Ub(s)}});D.msel={edges:[],faces:[]};function kb(n){let t=ce.pickBodies.get(n.body).data,e=t.edgeInfo[n.i];return{body:n.body,i:n.i,p:e.m,d:e.d,t:e.t,f:e.f.map(i=>({n:i.n,t:t.faceInfo[i.i].t}))}}function Nb(n){let t=ce.pickBodies.get(n.body).data.faceInfo[n.i];return{body:n.body,i:n.i,p:n.point,n:t.t==="PLANE"?t.n:n.normal,t:t.t}}function Ub(n){let t=n.kind==="edge"?D.msel.edges:D.msel.faces,e=t.findIndex(i=>i.body===n.body&&i.i===n.i);e>=0?t.splice(e,1):t.push(n.kind==="edge"?kb(n):Nb(n)),bi(),rm()}function nu(){D.msel={edges:[],faces:[]},bi(),rm()}function or(){return[...new Set([...D.msel.edges,...D.msel.faces].map(n=>n.body))]}function Ob(n){let{edges:t,faces:e}=D.msel;if(!t.length&&!e.length)return null;let i=s=>({...s});return(n==="fillet"||n==="chamfer")&&t.length?{edges:t.map(i)}:n==="shell"&&e.length?{faces:e.map(i)}:n==="move"?{bodies:or()}:(n==="pattern"||n==="mirror")&&or().length===1?{src:{body:or()[0]}}:n==="combine"&&or().length>=2?{target:or()[0],tools:or().slice(1)}:null}function rm(){let n=Xt("#selbar"),{edges:t,faces:e}=D.msel;if(D.mode!=="model"||!t.length&&!e.length){n.hidden=!0;return}Jn();let i=[];t.length&&i.push(`${t.length} ${t.length===1?"spigolo":"spigoli"}`),e.length&&i.push(`${e.length} ${e.length===1?"faccia":"facce"}`);let s=(r,a,o)=>`<button class="btn" data-scmd="${r}">${xe(a,18)} ${o}</button>`;n.hidden=!1,n.innerHTML=`<span><b>${i.join(" \xB7 ")}</b> selezionati</span>
    ${t.length?s("fillet","fillet","Raccordo")+s("chamfer","chamfer","Smusso"):""}
    ${e.length?s("shell","shell","Guscio"):""}
    ${s("move","move","Sposta corpo")}
    <button class="icon" data-sclear aria-label="Deseleziona">${xe("close",18)}</button>`}Xt("#selbar").addEventListener("click",n=>{let t=n.target.closest("button");t&&(t.dataset.sclear!==void 0?nu():t.dataset.scmd&&si(t.dataset.scmd))});function Fb(n,t,e){let i=D.doc.features.find(l=>l.id===n.sketch),r=Zn(i)[n.region],a={sketch:i.id,regions:[{key:r.key,seed:r.sample}]};ou({getBoundingClientRect:()=>{let l=ce.canvas.getBoundingClientRect();return new DOMRect(l.left+t,l.top+e,0,0)}},[{label:`Forma di \xAB${i.name}\xBB`,cls:"title",disabled:!0},{label:"Estrudi questa forma",icon:"extrude",act:()=>si("extrude",null,a)},{label:"Rivoluzione",icon:"revolve",act:()=>si("revolve",null,a)},{label:"Modifica lo schizzo",icon:"sketch",act:()=>Rc(i)}])}ce.hoverHandler=(n,t)=>{if(D.mode==="model"){let r=n==null?null:ce.pick(n,t,{edge:!0,face:!0},9),a=r?`${r.kind}${r.body}${r.i}`:"";a!==D.hoverKey&&(D.hoverKey=a,ce.setPreselect(r));return}if(D.mode!=="command"){ce.preselect&&ce.setPreselect(null);return}let e=Ua();if(n==null||!e||!["edge","face","planarFace"].includes(e.pick)){ce.preselect&&ce.setPreselect(null);return}let i=ce.pick(n,t,{edge:e.pick==="edge",face:e.pick!=="edge"},9),s=i?`${i.kind}${i.body}${i.i}`:"";s!==D.hoverKey&&(D.hoverKey=s,ce.setPreselect(i))};function am(n,t){let e=D.cmd.draft,i=()=>(n.get?n.get(e):e[n.k])||[],s=o=>{n.set?n.set(e,o):e[n.k]=o},r=(o,l,c)=>{let h=o.findIndex(u=>c(u,l));return h>=0?(o.splice(h,1),o):n.multi?(o.push(l),o):[l]},a=o=>ce.pickBodies.get(o).data;if(n.pick==="region"){let o=D.doc.features.find(u=>u.id===t.sketch),l=Zn(o)[t.region],c={key:l.key,seed:l.sample};e.sketch&&e.sketch!==t.sketch&&(e.regions=[]),e.sketch=t.sketch;let h=Zn(o);e.regions=r(e.regions.slice(),c,(u,d)=>Ra(h,u)===Ra(h,d)),e.regions.length||(e.sketch=null)}else if(n.pick==="edge"){let o=a(t.body),l=o.edgeInfo[t.i],c={body:t.body,i:t.i,p:l.m,d:l.d,t:l.t,f:l.f.map(h=>({n:h.n,t:o.faceInfo[h.i].t}))};s(r(i().slice(),c,(h,u)=>h.body===u.body&&iu(h)===u.i))}else if(n.pick==="face"||n.pick==="planarFace"){let o=a(t.body).faceInfo[t.i];if(n.pick==="planarFace"&&o.t!=="PLANE"){Ne("Serve una faccia piana","warn");return}let l={body:t.body,i:t.i,p:t.point,n:o.t==="PLANE"?o.n:t.normal,t:o.t};s(r(i().slice(),l,(c,h)=>c.body===h.body&&Tc(c)===h.i))}else if(n.pick==="facePoint"){let o=a(t.body).faceInfo[t.i];if(o.t!=="PLANE"){Ne("I fori vanno su una faccia piana","warn");return}let l=e.place;l.face&&l.face.body===t.body&&Tc(l.face)===t.i||(l.face={body:t.body,i:t.i,p:t.point,n:o.n,t:"PLANE"},l.pts=[]);let h=l.pts.findIndex(u=>Math.hypot(u[0]-t.point[0],u[1]-t.point[1],u[2]-t.point[2])<1.5);h>=0?l.pts.splice(h,1):l.pts.push(t.point.map(u=>Math.round(u*100)/100))}else if(n.pick==="body")s(r(i().slice(),t.body,(o,l)=>o===l));else if(n.pick==="sketchLine"){if(t.sketch!==e.sketch){Ne("Scegli una linea dello stesso schizzo","warn");return}s([t.id])}ur(),bi(),Cc()}var im=null;function Cc(){clearTimeout(im),im=setTimeout(Hi,140)}function Bb(n){let t=D.doc.features.slice(0,n).filter(a=>!a.suppressed),e=t.filter(a=>["extrude","revolve","hole"].includes(a.type)).map(a=>({id:a.id,name:a.name})),i=D.model&&D.model.bodies||[],s=null,r=[...t].reverse().find(a=>a.type==="sketch");if(r&&!D.doc.features.some(a=>a.sketch===r.id)){let a=sm(Zn(r));a.length&&(s={sketch:r.id,regions:a.map(o=>({key:o.key,seed:o.sample}))})}return{hasBodies:i.length>0,lastBody:i.length?i[i.length-1].id:null,toolFeatures:e,autoRegions:s}}function si(n,t=null,e=null){if(D.mode==="sketch")return;D.mode==="command"&&Oa(),Jn();let i=Zp[n],s=t?D.doc.features.findIndex(h=>h.id===t.id):dr(),r=Bb(s),a=e||(t?null:Ob(n)),o=t?Qd(t):{id:ka(),...i.init(r),...a||{}};D.msel={edges:[],faces:[]},Xt("#selbar").hidden=!0,D.cmd={type:n,spec:i,draft:o,index:s,editing:!!t,ctx:r,active:null},D.mode="command";let l=cr().filter(h=>h.kind==="pick"),c=l.find(h=>!((h.get?h.get(o):o[h.k])||[]).length&&!h.optional);D.cmd.active=(c||l[0]||{}).k||null,D.selBody=null,Kn(),Hi()}function cr(){let n=D.cmd;return n.spec.fields(n.draft,n.ctx).filter(Boolean)}function Ua(){return D.cmd&&cr().find(n=>n.kind==="pick"&&n.k===D.cmd.active)||null}function Oa(){D.cmd=null,D.mode="model",D.preview=null,Kn(),Hi()}function su(){let n=D.cmd;if(!Pa(n.draft)){Ne("Completa la selezione","warn");return}let t=eu(),e=D.preview&&t.map(i=>D.preview.errors[i.id]).find(Boolean);if(e){Ne(e,"warn");return}Ke(i=>{let s=r=>i.features.filter(a=>a.type===r).length+1;for(let r of t)r.name||(r.name=`${Yp[r.type]} ${s(r.type)}`);n.editing?i.features.splice(n.index,1,...t):(i.features.splice(n.index,0,...t),i.rollback!=null&&(i.rollback+=t.length))},{rebuild:!1}),D.cmd=null,D.mode="model",Kn(),Hi()}function ru(){D.mode==="command"&&Oa(),Jn(),D.mode="pickPlane",Kn(),bi(),Fa("Dove disegni? Tocca un piano colorato (blu = pianta XY, verde = fronte XZ, rosso = lato YZ) o una faccia piana di un corpo")}function Zd(n){let t=D.doc.features.filter(s=>s.type==="sketch").length+1,e={id:ka(),type:"sketch",name:`Schizzo ${t}`,plane:n.face?{face:n.face}:{std:n.std},geo:gc(),cons:[]},i=n.face?Sd(n.face.n,n.face.p):rc[n.std];om(e,i,dr(),!0)}async function Rc(n){Jn();let t=D.doc.features.findIndex(s=>s.id===n.id);Ac(!0);let e;try{e=await Ec(D.doc.features,t+1)}finally{Ac(!1)}let i=e.frames[n.id];if(!i){Ne(e.errors[n.id]||"Il piano dello schizzo non \xE8 disponibile","warn");return}D.model=e,bi(),om(n,i.frame,t,!1)}function om(n,t,e,i){D.mode="sketch",D.sketch={index:e,isNew:i,id:n.id},Fa(""),Kn(),ce.setSketchOverlays([]),ce.setSelection({}),ce.setPlanesVisible(!1),fe.open(n,t)}function Pc(n=!0){let t=D.sketch,e=fe.close();D.mode="model",D.sketch=null,n&&Ke(i=>{t.isNew?(i.features.splice(t.index,0,e),i.rollback!=null&&(i.rollback+=1)):i.features[t.index]=e},{rebuild:!1}),Kn(),Hi(),n&&!D.doc.features.some(i=>i.sketch===e.id)&&lm(e)}function lm(n){let t=Xt("#quickbar"),e=sm(Zn(n));if(!n.geo.some(s=>!s.ref&&s.type!=="point")){Jn();return}t.hidden=!1,e.length?(t.className="",t.innerHTML=`<span><b>${jt(n.name)}</b> \xB7 ${e.length===1?"1 forma chiusa":`${e.length} forme chiuse`}. Cosa vuoi farne?</span>
      <button class="btn primary" data-qcmd="extrude">${xe("extrude",18)} Estrudi</button><button class="btn" data-qcmd="revolve">${xe("revolve",18)} Rivoluzione</button>
      <button class="icon" data-qclose aria-label="Chiudi">${xe("close",18)}</button>`):(t.className="warn",t.innerHTML=`<span>${xe("info",18)} \xAB${jt(n.name)}\xBB non ha forme chiuse: per estrudere il contorno deve chiudersi (l'ultima linea deve finire sul primo punto).</span>
      <button class="btn" data-qedit>Modifica schizzo</button><button class="icon" data-qclose aria-label="Chiudi">${xe("close",18)}</button>`),t.onclick=s=>{let r=s.target.closest("button");r&&(r.dataset.qcmd?si(r.dataset.qcmd,null,{sketch:n.id,regions:e.map(a=>({key:a.key,seed:a.sample}))}):r.dataset.qedit!==void 0&&(Jn(),Rc(D.doc.features.find(a=>a.id===n.id))),Jn())}}function Jn(){Xt("#quickbar").hidden=!0}var cm=[{group:"Crea"},["sketch","Schizzo",()=>ru()],["extrude","Estrudi",()=>si("extrude")],["revolve","Rivoluzione",()=>si("revolve")],["hole","Foro",()=>si("hole")],{group:"Modifica"},["fillet","Raccordo",()=>si("fillet")],["chamfer","Smusso",()=>si("chamfer")],["shell","Guscio",()=>si("shell")],["combine","Combina",()=>si("combine")],["move","Sposta",()=>si("move")],{group:"Ripeti"},["pattern","Serie",()=>si("pattern")],["mirror","Specchio",()=>si("mirror")],{group:"Inserisci"},["import","Importa",()=>Qb()]],hm=[{group:"Disegna"},["select","Seleziona","tool"],["line","Linea","tool"],["rect","Rettangolo","tool"],["circle","Cerchio","tool"],["arc","Arco","tool"],["point","Punto","tool"],{group:"Misura"},["dim","Quota","tool"],{group:"Modifica"},["trim","Taglia","tool"],["offset","Offset","tool","cmd:offset"],["fillet","Raccordo","tool","cmd:sfillet"],["chamfer","Smusso","tool","cmd:schamfer"],["mirror","Specchia","tool","cmd:smirror"],["construction","Costruzione","act"],["trash","Elimina","act"],{group:"Vincoli"},["coincident","Coincidente","cons"],["horizontal","Orizzontale","cons"],["vertical","Verticale","cons"],["parallel","Parallela","cons"],["perpendicular","Perpendic.","cons"],["tangent","Tangente","cons"],["equal","Uguale","cons"],["midpoint","Punto medio","cons"],["concentric","Concentrico","cons"],["symmetric","Simmetria","cons"],["fix","Fissa","cons"]];function nn(){let n=Xt("#toolbar"),t=D.mode==="sketch";Xt("#docName").textContent=D.doc?D.doc.name:"",Xt("#btnUndo").disabled=t?!fe.undoStack?.length:D.mode!=="model"||!D.undo.length,Xt("#btnRedo").disabled=t?!fe.redoStack?.length:D.mode!=="model"||!D.redo.length,Xt("#topRight").hidden=t,Xt("#sketchFinish").hidden=!t;let e=t?hm:cm;n.innerHTML=e.map((i,s)=>{if(i.group)return`<span class="grp">${i.group}</span>`;let[r,a,o,l]=i;return`<button class="tool ${(t?o==="tool"&&fe.tool===(l||r)||o==="cons"&&fe.tool==="c:"+r:D.mode==="command"&&D.cmd.type===r||r==="sketch"&&D.mode==="pickPlane")?"on":""}" data-i="${s}" title="${a}">${xe(r)}<span>${a}</span></button>`}).join(""),n.className=t?"sketch":""}Xt("#toolbar").addEventListener("click",n=>{let t=n.target.closest("button[data-i]");if(!t)return;let e=(D.mode==="sketch"?hm:cm)[+t.dataset.i];if(D.mode==="sketch"){let[i,,s,r]=e;s==="tool"?fe.setTool(r||i):s==="cons"?fe.sel.size&&fe.consReady(i)?fe.applyConstraint(i):fe.setTool("c:"+i):i==="construction"?fe.toggleConstruction():i==="trash"&&fe.deleteSelection(),nn();return}D.mode==="pickPlane"&&(D.mode="model",Fa("")),e[2]()});function zb(n){nn();let t=Xt("#sketchStatus");if(D.mode!=="sketch"){t.hidden=!0,Xt("#sketchInput").hidden=!0,Xt("#sketchInput").dataset.kind="";return}t.hidden=!1;let e,i="";n.conflicting&&n.conflicting.length?(e="Vincoli in conflitto",i="bad"):n.dof===0?(e="Completamente vincolato",i="ok"):e=n.dof==null?"":`Liberi: ${n.dof}`,t.innerHTML=`<span class="dof ${i}" title="Gradi di libert\xE0: quanti movimenti restano da bloccare con quote e vincoli">${e}</span><span class="hint">${jt(n.hint||"")}</span>`,dm(n)}function dm(n){$b(n.cmd);let t=Xt("#sketchInput"),e=Xt("#dynInput"),i=n.exact;if(!i||n.cmd){wc(t),wc(e);return}n.lastPointer==="mouse"?(wc(t),fm(i)):(wc(e),Vb(i))}function wc(n){n.hidden=!0,n.dataset.kind=""}function Vb(n){let t=Xt("#sketchInput");if(t.hidden=!1,t.dataset.kind===n.kind){for(let e of n.fields){let i=t.querySelector(`input[data-k="${e.k}"]`);i&&(i.placeholder=e.ph)}return}t.dataset.kind=n.kind,t.innerHTML=`<span class="lbl">Misure esatte</span>${n.fields.map(e=>`<label class="xf"><span>${jt(e.label)}</span><input data-k="${e.k}" placeholder="${jt(e.ph)}" inputmode="decimal" autocomplete="off" autocapitalize="off" spellcheck="false"><em>${jt(e.unit)}</em></label>`).join("")}
    <button class="btn primary" data-xok>Inserisci</button>`}Xt("#sketchInput").addEventListener("click",n=>{n.target.closest("[data-xok]")&&um()});Xt("#sketchInput").addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),um())});function um(){let n=Xt("#sketchInput"),t={};for(let i of n.querySelectorAll("input"))t[i.dataset.k]=i.value;if(!Object.values(t).some(i=>i.trim())){Ne("Scrivi almeno un valore (vuoto = valore del disegno)","warn");return}let e=en(D.doc.params).scope;try{for(let i of Object.values(t))i.trim()&&Ai(i,e)}catch(i){Ne(i.message,"warn");return}n.dataset.kind="",fe.placeExact(t,i=>Ai(i,e))&&setTimeout(()=>{let i=Xt("#sketchInput input");i&&i.focus()},30)}function fm(n){let t=Xt("#dynInput");t.hidden=!1,t.dataset.kind!==n.kind&&(t.dataset.kind=n.kind,t.innerHTML=n.fields.map(i=>`<label class="df" title="${jt(i.label)}"><input data-k="${i.k}" inputmode="decimal" autocomplete="off" spellcheck="false" aria-label="${jt(i.label)}"><em>${jt(i.unit)}</em><b class="lock" title="Valore bloccato">${xe("fix",12)}</b></label>`).join("")+'<span class="dhint">scrivi \xB7 Tab cambia campo \xB7 Invio conferma</span>');let e=fe.lockExpr||{};for(let i of n.fields){let s=t.querySelector(`input[data-k="${i.k}"]`);s&&(document.activeElement!==s&&(s.value=e[i.k]??""),s.placeholder=i.ph,s.parentElement.classList.toggle("locked",e[i.k]!=null))}Hb()}function Hb(){let n=Xt("#dynInput"),t=fe.exactAnchor();if(!t||n.hidden)return;let e=Math.min(ce.w-n.offsetWidth-8,t[0]+22),i=Math.min(ce.h-n.offsetHeight-8,t[1]+22);n.style.left=Math.max(8,e)+"px",n.style.top=Math.max(8,i)+"px"}fe.onCursor=()=>{if(D.mode!=="sketch")return;let n=fe.statusInfo();n.exact&&n.lastPointer==="mouse"&&!n.cmd?fm(n.exact):dm(n)};var hr=Xt("#dynInput");hr.addEventListener("input",n=>{let t=n.target;if(!t.dataset.k)return;let e=fe.setLock(t.dataset.k,t.value);t.parentElement.classList.toggle("bad",!e),t.parentElement.classList.toggle("locked",e&&!!t.value.trim())});hr.addEventListener("keydown",n=>{let t=[...hr.querySelectorAll("input")],e=t.indexOf(n.target);if(n.key==="Tab"){n.preventDefault();let i=t[(e+(n.shiftKey?-1:1)+t.length)%t.length];i.focus(),i.select()}else n.key==="Enter"?(n.preventDefault(),Gb()):n.key==="Escape"&&(n.preventDefault(),n.target.blur(),fe.cancel(),nn());n.stopPropagation()});function Gb(){let n={...fe.lockExpr||{}};if(!Object.keys(n).length){Ne("Scrivi un valore, oppure clicca nel disegno","warn");return}document.activeElement&&document.activeElement.blur(),hr.dataset.kind="";let t=en(D.doc.params).scope;fe.placeExact(n,e=>Ai(e,t))}function Wb(n){if(D.mode!=="sketch"||hr.hidden||n.ctrlKey||n.metaKey||n.altKey||!/^[0-9.,\-(]$/.test(n.key)&&n.key!=="Tab")return!1;let t=[...hr.querySelectorAll("input")];if(!t.length)return!1;n.preventDefault();let e=n.key==="Tab"?t[Math.min(1,t.length-1)]:t[0];return e.focus(),n.key!=="Tab"&&(e.value=n.key,fe.setLock(e.dataset.k,e.value),e.parentElement.classList.add("locked")),!0}function $b(n){let t=Xt("#panel");if(D.mode!=="sketch")return;if(!n){t.hidden=!0,t.innerHTML="";return}let e=document.activeElement&&t.contains(document.activeElement)?document.activeElement.dataset.skk:null,i=e?document.activeElement.selectionStart:null;t.hidden=!1;let s={curves:["elemento","elementi"],line:["linea","linee"],corner:["angolo","angoli"],chain:["tratto","tratti"]},r=n.fields.map(a=>{if(a.kind==="pick"){let o=a.value.length,l=s[a.what],c=n.active===a.k;return`<div class="field"><label>${jt(a.label)}</label><div class="pick ${c?"on":""} ${o?"has":""}" data-skpick="${a.k}"><span class="dot"></span><span class="txt">${o?`${o} ${o===1?l[0]:l[1]}`:"Nessuna selezione"}</span>${o?`<button class="clr" data-skclear="${a.k}" aria-label="Svuota">${xe("close",16)}</button>`:""}</div>${c?`<div class="val">${jt(a.hint)}</div>`:""}</div>`}return a.kind==="num"?`<div class="field"><label>${jt(a.label)}</label><div class="num"><button data-skstep="-1" data-k="${a.k}" aria-label="meno">\u2212</button><input data-skk="${a.k}" value="${jt(a.value)}" inputmode="decimal" autocomplete="off" autocapitalize="off" spellcheck="false"><span class="unit">${jt(a.unit)}</span><button data-skstep="1" data-k="${a.k}" aria-label="pi\xF9">+</button></div></div>`:`<div class="field row"><label>${jt(a.label)}</label><button class="switch ${a.value?"on":""}" data-sktoggle="${a.k}" role="switch" aria-checked="${!!a.value}"><span></span></button></div>`}).join("");if(t.innerHTML=`<header>${xe(zd[n.type].icon)}<h2>${jt(n.title)}</h2></header><div class="fields">${r}</div>
    <footer><button class="btn" data-skcancel>Annulla</button><button class="btn primary" data-skok ${n.ready?"":"disabled"}>OK</button></footer>`,e){let a=t.querySelector(`input[data-skk="${e}"]`);if(a){a.focus();try{a.setSelectionRange(i,i)}catch{}}}}function Xb(n){let t=n.target.closest("button,[data-skpick]");if(t){if(t.dataset.skcancel!==void 0)fe.cmdCancel();else if(t.dataset.skok!==void 0)fe.cmdApply();else if(t.dataset.skclear)n.stopPropagation(),fe.cmdClear(t.dataset.skclear);else if(t.dataset.skpick)fe.cmdSetActive(t.dataset.skpick);else if(t.dataset.skstep){let e=t.dataset.k,i;try{i=Ai(fe.cmd.vals[e],en(D.doc.params).scope)}catch{return}let s=Math.abs(i)<5?.5:1;fe.cmdSetVal(e,be(Math.max(s,i+s*Number(t.dataset.skstep))))}else t.dataset.sktoggle&&fe.cmdSetVal(t.dataset.sktoggle,!fe.cmd.vals[t.dataset.sktoggle]);nn()}}function ur(){let n=Xt("#panel");if(D.mode!=="command"||!D.cmd){n.hidden=!0,n.innerHTML="";return}let t=D.cmd,e=t.draft;n.hidden=!1;let i=en(D.doc.params).scope,s=cr().map(l=>{if(l.kind==="note")return`<p class="note">${jt(l.text)}</p>`;if(l.kind==="num"){let c=!0,h=null;try{h=Ai(e[l.k],i)}catch{c=!1}let u=c&&String(e[l.k]).trim()!==be(h);return`<div class="field"><label>${jt(l.label)}</label><div class="num ${c?"":"bad"}">
        <button data-step="-1" data-k="${l.k}" aria-label="meno">\u2212</button>
        <input data-k="${l.k}" value="${jt(e[l.k])}" inputmode="decimal" autocomplete="off" autocapitalize="off" spellcheck="false">
        <span class="unit">${jt(l.unit||"")}</span>
        <button data-step="1" data-k="${l.k}" aria-label="pi\xF9">+</button></div>
        ${u?`<div class="val">= ${be(h)} ${jt(l.unit||"")}</div>`:""}${c?"":'<div class="val bad">Espressione non valida</div>'}</div>`}if(l.kind==="seg"){let c=l.get?l.get(e):e[l.k];return`<div class="field"><label>${jt(l.label)}</label><div class="seg">${l.options.map(([h,u])=>`<button data-seg="${l.k}" data-v="${jt(h)}" class="${c===h?"on":""}">${jt(u)}</button>`).join("")}</div></div>`}if(l.kind==="toggle")return`<div class="field row"><label>${jt(l.label)}</label><button class="switch ${e[l.k]?"on":""}" data-toggle="${l.k}" role="switch" aria-checked="${!!e[l.k]}"><span></span></button></div>`;if(l.kind==="select"){let c=l.get?l.get(e):e[l.k];return`<div class="field"><label>${jt(l.label)}</label><select data-sel="${l.k}">${l.options.length?"":'<option value="">(nessuna)</option>'}${l.options.map(([h,u])=>`<option value="${jt(h)}" ${c===h?"selected":""}>${jt(u)}</option>`).join("")}</select></div>`}if(l.kind==="pick"){let c;l.pick==="facePoint"?c=e.place?e.place.pts.length:0:c=((l.get?l.get(e):e[l.k])||[]).length;let h=t.active===l.k,u={region:["profilo","profili"],edge:["spigolo","spigoli"],face:["faccia","facce"],planarFace:["faccia","facce"],body:["corpo","corpi"],sketchLine:["linea","linee"],facePoint:["foro","fori"]}[l.pick],d=c?`${c} ${c===1?u[0]:u[1]}`:l.optional?"Automatico":"Nessuna selezione";return`<div class="field"><label>${jt(l.label)}</label><div class="pick ${h?"on":""} ${c?"has":""}" data-pick="${l.k}">
        <span class="dot"></span><span class="txt">${jt(d)}</span>${c?`<button class="clr" data-clear="${l.k}" aria-label="Svuota">${xe("close",16)}</button>`:""}</div>
        ${h?`<div class="val">${jt(l.hint||"Tocca nella vista")}</div>`:""}</div>`}return""}).join(""),r=eu(),a=D.preview?r.map(l=>D.preview.errors[l.id]).find(Boolean):null;n.innerHTML=`<header>${xe(Gd[t.type])}<h2>${jt(t.spec.title)}${t.editing?" <small>modifica</small>":""}</h2></header>
    <div class="fields">${s}</div>
    ${a?`<div class="err">${jt(a)}</div>`:""}
    <footer><button class="btn" data-act="cancel">Annulla</button><button class="btn primary" data-act="ok" ${Pa(e)&&!a?"":"disabled"}>OK</button></footer>`;let o=Ua();Fa(o?o.hint||"Tocca nella vista":"")}var ms=Xt("#panel");ms.addEventListener("click",n=>{if(D.mode==="sketch"){Xb(n);return}let t=D.cmd&&D.cmd.draft;if(!t)return;let e=n.target.closest("button,[data-pick]");if(!e)return;let i=cr(),s=r=>i.find(a=>a.k===r);if(e.dataset.act==="cancel"){Oa();return}if(e.dataset.act==="ok"){su();return}if(e.dataset.clear){n.stopPropagation();let r=s(e.dataset.clear);r.pick==="facePoint"?t.place.pts=[]:r.set?r.set(t,[]):t[r.k]=[],r.pick==="region"&&(t.sketch=null)}else if(e.dataset.pick)D.cmd.active=e.dataset.pick;else if(e.dataset.step){let r=e.dataset.k,a=s(r),o=0;try{o=Ai(t[r],en(D.doc.params).scope)}catch{return}let l=a.unit==="\xB0"?15:a.unit===""?1:Math.abs(o)<5?.5:1;t[r]=be(o+l*Number(e.dataset.step))}else if(e.dataset.seg){let r=s(e.dataset.seg);r.set?r.set(t,e.dataset.v):t[r.k]=e.dataset.v;let a=cr().find(o=>o.kind==="pick"&&!(o.get?o.get(t):t[o.k]||[]).length&&!o.optional);a&&(D.cmd.active=a.k)}else if(e.dataset.toggle)t[e.dataset.toggle]=!t[e.dataset.toggle];else return;ur(),bi(),Cc()});ms.addEventListener("input",n=>{if(D.mode==="sketch"){n.target.dataset.skk&&fe.cmdSetVal(n.target.dataset.skk,n.target.value);return}let t=D.cmd&&D.cmd.draft;t&&n.target.dataset.k&&(t[n.target.dataset.k]=n.target.value,clearTimeout(ms._t),ms._t=setTimeout(()=>{let e=n.target.selectionStart,i=n.target.dataset.k;ur();let s=ms.querySelector(`input[data-k="${i}"]`);if(s){s.focus();try{s.setSelectionRange(e,e)}catch{}}Cc()},350))});ms.addEventListener("change",n=>{let t=D.cmd&&D.cmd.draft;if(!t||!n.target.dataset.sel)return;let e=cr().find(i=>i.k===n.target.dataset.sel);e.set?e.set(t,n.target.value):t[e.k]=n.target.value,ur(),Cc()});ms.addEventListener("keydown",n=>{if(D.mode==="sketch"){n.key==="Enter"&&n.target.tagName==="INPUT"&&(n.preventDefault(),n.target.blur(),fe.cmdApply(),nn());return}n.key==="Enter"&&n.target.tagName==="INPUT"&&(n.target.blur(),Hi().then(()=>{Pa(D.cmd?.draft||{})&&su()}))});function au(){let n=Xt("#timeline"),t=D.doc,e=D.model&&D.model.errors||{},i=t.rollback,s=t.features.map((o,l)=>{let c=["tl-item",e[o.id]?"err":"",o.suppressed?"sup":"",i!=null&&l>=i?"after":"",D.cmd&&D.cmd.editing&&D.cmd.index===l?"on":""].join(" ");return`${i!=null&&i===l?'<span class="tl-marker" title="Fine cronologia"></span>':""}<button class="${c}" data-f="${l}" title="${jt(o.name)}${e[o.id]?" \u2014 "+jt(e[o.id]):""}">${xe(Gd[o.type]||"body",20)}<span>${jt(o.name)}</span></button>`}).join(""),r=i!=null?`<button class="tl-end" data-end="1">${xe("rollback",18)}<span>Vai alla fine</span></button>`:"";n.innerHTML=`<div class="tl-track">${s||'<span class="tl-empty">La cronologia \xE8 vuota: inizia con uno schizzo</span>'}${i==null&&s?'<span class="tl-marker" title="Fine cronologia"></span>':""}${r}</div>`;let a=n.querySelector(".tl-item.on");a&&a.scrollIntoView({inline:"nearest",block:"nearest"}),ym()}Xt("#timeline").addEventListener("click",n=>{if(D.mode!=="model")return;if(n.target.closest("[data-end]")){Ke(a=>{a.rollback=null});return}let e=n.target.closest("[data-f]");if(!e)return;let i=+e.dataset.f,s=D.doc.features[i],r=D.model&&D.model.errors[s.id];ou(e,[r?{label:r,cls:"err",disabled:!0}:null,{label:"Modifica",icon:"sketch",act:()=>qb(s)},{label:"Rinomina",act:async()=>{let a=await Lc("Nome della feature",s.name);a&&Ke(o=>{o.features[i].name=a},{rebuild:!1})}},{label:s.suppressed?"Riattiva":"Sopprimi",act:()=>Ke(a=>{a.features[i].suppressed=!s.suppressed})},{label:"Riporta la cronologia qui",icon:"rollback",act:()=>Ke(a=>{a.rollback=i+1>=a.features.length?null:i+1})},s.type==="sketch"?{label:Da(s)?"Nascondi schizzo":"Mostra schizzo",act:()=>Ke(a=>{a.ui.sketchVis[s.id]=!Da(s)},{rebuild:!1})}:null,{label:"Elimina",icon:"trash",cls:"danger",act:()=>jb(i)}])});function qb(n){n.type==="sketch"?Rc(n):n.type==="import"?Ne("Le importazioni non hanno parametri da modificare"):si(n.type,n)}function jb(n){let t=D.doc.features[n],e=D.doc.features.filter(i=>i.sketch===t.id||i.src&&i.src.feature===t.id);Ke(i=>{if(i.features.splice(n,1),t.type==="hole"&&t.sketch){let s=i.features.findIndex(r=>r.id===t.sketch);s>=0&&i.features[s].name.startsWith("Schizzo foro")&&!i.features.some(r=>r.sketch===t.sketch)&&i.features.splice(s,1)}i.rollback!=null&&i.rollback>n&&(i.rollback-=1),i.rollback!=null&&i.rollback>=i.features.length&&(i.rollback=null)}),e.length&&Ne(`Attenzione: ${e.map(i=>i.name).join(", ")} dipendeva da ${t.name}`,"warn")}function Ic(){let n=Xt("#browser");if(!D.doc)return;let t=D.model&&D.model.bodies||[],e=D.doc.ui,i=dr(),s=D.doc.features.slice(0,i).filter(a=>a.type==="sketch"),r=a=>xe(a?"eye":"eyeoff",18);n.innerHTML=`
    <section><h3>Corpi <small>${t.length}</small></h3>
    ${t.map((a,o)=>`<div class="br-row ${D.selBody===a.id?"on":""}"><button class="eye" data-hide="${a.id}">${r(!e.hidden[a.id])}</button>
      <span class="sw" style="background:${jt(e.colors[a.id]||wd(o))}"></span>
      <button class="name" data-body="${a.id}">${jt(e.names[a.id]||a.name)}</button></div>`).join("")||'<p class="empty">Nessun corpo</p>'}
    </section>
    <section><h3>Schizzi <small>${s.length}</small></h3>
    ${s.map(a=>`<div class="br-row"><button class="eye" data-skvis="${a.id}">${r(Da(a))}</button>
      <button class="name" data-sketch="${a.id}">${jt(a.name)}</button></div>`).join("")||'<p class="empty">Nessuno schizzo</p>'}
    </section>
    <section><h3>Origine</h3>
      <div class="br-row"><button class="eye" data-planes="1">${r(!!e.showPlanes)}</button><span class="name">Piani XY \xB7 XZ \xB7 YZ</span></div>
      <div class="br-row"><button class="eye" data-grid="1">${r(e.grid!==!1)}</button><span class="name">Griglia</span></div>
    </section>
    <section><h3>Parametri <small>${D.doc.params.length}</small></h3>
      ${D.doc.params.map(a=>`<div class="br-row param"><span class="name">${jt(a.name)}</span><span class="pv">${jt(a.expr)}</span></div>`).join("")}
      <button class="btn small" data-params="1">${xe("params",16)} Gestisci parametri</button>
    </section>`}Xt("#browser").addEventListener("click",n=>{let t=n.target.closest("button");if(!t||D.mode!=="model")return;let e=D.doc.ui;if(t.dataset.hide){let i=t.dataset.hide;Ke(s=>{s.ui.hidden[i]=!e.hidden[i]},{rebuild:!1}),bi()}else if(t.dataset.skvis){let i=D.doc.features.find(s=>s.id===t.dataset.skvis);Ke(s=>{s.ui.sketchVis[i.id]=!Da(i)},{rebuild:!1}),bi()}else if(t.dataset.planes)Ke(i=>{i.ui.showPlanes=!e.showPlanes},{rebuild:!1}),bi();else if(t.dataset.grid)Ke(i=>{i.ui.grid=e.grid===!1},{rebuild:!1}),ce.setGrid(D.doc.ui.grid!==!1);else if(t.dataset.params)pm();else if(t.dataset.sketch){let i=D.doc.features.find(s=>s.id===t.dataset.sketch);Rc(i),nM()}else t.dataset.body&&Yb(t,t.dataset.body)});function Yb(n,t){let e=D.model.bodies,i=e.findIndex(a=>a.id===t),s=e[i],r=D.doc.ui.names[t]||s.name;D.selBody=t,bi(),Ic(),ou(n,[{label:"Rinomina",act:async()=>{let a=await Lc("Nome del corpo",r);a&&Ke(o=>{o.ui.names[t]=a},{rebuild:!1}),bi()}},{label:"Colore",act:()=>Jb(t,i)},{label:"Propriet\xE0",icon:"info",act:()=>Kb(t,r)},{label:"Esporta questo corpo",icon:"export",act:()=>mm([t])}])}var Zb=["#b9c3cf","#d9b38c","#9fc7a8","#c9a3c9","#e0c56e","#8fb6d9","#d99a9a","#a8b38f","#5d6b7a","#e8e4da","#3c3c3c","#d4553f"];function Jb(n,t){In(`<h2>Colore</h2><div class="swatches">${Zb.map(e=>`<button style="background:${e}" data-c="${e}"></button>`).join("")}</div><footer><button class="btn" data-close>Chiudi</button></footer>`,(e,i)=>{e.addEventListener("click",s=>{let r=s.target.closest("[data-c]");r&&(Ke(a=>{a.ui.colors[n]=r.dataset.c},{rebuild:!1}),bi(),i())})})}async function Kb(n,t){try{let[e]=await Na.call("measure",{ids:[n]}),i=e.bbox?e.bbox[1].map((s,r)=>s-e.bbox[0][r]):null;In(`<h2>${jt(t)}</h2><dl class="props">
      <dt>Volume</dt><dd>${e.volume!=null?be(e.volume/1e3,2)+" cm\xB3":"\u2014"}</dd>
      <dt>Area superficie</dt><dd>${e.area!=null?be(e.area/100,2)+" cm\xB2":"\u2014"}</dd>
      <dt>Ingombro</dt><dd>${i?i.map(s=>be(s,2)).join(" \xD7 ")+" mm":"\u2014"}</dd>
      <dt>Peso in PLA</dt><dd>${e.volume!=null?be(e.volume/1e3*1.24,1)+" g":"\u2014"} <small>(pieno, 1,24 g/cm\xB3)</small></dd>
      <dt>Peso in PETG</dt><dd>${e.volume!=null?be(e.volume/1e3*1.27,1)+" g":"\u2014"}</dd></dl>
      <footer><button class="btn" data-close>Chiudi</button></footer>`)}catch(e){Ne(e.message,"warn")}}function pm(){let n=Qd(D.doc.params);In(`<h2>Parametri</h2><p class="note">Usa i nomi nelle quote e nei campi numerici, ad es. <code>larghezza/2 + 3</code>.</p><div class="params"></div>
    <button class="btn small" data-add>${xe("plus",16)} Aggiungi parametro</button>
    <footer><button class="btn" data-close>Annulla</button><button class="btn primary" data-apply>Applica</button></footer>`,(t,e)=>{let i=()=>{let{scope:s,errors:r}=en(n);t.querySelector(".params").innerHTML=n.length?'<div class="prow head"><span>Nome</span><span>Espressione</span><span>Valore</span><span></span></div>'+n.map((a,o)=>`
        <div class="prow"><input data-i="${o}" data-f="name" value="${jt(a.name)}" autocapitalize="off" autocomplete="off" spellcheck="false" class="${Ld(a.name)&&n.filter(l=>l.name===a.name).length===1?"":"bad"}">
        <input data-i="${o}" data-f="expr" value="${jt(a.expr)}" inputmode="decimal" autocapitalize="off" autocomplete="off" spellcheck="false" class="${r[a.name]?"bad":""}">
        <span class="pv">${r[a.name]?"\u26A0":be(s[a.name])}</span><button class="icon" data-del="${o}" aria-label="Elimina">${xe("trash",18)}</button></div>`).join(""):'<p class="empty">Nessun parametro</p>'};i(),t.addEventListener("input",s=>{let r=s.target.dataset.i;r!=null&&(n[+r][s.target.dataset.f]=s.target.value.trim(),clearTimeout(t._t),t._t=setTimeout(()=>{let a=document.activeElement,o=a&&a.dataset?[a.dataset.i,a.dataset.f,a.selectionStart]:null;if(i(),o){let l=t.querySelector(`input[data-i="${o[0]}"][data-f="${o[1]}"]`);if(l){l.focus();try{l.setSelectionRange(o[2],o[2])}catch{}}}},400))}),t.addEventListener("click",s=>{let r=s.target.closest("button");if(r){if(r.dataset.add!==void 0){let a=n.length+1;for(;n.some(o=>o.name===`p${a}`);)a++;n.push({name:`p${a}`,expr:"10"}),i()}else if(r.dataset.del)n.splice(+r.dataset.del,1),i();else if(r.dataset.apply!==void 0){let a=n.find(l=>!Ld(l.name)||n.filter(c=>c.name===l.name).length>1);if(a){Ne(`Nome non valido: ${a.name}`,"warn");return}let{scope:o}=en(n);Ke(l=>{l.params=n;for(let c of l.features)if(c.type==="sketch"&&(c.cons||[]).some(h=>h.expr!=null&&!Number.isFinite(Number(h.expr)))){let h=cc(c,o);h.ok&&(c.geo=h.geo)}}),e()}}})})}function Qb(){let n=document.createElement("input");n.type="file",n.accept=".stl,.step,.stp,.svg",n.onchange=async()=>{let t=n.files[0];if(!t)return;if(/\.svg$/i.test(t.name)){tM(t);return}if(t.size>25e6){Ne("File troppo grande (max 25 MB)","warn");return}let e=new Uint8Array(await t.arrayBuffer()),i="";for(let a=0;a<e.length;a+=32768)i+=String.fromCharCode.apply(null,e.subarray(a,a+32768));let s=/\.stl$/i.test(t.name)?"stl":"step",r={id:ka(),type:"import",name:t.name,format:s,fname:t.name,data:btoa(i),hash:`${t.size}-${t.lastModified}`};Ke(a=>{a.features.splice(dr(),0,r),a.rollback!=null&&(a.rollback+=1)})},n.click()}async function tM(n){let t;try{t=Gp(await n.text())}catch(a){Ne(a.message,"warn");return}let{box:e}=t,i="XY",s="center",r=n.name.replace(/\.svg$/i,"");In(`<h2>Importa SVG come schizzo</h2>
    <p class="note"><b>${jt(n.name)}</b> \xB7 misure nel file: ${be(e.w,2)} \xD7 ${be(e.h,2)} mm${t.skipped?` \xB7 ${t.skipped} elementi non importabili (testi o riferimenti: convertili in tracciati)`:""}</p>
    <div class="field"><label>Piano</label><div class="seg wide"><button data-pl="XY" class="on">XY <small>pianta</small></button><button data-pl="XZ">XZ <small>fronte</small></button><button data-pl="YZ">YZ <small>lato</small></button></div></div>
    <div class="field"><label>Larghezza finale (le proporzioni restano)</label><div class="num"><input data-w value="${be(e.w,2)}" inputmode="decimal" autocomplete="off"><span class="unit">mm</span></div><div class="val" data-h></div></div>
    <div class="field"><label>Posizione</label><div class="seg"><button data-an="center" class="on">Centrato sull'origine</button><button data-an="corner">Angolo in basso a sinistra sull'origine</button></div></div>
    <div class="field row"><label>Blocca la forma importata <small class="note">(consigliato: lo schizzo resta veloce)</small></label><button class="switch on" data-fix role="switch"><span></span></button></div>
    <footer><button class="btn" data-close>Annulla</button><button class="btn primary" data-go>Importa</button></footer>`,(a,o)=>{let l=a.querySelector("[data-w]"),c=a.querySelector("[data-h]"),h=()=>{let u=parseFloat(l.value.replace(",","."));c.textContent=u>0?`altezza ${be(e.h*u/e.w,2)} mm`:"valore non valido",c.classList.toggle("bad",!(u>0))};h(),l.oninput=h,a.addEventListener("click",u=>{let d=u.target.closest("button");if(d){if(d.dataset.pl)i=d.dataset.pl,a.querySelectorAll("[data-pl]").forEach(f=>f.classList.toggle("on",f===d));else if(d.dataset.an)s=d.dataset.an,a.querySelectorAll("[data-an]").forEach(f=>f.classList.toggle("on",f===d));else if(d.dataset.fix!==void 0)d.classList.toggle("on");else if(d.dataset.go!==void 0){let f=parseFloat(l.value.replace(",","."));if(!(f>0))return;let{geo:g,stats:x}=Wp(t,{scale:e.w>0?f/e.w:1,anchor:s,fixed:a.querySelector("[data-fix]").classList.contains("on")}),p={id:ka(),type:"sketch",name:r,plane:{std:i},geo:[...gc(),...g],cons:[]};o(),Ke(m=>{m.features.splice(dr(),0,p),m.rollback!=null&&(m.rollback+=1)}),Ne(`Importati ${x.lines} segmenti, ${x.arcs} archi, ${x.circles} cerchi`,"ok"),lm(p),ce.view(i==="XY"?"top":i==="XZ"?"front":"right")}}})})}function mm(n=null){let t=(D.model&&D.model.bodies||[]).filter(s=>!D.doc.ui.hidden[s.id]);if(!t.length){Ne("Non ci sono corpi visibili da esportare","warn");return}let e=new Set(n||t.map(s=>s.id)),i="threemf";In(`<h2>Esporta</h2>
    <div class="field"><label>Formato</label><div class="seg wide">
      <button data-fmt="threemf" class="on">3MF <small>stampa 3D</small></button><button data-fmt="stl">STL</button><button data-fmt="step">STEP <small>CAD</small></button></div></div>
    <p class="note fmt-note">Il 3MF tiene separati i corpi: in Bambu Studio diventano oggetti distinti.</p>
    <div class="field"><label>Corpi</label><div class="checks">${t.map(s=>`<label class="chk"><input type="checkbox" value="${s.id}" ${e.has(s.id)?"checked":""}> ${jt(D.doc.ui.names[s.id]||s.name)}</label>`).join("")}</div></div>
    <div class="out"></div>
    <footer><button class="btn" data-close>Chiudi</button><button class="btn primary" data-go>Prepara file</button></footer>`,s=>{let r={threemf:"Il 3MF tiene separati i corpi: in Bambu Studio diventano oggetti distinti.",stl:"L'STL unisce i corpi scelti in un'unica mesh.",step:"Lo STEP conserva le superfici esatte: si riapre in Fusion, FreeCAD, Onshape."};s.addEventListener("click",async a=>{let o=a.target.closest("button");if(!o)return;if(o.dataset.fmt){i=o.dataset.fmt,s.querySelectorAll("[data-fmt]").forEach(h=>h.classList.toggle("on",h===o)),s.querySelector(".fmt-note").textContent=r[i];return}if(o.dataset.go===void 0)return;let l=[...s.querySelectorAll(".checks input:checked")].map(h=>h.value);if(!l.length){Ne("Scegli almeno un corpo","warn");return}o.disabled=!0;let c=s.querySelector(".out");c.innerHTML='<p class="note">Preparo il file\u2026</p>';try{let h=i==="threemf"?"3mf":i,u=await Na.call("export",{format:h,ids:l,name:D.doc.name}),d={"3mf":"3mf",stl:"stl",step:"step"}[h],f={"3mf":"model/3mf",stl:"model/stl",step:"model/step"}[h],g=l.length===1?D.doc.ui.names[l[0]]||t.find(m=>m.id===l[0]).name:D.doc.name,x=new File([u],`${gm(g)}.${d}`,{type:f});c.innerHTML=`<div class="ready">${xe("check",18)} <b>${jt(x.name)}</b> <small>${be(x.size/1024/1024,2)} MB</small></div><div class="ready-act">${_m(x)?'<button class="btn primary" data-share>Condividi / Salva su File</button>':""}<button class="btn" data-dl>Scarica</button></div>`,c.querySelector("[data-dl]").onclick=()=>Jd(x);let p=c.querySelector("[data-share]");p&&(p.onclick=()=>navigator.share({files:[x],title:x.name}).catch(()=>{}))}catch(h){c.innerHTML=`<p class="err">${jt(h.message)}</p>`}o.disabled=!1})})}var gm=n=>String(n).replace(/[\\/:*?"<>|]+/g,"_").trim()||"modello";function _m(n){try{return!!(navigator.canShare&&navigator.canShare({files:[n]})&&matchMedia("(pointer: coarse)").matches)}catch{return!1}}function Jd(n){let t=URL.createObjectURL(n),e=document.createElement("a");e.href=t,e.download=n.name,document.body.appendChild(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}async function Kd(){let n=await $d();In(`<h2>Progetti</h2>
    <div class="proj-actions"><button class="btn primary" data-new>${xe("plus",16)} Nuovo</button><button class="btn" data-import>${xe("import",16)} Apri file .officina</button><button class="btn" data-export>${xe("export",16)} Salva copia su file</button></div>
    <div class="projects">${n.map(t=>`<div class="proj ${t.id===D.project.id?"on":""}"><button class="name" data-open="${t.id}"><b>${jt(t.name)}</b><small>${t.features} feature \xB7 ${new Date(t.updated).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})}</small></button>
      <button class="icon" data-dup="${t.id}" title="Duplica">${xe("plus",18)}</button><button class="icon" data-del="${t.id}" title="Elimina">${xe("trash",18)}</button></div>`).join("")}</div>
    <footer><button class="btn" data-close>Chiudi</button></footer>`,(t,e)=>{t.addEventListener("click",async i=>{let s=i.target.closest("button");if(s){if(s.dataset.new!==void 0){let r=await Lc("Nome del nuovo progetto","Nuovo progetto");if(!r)return;e(),await lr({id:ar(),name:r,doc:Sc(r)})}else if(s.dataset.open){if(s.dataset.open===D.project.id){e();return}let r=await Ia(s.dataset.open);e(),await lr(r)}else if(s.dataset.dup){let r=await Ia(s.dataset.dup),a=`${r.name} (copia)`;r.doc.name=a,await Mc({id:ar(),name:a,doc:r.doc}),e(),Kd()}else if(s.dataset.del){if(s.dataset.confirm!=="1"){s.dataset.confirm="1",s.classList.add("danger"),s.title="Tocca di nuovo per eliminare",Ne("Tocca di nuovo il cestino per eliminare","warn");return}if(await Jp(s.dataset.del),s.dataset.del===D.project.id){let r=await $d();e(),r.length?await lr(await Ia(r[0].id)):await lr({id:ar(),name:"Nuovo progetto",doc:Sc("Nuovo progetto")})}else e(),Kd()}else if(s.dataset.export!==void 0){let r=new File([JSON.stringify(D.doc)],`${gm(D.doc.name)}.officina`,{type:"application/json"});_m(r)?navigator.share({files:[r]}).catch(()=>Jd(r)):Jd(r)}else if(s.dataset.import!==void 0){let r=document.createElement("input");r.type="file",r.accept=".officina,.json,application/json",r.onchange=async()=>{try{let a=JSON.parse(await r.files[0].text());if(a.app!=="officina")throw new Error("Non \xE8 un progetto Officina");e(),await lr({id:ar(),name:a.name,doc:a})}catch(a){Ne(a.message,"warn")}},r.click()}}})})}function In(n,t){let e=Xt("#modal");e.hidden=!1,e.innerHTML=`<div class="sheet" role="dialog" aria-modal="true">${n}</div>`;let i=e.firstElementChild,s=()=>{e.hidden=!0,e.innerHTML="",document.removeEventListener("keydown",r)},r=a=>{a.key==="Escape"&&s()};return document.addEventListener("keydown",r),e.onclick=a=>{(a.target===e||a.target.closest("[data-close]"))&&s()},t&&t(i,s),s}function Lc(n,t){return new Promise(e=>{let i=!1,s=In(`<h2>${jt(n)}</h2><input class="big" value="${jt(t)}" autocomplete="off"><footer><button class="btn" data-close>Annulla</button><button class="btn primary" data-ok>OK</button></footer>`,(o,l)=>{let c=o.querySelector("input");setTimeout(()=>{c.focus(),c.select()},30);let h=()=>{i=!0,e(c.value.trim()),l()};o.querySelector("[data-ok]").onclick=h,c.onkeydown=u=>{u.key==="Enter"&&h()}}),r=Xt("#modal"),a=new MutationObserver(()=>{r.hidden&&(a.disconnect(),i||e(null))});a.observe(r,{attributes:!0})})}function eM({title:n,value:t,options:e,option:i,allowDelete:s}){return new Promise(r=>{let a=!1,o=i;In(`<h2>${jt(n)}</h2>
      ${e?`<div class="seg wide">${e.map(([h,u])=>`<button data-o="${h}" class="${h===i?"on":""}">${u}</button>`).join("")}</div>`:""}
      <input class="big" value="${jt(t)}" inputmode="decimal" autocomplete="off" autocapitalize="off" spellcheck="false">
      <div class="val"></div>
      ${D.doc.params.length?`<div class="chips">${D.doc.params.map(h=>`<button class="chip" data-p="${jt(h.name)}">${jt(h.name)}</button>`).join("")}</div>`:""}
      <footer>${s?`<button class="btn danger" data-rm>${xe("trash",16)} Elimina quota</button>`:""}<span class="grow"></span><button class="btn" data-close>Annulla</button><button class="btn primary" data-ok>OK</button></footer>`,(h,u)=>{let d=h.querySelector("input"),f=h.querySelector(".val"),g=()=>{try{let p=Ai(d.value,en(D.doc.params).scope);f.textContent=String(d.value).trim()===be(p)?"":`= ${be(p)}`,f.classList.remove("bad")}catch(p){f.textContent=p.message,f.classList.add("bad")}};g(),setTimeout(()=>{d.focus(),d.select()},30),d.oninput=g;let x=()=>{try{Ai(d.value,en(D.doc.params).scope)}catch{return}a=!0,r({value:d.value.trim(),option:o}),u()};d.onkeydown=p=>{p.key==="Enter"&&x()},h.addEventListener("click",p=>{let m=p.target.closest("button");if(m){if(m.dataset.ok!==void 0)x();else if(m.dataset.rm!==void 0)a=!0,r({remove:!0}),u();else if(m.dataset.o)o=m.dataset.o,h.querySelectorAll("[data-o]").forEach(_=>_.classList.toggle("on",_===m));else if(m.dataset.p){let _=d.selectionStart??d.value.length;d.value=d.value.slice(0,_)+m.dataset.p+d.value.slice(d.selectionEnd??_),d.focus(),g()}}})});let l=Xt("#modal"),c=new MutationObserver(()=>{l.hidden&&(c.disconnect(),a||r(null))});c.observe(l,{attributes:!0})})}function ou(n,t){let e=Xt("#popover"),i=t.filter(Boolean);e.innerHTML=`<div class="menu">${i.map((h,u)=>`<button data-mi="${u}" class="${h.cls||""}" ${h.disabled?"disabled":""}>${h.disabled?"":h.icon?xe(h.icon,18):'<span class="ic-pad"></span>'}<span>${jt(h.label)}</span></button>`).join("")}</div>`,e.hidden=!1;let s=e.firstElementChild,r=n.getBoundingClientRect(),a=s.offsetWidth,o=s.offsetHeight,l=Math.min(window.innerWidth-a-8,Math.max(8,r.left)),c=r.top-o-6;c<8&&(c=Math.min(window.innerHeight-o-8,r.bottom+6)),s.style.left=l+"px",s.style.top=c+"px",e.onclick=h=>{let u=h.target.closest("[data-mi]");e.hidden=!0,e.innerHTML="",u&&i[+u.dataset.mi].act()}}function Ne(n,t=""){let e=document.createElement("div");e.className=`toast ${t}`,e.textContent=n,Xt("#toasts").appendChild(e),setTimeout(()=>e.classList.add("out"),3200),setTimeout(()=>e.remove(),3700)}function Fa(n){let t=Xt("#hint");t.textContent=n||"",t.hidden=!n}function iM(n,t=""){let e=Xt("#status");e.textContent=n,e.className=t}function Ac(n){document.body.classList.toggle("busy",n)}function jd(n,t=!1){let e=Xt("#loading");if(!n){e.hidden=!0;return}e.hidden=!1,e.querySelector("p").textContent=n,e.classList.toggle("err",t)}var nM=()=>{Xt("#browser").classList.remove("open")};function Kn(){nn(),ur(),au(),Ic(),document.body.dataset.mode=D.mode,Xt("#sketchStatus").hidden=D.mode!=="sketch",D.mode!=="model"&&(Jn(),Xt("#selbar").hidden=!0),(D.mode==="model"||D.mode==="sketch")&&Fa(""),ym()}function ym(){let n=Xt("#welcome"),t=D.mode==="model"&&D.doc&&D.doc.features.length===0;n.hidden=!t,!(!t||n.dataset.ready)&&(n.dataset.ready="1",n.innerHTML=`<h2>Come si crea un pezzo</h2>
    <ol>
      <li>${xe("sketch")}<div><b>Schizzo</b><span>Scegli un piano e disegna una forma chiusa: linee, rettangoli, cerchi. Dai le misure con <i>Quota</i>.</span></div></li>
      <li>${xe("extrude")}<div><b>Estrudi</b><span>Tocca la forma azzurra e scegli lo spessore: diventa un solido.</span></div></li>
      <li>${xe("fillet")}<div><b>Rifinisci</b><span>Raccordi, fori, gusci\u2026 ogni passo resta nella cronologia in basso e si pu\xF2 modificare.</span></div></li>
      <li>${xe("export")}<div><b>Esporta</b><span>3MF per Bambu Studio, STL o STEP.</span></div></li>
    </ol>
    <div class="w-act"><button class="btn primary" data-wstart>${xe("sketch",18)} Inizia uno schizzo</button><button class="btn" data-whelp>Guida completa</button></div>`,n.onclick=e=>{e.target.closest("[data-wstart]")?ru():e.target.closest("[data-whelp]")&&xm()})}var sM={model:[["Muoversi",[["view","Un dito ruota, due dita spostano e ingrandiscono. In basso a sinistra: viste Alto, Fronte, Destra e Adatta."],["tree","Il pannello Corpi elenca corpi, schizzi e parametri: con l'occhio li mostri o nascondi."]]],["Creare",[["sketch","Schizzo: tocca un piano (o una faccia piana) e disegna. Si chiude con \xABFine schizzo\xBB."],["extrude","Estrudi: tocca dentro una forma chiusa azzurra e scegli lo spessore. \xABTaglia\xBB la scava dentro un corpo."],["revolve","Rivoluzione: fa ruotare una forma attorno a un asse (X, Y, Z o una linea dello schizzo), come al tornio."],["hole","Foro: tocca una faccia piana dove forare, anche pi\xF9 punti. Diametro, profondit\xE0 o passante, lamatura."],["svg","Importa: STL e STEP diventano corpi; un SVG diventa uno schizzo (scegli piano e larghezza), pronto da estrudere."]]],["Modificare",[["fillet","Raccordo e Smusso: tocca gli spigoli da arrotondare o smussare. Puoi anche selezionarli prima nel modello (tocco sugli spigoli) e poi premere il comando, o usare i pulsanti della barra di selezione."],["shell","Guscio: tocca le facce da togliere, il pezzo si svuota con lo spessore scelto."],["combine","Combina: unisce, sottrae o interseca corpi diversi."],["pattern","Serie: ripete una feature o un corpo in fila o in cerchio. Specchio: lo copia simmetrico rispetto a un piano."]]],["Cronologia e parametri",[["rollback","Ogni comando \xE8 un passo nella barra in basso: toccalo per modificarlo, sopprimerlo o eliminarlo."],["params","fx Parametri: dai un nome alle misure (es. larghezza = 60) e usale ovunque, anche come larghezza/2."]]]],sketch:[["Disegnare",[["line","Linea: tocca un punto dopo l'altro; la catena continua finch\xE9 non torni al primo punto. Doppio tocco o Esc per fermarti."],["rect","Rettangolo: due angoli opposti. Cerchio: centro e raggio. Arco: inizio, fine e un punto di passaggio."],["point","Punto: punti liberi, ad esempio i centri dei fori."],["dim","Misure esatte. Col dito: mentre disegni compare in basso la barra per lunghezza e angolo, larghezza e altezza, diametro. Col mouse: scrivi subito il numero, Tab passa all'angolo, Invio conferma; il valore scritto si blocca e il punto segue il mouse solo sull'altra misura."]]],["Quote",[["dim","Quota: tocca una linea (lunghezza), un cerchio (diametro), due punti (distanza) o due linee (angolo). Tocca una quota esistente per cambiarla; accetta parametri."]]],["Modificare",[["select","Seleziona: trascina punti e linee; un dito sul vuoto sposta la vista."],["trim","Taglia: tocca il pezzo di linea o cerchio da togliere; si taglia tra gli incroci con le altre curve."],["offset","Offset: tocca un contorno (si prende tutto il tratto collegato), scrivi la distanza; \xABDall'altro lato\xBB lo sposta dentro/fuori."],["fillet","Raccordo e Smusso: tocca gli angoli (anche pi\xF9 di uno) e scrivi raggio o distanza. Se avevi gi\xE0 selezionato angoli o coppie di linee, sono gi\xE0 dentro."],["mirror","Specchia: il pannello ha due campi, Oggetti e Linea di specchio. Tocca un campo per attivarlo, poi tocca nel disegno. La copia resta simmetrica anche se modifichi l'originale."],["construction","Costruzione: trasforma le linee selezionate in tratteggiate di riferimento (non formano profili, servono come aiuto o asse)."]]],["Vincoli",[["horizontal","Tocca il vincolo e poi gli elementi, uno dopo l'altro: Orizzontale/Verticale (una linea), Parallela/Perpendicolare (due linee), Tangente, Uguale, Coincidente\u2026"],["fix","In basso a sinistra \xABLiberi: N\xBB dice quanti movimenti restano: a 0 lo schizzo \xE8 completamente definito e diventa nero."]]]]};function xm(n=D.mode==="sketch"?"sketch":"model"){let t=(i,s)=>`<h3 class="hs">${s}</h3>`+sM[i].map(([r,a])=>`<h4>${r}</h4><ul class="help">${a.map(([o,l])=>`<li>${xe(o)}<span>${jt(l)}</span></li>`).join("")}</ul>`).join(""),e=n==="sketch"?[t("sketch","Nello schizzo"),t("model","Nel modello 3D")]:[t("model","Nel modello 3D"),t("sketch","Nello schizzo")];In(`<h2>Guida rapida</h2>${e.join("")}<footer><button class="btn primary" data-close>Ho capito</button></footer>`)}Xt("#btnHelp").onclick=()=>xm();Xt("#btnProjects").onclick=Kd;Xt("#btnTree").onclick=()=>Xt("#browser").classList.toggle("open");Xt("#btnUndo").onclick=nm;Xt("#btnRedo").onclick=Yd;Xt("#btnParams").onclick=pm;Xt("#btnExport").onclick=()=>mm();Xt("#docName").onclick=async()=>{if(D.mode!=="model")return;let n=await Lc("Nome del progetto",D.doc.name);n&&(Ke(t=>{t.name=n},{rebuild:!1}),D.project.name=n)};Xt("#sketchFinish").querySelector("[data-finish]").onclick=()=>Pc(!0);Xt("#sketchFinish").querySelector("[data-discard]").onclick=()=>Pc(!1);Xt("#viewbar").addEventListener("click",n=>{let t=n.target.closest("[data-view]");!t||D.mode==="sketch"||(t.dataset.view==="fit"?ce.fit():ce.view(t.dataset.view))});window.addEventListener("keydown",n=>{if(!n.target.closest("input,select,textarea")&&Xt("#modal").hidden&&Wb(n)||n.target.closest("input,select,textarea")||!Xt("#modal").hidden)return;let t=n.key.toLowerCase();if((n.ctrlKey||n.metaKey)&&t==="z"){n.preventDefault(),n.shiftKey?Yd():nm();return}if((n.ctrlKey||n.metaKey)&&t==="y"){n.preventDefault(),Yd();return}if(D.mode==="sketch"){let i={l:"line",r:"rect",c:"circle",a:"arc",p:"point",d:"dim",s:"select",t:"trim",o:"cmd:offset",m:"cmd:smirror",f:"cmd:sfillet"};i[t]&&!n.ctrlKey&&!n.metaKey?(fe.setTool(i[t]),nn()):t==="delete"||t==="backspace"?fe.deleteSelection():t==="escape"?(fe.cancel()||fe.setTool("select"),nn()):t==="enter"&&Pc(!0);return}if(t==="escape"){if(D.mode==="model"&&(D.msel.edges.length||D.msel.faces.length)){nu();return}D.mode==="command"?Oa():D.mode==="pickPlane"&&(D.mode="model",Kn(),bi());return}if(D.mode!=="model")return;let e={e:"extrude",f:"fillet",h:"hole"};t==="s"?ru():e[t]&&si(e[t])});document.addEventListener("gesturestart",n=>n.preventDefault());document.addEventListener("dblclick",n=>{n.target.closest("input")||n.preventDefault()});window.officina={app:D,vp:ce,sketcher:fe,cad:Na,startSketch:Zd,openCommand:si,okCommand:su,cancelCommand:Oa,finishSketch:Pc,refresh:Hi,applyPick:am,activePickField:Ua};for(let n of document.querySelectorAll("[data-icon]"))n.insertAdjacentHTML("afterbegin",xe(n.dataset.icon,n.classList.contains("btn")?18:22));"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{});Cb();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
