var ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cu=0,rh=1,Pu=2;var ta=1,Iu=2,Xs=3,Bn=0,gi=1,_i=2,is=0,$s=1,ah=2,oh=3,lh=4,Lu=5;var ns=100,Du=101,Nu=102,Uu=103,Ou=104,Fu=200,ku=201,Bu=202,zu=203,ch=204,hh=205,Vu=206,Hu=207,Gu=208,Wu=209,Xu=210,$u=211,qu=212,ju=213,Yu=214,fo=0,po=1,mo=2,Is=3,go=4,_o=5,yo=6,xo=7,dh=0,Zu=1,Ju=2,rn=0,uh=1,fh=2,ph=3,mh=4,gh=5,_h=6,yh=7;var xh=300,ss=301,qs=302,Qo=303,tl=304,vo=1e3,sn=1001,bo=1002,Ye=1003,Ku=1004;var ea=1005;var fi=1006,el=1007;var bn=1008;var Mi=1009,vh=1010,bh=1011,js=1012,il=1013,Yi=1014,Zi=1015,Ji=1016,nl=1017,sl=1018,rs=1020,Mh=35902,Sh=35899,wh=1021,Eh=1022,Ki=1023,_n=1026,Mn=1027,Th=1028,rl=1029,zn=1030,al=1031;var ol=1033,ia=33776,na=33777,sa=33778,ra=33779,ll=35840,cl=35841,hl=35842,dl=35843,ul=36196,fl=37492,pl=37496,ml=37488,gl=37489,aa=37490,_l=37491,yl=37808,xl=37809,vl=37810,bl=37811,Ml=37812,Sl=37813,wl=37814,El=37815,Tl=37816,Al=37817,Rl=37818,Cl=37819,Pl=37820,Il=37821,Ll=36492,Dl=36494,Nl=36495,Ul=36283,Ol=36284,oa=36285,Fl=36286;var vr=2300,Mo=2301,ho=2302,jc=2303,Yc=2400,Zc=2401,Jc=2402;var Qu=3200;var kl=0,tf=1,Sn="",Ai="srgb",br="srgb-linear",Mr="linear",ve="srgb";var uo=7680;var ef=519,nf=512,sf=513,rf=514,Ah=515,af=516,of=517,Rh=518,Ch=519,Ph=35044;var Ih="300 es",Oi=2e3,Ls=2001;function Xp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function $p(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Sr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lf(){let n=Sr("canvas");return n.style.display="block",n}var Gd={},Ds=null;function wr(...n){let t="THREE."+n.shift();Ds?Ds("log",t,...n):console.log(t,...n)}function cf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Yt(...n){n=cf(n);let t="THREE."+n.shift();if(Ds)Ds("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Qt(...n){n=cf(n);let t="THREE."+n.shift();if(Ds)Ds("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function mr(...n){let t=n.join(" ");t in Gd||(Gd[t]=!0,Yt(...n))}function hf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var df={[fo]:fo,[mo]:yo,[go]:go,[Is]:_o,[po]:po,[yo]:mo,[xo]:xo,[_o]:Is},$i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wd=1234567,gr=Math.PI/180,Ns=180/Math.PI;function wn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ri[n&255]+ri[n>>8&255]+ri[n>>16&255]+ri[n>>24&255]+"-"+ri[t&255]+ri[t>>8&255]+"-"+ri[t>>16&15|64]+ri[t>>24&255]+"-"+ri[e&63|128]+ri[e>>8&255]+"-"+ri[e>>16&255]+ri[e>>24&255]+ri[i&255]+ri[i>>8&255]+ri[i>>16&255]+ri[i>>24&255]).toLowerCase()}function ie(n,t,e){return Math.max(t,Math.min(e,n))}function Lh(n,t){return(n%t+t)%t}function qp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function jp(n,t,e){return n!==t?(e-n)/(t-n):0}function _r(n,t,e){return(1-e)*n+e*t}function Yp(n,t,e,i){return _r(n,t,1-Math.exp(-e*i))}function Zp(n,t=1){return t-Math.abs(Lh(n,t*2)-t)}function Jp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Kp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Qp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function tm(n,t){return n+Math.random()*(t-n)}function em(n){return n*(.5-Math.random())}function im(n){n!==void 0&&(Wd=n);let t=Wd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nm(n){return n*gr}function sm(n){return n*Ns}function rm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function am(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Dh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function om(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:Yt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Nh(n,t){if(t.constructor===Float32Array)return n;let e=Bl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Uh(n,t){if(t.constructor===Float32Array)return n;let e=Bl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var la={DEG2RAD:gr,RAD2DEG:Ns,generateUUID:wn,clamp:ie,euclideanModulo:Lh,mapLinear:qp,inverseLerp:jp,lerp:_r,damp:Yp,pingpong:Zp,smoothstep:Jp,smootherstep:Kp,randInt:Qp,randFloat:tm,randFloatSpread:em,seededRandom:im,degToRad:nm,radToDeg:sm,isPowerOfTwo:rm,ceilPowerOfTwo:am,floorPowerOfTwo:Dh,setQuaternionFromProperEuler:om,normalize:Uh,denormalize:Nh},Vh=class Vh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vh.prototype.isVector2=!0;var Lt=Vh,Ci=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(u!==M||l!==d||c!==f||h!==g){let p=l*d+c*f+h*g+u*M;p<0&&(d=-d,f=-f,g=-g,M=-M,p=-p);let m=1-o;if(p<.9995){let y=Math.acos(p),E=Math.sin(y);m=Math.sin(m*y)/E,o=Math.sin(o*y)/E,l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+M*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+M*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Hh=class Hh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Sc.copy(this).projectOnVector(t),this.sub(Sc)}reflect(t){return this.sub(Sc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hh.prototype.isVector3=!0;var U=Hh,Sc=new U,Xd=new Ci,Gh=class Gh{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],M=s[0],p=s[3],m=s[6],y=s[1],E=s[4],v=s[7],C=s[2],P=s[5],x=s[8];return r[0]=a*M+o*y+l*C,r[3]=a*p+o*E+l*P,r[6]=a*m+o*v+l*x,r[1]=c*M+h*y+u*C,r[4]=c*p+h*E+u*P,r[7]=c*m+h*v+u*x,r[2]=d*M+f*y+g*C,r[5]=d*p+f*E+g*P,r[8]=d*m+f*v+g*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=u*M,t[1]=(s*c-h*i)*M,t[2]=(o*i-s*a)*M,t[3]=d*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(i*l-c*e)*M,t[8]=(a*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wc.makeScale(t,e)),this}rotate(t){return mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wc.makeRotation(-t)),this}translate(t,e){return mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Gh.prototype.isMatrix3=!0;var ne=Gh,wc=new ne,$d=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qd=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lm(){let n={enabled:!0,workingColorSpace:br,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ve&&(s.r=gn(s.r),s.g=gn(s.g),s.b=gn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ve&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Sn?Mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[br]:{primaries:t,whitePoint:i,transfer:Mr,toXYZ:$d,fromXYZ:qd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:t,whitePoint:i,transfer:ve,toXYZ:$d,fromXYZ:qd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),n}var me=lm();function gn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ps,So=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ps===void 0&&(ps=Sr("canvas")),ps.width=t.width,ps.height=t.height;let s=ps.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ps}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(gn(e[i]/255)*255):e[i]=gn(e[i]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cm=0,Us=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=wn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ec(s[a].image)):r.push(Ec(s[a]))}else r=Ec(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ec(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?So.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}var hm=0,Tc=new U,bi=class n extends $i{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=sn,s=sn,r=fi,a=bn,o=Ki,l=Mi,c=n.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=wn(),this.name="",this.source=new Us(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Tc).x}get height(){return this.source.getSize(Tc).y}get depth(){return this.source.getSize(Tc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vo:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vo:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};bi.DEFAULT_IMAGE=null;bi.DEFAULT_MAPPING=xh;bi.DEFAULT_ANISOTROPY=1;var Wh=class Wh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],M=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,v=(f+1)/2,C=(m+1)/2,P=(h+d)/4,x=(u+M)/4,R=(g+p)/4;return E>v&&E>C?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=P/i,r=x/i):v>C?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=P/s,r=R/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=x/r,s=R/r),this.set(i,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-M)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wh.prototype.isVector4=!0;var be=Wh,wo=class extends $i{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new bi({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Us(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pi=class extends wo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Er=class extends bi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Eo=class extends bi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ko=class Ko{constructor(t,e,i,s,r,a,o,l,c,h,u,d,f,g,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,u,d,f,g,M,p)}set(t,e,i,s,r,a,o,l,c,h,u,d,f,g,M,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ko().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),a=1/ms.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,M=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-M*c,e[9]=-o*l,e[2]=M-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,M=c*u;e[0]=d+M*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=M+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,M=c*u;e[0]=d-M*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=M-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,M=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+M,e[1]=l*u,e[5]=M*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-M*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+M,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=M*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dm,t,um)}lookAt(t,e,i){let s=this.elements;return Ei.subVectors(t,e),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),En.crossVectors(i,Ei),En.lengthSq()===0&&(Math.abs(i.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),En.crossVectors(i,Ei)),En.normalize(),Ba.crossVectors(Ei,En),s[0]=En.x,s[4]=Ba.x,s[8]=Ei.x,s[1]=En.y,s[5]=Ba.y,s[9]=Ei.y,s[2]=En.z,s[6]=Ba.z,s[10]=Ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],M=i[6],p=i[10],m=i[14],y=i[3],E=i[7],v=i[11],C=i[15],P=s[0],x=s[4],R=s[8],V=s[12],O=s[1],B=s[5],Y=s[9],et=s[13],N=s[2],q=s[6],nt=s[10],K=s[14],ft=s[3],W=s[7],lt=s[11],ut=s[15];return r[0]=a*P+o*O+l*N+c*ft,r[4]=a*x+o*B+l*q+c*W,r[8]=a*R+o*Y+l*nt+c*lt,r[12]=a*V+o*et+l*K+c*ut,r[1]=h*P+u*O+d*N+f*ft,r[5]=h*x+u*B+d*q+f*W,r[9]=h*R+u*Y+d*nt+f*lt,r[13]=h*V+u*et+d*K+f*ut,r[2]=g*P+M*O+p*N+m*ft,r[6]=g*x+M*B+p*q+m*W,r[10]=g*R+M*Y+p*nt+m*lt,r[14]=g*V+M*et+p*K+m*ut,r[3]=y*P+E*O+v*N+C*ft,r[7]=y*x+E*B+v*q+C*W,r[11]=y*R+E*Y+v*nt+C*lt,r[15]=y*V+E*et+v*K+C*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],M=t[7],p=t[11],m=t[15],y=l*f-c*d,E=o*f-c*u,v=o*d-l*u,C=a*f-c*h,P=a*d-l*h,x=a*u-o*h;return e*(M*y-p*E+m*v)-i*(g*y-p*C+m*P)+s*(g*E-M*C+m*x)-r*(g*v-M*P+p*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],M=t[13],p=t[14],m=t[15],y=e*o-i*a,E=e*l-s*a,v=e*c-r*a,C=i*l-s*o,P=i*c-r*o,x=s*c-r*l,R=h*M-u*g,V=h*p-d*g,O=h*m-f*g,B=u*p-d*M,Y=u*m-f*M,et=d*m-f*p,N=y*et-E*Y+v*B+C*O-P*V+x*R;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/N;return t[0]=(o*et-l*Y+c*B)*q,t[1]=(s*Y-i*et-r*B)*q,t[2]=(M*x-p*P+m*C)*q,t[3]=(d*P-u*x-f*C)*q,t[4]=(l*O-a*et-c*V)*q,t[5]=(e*et-s*O+r*V)*q,t[6]=(p*v-g*x-m*E)*q,t[7]=(h*x-d*v+f*E)*q,t[8]=(a*Y-o*O+c*R)*q,t[9]=(i*O-e*Y-r*R)*q,t[10]=(g*P-M*v+m*y)*q,t[11]=(u*v-h*P-f*y)*q,t[12]=(o*V-a*B-l*R)*q,t[13]=(e*B-i*V+s*R)*q,t[14]=(M*E-g*C-p*y)*q,t[15]=(h*C-u*E+d*y)*q,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,M=a*h,p=a*u,m=o*u,y=l*c,E=l*h,v=l*u,C=i.x,P=i.y,x=i.z;return s[0]=(1-(M+m))*C,s[1]=(f+v)*C,s[2]=(g-E)*C,s[3]=0,s[4]=(f-v)*P,s[5]=(1-(d+m))*P,s[6]=(p+y)*P,s[7]=0,s[8]=(g+E)*x,s[9]=(p-y)*x,s[10]=(1-(d+M))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=ms.set(s[0],s[1],s[2]).length(),o=ms.set(s[4],s[5],s[6]).length(),l=ms.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Gi.copy(this);let c=1/a,h=1/o,u=1/l;return Gi.elements[0]*=c,Gi.elements[1]*=c,Gi.elements[2]*=c,Gi.elements[4]*=h,Gi.elements[5]*=h,Gi.elements[6]*=h,Gi.elements[8]*=u,Gi.elements[9]*=u,Gi.elements[10]*=u,e.setFromRotationMatrix(Gi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Oi,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===Oi)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ls)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Oi,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===Oi)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ls)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ko.prototype.isMatrix4=!0;var we=Ko,ms=new U,Gi=new we,dm=new U(0,0,0),um=new U(1,1,1),En=new U,Ba=new U,Ei=new U,jd=new we,Yd=new Ci,yn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return jd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yd.setFromEuler(this),this.setFromQuaternion(Yd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fm=0,Zd=new U,gs=new Ci,dn=new we,za=new U,cr=new U,pm=new U,mm=new Ci,Jd=new U(1,0,0),Kd=new U(0,1,0),Qd=new U(0,0,1),tu={type:"added"},gm={type:"removed"},_s={type:"childadded",child:null},Ac={type:"childremoved",child:null},Je=class n extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,e=new yn,i=new Ci,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new ne}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Jd,t)}rotateY(t){return this.rotateOnAxis(Kd,t)}rotateZ(t){return this.rotateOnAxis(Qd,t)}translateOnAxis(t,e){return Zd.copy(t).applyQuaternion(this.quaternion),this.position.add(Zd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jd,t)}translateY(t){return this.translateOnAxis(Kd,t)}translateZ(t){return this.translateOnAxis(Qd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?za.copy(t):za.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(cr,za,this.up):dn.lookAt(za,cr,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(dn),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tu),_s.child=t,this.dispatchEvent(_s),_s.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gm),Ac.child=t,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tu),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,pm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,mm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new U(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ui=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},_m={type:"move"},Fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let p=e.getJointPose(M,i),m=this._getHandJoint(c,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_m)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ui;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},Va={h:0,s:0,l:0};function Rc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var fe=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=i,me.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=me.workingColorSpace){if(t=Lh(t,1),e=ie(e,0,1),i=ie(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Rc(a,r,t+1/3),this.g=Rc(a,r,t),this.b=Rc(a,r,t-1/3)}return me.colorSpaceToWorking(this,s),this}setStyle(t,e=Ai){function i(r){r!==void 0&&parseFloat(r)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ai){let i=uf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ai){return me.workingToColorSpace(ai.copy(this),t),Math.round(ie(ai.r*255,0,255))*65536+Math.round(ie(ai.g*255,0,255))*256+Math.round(ie(ai.b*255,0,255))}getHexString(t=Ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(ai.copy(this),e);let i=ai.r,s=ai.g,r=ai.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(ai.copy(this),e),t.r=ai.r,t.g=ai.g,t.b=ai.b,t}getStyle(t=Ai){me.workingToColorSpace(ai.copy(this),t);let e=ai.r,i=ai.g,s=ai.b;return t!==Ai?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Tn),this.setHSL(Tn.h+t,Tn.s+e,Tn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Tn),t.getHSL(Va);let i=_r(Tn.h,Va.h,e),s=_r(Tn.s,Va.s,e),r=_r(Tn.l,Va.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ai=new fe;fe.NAMES=uf;var Tr=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wi=new U,un=new U,Cc=new U,fn=new U,ys=new U,xs=new U,eu=new U,Pc=new U,Ic=new U,Lc=new U,Dc=new be,Nc=new be,Uc=new be,Pn=class n{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Wi.subVectors(t,e),s.cross(Wi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Wi.subVectors(s,e),un.subVectors(i,e),Cc.subVectors(t,e);let a=Wi.dot(Wi),o=Wi.dot(un),l=Wi.dot(Cc),c=un.dot(un),h=un.dot(Cc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Dc.setScalar(0),Nc.setScalar(0),Uc.setScalar(0),Dc.fromBufferAttribute(t,e),Nc.fromBufferAttribute(t,i),Uc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Dc,r.x),a.addScaledVector(Nc,r.y),a.addScaledVector(Uc,r.z),a}static isFrontFacing(t,e,i,s){return Wi.subVectors(i,e),un.subVectors(t,e),Wi.cross(un).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wi.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Wi.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;ys.subVectors(s,i),xs.subVectors(r,i),Pc.subVectors(t,i);let l=ys.dot(Pc),c=xs.dot(Pc);if(l<=0&&c<=0)return e.copy(i);Ic.subVectors(t,s);let h=ys.dot(Ic),u=xs.dot(Ic);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(ys,a);Lc.subVectors(t,r);let f=ys.dot(Lc),g=xs.dot(Lc);if(g>=0&&f<=g)return e.copy(r);let M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(xs,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return eu.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(eu,o);let m=1/(p+M+d);return a=M*m,o=d*m,e.copy(i).addScaledVector(ys,a).addScaledVector(xs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pi=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Xi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Xi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Xi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xi):Xi.fromBufferAttribute(r,a),Xi.applyMatrix4(t.matrixWorld),this.expandByPoint(Xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ha.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ha.copy(i.boundingBox)),Ha.applyMatrix4(t.matrixWorld),this.union(Ha)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xi),Xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),Ga.subVectors(this.max,hr),vs.subVectors(t.a,hr),bs.subVectors(t.b,hr),Ms.subVectors(t.c,hr),An.subVectors(bs,vs),Rn.subVectors(Ms,bs),Yn.subVectors(vs,Ms);let e=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-Yn.z,Yn.y,An.z,0,-An.x,Rn.z,0,-Rn.x,Yn.z,0,-Yn.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-Yn.y,Yn.x,0];return!Oc(e,vs,bs,Ms,Ga)||(e=[1,0,0,0,1,0,0,0,1],!Oc(e,vs,bs,Ms,Ga))?!1:(Wa.crossVectors(An,Rn),e=[Wa.x,Wa.y,Wa.z],Oc(e,vs,bs,Ms,Ga))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},pn=[new U,new U,new U,new U,new U,new U,new U,new U],Xi=new U,Ha=new pi,vs=new U,bs=new U,Ms=new U,An=new U,Rn=new U,Yn=new U,hr=new U,Ga=new U,Wa=new U,Zn=new U;function Oc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Zn.fromArray(n,r);let o=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),l=t.dot(Zn),c=e.dot(Zn),h=i.dot(Zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Be=new U,Xa=new Lt,ym=0,oi=class extends $i{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ym++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ph,this.updateRanges=[],this.gpuType=Zi,this.version=0,this._normalizationScale=t!==void 0?Bl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Xa.fromBufferAttribute(this,e),Xa.applyMatrix3(t),this.setXY(e,Xa.x,Xa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Nh(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Uh(t,this.array)}};var Ar=class extends oi{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Rr=class extends oi{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ae=class extends oi{constructor(t,e,i){super(new Float32Array(t),e,i)}},xm=new pi,dr=new U,Fc=new U,mi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):xm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);let e=dr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(dr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(Fc)),this.expandByPoint(dr.copy(t.center).sub(Fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vm=0,Ui=new we,kc=new Je,Ss=new U,Ti=new pi,ur=new pi,je=new U,Ve=class n extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xp(t)?Rr:Ar)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ne().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,e,i){return Ui.makeTranslation(t,e,i),this.applyMatrix4(Ui),this}scale(t,e,i){return Ui.makeScale(t,e,i),this.applyMatrix4(Ui),this}lookAt(t){return kc.lookAt(t),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ae(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ti.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(Ti.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(Ti.min,ur.min),Ti.expandByPoint(je),je.addVectors(Ti.max,ur.max),Ti.expandByPoint(je)):(Ti.expandByPoint(ur.min),Ti.expandByPoint(ur.max))}Ti.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)je.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)je.fromBufferAttribute(o,c),l&&(Ss.fromBufferAttribute(t,c),je.add(Ss)),s=Math.max(s,i.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new oi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let V=0;V<i.count;V++)o[V]=new U,l[V]=new U;let h=new U,u=new U,d=new U,f=new Lt,g=new Lt,M=new Lt,p=new U,m=new U;function y(V,O,B){c[V]=c[O]=c[B]=1,h.fromBufferAttribute(i,V),u.fromBufferAttribute(i,O),d.fromBufferAttribute(i,B),f.fromBufferAttribute(r,V),g.fromBufferAttribute(r,O),M.fromBufferAttribute(r,B),u.sub(h),d.sub(h),g.sub(f),M.sub(f);let Y=1/(g.x*M.y-M.x*g.y);isFinite(Y)&&(p.copy(u).multiplyScalar(M.y).addScaledVector(d,-g.y).multiplyScalar(Y),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-M.x).multiplyScalar(Y),o[V].add(p),o[O].add(p),o[B].add(p),l[V].add(m),l[O].add(m),l[B].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let V=0,O=E.length;V<O;++V){let B=E[V],Y=B.start,et=B.count;for(let N=Y,q=Y+et;N<q;N+=3)y(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let v=new U,C=new U,P=new U,x=new U;function R(V){P.fromBufferAttribute(s,V),x.copy(P);let O=o[V];v.copy(O),v.sub(P.multiplyScalar(P.dot(O))).normalize(),C.crossVectors(x,O);let Y=C.dot(l[V])<0?-1:1;a.setXYZW(V,v.x,v.y,v.z,Y)}for(let V=0,O=i.count;V<O;++V)c[V]&&R(V);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new oi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),M=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new oi(d,h,u)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},To=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ph,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=iu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=iu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function iu(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=wn()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var hi=new U,qi=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?Bl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)hi.fromBufferAttribute(this,e),hi.applyMatrix4(t),this.setXYZ(e,hi.x,hi.y,hi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)hi.fromBufferAttribute(this,e),hi.applyNormalMatrix(t),this.setXYZ(e,hi.x,hi.y,hi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)hi.fromBufferAttribute(this,e),hi.transformDirection(t),this.setXYZ(e,hi.x,hi.y,hi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){wr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new oi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){wr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Nh(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Uh(t,this.data.array)}},Bc=new U,bm=new U,Mm=new ne,Ri=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Bc.subVectors(i,e).cross(bm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Bc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Mm.getNormalMatrix(t),s=this.coplanarPoint(Bc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Sm=0,xn=class extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=$s,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=hh,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ri().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Lt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var mn=new U,zc=new U,$a=new U,qa=new U,In=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){zc.copy(t).add(e).multiplyScalar(.5),$a.copy(e).sub(t).normalize(),qa.copy(this.origin).sub(zc);let r=t.distanceTo(e)*.5,a=-this.direction.dot($a),o=qa.dot(this.direction),l=-qa.dot($a),c=qa.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let M=1/h;u*=M,d*=M,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(zc).addScaledVector($a,d),f}intersectSphere(t,e){if(t.radius<0)return null;mn.subVectors(t.center,this.origin);let i=mn.dot(this.direction),s=mn.dot(mn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,g=e.x-a.x,M=e.y-a.y,p=e.z-a.z,m=i.x-a.x,y=i.y-a.y,E=i.z-a.z,v=Math.abs(l),C=Math.abs(c),P=Math.abs(h),x,R,V,O,B,Y,et,N,q,nt,K,ft;if(v>=C&&v>=P?(V=l,Y=u,q=g,ft=m,l>=0?(x=c,R=h,O=d,B=f,et=M,N=p,nt=y,K=E):(x=h,R=c,O=f,B=d,et=p,N=M,nt=E,K=y)):C>=P?(V=c,Y=d,q=M,ft=y,c>=0?(x=h,R=l,O=f,B=u,et=p,N=g,nt=E,K=m):(x=l,R=h,O=u,B=f,et=g,N=p,nt=m,K=E)):(V=h,Y=f,q=p,ft=E,h>=0?(x=l,R=c,O=u,B=d,et=g,N=M,nt=m,K=y):(x=c,R=l,O=d,B=u,et=M,N=g,nt=y,K=m)),V===0)return null;let W=x/V,lt=R/V,ut=1/V,Ft=O-W*Y,Jt=B-lt*Y,it=et-W*q,Pt=N-lt*q,Ht=nt-W*ft,jt=K-lt*ft,Ut=Ht*Pt-jt*it,te=Ft*jt-Jt*Ht,Pe=it*Jt-Pt*Ft;if(s){if(Ut<0||te<0||Pe<0)return null}else if((Ut<0||te<0||Pe<0)&&(Ut>0||te>0||Pe>0))return null;let Zt=Ut+te+Pe;if(Zt===0)return null;let ge=ut*(Ut*Y+te*q+Pe*ft);return(Zt>0?ge<0:ge>0)?null:this.at(ge/Zt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ln=class extends xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},nu=new we,Jn=new In,ja=new mi,su=new U,Ya=new U,Za=new U,Ja=new U,Vc=new U,Ka=new U,ru=new U,Qa=new U,He=class extends Je{constructor(t=new Ve,e=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Vc.fromBufferAttribute(u,t),a?Ka.addScaledVector(Vc,h):Ka.addScaledVector(Vc.sub(e),h))}e.add(Ka)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(ja.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(ja,su)===null||Jn.origin.distanceToSquared(su)>(t.far-t.near)**2))&&(nu.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(nu),!(i.boundingBox!==null&&Jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){let p=d[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,C=E;v<C;v+=3){let P=o.getX(v),x=o.getX(v+1),R=o.getX(v+2);s=to(this,m,t,i,c,h,u,P,x,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let p=g,m=M;p<m;p+=3){let y=o.getX(p),E=o.getX(p+1),v=o.getX(p+2);s=to(this,a,t,i,c,h,u,y,E,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){let p=d[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,C=E;v<C;v+=3){let P=v,x=v+1,R=v+2;s=to(this,m,t,i,c,h,u,P,x,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let p=g,m=M;p<m;p+=3){let y=p,E=p+1,v=p+2;s=to(this,a,t,i,c,h,u,y,E,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function wm(n,t,e,i,s,r,a,o){let l;if(t.side===gi?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Bn,o),l===null)return null;Qa.copy(o),Qa.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Qa);return c<e.near||c>e.far?null:{distance:c,point:Qa.clone(),object:n}}function to(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Ya),n.getVertexPosition(l,Za),n.getVertexPosition(c,Ja);let h=wm(n,t,e,i,Ya,Za,Ja,ru);if(h){let u=new U;Pn.getBarycoord(ru,Ya,Za,Ja,u),s&&(h.uv=Pn.getInterpolatedAttribute(s,o,l,c,u,new Lt)),r&&(h.uv1=Pn.getInterpolatedAttribute(r,o,l,c,u,new Lt)),a&&(h.normal=Pn.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new U,materialIndex:0};Pn.getNormal(Ya,Za,Ja,d.normal),h.face=d,h.barycoord=u}return h}var Ao=class extends bi{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ye,h=Ye,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kn=new mi,Em=new Lt(.5,.5),eo=new U,Dn=class{constructor(t=new Ri,e=new Ri,i=new Ri,s=new Ri,r=new Ri,a=new Ri){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Oi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],M=r[9],p=r[10],m=r[11],y=r[12],E=r[13],v=r[14],C=r[15];if(s[0].setComponents(c-a,f-h,m-g,C-y).normalize(),s[1].setComponents(c+a,f+h,m+g,C+y).normalize(),s[2].setComponents(c+o,f+u,m+M,C+E).normalize(),s[3].setComponents(c-o,f-u,m-M,C-E).normalize(),i)s[4].setComponents(l,d,p,v).normalize(),s[5].setComponents(c-l,f-d,m-p,C-v).normalize();else if(s[4].setComponents(c-l,f-d,m-p,C-v).normalize(),e===Oi)s[5].setComponents(c+l,f+d,m+p,C+v).normalize();else if(e===Ls)s[5].setComponents(l,d,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){Kn.center.set(0,0,0);let e=Em.distanceTo(t.center);return Kn.radius=.7071067811865476+e,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(eo.x=s.normal.x>0?t.max.x:t.min.x,eo.y=s.normal.y>0?t.max.y:t.min.y,eo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(eo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},au=new we,Ro=class n{constructor(){this.coordinateSystem=Oi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];au.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Dn),i[s].setFromProjectionMatrix(au,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Dn),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Nn=class extends xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Co=new U,Po=new U,ou=new we,fr=new In,io=new mi,Hc=new U,lu=new U,Cr=class extends Je{constructor(t=new Ve,e=new Nn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Co.fromBufferAttribute(e,s-1),Po.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Co.distanceTo(Po);t.setAttribute("lineDistance",new Ae(i,1))}else Yt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),io.radius+=r,t.ray.intersectsSphere(io)===!1)return;ou.copy(s).invert(),fr.copy(t.ray).applyMatrix4(ou);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=f,p=g-1;M<p;M+=c){let m=h.getX(M),y=h.getX(M+1),E=no(this,t,fr,l,m,y,M);E&&e.push(E)}if(this.isLineLoop){let M=h.getX(g-1),p=h.getX(f),m=no(this,t,fr,l,M,p,g-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let M=f,p=g-1;M<p;M+=c){let m=no(this,t,fr,l,M,M+1,M);m&&e.push(m)}if(this.isLineLoop){let M=no(this,t,fr,l,g-1,f,g-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function no(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(Co.fromBufferAttribute(o,s),Po.fromBufferAttribute(o,r),e.distanceSqToSegment(Co,Po,Hc,lu)>i)return;Hc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Hc);if(!(c<t.near||c>t.far))return{distance:c,point:lu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var cu=new U,hu=new U,ks=class extends Cr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)cu.fromBufferAttribute(e,s),hu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+cu.distanceTo(hu);t.setAttribute("lineDistance",new Ae(i,1))}else Yt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Pr=class extends Cr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var Ir=class extends bi{constructor(t=[],e=ss,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var vn=class extends bi{constructor(t,e,i=Yi,s,r,a,o=Ye,l=Ye,c,h=_n,u=1){if(h!==_n&&h!==Mn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Us(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Lr=class extends vn{constructor(t,e=Yi,i=ss,s,r,a=Ye,o=Ye,l,c=_n){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Dr=class extends bi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Bs=class n extends Ve{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2));function g(M,p,m,y,E,v,C,P,x,R,V){let O=v/x,B=C/R,Y=v/2,et=C/2,N=P/2,q=x+1,nt=R+1,K=0,ft=0,W=new U;for(let lt=0;lt<nt;lt++){let ut=lt*B-et;for(let Ft=0;Ft<q;Ft++){let Jt=Ft*O-Y;W[M]=Jt*y,W[p]=ut*E,W[m]=N,c.push(W.x,W.y,W.z),W[M]=0,W[p]=0,W[m]=P>0?1:-1,h.push(W.x,W.y,W.z),u.push(Ft/x),u.push(1-lt/R),K+=1}}for(let lt=0;lt<R;lt++)for(let ut=0;ut<x;ut++){let Ft=d+ut+q*lt,Jt=d+ut+q*(lt+1),it=d+(ut+1)+q*(lt+1),Pt=d+(ut+1)+q*lt;l.push(Ft,Jt,Pt),l.push(Jt,it,Pt),ft+=6}o.addGroup(f,ft,V),f+=ft,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Yt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Lt:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new U,s=[],r=[],a=[],o=new U,l=new we;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ie(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ie(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},zs=class extends Ii{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Lt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Io=class extends zs{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Oh(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var du=new U,uu=new U,Gc=new Oh,Wc=new Oh,Xc=new Oh,Lo=class extends Ii{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(uu.subVectors(s[0],s[1]).add(s[0]),c=uu);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(du.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=du),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),M=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);M<1e-4&&(M=1),g<1e-4&&(g=M),p<1e-4&&(p=M),Gc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,M,p),Wc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,M,p),Xc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,M,p)}else this.curveType==="catmullrom"&&(Gc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Wc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Xc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Gc.calc(l),Wc.calc(l),Xc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function fu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Tm(n,t){let e=1-n;return e*e*t}function Am(n,t){return 2*(1-n)*n*t}function Rm(n,t){return n*n*t}function yr(n,t,e,i){return Tm(n,t)+Am(n,e)+Rm(n,i)}function Cm(n,t){let e=1-n;return e*e*e*t}function Pm(n,t){let e=1-n;return 3*e*e*n*t}function Im(n,t){return 3*(1-n)*n*n*t}function Lm(n,t){return n*n*n*t}function xr(n,t,e,i,s){return Cm(n,t)+Pm(n,e)+Im(n,i)+Lm(n,s)}var Nr=class extends Ii{constructor(t=new Lt,e=new Lt,i=new Lt,s=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Lt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(xr(t,s.x,r.x,a.x,o.x),xr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Do=class extends Ii{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(xr(t,s.x,r.x,a.x,o.x),xr(t,s.y,r.y,a.y,o.y),xr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ur=class extends Ii{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},No=class extends Ii{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends Ii{constructor(t=new Lt,e=new Lt,i=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Lt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(yr(t,s.x,r.x,a.x),yr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uo=class extends Ii{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(yr(t,s.x,r.x,a.x),yr(t,s.y,r.y,a.y),yr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fr=class extends Ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(fu(o,l.x,c.x,h.x,u.x),fu(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Lt().fromArray(s))}return this}},pu=Object.freeze({__proto__:null,ArcCurve:Io,CatmullRomCurve3:Lo,CubicBezierCurve:Nr,CubicBezierCurve3:Do,EllipseCurve:zs,LineCurve:Ur,LineCurve3:No,QuadraticBezierCurve:Or,QuadraticBezierCurve3:Uo,SplineCurve:Fr}),Oo=class extends Ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pu[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new pu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Qn=class extends Oo{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ur(this.currentPoint.clone(),new Lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Or(this.currentPoint.clone(),new Lt(t,e),new Lt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Nr(this.currentPoint.clone(),new Lt(t,e),new Lt(i,s),new Lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Fr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new zs(t,e,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Vs=class extends Qn{constructor(t){super(t),this.uuid=wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Qn().fromJSON(s))}return this}};function Dm(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=ff(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=km(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,u=l;for(let d=e;d<s;d+=e){let f=n[d],g=n[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return kr(r,a,e,o,l,c,0),a}function ff(n,t,e,i,s){let r;if(s===Ym(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=mu(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=mu(a/i|0,n[a],n[a+1],r);return r&&Hs(r,r.next)&&(zr(r),r=r.next),r}function ts(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Hs(e,e.next)||Ie(e.prev,e,e.next)===0)){if(zr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function kr(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Gm(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Um(n,i,s,r):Nm(n)){t.push(l.i,n.i,c.i),zr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Om(ts(n),t),kr(n,t,e,i,s,r,2)):a===2&&Fm(n,t,e,i,s,r):kr(ts(n),t,e,i,s,r,1);break}}}function Nm(n){let t=n.prev,e=n,i=n.next;if(Ie(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&pr(s,o,r,l,a,c,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Um(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Ie(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),M=Math.max(o,l,c),p=Math.max(h,u,d),m=Kc(f,g,t,e,i),y=Kc(M,p,t,e,i),E=n.prevZ,v=n.nextZ;for(;E&&E.z>=m&&v&&v.z<=y;){if(E.x>=f&&E.x<=M&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&pr(o,h,l,u,c,d,E.x,E.y)&&Ie(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=f&&v.x<=M&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&pr(o,h,l,u,c,d,v.x,v.y)&&Ie(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=m;){if(E.x>=f&&E.x<=M&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&pr(o,h,l,u,c,d,E.x,E.y)&&Ie(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=M&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&pr(o,h,l,u,c,d,v.x,v.y)&&Ie(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Om(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Hs(i,s)&&mf(i,e,e.next,s)&&Br(i,s)&&Br(s,i)&&(t.push(i.i,e.i,s.i),zr(e),zr(e.next),e=n=s),e=e.next}while(e!==n);return ts(e)}function Fm(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$m(a,o)){let l=gf(a,o);a=ts(a,a.next),l=ts(l,l.next),kr(a,t,e,i,s,r,0),kr(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function km(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=ff(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Xm(c))}s.sort(Bm);for(let r=0;r<s.length;r++)e=zm(s[r],e);return e}function Bm(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function zm(n,t){let e=Vm(n,t);if(!e)return t;let i=gf(e,n);return ts(i,i.next),ts(e,e.next)}function Vm(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(Hs(n,e))return e;do{if(Hs(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&pf(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);Br(e,n)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Hm(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Hm(n,t){return Ie(n.prev,n,t.prev)<0&&Ie(t.next,n,n.next)<0}function Gm(n,t,e,i){let s=n;do s.z===0&&(s.z=Kc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Wm(s)}function Wm(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Kc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Xm(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function pf(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function pr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&pf(n,t,e,i,s,r,a,o)}function $m(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!qm(n,t)&&(Br(n,t)&&Br(t,n)&&jm(n,t)&&(Ie(n.prev,n,t.prev)||Ie(n,t.prev,t))||Hs(n,t)&&Ie(n.prev,n,n.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Hs(n,t){return n.x===t.x&&n.y===t.y}function mf(n,t,e,i){let s=ro(Ie(n,t,e)),r=ro(Ie(n,t,i)),a=ro(Ie(e,i,n)),o=ro(Ie(e,i,t));return!!(s!==r&&a!==o||s===0&&so(n,e,t)||r===0&&so(n,i,t)||a===0&&so(e,n,i)||o===0&&so(e,t,i))}function so(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ro(n){return n>0?1:n<0?-1:0}function qm(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&mf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Br(n,t){return Ie(n.prev,n,n.next)<0?Ie(n,t,n.next)>=0&&Ie(n,n.prev,t)>=0:Ie(n,t,n.prev)<0||Ie(n,n.next,t)<0}function jm(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function gf(n,t){let e=Qc(n.i,n.x,n.y),i=Qc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function mu(n,t,e,i){let s=Qc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function zr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Qc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ym(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var th=class{static triangulate(t,e,i=2){return Dm(t,e,i)}},Ps=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];gu(t),_u(i,t);let a=t.length;e.forEach(gu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,_u(i,e[l]);let o=th.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function gu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function _u(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Vr=class n extends Ve{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],M=[],p=[];for(let m=0;m<h;m++){let y=m*d-a;for(let E=0;E<c;E++){let v=E*u-r;g.push(v,-y,0),M.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let E=y+c*m,v=y+c*(m+1),C=y+1+c*(m+1),P=y+1+c*m;f.push(E,v,P),f.push(v,C,P)}this.setIndex(f),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(M,3)),this.setAttribute("uv",new Ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var Hr=class n extends Ve{constructor(t=new Vs([new Lt(0,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(r,3)),this.setAttribute("uv",new Ae(a,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;Ps.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let y=g[p];Ps.isClockWise(y)===!0&&(g[p]=y.reverse())}let M=Ps.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let y=g[p];f=f.concat(y)}for(let p=0,m=f.length;p<m;p++){let y=f[p];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let p=0,m=M.length;p<m;p++){let y=M[p],E=y[0]+u,v=y[1]+u,C=y[2]+u;i.push(E,v,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Zm(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};function Zm(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Gr=class extends Ve{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,s=new U,r=new U;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let g=d,M=d+f;g<M;g+=3)for(let p=0;p<3;p++){let m=o.getX(g+p),y=o.getX(g+(p+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,y),yu(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),yu(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ae(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function yu(n,t,e){let i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}function as(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(xu(s))s.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(xu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function li(n){let t={};for(let e=0;e<n.length;e++){let i=as(n[e]);for(let s in i)t[s]=i[s]}return t}function xu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Jm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Fh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var ca={clone:as,merge:li},Km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fi=class extends xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Km,this.fragmentShader=Qm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=Jm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new fe().setHex(s.value);break;case"v2":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new be().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[i].value=new we().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Fo=class extends Fi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Wr=class extends xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ko=class extends xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Bo=class extends xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ws(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function ao(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Un=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];t:{e:{let a;i:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break e}a=e.length;break i}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break e}a=i,i=0;break i}break t}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zo=class extends Un{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yc,endingEnd:Yc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zc:r=t,o=2*e-i;break;case Jc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Zc:a=t,l=2*i-e;break;case Jc:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),M=g*g,p=M*g,m=-d*p+2*d*M-d*g,y=(1+d)*p+(-1.5-2*d)*M+(-.5+d)*g+1,E=(-1-f)*p+(1.5+f)*M+.5*g,v=f*p-f*M;for(let C=0;C!==o;++C)r[C]=m*a[h+C]+y*a[c+C]+E*a[l+C]+v*a[u+C];return r}},Vo=class extends Un{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Ho=class extends Un{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Go=class extends Un{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-e)/(s-e),M=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*M+a[l+p]*g;return r}let d=o*2,f=t-1;for(let g=0;g!==o;++g){let M=a[c+g],p=a[l+g],m=f*d+g*2,y=u[m],E=u[m+1],v=t*d+g*2,C=h[v],P=h[v+1],x=eg(i,e,y,C,s);r[g]=_f(x,M,E,P,p)}return r}};function _f(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function tg(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function eg(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=_f(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=tg(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Li=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ws(e,this.TimeBufferType),this.values=ws(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ws(t.times,Array),values:ws(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),ao(t.settings)&&(i.settings={inTangents:ws(t.settings.inTangents,Array),outTangents:ws(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Go(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case vr:e=this.InterpolantFactoryMethodDiscrete;break;case Mo:e=this.InterpolantFactoryMethodLinear;break;case ho:e=this.InterpolantFactoryMethodSmooth;break;case jc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Yt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return ho;case this.InterpolantFactoryMethodBezier:return jc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;ao(this.settings)&&(vu(this.settings.inTangents,t),vu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;ao(this.settings)&&(bu(this.settings.inTangents,t),bu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&$p(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Qt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ho,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let M=e[u+g];if(M!==e[d+g]||M!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,ao(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function vu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function bu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Li.prototype.ValueTypeName="";Li.prototype.TimeBufferType=Float32Array;Li.prototype.ValueBufferType=Float32Array;Li.prototype.DefaultInterpolation=Mo;var On=class extends Li{constructor(t,e,i){super(t,e,i)}};On.prototype.ValueTypeName="bool";On.prototype.ValueBufferType=Array;On.prototype.DefaultInterpolation=vr;On.prototype.InterpolantFactoryMethodLinear=void 0;On.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends Li{constructor(t,e,i,s){super(t,e,i,s)}};Wo.prototype.ValueTypeName="color";var Xo=class extends Li{constructor(t,e,i,s){super(t,e,i,s)}};Xo.prototype.ValueTypeName="number";var $o=class extends Un{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ci.slerpFlat(r,0,a,c-o,a,c,l);return r}},Xr=class extends Li{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new $o(this.times,this.values,this.getValueSize(),t)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Fn=class extends Li{constructor(t,e,i){super(t,e,i)}};Fn.prototype.ValueTypeName="string";Fn.prototype.ValueBufferType=Array;Fn.prototype.DefaultInterpolation=vr;Fn.prototype.InterpolantFactoryMethodLinear=void 0;Fn.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends Li{constructor(t,e,i,s){super(t,e,i,s)}};qo.prototype.ValueTypeName="vector";var jo=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yf=new jo,Yo=class{constructor(t){this.manager=t!==void 0?t:yf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Yo.DEFAULT_MATERIAL_NAME="__DEFAULT";var $r=class extends Je{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},qr=class extends $r{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},$c=new we,Mu=new U,Su=new U,Zo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Mi,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dn,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Mu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mu),Su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Su),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){$c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix($c,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ls||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply($c)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},oo=new U,lo=new Ci,nn=new U,jr=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oo,lo,nn),nn.x===1&&nn.y===1&&nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,lo,nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(oo,lo,nn),nn.x===1&&nn.y===1&&nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,lo,nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Cn=new U,wu=new Lt,Eu=new Lt,di=class extends jr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,wu,Eu),e.subVectors(Eu,wu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var es=class extends jr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},eh=class extends Zo{constructor(){super(new es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends $r{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new eh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Zr=class extends Ve{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Es=-90,Ts=1,Gs=class extends Je{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new di(Es,Ts,t,e);s.layers=this.layers,this.add(s);let r=new di(Es,Ts,t,e);r.layers=this.layers,this.add(r);let a=new di(Es,Ts,t,e);a.layers=this.layers,this.add(a);let o=new di(Es,Ts,t,e);o.layers=this.layers,this.add(o);let l=new di(Es,Ts,t,e);l.layers=this.layers,this.add(l);let c=new di(Es,Ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ls)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=M,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Jo=class extends di{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var kh="\\[\\]\\.:\\/",ig=new RegExp("["+kh+"]","g"),Bh="[^"+kh+"]",ng="[^"+kh.replace("\\.","")+"]",sg=/((?:WC+[\/:])*)/.source.replace("WC",Bh),rg=/(WCOD+)?/.source.replace("WCOD",ng),ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bh),og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bh),lg=new RegExp("^"+sg+rg+ag+og+"$"),cg=["material","materials","bones","map"],ih=class{constructor(t,e,i){let s=i||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ce=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ig,"")}static parseTrackName(t){let e=lg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);cg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=ih;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ob=new Float32Array(1);var kn=class extends To{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Tu=new we,Jr=class{constructor(t,e,i=0,s=1/0){this.ray=new In(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Tu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tu),this}intersectObject(t,e=!0,i=[]){return nh(t,this,i,e),i.sort(Au),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)nh(t[s],this,i,e);return i.sort(Au),i}};function Au(n,t){return n.distance-t.distance}function nh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)nh(r[a],t,e,!0)}}var Ws=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ie(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Xh=class Xh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Xh.prototype.isMatrix2=!0;var sh=Xh;var Ru=new U,co=new U,As=new U,Rs=new U,qc=new U,hg=new U,dg=new U,Kr=class{constructor(t=new U,e=new U){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Ru.subVectors(t,this.start),co.subVectors(this.end,this.start);let i=co.dot(co);if(i===0)return 0;let r=co.dot(Ru)/i;return e&&(r=ie(r,0,1)),r}closestPointToPoint(t,e,i){let s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=hg,i=dg){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;As.subVectors(c,o),Rs.subVectors(h,l),qc.subVectors(o,l);let u=As.dot(As),d=Rs.dot(Rs),f=Rs.dot(qc);if(u<=s&&d<=s)return e.copy(o),i.copy(l),e.distanceToSquared(i);if(u<=s)r=0,a=f/d,a=ie(a,0,1);else{let g=As.dot(qc);if(d<=s)a=0,r=ie(-g/u,0,1);else{let M=As.dot(Rs),p=u*d-M*M;p!==0?r=ie((M*f-g*d)/p,0,1):r=0,a=(M*r+f)/d,a<0?(a=0,r=ie(-g/u,0,1)):a>1&&(a=1,r=ie((M-g)/u,0,1))}}return e.copy(o).addScaledVector(As,r),i.copy(l).addScaledVector(Rs,a),e.distanceToSquared(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Qr=class extends $i{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function zh(n,t,e,i){let s=ug(i);switch(e){case wh:return n*t;case Th:return n*t/s.components*s.byteLength;case rl:return n*t/s.components*s.byteLength;case zn:return n*t*2/s.components*s.byteLength;case al:return n*t*2/s.components*s.byteLength;case Eh:return n*t*3/s.components*s.byteLength;case Ki:return n*t*4/s.components*s.byteLength;case ol:return n*t*4/s.components*s.byteLength;case ia:case na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case sa:case ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case cl:case dl:return Math.max(n,16)*Math.max(t,8)/4;case ll:case hl:return Math.max(n,8)*Math.max(t,8)/2;case ul:case fl:case ml:case gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case pl:case aa:case _l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case vl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case wl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case El:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Al:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ll:case Dl:case Nl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ul:case Ol:return Math.ceil(n/4)*Math.ceil(t/4)*8;case oa:case Fl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ug(n){switch(n){case Mi:case vh:return{byteLength:1,components:1};case js:case bh:case Ji:return{byteLength:2,components:1};case nl:case sl:return{byteLength:2,components:4};case Yi:case il:case Zi:return{byteLength:4,components:1};case Mh:case Sh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function zf(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function pg(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],M=u[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,u[d]=M)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let M=u[f];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gg=`#ifdef USE_ALPHAHASH
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
#endif`,_g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bg=`#ifdef USE_AOMAP
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
#endif`,Mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sg=`#ifdef USE_BATCHING
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
#endif`,wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ag=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rg=`#ifdef USE_IRIDESCENCE
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
#endif`,Cg=`#ifdef USE_BUMPMAP
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
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kg=`#define PI 3.141592653589793
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
} // validated`,Bg=`vec3 transformedNormal = objectNormal;
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
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$g=`#ifdef USE_ENVMAP
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
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e_=`#ifdef USE_GRADIENTMAP
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
}`,i_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,a_=`#ifdef USE_ENVMAP
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
#endif`,o_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d_=`PhysicalMaterial material;
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
#endif`,u_=`uniform sampler2D dfgLUT;
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
}`,f_=`
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
#endif`,p_=`#if defined( RE_IndirectDiffuse )
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
#endif`,m_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,__=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w_=`#if defined( USE_POINTS_UV )
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
#endif`,E_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R_=`#if defined( USE_MORPHCOLORS )
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
#endif`,C_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`#ifdef USE_MORPHTARGETS
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
#endif`,I_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,F_=`#ifdef USE_NORMALMAP
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
#endif`,k_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,W_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Q_=`float getShadowMask() {
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
}`,t0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e0=`#ifdef USE_SKINNING
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
#endif`,i0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,s0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l0=`#ifdef USE_TRANSMISSION
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
#endif`,c0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,p0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m0=`uniform sampler2D t2D;
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_0=`uniform float backgroundBlurriness;
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`#include <common>
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
}`,b0=`#if DEPTH_PACKING == 3200
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
}`,M0=`#define DISTANCE
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
}`,S0=`#define DISTANCE
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`uniform float scale;
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
}`,A0=`uniform vec3 diffuse;
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
}`,R0=`#include <common>
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
}`,C0=`uniform vec3 diffuse;
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
}`,P0=`#define LAMBERT
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
}`,I0=`#define LAMBERT
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
}`,L0=`#define MATCAP
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
}`,D0=`#define MATCAP
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
}`,N0=`#define NORMAL
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
}`,U0=`#define NORMAL
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
}`,O0=`#define PHONG
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
}`,F0=`#define PHONG
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
}`,k0=`#define STANDARD
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
}`,B0=`#define STANDARD
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
}`,z0=`#define TOON
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
}`,V0=`#define TOON
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
}`,H0=`uniform float size;
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
}`,G0=`uniform vec3 diffuse;
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
}`,W0=`#include <common>
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
}`,X0=`uniform vec3 color;
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
}`,$0=`uniform float rotation;
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
}`,q0=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:mg,alphahash_pars_fragment:gg,alphamap_fragment:_g,alphamap_pars_fragment:yg,alphatest_fragment:xg,alphatest_pars_fragment:vg,aomap_fragment:bg,aomap_pars_fragment:Mg,batching_pars_vertex:Sg,batching_vertex:wg,begin_vertex:Eg,beginnormal_vertex:Tg,bsdfs:Ag,iridescence_fragment:Rg,bumpmap_pars_fragment:Cg,clipping_planes_fragment:Pg,clipping_planes_pars_fragment:Ig,clipping_planes_pars_vertex:Lg,clipping_planes_vertex:Dg,color_fragment:Ng,color_pars_fragment:Ug,color_pars_vertex:Og,color_vertex:Fg,common:kg,defaultnormal_vertex:Bg,displacementmap_pars_vertex:zg,displacementmap_vertex:Vg,emissivemap_fragment:Hg,emissivemap_pars_fragment:Gg,colorspace_fragment:Wg,colorspace_pars_fragment:Xg,envmap_fragment:$g,envmap_common_pars_fragment:qg,envmap_pars_fragment:jg,envmap_pars_vertex:Yg,envmap_physical_pars_fragment:a_,envmap_vertex:Zg,fog_vertex:Jg,fog_pars_vertex:Kg,fog_fragment:Qg,fog_pars_fragment:t_,gradientmap_pars_fragment:e_,lightmap_pars_fragment:i_,lights_lambert_fragment:n_,lights_lambert_pars_fragment:s_,lights_pars_begin:r_,lights_toon_fragment:o_,lights_toon_pars_fragment:l_,lights_phong_fragment:c_,lights_phong_pars_fragment:h_,lights_physical_fragment:d_,lights_physical_pars_fragment:u_,lights_fragment_begin:f_,lights_fragment_maps:p_,lights_fragment_end:m_,lightprobes_pars_fragment:g_,logdepthbuf_fragment:__,logdepthbuf_pars_fragment:y_,logdepthbuf_pars_vertex:x_,logdepthbuf_vertex:v_,map_fragment:b_,map_pars_fragment:M_,map_particle_fragment:S_,map_particle_pars_fragment:w_,metalnessmap_fragment:E_,metalnessmap_pars_fragment:T_,morphinstance_vertex:A_,morphcolor_vertex:R_,morphnormal_vertex:C_,morphtarget_pars_vertex:P_,morphtarget_vertex:I_,normal_fragment_begin:L_,normal_fragment_maps:D_,normal_pars_fragment:N_,normal_pars_vertex:U_,normal_vertex:O_,normalmap_pars_fragment:F_,clearcoat_normal_fragment_begin:k_,clearcoat_normal_fragment_maps:B_,clearcoat_pars_fragment:z_,iridescence_pars_fragment:V_,opaque_fragment:H_,packing:G_,premultiplied_alpha_fragment:W_,project_vertex:X_,dithering_fragment:$_,dithering_pars_fragment:q_,roughnessmap_fragment:j_,roughnessmap_pars_fragment:Y_,shadowmap_pars_fragment:Z_,shadowmap_pars_vertex:J_,shadowmap_vertex:K_,shadowmask_pars_fragment:Q_,skinbase_vertex:t0,skinning_pars_vertex:e0,skinning_vertex:i0,skinnormal_vertex:n0,specularmap_fragment:s0,specularmap_pars_fragment:r0,tonemapping_fragment:a0,tonemapping_pars_fragment:o0,transmission_fragment:l0,transmission_pars_fragment:c0,uv_pars_fragment:h0,uv_pars_vertex:d0,uv_vertex:u0,worldpos_vertex:f0,background_vert:p0,background_frag:m0,backgroundCube_vert:g0,backgroundCube_frag:_0,cube_vert:y0,cube_frag:x0,depth_vert:v0,depth_frag:b0,distance_vert:M0,distance_frag:S0,equirect_vert:w0,equirect_frag:E0,linedashed_vert:T0,linedashed_frag:A0,meshbasic_vert:R0,meshbasic_frag:C0,meshlambert_vert:P0,meshlambert_frag:I0,meshmatcap_vert:L0,meshmatcap_frag:D0,meshnormal_vert:N0,meshnormal_frag:U0,meshphong_vert:O0,meshphong_frag:F0,meshphysical_vert:k0,meshphysical_frag:B0,meshtoon_vert:z0,meshtoon_frag:V0,points_vert:H0,points_frag:G0,shadow_vert:W0,shadow_frag:X0,sprite_vert:$0,sprite_frag:q0},Dt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},yi={basic:{uniforms:li([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:li([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:li([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:li([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:li([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new fe(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:li([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:li([Dt.points,Dt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:li([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:li([Dt.common,Dt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:li([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:li([Dt.sprite,Dt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:li([Dt.common,Dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:li([Dt.lights,Dt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};yi.physical={uniforms:li([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var zl={r:0,b:0,g:0},j0=new we,Vf=new ne;Vf.set(-1,0,0,0,1,0,0,0,1);function Y0(n,t,e,i,s,r){let a=new fe(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let v=y.backgroundBlurriness>0;E=t.get(E,v)}return E}function g(y){let E=!1,v=f(y);v===null?p(a,o):v&&v.isColor&&(p(v,1),E=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(y,E){let v=f(E);v&&v.isCubeTexture?(c===void 0&&(c=new He(new Bs(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:as(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,P,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(j0.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vf),c.material.toneMapped=me.getTransfer(v.colorSpace)!==ve,(h!==v||u!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new He(new Vr(2,2),new Fi({name:"BackgroundMaterial",uniforms:as(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=me.getTransfer(v.colorSpace)!==ve,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,E){y.getRGB(zl,Fh(n)),e.buffers.color.setClear(zl.r,zl.g,zl.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:g,addToRenderList:M,dispose:m}}function Z0(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(B,Y,et,N,q){let nt=!1,K=u(B,N,et,Y);r!==K&&(r=K,c(r.object)),nt=f(B,N,et,q),nt&&g(B,N,et,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(nt||a)&&(a=!1,v(B,Y,et,N),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return n.createVertexArray()}function c(B){return n.bindVertexArray(B)}function h(B){return n.deleteVertexArray(B)}function u(B,Y,et,N){let q=N.wireframe===!0,nt=i[Y.id];nt===void 0&&(nt={},i[Y.id]=nt);let K=B.isInstancedMesh===!0?B.id:0,ft=nt[K];ft===void 0&&(ft={},nt[K]=ft);let W=ft[et.id];W===void 0&&(W={},ft[et.id]=W);let lt=W[q];return lt===void 0&&(lt=d(l()),W[q]=lt),lt}function d(B){let Y=[],et=[],N=[];for(let q=0;q<e;q++)Y[q]=0,et[q]=0,N[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:et,attributeDivisors:N,object:B,attributes:{},index:null}}function f(B,Y,et,N){let q=r.attributes,nt=Y.attributes,K=0,ft=et.getAttributes();for(let W in ft)if(ft[W].location>=0){let ut=q[W],Ft=nt[W];if(Ft===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(Ft=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(Ft=B.instanceColor)),ut===void 0||ut.attribute!==Ft||Ft&&ut.data!==Ft.data)return!0;K++}return r.attributesNum!==K||r.index!==N}function g(B,Y,et,N){let q={},nt=Y.attributes,K=0,ft=et.getAttributes();for(let W in ft)if(ft[W].location>=0){let ut=nt[W];ut===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(ut=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(ut=B.instanceColor));let Ft={};Ft.attribute=ut,ut&&ut.data&&(Ft.data=ut.data),q[W]=Ft,K++}r.attributes=q,r.attributesNum=K,r.index=N}function M(){let B=r.newAttributes;for(let Y=0,et=B.length;Y<et;Y++)B[Y]=0}function p(B){m(B,0)}function m(B,Y){let et=r.newAttributes,N=r.enabledAttributes,q=r.attributeDivisors;et[B]=1,N[B]===0&&(n.enableVertexAttribArray(B),N[B]=1),q[B]!==Y&&(n.vertexAttribDivisor(B,Y),q[B]=Y)}function y(){let B=r.newAttributes,Y=r.enabledAttributes;for(let et=0,N=Y.length;et<N;et++)Y[et]!==B[et]&&(n.disableVertexAttribArray(et),Y[et]=0)}function E(B,Y,et,N,q,nt,K){K===!0?n.vertexAttribIPointer(B,Y,et,q,nt):n.vertexAttribPointer(B,Y,et,N,q,nt)}function v(B,Y,et,N){M();let q=N.attributes,nt=et.getAttributes(),K=Y.defaultAttributeValues;for(let ft in nt){let W=nt[ft];if(W.location>=0){let lt=q[ft];if(lt===void 0&&(ft==="instanceMatrix"&&B.instanceMatrix&&(lt=B.instanceMatrix),ft==="instanceColor"&&B.instanceColor&&(lt=B.instanceColor)),lt!==void 0){let ut=lt.normalized,Ft=lt.itemSize,Jt=t.get(lt);if(Jt===void 0)continue;let it=Jt.buffer,Pt=Jt.type,Ht=Jt.bytesPerElement,jt=Pt===n.INT||Pt===n.UNSIGNED_INT||lt.gpuType===il;if(lt.isInterleavedBufferAttribute){let Ut=lt.data,te=Ut.isInterleavedBuffer===!0?Ut.stride:Ut.itemSize,Pe=lt.offset;if(Ut.isInstancedInterleavedBuffer||Ut.isInstancedBufferAttribute){for(let Zt=0;Zt<W.locationSize;Zt++)m(W.location+Zt,Ut.meshPerAttribute);B.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let Zt=0;Zt<W.locationSize;Zt++)p(W.location+Zt);n.bindBuffer(n.ARRAY_BUFFER,it);for(let Zt=0;Zt<W.locationSize;Zt++)E(W.location+Zt,Ft/W.locationSize,Pt,ut,te*Ht,(Pe+Ft/W.locationSize*Zt)*Ht,jt)}else{if(lt.isInstancedBufferAttribute){for(let Ut=0;Ut<W.locationSize;Ut++)m(W.location+Ut,lt.meshPerAttribute);B.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ut=0;Ut<W.locationSize;Ut++)p(W.location+Ut);n.bindBuffer(n.ARRAY_BUFFER,it);for(let Ut=0;Ut<W.locationSize;Ut++)E(W.location+Ut,Ft/W.locationSize,Pt,ut,Ft*Ht,Ft/W.locationSize*Ut*Ht,jt)}}else if(K!==void 0){let ut=K[ft];if(ut!==void 0)switch(ut.length){case 2:n.vertexAttrib2fv(W.location,ut);break;case 3:n.vertexAttrib3fv(W.location,ut);break;case 4:n.vertexAttrib4fv(W.location,ut);break;default:n.vertexAttrib1fv(W.location,ut)}}}}y()}function C(){V();for(let B in i){let Y=i[B];for(let et in Y){let N=Y[et];for(let q in N){let nt=N[q];for(let K in nt)h(nt[K].object),delete nt[K];delete N[q]}}delete i[B]}}function P(B){if(i[B.id]===void 0)return;let Y=i[B.id];for(let et in Y){let N=Y[et];for(let q in N){let nt=N[q];for(let K in nt)h(nt[K].object),delete nt[K];delete N[q]}}delete i[B.id]}function x(B){for(let Y in i){let et=i[Y];for(let N in et){let q=et[N];if(q[B.id]===void 0)continue;let nt=q[B.id];for(let K in nt)h(nt[K].object),delete nt[K];delete q[B.id]}}}function R(B){for(let Y in i){let et=i[Y],N=B.isInstancedMesh===!0?B.id:0,q=et[N];if(q!==void 0){for(let nt in q){let K=q[nt];for(let ft in K)h(K[ft].object),delete K[ft];delete q[nt]}delete et[N],Object.keys(et).length===0&&delete i[Y]}}}function V(){O(),a=!0,r!==s&&(r=s,c(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:V,resetDefaultState:O,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfObject:R,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:p,disableUnusedAttributes:y}}function J0(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function K0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Ki&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let R=x===Ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Mi&&x!==Zi&&!R&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Yt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Yt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),P=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:v,maxSamples:C,samples:P}}function Q0(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Ri,o=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,M=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let y=r?0:i,E=y*4,v=m.clippingState||null;l.value=v,v=h(g,d,E,f);for(let C=0;C!==E;++C)v[C]=e[C];m.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let M=u!==null?u.length:0,p=null;if(M!==0){if(p=l.value,g!==!0||p===null){let m=f+M*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,v=f;E!==M;++E,v+=4)a.copy(u[E]).applyMatrix4(y,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}var ua=class extends Pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ir(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bs(5,5,5),r=new Fi({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gi,blending:is});r.uniforms.tEquirect.value=e;let a=new He(s,r),o=e.minFilter;return e.minFilter===bn&&(e.minFilter=fi),new Gs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},xf=256,ty=3,ey=20,Hf=256,Gf=16,iy=3,ny=new U,sy=new fe,Hl=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Gs(1,10,null),this._boxMesh=new He(new Bs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=ny}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(sy));let p=new Gs(i,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(xf,Dh(t))}_fromTexture(t,e){t.mapping===ss||t.mapping===qs?this._setSize(t.image.length===0?xf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=vf(t,!1,!1),i=Math.log2(t)-ty;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=vf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ss||t.mapping===qs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=bf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=ry(),this._integrationMaterial=ay());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Gf);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-iy)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Hf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=oy());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function vf(n,t,e){return new ua(n,{minFilter:bn,generateMipmaps:t,type:Ji,colorSpace:br,depthBuffer:e})}function fa(n,t,e){return new Fi({name:n,uniforms:t,vertexShader:ce.cube_vert,fragmentShader:e,side:gi,blending:is,depthTest:!1,depthWrite:!1})}function ry(){return fa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hf}u

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
	`)}function ay(){return fa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gf}},`

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
	`)}function oy(){return fa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ey}
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
	`)}function bf(){return fa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Mf(){return fa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ly(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Qo||f===tl)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let M=new ua(g.height);return M.fromEquirectangularTexture(n,d),t.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===Qo||f===tl,M=f===ss||f===qs;if(g||M){let p=e.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Hl(n)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let y=d.image;return g&&y&&y.height>0||M&&y&&l(y)?(i===null&&(i=new Hl(n)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===Qo?d.mapping=ss:f===tl&&(d.mapping=qs),d}function l(d){let f=0,g=6;for(let M=0;M<g;M++)d[M]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function cy(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&mr("WebGLRenderer: "+i+" extension not supported."),s}}}function hy(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let M=r.get(g);M&&(t.remove(M),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),e.memory.geometries++),M}function h(g){let M=g.attributes;for(let p in M)t.update(M[p],n.ARRAY_BUFFER)}function u(g){let M=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let y=M!==null?M.array.length:p.array.length/3-1,E=p.count>=65535?Rr:Ar,v=new E(Math.ceil(y/3)*6,1),C=v.array;if(M!==null){let x=M.array;m=M.version;for(let R=0,V=0;R<y;R+=3){let O=x[R+0],B=x[R+1],Y=x[R+2];C[V++]=O,C[V++]=B,C[V++]=B,C[V++]=Y,C[V++]=Y,C[V++]=O}}else{m=p.version;for(let x=0,R=0;x<y;x+=3){let V=x+0,O=x+1,B=x+2;C[R++]=V,C[R++]=O,C[R++]=O,C[R++]=B,C[R++]=B,C[R++]=V}}v.version=m;let P=r.get(g);P&&t.remove(P),r.set(g,v)}function d(g){let M=r.get(g);if(M){let p=g.index;p!==null&&M.version<p.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let M=s[g].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function dy(n,t,e){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*a),e.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*a,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let M=0;for(let p=0;p<f;p++)M+=d[p];e.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function uy(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function fy(n,t,e){let i=new WeakMap,s=new be;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let V=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",V)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),M===!0&&(E=3);let v=o.attributes.position.count*E,C=1;v>t.maxTextureSize&&(C=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let P=new Float32Array(v*C*4*u),x=new Er(P,v,C,u);x.type=Zi,x.needsUpdate=!0;let R=E*4;for(let O=0;O<u;O++){let B=p[O],Y=m[O],et=y[O],N=v*C*4*O;for(let q=0;q<B.count;q++){let nt=q*R;f===!0&&(s.fromBufferAttribute(B,q),P[N+nt+0]=s.x,P[N+nt+1]=s.y,P[N+nt+2]=s.z,P[N+nt+3]=0),g===!0&&(s.fromBufferAttribute(Y,q),P[N+nt+4]=s.x,P[N+nt+5]=s.y,P[N+nt+6]=s.z,P[N+nt+7]=0),M===!0&&(s.fromBufferAttribute(et,q),P[N+nt+8]=s.x,P[N+nt+9]=s.y,P[N+nt+10]=s.z,P[N+nt+11]=et.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new Lt(v,C)},i.set(o,d),o.addEventListener("dispose",V)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function py(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var my={[uh]:"LINEAR_TONE_MAPPING",[fh]:"REINHARD_TONE_MAPPING",[ph]:"CINEON_TONE_MAPPING",[mh]:"ACES_FILMIC_TONE_MAPPING",[_h]:"AGX_TONE_MAPPING",[yh]:"NEUTRAL_TONE_MAPPING",[gh]:"CUSTOM_TONE_MAPPING"};function gy(n,t,e,i,s,r){let a=new Pi(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ve;h.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ae([0,2,0,0,2,0],2));let u=new Fo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new He(h,u),f=new es(-1,1,1,-1,0,1),g=null,M=null,p=!1,m,y=null,E=[],v=!1;this.setSize=function(C,P){a.setSize(C,P),o!==null&&o.setSize(C,P),l!==null&&l.setSize(C,P);for(let x=0;x<E.length;x++){let R=E[x];R.setSize&&R.setSize(C,P)}},this.setEffects=function(C){E=C,v=E.length>0&&E[0].isRenderPass===!0;let P=a.width,x=a.height;E.length>0&&o===null&&(o=new Pi(P,x,{type:Ji,depthBuffer:!1,stencilBuffer:!1}),l=new Pi(P,x,{type:Ji,depthBuffer:!1,stencilBuffer:!1}));let R=s===!0&&E.some(V=>V.needsDepthTexture===!0);R!==(a.depthTexture!==null)&&(R===!0&&c===null&&(c=new vn(P,x),r===!0&&(c.format=Mn,c.type=rs)),a.dispose(),a.depthTexture=R?c:null,a.resolveDepthBuffer=R,a.storeMultisampledDepthBuffer=R);for(let V=0;V<E.length;V++){let O=E[V];O.setSize&&O.setSize(P,x),R&&O.needsDepthTexture===!0&&O.setDepthTexture&&O.setDepthTexture(c)}},this.begin=function(C,P){if(p||C.toneMapping===rn&&E.length===0)return!1;if(y=P,P!==null){let x=P.width,R=P.height;(a.width!==x||a.height!==R)&&this.setSize(x,R)}return v===!1&&C.setRenderTarget(a),m=C.toneMapping,C.toneMapping=rn,!0},this.hasRenderPass=function(){return v},this.end=function(C,P){C.toneMapping=m,p=!0;let x=a,R=o;for(let V=0;V<E.length;V++){let O=E[V];O.enabled!==!1&&(O.render(C,R,x,P),O.needsSwap!==!1&&(x=R,R=R===o?l:o))}if(g!==C.outputColorSpace||M!==C.toneMapping){g=C.outputColorSpace,M=C.toneMapping,u.defines={},me.getTransfer(g)===ve&&(u.defines.SRGB_TRANSFER="");let V=my[M];V&&(u.defines[V]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,C.setRenderTarget(y),C.render(d,f),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Wf=new bi,Xf=new vn(1,1),$f=new Lr(1),qf=new Er,jf=new Eo,Yf=new Ir,Sf=[],wf=[],Ef=new Float32Array(16),Tf=new Float32Array(9),Af=new Float32Array(4);function Zs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Sf[s];if(r===void 0&&(r=new Float32Array(s),Sf[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ge(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function We(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Wl(n,t){let e=wf[t];e===void 0&&(e=new Int32Array(t),wf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function _y(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function yy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2fv(this.addr,t),We(e,t)}}function xy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;n.uniform3fv(this.addr,t),We(e,t)}}function vy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4fv(this.addr,t),We(e,t)}}function by(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,i))return;Af.set(i),n.uniformMatrix2fv(this.addr,!1,Af),We(e,i)}}function My(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,i))return;Tf.set(i),n.uniformMatrix3fv(this.addr,!1,Tf),We(e,i)}}function Sy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,i))return;Ef.set(i),n.uniformMatrix4fv(this.addr,!1,Ef),We(e,i)}}function wy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ey(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2iv(this.addr,t),We(e,t)}}function Ty(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;n.uniform3iv(this.addr,t),We(e,t)}}function Ay(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4iv(this.addr,t),We(e,t)}}function Ry(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Cy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2uiv(this.addr,t),We(e,t)}}function Py(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;n.uniform3uiv(this.addr,t),We(e,t)}}function Iy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4uiv(this.addr,t),We(e,t)}}function Xl(n){return n.version===0&&(n.compareFunction=Ch,n.needsUpdate=!0),n}function Ly(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Xl(Xf):r=Wf,e.setTexture2D(t||r,s)}function Dy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||jf,s)}function Ny(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Xl($f):r=Yf,e.setTextureCube(t||r,s)}function Uy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||qf,s)}function Oy(n){switch(n){case 5126:return _y;case 35664:return yy;case 35665:return xy;case 35666:return vy;case 35674:return by;case 35675:return My;case 35676:return Sy;case 5124:case 35670:return wy;case 35667:case 35671:return Ey;case 35668:case 35672:return Ty;case 35669:case 35673:return Ay;case 5125:return Ry;case 36294:return Cy;case 36295:return Py;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Uy}}function Fy(n,t){n.uniform1fv(this.addr,t)}function ky(n,t){let e=Zs(t,this.size,2);n.uniform2fv(this.addr,e)}function By(n,t){let e=Zs(t,this.size,3);n.uniform3fv(this.addr,e)}function zy(n,t){let e=Zs(t,this.size,4);n.uniform4fv(this.addr,e)}function Vy(n,t){let e=Zs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Hy(n,t){let e=Zs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Gy(n,t){let e=Zs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Wy(n,t){n.uniform1iv(this.addr,t)}function Xy(n,t){n.uniform2iv(this.addr,t)}function $y(n,t){n.uniform3iv(this.addr,t)}function qy(n,t){n.uniform4iv(this.addr,t)}function jy(n,t){n.uniform1uiv(this.addr,t)}function Yy(n,t){n.uniform2uiv(this.addr,t)}function Zy(n,t){n.uniform3uiv(this.addr,t)}function Jy(n,t){n.uniform4uiv(this.addr,t)}function Ky(n,t,e){let i=this.cache,s=t.length,r=Wl(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),We(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Xl(Xf):a=Wf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Qy(n,t,e){let i=this.cache,s=t.length,r=Wl(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||jf,r[a])}function tx(n,t,e){let i=this.cache,s=t.length,r=Wl(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),We(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Xl($f):a=Yf;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function ex(n,t,e){let i=this.cache,s=t.length,r=Wl(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||qf,r[a])}function ix(n){switch(n){case 5126:return Fy;case 35664:return ky;case 35665:return By;case 35666:return zy;case 35674:return Vy;case 35675:return Hy;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return $y;case 35669:case 35673:return qy;case 5125:return jy;case 36294:return Yy;case 36295:return Zy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return ex}}var jh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Oy(e.type)}},Yh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ix(e.type)}},Zh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},$h=/(\w+)(\])?(\[|\.)?/g;function Rf(n,t){n.seq.push(t),n.map[t.id]=t}function nx(n,t,e){let i=n.name,s=i.length;for($h.lastIndex=0;;){let r=$h.exec(i),a=$h.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rf(e,c===void 0?new jh(o,n,t):new Yh(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Zh(o),Rf(e,u)),e=u}}}var Ys=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);nx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Cf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var sx=37297,rx=0;function ax(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Pf=new ne;function ox(n){me._getMatrix(Pf,me.workingColorSpace,n);let t=`mat3( ${Pf.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(n)){case Mr:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function If(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ax(n.getShaderSource(t),o)}else return r}function lx(n,t){let e=ox(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var cx={[uh]:"Linear",[fh]:"Reinhard",[ph]:"Cineon",[mh]:"ACESFilmic",[_h]:"AgX",[yh]:"Neutral",[gh]:"Custom"};function hx(n,t){let e=cx[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Vl=new U;function dx(){me.getLuminanceCoefficients(Vl);let n=Vl.x.toFixed(4),t=Vl.y.toFixed(4),e=Vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ux(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function fx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function px(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function da(n){return n!==""}function Lf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Df(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(n){return n.replace(mx,gx)}function gx(n,t){let e=ce[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Jh(e)}var _x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nf(n){return n.replace(_x,yx)}function yx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var xx={[ta]:"SHADOWMAP_TYPE_PCF",[Xs]:"SHADOWMAP_TYPE_VSM"};function vx(n){return xx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var bx={[qs]:"ENVMAP_MODE_REFRACTION"};function Mx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":bx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Sx={[dh]:"ENVMAP_BLENDING_MULTIPLY",[Zu]:"ENVMAP_BLENDING_MIX",[Ju]:"ENVMAP_BLENDING_ADD"};function wx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Sx[n.combine]||"ENVMAP_BLENDING_NONE"}function Ex(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=vx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Mx(e),u=wx(e),d=ux(e),f=fx(r),g=s.createProgram(),M,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(da).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(da).join(`
`),p.length>0&&(p+=`
`)):(M=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),p=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==rn?"#define TONE_MAPPING":"",e.toneMapping!==rn?ce.tonemapping_pars_fragment:"",e.toneMapping!==rn?hx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,lx("linearToOutputTexel",e.outputColorSpace),dx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(da).join(`
`)),a=Jh(a),a=Lf(a,e),a=Df(a,e),o=Jh(o),o=Lf(o,e),o=Df(o,e),a=Nf(a),o=Nf(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,M=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",e.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=m+M+a,E=m+p+o,v=Cf(s,s.VERTEX_SHADER,y),C=Cf(s,s.FRAGMENT_SHADER,E);s.attachShader(g,v),s.attachShader(g,C),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function P(O){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(g)||"",Y=s.getShaderInfoLog(v)||"",et=s.getShaderInfoLog(C)||"",N=B.trim(),q=Y.trim(),nt=et.trim(),K=!0,ft=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,v,C);else{let W=If(s,v,"vertex"),lt=If(s,C,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+N+`
`+W+`
`+lt)}else N!==""?Yt("WebGLProgram: Program Info Log:",N):(q===""||nt==="")&&(ft=!1);ft&&(O.diagnostics={runnable:K,programLog:N,vertexShader:{log:q,prefix:M},fragmentShader:{log:nt,prefix:p}})}s.deleteShader(v),s.deleteShader(C),x=new Ys(s,g),R=px(s,g)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(g,sx)),V},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=C,this}var Tx=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Qh(t),e.set(t,i)),i}},Qh=class{constructor(t){this.id=Tx++,this.code=t,this.usedTimes=0}};function Ax(n){return n===zn||n===aa||n===oa}function Rx(n,t,e,i,s,r){let a=new Os,o=new Kh,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,R,V,O,B,Y){let et=O.fog,N=B.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?O.environment:null,nt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=t.get(x.envMap||q,nt),ft=d[x.type],W=i.precision;x.precision!==null&&(W=i.getMaxPrecision(x.precision),W!==x.precision&&Yt("WebGLProgram.getParameters:",x.precision,"not supported, using",W,"instead."));let lt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ut=lt!==void 0?lt.length:0,Ft=0;N.morphAttributes.position!==void 0&&(Ft=1),N.morphAttributes.normal!==void 0&&(Ft=2),N.morphAttributes.color!==void 0&&(Ft=3);let Jt,it,Pt,Ht;if(ft){let Nt=yi[ft];Jt=Nt.vertexShader,it=Nt.fragmentShader}else{Jt=x.vertexShader,it=x.fragmentShader;let Nt=o.getVertexShaderStage(x),ye=o.getFragmentShaderStage(x);o.update(x,Nt,ye),Pt=Nt.id,Ht=ye.id}let jt=n.getRenderTarget(),Ut=n.state.buffers.depth.getReversed(),te=B.isInstancedMesh===!0,Pe=B.isBatchedMesh===!0,Zt=!!x.map,ge=!!x.matcap,Me=!!K,oe=Me&&K.isPMREMTexture===!0,Le=!!x.aoMap,De=!!x.lightMap,ii=!!x.bumpMap&&x.wireframe===!1,Ee=!!x.normalMap,Ni=!!x.displacementMap,Fe=!!x.emissiveMap,ni=!!x.metalnessMap,si=!!x.roughnessMap,xi=x.anisotropy>0,z=x.clearcoat>0,vi=x.diffuseRoughness>0,Se=x.dispersion>0,Te=x.retroreflectivity>0,It=x.iridescence>0,Ne=x.sheen>0,qt=x.transmission>0,Kt=xi&&!!x.anisotropyMap,I=z&&!!x.clearcoatMap,S=z&&!!x.clearcoatNormalMap,X=z&&!!x.clearcoatRoughnessMap,dt=vi&&!!x.diffuseRoughnessMap,ot=It&&!!x.iridescenceMap,Mt=It&&!!x.iridescenceThicknessMap,At=Ne&&!!x.sheenColorMap,tt=Ne&&!!x.sheenRoughnessMap,st=!!x.specularMap,wt=!!x.specularColorMap,D=!!x.specularIntensityMap,rt=qt&&!!x.transmissionMap,Q=qt&&!!x.thicknessMap,Et=!!x.gradientMap,mt=!!x.alphaMap,St=x.alphaTest>0,Xt=!!x.alphaHash,se=!!x.extensions,gt=rn;x.toneMapped&&(jt===null||jt.isXRRenderTarget===!0)&&(gt=n.toneMapping);let $t=oe?K.isCompressedCubeTexture?K.image[0].mipmaps:K.mipmaps:null,re={shaderID:ft,shaderType:x.type,shaderName:x.name,vertexShader:Jt,fragmentShader:it,defines:x.defines,customVertexShaderID:Pt,customFragmentShaderID:Ht,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:W,batching:Pe,batchingColor:Pe&&B._colorsTexture!==null,instancing:te,instancingColor:te&&B.instanceColor!==null,instancingMorph:te&&B.morphTexture!==null,outputColorSpace:jt===null?n.outputColorSpace:jt.isXRRenderTarget===!0?jt.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Zt,matcap:ge,envMap:Me,envMapMode:Me&&K.mapping,envMapPMREM:oe,envMapMaxLod:oe?$t.length-1:null,envMapSize:oe?$t[0].width:null,aoMap:Le,lightMap:De,bumpMap:ii,normalMap:Ee,displacementMap:Ni,emissiveMap:Fe,normalMapObjectSpace:Ee&&x.normalMapType===tf,normalMapTangentSpace:Ee&&x.normalMapType===kl,packedNormalMap:Ee&&x.normalMapType===kl&&Ax(x.normalMap.format),metalnessMap:ni,roughnessMap:si,anisotropy:xi,anisotropyMap:Kt,clearcoat:z,clearcoatMap:I,clearcoatNormalMap:S,clearcoatRoughnessMap:X,diffuseRoughness:vi,diffuseRoughnessMap:dt,dispersion:Se,retroreflection:Te,iridescence:It,iridescenceMap:ot,iridescenceThicknessMap:Mt,sheen:Ne,sheenColorMap:At,sheenRoughnessMap:tt,specularMap:st,specularColorMap:wt,specularIntensityMap:D,transmission:qt,transmissionMap:rt,thicknessMap:Q,gradientMap:Et,opaque:x.transparent===!1&&x.blending===$s&&x.alphaToCoverage===!1,alphaMap:mt,alphaTest:St,alphaHash:Xt,combine:x.combine,mapUv:Zt&&f(x.map.channel),aoMapUv:Le&&f(x.aoMap.channel),lightMapUv:De&&f(x.lightMap.channel),bumpMapUv:ii&&f(x.bumpMap.channel),normalMapUv:Ee&&f(x.normalMap.channel),displacementMapUv:Ni&&f(x.displacementMap.channel),emissiveMapUv:Fe&&f(x.emissiveMap.channel),metalnessMapUv:ni&&f(x.metalnessMap.channel),roughnessMapUv:si&&f(x.roughnessMap.channel),anisotropyMapUv:Kt&&f(x.anisotropyMap.channel),clearcoatMapUv:I&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:dt&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:At&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:tt&&f(x.sheenRoughnessMap.channel),specularMapUv:st&&f(x.specularMap.channel),specularColorMapUv:wt&&f(x.specularColorMap.channel),specularIntensityMapUv:D&&f(x.specularIntensityMap.channel),transmissionMapUv:rt&&f(x.transmissionMap.channel),thicknessMapUv:Q&&f(x.thicknessMap.channel),alphaMapUv:mt&&f(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ee||xi),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!N.attributes.uv&&(Zt||mt),fog:!!et,useFog:x.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&Ee===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ut,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Ft,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:Y.filter(Nt=>Nt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,decodeVideoTexture:Zt&&x.map.isVideoTexture===!0&&me.getTransfer(x.map.colorSpace)===ve,decodeVideoTextureEmissive:Fe&&x.emissiveMap.isVideoTexture===!0&&me.getTransfer(x.emissiveMap.colorSpace)===ve,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_i,flipSided:x.side===gi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:se&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&x.extensions.multiDraw===!0||Pe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function M(x){let R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(let V in x.defines)R.push(V),R.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(p(R,x),m(R,x),R.push(n.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function p(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapPMREM),x.push(R.envMapMaxLod),x.push(R.envMapSize),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.diffuseRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.numSunLights),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numSunLightShadows),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.numLightProbeGrids),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function m(x,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.diffuseRoughness&&a.enable(25),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){let R=d[x.type],V;if(R){let O=yi[R];V=ca.clone(O.uniforms)}else V=x.uniforms;return V}function E(x,R){let V=h.get(R);return V!==void 0?++V.usedTimes:(V=new Ex(n,R,x,s),c.push(V),h.set(R,V)),V}function v(x){if(--x.usedTimes===0){let R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function C(x){o.remove(x)}function P(){o.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:y,acquireProgram:E,releaseProgram:v,releaseShaderCache:C,programs:c,dispose:P}}function Cx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Px(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Of(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ff(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,M,p,m){let y=n[t];return y===void 0?(y={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:p,group:m},n[t]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=g,y.materialVariant=a(d),y.groupOrder=M,y.renderOrder=d.renderOrder,y.z=p,y.group=m),t++,y}function l(d,f,g,M,p,m,y){y.reversedDepth===!0&&(p=-p);let E=o(d,f,g,M,p,m);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(d,f,g,M,p,m){let y=o(d,f,g,M,p,m);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function h(d,f){e.length>1&&e.sort(d||Px),i.length>1&&i.sort(f||Of),s.length>1&&s.sort(f||Of)}function u(){for(let d=t,f=n.length;d<f;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Ix(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Ff,n.set(i,[a])):s>=r.length?(a=new Ff,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Lx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new fe};break;case"SpotLight":e={position:new U,direction:new U,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function Dx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Nx=0;function Ux(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ox(n){let t=new Lx,e=Dx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,r=new we,a=new we;function o(c){let h=0,u=0,d=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let f=0,g=0,M=0,p=0,m=0,y=0,E=0,v=0,C=0,P=0,x=0,R=0,V=0,O=0;c.sort(Ux);for(let Y=0,et=c.length;Y<et;Y++){let N=c[Y],q=N.color,nt=N.intensity,K=N.distance,ft=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===zn?ft=N.shadow.map.texture:ft=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=q.r*nt,u+=q.g*nt,d+=q.b*nt;else if(N.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(N.sh.coefficients[W],nt);O++}else if(N.isSunLight){let W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let lt=N.shadow,ut=e.get(N);ut.shadowIntensity=lt.intensity,ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize.copy(lt.mapSize).multiply(lt.getFrameExtents()),i.sunShadow[g]=ut,i.sunShadowMap[g]=ft;let Ft=lt.getViewportCount();for(let Jt=0;Jt<Ft;Jt++)i.sunShadowMatrix[M+Jt]=lt.getMatrix(Jt),i.sunShadowCascade[M+Jt]=lt._cascadeData[Jt];M+=Ft,g++}i.sun[f]=W,f++}else if(N.isDirectionalLight){let W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let lt=N.shadow,ut=e.get(N);ut.shadowIntensity=lt.intensity,ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize=lt.mapSize,i.directionalShadow[p]=ut,i.directionalShadowMap[p]=ft,i.directionalShadowMatrix[p]=N.shadow.matrix,C++}i.directional[p]=W,p++}else if(N.isSpotLight){let W=t.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(q).multiplyScalar(nt),W.distance=K,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,i.spot[y]=W;let lt=N.shadow;if(N.map&&(i.spotLightMap[R]=N.map,R++,lt.updateMatrices(N),N.castShadow&&V++),i.spotLightMatrix[y]=lt.matrix,N.castShadow){let ut=e.get(N);ut.shadowIntensity=lt.intensity,ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize=lt.mapSize,i.spotShadow[y]=ut,i.spotShadowMap[y]=ft,x++}y++}else if(N.isRectAreaLight){let W=t.get(N);W.color.copy(q).multiplyScalar(nt),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),i.rectArea[E]=W,E++}else if(N.isPointLight){let W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){let lt=N.shadow,ut=e.get(N);ut.shadowIntensity=lt.intensity,ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize=lt.mapSize,ut.shadowCameraNear=lt.camera.near,ut.shadowCameraFar=lt.camera.far,i.pointShadow[m]=ut,i.pointShadowMap[m]=ft,i.pointShadowMatrix[m]=N.shadow.matrix,P++}i.point[m]=W,m++}else if(N.isHemisphereLight){let W=t.get(N);W.skyColor.copy(N.color).multiplyScalar(nt),W.groundColor.copy(N.groundColor).multiplyScalar(nt),i.hemi[v]=W,v++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let B=i.hash;(B.sunLength!==f||B.directionalLength!==p||B.pointLength!==m||B.spotLength!==y||B.rectAreaLength!==E||B.hemiLength!==v||B.numSunShadows!==g||B.numDirectionalShadows!==C||B.numPointShadows!==P||B.numSpotShadows!==x||B.numSpotMaps!==R||B.numLightProbes!==O)&&(i.sun.length=f,i.directional.length=p,i.spot.length=y,i.rectArea.length=E,i.point.length=m,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.directionalShadowMatrix.length=C,i.pointShadow.length=P,i.pointShadowMap.length=P,i.pointShadowMatrix.length=P,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+R-V,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=V,i.numLightProbes=O,B.sunLength=f,B.directionalLength=p,B.pointLength=m,B.spotLength=y,B.rectAreaLength=E,B.hemiLength=v,B.numSunShadows=g,B.numDirectionalShadows=C,B.numPointShadows=P,B.numSpotShadows=x,B.numSpotMaps=R,B.numLightProbes=O,i.version=Nx++)}function l(c,h){let u=0,d=0,f=0,g=0,M=0,p=0,m=h.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){let v=c[y];if(v.isSunLight){let C=i.sun[u];C.direction.setFromMatrixPosition(v.matrixWorld),C.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let C=i.directional[d];C.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),d++}else if(v.isSpotLight){let C=i.spot[g];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let C=i.rectArea[M];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),C.halfWidth.set(v.width*.5,0,0),C.halfHeight.set(0,v.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),M++}else if(v.isPointLight){let C=i.point[f];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let C=i.hemi[p];C.direction.setFromMatrixPosition(v.matrixWorld),C.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function kf(n){let t=new Ox(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){i.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Fx(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new kf(n),t.set(s,[o])):r>=a.length?(o=new kf(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
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
}`,zx=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Vx=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Bf=new we,ha=new U,qh=new U;function Hx(n,t,e){let i=new Dn,s=new Lt,r=new Lt,a=new be,o=new ko,l=new Bo,c={},h=e.maxTextureSize,u={[Bn]:gi,[gi]:Bn,[_i]:_i},d=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:kx,fragmentShader:Bx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ve;g.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new He(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta;let m=this.type;this.render=function(P,x,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;this.type===Iu&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ta);let V=n.getRenderTarget(),O=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(is),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let et=m!==this.type;et&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(q=>q.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,q=P.length;N<q;N++){let nt=P[N],K=nt.shadow;if(K===void 0){Yt("WebGLShadowMap:",nt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let ft=K.getFrameExtents();s.multiply(ft),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,K.mapSize.y=r.y));let W=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=W,K.map===null||et===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Xs){if(nt.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Pi(s.x,s.y,{format:zn,type:Ji,minFilter:fi,magFilter:fi,generateMipmaps:!1}),K.map.texture.name=nt.name+".shadowMap",K.map.depthTexture=new vn(s.x,s.y,Zi),K.map.depthTexture.name=nt.name+".shadowMapDepth",K.map.depthTexture.format=_n,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ye,K.map.depthTexture.magFilter=Ye}else nt.isPointLight?(K.map=new ua(s.x),K.map.depthTexture=new Lr(s.x,Yi)):(K.map=new Pi(s.x,s.y),K.map.depthTexture=new vn(s.x,s.y,Yi)),K.map.depthTexture.name=nt.name+".shadowMap",K.map.depthTexture.format=_n,this.type===ta?(K.map.depthTexture.compareFunction=W?Rh:Ah,K.map.depthTexture.minFilter=fi,K.map.depthTexture.magFilter=fi):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ye,K.map.depthTexture.magFilter=Ye);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let lt=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();nt.isPointLight!==!0&&K.updateMatrices(nt,R);let ut=(K.camera.layers.mask&4294967294)!==0?K.camera.layers:R.layers;for(let Ft=0;Ft<lt;Ft++){let Jt=K.getCamera(Ft);if(nt.isPointLight){let it=K.camera,Pt=K.matrix,Ht=nt.distance||it.far;Ht!==it.far&&(it.far=Ht,it.updateProjectionMatrix()),ha.setFromMatrixPosition(nt.matrixWorld),it.position.copy(ha),qh.copy(it.position),qh.add(zx[Ft]),it.up.copy(Vx[Ft]),it.lookAt(qh),it.updateMatrixWorld(),Pt.makeTranslation(-ha.x,-ha.y,-ha.z),Bf.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Bf,it.coordinateSystem,it.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,Ft),n.clear();else{Ft===0&&(n.setRenderTarget(K.map),n.clear());let it=K.getViewport(Ft);a.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),Y.viewport(a)}i=K.getFrustum(Ft),v(x,R,Jt,nt,ut,this.type)}K.isPointLightShadow!==!0&&this.type===Xs&&y(K,R),K.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(V,O,B)};function y(P,x){let R=t.update(M);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null?P.mapPass=new Pi(s.x,s.y,{format:zn,type:Ji}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),d.uniforms.shadow_pass.value=P.map.depthTexture,d.uniforms.resolution.value.set(P.map.width,P.map.height),d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(x,null,R,d,M,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value.set(P.map.width,P.map.height),f.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(x,null,R,f,M,null)}function E(P,x,R,V){let O=null,B=R.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)O=B;else if(O=R.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let Y=O.uuid,et=x.uuid,N=c[Y];N===void 0&&(N={},c[Y]=N);let q=N[et];q===void 0&&(q=O.clone(),N[et]=q,x.addEventListener("dispose",C)),O=q}if(O.visible=x.visible,O.wireframe=x.wireframe,V===Xs?O.side=x.shadowSide!==null?x.shadowSide:x.side:O.side=x.shadowSide!==null?x.shadowSide:u[x.side],O.alphaMap=x.alphaMap,O.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,O.map=x.map,O.clipShadows=x.clipShadows,O.clippingPlanes=x.clippingPlanes,O.clipIntersection=x.clipIntersection,O.displacementMap=x.displacementMap,O.displacementScale=x.displacementScale,O.displacementBias=x.displacementBias,O.wireframeLinewidth=x.wireframeLinewidth,O.linewidth=x.linewidth,R.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let Y=n.properties.get(O);Y.light=R}return O}function v(P,x,R,V,O,B){if(P.visible===!1)return;if(P.layers.test(O)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&B===Xs)&&(!P.frustumCulled||P.intersectsFrustum(i))){P.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,P.matrixWorld);let N=t.update(P),q=P.material;if(Array.isArray(q)){let nt=N.groups;for(let K=0,ft=nt.length;K<ft;K++){let W=nt[K],lt=q[W.materialIndex];if(lt&&lt.visible){let ut=E(P,lt,V,B);P.onBeforeShadow(n,P,x,R,N,ut,W),n.renderBufferDirect(R,null,N,ut,P,W),P.onAfterShadow(n,P,x,R,N,ut,W)}}}else if(q.visible){let nt=E(P,q,V,B);P.onBeforeShadow(n,P,x,R,N,nt,null),n.renderBufferDirect(R,null,N,nt,P,null),P.onAfterShadow(n,P,x,R,N,nt,null)}}let et=P.children;for(let N=0,q=et.length;N<q;N++)v(et[N],x,R,V,O,B)}function C(P){P.target.removeEventListener("dispose",C);for(let R in c){let V=c[R],O=P.target.uuid;O in V&&(V[O].dispose(),delete V[O])}}}function Gx(n,t){function e(){let D=!1,rt=new be,Q=null,Et=new be(0,0,0,0);return{setMask:function(mt){Q!==mt&&!D&&(n.colorMask(mt,mt,mt,mt),Q=mt)},setLocked:function(mt){D=mt},setClear:function(mt,St,Xt,se,gt){gt===!0&&(mt*=se,St*=se,Xt*=se),rt.set(mt,St,Xt,se),Et.equals(rt)===!1&&(n.clearColor(mt,St,Xt,se),Et.copy(rt))},reset:function(){D=!1,Q=null,Et.set(-1,0,0,0)}}}function i(){let D=!1,rt=!1,Q=null,Et=null,mt=null;return{setReversed:function(St){if(rt!==St){let Xt=t.get("EXT_clip_control");St?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),rt=St;let se=mt;mt=null,this.setClear(se)}},getReversed:function(){return rt},setTest:function(St){St?Ut(n.DEPTH_TEST):te(n.DEPTH_TEST)},setMask:function(St){Q!==St&&!D&&(n.depthMask(St),Q=St)},setFunc:function(St){if(rt&&(St=df[St]),Et!==St){switch(St){case fo:n.depthFunc(n.NEVER);break;case po:n.depthFunc(n.ALWAYS);break;case mo:n.depthFunc(n.LESS);break;case Is:n.depthFunc(n.LEQUAL);break;case go:n.depthFunc(n.EQUAL);break;case _o:n.depthFunc(n.GEQUAL);break;case yo:n.depthFunc(n.GREATER);break;case xo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Et=St}},setLocked:function(St){D=St},setClear:function(St){mt!==St&&(mt=St,rt&&(St=1-St),n.clearDepth(St))},reset:function(){D=!1,Q=null,Et=null,mt=null,rt=!1}}}function s(){let D=!1,rt=null,Q=null,Et=null,mt=null,St=null,Xt=null,se=null,gt=null;return{setTest:function($t){D||($t?Ut(n.STENCIL_TEST):te(n.STENCIL_TEST))},setMask:function($t){rt!==$t&&!D&&(n.stencilMask($t),rt=$t)},setFunc:function($t,re,Nt){(Q!==$t||Et!==re||mt!==Nt)&&(n.stencilFunc($t,re,Nt),Q=$t,Et=re,mt=Nt)},setOp:function($t,re,Nt){(St!==$t||Xt!==re||se!==Nt)&&(n.stencilOp($t,re,Nt),St=$t,Xt=re,se=Nt)},setLocked:function($t){D=$t},setClear:function($t){gt!==$t&&(n.clearStencil($t),gt=$t)},reset:function(){D=!1,rt=null,Q=null,Et=null,mt=null,St=null,Xt=null,se=null,gt=null}}}let r=new e,a=new i,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],M=null,p=!1,m=null,y=null,E=null,v=null,C=null,P=null,x=null,R=new fe(0,0,0),V=0,O=!1,B=null,Y=null,et=null,N=null,q=null,nt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,ft=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(W)[1]),K=ft>=1):W.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),K=ft>=2);let lt=null,ut={},Ft=n.getParameter(n.SCISSOR_BOX),Jt=n.getParameter(n.VIEWPORT),it=new be().fromArray(Ft),Pt=new be().fromArray(Jt);function Ht(D,rt,Q,Et){let mt=new Uint8Array(4),St=n.createTexture();n.bindTexture(D,St),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xt=0;Xt<Q;Xt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(rt,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(rt+Xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return St}let jt={};jt[n.TEXTURE_2D]=Ht(n.TEXTURE_2D,n.TEXTURE_2D,1),jt[n.TEXTURE_CUBE_MAP]=Ht(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),jt[n.TEXTURE_2D_ARRAY]=Ht(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),jt[n.TEXTURE_3D]=Ht(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Ut(n.DEPTH_TEST),a.setFunc(Is),ii(!1),Ee(rh),Ut(n.CULL_FACE),Le(is);function Ut(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function te(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Pe(D,rt){return d[D]!==rt?(n.bindFramebuffer(D,rt),d[D]=rt,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=rt),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=rt),!0):!1}function Zt(D,rt){let Q=g,Et=!1;if(D){Q=f.get(rt),Q===void 0&&(Q=[],f.set(rt,Q));let mt=D.textures;if(Q.length!==mt.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let St=0,Xt=mt.length;St<Xt;St++)Q[St]=n.COLOR_ATTACHMENT0+St;Q.length=mt.length,Et=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,Et=!0);Et&&n.drawBuffers(Q)}function ge(D){return M!==D?(n.useProgram(D),M=D,!0):!1}let Me={[ns]:n.FUNC_ADD,[Du]:n.FUNC_SUBTRACT,[Nu]:n.FUNC_REVERSE_SUBTRACT};Me[Uu]=n.MIN,Me[Ou]=n.MAX;let oe={[Fu]:n.ZERO,[ku]:n.ONE,[Bu]:n.SRC_COLOR,[ch]:n.SRC_ALPHA,[Xu]:n.SRC_ALPHA_SATURATE,[Gu]:n.DST_COLOR,[Vu]:n.DST_ALPHA,[zu]:n.ONE_MINUS_SRC_COLOR,[hh]:n.ONE_MINUS_SRC_ALPHA,[Wu]:n.ONE_MINUS_DST_COLOR,[Hu]:n.ONE_MINUS_DST_ALPHA,[$u]:n.CONSTANT_COLOR,[qu]:n.ONE_MINUS_CONSTANT_COLOR,[ju]:n.CONSTANT_ALPHA,[Yu]:n.ONE_MINUS_CONSTANT_ALPHA};function Le(D,rt,Q,Et,mt,St,Xt,se,gt,$t){if(D===is){p===!0&&(te(n.BLEND),p=!1);return}if(p===!1&&(Ut(n.BLEND),p=!0),D!==Lu){if(D!==m||$t!==O){if((y!==ns||C!==ns)&&(n.blendEquation(n.FUNC_ADD),y=ns,C=ns),$t)switch(D){case $s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ah:n.blendFunc(n.ONE,n.ONE);break;case oh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qt("WebGLState: Invalid blending: ",D);break}else switch(D){case $s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ah:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case oh:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lh:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",D);break}E=null,v=null,P=null,x=null,R.set(0,0,0),V=0,m=D,O=$t}return}mt=mt||rt,St=St||Q,Xt=Xt||Et,(rt!==y||mt!==C)&&(n.blendEquationSeparate(Me[rt],Me[mt]),y=rt,C=mt),(Q!==E||Et!==v||St!==P||Xt!==x)&&(n.blendFuncSeparate(oe[Q],oe[Et],oe[St],oe[Xt]),E=Q,v=Et,P=St,x=Xt),(se.equals(R)===!1||gt!==V)&&(n.blendColor(se.r,se.g,se.b,gt),R.copy(se),V=gt),m=D,O=!1}function De(D,rt){D.side===_i?te(n.CULL_FACE):Ut(n.CULL_FACE);let Q=D.side===gi;rt&&(Q=!Q),ii(Q),D.blending===$s&&D.transparent===!1?Le(is):Le(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let Et=D.stencilWrite;o.setTest(Et),Et&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Fe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ut(n.SAMPLE_ALPHA_TO_COVERAGE):te(n.SAMPLE_ALPHA_TO_COVERAGE)}function ii(D){B!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),B=D)}function Ee(D){D!==Cu?(Ut(n.CULL_FACE),D!==Y&&(D===rh?n.cullFace(n.BACK):D===Pu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):te(n.CULL_FACE),Y=D}function Ni(D){D!==et&&(K&&n.lineWidth(D),et=D)}function Fe(D,rt,Q){D?(Ut(n.POLYGON_OFFSET_FILL),(N!==rt||q!==Q)&&(N=rt,q=Q,a.getReversed()&&(rt=-rt,Q=-Q),n.polygonOffset(rt,Q))):te(n.POLYGON_OFFSET_FILL)}function ni(D){D?Ut(n.SCISSOR_TEST):te(n.SCISSOR_TEST)}function si(D){D===void 0&&(D=n.TEXTURE0+nt-1),lt!==D&&(n.activeTexture(D),lt=D)}function xi(D,rt,Q){Q===void 0&&(lt===null?Q=n.TEXTURE0+nt-1:Q=lt);let Et=ut[Q];Et===void 0&&(Et={type:void 0,texture:void 0},ut[Q]=Et),(Et.type!==D||Et.texture!==rt)&&(lt!==Q&&(n.activeTexture(Q),lt=Q),n.bindTexture(D,rt||jt[D]),Et.type=D,Et.texture=rt)}function z(){let D=ut[lt];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function vi(){try{n.compressedTexImage2D(...arguments)}catch(D){Qt("WebGLState:",D)}}function Se(){try{n.compressedTexImage3D(...arguments)}catch(D){Qt("WebGLState:",D)}}function Te(){try{n.texSubImage2D(...arguments)}catch(D){Qt("WebGLState:",D)}}function It(){try{n.texSubImage3D(...arguments)}catch(D){Qt("WebGLState:",D)}}function Ne(){try{n.compressedTexSubImage2D(...arguments)}catch(D){Qt("WebGLState:",D)}}function qt(){try{n.compressedTexSubImage3D(...arguments)}catch(D){Qt("WebGLState:",D)}}function Kt(){try{n.texStorage2D(...arguments)}catch(D){Qt("WebGLState:",D)}}function I(){try{n.texStorage3D(...arguments)}catch(D){Qt("WebGLState:",D)}}function S(){try{n.texImage2D(...arguments)}catch(D){Qt("WebGLState:",D)}}function X(){try{n.texImage3D(...arguments)}catch(D){Qt("WebGLState:",D)}}function dt(D){return u[D]!==void 0?u[D]:n.getParameter(D)}function ot(D,rt){u[D]!==rt&&(n.pixelStorei(D,rt),u[D]=rt)}function Mt(D){it.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),it.copy(D))}function At(D){Pt.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Pt.copy(D))}function tt(D,rt){let Q=c.get(rt);Q===void 0&&(Q=new WeakMap,c.set(rt,Q));let Et=Q.get(D);Et===void 0&&(Et=n.getUniformBlockIndex(rt,D.name),n.uniformBlockBinding(rt,Et,Et),Q.set(D,Et))}function st(D,rt,Q){let mt=c.get(rt).get(D);l[mt]!==Q&&(n.bindBufferBase(n.UNIFORM_BUFFER,mt,Q),l[mt]=Q)}function wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},lt=null,ut={},d={},l={},f=new WeakMap,g=[],M=null,p=!1,m=null,y=null,E=null,v=null,C=null,P=null,x=null,R=new fe(0,0,0),V=0,O=!1,B=null,Y=null,et=null,N=null,q=null,it.set(0,0,n.canvas.width,n.canvas.height),Pt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Ut,disable:te,bindFramebuffer:Pe,drawBuffers:Zt,useProgram:ge,setBlending:Le,setMaterial:De,setFlipSided:ii,setCullFace:Ee,setLineWidth:Ni,setPolygonOffset:Fe,setScissorTest:ni,activeTexture:si,bindTexture:xi,unbindTexture:z,compressedTexImage2D:vi,compressedTexImage3D:Se,texImage2D:S,texImage3D:X,pixelStorei:ot,getParameter:dt,updateUBOMapping:tt,uniformBlockBinding:st,texStorage2D:Kt,texStorage3D:I,texSubImage2D:Te,texSubImage3D:It,compressedTexSubImage2D:Ne,compressedTexSubImage3D:qt,scissor:Mt,viewport:At,reset:wt}}function Wx(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,M=new FinalizationRegistry(I=>g.delete(I)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,S){return p?new OffscreenCanvas(I,S):Sr("canvas")}function y(I,S,X){let dt=1,ot=Kt(I);if((ot.width>X||ot.height>X)&&(dt=X/Math.max(ot.width,ot.height)),dt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Mt=Math.floor(dt*ot.width),At=Math.floor(dt*ot.height);d===void 0&&(d=m(Mt,At));let tt=S?m(Mt,At):d;return tt.width=Mt,tt.height=At,tt.getContext("2d").drawImage(I,0,0,Mt,At),Yt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Mt+"x"+At+")."),tt}else return"data"in I&&Yt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),I;return I}function E(I){return I.generateMipmaps}function v(I){n.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function P(I,S,X,dt,ot,Mt=!1){if(I!==null){if(n[I]!==void 0)return n[I];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let At;dt&&(At=t.get("EXT_texture_norm16"),At||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=S;if(S===n.RED&&(X===n.FLOAT&&(tt=n.R32F),X===n.HALF_FLOAT&&(tt=n.R16F),X===n.UNSIGNED_BYTE&&(tt=n.R8),X===n.UNSIGNED_SHORT&&At&&(tt=At.R16_EXT),X===n.SHORT&&At&&(tt=At.R16_SNORM_EXT)),S===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(tt=n.R8UI),X===n.UNSIGNED_SHORT&&(tt=n.R16UI),X===n.UNSIGNED_INT&&(tt=n.R32UI),X===n.BYTE&&(tt=n.R8I),X===n.SHORT&&(tt=n.R16I),X===n.INT&&(tt=n.R32I)),S===n.RG&&(X===n.FLOAT&&(tt=n.RG32F),X===n.HALF_FLOAT&&(tt=n.RG16F),X===n.UNSIGNED_BYTE&&(tt=n.RG8),X===n.UNSIGNED_SHORT&&At&&(tt=At.RG16_EXT),X===n.SHORT&&At&&(tt=At.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(tt=n.RG8UI),X===n.UNSIGNED_SHORT&&(tt=n.RG16UI),X===n.UNSIGNED_INT&&(tt=n.RG32UI),X===n.BYTE&&(tt=n.RG8I),X===n.SHORT&&(tt=n.RG16I),X===n.INT&&(tt=n.RG32I)),S===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),X===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),X===n.UNSIGNED_INT&&(tt=n.RGB32UI),X===n.BYTE&&(tt=n.RGB8I),X===n.SHORT&&(tt=n.RGB16I),X===n.INT&&(tt=n.RGB32I)),S===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),X===n.UNSIGNED_INT&&(tt=n.RGBA32UI),X===n.BYTE&&(tt=n.RGBA8I),X===n.SHORT&&(tt=n.RGBA16I),X===n.INT&&(tt=n.RGBA32I)),S===n.RGB&&(X===n.UNSIGNED_SHORT&&At&&(tt=At.RGB16_EXT),X===n.SHORT&&At&&(tt=At.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(tt=n.R11F_G11F_B10F)),S===n.RGBA){let st=Mt?Mr:me.getTransfer(ot);X===n.FLOAT&&(tt=n.RGBA32F),X===n.HALF_FLOAT&&(tt=n.RGBA16F),X===n.UNSIGNED_BYTE&&(tt=st===ve?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&At&&(tt=At.RGBA16_EXT),X===n.SHORT&&At&&(tt=At.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function x(I,S){let X;return I?S===null||S===Yi||S===rs?X=n.DEPTH24_STENCIL8:S===Zi?X=n.DEPTH32F_STENCIL8:S===js&&(X=n.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Yi||S===rs?X=n.DEPTH_COMPONENT24:S===Zi?X=n.DEPTH_COMPONENT32F:S===js&&(X=n.DEPTH_COMPONENT16),X}function R(I,S){return E(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ye&&I.minFilter!==fi?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function V(I){let S=new WeakRef(I);i.get(I).__ref=S,g.add(S),M.register(I,S,S)}function O(I){let S=i.get(I).__ref;S!==void 0&&(g.delete(S),M.unregister(S))}function B(I){et(I.target)}function Y(I){N(I.target)}function et(I){I.removeEventListener("dispose",B),O(I),nt(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function N(I){I.removeEventListener("dispose",Y),O(I),ft(I)}function q(){for(let I of g){let S=I.deref();S!==void 0&&(S.isRenderTarget===!0?N(S):et(S))}g.clear(),u.clear()}function nt(I){let S=i.get(I);if(S.__webglInit===void 0)return;let X=I.source,dt=f.get(X);if(dt){let ot=dt[S.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&K(I),Object.keys(dt).length===0&&f.delete(X)}i.remove(I)}function K(I){let S=i.get(I);n.deleteTexture(S.__webglTexture);let X=I.source,dt=f.get(X);delete dt[S.__cacheKey],a.memory.textures--}function ft(I){let S=i.get(I);S.__depthDisposeCallback&&S.__depthDisposeCallback();let X=I.depthTexture;if(X&&X.renderTarget===I&&et(X),I.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(S.__webglFramebuffer[ot]))for(let Mt=0;Mt<S.__webglFramebuffer[ot].length;Mt++)n.deleteFramebuffer(S.__webglFramebuffer[ot][Mt]);else n.deleteFramebuffer(S.__webglFramebuffer[ot]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[ot])}else{if(Array.isArray(S.__webglFramebuffer))for(let ot=0;ot<S.__webglFramebuffer.length;ot++)n.deleteFramebuffer(S.__webglFramebuffer[ot]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ot=0;ot<S.__webglColorRenderbuffer.length;ot++)S.__webglColorRenderbuffer[ot]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[ot]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let dt=I.textures;for(let ot=0,Mt=dt.length;ot<Mt;ot++){let At=i.get(dt[ot]);At.__webglTexture&&(n.deleteTexture(At.__webglTexture),a.memory.textures--),i.remove(dt[ot])}i.remove(I)}let W=0;function lt(){W=0}function ut(){return W}function Ft(I){W=I}function Jt(){let I=W;return I>=s.maxTextures&&Yt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,I}function it(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.mipmapsAutoUpdate),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function Pt(I,S){let X=i.get(I);if(I.isVideoTexture&&Ne(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){let dt=I.image;if(dt===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{De(X,I,S);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+S)}function Ht(I,S){let X=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){De(X,I,S);return}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+S)}function jt(I,S){let X=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){De(X,I,S);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+S)}function Ut(I,S){let X=i.get(I);if(I.version>0&&X.__version!==I.version){ii(X,I,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+S)}let te={[vo]:n.REPEAT,[sn]:n.CLAMP_TO_EDGE,[bo]:n.MIRRORED_REPEAT},Pe={[Ye]:n.NEAREST,[Ku]:n.NEAREST_MIPMAP_NEAREST,[ea]:n.NEAREST_MIPMAP_LINEAR,[fi]:n.LINEAR,[el]:n.LINEAR_MIPMAP_NEAREST,[bn]:n.LINEAR_MIPMAP_LINEAR},Zt={[nf]:n.NEVER,[Ch]:n.ALWAYS,[sf]:n.LESS,[Ah]:n.LEQUAL,[rf]:n.EQUAL,[Rh]:n.GEQUAL,[af]:n.GREATER,[of]:n.NOTEQUAL};function ge(I,S){if(S.type===Zi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===fi||S.magFilter===el||S.magFilter===ea||S.magFilter===bn||S.minFilter===fi||S.minFilter===el||S.minFilter===ea||S.minFilter===bn)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,te[S.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,te[S.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,te[S.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,Pe[S.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,Pe[S.minFilter]),S.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Zt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ye||S.minFilter!==ea&&S.minFilter!==bn||S.type===Zi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Me(I,S){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",B),V(S));let dt=S.source,ot=f.get(dt);ot===void 0&&(ot={},f.set(dt,ot));let Mt=it(S);if(Mt!==I.__cacheKey){ot[Mt]===void 0&&(ot[Mt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ot[Mt].usedTimes++;let At=ot[I.__cacheKey];At!==void 0&&(ot[I.__cacheKey].usedTimes--,At.usedTimes===0&&K(S)),I.__cacheKey=Mt,I.__webglTexture=ot[Mt].texture}return X}function oe(I,S,X){return Math.floor(Math.floor(I/X)/S)}function Le(I,S,X,dt){let Mt=I.updateRanges;if(Mt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,X,dt,S.data);else{Mt.sort((D,rt)=>D.start-rt.start);let At=0;for(let D=1;D<Mt.length;D++){let rt=Mt[At],Q=Mt[D],Et=rt.start+rt.count,mt=oe(Q.start,S.width,4),St=oe(rt.start,S.width,4);Q.start<=Et+1&&mt===St&&oe(Q.start+Q.count-1,S.width,4)===mt?rt.count=Math.max(rt.count,Q.start+Q.count-rt.start):(++At,Mt[At]=Q)}Mt.length=At+1;let tt=e.getParameter(n.UNPACK_ROW_LENGTH),st=e.getParameter(n.UNPACK_SKIP_PIXELS),wt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let D=0,rt=Mt.length;D<rt;D++){let Q=Mt[D],Et=Math.floor(Q.start/4),mt=Math.ceil(Q.count/4),St=Et%S.width,Xt=Math.floor(Et/S.width),se=mt,gt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,St),e.pixelStorei(n.UNPACK_SKIP_ROWS,Xt),e.texSubImage2D(n.TEXTURE_2D,0,St,Xt,se,gt,X,dt,S.data)}I.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,tt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,st),e.pixelStorei(n.UNPACK_SKIP_ROWS,wt)}}function De(I,S,X){let dt=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(dt=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(dt=n.TEXTURE_3D);let ot=Me(I,S),Mt=S.source;e.bindTexture(dt,I.__webglTexture,n.TEXTURE0+X);let At=i.get(Mt);if(Mt.version!==At.__version||ot===!0){if(e.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let gt=me.getPrimaries(me.workingColorSpace),$t=S.colorSpace===Sn?null:me.getPrimaries(S.colorSpace),re=S.colorSpace===Sn||gt===$t?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let st=y(S.image,!1,s.maxTextureSize);st=qt(S,st);let wt=r.convert(S.format,S.colorSpace),D=r.convert(S.type),rt=P(S.internalFormat,wt,D,S.normalized,S.colorSpace,S.isVideoTexture);ge(dt,S);let Q,Et=S.mipmaps,mt=S.isVideoTexture!==!0,St=At.__version===void 0||ot===!0,Xt=Mt.dataReady,se=R(S,st);if(S.isDepthTexture)rt=x(S.format===Mn,S.type),St&&(mt?e.texStorage2D(n.TEXTURE_2D,1,rt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,rt,st.width,st.height,0,wt,D,null));else if(S.isDataTexture)if(Et.length>0){mt&&St&&e.texStorage2D(n.TEXTURE_2D,se,rt,Et[0].width,Et[0].height);for(let gt=0,$t=Et.length;gt<$t;gt++)Q=Et[gt],mt?Xt&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,Q.width,Q.height,wt,D,Q.data):e.texImage2D(n.TEXTURE_2D,gt,rt,Q.width,Q.height,0,wt,D,Q.data);S.generateMipmaps=!1}else mt?(St&&e.texStorage2D(n.TEXTURE_2D,se,rt,st.width,st.height),Xt&&Le(S,st,wt,D)):e.texImage2D(n.TEXTURE_2D,0,rt,st.width,st.height,0,wt,D,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){mt&&St&&e.texStorage3D(n.TEXTURE_2D_ARRAY,se,rt,Et[0].width,Et[0].height,st.depth);for(let gt=0,$t=Et.length;gt<$t;gt++)if(Q=Et[gt],S.format!==Ki)if(wt!==null)if(mt){if(Xt)if(S.layerUpdates.size>0){let re=zh(Q.width,Q.height,S.format,S.type);for(let Nt of S.layerUpdates){let ye=Q.data.subarray(Nt*re/Q.data.BYTES_PER_ELEMENT,(Nt+1)*re/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,Nt,Q.width,Q.height,1,wt,ye)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,0,Q.width,Q.height,st.depth,wt,Q.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,gt,rt,Q.width,Q.height,st.depth,0,Q.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?Xt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,0,Q.width,Q.height,st.depth,wt,D,Q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,gt,rt,Q.width,Q.height,st.depth,0,wt,D,Q.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{mt&&St&&e.texStorage2D(n.TEXTURE_2D,se,rt,Et[0].width,Et[0].height);for(let gt=0,$t=Et.length;gt<$t;gt++)Q=Et[gt],S.format!==Ki?wt!==null?mt?Xt&&e.compressedTexSubImage2D(n.TEXTURE_2D,gt,0,0,Q.width,Q.height,wt,Q.data):e.compressedTexImage2D(n.TEXTURE_2D,gt,rt,Q.width,Q.height,0,Q.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?Xt&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,Q.width,Q.height,wt,D,Q.data):e.texImage2D(n.TEXTURE_2D,gt,rt,Q.width,Q.height,0,wt,D,Q.data)}else if(S.isDataArrayTexture)if(mt){if(St&&e.texStorage3D(n.TEXTURE_2D_ARRAY,se,rt,st.width,st.height,st.depth),Xt)if(S.layerUpdates.size>0){let gt=zh(st.width,st.height,S.format,S.type);for(let $t of S.layerUpdates){let re=st.data.subarray($t*gt/st.data.BYTES_PER_ELEMENT,($t+1)*gt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$t,st.width,st.height,1,wt,D,re)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,wt,D,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,rt,st.width,st.height,st.depth,0,wt,D,st.data);else if(S.isData3DTexture)mt?(St&&e.texStorage3D(n.TEXTURE_3D,se,rt,st.width,st.height,st.depth),Xt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,wt,D,st.data)):e.texImage3D(n.TEXTURE_3D,0,rt,st.width,st.height,st.depth,0,wt,D,st.data);else if(S.isFramebufferTexture){if(St)if(mt)e.texStorage2D(n.TEXTURE_2D,se,rt,st.width,st.height);else{let gt=st.width,$t=st.height;for(let re=0;re<se;re++)e.texImage2D(n.TEXTURE_2D,re,rt,gt,$t,0,wt,D,null),gt>>=1,$t>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let gt=n.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),st.parentNode!==gt){gt.appendChild(st),u.add(S),gt.onpaint=$t=>{let re=$t.changedElements;for(let Nt of u)re.includes(Nt.image)&&(Nt.needsUpdate=!0)},gt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,st);else{let re=n.RGBA,Nt=n.RGBA,ye=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,re,Nt,ye,st)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Et.length>0){if(mt&&St){let gt=Kt(Et[0]);e.texStorage2D(n.TEXTURE_2D,se,rt,gt.width,gt.height)}for(let gt=0,$t=Et.length;gt<$t;gt++)Q=Et[gt],mt?Xt&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,wt,D,Q):e.texImage2D(n.TEXTURE_2D,gt,rt,wt,D,Q);S.generateMipmaps=!1}else if(mt){if(St){let gt=Kt(st);e.texStorage2D(n.TEXTURE_2D,se,rt,gt.width,gt.height)}Xt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,wt,D,st)}else e.texImage2D(n.TEXTURE_2D,0,rt,wt,D,st);E(S)&&S.mipmapsAutoUpdate===!0&&v(dt),At.__version=Mt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function ii(I,S,X){if(S.image.length!==6)return;let dt=Me(I,S),ot=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+X);let Mt=i.get(ot);if(ot.version!==Mt.__version||dt===!0){e.activeTexture(n.TEXTURE0+X);let At=me.getPrimaries(me.workingColorSpace),tt=S.colorSpace===Sn?null:me.getPrimaries(S.colorSpace),st=S.colorSpace===Sn||At===tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let wt=S.isCompressedTexture||S.image[0].isCompressedTexture,D=S.image[0]&&S.image[0].isDataTexture,rt=[];for(let Nt=0;Nt<6;Nt++)!wt&&!D?rt[Nt]=y(S.image[Nt],!0,s.maxCubemapSize):rt[Nt]=D?S.image[Nt].image:S.image[Nt],rt[Nt]=qt(S,rt[Nt]);let Q=rt[0],Et=r.convert(S.format,S.colorSpace),mt=r.convert(S.type),St=P(S.internalFormat,Et,mt,S.normalized,S.colorSpace),Xt=S.isVideoTexture!==!0,se=Mt.__version===void 0||dt===!0,gt=ot.dataReady,$t=R(S,Q);ge(n.TEXTURE_CUBE_MAP,S);let re;if(S.isDepthTexture){if(St=x(S.format===Mn,S.type),se)if(Xt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,St,Q.width,Q.height);else for(let Nt=0;Nt<6;Nt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,St,Q.width,Q.height,0,Et,mt,null)}else if(wt){Xt&&se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,$t,St,Q.width,Q.height);for(let Nt=0;Nt<6;Nt++){re=rt[Nt].mipmaps;for(let ye=0;ye<re.length;ye++){let ke=re[ye];S.format!==Ki?Et!==null?Xt?gt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,ye,0,0,ke.width,ke.height,Et,ke.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,ye,St,ke.width,ke.height,0,ke.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,ye,0,0,ke.width,ke.height,Et,mt,ke.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,ye,St,ke.width,ke.height,0,Et,mt,ke.data)}}}else{if(re=S.mipmaps,Xt&&se){re.length>0&&$t++;let Nt=Kt(rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,$t,St,Nt.width,Nt.height)}for(let Nt=0;Nt<6;Nt++)if(D){Xt?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,0,0,rt[Nt].width,rt[Nt].height,Et,mt,rt[Nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,St,rt[Nt].width,rt[Nt].height,0,Et,mt,rt[Nt].data);for(let ye=0;ye<re.length;ye++){let Qi=re[ye].image[Nt].image;Xt?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,ye+1,0,0,Qi.width,Qi.height,Et,mt,Qi.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,ye+1,St,Qi.width,Qi.height,0,Et,mt,Qi.data)}}else{Xt?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,0,0,Et,mt,rt[Nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,St,Et,mt,rt[Nt]);for(let ye=0;ye<re.length;ye++){let ke=re[ye];Xt?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,ye+1,0,0,Et,mt,ke.image[Nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,ye+1,St,Et,mt,ke.image[Nt])}}}E(S)&&S.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),Mt.__version=ot.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Ee(I,S,X,dt,ot,Mt){let At=r.convert(X.format,X.colorSpace),tt=r.convert(X.type),st=P(X.internalFormat,At,tt,X.normalized,X.colorSpace),wt=i.get(S),D=i.get(X);if(D.__renderTarget=S,!wt.__hasExternalTextures){let rt=Math.max(1,S.width>>Mt),Q=Math.max(1,S.height>>Mt);ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?e.texImage3D(ot,Mt,st,rt,Q,S.depth,0,At,tt,null):e.texImage2D(ot,Mt,st,rt,Q,0,At,tt,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),It(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,ot,D.__webglTexture,0,Te(S)):(ot===n.TEXTURE_2D||ot>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,dt,ot,D.__webglTexture,Mt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ni(I,S,X){if(n.bindRenderbuffer(n.RENDERBUFFER,I),S.depthBuffer){let dt=S.depthTexture,ot=dt&&dt.isDepthTexture?dt.type:null,Mt=x(S.stencilBuffer,ot),At=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;It(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(S),Mt,S.width,S.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(S),Mt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,I)}else{let dt=S.textures;for(let ot=0;ot<dt.length;ot++){let Mt=dt[ot],At=r.convert(Mt.format,Mt.colorSpace),tt=r.convert(Mt.type),st=P(Mt.internalFormat,At,tt,Mt.normalized,Mt.colorSpace);It(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(S),st,S.width,S.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(S),st,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,st,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(I,S,X){let dt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=i.get(S.depthTexture);ot.__renderTarget=S;let Mt=dt?S.depthTexture.image[0]:S.depthTexture.image;(!ot.__webglTexture||Mt.width!==S.width||Mt.height!==S.height)&&(Mt.width=S.width,Mt.height=S.height,S.depthTexture.needsUpdate=!0),dt?Ut(S.depthTexture,0):Pt(S.depthTexture,0);let At=ot.__webglTexture,tt=Te(S),st=dt?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,wt=S.depthTexture.format===Mn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===_n)It(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,wt,st,At,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,wt,st,At,0);else if(S.depthTexture.format===Mn)It(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,wt,st,At,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,wt,st,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ni(I){let S=i.get(I),X=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let dt=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),dt){let ot=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,dt.removeEventListener("dispose",ot)};dt.addEventListener("dispose",ot),S.__depthDisposeCallback=ot}S.__boundDepthTexture=dt}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(X)for(let dt=0;dt<6;dt++)Fe(S.__webglFramebuffer[dt],I,dt);else I.texture.mipmaps.length>0?Fe(S.__webglFramebuffer[0],I,0):Fe(S.__webglFramebuffer,I,0);else if(X){S.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[dt]),S.__webglDepthbuffer[dt]===void 0)S.__webglDepthbuffer[dt]=n.createRenderbuffer(),Ni(S.__webglDepthbuffer[dt],I,!1);else{let ot=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=S.__webglDepthbuffer[dt];n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,Mt)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Ni(S.__webglDepthbuffer,I,!1);else{let ot=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,Mt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function si(I,S,X){let dt=i.get(I);S!==void 0&&Ee(dt.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&ni(I)}function xi(I){let S=I.texture,X=i.get(I),dt=i.get(S);I.addEventListener("dispose",Y),V(I);let ot=I.textures,Mt=I.isWebGLCubeRenderTarget===!0,At=ot.length>1;if(At||(dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture()),dt.__version=S.version,a.memory.textures++),Mt){X.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(S.mipmaps.length>0){X.__webglFramebuffer[tt]=[];for(let st=0;st<S.mipmaps.length;st++)X.__webglFramebuffer[tt][st]=n.createFramebuffer()}else X.__webglFramebuffer[tt]=n.createFramebuffer()}else{if(S.mipmaps.length>0){X.__webglFramebuffer=[];for(let tt=0;tt<S.mipmaps.length;tt++)X.__webglFramebuffer[tt]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(At)for(let tt=0,st=ot.length;tt<st;tt++){let wt=i.get(ot[tt]);wt.__webglTexture===void 0&&(wt.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&It(I)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let tt=0;tt<ot.length;tt++){let st=ot[tt];X.__webglColorRenderbuffer[tt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[tt]);let wt=r.convert(st.format,st.colorSpace),D=r.convert(st.type),rt=P(st.internalFormat,wt,D,st.normalized,st.colorSpace,I.isXRRenderTarget===!0),Q=Te(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,rt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+tt,n.RENDERBUFFER,X.__webglColorRenderbuffer[tt])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Ni(X.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(n.TEXTURE_CUBE_MAP,dt.__webglTexture),ge(n.TEXTURE_CUBE_MAP,S);for(let tt=0;tt<6;tt++)if(S.mipmaps.length>0)for(let st=0;st<S.mipmaps.length;st++)Ee(X.__webglFramebuffer[tt][st],I,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st);else Ee(X.__webglFramebuffer[tt],I,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);E(S)?v(n.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(At){for(let tt=0,st=ot.length;tt<st;tt++){let wt=ot[tt],D=i.get(wt),rt=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(rt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,D.__webglTexture),ge(rt,wt),Ee(X.__webglFramebuffer,I,wt,n.COLOR_ATTACHMENT0+tt,rt,0),E(wt)&&v(rt)}e.unbindTexture()}else{let tt=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(tt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(tt,dt.__webglTexture),ge(tt,S),S.mipmaps.length>0)for(let st=0;st<S.mipmaps.length;st++)Ee(X.__webglFramebuffer[st],I,S,n.COLOR_ATTACHMENT0,tt,st);else Ee(X.__webglFramebuffer,I,S,n.COLOR_ATTACHMENT0,tt,0);E(S)?v(tt):S.mipmaps.length>0&&n.texParameteri(tt,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&ni(I)}function z(I){let S=I.textures;for(let X=0,dt=S.length;X<dt;X++){let ot=S[X];if(E(ot)&&ot.mipmapsAutoUpdate===!0){let Mt=C(I),At=i.get(ot).__webglTexture;e.bindTexture(Mt,At),v(Mt),e.unbindTexture()}}}let vi=[];function Se(I){if(I.samples>0){if(It(I)===!1){let S=I.textures,X=I.width,dt=I.height,ot=n.COLOR_BUFFER_BIT,Mt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(I),tt=S.length>1;if(tt)for(let wt=0;wt<S.length;wt++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let wt=0;wt<S.length;wt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ot|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ot|=n.STENCIL_BUFFER_BIT)),tt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[wt]);let D=i.get(S[wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,D,0)}n.blitFramebuffer(0,0,X,dt,0,0,X,dt,ot,n.NEAREST),l===!0&&(vi.length=0,vi.push(n.COLOR_ATTACHMENT0+wt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&vi.push(Mt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,vi))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),tt)for(let wt=0;wt<S.length;wt++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,At.__webglColorRenderbuffer[wt]);let D=i.get(S[wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,D,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let S=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Te(I){return Math.min(s.maxSamples,I.samples)}function It(I){let S=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ne(I){let S=a.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function qt(I,S){let X=I.colorSpace,dt=I.format,ot=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==br&&X!==Sn&&(me.getTransfer(X)===ve?(dt!==Ki||ot!==Mi)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",X)),S}function Kt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Jt,this.resetTextureUnits=lt,this.getTextureUnits=ut,this.setTextureUnits=Ft,this.setTexture2D=Pt,this.setTexture2DArray=Ht,this.setTexture3D=jt,this.setTextureCube=Ut,this.rebindTextures=si,this.setupRenderTarget=xi,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=ni,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=It,this.dispose=q}function Xx(n,t){function e(i,s=Sn){let r,a=me.getTransfer(s);if(i===Mi)return n.UNSIGNED_BYTE;if(i===nl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Sh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===vh)return n.BYTE;if(i===bh)return n.SHORT;if(i===js)return n.UNSIGNED_SHORT;if(i===il)return n.INT;if(i===Yi)return n.UNSIGNED_INT;if(i===Zi)return n.FLOAT;if(i===Ji)return n.HALF_FLOAT;if(i===wh)return n.ALPHA;if(i===Eh)return n.RGB;if(i===Ki)return n.RGBA;if(i===_n)return n.DEPTH_COMPONENT;if(i===Mn)return n.DEPTH_STENCIL;if(i===Th)return n.RED;if(i===rl)return n.RED_INTEGER;if(i===zn)return n.RG;if(i===al)return n.RG_INTEGER;if(i===ol)return n.RGBA_INTEGER;if(i===ia||i===na||i===sa||i===ra)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ll||i===cl||i===hl||i===dl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ul||i===fl||i===pl||i===ml||i===gl||i===aa||i===_l)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ul||i===fl)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===pl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ml)return r.COMPRESSED_R11_EAC;if(i===gl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===aa)return r.COMPRESSED_RG11_EAC;if(i===_l)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yl||i===xl||i===vl||i===bl||i===Ml||i===Sl||i===wl||i===El||i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ml)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===El)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Al)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Il)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ll||i===Dl||i===Nl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ll)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ul||i===Ol||i===oa||i===Fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ul)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var $x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qx=`
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

}`,td=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Dr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Fi({vertexShader:$x,fragmentShader:qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new Vr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ed=class extends $i{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,M=typeof XRWebGLBinding<"u",p=new td,m={},y=e.getContextAttributes(),E=null,v=null,C=[],P=[],x=new Lt,R=null,V=null,O=new di;O.viewport=new be;let B=new di;B.viewport=new be;let Y=[O,B],et=new Jo,N=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let Pt=C[it];return Pt===void 0&&(Pt=new Fs,C[it]=Pt),Pt.getTargetRaySpace()},this.getControllerGrip=function(it){let Pt=C[it];return Pt===void 0&&(Pt=new Fs,C[it]=Pt),Pt.getGripSpace()},this.getHand=function(it){let Pt=C[it];return Pt===void 0&&(Pt=new Fs,C[it]=Pt),Pt.getHandSpace()};function nt(it){let Pt=P.indexOf(it.inputSource);if(Pt===-1)return;let Ht=C[Pt];Ht!==void 0&&(Ht.update(it.inputSource,it.frame,c||a),Ht.dispatchEvent({type:it.type,data:it.inputSource}))}function K(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ft);for(let it=0;it<C.length;it++){let Pt=P[it];Pt!==null&&(P[it]=null,C[it].disconnect(Pt))}N=null,q=null,p.reset();for(let it in m)delete m[it];if(t.setRenderTarget(E),f=null,d=null,u=null,s=null,v=null,Jt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(x.width,x.height,!1),V!==null){let it=V.camera;it.fov=V.fov,it.zoom=V.zoom,it.updateProjectionMatrix(),V=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,i.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,i.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ft),y.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ht=null,jt=null,Ut=null;y.depth&&(Ut=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ht=y.stencil?Mn:_n,jt=y.stencil?rs:Yi);let te={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(te),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Pi(d.textureWidth,d.textureHeight,{format:Ki,type:Mi,depthTexture:new vn(d.textureWidth,d.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,Ht),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ht={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Ht),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Pi(f.framebufferWidth,f.framebufferHeight,{format:Ki,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ft(it){for(let Pt=0;Pt<it.removed.length;Pt++){let Ht=it.removed[Pt],jt=P.indexOf(Ht);jt>=0&&(P[jt]=null,C[jt].disconnect(Ht))}for(let Pt=0;Pt<it.added.length;Pt++){let Ht=it.added[Pt],jt=P.indexOf(Ht);if(jt===-1){for(let te=0;te<C.length;te++)if(te>=P.length){P.push(Ht),jt=te;break}else if(P[te]===null){P[te]=Ht,jt=te;break}if(jt===-1)break}let Ut=C[jt];Ut&&Ut.connect(Ht)}}function W(it,Pt){Pt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(Pt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let Pt=it.near,Ht=it.far;p.texture!==null&&(p.depthNear>0&&(Pt=p.depthNear),p.depthFar>0&&(Ht=p.depthFar)),et.near=B.near=O.near=Pt,et.far=B.far=O.far=Ht,(N!==et.near||q!==et.far)&&(s.updateRenderState({depthNear:et.near,depthFar:et.far}),N=et.near,q=et.far),et.layers.mask=it.layers.mask|6,O.layers.mask=et.layers.mask&-5,B.layers.mask=et.layers.mask&-3;let jt=it.parent,Ut=et.cameras;W(et,jt);for(let te=0;te<Ut.length;te++)W(Ut[te],jt);et.projectionMatrix.copy(O.projectionMatrix),et.projectionMatrixInverse.copy(O.projectionMatrixInverse),V===null&&it.isPerspectiveCamera&&(V={camera:it,fov:it.fov,zoom:it.zoom}),lt(it,et,jt)};function lt(it,Pt,Ht){Ht===null?it.matrix.copy(Pt.matrixWorld):(it.matrix.copy(Ht.matrixWorld),it.matrix.invert(),it.matrix.multiply(Pt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(Pt.projectionMatrix),it.projectionMatrixInverse.copy(Pt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Ns*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(it){l=it,d!==null&&(d.fixedFoveation=it),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=it)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(et)},this.getCameraTexture=function(it){return m[it]};let ut=null;function Ft(it,Pt){if(h=Pt.getViewerPose(c||a),g=Pt,h!==null){let Ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let jt=!1;Ht.length!==et.cameras.length&&(et.cameras.length=0,jt=!0);for(let Zt=0;Zt<Ht.length;Zt++){let ge=Ht[Zt],Me=null;if(f!==null)Me=f.getViewport(ge);else{let Le=u.getViewSubImage(d,ge);Me=Le.viewport,Zt===0&&(t.setRenderTargetTextures(v,Le.colorTexture,Le.depthStencilTexture),t.setRenderTarget(v))}let oe=Y[Zt];oe===void 0&&(oe=new di,oe.layers.enable(Zt),oe.viewport=new be,Y[Zt]=oe),oe.matrix.fromArray(ge.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(ge.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Me.x,Me.y,Me.width,Me.height),Zt===0&&(et.matrix.copy(oe.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),jt===!0&&et.cameras.push(oe)}let Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=i.getBinding();let Zt=u.getDepthInformation(Ht[0]);Zt&&Zt.isValid&&Zt.texture&&p.init(Zt,s.renderState)}if(Ut&&Ut.includes("camera-access")&&M){t.state.unbindTexture(),u=i.getBinding();for(let Zt=0;Zt<Ht.length;Zt++){let ge=Ht[Zt].camera;if(ge){let Me=m[ge];Me||(Me=new Dr,m[ge]=Me);let oe=u.getCameraImage(ge);Me.sourceTexture=oe}}}}for(let Ht=0;Ht<C.length;Ht++){let jt=P[Ht],Ut=C[Ht];jt!==null&&Ut!==void 0&&Ut.update(jt,Pt,c||a)}ut&&ut(it,Pt),Pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Pt}),g=null}let Jt=new zf;Jt.setAnimationLoop(Ft),this.setAnimationLoop=function(it){ut=it},this.dispose=function(){}}},jx=new we,Zf=new ne;Zf.set(-1,0,0,0,1,0,0,0,1);function Yx(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Fh(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,E,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),M(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===gi&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===gi&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=t.get(m),E=y.envMap,v=y.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(jx.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Zf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=E*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gi&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){let y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Zx(n,t,e,i){let s={},r={};function a(y,E){let v=E.program;i.uniformBlockBinding(y,v,s[y.id])}function o(y,E){let v=s[y.id];v===void 0&&(g(y),v=l(y),s[y.id]=v,y.addEventListener("dispose",p));let C=E.program;i.updateUBOMapping(y,C);let P=t.render.frame;r[y.id]!==P&&(c(y),r[y.id]=P)}function l(y){let E=n.createBuffer(),v=y.__size,C=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,v,C),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function c(y){let E=s[y.id],v=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let P=0,x=v.length;P<x;P++){let R=v[P];if(Array.isArray(R))for(let V=0,O=R.length;V<O;V++)h(R[V],P,V,C);else h(R,P,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,E,v,C){if(d(y,E,v,C)===!0){let P=y.__offset,x=y.value;if(Array.isArray(x)){let R=0;for(let V=0;V<x.length;V++){let O=x[V],B=M(O,!0);u(O,y.__data,R),R+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,P,y.__data)}}function u(y,E,v){typeof y=="number"||typeof y=="boolean"?E[v]=y:y.isMatrix3?(E[v]=y.elements[0],E[v+1]=y.elements[1],E[v+2]=y.elements[2],E[v+3]=0,E[v+4]=y.elements[3],E[v+5]=y.elements[4],E[v+6]=y.elements[5],E[v+7]=0,E[v+8]=y.elements[6],E[v+9]=y.elements[7],E[v+10]=y.elements[8],E[v+11]=0):ArrayBuffer.isView(y)?E.set(y.subarray(0,E.length-v),v):y.toArray(E,v)}function d(y,E,v,C){let P=y.value,x=E+"_"+v;if(Array.isArray(P)){C[x]===void 0&&(C[x]=[]);let R=C[x],V=!1;for(let O=0;O<P.length;O++)f(P[O],R,O)===!0&&(V=!0);return V}return f(P,C,x)}function f(y,E,v){if(E[v]===void 0)return typeof y=="number"||typeof y=="boolean"?E[v]=y:ArrayBuffer.isView(y)?E[v]=y.slice():E[v]=y.clone(),!0;{let C=E[v];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return E[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function g(y){let E=y.uniforms,v=0,C=16;for(let x=0,R=E.length;x<R;x++){let V=Array.isArray(E[x])?E[x]:[E[x]];for(let O=0,B=V.length;O<B;O++){let Y=V[O],et=Array.isArray(Y.value)?Y.value:[Y.value],N=Array.isArray(E[x])||Array.isArray(Y.value),q=v;for(let K=0,ft=et.length;K<ft;K++){let W=et[K],lt=M(W,N),ut=v%C,Ft=ut%lt.boundary,Jt=ut+Ft;v+=Ft,Jt!==0&&C-Jt<lt.storage&&(v+=C-Jt),K===0&&(q=v),v+=lt.storage}let nt=Y.type==="int"?Int32Array:Y.type==="uint"?Uint32Array:Float32Array;Y.__data=new nt((v-q)/Float32Array.BYTES_PER_ELEMENT),Y.__offset=q}}let P=v%C;return P>0&&(v+=C-P),y.__size=v,y.__cache={},this}function M(y,E){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",y),E===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(y){let E=y.target;E.removeEventListener("dispose",p),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:m}}var Jx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),an=null;function Kx(){return an===null&&(an=new Ao(Jx,16,16,zn,Ji),an.name="DFG_LUT",an.minFilter=fi,an.magFilter=fi,an.wrapS=sn,an.wrapT=sn,an.generateMipmaps=!1,an.needsUpdate=!0),an}var Gl=class{constructor(t={}){let{canvas:e=lf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Mi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let M=f,p=new Set([ol,al,rl]),m=new Set([Mi,Yi,js,rs,nl,sl]),y=new Uint32Array(4),E=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},C=null,P=null,x=[],R=[],V=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,B=!1,Y=null,et=null,N=null,q=null;this._outputColorSpace=Ai;let nt=0,K=0,ft=null,W=-1,lt=null,ut=new be,Ft=new be,Jt=null,it=new fe(0),Pt=0,Ht=e.width,jt=e.height,Ut=1,te=null,Pe=null,Zt=new be(0,0,Ht,jt),ge=new be(0,0,Ht,jt),Me=!1,oe=new Dn,Le=new Ro,De=!1,ii=!1,Ee=new we,Ni=new U,Fe=new be,ni={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},si=!1;function xi(){return ft===null?Ut:1}let z=i;function vi(w,F){return e.getContext(w,F)}let Se,Te,It,Ne,qt,Kt,I,S,X,dt,ot,Mt,At,tt,st,wt,D,rt,Q,Et,mt,St,Xt;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",$t,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",Nt,!1),z===null){let F="webgl2";if(z=vi(F,w),z===null)throw vi(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}se()}catch(w){throw e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),Qt("WebGLRenderer: "+w.message),w}function se(){Se=new cy(z),Se.init(),mt=new Xx(z,Se),Te=new K0(z,Se,t,mt),It=new Gx(z,Se),Te.reversedDepthBuffer&&d&&It.buffers.depth.setReversed(!0),et=z.createFramebuffer(),N=z.createFramebuffer(),q=z.createFramebuffer(),Ne=new uy(z),qt=new Cx,Kt=new Wx(z,Se,It,qt,Te,mt,Ne),I=new ly(O),S=new pg(z),St=new Z0(z,S),X=new hy(z,S,Ne,St),dt=new py(z,X,S,St,Ne),rt=new fy(z,Te,Kt),st=new Q0(qt),ot=new Rx(O,I,Se,Te,St,st),Mt=new Yx(O,qt),At=new Ix,tt=new Fx(Se),D=new Y0(O,I,It,dt,g,l),wt=new Hx(O,dt,Te),Xt=new Zx(z,Ne,Te,It),Q=new J0(z,Se,Ne),Et=new dy(z,Se,Ne),Ne.programs=ot.programs,O.capabilities=Te,O.extensions=Se,O.properties=qt,O.renderLists=At,O.shadowMap=wt,O.state=It,O.info=Ne}M!==Mi&&(V=new gy(M,e.width,e.height,o,s,r));let gt=new ed(O,z);this.xr=gt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=Se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ut},this.setPixelRatio=function(w){w!==void 0&&(Ut=w,this.setSize(Ht,jt,!1))},this.getSize=function(w){return w.set(Ht,jt)},this.setSize=function(w,F,Z=!0){if(gt.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ht=w,jt=F,e.width=Math.floor(w*Ut),e.height=Math.floor(F*Ut),Z===!0&&(e.style.width=w+"px",e.style.height=F+"px"),V!==null&&V.setSize(e.width,e.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Ht*Ut,jt*Ut).floor()},this.setDrawingBufferSize=function(w,F,Z){Ht=w,jt=F,Ut=Z,e.width=Math.floor(w*Z),e.height=Math.floor(F*Z),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(M===Mi){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){Yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ut)},this.getViewport=function(w){return w.copy(Zt)},this.setViewport=function(w,F,Z,G){w.isVector4?Zt.set(w.x,w.y,w.z,w.w):Zt.set(w,F,Z,G),It.viewport(ut.copy(Zt).multiplyScalar(xi()).round())},this.getScissor=function(w){return w.copy(ge)},this.setScissor=function(w,F,Z,G){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,F,Z,G),It.scissor(Ft.copy(ge).multiplyScalar(xi()).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(w){It.setScissorTest(Me=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){Pe=w},this.getClearColor=function(w){return w.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,Z=!0){let G=0;if(w){let $=!1;if(ft!==null){let Ct=ft.texture.format;$=p.has(Ct)}if($){let Ct=ft.texture.type,zt=m.has(Ct),Tt=D.getClearColor(),Ot=D.getClearAlpha(),Wt=Tt.r,ee=Tt.g,he=Tt.b;zt?(y[0]=Wt,y[1]=ee,y[2]=he,y[3]=Ot,z.clearBufferuiv(z.COLOR,0,y)):(E[0]=Wt,E[1]=ee,E[2]=he,E[3]=Ot,z.clearBufferiv(z.COLOR,0,E))}else G|=z.COLOR_BUFFER_BIT}F&&(G|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(G|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&z.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Y=w},this.dispose=function(){e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),D.dispose(),At.dispose(),tt.dispose(),Kt.dispose(),qt.dispose(),I.dispose(),dt.dispose(),X.dispose(),St.dispose(),Xt.dispose(),ot.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",rr),gt.removeEventListener("sessionend",ar),en.stop()};function $t(w){w.preventDefault(),wr("WebGLRenderer: Context Lost."),B=!0}function re(){wr("WebGLRenderer: Context Restored."),B=!1;let w=Ne.autoReset,F=wt.enabled,Z=wt.autoUpdate,G=wt.needsUpdate,$=wt.type;se(),Ne.autoReset=w,wt.enabled=F,wt.autoUpdate=Z,wt.needsUpdate=G,wt.type=$}function Nt(w){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ye(w){let F=w.target;F.removeEventListener("dispose",ye),ke(F)}function ke(w){Qi(w),qt.remove(w)}function Qi(w){let F=qt.get(w).programs;F!==void 0&&(F.forEach(function(Z){ot.releaseProgram(Z)}),w.isShaderMaterial&&ot.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,Z,G,$,Ct){F===null&&(F=ni);let zt=$.isMesh&&$.matrixWorld.determinantAffine()<0,Tt=vc(w,F,Z,G,$);It.setMaterial(G,zt);let Ot=Z.index,Wt=1;if(G.wireframe===!0){if(Ot=X.getWireframeAttribute(Z),Ot===void 0)return;Wt=2}let ee=Z.drawRange,he=Z.attributes.position,Gt=ee.start*Wt,le=(ee.start+ee.count)*Wt;Ct!==null&&(Gt=Math.max(Gt,Ct.start*Wt),le=Math.min(le,(Ct.start+Ct.count)*Wt)),Ot!==null?(Gt=Math.max(Gt,0),le=Math.min(le,Ot.count)):he!=null&&(Gt=Math.max(Gt,0),le=Math.min(le,he.count));let b=le-Gt;if(b<0||b===1/0)return;St.setup($,G,Tt,Z,Ot);let _,T=Q;if(Ot!==null&&(_=S.get(Ot),T=Et,T.setIndex(_)),$.isMesh)G.wireframe===!0?(It.setLineWidth(G.wireframeLinewidth*xi()),T.setMode(z.LINES)):T.setMode(z.TRIANGLES);else if($.isLine){let A=G.linewidth;A===void 0&&(A=1),It.setLineWidth(A*xi()),$.isLineSegments?T.setMode(z.LINES):$.isLineLoop?T.setMode(z.LINE_LOOP):T.setMode(z.LINE_STRIP)}else $.isPoints?T.setMode(z.POINTS):$.isSprite&&T.setMode(z.TRIANGLES);if($.isBatchedMesh)if(Se.get("WEBGL_multi_draw"))T.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let A=$._multiDrawStarts,L=$._multiDrawCounts,J=$._multiDrawCount,H=Ot?S.get(Ot).bytesPerElement:1,j=qt.get(G).currentProgram.getUniforms();for(let at=0;at<J;at++)j.setValue(z,"_gl_DrawID",at),T.render(A[at]/H,L[at])}else if($.isInstancedMesh)T.renderInstances(Gt,b,$.count);else if(Z.isInstancedBufferGeometry){let A=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,L=Math.min(Z.instanceCount,A);T.renderInstances(Gt,b,L)}else T.render(Gt,b)};function Ia(w,F,Z,G){Y!==null&&w.isNodeMaterial&&Y.setObject(G,w),De===!0&&st.setState(w,Z,!1),w.transparent===!0&&w.side===_i&&w.forceSinglePass===!1?(w.side=gi,w.needsUpdate=!0,qn(w,F,G),w.side=Bn,w.needsUpdate=!0,qn(w,F,G),w.side=_i):qn(w,F,G)}this.compile=function(w,F,Z=null){Z===null&&(Z=w),Y!==null&&Y.renderStart(w,F,Z),P=tt.get(Z),P.init(F),R.push(P),Z.traverseVisible(function($){$.isLight&&$.layers.test(F.layers)&&(P.pushLight($),$.castShadow&&P.pushShadow($))}),w!==Z&&w.traverseVisible(function($){$.isLight&&$.layers.test(F.layers)&&(P.pushLight($),$.castShadow&&P.pushShadow($))}),P.setupLights(),Y!==null&&Y.updateLights(P.state.lightsArray),ii=this.localClippingEnabled,De=st.init(this.clippingPlanes,ii),De===!0&&st.setGlobalState(this.clippingPlanes,F),Y!==null&&wt.render(P.state.shadowsArray,Z,F);let G=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Ct=$.material;if(Ct)if(Array.isArray(Ct))for(let zt=0;zt<Ct.length;zt++){let Tt=Ct[zt];Ia(Tt,Z,F,$),G.add(Tt)}else Ia(Ct,Z,F,$),G.add(Ct)}),P=R.pop(),Y!==null&&Y.renderEnd(),G},this.compileAsync=function(w,F,Z=null){let G=this.compile(w,F,Z);return new Promise($=>{function Ct(){if(G.forEach(function(zt){let Ot=qt.get(zt).currentProgram;(Ot===void 0||Ot.isReady())&&G.delete(zt)}),G.size===0){$(w);return}setTimeout(Ct,10)}Se.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let tn=null;function La(w){tn&&tn(w)}function rr(){en.stop()}function ar(){en.start()}let en=new zf;en.setAnimationLoop(La),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(w){tn=w,gt.setAnimationLoop(w),w===null?en.stop():en.start()},gt.addEventListener("sessionstart",rr),gt.addEventListener("sessionend",ar),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;Y!==null&&Y.renderStart(w,F);let Z=gt.enabled===!0&&gt.isPresenting===!0,G=V!==null&&(ft===null||Z)&&V.begin(O,ft);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(F),F=gt.getCamera()),w.isScene===!0&&w.onBeforeRender(O,w,F,ft),P=tt.get(w,R.length),P.init(F),P.state.textureUnits=Kt.getTextureUnits(),R.push(P),Ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?Le.setFromArrayCamera(F):oe.setFromProjectionMatrix(Ee,Oi,F.reversedDepth),ii=this.localClippingEnabled,De=st.init(this.clippingPlanes,ii),C=At.get(w,x.length),C.init(),x.push(C),this.info.render.frame++,gt.enabled===!0&&gt.isPresenting===!0){let zt=O.xr.getDepthSensingMesh();zt!==null&&ds(zt,F,-1/0,O.sortObjects)}ds(w,F,0,O.sortObjects),C.finish(),Y!==null&&Y.updateLights(P.state.lightsArray),O.sortObjects===!0&&C.sort(te,Pe),si=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,si&&D.addToRenderList(C,w),this.info.autoReset===!0&&this.info.reset(),De===!0&&st.beginShadows();let $=P.state.shadowsArray;if(wt.render($,w,F),De===!0&&st.endShadows(),(G&&V.hasRenderPass())===!1){let zt=C.opaque,Tt=C.transmissive;if(P.setupLights(),F.isArrayCamera){let Ot=F.cameras;if(Tt.length>0)for(let Wt=0,ee=Ot.length;Wt<ee;Wt++){let he=Ot[Wt];Na(zt,Tt,w,he)}si&&D.render(w);for(let Wt=0,ee=Ot.length;Wt<ee;Wt++){let he=Ot[Wt];Da(C,w,he,he.viewport)}}else Tt.length>0&&Na(zt,Tt,w,F),si&&D.render(w),Da(C,w,F)}ft!==null&&K===0&&(Kt.updateMultisampleRenderTarget(ft),Kt.updateRenderTargetMipmap(ft)),G&&V.end(O),w.isScene===!0&&w.onAfterRender(O,w,F),St.resetDefaultState(),W=-1,lt=null,R.pop(),R.length>0?(P=R[R.length-1],Kt.setTextureUnits(P.state.textureUnits),De===!0&&st.setGlobalState(O.clippingPlanes,P.state.camera)):P=null,x.pop(),x.length>0?C=x[x.length-1]:C=null,Y!==null&&Y.renderEnd()};function ds(w,F,Z,G){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)P.pushLight(w),w.castShadow&&P.pushShadow(w);else if(w.isSprite){let zt=F.isArrayCamera?Le:oe;if(!w.frustumCulled||w.intersectsFrustum(zt)){G&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ee);let Tt=dt.update(w),Ot=w.material;Ot.visible&&C.push(w,Tt,Ot,Z,Fe.z,null,F)}}else if(w.isMesh||w.isLine||w.isPoints){let zt=F.isArrayCamera?Le:oe;if(!w.frustumCulled||w.intersectsFrustum(zt)){let Tt=dt.update(w),Ot=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Fe.copy(Tt.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ot)){let Wt=Tt.groups;for(let ee=0,he=Wt.length;ee<he;ee++){let Gt=Wt[ee],le=Ot[Gt.materialIndex];le&&le.visible&&C.push(w,Tt,le,Z,Fe.z,Gt,F)}}else Ot.visible&&C.push(w,Tt,Ot,Z,Fe.z,null,F)}}}let Ct=w.children;for(let zt=0,Tt=Ct.length;zt<Tt;zt++)ds(Ct[zt],F,Z,G)}function Da(w,F,Z,G){let{opaque:$,transmissive:Ct,transparent:zt}=w;P.setupLightsView(Z),De===!0&&st.setGlobalState(O.clippingPlanes,Z),G&&It.viewport(ut.copy(G)),$.length>0&&us($,F,Z),Ct.length>0&&us(Ct,F,Z),zt.length>0&&us(zt,F,Z),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Na(w,F,Z,G){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[G.id]===void 0){let Gt=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[G.id]=new Pi(1,1,{generateMipmaps:!0,type:Gt?Ji:Mi,minFilter:bn,samples:Math.max(4,Te.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let Ct=P.state.transmissionRenderTarget[G.id],zt=G.viewport||ut;Ct.setSize(zt.z*O.transmissionResolutionScale,zt.w*O.transmissionResolutionScale);let Tt=O.getRenderTarget(),Ot=O.getActiveCubeFace(),Wt=O.getActiveMipmapLevel();O.setRenderTarget(Ct),O.getClearColor(it),Pt=O.getClearAlpha(),Pt<1&&O.setClearColor(16777215,.5),O.clear(),si&&D.render(Z);let ee=O.toneMapping;O.toneMapping=rn;let he=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),P.setupLightsView(G),De===!0&&st.setGlobalState(O.clippingPlanes,G),us(w,Z,G),Kt.updateMultisampleRenderTarget(Ct),Kt.updateRenderTargetMipmap(Ct),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let le=0,b=F.length;le<b;le++){let _=F[le],{object:T,geometry:A,material:L,group:J}=_;if(L.side===_i&&T.layers.test(G.layers)){let H=L.side;L.side=gi,L.needsUpdate=!0,Ua(T,Z,G,A,L,J),L.side=H,L.needsUpdate=!0,Gt=!0}}Gt===!0&&(Kt.updateMultisampleRenderTarget(Ct),Kt.updateRenderTargetMipmap(Ct))}O.setRenderTarget(Tt,Ot,Wt),O.setClearColor(it,Pt),he!==void 0&&(G.viewport=he),O.toneMapping=ee}function us(w,F,Z){let G=F.isScene===!0?F.overrideMaterial:null;for(let $=0,Ct=w.length;$<Ct;$++){let zt=w[$],{object:Tt,geometry:Ot,group:Wt}=zt,ee=zt.material;ee.allowOverride===!0&&G!==null&&(ee=G),Tt.layers.test(Z.layers)&&Ua(Tt,F,Z,Ot,ee,Wt)}}function Ua(w,F,Z,G,$,Ct){Y!==null&&$.isNodeMaterial&&Y.setObject(w,$),w.onBeforeRender(O,F,Z,G,$,Ct),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(O,F,Z,G,w,Ct),$.transparent===!0&&$.side===_i&&$.forceSinglePass===!1?($.side=gi,$.needsUpdate=!0,O.renderBufferDirect(Z,F,G,$,w,Ct),$.side=Bn,$.needsUpdate=!0,O.renderBufferDirect(Z,F,G,$,w,Ct),$.side=_i):O.renderBufferDirect(Z,F,G,$,w,Ct),w.onAfterRender(O,F,Z,G,$,Ct)}function Oa(w){let F=0;for(let Z of w)Z.texture!==null&&F++;return F}function qn(w,F,Z){F.isScene!==!0&&(F=ni);let G=qt.get(w),$=P.state.lights,Ct=P.state.shadowsArray,zt=$.state.version,Tt=ot.getParameters(w,$.state,Ct,F,Z,P.state.lightProbeGridArray),Ot=ot.getProgramCacheKey(Tt),Wt=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;let ee=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=I.get(w.envMap||G.environment,ee),G.envMapRotation=G.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",ye),Wt=new Map,G.programs=Wt,G.programVariants=new Map);let he=Wt.get(Ot);if(he!==void 0){if(G.currentProgram===he&&G.lightsStateVersion===zt)return ka(w,Tt),he}else Tt.uniforms=ot.getUniforms(w),Y!==null&&w.isNodeMaterial&&Y.build(w,Z,Tt),w.onBeforeCompile(Tt,O),he=ot.acquireProgram(Tt,Ot),Wt.set(Ot,he),G.uniforms=Tt.uniforms;let Gt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Gt.clippingPlanes=st.uniform),ka(w,Tt),G.needsLights=Mc(w),G.lightsStateVersion=zt,G.needsLights&&(Gt.ambientLightColor.value=$.state.ambient,Gt.lightProbe.value=$.state.probe,Gt.sunLights.value=$.state.sun,Gt.sunLightShadows.value=$.state.sunShadow,Gt.directionalLights.value=$.state.directional,Gt.directionalLightShadows.value=$.state.directionalShadow,Gt.spotLights.value=$.state.spot,Gt.spotLightShadows.value=$.state.spotShadow,Gt.rectAreaLights.value=$.state.rectArea,Gt.ltc_1.value=$.state.rectAreaLTC1,Gt.ltc_2.value=$.state.rectAreaLTC2,Gt.pointLights.value=$.state.point,Gt.pointLightShadows.value=$.state.pointShadow,Gt.hemisphereLights.value=$.state.hemi,Gt.sunShadowMatrix.value=$.state.sunShadowMatrix,Gt.sunShadowCascade.value=$.state.sunShadowCascade,Gt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Gt.spotLightMatrix.value=$.state.spotLightMatrix,Gt.spotLightMap.value=$.state.spotLightMap,Gt.pointShadowMatrix.value=$.state.pointShadowMatrix),G.numLightProbeGrids=Oa(P.state.lightProbeGridArray),G.currentProgram=he,G.uniformsList=null,he}function or(w,F,Z,G,$){let Ct=qt.get(w),zt=Ct.currentProgram.id+","+G+","+$,Tt=Ct.programVariants.get(zt);return Tt===void 0?(Tt=qn(w,F,Z),Ct.programVariants.set(zt,Tt)):(Ct.currentProgram=Tt,Ct.uniformsList=null,Ct.outputColorSpace=G,Ct.toneMapping=$),Tt}function Fa(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=Ys.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function ka(w,F){let Z=qt.get(w);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function vc(w,F,Z,G,$){F.isScene!==!0&&(F=ni),Kt.resetTextureUnits();let Ct=F.fog,zt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,Tt=ft===null?O.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:me.workingColorSpace,Ot=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Wt=I.get(G.envMap||zt,Ot),ee=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,he=!!Z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Gt=!!Z.morphAttributes.position,le=!!Z.morphAttributes.normal,b=!!Z.morphAttributes.color,_=rn;G.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(_=O.toneMapping);let T=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,A=T!==void 0?T.length:0,L=qt.get(G),J=P.state.lights;if(De===!0&&(ii===!0||w!==lt)){let ct=w===lt&&G.id===W;st.setState(G,w,ct)}let H=!1,j=!1;G.version===L.__version?L.needsLights&&L.lightsStateVersion!==J.state.version||$.isBatchedMesh&&L.batching===!1||!$.isBatchedMesh&&L.batching===!0||$.isBatchedMesh&&L.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&L.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&L.instancing===!1||!$.isInstancedMesh&&L.instancing===!0||$.isSkinnedMesh&&L.skinning===!1||!$.isSkinnedMesh&&L.skinning===!0||$.isInstancedMesh&&L.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&L.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&L.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&L.instancingMorph===!1&&$.morphTexture!==null||L.envMap!==Wt||G.fog===!0&&L.fog!==Ct||L.numClippingPlanes!==void 0&&(L.numClippingPlanes!==st.numPlanes||L.numIntersection!==st.numIntersection)||L.vertexAlphas!==ee||L.vertexTangents!==he||L.morphTargets!==Gt||L.morphNormals!==le||L.morphColors!==b||L.morphTargetsCount!==A||L.numLightProbeGrids!==Oa(P.state.lightProbeGridArray)?H=!0:(L.outputColorSpace!==Tt||L.toneMapping!==_)&&(j=!0):(H=!0,L.__version=G.version);let at=L.currentProgram;(H===!0||j===!0)&&(at=j===!0?or(G,F,$,Tt,_):qn(G,F,$),Y&&G.isNodeMaterial&&Y.onUpdateProgram(G,at,L));let bt=!1,_t=!1,kt=!1,ht=at.getUniforms(),pt=L.uniforms;if(It.useProgram(at.program)&&(bt=!0,_t=!0,kt=!0),G.id!==W&&(W=G.id,_t=!0),bt||lt!==w){It.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ht.setValue(z,"projectionMatrix",w.projectionMatrix),ht.setValue(z,"viewMatrix",w.matrixWorldInverse);let xt=ht.map.cameraPosition;xt!==void 0&&xt.setValue(z,Ni.setFromMatrixPosition(w.matrixWorld)),Te.logarithmicDepthBuffer&&ht.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ht.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),lt!==w&&(lt=w,_t=!0,kt=!0)}if(L.needsLights&&(J.state.sunShadowMap.length>0&&ht.setValue(z,"sunShadowMap",J.state.sunShadowMap,Kt),J.state.directionalShadowMap.length>0&&ht.setValue(z,"directionalShadowMap",J.state.directionalShadowMap,Kt),J.state.spotShadowMap.length>0&&ht.setValue(z,"spotShadowMap",J.state.spotShadowMap,Kt),J.state.pointShadowMap.length>0&&ht.setValue(z,"pointShadowMap",J.state.pointShadowMap,Kt)),$.isSkinnedMesh){ht.setOptional(z,$,"bindMatrix"),ht.setOptional(z,$,"bindMatrixInverse");let ct=$.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),ht.setValue(z,"boneTexture",ct.boneTexture,Kt))}$.isBatchedMesh&&(ht.setOptional(z,$,"batchingTexture"),ht.setValue(z,"batchingTexture",$._matricesTexture,Kt),ht.setOptional(z,$,"batchingIdTexture"),ht.setValue(z,"batchingIdTexture",$._indirectTexture,Kt),ht.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&ht.setValue(z,"batchingColorTexture",$._colorsTexture,Kt));let yt=Z.morphAttributes;if((yt.position!==void 0||yt.normal!==void 0||yt.color!==void 0)&&rt.update($,Z,at),(_t||L.receiveShadow!==$.receiveShadow)&&(L.receiveShadow=$.receiveShadow,ht.setValue(z,"receiveShadow",$.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(pt.envMapIntensity.value=F.environmentIntensity),pt.dfgLUT!==void 0&&(pt.dfgLUT.value=Kx()),_t){if(ht.setValue(z,"toneMappingExposure",O.toneMappingExposure),L.needsLights&&bc(pt,kt),Ct&&G.fog===!0&&Mt.refreshFogUniforms(pt,Ct),Mt.refreshMaterialUniforms(pt,G,Ut,jt,P.state.transmissionRenderTarget[w.id]),L.needsLights&&L.numLightProbeGrids>0){let ct=v,xt=0;for(let vt of P.state.lightProbeGridArray)vt.texture!==null&&(ct.textures[xt]=vt.texture,ct.min[xt]=vt.boundingBox.min,ct.max[xt]=vt.boundingBox.max,ct.resolution[xt]=vt.resolution,xt++);for(let vt in ct)ct[vt].length=xt;pt.probesSH.value=ct.textures,pt.probesMin.value=ct.min,pt.probesMax.value=ct.max,pt.probesResolution.value=ct.resolution}Ys.upload(z,Fa(L),pt,Kt)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ys.upload(z,Fa(L),pt,Kt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ht.setValue(z,"center",$.center),ht.setValue(z,"modelViewMatrix",$.modelViewMatrix),ht.setValue(z,"normalMatrix",$.normalMatrix),ht.setValue(z,"modelMatrix",$.matrixWorld),G.uniformsGroups!==void 0){let ct=G.uniformsGroups;for(let xt=0,vt=ct.length;xt<vt;xt++){let Vt=ct[xt];Xt.update(Vt,at),Xt.bind(Vt,at)}}return at}function bc(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Mc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(w,F,Z){let G=qt.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),qt.get(w.texture).__webglTexture=F,qt.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let Z=qt.get(w);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,Z=0){ft=w,nt=F,K=Z;let G=null,$=!1,Ct=!1;if(w){let Tt=qt.get(w);if(Tt.__useDefaultFramebuffer!==void 0){It.bindFramebuffer(z.FRAMEBUFFER,Tt.__webglFramebuffer),ut.copy(w.viewport),Ft.copy(w.scissor),Jt=w.scissorTest,It.viewport(ut),It.scissor(Ft),It.setScissorTest(Jt),W=-1;return}else if(Tt.__webglFramebuffer===void 0)Kt.setupRenderTarget(w);else if(Tt.__hasExternalTextures)Kt.rebindTextures(w,qt.get(w.texture).__webglTexture,qt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ee=w.depthTexture;if(Tt.__boundDepthTexture!==ee){if(ee!==null&&qt.has(ee)&&(w.width!==ee.image.width||w.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Kt.setupDepthRenderbuffer(w)}}let Ot=w.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Ct=!0);let Wt=qt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Wt[F])?G=Wt[F][Z]:G=Wt[F],$=!0):w.samples>0&&Kt.useMultisampledRTT(w)===!1?G=qt.get(w).__webglMultisampledFramebuffer:Array.isArray(Wt)?G=Wt[Z]:G=Wt,ut.copy(w.viewport),Ft.copy(w.scissor),Jt=w.scissorTest}else ut.copy(Zt).multiplyScalar(Ut).floor(),Ft.copy(ge).multiplyScalar(Ut).floor(),Jt=Me;if(Z!==0&&(G=et),It.bindFramebuffer(z.FRAMEBUFFER,G)&&It.drawBuffers(w,G),It.viewport(ut),It.scissor(Ft),It.setScissorTest(Jt),$){let Tt=qt.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,Tt.__webglTexture,Z)}else if(Ct){let Tt=F;for(let Ot=0;Ot<w.textures.length;Ot++){let Wt=qt.get(w.textures[Ot]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ot,Wt.__webglTexture,Z,Tt)}}else if(w!==null&&Z!==0){let Tt=qt.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Tt.__webglTexture,Z)}W=-1};function fs(w){let F=qt.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=Te.textureFormatReadable(w.format),F.__typeReadable=Te.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,Z,G,$,Ct,zt,Tt=0){if(!(w&&w.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=qt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zt!==void 0&&(Ot=Ot[zt],Array.isArray(Ot)&&(Ot=Ot[0])),Ot){It.bindFramebuffer(z.FRAMEBUFFER,Ot);try{let Wt=w.textures[Tt],ee=Wt.format,he=Wt.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Tt);let Gt=fs(Wt);if(Gt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-G&&Z>=0&&Z<=w.height-$&&z.readPixels(F,Z,G,$,mt.convert(ee),mt.convert(he),Ct)}finally{let Wt=ft!==null?qt.get(ft).__webglFramebuffer:null;It.bindFramebuffer(z.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(w,F,Z,G,$,Ct,zt,Tt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=qt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zt!==void 0&&(Ot=Ot[zt],Array.isArray(Ot)&&(Ot=Ot[0])),Ot)if(F>=0&&F<=w.width-G&&Z>=0&&Z<=w.height-$){It.bindFramebuffer(z.FRAMEBUFFER,Ot);let Wt=w.textures[Tt],ee=Wt.format,he=Wt.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Tt);let Gt=fs(Wt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,le),z.bufferData(z.PIXEL_PACK_BUFFER,Ct.byteLength,z.STREAM_READ),z.readPixels(F,Z,G,$,mt.convert(ee),mt.convert(he),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let b=ft!==null?qt.get(ft).__webglFramebuffer:null;It.bindFramebuffer(z.FRAMEBUFFER,b);let _=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await hf(z,_,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,le),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ct),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(le),z.deleteSync(_),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,Z=0){let G=Math.pow(2,-Z),$=Math.floor(w.image.width*G),Ct=Math.floor(w.image.height*G),zt=F!==null?F.x:0,Tt=F!==null?F.y:0;Kt.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,Z,0,0,zt,Tt,$,Ct),It.unbindTexture()},this.copyTextureToTexture=function(w,F,Z=null,G=null,$=0,Ct=0){let zt,Tt,Ot,Wt,ee,he,Gt,le,b,_=w.isCompressedTexture?w.mipmaps[Ct]:w.image;if(Z!==null)zt=Z.max.x-Z.min.x,Tt=Z.max.y-Z.min.y,Ot=Z.isBox3?Z.max.z-Z.min.z:1,Wt=Z.min.x,ee=Z.min.y,he=Z.isBox3?Z.min.z:0;else{let ht=Math.pow(2,-$);zt=Math.floor(_.width*ht),Tt=Math.floor(_.height*ht),w.isDataArrayTexture?Ot=_.depth:w.isData3DTexture?Ot=Math.floor(_.depth*ht):Ot=1,Wt=0,ee=0,he=0}G!==null?(Gt=G.x,le=G.y,b=G.z):(Gt=0,le=0,b=0);let T=mt.convert(F.format),A=mt.convert(F.type),L;F.isData3DTexture?(Kt.setTexture3D(F,0),L=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Kt.setTexture2DArray(F,0),L=z.TEXTURE_2D_ARRAY):(Kt.setTexture2D(F,0),L=z.TEXTURE_2D),It.activeTexture(z.TEXTURE0),It.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),It.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),It.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);let J=It.getParameter(z.UNPACK_ROW_LENGTH),H=It.getParameter(z.UNPACK_IMAGE_HEIGHT),j=It.getParameter(z.UNPACK_SKIP_PIXELS),at=It.getParameter(z.UNPACK_SKIP_ROWS),bt=It.getParameter(z.UNPACK_SKIP_IMAGES);It.pixelStorei(z.UNPACK_ROW_LENGTH,_.width),It.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_.height),It.pixelStorei(z.UNPACK_SKIP_PIXELS,Wt),It.pixelStorei(z.UNPACK_SKIP_ROWS,ee),It.pixelStorei(z.UNPACK_SKIP_IMAGES,he);let _t=w.isDataArrayTexture||w.isData3DTexture,kt=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let ht=qt.get(w),pt=qt.get(F),yt=qt.get(ht.__renderTarget),ct=qt.get(pt.__renderTarget);It.bindFramebuffer(z.READ_FRAMEBUFFER,yt.__webglFramebuffer),It.bindFramebuffer(z.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let xt=0;xt<Ot;xt++)_t&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qt.get(w).__webglTexture,$,he+xt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qt.get(F).__webglTexture,Ct,b+xt)),z.blitFramebuffer(Wt,ee,Wt+zt,ee+Tt,Gt,le,Gt+zt,le+Tt,z.DEPTH_BUFFER_BIT,z.NEAREST);It.bindFramebuffer(z.READ_FRAMEBUFFER,null),It.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||qt.has(w)){let ht=qt.get(w),pt=qt.get(F);It.bindFramebuffer(z.READ_FRAMEBUFFER,N),It.bindFramebuffer(z.DRAW_FRAMEBUFFER,q);for(let yt=0;yt<Ot;yt++)_t?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ht.__webglTexture,$,he+yt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ht.__webglTexture,$),kt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,pt.__webglTexture,Ct,b+yt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,pt.__webglTexture,Ct),$!==0?z.blitFramebuffer(Wt,ee,Wt+zt,ee+Tt,Gt,le,Gt+zt,le+Tt,z.COLOR_BUFFER_BIT,z.NEAREST):kt?z.copyTexSubImage3D(L,Ct,Gt,le,b+yt,Wt,ee,zt,Tt):z.copyTexSubImage2D(L,Ct,Gt,le,Wt,ee,zt,Tt);It.bindFramebuffer(z.READ_FRAMEBUFFER,null),It.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else kt?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(L,Ct,Gt,le,b,zt,Tt,Ot,T,A,_.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(L,Ct,Gt,le,b,zt,Tt,Ot,T,_.data):z.texSubImage3D(L,Ct,Gt,le,b,zt,Tt,Ot,T,A,_):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ct,Gt,le,zt,Tt,T,A,_.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ct,Gt,le,_.width,_.height,T,_.data):z.texSubImage2D(z.TEXTURE_2D,Ct,Gt,le,zt,Tt,T,A,_);It.pixelStorei(z.UNPACK_ROW_LENGTH,J),It.pixelStorei(z.UNPACK_IMAGE_HEIGHT,H),It.pixelStorei(z.UNPACK_SKIP_PIXELS,j),It.pixelStorei(z.UNPACK_SKIP_ROWS,at),It.pixelStorei(z.UNPACK_SKIP_IMAGES,bt),Ct===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&z.generateMipmap(L),It.unbindTexture()},this.initRenderTarget=function(w){qt.get(w).__webglFramebuffer===void 0&&Kt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Kt.setTextureCube(w,0):w.isData3DTexture?Kt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Kt.setTexture2DArray(w,0):Kt.setTexture2D(w,0),It.unbindTexture()},this.resetState=function(){nt=0,K=0,ft=null,It.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var Jf={type:"change"},nd={type:"start"},Qf={type:"end"},$l=new In,Kf=new Ri,tv=Math.cos(70*la.DEG2RAD),Xe=new U,Si=2*Math.PI,xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},id=1e-6,ql=class extends Qr{constructor(t,e=null){super(t,e),this.state=xe.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Ci,this._lastTargetPosition=new U,this._quat=new Ci().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ws,this._sphericalDelta=new Ws,this._scale=1,this._panOffset=new U,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new U,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iv.bind(this),this._onPointerDown=ev.bind(this),this._onPointerUp=nv.bind(this),this._onContextMenu=hv.bind(this),this._onMouseWheel=av.bind(this),this._onKeyDown=ov.bind(this),this._onTouchStart=lv.bind(this),this._onTouchMove=cv.bind(this),this._onMouseDown=sv.bind(this),this._onMouseMove=rv.bind(this),this._interceptControlDown=dv.bind(this),this._interceptControlUp=uv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=xe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jf),this.update(),this.state=xe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Xe.copy(e).sub(this.target),Xe.applyQuaternion(this._quat),this._spherical.setFromVector3(Xe),this.autoRotate&&this.state===xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Si:i>Math.PI&&(i-=Si),s<-Math.PI?s+=Si:s>Math.PI&&(s-=Si),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Xe.setFromSpherical(this._spherical),Xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Xe.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):($l.origin.copy(this.object.position),$l.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($l.direction))<tv?this.object.lookAt(this.target):(Kf.setFromNormalAndCoplanarPoint(this.object.up,this.target),$l.intersectPlane(Kf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>id||this._lastTargetPosition.distanceToSquared(this.target)>id?(this.dispatchEvent(Jf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Si/60*this.autoRotateSpeed*t:Si/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Xe.setFromMatrixColumn(e,0),Xe.multiplyScalar(-t),this._panOffset.add(Xe)}_panUp(t,e){this.screenSpacePanning===!0?Xe.setFromMatrixColumn(e,1):(Xe.setFromMatrixColumn(e,0),Xe.crossVectors(this.object.up,Xe)),Xe.multiplyScalar(t),this._panOffset.add(Xe)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Xe.copy(s).sub(this.target);let r=Xe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Si*this._rotateDelta.x/e.clientHeight),this._rotateUp(Si*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Si*this._rotateDelta.x/e.clientHeight),this._rotateUp(Si*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function ev(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function iv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function nv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qf),this.state=xe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function sv(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=xe.DOLLY;break;case ki.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xe.ROTATE}break;case ki.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xe.PAN}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(nd)}function rv(n){switch(this.state){case xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function av(n){this.enabled===!1||this.enableZoom===!1||this.state!==xe.NONE||(n.preventDefault(),this.dispatchEvent(nd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Qf))}function ov(n){this.enabled!==!1&&this._handleKeyDown(n)}function lv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ji.ROTATE:if(this.enableRotate===!1){this.state=xe.NONE;break}this._handleTouchStartRotate(n),this.state=xe.TOUCH_ROTATE;break;case ji.PAN:if(this.enablePan===!1){this.state=xe.NONE;break}this._handleTouchStartPan(n),this.state=xe.TOUCH_PAN;break;default:this.state=xe.NONE}break;case 2:switch(this.touches.TWO){case ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=xe.TOUCH_DOLLY_PAN;break;case ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=xe.TOUCH_DOLLY_ROTATE;break;default:this.state=xe.NONE}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(nd)}function cv(n){switch(this._trackPointer(n),this.state){case xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=xe.NONE}}function hv(n){this.enabled!==!1&&n.preventDefault()}function dv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var tp=new pi,jl=new U,Vn=class extends Zr{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Ae(t,3)),this.setAttribute("uv",new Ae(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new kn(e,6,1);return this.setAttribute("instanceStart",new qi(i,3,0)),this.setAttribute("instanceEnd",new qi(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new kn(e,6,1);return this.setAttribute("instanceColorStart",new qi(i,3,0)),this.setAttribute("instanceColorEnd",new qi(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Gr(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),tp.setFromBufferAttribute(e),this.boundingBox.union(tp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)jl.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(jl)),jl.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(jl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Dt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Lt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};yi.line={uniforms:ca.merge([Dt.common,Dt.fog,Dt.line]),vertexShader:`
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
		`};var Js=class extends Fi{constructor(t){super({type:"LineMaterial",uniforms:ca.clone(yi.line.uniforms),vertexShader:yi.line.vertexShader,fragmentShader:yi.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var sd=new be,ep=new U,ip=new U,Ke=new be,Qe=new be,on=new be,rd=new U,ad=new we,ti=new Kr,np=new U,Yl=new pi,Zl=new mi,ln=new be,cn,os;function sp(n,t,e){return ln.set(0,0,-t,1).applyMatrix4(n.projectionMatrix),ln.multiplyScalar(1/ln.w),ln.x=os/e.width,ln.y=os/e.height,ln.applyMatrix4(n.projectionMatrixInverse),ln.multiplyScalar(1/ln.w),Math.abs(Math.max(ln.x,ln.y))}function fv(n,t){let e=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,a=Math.min(i.instanceCount,s.count);for(let o=0,l=a;o<l;o++){ti.start.fromBufferAttribute(s,o),ti.end.fromBufferAttribute(r,o),ti.applyMatrix4(e);let c=new U,h=new U;cn.distanceSqToSegment(ti.start,ti.end,h,c),h.distanceTo(c)<os*.5&&t.push({point:h,pointOnLine:c,distance:cn.origin.distanceTo(h),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function pv(n,t,e){let i=t.projectionMatrix,r=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-t.near;cn.at(1,on),on.w=1,on.applyMatrix4(t.matrixWorldInverse),on.applyMatrix4(i),on.multiplyScalar(1/on.w),on.x*=r.x/2,on.y*=r.y/2,on.z=0,rd.copy(on),ad.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,f=h;d<f;d++){if(Ke.fromBufferAttribute(l,d),Qe.fromBufferAttribute(c,d),Ke.w=1,Qe.w=1,Ke.applyMatrix4(ad),Qe.applyMatrix4(ad),Ke.z>u&&Qe.z>u)continue;if(Ke.z>u){let E=Ke.z-Qe.z,v=(Ke.z-u)/E;Ke.lerp(Qe,v)}else if(Qe.z>u){let E=Qe.z-Ke.z,v=(Qe.z-u)/E;Qe.lerp(Ke,v)}Ke.applyMatrix4(i),Qe.applyMatrix4(i),Ke.multiplyScalar(1/Ke.w),Qe.multiplyScalar(1/Qe.w),Ke.x*=r.x/2,Ke.y*=r.y/2,Qe.x*=r.x/2,Qe.y*=r.y/2,ti.start.copy(Ke),ti.start.z=0,ti.end.copy(Qe),ti.end.z=0;let M=ti.closestPointToPointParameter(rd,!0);ti.at(M,np);let p=la.lerp(Ke.z,Qe.z,M),m=p>=-1&&p<=1,y=rd.distanceTo(np)<os*.5;if(m&&y){ti.start.fromBufferAttribute(l,d),ti.end.fromBufferAttribute(c,d),ti.start.applyMatrix4(a),ti.end.applyMatrix4(a);let E=new U,v=new U;cn.distanceSqToSegment(ti.start,ti.end,v,E),e.push({point:v,pointOnLine:E,distance:cn.origin.distanceTo(v),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}var Ks=class extends He{constructor(t=new Vn,e=new Js({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)ep.fromBufferAttribute(e,a),ip.fromBufferAttribute(i,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+ep.distanceTo(ip);let r=new kn(s,2,1);return t.setAttribute("instanceDistanceStart",new qi(r,1,0)),t.setAttribute("instanceDistanceEnd",new qi(r,1,1)),this}raycast(t,e){let i=this.material.worldUnits,s=t.camera;if(s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;cn=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;os=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Zl.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=os*.5;else{let u=Math.max(s.near,Zl.distanceToPoint(cn.origin));c=sp(s,u,l.resolution)}if(Zl.radius+=c,cn.intersectsSphere(Zl)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Yl.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=os*.5;else{let u=Math.max(s.near,Yl.distanceToPoint(cn.origin));h=sp(s,u,l.resolution)}Yl.expandByScalar(h),cn.intersectsBox(Yl)!==!1&&(i?fv(this,e):pv(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(sd),this.material.uniforms.resolution.value.set(sd.z,sd.w))}};var cd=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],od=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],pa=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],rp=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],mv=n=>Math.hypot(n[0],n[1],n[2]),ld=n=>{let t=mv(n)||1;return[n[0]/t,n[1]/t,n[2]/t]},Jl={XY:{o:[0,0,0],x:[1,0,0],y:[0,1,0],n:[0,0,1]},XZ:{o:[0,0,0],x:[1,0,0],y:[0,0,1],n:[0,-1,0]},YZ:{o:[0,0,0],x:[0,1,0],y:[0,0,1],n:[1,0,0]}};function hd(n,t){n=ld(n);let e,i;return Math.abs(n[2])>.9?(e=ld(cd([1,0,0],od(n,n[0]))),i=rp(n,e)):(i=ld(cd([0,0,1],od(n,n[2]))),e=rp(i,n)),{o:od(n,pa(t,n)),x:e,y:i,n}}var ap=(n,t)=>{let e=cd(t,n.o);return[pa(e,n.x),pa(e,n.y)]};var op=["#b9c3cf","#d9b38c","#9fc7a8","#c9a3c9","#e0c56e","#8fb6d9","#d99a9a","#a8b38f"],dd=n=>op[n%op.length],Kl=2063072,lp=16747039,Ql=class{constructor(t){this.host=t,this.renderer=new Gl({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setClearColor(15330802),t.appendChild(this.renderer.domElement),this.canvas=this.renderer.domElement,this.canvas.style.touchAction="none",this.scene=new Tr,this.persp=new di(35,1,.1,1e5),this.persp.up.set(0,0,1),this.persp.position.set(160,-220,150),this.ortho=new es(-1,1,1,-1,-1e5,1e5),this.camera=this.persp,this.controls=new ql(this.persp,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.15,this.controls.zoomToCursor=!0,this.controls.screenSpacePanning=!0,this.controls.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.controls.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.PAN,RIGHT:ki.PAN};let e=new qr(16777215,8425632,1.6);this.scene.add(e),this.sun=new Yr(16777215,1.5),this.scene.add(this.sun),this.scene.add(this.sun.target),this.lineMats=[],this.world=new ui,this.scene.add(this.world),this.buildGrid(),this.bodiesGroup=new ui,this.overlay=new ui,this.planesGroup=new ui,this.world.add(this.bodiesGroup,this.overlay,this.planesGroup),this.buildPlanes(),this.bodies=new Map,this.meshCache=new Map,this.selection={faces:[],edges:[],bodies:[]},this.preselect=null,this.sketchMode=null,this.dirty=!0,this.tapHandlers=[],this.hoverHandler=null,this.controls.addEventListener("change",()=>{this.dirty=!0}),this.setupTap(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize();let i=()=>{(this.camera===this.persp&&this.controls.update()||this.dirty)&&this.render(),requestAnimationFrame(i)};requestAnimationFrame(i)}lineMat(t,e,i={}){let s=new Js({color:t,linewidth:e,worldUnits:!1,...i});return s.resolution.set(this.w||1,this.h||1),this.lineMats.push(s),s}buildGrid(){let t=new ui,e=(s,r,a,o)=>{let l=[];for(let h=-r;h<=r+1e-9;h+=s)l.push(h,-r,0,h,r,0),l.push(-r,h,0,r,h,0);let c=new Ve;return c.setAttribute("position",new Ae(l,3)),new ks(c,new Nn({color:a,transparent:!0,opacity:o,depthWrite:!1}))};t.add(e(10,300,8030102,.22)),t.add(e(50,300,5661551,.35));let i=new Ve;i.setAttribute("position",new Ae([0,0,0,60,0,0,0,0,0,0,60,0,0,0,0,0,0,60],3)),i.setAttribute("color",new Ae([.85,.2,.2,.85,.2,.2,.2,.65,.25,.2,.65,.25,.2,.35,.9,.2,.35,.9],3)),t.add(new ks(i,new Nn({vertexColors:!0,depthTest:!1,transparent:!0}))),t.renderOrder=-1,this.grid=t,this.world.add(t)}buildPlanes(){this.planeMeshes={};let t={XY:3832789,XZ:3847019,YZ:13980474};for(let[e,i]of Object.entries(Jl)){let r=new Ve,a=(c,h)=>[i.x[0]*c+i.y[0]*h,i.x[1]*c+i.y[1]*h,i.x[2]*c+i.y[2]*h];r.setAttribute("position",new Ae([...a(0,0),...a(40,0),...a(40,40),...a(0,40)],3)),r.setIndex([0,1,2,0,2,3]);let o=new He(r,new Ln({color:t[e],transparent:!0,opacity:.16,side:_i,depthWrite:!1}));o.userData={plane:e};let l=new Pr(new Ve().setAttribute("position",new Ae([...a(0,0),...a(40,0),...a(40,40),...a(0,40)],3)),new Nn({color:t[e]}));o.add(l),this.planesGroup.add(o),this.planeMeshes[e]=o}this.planesGroup.visible=!1}setPlanesVisible(t,e=null){this.planesGroup.visible=t;for(let[i,s]of Object.entries(this.planeMeshes))s.material.opacity=e===i?.42:.16;this.dirty=!0}resize(){let t=this.host.getBoundingClientRect();this.w=Math.max(1,t.width),this.h=Math.max(1,t.height),this.renderer.setSize(this.w,this.h,!1),this.canvas.style.width=this.w+"px",this.canvas.style.height=this.h+"px",this.persp.aspect=this.w/this.h,this.persp.updateProjectionMatrix();for(let e of this.lineMats)e.resolution.set(this.w,this.h);this.sketchMode&&this.applySketchView(),this.dirty=!0,this.onResize&&this.onResize()}render(){this.dirty=!1;let t=this.camera;this.sun.position.copy(t.position).add(new U(0,0,1).multiplyScalar(this.sceneRadius()*.5)),this.sun.target.position.copy(this.controls.target),this.renderer.render(this.scene,t)}sceneRadius(){let t=this.bodiesBox();return t.isEmpty()?100:t.getBoundingSphere(new mi).radius||100}bodiesBox(){let t=new pi;for(let e of this.bodies.values())e.visible&&e.mesh&&t.expandByObject(e.mesh);return t}ingest(t){for(let e of t)e.mesh&&!this.meshCache.has(e.key)&&this.meshCache.set(e.key,this.buildGeom(e.mesh))}setPickBodies(t){if(!t){this.pickSet=null,this.refreshSelection();return}this.pickSet=new Map;for(let e of t){let i=this.meshCache.get(e.key);if(!i)continue;let s=new He(i.geom);s.userData={body:e.id},this.pickSet.set(e.id,{id:e.id,key:e.key,data:i.data,mesh:s,visible:e.visible!==!1})}this.refreshSelection()}get pickBodies(){return this.pickSet||this.bodies}gc(){let t=new Set([...this.bodies.values()].map(e=>e.key));if(this.pickSet)for(let e of this.pickSet.values())t.add(e.key);for(let[e,i]of this.meshCache)t.has(e)||(i.geom.dispose(),i.lineGeom.dispose(),this.meshCache.delete(e))}setBodies(t){let e=new Set;t.forEach(i=>{e.add(i.id);let s=this.bodies.get(i.id);s||(s={id:i.id},this.bodies.set(i.id,s));let r=this.meshCache.get(i.key);s.key!==i.key&&r&&(s.mesh&&this.bodiesGroup.remove(s.mesh,s.edges),s.key=i.key,s.data=r.data,s.mesh=new He(r.geom,new Wr({color:i.color,roughness:.55,metalness:.05,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,side:_i})),s.mesh.userData={body:i.id},s.edges=new Ks(r.lineGeom,this.edgeMat||(this.edgeMat=this.lineMat(1910579,1.3))),this.bodiesGroup.add(s.mesh,s.edges)),s.mesh&&(s.mesh.material.color.set(i.color),s.mesh.material.transparent=!!i.ghost,s.mesh.material.opacity=i.ghost?.35:1,s.mesh.material.depthWrite=!i.ghost,s.visible=i.visible!==!1,s.mesh.visible=s.visible,s.edges.visible=s.visible),s.name=i.name});for(let[i,s]of this.bodies)e.has(i)||(s.mesh&&this.bodiesGroup.remove(s.mesh,s.edges),this.bodies.delete(i));this.refreshSelection(),this.dirty=!0}buildGeom(t){let e=new Ve;e.setAttribute("position",new oi(t.vertices,3)),e.setAttribute("normal",new oi(t.normals,3)),e.setIndex(new oi(t.triangles,1)),e.computeBoundingSphere(),e.computeBoundingBox();let i=new Vn;return i.setPositions(t.lines.length?t.lines:new Float32Array(6)),{geom:e,lineGeom:i,data:t}}setSelection(t){this.selection={faces:t.faces||[],edges:t.edges||[],bodies:t.bodies||[]},this.refreshSelection()}setPreselect(t){this.preselect=t,this.refreshSelection()}refreshSelection(){this.selGroup&&(this.overlay.remove(this.selGroup),this.selGroup.traverse(a=>{a.geometry&&a.userData.own&&a.geometry.dispose()}));let t=new ui,e=(a,o)=>new Ln({color:a,transparent:!0,opacity:o,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,side:_i}),i=(a,o,l)=>{let c=this.pickBodies.get(a.body);if(!c||!c.data)return;let h=c.data.faceGroups.find(g=>g.i===a.i);if(!h)return;let u=c.data.triangles.slice(h.start,h.start+h.count),d=new Ve;d.setAttribute("position",c.mesh.geometry.getAttribute("position")),d.setIndex(new oi(u,1));let f=new He(d,e(o,l));f.userData.own=!0,t.add(f)},s=(a,o,l)=>{let c=this.pickBodies.get(a.body);if(!c||!c.data)return;let h=c.data.edgeGroups.find(g=>g.i===a.i);if(!h)return;let u=c.data.lines.slice(h.start*3,(h.start+h.count)*3),d=new Vn;d.setPositions(u);let f=new Ks(d,this.lineMat(o,l,{depthTest:!1,transparent:!0}));f.renderOrder=5,f.userData.own=!0,t.add(f)};for(let a of this.selection.faces)i(a,Kl,.45);for(let a of this.selection.edges)s(a,Kl,4);for(let a of this.selection.bodies){let o=this.pickBodies.get(a);if(o&&o.mesh){let l=new He(o.mesh.geometry,e(Kl,.25));t.add(l)}}let r=this.preselect;r&&(r.kind==="face"&&i(r,lp,.35),r.kind==="edge"&&s(r,lp,4)),this.selGroup=t,this.overlay.add(t),this.dirty=!0}setSketchOverlays(t){this.sketchGroup&&(this.overlay.remove(this.sketchGroup),this.sketchGroup.traverse(i=>i.geometry&&i.geometry.dispose()));let e=new ui;this.regionMeshes=[],this.sketchLines=[];for(let i of t){let s=i.frame,r=(l,c)=>[s.o[0]+s.x[0]*l+s.y[0]*c,s.o[1]+s.x[1]*l+s.y[1]*c,s.o[2]+s.x[2]*l+s.y[2]*c],a=[],o=[];for(let l of i.polylines){let c=l.construction?o:a;for(let h=0;h+1<l.pts.length;h++)c.push(...r(...l.pts[h]),...r(...l.pts[h+1]));i.pickLines&&!l.construction&&l.kind==="line"&&this.sketchLines.push({sketch:i.id,id:l.id,a:r(...l.pts[0]),b:r(...l.pts[l.pts.length-1])}),i.pickLines&&l.construction&&l.kind==="line"&&this.sketchLines.push({sketch:i.id,id:l.id,a:r(...l.pts[0]),b:r(...l.pts[l.pts.length-1])})}for(let[l,c,h]of[[a,2060241,2],[o,13666858,1.2]]){if(!l.length)continue;let u=new Vn;u.setPositions(l);let d=new Ks(u,this.lineMat(c,h,{depthTest:!1,transparent:!0,opacity:.95}));d.renderOrder=3,e.add(d)}i.regions&&i.regions.forEach((l,c)=>{let h=new Vs(l.poly.map(([M,p])=>new Lt(M,p)));for(let M of l.holePolys)h.holes.push(new Qn(M.map(([p,m])=>new Lt(p,m))));let u=new Hr(h),d=u.getAttribute("position");for(let M=0;M<d.count;M++){let p=r(d.getX(M),d.getY(M));d.setXYZ(M,p[0],p[1],p[2])}u.computeBoundingSphere();let f=i.selected&&i.selected.includes(c),g=new He(u,new Ln({color:f?Kl:8368362,transparent:!0,opacity:f?.55:.22,side:_i,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));g.renderOrder=2,g.userData={sketch:i.id,region:c},e.add(g),this.regionMeshes.push(g)})}this.sketchGroup=e,this.overlay.add(e),this.dirty=!0}setupTap(){let t=new Map,e=!1;this.canvas.addEventListener("pointerdown",s=>{t.set(s.pointerId,{x:s.clientX,y:s.clientY,t:performance.now()}),t.size>1&&(e=!0)});let i=s=>{let r=t.get(s.pointerId);if(t.delete(s.pointerId),!r)return;let a=e;if(t.size||(e=!1),a||s.type==="pointercancel")return;if(Math.hypot(s.clientX-r.x,s.clientY-r.y)<9&&performance.now()-r.t<600){let l=this.canvas.getBoundingClientRect();for(let c of this.tapHandlers)c(s.clientX-l.left,s.clientY-l.top,s.pointerType)}};this.canvas.addEventListener("pointerup",i),this.canvas.addEventListener("pointercancel",i),this.canvas.addEventListener("pointermove",s=>{if(s.pointerType!=="mouse"||t.size||!this.hoverHandler)return;let r=this.canvas.getBoundingClientRect();this.hoverHandler(s.clientX-r.left,s.clientY-r.top)}),this.canvas.addEventListener("pointerleave",()=>{this.hoverHandler&&this.hoverHandler(null)})}onTap(t){this.tapHandlers.push(t)}ndc(t,e){return new Lt(t/this.w*2-1,-(e/this.h)*2+1)}project(t){let e=new U(t[0],t[1],t[2]).project(this.camera);return[(e.x+1)/2*this.w,(1-e.y)/2*this.h,e.z]}pick(t,e,i,s=14){let r=new Jr;r.setFromCamera(this.ndc(t,e),this.camera);let a=[...this.pickBodies.values()].filter(f=>f.visible&&f.mesh).map(f=>f.mesh),l=r.intersectObjects(a,!1)[0],c=this.camera===this.persp?this.camera.position:null,h=f=>c?c.distanceTo(f):-new U().copy(f).applyMatrix4(this.camera.matrixWorldInverse).z,u=l?h(l.point):1/0,d=this.sceneRadius()*.015+.1;if(i.sketchLine&&this.sketchLines&&this.sketchLines.length){let f=null,g=s;for(let M of this.sketchLines){let p=this.project(M.a),m=this.project(M.b),y=cp([t,e],p,m);y<g&&(g=y,f=M)}if(f)return{kind:"sketchLine",sketch:f.sketch,id:f.id}}if(i.region&&this.regionMeshes&&this.regionMeshes.length){let f=r.intersectObjects(this.regionMeshes,!1);if(f.length)return{kind:"region",sketch:f[0].object.userData.sketch,region:f[0].object.userData.region,point:f[0].point.toArray()}}if(i.edge){let f=null,g=s;for(let M of this.pickBodies.values()){if(!M.visible||!M.data)continue;let p=M.data.lines;for(let m of M.data.edgeGroups)for(let y=m.start;y<m.start+m.count;y+=2){let E=[p[y*3],p[y*3+1],p[y*3+2]],v=[p[y*3+3],p[y*3+4],p[y*3+5]],C=this.project(E),P=this.project(v),x=cp([t,e],C,P);if(x<g){let R=new U;if(r.ray.distanceSqToSegment(new U(...E),new U(...v),null,R),h(R)>u+d)continue;g=x,f={kind:"edge",body:M.id,i:m.i}}}}if(f)return f}if(l&&(i.face||i.body)){let f=l.object.userData.body;if(i.face){let g=this.pickBodies.get(f),M=l.faceIndex*3,p=g.data.faceGroups.find(m=>M>=m.start&&M<m.start+m.count);if(p){let m=l.face?l.face.normal.clone().transformDirection(l.object.matrixWorld).toArray():null;return{kind:"face",body:f,i:p.i,point:l.point.toArray(),normal:m}}}if(i.body)return{kind:"body",body:f}}if(i.plane&&this.planesGroup.visible){let f=r.intersectObjects(Object.values(this.planeMeshes),!1);if(f.length)return{kind:"plane",plane:f[0].object.userData.plane}}return null}fit(t=!0){let e=this.bodiesBox(),i=new U(0,0,0),s=80;if(!e.isEmpty()){let o=e.getBoundingSphere(new mi);i=o.center,s=Math.max(o.radius,5)}let r=this.persp.position.clone().sub(this.controls.target).normalize(),a=s/Math.sin(this.persp.fov*Math.PI/360)*1.15;this.animateTo(i.clone().add(r.multiplyScalar(a)),i,t)}view(t){let e={top:[0,0,1],bottom:[0,0,-1],front:[0,-1,0],back:[0,1,0],right:[1,0,0],left:[-1,0,0],iso:[1,-1.25,.9]},i=new U(...e[t]).normalize(),s=this.bodiesBox(),r=new U,a=80;if(!s.isEmpty()){let l=s.getBoundingSphere(new mi);r=l.center,a=Math.max(l.radius,5)}let o=a/Math.sin(this.persp.fov*Math.PI/360)*1.15;t==="top"||t==="bottom"?this.persp.up.set(0,1,0):this.persp.up.set(0,0,1),this.animateTo(r.clone().add(i.multiplyScalar(o)),r,!0,()=>{this.persp.up.set(0,0,1),this.controls.update()})}animateTo(t,e,i=!0,s){let r=this.persp.position.clone(),a=this.controls.target.clone();if(!i){this.persp.position.copy(t),this.controls.target.copy(e),this.controls.update(),this.dirty=!0,s&&s();return}let o=performance.now(),l=380,c=()=>{let h=Math.min(1,(performance.now()-o)/l),u=h<.5?2*h*h:1-(-2*h+2)**2/2;this.persp.position.lerpVectors(r,t,u),this.controls.target.lerpVectors(a,e,u),this.persp.lookAt(this.controls.target),this.dirty=!0,h<1?requestAnimationFrame(c):(this.controls.update(),s&&s())};c()}enterSketch(t,e){this.sketchMode={frame:t,view:e},this.camera=this.ortho,this.controls.enabled=!1,this.grid.visible=!1,this.applySketchView()}setSketchView(t){this.sketchMode&&(this.sketchMode.view=t,this.applySketchView())}applySketchView(){let{frame:t,view:e}=this.sketchMode,i=this.w/2/e.s,s=this.h/2/e.s,r=[t.o[0]+t.x[0]*e.cx+t.y[0]*e.cy,t.o[1]+t.x[1]*e.cx+t.y[1]*e.cy,t.o[2]+t.x[2]*e.cx+t.y[2]*e.cy],a=5e3;this.ortho.position.set(r[0]+t.n[0]*a,r[1]+t.n[1]*a,r[2]+t.n[2]*a),this.ortho.up.set(t.y[0],t.y[1],t.y[2]),this.ortho.lookAt(r[0],r[1],r[2]),this.ortho.left=-i,this.ortho.right=i,this.ortho.top=s,this.ortho.bottom=-s,this.ortho.near=.1,this.ortho.far=a*2,this.ortho.updateProjectionMatrix(),this.ortho.updateMatrixWorld(),this.dirty=!0}exitSketch(){this.sketchMode=null,this.camera=this.persp,this.controls.enabled=!0,this.grid.visible=this.gridOn!==!1,this.dirty=!0}setGrid(t){this.gridOn=t,this.sketchMode||(this.grid.visible=t),this.dirty=!0}};function gv(n,t,e){let i=e[0]-t[0],s=e[1]-t[1],r=i*i+s*s;return r?Math.max(0,Math.min(1,((n[0]-t[0])*i+(n[1]-t[1])*s)/r)):0}function cp(n,t,e){if(t[2]>1||e[2]>1)return 1/0;let i=gv(n,t,e);return Math.hypot(n[0]-t[0]-i*(e[0]-t[0]),n[1]-t[1]-i*(e[1]-t[1]))}var ud={NoInternalAlignment:0,InternalAlignment:1},tc={Success:0,Converged:1,Failed:2,SuccessfulSolutionInvalid:3},fd={BFGS:0,LevenbergMarquardt:1,DogLeg:2};var _v=["point","line","circle","arc","ellipse","arc_of_ellipse","hyperbola","arc_of_hyperbola","parabola","arc_of_parabola","bspline"];function Qs(n){return n===void 0||n.type==="param"?!1:_v.includes(n.type)}function pd(n){return n===void 0?!1:!Qs(n)}var md=class{get_primitive_or_fail(t){let e=this.get_primitive(t);if(e===void 0)throw new Error(`sketch object ${t} not found`);return e}get_sketch_point(t){let e=this.get_primitive_or_fail(t);if(e.type!=="point")throw new Error(`sketch object ${t} is not a sketch point`);return e}get_sketch_line(t){let e=this.get_primitive_or_fail(t);if(e.type!=="line")throw new Error(`sketch object ${t} is not a sketch line`);return e}get_sketch_circle(t){let e=this.get_primitive_or_fail(t);if(e.type!=="circle")throw new Error(`sketch object ${t} is not a sketch circle`);return e}get_sketch_arc(t){let e=this.get_primitive_or_fail(t);if(e.type!=="arc")throw new Error(`sketch object ${t} is not a sketch arc`);return e}get_constraints(){return this.get_primitives().filter(t=>!Qs(t))}toString(){return this.get_primitives().map(t=>JSON.stringify(t)).join(`
`)}},ma=class extends md{constructor(){super(...arguments),this.index=new Map,this.primitive_ids=[]}has(t){return this.index.has(t)}delete_primitive(t){return this.index.delete(t)}set_primitive(t){this.has(t.id)||this.primitive_ids.push(t.id),this.index.set(t.id,t)}get_primitive(t){return this.index.get(t)}get_primitives(){return Array.from(this.index.values())}get_id_by_index(t){return this.primitive_ids[t-1]}clear(){this.index.clear(),this.primitive_ids=[]}counter(){return this.primitive_ids.length}};async function yv(n={}){var t=n,e=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,s=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(s){let{createRequire:b}=await import("node:module");var r=b(import.meta.url)}var a="./this.program",o=import.meta.url,l="",c,h;if(s){var u=r("node:fs");o.startsWith("file:")&&(l=r("node:path").dirname(r("node:url").fileURLToPath(o))+"/"),h=b=>(b=g(b)?new URL(b):b,u.readFileSync(b)),c=async b=>(b=g(b)?new URL(b):b,u.readFileSync(b,void 0)),process.argv.length>1&&(a=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2)}else if(e||i){try{l=new URL(".",o).href}catch{}i&&(h=b=>{var _=new XMLHttpRequest;return _.open("GET",b,!1),_.responseType="arraybuffer",_.send(null),new Uint8Array(_.response)}),c=async b=>{if(g(b))return new Promise((T,A)=>{var L=new XMLHttpRequest;L.open("GET",b,!0),L.responseType="arraybuffer",L.onload=()=>{L.status==200||L.status==0&&L.response?T(L.response):A(L.status)},L.onerror=A,L.send(null)});var _=await fetch(b,{credentials:"same-origin"});if(_.ok)return _.arrayBuffer();throw Error(_.status+" : "+_.url)}}console.log.bind(console);var d=console.error.bind(console),f=!1,g=b=>b.startsWith("file://");function M(){var b=t.preRun;for(b&&(typeof b=="function"&&(b=[b]),x.push(...b)),b=x;b.length>0;)b.shift()(t)}function p(){var b=t.postRun;for(b&&(typeof b=="function"&&(b=[b]),P.push(...b)),b=P;b.length>0;)b.shift()(t)}function m(b){throw t.onAbort?.(b),b=`Aborted(${b})`,d(b),f=!0,new WebAssembly.RuntimeError(b+". Build with -sASSERTIONS for more info.")}var y;async function E(b){try{var _=await c(b);return new Uint8Array(_)}catch{}if(h)b=h(b);else throw"both async and sync fetching of the wasm failed";return b}async function v(b,_){try{var T=await E(b);return await WebAssembly.instantiate(T,_)}catch(A){d(`failed to asynchronously prepare wasm: ${A}`),m(A)}}async function C(b){var _=y;if(!g(_)&&!s)try{var T=fetch(_,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(T,b)}catch(A){d(`wasm streaming compile failed: ${A}`),d("falling back to ArrayBuffer instantiation")}return v(_,b)}var P=[],x=[],R=b=>Ot(b),V=()=>Wt(),O,B;class Y{constructor(_){this.L=_-24}init(_,T){B[this.L+16>>2]=0,B[this.L+4>>2]=_,B[this.L+8>>2]=T}}var et=0,N,q=b=>{for(var _="";;){var T=N[b++];if(!T)return _;_+=String.fromCharCode(T)}},nt={},K={},ft={};class W extends Error{constructor(_){super(_),this.name="BindingError"}}var lt=b=>{throw new W(b)};function ut(b,_,T={}){var A=_.name;if(!b)throw new W(`type "${A}" must have a positive integer typeid pointer`);if(K.hasOwnProperty(b)){if(T.sa)return;throw new W(`Cannot register type '${A}' twice`)}K[b]=_,delete ft[b],nt.hasOwnProperty(b)&&(_=nt[b],delete nt[b],_.forEach(L=>L()))}function Ft(b,_,T={}){return ut(b,_,T)}var Jt,it,Pt,Ht,jt,Ut=(b,_,T)=>{switch(_){case 1:return T?A=>O[A]:A=>N[A];case 2:return T?A=>Jt[A>>1]:A=>it[A>>1];case 4:return T?A=>Pt[A>>2]:A=>B[A>>2];case 8:return T?A=>Ht[A>>3]:A=>jt[A>>3];default:throw new TypeError(`invalid integer width (${_}): ${b}`)}},te=b=>{throw new W(b.J.N.K.name+" instance already deleted")},Pe=!1,Zt=()=>{},ge=b=>globalThis.FinalizationRegistry?(Pe=new FinalizationRegistry(_=>{_=_.J,--_.count.value,_.count.value===0&&(_.P?_.U.W(_.P):_.N.K.W(_.L))}),ge=_=>{var T=_.J;return T.P&&Pe.register(_,{J:T},_),_},Zt=_=>{Pe.unregister(_)},ge(b)):(ge=_=>_,b),Me=[];function oe(){}var Le=(b,_)=>Object.defineProperty(_,"name",{value:b}),De={},ii=(b,_,T)=>{if(b[_].V===void 0){var A=b[_];b[_]=function(...L){if(!b[_].V.hasOwnProperty(L.length))throw new W(`Function '${T}' called with an invalid number of arguments (${L.length}) - expects one of (${b[_].V})!`);return b[_].V[L.length].apply(this,L)},b[_].V=[],b[_].V[A.X]=A}},Ee=(b,_)=>{if(t.hasOwnProperty(b))throw new W(`Cannot register public name '${b}' twice`);t[b]=_,t[b].X=void 0},Ni=b=>{b=b.replace(/[^a-zA-Z0-9_]/g,"$");var _=b.charCodeAt(0);return _>=48&&_<=57?`_${b}`:b};function Fe(b,_,T,A,L,J,H,j){this.name=b,this.constructor=_,this.Z=T,this.W=A,this.S=L,this.qa=J,this.ba=H,this.pa=j,this.ua=[]}var ni=(b,_,T)=>{for(;_!==T;){if(!_.ba)throw new W(`Expected null or instance of ${T.name}, got an instance of ${_.name}`);b=_.ba(b),_=_.S}return b},si=b=>{if(b===null)return"null";var _=typeof b;return _==="object"||_==="array"||_==="function"?b.toString():""+b};function xi(b,_){if(_===null){if(this.fa)throw new W(`null is not a valid ${this.name}`);return 0}if(!_.J)throw new W(`Cannot pass "${si(_)}" as a ${this.name}`);if(!_.J.L)throw new W(`Cannot pass deleted object as a pointer of type ${this.name}`);return ni(_.J.L,_.J.N.K,this.K)}function z(b,_){if(_===null){if(this.fa)throw new W(`null is not a valid ${this.name}`);if(this.ea){var T=this.va();return b!==null&&b.push(this.W,T),T}return 0}if(!_||!_.J)throw new W(`Cannot pass "${si(_)}" as a ${this.name}`);if(!_.J.L)throw new W(`Cannot pass deleted object as a pointer of type ${this.name}`);if(!this.da&&_.J.N.da)throw new W(`Cannot convert argument of type ${_.J.U?_.J.U.name:_.J.N.name} to parameter type ${this.name}`);if(T=ni(_.J.L,_.J.N.K,this.K),this.ea){if(_.J.P===void 0)throw new W("Passing raw pointer to smart pointer is illegal");switch(this.xa){case 0:if(_.J.U===this)T=_.J.P;else throw new W(`Cannot convert argument of type ${_.J.U?_.J.U.name:_.J.N.name} to parameter type ${this.name}`);break;case 1:T=_.J.P;break;case 2:if(_.J.U===this)T=_.J.P;else{var A=_.clone();T=this.wa(T,se(()=>A.delete())),b!==null&&b.push(this.W,T)}break;default:throw new W("Unsupported sharing policy")}}return T}function vi(b,_){if(_===null){if(this.fa)throw new W(`null is not a valid ${this.name}`);return 0}if(!_.J)throw new W(`Cannot pass "${si(_)}" as a ${this.name}`);if(!_.J.L)throw new W(`Cannot pass deleted object as a pointer of type ${this.name}`);if(_.J.N.da)throw new W(`Cannot convert argument of type ${_.J.N.name} to parameter type ${this.name}`);return ni(_.J.L,_.J.N.K,this.K)}function Se(b){return this.M(B[b>>2])}var Te=(b,_,T)=>_===T?b:T.S===void 0?null:(b=Te(b,_,T.S),b===null?null:T.pa(b)),It={},Ne=(b,_)=>{if(_===void 0)throw new W("ptr should not be undefined");for(;b.S;)_=b.ba(_),b=b.S;return It[_]};class qt extends Error{constructor(_){super(_),this.name="InternalError"}}var Kt=(b,_)=>{if(!_.N||!_.L)throw new qt("makeClassHandle requires ptr and ptrType");if(!!_.U!=!!_.P)throw new qt("Both smartPtrType and smartPtr must be specified");return _.count={value:1},ge(Object.create(b,{J:{value:_,writable:!0}}))};function I(b,_,T,A,L,J,H,j,at,bt,_t){this.name=b,this.K=_,this.fa=T,this.da=A,this.ea=L,this.ta=J,this.xa=H,this.ka=j,this.va=at,this.wa=bt,this.W=_t,L||_.S!==void 0?this.R=z:(this.R=A?xi:vi,this.O=null)}var S=(b,_)=>{if(!t.hasOwnProperty(b))throw new qt("Replacing nonexistent public symbol");t[b]=_,t[b].X=void 0},X=[],dt=(b,_)=>{b=q(b);var T;if((T=X[_])||(X[_]=T=he.get(_)),typeof T!="function")throw new W(`unknown function pointer with signature ${b}: ${_}`);return T};class ot extends Error{}var Mt=b=>{b=Ct(b);var _=q(b);return zt(b),_},At=(b,_)=>{function T(J){L[J]||K[J]||(ft[J]?ft[J].forEach(T):(A.push(J),L[J]=!0))}var A=[],L={};throw _.forEach(T),new ot(`${b}: `+A.map(Mt).join([", "]))},tt=(b,_,T)=>{function A(j){if(j=T(j),j.length!==b.length)throw new qt("Mismatched type converter count");for(var at=0;at<b.length;++at)Ft(b[at],j[at])}b.forEach(j=>ft[j]=_);var L=Array(_.length),J=[],H=0;for(let[j,at]of _.entries())K.hasOwnProperty(at)?L[j]=K[at]:(J.push(at),nt.hasOwnProperty(at)||(nt[at]=[]),nt[at].push(()=>{L[j]=K[at],++H,H===J.length&&A(L)}));J.length===0&&A(L)},st=(b,_)=>{for(var T=[],A=0;A<b;A++)T.push(B[_+A*4>>2]);return T},wt=b=>{for(;b.length;){var _=b.pop();b.pop()(_)}},D={ftf:function(b,_,T,A,L,J){return function(){var H=T(A);return J(H)}},tffnn:function(b,_,T,A,L,J,H,j){return function(at){var bt=H(null,this);at=j(null,at),T(A,bt,at)}},tffnnn:function(b,_,T,A,L,J,H,j,at){return function(bt,_t){var kt=H(null,this);bt=j(null,bt),_t=at(null,_t),T(A,kt,bt,_t)}},ttfn:function(b,_,T,A,L,J,H){return function(){var j=H(null,this);return j=T(A,j),J(j)}},ttfnn:function(b,_,T,A,L,J,H,j){return function(at){var bt=H(null,this);return at=j(null,at),bt=T(A,bt,at),J(bt)}},ttfnnn:function(b,_,T,A,L,J,H,j,at){return function(bt,_t){var kt=H(null,this);return bt=j(null,bt),_t=at(null,_t),kt=T(A,kt,bt,_t),J(kt)}},tffnnnn:function(b,_,T,A,L,J,H,j,at,bt){return function(_t,kt,ht){var pt=H(null,this);_t=j(null,_t),kt=at(null,kt),ht=bt(null,ht),T(A,pt,_t,kt,ht)}},tffn:function(b,_,T,A,L,J,H){return function(){var j=H(null,this);T(A,j)}},ttfnnnnn:function(b,_,T,A,L,J,H,j,at,bt,_t){return function(kt,ht,pt,yt){var ct=H(null,this);return kt=j(null,kt),ht=at(null,ht),pt=bt(null,pt),yt=_t(null,yt),ct=T(A,ct,kt,ht,pt,yt),J(ct)}},ttfnnnn:function(b,_,T,A,L,J,H,j,at,bt){return function(_t,kt,ht){var pt=H(null,this);return _t=j(null,_t),kt=at(null,kt),ht=bt(null,ht),pt=T(A,pt,_t,kt,ht),J(pt)}},ttfnnnnnn:function(b,_,T,A,L,J,H,j,at,bt,_t,kt){return function(ht,pt,yt,ct,xt){var vt=H(null,this);return ht=j(null,ht),pt=at(null,pt),yt=bt(null,yt),ct=_t(null,ct),xt=kt(null,xt),vt=T(A,vt,ht,pt,yt,ct,xt),J(vt)}},ttfnnnnnnnnnn:function(b,_,T,A,L,J,H,j,at,bt,_t,kt,ht,pt,yt,ct){return function(xt,vt,Vt,Bt,ae,ue,Re,Ue,ze){var Ze=H(null,this);return xt=j(null,xt),vt=at(null,vt),Vt=bt(null,Vt),Bt=_t(null,Bt),ae=kt(null,ae),ue=ht(null,ue),Re=pt(null,Re),Ue=yt(null,Ue),ze=ct(null,ze),Ze=T(A,Ze,xt,vt,Vt,Bt,ae,ue,Re,Ue,ze),J(Ze)}},ttfnnnnnnnnnnnn:function(b,_,T,A,L,J,H,j,at,bt,_t,kt,ht,pt,yt,ct,xt,vt){return function(Vt,Bt,ae,ue,Re,Ue,ze,Ze,Vi,Hi,jn){var lr=H(null,this);return Vt=j(null,Vt),Bt=at(null,Bt),ae=bt(null,ae),ue=_t(null,ue),Re=kt(null,Re),Ue=ht(null,Ue),ze=pt(null,ze),Ze=yt(null,Ze),Vi=ct(null,Vi),Hi=xt(null,Hi),jn=vt(null,jn),lr=T(A,lr,Vt,Bt,ae,ue,Re,Ue,ze,Ze,Vi,Hi,jn),J(lr)}},ttfnnnnnnnnnnn:function(b,_,T,A,L,J,H,j,at,bt,_t,kt,ht,pt,yt,ct,xt){return function(vt,Vt,Bt,ae,ue,Re,Ue,ze,Ze,Vi){var Hi=H(null,this);return vt=j(null,vt),Vt=at(null,Vt),Bt=bt(null,Bt),ae=_t(null,ae),ue=kt(null,ue),Re=ht(null,Re),Ue=pt(null,Ue),ze=yt(null,ze),Ze=ct(null,Ze),Vi=xt(null,Vi),Hi=T(A,Hi,vt,Vt,Bt,ae,ue,Re,Ue,ze,Ze,Vi),J(Hi)}},tffnnnnnnn:function(b,_,T,A,L,J,H,j,at,bt,_t,kt,ht){return function(pt,yt,ct,xt,vt,Vt){var Bt=H(null,this);pt=j(null,pt),yt=at(null,yt),ct=bt(null,ct),xt=_t(null,xt),vt=kt(null,vt),Vt=ht(null,Vt),T(A,Bt,pt,yt,ct,xt,vt,Vt)}},tffnnnnnnnn:function(b,_,T,A,L,J,H,j,at,bt,_t,kt,ht,pt){return function(yt,ct,xt,vt,Vt,Bt,ae){var ue=H(null,this);yt=j(null,yt),ct=at(null,ct),xt=bt(null,xt),vt=_t(null,vt),Vt=kt(null,Vt),Bt=ht(null,Bt),ae=pt(null,ae),T(A,ue,yt,ct,xt,vt,Vt,Bt,ae)}},tffnnunnnn:function(b,_,T,A,L,J,H,j,at,bt,_t,kt,ht){return function(pt,yt,ct,xt,vt,Vt){var Bt=[],ae=H(Bt,this);pt=j(Bt,pt),yt=at(Bt,yt),ct=bt(Bt,ct),xt=_t(Bt,xt),vt=kt(Bt,vt),Vt=ht(Bt,Vt),T(A,ae,pt,yt,ct,xt,vt,Vt),L(Bt)}},tffnnunnn:function(b,_,T,A,L,J,H,j,at,bt,_t,kt){return function(ht,pt,yt,ct,xt){var vt=[],Vt=H(vt,this);ht=j(vt,ht),pt=at(vt,pt),yt=bt(vt,yt),ct=_t(vt,ct),xt=kt(vt,xt),T(A,Vt,ht,pt,yt,ct,xt),L(vt)}},tffnuunnn:function(b,_,T,A,L,J,H,j,at,bt,_t,kt){return function(ht,pt,yt,ct,xt){var vt=[],Vt=H(vt,this);ht=j(vt,ht),pt=at(vt,pt),yt=bt(vt,yt),ct=_t(vt,ct),xt=kt(vt,xt),T(A,Vt,ht,pt,yt,ct,xt),L(vt)}},tffnuunnnn:function(b,_,T,A,L,J,H,j,at,bt,_t,kt,ht){return function(pt,yt,ct,xt,vt,Vt){var Bt=[],ae=H(Bt,this);pt=j(Bt,pt),yt=at(Bt,yt),ct=bt(Bt,ct),xt=_t(Bt,xt),vt=kt(Bt,vt),Vt=ht(Bt,Vt),T(A,ae,pt,yt,ct,xt,vt,Vt),L(Bt)}},tffnnnnnnnnn:function(b,_,T,A,L,J,H,j,at,bt,_t,kt,ht,pt,yt){return function(ct,xt,vt,Vt,Bt,ae,ue,Re){var Ue=H(null,this);ct=j(null,ct),xt=at(null,xt),vt=bt(null,vt),Vt=_t(null,Vt),Bt=kt(null,Bt),ae=ht(null,ae),ue=pt(null,ue),Re=yt(null,Re),T(A,Ue,ct,xt,vt,Vt,Bt,ae,ue,Re)}},tffnnnnnnnnnn:function(b,_,T,A,L,J,H,j,at,bt,_t,kt,ht,pt,yt,ct){return function(xt,vt,Vt,Bt,ae,ue,Re,Ue,ze){var Ze=H(null,this);xt=j(null,xt),vt=at(null,vt),Vt=bt(null,Vt),Bt=_t(null,Bt),ae=kt(null,ae),ue=ht(null,ue),Re=pt(null,Re),Ue=yt(null,Ue),ze=ct(null,ze),T(A,Ze,xt,vt,Vt,Bt,ae,ue,Re,Ue,ze)}},tffnnnnnn:function(b,_,T,A,L,J,H,j,at,bt,_t,kt){return function(ht,pt,yt,ct,xt){var vt=H(null,this);ht=j(null,ht),pt=at(null,pt),yt=bt(null,yt),ct=_t(null,ct),xt=kt(null,xt),T(A,vt,ht,pt,yt,ct,xt)}},tffnunnn:function(b,_,T,A,L,J,H,j,at,bt,_t){return function(kt,ht,pt,yt){var ct=[],xt=H(ct,this);kt=j(ct,kt),ht=at(ct,ht),pt=bt(ct,pt),yt=_t(ct,yt),T(A,xt,kt,ht,pt,yt),L(ct)}},tffnnnunnn:function(b,_,T,A,L,J,H,j,at,bt,_t,kt,ht){return function(pt,yt,ct,xt,vt,Vt){var Bt=[],ae=H(Bt,this);pt=j(Bt,pt),yt=at(Bt,yt),ct=bt(Bt,ct),xt=_t(Bt,xt),vt=kt(Bt,vt),Vt=ht(Bt,Vt),T(A,ae,pt,yt,ct,xt,vt,Vt),L(Bt)}},tffnunnnnn:function(b,_,T,A,L,J,H,j,at,bt,_t,kt,ht){return function(pt,yt,ct,xt,vt,Vt){var Bt=[],ae=H(Bt,this);pt=j(Bt,pt),yt=at(Bt,yt),ct=bt(Bt,ct),xt=_t(Bt,xt),vt=kt(Bt,vt),Vt=ht(Bt,Vt),T(A,ae,pt,yt,ct,xt,vt,Vt),L(Bt)}},tffnununnnn:function(b,_,T,A,L,J,H,j,at,bt,_t,kt,ht,pt){return function(yt,ct,xt,vt,Vt,Bt,ae){var ue=[],Re=H(ue,this);yt=j(ue,yt),ct=at(ue,ct),xt=bt(ue,xt),vt=_t(ue,vt),Vt=kt(ue,Vt),Bt=ht(ue,Bt),ae=pt(ue,ae),T(A,Re,yt,ct,xt,vt,Vt,Bt,ae),L(ue)}},tffnunnnn:function(b,_,T,A,L,J,H,j,at,bt,_t,kt){return function(ht,pt,yt,ct,xt){var vt=[],Vt=H(vt,this);ht=j(vt,ht),pt=at(vt,pt),yt=bt(vt,yt),ct=_t(vt,ct),xt=kt(vt,xt),T(A,Vt,ht,pt,yt,ct,xt),L(vt)}},tffnnnnnnnnnnnn:function(b,_,T,A,L,J,H,j,at,bt,_t,kt,ht,pt,yt,ct,xt,vt){return function(Vt,Bt,ae,ue,Re,Ue,ze,Ze,Vi,Hi,jn){var lr=H(null,this);Vt=j(null,Vt),Bt=at(null,Bt),ae=bt(null,ae),ue=_t(null,ue),Re=kt(null,Re),Ue=ht(null,Ue),ze=pt(null,ze),Ze=yt(null,Ze),Vi=ct(null,Vi),Hi=xt(null,Hi),jn=vt(null,jn),T(A,lr,Vt,Bt,ae,ue,Re,Ue,ze,Ze,Vi,Hi,jn)}}};function rt(b,_,T,A,L,J){var H=_.length;if(H<2)throw new W("argTypes array size mismatch! Must at least get return value and receiver (this) types!");T=_[1]!==null&&T!==null;var j;t:{for(j=1;j<_.length;++j)if(_[j]!==null&&_[j].O===void 0){j=!0;break t}j=!1}var at;t:{for(at=1;at<_.length;++at)if(_[at]!==null&&_[at].na){at=!0;break t}at=!1}var bt=at&&!J&&!j;at&&!bt&&(j=!0),at=!_[0].ja;var _t=_[0],kt=_[1];for(A=[b,lt,A,L,wt,_t.M.bind(_t),kt?.R.bind(kt)],bt&&A.push(V,R),L=2;L<H;++L)bt=_[L],A.push(bt.R.bind(bt));if(!j)for(L=T?1:2;L<_.length;++L)_[L].O!==null&&A.push(_[L].O);for(J=[T?"t":"f",at?"t":"f",J?"t":"f"],H=T?1:2;H<_.length;++H)T=_[H],J.push(T.na?"s":T.O===void 0?"u":T.O===null?"n":"t");return _=D[J.join("")](...A),Le(b,_)}var Q=b=>{b=b.trim();var _=b.indexOf("(");return _===-1?b:b.slice(0,_)},Et=[],mt=[0,1,,1,null,1,!0,1,!1,1],St=b=>{b>9&&--mt[b+1]===0&&(mt[b]=void 0,Et.push(b))},Xt=b=>{if(!b)throw new W(`Cannot use deleted val. handle = ${b}`);return mt[b]},se=b=>{switch(b){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let _=Et.pop()||mt.length;return mt[_]=b,mt[_+1]=1,_}},gt={name:"emscripten::val",M:b=>{var _=Xt(b);return St(b),_},R:(b,_)=>se(_),T:Se,O:null},$t=(b,_,T)=>{switch(_){case 1:return T?function(A){return this.M(O[A])}:function(A){return this.M(N[A])};case 2:return T?function(A){return this.M(Jt[A>>1])}:function(A){return this.M(it[A>>1])};case 4:return T?function(A){return this.M(Pt[A>>2])}:function(A){return this.M(B[A>>2])};default:throw new TypeError(`invalid integer width (${_}): ${b}`)}},re=(b,_)=>{var T=K[b];if(T===void 0)throw b=`${_} has unknown type ${Mt(b)}`,new W(b);return T},Nt,ye,ke=(b,_)=>{switch(_){case 4:return function(T){return this.M(Nt[T>>2])};case 8:return function(T){return this.M(ye[T>>3])};default:throw new TypeError(`invalid float width (${_}): ${b}`)}},Qi=(b,_,T)=>{var A=(L,J)=>{var H=0;return{next(){if(H>=L)return{done:!0};var j=H;return H++,{value:J(j),done:!1}},[Symbol.iterator](){return this}}};b[Symbol.iterator]||(b[Symbol.iterator]=function(){var L=this[_]();return A(L,J=>this[T](J))})},Ia=Object.assign({optional:!0},gt),tn=(b,_,T)=>{var A=N;if(!(T>0))return 0;var L=_;T=_+T-1;for(var J=0;J<b.length;++J){var H=b.codePointAt(J);if(H<=127){if(_>=T)break;A[_++]=H}else if(H<=2047){if(_+1>=T)break;A[_++]=192|H>>6,A[_++]=128|H&63}else if(H<=65535){if(_+2>=T)break;A[_++]=224|H>>12,A[_++]=128|H>>6&63,A[_++]=128|H&63}else{if(_+3>=T)break;A[_++]=240|H>>18,A[_++]=128|H>>12&63,A[_++]=128|H>>6&63,A[_++]=128|H&63,J++}}return A[_]=0,_-L},La=b=>{for(var _=0,T=0;T<b.length;++T){var A=b.charCodeAt(T);A<=127?_++:A<=2047?_+=2:A>=55296&&A<=57343?(_+=4,++T):_+=3}return _},rr=globalThis.TextDecoder&&new TextDecoder,ar=(b,_,T,A)=>{if(T=_+T,A)return T;for(;b[_]&&!(_>=T);)++_;return _},en=(b=0,_,T)=>{var A=N;if(_=ar(A,b,_,T),_-b>16&&A.buffer&&rr)return rr.decode(A.subarray(b,_));for(T="";b<_;){var L=A[b++];if(L&128){var J=A[b++]&63;if((L&224)==192)T+=String.fromCharCode((L&31)<<6|J);else{var H=A[b++]&63;L=(L&240)==224?(L&15)<<12|J<<6|H:(L&7)<<18|J<<12|H<<6|A[b++]&63,L<65536?T+=String.fromCharCode(L):(L-=65536,T+=String.fromCharCode(55296|L>>10,56320|L&1023))}}else T+=String.fromCharCode(L)}return T},ds=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Da=(b,_,T)=>{if(b>>=1,_=ar(it,b,_/2,T),_-b>16&&ds)return ds.decode(it.subarray(b,_));for(T="";b<_;++b)T+=String.fromCharCode(it[b]);return T},Na=(b,_,T=2147483647)=>{if(T<2)return 0;T-=2;var A=_;T=T<b.length*2?T/2:b.length;for(var L=0;L<T;++L)Jt[_>>1]=b.charCodeAt(L),_+=2;return Jt[_>>1]=0,_-A},us=b=>b.length*2,Ua=(b,_,T)=>{var A="";b>>=2;for(var L=0;!(L>=_/4);L++){var J=B[b+L];if(!J&&!T)break;A+=String.fromCodePoint(J)}return A},Oa=(b,_,T=2147483647)=>{if(T<4)return 0;var A=_;T=A+T-4;for(var L=0;L<b.length;++L){var J=b.codePointAt(L);if(J>65535&&L++,Pt[_>>2]=J,_+=4,_+4>T)break}return Pt[_>>2]=0,_-A},qn=b=>{for(var _=0,T=0;T<b.length;++T)b.codePointAt(T)>65535&&T++,_+=4;return _},or=[],Fa=b=>{var _=or.length;return or.push(b),_},ka=(b,_)=>{for(var T=Array(b),A=0;A<b;++A)T[A]=re(B[_+A*4>>2],`parameter ${A}`);return T},vc=(b,_,T)=>{var A=[];return b=b(A,T),A.length&&(B[_>>2]=se(A)),b},bc={},Mc=b=>{var _=bc[b];return _===void 0?q(b):_},fs=[],w={},F=()=>{if(!Z){var b={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:a},_;for(_ in w)w[_]===void 0?delete b[_]:b[_]=w[_];var T=[];for(_ in b)T.push(`${_}=${b[_]}`);Z=T}return Z},Z;(()=>{var b=oe.prototype;Object.assign(b,{isAliasOf:function(T){if(!(this instanceof oe&&T instanceof oe))return!1;var A=this.J.N.K,L=this.J.L;T.J=T.J;var J=T.J.N.K;for(T=T.J.L;A.S;)L=A.ba(L),A=A.S;for(;J.S;)T=J.ba(T),J=J.S;return A===J&&L===T},clone:function(){if(this.J.L||te(this),this.J.aa)return this.J.count.value+=1,this;var T=ge,A=Object,L=A.create,J=Object.getPrototypeOf(this),H=this.J;return T=T(L.call(A,J,{J:{value:{count:H.count,$:H.$,aa:H.aa,L:H.L,N:H.N,P:H.P,U:H.U}}})),T.J.count.value+=1,T.J.$=!1,T},delete(){if(this.J.L||te(this),this.J.$&&!this.J.aa)throw new W("Object already scheduled for deletion");Zt(this);var T=this.J;--T.count.value,T.count.value===0&&(T.P?T.U.W(T.P):T.N.K.W(T.L)),this.J.aa||(this.J.P=void 0,this.J.L=void 0)},isDeleted:function(){return!this.J.L},deleteLater:function(){if(this.J.L||te(this),this.J.$&&!this.J.aa)throw new W("Object already scheduled for deletion");return Me.push(this),this.J.$=!0,this}});var _=Symbol.dispose;_&&(b[_]=b.delete)})(),Object.assign(I.prototype,{ra(b){return this.ka&&(b=this.ka(b)),b},ia(b){this.W?.(b)},T:Se,M:function(b){function _(){return this.ea?Kt(this.K.Z,{N:this.ta,L:T,U:this,P:b}):Kt(this.K.Z,{N:this,L:b})}var T=this.ra(b);if(!T)return this.ia(b),null;var A=Ne(this.K,T);if(A!==void 0)return A.J.count.value===0?(A.J.L=T,A.J.P=b,A.clone()):(A=A.clone(),this.ia(b),A);if(A=this.K.qa(T),A=De[A],!A)return _.call(this);A=this.da?A.oa:A.pointerType;var L=Te(T,this.K,A.K);return L===null?_.call(this):this.ea?Kt(A.K.Z,{N:A,L,U:this,P:b}):Kt(A.K.Z,{N:A,L})}}),t.printErr&&(d=t.printErr),t.thisProgram&&(a=t.thisProgram);var G=t.preInit;if(G)for(typeof G=="function"&&(t.preInit=G=[G]);G.length>0;)G.shift()();var $={40176:()=>{console.log(`Solving with DogLeg
`)},40218:()=>{console.log(`Solving with LevenbergMarquardt
`)},40272:()=>{console.log(`Solving with BFGS
`)}},Ct,zt,Tt,Ot,Wt,ee,he,Gt={b:(b,_,T)=>{new Y(b).init(_,T),et++,m()},v:()=>m(""),n:(b,_,T,A,L)=>{_=q(_),A=A===0n;var J=H=>H;if(A){let H=T*8;J=j=>BigInt.asUintN(H,j),L=J(L)}Ft(b,{name:_,M:J,R:(H,j)=>(typeof j=="number"&&(j=BigInt(j)),j),T:Ut(_,T,!A),O:null})},z:(b,_,T,A)=>{_=q(_),Ft(b,{name:_,M:function(L){return!!L},R:function(L,J){return J?T:A},T:function(L){return this.M(N[L])},O:null})},e:(b,_,T,A,L,J,H,j,at,bt,_t,kt,ht)=>{_t=q(_t),J=dt(L,J),j&&=dt(H,j),bt&&=dt(at,bt),ht=dt(kt,ht);var pt=Ni(_t);Ee(pt,function(){At(`Cannot construct ${_t} due to unbound types`,[A])}),tt([b,_,T],A?[A]:[],yt=>{if(yt=yt[0],A)var ct=yt.K,xt=ct.Z;else xt=oe.prototype;yt=Le(_t,function(...ae){if(Object.getPrototypeOf(this)!==vt)throw new W(`Use 'new' to construct ${_t}`);if(Vt.Y===void 0)throw new W(`${_t} has no accessible constructor`);var ue=Vt.Y[ae.length];if(ue===void 0)throw new W(`Tried to invoke ctor of ${_t} with invalid number of parameters (${ae.length}) - expected (${Object.keys(Vt.Y).toString()}) parameters instead!`);return ue.apply(this,ae)});var vt=Object.create(xt,{constructor:{value:yt}});yt.prototype=vt;var Vt=new Fe(_t,yt,vt,ht,ct,J,j,bt);if(Vt.S){var Bt;(Bt=Vt.S).ha??(Bt.ha=[]),Vt.S.ha.push(Vt)}return ct=new I(_t,Vt,!0,!1,!1),Bt=new I(_t+"*",Vt,!1,!1,!1),xt=new I(_t+" const*",Vt,!1,!0,!1),De[b]={pointerType:Bt,oa:xt},S(pt,yt),[ct,Bt,xt]})},h:(b,_,T,A,L,J)=>{var H=st(_,T);L=dt(A,L),tt([],[b],j=>{j=j[0];var at=`constructor ${j.name}`;if(j.K.Y===void 0&&(j.K.Y=[]),j.K.Y[_-1]!==void 0)throw new W(`Cannot register multiple constructors with identical number of parameters (${_-1}) for class '${j.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return j.K.Y[_-1]=()=>{At(`Cannot construct ${j.name} due to unbound types`,H)},tt([],H,bt=>(bt.splice(1,0,null),j.K.Y[_-1]=rt(at,bt,null,L,J),[])),[]})},a:(b,_,T,A,L,J,H,j,at)=>{var bt=st(T,A);_=q(_),_=Q(_),J=dt(L,J),tt([],[b],_t=>{function kt(){At(`Cannot call ${ht} due to unbound types`,bt)}_t=_t[0];var ht=`${_t.name}.${_}`;_.startsWith("@@")&&(_=Symbol[_.substring(2)]),j&&_t.K.ua.push(_);var pt=_t.K.Z,yt=pt[_];return yt===void 0||yt.V===void 0&&yt.className!==_t.name&&yt.X===T-2?(kt.X=T-2,kt.className=_t.name,pt[_]=kt):(ii(pt,_,ht),pt[_].V[T-2]=kt),tt([],bt,ct=>(ct=rt(ht,ct,_t,J,H,at),pt[_].V===void 0?(ct.X=T-2,pt[_]=ct):pt[_].V[T-2]=ct,[])),[]})},x:b=>Ft(b,gt),g:(b,_,T,A,L)=>{switch(_=q(_),L=L?L===1?"number":"string":"object",L){case"object":let H=function(){};H.values={},Ft(b,{name:_,constructor:H,valueType:L,M:function(j){return this.constructor.values[j]},R:(j,at)=>at.value,T:$t(_,T,A),O:null}),Ee(_,H);break;case"number":var J={};Ft(b,{name:_,ga:J,valueType:L,M:j=>j,R:(j,at)=>at,T:$t(_,T,A),O:null}),Ee(_,J),delete t[_].X;break;case"string":J={},Ft(b,{name:_,ma:{},la:{},ga:J,valueType:L,M:function(j){return this.la[j]},R:function(j,at){return this.ma[at]},T:$t(_,T,A),O:null}),Ee(_,J),delete t[_].X}},c:(b,_,T)=>{var A=re(b,"enum");switch(_=q(_),A.valueType){case"object":b=A.constructor,A=Object.create(A.constructor.prototype,{value:{value:T},constructor:{value:Le(`${A.name}_${_}`,function(){})}}),b.values[T]=A,b[_]=A;break;case"number":A.ga[_]=T;break;case"string":A.ma[_]=T,A.la[T]=_,A.ga[_]=_}},m:(b,_,T)=>{_=q(_),Ft(b,{name:_,M:A=>A,R:(A,L)=>L,T:ke(_,T),O:null})},f:(b,_,T,A,L)=>{_=q(_);var J=j=>j;if(A===0){var H=32-8*T;J=j=>j<<H>>>H,L=J(L)}Ft(b,{name:_,M:J,R:(j,at)=>at,T:Ut(_,T,A!==0),O:null})},k:(b,_,T,A)=>{T=q(T),A=q(A),tt([],[b,_],L=>(Qi(L[0].K.Z,T,A),[]))},d:(b,_,T)=>{function A(J){return new L(O.buffer,B[J+4>>2],B[J>>2])}var L=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][_];T=q(T),Ft(b,{name:T,M:A,T:A},{sa:!0})},l:b=>{Ft(b,Ia)},y:(b,_)=>{_=q(_),Ft(b,{name:_,M(T){var A=(A=T+4)?en(A,B[T>>2],!0):"";return zt(T),A},R(T,A){A instanceof ArrayBuffer&&(A=new Uint8Array(A));var L=typeof A=="string";if(!(L||ArrayBuffer.isView(A)&&A.BYTES_PER_ELEMENT==1))throw new W("Cannot pass non-string to std::string");var J=L?La(A):A.length,H=Tt(4+J+1),j=H+4;return B[H>>2]=J,L?tn(A,j,J+1):N.set(A,j),T!==null&&T.push(zt,H),H},T:Se,O(T){zt(T)}})},i:(b,_,T)=>{if(T=q(T),_===2)var A=Da,L=Na,J=us;else A=Ua,L=Oa,J=qn;Ft(b,{name:T,M:H=>{var j=A(H+4,B[H>>2]*_,!0);return zt(H),j},R:(H,j)=>{if(typeof j!="string")throw new W(`Cannot pass non-string to C++ string type ${T}`);var at=J(j),bt=Tt(4+at+_);return B[bt>>2]=at/_,L(j,bt+4,at+_),H!==null&&H.push(zt,bt),bt},T:Se,O(H){zt(H)}})},A:(b,_)=>{_=q(_),Ft(b,{ja:!0,name:_,M:()=>{},R:()=>{}})},j:(b,_,T)=>{var A;[_,...A]=ka(b,_);var L=_.R.bind(_),J=A.map(at=>at.T.bind(at));b--;var H={toValue:Xt};switch(b=J.map((at,bt)=>{var _t=`argFromPtr${bt}`;return H[_t]=at,`${_t}(args${bt?"+"+bt*8:""})`}),T){case 0:var j="toValue(handle)";break;case 2:j="new (toValue(handle))";break;case 3:j="";break;case 1:H.getStringOrSymbol=Mc,j="toValue(handle)[getStringOrSymbol(methodName)]"}return j+=`(${b})`,_.ja||(H.toReturnWire=L,H.emval_returnValue=vc,j=`return emval_returnValue(toReturnWire, destructorsRef, ${j})`),j=`return function (handle, methodName, destructorsRef, args) {
${j}
}`,T=new Function(Object.keys(H),j)(...Object.values(H)),_=`methodCaller<(${A.map(at=>at.name)}) => ${_.name}>`,Fa(Le(_,T))},p:(b,_,T,A,L)=>or[b](_,T,A,L),o:b=>{var _=Xt(b);wt(_),St(b)},t:(b,_,T,A)=>{var L=new Date().getFullYear(),J=new Date(L,0,1).getTimezoneOffset();L=new Date(L,6,1).getTimezoneOffset(),B[b>>2]=Math.max(J,L)*60,Pt[_>>2]=+(J!=L),_=H=>{var j=Math.abs(H);return`UTC${H>=0?"-":"+"}${String(Math.floor(j/60)).padStart(2,"0")}${String(j%60).padStart(2,"0")}`},b=_(J),_=_(L),L<J?(tn(b,T,17),tn(_,A,17)):(tn(b,A,17),tn(_,T,17))},q:(b,_,T)=>{fs.length=0;for(var A;A=N[_++];){var L=A!=105;L&=A!=112,T+=L&&T%8?4:0,fs.push(A==112?B[T>>2]:A==106?Ht[T>>3]:A==105?Pt[T>>2]:ye[T>>3]),T+=L?8:4}return $[b](...fs)},u:()=>{m("OOM")},r:(b,_)=>{var T=0,A=0,L;for(L of F()){var J=_+T;B[b+A>>2]=J,T+=tn(L,J,1/0)+1,A+=4}return 0},s:(b,_)=>{var T=F();B[b>>2]=T.length,b=0;for(var A of T)b+=La(A)+1;return B[_>>2]=b,0},w:function(b){console.log(b?en(b):"")}},le;return le=await(async function(){function b(A){return A=le=A.exports,Ct=A.D,zt=A.F,Tt=A.G,Ot=A.H,Wt=A.I,ee=A.B,he=A.E,A=ee.buffer,O=new Int8Array(A),Jt=new Int16Array(A),N=new Uint8Array(A),it=new Uint16Array(A),Pt=new Int32Array(A),B=new Uint32Array(A),Nt=new Float32Array(A),ye=new Float64Array(A),Ht=new BigInt64Array(A),jt=new BigUint64Array(A),le}var _={a:Gt},T=t.instantiateWasm;return T?new Promise(A=>{T(_,L=>A(b(L)))}):(y??=t.locateFile?t.locateFile?t.locateFile("planegcs.wasm",l):l+"planegcs.wasm":new URL("planegcs.wasm",import.meta.url).href,(function(A){return b(A.instance)})(await C(_)))})(),await(async function(){M();var b=t.setStatus;b&&(b("Running..."),await new Promise(_=>setTimeout(_,1)),setTimeout(b,1,"")),f||(le.C(),t.onRuntimeInitialized?.(),p())})(),t}var gd=yv;var hp={equal:{param1:"object_param_or_number",param2:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type",internalalignment:"primitive_type"},proportional:{param1:"object_param_or_number",param2:"object_param_or_number",ratio:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},difference:{param1:"object_param_or_number",param2:"object_param_or_number",difference:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},p2p_distance:{p1_id:"object_id",p2_id:"object_id",distance:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},p2p_angle_incr_angle:{p1_id:"object_id",p2_id:"object_id",angle:"object_param_or_number",incrAngle:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},p2p_angle:{p1_id:"object_id",p2_id:"object_id",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},p2l_distance:{p_id:"object_id",l_id:"object_id",distance:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},point_on_line_pl:{p_id:"object_id",l_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_line_ppp:{p_id:"object_id",lp1_id:"object_id",lp2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_perp_bisector_pl:{p_id:"object_id",l_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_perp_bisector_ppp:{p_id:"object_id",lp1_id:"object_id",lp2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},parallel:{l1_id:"object_id",l2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},perpendicular_ll:{l1_id:"object_id",l2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},perpendicular_pppp:{l1p1_id:"object_id",l1p2_id:"object_id",l2p1_id:"object_id",l2p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},l2l_angle_ll:{l1_id:"object_id",l2_id:"object_id",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},l2l_angle_pppp:{l1p1_id:"object_id",l1p2_id:"object_id",l2p1_id:"object_id",l2p2_id:"object_id",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},angle_via_point:{crv1_id:"object_id",crv2_id:"object_id",p_id:"object_id",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},angle_via_two_points:{crv1_id:"object_id",crv2_id:"object_id",p1_id:"object_id",p2_id:"object_id",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},angle_via_point_and_param:{crv1_id:"object_id",crv2_id:"object_id",p_id:"object_id",cparam:"object_param_or_number",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},angle_via_point_and_two_params:{crv1_id:"object_id",crv2_id:"object_id",p_id:"object_id",cparam1:"object_param_or_number",cparam2:"object_param_or_number",angle:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},midpoint_on_line_ll:{l1_id:"object_id",l2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},midpoint_on_line_pppp:{l1p1_id:"object_id",l1p2_id:"object_id",l2p1_id:"object_id",l2p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},tangent_circumf:{p1_id:"object_id",p2_id:"object_id",rd1:"object_param_or_number",rd2:"object_param_or_number",internal:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},tangent_at_bspline_knot:{b_id:"object_id",l_id:"object_id",knotindex:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},p2p_coincident:{p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},horizontal_l:{l_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},horizontal_pp:{p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},vertical_l:{l_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},vertical_pp:{p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},coordinate_x:{p_id:"object_id",x:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},coordinate_y:{p_id:"object_id",y:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},arc_rules:{a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_circle:{p_id:"object_id",c_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_ellipse:{p_id:"object_id",e_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_hyperbolic_arc:{p_id:"object_id",e_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_parabolic_arc:{p_id:"object_id",e_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_bspline:{p_id:"object_id",b_id:"object_id",pointparam:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},arc_of_ellipse_rules:{a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},curve_value:{p_id:"object_id",a_id:"object_id",u:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},arc_of_hyperbola_rules:{a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},arc_of_parabola_rules:{a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},point_on_arc:{p_id:"object_id",a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},perpendicular_line2arc:{p1_id:"object_id",p2_id:"object_id",a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},perpendicular_arc2line:{a_id:"object_id",p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},perpendicular_circle2arc:{center_id:"object_id",radius:"object_param_or_number",a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},perpendicular_arc2circle:{a_id:"object_id",center_id:"object_id",radius:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},perpendicular_arc2arc:{a1_id:"object_id",reverse1:"primitive_type",a2_id:"object_id",reverse2:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},tangent_lc:{l_id:"object_id",c_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},tangent_le:{l_id:"object_id",e_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},tangent_la:{l_id:"object_id",a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},tangent_cc:{c1_id:"object_id",c2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},tangent_aa:{a1_id:"object_id",a2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},tangent_ca:{c_id:"object_id",a_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},circle_radius:{c_id:"object_id",radius:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},arc_radius:{a_id:"object_id",radius:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},circle_diameter:{c_id:"object_id",diameter:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},arc_diameter:{a_id:"object_id",diameter:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},equal_length:{l1_id:"object_id",l2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},equal_radius_cc:{c1_id:"object_id",c2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},equal_radii_ee:{e1_id:"object_id",e2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},equal_radii_ahah:{a1_id:"object_id",a2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},equal_radius_ca:{c1_id:"object_id",a2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},equal_radius_aa:{a1_id:"object_id",a2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},equal_focus:{a1_id:"object_id",a2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},p2p_symmetric_ppl:{p1_id:"object_id",p2_id:"object_id",l_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},p2p_symmetric_ppp:{p1_id:"object_id",p2_id:"object_id",p_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},snells_law:{ray1_id:"object_id",ray2_id:"object_id",boundary_id:"object_id",p_id:"object_id",n1:"object_param_or_number",n2:"object_param_or_number",flipn1:"primitive_type",flipn2:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},c2cdistance:{c1_id:"object_id",c2_id:"object_id",dist:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},c2ldistance:{c_id:"object_id",l_id:"object_id",dist:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},p2cdistance:{p_id:"object_id",c_id:"object_id",distance:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},arc_length:{a_id:"object_id",dist:"object_param_or_number",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_point2ellipse:{e_id:"object_id",p1_id:"object_id",alignmentType:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_ellipse_major_diameter:{e_id:"object_id",p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_ellipse_minor_diameter:{e_id:"object_id",p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_ellipse_focus1:{e_id:"object_id",p1_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_ellipse_focus2:{e_id:"object_id",p1_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_point2hyperbola:{e_id:"object_id",p1_id:"object_id",alignmentType:"primitive_type",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_hyperbola_major_diameter:{e_id:"object_id",p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_hyperbola_minor_diameter:{e_id:"object_id",p1_id:"object_id",p2_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_hyperbola_focus:{e_id:"object_id",p1_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_parabola_focus:{e_id:"object_id",p1_id:"object_id",tagId:"primitive_type",driving:"primitive_type"},internal_alignment_bspline_control_point:{b_id:"object_id",c_id:"object_id",poleindex:"primitive_type",tag:"primitive_type",driving:"primitive_type"},internal_alignment_knot_point:{b_id:"object_id",p_id:"object_id",knotindex:"primitive_type",tagId:"primitive_type",driving:"primitive_type"}};function ga(n,t){let e=new n.IntVector;for(let i of t)e.push_back(i);return e}function _a(n){let t=[];for(let e=0;e<n.size();++e)t.push(n.get(e));return n.delete(),t}var Rt={point:{x:0,y:1},circle:{radius:0},arc:{start_angle:0,end_angle:1,radius:2},ellipse:{radmin:0},arc_of_ellipse:{start_angle:0,end_angle:1,radmin:2},parabola:{},arc_of_parabola:{start_angle:0,end_angle:1},hyperbola:{radmin:0},arc_of_hyperbola:{start_angle:0,end_angle:1,radmin:2},line:{},bspline:{}};function _d(n,t){let e=Rt[n];if(e){let i=e[t];if(i!==void 0)return i}throw new Error(`Unknown property ${t} for primitive <${n}>`)}var ya=class{get debug_mode(){return this.gcs.get_debug_mode()}set debug_mode(t){this.gcs.set_debug_mode(t)}get equal_optimization(){return this.enable_equal_optimization}set equal_optimization(t){this.enable_equal_optimization=t}constructor(t,e){this.p_param_index=new Map,this.sketch_index=new ma,this.bspline_gcs_cache=new Map,this.sketch_param_index=new Map,this.nondriving_constraint_params_order=new Map,this.enable_equal_optimization=!1,this.gcs=t,this.module=e}destroy_gcs_module(){this.gcs.clear_data(),this.gcs.delete()}clear_data(){this.nondriving_constraint_params_order.clear(),this.gcs.clear_data(),this.p_param_index.clear(),this.sketch_param_index.clear(),this.sketch_index.clear(),this.bspline_gcs_cache.clear()}push_primitive(t){switch(t.type){case"point":this.push_point(t);break;case"line":this.push_line(t);break;case"circle":this.push_circle(t);break;case"arc":this.push_arc(t);break;case"ellipse":this.push_ellipse(t);break;case"arc_of_ellipse":this.push_arc_of_ellipse(t);break;case"hyperbola":this.push_hyperbola(t);break;case"arc_of_hyperbola":this.push_arc_of_hyperbola(t);break;case"parabola":this.push_parabola(t);break;case"arc_of_parabola":this.push_arc_of_parabola(t);break;case"bspline":this.push_bspline(t);break;default:this.push_constraint(t)}if(this.sketch_index.has(t.id))throw new Error(`object with id ${t.id} already exists`);this.sketch_index.set_primitive(t)}push_primitives_and_params(t){for(let e of t)e.type==="param"?this.push_sketch_param(e.name,e.value):this.push_primitive(e)}solve(t=fd.DogLeg){return this.gcs.solve_system(t)}apply_solution(){this.gcs.apply_solution();for(let t of this.sketch_index.get_primitives())this.pull_primitive(t)}set_convergence_threshold(t){this.gcs.set_covergence_threshold(t)}get_convergence_threshold(){return this.gcs.get_convergence_threshold()}set_max_iterations(t){this.gcs.set_max_iterations(t)}get_max_iterations(){return this.gcs.get_max_iterations()}get_gcs_params(){return _a(this.gcs.get_p_params())}get_gcs_conflicting_constraints(){return _a(this.gcs.get_conflicting()).map(t=>this.sketch_index.get_id_by_index(t))}get_gcs_redundant_constraints(){return _a(this.gcs.get_redundant()).map(t=>this.sketch_index.get_id_by_index(t))}get_gcs_partially_redundant_constraints(){return _a(this.gcs.get_partially_redundant()).map(t=>this.sketch_index.get_id_by_index(t))}has_gcs_conflicting_constraints(){return this.gcs.has_conflicting()}has_gcs_redundant_constraints(){return this.gcs.has_redundant()}has_gcs_partially_redundant_constraints(){return this.gcs.has_partially_redundant()}push_sketch_param(t,e,i=!0){let s=this.gcs.params_size();return this.gcs.push_p_param(e,i),this.sketch_param_index.set(t,s),s}set_sketch_param(t,e){let i=this.sketch_param_index.get(t);if(i===void 0)throw new Error(`sketch param ${t} not found`);this.gcs.set_p_param(i,e,!0)}get_sketch_param_value(t){let e=this.sketch_param_index.get(t);return e===void 0?void 0:this.gcs.get_p_param(e)}get_sketch_param_values(){let t=new Map;for(let[e,i]of this.sketch_param_index)t.set(e,this.gcs.get_p_param(i));return t}push_p_params(t,e,i=!1){let s=this.gcs.params_size();for(let r of e)this.gcs.push_p_param(r,i);return this.p_param_index.has(t)||this.p_param_index.set(t,s),s}push_point(t){this.p_param_index.has(t.id)||this.push_p_params(t.id,[t.x,t.y],t.fixed)}push_line(t){let e=this.sketch_index.get_sketch_point(t.p1_id),i=this.sketch_index.get_sketch_point(t.p2_id);this.push_point(e),this.push_point(i)}push_circle(t){let e=this.sketch_index.get_sketch_point(t.c_id);this.push_point(e),this.push_p_params(t.id,[t.radius],!1)}push_arc(t){let e=this.sketch_index.get_sketch_point(t.c_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.start_id);this.push_point(i);let s=this.sketch_index.get_sketch_point(t.end_id);this.push_point(s),this.push_p_params(t.id,[t.start_angle,t.end_angle,t.radius],!1)}push_ellipse(t){let e=this.sketch_index.get_sketch_point(t.c_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.focus1_id);this.push_point(i),this.push_p_params(t.id,[t.radmin],!1)}push_hyperbola(t){let e=this.sketch_index.get_sketch_point(t.c_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.focus1_id);this.push_point(i),this.push_p_params(t.id,[t.radmin],!1)}push_arc_of_hyperbola(t){let e=this.sketch_index.get_sketch_point(t.c_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.focus1_id);this.push_point(i);let s=this.sketch_index.get_sketch_point(t.start_id);this.push_point(s);let r=this.sketch_index.get_sketch_point(t.end_id);this.push_point(r),this.push_p_params(t.id,[t.start_angle,t.end_angle,t.radmin],!1)}push_parabola(t){let e=this.sketch_index.get_sketch_point(t.vertex_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.focus1_id);this.push_point(i)}push_arc_of_parabola(t){let e=this.sketch_index.get_sketch_point(t.vertex_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.focus1_id);this.push_point(i);let s=this.sketch_index.get_sketch_point(t.start_id);this.push_point(s);let r=this.sketch_index.get_sketch_point(t.end_id);this.push_point(r),this.push_p_params(t.id,[t.start_angle,t.end_angle],!1)}push_arc_of_ellipse(t){let e=this.sketch_index.get_sketch_point(t.c_id);this.push_point(e);let i=this.sketch_index.get_sketch_point(t.focus1_id);this.push_point(i);let s=this.sketch_index.get_sketch_point(t.start_id);this.push_point(s);let r=this.sketch_index.get_sketch_point(t.end_id);this.push_point(r),this.push_p_params(t.id,[t.start_angle,t.end_angle,t.radmin],!1)}push_bspline(t){for(let e of t.pole_ids){let i=this.sketch_index.get_sketch_point(e);this.push_point(i)}}sketch_primitive_to_gcs(t){switch(t.type){case"point":{let e=this.get_primitive_addr(t.id);return this.gcs.make_point(e+Rt.point.x,e+Rt.point.y)}case"line":{let e=this.get_primitive_addr(t.p1_id),i=this.get_primitive_addr(t.p2_id);return this.gcs.make_line(e+Rt.point.x,e+Rt.point.y,i+Rt.point.x,i+Rt.point.y)}case"circle":{let e=this.get_primitive_addr(t.c_id),i=this.get_primitive_addr(t.id);return this.gcs.make_circle(e+Rt.point.x,e+Rt.point.y,i+Rt.circle.radius)}case"arc":{let e=this.get_primitive_addr(t.c_id),i=this.get_primitive_addr(t.start_id),s=this.get_primitive_addr(t.end_id),r=this.get_primitive_addr(t.id);return this.gcs.make_arc(e+Rt.point.x,e+Rt.point.y,i+Rt.point.x,i+Rt.point.y,s+Rt.point.x,s+Rt.point.y,r+Rt.arc.start_angle,r+Rt.arc.end_angle,r+Rt.arc.radius)}case"ellipse":{let e=this.get_primitive_addr(t.c_id),i=this.get_primitive_addr(t.focus1_id),s=this.get_primitive_addr(t.id);return this.gcs.make_ellipse(e+Rt.point.x,e+Rt.point.y,i+Rt.point.x,i+Rt.point.y,s+Rt.ellipse.radmin)}case"arc_of_ellipse":{let e=this.get_primitive_addr(t.c_id),i=this.get_primitive_addr(t.focus1_id),s=this.get_primitive_addr(t.start_id),r=this.get_primitive_addr(t.end_id),a=this.get_primitive_addr(t.id);return this.gcs.make_arc_of_ellipse(e+Rt.point.x,e+Rt.point.y,i+Rt.point.x,i+Rt.point.y,s+Rt.point.x,s+Rt.point.y,r+Rt.point.x,r+Rt.point.y,a+Rt.arc_of_ellipse.start_angle,a+Rt.arc_of_ellipse.end_angle,a+Rt.arc_of_ellipse.radmin)}case"hyperbola":{let e=this.get_primitive_addr(t.c_id),i=this.get_primitive_addr(t.focus1_id),s=this.get_primitive_addr(t.id+Rt.hyperbola.radmin);return this.gcs.make_hyperbola(e+Rt.point.x,e+Rt.point.y,i+Rt.point.x,i+Rt.point.y,s+Rt.hyperbola.radmin)}case"arc_of_hyperbola":{let e=this.get_primitive_addr(t.c_id),i=this.get_primitive_addr(t.focus1_id),s=this.get_primitive_addr(t.start_id),r=this.get_primitive_addr(t.end_id),a=this.get_primitive_addr(t.id);return this.gcs.make_arc_of_hyperbola(e+Rt.point.x,e+Rt.point.y,i+Rt.point.x,i+Rt.point.y,s+Rt.point.x,s+Rt.point.y,r+Rt.point.x,r+Rt.point.y,a+Rt.arc_of_hyperbola.start_angle,a+Rt.arc_of_hyperbola.end_angle,a+Rt.arc_of_hyperbola.radmin)}case"parabola":{let e=this.get_primitive_addr(t.vertex_id),i=this.get_primitive_addr(t.focus1_id);return this.gcs.make_parabola(e+Rt.point.x,e+Rt.point.y,i+Rt.point.x,i+Rt.point.y)}case"arc_of_parabola":{let e=this.get_primitive_addr(t.vertex_id),i=this.get_primitive_addr(t.focus1_id),s=this.get_primitive_addr(t.start_id),r=this.get_primitive_addr(t.end_id),a=this.get_primitive_addr(t.id);return this.gcs.make_arc_of_parabola(e+Rt.point.x,e+Rt.point.y,i+Rt.point.x,i+Rt.point.y,s+Rt.point.x,s+Rt.point.y,r+Rt.point.x,r+Rt.point.y,a+Rt.arc_of_parabola.start_angle,a+Rt.arc_of_parabola.end_angle)}case"bspline":{if(!this.module)throw new Error("ModuleStatic required for BSpline creation");let e=t,i=this.bspline_gcs_cache.get(e.id);if(i!==void 0)return i;if(e.pole_ids.length<2)throw new Error("BSpline must have at least 2 control points, got "+e.pole_ids.length);let s=[];for(let p of e.pole_ids){let m=this.get_primitive_addr(p);s.push(m+Rt.point.x),s.push(m+Rt.point.y)}let r=this.gcs.push_p_param(this.gcs.get_p_param(s[0]),!1),a=this.gcs.push_p_param(this.gcs.get_p_param(s[1]),!1),o=this.gcs.push_p_param(this.gcs.get_p_param(s[s.length-2]),!1),l=this.gcs.push_p_param(this.gcs.get_p_param(s[s.length-1]),!1),c=[];for(let p of e.weights)c.push(this.gcs.push_p_param(p,!0));let h=[];for(let p of e.knots)h.push(this.gcs.push_p_param(p,!0));let u=ga(this.module,s),d=ga(this.module,c),f=ga(this.module,h),g=ga(this.module,e.mult),M=this.gcs.make_bspline(r,a,o,l,u,d,f,g,e.degree,e.periodic);return this.bspline_gcs_cache.set(e.id,M),M}default:throw new Error(`not-implemented object type: ${t.type}`)}}push_constraint(t){var e,i,s,r;let a=[],o=[],l=hp[t.type];if(l===void 0)throw new Error(`unknown constraint type: ${t.type}`);let c=-1;t.temporary||(c=this.sketch_index.counter()+1);for(let u of Object.keys(l)){let d=l[u];if(d===void 0)throw new Error(`unknown parameter type: ${d} in constraint ${t.type}`);if(u==="tagId"){a.push(c);continue}if(u==="driving"){a.push((e=t.driving)!==null&&e!==void 0?e:!0);continue}if(u==="internalalignment"&&t.type==="equal"){a.push((i=t.internalalignment)!==null&&i!==void 0?i:ud.NoInternalAlignment);continue}let f=t[u],g=(s=t.driving)!==null&&s!==void 0?s:!0;if(d==="object_param_or_number"){if(typeof f=="number"){if(!t.driving){let p=this.nondriving_constraint_params_order.get(t.id);p===void 0?this.nondriving_constraint_params_order.set(t.id,[u]):p.push(u)}let M=this.push_p_params(t.id,[f],g);a.push(M)}else if(typeof f=="string"){let M=this.sketch_param_index.get(f);if(M===void 0)throw new Error(`couldn't parse object param: ${u} in constraint ${t.type}: unknown param ${f}`);a.push(M)}else if(typeof f=="boolean")a.push(f);else if(f!==void 0){let M=this.sketch_index.get_primitive_or_fail(f.o_id);if(!Qs(M))throw new Error(`Primitive #${f.o_id} (${M.type}) is not supported to be referenced from a constraint.`);let p=this.get_primitive_addr(f.o_id)+_d(M.type,f.prop);a.push(p)}}else if(d==="object_id"&&typeof f=="string"){let M=this.sketch_index.get_primitive_or_fail(f),p=this.sketch_primitive_to_gcs(M);a.push(p),M.type!=="bspline"&&o.push(p)}else if(d==="primitive_type"&&(typeof f=="number"||typeof f=="boolean"))a.push(f);else throw new Error(`unhandled parameter ${u} type: ${d}`)}let h=t.type;if(this.gcs[`add_constraint_${h}`](...a,(r=t.scale)!==null&&r!==void 0?r:1),this.enable_equal_optimization&&h==="equal"){let[u,d]=[a[0],a[1]];typeof u=="number"&&typeof d=="number"&&(this.gcs.get_is_fixed(u)&&!this.gcs.get_is_fixed(d)?this.gcs.set_p_param(d,this.gcs.get_p_param(u),!1):this.gcs.get_is_fixed(d)&&!this.gcs.get_is_fixed(u)&&this.gcs.set_p_param(u,this.gcs.get_p_param(d),!1))}for(let u of o)u.delete()}get_primitive_addr(t){let e=this.p_param_index.get(t);if(e===void 0)throw new Error(`sketch object ${t} not found in p-params index`);return e}pull_primitive(t){this.p_param_index.has(t.id)?t.type==="point"?this.pull_point(t):t.type==="line"?this.pull_line(t):t.type==="arc"?this.pull_arc(t):t.type==="circle"?this.pull_circle(t):t.type==="ellipse"?this.pull_ellipse(t):t.type==="arc_of_ellipse"?this.pull_arc_of_ellipse(t):t.type==="hyperbola"?this.pull_hyperbola(t):t.type==="arc_of_hyperbola"?this.pull_arc_of_hyperbola(t):t.type==="parabola"?this.pull_parabola(t):t.type==="arc_of_parabola"?this.pull_arc_of_parabola(t):t.type==="bspline"?this.pull_bspline(t):pd(t)?this.pull_constraint(t):this.sketch_index.set_primitive(t):this.sketch_index.set_primitive(t)}pull_point(t){let e=this.get_primitive_addr(t.id),i=Object.assign(Object.assign({},t),{x:this.gcs.get_p_param(e+Rt.point.x),y:this.gcs.get_p_param(e+Rt.point.y)});this.sketch_index.set_primitive(i)}pull_line(t){this.sketch_index.set_primitive(t)}pull_arc(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{start_angle:this.gcs.get_p_param(e+Rt.arc.start_angle),end_angle:this.gcs.get_p_param(e+Rt.arc.end_angle),radius:this.gcs.get_p_param(e+Rt.arc.radius)}))}pull_circle(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{radius:this.gcs.get_p_param(e+Rt.circle.radius)}))}pull_ellipse(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{radmin:this.gcs.get_p_param(e+Rt.ellipse.radmin)}))}pull_arc_of_ellipse(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{start_angle:this.gcs.get_p_param(e+Rt.arc_of_ellipse.start_angle),end_angle:this.gcs.get_p_param(e+Rt.arc_of_ellipse.end_angle),radmin:this.gcs.get_p_param(e+Rt.arc_of_ellipse.radmin)}))}pull_hyperbola(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{radmin:this.gcs.get_p_param(e+Rt.hyperbola.radmin)}))}pull_arc_of_hyperbola(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{start_angle:this.gcs.get_p_param(e+Rt.arc_of_hyperbola.start_angle),end_angle:this.gcs.get_p_param(e+Rt.arc_of_hyperbola.end_angle),radmin:this.gcs.get_p_param(e+Rt.arc_of_hyperbola.radmin)}))}pull_parabola(t){this.sketch_index.set_primitive(t)}pull_arc_of_parabola(t){let e=this.get_primitive_addr(t.id);this.sketch_index.set_primitive(Object.assign(Object.assign({},t),{start_angle:this.gcs.get_p_param(e+Rt.arc_of_parabola.start_angle),end_angle:this.gcs.get_p_param(e+Rt.arc_of_parabola.end_angle)}))}pull_bspline(t){this.sketch_index.set_primitive(t)}pull_constraint(t){if(t.driving!==!1)return;let e=this.get_primitive_addr(t.id),i=this.nondriving_constraint_params_order.get(t.id);if(!i){console.warn(`No offsets for constraint type ${t.type}`);return}let s=Object.assign({},t);function r(a,o,l){a[o]=l}for(let[a,o]of i.entries()){let l=this.gcs.get_p_param(e+a);r(s,o,l)}this.sketch_index.set_primitive(s)}};var dp={sqrt:Math.sqrt,abs:Math.abs,round:Math.round,floor:Math.floor,ceil:Math.ceil,min:Math.min,max:Math.max,sin:n=>Math.sin(n*Math.PI/180),cos:n=>Math.cos(n*Math.PI/180),tan:n=>Math.tan(n*Math.PI/180),asin:n=>Math.asin(n)*180/Math.PI,acos:n=>Math.acos(n)*180/Math.PI,atan:n=>Math.atan(n)*180/Math.PI},yd={pi:Math.PI,PI:Math.PI};function xv(n){let t=[],e=0,i=String(n).replace(/,/g,".");for(;e<i.length;){let s=i[e];if(/\s/.test(s)){e++;continue}if(/[0-9.]/.test(s)){let r=e;for(;r<i.length&&/[0-9.eE]/.test(i[r]);)(i[r]==="e"||i[r]==="E")&&(i[r+1]==="-"||i[r+1]==="+")&&r++,r++;let a=Number(i.slice(e,r));if(!Number.isFinite(a))throw new Error(`Numero non valido: ${i.slice(e,r)}`);t.push({t:"n",v:a}),e=r;continue}if(/[A-Za-z_À-ſ]/.test(s)){let r=e;for(;r<i.length&&/[A-Za-z0-9_À-ſ]/.test(i[r]);)r++;let a=i.slice(e,r);if(["mm","deg","gradi"].includes(a)&&t.length&&t[t.length-1].t==="n"){e=r;continue}t.push({t:"id",v:a}),e=r;continue}if("+-*/^();".includes(s)){t.push({t:s}),e++;continue}if(s==="\xB0"){e++;continue}throw new Error(`Carattere non valido: ${s}`)}return t}function Hn(n,t={}){if(typeof n=="number")return n;let e=xv(n);if(!e.length)throw new Error("Valore mancante");let i=0,s=()=>e[i],r=d=>{if(!e[i]||e[i].t!==d)throw new Error(`Atteso "${d}"`);return e[i++]};function a(){let d=e[i++];if(!d)throw new Error("Espressione incompleta");if(d.t==="n")return d.v;if(d.t==="("){let f=h();return r(")"),f}if(d.t==="-")return-o();if(d.t==="+")return o();if(d.t==="id"){if(s()&&s().t==="("){let f=dp[d.v];if(!f)throw new Error(`Funzione sconosciuta: ${d.v}`);i++;let g=[];if(s()&&s().t!==")")for(g.push(h());s()&&s().t===";";)i++,g.push(h());return r(")"),f(...g)}if(d.v in t)return t[d.v];if(d.v in yd)return yd[d.v];throw new Error(`Parametro sconosciuto: ${d.v}`)}throw new Error("Espressione non valida")}function o(){return l()}function l(){let d=a();return s()&&s().t==="^"?(i++,d**o()):d}function c(){let d=o();for(;s()&&(s().t==="*"||s().t==="/");){let f=e[i++].t,g=o();d=f==="*"?d*g:d/g}return d}function h(){let d=c();for(;s()&&(s().t==="+"||s().t==="-");){let f=e[i++].t,g=c();d=f==="+"?d+g:d-g}return d}let u=h();if(i<e.length)throw new Error("Espressione non valida");if(!Number.isFinite(u))throw new Error("Risultato non numerico");return u}function Gn(n=[]){let t={},e={};for(let i of n)try{t[i.name]=Hn(i.expr,t)}catch(s){e[i.name]=s.message,t[i.name]=0}return{scope:t,errors:e}}function xd(n){return/^[A-Za-z_][A-Za-z0-9_]*$/.test(n)&&!(n in dp)&&!(n in yd)}function Oe(n,t=3){if(!Number.isFinite(n))return"?";let e=Number(n.toFixed(t));return String(Object.is(e,-0)?0:e)}var Bi=null;async function fp(n){let t=await gd(n?{locateFile:()=>n}:void 0);Bi=new ya(new t.GcsSystem,t)}var vv={point:["id","type","x","y","fixed"],line:["id","type","p1_id","p2_id"],circle:["id","type","c_id","radius"],arc:["id","type","c_id","radius","start_angle","end_angle","start_id","end_id"]},pp=Math.PI/180;function vd(n){switch(n.type){case"p2p_distance":case"p2l_distance":return{k:"distance"};case"circle_diameter":case"arc_diameter":return{k:"diameter"};case"circle_radius":case"arc_radius":return{k:"radius"};case"l2l_angle_ll":return{k:"angle",deg:!0};case"difference":return{k:"difference",signed:!0};case"coordinate_x":return{k:"x"};case"coordinate_y":return{k:"y"};default:return null}}function up(n){let t=vv[n.type],e={};for(let i of t)e[i]=n[i];return n.type==="point"&&(e.fixed=!!(n.fixed||n.ref)),e}function ec(n,t={},e=null){if(!Bi)throw new Error("Solver non pronto");let i=n.geo,s=[],r=i.filter(p=>p.type==="point"),a=i.filter(p=>p.type!=="point");for(let p of r)s.push(up(p));for(let p of a)s.push(up(p));for(let p of a)p.type==="arc"&&s.push({id:`${p.id}#r`,type:"arc_rules",a_id:p.id});let o=null;for(let p of n.cons||[]){if(p.off)continue;let m={...p};delete m.expr,delete m.lx,delete m.ly,delete m.sign,delete m.off;let y=vd(p);if(y&&p.expr!=null)try{let E=Hn(p.expr,t);y.deg&&(E*=pp),y.signed&&(E*=p.sign||1),m[y.k]=E}catch(E){o=E.message;continue}s.push(m)}(e?Array.isArray(e)?e:[e]:[]).forEach((p,m)=>{s.push({id:`#dx${m}`,type:"coordinate_x",p_id:p.id,x:p.x,temporary:!0}),s.push({id:`#dy${m}`,type:"coordinate_y",p_id:p.id,y:p.y,temporary:!0})}),Bi.clear_data(),Bi.push_primitives_and_params(s);let c=Bi.solve(),h=c===tc.Success||c===tc.Converged,u=null;try{u=Bi.gcs.dof()}catch{}let d=Bi.has_gcs_conflicting_constraints()?Bi.get_gcs_conflicting_constraints():[],f=Bi.has_gcs_redundant_constraints()?Bi.get_gcs_redundant_constraints():[];if(!h)return{ok:h,geo:i,dof:u,conflicting:d,redundant:f,error:o||"Vincoli incompatibili"};Bi.apply_solution();let g=new Map(Bi.sketch_index.get_primitives().map(p=>[p.id,p])),M=i.map(p=>{let m=g.get(p.id);return m?p.type==="point"?{...p,x:m.x,y:m.y}:p.type==="circle"?{...p,radius:m.radius}:p.type==="arc"?{...p,radius:m.radius,start_angle:m.start_angle,end_angle:m.end_angle}:p:p});return{ok:h,geo:M,dof:u,conflicting:d,redundant:f,error:o}}function bd(n,t){let e=new Map(t.map(s=>[s.id,s])),i=s=>e.get(s);switch(n.type){case"p2p_distance":{let s=i(n.p1_id),r=i(n.p2_id);return Math.hypot(r.x-s.x,r.y-s.y)}case"p2l_distance":{let s=i(n.p_id),r=i(n.l_id),a=i(r.p1_id),o=i(r.p2_id),l=o.x-a.x,c=o.y-a.y;return Math.abs((s.x-a.x)*c-(s.y-a.y)*l)/(Math.hypot(l,c)||1)}case"circle_diameter":return i(n.c_id).radius*2;case"arc_diameter":return i(n.a_id).radius*2;case"circle_radius":return i(n.c_id).radius;case"arc_radius":return i(n.a_id).radius;case"l2l_angle_ll":{let s=i(n.l1_id),r=i(n.l2_id),a=l=>{let c=i(l.p1_id),h=i(l.p2_id);return Math.atan2(h.y-c.y,h.x-c.x)},o=a(r)-a(s);for(;o<=-Math.PI;)o+=2*Math.PI;for(;o>Math.PI;)o-=2*Math.PI;return o/pp}case"difference":{let s=i(n.param1.o_id)[n.param1.prop],r=i(n.param2.o_id)[n.param2.prop];return Math.abs(s-r)}default:return 0}}var hn=Math.PI*2,bv=1e-7,nc=n=>(n%=hn,n<0?n+hn:n),xa=(n,t)=>Math.hypot(n[0]-t[0],n[1]-t[1]);function Mv(n){let t=new Map(n.map(s=>[s.id,s])),e=s=>{let r=t.get(s);return[r.x,r.y]},i=[];for(let s of n)if(!(s.construction||s.ref)){if(s.type==="line")i.push({src:s.id,kind:"line",a:e(s.p1_id),b:e(s.p2_id)});else if(s.type==="circle")i.push({src:s.id,kind:"circle",c:e(s.c_id),r:s.radius});else if(s.type==="arc"){let r=e(s.c_id),a=nc(s.start_angle),o=nc(s.end_angle-s.start_angle);o<1e-9&&(o=hn),i.push({src:s.id,kind:"arc",c:r,r:s.radius,a0:a,sw:o})}}return i}function Wn(n,t){if(n.kind==="line")return[n.a[0]+(n.b[0]-n.a[0])*t,n.a[1]+(n.b[1]-n.a[1])*t];let e=n.kind==="circle"?hn*t:n.a0+n.sw*t;return[n.c[0]+n.r*Math.cos(e),n.c[1]+n.r*Math.sin(e)]}function Md(n,t){if(n.kind==="circle")return nc(t)/hn;let e=nc(t-n.a0);return e<=n.sw+1e-9?Math.min(1,e/n.sw):hn-e<1e-9?0:null}function Sv(n){return n.kind==="line"?xa(n.a,n.b):n.r*(n.kind==="circle"?hn:n.sw)}function _p(n,t){let e=[];if(n.kind==="line"&&t.kind==="line"){let f=[n.b[0]-n.a[0],n.b[1]-n.a[1]],g=[t.b[0]-t.a[0],t.b[1]-t.a[1]],M=f[0]*g[1]-f[1]*g[0],p=Math.max(Math.hypot(...f),Math.hypot(...g));if(Math.abs(M)<1e-12*p*p)return e;let m=[t.a[0]-n.a[0],t.a[1]-n.a[1]],y=(m[0]*g[1]-m[1]*g[0])/M,E=(m[0]*f[1]-m[1]*f[0])/M,v=1e-9/Math.max(Math.hypot(...f),1e-12)*1e3,C=1e-9/Math.max(Math.hypot(...g),1e-12)*1e3;return y>=-v&&y<=1+v&&E>=-C&&E<=1+C&&e.push([ic(y),ic(E)]),e}if(n.kind==="line")return _p(t,n).map(([f,g])=>[g,f]);if(t.kind==="line"){let f=[t.b[0]-t.a[0],t.b[1]-t.a[1]],g=[t.a[0]-n.c[0],t.a[1]-n.c[1]],M=f[0]*f[0]+f[1]*f[1],p=2*(g[0]*f[0]+g[1]*f[1]),m=g[0]*g[0]+g[1]*g[1]-n.r*n.r,y=p*p-4*M*m;if(M<1e-18)return e;let E=1e-9*M*n.r;if(y<-E)return e;y=Math.max(0,y);let v=Math.sqrt(y),C=y<1e-18?[-p/(2*M)]:[(-p-v)/(2*M),(-p+v)/(2*M)],P=1e-6/Math.sqrt(M);for(let x of C){if(x<-P||x>1+P)continue;let R=Wn(t,ic(x)),V=Md(n,Math.atan2(R[1]-n.c[1],R[0]-n.c[0]));V!==null&&e.push([V,ic(x)])}return e}let i=t.c[0]-n.c[0],s=t.c[1]-n.c[1],r=Math.hypot(i,s);if(r<1e-9)return e;let a=1e-7*Math.max(n.r,t.r,1);if(r>n.r+t.r+a||r<Math.abs(n.r-t.r)-a)return e;let o=(n.r*n.r-t.r*t.r+r*r)/(2*r),l=n.r*n.r-o*o,c=l>0?Math.sqrt(l):0,h=n.c[0]+o*i/r,u=n.c[1]+o*s/r,d=c<1e-9?[[h,u]]:[[h+c*-s/r,u+c*i/r],[h-c*-s/r,u-c*i/r]];for(let f of d){let g=Md(n,Math.atan2(f[1]-n.c[1],f[0]-n.c[0])),M=Md(t,Math.atan2(f[1]-t.c[1],f[0]-t.c[0]));g!==null&&M!==null&&e.push([g,M])}return e}var ic=n=>Math.min(1,Math.max(0,n));function wv(n,t,e){if(n.kind==="line")return{src:n.src,kind:"line",a:Wn(n,t),b:Wn(n,e)};let i=n.a0+n.sw*t,s=n.a0+n.sw*e;return{src:n.src,kind:"arc",c:n.c,r:n.r,a0:i,sw:s-i,a:Wn(n,t),b:Wn(n,e)}}function Ev(n,t){let e=n.a0+n.sw*t;return[n.c[0]+n.r*Math.cos(e),n.c[1]+n.r*Math.sin(e)]}function va(n,t){let e=n.e,i=n.fwd?t:1-t;return e.kind==="line"?[e.a[0]+(e.b[0]-e.a[0])*i,e.a[1]+(e.b[1]-e.a[1])*i]:Ev(e,i)}function Sd(n){let t=0;for(let e=0,i=n.length;e<i;e++){let s=n[e],r=n[(e+1)%i];t+=s[0]*r[1]-r[0]*s[1]}return t/2}function ba(n,t){let e=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){let r=t[i],a=t[s];r[1]>n[1]!=a[1]>n[1]&&n[0]<(a[0]-r[0])*(n[1]-r[1])/(a[1]-r[1])+r[0]&&(e=!e)}return e}function Tv(n,t,e){let i=e[0]-t[0],s=e[1]-t[1],r=i*i+s*s,a=r?((n[0]-t[0])*i+(n[1]-t[1])*s)/r:0;return a=Math.max(0,Math.min(1,a)),Math.hypot(n[0]-t[0]-a*i,n[1]-t[1]-a*s)}function mp(n,t){let e=1/0;for(let i=0;i<t.length;i++)e=Math.min(e,Tv(n,t[i],t[(i+1)%t.length]));return e}function Av(n,t){let e=n.e;if(e.kind==="line"){t.push(n.fwd?e.a:e.b);return}let i=Math.max(2,Math.ceil(Math.abs(e.sw)/hn*96));for(let s=0;s<i;s++)t.push(va(n,s/i))}function Rv(n){let t=n.e;return t.kind==="line"?n.fwd?{k:"line",a:t.a,b:t.b,src:t.src}:{k:"line",a:t.b,b:t.a,src:t.src}:{k:"arc",a:va(n,0),b:va(n,1),m:va(n,.5),c:t.c,r:t.r,src:t.src}}function sc(n){let t=Mv(n).filter(y=>Sv(y)>bv),e=t.length,i=t.map(y=>y.kind==="circle"?[]:[0,1]);for(let y=0;y<e;y++)for(let E=y+1;E<e;E++)for(let[v,C]of _p(t[y],t[E]))i[y].push(v),i[E].push(C);let s=[],r=[];t.forEach((y,E)=>{let v=i[E].map(C=>y.kind==="circle"?C%1:C).sort((C,P)=>C-P);if(v=v.filter((C,P)=>P===0||C-v[P-1]>1e-9),y.kind==="circle"){if(v.length>1&&1-v[v.length-1]+v[0]<1e-9&&v.pop(),!v.length){r.push(y);return}for(let C=0;C<v.length;C++){let P=v[C],x=C+1<v.length?v[C+1]:v[0]+1;s.push({src:y.src,kind:"arc",c:y.c,r:y.r,a0:hn*P,sw:hn*(x-P),a:Wn(y,P),b:Wn(y,x%1)})}return}for(let C=0;C+1<v.length;C++)s.push(wv(y,v[C],v[C+1]))});let a=s.filter(y=>(y.kind==="line"?xa(y.a,y.b):Math.abs(y.sw)*y.r)>1e-6),o=[],l=y=>{for(let E=0;E<o.length;E++)if(xa(o[E],y)<1e-5)return E;return o.push(y),o.length-1};for(let y of a)y.u=l(y.a),y.v=l(y.b),y.len=y.kind==="line"?xa(y.a,y.b):Math.abs(y.sw)*y.r;let c=a.slice();for(;;){let y=new Array(o.length).fill(0);for(let v of c)y[v.u]++,y[v.v]++;let E=c.filter(v=>y[v.u]>1&&y[v.v]>1);if(E.length===c.length)break;c=E}let h=o.map(()=>[]),u=[];for(let y of c){let E={e:y,fwd:!0,from:y.u,to:y.v},v={e:y,fwd:!1,from:y.v,to:y.u};E.twin=v,v.twin=E,u.push(E,v),h[y.u].push(E),h[y.v].push(v)}h.forEach((y,E)=>{if(!y.length)return;let v=Math.min(...y.map(C=>C.e.len));for(let C of y){let P=Math.min(.02,.02*v/C.e.len),x=va(C,P);C.ang=Math.atan2(x[1]-o[E][1],x[0]-o[E][0])}y.sort((C,P)=>C.ang-P.ang)});let d=o.map((y,E)=>E),f=y=>d[y]===y?y:d[y]=f(d[y]);for(let y of c)d[f(y.u)]=f(y.v);let g=[],M=new Set;for(let y of u){if(M.has(y))continue;let E=[],v=y,C=0;for(;!M.has(v)&&C++<1e5;){M.add(v),E.push(v);let x=h[v.to],R=x.indexOf(v.twin);v=x[(R-1+x.length)%x.length]}let P=[];for(let x of E)Av(x,P);g.push({hes:E,poly:P,area:Sd(P),comp:f(y.from),segs:E.map(Rv)})}for(let y of r){let E=[];for(let P=0;P<96;P++)E.push(Wn(y,P/96));let v=[{k:"circle",c:y.c,r:y.r,src:y.src}],C=`c${y.src}`;g.push({poly:E,area:Sd(E),comp:C,segs:v}),g.push({poly:E.slice().reverse(),area:-Sd(E),comp:C,segs:v,outer:!0})}let p=g.filter(y=>y.area>1e-9&&!y.outer),m=g.filter(y=>y.area<-1e-9);for(let y of m){let E=null;for(let v of p)v.comp!==y.comp&&ba(y.poly[0],v.poly)&&(!E||v.area<E.area)&&(E=v);E&&(E.holes||=[]).push(y)}return p.map(y=>{let E=y.holes||[],v=gp(y.segs)+(E.length?"/"+E.map(P=>gp(P.segs)).sort().join("/"):""),C=E.map(P=>P.poly);return{key:v,segs:y.segs,holes:E.map(P=>P.segs),poly:y.poly,holePolys:C,area:y.area-E.reduce((P,x)=>P+Math.abs(x.area),0),sample:Cv(y.poly,C)}}).sort((y,E)=>E.area-y.area)}function gp(n){return[...new Set(n.map(t=>t.src))].sort().join(",")}function Cv(n,t){let e=1/0,i=1/0,s=-1/0,r=-1/0;for(let[c,h]of n)e=Math.min(e,c),i=Math.min(i,h),s=Math.max(s,c),r=Math.max(r,h);let a=null,o=-1,l=28;for(let c=1;c<l;c++)for(let h=1;h<l;h++){let u=[e+(s-e)*c/l,i+(r-i)*h/l];if(!ba(u,n)||t.some(f=>ba(u,f)))continue;let d=Math.min(mp(u,n),...t.map(f=>mp(u,f)));d>o&&(o=d,a=u)}return a||n[0]}function Pv(n,t){return ba(t,n.poly)&&!n.holePolys.some(e=>ba(t,e))}function Ma(n,t){let e=n.filter(s=>s.key===t.key);if(e.length===1)return e[0];let i=e.length?e:n;if(t.seed){let s=i.find(r=>Pv(r,t.seed));if(s)return s;if(e.length){let r=null,a=1/0;for(let o of e){let l=xa(o.sample,t.seed);l<a&&(a=l,r=o)}return r}}return e[0]||null}var ls=Math.PI*2,xp=()=>[{id:"O",type:"point",x:0,y:0,fixed:!0,ref:!0},{id:"X1",type:"point",x:1,y:0,fixed:!0,ref:!0},{id:"Y1",type:"point",x:0,y:1,fixed:!0,ref:!0},{id:"AX",type:"line",p1_id:"O",p2_id:"X1",ref:!0},{id:"AY",type:"line",p1_id:"O",p2_id:"Y1",ref:!0}];function Td(){return xp()}var wd=new Set(["X1","Y1"]),Iv={horizontal_l:"H",vertical_l:"V",horizontal_pp:"H",vertical_pp:"V",parallel:"\u2225",perpendicular_ll:"\u22A5",tangent_lc:"T",tangent_la:"T",tangent_cc:"T",tangent_aa:"T",tangent_ca:"T",equal_length:"=",equal_radius_cc:"=",equal_radius_aa:"=",equal_radius_ca:"=",p2p_symmetric_ppp:"M",p2p_symmetric_ppl:"\u21CB",p2p_coincident:"\u25CF"},Lv=new Set(["p2p_distance","p2l_distance","circle_diameter","arc_diameter","circle_radius","arc_radius","l2l_angle_ll","difference"]),ac=class{constructor({host:t,viewport:e,onChange:i,toast:s,promptValue:r,getScope:a,onExit:o}){this.host=t,this.vp=e,this.onChange=i,this.toast=s,this.promptValue=r,this.getScope=a,this.onExit=o,this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.classList.add("sketch-svg"),t.appendChild(this.svg),this.active=!1,this.pointers=new Map,this.bind()}open(t,e){this.sk=JSON.parse(JSON.stringify(t)),this.sk.geo.some(i=>i.id==="O")||(this.sk.geo=[...xp(),...this.sk.geo]),this.sk.cons||=[],this.frame=e,this.seq=0;for(let i of[...this.sk.geo,...this.sk.cons]){let s=/^[a-z](\d+)$/.exec(i.id);s&&(this.seq=Math.max(this.seq,+s[1]))}this.sel=new Set,this.tool="line",this.state=null,this.undoStack=[],this.redoStack=[],this.active=!0,this.svg.style.display="block",this.view=this.fitView(),this.vp.enterSketch(e,this.view),this.vp.onResize=()=>this.render(),this.resolve(),this.render(),this.emit()}close(){return this.active=!1,this.svg.style.display="none",this.svg.innerHTML="",this.vp.onResize=null,this.vp.exitSketch(),this.sk}fitView(){let t=this.vp.canvas.getBoundingClientRect();if(!this.sk.geo.filter(c=>c.type==="point"&&!c.ref).length)return{cx:0,cy:0,s:Math.min(t.width,t.height)/160};let i=1/0,s=1/0,r=-1/0,a=-1/0;for(let c of this.sk.geo)if(c.type==="point"&&!wd.has(c.id)&&(i=Math.min(i,c.x),r=Math.max(r,c.x),s=Math.min(s,c.y),a=Math.max(a,c.y)),c.type==="circle"||c.type==="arc"){let h=this.P(c.c_id);i=Math.min(i,h.x-c.radius),r=Math.max(r,h.x+c.radius),s=Math.min(s,h.y-c.radius),a=Math.max(a,h.y+c.radius)}let o=Math.max(r-i,10),l=Math.max(a-s,10);return{cx:(i+r)/2,cy:(s+a)/2,s:Math.min(t.width/(o*1.6),t.height/(l*1.6))}}get W(){return this.vp.w}get H(){return this.vp.h}toS(t,e){let i=this.view;return[this.W/2+(t-i.cx)*i.s,this.H/2-(e-i.cy)*i.s]}toK(t,e){let i=this.view;return[(t-this.W/2)/i.s+i.cx,-(e-this.H/2)/i.s+i.cy]}P(t){return this.sk.geo.find(e=>e.id===t)}nid(t="g"){return this.seq+=1,`${t}${this.seq}`}snapshot(){return JSON.stringify({geo:this.sk.geo,cons:this.sk.cons})}push(){this.undoStack.push(this.snapshot()),this.undoStack.length>200&&this.undoStack.shift(),this.redoStack=[]}undo(){this.undoStack.length&&(this.redoStack.push(this.snapshot()),Object.assign(this.sk,JSON.parse(this.undoStack.pop())),this.sel.clear(),this.state=null,this.resolve(),this.changed())}redo(){this.redoStack.length&&(this.undoStack.push(this.snapshot()),Object.assign(this.sk,JSON.parse(this.redoStack.pop())),this.sel.clear(),this.resolve(),this.changed())}resolve(t=null){let e=ec(this.sk,this.getScope(),t);return this.status=e,e.ok&&(this.sk.geo=e.geo),e}changed(){this.regions=null,this.render(),this.emit()}emit(){this.onChange&&this.onChange(this.statusInfo())}statusInfo(){let t=this.status||{};return{dof:t.dof,ok:t.ok!==!1,conflicting:t.conflicting||[],tool:this.tool,sel:this.sel.size,canUndo:this.undoStack.length>0,canRedo:this.redoStack.length>0,selTypes:this.selTypes()}}attempt(t,e="Vincolo in conflitto con quelli esistenti"){let i=this.snapshot();t();let s=this.resolve();return!s.ok||s.conflicting&&s.conflicting.length?(Object.assign(this.sk,JSON.parse(i)),this.resolve(),this.toast(e,"warn"),this.changed(),!1):(this.undoStack.push(i),this.redoStack=[],this.changed(),!0)}setTool(t){this.tool=t,this.state=null,t!=="select"&&t!=="dim"&&this.sel.clear(),this.render(),this.emit()}tolFor(t){return t==="touch"?22:t==="pen"?13:9}hit(t,e,i,s={}){let r=this.tolFor(i),[a,o]=this.toK(t,e),l=this.view.s,c=null,h=r,u=(d,f)=>{d<h&&(h=d,c=f)};if(s.points!==!1){for(let d of this.sk.geo){if(d.type!=="point"||wd.has(d.id)||s.exclude&&s.exclude.has(d.id))continue;let[f,g]=this.toS(d.x,d.y);u(Math.hypot(f-t,g-e)*.8,{kind:"point",id:d.id})}if(c)return c}if(s.dims!==!1&&this.labelBoxes){for(let d of this.labelBoxes)if(t>=d.x0-4&&t<=d.x1+4&&e>=d.y0-4&&e<=d.y1+4)return{kind:"dim",id:d.id}}if(s.glyphs!==!1&&this.glyphBoxes){for(let d of this.glyphBoxes)if(Math.hypot(t-d.x,e-d.y)<Math.max(12,r*.7))return{kind:"cons",id:d.id}}for(let d of this.sk.geo)if(!(d.type==="point"||s.exclude&&s.exclude.has(d.id))){if(d.ref){if(s.axes===!1)continue;let f=d.id==="AX"?Math.abs(o)*l:Math.abs(a)*l;u(f+2,{kind:"curve",id:d.id,ref:!0});continue}if(d.type==="line"){let f=this.P(d.p1_id),g=this.P(d.p2_id);u(Uv([a,o],[f.x,f.y],[g.x,g.y])*l,{kind:"curve",id:d.id})}else if(d.type==="circle"){let f=this.P(d.c_id);u(Math.abs(Math.hypot(a-f.x,o-f.y)-d.radius)*l,{kind:"curve",id:d.id})}else if(d.type==="arc"){let f=this.P(d.c_id),g=Math.atan2(o-f.y,a-f.x);Ov(g,d.start_angle,d.end_angle)&&u(Math.abs(Math.hypot(a-f.x,o-f.y)-d.radius)*l,{kind:"curve",id:d.id})}}return c}placement(t,e,i,s){let r=this.hit(t,e,i,{dims:!1,glyphs:!1,exclude:s}),[a,o]=this.toK(t,e);if(r&&r.kind==="point"){let l=this.P(r.id);return{x:l.x,y:l.y,point:r.id}}if(r&&r.kind==="curve"){let l=this.P(r.id);if(l.type==="line"){let c=this.P(l.p1_id),h=this.P(l.p2_id);if(l.ref)l.id==="AX"?o=0:a=0;else{let u=vp([a,o],[c.x,c.y],[h.x,h.y]);a=c.x+(h.x-c.x)*u,o=c.y+(h.y-c.y)*u}}else{let c=this.P(l.c_id),h=Math.atan2(o-c.y,a-c.x);a=c.x+l.radius*Math.cos(h),o=c.y+l.radius*Math.sin(h)}return{x:a,y:o,curve:r.id}}return{x:a,y:o}}materialize(t){if(t.point)return t.point;let e=this.nid("p");if(this.sk.geo.push({id:e,type:"point",x:t.x,y:t.y,fixed:!1}),t.curve){let i=this.P(t.curve),s=this.nid("c");i.type==="line"?this.sk.cons.push({id:s,type:"point_on_line_pl",p_id:e,l_id:i.id}):i.type==="circle"?this.sk.cons.push({id:s,type:"point_on_circle",p_id:e,c_id:i.id}):this.sk.cons.push({id:s,type:"point_on_arc",p_id:e,a_id:i.id})}return e}addLine(t,e,i=!0){let s=this.nid("l");if(this.sk.geo.push({id:s,type:"line",p1_id:t,p2_id:e}),i){let r=this.P(t),a=this.P(e),o=Math.abs(Math.atan2(a.y-r.y,a.x-r.x)),l=3*Math.PI/180,c=o<l||Math.abs(o-Math.PI)<l,h=Math.abs(o-Math.PI/2)<l;c?this.sk.cons.push({id:this.nid("c"),type:"horizontal_l",l_id:s}):h&&this.sk.cons.push({id:this.nid("c"),type:"vertical_l",l_id:s})}return s}down(t,e,i){let s=this.tool,r=()=>this.placement(e,i,t.pointerType);if(this.gesture={sx:e,sy:i,moved:!1,type:t.pointerType},s==="select"){let a=this.hit(e,i,t.pointerType);if(this.gesture.hit=a,a&&a.kind==="point"){let o=this.P(a.id);!o.ref&&!o.fixed&&(this.gesture.drag={kind:"point",id:a.id,before:this.snapshot()})}else if(a&&a.kind==="curve"&&!a.ref){let o=this.P(a.id),[l,c]=this.toK(e,i);if(o.type==="line"){let h=this.P(o.p1_id),u=this.P(o.p2_id);this.gesture.drag={kind:"line",ids:[h.id,u.id],off:[[h.x-l,h.y-c],[u.x-l,u.y-c]],before:this.snapshot()}}else this.gesture.drag={kind:"radius",id:o.id,before:this.snapshot()}}else a&&a.kind==="dim"?this.gesture.drag={kind:"label",id:a.id,before:this.snapshot()}:this.gesture.pan={cx:this.view.cx,cy:this.view.cy};return}s==="line"?(this.state?this.state.fresh=!1:this.state={kind:"line",start:r(),fresh:!0},this.state.cur=r()):s==="rect"||s==="circle"||s==="rect3"||s==="circle2"?(this.state?this.state.fresh=!1:this.state={kind:s,start:r(),fresh:!0},this.state.cur=r()):s==="arc"?(this.state?this.state.fresh=!1:this.state={kind:"arc",pts:[r()],fresh:!0},this.state.cur=r()):s==="point"&&(this.state={kind:"point",cur:r()}),this.render()}move(t,e,i){let s=this.gesture;if(s&&Math.hypot(e-s.sx,i-s.sy)>8&&(s.moved=!0),this.tool==="select"){if(!s)return;if(s.pan&&s.moved){this.view.cx=s.pan.cx-(e-s.sx)/this.view.s,this.view.cy=s.pan.cy+(i-s.sy)/this.view.s,this.vp.setSketchView(this.view),this.render();return}s.drag&&s.moved&&this.dragTo(s.drag,e,i);return}this.state&&(this.state.cur=this.placement(e,i,t.pointerType),this.render())}up(t,e,i){let s=this.gesture;if(this.gesture=null,this.tool==="select"){if(!s)return;if(s.drag&&s.moved){this.undoStack.push(s.drag.before),this.redoStack=[],this.changed();return}s.moved||this.tapSelect(s.hit);return}if(this.tool==="dim"){(!s||!s.moved)&&this.tapDim(e,i,t.pointerType);return}let r=this.state;if(!r)return;let a=this.placement(e,i,t.pointerType);if(r.kind==="point"){a.point||(this.push(),this.materialize(a),this.resolve()),this.state=null,this.changed();return}if(r.fresh&&!(s&&s.moved)){r.fresh=!1,this.render();return}if(r.kind==="line"){let o=r.lastId?this.P(r.lastId):r.start;if(Math.hypot(a.x-o.x,a.y-o.y)*this.view.s<4){this.render();return}this.push();let l=r.lastId||this.materialize(r.start),c=this.materialize(a);this.addLine(l,c),this.resolve(),a.point?this.state=null:this.state={kind:"line",lastId:c},this.changed();return}if(r.kind==="rect"||r.kind==="circle"){let o=r.start;if(Math.hypot(a.x-o.x,a.y-o.y)*this.view.s<4){this.render();return}if(this.push(),r.kind==="rect")this.makeRect(o,a);else{let l=this.materialize(o),c=this.P(l);this.sk.geo.push({id:this.nid("k"),type:"circle",c_id:l,radius:Math.hypot(a.x-c.x,a.y-c.y)})}this.state=null,this.resolve(),this.changed();return}if(r.kind==="arc"){if(r.pts.push(a),r.pts.length<3){this.render();return}this.push(),this.makeArc(r.pts[0],r.pts[1],r.pts[2]),this.state=null,this.resolve(),this.changed()}}makeRect(t,e){let i=this.materialize(t),s=this.materialize(e),r=this.P(i),a=this.P(s),o=this.nid("p"),l=this.nid("p");this.sk.geo.push({id:o,type:"point",x:a.x,y:r.y,fixed:!1},{id:l,type:"point",x:r.x,y:a.y,fixed:!1});let c=this.addLine(i,o,!1),h=this.addLine(o,s,!1),u=this.addLine(s,l,!1),d=this.addLine(l,i,!1);this.sk.cons.push({id:this.nid("c"),type:"horizontal_l",l_id:c},{id:this.nid("c"),type:"horizontal_l",l_id:u},{id:this.nid("c"),type:"vertical_l",l_id:h},{id:this.nid("c"),type:"vertical_l",l_id:d})}makeArc(t,e,i){let s=yp(t,i,e);if(!s){this.toast("I tre punti sono allineati","warn");return}let r=(i.x-t.x)*(e.y-i.y)-(i.y-t.y)*(e.x-i.x)>0,a=this.materialize(t),o=this.materialize(e),l=this.nid("p");this.sk.geo.push({id:l,type:"point",x:s.x,y:s.y,fixed:!1});let[c,h]=r?[a,o]:[o,a],u=this.P(c),d=this.P(h);this.sk.geo.push({id:this.nid("a"),type:"arc",c_id:l,radius:s.r,start_angle:Math.atan2(u.y-s.y,u.x-s.x),end_angle:Math.atan2(d.y-s.y,d.x-s.x),start_id:c,end_id:h})}dragTo(t,e,i){let[s,r]=this.toK(e,i);if(t.kind==="label"){let o=this.sk.cons.find(l=>l.id===t.id);o&&(o.lx=s,o.ly=r,this.render());return}if(t.kind==="radius"){let o=this.P(t.id),l=this.P(o.c_id),c=Math.hypot(s-l.x,r-l.y);o.radius=Math.max(c,.01),o.type==="arc"?this.resolve():this.resolve(),this.render();return}let a=t.kind==="point"?[{id:t.id,x:s,y:r}]:t.ids.map((o,l)=>({id:o,x:s+t.off[l][0],y:r+t.off[l][1]}));this.resolve(a),this.render()}tapSelect(t){if(!t){this.sel.clear(),this.render(),this.emit();return}if(t.kind==="dim"){this.editDim(t.id);return}let e=t.id;this.sel.has(e)?this.sel.delete(e):this.sel.add(e),this.render(),this.emit()}tapDim(t,e,i){let s=this.hit(t,e,i,{glyphs:!1});if(s&&s.kind==="dim"){this.editDim(s.id);return}let r=this.state&&this.state.kind==="dim"?this.state:this.state={kind:"dim",items:[]},[a,o]=this.toK(t,e);if(!s){if(r.items.length===1){let c=this.P(r.items[0].id);if(c.type==="line"&&!c.ref){this.createDim({type:"p2p_distance",p1_id:c.p1_id,p2_id:c.p2_id},[a,o]);return}}this.state=null,this.sel.clear(),this.render(),this.emit();return}let l=this.P(s.id);if(s.kind==="curve"&&(l.type==="circle"||l.type==="arc")&&!r.items.length){this.createDim(l.type==="circle"?{type:"circle_diameter",c_id:l.id}:{type:"arc_radius",a_id:l.id},[a,o]);return}if(r.items.push(s),this.sel.add(s.id),r.items.length===2){let[c,h]=r.items.map(g=>this.P(g.id)),u=g=>g.type==="line",d=g=>g.type==="point",f=null;if(d(c)&&d(h))f={type:"p2p_distance",p1_id:c.id,p2_id:h.id};else if(d(c)&&u(h))f={type:"p2l_distance",p_id:c.id,l_id:h.id};else if(u(c)&&d(h))f={type:"p2l_distance",p_id:h.id,l_id:c.id};else if(u(c)&&u(h)){let g=m=>{let y=this.P(m.p1_id),E=this.P(m.p2_id);return rc([E.x-y.x,E.y-y.y])},M=g(c),p=g(h);Math.abs(M[0]*p[1]-M[1]*p[0])<1e-6?f={type:"p2l_distance",p_id:h.p1_id,l_id:c.id}:f={type:"l2l_angle_ll",l1_id:c.id,l2_id:h.id}}f?this.createDim(f,[a,o]):(this.toast("Combinazione non quotabile","warn"),this.state=null,this.sel.clear(),this.render());return}this.render(),this.emit()}async createDim(t,e){t.id=this.nid("d"),t.lx=e[0],t.ly=e[1];let i=bd(t,this.sk.geo);t.expr=Oe(i);let s=vd(t);t[s.k]=s.deg?i*Math.PI/180:i,this.state=null,this.sel.clear(),this.attempt(()=>this.sk.cons.push(t),"Quota non applicabile: lo schizzo \xE8 gi\xE0 vincolato qui")&&await this.editDim(t.id,!0)}async editDim(t,e=!1){let i=this.sk.cons.find(c=>c.id===t);if(!i)return;let r=i.type==="p2p_distance"||i.type==="difference"&&i.param1&&(i.param1.prop==="x"||i.param1.prop==="y")?[["al","Allineata"],["h","Orizzontale"],["v","Verticale"]]:null,a=i.type==="difference"?i.param1.prop==="x"?"h":"v":"al",o=i.type==="l2l_angle_ll",l=await this.promptValue({title:o?"Angolo (\xB0)":i.type.includes("diameter")?"Diametro (mm)":i.type.includes("radius")?"Raggio (mm)":"Distanza (mm)",value:i.expr,options:r,option:a,allowDelete:!e});if(l){if(l.remove){this.attempt(()=>{this.sk.cons=this.sk.cons.filter(c=>c.id!==t)});return}this.attempt(()=>{let c=this.sk.cons.find(h=>h.id===t);if(r&&l.option!==a){let h=c.type==="difference"?c.param2.o_id:c.p1_id,u=c.type==="difference"?c.param1.o_id:c.p2_id;for(let d of["p1_id","p2_id","param1","param2","distance","difference","sign"])delete c[d];if(l.option==="al")c.type="p2p_distance",c.p1_id=h,c.p2_id=u;else{let d=l.option==="h"?"x":"y",f=this.P(h),g=this.P(u);c.type="difference",c.param1={o_id:u,prop:d},c.param2={o_id:h,prop:d},c.sign=g[d]-f[d]<0?-1:1}}c.expr=l.value},"Valore non applicabile: controlla la quota o i vincoli")}}selTypes(){let t={point:0,line:0,circle:0,arc:0,cons:0,axis:0};for(let e of this.sel){let i=this.P(e);if(!i){t.cons++;continue}i.ref&&i.type==="line"?t.axis++:t[i.type]++}return t}applyConstraint(t){let e=[...this.sel].map(c=>this.P(c)).filter(Boolean),i=e.filter(c=>c.type==="point"),s=e.filter(c=>c.type==="line"),r=e.filter(c=>c.type==="circle"||c.type==="arc"),a=[],o=c=>a.push({id:this.nid("c"),...c}),l=c=>{this.toast(c,"warn")};switch(t){case"coincident":if(i.length===2)o({type:"p2p_coincident",p1_id:i[0].id,p2_id:i[1].id});else if(i.length===1&&s.length===1)o({type:"point_on_line_pl",p_id:i[0].id,l_id:s[0].id});else if(i.length===1&&r.length===1)o(r[0].type==="circle"?{type:"point_on_circle",p_id:i[0].id,c_id:r[0].id}:{type:"point_on_arc",p_id:i[0].id,a_id:r[0].id});else return l("Seleziona due punti, o un punto e una curva");break;case"horizontal":case"vertical":{let c=t==="horizontal"?"horizontal":"vertical",h=s.filter(u=>!u.ref);if(h.length)h.forEach(u=>o({type:`${c}_l`,l_id:u.id}));else if(i.length===2)o({type:`${c}_pp`,p1_id:i[0].id,p2_id:i[1].id});else return l("Seleziona linee o due punti");break}case"parallel":case"perpendicular":if(s.length!==2)return l("Seleziona due linee");o({type:t==="parallel"?"parallel":"perpendicular_ll",l1_id:s[0].id,l2_id:s[1].id});break;case"tangent":{if(s.length===1&&r.length===1){let c=r[0];o(c.type==="circle"?{type:"tangent_lc",l_id:s[0].id,c_id:c.id}:{type:"tangent_la",l_id:s[0].id,a_id:c.id})}else if(r.length===2){let[c,h]=r;if(c.type==="circle"&&h.type==="circle")o({type:"tangent_cc",c1_id:c.id,c2_id:h.id});else if(c.type==="arc"&&h.type==="arc")o({type:"tangent_aa",a1_id:c.id,a2_id:h.id});else{let u=c.type==="circle"?c:h,d=c.type==="arc"?c:h;o({type:"tangent_ca",c_id:u.id,a_id:d.id})}}else return l("Seleziona una linea e una curva, o due curve");break}case"equal":if(s.length>=2)for(let c=1;c<s.length;c++)o({type:"equal_length",l1_id:s[0].id,l2_id:s[c].id});else if(r.length>=2)for(let c=1;c<r.length;c++){let h=r[0],u=r[c];if(h.type==="circle"&&u.type==="circle")o({type:"equal_radius_cc",c1_id:h.id,c2_id:u.id});else if(h.type==="arc"&&u.type==="arc")o({type:"equal_radius_aa",a1_id:h.id,a2_id:u.id});else{let d=h.type==="circle"?h:u,f=h.type==="arc"?h:u;o({type:"equal_radius_ca",c_id:d.id,a_id:f.id})}}else return l("Seleziona due o pi\xF9 linee, o due o pi\xF9 cerchi/archi");break;case"midpoint":if(i.length===1&&s.length===1)o({type:"p2p_symmetric_ppp",p1_id:s[0].p1_id,p2_id:s[0].p2_id,p_id:i[0].id});else return l("Seleziona un punto e una linea");break;case"concentric":if(r.length===2)o({type:"p2p_coincident",p1_id:r[0].c_id,p2_id:r[1].c_id});else if(r.length===1&&i.length===1)o({type:"p2p_coincident",p1_id:r[0].c_id,p2_id:i[0].id});else return l("Seleziona due cerchi o archi");break;case"symmetric":if(i.length===2&&s.length===1)o({type:"p2p_symmetric_ppl",p1_id:i[0].id,p2_id:i[1].id,l_id:s[0].id});else return l("Seleziona due punti e la linea di simmetria");break;case"fix":{let c=i.filter(h=>!h.ref);if(!c.length)return l("Seleziona dei punti");this.attempt(()=>c.forEach(h=>{let u=this.P(h.id);u.fixed=!u.fixed})),this.sel.clear(),this.render(),this.emit();return}default:return}this.attempt(()=>this.sk.cons.push(...a))&&(this.sel.clear(),this.render(),this.emit())}toggleConstruction(){let t=[...this.sel].map(i=>this.P(i)).filter(i=>i&&i.type!=="point"&&!i.ref);if(!t.length){this.toast("Seleziona linee, cerchi o archi","warn");return}this.push();let e=!t.every(i=>i.construction);t.forEach(i=>{i.construction=e}),this.sel.clear(),this.changed()}deleteSelection(){if(!this.sel.size){this.toast("Seleziona cosa eliminare","warn");return}this.push();let t=new Set;for(let s of this.sel){let r=this.P(s);r&&r.ref||t.add(s)}for(let s of this.sk.geo)["p1_id","p2_id","c_id","start_id","end_id"].some(r=>s[r]&&t.has(s[r]))&&t.add(s.id);let e=this.sk.geo.filter(s=>t.has(s.id)&&s.type!=="point"),i=new Set;for(let s of this.sk.geo)if(!t.has(s.id))for(let r of["p1_id","p2_id","c_id","start_id","end_id"])s[r]&&i.add(s[r]);for(let s of e)for(let r of["p1_id","p2_id","c_id","start_id","end_id"])s[r]&&!i.has(s[r])&&!this.P(s[r]).ref&&t.add(s[r]);this.sk.geo=this.sk.geo.filter(s=>!t.has(s.id)),this.sk.cons=this.sk.cons.filter(s=>!t.has(s.id)&&!Dv(s).some(r=>t.has(r))),this.sel.clear(),this.state=null,this.resolve(),this.changed()}cancel(){return this.state?(this.state=null,this.sel.clear(),this.render(),this.emit(),!0):this.sel.size?(this.sel.clear(),this.render(),this.emit(),!0):!1}bind(){let t=this.svg;t.addEventListener("pointerdown",i=>{if(!this.active)return;t.setPointerCapture(i.pointerId);let s=t.getBoundingClientRect();if(this.pointers.set(i.pointerId,{x:i.clientX-s.left,y:i.clientY-s.top}),this.pointers.size===2){this.gesture=null,this.state&&this.state.fresh&&this.state.kind!=="dim"&&(this.state=null);let[r,a]=[...this.pointers.values()];this.pinch={d:Math.hypot(r.x-a.x,r.y-a.y),m:[(r.x+a.x)/2,(r.y+a.y)/2],view:{...this.view}},this.render();return}this.pointers.size>2||this.down(i,i.clientX-s.left,i.clientY-s.top)}),t.addEventListener("pointermove",i=>{if(!this.active)return;let s=t.getBoundingClientRect(),r=i.clientX-s.left,a=i.clientY-s.top;if(this.pointers.has(i.pointerId)&&this.pointers.set(i.pointerId,{x:r,y:a}),this.pinch&&this.pointers.size>=2){let[o,l]=[...this.pointers.values()],c=Math.hypot(o.x-l.x,o.y-l.y),h=[(o.x+l.x)/2,(o.y+l.y)/2],u=this.pinch.view,d=Math.min(500,Math.max(.02,u.s*(c/Math.max(this.pinch.d,1)))),f=(this.pinch.m[0]-this.W/2)/u.s+u.cx,g=-(this.pinch.m[1]-this.H/2)/u.s+u.cy;this.view={s:d,cx:f-(h[0]-this.W/2)/d,cy:g+(h[1]-this.H/2)/d},this.vp.setSketchView(this.view),this.render();return}if(!(this.pointers.size>1)){if(!this.pointers.size&&i.pointerType==="mouse"){this.state&&this.tool!=="select"&&(this.state.cur=this.placement(r,a,"mouse"),this.render());return}this.move(i,r,a)}});let e=i=>{if(!this.active)return;let s=this.pointers.has(i.pointerId);if(this.pointers.delete(i.pointerId),this.pinch){this.pointers.size||(this.pinch=null);return}if(!s||i.type==="pointercancel"){this.gesture=null;return}let r=t.getBoundingClientRect();this.up(i,i.clientX-r.left,i.clientY-r.top)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("dblclick",()=>{this.state&&this.state.kind==="line"&&(this.state=null,this.render())}),t.addEventListener("wheel",i=>{if(!this.active)return;i.preventDefault();let s=t.getBoundingClientRect(),r=i.clientX-s.left,a=i.clientY-s.top,[o,l]=this.toK(r,a),c=Math.min(500,Math.max(.02,this.view.s*Math.exp(-i.deltaY*.0015)));this.view={s:c,cx:o-(r-this.W/2)/c,cy:l+(a-this.H/2)/c},this.vp.setSketchView(this.view),this.render()},{passive:!1})}render(){if(!this.active)return;let t=this.W,e=this.H;this.svg.setAttribute("width",t),this.svg.setAttribute("height",e),this.svg.setAttribute("viewBox",`0 0 ${t} ${e}`);let i=[],s=(v,C)=>this.toS(v,C),r=v=>v.toFixed(1),a=this.view,o=1;for(let v of[.1,.2,.5,1,2,5,10,20,50,100,200,500,1e3])if(o=v,v*a.s>=22)break;let[l,c]=this.toK(0,0),[h,u]=this.toK(t,e),d=[],f=[];for(let v=Math.ceil(l/o)*o;v<=h;v+=o){let C=r(s(v,0)[0]);(Math.abs(v/(o*5)-Math.round(v/(o*5)))<1e-6?f:d).push(`M${C} 0V${e}`)}for(let v=Math.ceil(u/o)*o;v<=c;v+=o){let C=r(s(0,v)[1]);(Math.abs(v/(o*5)-Math.round(v/(o*5)))<1e-6?f:d).push(`M0 ${C}H${t}`)}if(i.push(`<path d="${d.join("")}" class="sk-grid"/><path d="${f.join("")}" class="sk-grid major"/>`),!this.regions)try{this.regions=sc(this.sk.geo)}catch{this.regions=[]}for(let v of this.regions){let C=[v.poly,...v.holePolys].map(P=>"M"+P.map(([x,R])=>s(x,R).map(r).join(" ")).join("L")+"Z").join("");i.push(`<path d="${C}" class="sk-region" fill-rule="evenodd"/>`)}let[g,M]=s(0,0);i.push(`<path d="M0 ${r(M)}H${t}" class="sk-axis x ${this.sel.has("AX")?"sel":""}"/><path d="M${r(g)} 0V${e}" class="sk-axis y ${this.sel.has("AY")?"sel":""}"/>`);let p=this.status&&this.status.dof===0,m=new Set(this.status&&this.status.conflicting||[]);for(let v of this.sk.geo){if(v.ref||v.type==="point")continue;let C=["sk-curve",v.construction?"cons":"",p?"full":"",this.sel.has(v.id)?"sel":""].join(" ");if(v.type==="line"){let P=this.P(v.p1_id),x=this.P(v.p2_id),[R,V]=s(P.x,P.y),[O,B]=s(x.x,x.y);i.push(`<path d="M${r(R)} ${r(V)}L${r(O)} ${r(B)}" class="${C}"/>`)}else if(v.type==="circle"){let P=this.P(v.c_id),[x,R]=s(P.x,P.y);i.push(`<circle cx="${r(x)}" cy="${r(R)}" r="${r(v.radius*a.s)}" class="${C}"/>`)}else v.type==="arc"&&i.push(`<path d="${this.arcPath(v)}" class="${C}"/>`)}let y=new Set;for(let v of this.sk.geo)for(let C of["p1_id","p2_id","c_id","start_id","end_id"])v[C]&&!v.ref&&y.add(v[C]);for(let v of this.sk.geo){if(v.type!=="point"||wd.has(v.id))continue;let[C,P]=s(v.x,v.y);if(v.id==="O"){i.push(`<circle cx="${r(C)}" cy="${r(P)}" r="5" class="sk-origin ${this.sel.has("O")?"sel":""}"/>`);continue}let x=!y.has(v.id),R=["sk-pt",x?"lone":"",v.fixed?"fixed":"",this.sel.has(v.id)?"sel":"",p?"full":""].join(" ");i.push(x?`<path d="M${r(C-6)} ${r(P)}H${r(C+6)}M${r(C)} ${r(P-6)}V${r(P+6)}" class="${R}"/><circle cx="${r(C)}" cy="${r(P)}" r="3" class="${R}"/>`:`<circle cx="${r(C)}" cy="${r(P)}" r="${v.fixed?4.5:3.5}" class="${R}"/>`)}this.glyphBoxes=[];let E=new Map;for(let v of this.sk.cons){let C=Iv[v.type];if(!C||v.type==="p2p_coincident")continue;let P=this.consAnchor(v);if(!P)continue;let x=P.map(B=>Math.round(B/4)).join(","),R=E.get(x)||0;E.set(x,R+1);let[V,O]=[P[0]+12+R*18,P[1]-12];this.glyphBoxes.push({id:v.id,x:V,y:O}),i.push(`<g class="sk-glyph ${this.sel.has(v.id)?"sel":""} ${m.has(v.id)?"bad":""}"><rect x="${r(V-8)}" y="${r(O-8)}" width="16" height="16" rx="4"/><text x="${r(V)}" y="${r(O+4.2)}">${C}</text></g>`)}this.labelBoxes=[];for(let v of this.sk.cons)Lv.has(v.type)&&i.push(this.dimSvg(v,m.has(v.id)));i.push(this.previewSvg()),this.svg.innerHTML=i.join("")}arcPath(t,e=null){let i=e||this.P(t.c_id),s=t.start_angle,r=t.end_angle,a=r-s;for(;a<=0;)a+=ls;for(;a>ls;)a-=ls;let[o,l]=this.toS(i.x+t.radius*Math.cos(s),i.y+t.radius*Math.sin(s)),[c,h]=this.toS(i.x+t.radius*Math.cos(r),i.y+t.radius*Math.sin(r)),u=t.radius*this.view.s;return`M${o.toFixed(1)} ${l.toFixed(1)}A${u.toFixed(1)} ${u.toFixed(1)} 0 ${a>Math.PI?1:0} 0 ${c.toFixed(1)} ${h.toFixed(1)}`}consAnchor(t){let e=r=>{let a=this.P(r.p1_id),o=this.P(r.p2_id);return this.toS((a.x+o.x)/2,(a.y+o.y)/2)},i=r=>{let a=this.P(r);if(!a)return null;if(a.type==="line")return a.ref?this.toS(0,0):e(a);if(a.type==="circle"){let o=this.P(a.c_id);return this.toS(o.x+a.radius*.707,o.y+a.radius*.707)}if(a.type==="arc"){let o=this.P(a.c_id),l=(a.start_angle+a.end_angle)/2+(a.end_angle<a.start_angle?Math.PI:0);return this.toS(o.x+a.radius*Math.cos(l),o.y+a.radius*Math.sin(l))}return a.type==="point"?this.toS(a.x,a.y):null},s=t.l_id||t.l1_id||t.c_id||t.a_id||t.c1_id||t.a1_id||t.p_id||t.p1_id;return i(s)}dimSvg(t,e){let i=(m,y)=>this.toS(m,y),s=m=>m.toFixed(1),r=m=>this.P(m),a="",o=bd(t,this.sk.geo),l=t.type==="l2l_angle_ll",c=t.lx,h=t.ly;try{if(t.type==="p2p_distance"||t.type==="difference"){let m=t.type==="difference"?r(t.param2.o_id):r(t.p1_id),y=t.type==="difference"?r(t.param1.o_id):r(t.p2_id),E,v;if(t.type==="difference"&&t.param1.prop==="x")E=[m.x,h],v=[y.x,h];else if(t.type==="difference")E=[c,m.y],v=[c,y.y];else{let et=rc([y.x-m.x,y.y-m.y]),N=[-et[1],et[0]],q=(c-m.x)*N[0]+(h-m.y)*N[1];E=[m.x+N[0]*q,m.y+N[1]*q],v=[y.x+N[0]*q,y.y+N[1]*q]}let[C,P]=i(m.x,m.y),[x,R]=i(y.x,y.y),[V,O]=i(...E),[B,Y]=i(...v);a=`M${s(C)} ${s(P)}L${s(V)} ${s(O)}M${s(x)} ${s(R)}L${s(B)} ${s(Y)}M${s(V)} ${s(O)}L${s(B)} ${s(Y)}`,a+=Ed([V,O],[B,Y])}else if(t.type==="p2l_distance"){let m=r(t.p_id),y=r(t.l_id),E=r(y.p1_id),v=r(y.p2_id),C=Nv([m.x,m.y],[E.x,E.y],[v.x,v.y]),P=[E.x+(v.x-E.x)*C,E.y+(v.y-E.y)*C],[x,R]=i(m.x,m.y),[V,O]=i(...P);a=`M${s(x)} ${s(R)}L${s(V)} ${s(O)}`+Ed([x,R],[V,O])}else if(t.type==="circle_diameter"||t.type==="arc_diameter"||t.type==="circle_radius"||t.type==="arc_radius"){let m=r(t.c_id||t.a_id),y=r(m.c_id),E=rc([c-y.x,h-y.y]),v=t.type.includes("diameter"),C=v?[y.x-E[0]*m.radius,y.y-E[1]*m.radius]:[y.x,y.y],P=[y.x+E[0]*m.radius,y.y+E[1]*m.radius],[x,R]=i(...C),[V,O]=i(...P),[B,Y]=i(c,h);a=`M${s(x)} ${s(R)}L${s(V)} ${s(O)}L${s(B)} ${s(Y)}`+Ed([x,R],[V,O],!v)}else if(l){let m=r(t.l1_id),y=r(t.l2_id),E=Fv(r(m.p1_id),r(m.p2_id),r(y.p1_id),r(y.p2_id));if(E){let v=Math.hypot(c-E[0],h-E[1])*this.view.s,C=Math.atan2(r(m.p2_id).y-r(m.p1_id).y,r(m.p2_id).x-r(m.p1_id).x),[P,x]=i(E[0],E[1]),R=C,V=C+o*Math.PI/180,O=[P+v*Math.cos(R),x-v*Math.sin(R)],B=[P+v*Math.cos(V),x-v*Math.sin(V)];a=`M${s(O[0])} ${s(O[1])}A${s(v)} ${s(v)} 0 0 ${o>0?0:1} ${s(B[0])} ${s(B[1])}`}o=Math.abs(o)}}catch{}let[u,d]=i(c,h),f=Number(t.expr),g=t.type.includes("diameter")?"\u2300":t.type.includes("radius")?"R":"",M=Number.isFinite(f)&&String(t.expr).trim()!==""?`${g}${Oe(o,2)}${l?"\xB0":""}`:`${g}${t.expr} = ${Oe(o,2)}${l?"\xB0":""}`,p=M.length*7.4+14;return this.labelBoxes.push({id:t.id,x0:u-p/2,x1:u+p/2,y0:d-12,y1:d+12}),`<g class="sk-dim ${e?"bad":""} ${this.sel.has(t.id)?"sel":""}"><path d="${a}"/><rect x="${s(u-p/2)}" y="${s(d-11)}" width="${s(p)}" height="22" rx="6"/><text x="${s(u)}" y="${s(d+4.5)}">${kv(M)}</text></g>`}previewSvg(){let t=this.state;if(!t||!t.cur)return"";let e=(o,l)=>this.toS(o,l),i=o=>o.toFixed(1),s=t.cur,r=[],a=o=>{if(o.point||o.curve){let[l,c]=e(o.x,o.y);r.push(`<circle cx="${i(l)}" cy="${i(c)}" r="9" class="sk-snap ${o.point?"pt":""}"/>`)}};if(t.kind==="line"){let o=t.lastId?this.P(t.lastId):t.start,[l,c]=e(o.x,o.y),[h,u]=e(s.x,s.y);if(!t.fresh||this.gesture?.moved){r.push(`<path d="M${i(l)} ${i(c)}L${i(h)} ${i(u)}" class="sk-preview"/>`);let d=Math.hypot(s.x-o.x,s.y-o.y);r.push(`<text x="${i(h+14)}" y="${i(u-14)}" class="sk-hint">${Oe(d,2)} mm</text>`);let f=Math.abs(Math.atan2(s.y-o.y,s.x-o.x)),g=3*Math.PI/180;f<g||Math.abs(f-Math.PI)<g?r.push(`<text x="${i((l+h)/2)}" y="${i((c+u)/2-10)}" class="sk-hint hv">H</text>`):Math.abs(f-Math.PI/2)<g&&r.push(`<text x="${i((l+h)/2+10)}" y="${i((c+u)/2)}" class="sk-hint hv">V</text>`)}r.push(`<circle cx="${i(l)}" cy="${i(c)}" r="4" class="sk-pt sel"/>`)}else if(t.kind==="rect"){let o=t.start,[l,c]=e(o.x,o.y),[h,u]=e(s.x,s.y);r.push(`<path d="M${i(l)} ${i(c)}H${i(h)}V${i(u)}H${i(l)}Z" class="sk-preview"/>`),r.push(`<text x="${i(h+14)}" y="${i(u-14)}" class="sk-hint">${Oe(Math.abs(s.x-o.x),2)} \xD7 ${Oe(Math.abs(s.y-o.y),2)}</text>`)}else if(t.kind==="circle"){let o=t.start,[l,c]=e(o.x,o.y),h=Math.hypot(s.x-o.x,s.y-o.y);r.push(`<circle cx="${i(l)}" cy="${i(c)}" r="${i(h*this.view.s)}" class="sk-preview"/><circle cx="${i(l)}" cy="${i(c)}" r="3" class="sk-pt sel"/>`);let[u,d]=e(s.x,s.y);r.push(`<text x="${i(u+14)}" y="${i(d-14)}" class="sk-hint">\u2300 ${Oe(h*2,2)}</text>`)}else if(t.kind==="arc"){let o=[...t.pts,s];for(let l of t.pts){let[c,h]=e(l.x,l.y);r.push(`<circle cx="${i(c)}" cy="${i(h)}" r="4" class="sk-pt sel"/>`)}if(o.length===2){let[l,c]=e(o[0].x,o[0].y),[h,u]=e(o[1].x,o[1].y);r.push(`<path d="M${i(l)} ${i(c)}L${i(h)} ${i(u)}" class="sk-preview thin"/>`)}if(o.length===3){let l=yp(o[0],o[2],o[1]);if(l){let c=(o[2].x-o[0].x)*(o[1].y-o[2].y)-(o[2].y-o[0].y)*(o[1].x-o[2].x)>0,[h,u]=c?[o[0],o[1]]:[o[1],o[0]];r.push(`<path d="${this.arcPath({radius:l.r,start_angle:Math.atan2(h.y-l.y,h.x-l.x),end_angle:Math.atan2(u.y-l.y,u.x-l.x)},l)}" class="sk-preview"/>`)}}}else if(t.kind==="point"){let[o,l]=e(s.x,s.y);r.push(`<circle cx="${i(o)}" cy="${i(l)}" r="4" class="sk-pt sel"/>`)}return a(s),r.join("")}};function Dv(n){let t=[];for(let[e,i]of Object.entries(n))e!=="id"&&e.endsWith("_id")&&typeof i=="string"&&t.push(i),i&&typeof i=="object"&&i.o_id&&t.push(i.o_id);return t}function vp(n,t,e){let i=e[0]-t[0],s=e[1]-t[1],r=i*i+s*s;return r?Math.max(0,Math.min(1,((n[0]-t[0])*i+(n[1]-t[1])*s)/r)):0}function Nv(n,t,e){let i=e[0]-t[0],s=e[1]-t[1],r=i*i+s*s;return r?((n[0]-t[0])*i+(n[1]-t[1])*s)/r:0}function Uv(n,t,e){let i=vp(n,t,e);return Math.hypot(n[0]-t[0]-i*(e[0]-t[0]),n[1]-t[1]-i*(e[1]-t[1]))}function rc(n){let t=Math.hypot(n[0],n[1])||1;return[n[0]/t,n[1]/t]}function Ov(n,t,e){let i=r=>(r%ls+ls)%ls,s=i(e-t)||ls;return i(n-t)<=s+1e-9}function yp(n,t,e){let i=2*(n.x*(t.y-e.y)+t.x*(e.y-n.y)+e.x*(n.y-t.y));if(Math.abs(i)<1e-12)return null;let s=n.x*n.x+n.y*n.y,r=t.x*t.x+t.y*t.y,a=e.x*e.x+e.y*e.y,o=(s*(t.y-e.y)+r*(e.y-n.y)+a*(n.y-t.y))/i,l=(s*(e.x-t.x)+r*(n.x-e.x)+a*(t.x-n.x))/i;return{x:o,y:l,r:Math.hypot(n.x-o,n.y-l)}}function Fv(n,t,e,i){let s=[t.x-n.x,t.y-n.y],r=[i.x-e.x,i.y-e.y],a=s[0]*r[1]-s[1]*r[0];if(Math.abs(a)<1e-12)return null;let o=((e.x-n.x)*r[1]-(e.y-n.y)*r[0])/a;return[n.x+s[0]*o,n.y+s[1]*o]}function Ed(n,t,e=!1){let i=rc([t[0]-n[0],t[1]-n[1]]),s=[-i[1],i[0]],r=8,a=3,o=(l,c)=>`M${(l[0]-c[0]*r+s[0]*a).toFixed(1)} ${(l[1]-c[1]*r+s[1]*a).toFixed(1)}L${l[0].toFixed(1)} ${l[1].toFixed(1)}L${(l[0]-c[0]*r-s[0]*a).toFixed(1)} ${(l[1]-c[1]*r-s[1]*a).toFixed(1)}`;return(e?"":o(n,[-i[0],-i[1]]))+o(t,i)}function kv(n){return String(n).replace(/[<>&]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[t])}var oc=class{constructor(t){this.worker=new Worker(t,{type:"module"}),this.seq=0,this.pending=new Map,this.worker.onmessage=({data:e})=>{let i=this.pending.get(e.id);i&&(this.pending.delete(e.id),e.ok?i.resolve(e.result):i.reject(new Error(e.error)))},this.worker.onerror=e=>{for(let i of this.pending.values())i.reject(new Error(e.message||"Errore del motore CAD"));this.pending.clear()}}call(t,e={}){let i=++this.seq;return new Promise((s,r)=>{this.pending.set(i,{resolve:s,reject:r}),this.worker.postMessage({id:i,cmd:t,args:e})})}};var bp=[["new","Nuovo corpo"],["join","Unisci"],["cut","Taglia"],["intersect","Interseca"]],Sp=[["X","X"],["Y","Y"],["Z","Z"]],wp={sketch:"Schizzo",extrude:"Estrusione",revolve:"Rivoluzione",fillet:"Raccordo",chamfer:"Smusso",shell:"Guscio",hole:"Foro",pattern:"Serie",mirror:"Specchio",combine:"Combina",move:"Sposta",import:"Importazione"},Ad={sketch:"sketch",extrude:"extrude",revolve:"revolve",fillet:"fillet",chamfer:"chamfer",shell:"shell",hole:"hole",pattern:"pattern",mirror:"mirror",combine:"combine",move:"move",import:"import"},lc=(n,t,e=!1,i=[])=>({k:n,kind:"seg",label:t,options:[...e?[["none","\u2014"]]:[],...Sp,...i],get:s=>s[n]==="none"||!s[n]?"none":s[n].world||(s[n].edge?"edge":s[n].line?"line":"Z"),set:(s,r)=>{s[n]=r==="none"?"none":r==="edge"?{edge:null}:r==="line"?{line:null}:{world:r}}}),Mp=(n,t)=>[{k:"srcMode",kind:"seg",label:"Cosa ripetere",options:[["feature","Feature"],["body","Corpo"]],get:e=>e.src&&e.src.body!==void 0?"body":"feature",set:(e,i)=>{e.src=i==="body"?{body:null}:{feature:t.toolFeatures.length?t.toolFeatures[t.toolFeatures.length-1].id:null}}},n.src&&n.src.body!==void 0?{k:"srcBody",kind:"pick",pick:"body",label:"Corpo",get:e=>e.src.body?[e.src.body]:[],set:(e,i)=>{e.src={body:i[i.length-1]||null}}}:{k:"srcFeature",kind:"select",label:"Feature",options:t.toolFeatures.map(e=>[e.id,e.name]),get:e=>e.src&&e.src.feature,set:(e,i)=>{e.src={feature:i}}}],Ep={extrude:{title:"Estrudi",init:n=>({type:"extrude",sketch:n.autoRegions?.sketch||null,regions:n.autoRegions?.regions||[],dist:"10",mode:"one",dist2:"10",flip:!1,op:n.hasBodies?"join":"new",targets:[]}),fields:n=>[{k:"regions",kind:"pick",pick:"region",multi:!0,label:"Profili",hint:"Tocca i profili chiusi da estrudere"},{k:"dist",kind:"num",label:n.mode==="sym"?"Distanza totale":"Distanza",unit:"mm"},{k:"mode",kind:"seg",label:"Estensione",options:[["one","Un lato"],["sym","Simmetrica"],["two","Due lati"]]},n.mode==="two"&&{k:"dist2",kind:"num",label:"Distanza lato 2",unit:"mm"},{k:"flip",kind:"toggle",label:"Inverti direzione"},{k:"op",kind:"seg",label:"Operazione",options:bp},n.op!=="new"&&{k:"targets",kind:"pick",pick:"body",multi:!0,label:"Corpi coinvolti",hint:"Vuoto = automatico",optional:!0}]},revolve:{title:"Rivoluzione",init:n=>({type:"revolve",sketch:n.autoRegions?.sketch||null,regions:n.autoRegions?.regions||[],axis:{world:"Z"},angle:"360",flip:!1,op:n.hasBodies?"join":"new",targets:[]}),fields:n=>[{k:"regions",kind:"pick",pick:"region",multi:!0,label:"Profili",hint:"Tocca i profili da far ruotare"},lc("axis","Asse",!1,[["line","Linea"]]),n.axis&&n.axis.line!==void 0&&{k:"axisLine",kind:"pick",pick:"sketchLine",label:"Linea asse",hint:"Tocca una linea dello schizzo",get:t=>t.axis.line?[t.axis.line]:[],set:(t,e)=>{t.axis={line:e[e.length-1]||null}}},{k:"angle",kind:"num",label:"Angolo",unit:"\xB0"},{k:"flip",kind:"toggle",label:"Inverti verso"},{k:"op",kind:"seg",label:"Operazione",options:bp},n.op!=="new"&&{k:"targets",kind:"pick",pick:"body",multi:!0,label:"Corpi coinvolti",hint:"Vuoto = automatico",optional:!0}]},fillet:{title:"Raccordo",init:()=>({type:"fillet",edges:[],r:"2"}),fields:()=>[{k:"edges",kind:"pick",pick:"edge",multi:!0,label:"Spigoli",hint:"Tocca gli spigoli da arrotondare"},{k:"r",kind:"num",label:"Raggio",unit:"mm"}]},chamfer:{title:"Smusso",init:()=>({type:"chamfer",edges:[],d:"1"}),fields:()=>[{k:"edges",kind:"pick",pick:"edge",multi:!0,label:"Spigoli",hint:"Tocca gli spigoli da smussare"},{k:"d",kind:"num",label:"Distanza",unit:"mm"}]},shell:{title:"Guscio",init:()=>({type:"shell",faces:[],t:"2",outside:!1}),fields:()=>[{k:"faces",kind:"pick",pick:"face",multi:!0,label:"Facce da aprire",hint:"Tocca le facce da togliere"},{k:"t",kind:"num",label:"Spessore",unit:"mm"},{k:"outside",kind:"toggle",label:"Verso l'esterno"}]},hole:{title:"Foro",init:()=>({type:"hole",place:{face:null,pts:[]},dia:"5",depth:"10",through:!1,cbore:!1,cdia:"9",cdepth:"3",flip:!1}),fields:n=>[n.place?{k:"place",kind:"pick",pick:"facePoint",multi:!0,label:"Posizioni",hint:"Tocca una faccia piana dove forare (anche pi\xF9 punti)"}:{k:"note",kind:"note",text:"Le posizioni dei fori sono i punti dello schizzo collegato: modificalo per spostarli o quotarli."},{k:"dia",kind:"num",label:"Diametro",unit:"mm"},{k:"through",kind:"toggle",label:"Passante"},!n.through&&{k:"depth",kind:"num",label:"Profondit\xE0",unit:"mm"},{k:"cbore",kind:"toggle",label:"Lamatura"},n.cbore&&{k:"cdia",kind:"num",label:"Diametro lamatura",unit:"mm"},n.cbore&&{k:"cdepth",kind:"num",label:"Profondit\xE0 lamatura",unit:"mm"},{k:"flip",kind:"toggle",label:"Inverti direzione"}]},pattern:{title:"Serie",init:n=>({type:"pattern",kind:"rect",src:n.toolFeatures.length?{feature:n.toolFeatures[n.toolFeatures.length-1].id}:{body:n.lastBody||null},d1:{world:"X"},n1:"3",s1:"20",d2:"none",n2:"2",s2:"20",axis:{world:"Z"},n:"6",angle:"360",op:"join"}),fields:(n,t)=>[{k:"kind",kind:"seg",label:"Tipo",options:[["rect","Rettangolare"],["circ","Circolare"]]},...Mp(n,t),...n.kind==="rect"?[lc("d1","Direzione 1"),{k:"n1",kind:"num",label:"Quantit\xE0",unit:""},{k:"s1",kind:"num",label:"Passo",unit:"mm"},lc("d2","Direzione 2",!0),n.d2&&n.d2!=="none"&&{k:"n2",kind:"num",label:"Quantit\xE0 2",unit:""},n.d2&&n.d2!=="none"&&{k:"s2",kind:"num",label:"Passo 2",unit:"mm"}]:[lc("axis","Asse",!1,[["edge","Spigolo"]]),n.axis&&n.axis.edge!==void 0&&{k:"axisEdge",kind:"pick",pick:"edge",label:"Spigolo asse",hint:"Tocca uno spigolo dritto o circolare",get:e=>e.axis.edge?[e.axis.edge]:[],set:(e,i)=>{e.axis={edge:i[i.length-1]||null}}},{k:"n",kind:"num",label:"Quantit\xE0",unit:""},{k:"angle",kind:"num",label:"Angolo totale",unit:"\xB0"}],n.src&&n.src.body!==void 0&&{k:"op",kind:"seg",label:"Risultato",options:[["join","Unisci"],["new","Nuovi corpi"]]}]},mirror:{title:"Specchio",init:n=>({type:"mirror",src:n.toolFeatures.length?{feature:n.toolFeatures[n.toolFeatures.length-1].id}:{body:n.lastBody||null},plane:{std:"YZ"},op:"join"}),fields:(n,t)=>[...Mp(n,t),{k:"planeMode",kind:"seg",label:"Piano",options:[["XY","XY"],["XZ","XZ"],["YZ","YZ"],["face","Faccia"]],get:e=>e.plane.face!==void 0?"face":e.plane.std,set:(e,i)=>{e.plane=i==="face"?{face:null}:{std:i}}},n.plane.face!==void 0&&{k:"planeFace",kind:"pick",pick:"planarFace",label:"Faccia piana",get:e=>e.plane.face?[e.plane.face]:[],set:(e,i)=>{e.plane={face:i[i.length-1]||null}}},n.src&&n.src.body!==void 0&&{k:"op",kind:"seg",label:"Risultato",options:[["join","Unisci"],["new","Nuovo corpo"]]}]},combine:{title:"Combina",init:()=>({type:"combine",target:null,tools:[],op:"join",keep:!1}),fields:()=>[{k:"targetPick",kind:"pick",pick:"body",label:"Corpo di destinazione",get:n=>n.target?[n.target]:[],set:(n,t)=>{n.target=t[t.length-1]||null}},{k:"tools",kind:"pick",pick:"body",multi:!0,label:"Corpi utensile"},{k:"op",kind:"seg",label:"Operazione",options:[["join","Unisci"],["cut","Taglia"],["intersect","Interseca"]]},{k:"keep",kind:"toggle",label:"Mantieni gli utensili"}]},move:{title:"Sposta",init:n=>({type:"move",bodies:n.lastBody?[n.lastBody]:[],dx:"0",dy:"0",dz:"0",raxis:"Z",angle:"0",cx:"0",cy:"0",cz:"0"}),fields:n=>[{k:"bodies",kind:"pick",pick:"body",multi:!0,label:"Corpi"},{k:"dx",kind:"num",label:"X",unit:"mm"},{k:"dy",kind:"num",label:"Y",unit:"mm"},{k:"dz",kind:"num",label:"Z",unit:"mm"},{k:"raxis",kind:"seg",label:"Rotazione attorno a",options:Sp},{k:"angle",kind:"num",label:"Angolo",unit:"\xB0"},Number(n.angle)!==0&&{k:"cx",kind:"num",label:"Centro X",unit:"mm"},Number(n.angle)!==0&&{k:"cy",kind:"num",label:"Centro Y",unit:"mm"},Number(n.angle)!==0&&{k:"cz",kind:"num",label:"Centro Z",unit:"mm"}]}};function Sa(n){switch(n.type){case"extrude":case"revolve":return n.regions.length>0&&(n.type!=="revolve"||!n.axis||n.axis.line!==null);case"fillet":case"chamfer":return n.edges.length>0;case"shell":return n.faces.length>0;case"hole":return n.place?n.place.pts.length>0:!!n.sketch;case"pattern":case"mirror":return!!(n.src&&(n.src.feature||n.src.body))&&(n.type!=="mirror"||!n.plane||n.plane.face!==null);case"combine":return!!n.target&&n.tools.length>0;case"move":return n.bodies.length>0;default:return!0}}var Bv={sketch:'<path d="M4 20l4-1L19 8l-3-3L5 16z"/><path d="M14 7l3 3"/><path d="M3 21h8" opacity=".5"/>',extrude:'<path d="M4 15l8 4 8-4-8-4z"/><path d="M12 11V3"/><path d="M9 6l3-3 3 3"/><path d="M4 15v-3m16 3v-3" opacity=".5"/>',revolve:'<ellipse cx="12" cy="7" rx="7" ry="2.5"/><path d="M5 7v10c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V7"/><path d="M12 3v18" stroke-dasharray="2 2"/>',hole:'<path d="M3 9l9-5 9 5-9 5z"/><ellipse cx="12" cy="9" rx="3" ry="1.6"/><path d="M9 9v8m6-8v8"/><path d="M9 17c0 .9 1.3 1.6 3 1.6s3-.7 3-1.6"/>',fillet:'<path d="M4 20V10a6 6 0 016-6h10"/><path d="M4 4h4M4 4v4" opacity=".45"/>',chamfer:'<path d="M4 20V11l7-7h9"/><path d="M4 4h4M4 4v4" opacity=".45"/>',shell:'<path d="M3 8l9-4 9 4v9l-9 4-9-4z"/><path d="M7 9.5l5-2.2 5 2.2v6l-5 2.2-5-2.2z"/>',pattern:'<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1" opacity=".55"/><rect x="3" y="15" width="6" height="6" rx="1" opacity=".55"/><rect x="15" y="15" width="6" height="6" rx="1" opacity=".55"/>',mirror:'<path d="M12 2v20" stroke-dasharray="2 2"/><path d="M9 6L3 18h6z"/><path d="M15 6l6 12h-6z" opacity=".55"/>',combine:'<circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/>',move:'<path d="M12 3v18M3 12h18"/><path d="M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>',import:'<path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M4 17v3h16v-3"/>',export:'<path d="M12 15V3"/><path d="M7 8l5-5 5 5"/><path d="M4 17v3h16v-3"/>',params:'<path d="M10 4c-2 0-3 1-3 3v3H4m3 0h4M7 10v7c0 2-1 3-3 3"/><path d="M14 11l6 7M20 11l-6 7"/>',undo:'<path d="M9 7L4 12l5 5"/><path d="M4 12h11a5 5 0 010 10h-3"/>',redo:'<path d="M15 7l5 5-5 5"/><path d="M20 12H9a5 5 0 000 10h3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',tree:'<path d="M5 4h6M5 4v16M5 10h6M5 16h6"/><rect x="13" y="2" width="8" height="4" rx="1"/><rect x="13" y="8" width="8" height="4" rx="1"/><rect x="13" y="14" width="8" height="4" rx="1"/>',home:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',eye:'<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 6.1A10.8 10.8 0 0112 6c6.5 0 10 6 10 6a17 17 0 01-3.2 3.8M6.6 6.6C3.7 8.4 2 12 2 12s3.5 6 10 6c1.6 0 3-.4 4.3-.9"/>',body:'<path d="M3 8l9-5 9 5v8l-9 5-9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',check:'<path d="M4 12l5 5L20 6"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',line:'<path d="M4 20L20 4"/><circle cx="4" cy="20" r="1.8"/><circle cx="20" cy="4" r="1.8"/>',rect:'<rect x="4" y="6" width="16" height="12" rx="0.5"/>',circle:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="1.2"/>',arc:'<path d="M4 18a10 10 0 0116 0"/><circle cx="4" cy="18" r="1.8"/><circle cx="20" cy="18" r="1.8"/><circle cx="12" cy="8" r="1.5"/>',point:'<path d="M12 6v12M6 12h12"/><circle cx="12" cy="12" r="2.5"/>',dim:'<path d="M4 8v8M20 8v8M4 12h16"/><path d="M7 9l-3 3 3 3M17 9l3 3-3 3"/>',select:'<path d="M5 3l14 8-6 1.5L10 19z"/>',coincident:'<circle cx="9" cy="12" r="4"/><circle cx="15" cy="12" r="4"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/>',horizontal:'<path d="M3 12h18"/><path d="M7 8v8M17 8v8" opacity=".45"/>',vertical:'<path d="M12 3v18"/><path d="M8 7h8M8 17h8" opacity=".45"/>',parallel:'<path d="M8 20L14 4M12 20L18 4"/>',perpendicular:'<path d="M4 20h16M12 20V4"/><path d="M12 16h4v4" opacity=".6"/>',tangent:'<circle cx="12" cy="14" r="6"/><path d="M3 8h18"/>',equal:'<path d="M5 9h14M5 15h14"/>',midpoint:'<path d="M3 16L21 8"/><circle cx="12" cy="12" r="2.4" fill="currentColor"/>',concentric:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/>',symmetric:'<path d="M12 3v18" stroke-dasharray="2 2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="12" r="2"/>',fix:'<path d="M8 4h8l-1 6 3 3H6l3-3z"/><path d="M12 13v8"/>',construction:'<path d="M4 20L20 4" stroke-dasharray="3 2.5"/>',finish:'<path d="M4 12l5 5L20 6"/>',view:'<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/>',grid:'<path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"/>',plus:'<path d="M12 5v14M5 12h14"/>',more:'<circle cx="5" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="19" cy="12" r="1.6" fill="currentColor"/>',rollback:'<path d="M6 4v16"/><path d="M20 12H10"/><path d="M14 8l-4 4 4 4"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',folder:'<path d="M3 6a1 1 0 011-1h5l2 2h9a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>'};function $e(n,t=22){return`<svg class="ic" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Bv[n]||""}</svg>`}var zv="officina",Rd="projects";function Vv(){return new Promise((n,t)=>{let e=indexedDB.open(zv,1);e.onupgradeneeded=()=>e.result.createObjectStore(Rd,{keyPath:"id"}),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function cc(n,t){let e=await Vv();return new Promise((i,s)=>{let r=e.transaction(Rd,n),a=r.objectStore(Rd),o=t(a);r.oncomplete=()=>i(o&&o.result),r.onerror=()=>s(r.error)})}async function Cd(){return(await cc("readonly",t=>t.getAll())||[]).map(t=>({id:t.id,name:t.name,updated:t.updated,features:t.doc.features.length})).sort((t,e)=>e.updated-t.updated)}var wa=n=>cc("readonly",t=>t.get(n)),hc=n=>cc("readwrite",t=>t.put({...n,updated:Date.now()})),Tp=n=>cc("readwrite",t=>t.delete(n));function tr(){return Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4)}function dc(n="Senza titolo"){return{app:"officina",v:1,name:n,params:[],features:[],rollback:null,ui:{hidden:{},colors:{},names:{},sketchVis:{}}}}function Ap(){try{return localStorage.getItem("officina.last")}catch{return null}}function Rp(n){try{localStorage.setItem("officina.last",n)}catch{}}var pe=(n,t=document)=>t.querySelector(n),de=n=>String(n??"").replace(/[<>&"]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[t]),kd=n=>JSON.parse(JSON.stringify(n)),pc=()=>"f"+Math.random().toString(36).slice(2,9),k={project:null,doc:null,undo:[],redo:[],model:null,base:null,preview:null,mode:"loading",cmd:null,sketch:null,selBody:null},_e=new Ql(pe("#viewport")),ci=new ac({host:pe("#viewport"),viewport:_e,onChange:n=>Zv(n),toast:qe,promptValue:sb,getScope:()=>Gn(k.doc.params).scope}),Ra=new oc(new URL("./worker.js",import.meta.url));async function Gv(){Ld("Carico il motore CAD (circa 20 MB la prima volta)\u2026");try{await Promise.all([fp(new URL("./planegcs.wasm",import.meta.url).href),Ra.call("init")])}catch(e){Ld("Il motore CAD non si \xE8 avviato: "+e.message+". Ricarica la pagina.",!0);return}let n=null,t=Ap();if(t)try{n=await wa(t)}catch{}n||(n={id:tr(),name:"Primo progetto",doc:dc("Primo progetto")}),await er(n),Ld(null)}async function er(n){k.project={id:n.id,name:n.name},k.doc=Wv(n.doc),k.undo=[],k.redo=[],k.mode="model",k.cmd=null,Rp(n.id),await hc({id:n.id,name:n.name,doc:k.doc}),_e.setGrid(k.doc.ui.grid!==!1),$n(),await zi(),_e.fit(!1)}function Wv(n){n.ui||={};for(let t of["hidden","colors","names","sketchVis"])n.ui[t]||={};return n.params||=[],n.rollback===void 0&&(n.rollback=null),n}var Cp=null;function Bd(){clearTimeout(Cp),Cp=setTimeout(()=>hc({id:k.project.id,name:k.doc.name,doc:k.doc}).catch(()=>qe("Salvataggio non riuscito","warn")),500)}function ei(n,{rebuild:t=!0}={}){k.undo.push(JSON.stringify(k.doc)),k.undo.length>100&&k.undo.shift(),k.redo=[],n(k.doc),Bd(),Xn(),t?zi():(Hd(),yc())}function Lp(){if(k.mode==="sketch"){ci.undo();return}k.mode!=="model"||!k.undo.length||(k.redo.push(JSON.stringify(k.doc)),k.doc=JSON.parse(k.undo.pop()),Bd(),Xn(),zi())}function Dd(){if(k.mode==="sketch"){ci.redo();return}k.mode!=="model"||!k.redo.length||(k.undo.push(JSON.stringify(k.doc)),k.doc=JSON.parse(k.redo.pop()),Bd(),Xn(),zi())}var Pd=!1,Id=!1;async function zi(){if(Pd){Id=!0;return}Pd=!0;try{await Xv()}catch(n){qe(n.message,"warn")}finally{Pd=!1,Id&&(Id=!1,zi())}}async function uc(n,t=null){let e={...k.doc,features:n},i=await Ra.call("rebuild",{doc:e,upto:t,have:[..._e.meshCache.keys()]});return _e.ingest(i.bodies),i}var Ca=()=>k.doc.rollback==null?k.doc.features.length:k.doc.rollback;async function Xv(){fc(!0);try{if(k.mode==="command"&&k.cmd){let n=k.cmd,t=k.doc.features.slice(0,n.index);k.base=await uc(t);let e=zd();k.preview=Sa(n.draft)?await uc([...t,...e]):null,wi(),sr()}else if(k.mode==="model"){let n=!!(k.model&&k.model.bodies.length);k.model=await uc(k.doc.features,k.doc.rollback),wi(),!n&&k.model.bodies.length&&_e.fit(),Hd(),yc();let t=Object.keys(k.model.errors).length;rb(t?`${t} feature con errori`:`Ricostruito in ${k.model.ms} ms`,t?"warn":"")}}finally{fc(!1)}}function zd(){let n=k.cmd,t=kd(n.draft);if(t.type==="hole"&&t.place){let e=t.place;if(delete t.place,!e.face||!e.pts.length)return[t];let i=hd(e.face.n,e.face.p),s=n.holeSketchId||(n.holeSketchId=pc()),r=Td();e.pts.forEach((o,l)=>{let[c,h]=ap(i,o);r.push({id:`p${l+1}`,type:"point",x:c,y:h,fixed:!1})});let a={id:s,type:"sketch",name:"Schizzo foro",plane:{face:$v(e.face)},geo:r,cons:[]};return t.sketch=s,[a,t]}return[t]}var $v=n=>{let t={...n};return delete t.i,t};function Pp(n){return n?n.bodies.map((t,e)=>({id:t.id,key:t.key,name:k.doc.ui.names[t.id]||t.name,color:k.doc.ui.colors[t.id]||dd(e),visible:!k.doc.ui.hidden[t.id]})):[]}function Ta(n){let t=k.doc.ui.sketchVis[n.id];return t!==void 0?t:!k.doc.features.some(e=>e.sketch===n.id)}function qv(n){let t=new Map(n.map(i=>[i.id,i])),e=[];for(let i of n)if(!(i.ref||i.type==="point"))if(i.type==="line"){let s=t.get(i.p1_id),r=t.get(i.p2_id);e.push({id:i.id,kind:"line",construction:i.construction,pts:[[s.x,s.y],[r.x,r.y]]})}else{let s=t.get(i.c_id),r=0,a=Math.PI*2;if(i.type==="arc")for(r=i.start_angle,a=i.end_angle-i.start_angle;a<=0;)a+=Math.PI*2;let o=Math.max(8,Math.ceil(a/(Math.PI*2)*72)),l=[];for(let c=0;c<=o;c++){let h=r+a*c/o;l.push([s.x+i.radius*Math.cos(h),s.y+i.radius*Math.sin(h)])}e.push({id:i.id,kind:i.type,construction:i.construction,pts:l})}return e}var Ea=new Map;function Aa(n){let t=n.id+":"+JSON.stringify(n.geo),e=Ea.get(t);return e||(e=sc(n.geo),Ea.set(t,e),Ea.size>50&&Ea.delete(Ea.keys().next().value)),e}function wi(){let n=k.mode==="command"?k.cmd:null,t=k.model;n&&(t=k.preview&&!k.preview.errors[n.draft.id]&&!Object.keys(k.preview.errors).some(o=>!k.base.errors[o])?k.preview:k.base),_e.setBodies(Pp(t)),_e.setPickBodies(n?Pp(k.base):null),_e.gc();let e=(n?k.base:k.model)?.frames||{},i=n?n.index:Ca(),s=[],r=n?gc():null;for(let o of k.doc.features.slice(0,i)){if(o.type!=="sketch"||o.suppressed||!e[o.id])continue;let l=n&&n.draft.sketch===o.id;if(!Ta(o)&&!l)continue;let c={id:o.id,frame:e[o.id].frame,polylines:qv(o.geo)};if(r&&r.pick==="region")c.regions=Aa(o),c.selected=l?n.draft.regions.map(h=>c.regions.indexOf(Ma(c.regions,h))).filter(h=>h>=0):[];else if(l&&n.draft.regions){let h=Aa(o);c.regions=n.draft.regions.map(u=>Ma(h,u)).filter(Boolean),c.selected=c.regions.map((u,d)=>d)}if(r&&r.pick==="sketchLine"&&l){c.pickLines=!0;let h=1e3;c.polylines.push({id:"AX",kind:"line",construction:!0,pts:[[-h,0],[h,0]]},{id:"AY",kind:"line",construction:!0,pts:[[0,-h],[0,h]]})}s.push(c)}_e.setSketchOverlays(s);let a={faces:[],edges:[],bodies:[]};n?jv(n.draft,a):k.selBody&&a.bodies.push(k.selBody),_e.setSelection(a),_e.setPlanesVisible(k.mode==="pickPlane"||!!(r&&r.pick==="planarFace")||!!k.doc.ui.showPlanes)}function Dp(n){let t=_e.pickBodies.get(n.body);if(!t||!t.data)return-1;if(n.i!=null&&t.data.edgeInfo[n.i]){let s=t.data.edgeInfo[n.i].m;if(Math.hypot(s[0]-n.p[0],s[1]-n.p[1],s[2]-n.p[2])<.001)return n.i}let e=-1,i=1/0;return t.data.edgeInfo.forEach((s,r)=>{let a=Math.hypot(s.m[0]-n.p[0],s.m[1]-n.p[1],s.m[2]-n.p[2]);a<i&&(i=a,e=r)}),e}function Nd(n){let t=_e.pickBodies.get(n.body);if(!t||!t.data)return-1;if(n.i!=null&&t.data.faceInfo[n.i]&&t.data.faceInfo[n.i].t===n.t)return n.i;let e=-1,i=1/0;return t.data.faceInfo.forEach((s,r)=>{let a=Math.hypot(s.c[0]-n.p[0],s.c[1]-n.p[1],s.c[2]-n.p[2]);n.n&&s.n&&(a+=50*(1-pa(n.n,s.n))),a<i&&(i=a,e=r)}),e}function jv(n,t){let e=s=>{if(!s)return;let r=Dp(s);r>=0&&t.edges.push({body:s.body,i:r})},i=s=>{if(!s)return;let r=Nd(s);r>=0&&t.faces.push({body:s.body,i:r})};(n.edges||[]).forEach(e),(n.faces||[]).forEach(i),n.axis&&n.axis.edge&&e(n.axis.edge),n.plane&&n.plane.face&&i(n.plane.face),n.place&&n.place.face&&i(n.place.face);for(let s of[...n.targets||[],...n.tools||[],...n.bodies||[],n.target,n.src&&n.src.body])s&&t.bodies.push(s)}_e.onTap((n,t,e)=>{let i=e==="touch"?22:e==="pen"?14:9;if(k.mode==="pickPlane"){let s=_e.pick(n,t,{plane:!0,face:!0},i);if(!s)return;if(s.kind==="plane")Ud({std:s.plane});else if(s.kind==="face"){let r=_e.pickBodies.get(s.body).data.faceInfo[s.i];if(r.t!=="PLANE"){qe("Serve una faccia piana","warn");return}Ud({face:{body:s.body,p:s.point,n:r.n,t:"PLANE"}})}return}if(k.mode==="command"){let s=gc();if(!s)return;let r={region:{region:!0},edge:{edge:!0},face:{face:!0},planarFace:{face:!0},facePoint:{face:!0},body:{body:!0},sketchLine:{sketchLine:!0}}[s.pick],a=_e.pick(n,t,r,i);if(!a)return;Np(s,a);return}if(k.mode==="model"){let s=_e.pick(n,t,{body:!0},i);if(k.selBody=s?s.body:null,wi(),s){let r=k.model.bodies.find(a=>a.id===s.body);nr(r?k.doc.ui.names[r.id]||r.name:"")}else nr("")}});_e.hoverHandler=(n,t)=>{if(k.mode!=="command"){_e.preselect&&_e.setPreselect(null);return}let e=gc();if(n==null||!e||!["edge","face","planarFace"].includes(e.pick)){_e.preselect&&_e.setPreselect(null);return}let i=_e.pick(n,t,{edge:e.pick==="edge",face:e.pick!=="edge"},9),s=i?`${i.kind}${i.body}${i.i}`:"";s!==k.hoverKey&&(k.hoverKey=s,_e.setPreselect(i))};function Np(n,t){let e=k.cmd.draft,i=()=>(n.get?n.get(e):e[n.k])||[],s=o=>{n.set?n.set(e,o):e[n.k]=o},r=(o,l,c)=>{let h=o.findIndex(u=>c(u,l));return h>=0?(o.splice(h,1),o):n.multi?(o.push(l),o):[l]},a=o=>_e.pickBodies.get(o).data;if(n.pick==="region"){let o=k.doc.features.find(u=>u.id===t.sketch),l=Aa(o)[t.region],c={key:l.key,seed:l.sample};e.sketch&&e.sketch!==t.sketch&&(e.regions=[]),e.sketch=t.sketch;let h=Aa(o);e.regions=r(e.regions.slice(),c,(u,d)=>Ma(h,u)===Ma(h,d)),e.regions.length||(e.sketch=null)}else if(n.pick==="edge"){let o=a(t.body),l=o.edgeInfo[t.i],c={body:t.body,i:t.i,p:l.m,d:l.d,t:l.t,f:l.f.map(h=>({n:h.n,t:o.faceInfo[h.i].t}))};s(r(i().slice(),c,(h,u)=>h.body===u.body&&Dp(h)===u.i))}else if(n.pick==="face"||n.pick==="planarFace"){let o=a(t.body).faceInfo[t.i];if(n.pick==="planarFace"&&o.t!=="PLANE"){qe("Serve una faccia piana","warn");return}let l={body:t.body,i:t.i,p:t.point,n:o.t==="PLANE"?o.n:t.normal,t:o.t};s(r(i().slice(),l,(c,h)=>c.body===h.body&&Nd(c)===h.i))}else if(n.pick==="facePoint"){let o=a(t.body).faceInfo[t.i];if(o.t!=="PLANE"){qe("I fori vanno su una faccia piana","warn");return}let l=e.place;l.face&&l.face.body===t.body&&Nd(l.face)===t.i||(l.face={body:t.body,i:t.i,p:t.point,n:o.n,t:"PLANE"},l.pts=[]);let h=l.pts.findIndex(u=>Math.hypot(u[0]-t.point[0],u[1]-t.point[1],u[2]-t.point[2])<1.5);h>=0?l.pts.splice(h,1):l.pts.push(t.point.map(u=>Math.round(u*100)/100))}else if(n.pick==="body")s(r(i().slice(),t.body,(o,l)=>o===l));else if(n.pick==="sketchLine"){if(t.sketch!==e.sketch){qe("Scegli una linea dello stesso schizzo","warn");return}s([t.id])}sr(),wi(),mc()}var Ip=null;function mc(){clearTimeout(Ip),Ip=setTimeout(zi,140)}function Yv(n){let t=k.doc.features.slice(0,n).filter(a=>!a.suppressed),e=t.filter(a=>["extrude","revolve","hole"].includes(a.type)).map(a=>({id:a.id,name:a.name})),i=k.model&&k.model.bodies||[],s=null,r=[...t].reverse().find(a=>a.type==="sketch");if(r&&!k.doc.features.some(a=>a.sketch===r.id)){let a=Aa(r);a.length===1&&(s={sketch:r.id,regions:[{key:a[0].key,seed:a[0].sample}]})}return{hasBodies:i.length>0,lastBody:i.length?i[i.length-1].id:null,toolFeatures:e,autoRegions:s}}function Di(n,t=null){if(k.mode==="sketch")return;k.mode==="command"&&Pa();let e=Ep[n],i=t?k.doc.features.findIndex(o=>o.id===t.id):Ca(),s=Yv(i),r=t?kd(t):{id:pc(),...e.init(s)};k.cmd={type:n,spec:e,draft:r,index:i,editing:!!t,ctx:s,active:null},k.mode="command";let a=ir().find(o=>o.kind==="pick");k.cmd.active=a?a.k:null,k.selBody=null,$n(),zi()}function ir(){let n=k.cmd;return n.spec.fields(n.draft,n.ctx).filter(Boolean)}function gc(){return k.cmd&&ir().find(n=>n.kind==="pick"&&n.k===k.cmd.active)||null}function Pa(){k.cmd=null,k.mode="model",k.preview=null,$n(),zi()}function Vd(){let n=k.cmd;if(!Sa(n.draft)){qe("Completa la selezione","warn");return}let t=zd(),e=k.preview&&t.map(i=>k.preview.errors[i.id]).find(Boolean);if(e){qe(e,"warn");return}ei(i=>{let s=r=>i.features.filter(a=>a.type===r).length+1;for(let r of t)r.name||(r.name=`${wp[r.type]} ${s(r.type)}`);n.editing?i.features.splice(n.index,1,...t):(i.features.splice(n.index,0,...t),i.rollback!=null&&(i.rollback+=t.length))},{rebuild:!1}),k.cmd=null,k.mode="model",$n(),zi()}function Up(){k.mode==="command"&&Pa(),k.mode="pickPlane",$n(),wi(),nr("Tocca un piano di origine o una faccia piana")}function Ud(n){let t=k.doc.features.filter(s=>s.type==="sketch").length+1,e={id:pc(),type:"sketch",name:`Schizzo ${t}`,plane:n.face?{face:n.face}:{std:n.std},geo:Td(),cons:[]},i=n.face?hd(n.face.n,n.face.p):Jl[n.std];Fp(e,i,Ca(),!0)}async function Op(n){let t=k.doc.features.findIndex(s=>s.id===n.id);fc(!0);let e;try{e=await uc(k.doc.features,t+1)}finally{fc(!1)}let i=e.frames[n.id];if(!i){qe(e.errors[n.id]||"Il piano dello schizzo non \xE8 disponibile","warn");return}k.model=e,wi(),Fp(n,i.frame,t,!1)}function Fp(n,t,e,i){k.mode="sketch",k.sketch={index:e,isNew:i,id:n.id},nr(""),$n(),_e.setSketchOverlays([]),_e.setSelection({}),_e.setPlanesVisible(!1),ci.open(n,t)}function _c(n=!0){let t=k.sketch,e=ci.close();k.mode="model",k.sketch=null,n&&ei(i=>{t.isNew?(i.features.splice(t.index,0,e),i.rollback!=null&&(i.rollback+=1)):i.features[t.index]=e},{rebuild:!1}),$n(),zi()}var kp=[["sketch","Schizzo",()=>Up()],["extrude","Estrudi",()=>Di("extrude")],["revolve","Rivoluzione",()=>Di("revolve")],["hole","Foro",()=>Di("hole")],"|",["fillet","Raccordo",()=>Di("fillet")],["chamfer","Smusso",()=>Di("chamfer")],["shell","Guscio",()=>Di("shell")],"|",["pattern","Serie",()=>Di("pattern")],["mirror","Specchio",()=>Di("mirror")],["combine","Combina",()=>Di("combine")],["move","Sposta",()=>Di("move")],"|",["import","Importa",()=>nb()]],Bp=[["select","Seleziona","tool"],["line","Linea","tool"],["rect","Rettangolo","tool"],["circle","Cerchio","tool"],["arc","Arco","tool"],["point","Punto","tool"],["dim","Quota","tool"],"|",["coincident","Coincidente","cons"],["horizontal","Orizzontale","cons"],["vertical","Verticale","cons"],["parallel","Parallela","cons"],["perpendicular","Perpendic.","cons"],["tangent","Tangente","cons"],["equal","Uguale","cons"],["midpoint","Punto medio","cons"],["concentric","Concentrico","cons"],["symmetric","Simmetria","cons"],["fix","Fissa","cons"],"|",["construction","Costruzione","act"],["trash","Elimina","act"]];function Xn(){let n=pe("#toolbar"),t=k.mode==="sketch";pe("#docName").textContent=k.doc?k.doc.name:"",pe("#btnUndo").disabled=t?!ci.undoStack?.length:k.mode!=="model"||!k.undo.length,pe("#btnRedo").disabled=t?!ci.redoStack?.length:k.mode!=="model"||!k.redo.length,pe("#topRight").hidden=t,pe("#sketchFinish").hidden=!t;let e=t?Bp:kp;n.innerHTML=e.map((i,s)=>{if(i==="|")return'<span class="sep"></span>';let[r,a,o]=i;return`<button class="tool ${(t?o==="tool"&&ci.tool===r:k.mode==="command"&&k.cmd.type===r||r==="sketch"&&k.mode==="pickPlane")?"on":""}" data-i="${s}" title="${a}">${$e(r)}<span>${a}</span></button>`}).join(""),n.className=t?"sketch":""}pe("#toolbar").addEventListener("click",n=>{let t=n.target.closest("button[data-i]");if(!t)return;let e=(k.mode==="sketch"?Bp:kp)[+t.dataset.i];if(k.mode==="sketch"){let[i,,s]=e;s==="tool"?ci.setTool(i):s==="cons"?ci.applyConstraint(i):i==="construction"?ci.toggleConstruction():i==="trash"&&ci.deleteSelection(),Xn();return}k.mode==="pickPlane"&&(k.mode="model",nr("")),e[2]()});function Zv(n){Xn();let t=pe("#sketchStatus");if(k.mode!=="sketch"){t.hidden=!0;return}t.hidden=!1;let e,i="";n.conflicting&&n.conflicting.length?(e="Vincoli in conflitto",i="bad"):n.dof===0?(e="Completamente vincolato",i="ok"):e=n.dof==null?"":`Gradi di libert\xE0: ${n.dof}`;let s={select:"Tocca per selezionare \xB7 trascina i punti \xB7 un dito sul vuoto sposta la vista",line:"Tocca o trascina per disegnare \xB7 tocca un punto esistente per chiudere",rect:"Due angoli opposti",circle:"Centro, poi raggio",arc:"Inizio, fine, poi un punto sull'arco",point:"Tocca per aggiungere punti (centri dei fori)",dim:"Tocca un elemento (o due) e poi il punto dove mettere la quota"};t.innerHTML=`<span class="dof ${i}">${e}</span><span class="hint">${s[n.tool]||""}</span>`}function sr(){let n=pe("#panel");if(k.mode!=="command"||!k.cmd){n.hidden=!0,n.innerHTML="";return}let t=k.cmd,e=t.draft;n.hidden=!1;let i=Gn(k.doc.params).scope,s=ir().map(o=>{if(o.kind==="note")return`<p class="note">${de(o.text)}</p>`;if(o.kind==="num"){let l=!0,c=null;try{c=Hn(e[o.k],i)}catch{l=!1}let h=l&&String(e[o.k]).trim()!==Oe(c);return`<div class="field"><label>${de(o.label)}</label><div class="num ${l?"":"bad"}">
        <button data-step="-1" data-k="${o.k}" aria-label="meno">\u2212</button>
        <input data-k="${o.k}" value="${de(e[o.k])}" inputmode="decimal" autocomplete="off" autocapitalize="off" spellcheck="false">
        <span class="unit">${de(o.unit||"")}</span>
        <button data-step="1" data-k="${o.k}" aria-label="pi\xF9">+</button></div>
        ${h?`<div class="val">= ${Oe(c)} ${de(o.unit||"")}</div>`:""}${l?"":'<div class="val bad">Espressione non valida</div>'}</div>`}if(o.kind==="seg"){let l=o.get?o.get(e):e[o.k];return`<div class="field"><label>${de(o.label)}</label><div class="seg">${o.options.map(([c,h])=>`<button data-seg="${o.k}" data-v="${de(c)}" class="${l===c?"on":""}">${de(h)}</button>`).join("")}</div></div>`}if(o.kind==="toggle")return`<div class="field row"><label>${de(o.label)}</label><button class="switch ${e[o.k]?"on":""}" data-toggle="${o.k}" role="switch" aria-checked="${!!e[o.k]}"><span></span></button></div>`;if(o.kind==="select"){let l=o.get?o.get(e):e[o.k];return`<div class="field"><label>${de(o.label)}</label><select data-sel="${o.k}">${o.options.length?"":'<option value="">(nessuna)</option>'}${o.options.map(([c,h])=>`<option value="${de(c)}" ${l===c?"selected":""}>${de(h)}</option>`).join("")}</select></div>`}if(o.kind==="pick"){let l;o.pick==="facePoint"?l=e.place?e.place.pts.length:0:l=((o.get?o.get(e):e[o.k])||[]).length;let c=t.active===o.k,h={region:["profilo","profili"],edge:["spigolo","spigoli"],face:["faccia","facce"],planarFace:["faccia","facce"],body:["corpo","corpi"],sketchLine:["linea","linee"],facePoint:["foro","fori"]}[o.pick],u=l?`${l} ${l===1?h[0]:h[1]}`:o.optional?"Automatico":"Nessuna selezione";return`<div class="field"><label>${de(o.label)}</label><div class="pick ${c?"on":""} ${l?"has":""}" data-pick="${o.k}">
        <span class="dot"></span><span class="txt">${de(u)}</span>${l?`<button class="clr" data-clear="${o.k}" aria-label="Svuota">${$e("close",16)}</button>`:""}</div>
        ${c?`<div class="val">${de(o.hint||"Tocca nella vista")}</div>`:""}</div>`}return""}).join(""),r=zd(),a=k.preview?r.map(o=>k.preview.errors[o.id]).find(Boolean):null;n.innerHTML=`<header>${$e(Ad[t.type])}<h2>${de(t.spec.title)}${t.editing?" <small>modifica</small>":""}</h2></header>
    <div class="fields">${s}</div>
    ${a?`<div class="err">${de(a)}</div>`:""}
    <footer><button class="btn" data-act="cancel">Annulla</button><button class="btn primary" data-act="ok" ${Sa(e)&&!a?"":"disabled"}>OK</button></footer>`}var cs=pe("#panel");cs.addEventListener("click",n=>{let t=k.cmd&&k.cmd.draft;if(!t)return;let e=n.target.closest("button,[data-pick]");if(!e)return;let i=ir(),s=r=>i.find(a=>a.k===r);if(e.dataset.act==="cancel"){Pa();return}if(e.dataset.act==="ok"){Vd();return}if(e.dataset.clear){n.stopPropagation();let r=s(e.dataset.clear);r.pick==="facePoint"?t.place.pts=[]:r.set?r.set(t,[]):t[r.k]=[],r.pick==="region"&&(t.sketch=null)}else if(e.dataset.pick)k.cmd.active=e.dataset.pick;else if(e.dataset.step){let r=e.dataset.k,a=s(r),o=0;try{o=Hn(t[r],Gn(k.doc.params).scope)}catch{return}let l=a.unit==="\xB0"?15:a.unit===""?1:Math.abs(o)<5?.5:1;t[r]=Oe(o+l*Number(e.dataset.step))}else if(e.dataset.seg){let r=s(e.dataset.seg);r.set?r.set(t,e.dataset.v):t[r.k]=e.dataset.v;let a=ir().find(o=>o.kind==="pick"&&!(o.get?o.get(t):t[o.k]||[]).length&&!o.optional);a&&(k.cmd.active=a.k)}else if(e.dataset.toggle)t[e.dataset.toggle]=!t[e.dataset.toggle];else return;sr(),wi(),mc()});cs.addEventListener("input",n=>{let t=k.cmd&&k.cmd.draft;t&&n.target.dataset.k&&(t[n.target.dataset.k]=n.target.value,clearTimeout(cs._t),cs._t=setTimeout(()=>{let e=n.target.selectionStart,i=n.target.dataset.k;sr();let s=cs.querySelector(`input[data-k="${i}"]`);if(s){s.focus();try{s.setSelectionRange(e,e)}catch{}}mc()},350))});cs.addEventListener("change",n=>{let t=k.cmd&&k.cmd.draft;if(!t||!n.target.dataset.sel)return;let e=ir().find(i=>i.k===n.target.dataset.sel);e.set?e.set(t,n.target.value):t[e.k]=n.target.value,sr(),mc()});cs.addEventListener("keydown",n=>{n.key==="Enter"&&n.target.tagName==="INPUT"&&(n.target.blur(),zi().then(()=>{Sa(k.cmd?.draft||{})&&Vd()}))});function Hd(){let n=pe("#timeline"),t=k.doc,e=k.model&&k.model.errors||{},i=t.rollback,s=t.features.map((o,l)=>{let c=["tl-item",e[o.id]?"err":"",o.suppressed?"sup":"",i!=null&&l>=i?"after":"",k.cmd&&k.cmd.editing&&k.cmd.index===l?"on":""].join(" ");return`${i!=null&&i===l?'<span class="tl-marker" title="Fine cronologia"></span>':""}<button class="${c}" data-f="${l}" title="${de(o.name)}${e[o.id]?" \u2014 "+de(e[o.id]):""}">${$e(Ad[o.type]||"body",20)}<span>${de(o.name)}</span></button>`}).join(""),r=i!=null?`<button class="tl-end" data-end="1">${$e("rollback",18)}<span>Vai alla fine</span></button>`:"";n.innerHTML=`<div class="tl-track">${s||'<span class="tl-empty">La cronologia \xE8 vuota: inizia con uno schizzo</span>'}${i==null&&s?'<span class="tl-marker" title="Fine cronologia"></span>':""}${r}</div>`;let a=n.querySelector(".tl-item.on");a&&a.scrollIntoView({inline:"nearest",block:"nearest"})}pe("#timeline").addEventListener("click",n=>{if(k.mode!=="model")return;if(n.target.closest("[data-end]")){ei(a=>{a.rollback=null});return}let e=n.target.closest("[data-f]");if(!e)return;let i=+e.dataset.f,s=k.doc.features[i],r=k.model&&k.model.errors[s.id];Wp(e,[r?{label:r,cls:"err",disabled:!0}:null,{label:"Modifica",icon:"sketch",act:()=>Jv(s)},{label:"Rinomina",act:async()=>{let a=await xc("Nome della feature",s.name);a&&ei(o=>{o.features[i].name=a},{rebuild:!1})}},{label:s.suppressed?"Riattiva":"Sopprimi",act:()=>ei(a=>{a.features[i].suppressed=!s.suppressed})},{label:"Riporta la cronologia qui",icon:"rollback",act:()=>ei(a=>{a.rollback=i+1>=a.features.length?null:i+1})},s.type==="sketch"?{label:Ta(s)?"Nascondi schizzo":"Mostra schizzo",act:()=>ei(a=>{a.ui.sketchVis[s.id]=!Ta(s)},{rebuild:!1})}:null,{label:"Elimina",icon:"trash",cls:"danger",act:()=>Kv(i)}])});function Jv(n){n.type==="sketch"?Op(n):n.type==="import"?qe("Le importazioni non hanno parametri da modificare"):Di(n.type,n)}function Kv(n){let t=k.doc.features[n],e=k.doc.features.filter(i=>i.sketch===t.id||i.src&&i.src.feature===t.id);ei(i=>{if(i.features.splice(n,1),t.type==="hole"&&t.sketch){let s=i.features.findIndex(r=>r.id===t.sketch);s>=0&&i.features[s].name.startsWith("Schizzo foro")&&!i.features.some(r=>r.sketch===t.sketch)&&i.features.splice(s,1)}i.rollback!=null&&i.rollback>n&&(i.rollback-=1),i.rollback!=null&&i.rollback>=i.features.length&&(i.rollback=null)}),e.length&&qe(`Attenzione: ${e.map(i=>i.name).join(", ")} dipendeva da ${t.name}`,"warn")}function yc(){let n=pe("#browser");if(!k.doc)return;let t=k.model&&k.model.bodies||[],e=k.doc.ui,i=Ca(),s=k.doc.features.slice(0,i).filter(a=>a.type==="sketch"),r=a=>$e(a?"eye":"eyeoff",18);n.innerHTML=`
    <section><h3>Corpi <small>${t.length}</small></h3>
    ${t.map((a,o)=>`<div class="br-row ${k.selBody===a.id?"on":""}"><button class="eye" data-hide="${a.id}">${r(!e.hidden[a.id])}</button>
      <span class="sw" style="background:${de(e.colors[a.id]||dd(o))}"></span>
      <button class="name" data-body="${a.id}">${de(e.names[a.id]||a.name)}</button></div>`).join("")||'<p class="empty">Nessun corpo</p>'}
    </section>
    <section><h3>Schizzi <small>${s.length}</small></h3>
    ${s.map(a=>`<div class="br-row"><button class="eye" data-skvis="${a.id}">${r(Ta(a))}</button>
      <button class="name" data-sketch="${a.id}">${de(a.name)}</button></div>`).join("")||'<p class="empty">Nessuno schizzo</p>'}
    </section>
    <section><h3>Origine</h3>
      <div class="br-row"><button class="eye" data-planes="1">${r(!!e.showPlanes)}</button><span class="name">Piani XY \xB7 XZ \xB7 YZ</span></div>
      <div class="br-row"><button class="eye" data-grid="1">${r(e.grid!==!1)}</button><span class="name">Griglia</span></div>
    </section>
    <section><h3>Parametri <small>${k.doc.params.length}</small></h3>
      ${k.doc.params.map(a=>`<div class="br-row param"><span class="name">${de(a.name)}</span><span class="pv">${de(a.expr)}</span></div>`).join("")}
      <button class="btn small" data-params="1">${$e("params",16)} Gestisci parametri</button>
    </section>`}pe("#browser").addEventListener("click",n=>{let t=n.target.closest("button");if(!t||k.mode!=="model")return;let e=k.doc.ui;if(t.dataset.hide){let i=t.dataset.hide;ei(s=>{s.ui.hidden[i]=!e.hidden[i]},{rebuild:!1}),wi()}else if(t.dataset.skvis){let i=k.doc.features.find(s=>s.id===t.dataset.skvis);ei(s=>{s.ui.sketchVis[i.id]=!Ta(i)},{rebuild:!1}),wi()}else if(t.dataset.planes)ei(i=>{i.ui.showPlanes=!e.showPlanes},{rebuild:!1}),wi();else if(t.dataset.grid)ei(i=>{i.ui.grid=e.grid===!1},{rebuild:!1}),_e.setGrid(k.doc.ui.grid!==!1);else if(t.dataset.params)zp();else if(t.dataset.sketch){let i=k.doc.features.find(s=>s.id===t.dataset.sketch);Op(i),ab()}else t.dataset.body&&Qv(t,t.dataset.body)});function Qv(n,t){let e=k.model.bodies,i=e.findIndex(a=>a.id===t),s=e[i],r=k.doc.ui.names[t]||s.name;k.selBody=t,wi(),yc(),Wp(n,[{label:"Rinomina",act:async()=>{let a=await xc("Nome del corpo",r);a&&ei(o=>{o.ui.names[t]=a},{rebuild:!1}),wi()}},{label:"Colore",act:()=>eb(t,i)},{label:"Propriet\xE0",icon:"info",act:()=>ib(t,r)},{label:"Esporta questo corpo",icon:"export",act:()=>Vp([t])}])}var tb=["#b9c3cf","#d9b38c","#9fc7a8","#c9a3c9","#e0c56e","#8fb6d9","#d99a9a","#a8b38f","#5d6b7a","#e8e4da","#3c3c3c","#d4553f"];function eb(n,t){hs(`<h2>Colore</h2><div class="swatches">${tb.map(e=>`<button style="background:${e}" data-c="${e}"></button>`).join("")}</div><footer><button class="btn" data-close>Chiudi</button></footer>`,(e,i)=>{e.addEventListener("click",s=>{let r=s.target.closest("[data-c]");r&&(ei(a=>{a.ui.colors[n]=r.dataset.c},{rebuild:!1}),wi(),i())})})}async function ib(n,t){try{let[e]=await Ra.call("measure",{ids:[n]}),i=e.bbox?e.bbox[1].map((s,r)=>s-e.bbox[0][r]):null;hs(`<h2>${de(t)}</h2><dl class="props">
      <dt>Volume</dt><dd>${e.volume!=null?Oe(e.volume/1e3,2)+" cm\xB3":"\u2014"}</dd>
      <dt>Area superficie</dt><dd>${e.area!=null?Oe(e.area/100,2)+" cm\xB2":"\u2014"}</dd>
      <dt>Ingombro</dt><dd>${i?i.map(s=>Oe(s,2)).join(" \xD7 ")+" mm":"\u2014"}</dd>
      <dt>Peso in PLA</dt><dd>${e.volume!=null?Oe(e.volume/1e3*1.24,1)+" g":"\u2014"} <small>(pieno, 1,24 g/cm\xB3)</small></dd>
      <dt>Peso in PETG</dt><dd>${e.volume!=null?Oe(e.volume/1e3*1.27,1)+" g":"\u2014"}</dd></dl>
      <footer><button class="btn" data-close>Chiudi</button></footer>`)}catch(e){qe(e.message,"warn")}}function zp(){let n=kd(k.doc.params);hs(`<h2>Parametri</h2><p class="note">Usa i nomi nelle quote e nei campi numerici, ad es. <code>larghezza/2 + 3</code>.</p><div class="params"></div>
    <button class="btn small" data-add>${$e("plus",16)} Aggiungi parametro</button>
    <footer><button class="btn" data-close>Annulla</button><button class="btn primary" data-apply>Applica</button></footer>`,(t,e)=>{let i=()=>{let{scope:s,errors:r}=Gn(n);t.querySelector(".params").innerHTML=n.length?'<div class="prow head"><span>Nome</span><span>Espressione</span><span>Valore</span><span></span></div>'+n.map((a,o)=>`
        <div class="prow"><input data-i="${o}" data-f="name" value="${de(a.name)}" autocapitalize="off" autocomplete="off" spellcheck="false" class="${xd(a.name)&&n.filter(l=>l.name===a.name).length===1?"":"bad"}">
        <input data-i="${o}" data-f="expr" value="${de(a.expr)}" inputmode="decimal" autocapitalize="off" autocomplete="off" spellcheck="false" class="${r[a.name]?"bad":""}">
        <span class="pv">${r[a.name]?"\u26A0":Oe(s[a.name])}</span><button class="icon" data-del="${o}" aria-label="Elimina">${$e("trash",18)}</button></div>`).join(""):'<p class="empty">Nessun parametro</p>'};i(),t.addEventListener("input",s=>{let r=s.target.dataset.i;r!=null&&(n[+r][s.target.dataset.f]=s.target.value.trim(),clearTimeout(t._t),t._t=setTimeout(()=>{let a=document.activeElement,o=a&&a.dataset?[a.dataset.i,a.dataset.f,a.selectionStart]:null;if(i(),o){let l=t.querySelector(`input[data-i="${o[0]}"][data-f="${o[1]}"]`);if(l){l.focus();try{l.setSelectionRange(o[2],o[2])}catch{}}}},400))}),t.addEventListener("click",s=>{let r=s.target.closest("button");if(r){if(r.dataset.add!==void 0){let a=n.length+1;for(;n.some(o=>o.name===`p${a}`);)a++;n.push({name:`p${a}`,expr:"10"}),i()}else if(r.dataset.del)n.splice(+r.dataset.del,1),i();else if(r.dataset.apply!==void 0){let a=n.find(l=>!xd(l.name)||n.filter(c=>c.name===l.name).length>1);if(a){qe(`Nome non valido: ${a.name}`,"warn");return}let{scope:o}=Gn(n);ei(l=>{l.params=n;for(let c of l.features)if(c.type==="sketch"&&(c.cons||[]).some(h=>h.expr!=null&&!Number.isFinite(Number(h.expr)))){let h=ec(c,o);h.ok&&(c.geo=h.geo)}}),e()}}})})}function nb(){let n=document.createElement("input");n.type="file",n.accept=".stl,.step,.stp",n.onchange=async()=>{let t=n.files[0];if(!t)return;if(t.size>25e6){qe("File troppo grande (max 25 MB)","warn");return}let e=new Uint8Array(await t.arrayBuffer()),i="";for(let a=0;a<e.length;a+=32768)i+=String.fromCharCode.apply(null,e.subarray(a,a+32768));let s=/\.stl$/i.test(t.name)?"stl":"step",r={id:pc(),type:"import",name:t.name,format:s,fname:t.name,data:btoa(i),hash:`${t.size}-${t.lastModified}`};ei(a=>{a.features.splice(Ca(),0,r),a.rollback!=null&&(a.rollback+=1)})},n.click()}function Vp(n=null){let t=(k.model&&k.model.bodies||[]).filter(s=>!k.doc.ui.hidden[s.id]);if(!t.length){qe("Non ci sono corpi visibili da esportare","warn");return}let e=new Set(n||t.map(s=>s.id)),i="threemf";hs(`<h2>Esporta</h2>
    <div class="field"><label>Formato</label><div class="seg wide">
      <button data-fmt="threemf" class="on">3MF <small>stampa 3D</small></button><button data-fmt="stl">STL</button><button data-fmt="step">STEP <small>CAD</small></button></div></div>
    <p class="note fmt-note">Il 3MF tiene separati i corpi: in Bambu Studio diventano oggetti distinti.</p>
    <div class="field"><label>Corpi</label><div class="checks">${t.map(s=>`<label class="chk"><input type="checkbox" value="${s.id}" ${e.has(s.id)?"checked":""}> ${de(k.doc.ui.names[s.id]||s.name)}</label>`).join("")}</div></div>
    <div class="out"></div>
    <footer><button class="btn" data-close>Chiudi</button><button class="btn primary" data-go>Prepara file</button></footer>`,s=>{let r={threemf:"Il 3MF tiene separati i corpi: in Bambu Studio diventano oggetti distinti.",stl:"L'STL unisce i corpi scelti in un'unica mesh.",step:"Lo STEP conserva le superfici esatte: si riapre in Fusion, FreeCAD, Onshape."};s.addEventListener("click",async a=>{let o=a.target.closest("button");if(!o)return;if(o.dataset.fmt){i=o.dataset.fmt,s.querySelectorAll("[data-fmt]").forEach(h=>h.classList.toggle("on",h===o)),s.querySelector(".fmt-note").textContent=r[i];return}if(o.dataset.go===void 0)return;let l=[...s.querySelectorAll(".checks input:checked")].map(h=>h.value);if(!l.length){qe("Scegli almeno un corpo","warn");return}o.disabled=!0;let c=s.querySelector(".out");c.innerHTML='<p class="note">Preparo il file\u2026</p>';try{let h=i==="threemf"?"3mf":i,u=await Ra.call("export",{format:h,ids:l,name:k.doc.name}),d={"3mf":"3mf",stl:"stl",step:"step"}[h],f={"3mf":"model/3mf",stl:"model/stl",step:"model/step"}[h],g=l.length===1?k.doc.ui.names[l[0]]||t.find(m=>m.id===l[0]).name:k.doc.name,M=new File([u],`${Hp(g)}.${d}`,{type:f});c.innerHTML=`<div class="ready">${$e("check",18)} <b>${de(M.name)}</b> <small>${Oe(M.size/1024/1024,2)} MB</small></div><div class="ready-act">${Gp(M)?'<button class="btn primary" data-share>Condividi / Salva su File</button>':""}<button class="btn" data-dl>Scarica</button></div>`,c.querySelector("[data-dl]").onclick=()=>Od(M);let p=c.querySelector("[data-share]");p&&(p.onclick=()=>navigator.share({files:[M],title:M.name}).catch(()=>{}))}catch(h){c.innerHTML=`<p class="err">${de(h.message)}</p>`}o.disabled=!1})})}var Hp=n=>String(n).replace(/[\\/:*?"<>|]+/g,"_").trim()||"modello";function Gp(n){try{return!!(navigator.canShare&&navigator.canShare({files:[n]})&&matchMedia("(pointer: coarse)").matches)}catch{return!1}}function Od(n){let t=URL.createObjectURL(n),e=document.createElement("a");e.href=t,e.download=n.name,document.body.appendChild(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}async function Fd(){let n=await Cd();hs(`<h2>Progetti</h2>
    <div class="proj-actions"><button class="btn primary" data-new>${$e("plus",16)} Nuovo</button><button class="btn" data-import>${$e("import",16)} Apri file .officina</button><button class="btn" data-export>${$e("export",16)} Salva copia su file</button></div>
    <div class="projects">${n.map(t=>`<div class="proj ${t.id===k.project.id?"on":""}"><button class="name" data-open="${t.id}"><b>${de(t.name)}</b><small>${t.features} feature \xB7 ${new Date(t.updated).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})}</small></button>
      <button class="icon" data-dup="${t.id}" title="Duplica">${$e("plus",18)}</button><button class="icon" data-del="${t.id}" title="Elimina">${$e("trash",18)}</button></div>`).join("")}</div>
    <footer><button class="btn" data-close>Chiudi</button></footer>`,(t,e)=>{t.addEventListener("click",async i=>{let s=i.target.closest("button");if(s){if(s.dataset.new!==void 0){let r=await xc("Nome del nuovo progetto","Nuovo progetto");if(!r)return;e(),await er({id:tr(),name:r,doc:dc(r)})}else if(s.dataset.open){if(s.dataset.open===k.project.id){e();return}let r=await wa(s.dataset.open);e(),await er(r)}else if(s.dataset.dup){let r=await wa(s.dataset.dup),a=`${r.name} (copia)`;r.doc.name=a,await hc({id:tr(),name:a,doc:r.doc}),e(),Fd()}else if(s.dataset.del){if(s.dataset.confirm!=="1"){s.dataset.confirm="1",s.classList.add("danger"),s.title="Tocca di nuovo per eliminare",qe("Tocca di nuovo il cestino per eliminare","warn");return}if(await Tp(s.dataset.del),s.dataset.del===k.project.id){let r=await Cd();e(),r.length?await er(await wa(r[0].id)):await er({id:tr(),name:"Nuovo progetto",doc:dc("Nuovo progetto")})}else e(),Fd()}else if(s.dataset.export!==void 0){let r=new File([JSON.stringify(k.doc)],`${Hp(k.doc.name)}.officina`,{type:"application/json"});Gp(r)?navigator.share({files:[r]}).catch(()=>Od(r)):Od(r)}else if(s.dataset.import!==void 0){let r=document.createElement("input");r.type="file",r.accept=".officina,.json,application/json",r.onchange=async()=>{try{let a=JSON.parse(await r.files[0].text());if(a.app!=="officina")throw new Error("Non \xE8 un progetto Officina");e(),await er({id:tr(),name:a.name,doc:a})}catch(a){qe(a.message,"warn")}},r.click()}}})})}function hs(n,t){let e=pe("#modal");e.hidden=!1,e.innerHTML=`<div class="sheet" role="dialog" aria-modal="true">${n}</div>`;let i=e.firstElementChild,s=()=>{e.hidden=!0,e.innerHTML="",document.removeEventListener("keydown",r)},r=a=>{a.key==="Escape"&&s()};return document.addEventListener("keydown",r),e.onclick=a=>{(a.target===e||a.target.closest("[data-close]"))&&s()},t&&t(i,s),s}function xc(n,t){return new Promise(e=>{let i=!1,s=hs(`<h2>${de(n)}</h2><input class="big" value="${de(t)}" autocomplete="off"><footer><button class="btn" data-close>Annulla</button><button class="btn primary" data-ok>OK</button></footer>`,(o,l)=>{let c=o.querySelector("input");setTimeout(()=>{c.focus(),c.select()},30);let h=()=>{i=!0,e(c.value.trim()),l()};o.querySelector("[data-ok]").onclick=h,c.onkeydown=u=>{u.key==="Enter"&&h()}}),r=pe("#modal"),a=new MutationObserver(()=>{r.hidden&&(a.disconnect(),i||e(null))});a.observe(r,{attributes:!0})})}function sb({title:n,value:t,options:e,option:i,allowDelete:s}){return new Promise(r=>{let a=!1,o=i;hs(`<h2>${de(n)}</h2>
      ${e?`<div class="seg wide">${e.map(([h,u])=>`<button data-o="${h}" class="${h===i?"on":""}">${u}</button>`).join("")}</div>`:""}
      <input class="big" value="${de(t)}" inputmode="decimal" autocomplete="off" autocapitalize="off" spellcheck="false">
      <div class="val"></div>
      ${k.doc.params.length?`<div class="chips">${k.doc.params.map(h=>`<button class="chip" data-p="${de(h.name)}">${de(h.name)}</button>`).join("")}</div>`:""}
      <footer>${s?`<button class="btn danger" data-rm>${$e("trash",16)} Elimina quota</button>`:""}<span class="grow"></span><button class="btn" data-close>Annulla</button><button class="btn primary" data-ok>OK</button></footer>`,(h,u)=>{let d=h.querySelector("input"),f=h.querySelector(".val"),g=()=>{try{let p=Hn(d.value,Gn(k.doc.params).scope);f.textContent=String(d.value).trim()===Oe(p)?"":`= ${Oe(p)}`,f.classList.remove("bad")}catch(p){f.textContent=p.message,f.classList.add("bad")}};g(),setTimeout(()=>{d.focus(),d.select()},30),d.oninput=g;let M=()=>{try{Hn(d.value,Gn(k.doc.params).scope)}catch{return}a=!0,r({value:d.value.trim(),option:o}),u()};d.onkeydown=p=>{p.key==="Enter"&&M()},h.addEventListener("click",p=>{let m=p.target.closest("button");if(m){if(m.dataset.ok!==void 0)M();else if(m.dataset.rm!==void 0)a=!0,r({remove:!0}),u();else if(m.dataset.o)o=m.dataset.o,h.querySelectorAll("[data-o]").forEach(y=>y.classList.toggle("on",y===m));else if(m.dataset.p){let y=d.selectionStart??d.value.length;d.value=d.value.slice(0,y)+m.dataset.p+d.value.slice(d.selectionEnd??y),d.focus(),g()}}})});let l=pe("#modal"),c=new MutationObserver(()=>{l.hidden&&(c.disconnect(),a||r(null))});c.observe(l,{attributes:!0})})}function Wp(n,t){let e=pe("#popover"),i=t.filter(Boolean);e.innerHTML=`<div class="menu">${i.map((h,u)=>`<button data-mi="${u}" class="${h.cls||""}" ${h.disabled?"disabled":""}>${h.disabled?"":h.icon?$e(h.icon,18):'<span class="ic-pad"></span>'}<span>${de(h.label)}</span></button>`).join("")}</div>`,e.hidden=!1;let s=e.firstElementChild,r=n.getBoundingClientRect(),a=s.offsetWidth,o=s.offsetHeight,l=Math.min(window.innerWidth-a-8,Math.max(8,r.left)),c=r.top-o-6;c<8&&(c=Math.min(window.innerHeight-o-8,r.bottom+6)),s.style.left=l+"px",s.style.top=c+"px",e.onclick=h=>{let u=h.target.closest("[data-mi]");e.hidden=!0,e.innerHTML="",u&&i[+u.dataset.mi].act()}}function qe(n,t=""){let e=document.createElement("div");e.className=`toast ${t}`,e.textContent=n,pe("#toasts").appendChild(e),setTimeout(()=>e.classList.add("out"),3200),setTimeout(()=>e.remove(),3700)}function nr(n){let t=pe("#hint");t.textContent=n||"",t.hidden=!n}function rb(n,t=""){let e=pe("#status");e.textContent=n,e.className=t}function fc(n){document.body.classList.toggle("busy",n)}function Ld(n,t=!1){let e=pe("#loading");if(!n){e.hidden=!0;return}e.hidden=!1,e.querySelector("p").textContent=n,e.classList.toggle("err",t)}var ab=()=>{pe("#browser").classList.remove("open")};function $n(){Xn(),sr(),Hd(),yc(),document.body.dataset.mode=k.mode,pe("#sketchStatus").hidden=k.mode!=="sketch",k.mode!=="pickPlane"&&nr("")}pe("#btnProjects").onclick=Fd;pe("#btnTree").onclick=()=>pe("#browser").classList.toggle("open");pe("#btnUndo").onclick=Lp;pe("#btnRedo").onclick=Dd;pe("#btnParams").onclick=zp;pe("#btnExport").onclick=()=>Vp();pe("#docName").onclick=async()=>{if(k.mode!=="model")return;let n=await xc("Nome del progetto",k.doc.name);n&&(ei(t=>{t.name=n},{rebuild:!1}),k.project.name=n)};pe("#sketchFinish").querySelector("[data-finish]").onclick=()=>_c(!0);pe("#sketchFinish").querySelector("[data-discard]").onclick=()=>_c(!1);pe("#viewbar").addEventListener("click",n=>{let t=n.target.closest("[data-view]");!t||k.mode==="sketch"||(t.dataset.view==="fit"?_e.fit():_e.view(t.dataset.view))});window.addEventListener("keydown",n=>{if(n.target.closest("input,select,textarea")||!pe("#modal").hidden)return;let t=n.key.toLowerCase();if((n.ctrlKey||n.metaKey)&&t==="z"){n.preventDefault(),n.shiftKey?Dd():Lp();return}if((n.ctrlKey||n.metaKey)&&t==="y"){n.preventDefault(),Dd();return}if(k.mode==="sketch"){let i={l:"line",r:"rect",c:"circle",a:"arc",p:"point",d:"dim",s:"select"};i[t]&&!n.ctrlKey&&!n.metaKey?(ci.setTool(i[t]),Xn()):t==="delete"||t==="backspace"?ci.deleteSelection():t==="escape"?(ci.cancel()||ci.setTool("select"),Xn()):t==="enter"&&_c(!0);return}if(t==="escape"){k.mode==="command"?Pa():k.mode==="pickPlane"&&(k.mode="model",$n(),wi());return}if(k.mode!=="model")return;let e={e:"extrude",f:"fillet",h:"hole"};t==="s"?Up():e[t]&&Di(e[t])});document.addEventListener("gesturestart",n=>n.preventDefault());document.addEventListener("dblclick",n=>{n.target.closest("input")||n.preventDefault()});window.officina={app:k,vp:_e,sketcher:ci,cad:Ra,startSketch:Ud,openCommand:Di,okCommand:Vd,cancelCommand:Pa,finishSketch:_c,refresh:zi,applyPick:Np,activePickField:gc};for(let n of document.querySelectorAll("[data-icon]"))n.insertAdjacentHTML("afterbegin",$e(n.dataset.icon,n.classList.contains("btn")?18:22));"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{});Gv();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
