/**
 * name: @lunarclient/skinviewer
 * version: v2.11.1
 * @preserve skinview3d / MIT License / https://github.com/bs-community/skinview3d
 * @preserve bridge-model-viewer / MIT License / https://github.com/bridge-core/model-viewer */
(function(Ot,Ct){typeof exports=="object"&&typeof module<"u"?Ct(exports):typeof define=="function"&&define.amd?define(["exports"],Ct):(Ot=typeof globalThis<"u"?globalThis:Ot||self,Ct(Ot.skinviewer={}))})(this,function(Ot){"use strict";var Mx=Object.defineProperty;var Ex=(Ot,Ct,$t)=>Ct in Ot?Mx(Ot,Ct,{enumerable:!0,configurable:!0,writable:!0,value:$t}):Ot[Ct]=$t;var k=(Ot,Ct,$t)=>Ex(Ot,typeof Ct!="symbol"?Ct+"":Ct,$t);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ct="152",$t={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fh=0,Ja=1,ph=2,eo=1,mh=2,mn=3,gn=0,Ut=1,Bt=2,Pn=0,ii=1,to=2,no=3,io=4,gh=5,si=100,vh=101,_h=102,so=103,ro=104,xh=200,Ah=201,yh=202,Mh=203,ao=204,oo=205,Eh=206,wh=207,Sh=208,bh=209,Th=210,Ch=0,Rh=1,Ph=2,Er=3,Lh=4,Ih=5,Dh=6,Uh=7,ws=0,Fh=1,Nh=2,vn=0,Oh=1,Bh=2,kh=3,zh=4,Hh=5,lo=300,ri=301,ai=302,Zi=303,wr=304,Ss=306,$i=1e3,kt=1001,Sr=1002,it=1003,co=1004,br=1005,Wt=1006,Gh=1007,Ji=1008,Hn=1009,Vh=1010,Wh=1011,ho=1012,Xh=1013,Gn=1014,_n=1015,es=1016,Yh=1017,Qh=1018,oi=1020,jh=1021,Xt=1023,qh=1024,Kh=1025,Vn=1026,li=1027,Zh=1028,$h=1029,Jh=1030,eu=1031,tu=1033,Tr=33776,Cr=33777,Rr=33778,Pr=33779,uo=35840,fo=35841,po=35842,mo=35843,nu=36196,go=37492,vo=37496,_o=37808,xo=37809,Ao=37810,yo=37811,Mo=37812,Eo=37813,wo=37814,So=37815,bo=37816,To=37817,Co=37818,Ro=37819,Po=37820,Lo=37821,Lr=36492,iu=36283,Io=36284,Do=36285,Uo=36286,bs=2300,Ts=2301,Ir=2302,Fo=2400,No=2401,Oo=2402,su=2500,Bo=3e3,Wn=3001,ru=3200,au=3201,Dr=0,ou=1,Xn="",we="srgb",cn="srgb-linear",ko="display-p3",Ur=7680,lu=519,Fr=35044,zo="300 es",Nr=1035;class Yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ho=1234567;const ci=Math.PI/180,hi=180/Math.PI;function Jt(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[s&255]+Mt[s>>8&255]+Mt[s>>16&255]+Mt[s>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function _t(s,e,t){return Math.max(e,Math.min(t,s))}function Or(s,e){return(s%e+e)%e}function cu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function hu(s,e,t){return s!==e?(t-s)/(e-s):0}function ts(s,e,t){return(1-t)*s+t*e}function uu(s,e,t,n){return ts(s,e,1-Math.exp(-t*n))}function du(s,e=1){return e-Math.abs(Or(s,e*2)-e)}function fu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function pu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function mu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function gu(s,e){return s+Math.random()*(e-s)}function vu(s){return s*(.5-Math.random())}function _u(s){s!==void 0&&(Ho=s);let e=Ho+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xu(s){return s*ci}function Au(s){return s*hi}function Br(s){return(s&s-1)===0&&s!==0}function Go(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Vo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yu(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function je(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ye={DEG2RAD:ci,RAD2DEG:hi,generateUUID:Jt,clamp:_t,euclideanModulo:Or,mapLinear:cu,inverseLerp:hu,lerp:ts,damp:uu,pingpong:du,smoothstep:fu,smootherstep:pu,randInt:mu,randFloat:gu,randFloatSpread:vu,seededRandom:_u,degToRad:xu,radToDeg:Au,isPowerOfTwo:Br,ceilPowerOfTwo:Go,floorPowerOfTwo:Vo,setQuaternionFromProperEuler:yu,normalize:je,denormalize:xn};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],v=i[0],m=i[3],f=i[6],x=i[1],_=i[4],w=i[7],M=i[2],b=i[5],P=i[8];return r[0]=a*v+o*x+l*M,r[3]=a*m+o*_+l*b,r[6]=a*f+o*w+l*P,r[1]=c*v+u*x+h*M,r[4]=c*m+u*_+h*b,r[7]=c*f+u*w+h*P,r[2]=d*v+p*x+g*M,r[5]=d*m+p*_+g*b,r[8]=d*f+p*w+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(i*c-u*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(u*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(kr.makeScale(e,t)),this}rotate(e){return this.premultiply(kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(kr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new Oe;function Wo(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ns(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Xo={};function is(s){s in Xo||(Xo[s]=!0,console.warn(s))}function ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Mu=new Oe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Eu=new Oe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function wu(s){return s.convertSRGBToLinear().applyMatrix3(Eu)}function Su(s){return s.applyMatrix3(Mu).convertLinearToSRGB()}const bu={[cn]:s=>s,[we]:s=>s.convertSRGBToLinear(),[ko]:wu},Tu={[cn]:s=>s,[we]:s=>s.convertLinearToSRGB(),[ko]:Su},en={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return cn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=bu[e],i=Tu[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let di;class Yo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{di===void 0&&(di=ns("canvas")),di.width=e.width,di.height=e.height;const n=di.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ui(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Qo{constructor(e=null){this.isSource=!0,this.uuid=Jt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Hr(i[a].image)):r.push(Hr(i[a]))}else r=Hr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Hr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cu=0;class st extends Yn{constructor(e=st.DEFAULT_IMAGE,t=st.DEFAULT_MAPPING,n=kt,i=kt,r=Wt,a=Ji,o=Xt,l=Hn,c=st.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Jt(),this.name="",this.source=new Qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Wn?we:Xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $i:e.x=e.x-Math.floor(e.x);break;case kt:e.x=e.x<0?0:1;break;case Sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $i:e.y=e.y-Math.floor(e.y);break;case kt:e.y=e.y<0?0:1;break;case Sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===we?Wn:Bo}set encoding(e){is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wn?we:Xn}}st.DEFAULT_IMAGE=null,st.DEFAULT_MAPPING=lo,st.DEFAULT_ANISOTROPY=1;class Ve{constructor(e=0,t=0,n=0,i=1){Ve.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,w=(p+1)/2,M=(f+1)/2,b=(u+d)/4,P=(h+v)/4,F=(g+m)/4;return _>w&&_>M?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=b/n,r=P/n):w>M?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=b/i,r=F/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=P/r,i=F/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-v)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class An extends Yn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ve(0,0,e,t),this.scissorTest=!1,this.viewport=new Ve(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wn?we:Xn),this.texture=new st(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jo extends st{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=it,this.minFilter=it,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ru extends st{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=it,this.minFilter=it,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==p||u!==g){let m=1-o;const f=l*d+c*p+u*g+h*v,x=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const M=Math.sqrt(_),b=Math.atan2(M,f*x);m=Math.sin(m*b)/M,o=Math.sin(o*b)/M}const w=o*x;if(l=l*m+d*w,c=c*m+p*w,u=u*m+g*w,h=h*m+v*w,m===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-a*t,d=-r*t-a*n-o*i;return this.x=c*l+d*-r+u*-o-h*-a,this.y=u*l+d*-a+h*-r-c*-o,this.z=h*l+d*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gr.copy(this).projectOnVector(e),this.sub(Gr)}reflect(e){return this.sub(Gr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gr=new C,qo=new Yt;class fi{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),pi.copy(e.boundingBox),pi.applyMatrix4(e.matrixWorld),this.union(pi);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)Mn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Mn)}else i.boundingBox===null&&i.computeBoundingBox(),pi.copy(i.boundingBox),pi.applyMatrix4(e.matrixWorld),this.union(pi)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Cs.subVectors(this.max,ss),mi.subVectors(e.a,ss),gi.subVectors(e.b,ss),vi.subVectors(e.c,ss),Ln.subVectors(gi,mi),In.subVectors(vi,gi),Qn.subVectors(mi,vi);let t=[0,-Ln.z,Ln.y,0,-In.z,In.y,0,-Qn.z,Qn.y,Ln.z,0,-Ln.x,In.z,0,-In.x,Qn.z,0,-Qn.x,-Ln.y,Ln.x,0,-In.y,In.x,0,-Qn.y,Qn.x,0];return!Vr(t,mi,gi,vi,Cs)||(t=[1,0,0,0,1,0,0,0,1],!Vr(t,mi,gi,vi,Cs))?!1:(Rs.crossVectors(Ln,In),t=[Rs.x,Rs.y,Rs.z],Vr(t,mi,gi,vi,Cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yn=[new C,new C,new C,new C,new C,new C,new C,new C],Mn=new C,pi=new fi,mi=new C,gi=new C,vi=new C,Ln=new C,In=new C,Qn=new C,ss=new C,Cs=new C,Rs=new C,jn=new C;function Vr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){jn.fromArray(s,r);const o=i.x*Math.abs(jn.x)+i.y*Math.abs(jn.y)+i.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),u=n.dot(jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Pu=new fi,rs=new C,Wr=new C;class _i{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rs.subVectors(e,this.center);const t=rs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(rs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rs.copy(e.center).add(Wr)),this.expandByPoint(rs.copy(e.center).sub(Wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new C,Xr=new C,Ps=new C,Dn=new C,Yr=new C,Ls=new C,Qr=new C;class jr{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xr.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(Xr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ps),o=Dn.dot(this.direction),l=-Dn.dot(Ps),c=Dn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Xr).addScaledVector(Ps,d),p}intersectSphere(e,t){En.subVectors(e.center,this.origin);const n=En.dot(this.direction),i=En.dot(En)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,i,r){Yr.subVectors(t,e),Ls.subVectors(n,e),Qr.crossVectors(Yr,Ls);let a=this.direction.dot(Qr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,e);const l=o*this.direction.dot(Ls.crossVectors(Dn,Ls));if(l<0)return null;const c=o*this.direction.dot(Yr.cross(Dn));if(c<0||l+c>a)return null;const u=-o*Dn.dot(Qr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,o,l,c,u,h,d,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/xi.setFromMatrixColumn(e,0).length(),r=1/xi.setFromMatrixColumn(e,1).length(),a=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lu,e,Iu)}lookAt(e,t,n){const i=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Un.crossVectors(n,zt),Un.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Un.crossVectors(n,zt)),Un.normalize(),Is.crossVectors(zt,Un),i[0]=Un.x,i[4]=Is.x,i[8]=zt.x,i[1]=Un.y,i[5]=Is.y,i[9]=zt.y,i[2]=Un.z,i[6]=Is.z,i[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],x=n[3],_=n[7],w=n[11],M=n[15],b=i[0],P=i[4],F=i[8],A=i[12],T=i[1],Y=i[5],Z=i[9],D=i[13],O=i[2],H=i[6],J=i[10],j=i[14],X=i[3],$=i[7],ee=i[11],pe=i[15];return r[0]=a*b+o*T+l*O+c*X,r[4]=a*P+o*Y+l*H+c*$,r[8]=a*F+o*Z+l*J+c*ee,r[12]=a*A+o*D+l*j+c*pe,r[1]=u*b+h*T+d*O+p*X,r[5]=u*P+h*Y+d*H+p*$,r[9]=u*F+h*Z+d*J+p*ee,r[13]=u*A+h*D+d*j+p*pe,r[2]=g*b+v*T+m*O+f*X,r[6]=g*P+v*Y+m*H+f*$,r[10]=g*F+v*Z+m*J+f*ee,r[14]=g*A+v*D+m*j+f*pe,r[3]=x*b+_*T+w*O+M*X,r[7]=x*P+_*Y+w*H+M*$,r[11]=x*F+_*Z+w*J+M*ee,r[15]=x*A+_*D+w*j+M*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*p-n*l*p)+v*(+t*l*p-t*c*d+r*a*d-i*a*p+i*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+f*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],x=h*m*c-v*d*c+v*l*p-o*m*p-h*l*f+o*d*f,_=g*d*c-u*m*c-g*l*p+a*m*p+u*l*f-a*d*f,w=u*v*c-g*h*c+g*o*p-a*v*p-u*o*f+a*h*f,M=g*h*l-u*v*l-g*o*d+a*v*d+u*o*m-a*h*m,b=t*x+n*_+i*w+r*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/b;return e[0]=x*P,e[1]=(v*d*r-h*m*r-v*i*p+n*m*p+h*i*f-n*d*f)*P,e[2]=(o*m*r-v*l*r+v*i*c-n*m*c-o*i*f+n*l*f)*P,e[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*p-n*l*p)*P,e[4]=_*P,e[5]=(u*m*r-g*d*r+g*i*p-t*m*p-u*i*f+t*d*f)*P,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*f-t*l*f)*P,e[7]=(a*d*r-u*l*r+u*i*c-t*d*c-a*i*p+t*l*p)*P,e[8]=w*P,e[9]=(g*h*r-u*v*r-g*n*p+t*v*p+u*n*f-t*h*f)*P,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*f+t*o*f)*P,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*P,e[12]=M*P,e[13]=(u*v*i-g*h*i+g*n*d-t*v*d-u*n*m+t*h*m)*P,e[14]=(g*o*i-a*v*i-g*n*l+t*v*l+a*n*m-t*o*m)*P,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,g=r*h,v=a*u,m=a*h,f=o*h,x=l*c,_=l*u,w=l*h,M=n.x,b=n.y,P=n.z;return i[0]=(1-(v+f))*M,i[1]=(p+w)*M,i[2]=(g-_)*M,i[3]=0,i[4]=(p-w)*b,i[5]=(1-(d+f))*b,i[6]=(m+x)*b,i[7]=0,i[8]=(g+_)*P,i[9]=(m-x)*P,i[10]=(1-(d+v))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=xi.set(i[0],i[1],i[2]).length();const a=xi.set(i[4],i[5],i[6]).length(),o=xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],tn.copy(this);const c=1/r,u=1/a,h=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=h,tn.elements[9]*=h,tn.elements[10]*=h,t.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(a+r)/(a-r),p=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),h=(t+e)*l,d=(n+i)*c,p=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xi=new C,tn=new Ae,Lu=new C(0,0,0),Iu=new C(1,1,1),Un=new C,Is=new C,zt=new C,Ko=new Ae,Zo=new Yt;class Et{constructor(e=0,t=0,n=0,i=Et.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ko.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ko,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zo.setFromEuler(this),this.setFromQuaternion(Zo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Et.DEFAULT_ORDER="XYZ";class $o{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Du=0;const Jo=new C,Ai=new Yt,wn=new Ae,Ds=new C,as=new C,Uu=new C,Fu=new Yt,el=new C(1,0,0),tl=new C(0,1,0),nl=new C(0,0,1),Nu={type:"added"},il={type:"removed"};class Je extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Jt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const e=new C,t=new Et,n=new Yt,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Oe}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(el,e)}rotateY(e){return this.rotateOnAxis(tl,e)}rotateZ(e){return this.rotateOnAxis(nl,e)}translateOnAxis(e,t){return Jo.copy(e).applyQuaternion(this.quaternion),this.position.add(Jo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(el,e)}translateY(e){return this.translateOnAxis(tl,e)}translateZ(e){return this.translateOnAxis(nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ds.copy(e):Ds.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(as,Ds,this.up):wn.lookAt(Ds,as,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(wn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(il)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(il)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,Uu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Fu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Je.DEFAULT_UP=new C(0,1,0),Je.DEFAULT_MATRIX_AUTO_UPDATE=!0,Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new C,Sn=new C,qr=new C,bn=new C,yi=new C,Mi=new C,sl=new C,Kr=new C,Zr=new C,$r=new C;let Us=!1;class Ht{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),nn.subVectors(e,t),i.cross(nn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){nn.subVectors(i,t),Sn.subVectors(n,t),qr.subVectors(e,t);const a=nn.dot(nn),o=nn.dot(Sn),l=nn.dot(qr),c=Sn.dot(Sn),u=Sn.dot(qr),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bn),bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(e,t,n,i,r,a,o,l){return Us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Us=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,bn),l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l}static isFrontFacing(e,t,n,i){return nn.subVectors(n,t),Sn.subVectors(e,t),nn.cross(Sn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),nn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Us=!0),Ht.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;yi.subVectors(i,n),Mi.subVectors(r,n),Kr.subVectors(e,n);const l=yi.dot(Kr),c=Mi.dot(Kr);if(l<=0&&c<=0)return t.copy(n);Zr.subVectors(e,i);const u=yi.dot(Zr),h=Mi.dot(Zr);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(yi,a);$r.subVectors(e,r);const p=yi.dot($r),g=Mi.dot($r);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Mi,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return sl.subVectors(r,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(sl,o);const f=1/(m+v+d);return a=v*f,o=d*f,t.copy(n).addScaledVector(yi,a).addScaledVector(Mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ou=0;class sn extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Jt(),this.name="",this.type="Material",this.blending=ii,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ao,this.blendDst=oo,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==gn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Jr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=we){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,en.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=en.workingColorSpace){return this.r=e,this.g=t,this.b=n,en.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=en.workingColorSpace){if(e=Or(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Jr(a,r,e+1/3),this.g=Jr(a,r,e),this.b=Jr(a,r,e-1/3)}return en.toWorkingColorSpace(this,i),this}setStyle(e,t=we){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=we){const n=rl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=we){return en.fromWorkingColorSpace(wt.copy(this),e),Math.round(_t(wt.r*255,0,255))*65536+Math.round(_t(wt.g*255,0,255))*256+Math.round(_t(wt.b*255,0,255))}getHexString(e=we){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=en.workingColorSpace){en.fromWorkingColorSpace(wt.copy(this),t);const n=wt.r,i=wt.g,r=wt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=en.workingColorSpace){return en.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=we){en.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,i=wt.b;return e!==we?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(rn),rn.h+=e,rn.s+=t,rn.l+=n,this.setHSL(rn.h,rn.s,rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rn),e.getHSL(Fs);const n=ts(rn.h,Fs.h,t),i=ts(rn.s,Fs.s,t),r=ts(rn.l,Fs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Te;Te.NAMES=rl;class Ei extends sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new C,Ns=new ge;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ns.fromBufferAttribute(this,t),Ns.applyMatrix3(e),this.setXY(t,Ns.x,Ns.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),r=je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ea extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class al extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bu=0;const Qt=new Ae,ta=new Je,wi=new C,Gt=new fi,os=new fi,xt=new C;class At extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Jt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wo(e)?al:ea)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return ta.lookAt(e),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];os.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Gt.min,os.min),Gt.expandByPoint(xt),xt.addVectors(Gt.max,os.max),Gt.expandByPoint(xt)):(Gt.expandByPoint(os.min),Gt.expandByPoint(os.max))}Gt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)xt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(xt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)xt.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(e,c),xt.add(wi)),i=Math.max(i,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new C,u[T]=new C;const h=new C,d=new C,p=new C,g=new ge,v=new ge,m=new ge,f=new C,x=new C;function _(T,Y,Z){h.fromArray(i,T*3),d.fromArray(i,Y*3),p.fromArray(i,Z*3),g.fromArray(a,T*2),v.fromArray(a,Y*2),m.fromArray(a,Z*2),d.sub(h),p.sub(h),v.sub(g),m.sub(g);const D=1/(v.x*m.y-m.x*v.y);isFinite(D)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(D),x.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(D),c[T].add(f),c[Y].add(f),c[Z].add(f),u[T].add(x),u[Y].add(x),u[Z].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let T=0,Y=w.length;T<Y;++T){const Z=w[T],D=Z.start,O=Z.count;for(let H=D,J=D+O;H<J;H+=3)_(n[H+0],n[H+1],n[H+2])}const M=new C,b=new C,P=new C,F=new C;function A(T){P.fromArray(r,T*3),F.copy(P);const Y=c[T];M.copy(Y),M.sub(P.multiplyScalar(P.dot(Y))).normalize(),b.crossVectors(F,Y);const D=b.dot(u[T])<0?-1:1;l[T*4]=M.x,l[T*4+1]=M.y,l[T*4+2]=M.z,l[T*4+3]=D}for(let T=0,Y=w.length;T<Y;++T){const Z=w[T],D=Z.start,O=Z.count;for(let H=D,J=D+O;H<J;H+=3)A(n[H+0]),A(n[H+1]),A(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Ft(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ol=new Ae,hn=new jr,Os=new _i,ll=new C,Si=new C,bi=new C,Ti=new C,na=new C,Bs=new C,ks=new ge,zs=new ge,Hs=new ge,cl=new C,hl=new C,ul=new C,Gs=new C,Vs=new C;class ze extends Je{constructor(e=new At,t=new Ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Bs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(na.fromBufferAttribute(h,e),a?Bs.addScaledVector(na,u):Bs.addScaledVector(na.sub(t),u))}t.add(Bs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(r),hn.copy(e.ray).recast(e.near),!(Os.containsPoint(hn.origin)===!1&&(hn.intersectSphere(Os,ll)===null||hn.origin.distanceToSquared(ll)>(e.far-e.near)**2))&&(ol.copy(r).invert(),hn.copy(e.ray).applyMatrix4(ol),!(n.boundingBox!==null&&hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const i=this.geometry,r=this.material,a=i.index,o=i.attributes.position,l=i.attributes.uv,c=i.attributes.uv1,u=i.attributes.normal,h=i.groups,d=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const v=h[p],m=r[v.materialIndex],f=Math.max(v.start,d.start),x=Math.min(a.count,Math.min(v.start+v.count,d.start+d.count));for(let _=f,w=x;_<w;_+=3){const M=a.getX(_),b=a.getX(_+1),P=a.getX(_+2);n=Ws(this,m,e,hn,l,c,u,M,b,P),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=v.materialIndex,t.push(n))}}else{const p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let v=p,m=g;v<m;v+=3){const f=a.getX(v),x=a.getX(v+1),_=a.getX(v+2);n=Ws(this,r,e,hn,l,c,u,f,x,_),n&&(n.faceIndex=Math.floor(v/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const v=h[p],m=r[v.materialIndex],f=Math.max(v.start,d.start),x=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));for(let _=f,w=x;_<w;_+=3){const M=_,b=_+1,P=_+2;n=Ws(this,m,e,hn,l,c,u,M,b,P),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=v.materialIndex,t.push(n))}}else{const p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let v=p,m=g;v<m;v+=3){const f=v,x=v+1,_=v+2;n=Ws(this,r,e,hn,l,c,u,f,x,_),n&&(n.faceIndex=Math.floor(v/3),t.push(n))}}}}function ku(s,e,t,n,i,r,a,o){let l;if(e.side===Ut?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===gn,o),l===null)return null;Vs.copy(o),Vs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Vs);return c<t.near||c>t.far?null:{distance:c,point:Vs.clone(),object:s}}function Ws(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Si),s.getVertexPosition(l,bi),s.getVertexPosition(c,Ti);const u=ku(s,e,t,n,Si,bi,Ti,Gs);if(u){i&&(ks.fromBufferAttribute(i,o),zs.fromBufferAttribute(i,l),Hs.fromBufferAttribute(i,c),u.uv=Ht.getInterpolation(Gs,Si,bi,Ti,ks,zs,Hs,new ge)),r&&(ks.fromBufferAttribute(r,o),zs.fromBufferAttribute(r,l),Hs.fromBufferAttribute(r,c),u.uv1=Ht.getInterpolation(Gs,Si,bi,Ti,ks,zs,Hs,new ge),u.uv2=u.uv1),a&&(cl.fromBufferAttribute(a,o),hl.fromBufferAttribute(a,l),ul.fromBufferAttribute(a,c),u.normal=Ht.getInterpolation(Gs,Si,bi,Ti,cl,hl,ul,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new C,materialIndex:0};Ht.getNormal(Si,bi,Ti,h.normal),u.face=h}return u}class ot extends At{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(h,2));function g(v,m,f,x,_,w,M,b,P,F,A){const T=w/P,Y=M/F,Z=w/2,D=M/2,O=b/2,H=P+1,J=F+1;let j=0,X=0;const $=new C;for(let ee=0;ee<J;ee++){const pe=ee*Y-D;for(let oe=0;oe<H;oe++){const z=oe*T-Z;$[v]=z*x,$[m]=pe*_,$[f]=O,c.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[f]=b>0?1:-1,u.push($.x,$.y,$.z),h.push(oe/P),h.push(1-ee/F),j+=1}}for(let ee=0;ee<F;ee++)for(let pe=0;pe<P;pe++){const oe=d+pe+H*ee,z=d+pe+H*(ee+1),K=d+(pe+1)+H*(ee+1),se=d+(pe+1)+H*ee;l.push(oe,z,se),l.push(z,K,se),X+=6}o.addGroup(p,X,A),p+=X,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ot(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ci(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rt(s){const e={};for(let t=0;t<s.length;t++){const n=Ci(s[t]);for(const i in n)e[i]=n[i]}return e}function zu(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function dl(s){return s.getRenderTarget()===null?s.outputColorSpace:cn}const fl={clone:Ci,merge:Rt};var Hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hu,this.fragmentShader=Gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=zu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pl extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pt extends pl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ci*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hi*2*Math.atan(Math.tan(ci*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ci*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ri=-90,Pi=1;class Vu extends Je{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Pt(Ri,Pi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Pt(Ri,Pi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Pt(Ri,Pi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Pt(Ri,Pi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Pt(Ri,Pi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Pt(Ri,Pi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=vn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class ia extends st{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ri,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wu extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wn?we:Xn),this.texture=new ia(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ot(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Pn});r.uniforms.tEquirect.value=t;const a=new ze(i,r),o=t.minFilter;return t.minFilter===Ji&&(t.minFilter=Wt),new Vu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const sa=new C,Xu=new C,Yu=new Oe;class qn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=sa.subVectors(n,t).cross(Xu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yu.getNormalMatrix(e),i=this.coplanarPoint(sa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new _i,Xs=new C;class ra{constructor(e=new qn,t=new qn,n=new qn,i=new qn,r=new qn,a=new qn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],p=n[9],g=n[10],v=n[11],m=n[12],f=n[13],x=n[14],_=n[15];return t[0].setComponents(o-i,h-l,v-d,_-m).normalize(),t[1].setComponents(o+i,h+l,v+d,_+m).normalize(),t[2].setComponents(o+r,h+c,v+p,_+f).normalize(),t[3].setComponents(o-r,h-c,v-p,_-f).normalize(),t[4].setComponents(o-a,h-u,v-g,_-x).normalize(),t[5].setComponents(o+a,h+u,v+g,_+x).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xs.x=i.normal.x>0?e.max.x:e.min.x,Xs.y=i.normal.y>0?e.max.y:e.min.y,Xs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ml(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Qu(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,p=s.createBuffer();s.bindBuffer(u,p),s.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=s.SHORT;else if(h instanceof Uint32Array)g=s.UNSIGNED_INT;else if(h instanceof Int32Array)g=s.INT;else if(h instanceof Int8Array)g=s.BYTE;else if(h instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,p=u.updateRange;s.bindBuffer(h,c),p.count===-1?s.bufferSubData(h,0,d):(t?s.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Ys extends At{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const x=f*d-a;for(let _=0;_<c;_++){const w=_*h-r;g.push(w,-x,0),v.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const _=x+c*f,w=x+c*(f+1),M=x+1+c*(f+1),b=x+1+c*f;p.push(_,w,b),p.push(w,M,b)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.widthSegments,e.heightSegments)}}var ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ku=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$u=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ju=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ed="vec3 transformed = vec3( position );",td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,id=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,sd=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fd=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,pd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,md=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",yd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,Sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Td=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ld=`#ifdef USE_GRADIENTMAP
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
}`,Id=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Od=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Vd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
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
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Qd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zd=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,$d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ef=`#if defined( USE_POINTS_UV )
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
#endif`,tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,af=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ff=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Tf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Rf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,If=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Df=`#ifdef USE_SKINNING
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
#endif`,Uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Of=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bf=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,kf=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,zf=`#ifdef USE_UV
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
#endif`,Hf=`#ifdef USE_UV
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
#endif`,Gf=`#ifdef USE_UV
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
#endif`,Vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pe={alphamap_fragment:ju,alphamap_pars_fragment:qu,alphatest_fragment:Ku,alphatest_pars_fragment:Zu,aomap_fragment:$u,aomap_pars_fragment:Ju,begin_vertex:ed,beginnormal_vertex:td,bsdfs:nd,iridescence_fragment:id,bumpmap_pars_fragment:sd,clipping_planes_fragment:rd,clipping_planes_pars_fragment:ad,clipping_planes_pars_vertex:od,clipping_planes_vertex:ld,color_fragment:cd,color_pars_fragment:hd,color_pars_vertex:ud,color_vertex:dd,common:fd,cube_uv_reflection_fragment:pd,defaultnormal_vertex:md,displacementmap_pars_vertex:gd,displacementmap_vertex:vd,emissivemap_fragment:_d,emissivemap_pars_fragment:xd,encodings_fragment:Ad,encodings_pars_fragment:yd,envmap_fragment:Md,envmap_common_pars_fragment:Ed,envmap_pars_fragment:wd,envmap_pars_vertex:Sd,envmap_physical_pars_fragment:Od,envmap_vertex:bd,fog_vertex:Td,fog_pars_vertex:Cd,fog_fragment:Rd,fog_pars_fragment:Pd,gradientmap_pars_fragment:Ld,lightmap_fragment:Id,lightmap_pars_fragment:Dd,lights_lambert_fragment:Ud,lights_lambert_pars_fragment:Fd,lights_pars_begin:Nd,lights_toon_fragment:Bd,lights_toon_pars_fragment:kd,lights_phong_fragment:zd,lights_phong_pars_fragment:Hd,lights_physical_fragment:Gd,lights_physical_pars_fragment:Vd,lights_fragment_begin:Wd,lights_fragment_maps:Xd,lights_fragment_end:Yd,logdepthbuf_fragment:Qd,logdepthbuf_pars_fragment:jd,logdepthbuf_pars_vertex:qd,logdepthbuf_vertex:Kd,map_fragment:Zd,map_pars_fragment:$d,map_particle_fragment:Jd,map_particle_pars_fragment:ef,metalnessmap_fragment:tf,metalnessmap_pars_fragment:nf,morphcolor_vertex:sf,morphnormal_vertex:rf,morphtarget_pars_vertex:af,morphtarget_vertex:of,normal_fragment_begin:lf,normal_fragment_maps:cf,normal_pars_fragment:hf,normal_pars_vertex:uf,normal_vertex:df,normalmap_pars_fragment:ff,clearcoat_normal_fragment_begin:pf,clearcoat_normal_fragment_maps:mf,clearcoat_pars_fragment:gf,iridescence_pars_fragment:vf,output_fragment:_f,packing:xf,premultiplied_alpha_fragment:Af,project_vertex:yf,dithering_fragment:Mf,dithering_pars_fragment:Ef,roughnessmap_fragment:wf,roughnessmap_pars_fragment:Sf,shadowmap_pars_fragment:bf,shadowmap_pars_vertex:Tf,shadowmap_vertex:Cf,shadowmask_pars_fragment:Rf,skinbase_vertex:Pf,skinning_pars_vertex:Lf,skinning_vertex:If,skinnormal_vertex:Df,specularmap_fragment:Uf,specularmap_pars_fragment:Ff,tonemapping_fragment:Nf,tonemapping_pars_fragment:Of,transmission_fragment:Bf,transmission_pars_fragment:kf,uv_pars_fragment:zf,uv_pars_vertex:Hf,uv_vertex:Gf,worldpos_vertex:Vf,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
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
	#include <morphcolor_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},ae={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaTest:{value:0}}},un={basic:{uniforms:Rt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Rt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Te(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Rt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Rt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Rt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Te(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Rt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Rt([ae.points,ae.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Rt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Rt([ae.common,ae.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Rt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Rt([ae.sprite,ae.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:Rt([ae.common,ae.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:Rt([ae.lights,ae.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};un.physical={uniforms:Rt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const Qs={r:0,b:0,g:0};function Wf(s,e,t,n,i,r,a){const o=new Te(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(m,f){let x=!1,_=f.isScene===!0?f.background:null;switch(_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),x=!0),s.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),x=!0;break}(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ss)?(u===void 0&&(u=new ze(new ot(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Ci(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=_.colorSpace!==we,(h!==_||d!==_.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,p=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ze(new Ys(2,2),new Tn({name:"BackgroundMaterial",uniforms:Ci(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=_.colorSpace!==we,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(Qs,dl(s)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:g}}function Xf(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(O,H,J,j,X){let $=!1;if(a){const ee=v(j,J,H);c!==ee&&(c=ee,p(c.object)),$=f(O,j,J,X),$&&x(O,j,J,X)}else{const ee=H.wireframe===!0;(c.geometry!==j.id||c.program!==J.id||c.wireframe!==ee)&&(c.geometry=j.id,c.program=J.id,c.wireframe=ee,$=!0)}X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,F(O,H,J,j),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(O){return n.isWebGL2?s.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?s.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function v(O,H,J){const j=J.wireframe===!0;let X=o[O.id];X===void 0&&(X={},o[O.id]=X);let $=X[H.id];$===void 0&&($={},X[H.id]=$);let ee=$[j];return ee===void 0&&(ee=m(d()),$[j]=ee),ee}function m(O){const H=[],J=[],j=[];for(let X=0;X<i;X++)H[X]=0,J[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:J,attributeDivisors:j,object:O,attributes:{},index:null}}function f(O,H,J,j){const X=c.attributes,$=H.attributes;let ee=0;const pe=J.getAttributes();for(const oe in pe)if(pe[oe].location>=0){const K=X[oe];let se=$[oe];if(se===void 0&&(oe==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),oe==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),K===void 0||K.attribute!==se||se&&K.data!==se.data)return!0;ee++}return c.attributesNum!==ee||c.index!==j}function x(O,H,J,j){const X={},$=H.attributes;let ee=0;const pe=J.getAttributes();for(const oe in pe)if(pe[oe].location>=0){let K=$[oe];K===void 0&&(oe==="instanceMatrix"&&O.instanceMatrix&&(K=O.instanceMatrix),oe==="instanceColor"&&O.instanceColor&&(K=O.instanceColor));const se={};se.attribute=K,K&&K.data&&(se.data=K.data),X[oe]=se,ee++}c.attributes=X,c.attributesNum=ee,c.index=j}function _(){const O=c.newAttributes;for(let H=0,J=O.length;H<J;H++)O[H]=0}function w(O){M(O,0)}function M(O,H){const J=c.newAttributes,j=c.enabledAttributes,X=c.attributeDivisors;J[O]=1,j[O]===0&&(s.enableVertexAttribArray(O),j[O]=1),X[O]!==H&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,H),X[O]=H)}function b(){const O=c.newAttributes,H=c.enabledAttributes;for(let J=0,j=H.length;J<j;J++)H[J]!==O[J]&&(s.disableVertexAttribArray(J),H[J]=0)}function P(O,H,J,j,X,$){n.isWebGL2===!0&&(J===s.INT||J===s.UNSIGNED_INT)?s.vertexAttribIPointer(O,H,J,X,$):s.vertexAttribPointer(O,H,J,j,X,$)}function F(O,H,J,j){if(n.isWebGL2===!1&&(O.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const X=j.attributes,$=J.getAttributes(),ee=H.defaultAttributeValues;for(const pe in $){const oe=$[pe];if(oe.location>=0){let z=X[pe];if(z===void 0&&(pe==="instanceMatrix"&&O.instanceMatrix&&(z=O.instanceMatrix),pe==="instanceColor"&&O.instanceColor&&(z=O.instanceColor)),z!==void 0){const K=z.normalized,se=z.itemSize,le=t.get(z);if(le===void 0)continue;const I=le.buffer,Se=le.type,be=le.bytesPerElement;if(z.isInterleavedBufferAttribute){const re=z.data,Me=re.stride,Xe=z.offset;if(re.isInstancedInterleavedBuffer){for(let xe=0;xe<oe.locationSize;xe++)M(oe.location+xe,re.meshPerAttribute);O.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let xe=0;xe<oe.locationSize;xe++)w(oe.location+xe);s.bindBuffer(s.ARRAY_BUFFER,I);for(let xe=0;xe<oe.locationSize;xe++)P(oe.location+xe,se/oe.locationSize,Se,K,Me*be,(Xe+se/oe.locationSize*xe)*be)}else{if(z.isInstancedBufferAttribute){for(let re=0;re<oe.locationSize;re++)M(oe.location+re,z.meshPerAttribute);O.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let re=0;re<oe.locationSize;re++)w(oe.location+re);s.bindBuffer(s.ARRAY_BUFFER,I);for(let re=0;re<oe.locationSize;re++)P(oe.location+re,se/oe.locationSize,Se,K,se*be,se/oe.locationSize*re*be)}}else if(ee!==void 0){const K=ee[pe];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(oe.location,K);break;case 3:s.vertexAttrib3fv(oe.location,K);break;case 4:s.vertexAttrib4fv(oe.location,K);break;default:s.vertexAttrib1fv(oe.location,K)}}}}b()}function A(){Z();for(const O in o){const H=o[O];for(const J in H){const j=H[J];for(const X in j)g(j[X].object),delete j[X];delete H[J]}delete o[O]}}function T(O){if(o[O.id]===void 0)return;const H=o[O.id];for(const J in H){const j=H[J];for(const X in j)g(j[X].object),delete j[X];delete H[J]}delete o[O.id]}function Y(O){for(const H in o){const J=o[H];if(J[O.id]===void 0)continue;const j=J[O.id];for(const X in j)g(j[X].object),delete j[X];delete J[O.id]}}function Z(){D(),u=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:Y,initAttributes:_,enableAttribute:w,disableUnusedAttributes:b}}function Yf(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,p;if(i)d=s,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Qf(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,w=a||e.has("OES_texture_float"),M=_&&w,b=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:w,floatVertexTextures:M,maxSamples:b}}function jf(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new qn,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,_=x*4;let w=f.clippingState||null;l.value=w,w=u(g,d,_,p);for(let M=0;M!==_;++M)w[M]=t[M];f.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,w=p;_!==v;++_,w+=4)a.copy(h[_]).applyMatrix4(x,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function qf(s){let e=new WeakMap;function t(a,o){return o===Zi?a.mapping=ri:o===wr&&(a.mapping=ai),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Zi||o===wr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Wu(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class js extends pl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Li=4,gl=[.125,.215,.35,.446,.526,.582],Zn=20,aa=new js,vl=new Te;let oa=null;const $n=(1+Math.sqrt(5))/2,Ii=1/$n,_l=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,$n,Ii),new C(0,$n,-Ii),new C(Ii,0,$n),new C(-Ii,0,$n),new C($n,Ii,0),new C(-$n,Ii,0)];class xl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){oa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oa),e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:es,format:Xt,colorSpace:cn,depthBuffer:!1},i=Al(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Al(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kf(r)),this._blurMaterial=Zf(r,e,t)}return i}_compileMaterial(e){const t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,aa)}_sceneToCubeUV(e,t,n,i){const o=new Pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(vl),u.toneMapping=vn,u.autoClear=!1;const p=new Ei({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),g=new ze(new ot,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(vl),v=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const _=this._cubeSize;qs(i,x*_,f>2?_:0,_,_),u.setRenderTarget(i),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ri||e.mapping===ai;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ze(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;qs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,aa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=_l[(i-1)%_l.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ze(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Zn-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Zn;m>Zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zn}`);const f=[];let x=0;for(let P=0;P<Zn;++P){const F=P/v,A=Math.exp(-F*F/2);f.push(A),P===0?x+=A:P<m&&(x+=2*A)}for(let P=0;P<f.length;P++)f[P]=f[P]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const w=this._sizeLods[i],M=3*w*(i>_-Li?i-_+Li:0),b=4*(this._cubeSize-w);qs(t,M,b,3*w,2*w),l.setRenderTarget(t),l.render(h,aa)}}function Kf(s){const e=[],t=[],n=[];let i=s;const r=s-Li+1+gl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Li?l=gl[a-s+Li-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,f=1,x=new Float32Array(v*g*p),_=new Float32Array(m*g*p),w=new Float32Array(f*g*p);for(let b=0;b<p;b++){const P=b%3*2/3-1,F=b>2?0:-1,A=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];x.set(A,v*g*b),_.set(d,m*g*b);const T=[b,b,b,b,b,b];w.set(T,f*g*b)}const M=new At;M.setAttribute("position",new Ft(x,v)),M.setAttribute("uv",new Ft(_,m)),M.setAttribute("faceIndex",new Ft(w,f)),e.push(M),i>Li&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Al(s,e,t){const n=new An(s,e,t);return n.texture.mapping=Ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Zf(s,e,t){const n=new Float32Array(Zn),i=new C(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function yl(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ml(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function la(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $f(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Zi||l===wr,u=l===ri||l===ai;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new xl(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new xl(s));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Jf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ep(s,e,t,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],s.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let _=0,w=x.length;_<w;_+=3){const M=x[_+0],b=x[_+1],P=x[_+2];d.push(M,b,b,P,P,M)}}else{const x=g.array;v=g.version;for(let _=0,w=x.length/3-1;_<w;_+=3){const M=_+0,b=_+1,P=_+2;d.push(M,b,b,P,P,M)}}const m=new(Wo(d)?al:ea)(d,1);m.version=v;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function tp(s,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,p){s.drawElements(r,p,o,d*l),t.update(p,r,1)}function h(d,p,g){if(g===0)return;let v,m;if(i)v=s,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](r,p,o,d*l,g),t.update(p,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function np(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ip(s,e){return s[0]-e[0]}function sp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function rp(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new Ve,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let v=r.get(u);if(v===void 0||v.count!==g){let O=function(){Z.dispose(),r.delete(u),u.removeEventListener("dispose",O)};v!==void 0&&v.texture.dispose();const x=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let F=0;x===!0&&(F=1),_===!0&&(F=2),w===!0&&(F=3);let A=u.attributes.position.count*F,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const Y=new Float32Array(A*T*4*g),Z=new jo(Y,A,T,g);Z.type=_n,Z.needsUpdate=!0;const D=F*4;for(let H=0;H<g;H++){const J=M[H],j=b[H],X=P[H],$=A*T*4*H;for(let ee=0;ee<J.count;ee++){const pe=ee*D;x===!0&&(a.fromBufferAttribute(J,ee),Y[$+pe+0]=a.x,Y[$+pe+1]=a.y,Y[$+pe+2]=a.z,Y[$+pe+3]=0),_===!0&&(a.fromBufferAttribute(j,ee),Y[$+pe+4]=a.x,Y[$+pe+5]=a.y,Y[$+pe+6]=a.z,Y[$+pe+7]=0),w===!0&&(a.fromBufferAttribute(X,ee),Y[$+pe+8]=a.x,Y[$+pe+9]=a.y,Y[$+pe+10]=a.z,Y[$+pe+11]=X.itemSize===4?a.w:1)}}v={count:g,texture:Z,size:new ge(A,T)},r.set(u,v),u.addEventListener("dispose",O)}let m=0;for(let x=0;x<d.length;x++)m+=d[x];const f=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",f),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const p=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<p;_++){const w=g[_];w[0]=_,w[1]=d[_]}g.sort(sp);for(let _=0;_<8;_++)_<p&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(ip);const v=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let _=0;_<8;_++){const w=o[_],M=w[0],b=w[1];M!==Number.MAX_SAFE_INTEGER&&b?(v&&u.getAttribute("morphTarget"+_)!==v[M]&&u.setAttribute("morphTarget"+_,v[M]),m&&u.getAttribute("morphNormal"+_)!==m[M]&&u.setAttribute("morphNormal"+_,m[M]),i[_]=b,f+=b):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),i[_]=0)}const x=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function ap(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const El=new st,wl=new jo,Sl=new Ru,bl=new ia,Tl=[],Cl=[],Rl=new Float32Array(16),Pl=new Float32Array(9),Ll=new Float32Array(4);function Di(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Tl[i];if(r===void 0&&(r=new Float32Array(i),Tl[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function gt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ks(s,e){let t=Cl[e];t===void 0&&(t=new Int32Array(e),Cl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function op(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function lp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2fv(this.addr,e),vt(t,e)}}function cp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;s.uniform3fv(this.addr,e),vt(t,e)}}function hp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4fv(this.addr,e),vt(t,e)}}function up(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;Ll.set(n),s.uniformMatrix2fv(this.addr,!1,Ll),vt(t,n)}}function dp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;Pl.set(n),s.uniformMatrix3fv(this.addr,!1,Pl),vt(t,n)}}function fp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;Rl.set(n),s.uniformMatrix4fv(this.addr,!1,Rl),vt(t,n)}}function pp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function mp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2iv(this.addr,e),vt(t,e)}}function gp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3iv(this.addr,e),vt(t,e)}}function vp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4iv(this.addr,e),vt(t,e)}}function _p(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function xp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2uiv(this.addr,e),vt(t,e)}}function Ap(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3uiv(this.addr,e),vt(t,e)}}function yp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4uiv(this.addr,e),vt(t,e)}}function Mp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||El,i)}function Ep(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sl,i)}function wp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bl,i)}function Sp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wl,i)}function bp(s){switch(s){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return dp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return vp;case 5125:return _p;case 36294:return xp;case 36295:return Ap;case 36296:return yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Mp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Sp}}function Tp(s,e){s.uniform1fv(this.addr,e)}function Cp(s,e){const t=Di(e,this.size,2);s.uniform2fv(this.addr,t)}function Rp(s,e){const t=Di(e,this.size,3);s.uniform3fv(this.addr,t)}function Pp(s,e){const t=Di(e,this.size,4);s.uniform4fv(this.addr,t)}function Lp(s,e){const t=Di(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ip(s,e){const t=Di(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Dp(s,e){const t=Di(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Up(s,e){s.uniform1iv(this.addr,e)}function Fp(s,e){s.uniform2iv(this.addr,e)}function Np(s,e){s.uniform3iv(this.addr,e)}function Op(s,e){s.uniform4iv(this.addr,e)}function Bp(s,e){s.uniform1uiv(this.addr,e)}function kp(s,e){s.uniform2uiv(this.addr,e)}function zp(s,e){s.uniform3uiv(this.addr,e)}function Hp(s,e){s.uniform4uiv(this.addr,e)}function Gp(s,e,t){const n=this.cache,i=e.length,r=Ks(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||El,r[a])}function Vp(s,e,t){const n=this.cache,i=e.length,r=Ks(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Sl,r[a])}function Wp(s,e,t){const n=this.cache,i=e.length,r=Ks(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||bl,r[a])}function Xp(s,e,t){const n=this.cache,i=e.length,r=Ks(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||wl,r[a])}function Yp(s){switch(s){case 5126:return Tp;case 35664:return Cp;case 35665:return Rp;case 35666:return Pp;case 35674:return Lp;case 35675:return Ip;case 35676:return Dp;case 5124:case 35670:return Up;case 35667:case 35671:return Fp;case 35668:case 35672:return Np;case 35669:case 35673:return Op;case 5125:return Bp;case 36294:return kp;case 36295:return zp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Gp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}class Qp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=bp(t.type)}}class jp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Yp(t.type)}}class qp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function Il(s,e){s.seq.push(e),s.map[e.id]=e}function Kp(s,e,t){const n=s.name,i=n.length;for(ca.lastIndex=0;;){const r=ca.exec(n),a=ca.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Il(t,c===void 0?new Qp(o,s,e):new jp(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new qp(o),Il(t,h)),t=h}}}class Zs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Kp(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Dl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Zp=0;function $p(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Jp(s){switch(s){case cn:return["Linear","( value )"];case we:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function Ul(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+$p(s.getShaderSource(e),a)}else return i}function em(s,e){const t=Jp(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function tm(s,e){let t;switch(e){case Oh:t="Linear";break;case Bh:t="Reinhard";break;case kh:t="OptimizedCineon";break;case zh:t="ACESFilmic";break;case Hh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nm(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ls).join(`
`)}function im(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sm(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ls(s){return s!==""}function Fl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ha(s){return s.replace(rm,am)}function am(s,e){const t=Pe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ha(t)}const om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ol(s){return s.replace(om,lm)}function lm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Bl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cm(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===eo?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===mh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function hm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ri:case ai:e="ENVMAP_TYPE_CUBE";break;case Ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function um(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ai:e="ENVMAP_MODE_REFRACTION";break}return e}function dm(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ws:e="ENVMAP_BLENDING_MULTIPLY";break;case Fh:e="ENVMAP_BLENDING_MIX";break;case Nh:e="ENVMAP_BLENDING_ADD";break}return e}function fm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function pm(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=cm(t),c=hm(t),u=um(t),h=dm(t),d=fm(t),p=t.isWebGL2?"":nm(t),g=im(r),v=i.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(ls).join(`
`),m.length>0&&(m+=`
`),f=[p,g].filter(ls).join(`
`),f.length>0&&(f+=`
`)):(m=[Bl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),f=[p,Bl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Pe.tonemapping_pars_fragment:"",t.toneMapping!==vn?tm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,em("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),a=ha(a),a=Fl(a,t),a=Nl(a,t),o=ha(o),o=Fl(o,t),o=Nl(o,t),a=Ol(a),o=Ol(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=x+m+a,w=x+f+o,M=Dl(i,i.VERTEX_SHADER,_),b=Dl(i,i.FRAGMENT_SHADER,w);if(i.attachShader(v,M),i.attachShader(v,b),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),s.debug.checkShaderErrors){const A=i.getProgramInfoLog(v).trim(),T=i.getShaderInfoLog(M).trim(),Y=i.getShaderInfoLog(b).trim();let Z=!0,D=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,M,b);else{const O=Ul(i,M,"vertex"),H=Ul(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Program Info Log: `+A+`
`+O+`
`+H)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(T===""||Y==="")&&(D=!1);D&&(this.diagnostics={runnable:Z,programLog:A,vertexShader:{log:T,prefix:m},fragmentShader:{log:Y,prefix:f}})}i.deleteShader(M),i.deleteShader(b);let P;this.getUniforms=function(){return P===void 0&&(P=new Zs(i,v)),P};let F;return this.getAttributes=function(){return F===void 0&&(F=sm(i,v)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=Zp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=b,this}let mm=0;class gm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vm(e),t.set(e,n)),n}}class vm{constructor(e){this.id=mm++,this.code=e,this.usedTimes=0}}function _m(s,e,t,n,i,r,a){const o=new $o,l=new gm,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(A){return A===1?"uv1":A===2?"uv2":A===3?"uv3":"uv"}function m(A,T,Y,Z,D){const O=Z.fog,H=D.geometry,J=A.isMeshStandardMaterial?Z.environment:null,j=(A.isMeshStandardMaterial?t:e).get(A.envMap||J),X=j&&j.mapping===Ss?j.image.height:null,$=g[A.type];A.precision!==null&&(p=i.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const ee=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,pe=ee!==void 0?ee.length:0;let oe=0;H.morphAttributes.position!==void 0&&(oe=1),H.morphAttributes.normal!==void 0&&(oe=2),H.morphAttributes.color!==void 0&&(oe=3);let z,K,se,le;if($){const qe=un[$];z=qe.vertexShader,K=qe.fragmentShader}else z=A.vertexShader,K=A.fragmentShader,l.update(A),se=l.getVertexShaderID(A),le=l.getFragmentShaderID(A);const I=s.getRenderTarget(),Se=D.isInstancedMesh===!0,be=!!A.map,re=!!A.matcap,Me=!!j,Xe=!!A.aoMap,xe=!!A.lightMap,Le=!!A.bumpMap,at=!!A.normalMap,rt=!!A.displacementMap,pt=!!A.emissiveMap,ct=!!A.metalnessMap,Ge=!!A.roughnessMap,$e=A.clearcoat>0,bt=A.iridescence>0,S=A.sheen>0,y=A.transmission>0,G=$e&&!!A.clearcoatMap,te=$e&&!!A.clearcoatNormalMap,ie=$e&&!!A.clearcoatRoughnessMap,ce=bt&&!!A.iridescenceMap,R=bt&&!!A.iridescenceThicknessMap,q=S&&!!A.sheenColorMap,B=S&&!!A.sheenRoughnessMap,he=!!A.specularMap,fe=!!A.specularColorMap,ve=!!A.specularIntensityMap,ue=y&&!!A.transmissionMap,me=y&&!!A.thicknessMap,Ce=!!A.gradientMap,De=!!A.alphaMap,ht=A.alphaTest>0,L=!!A.extensions,V=!!H.attributes.uv1,ne=!!H.attributes.uv2,de=!!H.attributes.uv3;return{isWebGL2:u,shaderID:$,shaderName:A.type,vertexShader:z,fragmentShader:K,defines:A.defines,customVertexShaderID:se,customFragmentShaderID:le,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,instancing:Se,instancingColor:Se&&D.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:I===null?s.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:cn,map:be,matcap:re,envMap:Me,envMapMode:Me&&j.mapping,envMapCubeUVHeight:X,aoMap:Xe,lightMap:xe,bumpMap:Le,normalMap:at,displacementMap:d&&rt,emissiveMap:pt,normalMapObjectSpace:at&&A.normalMapType===ou,normalMapTangentSpace:at&&A.normalMapType===Dr,metalnessMap:ct,roughnessMap:Ge,clearcoat:$e,clearcoatMap:G,clearcoatNormalMap:te,clearcoatRoughnessMap:ie,iridescence:bt,iridescenceMap:ce,iridescenceThicknessMap:R,sheen:S,sheenColorMap:q,sheenRoughnessMap:B,specularMap:he,specularColorMap:fe,specularIntensityMap:ve,transmission:y,transmissionMap:ue,thicknessMap:me,gradientMap:Ce,opaque:A.transparent===!1&&A.blending===ii,alphaMap:De,alphaTest:ht,combine:A.combine,mapUv:be&&v(A.map.channel),aoMapUv:Xe&&v(A.aoMap.channel),lightMapUv:xe&&v(A.lightMap.channel),bumpMapUv:Le&&v(A.bumpMap.channel),normalMapUv:at&&v(A.normalMap.channel),displacementMapUv:rt&&v(A.displacementMap.channel),emissiveMapUv:pt&&v(A.emissiveMap.channel),metalnessMapUv:ct&&v(A.metalnessMap.channel),roughnessMapUv:Ge&&v(A.roughnessMap.channel),clearcoatMapUv:G&&v(A.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&v(A.iridescenceMap.channel),iridescenceThicknessMapUv:R&&v(A.iridescenceThicknessMap.channel),sheenColorMapUv:q&&v(A.sheenColorMap.channel),sheenRoughnessMapUv:B&&v(A.sheenRoughnessMap.channel),specularMapUv:he&&v(A.specularMap.channel),specularColorMapUv:fe&&v(A.specularColorMap.channel),specularIntensityMapUv:ve&&v(A.specularIntensityMap.channel),transmissionMapUv:ue&&v(A.transmissionMap.channel),thicknessMapUv:me&&v(A.thicknessMap.channel),alphaMapUv:De&&v(A.alphaMap.channel),vertexTangents:at&&!!H.attributes.tangent,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:V,vertexUv2s:ne,vertexUv3s:de,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(be||De),fog:!!O,useFog:A.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:A.toneMapped?s.toneMapping:vn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Bt,flipSided:A.side===Ut,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:L&&A.extensions.derivatives===!0,extensionFragDepth:L&&A.extensions.fragDepth===!0,extensionDrawBuffers:L&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:L&&A.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:A.customProgramCacheKey()}}function f(A){const T=[];if(A.shaderID?T.push(A.shaderID):(T.push(A.customVertexShaderID),T.push(A.customFragmentShaderID)),A.defines!==void 0)for(const Y in A.defines)T.push(Y),T.push(A.defines[Y]);return A.isRawShaderMaterial===!1&&(x(T,A),_(T,A),T.push(s.outputColorSpace)),T.push(A.customProgramCacheKey),T.join()}function x(A,T){A.push(T.precision),A.push(T.outputColorSpace),A.push(T.envMapMode),A.push(T.envMapCubeUVHeight),A.push(T.mapUv),A.push(T.alphaMapUv),A.push(T.lightMapUv),A.push(T.aoMapUv),A.push(T.bumpMapUv),A.push(T.normalMapUv),A.push(T.displacementMapUv),A.push(T.emissiveMapUv),A.push(T.metalnessMapUv),A.push(T.roughnessMapUv),A.push(T.clearcoatMapUv),A.push(T.clearcoatNormalMapUv),A.push(T.clearcoatRoughnessMapUv),A.push(T.iridescenceMapUv),A.push(T.iridescenceThicknessMapUv),A.push(T.sheenColorMapUv),A.push(T.sheenRoughnessMapUv),A.push(T.specularMapUv),A.push(T.specularColorMapUv),A.push(T.specularIntensityMapUv),A.push(T.transmissionMapUv),A.push(T.thicknessMapUv),A.push(T.combine),A.push(T.fogExp2),A.push(T.sizeAttenuation),A.push(T.morphTargetsCount),A.push(T.morphAttributeCount),A.push(T.numDirLights),A.push(T.numPointLights),A.push(T.numSpotLights),A.push(T.numSpotLightMaps),A.push(T.numHemiLights),A.push(T.numRectAreaLights),A.push(T.numDirLightShadows),A.push(T.numPointLightShadows),A.push(T.numSpotLightShadows),A.push(T.numSpotLightShadowsWithMaps),A.push(T.shadowMapType),A.push(T.toneMapping),A.push(T.numClippingPlanes),A.push(T.numClipIntersection),A.push(T.depthPacking)}function _(A,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),A.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),A.push(o.mask)}function w(A){const T=g[A.type];let Y;if(T){const Z=un[T];Y=fl.clone(Z.uniforms)}else Y=A.uniforms;return Y}function M(A,T){let Y;for(let Z=0,D=c.length;Z<D;Z++){const O=c[Z];if(O.cacheKey===T){Y=O,++Y.usedTimes;break}}return Y===void 0&&(Y=new pm(s,T,A,r),c.push(Y)),Y}function b(A){if(--A.usedTimes===0){const T=c.indexOf(A);c[T]=c[c.length-1],c.pop(),A.destroy()}}function P(A){l.remove(A)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:w,acquireProgram:M,releaseProgram:b,releaseShaderCache:P,programs:c,dispose:F}}function xm(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Am(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function kl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,p,g,v,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function o(h,d,p,g,v,m){const f=a(h,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,d,p,g,v,m){const f=a(h,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Am),n.length>1&&n.sort(d||kl),i.length>1&&i.sort(d||kl)}function u(){for(let h=e,d=s.length;h<d;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function ym(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new zl,s.set(n,[a])):i>=r.length?(a=new zl,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Mm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Te};break;case"SpotLight":t={position:new C,direction:new C,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function Em(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let wm=0;function Sm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function bm(s,e){const t=new Mm,n=Em(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new C);const r=new C,a=new Ae,o=new Ae;function l(u,h){let d=0,p=0,g=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let v=0,m=0,f=0,x=0,_=0,w=0,M=0,b=0,P=0,F=0;u.sort(Sm);const A=h===!0?Math.PI:1;for(let Y=0,Z=u.length;Y<Z;Y++){const D=u[Y],O=D.color,H=D.intensity,J=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=O.r*H*A,p+=O.g*H*A,g+=O.b*H*A;else if(D.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],H);else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const $=D.shadow,ee=n.get(D);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,i.directionalShadow[v]=ee,i.directionalShadowMap[v]=j,i.directionalShadowMatrix[v]=D.shadow.matrix,w++}i.directional[v]=X,v++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(O).multiplyScalar(H*A),X.distance=J,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[f]=X;const $=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,$.updateMatrices(D),D.castShadow&&F++),i.spotLightMatrix[f]=$.matrix,D.castShadow){const ee=n.get(D);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,i.spotShadow[f]=ee,i.spotShadowMap[f]=j,b++}f++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(O).multiplyScalar(H),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[x]=X,x++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*A),X.distance=D.distance,X.decay=D.decay,D.castShadow){const $=D.shadow,ee=n.get(D);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,ee.shadowCameraNear=$.camera.near,ee.shadowCameraFar=$.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=D.shadow.matrix,M++}i.point[m]=X,m++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(H*A),X.groundColor.copy(D.groundColor).multiplyScalar(H*A),i.hemi[_]=X,_++}}x>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const T=i.hash;(T.directionalLength!==v||T.pointLength!==m||T.spotLength!==f||T.rectAreaLength!==x||T.hemiLength!==_||T.numDirectionalShadows!==w||T.numPointShadows!==M||T.numSpotShadows!==b||T.numSpotMaps!==P)&&(i.directional.length=v,i.spot.length=f,i.rectArea.length=x,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+P-F,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=F,T.directionalLength=v,T.pointLength=m,T.spotLength=f,T.rectAreaLength=x,T.hemiLength=_,T.numDirectionalShadows=w,T.numPointShadows=M,T.numSpotShadows=b,T.numSpotMaps=P,i.version=wm++)}function c(u,h){let d=0,p=0,g=0,v=0,m=0;const f=h.matrixWorldInverse;for(let x=0,_=u.length;x<_;x++){const w=u[x];if(w.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),d++}else if(w.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),g++}else if(w.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(f),o.identity(),a.copy(w.matrixWorld),a.premultiply(f),o.extractRotation(a),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(w.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(f),p++}else if(w.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function Hl(s,e){const t=new bm(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Tm(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Hl(s,e),t.set(r,[l])):a>=o.length?(l=new Hl(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Cm extends sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rm extends sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Im(s,e,t){let n=new ra;const i=new ge,r=new ge,a=new Ve,o=new Cm({depthPacking:au}),l=new Rm,c={},u=t.maxTextureSize,h={[gn]:Ut,[Ut]:gn,[Bt]:Bt},d=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:Pm,fragmentShader:Lm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new At;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ze(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let f=this.type;this.render=function(M,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const F=s.getRenderTarget(),A=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(Pn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Z=f!==mn&&this.type===mn,D=f===mn&&this.type!==mn;for(let O=0,H=M.length;O<H;O++){const J=M[O],j=J.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const X=j.getFrameExtents();if(i.multiply(X),r.copy(j.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/X.x),i.x=r.x*X.x,j.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/X.y),i.y=r.y*X.y,j.mapSize.y=r.y)),j.map===null||Z===!0||D===!0){const ee=this.type!==mn?{minFilter:it,magFilter:it}:{};j.map!==null&&j.map.dispose(),j.map=new An(i.x,i.y,ee),j.map.texture.name=J.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const $=j.getViewportCount();for(let ee=0;ee<$;ee++){const pe=j.getViewport(ee);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),Y.viewport(a),j.updateMatrices(J,ee),n=j.getFrustum(),w(b,P,j.camera,J,this.type)}j.isPointLightShadow!==!0&&this.type===mn&&x(j,P),j.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(F,A,T)};function x(M,b){const P=e.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new An(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(b,null,P,d,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(b,null,P,p,v,null)}function _(M,b,P,F){let A=null;const T=P.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(T!==void 0)A=T;else if(A=P.isPointLight===!0?l:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const Y=A.uuid,Z=b.uuid;let D=c[Y];D===void 0&&(D={},c[Y]=D);let O=D[Z];O===void 0&&(O=A.clone(),D[Z]=O),A=O}if(A.visible=b.visible,A.wireframe=b.wireframe,F===mn?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:h[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,P.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Y=s.properties.get(A);Y.light=P}return A}function w(M,b,P,F,A){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&A===mn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,M.matrixWorld);const Z=e.update(M),D=M.material;if(Array.isArray(D)){const O=Z.groups;for(let H=0,J=O.length;H<J;H++){const j=O[H],X=D[j.materialIndex];if(X&&X.visible){const $=_(M,X,F,A);s.renderBufferDirect(P,null,Z,$,M,j)}}}else if(D.visible){const O=_(M,D,F,A);s.renderBufferDirect(P,null,Z,O,M,null)}}const Y=M.children;for(let Z=0,D=Y.length;Z<D;Z++)w(Y[Z],b,P,F,A)}}function Dm(s,e,t){const n=t.isWebGL2;function i(){let L=!1;const V=new Ve;let ne=null;const de=new Ve(0,0,0,0);return{setMask:function(_e){ne!==_e&&!L&&(s.colorMask(_e,_e,_e,_e),ne=_e)},setLocked:function(_e){L=_e},setClear:function(_e,qe,Ke,Tt,zn){zn===!0&&(_e*=Tt,qe*=Tt,Ke*=Tt),V.set(_e,qe,Ke,Tt),de.equals(V)===!1&&(s.clearColor(_e,qe,Ke,Tt),de.copy(V))},reset:function(){L=!1,ne=null,de.set(-1,0,0,0)}}}function r(){let L=!1,V=null,ne=null,de=null;return{setTest:function(_e){_e?I(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(_e){V!==_e&&!L&&(s.depthMask(_e),V=_e)},setFunc:function(_e){if(ne!==_e){switch(_e){case Ch:s.depthFunc(s.NEVER);break;case Rh:s.depthFunc(s.ALWAYS);break;case Ph:s.depthFunc(s.LESS);break;case Er:s.depthFunc(s.LEQUAL);break;case Lh:s.depthFunc(s.EQUAL);break;case Ih:s.depthFunc(s.GEQUAL);break;case Dh:s.depthFunc(s.GREATER);break;case Uh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ne=_e}},setLocked:function(_e){L=_e},setClear:function(_e){de!==_e&&(s.clearDepth(_e),de=_e)},reset:function(){L=!1,V=null,ne=null,de=null}}}function a(){let L=!1,V=null,ne=null,de=null,_e=null,qe=null,Ke=null,Tt=null,zn=null;return{setTest:function(ut){L||(ut?I(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(ut){V!==ut&&!L&&(s.stencilMask(ut),V=ut)},setFunc:function(ut,Zt,pn){(ne!==ut||de!==Zt||_e!==pn)&&(s.stencilFunc(ut,Zt,pn),ne=ut,de=Zt,_e=pn)},setOp:function(ut,Zt,pn){(qe!==ut||Ke!==Zt||Tt!==pn)&&(s.stencilOp(ut,Zt,pn),qe=ut,Ke=Zt,Tt=pn)},setLocked:function(ut){L=ut},setClear:function(ut){zn!==ut&&(s.clearStencil(ut),zn=ut)},reset:function(){L=!1,V=null,ne=null,de=null,_e=null,qe=null,Ke=null,Tt=null,zn=null}}}const o=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,v=[],m=null,f=!1,x=null,_=null,w=null,M=null,b=null,P=null,F=null,A=!1,T=null,Y=null,Z=null,D=null,O=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,j=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=j>=2);let $=null,ee={};const pe=s.getParameter(s.SCISSOR_BOX),oe=s.getParameter(s.VIEWPORT),z=new Ve().fromArray(pe),K=new Ve().fromArray(oe);function se(L,V,ne,de){const _e=new Uint8Array(4),qe=s.createTexture();s.bindTexture(L,qe),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ke=0;Ke<ne;Ke++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(V,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(V+Ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return qe}const le={};le[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),le[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(le[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),le[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),I(s.DEPTH_TEST),l.setFunc(Er),rt(!1),pt(Ja),I(s.CULL_FACE),Le(Pn);function I(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function Se(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function be(L,V){return p[L]!==V?(s.bindFramebuffer(L,V),p[L]=V,n&&(L===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=V),L===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=V)),!0):!1}function re(L,V){let ne=v,de=!1;if(L)if(ne=g.get(V),ne===void 0&&(ne=[],g.set(V,ne)),L.isWebGLMultipleRenderTargets){const _e=L.texture;if(ne.length!==_e.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let qe=0,Ke=_e.length;qe<Ke;qe++)ne[qe]=s.COLOR_ATTACHMENT0+qe;ne.length=_e.length,de=!0}}else ne[0]!==s.COLOR_ATTACHMENT0&&(ne[0]=s.COLOR_ATTACHMENT0,de=!0);else ne[0]!==s.BACK&&(ne[0]=s.BACK,de=!0);de&&(t.isWebGL2?s.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Me(L){return m!==L?(s.useProgram(L),m=L,!0):!1}const Xe={[si]:s.FUNC_ADD,[vh]:s.FUNC_SUBTRACT,[_h]:s.FUNC_REVERSE_SUBTRACT};if(n)Xe[so]=s.MIN,Xe[ro]=s.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Xe[so]=L.MIN_EXT,Xe[ro]=L.MAX_EXT)}const xe={[xh]:s.ZERO,[Ah]:s.ONE,[yh]:s.SRC_COLOR,[ao]:s.SRC_ALPHA,[Th]:s.SRC_ALPHA_SATURATE,[Sh]:s.DST_COLOR,[Eh]:s.DST_ALPHA,[Mh]:s.ONE_MINUS_SRC_COLOR,[oo]:s.ONE_MINUS_SRC_ALPHA,[bh]:s.ONE_MINUS_DST_COLOR,[wh]:s.ONE_MINUS_DST_ALPHA};function Le(L,V,ne,de,_e,qe,Ke,Tt){if(L===Pn){f===!0&&(Se(s.BLEND),f=!1);return}if(f===!1&&(I(s.BLEND),f=!0),L!==gh){if(L!==x||Tt!==A){if((_!==si||b!==si)&&(s.blendEquation(s.FUNC_ADD),_=si,b=si),Tt)switch(L){case ii:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case to:s.blendFunc(s.ONE,s.ONE);break;case no:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case io:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ii:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case to:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case no:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case io:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,M=null,P=null,F=null,x=L,A=Tt}return}_e=_e||V,qe=qe||ne,Ke=Ke||de,(V!==_||_e!==b)&&(s.blendEquationSeparate(Xe[V],Xe[_e]),_=V,b=_e),(ne!==w||de!==M||qe!==P||Ke!==F)&&(s.blendFuncSeparate(xe[ne],xe[de],xe[qe],xe[Ke]),w=ne,M=de,P=qe,F=Ke),x=L,A=!1}function at(L,V){L.side===Bt?Se(s.CULL_FACE):I(s.CULL_FACE);let ne=L.side===Ut;V&&(ne=!ne),rt(ne),L.blending===ii&&L.transparent===!1?Le(Pn):Le(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const de=L.stencilWrite;c.setTest(de),de&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ge(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?I(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt(L){T!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),T=L)}function pt(L){L!==fh?(I(s.CULL_FACE),L!==Y&&(L===Ja?s.cullFace(s.BACK):L===ph?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),Y=L}function ct(L){L!==Z&&(J&&s.lineWidth(L),Z=L)}function Ge(L,V,ne){L?(I(s.POLYGON_OFFSET_FILL),(D!==V||O!==ne)&&(s.polygonOffset(V,ne),D=V,O=ne)):Se(s.POLYGON_OFFSET_FILL)}function $e(L){L?I(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function bt(L){L===void 0&&(L=s.TEXTURE0+H-1),$!==L&&(s.activeTexture(L),$=L)}function S(L,V,ne){ne===void 0&&($===null?ne=s.TEXTURE0+H-1:ne=$);let de=ee[ne];de===void 0&&(de={type:void 0,texture:void 0},ee[ne]=de),(de.type!==L||de.texture!==V)&&($!==ne&&(s.activeTexture(ne),$=ne),s.bindTexture(L,V||le[L]),de.type=L,de.texture=V)}function y(){const L=ee[$];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function G(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function R(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(L){z.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),z.copy(L))}function me(L){K.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function Ce(L,V){let ne=h.get(V);ne===void 0&&(ne=new WeakMap,h.set(V,ne));let de=ne.get(L);de===void 0&&(de=s.getUniformBlockIndex(V,L.name),ne.set(L,de))}function De(L,V){const de=h.get(V).get(L);u.get(V)!==de&&(s.uniformBlockBinding(V,de,L.__bindingPointIndex),u.set(V,de))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},$=null,ee={},p={},g=new WeakMap,v=[],m=null,f=!1,x=null,_=null,w=null,M=null,b=null,P=null,F=null,A=!1,T=null,Y=null,Z=null,D=null,O=null,z.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:I,disable:Se,bindFramebuffer:be,drawBuffers:re,useProgram:Me,setBlending:Le,setMaterial:at,setFlipSided:rt,setCullFace:pt,setLineWidth:ct,setPolygonOffset:Ge,setScissorTest:$e,activeTexture:bt,bindTexture:S,unbindTexture:y,compressedTexImage2D:G,compressedTexImage3D:te,texImage2D:fe,texImage3D:ve,updateUBOMapping:Ce,uniformBlockBinding:De,texStorage2D:B,texStorage3D:he,texSubImage2D:ie,texSubImage3D:ce,compressedTexSubImage2D:R,compressedTexSubImage3D:q,scissor:ue,viewport:me,reset:ht}}function Um(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,y){return f?new OffscreenCanvas(S,y):ns("canvas")}function _(S,y,G,te){let ie=1;if((S.width>te||S.height>te)&&(ie=te/Math.max(S.width,S.height)),ie<1||y===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ce=y?Vo:Math.floor,R=ce(ie*S.width),q=ce(ie*S.height);v===void 0&&(v=x(R,q));const B=G?x(R,q):v;return B.width=R,B.height=q,B.getContext("2d").drawImage(S,0,0,R,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+R+"x"+q+")."),B}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function w(S){return Br(S.width)&&Br(S.height)}function M(S){return o?!1:S.wrapS!==kt||S.wrapT!==kt||S.minFilter!==it&&S.minFilter!==Wt}function b(S,y){return S.generateMipmaps&&y&&S.minFilter!==it&&S.minFilter!==Wt}function P(S){s.generateMipmap(S)}function F(S,y,G,te,ie=!1){if(o===!1)return y;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ce=y;return y===s.RED&&(G===s.FLOAT&&(ce=s.R32F),G===s.HALF_FLOAT&&(ce=s.R16F),G===s.UNSIGNED_BYTE&&(ce=s.R8)),y===s.RG&&(G===s.FLOAT&&(ce=s.RG32F),G===s.HALF_FLOAT&&(ce=s.RG16F),G===s.UNSIGNED_BYTE&&(ce=s.RG8)),y===s.RGBA&&(G===s.FLOAT&&(ce=s.RGBA32F),G===s.HALF_FLOAT&&(ce=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ce=te===we&&ie===!1?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)),(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function A(S,y,G){return b(S,G)===!0||S.isFramebufferTexture&&S.minFilter!==it&&S.minFilter!==Wt?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function T(S){return S===it||S===co||S===br?s.NEAREST:s.LINEAR}function Y(S){const y=S.target;y.removeEventListener("dispose",Y),D(y),y.isVideoTexture&&g.delete(y)}function Z(S){const y=S.target;y.removeEventListener("dispose",Z),H(y)}function D(S){const y=n.get(S);if(y.__webglInit===void 0)return;const G=S.source,te=m.get(G);if(te){const ie=te[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&O(S),Object.keys(te).length===0&&m.delete(G)}n.remove(S)}function O(S){const y=n.get(S);s.deleteTexture(y.__webglTexture);const G=S.source,te=m.get(G);delete te[y.__cacheKey],a.memory.textures--}function H(S){const y=S.texture,G=n.get(S),te=n.get(y);if(te.__webglTexture!==void 0&&(s.deleteTexture(te.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)s.deleteFramebuffer(G.__webglFramebuffer[ie]),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[ie]);else{if(s.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ie=0;ie<G.__webglColorRenderbuffer.length;ie++)G.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[ie]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ie=0,ce=y.length;ie<ce;ie++){const R=n.get(y[ie]);R.__webglTexture&&(s.deleteTexture(R.__webglTexture),a.memory.textures--),n.remove(y[ie])}n.remove(y),n.remove(S)}let J=0;function j(){J=0}function X(){const S=J;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),J+=1,S}function $(S){const y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function ee(S,y){const G=n.get(S);if(S.isVideoTexture&&$e(S),S.isRenderTargetTexture===!1&&S.version>0&&G.__version!==S.version){const te=S.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(G,S,y);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+y)}function pe(S,y){const G=n.get(S);if(S.version>0&&G.__version!==S.version){Se(G,S,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+y)}function oe(S,y){const G=n.get(S);if(S.version>0&&G.__version!==S.version){Se(G,S,y);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+y)}function z(S,y){const G=n.get(S);if(S.version>0&&G.__version!==S.version){be(G,S,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+y)}const K={[$i]:s.REPEAT,[kt]:s.CLAMP_TO_EDGE,[Sr]:s.MIRRORED_REPEAT},se={[it]:s.NEAREST,[co]:s.NEAREST_MIPMAP_NEAREST,[br]:s.NEAREST_MIPMAP_LINEAR,[Wt]:s.LINEAR,[Gh]:s.LINEAR_MIPMAP_NEAREST,[Ji]:s.LINEAR_MIPMAP_LINEAR};function le(S,y,G){if(G?(s.texParameteri(S,s.TEXTURE_WRAP_S,K[y.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,K[y.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,K[y.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,se[y.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,se[y.minFilter])):(s.texParameteri(S,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(S,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==kt||y.wrapT!==kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,s.TEXTURE_MAG_FILTER,T(y.magFilter)),s.texParameteri(S,s.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==it&&y.minFilter!==Wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===it||y.minFilter!==br&&y.minFilter!==Ji||y.type===_n&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===es&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(S,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function I(S,y){let G=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",Y));const te=y.source;let ie=m.get(te);ie===void 0&&(ie={},m.set(te,ie));const ce=$(y);if(ce!==S.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ie[ce].usedTimes++;const R=ie[S.__cacheKey];R!==void 0&&(ie[S.__cacheKey].usedTimes--,R.usedTimes===0&&O(y)),S.__cacheKey=ce,S.__webglTexture=ie[ce].texture}return G}function Se(S,y,G){let te=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(te=s.TEXTURE_3D);const ie=I(S,y),ce=y.source;t.bindTexture(te,S.__webglTexture,s.TEXTURE0+G);const R=n.get(ce);if(ce.version!==R.__version||ie===!0){t.activeTexture(s.TEXTURE0+G),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const q=M(y)&&w(y.image)===!1;let B=_(y.image,q,!1,u);B=bt(y,B);const he=w(B)||o,fe=r.convert(y.format,y.colorSpace);let ve=r.convert(y.type),ue=F(y.internalFormat,fe,ve,y.colorSpace);le(te,y,he);let me;const Ce=y.mipmaps,De=o&&y.isVideoTexture!==!0,ht=R.__version===void 0||ie===!0,L=A(y,B,he);if(y.isDepthTexture)ue=s.DEPTH_COMPONENT,o?y.type===_n?ue=s.DEPTH_COMPONENT32F:y.type===Gn?ue=s.DEPTH_COMPONENT24:y.type===oi?ue=s.DEPTH24_STENCIL8:ue=s.DEPTH_COMPONENT16:y.type===_n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Vn&&ue===s.DEPTH_COMPONENT&&y.type!==ho&&y.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Gn,ve=r.convert(y.type)),y.format===li&&ue===s.DEPTH_COMPONENT&&(ue=s.DEPTH_STENCIL,y.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=oi,ve=r.convert(y.type))),ht&&(De?t.texStorage2D(s.TEXTURE_2D,1,ue,B.width,B.height):t.texImage2D(s.TEXTURE_2D,0,ue,B.width,B.height,0,fe,ve,null));else if(y.isDataTexture)if(Ce.length>0&&he){De&&ht&&t.texStorage2D(s.TEXTURE_2D,L,ue,Ce[0].width,Ce[0].height);for(let V=0,ne=Ce.length;V<ne;V++)me=Ce[V],De?t.texSubImage2D(s.TEXTURE_2D,V,0,0,me.width,me.height,fe,ve,me.data):t.texImage2D(s.TEXTURE_2D,V,ue,me.width,me.height,0,fe,ve,me.data);y.generateMipmaps=!1}else De?(ht&&t.texStorage2D(s.TEXTURE_2D,L,ue,B.width,B.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,B.width,B.height,fe,ve,B.data)):t.texImage2D(s.TEXTURE_2D,0,ue,B.width,B.height,0,fe,ve,B.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){De&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,L,ue,Ce[0].width,Ce[0].height,B.depth);for(let V=0,ne=Ce.length;V<ne;V++)me=Ce[V],y.format!==Xt?fe!==null?De?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,me.width,me.height,B.depth,fe,me.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,ue,me.width,me.height,B.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,me.width,me.height,B.depth,fe,ve,me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,V,ue,me.width,me.height,B.depth,0,fe,ve,me.data)}else{De&&ht&&t.texStorage2D(s.TEXTURE_2D,L,ue,Ce[0].width,Ce[0].height);for(let V=0,ne=Ce.length;V<ne;V++)me=Ce[V],y.format!==Xt?fe!==null?De?t.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,me.width,me.height,fe,me.data):t.compressedTexImage2D(s.TEXTURE_2D,V,ue,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(s.TEXTURE_2D,V,0,0,me.width,me.height,fe,ve,me.data):t.texImage2D(s.TEXTURE_2D,V,ue,me.width,me.height,0,fe,ve,me.data)}else if(y.isDataArrayTexture)De?(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,L,ue,B.width,B.height,B.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,fe,ve,B.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ue,B.width,B.height,B.depth,0,fe,ve,B.data);else if(y.isData3DTexture)De?(ht&&t.texStorage3D(s.TEXTURE_3D,L,ue,B.width,B.height,B.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,fe,ve,B.data)):t.texImage3D(s.TEXTURE_3D,0,ue,B.width,B.height,B.depth,0,fe,ve,B.data);else if(y.isFramebufferTexture){if(ht)if(De)t.texStorage2D(s.TEXTURE_2D,L,ue,B.width,B.height);else{let V=B.width,ne=B.height;for(let de=0;de<L;de++)t.texImage2D(s.TEXTURE_2D,de,ue,V,ne,0,fe,ve,null),V>>=1,ne>>=1}}else if(Ce.length>0&&he){De&&ht&&t.texStorage2D(s.TEXTURE_2D,L,ue,Ce[0].width,Ce[0].height);for(let V=0,ne=Ce.length;V<ne;V++)me=Ce[V],De?t.texSubImage2D(s.TEXTURE_2D,V,0,0,fe,ve,me):t.texImage2D(s.TEXTURE_2D,V,ue,fe,ve,me);y.generateMipmaps=!1}else De?(ht&&t.texStorage2D(s.TEXTURE_2D,L,ue,B.width,B.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,ve,B)):t.texImage2D(s.TEXTURE_2D,0,ue,fe,ve,B);b(y,he)&&P(te),R.__version=ce.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function be(S,y,G){if(y.image.length!==6)return;const te=I(S,y),ie=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+G);const ce=n.get(ie);if(ie.version!==ce.__version||te===!0){t.activeTexture(s.TEXTURE0+G),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const R=y.isCompressedTexture||y.image[0].isCompressedTexture,q=y.image[0]&&y.image[0].isDataTexture,B=[];for(let V=0;V<6;V++)!R&&!q?B[V]=_(y.image[V],!1,!0,c):B[V]=q?y.image[V].image:y.image[V],B[V]=bt(y,B[V]);const he=B[0],fe=w(he)||o,ve=r.convert(y.format,y.colorSpace),ue=r.convert(y.type),me=F(y.internalFormat,ve,ue,y.colorSpace),Ce=o&&y.isVideoTexture!==!0,De=ce.__version===void 0||te===!0;let ht=A(y,he,fe);le(s.TEXTURE_CUBE_MAP,y,fe);let L;if(R){Ce&&De&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ht,me,he.width,he.height);for(let V=0;V<6;V++){L=B[V].mipmaps;for(let ne=0;ne<L.length;ne++){const de=L[ne];y.format!==Xt?ve!==null?Ce?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne,0,0,de.width,de.height,ve,de.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne,me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne,0,0,de.width,de.height,ve,ue,de.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne,me,de.width,de.height,0,ve,ue,de.data)}}}else{L=y.mipmaps,Ce&&De&&(L.length>0&&ht++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ht,me,B[0].width,B[0].height));for(let V=0;V<6;V++)if(q){Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,B[V].width,B[V].height,ve,ue,B[V].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,me,B[V].width,B[V].height,0,ve,ue,B[V].data);for(let ne=0;ne<L.length;ne++){const _e=L[ne].image[V].image;Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne+1,0,0,_e.width,_e.height,ve,ue,_e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne+1,me,_e.width,_e.height,0,ve,ue,_e.data)}}else{Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,ve,ue,B[V]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,me,ve,ue,B[V]);for(let ne=0;ne<L.length;ne++){const de=L[ne];Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne+1,0,0,ve,ue,de.image[V]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne+1,me,ve,ue,de.image[V])}}}b(y,fe)&&P(s.TEXTURE_CUBE_MAP),ce.__version=ie.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function re(S,y,G,te,ie){const ce=r.convert(G.format,G.colorSpace),R=r.convert(G.type),q=F(G.internalFormat,ce,R,G.colorSpace);n.get(y).__hasExternalTextures||(ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,q,y.width,y.height,y.depth,0,ce,R,null):t.texImage2D(ie,0,q,y.width,y.height,0,ce,R,null)),t.bindFramebuffer(s.FRAMEBUFFER,S),Ge(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,ie,n.get(G).__webglTexture,0,ct(y)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,ie,n.get(G).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Me(S,y,G){if(s.bindRenderbuffer(s.RENDERBUFFER,S),y.depthBuffer&&!y.stencilBuffer){let te=s.DEPTH_COMPONENT16;if(G||Ge(y)){const ie=y.depthTexture;ie&&ie.isDepthTexture&&(ie.type===_n?te=s.DEPTH_COMPONENT32F:ie.type===Gn&&(te=s.DEPTH_COMPONENT24));const ce=ct(y);Ge(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,te,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,te,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,te,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,S)}else if(y.depthBuffer&&y.stencilBuffer){const te=ct(y);G&&Ge(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,te,s.DEPTH24_STENCIL8,y.width,y.height):Ge(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,S)}else{const te=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ie=0;ie<te.length;ie++){const ce=te[ie],R=r.convert(ce.format,ce.colorSpace),q=r.convert(ce.type),B=F(ce.internalFormat,R,q,ce.colorSpace),he=ct(y);G&&Ge(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,B,y.width,y.height):Ge(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,B,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,B,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xe(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ee(y.depthTexture,0);const te=n.get(y.depthTexture).__webglTexture,ie=ct(y);if(y.depthTexture.format===Vn)Ge(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(y.depthTexture.format===li)Ge(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function xe(S){const y=n.get(S),G=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Xe(y.__webglFramebuffer,S)}else if(G){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]=s.createRenderbuffer(),Me(y.__webglDepthbuffer[te],S,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),Me(y.__webglDepthbuffer,S,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(S,y,G){const te=n.get(S);y!==void 0&&re(te.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),G!==void 0&&xe(S)}function at(S){const y=S.texture,G=n.get(S),te=n.get(y);S.addEventListener("dispose",Z),S.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=y.version,a.memory.textures++);const ie=S.isWebGLCubeRenderTarget===!0,ce=S.isWebGLMultipleRenderTargets===!0,R=w(S)||o;if(ie){G.__webglFramebuffer=[];for(let q=0;q<6;q++)G.__webglFramebuffer[q]=s.createFramebuffer()}else{if(G.__webglFramebuffer=s.createFramebuffer(),ce)if(i.drawBuffers){const q=S.texture;for(let B=0,he=q.length;B<he;B++){const fe=n.get(q[B]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&Ge(S)===!1){const q=ce?y:[y];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let B=0;B<q.length;B++){const he=q[B];G.__webglColorRenderbuffer[B]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[B]);const fe=r.convert(he.format,he.colorSpace),ve=r.convert(he.type),ue=F(he.internalFormat,fe,ve,he.colorSpace,S.isXRRenderTarget===!0),me=ct(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,me,ue,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+B,s.RENDERBUFFER,G.__webglColorRenderbuffer[B])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Me(G.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),le(s.TEXTURE_CUBE_MAP,y,R);for(let q=0;q<6;q++)re(G.__webglFramebuffer[q],S,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q);b(y,R)&&P(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const q=S.texture;for(let B=0,he=q.length;B<he;B++){const fe=q[B],ve=n.get(fe);t.bindTexture(s.TEXTURE_2D,ve.__webglTexture),le(s.TEXTURE_2D,fe,R),re(G.__webglFramebuffer,S,fe,s.COLOR_ATTACHMENT0+B,s.TEXTURE_2D),b(fe,R)&&P(s.TEXTURE_2D)}t.unbindTexture()}else{let q=s.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?q=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(q,te.__webglTexture),le(q,y,R),re(G.__webglFramebuffer,S,y,s.COLOR_ATTACHMENT0,q),b(y,R)&&P(q),t.unbindTexture()}S.depthBuffer&&xe(S)}function rt(S){const y=w(S)||o,G=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0,ie=G.length;te<ie;te++){const ce=G[te];if(b(ce,y)){const R=S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,q=n.get(ce).__webglTexture;t.bindTexture(R,q),P(R),t.unbindTexture()}}}function pt(S){if(o&&S.samples>0&&Ge(S)===!1){const y=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],G=S.width,te=S.height;let ie=s.COLOR_BUFFER_BIT;const ce=[],R=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=n.get(S),B=S.isWebGLMultipleRenderTargets===!0;if(B)for(let he=0;he<y.length;he++)t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,q.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let he=0;he<y.length;he++){ce.push(s.COLOR_ATTACHMENT0+he),S.depthBuffer&&ce.push(R);const fe=q.__ignoreDepthValues!==void 0?q.__ignoreDepthValues:!1;if(fe===!1&&(S.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),B&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,q.__webglColorRenderbuffer[he]),fe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[R]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])),B){const ve=n.get(y[he]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ve,0)}s.blitFramebuffer(0,0,G,te,0,0,G,te,ie,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),B)for(let he=0;he<y.length;he++){t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,q.__webglColorRenderbuffer[he]);const fe=n.get(y[he]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,q.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}}function ct(S){return Math.min(h,S.samples)}function Ge(S){const y=n.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function $e(S){const y=a.render.frame;g.get(S)!==y&&(g.set(S,y),S.update())}function bt(S,y){const G=S.colorSpace,te=S.format,ie=S.type;return S.isCompressedTexture===!0||S.format===Nr||G!==cn&&G!==Xn&&(G===we?o===!1?e.has("EXT_sRGB")===!0&&te===Xt?(S.format=Nr,S.minFilter=Wt,S.generateMipmaps=!1):y=Yo.sRGBToLinear(y):(te!==Xt||ie!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}this.allocateTextureUnit=X,this.resetTextureUnits=j,this.setTexture2D=ee,this.setTexture2DArray=pe,this.setTexture3D=oe,this.setTextureCube=z,this.rebindTextures=Le,this.setupRenderTarget=at,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Ge}function Fm(s,e,t){const n=t.isWebGL2;function i(r,a=Xn){let o;if(r===Hn)return s.UNSIGNED_BYTE;if(r===Yh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Qh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Vh)return s.BYTE;if(r===Wh)return s.SHORT;if(r===ho)return s.UNSIGNED_SHORT;if(r===Xh)return s.INT;if(r===Gn)return s.UNSIGNED_INT;if(r===_n)return s.FLOAT;if(r===es)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===jh)return s.ALPHA;if(r===Xt)return s.RGBA;if(r===qh)return s.LUMINANCE;if(r===Kh)return s.LUMINANCE_ALPHA;if(r===Vn)return s.DEPTH_COMPONENT;if(r===li)return s.DEPTH_STENCIL;if(r===Nr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Zh)return s.RED;if(r===$h)return s.RED_INTEGER;if(r===Jh)return s.RG;if(r===eu)return s.RG_INTEGER;if(r===tu)return s.RGBA_INTEGER;if(r===Tr||r===Cr||r===Rr||r===Pr)if(a===we)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Tr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Tr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uo||r===fo||r===po||r===mo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===uo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===po)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===nu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===go||r===vo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===go)return a===we?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===vo)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_o||r===xo||r===Ao||r===yo||r===Mo||r===Eo||r===wo||r===So||r===bo||r===To||r===Co||r===Ro||r===Po||r===Lo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===_o)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xo)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ao)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yo)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mo)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Eo)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wo)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===So)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bo)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===To)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Co)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ro)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Po)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Lo)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Lr)return a===we?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===iu||r===Io||r===Do||r===Uo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Lr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Io)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Do)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===oi?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Nm extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ze extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Om={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Om)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Gl extends st{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:Vn,u!==Vn&&u!==li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Vn&&(n=Gn),n===void 0&&u===li&&(n=oi),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:it,this.minFilter=l!==void 0?l:it,this.flipY=!1,this.generateMipmaps=!1}}class Bm extends Yn{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const v=t.getContextAttributes();let m=null,f=null;const x=[],_=[],w=new Set,M=new Map,b=new Pt;b.layers.enable(1),b.viewport=new Ve;const P=new Pt;P.layers.enable(2),P.viewport=new Ve;const F=[b,P],A=new Nm;A.layers.enable(1),A.layers.enable(2);let T=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let K=x[z];return K===void 0&&(K=new ua,x[z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(z){let K=x[z];return K===void 0&&(K=new ua,x[z]=K),K.getGripSpace()},this.getHand=function(z){let K=x[z];return K===void 0&&(K=new ua,x[z]=K),K.getHandSpace()};function Z(z){const K=_.indexOf(z.inputSource);if(K===-1)return;const se=x[K];se!==void 0&&(se.update(z.inputSource,z.frame,c||a),se.dispatchEvent({type:z.type,data:z.inputSource}))}function D(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",O);for(let z=0;z<x.length;z++){const K=_[z];K!==null&&(_[z]=null,x[z].disconnect(K))}T=null,Y=null,e.setRenderTarget(m),p=null,d=null,h=null,i=null,f=null,oe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",D),i.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:p}),f=new An(p.framebufferWidth,p.framebufferHeight,{format:Xt,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let K=null,se=null,le=null;v.depth&&(le=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=v.stencil?li:Vn,se=v.stencil?oi:Gn);const I={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(I),i.updateRenderState({layers:[d]}),f=new An(d.textureWidth,d.textureHeight,{format:Xt,type:Hn,depthTexture:new Gl(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Se=e.properties.get(f);Se.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),oe.setContext(i),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O(z){for(let K=0;K<z.removed.length;K++){const se=z.removed[K],le=_.indexOf(se);le>=0&&(_[le]=null,x[le].disconnect(se))}for(let K=0;K<z.added.length;K++){const se=z.added[K];let le=_.indexOf(se);if(le===-1){for(let Se=0;Se<x.length;Se++)if(Se>=_.length){_.push(se),le=Se;break}else if(_[Se]===null){_[Se]=se,le=Se;break}if(le===-1)break}const I=x[le];I&&I.connect(se)}}const H=new C,J=new C;function j(z,K,se){H.setFromMatrixPosition(K.matrixWorld),J.setFromMatrixPosition(se.matrixWorld);const le=H.distanceTo(J),I=K.projectionMatrix.elements,Se=se.projectionMatrix.elements,be=I[14]/(I[10]-1),re=I[14]/(I[10]+1),Me=(I[9]+1)/I[5],Xe=(I[9]-1)/I[5],xe=(I[8]-1)/I[0],Le=(Se[8]+1)/Se[0],at=be*xe,rt=be*Le,pt=le/(-xe+Le),ct=pt*-xe;K.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ct),z.translateZ(pt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Ge=be+pt,$e=re+pt,bt=at-ct,S=rt+(le-ct),y=Me*re/$e*Ge,G=Xe*re/$e*Ge;z.projectionMatrix.makePerspective(bt,S,y,G,Ge,$e),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function X(z,K){K===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(K.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;A.near=P.near=b.near=z.near,A.far=P.far=b.far=z.far,(T!==A.near||Y!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),T=A.near,Y=A.far);const K=z.parent,se=A.cameras;X(A,K);for(let le=0;le<se.length;le++)X(se[le],K);se.length===2?j(A,b,P):A.projectionMatrix.copy(b.projectionMatrix),$(z,A,K)};function $(z,K,se){se===null?z.matrix.copy(K.matrixWorld):(z.matrix.copy(se.matrixWorld),z.matrix.invert(),z.matrix.multiply(K.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0);const le=z.children;for(let I=0,Se=le.length;I<Se;I++)le[I].updateMatrixWorld(!0);z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=hi*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.getPlanes=function(){return w};let ee=null;function pe(z,K){if(u=K.getViewerPose(c||a),g=K,u!==null){const se=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let le=!1;se.length!==A.cameras.length&&(A.cameras.length=0,le=!0);for(let I=0;I<se.length;I++){const Se=se[I];let be=null;if(p!==null)be=p.getViewport(Se);else{const Me=h.getViewSubImage(d,Se);be=Me.viewport,I===0&&(e.setRenderTargetTextures(f,Me.colorTexture,d.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(f))}let re=F[I];re===void 0&&(re=new Pt,re.layers.enable(I),re.viewport=new Ve,F[I]=re),re.matrix.fromArray(Se.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Se.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(be.x,be.y,be.width,be.height),I===0&&(A.matrix.copy(re.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),le===!0&&A.cameras.push(re)}}for(let se=0;se<x.length;se++){const le=_[se],I=x[se];le!==null&&I!==void 0&&I.update(le,K,c||a)}if(ee&&ee(z,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let se=null;for(const le of w)K.detectedPlanes.has(le)||(se===null&&(se=[]),se.push(le));if(se!==null)for(const le of se)w.delete(le),M.delete(le),n.dispatchEvent({type:"planeremoved",data:le});for(const le of K.detectedPlanes)if(!w.has(le))w.add(le),M.set(le,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:le});else{const I=M.get(le);le.lastChangedTime>I&&(M.set(le,le.lastChangedTime),n.dispatchEvent({type:"planechanged",data:le}))}}g=null}const oe=new ml;oe.setAnimationLoop(pe),this.setAnimationLoop=function(z){ee=z},this.dispose=function(){}}}function km(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,dl(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,_,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,w)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ut&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ut&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const _=s.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ut&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zm(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const w=_.program;n.uniformBlockBinding(x,w)}function c(x,_){let w=i[x.id];w===void 0&&(g(x),w=u(x),i[x.id]=w,x.addEventListener("dispose",m));const M=_.program;n.updateUBOMapping(x,M);const b=e.render.frame;r[x.id]!==b&&(d(x),r[x.id]=b)}function u(x){const _=h();x.__bindingPointIndex=_;const w=s.createBuffer(),M=x.__size,b=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,M,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,w),w}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=i[x.id],w=x.uniforms,M=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let b=0,P=w.length;b<P;b++){const F=w[b];if(p(F,b,M)===!0){const A=F.__offset,T=Array.isArray(F.value)?F.value:[F.value];let Y=0;for(let Z=0;Z<T.length;Z++){const D=T[Z],O=v(D);typeof D=="number"?(F.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,A+Y,F.__data)):D.isMatrix3?(F.__data[0]=D.elements[0],F.__data[1]=D.elements[1],F.__data[2]=D.elements[2],F.__data[3]=D.elements[0],F.__data[4]=D.elements[3],F.__data[5]=D.elements[4],F.__data[6]=D.elements[5],F.__data[7]=D.elements[0],F.__data[8]=D.elements[6],F.__data[9]=D.elements[7],F.__data[10]=D.elements[8],F.__data[11]=D.elements[0]):(D.toArray(F.__data,Y),Y+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,A,F.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,_,w){const M=x.value;if(w[_]===void 0){if(typeof M=="number")w[_]=M;else{const b=Array.isArray(M)?M:[M],P=[];for(let F=0;F<b.length;F++)P.push(b[F].clone());w[_]=P}return!0}else if(typeof M=="number"){if(w[_]!==M)return w[_]=M,!0}else{const b=Array.isArray(w[_])?w[_]:[w[_]],P=Array.isArray(M)?M:[M];for(let F=0;F<b.length;F++){const A=b[F];if(A.equals(P[F])===!1)return A.copy(P[F]),!0}}return!1}function g(x){const _=x.uniforms;let w=0;const M=16;let b=0;for(let P=0,F=_.length;P<F;P++){const A=_[P],T={boundary:0,storage:0},Y=Array.isArray(A.value)?A.value:[A.value];for(let Z=0,D=Y.length;Z<D;Z++){const O=Y[Z],H=v(O);T.boundary+=H.boundary,T.storage+=H.storage}if(A.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=w,P>0){b=w%M;const Z=M-b;b!==0&&Z-T.boundary<0&&(w+=M-b,A.__offset=w)}w+=T.storage}return b=w%M,b>0&&(w+=M-b),x.__size=w,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const w=a.indexOf(_.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}function Hm(){const s=ns("canvas");return s.style.display="block",s}class Vl{constructor(e={}){const{canvas:t=Hm(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=null,g=null;const v=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=we,this.useLegacyLights=!0,this.toneMapping=vn,this.toneMappingExposure=1;const f=this;let x=!1,_=0,w=0,M=null,b=-1,P=null;const F=new Ve,A=new Ve;let T=null,Y=t.width,Z=t.height,D=1,O=null,H=null;const J=new Ve(0,0,Y,Z),j=new Ve(0,0,Y,Z);let X=!1;const $=new ra;let ee=!1,pe=!1,oe=null;const z=new Ae,K=new C,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return M===null?D:1}let I=n;function Se(E,N){for(let W=0;W<E.length;W++){const U=E[W],Q=t.getContext(U,N);if(Q!==null)return Q}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ct}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",De,!1),I===null){const N=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&N.shift(),I=Se(N,E),I===null)throw Se(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let be,re,Me,Xe,xe,Le,at,rt,pt,ct,Ge,$e,bt,S,y,G,te,ie,ce,R,q,B,he,fe;function ve(){be=new Jf(I),re=new Qf(I,be,e),be.init(re),B=new Fm(I,be,re),Me=new Dm(I,be,re),Xe=new np(I),xe=new xm,Le=new Um(I,be,Me,xe,re,B,Xe),at=new qf(f),rt=new $f(f),pt=new Qu(I,re),he=new Xf(I,be,pt,re),ct=new ep(I,pt,Xe,he),Ge=new ap(I,ct,pt,Xe),ce=new rp(I,re,Le),G=new jf(xe),$e=new _m(f,at,rt,be,re,he,G),bt=new km(f,xe),S=new ym,y=new Tm(be,re),ie=new Wf(f,at,rt,Me,Ge,d,l),te=new Im(f,Ge,re),fe=new zm(I,Xe,re,Me),R=new Yf(I,be,Xe,re),q=new tp(I,be,Xe,re),Xe.programs=$e.programs,f.capabilities=re,f.extensions=be,f.properties=xe,f.renderLists=S,f.shadowMap=te,f.state=Me,f.info=Xe}ve();const ue=new Bm(f,I);this.xr=ue,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=be.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=be.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(E){E!==void 0&&(D=E,this.setSize(Y,Z,!1))},this.getSize=function(E){return E.set(Y,Z)},this.setSize=function(E,N,W=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,Z=N,t.width=Math.floor(E*D),t.height=Math.floor(N*D),W===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(Y*D,Z*D).floor()},this.setDrawingBufferSize=function(E,N,W){Y=E,Z=N,D=W,t.width=Math.floor(E*W),t.height=Math.floor(N*W),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(F)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,N,W,U){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,N,W,U),Me.viewport(F.copy(J).multiplyScalar(D).floor())},this.getScissor=function(E){return E.copy(j)},this.setScissor=function(E,N,W,U){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,N,W,U),Me.scissor(A.copy(j).multiplyScalar(D).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(E){Me.setScissorTest(X=E)},this.setOpaqueSort=function(E){O=E},this.setTransparentSort=function(E){H=E},this.getClearColor=function(E){return E.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(E=!0,N=!0,W=!0){let U=0;E&&(U|=I.COLOR_BUFFER_BIT),N&&(U|=I.DEPTH_BUFFER_BIT),W&&(U|=I.STENCIL_BUFFER_BIT),I.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",De,!1),S.dispose(),y.dispose(),xe.dispose(),at.dispose(),rt.dispose(),Ge.dispose(),he.dispose(),fe.dispose(),$e.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",_e),ue.removeEventListener("sessionend",qe),oe&&(oe.dispose(),oe=null),Ke.stop()};function me(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const E=Xe.autoReset,N=te.enabled,W=te.autoUpdate,U=te.needsUpdate,Q=te.type;ve(),Xe.autoReset=E,te.enabled=N,te.autoUpdate=W,te.needsUpdate=U,te.type=Q}function De(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ht(E){const N=E.target;N.removeEventListener("dispose",ht),L(N)}function L(E){V(E),xe.remove(E)}function V(E){const N=xe.get(E).programs;N!==void 0&&(N.forEach(function(W){$e.releaseProgram(W)}),E.isShaderMaterial&&$e.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,W,U,Q,ye){N===null&&(N=se);const Ee=Q.isMesh&&Q.matrixWorld.determinant()<0,Re=_x(E,N,W,U,Q);Me.setMaterial(U,Ee);let Ie=W.index,Fe=1;U.wireframe===!0&&(Ie=ct.getWireframeAttribute(W),Fe=2);const Ne=W.drawRange,Be=W.attributes.position;let Qe=Ne.start*Fe,It=(Ne.start+Ne.count)*Fe;ye!==null&&(Qe=Math.max(Qe,ye.start*Fe),It=Math.min(It,(ye.start+ye.count)*Fe)),Ie!==null?(Qe=Math.max(Qe,0),It=Math.min(It,Ie.count)):Be!=null&&(Qe=Math.max(Qe,0),It=Math.min(It,Be.count));const ln=It-Qe;if(ln<0||ln===1/0)return;he.setup(Q,U,Re,W,Ie);let Jn,mt=R;if(Ie!==null&&(Jn=pt.get(Ie),mt=q,mt.setIndex(Jn)),Q.isMesh)U.wireframe===!0?(Me.setLineWidth(U.wireframeLinewidth*le()),mt.setMode(I.LINES)):mt.setMode(I.TRIANGLES);else if(Q.isLine){let ke=U.linewidth;ke===void 0&&(ke=1),Me.setLineWidth(ke*le()),Q.isLineSegments?mt.setMode(I.LINES):Q.isLineLoop?mt.setMode(I.LINE_LOOP):mt.setMode(I.LINE_STRIP)}else Q.isPoints?mt.setMode(I.POINTS):Q.isSprite&&mt.setMode(I.TRIANGLES);if(Q.isInstancedMesh)mt.renderInstances(Qe,ln,Q.count);else if(W.isInstancedBufferGeometry){const ke=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,qa=Math.min(W.instanceCount,ke);mt.renderInstances(Qe,ln,qa)}else mt.render(Qe,ln)},this.compile=function(E,N){function W(U,Q,ye){U.transparent===!0&&U.side===Bt&&U.forceSinglePass===!1?(U.side=Ut,U.needsUpdate=!0,Mr(U,Q,ye),U.side=gn,U.needsUpdate=!0,Mr(U,Q,ye),U.side=Bt):Mr(U,Q,ye)}g=y.get(E),g.init(),m.push(g),E.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),g.setupLights(f.useLegacyLights),E.traverse(function(U){const Q=U.material;if(Q)if(Array.isArray(Q))for(let ye=0;ye<Q.length;ye++){const Ee=Q[ye];W(Ee,E,U)}else W(Q,E,U)}),m.pop(),g=null};let ne=null;function de(E){ne&&ne(E)}function _e(){Ke.stop()}function qe(){Ke.start()}const Ke=new ml;Ke.setAnimationLoop(de),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(E){ne=E,ue.setAnimationLoop(E),E===null?Ke.stop():Ke.start()},ue.addEventListener("sessionstart",_e),ue.addEventListener("sessionend",qe),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(N),N=ue.getCamera()),E.isScene===!0&&E.onBeforeRender(f,E,N,M),g=y.get(E,m.length),g.init(),m.push(g),z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(z),pe=this.localClippingEnabled,ee=G.init(this.clippingPlanes,pe),p=S.get(E,v.length),p.init(),v.push(p),Tt(E,N,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(O,H),ee===!0&&G.beginShadows();const W=g.state.shadowsArray;if(te.render(W,E,N),ee===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(p,E),g.setupLights(f.useLegacyLights),N.isArrayCamera){const U=N.cameras;for(let Q=0,ye=U.length;Q<ye;Q++){const Ee=U[Q];zn(p,E,Ee,Ee.viewport)}}else zn(p,E,N);M!==null&&(Le.updateMultisampleRenderTarget(M),Le.updateRenderTargetMipmap(M)),E.isScene===!0&&E.onAfterRender(f,E,N),he.resetDefaultState(),b=-1,P=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Tt(E,N,W,U){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){U&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(z);const Ee=Ge.update(E),Re=E.material;Re.visible&&p.push(E,Ee,Re,W,K.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){E.isSkinnedMesh&&E.skeleton.frame!==Xe.render.frame&&(E.skeleton.update(),E.skeleton.frame=Xe.render.frame);const Ee=Ge.update(E),Re=E.material;if(U&&(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),K.copy(Ee.boundingSphere.center).applyMatrix4(E.matrixWorld).applyMatrix4(z)),Array.isArray(Re)){const Ie=Ee.groups;for(let Fe=0,Ne=Ie.length;Fe<Ne;Fe++){const Be=Ie[Fe],Qe=Re[Be.materialIndex];Qe&&Qe.visible&&p.push(E,Ee,Qe,W,K.z,Be)}}else Re.visible&&p.push(E,Ee,Re,W,K.z,null)}}const ye=E.children;for(let Ee=0,Re=ye.length;Ee<Re;Ee++)Tt(ye[Ee],N,W,U)}function zn(E,N,W,U){const Q=E.opaque,ye=E.transmissive,Ee=E.transparent;g.setupLightsView(W),ee===!0&&G.setGlobalState(f.clippingPlanes,W),ye.length>0&&ut(Q,ye,N,W),U&&Me.viewport(F.copy(U)),Q.length>0&&Zt(Q,N,W),ye.length>0&&Zt(ye,N,W),Ee.length>0&&Zt(Ee,N,W),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function ut(E,N,W,U){if(oe===null){const Re=re.isWebGL2;oe=new An(1024,1024,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?es:Hn,minFilter:Ji,samples:Re&&o===!0?4:0})}const Q=f.getRenderTarget();f.setRenderTarget(oe),f.clear();const ye=f.toneMapping;f.toneMapping=vn,Zt(E,W,U),Le.updateMultisampleRenderTarget(oe),Le.updateRenderTargetMipmap(oe);let Ee=!1;for(let Re=0,Ie=N.length;Re<Ie;Re++){const Fe=N[Re],Ne=Fe.object,Be=Fe.geometry,Qe=Fe.material,It=Fe.group;if(Qe.side===Bt&&Ne.layers.test(U.layers)){const ln=Qe.side;Qe.side=Ut,Qe.needsUpdate=!0,pn(Ne,W,U,Be,Qe,It),Qe.side=ln,Qe.needsUpdate=!0,Ee=!0}}Ee===!0&&(Le.updateMultisampleRenderTarget(oe),Le.updateRenderTargetMipmap(oe)),f.setRenderTarget(Q),f.toneMapping=ye}function Zt(E,N,W){const U=N.isScene===!0?N.overrideMaterial:null;for(let Q=0,ye=E.length;Q<ye;Q++){const Ee=E[Q],Re=Ee.object,Ie=Ee.geometry,Fe=U===null?Ee.material:U,Ne=Ee.group;Re.layers.test(W.layers)&&pn(Re,N,W,Ie,Fe,Ne)}}function pn(E,N,W,U,Q,ye){E.onBeforeRender(f,N,W,U,Q,ye),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Q.onBeforeRender(f,N,W,U,E,ye),Q.transparent===!0&&Q.side===Bt&&Q.forceSinglePass===!1?(Q.side=Ut,Q.needsUpdate=!0,f.renderBufferDirect(W,N,U,Q,E,ye),Q.side=gn,Q.needsUpdate=!0,f.renderBufferDirect(W,N,U,Q,E,ye),Q.side=Bt):f.renderBufferDirect(W,N,U,Q,E,ye),E.onAfterRender(f,N,W,U,Q,ye)}function Mr(E,N,W){N.isScene!==!0&&(N=se);const U=xe.get(E),Q=g.state.lights,ye=g.state.shadowsArray,Ee=Q.state.version,Re=$e.getParameters(E,Q.state,ye,N,W),Ie=$e.getProgramCacheKey(Re);let Fe=U.programs;U.environment=E.isMeshStandardMaterial?N.environment:null,U.fog=N.fog,U.envMap=(E.isMeshStandardMaterial?rt:at).get(E.envMap||U.environment),Fe===void 0&&(E.addEventListener("dispose",ht),Fe=new Map,U.programs=Fe);let Ne=Fe.get(Ie);if(Ne!==void 0){if(U.currentProgram===Ne&&U.lightsStateVersion===Ee)return hh(E,Re),Ne}else Re.uniforms=$e.getUniforms(E),E.onBuild(W,Re,f),E.onBeforeCompile(Re,f),Ne=$e.acquireProgram(Re,Ie),Fe.set(Ie,Ne),U.uniforms=Re.uniforms;const Be=U.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=G.uniform),hh(E,Re),U.needsLights=Ax(E),U.lightsStateVersion=Ee,U.needsLights&&(Be.ambientLightColor.value=Q.state.ambient,Be.lightProbe.value=Q.state.probe,Be.directionalLights.value=Q.state.directional,Be.directionalLightShadows.value=Q.state.directionalShadow,Be.spotLights.value=Q.state.spot,Be.spotLightShadows.value=Q.state.spotShadow,Be.rectAreaLights.value=Q.state.rectArea,Be.ltc_1.value=Q.state.rectAreaLTC1,Be.ltc_2.value=Q.state.rectAreaLTC2,Be.pointLights.value=Q.state.point,Be.pointLightShadows.value=Q.state.pointShadow,Be.hemisphereLights.value=Q.state.hemi,Be.directionalShadowMap.value=Q.state.directionalShadowMap,Be.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Be.spotShadowMap.value=Q.state.spotShadowMap,Be.spotLightMatrix.value=Q.state.spotLightMatrix,Be.spotLightMap.value=Q.state.spotLightMap,Be.pointShadowMap.value=Q.state.pointShadowMap,Be.pointShadowMatrix.value=Q.state.pointShadowMatrix);const Qe=Ne.getUniforms(),It=Zs.seqWithValue(Qe.seq,Be);return U.currentProgram=Ne,U.uniformsList=It,Ne}function hh(E,N){const W=xe.get(E);W.outputColorSpace=N.outputColorSpace,W.instancing=N.instancing,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function _x(E,N,W,U,Q){N.isScene!==!0&&(N=se),Le.resetTextureUnits();const ye=N.fog,Ee=U.isMeshStandardMaterial?N.environment:null,Re=M===null?f.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:cn,Ie=(U.isMeshStandardMaterial?rt:at).get(U.envMap||Ee),Fe=U.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ne=!!U.normalMap&&!!W.attributes.tangent,Be=!!W.morphAttributes.position,Qe=!!W.morphAttributes.normal,It=!!W.morphAttributes.color,ln=U.toneMapped?f.toneMapping:vn,Jn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,mt=Jn!==void 0?Jn.length:0,ke=xe.get(U),qa=g.state.lights;if(ee===!0&&(pe===!0||E!==P)){const Vt=E===P&&U.id===b;G.setState(U,E,Vt)}let yt=!1;U.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==qa.state.version||ke.outputColorSpace!==Re||Q.isInstancedMesh&&ke.instancing===!1||!Q.isInstancedMesh&&ke.instancing===!0||Q.isSkinnedMesh&&ke.skinning===!1||!Q.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Ie||U.fog===!0&&ke.fog!==ye||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==G.numPlanes||ke.numIntersection!==G.numIntersection)||ke.vertexAlphas!==Fe||ke.vertexTangents!==Ne||ke.morphTargets!==Be||ke.morphNormals!==Qe||ke.morphColors!==It||ke.toneMapping!==ln||re.isWebGL2===!0&&ke.morphTargetsCount!==mt)&&(yt=!0):(yt=!0,ke.__version=U.version);let ei=ke.currentProgram;yt===!0&&(ei=Mr(U,N,Q));let uh=!1,Es=!1,Ka=!1;const Dt=ei.getUniforms(),ti=ke.uniforms;if(Me.useProgram(ei.program)&&(uh=!0,Es=!0,Ka=!0),U.id!==b&&(b=U.id,Es=!0),uh||P!==E){if(Dt.setValue(I,"projectionMatrix",E.projectionMatrix),re.logarithmicDepthBuffer&&Dt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),P!==E&&(P=E,Es=!0,Ka=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Vt=Dt.map.cameraPosition;Vt!==void 0&&Vt.setValue(I,K.setFromMatrixPosition(E.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Dt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Q.isSkinnedMesh)&&Dt.setValue(I,"viewMatrix",E.matrixWorldInverse)}if(Q.isSkinnedMesh){Dt.setOptional(I,Q,"bindMatrix"),Dt.setOptional(I,Q,"bindMatrixInverse");const Vt=Q.skeleton;Vt&&(re.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),Dt.setValue(I,"boneTexture",Vt.boneTexture,Le),Dt.setValue(I,"boneTextureSize",Vt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Za=W.morphAttributes;if((Za.position!==void 0||Za.normal!==void 0||Za.color!==void 0&&re.isWebGL2===!0)&&ce.update(Q,W,ei),(Es||ke.receiveShadow!==Q.receiveShadow)&&(ke.receiveShadow=Q.receiveShadow,Dt.setValue(I,"receiveShadow",Q.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(ti.envMap.value=Ie,ti.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Es&&(Dt.setValue(I,"toneMappingExposure",f.toneMappingExposure),ke.needsLights&&xx(ti,Ka),ye&&U.fog===!0&&bt.refreshFogUniforms(ti,ye),bt.refreshMaterialUniforms(ti,U,D,Z,oe),Zs.upload(I,ke.uniformsList,ti,Le)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Zs.upload(I,ke.uniformsList,ti,Le),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Dt.setValue(I,"center",Q.center),Dt.setValue(I,"modelViewMatrix",Q.modelViewMatrix),Dt.setValue(I,"normalMatrix",Q.normalMatrix),Dt.setValue(I,"modelMatrix",Q.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Vt=U.uniformsGroups;for(let $a=0,yx=Vt.length;$a<yx;$a++)if(re.isWebGL2){const dh=Vt[$a];fe.update(dh,ei),fe.bind(dh,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function xx(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Ax(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(E,N,W){xe.get(E.texture).__webglTexture=N,xe.get(E.depthTexture).__webglTexture=W;const U=xe.get(E);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=W===void 0,U.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){const W=xe.get(E);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,W=0){M=E,_=N,w=W;let U=!0,Q=null,ye=!1,Ee=!1;if(E){const Ie=xe.get(E);Ie.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(I.FRAMEBUFFER,null),U=!1):Ie.__webglFramebuffer===void 0?Le.setupRenderTarget(E):Ie.__hasExternalTextures&&Le.rebindTextures(E,xe.get(E.texture).__webglTexture,xe.get(E.depthTexture).__webglTexture);const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ee=!0);const Ne=xe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Q=Ne[N],ye=!0):re.isWebGL2&&E.samples>0&&Le.useMultisampledRTT(E)===!1?Q=xe.get(E).__webglMultisampledFramebuffer:Q=Ne,F.copy(E.viewport),A.copy(E.scissor),T=E.scissorTest}else F.copy(J).multiplyScalar(D).floor(),A.copy(j).multiplyScalar(D).floor(),T=X;if(Me.bindFramebuffer(I.FRAMEBUFFER,Q)&&re.drawBuffers&&U&&Me.drawBuffers(E,Q),Me.viewport(F),Me.scissor(A),Me.setScissorTest(T),ye){const Ie=xe.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ie.__webglTexture,W)}else if(Ee){const Ie=xe.get(E.texture),Fe=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ie.__webglTexture,W||0,Fe)}b=-1},this.readRenderTargetPixels=function(E,N,W,U,Q,ye,Ee){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){Me.bindFramebuffer(I.FRAMEBUFFER,Re);try{const Ie=E.texture,Fe=Ie.format,Ne=Ie.type;if(Fe!==Xt&&B.convert(Fe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Ne===es&&(be.has("EXT_color_buffer_half_float")||re.isWebGL2&&be.has("EXT_color_buffer_float"));if(Ne!==Hn&&B.convert(Ne)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===_n&&(re.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-U&&W>=0&&W<=E.height-Q&&I.readPixels(N,W,U,Q,B.convert(Fe),B.convert(Ne),ye)}finally{const Ie=M!==null?xe.get(M).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(E,N,W=0){const U=Math.pow(2,-W),Q=Math.floor(N.image.width*U),ye=Math.floor(N.image.height*U);Le.setTexture2D(N,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,E.x,E.y,Q,ye),Me.unbindTexture()},this.copyTextureToTexture=function(E,N,W,U=0){const Q=N.image.width,ye=N.image.height,Ee=B.convert(W.format),Re=B.convert(W.type);Le.setTexture2D(W,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment),N.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,U,E.x,E.y,Q,ye,Ee,Re,N.image.data):N.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,U,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,Ee,N.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,U,E.x,E.y,Ee,Re,N.image),U===0&&W.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(E,N,W,U,Q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=E.max.x-E.min.x+1,Ee=E.max.y-E.min.y+1,Re=E.max.z-E.min.z+1,Ie=B.convert(U.format),Fe=B.convert(U.type);let Ne;if(U.isData3DTexture)Le.setTexture3D(U,0),Ne=I.TEXTURE_3D;else if(U.isDataArrayTexture)Le.setTexture2DArray(U,0),Ne=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Be=I.getParameter(I.UNPACK_ROW_LENGTH),Qe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),It=I.getParameter(I.UNPACK_SKIP_PIXELS),ln=I.getParameter(I.UNPACK_SKIP_ROWS),Jn=I.getParameter(I.UNPACK_SKIP_IMAGES),mt=W.isCompressedTexture?W.mipmaps[0]:W.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,mt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,E.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,E.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,E.min.z),W.isDataTexture||W.isData3DTexture?I.texSubImage3D(Ne,Q,N.x,N.y,N.z,ye,Ee,Re,Ie,Fe,mt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ne,Q,N.x,N.y,N.z,ye,Ee,Re,Ie,mt.data)):I.texSubImage3D(Ne,Q,N.x,N.y,N.z,ye,Ee,Re,Ie,Fe,mt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Be),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,It),I.pixelStorei(I.UNPACK_SKIP_ROWS,ln),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Jn),Q===0&&U.generateMipmaps&&I.generateMipmap(Ne),Me.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Le.setTextureCube(E,0):E.isData3DTexture?Le.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Le.setTexture2DArray(E,0):Le.setTexture2D(E,0),Me.unbindTexture()},this.resetState=function(){_=0,w=0,M=null,Me.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===we?Wn:Bo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wn?we:cn}}class Gm extends Vl{}Gm.prototype.isWebGL1Renderer=!0;class Vm extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Wm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Jt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new C;class $s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),r=je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wl extends sn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ui;const cs=new C,Fi=new C,Ni=new C,Oi=new ge,hs=new ge,Xl=new Ae,Js=new C,us=new C,er=new C,Yl=new ge,da=new ge,Ql=new ge;class Xm extends Je{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Ui===void 0){Ui=new At;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wm(t,5);Ui.setIndex([0,1,2,0,2,3]),Ui.setAttribute("position",new $s(n,3,0,!1)),Ui.setAttribute("uv",new $s(n,2,3,!1))}this.geometry=Ui,this.material=e!==void 0?e:new Wl,this.center=new ge(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),Xl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ni.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Ni.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;tr(Js.set(-.5,-.5,0),Ni,a,Fi,i,r),tr(us.set(.5,-.5,0),Ni,a,Fi,i,r),tr(er.set(.5,.5,0),Ni,a,Fi,i,r),Yl.set(0,0),da.set(1,0),Ql.set(1,1);let o=e.ray.intersectTriangle(Js,us,er,!1,cs);if(o===null&&(tr(us.set(-.5,.5,0),Ni,a,Fi,i,r),da.set(0,1),o=e.ray.intersectTriangle(Js,er,us,!1,cs),o===null))return;const l=e.ray.origin.distanceTo(cs);l<e.near||l>e.far||t.push({distance:l,point:cs.clone(),uv:Ht.getInterpolation(cs,Js,us,er,Yl,da,Ql,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function tr(s,e,t,n,i,r){Oi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(hs.x=r*Oi.x-i*Oi.y,hs.y=i*Oi.x+r*Oi.y):hs.copy(Oi),s.copy(e),s.x+=hs.x,s.y+=hs.y,s.applyMatrix4(Xl)}const jl=new C,ql=new Ve,Kl=new Ve,Ym=new C,Zl=new Ae,Bi=new C;class Qm extends ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Bi.fromBufferAttribute(t,n),this.applyBoneTransform(n,Bi),this.boundingBox.expandByPoint(Bi)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _i),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Bi.fromBufferAttribute(t,n),this.applyBoneTransform(n,Bi),this.boundingSphere.expandByPoint(Bi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ve,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ql.fromBufferAttribute(i.attributes.skinIndex,e),Kl.fromBufferAttribute(i.attributes.skinWeight,e),jl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Kl.getComponent(r);if(a!==0){const o=ql.getComponent(r);Zl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ym.copy(jl).applyMatrix4(Zl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class fa extends Je{constructor(){super(),this.isBone=!0,this.type="Bone"}}class jm extends st{constructor(e=null,t=1,n=1,i,r,a,o,l,c=it,u=it,h,d){super(null,a,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $l=new Ae,qm=new Ae;class pa{constructor(e=[],t=[]){this.uuid=Jt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ae)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ae;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:qm;$l.multiplyMatrices(o,t[r]),$l.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new pa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Go(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new jm(t,e,e,Xt,_n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new fa),this.bones.push(a),this.boneInverses.push(new Ae().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ki extends sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jl=new C,ec=new C,tc=new Ae,ma=new jr,nr=new _i;class nc extends Je{constructor(e=new At,t=new ki){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Jl.fromBufferAttribute(t,i-1),ec.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Jl.distanceTo(ec);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(i),nr.radius+=r,e.ray.intersectsSphere(nr)===!1)return;tc.copy(i).invert(),ma.copy(e.ray).applyMatrix4(tc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,u=new C,h=new C,d=new C,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let _=f,w=x-1;_<w;_+=p){const M=g.getX(_),b=g.getX(_+1);if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,b),ma.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(d);F<e.near||F>e.far||t.push({distance:F,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let _=f,w=x-1;_<w;_+=p){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),ma.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const ic=new C,sc=new C;class ga extends nc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ic.fromBufferAttribute(t,i),sc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ic.distanceTo(sc);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ds extends sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rc=new Ae,va=new jr,ir=new _i,sr=new C;class _a extends Je{constructor(e=new At,t=new ds){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(i),ir.radius+=r,e.ray.intersectsSphere(ir)===!1)return;rc.copy(i).invert(),va.copy(e.ray).applyMatrix4(rc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);sr.fromBufferAttribute(h,m),ac(sr,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,v=p;g<v;g++)sr.fromBufferAttribute(h,g),ac(sr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ac(s,e,t,n,i,r,a){const o=va.distanceSqToPoint(s);if(o<t){const l=new C;va.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Km extends st{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zm{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const u=n[i],d=n[i+1]-u,p=(a-u)/d;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ge:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,i=[],r=[],a=[],o=new C,l=new Ae;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(_t(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(_t(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}const rr=new C,ar=new C,xa=new C,or=new Ht;class $m extends At{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(ci*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:f}=or;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),or.getNormal(xa),h[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const _=(x+1)%3,w=h[x],M=h[_],b=or[u[x]],P=or[u[_]],F=`${w}_${M}`,A=`${M}_${w}`;A in d&&d[A]?(xa.dot(d[A].normal)<=r&&(p.push(b.x,b.y,b.z),p.push(P.x,P.y,P.z)),d[A]=null):F in d||(d[F]={index0:c[x],index1:c[_],normal:xa.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];rr.fromBufferAttribute(o,v),ar.fromBufferAttribute(o,m),p.push(rr.x,rr.y,rr.z),p.push(ar.x,ar.y,ar.z)}this.setAttribute("position",new nt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class lr extends sn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Te(16777215),this.specular=new Te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dr,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jm extends sn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dr,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Fn(s,e,t){return oc(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function cr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function oc(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function eg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function lc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function cc(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class hr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tg extends hr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fo,endingEnd:Fo}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case No:r=e,o=2*t-n;break;case Oo:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case No:a=e,l=2*n-t;break;case Oo:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,f=-d*m+2*d*v-d*g,x=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*v+.5*g,w=p*m-p*v;for(let M=0;M!==o;++M)r[M]=f*a[u+M]+x*a[c+M]+_*a[l+M]+w*a[h+M];return r}}class ng extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class ig extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class dn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cr(t,this.TimeBufferType),this.values=cr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cr(e.times,Array),values:cr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ig(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ng(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bs:t=this.InterpolantFactoryMethodDiscrete;break;case Ts:t=this.InterpolantFactoryMethodLinear;break;case Ir:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return Ts;case this.InterpolantFactoryMethodSmooth:return Ir}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=Fn(n,r,a),this.values=Fn(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&oc(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Fn(this.times),t=Fn(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ir,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const v=t[h+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Fn(e,0,a),this.values=Fn(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Fn(this.times,0),t=Fn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}dn.prototype.TimeBufferType=Float32Array,dn.prototype.ValueBufferType=Float32Array,dn.prototype.DefaultInterpolation=Ts;class zi extends dn{}zi.prototype.ValueTypeName="bool",zi.prototype.ValueBufferType=Array,zi.prototype.DefaultInterpolation=bs,zi.prototype.InterpolantFactoryMethodLinear=void 0,zi.prototype.InterpolantFactoryMethodSmooth=void 0;class hc extends dn{}hc.prototype.ValueTypeName="color";class fs extends dn{}fs.prototype.ValueTypeName="number";class sg extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Yt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Hi extends dn{InterpolantFactoryMethodLinear(e){return new sg(this.times,this.values,this.getValueSize(),e)}}Hi.prototype.ValueTypeName="quaternion",Hi.prototype.DefaultInterpolation=Ts,Hi.prototype.InterpolantFactoryMethodSmooth=void 0;class Gi extends dn{}Gi.prototype.ValueTypeName="string",Gi.prototype.ValueBufferType=Array,Gi.prototype.DefaultInterpolation=bs,Gi.prototype.InterpolantFactoryMethodLinear=void 0,Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class ps extends dn{}ps.prototype.ValueTypeName="vector";class rg{constructor(e,t=-1,n,i=su){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Jt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(og(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(dn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=eg(l);l=lc(l,1,u),c=lc(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new fs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,v){if(p.length!==0){const m=[],f=[];cc(p,m,f,g),m.length!==0&&v.push(new h(d,m,f))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)p[d[g].morphTargets[v]]=-1;for(const v in p){const m=[],f=[];for(let x=0;x!==d[g].morphTargets.length;++x){const _=d[g];m.push(_.time),f.push(_.morphTarget===v?1:0)}i.push(new fs(".morphTargetInfluence["+v+"]",m,f))}l=p.length*a}else{const p=".bones["+t[h].name+"]";n(ps,p+".position",d,"pos",i),n(Hi,p+".quaternion",d,"rot",i),n(ps,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ag(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fs;case"vector":case"vector2":case"vector3":case"vector4":return ps;case"color":return hc;case"quaternion":return Hi;case"bool":case"boolean":return zi;case"string":return Gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function og(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ag(s.type);if(s.times===void 0){const t=[],n=[];cc(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ur={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class lg{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const cg=new lg;class Vi{constructor(e){this.manager=e!==void 0?e:cg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Cn={};class hg extends Error{constructor(e,t){super(e),this.response=t}}class uc extends Vi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ur.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Cn[e]!==void 0){Cn[e].push({onLoad:t,onProgress:n,onError:i});return}Cn[e]=[],Cn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Cn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let v=0;const m=new ReadableStream({start(f){x();function x(){h.read().then(({done:_,value:w})=>{if(_)f.close();else{v+=w.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let b=0,P=u.length;b<P;b++){const F=u[b];F.onProgress&&F.onProgress(M)}f.enqueue(w),x()}})}}});return new Response(m)}else throw new hg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{ur.add(e,c);const u=Cn[e];delete Cn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Cn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Cn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class dr extends Vi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ur.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=ns("img");function l(){u(),ur.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class ug extends Vi{constructor(e){super(e)}load(e,t,n,i){const r=new ia,a=new dr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}let dg=class extends Vi{constructor(e){super(e)}load(e,t,n,i){const r=new st,a=new dr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}};class fr extends Je{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Aa=new Ae,dc=new C,fc=new C;class ya{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;dc.setFromMatrixPosition(e.matrixWorld),t.position.copy(dc),fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fc),t.updateMatrixWorld(),Aa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Aa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fg extends ya{constructor(){super(new Pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=hi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class pg extends fr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new fg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const pc=new Ae,ms=new C,Ma=new C;class mg extends ya{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ms.setFromMatrixPosition(e.matrixWorld),n.position.copy(ms),Ma.copy(n.position),Ma.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ma),n.updateMatrixWorld(),i.makeTranslation(-ms.x,-ms.y,-ms.z),pc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc)}}class Ea extends fr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new mg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gg extends ya{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vg extends fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new gg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mc extends fr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _g{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class gc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vc(){return(typeof performance>"u"?Date:performance).now()}const wa="\\[\\]\\.:\\/",xg=new RegExp("["+wa+"]","g"),Sa="[^"+wa+"]",Ag="[^"+wa.replace("\\.","")+"]",yg=/((?:WC+[\/:])*)/.source.replace("WC",Sa),Mg=/(WCOD+)?/.source.replace("WCOD",Ag),Eg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sa),wg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sa),Sg=new RegExp("^"+yg+Mg+Eg+wg+"$"),bg=["material","materials","bones","map"];class Tg{constructor(e,t,n){const i=n||He.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class He{constructor(e,t,n){this.path=t,this.parsedPath=n||He.parseTrackName(t),this.node=He.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new He.Composite(e,t,n):new He(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xg,"")}static parseTrackName(e){const t=Sg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);bg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=He.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}He.Composite=Tg,He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray],He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _c{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ct}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ct);const Cg={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class pr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Rg=new js(-1,1,1,-1,0,1),ba=new At;ba.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),ba.setAttribute("uv",new nt([0,2,0,0,2,0],2));class Pg{constructor(e){this._mesh=new ze(ba,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Rg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class xc extends pr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Tn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fl.clone(e.uniforms),this.material=new Tn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Pg(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ac extends pr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Lg extends pr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ig{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ge);this._width=n.width,this._height=n.height,t=new An(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xc(Cg),this.clock=new gc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ac!==void 0&&(a instanceof Ac?n=!0:a instanceof Lg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Dg extends pr{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}const Ug={uniforms:{tDiffuse:{value:null},resolution:{value:new ge(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`},Fg=Math.PI/180;function Ng(s){return s*Fg}const Og=(s,e)=>{const t=s/e;return Math.abs(t-2)>.01&&(e/22==s/46?(e=e/22*32,s=s/46*64):(e=e/17*32,s=s/22*64)),[s,e]},yc=(s,e,t,n,i)=>{const r=s.getImageData(e,t,n,i);for(let a=0;a<n;a++)for(let o=0;o<i;o++){const l=(a+o*n)*4;if(r.data[l+3]!==255)return!0}return!1},Bg=(s,e,t,n,i)=>{let r=!0;const a=s.getImageData(e,t,n,i);for(let o=0;o<n;o++)for(let l=0;l<i;l++){const c=(o+l*n)*4;a.data[c+3]>=255&&(r=!1)}return r},kg=(s,e,t,n,i,r,a,o)=>{const l=s.getImageData(e,t,n,i);for(let c=0;c<i;c++)for(let u=0;u<n/2;u++){const h=(u+c*n)*4,d=(n-u-1+c*n)*4,p=l.data[h],g=l.data[h+1],v=l.data[h+2],m=l.data[h+3],f=l.data[d],x=l.data[d+1],_=l.data[d+2],w=l.data[d+3];l.data[h]=f,l.data[h+1]=x,l.data[h+2]=_,l.data[h+3]=w,l.data[d]=p,l.data[d+1]=g,l.data[d+2]=v,l.data[d+3]=m}s.putImageData(l,r,a)},mr=s=>s/64,zg=(s,e)=>{const t=mr(s.width),n=s.getContext("2d");if(!n)throw new Error("No Context Found.");const i=(h,d,p,g)=>Bg(n,h*t,d*t,p*t,g*t),r=!i(0,48,16,16),a=!i(0,32,16,16),o=!i(40,32,16,16),l=!i(48,48,16,16),c=!i(16,32,24,16),u=!i(32,0,32,16);if(e){if(e.leftLeg&&r||e.rightLeg&&a||e.rightArm&&o||e.leftArm&&l||e.body&&c||u)return!0}else return r||a||o||l||c||u;return!1},Hg=s=>{const e=mr(s.width),t=s.getContext("2d");if(!t)throw new Error("No Context Found.");const n=(r,a,o,l)=>yc(t,r*e,a*e,o*e,l*e);return n(50,16,2,4)||n(54,20,2,12)||n(42,48,2,4)||n(46,52,2,12)?"slim":"default"},Gg=(s,e)=>{if(!yc(s,0,0,e,e/2)){const t=mr(e),n=(i,r,a,o)=>s.clearRect(i*t,r*t,a*t,o*t);n(40,0,8,8),n(48,0,8,8),n(32,8,8,8),n(40,8,8,8),n(48,8,8,8),n(56,8,8,8)}},Vg=(s,e)=>{const t=mr(e),n=(i,r,a,o,l,c,u)=>kg(s,i*t,r*t,a*t,o*t,l*t,c*t);Gg(s,e),n(4,16,4,4,20,48),n(8,16,4,4,24,48),n(0,20,4,12,24,52),n(4,20,4,12,20,52),n(8,20,4,12,16,52),n(12,20,4,12,28,52),n(44,16,4,4,36,48),n(48,16,4,4,40,48),n(40,20,4,12,40,52),n(44,20,4,12,36,52),n(48,20,4,12,32,52),n(52,20,4,12,44,52)};function Nn(s){return s instanceof HTMLImageElement||s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas}function Mc(s,e){const t=e||document.createElement("canvas"),n=t.getContext("2d");if(!n)throw new Error("No Context Found.");return t.width=s.width,t.height=s.height,n.drawImage(s,0,0),t}class gr{constructor(e={}){k(this,"canvas");k(this,"frame");k(this,"updatedAt");k(this,"texture");k(this,"material");k(this,"renderAnimations");k(this,"frames");this.renderAnimations=e.renderAnimations??!0,this.canvas=document.createElement("canvas"),this.texture=new st(this.canvas),this.texture.colorSpace=we,this.texture.magFilter=it,this.texture.minFilter=it,this.material=new Ei({map:this.texture,side:Bt,transparent:!0,alphaTest:e.alphaTest??1e-5}),this.frames={content:[],time:0},this.updatedAt=0,this.frame=-1}update(){this.frames.content.length&&(Date.now()<=this.updatedAt+this.frames.time||(this.frame=(this.frame+1)%this.frames.content.length,Mc(this.frames.content[this.frame],this.canvas),this.texture.needsUpdate=!0,this.updatedAt=Date.now()))}apply(e){e.traverse(t=>{t instanceof ze&&(t.material=this.material)})}load(e,t,n){const i=(t==null?void 0:t.animation.width)??e.width,r=(t==null?void 0:t.animation.height)??e.height,a=this.renderAnimations?e.height/r:1;this.frames.time=((t==null?void 0:t.animation.frametime)??0)*50;const o=document.createElement("canvas");if(n){const[c,u]=n(i,r);o.width=c,o.height=u}else o.width=i,o.height=r;const l=o.getContext("2d",{willReadFrequently:!0});l.imageSmoothingEnabled=!1,this.updatedAt=0,this.frame=-1,this.frames.content=[];for(let c=0;c<a;c++)l.clearRect(0,0,o.width,o.height),l.drawImage(e,0,c*r,i,r,0,0,i,r),this.frames.content.push(Mc(o))}}function Ec(s,e,t,n,i,r,a,o){const l=(x,_,w,M)=>[new ge(x/a,1-M/o),new ge(w/a,1-M/o),new ge(w/a,1-_/o),new ge(x/a,1-_/o)],c=l(e+r,t,e+n+r,t+r),u=l(e+n+r,t,e+n*2+r,t+r),h=l(e,t+r,e+r,t+r+i),d=l(e+r,t+r,e+n+r,t+r+i),p=l(e+n+r,t+r,e+n+r*2,t+i+r),g=l(e+n+r*2,t+r,e+n*2+r*2,t+i+r),v=s.attributes.uv,m=[p[3],p[2],p[0],p[1],h[3],h[2],h[0],h[1],c[3],c[2],c[0],c[1],u[0],u[1],u[3],u[2],d[3],d[2],d[0],d[1],g[3],g[2],g[0],g[1]];let f=0;for(const x of m)v.setXY(f,x.x,x.y),f++;v.needsUpdate=!0}function Ta(s,e,t,n,i,r){Ec(s,e,t,n,i,r,64,32)}class Wg extends Ze{constructor(t){super();k(this,"cape");k(this,"textured");k(this,"textureSource");t.skin.body.add(this),this.name="cape",this.visible=!1,this.textured=new gr({renderAnimations:t.renderAnimations});const n=new ot(10,16,1);Ta(n,0,0,10,16,1),this.cape=new ze(n),this.cape.position.y=-2,this.cape.position.z=-3,this.cape.rotation.x=Ng(10.8),this.cape.rotation.y=Math.PI,this.add(this.cape)}update(){this.textured.update()}async load(t,n){this.textureSource=t,this.textured.load(t,n,Og),this.textured.apply(this),this.visible=!0}reset(){this.visible=!1}getTextureSource(){return this.textureSource}}const Xg=(s,e)=>{const t=Math.cos(s),n=Math.sin(s);return{x:e.x,y:t*e.y-n*e.z,z:n*e.y+t*e.z}},Yg=(s,e)=>{const t=Math.cos(s),n=Math.sin(s);return{x:t*e.x+n*e.z,y:e.y,z:-n*e.x+t*e.z}},Qg=(s,e)=>{const t=Math.cos(s),n=Math.sin(s);return{x:t*e.x-n*e.y,y:n*e.x+t*e.y,z:e.z}},Ca=(s,e)=>{e=Qg(s.rotation.z,e),e=Yg(s.rotation.y,e),e=Xg(s.rotation.x,e),s.position.x+=e.x*16,s.position.y+=e.y*16,s.position.z+=e.z*16},Ra=(s,e)=>{e.angle&&(e.x&&s.rotateX(Ye.degToRad(e.angle)),e.y&&s.rotateY(Ye.degToRad(e.angle)),e.z&&s.rotateZ(Ye.degToRad(e.angle)))},Pa=(s,e)=>{e.x&&(s.scale.x*=e.x),e.y&&(s.scale.y*=e.y),e.z&&(s.scale.z*=e.z)};class La extends Ze{constructor(t){super();k(this,"textured");k(this,"player");this.player=t,this.visible=!1,this.textured=new gr({renderAnimations:t.renderAnimations})}update(){this.onUpdate(),this.textured.update()}async load(t,n,i=[],r){this.textured.load(t,r),this.textured.apply(n),this.preLoadTransformations(n);const a=zg(this.player.skin.canvas,{head:!0});i.forEach(o=>{o.type==="translate"&&(o.value.player&&Ca(n,o.value.player),o.value.skin_layer&&a&&Ca(n,o.value.skin_layer)),o.type==="rotate"&&(o.value.player&&Ra(n,o.value.player),o.value.skin_layer&&a&&Ra(n,o.value.skin_layer)),o.type==="scale"&&(o.value.player&&Pa(n,o.value.player),o.value.skin_layer&&a&&Pa(n,o.value.skin_layer))}),this.remove(...this.children),this.add(n),this.visible=!0}reset(){this.visible=!1}}class jg extends La{constructor(e){super(e),this.name="wings",e.skin.body.add(this)}preLoadTransformations(e){e.scale.x=.02,e.scale.y=.02,e.scale.z=.02,e.rotation.y=Ye.degToRad(180),e.rotation.x=Ye.degToRad(0),e.rotation.z=Ye.degToRad(0),e.position.z-=.75,e.position.y=3}onUpdate(){var a,o,l,c,u,h,d,p,g,v,m,f,x,_;const e=Date.now()%2e3/2e3*Math.PI*2,t=Math.cos(e)*.2,n=-.65,i=Math.sin(e+.25)*.65,r=(Math.sin(e+2)+.5)*.55;(a=this.getObjectByName("right_wing"))==null||a.setRotationFromEuler(new Et(t,n,i)),(d=(o=this.getObjectByName("right_wing"))==null?void 0:o.getObjectByName("right_wing_tip"))==null||d.setRotationFromEuler(new Et((c=(l=this.getObjectByName("right_wing"))==null?void 0:l.getObjectByName("right_wing_tip"))==null?void 0:c.rotation.x,(h=(u=this.getObjectByName("right_wing"))==null?void 0:u.getObjectByName("right_wing_tip"))==null?void 0:h.rotation.y,r)),(p=this.getObjectByName("left_wing"))==null||p.setRotationFromEuler(new Et(t,-n,-i)),(_=(g=this.getObjectByName("left_wing"))==null?void 0:g.getObjectByName("left_wing_tip"))==null||_.setRotationFromEuler(new Et((m=(v=this.getObjectByName("left_wing"))==null?void 0:v.getObjectByName("left_wing_tip"))==null?void 0:m.rotation.x,(x=(f=this.getObjectByName("left_wing"))==null?void 0:f.getObjectByName("left_wing_tip"))==null?void 0:x.rotation.y,-r))}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class fn{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),fn.nextNameID=fn.nextNameID||0,this.$name.id=`lil-gui-name-${++fn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class qg extends fn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ia(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Kg={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Ia,toHexString:Ia},gs={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},Zg=[Kg,gs,{isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,e,t=1){const n=gs.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([s,e,t],n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return gs.toHexString(i)}},{isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const n=gs.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:s,g:e,b:t},n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return gs.toHexString(i)}}];function $g(s){return Zg.find(e=>e.match(s))}class Jg extends fn{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=$g(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Ia(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Da extends fn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class ev extends fn{constructor(e,t,n,i,r,a){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const _=parseFloat(this.$input.value);isNaN(_)||(this._snapClampSetValue(_+x),this.$input.value=this.getValue())},i=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},r=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let a=!1,o,l,c,u,h;const d=5,p=x=>{o=x.clientX,l=c=x.clientY,a=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",v)},g=x=>{if(a){const _=x.clientX-o,w=x.clientY-l;Math.abs(w)>d?(x.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(_)>d&&v()}if(!a){const _=x.clientY-c;h-=_*this._step*this._arrowKeyMultiplier(x),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=x.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",v)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,x,_,w,M)=>(f-x)/(_-x)*(M-w)+w,t=f=>{const x=this.$slider.getBoundingClientRect();let _=e(f,x.left,x.right,this._min,this._max);this._snapClampSetValue(_)},n=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=f=>{t(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let a=!1,o,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),a=!1},u=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,l=f.touches[0].clientY,a=!0):c(f),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=f=>{if(a){const x=f.touches[0].clientX-o,_=f.touches[0].clientY-l;Math.abs(x)>Math.abs(_)?c(f):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else f.preventDefault(),t(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),g=400;let v;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const _=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(p,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class tv extends fn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class nv extends fn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const iv=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function sv(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let wc=!1;class Ua{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!wc&&o&&(sv(iv),wc=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=a}add(e,t,n,i,r){if(Object(n)===n)return new tv(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new ev(this,e,t,n,i,r);case"boolean":return new qg(this,e,t);case"string":return new nv(this,e,t);case"function":return new Da(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new Jg(this,e,t,n)}addFolder(e){const t=new Ua({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Da||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Da)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const Ki=class Ki{constructor(){k(this,"gui");this.gui=new Ua,this.gui.addFolder("Debug")}static getInstance(){return Ki.instance||(this.instance=new Ki),this.instance}add(e,t,n,i){let r;if(n){const l=this.gui.foldersRecursive().find(c=>c.$title.innerHTML===n);l?r=l:r=this.gui.addFolder(n)}else r=this.gui;const a=r.controllers.find(l=>l.$name.innerHTML===t);a&&a.destroy();const o=r.add(e,t).listen();i&&o.disable()}createFolder(e,t){if(t){const n=this.gui.folders.find(i=>i.$title.innerHTML===t);if(n)return n.addFolder(e)}return this.gui.addFolder(e)}keyExists(e,t){const n=this.gui.foldersRecursive().find(i=>i.$title.innerHTML===t);return n?n.controllers.some(i=>i.$name.innerHTML===e):!1}};k(Ki,"instance"),k(Ki,"enabled",!1);let Rn=Ki;function jt(s,e,t,n,i,r){Ec(s,e,t,n,i,r,64,64)}class Wi extends Ze{constructor(e,t){super(),this.innerLayer=e,this.outerLayer=t,e.name="inner",t.name="outer"}}const Fa={jumpHeight:1.252,gravity:.08,drag:.98};class rv extends Ze{constructor(){super();k(this,"head");k(this,"body");k(this,"rightArm");k(this,"leftArm");k(this,"rightLeg");k(this,"leftLeg");k(this,"modelListeners",[]);k(this,"slim");k(this,"canvas");k(this,"texture");k(this,"isOnGround",!0);k(this,"state",{isShifting:!1,isWalking:!1,isSwimming:!1,isFlying:!1,isPunching:!1});k(this,"clock",new gc);k(this,"ageInTicks",0);k(this,"delta",0);k(this,"dy",0);k(this,"jumpCooldown",0);k(this,"interval",1/60);this.name="skin",this.slim=!1,this.visible=!1,this.canvas=document.createElement("canvas"),this.texture=new st(this.canvas),this.texture.colorSpace=we,this.texture.magFilter=it,this.texture.minFilter=it;const t=new Ei({map:this.texture,side:gn}),n=new Ei({map:this.texture,side:Bt,transparent:!0,alphaTest:1e-5}),i=t.clone();i.polygonOffset=!0,i.polygonOffsetFactor=1,i.polygonOffsetUnits=1;const r=n.clone();r.polygonOffset=!0,r.polygonOffsetFactor=1,r.polygonOffsetUnits=1;const a=new ot(8,8,8);jt(a,0,0,8,8,8);const o=new ze(a,t),l=new ot(9,9,9);jt(l,32,0,8,8,8);const c=new ze(l,n);this.head=new Wi(o,c),this.head.name="head",this.head.add(o,c),this.head.position.y=4,this.add(this.head);const u=new ot(8,12,4);jt(u,16,16,8,12,4);const h=new ze(u,t),d=new ot(8.5,12.5,4.5);jt(d,16,32,8,12,4);const p=new ze(d,n);this.body=new Wi(h,p),this.body.name="body",this.body.add(h,p),this.body.position.y=-6,this.add(this.body);const g=new ot,v=new ze(g,i);this.modelListeners.push(()=>{v.scale.x=this.slim?3:4,v.scale.y=12,v.scale.z=4,jt(g,40,16,this.slim?3:4,12,4)});const m=new ot,f=new ze(m,r);this.modelListeners.push(()=>{f.scale.x=this.slim?3.5:4.5,f.scale.y=12.5,f.scale.z=4.5,jt(m,40,32,this.slim?3:4,12,4)});const x=new Ze;x.add(v,f),this.modelListeners.push(()=>{x.position.x=this.slim?-.5:-1}),x.position.y=-4,this.rightArm=new Wi(v,f),this.rightArm.name="rightArm",this.rightArm.add(x),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const _=new ot,w=new ze(_,i);this.modelListeners.push(()=>{w.scale.x=this.slim?3:4,w.scale.y=12,w.scale.z=4,jt(_,32,48,this.slim?3:4,12,4)});const M=new ot,b=new ze(M,r);this.modelListeners.push(()=>{b.scale.x=this.slim?3.5:4.5,b.scale.y=12.5,b.scale.z=4.5,jt(M,48,48,this.slim?3:4,12,4)});const P=new Ze;P.add(w,b),this.modelListeners.push(()=>{P.position.x=this.slim?.5:1}),P.position.y=-4,this.leftArm=new Wi(w,b),this.leftArm.name="leftArm",this.leftArm.add(P),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const F=new ot(4,12,4);jt(F,0,16,4,12,4);const A=new ze(F,i),T=new ot(4.5,12.5,4.5);jt(T,0,32,4,12,4);const Y=new ze(T,r),Z=new Ze;Z.add(A,Y),Z.position.y=-6,this.rightLeg=new Wi(A,Y),this.rightLeg.name="rightLeg",this.rightLeg.add(Z),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const D=new ot(4,12,4);jt(D,16,48,4,12,4);const O=new ze(D,i),H=new ot(4.5,12.5,4.5);jt(H,0,48,4,12,4);const J=new ze(H,r),j=new Ze;if(j.add(O,J),j.position.y=-6,this.leftLeg=new Wi(O,J),this.leftLeg.name="leftLeg",this.leftLeg.add(j),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),Rn.enabled){const X=Rn.getInstance();X.add(this.state,"isShifting","Debug"),X.add(this.state,"isWalking","Debug"),X.add(this.state,"isSwimming","Debug"),X.add(this.state,"isFlying","Debug"),X.add(this.state,"isPunching","Debug")}}async load(t,n){let i=!1;if(t.width!==t.height)if(t.width===2*t.height)i=!0;else throw new Error(`Bad skin size: ${t.width}x${t.height}`);const r=this.canvas.getContext("2d",{willReadFrequently:!0});if(i){const a=t.width;this.canvas.width=a,this.canvas.height=a,r.clearRect(0,0,a,a),r.drawImage(t,0,0,a,a/2),Vg(r,a)}else this.canvas.width=t.width,this.canvas.height=t.height,r.clearRect(0,0,t.width,t.height),r.drawImage(t,0,0,this.canvas.width,this.canvas.height);n?this.slim=n=="slim":this.slim=Hg(this.canvas)=="slim",this.modelListeners.forEach(a=>a()),this.texture.needsUpdate=!0,this.visible=!0}reset(){this.visible=!1}jump(){this.isOnGround&&this.ageInTicks>=this.jumpCooldown&&(this.dy=Fa.jumpHeight)}update(){const t=this.clock.getDelta();this.delta+=t,this.ageInTicks+=t*20,this.delta>this.interval&&(this.dy-=Fa.gravity,this.dy*=Fa.drag,this.position.y+=this.dy,this.delta=this.delta%this.interval),this.position.y<=0?(this.position.y=0,this.dy=0,this.isOnGround||(this.isOnGround=!0)):this.isOnGround&&(this.isOnGround=!1)}getAgeInTicks(){return this.ageInTicks}isNonDefaultAnimation(){return this.state.isWalking||this.state.isSwimming||this.state.isFlying}}class Sc extends Xm{constructor(t,n={}){const i=new Wl({transparent:!0,alphaTest:1e-5});super(i);k(this,"player");k(this,"text");k(this,"prefix");k(this,"suffix");k(this,"height");k(this,"gap");k(this,"font");k(this,"textMaterial");k(this,"margin");k(this,"textStyle");k(this,"backgroundStyle");k(this,"ctx");k(this,"canvas");k(this,"scaleFactor");k(this,"textShadow");k(this,"isOnTop");k(this,"prefixImage");k(this,"suffixImage");k(this,"fontLoaded");this.player=t,this.isOnTop=n.isOnTop??!1,this.isOnTop===!1?(this.material.opacity=1,this.renderOrder=1,this.material.depthTest=!0):(this.material.opacity=.25,this.renderOrder=2,this.material.depthTest=!1),this.textMaterial=i,this.text=n.text===void 0?"":n.text,this.prefix=n.prefix,this.suffix=n.suffix,this.gap=n.gap===void 0?7:n.gap,this.font=n.font===void 0?"24px Minecraft":n.font,this.margin=n.margin===void 0?[2,5,2,5]:n.margin,this.textStyle=n.textStyle===void 0?"white":n.textStyle,this.textShadow=n.textShadow!==void 0?n.textShadow:{},this.backgroundStyle=n.backgroundStyle===void 0?"rgba(0,0,0,.25)":n.backgroundStyle,this.height=n.height===void 0?4:n.height,this.scaleFactor=n.scaleFactor===void 0?5:n.scaleFactor,this.position.y=8,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),(n.loadWithCustomFont===void 0?!0:n.loadWithCustomFont)&&!document.fonts.check(this.font,this.text)?(this.update(),this.fontLoaded=this.loadAndUpdate()):(this.update(),this.fontLoaded=Promise.resolve())}async loadAndUpdate(){return await document.fonts.load(this.font,this.text),this.update(),Promise.resolve()}update(){var u,h;const t=this.canvas,n=this.ctx;this.player.skin.state.isShifting&&(this.material.opacity=.25),!this.player.skin.state.isShifting&&this.isOnTop===!1&&(this.material.opacity=1),n.font=this.font;const i=n.measureText(this.text);let r={width:0,height:0},a={width:0,height:0},o=0,l=0;if(this.prefix&&this.text&&(o=this.gap),this.suffix&&this.text&&(l=this.gap),typeof this.prefix=="object"?r={width:this.prefix.width,height:this.prefix.height}:typeof this.prefix=="string"&&(r=n.measureText(this.prefix)),typeof this.suffix=="object"?a={width:this.suffix.width,height:this.suffix.height}:typeof this.suffix=="string"&&(a=n.measureText(this.suffix)),t.width=(this.margin[3]+r.width+o+i.actualBoundingBoxLeft+i.actualBoundingBoxRight+a.width+l+this.margin[1])*this.scaleFactor,t.height=(this.margin[0]+i.actualBoundingBoxAscent+i.actualBoundingBoxDescent+this.margin[2])*this.scaleFactor,this.ctx=t.getContext("2d"),n.scale(this.scaleFactor,this.scaleFactor),n.font=this.font,n.fillStyle=this.backgroundStyle,n.fillRect(0,0,t.width,t.height),n.fillStyle=this.textStyle,this.setTextShadow(n,this.textShadow),typeof this.prefix=="object"){const d=new dr;let p;this.prefixImage?p=this.prefixImage:p=d.load(this.prefix.src);const g=r;typeof this.prefix=="object"&&((u=this.prefix)!=null&&u.hideShadow)&&(n.shadowColor="",n.shadowBlur=0,n.shadowOffsetX=0,n.shadowOffsetY=0),n.drawImage(p,this.margin[3],1,g.width,g.height??g.width)}else typeof this.prefix=="string"&&n.fillText(this.prefix,this.margin[3],this.margin[0]+i.actualBoundingBoxAscent);if(typeof this.suffix=="object"&&!this.suffixImage){const d=new dr;let p;this.suffixImage?p=this.suffixImage:p=d.load(this.suffix.src);const g=a;typeof this.suffix=="object"&&((h=this.suffix)!=null&&h.hideShadow)&&(n.shadowColor="",n.shadowBlur=0,n.shadowOffsetX=0,n.shadowOffsetY=0),n.drawImage(p,this.margin[3]+r.width+o+i.actualBoundingBoxRight+l,1,g.width,g.height??g.width)}else typeof this.suffix=="string"&&n.fillText(this.suffix,this.margin[3]+r.width+o+i.actualBoundingBoxRight+l,this.margin[0]+i.actualBoundingBoxAscent);this.setTextShadow(n,this.textShadow),n.fillText(this.text,this.margin[3]+r.width+o,this.margin[0]+i.actualBoundingBoxAscent);const c=new Km(t);c.minFilter=it,c.magFilter=it,this.textMaterial.map=c,this.textMaterial.needsUpdate=!0,this.scale.x=t.width/t.height*this.height,this.scale.y=this.height}setTextShadow(t,n){n.color&&(t.shadowColor=n.color),n.blur&&(t.shadowBlur=n.blur),n.offsetX&&(t.shadowOffsetX=n.offsetX),n.offsetY&&(t.shadowOffsetY=n.offsetY)}}const av="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgBAMAAABQs2O3AAAAIVBMVEUAAAB/j593iJptf5JneIpfb4BYZnVPXGpKVmNGUV1CTFgLTatUAAAAAXRSTlMAQObYZgAAAKFJREFUeNrtzbENwjAQBVArigTpuExAvEG4BQL2ABSYmiaMYG+AU1Jy3sBMCRLQIOunoeQ3V9zT/+orjRCRQhE1F8mSMLiLXBFoniDNAYEgZwkYpBj2ACzzbfIQTCFcTgAsYvRuKL7Wr+PPzm0RGN146Itg9QFH26MGZ5h3qMFYZjhRszWEJmrDG40aqpaIEFCkuzIY3rejVkNQdUTqn1/nAThNI5j05ZvKAAAAAElFTkSuQmCC";/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var bc=function(s){return URL.createObjectURL(new Blob([s],{type:"text/javascript"}))};try{URL.revokeObjectURL(bc(""))}catch{bc=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var qt=Uint8Array,On=Uint16Array,Na=Uint32Array,Tc=new qt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Cc=new qt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ov=new qt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Rc=function(s,e){for(var t=new On(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new Na(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return[t,i]},Pc=Rc(Tc,2),Lc=Pc[0],lv=Pc[1];Lc[28]=258,lv[258]=28;for(var cv=Rc(Cc,0),hv=cv[0],Oa=new On(32768),et=0;et<32768;++et){var Bn=(et&43690)>>>1|(et&21845)<<1;Bn=(Bn&52428)>>>2|(Bn&13107)<<2,Bn=(Bn&61680)>>>4|(Bn&3855)<<4,Oa[et]=((Bn&65280)>>>8|(Bn&255)<<8)>>>1}for(var vs=function(s,e,t){for(var n=s.length,i=0,r=new On(e);i<n;++i)++r[s[i]-1];var a=new On(e);for(i=0;i<e;++i)a[i]=a[i-1]+r[i-1]<<1;var o;if(t){o=new On(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],u=e-s[i],h=a[s[i]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)o[Oa[h]>>>l]=c}else for(o=new On(n),i=0;i<n;++i)s[i]&&(o[i]=Oa[a[s[i]-1]++]>>>15-s[i]);return o},_s=new qt(288),et=0;et<144;++et)_s[et]=8;for(var et=144;et<256;++et)_s[et]=9;for(var et=256;et<280;++et)_s[et]=7;for(var et=280;et<288;++et)_s[et]=8;for(var Ic=new qt(32),et=0;et<32;++et)Ic[et]=5;var uv=vs(_s,9,1),dv=vs(Ic,5,1),Ba=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},an=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},ka=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},fv=function(s){return(s/8|0)+(s&7&&1)},pv=function(s,e,t){(t==null||t>s.length)&&(t=s.length);var n=new(s instanceof On?On:s instanceof Na?Na:qt)(t-e);return n.set(s.subarray(e,t)),n},mv=function(s,e,t){var n=s.length;if(!n||t&&!t.l&&n<5)return e||new qt(0);var i=!e||t,r=!t||t.i;t||(t={}),e||(e=new qt(n*3));var a=function(le){var I=e.length;if(le>I){var Se=new qt(Math.max(I*2,le));Se.set(e),e=Se}},o=t.f||0,l=t.p||0,c=t.b||0,u=t.l,h=t.d,d=t.m,p=t.n,g=n*8;do{if(!u){t.f=o=an(s,l,1);var v=an(s,l+1,3);if(l+=3,v)if(v==1)u=uv,h=dv,d=9,p=5;else if(v==2){var _=an(s,l,31)+257,w=an(s,l+10,15)+4,M=_+an(s,l+5,31)+1;l+=14;for(var b=new qt(M),P=new qt(19),F=0;F<w;++F)P[ov[F]]=an(s,l+F*3,7);l+=w*3;for(var A=Ba(P),T=(1<<A)-1,Y=vs(P,A,1),F=0;F<M;){var Z=Y[an(s,l,T)];l+=Z&15;var m=Z>>>4;if(m<16)b[F++]=m;else{var D=0,O=0;for(m==16?(O=3+an(s,l,3),l+=2,D=b[F-1]):m==17?(O=3+an(s,l,7),l+=3):m==18&&(O=11+an(s,l,127),l+=7);O--;)b[F++]=D}}var H=b.subarray(0,_),J=b.subarray(_);d=Ba(H),p=Ba(J),u=vs(H,d,1),h=vs(J,p,1)}else throw"invalid block type";else{var m=fv(l)+4,f=s[m-4]|s[m-3]<<8,x=m+f;if(x>n){if(r)throw"unexpected EOF";break}i&&a(c+f),e.set(s.subarray(m,x),c),t.b=c+=f,t.p=l=x*8;continue}if(l>g){if(r)throw"unexpected EOF";break}}i&&a(c+131072);for(var j=(1<<d)-1,X=(1<<p)-1,$=l;;$=l){var D=u[ka(s,l)&j],ee=D>>>4;if(l+=D&15,l>g){if(r)throw"unexpected EOF";break}if(!D)throw"invalid length/literal";if(ee<256)e[c++]=ee;else if(ee==256){$=l,u=null;break}else{var pe=ee-254;if(ee>264){var F=ee-257,oe=Tc[F];pe=an(s,l,(1<<oe)-1)+Lc[F],l+=oe}var z=h[ka(s,l)&X],K=z>>>4;if(!z)throw"invalid distance";l+=z&15;var J=hv[K];if(K>3){var oe=Cc[K];J+=ka(s,l)&(1<<oe)-1,l+=oe}if(l>g){if(r)throw"unexpected EOF";break}i&&a(c+131072);for(var se=c+pe;c<se;c+=4)e[c]=e[c-J],e[c+1]=e[c+1-J],e[c+2]=e[c+2-J],e[c+3]=e[c+3-J];c=se}}t.l=u,t.p=$,t.b=c,u&&(o=1,t.m=d,t.d=h,t.n=p)}while(!o);return c==e.length?e:pv(e,0,c)},gv=new qt(0),vv=function(s){if((s[0]&15)!=8||s[0]>>>4>7||(s[0]<<8|s[1])%31)throw"invalid zlib data";if(s[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function _v(s,e){return mv((vv(s),s.subarray(2,-4)),e)}var xv=typeof TextDecoder<"u"&&new TextDecoder,Av=0;try{xv.decode(gv,{stream:!0}),Av=1}catch{}function Dc(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,a=Math.floor((i+r)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?r=a:i=a,a=Math.floor((i+r)/2);return a}function yv(s,e,t,n){const i=[],r=[],a=[];i[0]=1;for(let o=1;o<=t;++o){r[o]=e-n[s+1-o],a[o]=n[s+o]-e;let l=0;for(let c=0;c<o;++c){const u=a[c+1],h=r[o-c],d=i[c]/(u+h);i[c]=l+u*d,l=h*d}i[o]=l}return i}function Mv(s,e,t,n){const i=Dc(s,n,e),r=yv(i,n,s,e),a=new Ve(0,0,0,0);for(let o=0;o<=s;++o){const l=t[i-s+o],c=r[o],u=l.w*c;a.x+=l.x*u,a.y+=l.y*u,a.z+=l.z*u,a.w+=l.w*c}return a}function Ev(s,e,t,n,i){const r=[];for(let h=0;h<=t;++h)r[h]=0;const a=[];for(let h=0;h<=n;++h)a[h]=r.slice(0);const o=[];for(let h=0;h<=t;++h)o[h]=r.slice(0);o[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let h=1;h<=t;++h){l[h]=e-i[s+1-h],c[h]=i[s+h]-e;let d=0;for(let p=0;p<h;++p){const g=c[p+1],v=l[h-p];o[h][p]=g+v;const m=o[p][h-1]/o[h][p];o[p][h]=d+g*m,d=v*m}o[h][h]=d}for(let h=0;h<=t;++h)a[0][h]=o[h][t];for(let h=0;h<=t;++h){let d=0,p=1;const g=[];for(let v=0;v<=t;++v)g[v]=r.slice(0);g[0][0]=1;for(let v=1;v<=n;++v){let m=0;const f=h-v,x=t-v;h>=v&&(g[p][0]=g[d][0]/o[x+1][f],m=g[p][0]*o[f][x]);const _=f>=-1?1:-f,w=h-1<=x?v-1:t-h;for(let b=_;b<=w;++b)g[p][b]=(g[d][b]-g[d][b-1])/o[x+1][f+b],m+=g[p][b]*o[f+b][x];h<=x&&(g[p][v]=-g[d][v-1]/o[x+1][h],m+=g[p][v]*o[h][x]),a[v][h]=m;const M=d;d=p,p=M}}let u=t;for(let h=1;h<=n;++h){for(let d=0;d<=t;++d)a[h][d]*=u;u*=t-h}return a}function wv(s,e,t,n,i){const r=i<s?i:s,a=[],o=Dc(s,n,e),l=Ev(o,n,s,r,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),d=h.w;h.x*=d,h.y*=d,h.z*=d,c[u]=h}for(let u=0;u<=r;++u){const h=c[o-s].clone().multiplyScalar(l[u][0]);for(let d=1;d<=s;++d)h.add(c[o-s+d].clone().multiplyScalar(l[u][d]));a[u]=h}for(let u=r+1;u<=i+1;++u)a[u]=new Ve(0,0,0);return a}function Sv(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function bv(s){const e=s.length,t=[],n=[];for(let r=0;r<e;++r){const a=s[r];t[r]=new C(a.x,a.y,a.z),n[r]=a.w}const i=[];for(let r=0;r<e;++r){const a=t[r].clone();for(let o=1;o<=r;++o)a.sub(i[r-o].clone().multiplyScalar(Sv(r,o)*n[o]));i[r]=a.divideScalar(n[0])}return i}function Tv(s,e,t,n,i){const r=wv(s,e,t,n,i);return bv(r)}class Cv extends Zm{constructor(e,t,n,i,r){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||this.knots.length-1;for(let a=0;a<n.length;++a){const o=n[a];this.controlPoints[a]=new Ve(o.x,o.y,o.z,o.w)}}getPoint(e,t=new C){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=Mv(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new C){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=Tv(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}}let Ue,lt,Nt;class Rv extends Vi{constructor(e){super(e)}load(e,t,n,i){const r=this,a=r.path===""?_g.extractUrlBase(e):r.path,o=new uc(this.manager);o.setPath(r.path),o.setResponseType("arraybuffer"),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){if(Fv(e))Ue=new Uv().parse(e);else{const i=kc(e);if(!Nv(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Nc(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Nc(i));Ue=new Dv().parse(i)}const n=new dg(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Pv(n,this.manager).parse(Ue)}}class Pv{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){lt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new Lv().parse(i);return this.parseScene(i,r,n),Nt}parseConnections(){const e=new Map;return"Connections"in Ue&&Ue.Connections.connections.forEach(function(n){const i=n[0],r=n[1],a=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const o={ID:r,relationship:a};e.get(i).parents.push(o),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:a};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Ue.Objects){const n=Ue.Objects.Video;for(const i in n){const r=n[i],a=parseInt(i);if(e[a]=r.RelativeFilename||r.Filename,"Content"in r){const o=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(o||l){const c=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in Ue.Objects){const n=Ue.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,a=i!==void 0?i.value:0,o=r!==void 0?r.value:0;if(n.wrapS=a===0?$i:kt,n.wrapT=o===0?$i:kt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const i=this.textureLoader.path,r=lt.get(e.id).children;r!==void 0&&r.length>0&&t[r[0].ID]!==void 0&&(n=t[r[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let a;const o=e.FileName.slice(-3).toLowerCase();if(o==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),a=new st):(l.setPath(this.textureLoader.path),a=l.load(n))}else o==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),a=new st):a=this.textureLoader.load(n);return this.textureLoader.setPath(i),a}parseMaterials(e){const t=new Map;if("Material"in Ue.Objects){const n=Ue.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!lt.has(n))return null;const a=this.parseParameters(e,t,n);let o;switch(r.toLowerCase()){case"phong":o=new lr;break;case"lambert":o=new Jm;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),o=new lr;break}return o.setValues(a),o.name=i,o}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new Te().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new Te().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new Te().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new Te().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new Te().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new Te().fromArray(e.SpecularColor.value).convertSRGBToLinear());const r=this;return lt.get(n).children.forEach(function(a){const o=a.relationship;switch(o){case"Bump":i.bumpMap=r.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,a.ID),i.map!==void 0&&(i.map.colorSpace=we);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,a.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,a.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=we);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,a.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,a.ID),i.envMap!==void 0&&(i.envMap.mapping=Zi,i.envMap.colorSpace=we);break;case"SpecularColor":i.specularMap=r.getTexture(t,a.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=we);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,a.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),i}getTexture(e,t){return"LayeredTexture"in Ue.Objects&&t in Ue.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=lt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Ue.Objects){const n=Ue.Objects.Deformer;for(const i in n){const r=n[i],a=lt.get(parseInt(i));if(r.attrType==="Skin"){const o=this.parseSkeleton(a,n);o.ID=i,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,e[i]=o}else if(r.attrType==="BlendShape"){const o={id:i};o.rawTargets=this.parseMorphTargets(a,n),o.id=i,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const a={ID:i.ID,indices:[],weights:[],transformLink:new Ae().fromArray(r.TransformLink.a)};"Indexes"in r&&(a.indices=r.Indexes.a,a.weights=r.Weights.a),n.push(a)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],a=t[r.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=lt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){Nt=new Ze;const i=this.parseModels(e.skeletons,t,n),r=Ue.Objects.Model,a=this;i.forEach(function(l){const c=r[l.ID];a.setLookAtProperties(l,c),lt.get(l.ID).parents.forEach(function(h){const d=i.get(h.ID);d!==void 0&&d.add(l)}),l.parent===null&&Nt.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.createAmbientLight(),Nt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Oc(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new Iv().parse();Nt.children.length===1&&Nt.children[0].isGroup&&(Nt.children[0].animations=o,Nt=Nt.children[0]),Nt.animations=o}parseModels(e,t,n){const i=new Map,r=Ue.Objects.Model;for(const a in r){const o=parseInt(a),l=r[a],c=lt.get(o);let u=this.buildSkeleton(c,e,o,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new fa;break;case"Null":default:u=new Ze;break}u.name=l.attrName?He.sanitizeNodeName(l.attrName):"",u.ID=o}this.getTransformData(u,l),i.set(o,u)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(a){for(const o in t){const l=t[o];l.rawBones.forEach(function(c,u){if(c.ID===a.ID){const h=r;r=new fa,r.matrixWorld.copy(c.transformLink),r.name=i?He.sanitizeNodeName(i):"",r.ID=n,l.bones[u]=r,h!==null&&r.add(h)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=Ue.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new Je;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let a=1e3;n.FarPlane!==void 0&&(a=n.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(o=n.AspectWidth.value,l=n.AspectHeight.value);const c=o/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Pt(u,c,r,a),h!==null&&t.setFocalLength(h);break;case 1:t=new js(-o/2,o/2,l/2,-l/2,r,a);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new Je;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=Ue.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new Je;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new Te().fromArray(n.Color.value).convertSRGBToLinear());let a=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(a=0);let o=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?o=0:o=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new Ea(r,a,o,l);break;case 1:t=new vg(r,a);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Ye.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=Ye.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new pg(r,a,o,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Ea(r,a);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,a=null;const o=[];return e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&o.push(n.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new lr({color:13421772}),o.push(a)),"color"in r.attributes&&o.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(i=new Qm(r,a),i.normalizeSkinWeights()):i=new ze(r,a),i}createCurve(e,t){const n=e.children.reduce(function(r,a){return t.has(a.ID)&&(r=t.get(a.ID)),r},null),i=new ki({color:3342591,linewidth:1});return new nc(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Bc(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&lt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=Ue.Objects.Model[i.ID];if("Lcl_Translation"in r){const a=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),Nt.add(e.target)):e.lookAt(new C().fromArray(a))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const a=e[r];lt.get(parseInt(a.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;lt.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new pa(a.bones),i[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Ue.Objects){const t=Ue.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new Ae().fromArray(r.Matrix.a)}):e[i.Node]=new Ae().fromArray(i.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Ue&&"AmbientColor"in Ue.GlobalSettings){const e=Ue.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new Te(t,n,i).convertSRGBToLinear();Nt.add(new mc(r,1))}}}}class Lv{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Ue.Objects){const n=Ue.Objects.Geometry;for(const i in n){const r=lt.get(parseInt(i)),a=this.parseGeometry(r,n[i],e);t.set(parseInt(i),a)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],a=e.parents.map(function(h){return Ue.Objects.Model[h.ID]});if(a.length===0)return;const o=e.children.reduce(function(h,d){return i[d.ID]!==void 0&&(h=i[d.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&r.push(n.morphTargets[h.ID])});const l=a[0],c={};"RotationOrder"in l&&(c.eulerOrder=Bc(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=Oc(c);return this.genGeometry(t,o,r,u)}genGeometry(e,t,n,i){const r=new At;e.attrName&&(r.name=e.attrName);const a=this.parseGeoNode(e,t),o=this.genBuffers(a),l=new nt(o.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),o.colors.length>0&&r.setAttribute("color",new nt(o.colors,3)),t&&(r.setAttribute("skinIndex",new ea(o.weightsIndices,4)),r.setAttribute("skinWeight",new nt(o.vertexWeights,4)),r.FBX_Deformer=t),o.normal.length>0){const c=new Oe().getNormalMatrix(i),u=new nt(o.normal,3);u.applyNormalMatrix(c),r.setAttribute("normal",u)}if(o.uvs.forEach(function(c,u){const h=u===0?"uv":`uv${u}`;r.setAttribute(h,new nt(o.uvs[u],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=o.materialIndex[0],u=0;if(o.materialIndex.forEach(function(h,d){h!==c&&(r.addGroup(u,d-u,c),c=h,u=d)}),r.groups.length>0){const h=r.groups[r.groups.length-1],d=h.start+h.count;d!==o.materialIndex.length&&r.addGroup(d,o.materialIndex.length-d,c)}r.groups.length===0&&r.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(a,o){n.weightTable[a]===void 0&&(n.weightTable[a]=[]),n.weightTable[a].push({id:r,weight:i.weights[o]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,a=[],o=[],l=[],c=[],u=[],h=[];const d=this;return e.vertexIndices.forEach(function(p,g){let v,m=!1;p<0&&(p=p^-1,m=!0);let f=[],x=[];if(a.push(p*3,p*3+1,p*3+2),e.color){const _=vr(g,n,p,e.color);l.push(_[0],_[1],_[2])}if(e.skeleton){if(e.weightTable[p]!==void 0&&e.weightTable[p].forEach(function(_){x.push(_.weight),f.push(_.id)}),x.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const _=[0,0,0,0],w=[0,0,0,0];x.forEach(function(M,b){let P=M,F=f[b];w.forEach(function(A,T,Y){if(P>A){Y[T]=P,P=A;const Z=_[T];_[T]=F,F=Z}})}),f=_,x=w}for(;x.length<4;)x.push(0),f.push(0);for(let _=0;_<4;++_)u.push(x[_]),h.push(f[_])}if(e.normal){const _=vr(g,n,p,e.normal);o.push(_[0],_[1],_[2])}e.material&&e.material.mappingType!=="AllSame"&&(v=vr(g,n,p,e.material)[0],v<0&&(d.negativeMaterialIndices=!0,v=0)),e.uv&&e.uv.forEach(function(_,w){const M=vr(g,n,p,_);c[w]===void 0&&(c[w]=[]),c[w].push(M[0]),c[w].push(M[1])}),i++,m&&(i>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),d.genFace(t,e,a,v,o,l,c,u,h,i),n++,i=0,a=[],o=[],l=[],c=[],u=[],h=[])}),t}genFace(e,t,n,i,r,a,o,l,c,u){for(let h=2;h<u;h++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(h-1)*3]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+2]]),e.vertex.push(t.vertexPositions[n[h*3]]),e.vertex.push(t.vertexPositions[n[h*3+1]]),e.vertex.push(t.vertexPositions[n[h*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(h-1)*4]),e.vertexWeights.push(l[(h-1)*4+1]),e.vertexWeights.push(l[(h-1)*4+2]),e.vertexWeights.push(l[(h-1)*4+3]),e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(h-1)*4]),e.weightsIndices.push(c[(h-1)*4+1]),e.weightsIndices.push(c[(h-1)*4+2]),e.weightsIndices.push(c[(h-1)*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3])),t.color&&(e.colors.push(a[0]),e.colors.push(a[1]),e.colors.push(a[2]),e.colors.push(a[(h-1)*3]),e.colors.push(a[(h-1)*3+1]),e.colors.push(a[(h-1)*3+2]),e.colors.push(a[h*3]),e.colors.push(a[h*3+1]),e.colors.push(a[h*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[0]),e.normal.push(r[1]),e.normal.push(r[2]),e.normal.push(r[(h-1)*3]),e.normal.push(r[(h-1)*3+1]),e.normal.push(r[(h-1)*3+2]),e.normal.push(r[h*3]),e.normal.push(r[h*3+1]),e.normal.push(r[h*3+2])),t.uv&&t.uv.forEach(function(d,p){e.uvs[p]===void 0&&(e.uvs[p]=[]),e.uvs[p].push(o[p][0]),e.uvs[p].push(o[p][1]),e.uvs[p].push(o[p][(h-1)*2]),e.uvs[p].push(o[p][(h-1)*2+1]),e.uvs[p].push(o[p][h*2]),e.uvs[p].push(o[p][h*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(a){a.rawTargets.forEach(function(o){const l=Ue.Objects.Geometry[o.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,o.name)})})}genMorphGeometry(e,t,n,i,r){const a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],o=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let g=0;g<l.length;g++){const v=l[g]*3;u[v]=o[g*3],u[v+1]=o[g*3+1],u[v+2]=o[g*3+2]}const h={vertexIndices:a,vertexPositions:u},d=this.genBuffers(h),p=new nt(d.vertex,3);p.name=r||n.attrName,p.applyMatrix4(i),e.morphAttributes.position.push(p)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let a=0,o=new Te;a<i.length;a+=4)o.fromArray(i,a).convertSRGBToLinear().toArray(i,a);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let a=0;a<i.length;++a)r.push(a);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new At;const n=t-1,i=e.KnotVector.a,r=[],a=e.Points.a;for(let h=0,d=a.length;h<d;h+=4)r.push(new Ve().fromArray(a,h));let o,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){o=n,l=i.length-1-o;for(let h=0;h<n;++h)r.push(r[h])}const u=new Cv(n,i,r,o,l).getPoints(r.length*12);return new At().setFromPoints(u)}}class Iv{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(Ue.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Ue.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=Ue.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(Ov),values:t[n].KeyValueFloat.a},r=lt.get(i.id);if(r!==void 0){const a=r.parents[0].ID,o=r.parents[0].relationship;o.match(/X/)?e.get(a).curves.x=i:o.match(/Y/)?e.get(a).curves.y=i:o.match(/Z/)?e.get(a).curves.z=i:o.match(/DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=i)}}}parseAnimationLayers(e){const t=Ue.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],a=lt.get(parseInt(i));a!==void 0&&(a.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[c]===void 0){const h=lt.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(h!==void 0){const d=Ue.Objects.Model[h.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const p={modelName:d.attrName?He.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Nt.traverse(function(g){g.ID===d.id&&(p.transform=g.matrix,g.userData.transformData&&(p.eulerOrder=g.userData.transformData.eulerOrder))}),p.transform||(p.transform=new Ae),"PreRotation"in d&&(p.preRotation=d.PreRotation.value),"PostRotation"in d&&(p.postRotation=d.PostRotation.value),r[c]=p}}r[c]&&(r[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[c]===void 0){const h=lt.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID,d=lt.get(h).parents[0].ID,p=lt.get(d).parents[0].ID,g=lt.get(p).parents[0].ID,v=Ue.Objects.Model[g],m={modelName:v.attrName?He.sanitizeNodeName(v.attrName):"",morphName:Ue.Objects.Deformer[h].attrName};r[c]=m}r[c][u.attr]=u}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=Ue.Objects.AnimationStack,n={};for(const i in t){const r=lt.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:a}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new rg(e.name,-1,t)}generateTracks(e){const t=[];let n=new C,i=new Yt,r=new C;if(e.transform&&e.transform.decompose(n,i,r),n=n.toArray(),i=new Et().setFromQuaternion(i,e.eulerOrder).toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");a!==void 0&&t.push(a)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const a=this.generateRotationTrack(e.modelName,e.R.curves,i,e.preRotation,e.postRotation,e.eulerOrder);a!==void 0&&t.push(a)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");a!==void 0&&t.push(a)}if(e.DeformPercent!==void 0){const a=this.generateMorphTrack(e);a!==void 0&&t.push(a)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(r,t,n);return new ps(e+"."+i,r,a)}generateRotationTrack(e,t,n,i,r,a){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(Ye.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(Ye.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(Ye.degToRad));const o=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(o,t,n);i!==void 0&&(i=i.map(Ye.degToRad),i.push(a),i=new Et().fromArray(i),i=new Yt().setFromEuler(i)),r!==void 0&&(r=r.map(Ye.degToRad),r.push(a),r=new Et().fromArray(r),r=new Yt().setFromEuler(r).invert());const c=new Yt,u=new Et,h=[];for(let d=0;d<l.length;d+=3)u.set(l[d],l[d+1],l[d+2],a),c.setFromEuler(u),i!==void 0&&c.premultiply(i),r!==void 0&&c.multiply(r),c.toArray(h,d/3*4);return new Hi(e+".quaternion",o,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=Nt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new fs(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const a=t[r];a!==i&&(t[n]=a,i=a,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let a=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(a=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),a!==-1){const u=t.x.values[a];r.push(u),i[0]=u}else r.push(i[0]);if(o!==-1){const u=t.y.values[o];r.push(u),i[1]=u}else r.push(i[1]);if(l!==-1){const u=t.z.values[l];r.push(u),i[2]=u}else r.push(i[2])}),r}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],i=e.values[t]-n,r=Math.abs(i);if(r>=180){const a=r/180,o=i/a;let l=n+o;const c=e.times[t-1],h=(e.times[t]-c)/a;let d=c+h;const p=[],g=[];for(;d<e.times[t];)p.push(d),d+=h,g.push(l),l+=o;e.times=zc(e.times,t,p),e.values=zc(e.values,t,g)}}}}class Dv{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Fc,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const a=i.match(/^[\s\t]*;/),o=i.match(/^[\s\t]*$/);if(a||o)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++r]):u?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},a=this.parseNodeAttr(i),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in o?(n==="PoseNode"?o.PoseNode.push(r):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==""&&(o[n][a.id]=r)):typeof a.id=="number"?(o[n]={},o[n][a.id]=r):n!=="Properties70"&&(n==="PoseNode"?o[n]=[r]:o[n]=r),typeof a.id=="number"&&(r.id=a.id),a.name!==""&&(r.attrName=a.name),a.type!==""&&(r.attrType=a.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=r.split(",").slice(3);h=h.map(function(d){return d.trim().replace(/^"/,"")}),i="connections",r=[c,u],kv(r,h),a[i]===void 0&&(a[i]=[])}i==="Node"&&(a.id=r),i in a&&Array.isArray(a[i])?a[i].push(r):i!=="a"?a[i]=r:a.a=r,this.setCurrentProp(a,i),i==="a"&&r.slice(-1)!==","&&(a.a=Ha(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Ha(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],a=i[1],o=i[2],l=i[3];let c=i[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Ha(c);break}this.getPrevNode()[r]={type:a,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class Uv{parse(e){const t=new Uc(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new Fc;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const a=e.getUint8(),o=e.getString(a);if(i===0)return null;const l=[];for(let d=0;d<r;d++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(o,n,d)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),o!==""&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,a){a!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const a=n.propertyList[2],o=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:a,flag:o,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),a=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const o=_v(new Uint8Array(e.getArrayBuffer(a))),l=new Uc(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Uc{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class Fc{add(e,t){this[e]=t}}function Fv(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===kc(s,0,e.length)}function Nv(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function Nc(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function Ov(s){return s/46186158e3}const Bv=[];function vr(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,a=r+n.dataSize;return zv(Bv,n.buffer,r,a)}const za=new Et,Xi=new C;function Oc(s){const e=new Ae,t=new Ae,n=new Ae,i=new Ae,r=new Ae,a=new Ae,o=new Ae,l=new Ae,c=new Ae,u=new Ae,h=new Ae,d=new Ae,p=s.inheritType?s.inheritType:0;if(s.translation&&e.setPosition(Xi.fromArray(s.translation)),s.preRotation){const T=s.preRotation.map(Ye.degToRad);T.push(s.eulerOrder||Et.DEFAULT_ORDER),t.makeRotationFromEuler(za.fromArray(T))}if(s.rotation){const T=s.rotation.map(Ye.degToRad);T.push(s.eulerOrder||Et.DEFAULT_ORDER),n.makeRotationFromEuler(za.fromArray(T))}if(s.postRotation){const T=s.postRotation.map(Ye.degToRad);T.push(s.eulerOrder||Et.DEFAULT_ORDER),i.makeRotationFromEuler(za.fromArray(T)),i.invert()}s.scale&&r.scale(Xi.fromArray(s.scale)),s.scalingOffset&&o.setPosition(Xi.fromArray(s.scalingOffset)),s.scalingPivot&&a.setPosition(Xi.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(Xi.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(Xi.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(h.copy(s.parentMatrix),u.copy(s.parentMatrixWorld));const g=t.clone().multiply(n).multiply(i),v=new Ae;v.extractRotation(u);const m=new Ae;m.copyPosition(u);const f=m.clone().invert().multiply(u),x=v.clone().invert().multiply(f),_=r,w=new Ae;if(p===0)w.copy(v).multiply(g).multiply(x).multiply(_);else if(p===1)w.copy(v).multiply(x).multiply(g).multiply(_);else{const Y=new Ae().scale(new C().setFromMatrixScale(h)).clone().invert(),Z=x.clone().multiply(Y);w.copy(v).multiply(g).multiply(Z).multiply(_)}const M=c.clone().invert(),b=a.clone().invert();let P=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(M).multiply(o).multiply(a).multiply(r).multiply(b);const F=new Ae().copyPosition(P),A=u.clone().multiply(F);return d.copyPosition(A),P=d.clone().multiply(w),P.premultiply(u.invert()),P}function Bc(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function Ha(s){return s.split(",").map(function(t){return parseFloat(t)})}function kc(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function kv(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function zv(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}function zc(s,e,t){return s.slice(0,e).concat(t).concat(s.slice(e))}const Hv=/^[og]\s*(.+)?/,Gv=/^mtllib /,Vv=/^usemtl /,Wv=/^usemap /,Hc=/\s+/,Gc=new C,Ga=new C,Vc=new C,Wc=new C,Kt=new C,_r=new Te;function Xv(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,r=this.object.geometry.normals;Gc.fromArray(i,e),Ga.fromArray(i,t),Vc.fromArray(i,n),Kt.subVectors(Vc,Ga),Wc.subVectors(Gc,Ga),Kt.cross(Wc),Kt.normalize(),r.push(Kt.x,Kt.y,Kt.z),r.push(Kt.x,Kt.y,Kt.z),r.push(Kt.x,Kt.y,Kt.z)},addColor:function(e,t,n){const i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,a,o,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),d=this.parseVertexIndex(t,u),p=this.parseVertexIndex(n,u);if(this.addVertex(h,d,p),this.addColor(h,d,p),o!==void 0&&o!==""){const g=this.normals.length;h=this.parseNormalIndex(o,g),d=this.parseNormalIndex(l,g),p=this.parseNormalIndex(c,g),this.addNormal(h,d,p)}else this.addFaceNormal(h,d,p);if(i!==void 0&&i!==""){const g=this.uvs.length;h=this.parseUVIndex(i,g),d=this.parseUVIndex(r,g),p=this.parseUVIndex(a,g),this.addUV(h,d,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],i))}};return s.startObject("",!1),s}class Yv extends Vi{constructor(e){super(e),this.materials=null}load(e,t,n,i){const r=this,a=new uc(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Xv;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let o=0,l=n.length;o<l;o++){const c=n[o].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const h=c.split(Hc);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(_r.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),t.colors.push(_r.r,_r.g,_r.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const d=c.slice(1).trim().split(Hc),p=[];for(let v=0,m=d.length;v<m;v++){const f=d[v];if(f.length>0){const x=f.split("/");p.push(x)}}const g=p[0];for(let v=1,m=p.length-1;v<m;v++){const f=p[v],x=p[v+1];t.addFace(g[0],f[0],x[0],g[1],f[1],x[1],g[2],f[2],x[2])}}else if(u==="l"){const h=c.substring(1).trim().split(" ");let d=[];const p=[];if(c.indexOf("/")===-1)d=h;else for(let g=0,v=h.length;g<v;g++){const m=h[g].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&p.push(m[1])}t.addLineGeometry(d,p)}else if(u==="p"){const d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((i=Hv.exec(c))!==null){const h=(" "+i[0].slice(1).trim()).slice(1);t.startObject(h)}else if(Vv.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(Gv.test(c))t.materialLibraries.push(c.substring(7).trim());else if(Wv.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=c.split(" "),i.length>1){const d=i[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new Ze;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){const c=t.objects[o],u=c.geometry,h=c.materials,d=u.type==="Line",p=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const v=new At;v.setAttribute("position",new nt(u.vertices,3)),u.normals.length>0&&v.setAttribute("normal",new nt(u.normals,3)),u.colors.length>0&&(g=!0,v.setAttribute("color",new nt(u.colors,3))),u.hasUVIndices===!0&&v.setAttribute("uv",new nt(u.uvs,2));const m=[];for(let x=0,_=h.length;x<_;x++){const w=h[x],M=w.name+"_"+w.smooth+"_"+g;let b=t.materials[M];if(this.materials!==null){if(b=this.materials.create(w.name),d&&b&&!(b instanceof ki)){const P=new ki;sn.prototype.copy.call(P,b),P.color.copy(b.color),b=P}else if(p&&b&&!(b instanceof ds)){const P=new ds({size:10,sizeAttenuation:!1});sn.prototype.copy.call(P,b),P.color.copy(b.color),P.map=b.map,b=P}}b===void 0&&(d?b=new ki:p?b=new ds({size:1,sizeAttenuation:!1}):b=new lr,b.name=w.name,b.flatShading=!w.smooth,b.vertexColors=g,t.materials[M]=b),m.push(b)}let f;if(m.length>1){for(let x=0,_=h.length;x<_;x++){const w=h[x];v.addGroup(w.groupStart,w.groupCount,x)}d?f=new ga(v,m):p?f=new _a(v,m):f=new ze(v,m)}else d?f=new ga(v,m[0]):p?f=new _a(v,m[0]):f=new ze(v,m[0]);f.name=c.name,r.add(f)}else if(t.vertices.length>0){const o=new ds({size:1,sizeAttenuation:!1}),l=new At;l.setAttribute("position",new nt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new nt(t.colors,3)),o.vertexColors=!0);const c=new _a(l,o);r.add(c)}return r}}async function Va(s){const e=document.createElement("img");return new Promise((t,n)=>{e.onload=()=>t(e),e.onerror=n,e.crossOrigin="anonymous",typeof s=="string"?e.src=s:(s.crossOrigin!==void 0&&(e.crossOrigin=s.crossOrigin),s.referrerPolicy!==void 0&&(e.referrerPolicy=s.referrerPolicy),e.src=s.src)})}async function Yi(s){return s?await(await fetch(s)).json():void 0}async function Wa(s){const e=s.endsWith(".fbx")?Rv:Yv;return await new e().loadAsync(s)}async function Qv(s){const t=await(await fetch(s)).json();if(!t||!t["minecraft:geometry"])throw new Error("Invalid Geometry File");return await t["minecraft:geometry"][0]}async function jv(s,e){let t;t=await(await fetch(s)).text();const n=t.split(`
`),i={contexts:{},functions:""};let r="",a="",o="";return n.forEach(l=>{if(r=l.replaceAll("c.","context."),r=r.replaceAll("q.","query."),r.startsWith("lunar.")){let c=r;c=c.replace(":",""),c=c.replaceAll("a.",""),c=c.replace("(",","),c=c.replace(/^'|'$/g,""),c=c.replace(")",""),c=c.replace("|-","");let u=c.split(",").map(h=>h.trim());u=u.map(h=>`'${h}'`),c=u.join(", "),o=`function(${c}, {});`,r="";return}if(o.includes("function")){if((r.includes("return")||a.includes("return"))&&r.endsWith(";")){const u=o.replace("{}",`{${a+r}}`);i.functions+=u,o="",a="";return}a+=r;return}if(!r.includes("if ")&&!r.includes("{")&&!r.includes("}")){if(r.includes("context.")&&a===""&&r.endsWith(";")){const[c,u]=r.split(" = ");u&&(i.contexts[c.replace("context.","").trim()]=`return ${u}`),a="";return}if(r.endsWith(";")&&a!==""){const c=a+r,[u,h]=c.split(" = ");i.contexts[u.replace("context.","").trim()]=`return ${h}`,h&&(c.split(" = "),i.contexts[u.replace("context.","")]=`return ${h}`),a="";return}a+=r;return}r=""}),i}class qv extends Ze{constructor(t){super();k(this,"player");k(this,"textured");k(this,"leftWing");k(this,"rightWing");k(this,"hasCape");this.player=t,this.visible=!1,this.textured=new gr({renderAnimations:t.renderAnimations}),this.hasCape=t.cape.visible;const n=new ot(12,22,4);Ta(n,22,0,10,20,2);const i=new ze(n);i.position.x=-5,i.position.y=-5,i.position.z=-4,this.leftWing=new Ze,this.leftWing.add(i),this.add(this.leftWing);const r=new ot(12,22,4);Ta(r,22,0,10,20,2);const a=new ze(r);a.scale.x=-1,a.position.x=5,a.position.y=-5,a.position.z=-4,this.rightWing=new Ze,this.rightWing.add(a),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.leftWing.position.y=0,this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.position.z=this.leftWing.position.z,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}async load(t,n){if(!Nn(t)){await Va(t).then(i=>this.load(i,n));return}this.textured.load(t,n),this.textured.apply(this),this.visible=!0}update(){if(!this.player.skin.state.isFlying){this.hasCape&&(this.player.cape.visible=!0),this.visible=!1;return}this.visible||(this.player.cape.visible&&(this.hasCape=!0),this.player.cape.visible=!1,this.load(av),this.visible=!0),this.textured.update()}}class xs{constructor(e){this.player=e}update(){}}class Kv extends xs{constructor(e){super(e)}update(){this.player.skin.body.rotation.x=.5,this.player.skin.rightArm.rotation.x=.4,this.player.skin.leftArm.rotation.x=.4,this.player.skin.leftArm.position.y=-5.2,this.player.skin.rightArm.position.y=-5.2,this.player.skin.rightLeg.position.z=-4,this.player.skin.leftLeg.position.z=-4,this.player.skin.head.position.y=.2,this.player.skin.body.position.y=-6-2.8,this.player.skin.body.position.z=-2.5}}class Zv extends xs{constructor(e){super(e)}update(){const e=this.player.skin.getAgeInTicks()*.4;this.player.skin.rotation.x=Math.PI/2,this.player.skin.position.y=-5,this.player.skin.leftLeg.rotation.x=Math.cos(e)*.1,this.player.skin.rightLeg.rotation.x=Math.cos(e+Math.PI)*.1,this.player.skin.leftArm.rotation.x=Math.cos(e+Math.PI)*.1,this.player.skin.rightArm.rotation.x=Math.cos(e)*.1,this.player.skin.head.rotation.x=-Math.PI/4,this.player.elytra.resetJoints();const t=Math.pow(.9,e),n=.6,i=.6981317,r=-Math.PI/4;this.player.elytra.leftWing.position.x=8,this.player.elytra.leftWing.position.y=2,this.player.elytra.leftWing.position.z=2,this.player.elytra.leftWing.rotation.x=.34906584+t*(n*.34906584+(1-n)*i-.34906584);const a=Math.PI/2;this.player.elytra.leftWing.rotation.z=a+t*(n*-a+(1-n)*r-a),this.player.elytra.updateRightWing()}}class $v extends xs{constructor(t){super(t);k(this,"swingTime",0);k(this,"swingDuration",30);k(this,"attackTime",0);k(this,"oAttackTime",0)}update(){this.player.skin.state.isPunching?(++this.swingTime,this.swingTime>=this.swingDuration&&(this.swingTime=0,this.player.skin.state.isPunching=!1)):this.swingTime=0,this.attackTime=this.swingTime/this.swingDuration,this.attackTime===0&&(this.attackTime=1);const t=this.player.skin.getAgeInTicks();this.oAttackTime=this.attackTime;let n=this.attackTime-this.oAttackTime;n<0&&n++,this.attackTime=this.oAttackTime+n*t;let i=this.attackTime;if(this.attackTime>0){this.player.skin.body.rotation.y=Math.sin(Math.sqrt(i)*(Math.PI*2))*.2,this.player.skin.rightArm.position.z=Math.sin(this.player.skin.body.rotation.y)*5,this.player.skin.rightArm.position.x=-Math.cos(this.player.skin.body.rotation.y)*5,this.player.skin.leftArm.position.z=-Math.sin(this.player.skin.body.rotation.y)*5,this.player.skin.leftArm.position.x=Math.cos(this.player.skin.body.rotation.y)*5,this.player.skin.rightArm.rotation.y+=this.player.skin.body.rotation.y,this.player.skin.leftArm.rotation.y+=this.player.skin.body.rotation.y,this.player.skin.leftArm.rotation.x+=this.player.skin.body.rotation.y,i=1-this.attackTime,i*=i,i*=i,i=1-i;const r=Math.sin(i*Math.PI),a=Math.sin(this.attackTime*Math.PI)*-(this.player.skin.head.rotation.x-.7)*.75;this.player.skin.rightArm.rotation.x-=r*1.2+a,this.player.skin.rightArm.rotation.y-=this.player.skin.body.rotation.y*2,this.player.skin.rightArm.rotation.z-=Math.sin(this.attackTime*Math.PI)*-.6}}}const Xc=s=>new RegExp("(?<!=)(?<![<>])=(?![=>])").test(s),Jv=s=>{const e=/!\((.*?)\)/g;let t;for(;(t=e.exec(s))!==null;){const i=`((${t[1]}) ? 0 : 1)`;s=s.replace(t[0],i)}return s},e0=s=>{if(s.includes("return")||s.startsWith("math.")||s.startsWith("f.lunar."))return s;if(!s.includes("return")&&Xc(s)){let e="";const n=(s.endsWith(";")?s.slice(0,-1):s).split(";"),i=n[n.length-1];let r=i;if(Xc(i)){const o=i.split("=");r=o[o.length-1].trim()}return e=`${s.endsWith(";")?"":";"} return ${r};`.trim(),s+e}return(s.includes("?")&&s.includes(":")||(s.match(new RegExp("variable.","g"))||[]).length===1)&&(s=`return ${s};`),s},xr=s=>-65*s+s*s;class t0 extends xs{constructor(e){super(e)}update(){const e=this.player.skin.getAgeInTicks()*.7,t=e%26;if(this.player.skin.rotation.x=Math.PI/2,this.player.skin.position.y=-5,this.player.skin.head.rotation.x=-Math.PI/4,t<14)this.player.skin.leftArm.rotation.x=0,this.player.skin.rightArm.rotation.x=0,this.player.skin.leftArm.rotation.y=Math.PI,this.player.skin.rightArm.rotation.y=Math.PI,this.player.skin.leftArm.rotation.z=Math.PI+1.8707964*xr(t)/xr(14),this.player.skin.rightArm.rotation.z=Math.PI-1.8707964*xr(t)/xr(14);else if(t>=14&&t<22){const n=(t-14)/8;this.player.skin.leftArm.rotation.x=Math.PI/2*n,this.player.skin.rightArm.rotation.x=Math.PI/2*n,this.player.skin.leftArm.rotation.y=Math.PI,this.player.skin.rightArm.rotation.y=Math.PI,this.player.skin.leftArm.rotation.z=5.012389-1.8707964*n,this.player.skin.rightArm.rotation.z=1.2707963+1.8707964*n}else if(t>=22&&t<26){const n=(t-22)/4;this.player.skin.leftArm.rotation.x=Math.PI/2-Math.PI/2*n,this.player.skin.rightArm.rotation.x=Math.PI/2-Math.PI/2*n,this.player.skin.leftArm.rotation.y=Math.PI,this.player.skin.rightArm.rotation.y=Math.PI,this.player.skin.leftArm.rotation.z=Math.PI,this.player.skin.rightArm.rotation.z=Math.PI}this.player.skin.leftLeg.rotation.x=.3*Math.cos(e*.33333334+Math.PI),this.player.skin.rightLeg.rotation.x=.3*Math.cos(e*.33333334)}}class n0 extends xs{constructor(e){super(e)}update(){const e=this.player.skin.getAgeInTicks()*.3+Math.PI;this.player.skin.leftLeg.rotation.x=Math.cos(e)*1.4*.6,this.player.skin.rightLeg.rotation.x=Math.cos(e+Math.PI)*1.4*.6,this.player.skin.leftArm.rotation.x=Math.cos(e+Math.PI)*.5,this.player.skin.rightArm.rotation.x=Math.cos(e)*.5}}class i0{constructor(e){k(this,"player");k(this,"animations",{});this.player=e,this.animations={walking:new n0(this.player),crouch:new Kv(this.player),flying:new Zv(this.player),swimming:new t0(this.player),punch:new $v(this.player)}}getAnimation(e){return this.animations[e]}}class s0 extends Ze{constructor(t,n){super();k(this,"skin");k(this,"cape");k(this,"wings");k(this,"nametagLayer1");k(this,"nametagLayer2");k(this,"elytra");k(this,"hats");k(this,"bodywear");k(this,"jsonModels");k(this,"playerAnimator");k(this,"renderAnimations");this.name="player",this.renderAnimations=t??!0,this.skin=new rv,this.add(this.skin),n&&(n.isOnTop&&(this.nametagLayer2=new Sc(this,{...n,isOnTop:!1}),this.skin.head.add(this.nametagLayer2)),this.nametagLayer1=new Sc(this,n),this.skin.head.add(this.nametagLayer1)),this.cape=new Wg(this),this.wings=new jg(this),this.elytra=new qv(this),this.skin.body.add(this.elytra),this.jsonModels=[],this.bodywear=[],this.hats=[],this.playerAnimator=new i0(this)}update(){this.cape.update(),this.wings.update(),this.elytra.update(),this.hats.forEach(t=>t.update()),this.bodywear.forEach(t=>t.update()),this.jsonModels.forEach(t=>t.update()),this.renderAnimations&&(this.resetLimbs(),this.skin.update()),this.nametagLayer2&&this.nametagLayer2.update(),this.nametagLayer1&&this.nametagLayer1.update(),this.skin.state.isWalking&&this.playerAnimator.getAnimation("walking").update(),this.skin.state.isSwimming&&this.playerAnimator.getAnimation("swimming").update(),this.skin.state.isShifting&&this.playerAnimator.getAnimation("crouch").update(),this.skin.state.isFlying&&this.playerAnimator.getAnimation("flying").update(),this.skin.state.isSwimming||this.playerAnimator.getAnimation("punch").update()}resetLimbs(){this.skin.rotation.x=0,this.skin.body.position.y=-6,this.skin.body.position.z=0,this.skin.body.rotation.x=0,this.skin.head.rotation.x=0,this.skin.head.position.y=4,this.skin.rightArm.rotation.x=0,this.skin.leftArm.rotation.x=0,this.skin.rightArm.rotation.y=0,this.skin.leftArm.rotation.y=0,this.skin.rightArm.rotation.z=0,this.skin.leftArm.rotation.z=0,this.skin.leftArm.position.y=-2,this.skin.rightArm.position.y=-2,this.skin.rightLeg.position.z=-.1,this.skin.leftLeg.position.z=-.1,this.skin.leftLeg.rotation.x=0,this.skin.rightLeg.rotation.x=0,this.cape.position.y=0,this.cape.position.z=0,this.cape.rotation.x=0,this.cape.rotation.y=0;const t=Math.cos(this.skin.getAgeInTicks()*.09)*.05+.05,n=Math.sin(this.skin.getAgeInTicks()*.067)*.05;this.skin.leftArm.rotation.x=-n,this.skin.rightArm.rotation.x=n,this.skin.leftArm.rotation.z=t,this.skin.rightArm.rotation.z=-t}}const r0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAESMSURBVHhe7Zx51PZfO9Y1J0mSSElERESIIkIIISRCqJAhlNcrQ6ZMGTJkypAhQ4Ykw4sQ8oZChIiIlEgkKaW5/Vnr+qx1rNO5v9/vdd/XdT/P73fta63jL+/vvq97n8fx2ec+9348w/qsz/qsz/qsz/qsz5Pm80uWlq6g9XkEn64Ql9YvXbpJdV64tNbnwKdbuKPqCnsf/bKlJ7W6mt9HnSeP6uY+3SIcUbfwnbqCn6NfvnQT6mp/jjrvdeq8fERPmk/3x22pW8SqriCpruBb+hVLN63OE1vqPJfqPFvVeX9LT6hP9wfM1C1Oqltg1BVGdUWu+pX30K9aeqzV1eyoOq9UdZ5TnVdR5+1Ul42ZHttP92U7dQugusVD3WJ3xUFdYVVnmKpfvfSkVlfzqs47qvMc6jzaeRl13lddZjo9Np/uy1V1f6jqFqhbzLrgXXG6YqLOCOoZD+rXLD2h1NWwU+cJ1XkJdd6r/uw83Hm9y4TqslT1SD/dF0p1fxTqFqJbsLqoueC1KF0Bu4J3ZlHPdIZ+7dJjpa5GM3W1V51nOm9V/6U3q287b3cZ6LKCumylHvzTfYlU90eg+gd3C5MLl4uKcsFrQbJgXWE7I3RGQs98pn7d0iNRV4stdbVGnTc6D6XHqv/Sm9W36enO8zUXXXZQl7XUg3y6X6y6L43qH1gXIBcI5eLlwuaCZzGySLWQtdjVFJ2x1LOcoV+/9KDqajBTV1tV/VD9Uv2UXksPpjfTs+nl6vOag5qTLkuoy5666qf7har7ovUPqn9wLkYuVC5gLuxe4LNwWdRa9GqQzmDoWQ/oNyw9UnU1qepqi6oPqk/SQ+mt9Fx68a4wqLmouemy1WVQXe3T/bLuy9U/oP6B+cfnouRi1dBn8LcCnwXM4tbiV5N05nq2Df3GpcdKXY1UV9ta/+qP9E56agsIFQToUYDgKp/uF3VfqH7p/IPyj81FyMWpwZ+F3kJk6LuwZ5HTANUk1VDPPtFvWnqs1dUM1frW+qc30jPppQqE9OAeDO4KgpqnLnNdNi/66X5B90Xyi+YfgfIPvETwZ6GvYc8ipwHSHNVEz9HoOQ/qNy9dVd2ad+pqWOucHkhvpGcqFPZgcB8QZEZqfjJbXfa6jF7s0/3w+gXyC+YXzz/KPzTDf07wt0JfA58F7YKexkjjVMM914Z+y9Jjoa42qtYza50eSG9sQSGBsAWDc0GQ2cjMZJYyYzV/XUYv8ul+cP3l+cXyC+cfcqngZ+gNfg19DXwNehoizVKN9VuLnvuAftvSVdWteVWtW61r1jy9UMEwA0LCQB8mDC4BgsxOZiqzVnPYZfXen/oD6y/NL5RftAb/aPgz+IZ/a7fP0O8FvgY9TZIGqqZ7nka/femxUlejWsescda+guEIEBIG+rEDgT5OEByFALovBO71qT8M5S/LL5JfsIb/SPANfw2+4e+CL5lr6LvAbwVdw1RTPW/o+Sb6HUuPVF1NUNau1rUCIj2RUOiAkDDQfzMQ6N8KAv1+FATnQKDL7J0/9QflL8ovkF/sLuGXjgY/d30W0/Bn8KVxF3qJnoGfhb0LeBrs+UMvMNHvXHok6mqBsmZZy6xxhcMMCsJAIFQY6MMKAn2b3YAg0O8PBYE7f+oPyl9y3/BLQYNv+KVm7vp7we9Cn4Gfhb2GXAOlyV6w6IUm+l1LD6quBqjWK2tZAVHB0EEhgdDB4AgIjnYD94FAZrPm9k6f+kPyF/hLEwD3Cb90zODPwt8Fv+70NfSzsHch10hpthcOvchEv3vpQdXVAGWtsoYdIBIMHRQ6GOgzYdCB4Nxu4D4QyCxmRmt+z/7UH5A//C7h548z/PzRGX7puLXrbwV/K/SzwNeg14Cn2V409GKNfs/SI1FXi6xV1rACogPDDAhbMDgXBF03YB6EgCA4FwKZ0Zrfsz/5H+cPruGvALhL+FmUo+GfBX8r9DXwGfYaco2URnvx0EsU/d6lR6paj6xV1rACIsGQUKhA2IJBB4KjEBAEd4FABQDag8DZn/yP84dWAGT4BcC54Tf4NfyzXX8r+DX0kr4LfIa9BlyDvWTopUIvvaHft3QVdWutsjZZswqKhENCoQJB33QwmIFg1g1UCCQIzoWAOasQuCgA8j9Edw2/ADgS/q1dnwWtu/6R4GfoDbw7gmGvQa8B13wvE3rZot+/9EhU65A1qtCocEgwCAShIBASBnsgqN3AuUeCGQTM0V0gUHN8+JP/kT9sDwB8MQFwqfDnrs/C5q5fg78X+i7wNeg14BrtD4ReLvTyE/3BpauoW2uUNclaVVAkHBIMMyBswaCCILuBPBLg4UtCwJwdAQDKLB/+5H90JPwC4FLhn7X8uevnjt8Fv4Z+Fvga9BpuzfcKoVcM/aGlR6qsRdaoQiMBkWDYAkLCoANBdgRdN5AQwNOXhIC524NAZvnwJ/+jLQDU8AsAwy8AjoY/W34Wzpa/7voGHxJn8Lvd3tBvBb4GvYb7lU565dCrhP7w0iNR1iBrY70qJCoY9oCAd7quIEGQR4PaDXgkSAjg8XMgYI6EgDmrELgKAPwhAiDDLwD4Irn780Vz979L+G35a/hru98Fv+72GfoaeHcLw54hz3C/aujVTnr1oj+y9KCq629dslYJiYSDULD+HRCEQe0KOhDUY0EHATx9HwiYq+wChIB5TAhkdu8NAKmSAJA+Gf7c/e8bfs/72fLnrs/iZ6ufwc/dvgt9DbxBN+wZcA33Gie95kmvVfRHlx5Udf2ti3WqoBAO1lkoVCBUGGRX0IHAo0F2A3kkwMM5F7gvBMzZXbqAQx//xzMASBvDnwC4dvjrrk8RaM9q8HO3r6HPwHdhryHXcK990uuc9LqhP7b0SJQ1sC7WKUGRcJhBQSBUGGRXUEHg0aB2Aw8Bga0uYAYAtPvJ/3ECQLoYfgGQ4d8CwF3C75Q/w193/S747va503ehz8Ab9hpyzfZ6Q68feoOT/vjSI5V1yNpQq4REwiGhkECoMMjOwK6gA0HtBioE8PBdILAFgAoB8ygAhMC9AJDh7wAgfc7Z/c8Nv8O+Gn53/Tzj1+Bne5+hnwXesBv0DPgbnvQnTnqjk9646E8uPYjqulsP62O9KiAEg1DogJAwsCvASxUEOSOwG+gg4HDwHAjcpwtIAHQQ2P1sAYBfkAA4J/yQzfDnVd9W+HPYx8LWXZ8iQGRb/Qy+u707fYZ+FnjDbsg1GKZ7k5Pe9KQ3C/2ppUeirIF1sU4JCuGQUOiAkDCwM7ArqCDAc3gPD9ZuICHgcHAPAnlFeJejgAAQAhcFgFTJ8B8BQIYfsp0bfod9nvdr+N31Oa95vqdYdbd3pzf0W4E37IYco735SW9x0lue9KdDf2bpQZVrbz2sj/USEoJBKMyAIAzsDGpXIAjwGp7LbqBCwLmAw8FzIJBHATJ0ny7gagA4uvsbfsjGH0i7wx/sPf+54fesX3d9W32DD8lt793pDX0Gvgu7Ic9w/9mhtzrprU96m9CfW3pQ5dpbD+tDrRISwqGDQgJBGNgZeEzAS4LAo0HXDeDNu0DAdwJkg4x4FCA7d+kCLgYAfoAAMPx7AMjwQ7Ct8HvPfyT8nvdZ6Nz194IP2d3pa+i7wGfYDTmGe9uT3m7o7UPvcNKfX3pQue5ZC2pjnYSEYEgoVCBUGNgZ2BVsgSC7ASGAV49CoD4WqhCoR4E9ACQEzO9hAPg/2gLAkd3f8EMw/hDaGv4w2hz+UNqeDH+96puF35Y/d31aM8/4nu8z+JCdwtL+Zegz8F3YDbrhfseT3mnonU/6C6G/uPSgyrW3HtTGOgmJBEOFQgIhYeBRwa4gQeDRAM/hvewGPBLMIOBgsF4RkgUyQTbICFnp5gHndgEdAND0k+EXAPygIwCYtf7dud/w5wu/nPbvhd+zfu76s+BDdlo+d3oK7g6fga9hN+iG+12GnnLSu5701JPeregvLV1FdZ1df+thfaiVkEgwJBQSCHYIeMPOAM/YFXQgyG7A2cAeBPJ2QAjki8GteUB2AWTtCACEgHm+MwD4gR0A6u6/1/rzB3run4U/p/2z8Nvyu+szuOHcNgs+hHenN/Tu8Aa+C7shN9TvPvQeJ73nSe910l9eelC57tbBulAjYSEcOigIBDuEhAFesSvoQIDX8JzdgEeCPQjUK8KEQB0Kbh0FahfQAUAIXAwAR3f/rdb/nPA78OvCT/vlWR8iM7jxjF+DD9lp+XKnp/Du8AY+w27QDTiGe++T3mfofU96v5PeP/RXlq6qXGvX33pQG+skJIQDNU0oCAQ7BGFgZ4Bn8E4FgTMCPIf3nA3gyRkEcjB4BAJbR4Fzu4A7A4D/cA8AW7t/tv7duT+HfoafhxQZfgd+Xfhpw5zsQ2bP+LnjG3wIT+vnTp+hd3c38IbdoBtwzPcBQx940gcNffBJH9Lory5dVN0au/7UwrpQI0EhHAQDtRUIdgkVBngEr9gV4KHsCJwR4DlvDDwSdBCotwP5WGg2FCQrQiCPArMuYA8AQuBsAPADOgDk7s+X2Nr989yfu3+d+PvCj4XiTvVI+GnHctfn/Jatfhd82kF2AUPvDm/ga9gNOobDiB869GEnffjQR4T+2tKDKNecGlgPaiMsEgwJBYFghyAM8ATe6ECQRwM8lt2AR4I9CPhOwBeD9WYgu4CcB2x1AXkMIJMdAITAnQEw2/35pe7+fJmt3X+r9c+JP08qfeTD3SrXK0xYHfjNws/0Ntt9W/0Mvrs9raA7fYbewNewG3LN95FDHzX00Sd9zEl/felB5bpbB2pCbRIS1K5CQSBUGOAJjwl4JUHg0SCPBXhuBgEHg3gXD+NlHwvhcbw+uxnojgJdF+AxgAwePQZcFABd+7+1+2+1/p77GZj4wo8HFt7zO/DjvLUVfnd9z/ju+F3waQ/ZFTL07u4GHkMZckz3sSd93NDHD33CSZ8Y+htLV1WutetPLaiJ9REQ1E4oUFO7hIQBHsALHQjsCJwR2A1sQQCPOhj0nQBextN4uxsKbh0Fui7gLseAwwDgf7gHgFn7D6H4kkd2/671r+d+7/m5bmHi6sAvw8/VDe0Z57Xc9TnX2ep3wbe1Z3fI0Lu7G3iMZcg14ScNffLQp5z0qaG/uXRV5Vq7/tSCmiQkqJlQoJZ2CQkDao8H8EIHAo8GeCm7AbyG5/BeQsDBIF7Fs74T6OYB9ShwpAsgW3YB3TFgDwBCYPo5AgDbf35ptv+QyfZ/b/d36r/X+nOW8tzPtYsDv9z5a/i55nnKkLs+5zwGQLnju9vTItbQ5+5ew27AP23o04c+46TPDP2tpasq19r1pxbUREBUKGSXUGHgMQFPZEeAZ/BOdgN4q0IgOwEHg3g15wF7RwGyQCaOdAFkzC7AY4AAIJtXA4C7vwDI9h8i2f7v7f518JdT/1nr77mf6xcmsAxhbPtn4We4A8k949vqQ/0MPq0iu0SGPgOfYTfgnzX02Sd9zkmfe9LfXrqqXGfX3TpQEwGRUEggJAyoObVPENgR4BVnBHgIL80g4HEAT+JNPOo8YHYUqLcCdgFk40gXQNbsAjwGCAC7gHsBgP8gAZDtP79k1v5DqAqAo7t/N/XP1t9zP9cwTGI982f4Gd7Y8kNwCmi7D+Ft9WvwaRnZLWroM/CGHBN+3kmfP/QFJ31h0d9Zuqjq+rru1MB6CAhqlUCoMKDW1LyCwKMBXvFYgIfwkkcCPJYQcCaAJ/Gm84A8CuDl7lbgSBdQAWAX0B0DEgBkNgEgBA4DIHf/BMBd2v/Z2b/b/bupP08wbf25i/WOn6FM7vwZfto4pr256zvUow2swad9zNC7uxt4w264v2jo7570xSf9vaUHkevt+lMLIZFQoHZ2CQkDal1B4NEAj2Q3gIc8EgiB7ATwoG8F8KZHATzb3QrsdQE5C7jLMSAB0HUBUwDwf9gDgO2/AIBAAmCr/Xf3r5P/2e7v4M+XfhCVp5i2/py9uJZhMstwhoLQonXh53yXu75DvS74udMb+hp4g/4lQ1869GUnfXnoaUtXUa6x604NqIVgqEAQBtkZdCDAE3gjuwG800HA4wDew4N40XkAHsWrdgF42IHgVhfQ3QjsHQPInscAAUBG9wDQQuAcANTzP0SqAKjDP8hGi+Pun5P/c3d/W3+uZ5jQeubfCn/u+pwHaQdr8Nkx3OkNfQbeoGPGrzjpK4e+KvT3l66qXGvW3joICGqUQBAGdgZ2BQkCvIAnshvYgoAzAbyHBz0K3LULyBsBMkJW8hhAlioA8hhAFnMOcBUAeP4XAN35f6v9d/jX3fszHa1n/9nun60/d7RPHWJS68Avw89wh7bOsz5DIHd9BkW2+gbf3Z5dpIY+w44Rv/qkrxn62pP+wdKDyPVm7a2DcBAKFQbUNLsCau7RAC/YDeARvIJn8A4eSgg4GMRzeA8P5lFgqwvIWYA3AvVdQB0Gbh0D6hxAAJDVqwGAVkMAzM7/Xfufw79u9+8m/3X3d+rPE01bf85kXNc48Mud3/Bny88wyF3fVt8d3+DTVrrTZ+gNOyb8upO+fugbTvqHSw8i15u1tw6CgRolDOwMqGmCgJp7NLAbwBt5JBAC2Qk4GMRzzgPwIp70VqDrAvZuBMhENwzMYwDZms0ByCTZvAoAaCkSALQcCYDu/L/V/tfdv9775+R/a/fPcz/XNkxuGd7Y9mf4s+Wvu34Nvru9O32G3qB/40lPH/pHJ33T0oPI9WbtrYNgSBjYGWRXkCCo3UAeCRICHgfwFh7DazkPONIF4OnZuwC7gK1jwNYcgCw6BxAAZPbiAKDFEAC0Hh0AjrT/3fAPMjIogZS0THnv79k/d3+uY2z9OZv5wIcJbp75M/zZ8rvrc0601XfHd7fvQm/gMeI3D33LSf/4pH+ydFW5zq47NRAKAqHCwK7AjsCjAbW3G8gjQUIgZwJ4ywdDeM6jAF7MLsBZQL4LwNN4u3sdWIeBW8eADgDOAcgmGb0oAGglZgDYOv/TuvDlc/q/1f7n8M9Xf3nv7+S/7v483bT15w6XaxwmuXnmN/wMf2z5HfDlrm/w2T0MfobewBv0bz3p24a+PfRPl66iXGPW3PUXDAIhYSAI8niQ3YCDQjyBN/CIEMiZAJ7CW3jMowDeq12ANwL5LiBfBzoM3DsGkBmyQ4bI0t4coAMA2b0YAGgt+OGcNbYAMDv/b7X/Ofyr7b/v/Z38e/avu7+tP2c2rnOY6OaZH7pn+GkDc9e31a/Bd6fP0Bt4TPkdQ9950j9behC53qy9YBAIwsDOoAMBtc5uAC8kBDwOOBPAS3jKeQBeq12AswBvBPx3AvUYkMPAvWPAkTlAAiAHgRcBAC1EBwDOHBUAef7ny+b5n5amAmDW/m8N/7hzhbRMX3P3r60/ZzeudZjs5pm/Cz/DIgxBq8hQifbR4LvbZ+gNPEb8rpO+e+h7Qv986SrKNWbNXX+hQG0SBnYFgoDaUmNqTc2pfQeBnAngIbyEp+pRILsAbwTw6N4wsDsGVACQmZwDCADnABUADgIrAMjwVQBwZAC4d/4/0v4zUKGlYsDivT/TV3d/hjJe+dn6e+7neocJbxd+2kAM4FnfXd9WP4PvTm/oDTym/N6Tvu+kf7F0VbnOrrtgEAjUyM4gQeDRwG7A2QAewAsdBPAOHsp5AB7zahDv2QXgSd8F4FUfBh05BuzNAY4OAq8OAM4YWwCoA8C98//e9L9r/xm48BAjz/7u/kxsbf0993PNw6TXgV/u/BggW353fdrILvgZesP+/Sf9wEn/cumqcp1dd6GQMOhAQE3tBoQAtRcCdgIOBvEM3sl5AN7yVgDP5SwATzoM3DsG1NuAI3OAvUGgACCjFwEAZwcBwFBBAHDW6ADA2aQbAHr+54+anf9piXz84/Tf9t/pv+0/Axfv/T37190/W3/OdFz3OPDrwp8tPztGtvoZ/Ay9Yf/Bk37opH+1dFW5zq67UEgYJAjyaEBt80jQQcDBIJ7JeQCeql2AswDfBTgM9BiQLwPzNgCv4/nZHICs5BygGwR2AHAQSFbJrAAgy4cAwP/gCAA4cwiAHADy5XIAOLv/r+d/WqJ6/u+m/9n+cxfr5L/b/bP1586Xax8mvw78bPsNvy2/4WcHoa2swTf0hv2HT/qRk/710lXlOrvuQkEYVBBQQ7sBIUCtEwLOBPAGHsEreCaPAl0X4I0AXsxjQHcbMHsUtDUHIDvOARwECgAHgQLAQeAeAITAL/qcC4CtG4A6ALzL+T8f/3TtP88yGcQ4+a+7P9c5tv557s/w2/YbftrF3PVpK7vgG3hN+aND/yb0b5euolxj1jyhQE06EFDD7AaocULA44AQyHmARwG8VLsAbwTwIF7sjgH5KOiuc4BuEJgAqDcBFwEAZ4YKAIYLWwDoBoAdAPL+nzMQi7B3/ueBBf/88qlDTFxt/x3+Ofmvu7+v/Gz9uQPmGohJsOG37Z+Fn/ayC76hx5g/dtK/W3oQud5CQRhUEFC7LQjkTABP4A084lHA14K1C/BGwGGgxwBvA/Aqnt2bA+B9MkAWnAN0AOgGgVsAIKsVAGT6EAAgRQKAYcIeALZuALoBYHf/v/X6L8//XfvPHS0PNpjWdru/rb/nfq6DmAjnmT/DT/uYuz5tZgbf0GvIHx/6iZP+/dJV5Tqz5gkEapIgoGbZDVDThEDOBPACnnAe4FGg6wLwGF7Dc90xYDYHqK8Cu/cAs0Hg7CZgDwBkNwFgF3BnADBlrADwBoAvdeQGwAEgZx8HgN39P2cn7lLz/M+DC95ge/ef7T93tTzccPLv2R+S09a5+3vu51qIybBn/i78ueu74xt8Q48pf/Kk/7D0IHK9BYIwoDZ2BNkNdBBwJoAH8AKewBt2AXjGLgAveSOAx/BaPQbgSbyJR3MOgIfx8uw9ABkgCw4Cj9wECACyVwHgVeCDACCvADsAdANA/sjZAHDr/v8pQ3n+d/pf238n/7Pd39afMyDXQw78MAatYg1/7vpd8DHkT53006H/uHRR5dq63sKggiC7gQoBjwMOBvFAzgNmXYA3At0xAC/mHACvbr0HmA0C8yYgB4FbACCDDwqAvTcA3RVgdwPA8EMA5ACQsxJDE85OdQBYz/+8zWYi27X/POhgmvu0IYieU/967mdS7Jm/ht9zPsbqgp9h/5mT/tPSVeT6JhQ6EAgBalch4EyAmtd5AN5wIOgsAA/hpe4YgPfwYJ0D1EEgXvZfB9ZBIBkgC1s3AQIgrwITAHkV+EgAwFQyAdBdAc5uAM4ZAHLX6us/HmLQgnEWYzJr++/wz0c/kJzp7mz3px3kuigHfhl+W37DX4Ofgf/Zk/7z0lXk+iYQKggSAh4JhEAOBqm5R4GuC/Ba0MdBDgM9BuA5/30AXvRVIB49dxDY3QQkALwJSACQuccOAPUNQHcFmDcADEESAOcMADl78SCDVowzmdP/2v7zwKOe/d39bf099+fAL9t+DOWuX4Ofgf+50H9ZuqhybRMIFQR2A9kJOBNwMJjzADxgF1BnAXinHgO8DfDfB+BBvHjOIDABQAbyJmDrKpBs5VuABwMA94ozAPgGQAAwrZwBwCtApp4CYPYCsA4AeWSRA0DP/z7+4c12bf8d/tHSOfmf7f62/kfCn8Gvgf+vS1dVBUKC4AgE8ijQdQHeCHgMwEP1GIDX8Bzecw6Qg8D6ICj/YVB3E0AWyMTWVSCZIlsJALI3AwCZfVAAcD0hALo3AF4BCoB6BVhvAPIFIEMVbwByAFjP/zn9t/3P4V9O/rvdP1t/w2/bPwu/of/50H9buopyjYXBFgTyOFCPArULyBsBvJLDQLyUtwF1DpCDQG8C8KwA8EVg3gR0V4ECgKxUAHgVSMbI2oMAgIcEWwDwEVAHgCNvALorwHwC3N0AdANAXmjV83/X/jv829v9OTsyUd4Kfw2+Jv3vS1dVhYEg2IIAtaSme11AHQbmMaDOAfBcNwic3QTg6e5JcP03AQJg9hagAoAMbgGADD82ANh7A5BXgN0TYG8A8gGQA8B6/n/a0Kz9z8l/3f1r689waSv8GfpfCP2PpYsq1zZhsAUBalePArULyBuB2TEAL9U5QA4CfRDkTQBe7Z4EexXYAWDvLcAjBwAvjBIAvgJMAHBPOQOAbwAEQHcFyOLM/g2AV4BMW1nsfACU9/95/q/T/679Zyq8t/szZNoKfw39/1y6iioMtiBAzfa6AGrfHQPqbUDOAfCY7wHyQRCexJuzq0A8Pfs3Ab4FEABkZQYAMlYBQBYTAGT1QQHAw4SjAKiPgGZvALg+YfHy3wBwzcK01StAHwAxlKEoDGny9V8CIKf/tf1nOlzP/nX3x1icN7vw19D/r6WrKNdYEFQIOBOYdQHOAqh5PQbkbUAFgK8C8RhecxCIB70KxJt4FK/iWbyLh70K3HoLQCbyMdAeAMjcIwOAz4A7APBgoQKgvgLsHgH5BiAB0L0BqFeAeQPQDQD5Rx5PH6rn/632v9v9HfhthV+j/u+lq6iCoIMANaJWXRewdQzo5gB4pxsE5k1AvQrEo7O3AAIAr1cA+BhIAJCZCgBfA3YAIJNXBwBPDY8AgJdLAmD2CpAHEAJg7xEQ96osKves/hsAFp1rmHwBSHF8AJQDQM50FHXr/J/t/97uX8PfBf//LF1UubYJgoTAXheQx4CtOQBewTM5CMRTeEsAeBOABwUA3sSjeBXPVgDUx0ACwMdAZKO+BhQA+Rx4CwBk9KoAyH8ItAWAvWfAW68Atx4BCQDfAOQV4OwGwAEgZzyK3J3/aQ0xx6z973Z/d6IMf2fepcspIeD6d13A7BhAjal1NwfAG3jEQeDsJiCvAn0LkACYPQbaew3YAaA+B94CgP8e4AkLAF5KHQFAPgKqAMgXgN4AfNOQAJgNAPP8v9f+192/hv//Ll1FMwjYBewdA3IOsDUIxCt4xpsAAYC3ZgDwMdAeAPD4kwoA5/xLwPsCoL4C7N4ACIC8AqSY9QZgNgCcnf+32v8V/odTQqACoB4DZnMAal0HgQkAbwLyKjABUN8CJADw6LUBQNbIHNl7wgDgyD8EmgHA/z+ARwHwtKEOAL7/724AugFgPf/X9r/u/p1hly4vAZAQEADUqM4BKgAcBNabALyBRzoA4KlzAIBnzwVA/oOgBYChDgD5/wegAmD2COguAKjn/wTAkd3//y1dVLm2rncCgJokAOoc4FIAwGMzAODNBYChBYDexEt3V67tAsACwALAjSnXdgFgAWAB4MaUa7sAsACwAHBjyrVdAFgAWAC4MeXaLgAsACwA3JhybRcAFgAWAG5MubYLAAsACwA3plzbBYAFgAWAG1Ou7QLAAsACwI0p13YBYAFgAeDGlGu7ALAAsABwY8q1XQBYAFgAuDHl2i4ALAAsANyYcm0XABYAFgBuTLm2CwALAAsAN6Zc2wWABYAFgBtTru0CwALAAsCNKdd2AWABYAHgxpRruwCwALAAcGPKtV0AWABYALgx5douACwALADcmHJtFwAWABYAbky5tgsACwALADemXNsFgAWABYAbU67tAsACwALAjSnXdgFgAWAB4MaUa7sAsACwAHBjyrVdAFgAWAC4MeXaLgAsACwA3JhybRcAFgAWAG5MubYLAAsACwA3plzbBYAFgAWAG1Ou7QLAAsACwI0p13YBYAFgAeDGlGu7ALAAsABwY8q1XQBYAFgAuDHl2i4ALAAsANyYcm0XABYAFgBuTLm2CwALAAsAN6Zc2wWABYAFgBtTru0CwALAAsCNKdd2AWABYAHgxpRruwCwALAAcGPKtV0AWABYALgx5douACwALADcmHJtFwAWABYAbky5tgsACwALADemXNsFgAWABYAbU67tAsACwALAjSnXdgFgAWAB4MaUa7sAsACwAHBjyrVdAFgAWAC4MeXaLgAsACwA3JhybRcAFgAWAG5MubYLAAsACwA3plzbBYAFgAWAG1Ou7QLAAsACwI0p13YBYAFgAeDGlGu7ALAAsABwY8q1XQBYAFgAuDHl2i4ALAAsANyYcm0XABYAFgBuTLm2CwALAAsAN6Zc2wWABYAFgBtTru0CwALAAsCNKdd2AWABYAHgxpRruwCwALAAcGPKtV0AWABYALgx5douACwALADcmHJtFwAWABYAbky5tgsACwALADemXNsFgAWABYAbU67tAsACwALAjSnXdgFgAWAB4MaUa7sAsACwAHBjyrVdAFgAWAC4MeXaLgAsACwA3JhybRcAFgAWAG5MubYLAAsACwA3plzbBYAFgAWAG1Ou7QLAAsACwI0p13YBYAFgAeDGlGu7AHDDAPiQoRkAvnDoUgD46SEB8HNDCYBfGEoACIE06dL1ZPgTANQkAUDNBAC1vBQA8NgMAHhzAWCoA8BLD/HHvfzQuQB4t6FzAPDlQx0Avn2IIn/PUAXAvxmqAPiZoZ8dEgA/PyQAjnQBS5eX65zhpxYCgBoJAGpHDSsAqHUFAJ7AG3ikAwCeOgcAePZcAJANMkJWnjAAeM4hvsxzD10bAO8/lAD4xKFPHfrMoc8dSgB81VAC4B8PJQC+b+gHhn5o6EeGBMBPDHUAoKXEXOwwHQAWBK6vDH8HAGpDjahVBwBqKwCoObXHA3ghAYBXEgB4KQGA1/Ac3sODCQA8em0AkDUyR/aeVAB446EjAPiIoRkAvnhIAHzt0DcM/aMhAfCdQzMA/NgQJvnJoZ8aqnMAAZDHgBkElq6jGn7k7p8AyPM/taSm1JYazwCANwQAnsE7eEgA4K0ZAPDkEQDg8Sc0AJ5l6AgAXmjoRYa2APDqQ681VAHwp4feZugdhv7CEIv5XkMJgI8ZSgB8ztAXDFGkLxuqAPiWoW8bosjfPfS9Q98/9INDPzz0o0OY48eHOgDsHQMSAgsEl1eurevN2s/a/w4A1JYaU2tqTu3xAF7AE3gDj+CVCgA8hbfwGF5LAODFBABexbN4Fw/jZTxdAYD3ycAWAMgQWToCALJ5VQA889ARALzAkAB4sSEB8LJDAuBVhgTA6w4JgDcbqgB46hCL+n5DHzwkAD5h6FOGPmNIAPzdIYr1lUNfM/T1Q08foqjfOvQdQ981VAEwGwTOjgEVAjMQLF1OGfwa/r32vw4AKwDwBN7AI3gFz+AdPISX8BTeEgB4Du/hQQGAN/EoXsWzFQB4WwDgeQFAFgQAGREAZEcAkKkjACCjVwfAsw7NAPB8QxUALzGUAHjFoQqANxiqAHj7IQHwnkMC4MOHPnooAfDZQ58/RJG+dOgrhr566OuGvnHom4coLlNeit3dBOQcYK8LmEEgQbB0WeUad+Hf2v3z/F8HgHgBT+ANPIJX8AzewUN4CU/hLTyG1xIAeBFPCgC8KgDwcAUAXq8AIBMJADJTAUC2ZgAgk48MAM81dBQALzc0A8AbDbFIbzn01kMs3jsPvesQi/q+Qx809GFDLPrHD33y0KcPUZTPG/qioS8ZqgD4pqF6E1DnAHkM6LoAjMUO00FAEFQYLF1Orq/rXcPv2b/b/bP93xoAegNQAYCn8BYew2t4Du/hQbyIJ/EmHsWreBbv4mG8jKfxNh6fAYBsHAUAmXtQADzTUALg2YYqAJ5naAaAlxpKALzy0KsNvebQ6wy9/hCL86ZDHQDeY4jF/cAhFvujhj5u6JOGPm3os4YozuwxkIPArTlAHgO6LmALAgmChMHSZZRr63rPwj/b/Wftf57/HQDmFSBewlN4C4/hNTyH9/AgXsSTeBOP4tUOAHgbj+N1PI/3yQBZSACQlRkAyFgFAFlMAJDVxxIALzPEH/kKQx0A/sQQi/QWQ2819HZD7zT0lCEW9X2GWOQPHfrIoY8d6t4CdDcBTx+qc4A8Bux1AVsQEAQJg6XryHV23Wfh39v9a/tfz/+zG4D6BgAP4kU8iTfxKF7Fs3gXD+NlPI238XgHADJBNsjIYwOAXzm0BYBnH5oB4AWHXnjoRYdefEgA/IEhAfCqQ68x9NpDAuBNhgTA2w694xCL+e5D7z30AUM+BxYAeRXYDQJzDtAdA2oXkLOALQg4GEwQJAyWLqtcY4PvmX8W/nr2z92/a//z/N8NAPMKUADgRTyJN/EoXsWzeBcPCwC8LQDwPN4nAwKAbAgAMkN2yBBZmgGADG4BgAw/CAB+65AAeP6hCoCXHEoAvNJQAuD1ht5wiEV686E/OyQA3mWIp5Usbn0NyDVM3gQwpMk5wOwYsNcF1KPAFgQEgTBYup5cZ9d9Fv7a+u/t/rP2P8//eCtvAHwD4CMgvIlH8SqeFQB4GU/jbTyO1xMAZCEBQFYqAMiUACBrDwqAZxyaAeA5hhIAzzs0AwBvnPkjefMsAPIxEIvDSykWa+sxUL0KdBBY5wDdMSBvA7ougOnwEQgwZEoQJAwSCEuXUa6t623wqcWR8FPbbvfP6T8eqe1/Pf87AKxXgFuPgPA03sbj+QhIAJAJskFGZgAgWwkAsjcDAJl9cADwRjkBkK8BBQAPHbb+QRDXJN1joKcO+RaAaatXgTkIrHMAjwH1NmDWBTAVrkcBzo5CwOMAw6UKAmGQQFi6rFxf1zuDT02oTbb91K62/tR4tvvX6b/tfz3/5wDQK0A8iTdnbwD2XgHmPwQiK/kKMAFAxh47APCPEhIAvgbcew689xZgdhXYDQLzRWAeA5425DGgDgMhf94I5FEgIZCdAAazG0gQCIMEwtJl5fq63hl8apLhp2YZ/mz9c/Lv7p/Dv5z+1/a/nv9zADi7Atx7A+AjoPoKsD4DTgCQuUcCgPz3AAkAHibw5bin3AIA1xz1MZA3Ab4F8CpwdhOQg0DOYD4IyvcAeQyow8DaBXgU8FqwQiCPA0yUOxAIA6VJly6jXFvXuwaf2hh+albDT22psa3/bPd3+Ffbf+//fQDk+d8B4OwGIK8A8bg3APkGIB8BzQBAtsgYWUsAkEX/HcCDAoAHCFsAuMtbgLwJqINAbwIcBHL2ygdBHgPyNsBXgRC9zgK8EfAokPOAhIAzgTwSVBAIg6Xry/Wuwbfl98xfw++539Y/J/94wrO/wz9f/zn9t/3PB0B4MAeAeLQOAOsNQL0C3HsDsAUAMvhgAOCFUQUA95ACgOsJvqRXgUfeAnQ3AUcHgfkgqDsGzLoAbwQ8CmAE2sEOAjkYzG5AECQMBMLS9eQ6G3qDn7t+Dvy68FNram7r7+R/tvt37X8+ADpnAFhvALwCPPIGgGyRMQFA9ioAyOi9AIASADwk2AMA1xEdALqbAK8CvQk4dxBY5wDdMYBJrcNAu4CnDdkF8I88PArUeYAQcCbgYDC7AUHgfAADJhCWrivXm7V3xzf47vo58LPtN/x57rf1xxPu/njF3d/hn9P/2v7X8/+5A8C8AZhdAXYAIHN7ACC7CQDzvQsASFEBwL3iFgCYSvLl9t4CdDcBdRDIWWn2bwJyDlCPAUxmeaHVdQFMc2nrmO46EBQCnAG3IJDdQAVBwkBhzKXLK9fY0HfBd9ffCn+e+x38+e4fr3S7P97CY7X9z/N/9wR49m8AZjcA3RUgmSJbZIysbQGArFYAuPtfDADeBCQAmE7WtwBbNwHdINA5QD4Jrg+CumMAE1kfBWUX4CyAaa5HgYTA04cSAs4EGBIxKea6iPaxAwFtJsYTCAmFpevIdXbdqUEXfGpG7aihAz/bfsNP7TP8tv54xbN/3f3xGF7r2v/6AMgXgN0T4DoAnN0ACAAylW8ABIA3ABcBgBDYA8CRtwD1JoAzTd4E5ByAYcjsRWA3B+Cu1WOAtwE8yKhdgDcCvgvwKMADD+cBCYGcCWCY7AYqCGgvhYFAEApL15Pr7LpTA2pRg5+7fobftt/we+7HE7b+3vs7+a+7P15z+m/7jydn5//uBWD9NwB5A0BW6g1AXgGSNW8A8grwCADM+S/6VABwZhAADBMEAFPGvbcAnFW2bgKcA/DHdy8CuzlAdwxg8gqBeYjRdQHeCHgU8HFQBwGPAxiEyTDXQ7SLdgMJAtrKhIFAEApL15Pr7LobemqSwXfXp4bUkprmmb8Lv49+bP2d/He7v//+Hw927f/e+R/P430y4Pn/yA0AGfMGoAKAbAoAMisA6gDwzgBguLAFgNlNwF3nAN17gDwG+CrQYWB2AUxrebOdRwEedOQ8QAjkTICJMNdCHgk6ENBWJgwEglBYup5cZ9fd0FOTLvi2/NSU2hp+am7489yPR7L1x0N4qe7+eM7Xf9n+b93/n3v+37oBmAGAjD4IAOogMAHQDQL35gCz9wC0UNyl5jHgqUNMXO0CGMTYBXgjwF1tHgU6CNgJOBNgEsx1UB4JEgR5NBAGCQSFKZcur1xjA2/os9XP4GfLT22psWf+3Plr+LP1990/3nL39+4fDzr9z/Y//wFQd/+/d/6fDQAFQB0AXgUAnB06ADgI3LoJcBCYc4AEQJ0D0BJxNjpyDHjKEA8u7AKcBXgjwB2tRwEebuQ8oIOAg0GugfJIIAjsCGgjEwZ2BphPKCxdX663O32Gnhq54xt8d31qS40d+HXhz3M/3rH1990/HvPs7+7vP/890v539/95/s8BINnJASDZImOzG4AOAGT4IgBgqMAPdxA4A0A3CNyaAxw5BtTbAIeB2QV4I8DbbI8CPNjIeQDXOQkBB4NMfmkDuQOmLexA4NHArkAYJBAUply6vHKNDXyGntrY6nfBp7a+8qPmDvwy/Hgkz/14yNYfbzn5z93f4V83/d9r/4+c/+sAcAYAsklGyerFAEALMQPAkUHg3hygOwZsvQrkgYXDwNoF1KNAzgOEQB4HHAxy7ZPdgCCgVRQEtI8JAzsDTCcUBMPS9eQ6u+7u9Bl6amXwPetT09z1qbkDP7xg22/489xfW/+6+zv8w5s5/a+v/2bt/9b5/8gAcAYAsntRANBaCICjg0DnAHvHgK3bgHwUxICldgG8weYulqGMRwEKxsSWs1tCIGcCTHp9LUgbmN2AIPBo0MEggSAUlq4v19vAd6G31Tf4uetTa1/54YE882f48Y5Tf1t/PIbX8Fzd/fFmPv7Zm/5vtf95/j8yABQAZPTiAKCVSAA4CBQAR+cAe8cAyEiLtDcMtAvg3MX01XcBHgWY0DoPSAjkTIAJL9c8HgnYCSoI7AgYFtkVJAwQQyWMJxiWri/Xm7W3Dobe3Z6auePX4LvrU3s8gBfyzJ/h99yPp2z9vffHe5793f23hn94G4/vtf9Hz/8JADKZACCzVwEALYYA2JsDbB0DahdAS5TDQFqmI10A01ePAhSGZ5lCgOsaIZAzASa7XO/kkcBuIEHg0SC7AmHA7oKEgmBYur5cb9beOmTo3e1t9TP4ddfHA3gBT+SZ3/B75Yen8BYes/V38r+3+/v4B2/jcbxed/8j7X8FgOd/AUA2rwYAWooEgHMAAVCPAQJgdgzougBaoxwGdl0A5ytvBHwXQBvGQwzaMs5mCQGPA84EmOhyrZNHAnYAhj+CwI7AQWGFAbsKJksoKIy4dD3lWht25E6foXfA545v8Km1u74tP57AG3nmz50fT+EtPIbX8Jz3/k7+8+Vf7v45/MPj3e6/1f6Tpdr+JwDIYgKArF4VAM4B+OVbc4B6DIBstDhbw0AIyaBkqwvwRoA7V48COQ+YQYBJLtc5eSSA/BUEHg2yK8BI7CIJBNpKDCcYFGZcurxyjV13apCBp0aG3t3eVr8G313flh9v4JGt8Hvux3N4Dw86+d/a/fG0u/9s+JfT/9r+z87/AoBM3gsAfPYAQGuRANiaA3THAMhGi5PDwLt2AXkU4J9fUhDOZB0EGN4wweUah7Yuu4EOBB4N7AqEAbtIBYJQEAxL15fr7fpn4N3pqZm7va1+F/zc9fEGHsEreKYLv+d+PJet/113/xz+kQ0ycqT9z/N/AoCM7gFg+kkAJAQSABCGXzabA9QuII8BdRi41QU4C8gbgXwXwLDFo4AQ4DomIeBgkMkt1zfc4WY34GwgQUA7yDAoYZCdgUBIKAiGFIZcupzq+rruht3A506foaem1LYGHw/kro9H8AqeceCX4cdjht/WHy/mvb+7f334M9v9u+HfbPo/O/+TSbKZAMjwnwWArgtIAECaOgfYOwbUYeBWF9DdCOS7AI8C3gokBKCzMwEHg1zbcHeb3QDDnQoC2kCGQJwHKwwYFCUQ2FXsEoSDgFi6nlxn1906ZOCpVQ09NaW21LgGHy/kro9X8IwDP8/8ufPjOaf+tv55749n9yb/dffP4d9e+z87/wuAbve/FwDsAgTAuceAI13A7F0AbZSvAz0K8MzSecAMAkxqua7xSADRfTDE+S5B4NGAc2DCgN0igUD7mFAQDAoTLl1Pudauv2GnNhl4apehp7a2+hl8vOADHzxiy4938NAs/J778aKtf776m937H939z23/yaa7/9UAAGEEQHcMONIF1FlA3gjkUQByOhD0KOATYSHAm+sKAYYzTGifOuSRAJLzdFMQ0OLZEXg0qDBgl3BoSMuImSoUBIPChEvXU661659hR9SKmlE7alhDb6vvjm+7jzfwCF6x5cdDeAlP1fD73h8v+uQ3W//u1Z+7f07+69l/a/eftf9kMtv/OwNACGwBANIIAI8BdgF8ySNdQL0RoB3yXcDsKMBElfbKeUB2As4EGMowmeV6hjvapwzZDXQg8GhgV5AwcGhIqygQhIJdgnBQmnDpOsq1dv3d3a0PtaJm1I4aZujd7W31u+Dnro+H8BKewlue+XPn99yfT3671r+79ycDOfnf2v1t/8latv9kMdv/GQDM9/RzDgAgjgDwGGAXwJc90gXQ9kDAvaNAvRXYggATWa5lshugiAxvOhA4I2DamzBgd/CYIBCEgl2CcBAQSw8n1906UBPDbuBt76llhp5ae8bvgo9X8Ezu+ngKb22Fv5v6b7X+eJ8MHNn9bf/JWLb/ZND2/yoA6CAgALpjwFYXkBCwC+iOAixUdyvgPKCDAEMYJrFcx9Ce2Q3wRDNBANU9GjDc4ZxXYcCuIBA8KiQU2EmQcFCab+m6yjWnBtajhp3aGXhqWkNP7fGArb47vsHHO+76eApv4TG8Ngu/5/5u6t+1/u7+Gf6t3X/W/pPJLvz3AsBeF9AdA2ZdwJGjAAuTtwJHIOBgkAks1zDcxUJo3wpwXutAwLnOrkAY2BkwABIItIcVCgkG4VCFEZcup26NXX+DXsNO7Qw8NXWnN/Tu9nihCz7e8Y4fT+EtPIbXHPgdCX+d+h9p/bd2/3Pb/zsBILuAGQDsAjwGzLqAI0eBOg8QApydZhDwpSCF4PoluwFB4LGAYno0cEZQYcAu4DFBINghYKAEg3AQEArzLV1Pudauv/Uw6Iad2hl423tqXEPvGd9W3+Db7uOl3PXxmgM/PDgLf73yy3P/kdZ/a/cnc7n777X/9wZAB4E8BnRdAF8cguVR4BwIMDCZQcDBIBNXrl08EkBmnmJWEOTRwK5AGNgZcM0jEGgHEwrsGIJBOAgIIbH0cHLdrYN1oUbu7oadWhp4auxOb+jd7bPVr8HHU3jLlh/P4T0HfrPwd0O/rfBn6092yNDW7k8Gu/BfFADndgF8UYhVjwI5D6DdmUHAoeAWBBwMct3ikQAi8wRzBgLOb1zdQPaEgZ0BrZ9AsEOoUBAMwkFApDDg0uVV19n1tx7Wp4adWhp4apw7vaHHE3gDj8yCj7fwmC0/3nPgtxf+vO+v4a9T/9r6kyXDf87uf2cACAH+4+wCtgBgF8AXtAuYHQUSApx9KgTyZmAGASasvhOg/bIbmIHAGQHTW7sCCm5nQMuXQLBDSCgkGISDwnBLD6dce+th0GvYqWUGnlq70+MBd3u84Rl/Fnx3fTznPT9e3At/N/Gfnfu71p9MGf7c/ffafwGQ2d787AFgDwLZBcyOAs4DEgI5FPRmoIOAg0GuV3wn4JHAboBzWQWBMwK7goQB1E8g2CFUKCQYFCYTEksPJ9c9a2HQu7BT0wy8O72hd7f3jF+D71nfXR/Pec+PF/GkA78u/Dnxr0M/z/17rT/Z2gv/HgB2PwkAIcAPO7cLqEeBGQQ4+xyFQN4OcLfKA4vsBrZA4I2BXUGFAS1fB4QKBcEgHBSGW3o45dpbD+uTYe8CT61r6N3tnezvBd9dHw/ixTrtPxL+HPp14e9a/6O7vwAwxxcHwBEI2AUIgW4ecBcI+FjII4HdgLMBWjNB4NGAQjK4sSsQBtA+gUD710FBMAiHBISQWHo45dpbD+tjvWrYbe0NvDs9XnC3xyN4xVbf4OMpz/q56+NBH/ncJfxb5/5zWv+rAkAI8MPv0gUIAch2LgQcDNYrQiHQdQOCwI7AGQEkd04gDKD9FhASCoJBOCiMtvTwyhpYF+tk2LcC706PF/AE3sAjnvHd8Q1+t+t34c9p/7nhJyMZ/nN3fwFgbi8KACFwTheQEPAowB9Ku3MEAnk7wML6YpAnlc4FshuoIPBoULsCYeAxoQNCQkEwCIcEhMJ0S9dXXXfrYX2sl2GfBd6d3tDnbm+rX4Ofu77nfbzoC7961Xck/GTB8JORc8OfADCn9wZAhUAFQNcFbEHALuBcCNQrQiFQuwFnAxUEtGsUkGLaFQgDKD8DQkIhwaASEEuPThlwZdAz7LPAu9MbejziGR/v1OB71q+7fhd+vHtu+N39t8JfAWAeKwBq+NHuJ//HCQAhwC+5TxdwLgS6dwI5F7Ab6EDg0YDzmjCwK6gwqEBIKAiGCgel2ZYeVlmDDLlBz7DXwHehxxuGHs/gHTzUBd9dHw963q/hz6u+c8J/191fAJjXOwGAzxYAhIDUSQA8BARyOFi7gQoCjwYU0a4gYZDHBEwwg4JgqHBIabilh1Fd/wy5QZ+FPQOfO72hxysG31Y/g193/Rz2PUT4EwDm0PBvAeDwpwJACCQAhIAUyi7gUhDwnUC+GKzDQbuBDgQ5I8iuIGHQAUEoZKegMFICQmm4pYdRXX/rkrUy6Ia9C3wXerySZ/wu+HXXd9hn+POF36XCLwC2dn8BkNm9MwASAlIlISB9BEBCgC99HwjUx0JCIIeDdgMdCGjPKJggyK6AAndAyA5BKAiGhEMCQkgsPbyyBlkb62X9rKdh7wKfoccrBh8P2erX4Oeu77CvC7/3/HcNvwAw/ALA/NXwJwAyy4c/+R9tAaCDAF8yIcAfcQ4E8oqQhYOcLCRtFAubRwJBAIETBHk0EATZFewBQShUMCgNlZBYejTKWmSNMuiGfS/wht7dPoNvq2/wPevnro838ShexbN4N8OfV31Hwi8ADL8AqOF/EADsQYAvdUkIQMqEACR1LpDdQD0WVBB0XcEWEIRCBYPSSAmJKs23dFl1a42yJlmrDLph3wp8DT3e6YKf7X7d9fO8b/jx8iXDLwD2wo8yy4c/+R+hIwAQAnzJS0LAbkAIdN1AgsCjwRYMZkAQChUMCYcEhNJoSw+rWoeskXXLoBv2WeD3Qp87vsGvu77hd9e/ZPgFgHnbA0DN8Vmf/A/9gXeBAH/EUQhUEFQI1COB3cAeCCoMEgjZIQiFDgwJhwREJ823dFl1a62yNlmzDLphN/DW38DX0B8Jvrt+1/Ib/hr8o+EXAHcJP8oMn/3J/zh/aAVAhQBf8i4QONoN5JFgCwQdDLIz6IBQoaA0TQJCabClR6Naj6xV1jDD3gXe0OuTGvqt4GfLf3TXv0v4BUANP7oqAFD+4AqBBMBdIVC7gS0IZDdQQbAHgw4IFQoJhoRDAiKVRlt6OHW1yFplDa1rhr0L/F7oZ8E/t+W/a/g7AOyFH539qT8gf7i/8FwICAL+UEEgBLIbYKHuAoI9GGwBQVUwJBwSEFVptqXrq6sBylplDTPoahb4vdDfJfgZfv1u+M2Dwb9L+FFmtOb3Tp/6Q/IXVADcFwLndAMzENSuoIOBQJhBIcFQ4YA0UlWaben66mqAar2ylta3C7uB70Jv8A39LPiz8He7/iXCj64Wfj71B+Uv8RffBwKCgIW4SzdQQTCDQQXCFhQSDAmHBERVmmzp4dTVAmXNspZZ4y7sNfCz0B8NfoZfXxt8w28O7hN+lNmsub3zp/4glL8ov0B+sbtAQBBIRyGQIGBhKwiEAcXoYCAQKGQCYQsKSpNUQKTSYEsPr64mKGtX6zoLO9InBr4LvcHXfxl8w3901792+NG9PvWH5S9D+UXyC1YIHAWBdKwgYEFnIOi6AmEwA0JCYQYGpWFS1VRLj1ZdjWods8ZZe/3QBb6G3uDruy74hr8G3/AfDT46J/yo5vXen/oDUf2l+YXyi/rlEwRHIFBBwEJ2IBAGFKHC4AgQEgoJBpUmQWmgmarpli6rbs2rat1qXbPm6YWtwNfQG3x9WINv+DP454Q/s5OZyqzVHHZZvcin+8H1l+cXyy+cf4h/3CVAsNUVJAw6ICQUEgwVDijNUlWNtfRo1NVG1XpmrdMD6Y0aeJShN/gZ+ksFH2VmMkuZsZq/LqMX+3Q/vH4BlF8wvzjKP6pC4FwQ7MGgA8IMChUMKI2h0jhbqoZbuqy6Ne/U1bDWOT2Q3kjPZOD3Qn+X4KO94KPMVpe9LqMX/XS/oPsi+UVR/hH5B/pH3xcEWzBIICQUKhhQGgClOVLVREuPl7qaoVrfWv/0RnomvTQLPbpP8FFmIzNT89RlrsvmVT7dL+q+UP3S+Qeh/GNzEXJxKgi2YJBAsDgJhAoFlEVGaQBVTZKqhlp6tOpqpLra1vpXf6R30lM18GgWenTX4KOaoy5rXSav9ul+meq+XP0D6h+Yf3wuSi6WC5gwcKETBjMgVCigLC6qxVfVJJ06cy09nLqaVHW1RdUH1SfpofRWei69WEOP0svp8fR+zUXNTZetLoPqqp/uF6rui6L6B9U/OBcD5ULlAubCuthbQEBZOJRFRbXoqWqQLXUGW7qeuhrM1NVWVT9Uv1Q/pdfSg+nN9Gx6ufq85qDmpMsS6rKnHuTT/eJU96VR/QPrAqBcoFw8lAubC46yGFkkVQuJarFVNcWeOmMtXV9dLbbU1Rp13ug8lB6r/ktvVt+mpzvP11x02UFd1lIP/um+RKr7I1D9g1G3MLlwKBc1FxzVgqAsmOoKqzojzNQZaenRqavRTF3tVeeZzlvVf+nN6tvO210GuqygLlupR/rpvlBV90epbiG6BauLmguualFUV0DVFbxTZ5alx1ddDTt1nlCdl1DnverPzsOd17tMqC5LVY/Np/tynbo/VHULhLrFrAuuuuKorphVnRGWnjzqal7VeUd1nkOdRzsvo877qstMp8f2033ZmboFSHWLh7rFVl1xqrrCHlVnmKXHR13NjqrzSlXnOdV5FXXeTnXZmOkJ9en+gC11i1PVLXCqK8yWuiIv3Y46T2yp81yq82xV5/0tPWk+3R93RN0iduoKco66gi89+dTV/hx13uvUefmIbu7TLcJRdQt/H3UFX3ryqKv5fdR58qjW58CnW7hLqyvs0pNfnRcurfV5BJ+uEEtL99X6rM/6rM/6rM/6rM8T/vMMz/D/AcbEXAglQm49AAAAAElFTkSuQmCC";class a0 extends Ze{constructor(t){super();k(this,"texture");k(this,"material");k(this,"canvas");k(this,"imageLoader");this.imageLoader=t??Va,this.name="shadow",this.visible=!1,this.canvas=document.createElement("canvas"),this.canvas.width=256,this.canvas.height=256,this.texture=new st(this.canvas),this.material=new Ei({map:this.texture,side:Bt,transparent:!0,alphaTest:1e-5});const n=new Ys(14,6),i=new ze(n,this.material);i.rotation.x=Ye.degToRad(90),i.position.y=-24,this.add(i),this.load()}async load(){const t=await this.imageLoader(r0),n=this.canvas.getContext("2d");n!=null&&n.drawImage(t,0,0,256,256),this.texture.needsUpdate=!0}}class o0 extends La{constructor(e){super(e),this.name="hat",e.skin.head.add(this),e.hats.push(this)}preLoadTransformations(e){e.position.y=-4,e.scale.x=16,e.scale.y=16,e.scale.z=16,e.rotation.z=Ye.degToRad(180),e.rotation.y=Ye.degToRad(90)}onUpdate(){}}class l0 extends La{constructor(e){super(e),this.name="bodywear",e.skin.body.add(this),e.bodywear.push(this)}preLoadTransformations(e){e.position.y=6,e.scale.x=16,e.scale.y=16,e.scale.z=16,e.rotation.z=Ye.degToRad(180),e.rotation.y=Ye.degToRad(180)}onUpdate(){}}const c0={"!":"BANG","&":"AND","(":"LEFT_PARENT",")":"RIGHT_PARENT","*":"ASTERISK","+":"PLUS",",":"COMMA","-":"MINUS","/":"SLASH",":":"COLON",";":"SEMICOLON","<":"SMALLER","=":"EQUALS",">":"GREATER","?":"QUESTION","[":"ARRAY_LEFT","]":"ARRAY_RIGHT","{":"CURLY_LEFT","|":"OR","}":"CURLY_RIGHT"},Yc=new Set(["return","continue","break","for_each","loop","false","true"]);class As{constructor(e,t,n,i){this.type=e,this.text=t,this.startColumn=n,this.startLine=i}getType(){return this.type}getText(){return this.text}getPosition(){return{startColumn:this.startColumn,startLineNumber:this.startLine,endColumn:this.startColumn+this.text.length,endLineNumber:this.startLine}}}class Qc{constructor(e){this.i=0,this.currentColumn=0,this.currentLine=0,this.lastColumns=0,this.keywordTokens=e?new Set([...Yc,...e]):Yc}init(e){this.currentLine=0,this.currentColumn=0,this.lastColumns=0,this.i=0,this.expression=e}next(){for(this.currentColumn=this.i-this.lastColumns;this.i<this.expression.length&&(this.expression[this.i]===" "||this.expression[this.i]==="	"||this.expression[this.i]===`
`);)this.expression[this.i]===`
`&&(this.currentLine++,this.currentColumn=0,this.lastColumns=this.i+1),this.i++;if(this.expression[this.i]==="#"){const t=this.expression.indexOf(`
`,this.i+1);return this.i=t===-1?this.expression.length:t,this.currentLine++,this.lastColumns=this.i+1,this.currentColumn=0,this.next()}let e=c0[this.expression[this.i]];if(e)return new As(e,this.expression[this.i++],this.currentColumn,this.currentLine);if(this.isLetter(this.expression[this.i])||this.expression[this.i]==="_"){let t=this.i+1;for(;t<this.expression.length&&(this.isLetter(this.expression[t])||this.isNumber(this.expression[t])||this.expression[t]==="_"||this.expression[t]===".");)t++;const n=this.expression.substring(this.i,t).toLowerCase();return this.i=t,new As(this.keywordTokens.has(n)?n.toUpperCase():"NAME",n,this.currentColumn,this.currentLine)}if(this.isNumber(this.expression[this.i])||this.expression[this.i]==="."){let t=this.i+1,n=this.expression[this.i]===".";for(;t<this.expression.length&&(this.isNumber(this.expression[t])||this.expression[t]==="."&&!n);)this.expression[t]==="."&&(n=!0),t++;const i=new As("NUMBER",this.expression.substring(this.i,t),this.currentColumn,this.currentLine),r=n&&this.expression[t]==="f";return this.i=r?t+1:t,i}if(this.expression[this.i]==="'"){let t=this.i+1;for(;t<this.expression.length&&this.expression[t]!=="'";)t++;t++;const n=new As("STRING",this.expression.substring(this.i,t),this.currentColumn,this.currentLine);return this.i=t,n}return this.hasNext()?(this.i++,this.next()):new As("EOF","",this.currentColumn,this.currentLine)}hasNext(){return this.i<this.expression.length}isLetter(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"}isNumber(e){return e>="0"&&e<="9"}}const h0=(s,e,t)=>typeof s!="number"||Number.isNaN(s)?e:s>t?t:s<e?e:s,u0=(s,e,t)=>{let n=0;for(;0<s;)n+=jc(e,t);return n},d0=(s,e,t)=>{let n=0;for(;0<s;)n+=qc(e,t);return n},f0=s=>3*s**2-2*s**3,p0=(s,e,t)=>(t<0?t=0:t>1&&(t=1),s+(e-s)*t),m0=(s,e,t)=>{const n=i=>((i+180)%360+180)%360;if((s=n(s))>(e=n(e))){let i=s;s=e,e=i}return e-s>180?n(e+t*(360-(e-s))):s+t*(e-s)},g0=(s,e)=>s%e,jc=(s,e)=>s+Math.random()*(e-s),qc=(s,e)=>Math.round(s+Math.random()*(e-s)),v0=s=>((s=((s%=360)+360)%360)>179&&(s-=360),s),_0=s=>{const e=s?1:Math.PI/180;return{"math.abs":Math.abs,"math.acos":t=>Math.acos(t)/e,"math.asin":t=>Math.asin(t)/e,"math.atan":t=>Math.atan(t)/e,"math.atan2":(t,n)=>Math.atan2(t,n)/e,"math.ceil":Math.ceil,"math.clamp":h0,"math.cos":t=>Math.cos(t*e),"math.die_roll":u0,"math.die_roll_integer":d0,"math.exp":Math.exp,"math.floor":Math.floor,"math.hermite_blend":f0,"math.lerp":p0,"math.lerp_rotate":m0,"math.ln":Math.log,"math.max":Math.max,"math.min":Math.min,"math.min_angle":v0,"math.mod":g0,"math.pi":Math.PI,"math.pow":Math.pow,"math.random":jc,"math.random_integer":qc,"math.round":Math.round,"math.sin":t=>Math.sin(t*e),"math.sqrt":Math.sqrt,"math.trunc":Math.trunc}},x0={"query.in_range":(s,e,t)=>typeof s!="number"||typeof e!="number"||typeof t!="number"?(console.error('"query.in_range": value, min and max must be numbers'),!1):s>=e&&s<=t,"query.all":(s,...e)=>e.every(t=>t===s),"query.any":(s,...e)=>e.some(t=>t===s),"query.count":s=>Array.isArray(s)?s.length:1},Kc=s=>({..._0(s),...x0});class Xa{constructor(e,t){if(this.config=t,!e)throw new Error("Provided environment must be an object");this.env={...Kc(t.useRadians??!1),"query.self":()=>this.env,...t.isFlat?e:this.flattenEnv(e)}}updateConfig({variableHandler:e,convertUndefined:t,useRadians:n}){t!==void 0&&(this.config.convertUndefined=t),typeof e=="function"&&(this.config.variableHandler=e),!!this.config.useRadians!=!!n&&(this.env=Object.assign(this.env,Kc(!!n)))}get(){return this.env}flattenEnv(e,t="",n={}){for(let i in e){let r=i;if(i[1]===".")switch(i[0]){case"q":r="query"+i.substring(1,i.length);break;case"t":r="temp"+i.substring(1,i.length);break;case"v":r="variable"+i.substring(1,i.length);break;case"c":r="context"+i.substring(1,i.length);break;case"f":r="function"+i.substring(1,i.length)}e[i].__isContext?n[`${t}${r}`]=e[i].env:typeof e[i]!="object"||Array.isArray(e[i])?n[`${t}${r}`]=e[i]:this.flattenEnv(e[i],`${t}${i}.`,n)}return n}setAt(e,t){if(e[1]===".")switch(e[0]){case"q":e="query"+e.substring(1,e.length);break;case"t":e="temp"+e.substring(1,e.length);break;case"v":e="variable"+e.substring(1,e.length);break;case"c":e="context"+e.substring(1,e.length);break;case"f":e="function"+e.substring(1,e.length)}return this.env[e]=t}getFrom(e){var n,i;if(e[1]===".")switch(e[0]){case"q":e="query"+e.substring(1,e.length);break;case"t":e="temp"+e.substring(1,e.length);break;case"v":e="variable"+e.substring(1,e.length);break;case"c":e="context"+e.substring(1,e.length);break;case"f":e="function"+e.substring(1,e.length)}const t=this.env[e]??((i=(n=this.config).variableHandler)==null?void 0:i.call(n,e,this.env));return t===void 0&&this.config.convertUndefined?0:t}}class ft{toString(){return""+this.eval()}walk(e,t=new Set){let n=e(this)??this;return n.iterate(e,t),n}iterate(e,t){for(let n=0;n<this.allExpressions.length;n++){const i=this.allExpressions[n];if(t.has(i))continue;t.add(i);const r=e(i)??i;r!==i&&t.has(r)||(t.add(r),this.setExpressionAt(n,r),r.iterate(e,t))}}some(e){return this.allExpressions.some(t=>e(t)||t.some(e))}}class ys extends ft{constructor(){super(...arguments),this.type="VoidExpression"}get allExpressions(){return[]}setExpressionAt(){}isStatic(){return!0}eval(){return 0}toString(){return""}}class St extends ft{constructor(e,t,n,i){super(),this.left=e,this.right=t,this.operator=n,this.evalHelper=i,this.type="GenericOperatorExpression"}get allExpressions(){return[this.left,this.right]}setExpressionAt(e,t){e===0?this.left=t:e===1&&(this.right=t)}isStatic(){return this.left.isStatic()&&this.right.isStatic()}eval(){return this.evalHelper(this.left,this.right)}toString(){return`${this.left.toString()}${this.operator}${this.right.toString()}`}}const A0=(s,e)=>{const t=s.eval(),n=e.eval();if(typeof t!="number"&&typeof t!="boolean"||typeof n!="number"&&typeof n!="boolean")throw new Error(`Cannot use numeric operators for expression "${t} + ${n}"`);return t+n},y0=(s,e)=>{const t=s.eval(),n=e.eval();if(typeof t!="number"&&typeof t!="boolean"||typeof n!="number"&&typeof n!="boolean")throw new Error(`Cannot use numeric operators for expression "${t} - ${n}"`);return t-n},M0=(s,e)=>{const t=s.eval(),n=e.eval();if(typeof t!="number"&&typeof t!="boolean"||typeof n!="number"&&typeof n!="boolean")throw new Error(`Cannot use numeric operators for expression "${t} / ${n}"`);return t/n},E0=(s,e)=>{const t=s.eval(),n=e.eval();if(typeof t!="number"&&typeof t!="boolean"||typeof n!="number"&&typeof n!="boolean")throw new Error(`Cannot use numeric operators for expression "${t} * ${n}"`);return t*n},w0=(s,e)=>{if(s.setPointer)return s.setPointer(e.eval()),0;throw Error("Cannot assign to "+s.type)};class Ms{constructor(e=0){this.precedence=e}parse(e,t,n){const i=e.parseExpression(this.precedence),r=n.getText();switch(r){case"+":return new St(t,i,r,A0);case"-":return new St(t,i,r,y0);case"*":return new St(t,i,r,E0);case"/":return new St(t,i,r,M0);case"=":return new St(t,i,"=",w0);default:throw new Error("Operator not implemented")}}}var tt;(function(s){s[s.SCOPE=1]="SCOPE",s[s.STATEMENT=2]="STATEMENT",s[s.ASSIGNMENT=3]="ASSIGNMENT",s[s.CONDITIONAL=4]="CONDITIONAL",s[s.ARRAY_ACCESS=5]="ARRAY_ACCESS",s[s.NULLISH_COALESCING=6]="NULLISH_COALESCING",s[s.AND=7]="AND",s[s.OR=8]="OR",s[s.EQUALS_COMPARE=9]="EQUALS_COMPARE",s[s.COMPARE=10]="COMPARE",s[s.SUM=11]="SUM",s[s.PRODUCT=12]="PRODUCT",s[s.EXPONENT=13]="EXPONENT",s[s.PREFIX=14]="PREFIX",s[s.POSTFIX=15]="POSTFIX",s[s.FUNCTION=16]="FUNCTION"})(tt||(tt={}));class S0 extends ft{constructor(e,t){super(),this.tokenType=e,this.expression=t,this.type="PrefixExpression"}get allExpressions(){return[this.expression]}setExpressionAt(e,t){this.expression=t}isStatic(){return this.expression.isStatic()}eval(){const e=this.expression.eval();if(typeof e!="number")throw new Error(`Cannot use "${this.tokenType}" operator in front of ${typeof e} "${e}"`);switch(this.tokenType){case"MINUS":return-e;case"BANG":return!e}}toString(){switch(this.tokenType){case"MINUS":return"-"+this.expression.toString();case"BANG":return"!"+this.expression.toString()}throw new Error(`Unknown prefix operator: "${this.tokenType}"`)}}class Zc{constructor(e=0){this.precedence=e}parse(e,t){return new S0(t.getType(),e.parseExpression(this.precedence))}}class $c extends ft{constructor(e){super(),this.value=e,this.type="NumberExpression"}get allExpressions(){return[]}setExpressionAt(){}isStatic(){return!0}eval(){return this.value}toString(){const e=""+this.value;return e.startsWith("0.")?e.slice(1):e}}class b0{constructor(e=0){this.precedence=e}parse(e,t){return new $c(Number(t.getText()))}}class Qi extends ft{constructor(e,t,n=!1){super(),this.executionEnv=e,this.name=t,this.isFunctionCall=n,this.type="NameExpression"}get allExpressions(){return[]}setExpressionAt(){}isStatic(){return!1}setPointer(e){this.executionEnv.setAt(this.name,e)}setFunctionCall(e=!0){this.isFunctionCall=e}setName(e){this.name=e}setExecutionEnv(e){this.executionEnv=e}eval(){const e=this.executionEnv.getFrom(this.name);return this.isFunctionCall||typeof e!="function"?e:e()}toString(){return this.name}}class T0 extends ft{constructor(e,t){super(),this.leftExpr=e,this.rightExpr=t,this.type="NameExpression"}get allExpressions(){return[this.leftExpr,this.rightExpr]}setExpressionAt(e,t){if(!(t instanceof Qi))throw new Error('Cannot use context switch operator "->" on '+t.type);e===0?this.leftExpr=t:e===1&&(this.rightExpr=t)}isStatic(){return!1}eval(){const e=this.leftExpr.eval();return typeof e!="object"?0:(this.rightExpr.setExecutionEnv(new Xa(e,this.rightExpr.executionEnv.config)),this.rightExpr.eval())}toString(){return`${this.leftExpr.toString()}->${this.rightExpr.toString()}`}}class C0{constructor(e=0){this.precedence=e}parse(e,t){const n=new Qi(e.executionEnv,t.getText()),i=[e.lookAhead(0),e.lookAhead(1)];if(i[0].getType()==="MINUS"&&i[1].getType()==="GREATER"){e.consume("MINUS"),e.consume("GREATER");const r=e.parseExpression(tt.FUNCTION-1);if(r.type!=="NameExpression"&&r.type!=="FunctionExpression")throw new Error('Cannot use context switch operator "->" on '+r.type);return new T0(n,r)}return n}}class kn extends ft{constructor(e,t){super(),this.expression=e,this.brackets=t,this.type="GroupExpression"}get allExpressions(){return[this.expression]}setExpressionAt(e,t){this.expression=t}isStatic(){return this.expression.isStatic()}get isReturn(){return this.expression.isReturn}get isBreak(){return this.expression.isBreak}get isContinue(){return this.expression.isContinue}eval(){return this.expression.eval()}toString(){return`${this.brackets[0]}${this.expression.toString()}${this.brackets[1]}`}}class R0{constructor(e=0){this.precedence=e}parse(e,t){const n=e.parseExpression(this.precedence);return e.consume("RIGHT_PARENT"),e.config.keepGroups?new kn(n,"()"):n}}class ji extends ft{constructor(e){super(),this.expression=e,this.type="ReturnExpression",this.isReturn=!0}get allExpressions(){return[this.expression]}setExpressionAt(e,t){this.expression=t}isStatic(){return!1}eval(){return this.expression.eval()}toString(){return"return "+this.expression.toString()}}class P0{constructor(e=0){this.precedence=e}parse(e,t){const n=e.parseExpression(tt.STATEMENT+1);return new ji(e.match("SEMICOLON",!1)?n:new $c(0))}}class qi extends ft{constructor(e,t=!1){super(),this.value=e,this.isReturn=t,this.type="StaticExpression"}get allExpressions(){return[]}setExpressionAt(){}isStatic(){return!0}eval(){return this.value}toString(){let e=this.value;return typeof e=="string"&&(e=`'${e}'`),this.isReturn?"return "+e:""+e}}class on extends ft{constructor(e){super(),this.expressions=e,this.type="StatementExpression",this.didReturn=void 0,this.wasLoopBroken=!1,this.wasLoopContinued=!1}get allExpressions(){return this.expressions}setExpressionAt(e,t){this.expressions[e]=t}get isReturn(){if(this.didReturn!==void 0)return this.didReturn;let e=0;for(;e<this.expressions.length;){const t=this.expressions[e];if(t.isBreak||t.isContinue)return!1;if(t.isReturn)return this.didReturn=!0,!0;e++}return this.didReturn=!1,!1}get isBreak(){return!!this.wasLoopBroken&&(this.wasLoopBroken=!1,!0)}get isContinue(){return!!this.wasLoopContinued&&(this.wasLoopContinued=!1,!0)}isStatic(){let e=0;for(;e<this.expressions.length;){if(!this.expressions[e].isStatic())return!1;e++}return!0}eval(){this.didReturn=!1,this.wasLoopBroken=!1,this.wasLoopContinued=!1;let e=0;for(;e<this.expressions.length;){let t=this.expressions[e].eval();if(this.expressions[e].isReturn)return this.didReturn=!0,t;if(this.expressions[e].isContinue)return void(this.wasLoopContinued=!0);if(this.expressions[e].isBreak)return void(this.wasLoopBroken=!0);e++}return 0}toString(){let e="";for(const t of this.expressions){if(t instanceof ys||t instanceof qi&&!t.isReturn)continue;const n=t.toString();n&&(e+=n+";")}return e}}class L0{constructor(e=0){this.precedence=e}findReEntryPoint(e){let t=1,n=e.lookAhead(0).getType();for(;n!=="EOF"&&(n=="CURLY_RIGHT"?t--:n==="CURLY_LEFT"&&t++,t!==0);)e.consume(),n=e.lookAhead(0).getType()}parse(e,t,n){if(e.config.useOptimizer&&(t.isStatic()&&(t=new qi(t.eval(),t.isReturn)),e.config.earlyReturnsSkipParsing&&t.isReturn))return e.config.earlyReturnsSkipTokenization||this.findReEntryPoint(e),new on([t]);const i=[t];if(!e.match("CURLY_RIGHT",!1))do{let r=e.parseExpression(this.precedence);if(e.config.useOptimizer){if(r.isStatic()){if(e.config.useAgressiveStaticOptimizer&&!r.isReturn)continue;r=new qi(r.eval(),r.isReturn)}if(e.config.earlyReturnsSkipParsing&&(r.isBreak||r.isContinue||r.isReturn))return i.push(r),e.config.earlyReturnsSkipTokenization||this.findReEntryPoint(e),new on(i)}i.push(r)}while(e.match("SEMICOLON")&&!e.match("EOF")&&!e.match("CURLY_RIGHT",!1));return e.match("SEMICOLON"),new on(i)}}class Ya extends ft{constructor(e){super(),this.name=e,this.type="StringExpression"}get allExpressions(){return[]}setExpressionAt(){}isStatic(){return!0}eval(){return this.name.substring(1,this.name.length-1)}toString(){return this.name}}class I0{constructor(e=0){this.precedence=e}parse(e,t){return new Ya(t.getText())}}class D0 extends ft{constructor(e,t){super(),this.name=e,this.args=t,this.type="FunctionExpression"}get allExpressions(){return[this.name,...this.args]}setExpressionAt(e,t){e===0?this.name=t:e>0&&(this.args[e-1]=t)}setExecutionEnv(e){this.name.setExecutionEnv(e)}get executionEnv(){return this.name.executionEnv}isStatic(){return!1}eval(){const e=[];let t=0;for(;t<this.args.length;)e.push(this.args[t++].eval());const n=this.name.eval();if(typeof n!="function")throw new Error(this.name.toString()+" is not callable!");return n(...e)}toString(){let e=this.name.toString()+"(";for(let t=0;t<this.args.length;t++)e+=`${this.args[t].toString()}${t+1<this.args.length?",":""}`;return e+")"}}class U0{constructor(e=0){this.precedence=e}parse(e,t,n){const i=[];if(!t.setFunctionCall)throw new Error(t.type+" is not callable!");if(t.setFunctionCall(!0),!e.match("RIGHT_PARENT")){do i.push(e.parseExpression());while(e.match("COMMA"));e.consume("RIGHT_PARENT")}return new D0(t,i)}}class F0 extends ft{constructor(e,t){super(),this.name=e,this.lookup=t,this.type="ArrayAccessExpression"}get allExpressions(){return[this.name,this.lookup]}setExpressionAt(e,t){e===0?this.name=t:e===1&&(this.lookup=t)}isStatic(){return!1}setPointer(e){this.name.eval()[this.lookup.eval()]=e}eval(){return this.name.eval()[this.lookup.eval()]}toString(){return`${this.name.toString()}[${this.lookup.toString()}]`}}class N0{constructor(e=0){this.precedence=e}parse(e,t,n){const i=e.parseExpression(this.precedence-1);if(!t.setPointer)throw new Error(`"${t.type}" is not an array`);if(!e.match("ARRAY_RIGHT"))throw new Error(`No closing bracket for opening bracket "[${i.eval()}"`);return new F0(t,i)}}class O0{constructor(e=0){this.precedence=e}parse(e,t){let n=e.parseExpression(this.precedence);return e.config.useOptimizer&&e.config.earlyReturnsSkipTokenization&&n.isReturn?e.match("CURLY_RIGHT"):e.consume("CURLY_RIGHT"),e.config.keepGroups?new kn(n,"{}"):n}}class B0 extends ft{constructor(e,t){super(),this.count=e,this.expression=t,this.type="LoopExpression"}get allExpressions(){return[this.count,this.expression]}get isNoopLoop(){return this.count.isStatic()&&this.count.eval()===0}setExpressionAt(e,t){e===0?this.count=t:e===1&&(this.expression=t)}get isReturn(){return!this.isNoopLoop&&this.expression.isReturn}isStatic(){return this.count.isStatic()&&this.expression.isStatic()}eval(){const e=Number(this.count.eval());if(e===0)return 0;if(Number.isNaN(e))throw new Error(`First loop() argument must be of type number, received "${typeof this.count.eval()}"`);if(e>1024)throw new Error(`Cannot loop more than 1024x times, received "${e}"`);let t=0;for(;t<e;){t++;const n=this.expression.eval();if(this.expression.isBreak)break;if(!this.expression.isContinue&&this.expression.isReturn)return n}return 0}toString(){return this.isNoopLoop?"":`loop(${this.count.toString()},${this.expression.toString()})`}}class k0{constructor(e=0){this.precedence=e}parse(e,t){e.consume("LEFT_PARENT");const n=[];if(e.match("RIGHT_PARENT"))throw new Error("loop() called without arguments");do n.push(e.parseExpression());while(e.match("COMMA"));if(e.consume("RIGHT_PARENT"),n.length!==2)throw new Error("There must be exactly two loop() arguments; found "+n.length);return new B0(n[0],n[1])}}class z0 extends ft{constructor(e,t,n){if(super(),this.variable=e,this.arrayExpression=t,this.expression=n,this.type="ForEachExpression",!this.variable.setPointer)throw new Error(`First for_each() argument must be a variable, received "${typeof this.variable.eval()}"`)}get isReturn(){return this.expression.isReturn}get allExpressions(){return[this.variable,this.arrayExpression,this.expression]}setExpressionAt(e,t){e===0?this.variable=t:e===1?this.arrayExpression=t:e===2&&(this.expression=t)}isStatic(){return this.variable.isStatic()&&this.arrayExpression.isStatic()&&this.expression.isStatic()}eval(){var n,i;const e=this.arrayExpression.eval();if(!Array.isArray(e))throw new Error(`Second for_each() argument must be an array, received "${typeof e}"`);let t=0;for(;t<e.length;){(i=(n=this.variable).setPointer)==null||i.call(n,e[t++]);const r=this.expression.eval();if(this.expression.isBreak)break;if(!this.expression.isContinue&&this.expression.isReturn)return r}return 0}toString(){return`for_each(${this.variable.toString()},${this.arrayExpression.toString()},${this.expression.toString()})`}}class H0{constructor(e=0){this.precedence=e}parse(e,t){e.consume("LEFT_PARENT");const n=[];if(e.match("RIGHT_PARENT"))throw new Error("for_each() called without arguments");do n.push(e.parseExpression());while(e.match("COMMA"));if(e.consume("RIGHT_PARENT"),n.length!==3)throw new Error("There must be exactly three for_each() arguments; found "+n.length);return new z0(n[0],n[1],n[2])}}class G0 extends ft{constructor(){super(),this.type="ContinueExpression",this.isContinue=!0}get allExpressions(){return[]}setExpressionAt(){}isStatic(){return!1}eval(){return 0}toString(){return"continue"}}class V0{constructor(e=0){this.precedence=e}parse(e,t){return new G0}}class W0 extends ft{constructor(){super(),this.type="BreakExpression",this.isBreak=!0}get allExpressions(){return[]}setExpressionAt(){}isStatic(){return!1}eval(){return 0}isString(){return"break"}}class X0{constructor(e=0){this.precedence=e}parse(e,t){return new W0}}class Y0 extends ft{constructor(e){super(),this.value=e,this.type="BooleanExpression"}get allExpressions(){return[]}setExpressionAt(){}isStatic(){return!0}eval(){return this.value}}class Jc{constructor(e=0){this.precedence=e}parse(e,t){return new Y0(t.getText()==="true")}}class Q0{constructor(e=0){this.precedence=e}parse(e,t,n){return new St(t,e.parseExpression(this.precedence),"==",(i,r)=>i.eval()===r.eval())}}class j0{constructor(e=0){this.precedence=e}parse(e,t,n){if(e.match("EQUALS"))return new St(t,e.parseExpression(this.precedence),"!=",(i,r)=>i.eval()!==r.eval());throw new Error("! was used as a binary operator")}}class q0{constructor(e=0){this.precedence=e}parse(e,t,n){if(e.match("AND"))return new St(t,e.parseExpression(this.precedence),"&&",(i,r)=>i.eval()&&r.eval());throw new Error('"&" not followed by another "&"')}}class K0{constructor(e=0){this.precedence=e}parse(e,t,n){if(e.match("OR"))return new St(t,e.parseExpression(this.precedence),"||",(i,r)=>i.eval()||r.eval());throw new Error('"|" not followed by another "|"')}}class Z0{constructor(e=0){this.precedence=e}parse(e,t,n){return e.match("EQUALS")?new St(t,e.parseExpression(this.precedence),"<=",(i,r)=>i.eval()<=r.eval()):new St(t,e.parseExpression(this.precedence),"<",(i,r)=>i.eval()<r.eval())}}class $0{constructor(e=0){this.precedence=e}parse(e,t,n){return e.match("EQUALS")?new St(t,e.parseExpression(this.precedence),">=",(i,r)=>i.eval()>=r.eval()):new St(t,e.parseExpression(this.precedence),">",(i,r)=>i.eval()>r.eval())}}class eh extends ft{constructor(e,t,n){super(),this.leftExpression=e,this.thenExpression=t,this.elseExpression=n,this.type="TernaryExpression"}get allExpressions(){return this.leftExpression.isStatic()?[this.leftExpression,this.leftExpression.eval()?this.thenExpression:this.elseExpression]:[this.leftExpression,this.thenExpression,this.elseExpression]}setExpressionAt(e,t){e===0?this.leftExpression=t:e===1?this.thenExpression=t:e===2&&(this.elseExpression=t)}get isReturn(){return this.leftResult===void 0?this.thenExpression.isReturn&&this.elseExpression.isReturn:this.leftResult?this.thenExpression.isReturn:this.elseExpression.isReturn}get hasReturn(){return this.thenExpression.isReturn||this.elseExpression.isReturn}get isContinue(){return this.leftResult===void 0?this.thenExpression.isContinue&&this.elseExpression.isContinue:this.leftResult?this.thenExpression.isContinue:this.elseExpression.isContinue}get isBreak(){return this.leftResult===void 0?this.thenExpression.isBreak&&this.elseExpression.isBreak:this.leftResult?this.thenExpression.isBreak:this.elseExpression.isBreak}isStatic(){return this.leftExpression.isStatic()&&this.thenExpression.isStatic()&&this.elseExpression.isStatic()}eval(){return this.leftResult=this.leftExpression.eval(),this.leftResult?this.thenExpression.eval():this.elseExpression.eval()}toString(){return this.elseExpression instanceof ys?`${this.leftExpression.toString()}?${this.thenExpression.toString()}`:`${this.leftExpression.toString()}?${this.thenExpression.toString()}:${this.elseExpression.toString()}`}}const J0=new class{constructor(s=0){this.precedence=s,this.exprName="Ternary"}parse(s,e,t){let n,i=s.parseExpression(this.precedence-1);return n=s.match("COLON")?s.parseExpression(this.precedence-1):new ys,s.config.useOptimizer&&e.isStatic()?e.eval()?i:n:new eh(e,i,n)}}(tt.CONDITIONAL);class e_{constructor(e=0){this.precedence=e}parse(e,t,n){return e.match("QUESTION")?new St(t,e.parseExpression(this.precedence),"??",(i,r)=>i.eval()??r.eval()):J0.parse(e,t,n)}}class th extends class{constructor(e){this.config=e,this.prefixParselets=new Map,this.infixParselets=new Map,this.readTokens=[],this.tokenIterator=new Qc}updateConfig(e){this.config=e}init(e){this.tokenIterator.init(e),this.readTokens=[]}setTokenizer(e){this.tokenIterator=e}setExecutionEnvironment(e){this.executionEnv=e}parseExpression(e=0){let t=this.consume();if(t.getType()==="EOF")return new ys;const n=this.prefixParselets.get(t.getType());if(!n)throw new Error(`Cannot parse ${t.getType()} expression "${t.getType()}"`);let i=n.parse(this,t);return this.parseInfixExpression(i,e)}parseInfixExpression(e,t=0){let n;for(;this.getPrecedence()>t;){n=this.consume();let i=n.getType();i!=="EQUALS"||this.match("EQUALS")||(i="ASSIGN");const r=this.infixParselets.get(i);if(!r)throw new Error(`Unknown infix parselet: "${i}"`);e=r.parse(this,e,n)}return e}getPrecedence(){const e=this.infixParselets.get(this.lookAhead(0).getType());return(e==null?void 0:e.precedence)??0}consume(e){const t=this.lookAhead(0);if(e&&t.getType()!==e)throw new Error(`Expected token "${e}" and found "${t.getType()}"`);return this.readTokens.shift(),t}match(e,t=!0){return this.lookAhead(0).getType()===e&&(t&&this.consume(),!0)}lookAhead(e){for(;e>=this.readTokens.length;)this.readTokens.push(this.tokenIterator.next());return this.readTokens[e]}registerInfix(e,t){this.infixParselets.set(e,t)}registerPrefix(e,t){this.prefixParselets.set(e,t)}getInfix(e){return this.infixParselets.get(e)}getPrefix(e){return this.prefixParselets.get(e)}}{constructor(e){super(e),this.registerPrefix("NAME",new C0),this.registerPrefix("STRING",new I0),this.registerPrefix("NUMBER",new b0),this.registerPrefix("TRUE",new Jc(tt.PREFIX)),this.registerPrefix("FALSE",new Jc(tt.PREFIX)),this.registerPrefix("RETURN",new P0),this.registerPrefix("CONTINUE",new V0),this.registerPrefix("BREAK",new X0),this.registerPrefix("LOOP",new k0),this.registerPrefix("FOR_EACH",new H0),this.registerInfix("QUESTION",new e_(tt.CONDITIONAL)),this.registerPrefix("LEFT_PARENT",new R0),this.registerInfix("LEFT_PARENT",new U0(tt.FUNCTION)),this.registerInfix("ARRAY_LEFT",new N0(tt.ARRAY_ACCESS)),this.registerPrefix("CURLY_LEFT",new O0(tt.SCOPE)),this.registerInfix("SEMICOLON",new L0(tt.STATEMENT)),this.registerPrefix("MINUS",new Zc(tt.PREFIX)),this.registerPrefix("BANG",new Zc(tt.PREFIX)),this.registerInfix("PLUS",new Ms(tt.SUM)),this.registerInfix("MINUS",new Ms(tt.SUM)),this.registerInfix("ASTERISK",new Ms(tt.PRODUCT)),this.registerInfix("SLASH",new Ms(tt.PRODUCT)),this.registerInfix("EQUALS",new Q0(tt.EQUALS_COMPARE)),this.registerInfix("BANG",new j0(tt.EQUALS_COMPARE)),this.registerInfix("GREATER",new $0(tt.COMPARE)),this.registerInfix("SMALLER",new Z0(tt.COMPARE)),this.registerInfix("AND",new q0(tt.AND)),this.registerInfix("OR",new K0(tt.OR)),this.registerInfix("ASSIGN",new Ms(tt.ASSIGNMENT))}}class t_{constructor(e=0){this.precedence=e}parse(e,t){if(e.consume("LEFT_PARENT"),e.match("RIGHT_PARENT"))throw new Error("function() called without arguments");let n,i,r=[];do{const a=e.parseExpression();if(a instanceof Ya)i?r.push(a.eval()):i=a.eval();else{if(!(a instanceof on||a instanceof kn))throw new Error(`Unexpected expresion: found "${a.constructor.name}"`);n=a}}while(e.match("COMMA"));if(e.consume("RIGHT_PARENT"),!i)throw new Error(`Missing function() name (argument 1); found "${i}"`);if(!n)throw new Error(`Missing function() body (argument ${r.length+2})`);if(e.lookAhead(0).getType()!=="SEMICOLON")throw new Error("Missing semicolon after function expression");return new n_(e.functions,i,r,n)}}class n_ extends ft{constructor(e,t,n,i){super(),this.functionBody=i,this.type="CustomFunctionExpression",e.set(t.toLowerCase(),[n,i instanceof kn?i.allExpressions[0].toString():i.toString()])}get allExpressions(){return[this.functionBody]}setExpressionAt(e,t){this.functionBody=t}get isReturn(){return!1}isStatic(){return!0}eval(){return 0}}class nh{constructor(e={},t={}){this.config=t,this.expressionCache={},this.totalCacheEntries=0,t.useOptimizer===void 0&&(this.config.useOptimizer=!0),t.useCache===void 0&&(this.config.useCache=!0),t.earlyReturnsSkipParsing===void 0&&(this.config.earlyReturnsSkipParsing=!0),t.earlyReturnsSkipTokenization===void 0&&(this.config.earlyReturnsSkipTokenization=!0),t.convertUndefined===void 0&&(this.config.convertUndefined=!1),this.parser=new th({...this.config,tokenizer:void 0}),this.updateExecutionEnv(e,t.assumeFlatEnvironment)}updateConfig(e){(e=Object.assign(this.config,e)).tokenizer&&this.parser.setTokenizer(e.tokenizer),this.parser.updateConfig({...this.config,tokenizer:void 0}),this.executionEnvironment.updateConfig(e)}updateExecutionEnv(e,t=!1){this.executionEnvironment=new Xa(e,{useRadians:this.config.useRadians,convertUndefined:this.config.convertUndefined,isFlat:t,variableHandler:this.config.variableHandler}),this.parser.setExecutionEnvironment(this.executionEnvironment)}clearCache(){this.expressionCache={},this.totalCacheEntries=0}execute(e){this.parser.setExecutionEnvironment(this.executionEnvironment);const t=this.parse(e).eval();return t===void 0?0:typeof t=="boolean"?Number(t):t}executeAndCatch(e){try{return this.execute(e)}catch{return 0}}parse(e){if(this.config.useCache??1){const n=this.expressionCache[e];if(n)return n}this.parser.init(e);let t=this.parser.parseExpression();return(this.config.useOptimizer??1)&&t.isStatic()&&(t=new qi(t.eval())),(this.config.useCache??1)&&(this.totalCacheEntries>(this.config.maxCacheSize||256)&&this.clearCache(),this.expressionCache[e]=t,this.totalCacheEntries++),t}resolveStatic(e){return e=(e=e.walk(t=>{if(!(t instanceof Ya))return t.isStatic()?new qi(t.eval()):void 0})).walk(t=>{if(t instanceof St)switch(t.operator){case"+":case"-":{const n=t.allExpressions.find(i=>i.isStatic()&&i.eval()===0);if(n)return t.allExpressions.find(i=>i!==n);break}case"*":if(t.allExpressions.find(n=>n.isStatic()&&n.eval()===0))return new qi(0);case"*":case"/":{const n=t.allExpressions.find(i=>i.isStatic()&&i.eval()===1);if(n)return t.allExpressions.find(i=>i!==n);break}}})}minimize(e){e=this.resolveStatic(e);const t=new Map([["query.","q."],["variable.","v."],["context.","c."],["temp.","t."]]);e=e.walk(i=>{if(i instanceof Qi){const r=i.toString();for(const[a,o]of t)r.startsWith(a)&&i.setName(r.replace(a,o));return i}});const n=new Map;return e=e.walk(i=>{if(i instanceof Qi){const r=i.toString();if(!r.startsWith("v.")&&!r.startsWith("t."))return;if(n.has(r))i.setName(n.get(r));else{const a="v.v"+n.size;n.set(r,a),i.setName(a)}return i}})}getParser(){return this.parser}}class i_ extends th{constructor(e){super(e),this.functions=new Map,this.classes=new Map,this.registerPrefix("FUNCTION",new t_)}reset(){this.functions.clear()}}class ih{constructor(e){this.parser=new i_({useCache:!1,useOptimizer:!0,useAgressiveStaticOptimizer:!0,keepGroups:!0,earlyReturnsSkipParsing:!1,earlyReturnsSkipTokenization:!1}),this.parser.setExecutionEnvironment(new Xa(this.parser,e)),this.parser.setTokenizer(new Qc(new Set(["function"])))}get functions(){return this.parser.functions}parse(e){return this.parser.init(e.replace(/\"/g,"'")),this.parser.parseExpression()}transform(e){const t=new nh({},{useCache:!1,keepGroups:!0,useOptimizer:!0,useAgressiveStaticOptimizer:!0,earlyReturnsSkipParsing:!0,earlyReturnsSkipTokenization:!1});let n=0,i=t.parse(e),r=!1;i instanceof on&&(r=!0);let a=!1;i=i.walk(l=>{if(l.type!=="FunctionExpression")return;const c=l.name.name.replace(/(f|function)\./g,""),u=l.args;let[h,d]=this.functions.get(c)??[];if(!d||!h)return;d=d.replace(/(a|arg)\.(\w+)/g,(v,m,f)=>{var x;return(((x=u[h.indexOf(f)])==null?void 0:x.toString())??"0").replace(/(t|temp)\./,"outer_temp.")});let p=function(v){if(v instanceof ji)return new kn(v.allExpressions[0],"()");if(!(v instanceof on)||v.allExpressions.length>1)return v;const m=v.allExpressions[0];return m instanceof ji?new kn(m.allExpressions[0],"()"):v}(t.parse(d));if(p instanceof on){const v=p.allExpressions.some(f=>f instanceof ji),m=v||p.some(f=>f instanceof ji);p=t.parse(`({${d}}+${m?v?"t.return_value":"(t.return_value??0)":"0"})`),a=!0}const g=new Map;return p=p.walk(v=>{if(v instanceof Qi){let m=v.toString().split(".");const f=m.shift(),[x,..._]=m,w=_.length>0?"."+_.join("."):"";if(f==="t"||f==="temp"){let M=g.get(x);M||(M="t.__scvar"+n++,g.set(x,M)),v.setName(`${M}${w}`)}else f==="outer_temp"&&v.setName(`t.${x}${w}`)}else{if(v instanceof ji){const m=new Qi(t.getParser().executionEnv,"t.return_value"),f=v.allExpressions[0];return new St(m,f,"=",()=>{m.setPointer(f.eval())})}if(v instanceof on){const m=[];for(let f=0;f<v.allExpressions.length;f++){const x=v.allExpressions[f];if(x instanceof eh&&x.hasReturn){s_(x,v.allExpressions.slice(f+1)),m.push(x);break}if(x.isReturn){m.push(x);break}m.push(x)}return new on(m)}}}),p});const o=t.parse(i.toString());return t.resolveStatic(o),!r&&a?`return ${o.toString()};`:o.toString()}reset(){this.functions.clear()}}function s_(s,e){if(s.isReturn)return;const t=s.allExpressions[2].isReturn?1:2,n=s.allExpressions[t];n instanceof ys||(n instanceof kn&&n.allExpressions[0]instanceof on?e.unshift(...n.allExpressions):e.unshift(n)),e.length>0&&s.setExpressionAt(t,new kn(new on(e),"{}"))}var We={};Object.defineProperty(We,"__esModule",{value:!0});function r_(s,e,t,n){return t*(s/=n)*s+e}var a_=We.easeInQuad=r_;function o_(s,e,t,n){return-t*(s/=n)*(s-2)+e}var l_=We.easeOutQuad=o_;function c_(s,e,t,n){return(s/=n/2)<1?t/2*s*s+e:-t/2*(--s*(s-2)-1)+e}var h_=We.easeInOutQuad=c_;function u_(s,e,t,n){return t*(s/=n)*s*s+e}var d_=We.easeInCubic=u_;function f_(s,e,t,n){return t*((s=s/n-1)*s*s+1)+e}var p_=We.easeOutCubic=f_;function m_(s,e,t,n){return(s/=n/2)<1?t/2*s*s*s+e:t/2*((s-=2)*s*s+2)+e}var g_=We.easeInOutCubic=m_;function v_(s,e,t,n){return t*(s/=n)*s*s*s+e}var __=We.easeInQuart=v_;function x_(s,e,t,n){return-t*((s=s/n-1)*s*s*s-1)+e}var A_=We.easeOutQuart=x_;function y_(s,e,t,n){return(s/=n/2)<1?t/2*s*s*s*s+e:-t/2*((s-=2)*s*s*s-2)+e}var M_=We.easeInOutQuart=y_;function E_(s,e,t,n){return t*(s/=n)*s*s*s*s+e}var w_=We.easeInQuint=E_;function S_(s,e,t,n){return t*((s=s/n-1)*s*s*s*s+1)+e}var b_=We.easeOutQuint=S_;function T_(s,e,t,n){return(s/=n/2)<1?t/2*s*s*s*s*s+e:t/2*((s-=2)*s*s*s*s+2)+e}var C_=We.easeInOutQuint=T_;function R_(s,e,t,n){return-t*Math.cos(s/n*(Math.PI/2))+t+e}var P_=We.easeInSine=R_;function L_(s,e,t,n){return t*Math.sin(s/n*(Math.PI/2))+e}var I_=We.easeOutSine=L_;function D_(s,e,t,n){return-t/2*(Math.cos(Math.PI*s/n)-1)+e}var U_=We.easeInOutSine=D_;function F_(s,e,t,n){return s===0?e:t*Math.pow(2,10*(s/n-1))+e}var N_=We.easeInExpo=F_;function O_(s,e,t,n){return s===n?e+t:t*(-Math.pow(2,-10*s/n)+1)+e}var B_=We.easeOutExpo=O_;function k_(s,e,t,n){return s===0?e:s===n?e+t:(s/=n/2)<1?t/2*Math.pow(2,10*(s-1))+e:t/2*(-Math.pow(2,-10*--s)+2)+e}var z_=We.easeInOutExpo=k_;function H_(s,e,t,n){return-t*(Math.sqrt(1-(s/=n)*s)-1)+e}var G_=We.easeInCirc=H_;function V_(s,e,t,n){return t*Math.sqrt(1-(s=s/n-1)*s)+e}var W_=We.easeOutCirc=V_;function X_(s,e,t,n){return(s/=n/2)<1?-t/2*(Math.sqrt(1-s*s)-1)+e:t/2*(Math.sqrt(1-(s-=2)*s)+1)+e}var Y_=We.easeInOutCirc=X_;function Q_(s,e,t,n){var i=1.70158,r=0,a=t;return s===0?e:(s/=n)===1?e+t:(r||(r=n*.3),a<Math.abs(t)?(a=t,i=r/4):i=r/(2*Math.PI)*Math.asin(t/a),-(a*Math.pow(2,10*(s-=1))*Math.sin((s*n-i)*(2*Math.PI)/r))+e)}var j_=We.easeInElastic=Q_;function q_(s,e,t,n){var i=1.70158,r=0,a=t;return s===0?e:(s/=n)===1?e+t:(r||(r=n*.3),a<Math.abs(t)?(a=t,i=r/4):i=r/(2*Math.PI)*Math.asin(t/a),a*Math.pow(2,-10*s)*Math.sin((s*n-i)*(2*Math.PI)/r)+t+e)}var K_=We.easeOutElastic=q_;function Z_(s,e,t,n){var i=1.70158,r=0,a=t;return s===0?e:(s/=n/2)===2?e+t:(r||(r=n*(.3*1.5)),a<Math.abs(t)?(a=t,i=r/4):i=r/(2*Math.PI)*Math.asin(t/a),s<1?-.5*(a*Math.pow(2,10*(s-=1))*Math.sin((s*n-i)*(2*Math.PI)/r))+e:a*Math.pow(2,-10*(s-=1))*Math.sin((s*n-i)*(2*Math.PI)/r)*.5+t+e)}var $_=We.easeInOutElastic=Z_;function J_(s,e,t,n,i){return i===void 0&&(i=1.70158),t*(s/=n)*s*((i+1)*s-i)+e}var ex=We.easeInBack=J_;function tx(s,e,t,n,i){return i===void 0&&(i=1.70158),t*((s=s/n-1)*s*((i+1)*s+i)+1)+e}var nx=We.easeOutBack=tx;function ix(s,e,t,n,i){return i===void 0&&(i=1.70158),(s/=n/2)<1?t/2*(s*s*(((i*=1.525)+1)*s-i))+e:t/2*((s-=2)*s*(((i*=1.525)+1)*s+i)+2)+e}var sx=We.easeInOutBack=ix;function sh(s,e,t,n){return t-Qa(n-s,0,t,n)+e}var rx=We.easeInBounce=sh;function Qa(s,e,t,n){return(s/=n)<1/2.75?t*(7.5625*s*s)+e:s<2/2.75?t*(7.5625*(s-=1.5/2.75)*s+.75)+e:s<2.5/2.75?t*(7.5625*(s-=2.25/2.75)*s+.9375)+e:t*(7.5625*(s-=2.625/2.75)*s+.984375)+e}var ax=We.easeOutBounce=Qa;function ox(s,e,t,n){return s<n/2?sh(s*2,0,t,n)*.5+e:Qa(s*2-n,0,t,n)*.5+t*.5+e}var lx=We.easeInOutBounce=ox;const rh={easeInSine:s=>P_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeOutSine:s=>I_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInOutSine:s=>U_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInQuad:s=>a_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeOutQuad:s=>l_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInOutQuad:s=>h_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInCubic:s=>d_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeOutCubic:s=>p_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInOutCubic:s=>g_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInExpo:s=>N_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeOutExpo:s=>B_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInOutExpo:s=>z_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInCirc:s=>G_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeOutCirc:s=>W_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInOutCirc:s=>Y_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInQuart:s=>__(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeOutQuart:s=>A_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInOutQuart:s=>M_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInQuint:s=>w_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeOutQuint:s=>b_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInOutQuint:s=>C_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInBack:s=>ex(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeOutBack:s=>nx(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInOutBack:s=>sx(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInElastic:s=>j_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeOutElastic:s=>K_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInOutElastic:s=>$_(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInBounce:s=>rx(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeOutBounce:s=>ax(s.elapsed,s.initialValue,s.amountOfChange,s.duration),easeInOutBounce:s=>lx(s.elapsed,s.initialValue,s.amountOfChange,s.duration)},Ar=(s,e)=>!e||!rh[e]?null:rh[e](s)||0;class cx{constructor(e,t,n,i,r){k(this,"isRunning",!1);k(this,"runOnce",!1);this.animator=e,this.animationData=t,this.state=n,this.defaultTransitionTicks=i,this.controllerName=r}getAnimator(){return this.animator}getState(){return this.state}getAnimationData(){return this.animationData}getDefaultTransitionTicks(){return this.defaultTransitionTicks}getControllerName(){return this.controllerName}parseMolangState(e){return this.animator.execute(e.plays_when)}parseBoneModifier(e){if(typeof e=="number")return[e,e,e];if(typeof e=="string"){const t=this.animator.execute(e);return[t,t,t]}if(Array.isArray(e))return e.map(t=>typeof t=="string"?this.animator.execute(t):t);if(e!==void 0&&"vector"in e&&Array.isArray(e.vector))return e.vector.map(t=>typeof t=="string"?this.animator.execute(t):t);if(e!==void 0){const t=Object.entries(e).map(([n,i])=>[Number(n),i]).sort(([n],[i])=>n-i);for(let n=t.length-1;n>=0;n--){let[i,r]=t[n];if(!(i>this.animator.getCurrentTime()))if(i===this.animator.getCurrentTime()){if(Array.isArray(r))return r.map(a=>typeof a=="string"?this.animator.execute(a):a);if(r&&"vector"in r)return r.vector.map(a=>typeof a=="string"?this.animator.execute(a):a);throw new Error("Format not supported yet")}else{let[a,o]=t[Ye.euclideanModulo(n+1,t.length)];const l=a-i;if(Array.isArray(r)&&Array.isArray(o))return r=r.map(c=>typeof c=="string"?this.animator.execute(c):c),o=o.map(c=>typeof c=="string"?this.animator.execute(c):c),i===t[t.length-1][0]&&(this.runOnce=!0),r.map((c,u)=>c+(o[u]-c)/l*(this.animator.getCurrentTime()-i));if(r&&"vector"in r&&"vector"in o){const c=o;return r=r.vector.map(u=>typeof u=="string"?this.animator.execute(u):u),o=o.vector.map(u=>typeof u=="string"?this.animator.execute(u):u),i===t[t.length-1][0]&&(this.runOnce=!0),r.map((u,h)=>{if(i===t[t.length-1][0]&&i!==this.animationData.animation_length&&this.runOnce===!0)return u;let d=Ar({elapsed:this.animator.getCurrentTime()-i,initialValue:r[h],amountOfChange:o[h]-r[h],duration:l},c.easing);return d==null&&(d=u+(o[h]-u)/l*(this.animator.getCurrentTime()-i)),d})}else throw new Error("Format not supported yet")}}}}get roundedCurrentTime(){return Math.round((Date.now()-this.animator.getStartTimestamp())/50)/20}}class ah{constructor(e){k(this,"animations",[]);k(this,"startTimestamp",0);k(this,"lastFrameTimestamp",0);k(this,"animationStartTimestamp",[]);k(this,"env",{query:{anim_time:()=>this.getCurrentTime(),delta_time:()=>this.startTimestamp-this.lastFrameTimestamp,life_time:()=>this.getAnimationStartTimestamp(),is_in_water_smooth:()=>this.isPlayerSwimming(),is_in_water_smooth_easeoutback:()=>this.isPlayerSwimming(),is_in_water:()=>this.isPlayerSwimming(),is_swimming:()=>this.isPlayerSwimming(),is_crouching:()=>this.isPlayerShifting(),instant_y_velocity:()=>0,ground_speed:()=>this.getPlayerSpeed(),absolute_speed:()=>this.getPlayerSpeed(),local_x_velocity:()=>0,local_z_velocity:()=>this.getPlayerSpeed(),local_y_velocity:()=>0,head_y_rotation:()=>0,head_x_rotation:()=>0,body_x_rotation:()=>0,body_y_rotation:()=>0,is_on_ground:()=>this.isOnGround(),is_elytra_flying:()=>this.isPlayerFlying(),is_on_ground_smooth_easeoutexpo:()=>this.isOnGround(),is_crouching_smooth_easeoutexpo:()=>this.isPlayerShifting(),y_velocity:()=>0,x_velocity:()=>0,z_velocity:()=>this.getPlayerSpeed(),is_flying:()=>this.isPlayerFlying(),is_slim_skin:()=>this.getModel().getPlayer().skin.slim?1:0,body_slot_equipped:()=>1,is_in_gui:()=>0,is_in_combat:()=>0,is_under_water:()=>0},variable:{is_slim_skin:()=>this.getModel().getPlayer().skin.slim?1:0,flap_wings:()=>0,is_not_og:()=>0,is_og:()=>1,is_c:()=>0,none:()=>1},context:{distance_moved:()=>0,ground_speed_smoothed:()=>this.getPlayerSpeed(),is_moving_smoothed:()=>this.getPlayerSpeed(),distance_from_surface_smoothed:()=>0,local_x_velocity_smoothed:()=>0,lvs_x:()=>0,local_y_velocity_smoothed:()=>0,lvs_y:()=>0,local_z_velocity_smoothed:()=>this.getPlayerSpeed(),lvs_z:()=>this.getPlayerSpeed(),local_x_velocity_smoothed4:()=>0,local_y_velocity_smoothed4:()=>0,local_z_velocity_smoothed4:()=>this.getPlayerSpeed(),z_move_dir_smoothed:()=>this.getPlayerSpeed(),x_move_dir_smoothed:()=>0,y_move_dir_smoothed:()=>0,x_velocity_smoothed:()=>0,y_velocity_smoothed:()=>0,z_velocity_smoothed:()=>this.getPlayerSpeed(),movement_speed_smoothed:()=>this.getPlayerSpeed(),entity_y_rotation_smoothed:()=>0,entity_y_rotation_smoothed_diff_smoothed:()=>0,afk_timer:()=>this.getCurrentTime(),normalized_ground_speed:()=>this.getPlayerSpeed()}});k(this,"molang",new nh(this.env));k(this,"customMolang",new ih(this.env));k(this,"currentAnimations",[]);k(this,"transitionBones",new Map);k(this,"elapsedTransitionTime",0);k(this,"isRunning",!0);k(this,"trackedMolang",{query:{},context:{},variable:{}});k(this,"activeControllerName");this.model=e;const t=e.getExtraMolang();if(t){let n="";for(const i of t){const r={};Object.keys(i.contexts).forEach(a=>{if(a in this.env.context)return;let o=i.contexts[a];o.includes("lunar.")&&(o=o.replace(/lunar\./g,"f.lunar."));const l=this.molang.executeAndCatch(o);r[a]=l,Object.assign(this.env.context,{...r}),this.molang.updateExecutionEnv(this.env),this.customMolang=new ih(this.env)}),this.customMolang.parse(n),i.functions!==""&&(n=i.functions)}if(Rn.enabled){const i=Rn.getInstance();i.createFolder("Molang"),i.createFolder("Query","Molang"),i.createFolder("Context","Molang"),i.createFolder("Variable","Molang")}}}setupDefaultBonePoses(){for(const e of this.model.getBoneMap().values())e.userData.defaultRotation=e.rotation.toArray(),e.userData.defaultPosition=e.position.toArray()}dispose(){for(const e of this.model.getBoneMap().values())delete e.userData.defaultRotation,delete e.userData.defaultPosition}addAnimation(e,t,n,i){const r=new cx(this,e,t,n,i);this.animations.unshift(r)}play(){this.isRunning===!0&&this.setStartTimestamp(Date.now()),this.isRunning=!0}pause(){this.isRunning=!1}tick(){Rn.enabled&&this.trackMolangEnv();for(const n of this.model.getBoneMap().keys()){const i=this.model.getBoneMap().get(n);i&&(i.rotation.set(...i.userData.defaultRotation),i.position.set(...i.userData.defaultPosition))}let e=!1;const t=[];this.animations.forEach(n=>{const i=n.getState(),r=(i==null?void 0:i.anim)||"main",a=n.getControllerName()||"main_controller";if(this.activeControllerName=a,t.includes(a))return;let o;if(i&&i.plays_when?o=this.execute(i.plays_when):o=1,o===1){const c=this.model.getBoneMap(),u=n.getAnimationData().bones;if((this.currentAnimations.length===0||!this.animationStartTimestamp.find(v=>v.controller_name===a))&&(this.setAnimationStartTimestamp(this.activeControllerName,Date.now()),e=!0),t.push(a),!u)return;let h;i!=null&&i.transition_ticks?h=i.transition_ticks:n.getDefaultTransitionTicks()&&(h=n.getDefaultTransitionTicks());const p=this.currentAnimations.filter(v=>v.controllerName===a).some(v=>v.anim===r),g=this.isTransitioning(a);if(r&&h&&!p&&!e||g){if(this.elapsedTransitionTime===0){this.setAnimationStartTimestamp(this.activeControllerName,Date.now()),this.transitionBones.clear();for(const v in u){const m=c.get(v);if(!m)continue;const f=this.parseAnimationBone(v,n);if(!f)continue;const x={};if(f!=null&&f.position){const _=m.position.toArray();x.position=f.position.map((w,M)=>(M===0?-1:1)*w+_[M])}if(f!=null&&f.rotation){const _=m.rotation.toArray();x.rotation=f.rotation.map(w=>Ye.degToRad(w)).map((w,M)=>_[M]+(M===2?w:-w))}f!=null&&f.scale&&(x.scale=f.scale),this.transitionBones.set(v,x)}this.setTransistioning(a,r,!0)}this.elapsedTransitionTime++;for(const v of this.transitionBones.keys()){const m=c.get(v),f=this.transitionBones.get(v);!f||!m||this.playTransition(n,m,f)}this.elapsedTransitionTime>=Number(h)*10&&(this.elapsedTransitionTime=0,this.setTransistioning(a,r,!1));return}p||this.currentAnimations.push({controllerName:a,anim:r});for(const v in u){const m=c.get(v);if(!m)continue;const f=this.parseAnimationBone(v,n);if(f!=null&&f.position){const x=m.position.toArray();m.position.set(...f.position.map((_,w)=>(w===0?-1:1)*_+x[w]))}if(f!=null&&f.rotation){const x=m.rotation.toArray();m.rotation.set(...f.rotation.map(_=>Ye.degToRad(_)).map((_,w)=>x[w]+(w===2?_:-_)))}f!=null&&f.scale&&m.scale.set(...f.scale)}}else this.currentAnimations=this.currentAnimations.filter(c=>c.anim!==r);const l=n.getAnimationData();l&&l.animation_length!==void 0&&this.getCurrentTime()>l.animation_length&&(l.loop?this.loop():this.pause()),this.setLastFrameTimestamp(Date.now())})}playTransition(e,t,n){const i=e.getState(),r=e.getControllerName();if(!i||!r)return;const a=Number(i.transition_ticks)*10||Number(e.getDefaultTransitionTicks())*10;if(!(i!=null&&i.anim))return;this.currentAnimations.some(l=>l.anim===i.anim)||this.currentAnimations.push({controllerName:r,anim:i.anim});const o={};if(n.position){const l=[t.position.x,t.position.y,t.position.z],c=n.position;o.position=l.map((u,h)=>{const d=Ar({elapsed:this.elapsedTransitionTime,initialValue:u,amountOfChange:c[h]-u,duration:a},i.transition_easing);return d===null?0:d})}if(n.rotation){const l=[t.rotation.x,t.rotation.y,t.rotation.z],c=n.rotation;o.rotation=l.map((u,h)=>{if(typeof u=="string")return u;const d=Ar({elapsed:this.elapsedTransitionTime,initialValue:Number(u),amountOfChange:Number(c[h])-Number(u),duration:a},i.transition_easing);return d===null?0:d})}if(n.scale){const l=[t.scale.x,t.scale.y,t.scale.z],c=n.scale;o.scale=l.map((u,h)=>{if(!u)return 0;const d=Ar({elapsed:this.elapsedTransitionTime,initialValue:u,amountOfChange:c[h]-u,duration:a},i.transition_easing);return d===null?0:d})}o.position&&t.position.set(...o.position),o.rotation&&t.rotation.set(...o.rotation),o.scale&&t.scale.set(...o.scale)}parseAnimationBone(e,t){const n=t.getAnimationData().bones;if(!n)return;const{position:i,rotation:r,scale:a}=n[e],[o,l,c]=[i,r,a].map(u=>u===void 0?void 0:t.parseBoneModifier(u));return{position:o,rotation:l,scale:c}}loop(){this.setLastFrameTimestamp(Date.now())}get shouldTick(){return this.isRunning}getCurrentAnimations(){return this.animations}getModel(){return this.model}execute(e){let t=e.replace(/v\.|c\.|q\.|t\./g,n=>{switch(n){case"v.":return"variable.";case"c.":return"context.";case"q.":return"query.";case"t.":return"variable.";default:return n}});for(;t.includes("context.");){const n=/context\.[a-zA-Z0-9_]+/g,i=t.match(n);if(!i)break;for(const r of i){const a=r.replace("context.","");if(a in this.env.context){const o=this.env.context[a];t=t.replace(r,o)}}}if(t.includes("lunar.")){t=t.replace(/lunar\./g,"f.lunar.");try{t=this.customMolang.transform(t)}catch{t="0"}}return t=Jv(t),t=e0(t),t=t.replace(new RegExp("(?<!math\\.)pi","g"),"math.pi"),this.molang.executeAndCatch(t)}getEnv(){return this.env}getMolang(){return this.molang}getCustomMolang(){return this.customMolang}setCustomMolang(e){this.customMolang=e}getCurrentTime(){return(Date.now()-this.startTimestamp)/1e3}getStartTimestamp(){return this.startTimestamp}setStartTimestamp(e){this.startTimestamp=e}setLastFrameTimestamp(e){this.lastFrameTimestamp=e}getAnimationStartTimestamp(){const e=this.activeControllerName??"main_controller",t=this.animationStartTimestamp.findIndex(i=>i.controller_name===e);let n;return t!==-1?n=this.animationStartTimestamp[t].timestamp:n=0,(Date.now()-n)/1e3}setAnimationStartTimestamp(e,t){const n=this.animationStartTimestamp.findIndex(i=>i.controller_name===e);n!==-1?(this.animationStartTimestamp[n].controller_name=e,this.animationStartTimestamp[n].timestamp=t):this.animationStartTimestamp.push({controller_name:e,timestamp:t})}isTransitioning(e){return this.currentAnimations.some(t=>t.controllerName===e&&t.isTransistioning)}setTransistioning(e,t,n){const r=this.currentAnimations.findIndex(a=>a.controllerName===e);r!==-1?this.currentAnimations[r].isTransistioning=n:this.currentAnimations.push({controllerName:e,anim:t,isTransistioning:n})}trackMolangEnv(){const e=this.env,t=Rn.getInstance();for(const n in e.query){const i=this.execute(`${e.query[n]()}`);this.trackedMolang.query[n]=i,t.keyExists(n,"Query")||t.add(this.trackedMolang.query,n,"Query",!0)}for(const n in e.context){const i=typeof e.context[n]=="function"?e.context[n]():e.context[n],r=this.execute(`${i}`);this.trackedMolang.context[n]=r,t.keyExists(n,"Context")||t.add(this.trackedMolang.context,n,"Context",!0)}for(const n in e.variable){const i=this.execute(`${e.variable[n]()}`);this.trackedMolang.variable[n]=i,t.keyExists(n,"Variable")||t.add(this.trackedMolang.variable,n,"Variable",!0)}}isPlayerSwimming(){return this.getModel().getPlayer().skin.state.isSwimming?1:0}isPlayerWalking(){return this.getModel().getPlayer().skin.state.isWalking?1:0}isPlayerShifting(){return this.getModel().getPlayer().skin.state.isShifting?1:0}isPlayerFlying(){return this.getModel().getPlayer().skin.state.isFlying?1:0}getPlayerSpeed(){return this.isPlayerSwimming()||this.isPlayerWalking()?5.612:this.isPlayerFlying()?7.2:0}isOnGround(){return this.isPlayerSwimming()|this.isPlayerFlying()?0:1}}class oh{constructor(){k(this,"positions",[]);k(this,"indices",[]);k(this,"normals",[]);k(this,"uvs",[]);k(this,"geometry",new At);k(this,"group",new Ze)}createGeometry(){this.geometry.setAttribute("position",new Ft(new Float32Array(this.positions),3)),this.geometry.setAttribute("normal",new Ft(new Float32Array(this.normals),3)),this.geometry.setAttribute("uv",new Ft(new Float32Array(this.uvs),2)),this.geometry.setIndex(this.indices)}getGroup(){return this.group}}const yr=.03,hx=[{name:"west",baseUV:[2,1],dir:[-1,0,0],corners:[{pos:[-.5,1,0],uv:[0,1]},{pos:[-.5,0,0],uv:[0,0]},{pos:[-.5,1,1],uv:[1,1]},{pos:[-.5,0,1],uv:[1,0]}]},{name:"east",baseUV:[0,1],dir:[1,0,0],corners:[{pos:[.5,1,1],uv:[0,1]},{pos:[.5,0,1],uv:[0,0]},{pos:[.5,1,0],uv:[1,1]},{pos:[.5,0,0],uv:[1,0]}]},{name:"down",baseUV:[2,0],dir:[0,-1,0],corners:[{pos:[.5,0,1],uv:[0,1]},{pos:[-.5,0,1],uv:[1,1]},{pos:[.5,0,0],uv:[0,0]},{pos:[-.5,0,0],uv:[1,0]}]},{name:"up",baseUV:[1,0],dir:[0,1,0],corners:[{pos:[-.5,1,1],uv:[1,1]},{pos:[.5,1,1],uv:[0,1]},{pos:[-.5,1,0],uv:[1,0]},{pos:[.5,1,0],uv:[0,0]}]},{name:"north",baseUV:[1,1],dir:[0,0,-1],corners:[{pos:[-.5,0,0],uv:[1,0]},{pos:[.5,0,0],uv:[0,0]},{pos:[-.5,1,0],uv:[1,1]},{pos:[.5,1,0],uv:[0,1]}]},{name:"south",baseUV:[3,1],dir:[0,0,1],corners:[{pos:[-.5,0,1],uv:[0,0]},{pos:[.5,0,1],uv:[1,0]},{pos:[-.5,1,1],uv:[0,1]},{pos:[.5,1,1],uv:[1,1]}]}];class ux extends oh{constructor(e){var m,f;super();const{textureSize:[t,n],textureDiscrepancyFactor:[i,r],mirror:a,width:o,height:l,depth:c}=e,[u,h]=[t*i,n*r],d=e.startUV??[0,0],p=!Array.isArray(d);let g=0,v=0;p||([g,v]=d);for(const x of hx){const{name:_,dir:w,corners:M}=x;let{baseUV:[b,P]}=x;const F=this.positions.length/3;let A,T;if(p){if(d[_]===void 0)continue;[g,v]=((m=d[_])==null?void 0:m.uv)||[],[A,T]=((f=d[_])==null?void 0:f.uv_size)||[],A*=i,T*=r,g*=i,v*=r,b=0,P=0}for(const{pos:[Y,Z,D],uv:O}of M)this.positions.push((a?-Y:Y)*o,Z*l,D*c),this.normals.push(...w),this.uvs.push((g+(+(b>0)+ +(b>2))*(A??c)+ +(b>1)*(A??o)+O[0]*(_==="west"||_==="east"?A??c:A??o)+(O[0]===0?yr:-yr))/(u/(p?1:i)),1-(v+P*(T??c)+(_==="up"||_==="down"?T??c:T??l)-O[1]*(_==="up"||_==="down"?T??c:T??l)+(O[1]===0?-yr:yr))/(h/(p?1:r)));this.indices.push(F,F+1,F+2,F+2,F+1,F+3)}this.createGeometry(),this.createMesh(e)}createMesh({material:e,width:t,height:n,depth:i,pivot:r,rotation:a,origin:o=[0,0,0],inflate:l=0}){const c=l*2+t,u=new ze(this.geometry,e);if(this.group.rotation.order="ZYX",r===void 0&&(r=[c/2,n/2,i/2]),this.group.add(u),a){this.group.position.set(-r[0],r[1],r[2]),u.position.set(-o[0]-c/2+r[0]+l,o[1]-r[1]-l,o[2]-r[2]-l);const[h,d,p]=a;this.group.rotation.set(Ye.degToRad(-h),Ye.degToRad(-d),Ye.degToRad(p))}else this.group.position.set(-o[0]-c/2+l,o[1]-l,o[2]-l);l&&this.group.scale.set(t!==0?1+l/(t/2):1,n!==0?1+l/(n/2):1,i!==0?1+l/(i/2):1)}}class dx extends oh{constructor(e){var n,i,r,a;if(super(),!Array.isArray(e.polys))throw new Error("Format not supported yet!");e.normalized_uvs||(e.uvs=(n=e==null?void 0:e.uvs)==null?void 0:n.map(([o,l])=>[o/e.textureSize[0],l/e.textureSize[1]]));let t=0;for(const o of e.polys){for(const[l,c,u]of o)this.positions.push(...((i=e==null?void 0:e.positions)==null?void 0:i[l])??[]),this.normals.push(...((r=e==null?void 0:e.normals)==null?void 0:r[c])??[]),this.uvs.push(...((a=e==null?void 0:e.uvs)==null?void 0:a[u])??[]);o.length===3?this.indices.push(t,t+1,t+2):this.indices.push(t+2,t+1,t,t+2,t,t+3),t+=o.length}this.createGeometry(),this.createMesh(e)}createMesh({material:e}){const t=new ze(this.geometry,e);this.group.add(t)}}class fx{constructor(e,t,n=[],i=!0,r,a,o,l,c=!0){k(this,"textured");k(this,"model");k(this,"boneMap",new Map);k(this,"locators",new Map);k(this,"animator",new ah(this));k(this,"player");k(this,"attachIndividually");k(this,"extraMolang");var h;this.modelData=e,this.texturePath=t,this.transformations=n,this.renderAnimations=i,this.attachToPlayer=c,this.player=r,this.attachIndividually=a||!1,this.extraMolang=o||[];const u=((h=e==null?void 0:e.description)==null?void 0:h.identifier)??"geometry.unknown";this.model=new Ze,this.model.name=u,this.model.visible=!0,this.textured=new gr({renderAnimations:this.renderAnimations,alphaTest:.2}),this.textured.load(t,l),this.animator=new ah(this)}create(){var r,a,o,l;const e=this.modelData,t=[((r=this.modelData.description)==null?void 0:r.texture_width)??this.texturePath.width,((a=this.modelData.description)==null?void 0:a.texture_height)??this.texturePath.height],n=[this.texturePath.width/t[0],this.texturePath.height/t[1]],i=new Map;(o=e==null?void 0:e.bones)==null||o.forEach(c=>{var p;const u=new Ze;if(u.name=c.name??"unknown",c.poly_mesh){const g=new dx({...c.poly_mesh,textureSize:t,material:this.textured.material,mirror:c.mirror??!1,origin:[0,0,0],inflate:c.inflate,rotation:[0,0,0],pivot:c.pivot}).getGroup();g.name=`#bone.${c.name}#polyMesh`,u.add(g)}(p=c.cubes)==null||p.forEach((g,v)=>{var f,x,_;const m=new ux({width:((f=g.size)==null?void 0:f[0])??0,height:((x=g.size)==null?void 0:x[1])??0,depth:((_=g.size)==null?void 0:_[2])??0,startUV:g.uv,textureSize:t,textureDiscrepancyFactor:n,material:this.textured.material,mirror:g.mirror===void 0&&g.rotation===void 0?c.mirror??!1:g.mirror??!1,origin:g.origin??[0,0,0],inflate:g.inflate??c.inflate,rotation:g.rotation,pivot:g.pivot??c.pivot}).getGroup();m.name=`#bone.${c.name}#cube.${v}`,u.add(m)});const h=new Ze;if(h.rotation.order="ZYX",c.pivot){const[g,v,m]=c.pivot;h.position.set(-g,v,m),u.position.set(g,-v,-m)}else h.position.set(0,0,0);if(h.add(u),h.name=`#pivot.${c.name}`,c.rotation){const[g,v,m]=c.rotation;h.rotation.set(Ye.degToRad(-g),Ye.degToRad(-v),Ye.degToRad(m))}const d=c.locators??{};for(const g in d){const v=new Ze;v.name=`locator#${g}`;const m=d[g];Array.isArray(m)?v.position.set(...m):typeof m=="object"&&(v.position.set(...m.offset??[0,0,0]),v.rotation.set(...m.rotation??[0,0,0])),this.locators.set(g,v),h.add(v)}c.parent||this.model.add(h),c.name&&(i.set(c.name,[c.parent,h]),this.boneMap.set(c.name,h))});for(const c of i){const[u,h]=c[1];if(u){const d=(l=i.get(u))==null?void 0:l[1];d&&d.name.startsWith("#pivot.")?this.attachIndividually&&this.attachToPlayer?this.isBipedOrArmor("RightLeg",d)?(h.position.x=-h.position.x,h.position.y-=12,h.position.x+=2,h.rotation.y+=.0174533*180,this.player.skin.rightLeg.add(h)):this.isBipedOrArmor("LeftLeg",d)?(h.position.x=-h.position.x,h.position.y-=12,h.position.x-=2,h.rotation.y+=.0174533*180,this.player.skin.leftLeg.add(h)):this.isBipedOrArmor("LeftArm",d)?(h.position.x=-h.position.x,h.position.y-=22,h.position.x-=5,h.rotation.y+=.0174533*180,this.player.skin.leftArm.add(h)):this.isBipedOrArmor("RightArm",d)?(h.position.x=-h.position.x,h.position.y-=22,h.position.x+=5,h.rotation.y+=.0174533*180,this.player.skin.rightArm.add(h)):this.isBipedOrArmor("Body",d)?(h.position.x=-h.position.x,h.position.y-=18,h.rotation.y+=.0174533*180,this.player.skin.body.add(h)):this.isBipedOrArmor("Head",d)?(h.position.x=-h.position.x,h.position.y-=28,h.rotation.y+=.0174533*180,this.player.skin.head.add(h)):d.children[0].add(h):d.children[0].add(h):d&&d.add(h)}}this.animator.setupDefaultBonePoses(),this.model.visible=!0}isBipedOrArmor(e,t){return t.name==`#pivot.biped${e}`||e==`#pivot.armor${e}`}getGroup(){return this.model}getBoneMap(){return this.boneMap}getLocator(e){return this.locators.get(e)}update(){this.renderAnimations&&this.animator.tick(),this.textured.update()}get shouldTick(){return this.animator.shouldTick}createOutlineBox(e,t,n){const i=new ki({side:Bt,color:e,linewidth:20}),r=new ot(n.x,n.y,n.z),a=new $m(r),o=new ga(a,i);return o.position.set(t.x,t.y+n.y/2,t.z),o.name="helperBox",this.model.add(o),{dispose:()=>{this.model.remove(o)}}}hideBone(e){const t=this.boneMap.get(e);t&&(t.visible=!1)}showBone(e){const t=this.boneMap.get(e);t&&(t.visible=!0)}get bones(){return[...this.boneMap.keys()]}dispose(){this.animator.dispose()}reset(){this.model.visible=!1}getPlayer(){return this.player}getExtraMolang(){return this.extraMolang}}class px extends Ze{constructor(t){super();k(this,"model");k(this,"renderAnimations",!0);k(this,"player");this.player=t,this.name="json",this.renderAnimations=t.renderAnimations,t.add(this),t.jsonModels.push(this)}async load(t,n,i,r,a,o=[],l,c=!0){let u="HEAD";l&&l.attached_bone&&(u=l.attached_bone);const h=new fx(n,t,o,this.renderAnimations,this.player,u=="NONE",i,a,c);h.create();const d=[];if(l!=null&&l.state_machine)switch(l.state_machine.name){case"single":l.state_machine.anim&&l.state_machine.anim;break;case"molang":{if(!l.state_machine.controllers)return;l.state_machine.controllers.forEach(g=>d.push(g));break}}r&&r.animations&&this.renderAnimations&&(Object.entries(r.animations).forEach(([g,v])=>{if(d.length>0)for(const m of d){const f=m.states.find(x=>x.anim===g);f&&h.animator.addAnimation(v,f,m.default_transition_ticks,m.name)}else h.animator.addAnimation(v)}),h.animator.play());const p=h.getGroup();switch(this.model=h,p.position.setY(-24),p.rotateY(.0174533*180),o.forEach(g=>{g.value.player&&(g.type==="translate"&&Ca(p,g.value.player),g.type==="rotate"&&Ra(p,g.value.player),g.type==="scale"&&Pa(p,g.value.player))}),u){case"HEAD":{p.position.setY(-28),this.player.skin.head.add(this);break}case"SHOULDER":{p.position.setY(-18),this.player.skin.body.add(this);break}}(!c||u!=="NONE")&&this.add(p),this.visible=!0}update(){this.model&&this.model.update()}reset(){this.model&&this.model.reset()}}class mx{constructor(e={}){k(this,"canvas");k(this,"scene");k(this,"camera");k(this,"renderer");k(this,"playerObject");k(this,"shadowObject");k(this,"globalLight",new mc(16777215,.4));k(this,"cameraLight",new Ea(16777215,.6));k(this,"composer");k(this,"renderPass");k(this,"fxaaPass");k(this,"imageLoader");k(this,"_pixelRatio");k(this,"devicePixelRatioQuery");k(this,"onDevicePixelRatioChange");k(this,"backgroundTexture",null);k(this,"_disposed",!1);k(this,"_renderPaused",!1);k(this,"_zoom");k(this,"renderAnimations",!0);this.imageLoader=e.imageLoader??Va,this.canvas=e.canvas??document.createElement("canvas"),this.scene=new Vm,e.debugMode&&(Rn.enabled=!0),this.camera=new Pt(40),e.hidePlayer?this.camera.position.set(0,-6,0):this.camera.position.set(-15,-6,50),this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),this.renderer=new Vl({canvas:this.canvas,alpha:!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new An(0,0,{depthTexture:new Gl(0,0,_n)})),this.composer=new Ig(this.renderer,t),this.renderPass=new Dg(this.scene,this.camera),this.fxaaPass=new xc(Ug),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new s0(!0,e.nametag),this.scene.add(this.playerObject),e.hidePlayer&&(this.playerObject.visible=!1),this.shadowObject=new a0(this.imageLoader),this.playerObject.add(this.shadowObject),e.shadow&&(this.shadowObject.visible=!0),this.width=e.width??this.canvas.width,this.height=e.height??this.canvas.height,e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.cubePanorama!==void 0&&this.loadCubePanorama(e.cubePanorama),this._zoom=e.zoom??.9,this.fov=e.fov??50,this.renderAnimations=e.renderAnimations??!0,e.renderPaused===!0?this._renderPaused=!0:this.draw(),window&&(e.debugMode&&console.log("[SkinViewer] Adding event listeners..."),window.addEventListener("mousedown",n=>{e.debugMode&&console.log(`[SkinViewer] Mouse down (key code: ${n.button})`),n.button===0&&(this.playerObject.skin.state.isPunching=!0)}),window.addEventListener("keydown",n=>{e.debugMode&&console.log(`[SkinViewer] Key down (key code: ${n.key})`),n.code==="ShiftLeft"&&!this.playerObject.skin.isNonDefaultAnimation()&&(this.playerObject.skin.state.isShifting=!0),n.code==="Space"&&!this.playerObject.skin.isNonDefaultAnimation()&&this.playerObject.skin.jump()}),window.addEventListener("keyup",n=>{e.debugMode&&console.log(`[SkinViewer] Key up (key code: ${n.key})`),n.code==="ShiftLeft"&&(this.playerObject.skin.state.isShifting=!1)}))}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}async loadSkin(e,t){if(!e)return this.playerObject.skin.reset();if(!Nn(e)){await this.imageLoader(e).then(n=>this.loadSkin(n,t));return}await this.playerObject.skin.load(e)}async loadCape(e,t){if(!e)return this.playerObject.cape.reset();if(!Nn(e)){await this.imageLoader(e).then(i=>this.loadCape(i,t));return}const n=await Yi(t);await this.playerObject.cape.load(e,n)}async loadWings(e,t,n){if(!e||!t)return this.playerObject.wings.reset();if(!Nn(e)){await this.imageLoader(e).then(a=>this.loadWings(a,t,n));return}const i=await Yi(n),r=await Wa(t);await this.playerObject.wings.load(e,r,[],i)}async loadHat(e,t,n,i){if(!e||!t)return this.playerObject.hats.forEach(l=>l.reset());if(!Nn(e)){await this.imageLoader(e).then(async l=>this.loadHat(l,t,n,i));return}const r=await Yi(i),a=await Wa(t);new o0(this.playerObject).load(e,a,n,r)}async loadBodywear(e,t,n,i){if(!e||!t)return this.playerObject.bodywear.forEach(l=>l.reset());if(!Nn(e)){await this.imageLoader(e).then(l=>this.loadBodywear(l,t,n,i));return}const r=await Yi(i),a=await Wa(t);new l0(this.playerObject).load(e,a,n,r)}async loadJsonModel(e,t,n,i,r,a,o=[{contexts:{},functions:""}],l,c=!0){if(!e||!t)return this.playerObject.jsonModels.forEach(v=>v.reset());if(!Nn(e)){await this.imageLoader(e).then(v=>this.loadJsonModel(v,t,n,i,r,a,o,l,c));return}let u=e;if(r&&r.special_cosmetic_type=="minime"){const v=await this.imageLoader((a==null?void 0:a.skin)||"https://skins.mcstats.com/raw/steve"),m=e,f=document.createElement("canvas");f.width=128,f.height=128;const x=f.getContext("2d",{willReadFrequently:!0});x.drawImage(m,0,0),x.clearRect(0,0,64,64),x.drawImage(v,0,0),u=f}const h=await Yi(n),d=await Qv(t),p=await Yi(l);await new px(this.playerObject).load(u,d,o,h,p,i,r,c)}async loadMolang(e){const t=[];for(const n of e){const i=await jv(n);t.push(i)}return t}loadCubePanorama(e){this.backgroundTexture!==null&&this.backgroundTexture.dispose();const n=new ug().load(e);this.scene.background=n}loadPanorama(e){return this.loadBackground(e,Zi)}async loadBackground(e,t){if(!Nn(e)){await this.imageLoader(e).then(n=>this.loadBackground(n,t));return}this.backgroundTexture&&this.backgroundTexture.dispose(),this.backgroundTexture=new st(e),this.backgroundTexture.colorSpace=we,t&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture}draw(){this.disposed||this._renderPaused||(this.render(),this.renderAnimations&&requestAnimationFrame(()=>this.draw()))}render(){this.playerObject&&this.playerObject.update(),this.renderer.render(this.scene,this.camera)}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}dispose(){this._disposed=!0,this.renderer.dispose(),this.backgroundTexture!==null&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}setFov(e){this.camera.fov=e,this.camera.updateProjectionMatrix()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){const t=!this.disposed&&!e&&this._renderPaused;this._renderPaused=e,t&&requestAnimationFrame(()=>this.draw())}get width(){return this.renderer.getSize(new ge).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new ge).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof Te||e instanceof st?this.scene.background=e:this.scene.background=new Te(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get shadow(){return this.shadowObject.visible}set shadow(e){this.shadowObject.visible=e}}const lh={type:"change"},ja={type:"start"},ch={type:"end"};class gx extends Yn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$t.ROTATE,MIDDLE:$t.DOLLY,RIGHT:$t.PAN},this.touches={ONE:ni.ROTATE,TWO:ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",$e),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",$e),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(lh),n.update(),r=i.NONE},this.update=function(){const R=new C,q=new Yt().setFromUnitVectors(e.up,new C(0,1,0)),B=q.clone().invert(),he=new C,fe=new Yt,ve=2*Math.PI;return function(){const me=n.object.position;R.copy(me).sub(n.target),R.applyQuaternion(q),o.setFromVector3(R),n.autoRotate&&r===i.NONE&&A(P()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ce=n.minAzimuthAngle,De=n.maxAzimuthAngle;return isFinite(Ce)&&isFinite(De)&&(Ce<-Math.PI?Ce+=ve:Ce>Math.PI&&(Ce-=ve),De<-Math.PI?De+=ve:De>Math.PI&&(De-=ve),Ce<=De?o.theta=Math.max(Ce,Math.min(De,o.theta)):o.theta=o.theta>(Ce+De)/2?Math.max(Ce,o.theta):Math.min(De,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),R.setFromSpherical(o),R.applyQuaternion(B),me.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||he.distanceToSquared(n.object.position)>a||8*(1-fe.dot(n.object.quaternion))>a?(n.dispatchEvent(lh),he.copy(n.object.position),fe.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",y),n.domElement.removeEventListener("pointerdown",Le),n.domElement.removeEventListener("pointercancel",rt),n.domElement.removeEventListener("wheel",Ge),n.domElement.removeEventListener("pointermove",at),n.domElement.removeEventListener("pointerup",rt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",$e),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new _c,l=new _c;let c=1;const u=new C;let h=!1;const d=new ge,p=new ge,g=new ge,v=new ge,m=new ge,f=new ge,x=new ge,_=new ge,w=new ge,M=[],b={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function F(){return Math.pow(.95,n.zoomSpeed)}function A(R){l.theta-=R}function T(R){l.phi-=R}const Y=function(){const R=new C;return function(B,he){R.setFromMatrixColumn(he,0),R.multiplyScalar(-B),u.add(R)}}(),Z=function(){const R=new C;return function(B,he){n.screenSpacePanning===!0?R.setFromMatrixColumn(he,1):(R.setFromMatrixColumn(he,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(B),u.add(R)}}(),D=function(){const R=new C;return function(B,he){const fe=n.domElement;if(n.object.isPerspectiveCamera){const ve=n.object.position;R.copy(ve).sub(n.target);let ue=R.length();ue*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*B*ue/fe.clientHeight,n.object.matrix),Z(2*he*ue/fe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(B*(n.object.right-n.object.left)/n.object.zoom/fe.clientWidth,n.object.matrix),Z(he*(n.object.top-n.object.bottom)/n.object.zoom/fe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(R){n.object.isPerspectiveCamera?c/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(R){n.object.isPerspectiveCamera?c*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(R){d.set(R.clientX,R.clientY)}function j(R){x.set(R.clientX,R.clientY)}function X(R){v.set(R.clientX,R.clientY)}function $(R){p.set(R.clientX,R.clientY),g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const q=n.domElement;A(2*Math.PI*g.x/q.clientHeight),T(2*Math.PI*g.y/q.clientHeight),d.copy(p),n.update()}function ee(R){_.set(R.clientX,R.clientY),w.subVectors(_,x),w.y>0?O(F()):w.y<0&&H(F()),x.copy(_),n.update()}function pe(R){m.set(R.clientX,R.clientY),f.subVectors(m,v).multiplyScalar(n.panSpeed),D(f.x,f.y),v.copy(m),n.update()}function oe(R){R.deltaY<0?H(F()):R.deltaY>0&&O(F()),n.update()}function z(R){let q=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),q=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),q=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),q=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),q=!0;break}q&&(R.preventDefault(),n.update())}function K(){if(M.length===1)d.set(M[0].pageX,M[0].pageY);else{const R=.5*(M[0].pageX+M[1].pageX),q=.5*(M[0].pageY+M[1].pageY);d.set(R,q)}}function se(){if(M.length===1)v.set(M[0].pageX,M[0].pageY);else{const R=.5*(M[0].pageX+M[1].pageX),q=.5*(M[0].pageY+M[1].pageY);v.set(R,q)}}function le(){const R=M[0].pageX-M[1].pageX,q=M[0].pageY-M[1].pageY,B=Math.sqrt(R*R+q*q);x.set(0,B)}function I(){n.enableZoom&&le(),n.enablePan&&se()}function Se(){n.enableZoom&&le(),n.enableRotate&&K()}function be(R){if(M.length==1)p.set(R.pageX,R.pageY);else{const B=ce(R),he=.5*(R.pageX+B.x),fe=.5*(R.pageY+B.y);p.set(he,fe)}g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const q=n.domElement;A(2*Math.PI*g.x/q.clientHeight),T(2*Math.PI*g.y/q.clientHeight),d.copy(p)}function re(R){if(M.length===1)m.set(R.pageX,R.pageY);else{const q=ce(R),B=.5*(R.pageX+q.x),he=.5*(R.pageY+q.y);m.set(B,he)}f.subVectors(m,v).multiplyScalar(n.panSpeed),D(f.x,f.y),v.copy(m)}function Me(R){const q=ce(R),B=R.pageX-q.x,he=R.pageY-q.y,fe=Math.sqrt(B*B+he*he);_.set(0,fe),w.set(0,Math.pow(_.y/x.y,n.zoomSpeed)),O(w.y),x.copy(_)}function Xe(R){n.enableZoom&&Me(R),n.enablePan&&re(R)}function xe(R){n.enableZoom&&Me(R),n.enableRotate&&be(R)}function Le(R){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",at),n.domElement.addEventListener("pointerup",rt)),G(R),R.pointerType==="touch"?bt(R):pt(R))}function at(R){n.enabled!==!1&&(R.pointerType==="touch"?S(R):ct(R))}function rt(R){te(R),M.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",at),n.domElement.removeEventListener("pointerup",rt)),n.dispatchEvent(ch),r=i.NONE}function pt(R){let q;switch(R.button){case 0:q=n.mouseButtons.LEFT;break;case 1:q=n.mouseButtons.MIDDLE;break;case 2:q=n.mouseButtons.RIGHT;break;default:q=-1}switch(q){case $t.DOLLY:if(n.enableZoom===!1)return;j(R),r=i.DOLLY;break;case $t.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;X(R),r=i.PAN}else{if(n.enableRotate===!1)return;J(R),r=i.ROTATE}break;case $t.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;J(R),r=i.ROTATE}else{if(n.enablePan===!1)return;X(R),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ja)}function ct(R){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;$(R);break;case i.DOLLY:if(n.enableZoom===!1)return;ee(R);break;case i.PAN:if(n.enablePan===!1)return;pe(R);break}}function Ge(R){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(R.preventDefault(),n.dispatchEvent(ja),oe(R),n.dispatchEvent(ch))}function $e(R){n.enabled===!1||n.enablePan===!1||z(R)}function bt(R){switch(ie(R),M.length){case 1:switch(n.touches.ONE){case ni.ROTATE:if(n.enableRotate===!1)return;K(),r=i.TOUCH_ROTATE;break;case ni.PAN:if(n.enablePan===!1)return;se(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ni.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(),r=i.TOUCH_DOLLY_PAN;break;case ni.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Se(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ja)}function S(R){switch(ie(R),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;be(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;re(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Xe(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(R),n.update();break;default:r=i.NONE}}function y(R){n.enabled!==!1&&R.preventDefault()}function G(R){M.push(R)}function te(R){delete b[R.pointerId];for(let q=0;q<M.length;q++)if(M[q].pointerId==R.pointerId){M.splice(q,1);return}}function ie(R){let q=b[R.pointerId];q===void 0&&(q=new ge,b[R.pointerId]=q),q.set(R.pageX,R.pageY)}function ce(R){const q=R.pointerId===M[0].pointerId?M[1]:M[0];return b[q.pointerId]}n.domElement.addEventListener("contextmenu",y),n.domElement.addEventListener("pointerdown",Le),n.domElement.addEventListener("pointercancel",rt),n.domElement.addEventListener("wheel",Ge,{passive:!1}),this.update()}}function vx(s){const e=new gx(s.camera,s.renderer.domElement);return e.enablePan=!1,e.enableZoom=!0,e.target=new C(0,-8,0),e.update(),e}Ot.SkinViewer=mx,Ot.createOrbitControls=vx,Object.defineProperty(Ot,Symbol.toStringTag,{value:"Module"})});
