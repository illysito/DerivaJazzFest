(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Vi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function kh(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fs={duration:.5,overwrite:!1,delay:0},Tu,on,Pt,ci=1e8,At=1/ci,ac=Math.PI*2,Wp=ac/4,Xp=0,Vh=Math.sqrt,qp=Math.cos,Yp=Math.sin,rn=function(e){return typeof e=="string"},Ft=function(e){return typeof e=="function"},ji=function(e){return typeof e=="number"},bu=function(e){return typeof e>"u"},Li=function(e){return typeof e=="object"},Ln=function(e){return e!==!1},Au=function(){return typeof window<"u"},Ka=function(e){return Ft(e)||rn(e)},Gh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},_n=Array.isArray,$p=/random\([^)]+\)/g,Kp=/,\s*/g,cf=/(?:-?\.?\d|\.)+/gi,Hh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,dl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wh=/[+-]=-?[.\d]+/,Zp=/[^,'"\[\]\s]+/gi,jp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lt,Si,oc,wu,Qn={},Xo={},Xh,qh=function(e){return(Xo=Os(e,Qn))&&On},Cu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Pa=function(e,t){return!t&&console.warn(e)},Yh=function(e,t){return e&&(Qn[e]=t)&&Xo&&(Xo[e]=t)||Qn},Da=function(){return 0},Jp={suppressEvents:!0,isStart:!0,kill:!1},Po={suppressEvents:!0,kill:!1},Qp={suppressEvents:!0},Ru={},gr=[],lc={},$h,Xn={},pl={},uf=30,Do=[],Pu="",Du=function(e){var t=e[0],n,i;if(Li(t)||Ft(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Do.length;i--&&!Do[i].targetTest(t););n=Do[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new xd(e[i],n)))||e.splice(i,1);return e},Xr=function(e){return e._gsap||Du(ui(e))[0]._gsap},Kh=function(e,t,n){return(n=e[t])&&Ft(n)?e[t]():bu(n)&&e.getAttribute&&e.getAttribute(t)||n},In=function(e,t){return(e=e.split(",")).forEach(t)||e},Bt=function(e){return Math.round(e*1e5)/1e5||0},Dt=function(e){return Math.round(e*1e7)/1e7||0},Cs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},em=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},qo=function(){var e=gr.length,t=gr.slice(0),n,i;for(lc={},gr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Lu=function(e){return!!(e._initted||e._startAt||e.add)},Zh=function(e,t,n,i){gr.length&&!on&&qo(),e.render(t,n,!!(on&&t<0&&Lu(e))),gr.length&&!on&&qo()},jh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Zp).length<2?t:rn(e)?e.trim():e},Jh=function(e){return e},ei=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},tm=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Os=function(e,t){for(var n in t)e[n]=t[n];return e},ff=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Li(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Yo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ga=function(e){var t=e.parent||Lt,n=e.keyframes?tm(_n(e.keyframes)):ei;if(Ln(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},nm=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Qh=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},rl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Sr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},im=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},cc=function(e,t,n,i){return e._startAt&&(on?e._startAt.revert(Po):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},rm=function r(e){return!e||e._ts&&r(e.parent)},hf=function(e){return e._repeat?Bs(e._tTime,e=e.duration()+e._rDelay)*e:0},Bs=function(e,t){var n=Math.floor(e=Dt(e/t));return e&&n===e?n-1:n},$o=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},sl=function(e){return e._end=Dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},al=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Dt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),sl(e),n._dirty||qr(n,e)),e},ed=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=$o(e.rawTime(),t),(!t._dur||Wa(0,t.totalDuration(),n)-t._tTime>At)&&t.render(n,!0)),qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-At}},yi=function(e,t,n,i){return t.parent&&Sr(t),t._start=Dt((ji(n)?n:n||e!==Lt?ii(e,n,t):e._time)+t._delay),t._end=Dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Qh(e,t,"_first","_last",e._sort?"_start":0),uc(t)||(e._recent=t),i||ed(e,t),e._ts<0&&al(e,e._tTime),e},td=function(e,t){return(Qn.ScrollTrigger||Cu("scrollTrigger",t))&&Qn.ScrollTrigger.create(t,e)},nd=function(e,t,n,i,s){if(Uu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!on&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$h!==Yn.frame)return gr.push(e),e._lazy=[s,i],1},sm=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},uc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},am=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&sm(e)&&!(!e._initted&&uc(e))||(e._ts<0||e._dp._ts<0)&&!uc(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Wa(0,e._tDur,t),u=Bs(l,o),e._yoyo&&u&1&&(a=1-a),u!==Bs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||on||i||e._zTime===At||!t&&e._zTime){if(!e._initted&&nd(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?At:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&cc(e,t,n,!0),e._onUpdate&&!n&&Kn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Kn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Sr(e,1),!n&&!on&&(Kn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},om=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},zs=function(e,t,n,i){var s=e._repeat,a=Dt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Dt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&al(e,e._tTime=e._tDur*o),e.parent&&sl(e),n||qr(e.parent,e),e},df=function(e){return e instanceof bn?qr(e):zs(e,e._dur)},lm={_start:0,endTime:Da,totalDuration:Da},ii=function r(e,t,n){var i=e.labels,s=e._recent||lm,a=e.duration()>=ci?s.endTime(!1):e._dur,o,l,c;return rn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(_n(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},xa=function(e,t,n){var i=ji(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ln(l.vars.inherit)&&l.parent;a.immediateRender=Ln(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Wt(t[0],a,t[s+1])},br=function(e,t){return e||e===0?t(e):t},Wa=function(e,t,n){return n<e?e:n>t?t:n},dn=function(e,t){return!rn(e)||!(t=jp.exec(e))?"":t[1]},cm=function(e,t,n){return br(n,function(i){return Wa(e,t,i)})},fc=[].slice,id=function(e,t){return e&&Li(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Li(e[0]))&&!e.nodeType&&e!==Si},um=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return rn(i)&&!t||id(i,1)?(s=n).push.apply(s,ui(i)):n.push(i)})||n},ui=function(e,t,n){return Pt&&!t&&Pt.selector?Pt.selector(e):rn(e)&&!n&&(oc||!ks())?fc.call((t||wu).querySelectorAll(e),0):_n(e)?um(e,n):id(e)?fc.call(e,0):e?[e]:[]},hc=function(e){return e=ui(e)[0]||Pa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ui(t,n.querySelectorAll?n:n===e?Pa("Invalid scope")||wu.createElement("div"):e)}},rd=function(e){return e.sort(function(){return .5-Math.random()})},sd=function(e){if(Ft(e))return e;var t=Li(e)?e:{each:e},n=Yr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return rn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(d,h,g){var _=(g||t).length,m=a[_],p,y,b,S,T,w,A,D,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,ci])[1],!x){for(A=-ci;A<(A=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=a[_]=[],p=l?Math.min(x,_)*u-.5:i%x,y=x===ci?0:l?_*f/x-.5:i/x|0,A=0,D=ci,w=0;w<_;w++)b=w%x-p,S=y-(w/x|0),m[w]=T=c?Math.abs(c==="y"?S:b):Vh(b*b+S*S),T>A&&(A=T),T<D&&(D=T);i==="random"&&rd(m),m.max=A-D,m.min=D,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=dn(t.amount||t.each)||0,n=n&&_<0?md(n):n}return _=(m[d]-m.min)/m.max||0,Dt(m.b+(n?n(_):_)*m.v)+m.u}},dc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Dt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ji(n)?0:dn(n))}},ad=function(e,t){var n=_n(e),i,s;return!n&&Li(e)&&(i=n=e.radius||ci,e.values?(e=ui(e.values),(s=!ji(e[0]))&&(i*=i)):e=dc(e.increment)),br(t,n?Ft(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ci,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-o,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-o),d<c&&(c=d,u=f);return u=!i||c<=i?e[u]:a,s||u===a||ji(a)?u:u+dn(a)}:dc(e))},od=function(e,t,n,i){return br(_n(e)?!t:n===!0?!!(n=0):!i,function(){return _n(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},fm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},hm=function(e,t){return function(n){return e(parseFloat(n))+(t||dn(n))}},dm=function(e,t,n){return cd(e,t,0,1,n)},ld=function(e,t,n){return br(n,function(i){return e[~~t(i)]})},pm=function r(e,t,n){var i=t-e;return _n(e)?ld(e,r(0,e.length),t):br(n,function(s){return(i+(s-e)%i)%i+e})},mm=function r(e,t,n){var i=t-e,s=i*2;return _n(e)?ld(e,r(0,e.length-1),t):br(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},La=function(e){return e.replace($p,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Kp);return od(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},cd=function(e,t,n,i,s){var a=t-e,o=i-n;return br(s,function(l){return n+((l-e)/a*o||0)})},_m=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=rn(e),o={},l,c,u,f,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(_n(e)&&!_n(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=Os(_n(e)?[]:{},e));if(!u){for(l in t)Iu.call(o,e,l,"get",t[l]);s=function(g){return Ou(g,o)||(a?e.p:e)}}}return br(n,s)},pf=function(e,t,n){var i=e.labels,s=ci,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Kn=function(e,t,n){var i=e.vars,s=i[t],a=Pt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&gr.length&&qo(),o&&(Pt=o),u=l?s.apply(c,l):s.call(c),Pt=a,u},la=function(e){return Sr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!on),e.progress()<1&&Kn(e,"onInterrupt"),e},As,ud=[],fd=function(e){if(e)if(e=!e.name&&e.default||e,Au()||e.headless){var t=e.name,n=Ft(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Da,render:Ou,add:Iu,kill:Lm,modifier:Dm,rawVars:0},a={targetTest:0,get:0,getSetter:Fu,aliases:{},register:0};if(ks(),e!==i){if(Xn[t])return;ei(i,ei(Yo(e,s),a)),Os(i.prototype,Os(s,Yo(e,a))),Xn[i.prop=t]=i,e.targetTest&&(Do.push(i),Ru[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Yh(t,i),e.register&&e.register(On,i,Un)}else ud.push(e)},bt=255,ca={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},ml=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*bt+.5|0},hd=function(e,t,n){var i=e?ji(e)?[e>>16,e>>8&bt,e&bt]:0:ca.black,s,a,o,l,c,u,f,d,h,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ca[e])i=ca[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&bt,i&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(cf),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=ml(l+1/3,s,a),i[1]=ml(l,s,a),i[2]=ml(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Hh),n&&i.length<4&&(i[3]=1),i}else i=e.match(cf)||ca.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/bt,a=i[1]/bt,o=i[2]/bt,f=Math.max(s,a,o),d=Math.min(s,a,o),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(a-o)/h+(a<o?6:0):f===a?(o-s)/h+2:(s-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},dd=function(e){var t=[],n=[],i=-1;return e.split(xr).forEach(function(s){var a=s.match(bs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},mf=function(e,t,n){var i="",s=(e+i).match(xr),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=hd(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=dd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(xr,"1").split(bs),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(xr),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},xr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ca)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),gm=/hsl[a]?\(/,pd=function(e){var t=e.join(" "),n;if(xr.lastIndex=0,xr.test(t))return n=gm.test(t),e[1]=mf(e[1],n),e[0]=mf(e[0],n,dd(e[1])),!0},Ia,Yn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,d,h,g=function _(m){var p=r()-i,y=m===!0,b,S,T,w;if((p>e||p<0)&&(n+=p-t),i+=p,T=i-n,b=T-a,(b>0||y)&&(w=++f.frame,d=T-f.time*1e3,f.time=T=T/1e3,a+=b+(b>=s?4:s-b),S=1),y||(l=c(_)),S)for(h=0;h<o.length;h++)o[h](T,d,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Xh&&(!oc&&Au()&&(Si=oc=window,wu=Si.document||{},Qn.gsap=On,(Si.gsapVersions||(Si.gsapVersions=[])).push(On.version),qh(Xo||Si.GreenSockGlobals||!Si.gsap&&Si||{}),ud.forEach(fd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},Ia=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ia=0,c=Da},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,p,y){var b=p?function(S,T,w,A){m(S,T,w,A),f.remove(b)}:m;return f.remove(m),o[y?"unshift":"push"](b),ks(),b},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&h>=p&&h--},_listeners:o},f})(),ks=function(){return!Ia&&Yn.wake()},ot={},xm=/^[\d.\-M][\d.\-,\s]/,vm=/["']/g,Sm=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(vm,"").trim():+c,i=l.substr(o+1).trim();return t},Mm=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Em=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Sm(t[1])]:Mm(e).split(",").map(jh)):ot._CE&&xm.test(e)?ot._CE("",e):n},md=function(e){return function(t){return 1-e(1-t)}},_d=function r(e,t){for(var n=e._first,i;n;)n instanceof bn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Yr=function(e,t){return e&&(Ft(e)?e:ot[e]||Em(e))||t},ns=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return In(e,function(o){ot[o]=Qn[o]=s,ot[a=o.toLowerCase()]=n;for(var l in s)ot[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[o+"."+l]=s[l]}),s},gd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},_l=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/ac*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Yp((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:gd(o);return s=ac/s,l.config=function(c,u){return r(e,c,u)},l},gl=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:gd(n);return i.config=function(s){return r(e,s)},i};In("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ns(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;ns("Elastic",_l("in"),_l("out"),_l());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ns("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ns("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ns("Circ",function(r){return-(Vh(1-r*r)-1)});ns("Sine",function(r){return r===1?1:-qp(r*Wp)+1});ns("Back",gl("in"),gl("out"),gl());ot.SteppedEase=ot.steps=Qn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-At;return function(o){return((i*Wa(0,a,o)|0)+s)*n}}};Fs.ease=ot["quad.out"];In("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Pu+=r+","+r+"Params,"});var xd=function(e,t){this.id=Xp++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Kh,this.set=t?t.getSetter:Fu},Ua=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,zs(this,+t.duration,1,1),this.data=t.data,Pt&&(this._ctx=Pt,Pt.data.push(this)),Ia||Yn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,zs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ks(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(al(this,n),!s._dp||s.parent||ed(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&yi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===At||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+hf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+hf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Bs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?$o(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-At?0:this._rts,this.totalTime(Wa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),sl(this),im(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ks(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Dt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&yi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$o(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Qp);var i=on;return on=n,Lu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),on=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,df(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,df(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ii(this,n),Ln(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ln(i)),this._dur||(this._zTime=-At),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-At)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ft(n)?n:Jh,l=function(){var u=i.then;i.then=null,s&&s(),Ft(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){la(this)},r})();ei(Ua.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var bn=(function(r){kh(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ln(n.sortChildren),Lt&&yi(n.parent||Lt,Vi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&td(Vi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return xa(0,arguments,this),this},t.from=function(i,s,a){return xa(1,arguments,this),this},t.fromTo=function(i,s,a,o){return xa(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ga(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Wt(i,s,ii(this,a),1),this},t.call=function(i,s,a){return yi(this,Wt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Wt(i,a,ii(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ga(a).immediateRender=Ln(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,ga(o).immediateRender=Ln(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Dt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,h,g,_,m,p,y,b,S,T,w,A;if(this!==Lt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,S=this._start,b=this._ts,p=!b,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=Dt(u%m),u===l?(_=this._repeat,d=c):(T=Dt(u/m),_=~~T,_&&_===T&&(d=c,_--),d>c&&(d=c)),T=Bs(this._tTime,m),!o&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),w&&_&1&&(d=c-d,A=1),_!==T&&!this._lock){var D=w&&T&1,x=D===(w&&_&1);if(_<T&&(D=!D),o=D?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Dt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Kn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,T=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=D?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;_d(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=om(this,Dt(o),Dt(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!T&&(Kn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(h=this._first;h;){if(g=h._next,(h._act||d>=h._start)&&h._ts&&y!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,a),d!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-At);break}}h=g}else{h=this._last;for(var M=i<0?i:d;h;){if(g=h._prev,(h._act||M<=h._end)&&h._ts&&y!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(M-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(M-h._start)*h._ts,s,a||on&&Lu(h)),d!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=M?-At:At);break}}h=g}}if(y&&!s&&(this.pause(),y.render(d>=o?0:-At)._zTime=d>=o?1:-1,this._ts))return this._start=S,sl(this),this.render(i,s,a);this._onUpdate&&!s&&Kn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Sr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Kn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(ji(s)||(s=ii(this,s,i)),!(i instanceof Ua)){if(_n(i))return i.forEach(function(o){return a.add(o,s)}),this;if(rn(i))return this.addLabel(i,s);if(Ft(i))i=Wt.delayedCall(0,i);else return this}return this!==i?yi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ci);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Wt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return rn(i)?this.removeLabel(i):Ft(i)?this.killTweensOf(i):(i.parent===this&&rl(this,i),i===this._recent&&(this._recent=this._last),qr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dt(Yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ii(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Wt.delayedCall(0,s||Da,a);return o.data="isPause",this._hasPause=1,yi(this,o,ii(this,i))},t.removePause=function(i){var s=this._first;for(i=ii(this,i);s;)s._start===i&&s.data==="isPause"&&Sr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)fr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=ui(i),l=this._first,c=ji(s),u;l;)l instanceof Wt?em(l._targets,o)&&(c?(!fr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=ii(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,g=Wt.to(a,ei({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||At,onStart:function(){if(a.pause(),!h){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&zs(g,m,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ei({startAt:{time:ii(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),pf(this,ii(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),pf(this,ii(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Dt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return qr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),qr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=ci,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,yi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Dt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;zs(a,a===Lt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Lt._ts&&(Zh(Lt,$o(i,Lt)),$h=Yn.frame),Yn.frame>=uf){uf+=jn.autoSleep||120;var s=Lt._first;if((!s||!s._ts)&&jn.autoSleep&&Yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Yn.sleep()}}},e})(Ua);ei(bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ym=function(e,t,n,i,s,a,o){var l=new Un(this._pt,e,t,0,1,Td,null,s),c=0,u=0,f,d,h,g,_,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=La(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),d=n.match(dl)||[];f=dl.exec(i);)g=f[0],_=i.substring(c,f.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Cs(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},c=dl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Wh.test(i)||p)&&(l.e=0),this._pt=l,l},Iu=function(e,t,n,i,s,a,o,l,c,u){Ft(i)&&(i=i(s||0,e,a));var f=e[t],d=n!=="get"?n:Ft(f)?c?e[t.indexOf("set")||!Ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=Ft(f)?c?Cm:Ed:Nu,g;if(rn(i)&&(~i.indexOf("random(")&&(i=La(i)),i.charAt(1)==="="&&(g=Cs(d,i)+(dn(d)||0),(g||g===0)&&(i=g))),!u||d!==i||pc)return!isNaN(d*i)&&i!==""?(g=new Un(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?Pm:yd,0,h),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&Cu(t,i),ym.call(this,e,t,d,i,h,l||jn.stringFilter,c))},Tm=function(e,t,n,i,s){if(Ft(e)&&(e=va(e,s,t,n,i)),!Li(e)||e.style&&e.nodeType||_n(e)||Gh(e))return rn(e)?va(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=va(e[o],s,t,n,i);return a},vd=function(e,t,n,i,s,a){var o,l,c,u;if(Xn[e]&&(o=new Xn[e]).init(s,o.rawVars?t[e]:Tm(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Un(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==As))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},fr,pc,Uu=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,d=i.keyframes,h=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,b=e._overwrite==="auto"&&!Tu,S=e.timeline,T,w,A,D,x,M,P,U,B,H,V,k,F;if(S&&(!d||!s)&&(s="none"),e._ease=Yr(s,Fs.ease),e._yEase=f?md(Yr(f===!0?s:f,Fs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!i.runBackwards,!S||d&&!i.stagger){if(U=m[0]?Xr(m[0]).harness:0,k=U&&i[U.prop],T=Yo(i,Ru),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!h?_.render(-1,!0):_.revert(u&&g?Po:Jp),_._lazy=0),a){if(Sr(e._startAt=Wt.set(m,ei({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Ln(l),startAt:null,delay:0,onUpdate:c&&function(){return Kn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on||!o&&!h)&&e._startAt.revert(Po),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),A=ei({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Ln(l),immediateRender:o,stagger:0,parent:p},T),k&&(A[U.prop]=k),Sr(e._startAt=Wt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on?e._startAt.revert(Po):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Ln(l)||l&&!g,w=0;w<m.length;w++){if(x=m[w],P=x._gsap||Du(m)[w]._gsap,e._ptLookup[w]=H={},lc[P.id]&&gr.length&&qo(),V=y===m?w:y.indexOf(x),U&&(B=new U).init(x,k||T,e,V,y)!==!1&&(e._pt=D=new Un(e._pt,x,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function($){H[$]=D}),B.priority&&(M=1)),!U||k)for(A in T)Xn[A]&&(B=vd(A,T,e,V,x,y))?B.priority&&(M=1):H[A]=D=Iu.call(e,x,A,"get",T[A],V,y,0,i.stringFilter);e._op&&e._op[w]&&e.kill(x,e._op[w]),b&&e._pt&&(fr=e,Lt.killTweensOf(x,H,e.globalTime(t)),F=!e.parent,fr=0),e._pt&&l&&(lc[P.id]=1)}M&&bd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!F,d&&t<=0&&S.render(ci,!0,!0)},bm=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return pc=1,e.vars[t]="+=0",Uu(e,o),pc=0,l?Pa(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Bt(n)+dn(f.e)),f.b&&(f.b=u.s+dn(f.b))},Am=function(e,t){var n=e[0]?Xr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Os({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},wm=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(_n(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},va=function(e,t,n,i,s){return Ft(e)?e.call(t,n,i,s):rn(e)&&~e.indexOf("random(")?La(e):e},Sd=Pu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Md={};In(Sd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Md[r]=1});var Wt=(function(r){kh(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ga(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=i.parent||Lt,b=(_n(n)||Gh(n)?ji(n[0]):"length"in i)?[n]:ui(n),S,T,w,A,D,x,M,P;if(o._targets=b.length?Du(b):Pa("GSAP target "+n+" not found. https://gsap.com",!jn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,g||d||Ka(c)||Ka(u)){if(i=o.vars,S=o.timeline=new bn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:b}),S.kill(),S.parent=S._dp=Vi(o),S._start=0,d||Ka(c)||Ka(u)){if(A=b.length,M=d&&sd(d),Li(d))for(D in d)~Sd.indexOf(D)&&(P||(P={}),P[D]=d[D]);for(T=0;T<A;T++)w=Yo(i,Md),w.stagger=0,p&&(w.yoyoEase=p),P&&Os(w,P),x=b[T],w.duration=+va(c,Vi(o),T,x,b),w.delay=(+va(u,Vi(o),T,x,b)||0)-o._delay,!d&&A===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),S.to(x,w,M?M(T,x,b):0),S._ease=ot.none;S.duration()?c=u=0:o.timeline=0}else if(g){ga(ei(S.vars.defaults,{ease:"none"})),S._ease=Yr(g.ease||i.ease||"none");var U=0,B,H,V;if(_n(g))g.forEach(function(k){return S.to(b,k,">")}),S.duration();else{w={};for(D in g)D==="ease"||D==="easeEach"||wm(D,g[D],w,g.easeEach);for(D in w)for(B=w[D].sort(function(k,F){return k.t-F.t}),U=0,T=0;T<B.length;T++)H=B[T],V={ease:H.e,duration:(H.t-(T?B[T-1].t:0))/100*c},V[D]=H.v,S.to(b,V,U),U+=V.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return h===!0&&!Tu&&(fr=Vi(o),Lt.killTweensOf(b),fr=0),yi(y,Vi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!g&&o._start===Dt(y._time)&&Ln(f)&&rm(Vi(o))&&y.data!=="nested")&&(o._tTime=-At,o.render(Math.max(0,-u)||0)),m&&td(Vi(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-At&&!u?l:i<At?0:i,d,h,g,_,m,p,y,b,S;if(!c)am(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(d=Dt(f%_),f===l?(g=this._repeat,d=c):(m=Dt(f/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(S=this._yEase,d=c-d),m=Bs(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(b&&this._yEase&&_d(b,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(Dt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(nd(this,u?i:d,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(d/c),this._from&&(this.ratio=y=1-y),!o&&f&&!s&&!m&&(Kn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(y,h.d),h=h._next;b&&b.render(i<0?i:b._dur*b._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&cc(this,i,s,a),Kn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Kn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&cc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Sr(this,1),!s&&!(u&&!o)&&(f||o||p)&&(Kn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Ia||Yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Uu(this,c),u=this._ease(c/this._dur),bm(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(al(this,0),this.parent||Qh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?la(this):this.scrollTrigger&&this.scrollTrigger.kill(!!on),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,fr&&fr.vars.overwrite!==!0)._first||la(this),this.parent&&a!==this.timeline.totalDuration()&&zs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ui(i):o,c=this._ptLookup,u=this._pt,f,d,h,g,_,m,p;if((!s||s==="all")&&nm(o,l))return s==="all"&&(this._pt=0),la(this);for(f=this._op=this._op||[],s!=="all"&&(rn(s)&&(_={},In(s,function(y){return _[y]=1}),s=_),s=Am(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(f[p]=s,g=d,h={}):(h=f[p]=f[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&rl(this,m,"_pt"),delete d[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&la(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return xa(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return xa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Lt.killTweensOf(i,s,a)},e})(Ua);ei(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});In("staggerTo,staggerFrom,staggerFromTo",function(r){Wt[r]=function(){var e=new bn,t=fc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Nu=function(e,t,n){return e[t]=n},Ed=function(e,t,n){return e[t](n)},Cm=function(e,t,n,i){return e[t](i.fp,n)},Rm=function(e,t,n){return e.setAttribute(t,n)},Fu=function(e,t){return Ft(e[t])?Ed:bu(e[t])&&e.setAttribute?Rm:Nu},yd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Pm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Td=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ou=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Dm=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Lm=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?rl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Im=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},bd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Un=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||yd,this.d=l||this,this.set=c||Nu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Im,this.m=n,this.mt=s,this.tween=i},r})();In(Pu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Ru[r]=1});Qn.TweenMax=Qn.TweenLite=Wt;Qn.TimelineLite=Qn.TimelineMax=bn;Lt=new bn({sortChildren:!1,defaults:Fs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});jn.stringFilter=pd;var $r=[],Lo={},Um=[],_f=0,Nm=0,xl=function(e){return(Lo[e]||Um).map(function(t){return t()})},mc=function(){var e=Date.now(),t=[];e-_f>2&&(xl("matchMediaInit"),$r.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Si.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),xl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),_f=e,xl("matchMedia"))},Ad=(function(){function r(t,n){this.selector=n&&hc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Nm++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ft(n)&&(s=i,i=n,n=Ft);var a=this,o=function(){var c=Pt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=hc(s)),Pt=a,f=i.apply(a,arguments),Ft(f)&&a._r.push(f),Pt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Ft?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Pt;Pt=null,n(this),Pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof bn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Wt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=$r.length;a--;)$r[a].id===this.id&&$r.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),Fm=(function(){function r(t){this.contexts=[],this.scope=t,Pt&&Pt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Li(n)||(n={matches:n});var a=new Ad(0,s||this.scope),o=a.conditions={},l,c,u;Pt&&!a.selector&&(a.selector=Pt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Si.matchMedia(n[c]),l&&($r.indexOf(a)<0&&$r.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(mc):l.addEventListener("change",mc)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ko={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return fd(i)})},timeline:function(e){return new bn(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,n,i){rn(e)&&(e=ui(e)[0]);var s=Xr(e||{}).get,a=n?Jh:jh;return n==="native"&&(n=""),e&&(t?a((Xn[t]&&Xn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Xn[o]&&Xn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=ui(e),e.length>1){var i=e.map(function(u){return On.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=Xn[t],o=Xr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;As._pt=0,f.init(e,n?u+n:u,As,0,[e]),f.render(1,f),As._pt&&Ou(1,As)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=On.to(e,ei((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Yr(e.ease,Fs.ease)),ff(Fs,e||{})},config:function(e){return ff(jn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Xn[o]&&!Qn[o]&&Pa(t+" effect requires "+o+" plugin.")}),pl[t]=function(o,l,c){return n(ui(o),ei(l||{},s),c)},a&&(bn.prototype[t]=function(o,l,c){return this.add(pl[t](o,Li(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ot[e]=Yr(t)},parseEase:function(e,t){return arguments.length?Yr(e,t):ot},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new bn(e),i,s;for(n.smoothChildTiming=Ln(e.smoothChildTiming),Lt.remove(n),n._dp=0,n._time=n._tTime=Lt._time,i=Lt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Wt&&i.vars.onComplete===i._targets[0]))&&yi(n,i,i._start-i._delay),i=s;return yi(Lt,n,0),n},context:function(e,t){return e?new Ad(e,t):Pt},matchMedia:function(e){return new Fm(e)},matchMediaRefresh:function(){return $r.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||mc()},addEventListener:function(e,t){var n=Lo[e]||(Lo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Lo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:pm,wrapYoyo:mm,distribute:sd,random:od,snap:ad,normalize:dm,getUnit:dn,clamp:cm,splitColor:hd,toArray:ui,selector:hc,mapRange:cd,pipe:fm,unitize:hm,interpolate:_m,shuffle:rd},install:qh,effects:pl,ticker:Yn,updateRoot:bn.updateRoot,plugins:Xn,globalTimeline:Lt,core:{PropTween:Un,globals:Yh,Tween:Wt,Timeline:bn,Animation:Ua,getCache:Xr,_removeLinkedListItem:rl,reverting:function(){return on},context:function(e){return e&&Pt&&(Pt.data.push(e),e._ctx=Pt),Pt},suppressOverwrites:function(e){return Tu=e}}};In("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ko[r]=Wt[r]});Yn.add(bn.updateRoot);As=Ko.to({},{duration:0});var Om=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Bm=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Om(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},vl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(rn(s)&&(l={},In(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Bm(o,s)}}}},On=Ko.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)on?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},vl("roundProps",dc),vl("modifiers"),vl("snap",ad))||Ko;Wt.version=bn.version=On.version="3.14.2";Xh=1;Au()&&ks();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;var gf,hr,Rs,Bu,Vr,xf,zu,zm=function(){return typeof window<"u"},Ji={},Nr=180/Math.PI,Ps=Math.PI/180,ss=Math.atan2,vf=1e8,ku=/([A-Z])/g,km=/(left|right|width|margin|padding|x)/i,Vm=/[\s,\(]\S/,Ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_c=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Gm=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Hm=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Wm=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Xm=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},wd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Cd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},qm=function(e,t,n){return e.style[t]=n},Ym=function(e,t,n){return e.style.setProperty(t,n)},$m=function(e,t,n){return e._gsap[t]=n},Km=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Zm=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},jm=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},It="transform",Nn=It+"Origin",Jm=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Ji&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ti[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Gi(i,o)}):this.tfm[e]=a.x?a[e]:Gi(i,e),e===Nn&&(this.tfm.zOrigin=a.zOrigin);else return Ti.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(It)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Nn,t,"")),e=It}(s||t)&&this.props.push(e,t,s[e])},Rd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Qm=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ku,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=zu(),(!s||!s.isStart)&&!n[It]&&(Rd(n),i.zOrigin&&n[Nn]&&(n[Nn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Pd=function(e,t){var n={target:e,props:[],revert:Qm,save:Jm};return e._gsap||On.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Dd,gc=function(e,t){var n=hr.createElementNS?hr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hr.createElement(e);return n&&n.style?n:hr.createElement(e)},Zn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ku,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Vs(t)||t,1)||""},Sf="O,Moz,ms,Ms,Webkit".split(","),Vs=function(e,t,n){var i=t||Vr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Sf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Sf[a]:"")+e},xc=function(){zm()&&window.document&&(gf=window,hr=gf.document,Rs=hr.documentElement,Vr=gc("div")||{style:{}},gc("div"),It=Vs(It),Nn=It+"Origin",Vr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Dd=!!Vs("perspective"),zu=On.core.reverting,Bu=1)},Mf=function(e){var t=e.ownerSVGElement,n=gc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Rs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Rs.removeChild(n),s},Ef=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ld=function(e){var t,n;try{t=e.getBBox()}catch{t=Mf(e),n=1}return t&&(t.width||t.height)||n||(t=Mf(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ef(e,["x","cx","x1"])||0,y:+Ef(e,["y","cy","y1"])||0,width:0,height:0}:t},Id=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ld(e))},Mr=function(e,t){if(t){var n=e.style,i;t in Ji&&t!==Nn&&(t=It),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(ku,"-$1").toLowerCase())):n.removeAttribute(t)}},dr=function(e,t,n,i,s,a){var o=new Un(e._pt,t,n,0,1,a?Cd:wd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},yf={deg:1,rad:1,turn:1},e_={grid:1,flex:1},Er=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Vr.style,l=km.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",h=i==="%",g,_,m,p;if(i===a||!s||yf[i]||yf[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&Id(e),(h||a==="%")&&(Ji[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Bt(h?s/g*f:s/100*g);if(o[l?"width":"height"]=f+(d?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===hr||!_.appendChild)&&(_=hr.body),m=_._gsap,m&&h&&m.width&&l&&m.time===Yn.time&&!m.uncache)return Bt(s/m.width*f);if(h&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+i,g=e[u],y?e.style[t]=y:Mr(e,t)}else(h||a==="%")&&!e_[Zn(_,"display")]&&(o.position=Zn(e,"position")),_===e&&(o.position="static"),_.appendChild(Vr),g=Vr[u],_.removeChild(Vr),o.position="absolute";return l&&h&&(m=Xr(_),m.time=Yn.time,m.width=_[u]),Bt(d?g*s/f:g&&s?f/g*s:0)},Gi=function(e,t,n,i){var s;return Bu||xc(),t in Ti&&t!=="transform"&&(t=Ti[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ji[t]&&t!=="transform"?(s=Fa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:jo(Zn(e,Nn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Zo[t]&&Zo[t](e,t,n)||Zn(e,t)||Kh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Er(e,t,s,n)+n:s},t_=function(e,t,n,i){if(!n||n==="none"){var s=Vs(t,e,1),a=s&&Zn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Zn(e,"borderTopColor"))}var o=new Un(this._pt,e.style,t,0,1,Td),l=0,c=0,u,f,d,h,g,_,m,p,y,b,S,T;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Zn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Zn(e,t)||i,_?e.style[t]=_:Mr(e,t)),u=[n,i],pd(u),n=u[0],i=u[1],d=n.match(bs)||[],T=i.match(bs)||[],T.length){for(;f=bs.exec(i);)m=f[0],y=i.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(h=parseFloat(_)||0,S=_.substr((h+"").length),m.charAt(1)==="="&&(m=Cs(h,m)+S),p=parseFloat(m),b=m.substr((p+"").length),l=bs.lastIndex-b.length,b||(b=b||jn.units[t]||S,l===i.length&&(i+=b,o.e+=b)),S!==b&&(h=Er(e,t,_,b)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:h,c:p-h,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Cd:wd;return Wh.test(i)&&(o.e=0),this._pt=o,o},Tf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},n_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Tf[n]||n,t[1]=Tf[i]||i,t.join(" ")},i_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ji[o]&&(l=1,o=o==="transformOrigin"?Nn:It),Mr(n,o);l&&(Mr(n,It),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Fa(n,1),a.uncache=1,Rd(i)))}},Zo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Un(e._pt,t,n,0,0,i_);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Na=[1,0,0,1,0,0],Ud={},Nd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},bf=function(e){var t=Zn(e,It);return Nd(t)?Na:t.substr(7).match(Hh).map(Bt)},Vu=function(e,t){var n=e._gsap||Xr(e),i=e.style,s=bf(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Na:s):(s===Na&&!e.offsetParent&&e!==Rs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Rs.appendChild(e)),s=bf(e),l?i.display=l:Mr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Rs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},vc=function(e,t,n,i,s,a){var o=e._gsap,l=s||Vu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,d=o.yOffset||0,h=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],b=t.split(" "),S=parseFloat(b[0])||0,T=parseFloat(b[1])||0,w,A,D,x;n?l!==Na&&(A=h*m-g*_)&&(D=S*(m/A)+T*(-_/A)+(_*y-m*p)/A,x=S*(-g/A)+T*(h/A)-(h*y-g*p)/A,S=D,T=x):(w=Ld(e),S=w.x+(~b[0].indexOf("%")?S/100*w.width:S),T=w.y+(~(b[1]||b[0]).indexOf("%")?T/100*w.height:T)),i||i!==!1&&o.smooth?(p=S-c,y=T-u,o.xOffset=f+(p*h+y*_)-p,o.yOffset=d+(p*g+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=T,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Nn]="0px 0px",a&&(dr(a,o,"xOrigin",c,S),dr(a,o,"yOrigin",u,T),dr(a,o,"xOffset",f,o.xOffset),dr(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+T)},Fa=function(e,t){var n=e._gsap||new xd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Zn(e,Nn)||"0",u,f,d,h,g,_,m,p,y,b,S,T,w,A,D,x,M,P,U,B,H,V,k,F,$,ee,R,ne,Re,Be,We,$e;return u=f=d=_=m=p=y=b=S=0,h=g=1,n.svg=!!(e.getCTM&&Id(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[It]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[It]!=="none"?l[It]:"")),i.scale=i.rotate=i.translate="none"),A=Vu(e,n.svg),n.svg&&(n.uncache?($=e.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),vc(e,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,A)),T=n.xOrigin||0,w=n.yOrigin||0,A!==Na&&(P=A[0],U=A[1],B=A[2],H=A[3],u=V=A[4],f=k=A[5],A.length===6?(h=Math.sqrt(P*P+U*U),g=Math.sqrt(H*H+B*B),_=P||U?ss(U,P)*Nr:0,y=B||H?ss(B,H)*Nr+_:0,y&&(g*=Math.abs(Math.cos(y*Ps))),n.svg&&(u-=T-(T*P+w*B),f-=w-(T*U+w*H))):($e=A[6],Be=A[7],R=A[8],ne=A[9],Re=A[10],We=A[11],u=A[12],f=A[13],d=A[14],D=ss($e,Re),m=D*Nr,D&&(x=Math.cos(-D),M=Math.sin(-D),F=V*x+R*M,$=k*x+ne*M,ee=$e*x+Re*M,R=V*-M+R*x,ne=k*-M+ne*x,Re=$e*-M+Re*x,We=Be*-M+We*x,V=F,k=$,$e=ee),D=ss(-B,Re),p=D*Nr,D&&(x=Math.cos(-D),M=Math.sin(-D),F=P*x-R*M,$=U*x-ne*M,ee=B*x-Re*M,We=H*M+We*x,P=F,U=$,B=ee),D=ss(U,P),_=D*Nr,D&&(x=Math.cos(D),M=Math.sin(D),F=P*x+U*M,$=V*x+k*M,U=U*x-P*M,k=k*x-V*M,P=F,V=$),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),h=Bt(Math.sqrt(P*P+U*U+B*B)),g=Bt(Math.sqrt(k*k+$e*$e)),D=ss(V,k),y=Math.abs(D)>2e-4?D*Nr:0,S=We?1/(We<0?-We:We):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Nd(Zn(e,It)),F&&e.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(h*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Bt(h),n.scaleY=Bt(g),n.rotation=Bt(_)+o,n.rotationX=Bt(m)+o,n.rotationY=Bt(p)+o,n.skewX=y+o,n.skewY=b+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Nn]=jo(c)),n.xOffset=n.yOffset=0,n.force3D=jn.force3D,n.renderTransform=n.svg?s_:Dd?Fd:r_,n.uncache=0,n},jo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Sl=function(e,t,n){var i=dn(t);return Bt(parseFloat(t)+parseFloat(Er(e,"x",n+"px",i)))+i},r_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Fd(e,t)},wr="0deg",Js="0px",Cr=") ",Fd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,h=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,b=n.zOrigin,S="",T=p==="auto"&&e&&e!==1||p===!0;if(b&&(f!==wr||u!==wr)){var w=parseFloat(u)*Ps,A=Math.sin(w),D=Math.cos(w),x;w=parseFloat(f)*Ps,x=Math.cos(w),a=Sl(y,a,A*x*-b),o=Sl(y,o,-Math.sin(w)*-b),l=Sl(y,l,D*x*-b+b)}m!==Js&&(S+="perspective("+m+Cr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(T||a!==Js||o!==Js||l!==Js)&&(S+=l!==Js||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Cr),c!==wr&&(S+="rotate("+c+Cr),u!==wr&&(S+="rotateY("+u+Cr),f!==wr&&(S+="rotateX("+f+Cr),(d!==wr||h!==wr)&&(S+="skew("+d+", "+h+Cr),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Cr),y.style[It]=S||"translate(0, 0)"},s_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,h=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,b=parseFloat(a),S=parseFloat(o),T,w,A,D,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ps,c*=Ps,T=Math.cos(l)*f,w=Math.sin(l)*f,A=Math.sin(l-c)*-d,D=Math.cos(l-c)*d,c&&(u*=Ps,x=Math.tan(c-u),x=Math.sqrt(1+x*x),A*=x,D*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),T*=x,w*=x)),T=Bt(T),w=Bt(w),A=Bt(A),D=Bt(D)):(T=f,D=d,w=A=0),(b&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(b=Er(h,"x",a,"px"),S=Er(h,"y",o,"px")),(g||_||m||p)&&(b=Bt(b+g-(g*T+_*A)+m),S=Bt(S+_-(g*w+_*D)+p)),(i||s)&&(x=h.getBBox(),b=Bt(b+i/100*x.width),S=Bt(S+s/100*x.height)),x="matrix("+T+","+w+","+A+","+D+","+b+","+S+")",h.setAttribute("transform",x),y&&(h.style[It]=x)},a_=function(e,t,n,i,s){var a=360,o=rn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Nr:1),c=l-i,u=i+c+"deg",f,d;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*vf)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*vf)%a-~~(c/a)*a)),e._pt=d=new Un(e._pt,t,n,i,c,Gm),d.e=u,d.u="deg",e._props.push(n),d},Af=function(e,t){for(var n in t)e[n]=t[n];return e},o_=function(e,t,n){var i=Af({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,d,h,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[It]=t,o=Fa(n,1),Mr(n,It),n.setAttribute("transform",c)):(c=getComputedStyle(n)[It],a[It]=t,o=Fa(n,1),a[It]=c);for(l in Ji)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=dn(c),g=dn(u),f=h!==g?Er(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Un(e._pt,o,l,f,d-f,_c),e._pt.u=g||0,e._props.push(l));Af(o,i)};In("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Zo[e>1?"border"+r:r]=function(o,l,c,u,f){var d,h;if(arguments.length<4)return d=a.map(function(g){return Gi(o,g,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},a.forEach(function(g,_){return h[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,h,f)}});var Od={name:"css",register:xc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,d,h,g,_,m,p,y,b,S,T,w,A,D,x;Bu||xc(),this.styles=this.styles||Pd(e),D=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Xn[_]&&vd(_,t,n,i,e,s)))){if(h=typeof u,g=Zo[_],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=La(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",xr.lastIndex=0,xr.test(c)||(m=dn(c),p=dn(u),p?m!==p&&(c=Er(e,_,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),D.push(_,0,o[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],rn(c)&&~c.indexOf("random(")&&(c=La(c)),dn(c+"")||c==="auto"||(c+=jn.units[_]||dn(Gi(e,_))||""),(c+"").charAt(1)==="="&&(c=Gi(e,_))):c=Gi(e,_),d=parseFloat(c),y=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),_ in Ti&&(_==="autoAlpha"&&(d===1&&Gi(e,"visibility")==="hidden"&&f&&(d=0),D.push("visibility",0,o.visibility),dr(this,o,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Ti[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in Ji,b){if(this.styles.save(_),x=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Zn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=u,u=Zn(e,"perspective"),M?e.style.perspective=M:Mr(e,"perspective")}f=parseFloat(u)}if(S||(T=e._gsap,T.renderTransform&&!t.parseTransform||Fa(e,t.parseTransform),w=t.smoothOrigin!==!1&&T.smooth,S=this._pt=new Un(this._pt,o,It,0,1,T.renderTransform,T,0,-1),S.dep=1),_==="scale")this._pt=new Un(this._pt,T,"scaleY",T.scaleY,(y?Cs(T.scaleY,y+f):f)-T.scaleY||0,_c),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(Nn,0,o[Nn]),u=n_(u),T.svg?vc(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==T.zOrigin&&dr(this,T,"zOrigin",T.zOrigin,p),dr(this,o,_,jo(c),jo(u)));continue}else if(_==="svgOrigin"){vc(e,u,1,w,0,this);continue}else if(_ in Ud){a_(this,T,_,d,y?Cs(d,y+u):u);continue}else if(_==="smoothOrigin"){dr(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){o_(this,u,e);continue}}else _ in o||(_=Vs(_)||_);if(b||(f||f===0)&&(d||d===0)&&!Vm.test(u)&&_ in o)m=(c+"").substr((d+"").length),f||(f=0),p=dn(u)||(_ in jn.units?jn.units[_]:m),m!==p&&(d=Er(e,_,c,p)),this._pt=new Un(this._pt,b?T:o,_,d,(y?Cs(d,y+f):f)-d,!b&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Xm:_c),this._pt.u=p||0,b&&x!==u?(this._pt.b=c,this._pt.e=x,this._pt.r=Wm):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Hm);else if(_ in o)t_.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,s);else if(_!=="parseTransform"){Cu(_,u);continue}b||(_ in o?D.push(_,0,o[_]):typeof e[_]=="function"?D.push(_,2,e[_]()):D.push(_,1,c||e[_])),a.push(_)}}A&&bd(this)},render:function(e,t){if(t.tween._time||!zu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gi,aliases:Ti,getSetter:function(e,t,n){var i=Ti[t];return i&&i.indexOf(",")<0&&(t=i),t in Ji&&t!==Nn&&(e._gsap.x||Gi(e,"x"))?n&&xf===n?t==="scale"?Km:$m:(xf=n||{})&&(t==="scale"?Zm:jm):e.style&&!bu(e.style[t])?qm:~t.indexOf("-")?Ym:Fu(e,t)},core:{_removeProperty:Mr,_getMatrix:Vu}};On.utils.checkPrefix=Vs;On.core.getStyleSaver=Pd;(function(r,e,t,n){var i=In(r+","+e+","+t,function(s){Ji[s]=1});In(e,function(s){jn.units[s]="deg",Ud[s]=1}),Ti[i[13]]=r+","+e,In(n,function(s){var a=s.split(":");Ti[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");In("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){jn.units[r]="px"});On.registerPlugin(Od);var Ie=On.registerPlugin(Od)||On;Ie.core.Tween;function l_(){const r=document.querySelector(".preloader__section"),e=document.querySelector(".circle-overlay"),t=document.querySelector(".loading-h"),n=document.querySelector(".preloader-h");let i=0,s=.8,a=0;function o(){i+=s,i>100&&(i=100),t.textContent=`${Math.floor(i)} %`,i<100?requestAnimationFrame(o):(Ie.to([t,n],{delay:.8,opacity:0,duration:.8}),Ie.to(e,{delay:1,yPercent:-100,duration:1.6,ease:"expo.inOut",onComplete:()=>{Ie.set(r,{zIndex:-30}),document.body.classList.remove("no--scroll")}}))}function l(){a+=.03;const c=Math.sin(a),u=Ie.utils.mapRange(-1,1,100,500,c);Ie.set(n,{fontVariationSettings:`'wght' ${u}`}),requestAnimationFrame(l)}o(),l()}const Gu="182",c_=0,wf=1,u_=2,Io=1,f_=2,ua=3,yr=0,Fn=1,Hi=2,Yi=0,Ds=1,Cf=2,Rf=3,Pf=4,h_=5,zr=100,d_=101,p_=102,m_=103,__=104,g_=200,x_=201,v_=202,S_=203,Sc=204,Mc=205,M_=206,E_=207,y_=208,T_=209,b_=210,A_=211,w_=212,C_=213,R_=214,Ec=0,yc=1,Tc=2,Gs=3,bc=4,Ac=5,wc=6,Cc=7,Bd=0,P_=1,D_=2,Ci=0,zd=1,kd=2,Vd=3,Gd=4,Hd=5,Wd=6,Xd=7,qd=300,Jr=301,Hs=302,Rc=303,Pc=304,ol=306,Dc=1e3,Xi=1001,Lc=1002,sn=1003,L_=1004,Za=1005,mn=1006,Ml=1007,Gr=1008,li=1009,Yd=1010,$d=1011,Oa=1012,Hu=1013,Ii=1014,bi=1015,Qi=1016,Wu=1017,Xu=1018,Ba=1020,Kd=35902,Zd=35899,jd=1021,Jd=1022,gi=1023,er=1026,Hr=1027,Qd=1028,qu=1029,Ws=1030,Yu=1031,$u=1033,Uo=33776,No=33777,Fo=33778,Oo=33779,Ic=35840,Uc=35841,Nc=35842,Fc=35843,Oc=36196,Bc=37492,zc=37496,kc=37488,Vc=37489,Gc=37490,Hc=37491,Wc=37808,Xc=37809,qc=37810,Yc=37811,$c=37812,Kc=37813,Zc=37814,jc=37815,Jc=37816,Qc=37817,eu=37818,tu=37819,nu=37820,iu=37821,ru=36492,su=36494,au=36495,ou=36283,lu=36284,cu=36285,uu=36286,I_=3200,U_=0,N_=1,ur="",ri="srgb",Xs="srgb-linear",Jo="linear",xt="srgb",as=7680,Df=519,F_=512,O_=513,B_=514,Ku=515,z_=516,k_=517,Zu=518,V_=519,Lf=35044,If="300 es",Ai=2e3,Qo=2001;function ep(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function za(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function G_(){const r=za("canvas");return r.style.display="block",r}const Uf={};function Nf(...r){const e="THREE."+r.shift();console.log(e,...r)}function Ye(...r){const e="THREE."+r.shift();console.warn(e,...r)}function dt(...r){const e="THREE."+r.shift();console.error(e,...r)}function ka(...r){const e=r.join(" ");e in Uf||(Uf[e]=!0,Ye(...r))}function H_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class Ks{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],El=Math.PI/180,fu=180/Math.PI;function Xa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[r&255]+cn[r>>8&255]+cn[r>>16&255]+cn[r>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function W_(r,e){return(r%e+e)%e}function yl(r,e,t){return(1-t)*r+t*e}function Qs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qa{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],d=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let m=l*d+c*h+u*g+f*_;m<0&&(d=-d,h=-h,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),b=Math.sin(y);p=Math.sin(p*y)/b,o=Math.sin(o*y)/b,l=l*p+d*o,c=c*p+h*o,u=u*p+g*o,f=f*p+_*o}else{l=l*p+d*o,c=c*p+h*o,u=u*p+g*o,f=f*p+_*o;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-o*h,e[t+2]=c*g+u*h+o*d-l*f,e[t+3]=u*g-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),d=l(n/2),h=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-i)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(s-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(a-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ff.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ff.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tl.copy(this).projectOnVector(e),this.sub(Tl)}reflect(e){return this.sub(Tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tl=new q,Ff=new qa;class je{constructor(e,t,n,i,s,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],b=i[4],S=i[7],T=i[2],w=i[5],A=i[8];return s[0]=a*_+o*y+l*T,s[3]=a*m+o*b+l*w,s[6]=a*p+o*S+l*A,s[1]=c*_+u*y+f*T,s[4]=c*m+u*b+f*w,s[7]=c*p+u*S+f*A,s[2]=d*_+h*y+g*T,s[5]=d*m+h*b+g*w,s[8]=d*p+h*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,g=t*f+n*d+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(bl.makeScale(e,t)),this}rotate(e){return this.premultiply(bl.makeRotation(-e)),this}translate(e,t){return this.premultiply(bl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bl=new je,Of=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bf=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function X_(){const r={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xt&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(i.r=Ls(i.r),i.g=Ls(i.g),i.b=Ls(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ur?Jo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ka("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ka("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Xs]:{primaries:e,whitePoint:n,transfer:Jo,toXYZ:Of,fromXYZ:Bf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Of,fromXYZ:Bf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),r}const ct=X_();function $i(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ls(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let os;class q_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{os===void 0&&(os=za("canvas")),os.width=e.width,os.height=e.height;const i=os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=os}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=za("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=$i(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Y_=0;class ju{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Xa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Al(i[a].image)):s.push(Al(i[a]))}else s=Al(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Al(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?q_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let $_=0;const wl=new q;class gn extends Ks{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,n=Xi,i=Xi,s=mn,a=Gr,o=gi,l=li,c=gn.DEFAULT_ANISOTROPY,u=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Xa(),this.name="",this.source=new ju(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wl).x}get height(){return this.source.getSize(wl).y}get depth(){return this.source.getSize(wl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dc:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dc:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=qd;gn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,n=0,i=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(h+1)/2,T=(p+1)/2,w=(u+d)/4,A=(f+_)/4,D=(g+m)/4;return b>S&&b>T?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=w/n,s=A/n):S>T?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=D/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=A/s,i=D/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K_ extends Ks{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new gn(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ju(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends K_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tp extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Z_ extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ya{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(s,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ja.copy(n.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),Ja.subVectors(this.max,ea),ls.subVectors(e.a,ea),cs.subVectors(e.b,ea),us.subVectors(e.c,ea),ir.subVectors(cs,ls),rr.subVectors(us,cs),Rr.subVectors(ls,us);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Rr.z,Rr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Rr.z,0,-Rr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Rr.y,Rr.x,0];return!Cl(t,ls,cs,us,Ja)||(t=[1,0,0,0,1,0,0,0,1],!Cl(t,ls,cs,us,Ja))?!1:(Qa.crossVectors(ir,rr),t=[Qa.x,Qa.y,Qa.z],Cl(t,ls,cs,us,Ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new q,new q,new q,new q,new q,new q,new q,new q],hi=new q,ja=new Ya,ls=new q,cs=new q,us=new q,ir=new q,rr=new q,Rr=new q,ea=new q,Ja=new q,Qa=new q,Pr=new q;function Cl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Pr.fromArray(r,s);const o=i.x*Math.abs(Pr.x)+i.y*Math.abs(Pr.y)+i.z*Math.abs(Pr.z),l=e.dot(Pr),c=t.dot(Pr),u=n.dot(Pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const j_=new Ya,ta=new q,Rl=new q;class Ju{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):j_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);const t=ta.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ta,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(Rl)),this.expandByPoint(ta.copy(e.center).sub(Rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Oi=new q,Pl=new q,eo=new q,sr=new q,Dl=new q,to=new q,Ll=new q;class J_{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pl.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(Pl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(eo),o=sr.dot(this.direction),l=-sr.dot(eo),c=sr.lengthSq(),u=Math.abs(1-a*a);let f,d,h,g;if(u>0)if(f=a*l-o,d=a*o-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Pl).addScaledVector(eo,d),h}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const n=Oi.dot(this.direction),i=Oi.dot(Oi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,i,s){Dl.subVectors(t,e),to.subVectors(n,e),Ll.crossVectors(Dl,to);let a=this.direction.dot(Ll),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;sr.subVectors(this.origin,e);const l=o*this.direction.dot(to.crossVectors(sr,to));if(l<0)return null;const c=o*this.direction.dot(Dl.cross(sr));if(c<0||l+c>a)return null;const u=-o*sr.dot(Ll);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,t,n,i,s,a,o,l,c,u,f,d,h,g,_,m){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,f,d,h,g,_,m)}set(e,t,n,i,s,a,o,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),a=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d+_*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=a*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Q_,e,eg)}lookAt(e,t,n){const i=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),ar.crossVectors(n,Vn),ar.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),ar.crossVectors(n,Vn)),ar.normalize(),no.crossVectors(Vn,ar),i[0]=ar.x,i[4]=no.x,i[8]=Vn.x,i[1]=ar.y,i[5]=no.y,i[9]=Vn.y,i[2]=ar.z,i[6]=no.z,i[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],b=n[7],S=n[11],T=n[15],w=i[0],A=i[4],D=i[8],x=i[12],M=i[1],P=i[5],U=i[9],B=i[13],H=i[2],V=i[6],k=i[10],F=i[14],$=i[3],ee=i[7],R=i[11],ne=i[15];return s[0]=a*w+o*M+l*H+c*$,s[4]=a*A+o*P+l*V+c*ee,s[8]=a*D+o*U+l*k+c*R,s[12]=a*x+o*B+l*F+c*ne,s[1]=u*w+f*M+d*H+h*$,s[5]=u*A+f*P+d*V+h*ee,s[9]=u*D+f*U+d*k+h*R,s[13]=u*x+f*B+d*F+h*ne,s[2]=g*w+_*M+m*H+p*$,s[6]=g*A+_*P+m*V+p*ee,s[10]=g*D+_*U+m*k+p*R,s[14]=g*x+_*B+m*F+p*ne,s[3]=y*w+b*M+S*H+T*$,s[7]=y*A+b*P+S*V+T*ee,s[11]=y*D+b*U+S*k+T*R,s[15]=y*x+b*B+S*F+T*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15],y=l*h-c*d,b=o*h-c*f,S=o*d-l*f,T=a*h-c*u,w=a*d-l*u,A=a*f-o*u;return t*(_*y-m*b+p*S)-n*(g*y-m*T+p*w)+i*(g*b-_*T+p*A)-s*(g*S-_*w+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=f*m*c-_*d*c+_*l*h-o*m*h-f*l*p+o*d*p,b=g*d*c-u*m*c-g*l*h+a*m*h+u*l*p-a*d*p,S=u*_*c-g*f*c+g*o*h-a*_*h-u*o*p+a*f*p,T=g*f*l-u*_*l-g*o*d+a*_*d+u*o*m-a*f*m,w=t*y+n*b+i*S+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(_*d*s-f*m*s-_*i*h+n*m*h+f*i*p-n*d*p)*A,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*A,e[3]=(f*l*s-o*d*s-f*i*c+n*d*c+o*i*h-n*l*h)*A,e[4]=b*A,e[5]=(u*m*s-g*d*s+g*i*h-t*m*h-u*i*p+t*d*p)*A,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*A,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*h+t*l*h)*A,e[8]=S*A,e[9]=(g*f*s-u*_*s-g*n*h+t*_*h+u*n*p-t*f*p)*A,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*A,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*h-t*o*h)*A,e[12]=T*A,e[13]=(u*_*i-g*f*i+g*n*d-t*_*d-u*n*m+t*f*m)*A,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*A,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,g=s*f,_=a*u,m=a*f,p=o*f,y=l*c,b=l*u,S=l*f,T=n.x,w=n.y,A=n.z;return i[0]=(1-(_+p))*T,i[1]=(h+S)*T,i[2]=(g-b)*T,i[3]=0,i[4]=(h-S)*w,i[5]=(1-(d+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(g+b)*A,i[9]=(m-y)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=fs.set(i[0],i[1],i[2]).length();const a=fs.set(i[4],i[5],i[6]).length(),o=fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),di.copy(this);const c=1/s,u=1/a,f=1/o;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=f,di.elements[9]*=f,di.elements[10]*=f,t.setFromRotationMatrix(di),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Ai,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Ai)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Qo)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ai,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),h=-(n+i)/(n-i);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Ai)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Qo)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fs=new q,di=new Xt,Q_=new q(0,0,0),eg=new q(1,1,1),ar=new q,no=new q,Vn=new q,zf=new Xt,kf=new qa;class tr{constructor(e=0,t=0,n=0,i=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kf.setFromEuler(this),this.setFromQuaternion(kf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class np{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tg=0;const Vf=new q,hs=new qa,Bi=new Xt,io=new q,na=new q,ng=new q,ig=new qa,Gf=new q(1,0,0),Hf=new q(0,1,0),Wf=new q(0,0,1),Xf={type:"added"},rg={type:"removed"},ds={type:"childadded",child:null},Il={type:"childremoved",child:null};class Jn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const e=new q,t=new tr,n=new qa,i=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new je}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new np,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Gf,e)}rotateY(e){return this.rotateOnAxis(Hf,e)}rotateZ(e){return this.rotateOnAxis(Wf,e)}translateOnAxis(e,t){return Vf.copy(e).applyQuaternion(this.quaternion),this.position.add(Vf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gf,e)}translateY(e){return this.translateOnAxis(Hf,e)}translateZ(e){return this.translateOnAxis(Wf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?io.copy(e):io.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(na,io,this.up):Bi.lookAt(io,na,this.up),this.quaternion.setFromRotationMatrix(Bi),i&&(Bi.extractRotation(i.matrixWorld),hs.setFromRotationMatrix(Bi),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xf),ds.child=e,this.dispatchEvent(ds),ds.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rg),Il.child=e,this.dispatchEvent(Il),Il.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xf),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,ng),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Jn.DEFAULT_UP=new q(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new q,zi=new q,Ul=new q,ki=new q,ps=new q,ms=new q,qf=new q,Nl=new q,Fl=new q,Ol=new q,Bl=new zt,zl=new zt,kl=new zt;class _i{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pi.subVectors(e,t),i.cross(pi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){pi.subVectors(i,t),zi.subVectors(n,t),Ul.subVectors(e,t);const a=pi.dot(pi),o=pi.dot(zi),l=pi.dot(Ul),c=zi.dot(zi),u=zi.dot(Ul),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Bl.setScalar(0),zl.setScalar(0),kl.setScalar(0),Bl.fromBufferAttribute(e,t),zl.fromBufferAttribute(e,n),kl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Bl,s.x),a.addScaledVector(zl,s.y),a.addScaledVector(kl,s.z),a}static isFrontFacing(e,t,n,i){return pi.subVectors(n,t),zi.subVectors(e,t),pi.cross(zi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),pi.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return _i.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ps.subVectors(i,n),ms.subVectors(s,n),Nl.subVectors(e,n);const l=ps.dot(Nl),c=ms.dot(Nl);if(l<=0&&c<=0)return t.copy(n);Fl.subVectors(e,i);const u=ps.dot(Fl),f=ms.dot(Fl);if(u>=0&&f<=u)return t.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ps,a);Ol.subVectors(e,s);const h=ps.dot(Ol),g=ms.dot(Ol);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ms,o);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return qf.subVectors(s,i),o=(f-u)/(f-u+(h-g)),t.copy(i).addScaledVector(qf,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Vl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class vt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ct.workingColorSpace){if(e=W_(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Vl(a,s,e+1/3),this.g=Vl(a,s,e),this.b=Vl(a,s,e-1/3)}return ct.colorSpaceToWorking(this,i),this}setStyle(e,t=ri){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ri){const n=ip[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return ct.workingToColorSpace(un.copy(this),e),Math.round(at(un.r*255,0,255))*65536+Math.round(at(un.g*255,0,255))*256+Math.round(at(un.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(un.copy(this),t);const n=un.r,i=un.g,s=un.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=ri){ct.workingToColorSpace(un.copy(this),e);const t=un.r,n=un.g,i=un.b;return e!==ri?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(ro);const n=yl(or.h,ro.h,t),i=yl(or.s,ro.s,t),s=yl(or.l,ro.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new vt;vt.NAMES=ip;let sg=0;class ll extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=Ds,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=Mc,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==yr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sc&&(n.blendSrc=this.blendSrc),this.blendDst!==Mc&&(n.blendDst=this.blendDst),this.blendEquation!==zr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Df&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rp extends ll{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=Bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new q,so=new Et;let ag=0;class Pi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ag++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lf,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)so.fromBufferAttribute(this,t),so.applyMatrix3(e),this.setXY(t,so.x,so.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),i=Pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),i=Pn(i,this.array),s=Pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lf&&(e.usage=this.usage),e}}class sp extends Pi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ap extends Pi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ki extends Pi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let og=0;const ni=new Xt,Gl=new Jn,_s=new q,Gn=new Ya,ia=new Ya,en=new q;class nr extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ep(e)?ap:sp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return Gl.lookAt(e),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ki(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ju);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ia.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(Gn.min,ia.min),Gn.expandByPoint(en),en.addVectors(Gn.max,ia.max),Gn.expandByPoint(en)):(Gn.expandByPoint(ia.min),Gn.expandByPoint(ia.max))}Gn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)en.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(en));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)en.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(e,c),en.add(_s)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new q,l[D]=new q;const c=new q,u=new q,f=new q,d=new Et,h=new Et,g=new Et,_=new q,m=new q;function p(D,x,M){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,x),f.fromBufferAttribute(n,M),d.fromBufferAttribute(s,D),h.fromBufferAttribute(s,x),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const P=1/(h.x*g.y-g.x*h.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(P),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(P),o[D].add(_),o[x].add(_),o[M].add(_),l[D].add(m),l[x].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,x=y.length;D<x;++D){const M=y[D],P=M.start,U=M.count;for(let B=P,H=P+U;B<H;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new q,S=new q,T=new q,w=new q;function A(D){T.fromBufferAttribute(i,D),w.copy(T);const x=o[D];b.copy(x),b.sub(T.multiplyScalar(T.dot(x))).normalize(),S.crossVectors(w,x);const P=S.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,P)}for(let D=0,x=y.length;D<x;++D){const M=y[D],P=M.start,U=M.count;for(let B=P,H=P+U;B<H;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const i=new q,s=new q,a=new q,o=new q,l=new q,c=new q,u=new q,f=new q;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Pi(d,u,f)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nr,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yf=new Xt,Dr=new J_,ao=new Ju,$f=new q,oo=new q,lo=new q,co=new q,Hl=new q,uo=new q,Kf=new q,fo=new q;class Ui extends Jn{constructor(e=new nr,t=new rp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){uo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Hl.fromBufferAttribute(f,e),a?uo.addScaledVector(Hl,u):uo.addScaledVector(Hl.sub(t),u))}t.add(uo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(ao.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(ao,$f)===null||Dr.origin.distanceToSquared($f)>(e.far-e.near)**2))&&(Yf.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Yf),!(n.boundingBox!==null&&Dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,h.start),b=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let S=y,T=b;S<T;S+=3){const w=o.getX(S),A=o.getX(S+1),D=o.getX(S+2);i=ho(this,p,e,n,c,u,f,w,A,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);i=ho(this,a,e,n,c,u,f,y,b,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,h.start),b=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=y,T=b;S<T;S+=3){const w=S,A=S+1,D=S+2;i=ho(this,p,e,n,c,u,f,w,A,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const y=m,b=m+1,S=m+2;i=ho(this,a,e,n,c,u,f,y,b,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function lg(r,e,t,n,i,s,a,o){let l;if(e.side===Fn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===yr,o),l===null)return null;fo.copy(o),fo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(fo);return c<t.near||c>t.far?null:{distance:c,point:fo.clone(),object:r}}function ho(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,oo),r.getVertexPosition(l,lo),r.getVertexPosition(c,co);const u=lg(r,e,t,n,oo,lo,co,Kf);if(u){const f=new q;_i.getBarycoord(Kf,oo,lo,co,f),i&&(u.uv=_i.getInterpolatedAttribute(i,o,l,c,f,new Et)),s&&(u.uv1=_i.getInterpolatedAttribute(s,o,l,c,f,new Et)),a&&(u.normal=_i.getInterpolatedAttribute(a,o,l,c,f,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new q,materialIndex:0};_i.getNormal(oo,lo,co,d.normal),u.face=d,u.barycoord=f}return u}class $a extends nr{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ki(c,3)),this.setAttribute("normal",new Ki(u,3)),this.setAttribute("uv",new Ki(f,2));function g(_,m,p,y,b,S,T,w,A,D,x){const M=S/A,P=T/D,U=S/2,B=T/2,H=w/2,V=A+1,k=D+1;let F=0,$=0;const ee=new q;for(let R=0;R<k;R++){const ne=R*P-B;for(let Re=0;Re<V;Re++){const Be=Re*M-U;ee[_]=Be*y,ee[m]=ne*b,ee[p]=H,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=w>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(Re/A),f.push(1-R/D),F+=1}}for(let R=0;R<D;R++)for(let ne=0;ne<A;ne++){const Re=d+ne+V*R,Be=d+ne+V*(R+1),We=d+(ne+1)+V*(R+1),$e=d+(ne+1)+V*R;l.push(Re,Be,$e),l.push(Be,We,$e),$+=6}o.addGroup(h,$,x),h+=$,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mn(r){const e={};for(let t=0;t<r.length;t++){const n=qs(r[t]);for(const i in n)e[i]=n[i]}return e}function cg(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function op(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const ug={clone:qs,merge:Mn};var fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends ll{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fg,this.fragmentShader=hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=cg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class lp extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new q,Zf=new Et,jf=new Et;class si extends lp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(El*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fu*2*Math.atan(Math.tan(El*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,Zf,jf),t.subVectors(jf,Zf)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(El*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gs=-90,xs=1;class dg extends Jn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new si(gs,xs,e,t);i.layers=this.layers,this.add(i);const s=new si(gs,xs,e,t);s.layers=this.layers,this.add(s);const a=new si(gs,xs,e,t);a.layers=this.layers,this.add(a);const o=new si(gs,xs,e,t);o.layers=this.layers,this.add(o);const l=new si(gs,xs,e,t);l.layers=this.layers,this.add(l);const c=new si(gs,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cp extends gn{constructor(e=[],t=Jr,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class up extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new cp(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $a(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:Yi});s.uniforms.tEquirect.value=t;const a=new Ui(i,s),o=t.minFilter;return t.minFilter===Gr&&(t.minFilter=mn),new dg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class po extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pg={type:"move"};class Wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new po;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class mg extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _g extends gn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=sn,u=sn,f,d){super(null,a,o,l,c,u,i,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xl=new q,gg=new q,xg=new je;class Fr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Xl.subVectors(n,t).cross(gg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xg.getNormalMatrix(e),i=this.coplanarPoint(Xl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new Ju,vg=new Et(.5,.5),mo=new q;class fp{constructor(e=new Fr,t=new Fr,n=new Fr,i=new Fr,s=new Fr,a=new Fr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ai,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],_=s[9],m=s[10],p=s[11],y=s[12],b=s[13],S=s[14],T=s[15];if(i[0].setComponents(c-a,h-u,p-g,T-y).normalize(),i[1].setComponents(c+a,h+u,p+g,T+y).normalize(),i[2].setComponents(c+o,h+f,p+_,T+b).normalize(),i[3].setComponents(c-o,h-f,p-_,T-b).normalize(),n)i[4].setComponents(l,d,m,S).normalize(),i[5].setComponents(c-l,h-d,p-m,T-S).normalize();else if(i[4].setComponents(c-l,h-d,p-m,T-S).normalize(),t===Ai)i[5].setComponents(c+l,h+d,p+m,T+S).normalize();else if(t===Qo)i[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){Lr.center.set(0,0,0);const t=vg.distanceTo(e.center);return Lr.radius=.7071067811865476+t,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(mo.x=i.normal.x>0?e.max.x:e.min.x,mo.y=i.normal.y>0?e.max.y:e.min.y,mo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Va extends gn{constructor(e,t,n=Ii,i,s,a,o=sn,l=sn,c,u=er,f=1){if(u!==er&&u!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ju(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Sg extends Va{constructor(e,t=Ii,n=Jr,i,s,a=sn,o=sn,l,c=er){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hp extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ys extends nr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,d=t/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*d-a;for(let b=0;b<c;b++){const S=b*f-s;g.push(S,-y,0),_.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const b=y+c*p,S=y+c*(p+1),T=y+1+c*(p+1),w=y+1+c*p;h.push(b,S,w),h.push(S,T,w)}this.setIndex(h),this.setAttribute("position",new Ki(g,3)),this.setAttribute("normal",new Ki(_,3)),this.setAttribute("uv",new Ki(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.widthSegments,e.heightSegments)}}class Mg extends xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Eg extends ll{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=I_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yg extends ll{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ql={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Tg{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const bg=new Tg;class Qu{constructor(e){this.manager=e!==void 0?e:bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Qu.DEFAULT_MATERIAL_NAME="__DEFAULT";const vs=new WeakMap;class Ag extends Qu{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ql.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=vs.get(a);f===void 0&&(f=[],vs.set(a,f)),f.push({onLoad:t,onError:i})}return a}const o=za("img");function l(){u(),t&&t(this);const f=vs.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}vs.delete(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),ql.remove(`image:${e}`);const d=vs.get(this)||[];for(let h=0;h<d.length;h++){const g=d[h];g.onError&&g.onError(f)}vs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ql.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class wg extends Qu{constructor(e){super(e)}load(e,t,n,i){const s=new gn,a=new Ag(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class dp extends lp{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Cg extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Rg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Jf(r,e,t,n){const i=Pg(n);switch(t){case jd:return r*e;case Qd:return r*e/i.components*i.byteLength;case qu:return r*e/i.components*i.byteLength;case Ws:return r*e*2/i.components*i.byteLength;case Yu:return r*e*2/i.components*i.byteLength;case Jd:return r*e*3/i.components*i.byteLength;case gi:return r*e*4/i.components*i.byteLength;case $u:return r*e*4/i.components*i.byteLength;case Uo:case No:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Fo:case Oo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uc:case Fc:return Math.max(r,16)*Math.max(e,8)/4;case Ic:case Nc:return Math.max(r,8)*Math.max(e,8)/2;case Oc:case Bc:case kc:case Vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case zc:case Gc:case Hc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case qc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case $c:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case jc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case eu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case tu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case nu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case iu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ru:case su:case au:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ou:case lu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case cu:case uu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pg(r){switch(r){case li:case Yd:return{byteLength:1,components:1};case Oa:case $d:case Qi:return{byteLength:2,components:1};case Wu:case Xu:return{byteLength:2,components:4};case Ii:case Hu:case bi:return{byteLength:4,components:1};case Kd:case Zd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gu}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gu);function pp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Dg(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Lg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ig=`#ifdef USE_ALPHAHASH
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
#endif`,Ug=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ng=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bg=`#ifdef USE_AOMAP
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
#endif`,zg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kg=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xg=`#ifdef USE_IRIDESCENCE
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
#endif`,qg=`#ifdef USE_BUMPMAP
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
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,t0=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,n0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,i0=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l0="gl_FragColor = linearToOutputTexel( gl_FragColor );",c0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v0=`#ifdef USE_GRADIENTMAP
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
}`,S0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y0=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,T0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,b0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,P0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,D0=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,I0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V0=`#if defined( USE_POINTS_UV )
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
#endif`,G0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`#ifdef USE_MORPHTARGETS
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
#endif`,$0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ex=`#ifdef USE_NORMALMAP
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
#endif`,tx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ax=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_x=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xx=`#ifdef USE_SKINNING
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
#endif`,vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sx=`#ifdef USE_SKINNING
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
#endif`,Mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bx=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ax=`#ifdef USE_TRANSMISSION
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
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lx=`uniform sampler2D t2D;
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`#include <common>
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
}`,Bx=`#if DEPTH_PACKING == 3200
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
}`,zx=`#define DISTANCE
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
}`,kx=`#define DISTANCE
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
void main () {
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`uniform float scale;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,qx=`uniform vec3 diffuse;
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
}`,Yx=`#define LAMBERT
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
}`,$x=`#define LAMBERT
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
}`,Kx=`#define MATCAP
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
}`,Zx=`#define MATCAP
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
}`,jx=`#define NORMAL
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
}`,Jx=`#define NORMAL
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
}`,Qx=`#define PHONG
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
}`,ev=`#define PHONG
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
}`,tv=`#define STANDARD
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
}`,nv=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,iv=`#define TOON
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
}`,rv=`#define TOON
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
}`,sv=`uniform float size;
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
}`,av=`uniform vec3 diffuse;
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
}`,ov=`#include <common>
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
}`,lv=`uniform vec3 color;
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
}`,cv=`uniform float rotation;
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
}`,uv=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Lg,alphahash_pars_fragment:Ig,alphamap_fragment:Ug,alphamap_pars_fragment:Ng,alphatest_fragment:Fg,alphatest_pars_fragment:Og,aomap_fragment:Bg,aomap_pars_fragment:zg,batching_pars_vertex:kg,batching_vertex:Vg,begin_vertex:Gg,beginnormal_vertex:Hg,bsdfs:Wg,iridescence_fragment:Xg,bumpmap_pars_fragment:qg,clipping_planes_fragment:Yg,clipping_planes_pars_fragment:$g,clipping_planes_pars_vertex:Kg,clipping_planes_vertex:Zg,color_fragment:jg,color_pars_fragment:Jg,color_pars_vertex:Qg,color_vertex:e0,common:t0,cube_uv_reflection_fragment:n0,defaultnormal_vertex:i0,displacementmap_pars_vertex:r0,displacementmap_vertex:s0,emissivemap_fragment:a0,emissivemap_pars_fragment:o0,colorspace_fragment:l0,colorspace_pars_fragment:c0,envmap_fragment:u0,envmap_common_pars_fragment:f0,envmap_pars_fragment:h0,envmap_pars_vertex:d0,envmap_physical_pars_fragment:T0,envmap_vertex:p0,fog_vertex:m0,fog_pars_vertex:_0,fog_fragment:g0,fog_pars_fragment:x0,gradientmap_pars_fragment:v0,lightmap_pars_fragment:S0,lights_lambert_fragment:M0,lights_lambert_pars_fragment:E0,lights_pars_begin:y0,lights_toon_fragment:b0,lights_toon_pars_fragment:A0,lights_phong_fragment:w0,lights_phong_pars_fragment:C0,lights_physical_fragment:R0,lights_physical_pars_fragment:P0,lights_fragment_begin:D0,lights_fragment_maps:L0,lights_fragment_end:I0,logdepthbuf_fragment:U0,logdepthbuf_pars_fragment:N0,logdepthbuf_pars_vertex:F0,logdepthbuf_vertex:O0,map_fragment:B0,map_pars_fragment:z0,map_particle_fragment:k0,map_particle_pars_fragment:V0,metalnessmap_fragment:G0,metalnessmap_pars_fragment:H0,morphinstance_vertex:W0,morphcolor_vertex:X0,morphnormal_vertex:q0,morphtarget_pars_vertex:Y0,morphtarget_vertex:$0,normal_fragment_begin:K0,normal_fragment_maps:Z0,normal_pars_fragment:j0,normal_pars_vertex:J0,normal_vertex:Q0,normalmap_pars_fragment:ex,clearcoat_normal_fragment_begin:tx,clearcoat_normal_fragment_maps:nx,clearcoat_pars_fragment:ix,iridescence_pars_fragment:rx,opaque_fragment:sx,packing:ax,premultiplied_alpha_fragment:ox,project_vertex:lx,dithering_fragment:cx,dithering_pars_fragment:ux,roughnessmap_fragment:fx,roughnessmap_pars_fragment:hx,shadowmap_pars_fragment:dx,shadowmap_pars_vertex:px,shadowmap_vertex:mx,shadowmask_pars_fragment:_x,skinbase_vertex:gx,skinning_pars_vertex:xx,skinning_vertex:vx,skinnormal_vertex:Sx,specularmap_fragment:Mx,specularmap_pars_fragment:Ex,tonemapping_fragment:yx,tonemapping_pars_fragment:Tx,transmission_fragment:bx,transmission_pars_fragment:Ax,uv_pars_fragment:wx,uv_pars_vertex:Cx,uv_vertex:Rx,worldpos_vertex:Px,background_vert:Dx,background_frag:Lx,backgroundCube_vert:Ix,backgroundCube_frag:Ux,cube_vert:Nx,cube_frag:Fx,depth_vert:Ox,depth_frag:Bx,distance_vert:zx,distance_frag:kx,equirect_vert:Vx,equirect_frag:Gx,linedashed_vert:Hx,linedashed_frag:Wx,meshbasic_vert:Xx,meshbasic_frag:qx,meshlambert_vert:Yx,meshlambert_frag:$x,meshmatcap_vert:Kx,meshmatcap_frag:Zx,meshnormal_vert:jx,meshnormal_frag:Jx,meshphong_vert:Qx,meshphong_frag:ev,meshphysical_vert:tv,meshphysical_frag:nv,meshtoon_vert:iv,meshtoon_frag:rv,points_vert:sv,points_frag:av,shadow_vert:ov,shadow_frag:lv,sprite_vert:cv,sprite_frag:uv},me={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Ei={basic:{uniforms:Mn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Mn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new vt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Mn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Mn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Mn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new vt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Mn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Mn([me.points,me.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Mn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Mn([me.common,me.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Mn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Mn([me.sprite,me.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Mn([me.common,me.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Mn([me.lights,me.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Ei.physical={uniforms:Mn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const _o={r:0,b:0,g:0},Ir=new tr,fv=new Xt;function hv(r,e,t,n,i,s,a){const o=new vt(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function _(b){let S=!1;const T=g(b);T===null?p(o,l):T&&T.isColor&&(p(T,1),S=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(b,S){const T=g(S);T&&(T.isCubeTexture||T.mapping===ol)?(u===void 0&&(u=new Ui(new $a(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:qs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ir.copy(S.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fv.makeRotationFromEuler(Ir)),u.material.toneMapped=ct.getTransfer(T.colorSpace)!==xt,(f!==T||d!==T.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,f=T,d=T.version,h=r.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Ui(new Ys(2,2),new xi({name:"BackgroundMaterial",uniforms:qs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ct.getTransfer(T.colorSpace)!==xt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||d!==T.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,f=T,d=T.version,h=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(_o,op(r)),n.buffers.color.setClear(_o.r,_o.g,_o.b,S,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:m,dispose:y}}function dv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(M,P,U,B,H){let V=!1;const k=f(B,U,P);s!==k&&(s=k,c(s.object)),V=h(M,B,U,H),V&&g(M,B,U,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,S(M,P,U,B),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function u(M){return r.deleteVertexArray(M)}function f(M,P,U){const B=U.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let V=H[P.id];V===void 0&&(V={},H[P.id]=V);let k=V[B];return k===void 0&&(k=d(l()),V[B]=k),k}function d(M){const P=[],U=[],B=[];for(let H=0;H<t;H++)P[H]=0,U[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:B,object:M,attributes:{},index:null}}function h(M,P,U,B){const H=s.attributes,V=P.attributes;let k=0;const F=U.getAttributes();for(const $ in F)if(F[$].location>=0){const R=H[$];let ne=V[$];if(ne===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),R===void 0||R.attribute!==ne||ne&&R.data!==ne.data)return!0;k++}return s.attributesNum!==k||s.index!==B}function g(M,P,U,B){const H={},V=P.attributes;let k=0;const F=U.getAttributes();for(const $ in F)if(F[$].location>=0){let R=V[$];R===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(R=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(R=M.instanceColor));const ne={};ne.attribute=R,R&&R.data&&(ne.data=R.data),H[$]=ne,k++}s.attributes=H,s.attributesNum=k,s.index=B}function _(){const M=s.newAttributes;for(let P=0,U=M.length;P<U;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const U=s.newAttributes,B=s.enabledAttributes,H=s.attributeDivisors;U[M]=1,B[M]===0&&(r.enableVertexAttribArray(M),B[M]=1),H[M]!==P&&(r.vertexAttribDivisor(M,P),H[M]=P)}function y(){const M=s.newAttributes,P=s.enabledAttributes;for(let U=0,B=P.length;U<B;U++)P[U]!==M[U]&&(r.disableVertexAttribArray(U),P[U]=0)}function b(M,P,U,B,H,V,k){k===!0?r.vertexAttribIPointer(M,P,U,H,V):r.vertexAttribPointer(M,P,U,B,H,V)}function S(M,P,U,B){_();const H=B.attributes,V=U.getAttributes(),k=P.defaultAttributeValues;for(const F in V){const $=V[F];if($.location>=0){let ee=H[F];if(ee===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){const R=ee.normalized,ne=ee.itemSize,Re=e.get(ee);if(Re===void 0)continue;const Be=Re.buffer,We=Re.type,$e=Re.bytesPerElement,K=We===r.INT||We===r.UNSIGNED_INT||ee.gpuType===Hu;if(ee.isInterleavedBufferAttribute){const J=ee.data,he=J.stride,Pe=ee.offset;if(J.isInstancedInterleavedBuffer){for(let Se=0;Se<$.locationSize;Se++)p($.location+Se,J.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Se=0;Se<$.locationSize;Se++)m($.location+Se);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let Se=0;Se<$.locationSize;Se++)b($.location+Se,ne/$.locationSize,We,R,he*$e,(Pe+ne/$.locationSize*Se)*$e,K)}else{if(ee.isInstancedBufferAttribute){for(let J=0;J<$.locationSize;J++)p($.location+J,ee.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let J=0;J<$.locationSize;J++)m($.location+J);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let J=0;J<$.locationSize;J++)b($.location+J,ne/$.locationSize,We,R,ne*$e,ne/$.locationSize*J*$e,K)}}else if(k!==void 0){const R=k[F];if(R!==void 0)switch(R.length){case 2:r.vertexAttrib2fv($.location,R);break;case 3:r.vertexAttrib3fv($.location,R);break;case 4:r.vertexAttrib4fv($.location,R);break;default:r.vertexAttrib1fv($.location,R)}}}}y()}function T(){D();for(const M in n){const P=n[M];for(const U in P){const B=P[U];for(const H in B)u(B[H].object),delete B[H];delete P[U]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const U in P){const B=P[U];for(const H in B)u(B[H].object),delete B[H];delete P[U]}delete n[M.id]}function A(M){for(const P in n){const U=n[P];if(U[M.id]===void 0)continue;const B=U[M.id];for(const H in B)u(B[H].object),delete B[H];delete U[M.id]}}function D(){x(),a=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:x,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function pv(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,n,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function mv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==gi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===Qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==li&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==bi&&!D)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ye("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:S,maxSamples:T,samples:w}}function _v(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Fr,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||i;return i=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,b=y*4;let S=p.clippingState||null;l.value=S,S=u(g,d,b,h);for(let T=0;T!==b;++T)S[T]=t[T];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=h;b!==_;++b,S+=4)a.copy(f[b]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function gv(r){let e=new WeakMap;function t(a,o){return o===Rc?a.mapping=Jr:o===Pc&&(a.mapping=Hs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rc||o===Pc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new up(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const pr=4,Qf=[.125,.215,.35,.446,.526,.582],kr=20,xv=256,ra=new dp,eh=new vt;let Yl=null,$l=0,Kl=0,Zl=!1;const vv=new q;class th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=vv}=s;Yl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yl,$l,Kl),this._renderer.xr.enabled=Zl,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jr||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Qi,format:gi,colorSpace:Xs,depthBuffer:!1},i=nh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Sv(s)),this._blurMaterial=Ev(s,e,t),this._ggxMaterial=Mv(s,e,t)}return i}_compileMaterial(e){const t=new Ui(new nr,e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,n,i,s){const l=new si(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(eh),f.toneMapping=Ci,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ui(new $a,new rp({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(eh),p=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const T=this._cubeSize;Ss(i,S*T,b>2?T:0,T,T),f.setRenderTarget(i),p&&f.render(_,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Jr||e.mapping===Hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ss(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ra)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-pr?n-g+pr:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-t,Ss(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(o,ra),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Ss(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(o,ra)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&dt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[i];f.material=c;const d=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*kr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):kr;m>kr&&Ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kr}`);const p=[];let y=0;for(let A=0;A<kr;++A){const D=A/_,x=Math.exp(-D*D/2);p.push(x),A===0?y+=x:A<m&&(y+=2*x)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const S=this._sizeLods[i],T=3*S*(i>b-pr?i-b+pr:0),w=4*(this._cubeSize-S);Ss(t,T,w,3*S,2*S),l.setRenderTarget(t),l.render(f,ra)}}function Sv(r){const e=[],t=[],n=[];let i=r;const s=r-pr+1+Qf.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-pr?l=Qf[a-r+pr-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*h),b=new Float32Array(m*g*h),S=new Float32Array(p*g*h);for(let w=0;w<h;w++){const A=w%3*2/3-1,D=w>2?0:-1,x=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];y.set(x,_*g*w),b.set(d,m*g*w);const M=[w,w,w,w,w,w];S.set(M,p*g*w)}const T=new nr;T.setAttribute("position",new Pi(y,_)),T.setAttribute("uv",new Pi(b,m)),T.setAttribute("faceIndex",new Pi(S,p)),n.push(new Ui(T,null)),i>pr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function nh(r,e,t){const n=new Ri(r,e,t);return n.texture.mapping=ol,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Mv(r,e,t){return new xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Ev(r,e,t){const n=new Float32Array(kr),i=new q(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function ih(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function rh(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function cl(){return`

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
	`}function yv(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Rc||l===Pc,u=l===Jr||l===Hs;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new th(r)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new th(r)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Tv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ka("WebGLRenderer: "+n+" extension not supported."),i}}}function bv(r,e,t,n){const i={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],r.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const y=h.array;_=h.version;for(let b=0,S=y.length;b<S;b+=3){const T=y[b+0],w=y[b+1],A=y[b+2];d.push(T,w,w,A,A,T)}}else if(g!==void 0){const y=g.array;_=g.version;for(let b=0,S=y.length/3-1;b<S;b+=3){const T=b+0,w=b+1,A=b+2;d.push(T,w,w,A,A,T)}}else return;const m=new(ep(d)?ap:sp)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Av(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,g){g!==0&&(r.drawElementsInstanced(n,h,s,d*a,g),t.update(h,n,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=h[y]*_[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function wv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:dt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Cv(r,e,t){const n=new WeakMap,i=new zt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let M=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var h=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let T=o.attributes.position.count*S,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*w*4*f),D=new tp(A,T,w,f);D.type=bi,D.needsUpdate=!0;const x=S*4;for(let P=0;P<f;P++){const U=p[P],B=y[P],H=b[P],V=T*w*4*P;for(let k=0;k<U.count;k++){const F=k*x;g===!0&&(i.fromBufferAttribute(U,k),A[V+F+0]=i.x,A[V+F+1]=i.y,A[V+F+2]=i.z,A[V+F+3]=0),_===!0&&(i.fromBufferAttribute(B,k),A[V+F+4]=i.x,A[V+F+5]=i.y,A[V+F+6]=i.z,A[V+F+7]=0),m===!0&&(i.fromBufferAttribute(H,k),A[V+F+8]=i.x,A[V+F+9]=i.y,A[V+F+10]=i.z,A[V+F+11]=H.itemSize===4?i.w:1)}}d={count:f,texture:D,size:new Et(T,w)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Rv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Pv={[zd]:"LINEAR_TONE_MAPPING",[kd]:"REINHARD_TONE_MAPPING",[Vd]:"CINEON_TONE_MAPPING",[Gd]:"ACES_FILMIC_TONE_MAPPING",[Wd]:"AGX_TONE_MAPPING",[Xd]:"NEUTRAL_TONE_MAPPING",[Hd]:"CUSTOM_TONE_MAPPING"};function Dv(r,e,t,n,i){const s=new Ri(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Ri(e,t,{type:Qi,depthBuffer:!1,stencilBuffer:!1}),o=new nr;o.setAttribute("position",new Ki([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ki([0,2,0,0,2,0],2));const l=new Mg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ui(o,l),u=new dp(-1,1,1,-1,0,1);let f=null,d=null,h=!1,g,_=null,m=[],p=!1;this.setSize=function(y,b){s.setSize(y,b),a.setSize(y,b);for(let S=0;S<m.length;S++){const T=m[S];T.setSize&&T.setSize(y,b)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;const b=s.width,S=s.height;for(let T=0;T<m.length;T++){const w=m[T];w.setSize&&w.setSize(b,S)}},this.begin=function(y,b){if(h||y.toneMapping===Ci&&m.length===0)return!1;if(_=b,b!==null){const S=b.width,T=b.height;(s.width!==S||s.height!==T)&&this.setSize(S,T)}return p===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=Ci,!0},this.hasRenderPass=function(){return p},this.end=function(y,b){y.toneMapping=g,h=!0;let S=s,T=a;for(let w=0;w<m.length;w++){const A=m[w];if(A.enabled!==!1&&(A.render(y,T,S,b),A.needsSwap!==!1)){const D=S;S=T,T=D}}if(f!==y.outputColorSpace||d!==y.toneMapping){f=y.outputColorSpace,d=y.toneMapping,l.defines={},ct.getTransfer(f)===xt&&(l.defines.SRGB_TRANSFER="");const w=Pv[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(_),y.render(c,u),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const mp=new gn,hu=new Va(1,1),_p=new tp,gp=new Z_,xp=new cp,sh=[],ah=[],oh=new Float32Array(16),lh=new Float32Array(9),ch=new Float32Array(4);function Zs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=sh[i];if(s===void 0&&(s=new Float32Array(i),sh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Zt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function jt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ul(r,e){let t=ah[e];t===void 0&&(t=new Int32Array(e),ah[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Lv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Iv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2fv(this.addr,e),jt(t,e)}}function Uv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;r.uniform3fv(this.addr,e),jt(t,e)}}function Nv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4fv(this.addr,e),jt(t,e)}}function Fv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Zt(t,n))return;ch.set(n),r.uniformMatrix2fv(this.addr,!1,ch),jt(t,n)}}function Ov(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Zt(t,n))return;lh.set(n),r.uniformMatrix3fv(this.addr,!1,lh),jt(t,n)}}function Bv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Zt(t,n))return;oh.set(n),r.uniformMatrix4fv(this.addr,!1,oh),jt(t,n)}}function zv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function kv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2iv(this.addr,e),jt(t,e)}}function Vv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3iv(this.addr,e),jt(t,e)}}function Gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4iv(this.addr,e),jt(t,e)}}function Hv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Wv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2uiv(this.addr,e),jt(t,e)}}function Xv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3uiv(this.addr,e),jt(t,e)}}function qv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4uiv(this.addr,e),jt(t,e)}}function Yv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(hu.compareFunction=t.isReversedDepthBuffer()?Zu:Ku,s=hu):s=mp,t.setTexture2D(e||s,i)}function $v(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||gp,i)}function Kv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||xp,i)}function Zv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_p,i)}function jv(r){switch(r){case 5126:return Lv;case 35664:return Iv;case 35665:return Uv;case 35666:return Nv;case 35674:return Fv;case 35675:return Ov;case 35676:return Bv;case 5124:case 35670:return zv;case 35667:case 35671:return kv;case 35668:case 35672:return Vv;case 35669:case 35673:return Gv;case 5125:return Hv;case 36294:return Wv;case 36295:return Xv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Zv}}function Jv(r,e){r.uniform1fv(this.addr,e)}function Qv(r,e){const t=Zs(e,this.size,2);r.uniform2fv(this.addr,t)}function eS(r,e){const t=Zs(e,this.size,3);r.uniform3fv(this.addr,t)}function tS(r,e){const t=Zs(e,this.size,4);r.uniform4fv(this.addr,t)}function nS(r,e){const t=Zs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function iS(r,e){const t=Zs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function rS(r,e){const t=Zs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function sS(r,e){r.uniform1iv(this.addr,e)}function aS(r,e){r.uniform2iv(this.addr,e)}function oS(r,e){r.uniform3iv(this.addr,e)}function lS(r,e){r.uniform4iv(this.addr,e)}function cS(r,e){r.uniform1uiv(this.addr,e)}function uS(r,e){r.uniform2uiv(this.addr,e)}function fS(r,e){r.uniform3uiv(this.addr,e)}function hS(r,e){r.uniform4uiv(this.addr,e)}function dS(r,e,t){const n=this.cache,i=e.length,s=ul(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=hu:a=mp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function pS(r,e,t){const n=this.cache,i=e.length,s=ul(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||gp,s[a])}function mS(r,e,t){const n=this.cache,i=e.length,s=ul(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||xp,s[a])}function _S(r,e,t){const n=this.cache,i=e.length,s=ul(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||_p,s[a])}function gS(r){switch(r){case 5126:return Jv;case 35664:return Qv;case 35665:return eS;case 35666:return tS;case 35674:return nS;case 35675:return iS;case 35676:return rS;case 5124:case 35670:return sS;case 35667:case 35671:return aS;case 35668:case 35672:return oS;case 35669:case 35673:return lS;case 5125:return cS;case 36294:return uS;case 36295:return fS;case 36296:return hS;case 35678:case 36198:case 36298:case 36306:case 35682:return dS;case 35679:case 36299:case 36307:return pS;case 35680:case 36300:case 36308:case 36293:return mS;case 36289:case 36303:case 36311:case 36292:return _S}}class xS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jv(t.type)}}class vS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gS(t.type)}}class SS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const jl=/(\w+)(\])?(\[|\.)?/g;function uh(r,e){r.seq.push(e),r.map[e.id]=e}function MS(r,e,t){const n=r.name,i=n.length;for(jl.lastIndex=0;;){const s=jl.exec(n),a=jl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){uh(t,c===void 0?new xS(o,r,e):new vS(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new SS(o),uh(t,f)),t=f}}}class Bo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);MS(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function fh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const ES=37297;let yS=0;function TS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const hh=new je;function bS(r){ct._getMatrix(hh,ct.workingColorSpace,r);const e=`mat3( ${hh.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(r)){case Jo:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function dh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+TS(r.getShaderSource(e),o)}else return s}function AS(r,e){const t=bS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const wS={[zd]:"Linear",[kd]:"Reinhard",[Vd]:"Cineon",[Gd]:"ACESFilmic",[Wd]:"AgX",[Xd]:"Neutral",[Hd]:"Custom"};function CS(r,e){const t=wS[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const go=new q;function RS(){ct.getLuminanceCoefficients(go);const r=go.x.toFixed(4),e=go.y.toFixed(4),t=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function DS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function LS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function fa(r){return r!==""}function ph(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IS=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(r){return r.replace(IS,NS)}const US=new Map;function NS(r,e){let t=Je[e];if(t===void 0){const n=US.get(e);if(n!==void 0)t=Je[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return du(t)}const FS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(r){return r.replace(FS,OS)}function OS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const BS={[Io]:"SHADOWMAP_TYPE_PCF",[ua]:"SHADOWMAP_TYPE_VSM"};function zS(r){return BS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kS={[Jr]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE",[ol]:"ENVMAP_TYPE_CUBE_UV"};function VS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":kS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const GS={[Hs]:"ENVMAP_MODE_REFRACTION"};function HS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":GS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const WS={[Bd]:"ENVMAP_BLENDING_MULTIPLY",[P_]:"ENVMAP_BLENDING_MIX",[D_]:"ENVMAP_BLENDING_ADD"};function XS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":WS[r.combine]||"ENVMAP_BLENDING_NONE"}function qS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function YS(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=zS(t),c=VS(t),u=HS(t),f=XS(t),d=qS(t),h=PS(t),g=DS(s),_=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fa).join(`
`),p.length>0&&(p+=`
`)):(m=[gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),p=[gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?Je.tonemapping_pars_fragment:"",t.toneMapping!==Ci?CS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,AS("linearToOutputTexel",t.outputColorSpace),RS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),a=du(a),a=ph(a,t),a=mh(a,t),o=du(o),o=ph(o,t),o=mh(o,t),a=_h(a),o=_h(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===If?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===If?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=y+m+a,S=y+p+o,T=fh(i,i.VERTEX_SHADER,b),w=fh(i,i.FRAGMENT_SHADER,S);i.attachShader(_,T),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(P){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(_)||"",B=i.getShaderInfoLog(T)||"",H=i.getShaderInfoLog(w)||"",V=U.trim(),k=B.trim(),F=H.trim();let $=!0,ee=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,T,w);else{const R=dh(i,T,"vertex"),ne=dh(i,w,"fragment");dt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+R+`
`+ne)}else V!==""?Ye("WebGLProgram: Program Info Log:",V):(k===""||F==="")&&(ee=!1);ee&&(P.diagnostics={runnable:$,programLog:V,vertexShader:{log:k,prefix:m},fragmentShader:{log:F,prefix:p}})}i.deleteShader(T),i.deleteShader(w),D=new Bo(i,_),x=LS(i,_)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,ES)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let $S=0;class KS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ZS(e),t.set(e,n)),n}}class ZS{constructor(e){this.id=$S++,this.code=e,this.usedTimes=0}}function jS(r,e,t,n,i,s,a){const o=new np,l=new KS,c=new Set,u=[],f=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,M,P,U,B){const H=U.fog,V=B.geometry,k=x.isMeshStandardMaterial?U.environment:null,F=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),$=F&&F.mapping===ol?F.image.height:null,ee=g[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Ye("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const R=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ne=R!==void 0?R.length:0;let Re=0;V.morphAttributes.position!==void 0&&(Re=1),V.morphAttributes.normal!==void 0&&(Re=2),V.morphAttributes.color!==void 0&&(Re=3);let Be,We,$e,K;if(ee){const _e=Ei[ee];Be=_e.vertexShader,We=_e.fragmentShader}else Be=x.vertexShader,We=x.fragmentShader,l.update(x),$e=l.getVertexShaderID(x),K=l.getFragmentShaderID(x);const J=r.getRenderTarget(),he=r.state.buffers.depth.getReversed(),Pe=B.isInstancedMesh===!0,Se=B.isBatchedMesh===!0,Ve=!!x.map,lt=!!x.matcap,Te=!!F,ze=!!x.aoMap,Ke=!!x.lightMap,Ne=!!x.bumpMap,G=!!x.normalMap,I=!!x.displacementMap,pt=!!x.emissiveMap,Qe=!!x.metalnessMap,ke=!!x.roughnessMap,Me=x.anisotropy>0,C=x.clearcoat>0,v=x.dispersion>0,N=x.iridescence>0,Z=x.sheen>0,j=x.transmission>0,Y=Me&&!!x.anisotropyMap,ve=C&&!!x.clearcoatMap,se=C&&!!x.clearcoatNormalMap,be=C&&!!x.clearcoatRoughnessMap,ye=N&&!!x.iridescenceMap,re=N&&!!x.iridescenceThicknessMap,ae=Z&&!!x.sheenColorMap,Ee=Z&&!!x.sheenRoughnessMap,Ae=!!x.specularMap,oe=!!x.specularColorMap,He=!!x.specularIntensityMap,L=j&&!!x.transmissionMap,ue=j&&!!x.thicknessMap,ie=!!x.gradientMap,fe=!!x.alphaMap,te=x.alphaTest>0,Q=!!x.alphaHash,ce=!!x.extensions;let Ue=Ci;x.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ue=r.toneMapping);const ut={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:Be,fragmentShader:We,defines:x.defines,customVertexShaderID:$e,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Se,batchingColor:Se&&B._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&B.instanceColor!==null,instancingMorph:Pe&&B.morphTexture!==null,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Xs,alphaToCoverage:!!x.alphaToCoverage,map:Ve,matcap:lt,envMap:Te,envMapMode:Te&&F.mapping,envMapCubeUVHeight:$,aoMap:ze,lightMap:Ke,bumpMap:Ne,normalMap:G,displacementMap:I,emissiveMap:pt,normalMapObjectSpace:G&&x.normalMapType===N_,normalMapTangentSpace:G&&x.normalMapType===U_,metalnessMap:Qe,roughnessMap:ke,anisotropy:Me,anisotropyMap:Y,clearcoat:C,clearcoatMap:ve,clearcoatNormalMap:se,clearcoatRoughnessMap:be,dispersion:v,iridescence:N,iridescenceMap:ye,iridescenceThicknessMap:re,sheen:Z,sheenColorMap:ae,sheenRoughnessMap:Ee,specularMap:Ae,specularColorMap:oe,specularIntensityMap:He,transmission:j,transmissionMap:L,thicknessMap:ue,gradientMap:ie,opaque:x.transparent===!1&&x.blending===Ds&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:te,alphaHash:Q,combine:x.combine,mapUv:Ve&&_(x.map.channel),aoMapUv:ze&&_(x.aoMap.channel),lightMapUv:Ke&&_(x.lightMap.channel),bumpMapUv:Ne&&_(x.bumpMap.channel),normalMapUv:G&&_(x.normalMap.channel),displacementMapUv:I&&_(x.displacementMap.channel),emissiveMapUv:pt&&_(x.emissiveMap.channel),metalnessMapUv:Qe&&_(x.metalnessMap.channel),roughnessMapUv:ke&&_(x.roughnessMap.channel),anisotropyMapUv:Y&&_(x.anisotropyMap.channel),clearcoatMapUv:ve&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&_(x.sheenRoughnessMap.channel),specularMapUv:Ae&&_(x.specularMap.channel),specularColorMapUv:oe&&_(x.specularColorMap.channel),specularIntensityMapUv:He&&_(x.specularIntensityMap.channel),transmissionMapUv:L&&_(x.transmissionMap.channel),thicknessMapUv:ue&&_(x.thicknessMap.channel),alphaMapUv:fe&&_(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(G||Me),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(Ve||fe),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:he,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ve&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===xt,decodeVideoTextureEmissive:pt&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Hi,flipSided:x.side===Fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ce&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&x.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(y(M,x),b(M,x),M.push(r.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function y(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function b(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function S(x){const M=g[x.type];let P;if(M){const U=Ei[M];P=ug.clone(U.uniforms)}else P=x.uniforms;return P}function T(x,M){let P=f.get(M);return P!==void 0?++P.usedTimes:(P=new YS(r,M,x,s),u.push(P),f.set(M,P)),P}function w(x){if(--x.usedTimes===0){const M=u.indexOf(x);u[M]=u[u.length-1],u.pop(),f.delete(x.cacheKey),x.destroy()}}function A(x){l.remove(x)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:D}}function JS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function QS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function xh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function vh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,d,h,g,_,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?n.push(p):h.transparent===!0?i.push(p):t.push(p)}function l(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?n.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||QS),n.length>1&&n.sort(d||xh),i.length>1&&i.sort(d||xh)}function u(){for(let f=e,d=r.length;f<d;f++){const h=r[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function eM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new vh,r.set(n,[a])):i>=s.length?(a=new vh,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function tM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new vt};break;case"SpotLight":t={position:new q,direction:new q,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function nM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let iM=0;function rM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function sM(r){const e=new tM,t=nM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const i=new q,s=new Xt,a=new Xt;function o(c){let u=0,f=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,y=0,b=0,S=0,T=0,w=0,A=0;c.sort(rM);for(let x=0,M=c.length;x<M;x++){const P=c[x],U=P.color,B=P.intensity,H=P.distance;let V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ws?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=U.r*B,f+=U.g*B,d+=U.b*B;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],B);A++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const F=P.shadow,$=t.get(P);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,n.directionalShadow[h]=$,n.directionalShadowMap[h]=V,n.directionalShadowMatrix[h]=P.shadow.matrix,y++}n.directional[h]=k,h++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(U).multiplyScalar(B),k.distance=H,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[_]=k;const F=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,F.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=F.matrix,P.castShadow){const $=t.get(P);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=V,S++}_++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(U).multiplyScalar(B),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=k,m++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const F=P.shadow,$=t.get(P);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,$.shadowCameraNear=F.camera.near,$.shadowCameraFar=F.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=k,g++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(B),k.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=k,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==h||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==y||D.numPointShadows!==b||D.numSpotShadows!==S||D.numSpotMaps!==T||D.numLightProbes!==A)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,D.directionalLength=h,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=y,D.numPointShadows=b,D.numSpotShadows=S,D.numSpotMaps=T,D.numLightProbes=A,n.version=iM++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const b=c[p];if(b.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),f++}else if(b.isSpotLight){const S=n.spot[h];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),h++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Sh(r){const e=new sM(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function aM(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Sh(r),e.set(i,[o])):s>=a.length?(o=new Sh(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const oM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lM=`uniform sampler2D shadow_pass;
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
}`,cM=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],uM=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Mh=new Xt,sa=new q,Jl=new q;function fM(r,e,t){let n=new fp;const i=new Et,s=new Et,a=new zt,o=new Eg,l=new yg,c={},u=t.maxTextureSize,f={[yr]:Fn,[Fn]:yr,[Hi]:Hi},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:oM,fragmentShader:lM}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new nr;g.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ui(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let p=this.type;this.render=function(w,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===f_&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Io);const x=r.getRenderTarget(),M=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Yi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=p!==this.type;B&&A.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(V=>V.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,V=w.length;H<V;H++){const k=w[H],F=k.shadow;if(F===void 0){Ye("WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const $=F.getFrameExtents();if(i.multiply($),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,F.mapSize.y=s.y)),F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ua){if(k.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ri(i.x,i.y,{format:Ws,type:Qi,minFilter:mn,magFilter:mn,generateMipmaps:!1}),F.map.texture.name=k.name+".shadowMap",F.map.depthTexture=new Va(i.x,i.y,bi),F.map.depthTexture.name=k.name+".shadowMapDepth",F.map.depthTexture.format=er,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=sn,F.map.depthTexture.magFilter=sn}else{k.isPointLight?(F.map=new up(i.x),F.map.depthTexture=new Sg(i.x,Ii)):(F.map=new Ri(i.x,i.y),F.map.depthTexture=new Va(i.x,i.y,Ii)),F.map.depthTexture.name=k.name+".shadowMap",F.map.depthTexture.format=er;const R=r.state.buffers.depth.getReversed();this.type===Io?(F.map.depthTexture.compareFunction=R?Zu:Ku,F.map.depthTexture.minFilter=mn,F.map.depthTexture.magFilter=mn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=sn,F.map.depthTexture.magFilter=sn)}F.camera.updateProjectionMatrix()}const ee=F.map.isWebGLCubeRenderTarget?6:1;for(let R=0;R<ee;R++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,R),r.clear();else{R===0&&(r.setRenderTarget(F.map),r.clear());const ne=F.getViewport(R);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),U.viewport(a)}if(k.isPointLight){const ne=F.camera,Re=F.matrix,Be=k.distance||ne.far;Be!==ne.far&&(ne.far=Be,ne.updateProjectionMatrix()),sa.setFromMatrixPosition(k.matrixWorld),ne.position.copy(sa),Jl.copy(ne.position),Jl.add(cM[R]),ne.up.copy(uM[R]),ne.lookAt(Jl),ne.updateMatrixWorld(),Re.makeTranslation(-sa.x,-sa.y,-sa.z),Mh.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Mh,ne.coordinateSystem,ne.reversedDepth)}else F.updateMatrices(k);n=F.getFrustum(),S(A,D,F.camera,k,this.type)}F.isPointLightShadow!==!0&&this.type===ua&&y(F,D),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(x,M,P)};function y(w,A){const D=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ri(i.x,i.y,{format:Ws,type:Qi})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,D,d,_,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,D,h,_,null)}function b(w,A,D,x){let M=null;const P=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=D.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=M.uuid,B=A.uuid;let H=c[U];H===void 0&&(H={},c[U]=H);let V=H[B];V===void 0&&(V=M.clone(),H[B]=V,A.addEventListener("dispose",T)),M=V}if(M.visible=A.visible,M.wireframe=A.wireframe,x===ua?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=r.properties.get(M);U.light=D}return M}function S(w,A,D,x,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===ua)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const B=e.update(w),H=w.material;if(Array.isArray(H)){const V=B.groups;for(let k=0,F=V.length;k<F;k++){const $=V[k],ee=H[$.materialIndex];if(ee&&ee.visible){const R=b(w,ee,x,M);w.onBeforeShadow(r,w,A,D,B,R,$),r.renderBufferDirect(D,null,B,R,w,$),w.onAfterShadow(r,w,A,D,B,R,$)}}}else if(H.visible){const V=b(w,H,x,M);w.onBeforeShadow(r,w,A,D,B,V,null),r.renderBufferDirect(D,null,B,V,w,null),w.onAfterShadow(r,w,A,D,B,V,null)}}const U=w.children;for(let B=0,H=U.length;B<H;B++)S(U[B],A,D,x,M)}function T(w){w.target.removeEventListener("dispose",T);for(const D in c){const x=c[D],M=w.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const hM={[Ec]:yc,[Tc]:wc,[bc]:Cc,[Gs]:Ac,[yc]:Ec,[wc]:Tc,[Cc]:bc,[Ac]:Gs};function dM(r,e){function t(){let L=!1;const ue=new zt;let ie=null;const fe=new zt(0,0,0,0);return{setMask:function(te){ie!==te&&!L&&(r.colorMask(te,te,te,te),ie=te)},setLocked:function(te){L=te},setClear:function(te,Q,ce,Ue,ut){ut===!0&&(te*=Ue,Q*=Ue,ce*=Ue),ue.set(te,Q,ce,Ue),fe.equals(ue)===!1&&(r.clearColor(te,Q,ce,Ue),fe.copy(ue))},reset:function(){L=!1,ie=null,fe.set(-1,0,0,0)}}}function n(){let L=!1,ue=!1,ie=null,fe=null,te=null;return{setReversed:function(Q){if(ue!==Q){const ce=e.get("EXT_clip_control");Q?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),ue=Q;const Ue=te;te=null,this.setClear(Ue)}},getReversed:function(){return ue},setTest:function(Q){Q?J(r.DEPTH_TEST):he(r.DEPTH_TEST)},setMask:function(Q){ie!==Q&&!L&&(r.depthMask(Q),ie=Q)},setFunc:function(Q){if(ue&&(Q=hM[Q]),fe!==Q){switch(Q){case Ec:r.depthFunc(r.NEVER);break;case yc:r.depthFunc(r.ALWAYS);break;case Tc:r.depthFunc(r.LESS);break;case Gs:r.depthFunc(r.LEQUAL);break;case bc:r.depthFunc(r.EQUAL);break;case Ac:r.depthFunc(r.GEQUAL);break;case wc:r.depthFunc(r.GREATER);break;case Cc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}fe=Q}},setLocked:function(Q){L=Q},setClear:function(Q){te!==Q&&(ue&&(Q=1-Q),r.clearDepth(Q),te=Q)},reset:function(){L=!1,ie=null,fe=null,te=null,ue=!1}}}function i(){let L=!1,ue=null,ie=null,fe=null,te=null,Q=null,ce=null,Ue=null,ut=null;return{setTest:function(_e){L||(_e?J(r.STENCIL_TEST):he(r.STENCIL_TEST))},setMask:function(_e){ue!==_e&&!L&&(r.stencilMask(_e),ue=_e)},setFunc:function(_e,Ce,Ze){(ie!==_e||fe!==Ce||te!==Ze)&&(r.stencilFunc(_e,Ce,Ze),ie=_e,fe=Ce,te=Ze)},setOp:function(_e,Ce,Ze){(Q!==_e||ce!==Ce||Ue!==Ze)&&(r.stencilOp(_e,Ce,Ze),Q=_e,ce=Ce,Ue=Ze)},setLocked:function(_e){L=_e},setClear:function(_e){ut!==_e&&(r.clearStencil(_e),ut=_e)},reset:function(){L=!1,ue=null,ie=null,fe=null,te=null,Q=null,ce=null,Ue=null,ut=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,b=null,S=null,T=null,w=null,A=new vt(0,0,0),D=0,x=!1,M=null,P=null,U=null,B=null,H=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,F=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec($)[1]),k=F>=1):$.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),k=F>=2);let ee=null,R={};const ne=r.getParameter(r.SCISSOR_BOX),Re=r.getParameter(r.VIEWPORT),Be=new zt().fromArray(ne),We=new zt().fromArray(Re);function $e(L,ue,ie,fe){const te=new Uint8Array(4),Q=r.createTexture();r.bindTexture(L,Q),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ce=0;ce<ie;ce++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(ue+ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return Q}const K={};K[r.TEXTURE_2D]=$e(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=$e(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=$e(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=$e(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(r.DEPTH_TEST),a.setFunc(Gs),Ne(!1),G(wf),J(r.CULL_FACE),ze(Yi);function J(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function he(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function Pe(L,ue){return f[L]!==ue?(r.bindFramebuffer(L,ue),f[L]=ue,L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ue),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function Se(L,ue){let ie=h,fe=!1;if(L){ie=d.get(ue),ie===void 0&&(ie=[],d.set(ue,ie));const te=L.textures;if(ie.length!==te.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,ce=te.length;Q<ce;Q++)ie[Q]=r.COLOR_ATTACHMENT0+Q;ie.length=te.length,fe=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,fe=!0);fe&&r.drawBuffers(ie)}function Ve(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const lt={[zr]:r.FUNC_ADD,[d_]:r.FUNC_SUBTRACT,[p_]:r.FUNC_REVERSE_SUBTRACT};lt[m_]=r.MIN,lt[__]=r.MAX;const Te={[g_]:r.ZERO,[x_]:r.ONE,[v_]:r.SRC_COLOR,[Sc]:r.SRC_ALPHA,[b_]:r.SRC_ALPHA_SATURATE,[y_]:r.DST_COLOR,[M_]:r.DST_ALPHA,[S_]:r.ONE_MINUS_SRC_COLOR,[Mc]:r.ONE_MINUS_SRC_ALPHA,[T_]:r.ONE_MINUS_DST_COLOR,[E_]:r.ONE_MINUS_DST_ALPHA,[A_]:r.CONSTANT_COLOR,[w_]:r.ONE_MINUS_CONSTANT_COLOR,[C_]:r.CONSTANT_ALPHA,[R_]:r.ONE_MINUS_CONSTANT_ALPHA};function ze(L,ue,ie,fe,te,Q,ce,Ue,ut,_e){if(L===Yi){_===!0&&(he(r.BLEND),_=!1);return}if(_===!1&&(J(r.BLEND),_=!0),L!==h_){if(L!==m||_e!==x){if((p!==zr||S!==zr)&&(r.blendEquation(r.FUNC_ADD),p=zr,S=zr),_e)switch(L){case Ds:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cf:r.blendFunc(r.ONE,r.ONE);break;case Rf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:dt("WebGLState: Invalid blending: ",L);break}else switch(L){case Ds:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Rf:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pf:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",L);break}y=null,b=null,T=null,w=null,A.set(0,0,0),D=0,m=L,x=_e}return}te=te||ue,Q=Q||ie,ce=ce||fe,(ue!==p||te!==S)&&(r.blendEquationSeparate(lt[ue],lt[te]),p=ue,S=te),(ie!==y||fe!==b||Q!==T||ce!==w)&&(r.blendFuncSeparate(Te[ie],Te[fe],Te[Q],Te[ce]),y=ie,b=fe,T=Q,w=ce),(Ue.equals(A)===!1||ut!==D)&&(r.blendColor(Ue.r,Ue.g,Ue.b,ut),A.copy(Ue),D=ut),m=L,x=!1}function Ke(L,ue){L.side===Hi?he(r.CULL_FACE):J(r.CULL_FACE);let ie=L.side===Fn;ue&&(ie=!ie),Ne(ie),L.blending===Ds&&L.transparent===!1?ze(Yi):ze(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const fe=L.stencilWrite;o.setTest(fe),fe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),pt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):he(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(L){M!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),M=L)}function G(L){L!==c_?(J(r.CULL_FACE),L!==P&&(L===wf?r.cullFace(r.BACK):L===u_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):he(r.CULL_FACE),P=L}function I(L){L!==U&&(k&&r.lineWidth(L),U=L)}function pt(L,ue,ie){L?(J(r.POLYGON_OFFSET_FILL),(B!==ue||H!==ie)&&(r.polygonOffset(ue,ie),B=ue,H=ie)):he(r.POLYGON_OFFSET_FILL)}function Qe(L){L?J(r.SCISSOR_TEST):he(r.SCISSOR_TEST)}function ke(L){L===void 0&&(L=r.TEXTURE0+V-1),ee!==L&&(r.activeTexture(L),ee=L)}function Me(L,ue,ie){ie===void 0&&(ee===null?ie=r.TEXTURE0+V-1:ie=ee);let fe=R[ie];fe===void 0&&(fe={type:void 0,texture:void 0},R[ie]=fe),(fe.type!==L||fe.texture!==ue)&&(ee!==ie&&(r.activeTexture(ie),ee=ie),r.bindTexture(L,ue||K[L]),fe.type=L,fe.texture=ue)}function C(){const L=R[ee];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(L){dt("WebGLState:",L)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(L){dt("WebGLState:",L)}}function Z(){try{r.texSubImage2D(...arguments)}catch(L){dt("WebGLState:",L)}}function j(){try{r.texSubImage3D(...arguments)}catch(L){dt("WebGLState:",L)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(L){dt("WebGLState:",L)}}function ve(){try{r.compressedTexSubImage3D(...arguments)}catch(L){dt("WebGLState:",L)}}function se(){try{r.texStorage2D(...arguments)}catch(L){dt("WebGLState:",L)}}function be(){try{r.texStorage3D(...arguments)}catch(L){dt("WebGLState:",L)}}function ye(){try{r.texImage2D(...arguments)}catch(L){dt("WebGLState:",L)}}function re(){try{r.texImage3D(...arguments)}catch(L){dt("WebGLState:",L)}}function ae(L){Be.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Be.copy(L))}function Ee(L){We.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),We.copy(L))}function Ae(L,ue){let ie=c.get(ue);ie===void 0&&(ie=new WeakMap,c.set(ue,ie));let fe=ie.get(L);fe===void 0&&(fe=r.getUniformBlockIndex(ue,L.name),ie.set(L,fe))}function oe(L,ue){const fe=c.get(ue).get(L);l.get(ue)!==fe&&(r.uniformBlockBinding(ue,fe,L.__bindingPointIndex),l.set(ue,fe))}function He(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ee=null,R={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,b=null,S=null,T=null,w=null,A=new vt(0,0,0),D=0,x=!1,M=null,P=null,U=null,B=null,H=null,Be.set(0,0,r.canvas.width,r.canvas.height),We.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:he,bindFramebuffer:Pe,drawBuffers:Se,useProgram:Ve,setBlending:ze,setMaterial:Ke,setFlipSided:Ne,setCullFace:G,setLineWidth:I,setPolygonOffset:pt,setScissorTest:Qe,activeTexture:ke,bindTexture:Me,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:N,texImage2D:ye,texImage3D:re,updateUBOMapping:Ae,uniformBlockBinding:oe,texStorage2D:se,texStorage3D:be,texSubImage2D:Z,texSubImage3D:j,compressedTexSubImage2D:Y,compressedTexSubImage3D:ve,scissor:ae,viewport:Ee,reset:He}}function pM(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return h?new OffscreenCanvas(C,v):za("canvas")}function _(C,v,N){let Z=1;const j=Me(C);if((j.width>N||j.height>N)&&(Z=N/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(Z*j.width),ve=Math.floor(Z*j.height);f===void 0&&(f=g(Y,ve));const se=v?g(Y,ve):f;return se.width=Y,se.height=ve,se.getContext("2d").drawImage(C,0,0,Y,ve),Ye("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+ve+")."),se}else return"data"in C&&Ye("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(C,v,N,Z,j=!1){if(C!==null){if(r[C]!==void 0)return r[C];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=v;if(v===r.RED&&(N===r.FLOAT&&(Y=r.R32F),N===r.HALF_FLOAT&&(Y=r.R16F),N===r.UNSIGNED_BYTE&&(Y=r.R8)),v===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(Y=r.R8UI),N===r.UNSIGNED_SHORT&&(Y=r.R16UI),N===r.UNSIGNED_INT&&(Y=r.R32UI),N===r.BYTE&&(Y=r.R8I),N===r.SHORT&&(Y=r.R16I),N===r.INT&&(Y=r.R32I)),v===r.RG&&(N===r.FLOAT&&(Y=r.RG32F),N===r.HALF_FLOAT&&(Y=r.RG16F),N===r.UNSIGNED_BYTE&&(Y=r.RG8)),v===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(Y=r.RG8UI),N===r.UNSIGNED_SHORT&&(Y=r.RG16UI),N===r.UNSIGNED_INT&&(Y=r.RG32UI),N===r.BYTE&&(Y=r.RG8I),N===r.SHORT&&(Y=r.RG16I),N===r.INT&&(Y=r.RG32I)),v===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),N===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),N===r.UNSIGNED_INT&&(Y=r.RGB32UI),N===r.BYTE&&(Y=r.RGB8I),N===r.SHORT&&(Y=r.RGB16I),N===r.INT&&(Y=r.RGB32I)),v===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),N===r.UNSIGNED_INT&&(Y=r.RGBA32UI),N===r.BYTE&&(Y=r.RGBA8I),N===r.SHORT&&(Y=r.RGBA16I),N===r.INT&&(Y=r.RGBA32I)),v===r.RGB&&(N===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),N===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),v===r.RGBA){const ve=j?Jo:ct.getTransfer(Z);N===r.FLOAT&&(Y=r.RGBA32F),N===r.HALF_FLOAT&&(Y=r.RGBA16F),N===r.UNSIGNED_BYTE&&(Y=ve===xt?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(C,v){let N;return C?v===null||v===Ii||v===Ba?N=r.DEPTH24_STENCIL8:v===bi?N=r.DEPTH32F_STENCIL8:v===Oa&&(N=r.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ii||v===Ba?N=r.DEPTH_COMPONENT24:v===bi?N=r.DEPTH_COMPONENT32F:v===Oa&&(N=r.DEPTH_COMPONENT16),N}function T(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==sn&&C.minFilter!==mn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function w(C){const v=C.target;v.removeEventListener("dispose",w),D(v),v.isVideoTexture&&u.delete(v)}function A(C){const v=C.target;v.removeEventListener("dispose",A),M(v)}function D(C){const v=n.get(C);if(v.__webglInit===void 0)return;const N=C.source,Z=d.get(N);if(Z){const j=Z[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&x(C),Object.keys(Z).length===0&&d.delete(N)}n.remove(C)}function x(C){const v=n.get(C);r.deleteTexture(v.__webglTexture);const N=C.source,Z=d.get(N);delete Z[v.__cacheKey],a.memory.textures--}function M(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let j=0;j<v.__webglFramebuffer[Z].length;j++)r.deleteFramebuffer(v.__webglFramebuffer[Z][j]);else r.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)r.deleteFramebuffer(v.__webglFramebuffer[Z]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=C.textures;for(let Z=0,j=N.length;Z<j;Z++){const Y=n.get(N[Z]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(N[Z])}n.remove(C)}let P=0;function U(){P=0}function B(){const C=P;return C>=i.maxTextures&&Ye("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function H(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function V(C,v){const N=n.get(C);if(C.isVideoTexture&&Qe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const Z=C.image;if(Z===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{K(N,C,v);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+v)}function k(C,v){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){K(N,C,v);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+v)}function F(C,v){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){K(N,C,v);return}t.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+v)}function $(C,v){const N=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){J(N,C,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+v)}const ee={[Dc]:r.REPEAT,[Xi]:r.CLAMP_TO_EDGE,[Lc]:r.MIRRORED_REPEAT},R={[sn]:r.NEAREST,[L_]:r.NEAREST_MIPMAP_NEAREST,[Za]:r.NEAREST_MIPMAP_LINEAR,[mn]:r.LINEAR,[Ml]:r.LINEAR_MIPMAP_NEAREST,[Gr]:r.LINEAR_MIPMAP_LINEAR},ne={[F_]:r.NEVER,[V_]:r.ALWAYS,[O_]:r.LESS,[Ku]:r.LEQUAL,[B_]:r.EQUAL,[Zu]:r.GEQUAL,[z_]:r.GREATER,[k_]:r.NOTEQUAL};function Re(C,v){if(v.type===bi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===mn||v.magFilter===Ml||v.magFilter===Za||v.magFilter===Gr||v.minFilter===mn||v.minFilter===Ml||v.minFilter===Za||v.minFilter===Gr)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ee[v.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ee[v.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ee[v.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,R[v.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,R[v.minFilter]),v.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ne[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===sn||v.minFilter!==Za&&v.minFilter!==Gr||v.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Be(C,v){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",w));const Z=v.source;let j=d.get(Z);j===void 0&&(j={},d.set(Z,j));const Y=H(v);if(Y!==C.__cacheKey){j[Y]===void 0&&(j[Y]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),j[Y].usedTimes++;const ve=j[C.__cacheKey];ve!==void 0&&(j[C.__cacheKey].usedTimes--,ve.usedTimes===0&&x(v)),C.__cacheKey=Y,C.__webglTexture=j[Y].texture}return N}function We(C,v,N){return Math.floor(Math.floor(C/N)/v)}function $e(C,v,N,Z){const Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,N,Z,v.data);else{Y.sort((re,ae)=>re.start-ae.start);let ve=0;for(let re=1;re<Y.length;re++){const ae=Y[ve],Ee=Y[re],Ae=ae.start+ae.count,oe=We(Ee.start,v.width,4),He=We(ae.start,v.width,4);Ee.start<=Ae+1&&oe===He&&We(Ee.start+Ee.count-1,v.width,4)===oe?ae.count=Math.max(ae.count,Ee.start+Ee.count-ae.start):(++ve,Y[ve]=Ee)}Y.length=ve+1;const se=r.getParameter(r.UNPACK_ROW_LENGTH),be=r.getParameter(r.UNPACK_SKIP_PIXELS),ye=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let re=0,ae=Y.length;re<ae;re++){const Ee=Y[re],Ae=Math.floor(Ee.start/4),oe=Math.ceil(Ee.count/4),He=Ae%v.width,L=Math.floor(Ae/v.width),ue=oe,ie=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,He),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),t.texSubImage2D(r.TEXTURE_2D,0,He,L,ue,ie,N,Z,v.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,be),r.pixelStorei(r.UNPACK_SKIP_ROWS,ye)}}function K(C,v,N){let Z=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=r.TEXTURE_3D);const j=Be(C,v),Y=v.source;t.bindTexture(Z,C.__webglTexture,r.TEXTURE0+N);const ve=n.get(Y);if(Y.version!==ve.__version||j===!0){t.activeTexture(r.TEXTURE0+N);const se=ct.getPrimaries(ct.workingColorSpace),be=v.colorSpace===ur?null:ct.getPrimaries(v.colorSpace),ye=v.colorSpace===ur||se===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let re=_(v.image,!1,i.maxTextureSize);re=ke(v,re);const ae=s.convert(v.format,v.colorSpace),Ee=s.convert(v.type);let Ae=b(v.internalFormat,ae,Ee,v.colorSpace,v.isVideoTexture);Re(Z,v);let oe;const He=v.mipmaps,L=v.isVideoTexture!==!0,ue=ve.__version===void 0||j===!0,ie=Y.dataReady,fe=T(v,re);if(v.isDepthTexture)Ae=S(v.format===Hr,v.type),ue&&(L?t.texStorage2D(r.TEXTURE_2D,1,Ae,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Ae,re.width,re.height,0,ae,Ee,null));else if(v.isDataTexture)if(He.length>0){L&&ue&&t.texStorage2D(r.TEXTURE_2D,fe,Ae,He[0].width,He[0].height);for(let te=0,Q=He.length;te<Q;te++)oe=He[te],L?ie&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,oe.width,oe.height,ae,Ee,oe.data):t.texImage2D(r.TEXTURE_2D,te,Ae,oe.width,oe.height,0,ae,Ee,oe.data);v.generateMipmaps=!1}else L?(ue&&t.texStorage2D(r.TEXTURE_2D,fe,Ae,re.width,re.height),ie&&$e(v,re,ae,Ee)):t.texImage2D(r.TEXTURE_2D,0,Ae,re.width,re.height,0,ae,Ee,re.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,Ae,He[0].width,He[0].height,re.depth);for(let te=0,Q=He.length;te<Q;te++)if(oe=He[te],v.format!==gi)if(ae!==null)if(L){if(ie)if(v.layerUpdates.size>0){const ce=Jf(oe.width,oe.height,v.format,v.type);for(const Ue of v.layerUpdates){const ut=oe.data.subarray(Ue*ce/oe.data.BYTES_PER_ELEMENT,(Ue+1)*ce/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,Ue,oe.width,oe.height,1,ae,ut)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,re.depth,ae,oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,Ae,oe.width,oe.height,re.depth,0,oe.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ie&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,re.depth,ae,Ee,oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,Ae,oe.width,oe.height,re.depth,0,ae,Ee,oe.data)}else{L&&ue&&t.texStorage2D(r.TEXTURE_2D,fe,Ae,He[0].width,He[0].height);for(let te=0,Q=He.length;te<Q;te++)oe=He[te],v.format!==gi?ae!==null?L?ie&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(r.TEXTURE_2D,te,Ae,oe.width,oe.height,0,oe.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ie&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,oe.width,oe.height,ae,Ee,oe.data):t.texImage2D(r.TEXTURE_2D,te,Ae,oe.width,oe.height,0,ae,Ee,oe.data)}else if(v.isDataArrayTexture)if(L){if(ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,Ae,re.width,re.height,re.depth),ie)if(v.layerUpdates.size>0){const te=Jf(re.width,re.height,v.format,v.type);for(const Q of v.layerUpdates){const ce=re.data.subarray(Q*te/re.data.BYTES_PER_ELEMENT,(Q+1)*te/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,ae,Ee,ce)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ae,Ee,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,re.width,re.height,re.depth,0,ae,Ee,re.data);else if(v.isData3DTexture)L?(ue&&t.texStorage3D(r.TEXTURE_3D,fe,Ae,re.width,re.height,re.depth),ie&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ae,Ee,re.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,re.width,re.height,re.depth,0,ae,Ee,re.data);else if(v.isFramebufferTexture){if(ue)if(L)t.texStorage2D(r.TEXTURE_2D,fe,Ae,re.width,re.height);else{let te=re.width,Q=re.height;for(let ce=0;ce<fe;ce++)t.texImage2D(r.TEXTURE_2D,ce,Ae,te,Q,0,ae,Ee,null),te>>=1,Q>>=1}}else if(He.length>0){if(L&&ue){const te=Me(He[0]);t.texStorage2D(r.TEXTURE_2D,fe,Ae,te.width,te.height)}for(let te=0,Q=He.length;te<Q;te++)oe=He[te],L?ie&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ae,Ee,oe):t.texImage2D(r.TEXTURE_2D,te,Ae,ae,Ee,oe);v.generateMipmaps=!1}else if(L){if(ue){const te=Me(re);t.texStorage2D(r.TEXTURE_2D,fe,Ae,te.width,te.height)}ie&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae,Ee,re)}else t.texImage2D(r.TEXTURE_2D,0,Ae,ae,Ee,re);m(v)&&p(Z),ve.__version=Y.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function J(C,v,N){if(v.image.length!==6)return;const Z=Be(C,v),j=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+N);const Y=n.get(j);if(j.version!==Y.__version||Z===!0){t.activeTexture(r.TEXTURE0+N);const ve=ct.getPrimaries(ct.workingColorSpace),se=v.colorSpace===ur?null:ct.getPrimaries(v.colorSpace),be=v.colorSpace===ur||ve===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ye=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,ae=[];for(let Q=0;Q<6;Q++)!ye&&!re?ae[Q]=_(v.image[Q],!0,i.maxCubemapSize):ae[Q]=re?v.image[Q].image:v.image[Q],ae[Q]=ke(v,ae[Q]);const Ee=ae[0],Ae=s.convert(v.format,v.colorSpace),oe=s.convert(v.type),He=b(v.internalFormat,Ae,oe,v.colorSpace),L=v.isVideoTexture!==!0,ue=Y.__version===void 0||Z===!0,ie=j.dataReady;let fe=T(v,Ee);Re(r.TEXTURE_CUBE_MAP,v);let te;if(ye){L&&ue&&t.texStorage2D(r.TEXTURE_CUBE_MAP,fe,He,Ee.width,Ee.height);for(let Q=0;Q<6;Q++){te=ae[Q].mipmaps;for(let ce=0;ce<te.length;ce++){const Ue=te[ce];v.format!==gi?Ae!==null?L?ie&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Ue.width,Ue.height,Ae,Ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,He,Ue.width,Ue.height,0,Ue.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Ue.width,Ue.height,Ae,oe,Ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,He,Ue.width,Ue.height,0,Ae,oe,Ue.data)}}}else{if(te=v.mipmaps,L&&ue){te.length>0&&fe++;const Q=Me(ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,fe,He,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){L?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ae[Q].width,ae[Q].height,Ae,oe,ae[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,He,ae[Q].width,ae[Q].height,0,Ae,oe,ae[Q].data);for(let ce=0;ce<te.length;ce++){const ut=te[ce].image[Q].image;L?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,ut.width,ut.height,Ae,oe,ut.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,He,ut.width,ut.height,0,Ae,oe,ut.data)}}else{L?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ae,oe,ae[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,He,Ae,oe,ae[Q]);for(let ce=0;ce<te.length;ce++){const Ue=te[ce];L?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,Ae,oe,Ue.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,He,Ae,oe,Ue.image[Q])}}}m(v)&&p(r.TEXTURE_CUBE_MAP),Y.__version=j.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function he(C,v,N,Z,j,Y){const ve=s.convert(N.format,N.colorSpace),se=s.convert(N.type),be=b(N.internalFormat,ve,se,N.colorSpace),ye=n.get(v),re=n.get(N);if(re.__renderTarget=v,!ye.__hasExternalTextures){const ae=Math.max(1,v.width>>Y),Ee=Math.max(1,v.height>>Y);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,Y,be,ae,Ee,v.depth,0,ve,se,null):t.texImage2D(j,Y,be,ae,Ee,0,ve,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),pt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,j,re.__webglTexture,0,I(v)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,j,re.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(C,v,N){if(r.bindRenderbuffer(r.RENDERBUFFER,C),v.depthBuffer){const Z=v.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,Y=S(v.stencilBuffer,j),ve=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I(v),Y,v.width,v.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,I(v),Y,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Y,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,C)}else{const Z=v.textures;for(let j=0;j<Z.length;j++){const Y=Z[j],ve=s.convert(Y.format,Y.colorSpace),se=s.convert(Y.type),be=b(Y.internalFormat,ve,se,Y.colorSpace);pt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I(v),be,v.width,v.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,I(v),be,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,be,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Se(C,v,N){const Z=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(v.depthTexture);if(j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z){if(j.__webglInit===void 0&&(j.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),j.__webglTexture===void 0){j.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Re(r.TEXTURE_CUBE_MAP,v.depthTexture);const ye=s.convert(v.depthTexture.format),re=s.convert(v.depthTexture.type);let ae;v.depthTexture.format===er?ae=r.DEPTH_COMPONENT24:v.depthTexture.format===Hr&&(ae=r.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ae,v.width,v.height,0,ye,re,null)}}else V(v.depthTexture,0);const Y=j.__webglTexture,ve=I(v),se=Z?r.TEXTURE_CUBE_MAP_POSITIVE_X+N:r.TEXTURE_2D,be=v.depthTexture.format===Hr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===er)pt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,be,se,Y,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,be,se,Y,0);else if(v.depthTexture.format===Hr)pt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,be,se,Y,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,be,se,Y,0);else throw new Error("Unknown depthTexture format")}function Ve(C){const v=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=Z}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(N)for(let Z=0;Z<6;Z++)Se(v.__webglFramebuffer[Z],C,Z);else{const Z=C.texture.mipmaps;Z&&Z.length>0?Se(v.__webglFramebuffer[0],C,0):Se(v.__webglFramebuffer,C,0)}else if(N){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=r.createRenderbuffer(),Pe(v.__webglDepthbuffer[Z],C,!1);else{const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,Y)}}else{const Z=C.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Pe(v.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,Y)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(C,v,N){const Z=n.get(C);v!==void 0&&he(Z.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&Ve(C)}function Te(C){const v=C.texture,N=n.get(C),Z=n.get(v);C.addEventListener("dispose",A);const j=C.textures,Y=C.isWebGLCubeRenderTarget===!0,ve=j.length>1;if(ve||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=v.version,a.memory.textures++),Y){N.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[se]=[];for(let be=0;be<v.mipmaps.length;be++)N.__webglFramebuffer[se][be]=r.createFramebuffer()}else N.__webglFramebuffer[se]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)N.__webglFramebuffer[se]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(ve)for(let se=0,be=j.length;se<be;se++){const ye=n.get(j[se]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&pt(C)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const be=j[se];N.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[se]);const ye=s.convert(be.format,be.colorSpace),re=s.convert(be.type),ae=b(be.internalFormat,ye,re,be.colorSpace,C.isXRRenderTarget===!0),Ee=I(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,ae,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,N.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),Pe(N.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Re(r.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let be=0;be<v.mipmaps.length;be++)he(N.__webglFramebuffer[se][be],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,be);else he(N.__webglFramebuffer[se],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(v)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let se=0,be=j.length;se<be;se++){const ye=j[se],re=n.get(ye);let ae=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,re.__webglTexture),Re(ae,ye),he(N.__webglFramebuffer,C,ye,r.COLOR_ATTACHMENT0+se,ae,0),m(ye)&&p(ae)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),Re(se,v),v.mipmaps&&v.mipmaps.length>0)for(let be=0;be<v.mipmaps.length;be++)he(N.__webglFramebuffer[be],C,v,r.COLOR_ATTACHMENT0,se,be);else he(N.__webglFramebuffer,C,v,r.COLOR_ATTACHMENT0,se,0);m(v)&&p(se),t.unbindTexture()}C.depthBuffer&&Ve(C)}function ze(C){const v=C.textures;for(let N=0,Z=v.length;N<Z;N++){const j=v[N];if(m(j)){const Y=y(C),ve=n.get(j).__webglTexture;t.bindTexture(Y,ve),p(Y),t.unbindTexture()}}}const Ke=[],Ne=[];function G(C){if(C.samples>0){if(pt(C)===!1){const v=C.textures,N=C.width,Z=C.height;let j=r.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=n.get(C),se=v.length>1;if(se)for(let ye=0;ye<v.length;ye++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const be=C.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[ye]);const re=n.get(v[ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,N,Z,0,0,N,Z,j,r.NEAREST),l===!0&&(Ke.length=0,Ne.length=0,Ke.push(r.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ke.push(Y),Ne.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ne)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let ye=0;ye<v.length;ye++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,ve.__webglColorRenderbuffer[ye]);const re=n.get(v[ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function I(C){return Math.min(i.maxSamples,C.samples)}function pt(C){const v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Qe(C){const v=a.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function ke(C,v){const N=C.colorSpace,Z=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==Xs&&N!==ur&&(ct.getTransfer(N)===xt?(Z!==gi||j!==li)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",N)),v}function Me(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=F,this.setTextureCube=$,this.rebindTextures=lt,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function mM(r,e){function t(n,i=ur){let s;const a=ct.getTransfer(i);if(n===li)return r.UNSIGNED_BYTE;if(n===Wu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Xu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Kd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Zd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yd)return r.BYTE;if(n===$d)return r.SHORT;if(n===Oa)return r.UNSIGNED_SHORT;if(n===Hu)return r.INT;if(n===Ii)return r.UNSIGNED_INT;if(n===bi)return r.FLOAT;if(n===Qi)return r.HALF_FLOAT;if(n===jd)return r.ALPHA;if(n===Jd)return r.RGB;if(n===gi)return r.RGBA;if(n===er)return r.DEPTH_COMPONENT;if(n===Hr)return r.DEPTH_STENCIL;if(n===Qd)return r.RED;if(n===qu)return r.RED_INTEGER;if(n===Ws)return r.RG;if(n===Yu)return r.RG_INTEGER;if(n===$u)return r.RGBA_INTEGER;if(n===Uo||n===No||n===Fo||n===Oo)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Uo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Uo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===No)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ic||n===Uc||n===Nc||n===Fc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ic)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oc||n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Hc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Oc||n===Bc)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===zc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===kc)return s.COMPRESSED_R11_EAC;if(n===Vc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Gc)return s.COMPRESSED_RG11_EAC;if(n===Hc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wc||n===Xc||n===qc||n===Yc||n===$c||n===Kc||n===Zc||n===jc||n===Jc||n===Qc||n===eu||n===tu||n===nu||n===iu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Wc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$c)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===iu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ru||n===su||n===au)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ru)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===su)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===au)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ou||n===lu||n===cu||n===uu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ou)return s.COMPRESSED_RED_RGTC1_EXT;if(n===lu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ba?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const _M=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gM=`
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

}`;class xM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new hp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xi({vertexShader:_M,fragmentShader:gM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ui(new Ys(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vM extends Ks{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new xM,p={},y=t.getContextAttributes();let b=null,S=null;const T=[],w=[],A=new Et;let D=null;const x=new si;x.viewport=new zt;const M=new si;M.viewport=new zt;const P=[x,M],U=new Cg;let B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=T[K];return J===void 0&&(J=new Wl,T[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=T[K];return J===void 0&&(J=new Wl,T[K]=J),J.getGripSpace()},this.getHand=function(K){let J=T[K];return J===void 0&&(J=new Wl,T[K]=J),J.getHandSpace()};function V(K){const J=w.indexOf(K.inputSource);if(J===-1)return;const he=T[J];he!==void 0&&(he.update(K.inputSource,K.frame,c||a),he.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",F);for(let K=0;K<T.length;K++){const J=w[K];J!==null&&(w[K]=null,T[K].disconnect(J))}B=null,H=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(b),h=null,d=null,f=null,i=null,S=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",k),i.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Pe=null,Se=null;y.depth&&(Se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=y.stencil?Hr:er,Pe=y.stencil?Ba:Ii);const Ve={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ve),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ri(d.textureWidth,d.textureHeight,{format:gi,type:li,depthTexture:new Va(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const he={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Ri(h.framebufferWidth,h.framebufferHeight,{format:gi,type:li,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),$e.setContext(i),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(K){for(let J=0;J<K.removed.length;J++){const he=K.removed[J],Pe=w.indexOf(he);Pe>=0&&(w[Pe]=null,T[Pe].disconnect(he))}for(let J=0;J<K.added.length;J++){const he=K.added[J];let Pe=w.indexOf(he);if(Pe===-1){for(let Ve=0;Ve<T.length;Ve++)if(Ve>=w.length){w.push(he),Pe=Ve;break}else if(w[Ve]===null){w[Ve]=he,Pe=Ve;break}if(Pe===-1)break}const Se=T[Pe];Se&&Se.connect(he)}}const $=new q,ee=new q;function R(K,J,he){$.setFromMatrixPosition(J.matrixWorld),ee.setFromMatrixPosition(he.matrixWorld);const Pe=$.distanceTo(ee),Se=J.projectionMatrix.elements,Ve=he.projectionMatrix.elements,lt=Se[14]/(Se[10]-1),Te=Se[14]/(Se[10]+1),ze=(Se[9]+1)/Se[5],Ke=(Se[9]-1)/Se[5],Ne=(Se[8]-1)/Se[0],G=(Ve[8]+1)/Ve[0],I=lt*Ne,pt=lt*G,Qe=Pe/(-Ne+G),ke=Qe*-Ne;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ke),K.translateZ(Qe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Se[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Me=lt+Qe,C=Te+Qe,v=I-ke,N=pt+(Pe-ke),Z=ze*Te/C*Me,j=Ke*Te/C*Me;K.projectionMatrix.makePerspective(v,N,Z,j,Me,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ne(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let J=K.near,he=K.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(he=m.depthFar)),U.near=M.near=x.near=J,U.far=M.far=x.far=he,(B!==U.near||H!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),B=U.near,H=U.far),U.layers.mask=K.layers.mask|6,x.layers.mask=U.layers.mask&3,M.layers.mask=U.layers.mask&5;const Pe=K.parent,Se=U.cameras;ne(U,Pe);for(let Ve=0;Ve<Se.length;Ve++)ne(Se[Ve],Pe);Se.length===2?R(U,x,M):U.projectionMatrix.copy(x.projectionMatrix),Re(K,U,Pe)};function Re(K,J,he){he===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(he.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=fu*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(K){return p[K]};let Be=null;function We(K,J){if(u=J.getViewerPose(c||a),g=J,u!==null){const he=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Pe=!1;he.length!==U.cameras.length&&(U.cameras.length=0,Pe=!0);for(let Te=0;Te<he.length;Te++){const ze=he[Te];let Ke=null;if(h!==null)Ke=h.getViewport(ze);else{const G=f.getViewSubImage(d,ze);Ke=G.viewport,Te===0&&(e.setRenderTargetTextures(S,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(S))}let Ne=P[Te];Ne===void 0&&(Ne=new si,Ne.layers.enable(Te),Ne.viewport=new zt,P[Te]=Ne),Ne.matrix.fromArray(ze.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(ze.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Te===0&&(U.matrix.copy(Ne.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Pe===!0&&U.cameras.push(Ne)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const Te=f.getDepthInformation(he[0]);Te&&Te.isValid&&Te.texture&&m.init(Te,i.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let Te=0;Te<he.length;Te++){const ze=he[Te].camera;if(ze){let Ke=p[ze];Ke||(Ke=new hp,p[ze]=Ke);const Ne=f.getCameraImage(ze);Ke.sourceTexture=Ne}}}}for(let he=0;he<T.length;he++){const Pe=w[he],Se=T[he];Pe!==null&&Se!==void 0&&Se.update(Pe,J,c||a)}Be&&Be(K,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const $e=new pp;$e.setAnimationLoop(We),this.setAnimationLoop=function(K){Be=K},this.dispose=function(){}}}const Ur=new tr,SM=new Xt;function MM(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,op(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),b=y.envMap,S=y.envMapRotation;b&&(m.envMap.value=b,Ur.copy(S),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),m.envMapRotation.value.setFromMatrix4(SM.makeRotationFromEuler(Ur)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function EM(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const S=b.program;n.uniformBlockBinding(y,S)}function c(y,b){let S=i[y.id];S===void 0&&(g(y),S=u(y),i[y.id]=S,y.addEventListener("dispose",m));const T=b.program;n.updateUBOMapping(y,T);const w=e.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function u(y){const b=f();y.__bindingPointIndex=b;const S=r.createBuffer(),T=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,T,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,S),S}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const b=i[y.id],S=y.uniforms,T=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let w=0,A=S.length;w<A;w++){const D=Array.isArray(S[w])?S[w]:[S[w]];for(let x=0,M=D.length;x<M;x++){const P=D[x];if(h(P,w,x,T)===!0){const U=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let V=0;V<B.length;V++){const k=B[V],F=_(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,U+H,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,H),H+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(y,b,S,T){const w=y.value,A=b+"_"+S;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{const D=T[A];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return T[A]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(y){const b=y.uniforms;let S=0;const T=16;for(let A=0,D=b.length;A<D;A++){const x=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,P=x.length;M<P;M++){const U=x[M],B=Array.isArray(U.value)?U.value:[U.value];for(let H=0,V=B.length;H<V;H++){const k=B[H],F=_(k),$=S%T,ee=$%F.boundary,R=$+ee;S+=ee,R!==0&&T-R<F.storage&&(S+=T-R),U.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=F.storage}}}const w=S%T;return w>0&&(S+=T-w),y.__size=S,y.__cache={},this}function _(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}const yM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vi=null;function TM(){return vi===null&&(vi=new _g(yM,16,16,Ws,Qi),vi.name="DFG_LUT",vi.minFilter=mn,vi.magFilter=mn,vi.wrapS=Xi,vi.wrapT=Xi,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}class bM{constructor(e={}){const{canvas:t=G_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=li}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=h,m=new Set([$u,Yu,qu]),p=new Set([li,Ii,Oa,Ba,Wu,Xu]),y=new Uint32Array(4),b=new Int32Array(4);let S=null,T=null;const w=[],A=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let M=!1;this._outputColorSpace=ri;let P=0,U=0,B=null,H=-1,V=null;const k=new zt,F=new zt;let $=null;const ee=new vt(0);let R=0,ne=t.width,Re=t.height,Be=1,We=null,$e=null;const K=new zt(0,0,ne,Re),J=new zt(0,0,ne,Re);let he=!1;const Pe=new fp;let Se=!1,Ve=!1;const lt=new Xt,Te=new q,ze=new zt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function G(){return B===null?Be:1}let I=n;function pt(E,O){return t.getContext(E,O)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gu}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",_e,!1),I===null){const O="webgl2";if(I=pt(O,E),I===null)throw pt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw dt("WebGLRenderer: "+E.message),E}let Qe,ke,Me,C,v,N,Z,j,Y,ve,se,be,ye,re,ae,Ee,Ae,oe,He,L,ue,ie,fe,te;function Q(){Qe=new Tv(I),Qe.init(),ie=new mM(I,Qe),ke=new mv(I,Qe,e,ie),Me=new dM(I,Qe),ke.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),C=new wv(I),v=new JS,N=new pM(I,Qe,Me,v,ke,ie,C),Z=new gv(x),j=new yv(x),Y=new Dg(I),fe=new dv(I,Y),ve=new bv(I,Y,C,fe),se=new Rv(I,ve,Y,C),He=new Cv(I,ke,N),Ee=new _v(v),be=new jS(x,Z,j,Qe,ke,fe,Ee),ye=new MM(x,v),re=new eM,ae=new aM(Qe),oe=new hv(x,Z,j,Me,se,g,l),Ae=new fM(x,se,ke),te=new EM(I,C,ke,Me),L=new pv(I,Qe,C),ue=new Av(I,Qe,C),C.programs=be.programs,x.capabilities=ke,x.extensions=Qe,x.properties=v,x.renderLists=re,x.shadowMap=Ae,x.state=Me,x.info=C}Q(),_!==li&&(D=new Dv(_,t.width,t.height,i,s));const ce=new vM(x,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(E){E!==void 0&&(Be=E,this.setSize(ne,Re,!1))},this.getSize=function(E){return E.set(ne,Re)},this.setSize=function(E,O,X=!0){if(ce.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=E,Re=O,t.width=Math.floor(E*Be),t.height=Math.floor(O*Be),X===!0&&(t.style.width=E+"px",t.style.height=O+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(ne*Be,Re*Be).floor()},this.setDrawingBufferSize=function(E,O,X){ne=E,Re=O,Be=X,t.width=Math.floor(E*X),t.height=Math.floor(O*X),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(_===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(k)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,O,X,W){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,O,X,W),Me.viewport(k.copy(K).multiplyScalar(Be).round())},this.getScissor=function(E){return E.copy(J)},this.setScissor=function(E,O,X,W){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,O,X,W),Me.scissor(F.copy(J).multiplyScalar(Be).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(E){Me.setScissorTest(he=E)},this.setOpaqueSort=function(E){We=E},this.setTransparentSort=function(E){$e=E},this.getClearColor=function(E){return E.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,X=!0){let W=0;if(E){let z=!1;if(B!==null){const le=B.texture.format;z=m.has(le)}if(z){const le=B.texture.type,ge=p.has(le),de=oe.getClearColor(),xe=oe.getClearAlpha(),De=de.r,Ge=de.g,Fe=de.b;ge?(y[0]=De,y[1]=Ge,y[2]=Fe,y[3]=xe,I.clearBufferuiv(I.COLOR,0,y)):(b[0]=De,b[1]=Ge,b[2]=Fe,b[3]=xe,I.clearBufferiv(I.COLOR,0,b))}else W|=I.COLOR_BUFFER_BIT}O&&(W|=I.DEPTH_BUFFER_BIT),X&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),oe.dispose(),re.dispose(),ae.dispose(),v.dispose(),Z.dispose(),j.dispose(),se.dispose(),fe.dispose(),te.dispose(),be.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Ot),ce.removeEventListener("sessionend",nt),_t.stop()};function Ue(E){E.preventDefault(),Nf("WebGLRenderer: Context Lost."),M=!0}function ut(){Nf("WebGLRenderer: Context Restored."),M=!1;const E=C.autoReset,O=Ae.enabled,X=Ae.autoUpdate,W=Ae.needsUpdate,z=Ae.type;Q(),C.autoReset=E,Ae.enabled=O,Ae.autoUpdate=X,Ae.needsUpdate=W,Ae.type=z}function _e(E){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ce(E){const O=E.target;O.removeEventListener("dispose",Ce),Ze(O)}function Ze(E){pe(E),v.remove(E)}function pe(E){const O=v.get(E).programs;O!==void 0&&(O.forEach(function(X){be.releaseProgram(X)}),E.isShaderMaterial&&be.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,X,W,z,le){O===null&&(O=Ke);const ge=z.isMesh&&z.matrixWorld.determinant()<0,de=qt(E,O,X,W,z);Me.setMaterial(W,ge);let xe=X.index,De=1;if(W.wireframe===!0){if(xe=ve.getWireframeAttribute(X),xe===void 0)return;De=2}const Ge=X.drawRange,Fe=X.attributes.position;let it=Ge.start*De,Mt=(Ge.start+Ge.count)*De;le!==null&&(it=Math.max(it,le.start*De),Mt=Math.min(Mt,(le.start+le.count)*De)),xe!==null?(it=Math.max(it,0),Mt=Math.min(Mt,xe.count)):Fe!=null&&(it=Math.max(it,0),Mt=Math.min(Mt,Fe.count));const Ut=Mt-it;if(Ut<0||Ut===1/0)return;fe.setup(z,W,de,X,xe);let Nt,Tt=L;if(xe!==null&&(Nt=Y.get(xe),Tt=ue,Tt.setIndex(Nt)),z.isMesh)W.wireframe===!0?(Me.setLineWidth(W.wireframeLinewidth*G()),Tt.setMode(I.LINES)):Tt.setMode(I.TRIANGLES);else if(z.isLine){let Oe=W.linewidth;Oe===void 0&&(Oe=1),Me.setLineWidth(Oe*G()),z.isLineSegments?Tt.setMode(I.LINES):z.isLineLoop?Tt.setMode(I.LINE_LOOP):Tt.setMode(I.LINE_STRIP)}else z.isPoints?Tt.setMode(I.POINTS):z.isSprite&&Tt.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ka("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))Tt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Oe=z._multiDrawStarts,gt=z._multiDrawCounts,ht=z._multiDrawCount,zn=xe?Y.get(xe).bytesPerElement:1,rs=v.get(W).currentProgram.getUniforms();for(let kn=0;kn<ht;kn++)rs.setValue(I,"_gl_DrawID",kn),Tt.render(Oe[kn]/zn,gt[kn])}else if(z.isInstancedMesh)Tt.renderInstances(it,Ut,z.count);else if(X.isInstancedBufferGeometry){const Oe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,gt=Math.min(X.instanceCount,Oe);Tt.renderInstances(it,Ut,gt)}else Tt.render(it,Ut)};function Xe(E,O,X){E.transparent===!0&&E.side===Hi&&E.forceSinglePass===!1?(E.side=Fn,E.needsUpdate=!0,St(E,O,X),E.side=yr,E.needsUpdate=!0,St(E,O,X),E.side=Hi):St(E,O,X)}this.compile=function(E,O,X=null){X===null&&(X=E),T=ae.get(X),T.init(O),A.push(T),X.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),E!==X&&E.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();const W=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const le=z.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const de=le[ge];Xe(de,X,z),W.add(de)}else Xe(le,X,z),W.add(le)}),T=A.pop(),W},this.compileAsync=function(E,O,X=null){const W=this.compile(E,O,X);return new Promise(z=>{function le(){if(W.forEach(function(ge){v.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){z(E);return}setTimeout(le,10)}Qe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Le=null;function qe(E){Le&&Le(E)}function Ot(){_t.stop()}function nt(){_t.start()}const _t=new pp;_t.setAnimationLoop(qe),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(E){Le=E,ce.setAnimationLoop(E),E===null?_t.stop():_t.start()},ce.addEventListener("sessionstart",Ot),ce.addEventListener("sessionend",nt),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const X=ce.enabled===!0&&ce.isPresenting===!0,W=D!==null&&(B===null||X)&&D.begin(x,B);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(O),O=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,O,B),T=ae.get(E,A.length),T.init(O),A.push(T),lt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Pe.setFromProjectionMatrix(lt,Ai,O.reversedDepth),Ve=this.localClippingEnabled,Se=Ee.init(this.clippingPlanes,Ve),S=re.get(E,w.length),S.init(),w.push(S),ce.enabled===!0&&ce.isPresenting===!0){const ge=x.xr.getDepthSensingMesh();ge!==null&&Vt(ge,O,-1/0,x.sortObjects)}Vt(E,O,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(We,$e),Ne=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ne&&oe.addToRenderList(S,E),this.info.render.frame++,Se===!0&&Ee.beginShadows();const z=T.state.shadowsArray;if(Ae.render(z,E,O),Se===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&D.hasRenderPass())===!1){const ge=S.opaque,de=S.transmissive;if(T.setupLights(),O.isArrayCamera){const xe=O.cameras;if(de.length>0)for(let De=0,Ge=xe.length;De<Ge;De++){const Fe=xe[De];yt(ge,de,E,Fe)}Ne&&oe.render(E);for(let De=0,Ge=xe.length;De<Ge;De++){const Fe=xe[De];Rt(S,E,Fe,Fe.viewport)}}else de.length>0&&yt(ge,de,E,O),Ne&&oe.render(E),Rt(S,E,O)}B!==null&&U===0&&(N.updateMultisampleRenderTarget(B),N.updateRenderTargetMipmap(B)),W&&D.end(x),E.isScene===!0&&E.onAfterRender(x,E,O),fe.resetDefaultState(),H=-1,V=null,A.pop(),A.length>0?(T=A[A.length-1],Se===!0&&Ee.setGlobalState(x.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function Vt(E,O,X,W){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Pe.intersectsSprite(E)){W&&ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(lt);const ge=se.update(E),de=E.material;de.visible&&S.push(E,ge,de,X,ze.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Pe.intersectsObject(E))){const ge=se.update(E),de=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ze.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ze.copy(ge.boundingSphere.center)),ze.applyMatrix4(E.matrixWorld).applyMatrix4(lt)),Array.isArray(de)){const xe=ge.groups;for(let De=0,Ge=xe.length;De<Ge;De++){const Fe=xe[De],it=de[Fe.materialIndex];it&&it.visible&&S.push(E,ge,it,X,ze.z,Fe)}}else de.visible&&S.push(E,ge,de,X,ze.z,null)}}const le=E.children;for(let ge=0,de=le.length;ge<de;ge++)Vt(le[ge],O,X,W)}function Rt(E,O,X,W){const{opaque:z,transmissive:le,transparent:ge}=E;T.setupLightsView(X),Se===!0&&Ee.setGlobalState(x.clippingPlanes,X),W&&Me.viewport(k.copy(W)),z.length>0&&ft(z,O,X),le.length>0&&ft(le,O,X),ge.length>0&&ft(ge,O,X),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function yt(E,O,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const it=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new Ri(1,1,{generateMipmaps:!0,type:it?Qi:li,minFilter:Gr,samples:ke.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const le=T.state.transmissionRenderTarget[W.id],ge=W.viewport||k;le.setSize(ge.z*x.transmissionResolutionScale,ge.w*x.transmissionResolutionScale);const de=x.getRenderTarget(),xe=x.getActiveCubeFace(),De=x.getActiveMipmapLevel();x.setRenderTarget(le),x.getClearColor(ee),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear(),Ne&&oe.render(X);const Ge=x.toneMapping;x.toneMapping=Ci;const Fe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),Se===!0&&Ee.setGlobalState(x.clippingPlanes,W),ft(E,X,W),N.updateMultisampleRenderTarget(le),N.updateRenderTargetMipmap(le),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Mt=0,Ut=O.length;Mt<Ut;Mt++){const Nt=O[Mt],{object:Tt,geometry:Oe,material:gt,group:ht}=Nt;if(gt.side===Hi&&Tt.layers.test(W.layers)){const zn=gt.side;gt.side=Fn,gt.needsUpdate=!0,wn(Tt,X,W,Oe,gt,ht),gt.side=zn,gt.needsUpdate=!0,it=!0}}it===!0&&(N.updateMultisampleRenderTarget(le),N.updateRenderTargetMipmap(le))}x.setRenderTarget(de,xe,De),x.setClearColor(ee,R),Fe!==void 0&&(W.viewport=Fe),x.toneMapping=Ge}function ft(E,O,X){const W=O.isScene===!0?O.overrideMaterial:null;for(let z=0,le=E.length;z<le;z++){const ge=E[z],{object:de,geometry:xe,group:De}=ge;let Ge=ge.material;Ge.allowOverride===!0&&W!==null&&(Ge=W),de.layers.test(X.layers)&&wn(de,O,X,xe,Ge,De)}}function wn(E,O,X,W,z,le){E.onBeforeRender(x,O,X,W,z,le),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,O,X,W,E,le),z.transparent===!0&&z.side===Hi&&z.forceSinglePass===!1?(z.side=Fn,z.needsUpdate=!0,x.renderBufferDirect(X,O,W,z,E,le),z.side=yr,z.needsUpdate=!0,x.renderBufferDirect(X,O,W,z,E,le),z.side=Hi):x.renderBufferDirect(X,O,W,z,E,le),E.onAfterRender(x,O,X,W,z,le)}function St(E,O,X){O.isScene!==!0&&(O=Ke);const W=v.get(E),z=T.state.lights,le=T.state.shadowsArray,ge=z.state.version,de=be.getParameters(E,z.state,le,O,X),xe=be.getProgramCacheKey(de);let De=W.programs;W.environment=E.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(E.isMeshStandardMaterial?j:Z).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",Ce),De=new Map,W.programs=De);let Ge=De.get(xe);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===ge)return Bn(E,de),Ge}else de.uniforms=be.getUniforms(E),E.onBeforeCompile(de,x),Ge=be.acquireProgram(de,xe),De.set(xe,Ge),W.uniforms=de.uniforms;const Fe=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=Ee.uniform),Bn(E,de),W.needsLights=Jt(E),W.lightsStateVersion=ge,W.needsLights&&(Fe.ambientLightColor.value=z.state.ambient,Fe.lightProbe.value=z.state.probe,Fe.directionalLights.value=z.state.directional,Fe.directionalLightShadows.value=z.state.directionalShadow,Fe.spotLights.value=z.state.spot,Fe.spotLightShadows.value=z.state.spotShadow,Fe.rectAreaLights.value=z.state.rectArea,Fe.ltc_1.value=z.state.rectAreaLTC1,Fe.ltc_2.value=z.state.rectAreaLTC2,Fe.pointLights.value=z.state.point,Fe.pointLightShadows.value=z.state.pointShadow,Fe.hemisphereLights.value=z.state.hemi,Fe.directionalShadowMap.value=z.state.directionalShadowMap,Fe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Fe.spotShadowMap.value=z.state.spotShadowMap,Fe.spotLightMatrix.value=z.state.spotLightMatrix,Fe.spotLightMap.value=z.state.spotLightMap,Fe.pointShadowMap.value=z.state.pointShadowMap,Fe.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Ge,W.uniformsList=null,Ge}function ln(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Bo.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Bn(E,O){const X=v.get(E);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function qt(E,O,X,W,z){O.isScene!==!0&&(O=Ke),N.resetTextureUnits();const le=O.fog,ge=W.isMeshStandardMaterial?O.environment:null,de=B===null?x.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Xs,xe=(W.isMeshStandardMaterial?j:Z).get(W.envMap||ge),De=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!X.morphAttributes.position,it=!!X.morphAttributes.normal,Mt=!!X.morphAttributes.color;let Ut=Ci;W.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ut=x.toneMapping);const Nt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Tt=Nt!==void 0?Nt.length:0,Oe=v.get(W),gt=T.state.lights;if(Se===!0&&(Ve===!0||E!==V)){const xn=E===V&&W.id===H;Ee.setState(W,E,xn)}let ht=!1;W.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==gt.state.version||Oe.outputColorSpace!==de||z.isBatchedMesh&&Oe.batching===!1||!z.isBatchedMesh&&Oe.batching===!0||z.isBatchedMesh&&Oe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Oe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Oe.instancing===!1||!z.isInstancedMesh&&Oe.instancing===!0||z.isSkinnedMesh&&Oe.skinning===!1||!z.isSkinnedMesh&&Oe.skinning===!0||z.isInstancedMesh&&Oe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Oe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Oe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Oe.instancingMorph===!1&&z.morphTexture!==null||Oe.envMap!==xe||W.fog===!0&&Oe.fog!==le||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ee.numPlanes||Oe.numIntersection!==Ee.numIntersection)||Oe.vertexAlphas!==De||Oe.vertexTangents!==Ge||Oe.morphTargets!==Fe||Oe.morphNormals!==it||Oe.morphColors!==Mt||Oe.toneMapping!==Ut||Oe.morphTargetsCount!==Tt)&&(ht=!0):(ht=!0,Oe.__version=W.version);let zn=Oe.currentProgram;ht===!0&&(zn=St(W,O,z));let rs=!1,kn=!1,js=!1;const wt=zn.getUniforms(),Cn=Oe.uniforms;if(Me.useProgram(zn.program)&&(rs=!0,kn=!0,js=!0),W.id!==H&&(H=W.id,kn=!0),rs||V!==E){Me.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),wt.setValue(I,"projectionMatrix",E.projectionMatrix),wt.setValue(I,"viewMatrix",E.matrixWorldInverse);const Rn=wt.map.cameraPosition;Rn!==void 0&&Rn.setValue(I,Te.setFromMatrixPosition(E.matrixWorld)),ke.logarithmicDepthBuffer&&wt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&wt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),V!==E&&(V=E,kn=!0,js=!0)}if(Oe.needsLights&&(gt.state.directionalShadowMap.length>0&&wt.setValue(I,"directionalShadowMap",gt.state.directionalShadowMap,N),gt.state.spotShadowMap.length>0&&wt.setValue(I,"spotShadowMap",gt.state.spotShadowMap,N),gt.state.pointShadowMap.length>0&&wt.setValue(I,"pointShadowMap",gt.state.pointShadowMap,N)),z.isSkinnedMesh){wt.setOptional(I,z,"bindMatrix"),wt.setOptional(I,z,"bindMatrixInverse");const xn=z.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),wt.setValue(I,"boneTexture",xn.boneTexture,N))}z.isBatchedMesh&&(wt.setOptional(I,z,"batchingTexture"),wt.setValue(I,"batchingTexture",z._matricesTexture,N),wt.setOptional(I,z,"batchingIdTexture"),wt.setValue(I,"batchingIdTexture",z._indirectTexture,N),wt.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&wt.setValue(I,"batchingColorTexture",z._colorsTexture,N));const ti=X.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&He.update(z,X,zn),(kn||Oe.receiveShadow!==z.receiveShadow)&&(Oe.receiveShadow=z.receiveShadow,wt.setValue(I,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Cn.envMap.value=xe,Cn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(Cn.envMapIntensity.value=O.environmentIntensity),Cn.dfgLUT!==void 0&&(Cn.dfgLUT.value=TM()),kn&&(wt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Oe.needsLights&&Yt(Cn,js),le&&W.fog===!0&&ye.refreshFogUniforms(Cn,le),ye.refreshMaterialUniforms(Cn,W,Be,Re,T.state.transmissionRenderTarget[E.id]),Bo.upload(I,ln(Oe),Cn,N)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Bo.upload(I,ln(Oe),Cn,N),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&wt.setValue(I,"center",z.center),wt.setValue(I,"modelViewMatrix",z.modelViewMatrix),wt.setValue(I,"normalMatrix",z.normalMatrix),wt.setValue(I,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const xn=W.uniformsGroups;for(let Rn=0,hl=xn.length;Rn<hl;Rn++){const Ar=xn[Rn];te.update(Ar,zn),te.bind(Ar,zn)}}return zn}function Yt(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Jt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(E,O,X){const W=v.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),v.get(E.texture).__webglTexture=O,v.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const X=v.get(E);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const Ni=I.createFramebuffer();this.setRenderTarget=function(E,O=0,X=0){B=E,P=O,U=X;let W=null,z=!1,le=!1;if(E){const de=v.get(E);if(de.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(I.FRAMEBUFFER,de.__webglFramebuffer),k.copy(E.viewport),F.copy(E.scissor),$=E.scissorTest,Me.viewport(k),Me.scissor(F),Me.setScissorTest($),H=-1;return}else if(de.__webglFramebuffer===void 0)N.setupRenderTarget(E);else if(de.__hasExternalTextures)N.rebindTextures(E,v.get(E.texture).__webglTexture,v.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ge=E.depthTexture;if(de.__boundDepthTexture!==Ge){if(Ge!==null&&v.has(Ge)&&(E.width!==Ge.image.width||E.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(E)}}const xe=E.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(le=!0);const De=v.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[O])?W=De[O][X]:W=De[O],z=!0):E.samples>0&&N.useMultisampledRTT(E)===!1?W=v.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?W=De[X]:W=De,k.copy(E.viewport),F.copy(E.scissor),$=E.scissorTest}else k.copy(K).multiplyScalar(Be).floor(),F.copy(J).multiplyScalar(Be).floor(),$=he;if(X!==0&&(W=Ni),Me.bindFramebuffer(I.FRAMEBUFFER,W)&&Me.drawBuffers(E,W),Me.viewport(k),Me.scissor(F),Me.setScissorTest($),z){const de=v.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,de.__webglTexture,X)}else if(le){const de=O;for(let xe=0;xe<E.textures.length;xe++){const De=v.get(E.textures[xe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+xe,De.__webglTexture,X,de)}}else if(E!==null&&X!==0){const de=v.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,de.__webglTexture,X)}H=-1},this.readRenderTargetPixels=function(E,O,X,W,z,le,ge,de=0){if(!(E&&E.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){Me.bindFramebuffer(I.FRAMEBUFFER,xe);try{const De=E.textures[de],Ge=De.format,Fe=De.type;if(!ke.textureFormatReadable(Ge)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Fe)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-W&&X>=0&&X<=E.height-z&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+de),I.readPixels(O,X,W,z,ie.convert(Ge),ie.convert(Fe),le))}finally{const De=B!==null?v.get(B).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,O,X,W,z,le,ge,de=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe)if(O>=0&&O<=E.width-W&&X>=0&&X<=E.height-z){Me.bindFramebuffer(I.FRAMEBUFFER,xe);const De=E.textures[de],Ge=De.format,Fe=De.type;if(!ke.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,it),I.bufferData(I.PIXEL_PACK_BUFFER,le.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+de),I.readPixels(O,X,W,z,ie.convert(Ge),ie.convert(Fe),0);const Mt=B!==null?v.get(B).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,Mt);const Ut=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await H_(I,Ut,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,it),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,le),I.deleteBuffer(it),I.deleteSync(Ut),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,X=0){const W=Math.pow(2,-X),z=Math.floor(E.image.width*W),le=Math.floor(E.image.height*W),ge=O!==null?O.x:0,de=O!==null?O.y:0;N.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,ge,de,z,le),Me.unbindTexture()};const is=I.createFramebuffer(),Qt=I.createFramebuffer();this.copyTextureToTexture=function(E,O,X=null,W=null,z=0,le=null){le===null&&(z!==0?(ka("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=z,z=0):le=0);let ge,de,xe,De,Ge,Fe,it,Mt,Ut;const Nt=E.isCompressedTexture?E.mipmaps[le]:E.image;if(X!==null)ge=X.max.x-X.min.x,de=X.max.y-X.min.y,xe=X.isBox3?X.max.z-X.min.z:1,De=X.min.x,Ge=X.min.y,Fe=X.isBox3?X.min.z:0;else{const ti=Math.pow(2,-z);ge=Math.floor(Nt.width*ti),de=Math.floor(Nt.height*ti),E.isDataArrayTexture?xe=Nt.depth:E.isData3DTexture?xe=Math.floor(Nt.depth*ti):xe=1,De=0,Ge=0,Fe=0}W!==null?(it=W.x,Mt=W.y,Ut=W.z):(it=0,Mt=0,Ut=0);const Tt=ie.convert(O.format),Oe=ie.convert(O.type);let gt;O.isData3DTexture?(N.setTexture3D(O,0),gt=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(N.setTexture2DArray(O,0),gt=I.TEXTURE_2D_ARRAY):(N.setTexture2D(O,0),gt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const ht=I.getParameter(I.UNPACK_ROW_LENGTH),zn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),rs=I.getParameter(I.UNPACK_SKIP_PIXELS),kn=I.getParameter(I.UNPACK_SKIP_ROWS),js=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Nt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Nt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,De),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ge),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Fe);const wt=E.isDataArrayTexture||E.isData3DTexture,Cn=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const ti=v.get(E),xn=v.get(O),Rn=v.get(ti.__renderTarget),hl=v.get(xn.__renderTarget);Me.bindFramebuffer(I.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,hl.__webglFramebuffer);for(let Ar=0;Ar<xe;Ar++)wt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(E).__webglTexture,z,Fe+Ar),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(O).__webglTexture,le,Ut+Ar)),I.blitFramebuffer(De,Ge,ge,de,it,Mt,ge,de,I.DEPTH_BUFFER_BIT,I.NEAREST);Me.bindFramebuffer(I.READ_FRAMEBUFFER,null),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||v.has(E)){const ti=v.get(E),xn=v.get(O);Me.bindFramebuffer(I.READ_FRAMEBUFFER,is),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,Qt);for(let Rn=0;Rn<xe;Rn++)wt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ti.__webglTexture,z,Fe+Rn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ti.__webglTexture,z),Cn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xn.__webglTexture,le,Ut+Rn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xn.__webglTexture,le),z!==0?I.blitFramebuffer(De,Ge,ge,de,it,Mt,ge,de,I.COLOR_BUFFER_BIT,I.NEAREST):Cn?I.copyTexSubImage3D(gt,le,it,Mt,Ut+Rn,De,Ge,ge,de):I.copyTexSubImage2D(gt,le,it,Mt,De,Ge,ge,de);Me.bindFramebuffer(I.READ_FRAMEBUFFER,null),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Cn?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(gt,le,it,Mt,Ut,ge,de,xe,Tt,Oe,Nt.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(gt,le,it,Mt,Ut,ge,de,xe,Tt,Nt.data):I.texSubImage3D(gt,le,it,Mt,Ut,ge,de,xe,Tt,Oe,Nt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,le,it,Mt,ge,de,Tt,Oe,Nt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,le,it,Mt,Nt.width,Nt.height,Tt,Nt.data):I.texSubImage2D(I.TEXTURE_2D,le,it,Mt,ge,de,Tt,Oe,Nt);I.pixelStorei(I.UNPACK_ROW_LENGTH,ht),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,zn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,rs),I.pixelStorei(I.UNPACK_SKIP_ROWS,kn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,js),le===0&&O.generateMipmaps&&I.generateMipmap(gt),Me.unbindTexture()},this.initRenderTarget=function(E){v.get(E).__webglFramebuffer===void 0&&N.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?N.setTextureCube(E,0):E.isData3DTexture?N.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?N.setTexture2DArray(E,0):N.setTexture2D(E,0),Me.unbindTexture()},this.resetState=function(){P=0,U=0,B=null,Me.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}function AM(){function r(){return window.innerWidth<768}function e(ee){return ee.replace("github.com","cdn.jsdelivr.net/gh").replace("/blob/","@")}let t,n;r()?(t=e("https://github.com/illysito/shaders/blob/4093d33505b9cb53ce22261ed3988872888160d6/static/derivaWebBGMob.webp"),n=e("https://github.com/illysito/shaders/blob/4093d33505b9cb53ce22261ed3988872888160d6/static/PerlinNoiseMob.webp")):(t=e("https://github.com/illysito/shaders/blob/299c70becbde653465762daaa2b91d0799fe0960/static/derivaWebBG.webp"),n=e("https://github.com/illysito/shaders/blob/6becd45f875c0fec1fc94ca2f6d8218e60293d7d/static/PerlinNoise.webp"));let i,s;r()?(i=e("https://github.com/illysito/shaders/blob/ca314c152e4a738c9492ab6954d1ceb98528570b/static/DerivaMainTextureLuisMobile.jpg"),s=e("https://github.com/illysito/shaders/blob/ca314c152e4a738c9492ab6954d1ceb98528570b/static/DerivaMainNoiseMapLuisMobile.jpg")):(i=e("https://github.com/illysito/shaders/blob/58bafaa70b5b2f17373a59b02927bb24d5432270/static/DerivaMainTextureLuis.jpg"),s=e("https://github.com/illysito/shaders/blob/017715a2929951855302760deb493a4c41dce542/static/DerivaMainNoiseMapLuis.jpg"));let a,o;r()?(a=e("https://github.com/illysito/shaders/blob/ea274274000130190655b1c43173fe28fd503712/static/DerivaMainTextureBassMobile.jpg"),o=e("https://github.com/illysito/shaders/blob/ea274274000130190655b1c43173fe28fd503712/static/DerivaMainNoiseMapMobile.jpg")):(a=e("https://github.com/illysito/shaders/blob/3058a4cf5a49ad2bbef6840fa5a0c0b16aeb13ab/static/DerivaMainTextureBass.jpg"),o=e("https://github.com/illysito/shaders/blob/07b9024784cc5447749e23cbc6742efcc7ff92d9/static/DerivaMainNoiseMap.jpg"));const l=document.querySelector("#webgl"),c=screen.height;l.style.height=`${c}px`;const u=new mg;u.background=new vt(16776182);const f=new wg,d=f.load(a),h=f.load(i),g=f.load(o),_=f.load(s),m=f.load(n),p=f.load(t),y=60,b={width:l.clientWidth,height:l.clientHeight};let S=b.width/b.height;const T=new si(y,S,.1,100);T.position.set(0,0,3),u.add(T);let w;new ResizeObserver(()=>{clearTimeout(w),w=setTimeout(()=>{const ee=l.clientWidth,R=l.clientHeight;b.width=ee,b.height=R,T.aspect=ee/R,T.updateProjectionMatrix(),V.setSize(ee,R,!1),V.setPixelRatio(Math.min(window.devicePixelRatio,2))},10)}).observe(l);let D=0,x=0;r()?x=1200:x=600;let M=0,P;r()?P=new Ys(3,4,1,1):P=new Ys(16,9,1,1);const U=new xi({uniforms:{uTexture:{value:d},uTexture2:{value:h},uDistortionMap:{value:g},uDistortionMap2:{value:_},uPerlin:{value:m},uBG:{value:p},uOffset:{value:D},uSw:{value:M},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform sampler2D uTexture2;
    uniform sampler2D uDistortionMap;
    uniform sampler2D uDistortionMap2;
    uniform sampler2D uPerlin;
    uniform sampler2D uBG;
    uniform vec2 uMouse;
    uniform float uOffset;
    uniform float uTime;
    uniform float uSw;

    // FBM

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) +
            (c - a) * u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
    }

    // fractal Brownian motion (smooth turbulence)
    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.8;
      float frequency = 0.0;
      for (int i = 0; i < 5; i++) {
        value += amplitude * noise(p);
        p *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }

    void main() {

      // UV

      vec2 uv = vUv;

      // BLOCK UVS

      // float blocks = 400.0;
      // float blockUvX = floor(uv.x * blocks) / blocks;
      // float blockUvY = floor(uv.y * blocks) / blocks;
      // vec2 blocksUv = vec2(blockUvX, blockUvY);

      // TEXTURES

      vec4 perlinMap = texture2D(uPerlin, uv);
      // vec4 perlinMap = texture2D(uPerlin, blocksUv);
      vec4 background = texture2D(uBG, uv);

      // TEXTURE NOISE

      float noise = fbm(uv * -0.2 * sin(0.1 * uTime));
      // noise *= 2.0 * distMap;

      vec2 noiseUv = vec2(
        uv.x  +  0.002 * sin(0.4 * uTime * noise  + uTime)  +  0.2 * sin(uTime) * perlinMap.r * uOffset,
        // uv.x,
        uv.y  +  0.004 * cos(0.2 * uTime * noise)  +  2.0 * perlinMap.r * uOffset 
        // uv.y + perlinMap.r * uOffset
      );
      
      vec4 distortionMap = texture2D(uDistortionMap, noiseUv);
      vec4 distortionMap2 = texture2D(uDistortionMap2, noiseUv);
      vec4 distortionMapFinal = mix(distortionMap, distortionMap2, uSw);
      float distMap = distortionMapFinal.r;

      // AURA NOISE

      float auraNoise = fbm(uv * -3. * cos(0.1 * uTime));
      auraNoise *= 1.2 * distMap;

      // vec2 auraNoiseUv = 0.2 * vec2(
      //   0.5 + 0.5 * sin(uTime * 0.025 + auraNoise * 0.5),
      //   0.5 + 0.8 * cos(uTime * 0.015 + auraNoise)
      // );

      vec2 auraNoiseUv = 0.2 * vec2(
        uv.x + 0.5 * auraNoise,
        0.8 * auraNoise + perlinMap.r * uOffset
      );

      vec4 auraTex1 = texture2D(uTexture, auraNoiseUv);
      vec4 auraTex2 = texture2D(uTexture2, auraNoiseUv);
      vec4 auraTex = mix(auraTex1, auraTex2, uSw);

      float glowIntensity = 1.6;
      vec4 glowColor = vec4(auraTex.rgb * auraNoise * glowIntensity, distMap * uOffset);
      float pulse = 0.5 + 0.5 * sin(uTime * 1.2 + auraNoise * 4.0);
      glowColor *= pulse;

      vec4 tex1 = texture2D(uTexture, noiseUv);
      vec4 tex2 = texture2D(uTexture2, noiseUv);
      vec4 tex = mix(tex1, tex2, uSw);
      // vec3 color = tex.rgb;
      vec4 color = vec4(tex.rgb, 0.0 * uOffset);

      // // ADDITIVE BLEND
      // vec3 finalColor = color + glowColor;

      // SCREEN BLEND
      // vec3 finalColor = 1.0 - (1.0 - color) * (1.0 - vec3(0.2 * glowColor.r, 0.8 * glowColor.g, 0.2 * glowColor.b));
      vec4 finalColor = 1.0 - (1.0 - color) * (1.0 - vec4(0.2 * glowColor.r, 0.8 * glowColor.g, 0.2 * glowColor.b, 1.0));
      finalColor *= background;

      // FINAL BLEND
      float alphaOffset = smoothstep(0.6, 1.0, uOffset);
      // vec3 finalComp = mix(finalColor, background.rgb, alphaOffset);
      vec4 finalComp = mix(finalColor, background, alphaOffset);

      // gl_FragColor = vec4(finalComp, 1.0);
      gl_FragColor = finalComp;
      // gl_FragColor = vec4(finalColor, 1.0);
    }
  `}),B=new Ui(P,U);let H=.4;B.position.y=.2,B.position.x=-.15,r()&&(H=.86,B.position.y=.44,B.position.x=0),B.scale.set(H,H,H),u.add(B);const V=new bM({canvas:l});V.setSize(b.width,b.height,!1),V.setPixelRatio(Math.min(window.devicePixelRatio,2));let k=!1;window.addEventListener("scroll",()=>{const ee=window.scrollY,R=document.documentElement.scrollHeight-window.innerHeight;ee>800&&(k=!0);let ne=Ie.utils.mapRange(0,x,0,1,ee);ne=Math.min(ne,1);let Re=Ie.utils.mapRange(R-x,R,1,0,ee);Re=Math.max(Math.min(Re,1),0),D=ee<x?ne:Re,ee>x?M=1:M=0});const F=new Rg;function $(){const ee=F.getElapsedTime();U.uniforms.uTime.value=ee,U.uniforms.uOffset.value=D,U.uniforms.uSw.value=M,r()&&k?B.position.y=.24:r()&&!k&&(B.position.y=.12),requestAnimationFrame($),V.render(u,T)}$()}function wM(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function CM(r,e,t){return e&&wM(r.prototype,e),r}var an,zo,$n,mr,_r,Is,vp,Or,Sa,Sp,qi,mi,Mp,Ep=function(){return an||typeof window<"u"&&(an=window.gsap)&&an.registerPlugin&&an},yp=1,ws=[],st=[],Di=[],Ma=Date.now,pu=function(e,t){return t},RM=function(){var e=Sa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,st),i.push.apply(i,Di),st=n,Di=i,pu=function(a,o){return t[a](o)}},vr=function(e,t){return~Di.indexOf(e)&&Di[Di.indexOf(e)+1][t]},Ea=function(e){return!!~Sp.indexOf(e)},Sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},vn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},xo="scrollLeft",vo="scrollTop",mu=function(){return qi&&qi.isPressed||st.cache++},el=function(e,t){var n=function i(s){if(s||s===0){yp&&($n.history.scrollRestoration="manual");var a=qi&&qi.isPressed;s=i.v=Math.round(s)||(qi&&qi.iOS?1:0),e(s),i.cacheID=st.cache,a&&pu("ss",s)}else(t||st.cache!==i.cacheID||pu("ref"))&&(i.cacheID=st.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},An={s:xo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:el(function(r){return arguments.length?$n.scrollTo(r,Kt.sc()):$n.pageXOffset||mr[xo]||_r[xo]||Is[xo]||0})},Kt={s:vo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:An,sc:el(function(r){return arguments.length?$n.scrollTo(An.sc(),r):$n.pageYOffset||mr[vo]||_r[vo]||Is[vo]||0})},Dn=function(e,t){return(t&&t._ctx&&t._ctx.selector||an.utils.toArray)(e)[0]||(typeof e=="string"&&an.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},PM=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Tr=function(e,t){var n=t.s,i=t.sc;Ea(e)&&(e=mr.scrollingElement||_r);var s=st.indexOf(e),a=i===Kt.sc?1:2;!~s&&(s=st.push(e)-1),st[s+a]||Sn(e,"scroll",mu);var o=st[s+a],l=o||(st[s+a]=el(vr(e,n),!0)||(Ea(e)?i:el(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=an.getProperty(e,"scrollBehavior")==="smooth"),l},_u=function(e,t,n){var i=e,s=e,a=Ma(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=Ma();_||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},d=function(g){var _=o,m=s,p=Ma();return(g||g===0)&&g!==i&&u(g),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:f,getVelocity:d}},aa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Eh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Tp=function(){Sa=an.core.globals().ScrollTrigger,Sa&&Sa.core&&RM()},bp=function(e){return an=e||Ep(),!zo&&an&&typeof document<"u"&&document.body&&($n=window,mr=document,_r=mr.documentElement,Is=mr.body,Sp=[$n,mr,_r,Is],an.utils.clamp,Mp=an.core.context||function(){},Or="onpointerenter"in Is?"pointer":"mouse",vp=kt.isTouch=$n.matchMedia&&$n.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in $n||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,mi=kt.eventTypes=("ontouchstart"in _r?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in _r?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return yp=0},500),Tp(),zo=1),zo};An.op=Kt;st.cache=0;var kt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){zo||bp(an)||console.warn("Please gsap.registerPlugin(Observer)"),Sa||Tp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,d=n.onStopDelay,h=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,b=n.onPress,S=n.onRelease,T=n.onRight,w=n.onLeft,A=n.onUp,D=n.onDown,x=n.onChangeX,M=n.onChangeY,P=n.onChange,U=n.onToggleX,B=n.onToggleY,H=n.onHover,V=n.onHoverEnd,k=n.onMove,F=n.ignoreCheck,$=n.isNormalizer,ee=n.onGestureStart,R=n.onGestureEnd,ne=n.onWheel,Re=n.onEnable,Be=n.onDisable,We=n.onClick,$e=n.scrollSpeed,K=n.capture,J=n.allowClicks,he=n.lockAxis,Pe=n.onLockAxis;this.target=o=Dn(o)||_r,this.vars=n,h&&(h=an.utils.toArray(h)),i=i||1e-9,s=s||0,g=g||1,$e=$e||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat($n.getComputedStyle(Is).lineHeight)||22);var Se,Ve,lt,Te,ze,Ke,Ne,G=this,I=0,pt=0,Qe=n.passive||!u&&n.passive!==!1,ke=Tr(o,An),Me=Tr(o,Kt),C=ke(),v=Me(),N=~a.indexOf("touch")&&!~a.indexOf("pointer")&&mi[0]==="pointerdown",Z=Ea(o),j=o.ownerDocument||mr,Y=[0,0,0],ve=[0,0,0],se=0,be=function(){return se=Ma()},ye=function(Ce,Ze){return(G.event=Ce)&&h&&PM(Ce.target,h)||Ze&&N&&Ce.pointerType!=="touch"||F&&F(Ce,Ze)},re=function(){G._vx.reset(),G._vy.reset(),Ve.pause(),f&&f(G)},ae=function(){var Ce=G.deltaX=Eh(Y),Ze=G.deltaY=Eh(ve),pe=Math.abs(Ce)>=i,Xe=Math.abs(Ze)>=i;P&&(pe||Xe)&&P(G,Ce,Ze,Y,ve),pe&&(T&&G.deltaX>0&&T(G),w&&G.deltaX<0&&w(G),x&&x(G),U&&G.deltaX<0!=I<0&&U(G),I=G.deltaX,Y[0]=Y[1]=Y[2]=0),Xe&&(D&&G.deltaY>0&&D(G),A&&G.deltaY<0&&A(G),M&&M(G),B&&G.deltaY<0!=pt<0&&B(G),pt=G.deltaY,ve[0]=ve[1]=ve[2]=0),(Te||lt)&&(k&&k(G),lt&&(m&&lt===1&&m(G),y&&y(G),lt=0),Te=!1),Ke&&!(Ke=!1)&&Pe&&Pe(G),ze&&(ne(G),ze=!1),Se=0},Ee=function(Ce,Ze,pe){Y[pe]+=Ce,ve[pe]+=Ze,G._vx.update(Ce),G._vy.update(Ze),c?Se||(Se=requestAnimationFrame(ae)):ae()},Ae=function(Ce,Ze){he&&!Ne&&(G.axis=Ne=Math.abs(Ce)>Math.abs(Ze)?"x":"y",Ke=!0),Ne!=="y"&&(Y[2]+=Ce,G._vx.update(Ce,!0)),Ne!=="x"&&(ve[2]+=Ze,G._vy.update(Ze,!0)),c?Se||(Se=requestAnimationFrame(ae)):ae()},oe=function(Ce){if(!ye(Ce,1)){Ce=aa(Ce,u);var Ze=Ce.clientX,pe=Ce.clientY,Xe=Ze-G.x,Le=pe-G.y,qe=G.isDragging;G.x=Ze,G.y=pe,(qe||(Xe||Le)&&(Math.abs(G.startX-Ze)>=s||Math.abs(G.startY-pe)>=s))&&(lt||(lt=qe?2:1),qe||(G.isDragging=!0),Ae(Xe,Le))}},He=G.onPress=function(_e){ye(_e,1)||_e&&_e.button||(G.axis=Ne=null,Ve.pause(),G.isPressed=!0,_e=aa(_e),I=pt=0,G.startX=G.x=_e.clientX,G.startY=G.y=_e.clientY,G._vx.reset(),G._vy.reset(),Sn($?o:j,mi[1],oe,Qe,!0),G.deltaX=G.deltaY=0,b&&b(G))},L=G.onRelease=function(_e){if(!ye(_e,1)){vn($?o:j,mi[1],oe,!0);var Ce=!isNaN(G.y-G.startY),Ze=G.isDragging,pe=Ze&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Xe=aa(_e);!pe&&Ce&&(G._vx.reset(),G._vy.reset(),u&&J&&an.delayedCall(.08,function(){if(Ma()-se>300&&!_e.defaultPrevented){if(_e.target.click)_e.target.click();else if(j.createEvent){var Le=j.createEvent("MouseEvents");Le.initMouseEvent("click",!0,!0,$n,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),_e.target.dispatchEvent(Le)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,f&&Ze&&!$&&Ve.restart(!0),lt&&ae(),p&&Ze&&p(G),S&&S(G,pe)}},ue=function(Ce){return Ce.touches&&Ce.touches.length>1&&(G.isGesturing=!0)&&ee(Ce,G.isDragging)},ie=function(){return(G.isGesturing=!1)||R(G)},fe=function(Ce){if(!ye(Ce)){var Ze=ke(),pe=Me();Ee((Ze-C)*$e,(pe-v)*$e,1),C=Ze,v=pe,f&&Ve.restart(!0)}},te=function(Ce){if(!ye(Ce)){Ce=aa(Ce,u),ne&&(ze=!0);var Ze=(Ce.deltaMode===1?l:Ce.deltaMode===2?$n.innerHeight:1)*g;Ee(Ce.deltaX*Ze,Ce.deltaY*Ze,0),f&&!$&&Ve.restart(!0)}},Q=function(Ce){if(!ye(Ce)){var Ze=Ce.clientX,pe=Ce.clientY,Xe=Ze-G.x,Le=pe-G.y;G.x=Ze,G.y=pe,Te=!0,f&&Ve.restart(!0),(Xe||Le)&&Ae(Xe,Le)}},ce=function(Ce){G.event=Ce,H(G)},Ue=function(Ce){G.event=Ce,V(G)},ut=function(Ce){return ye(Ce)||aa(Ce,u)&&We(G)};Ve=G._dc=an.delayedCall(d||.25,re).pause(),G.deltaX=G.deltaY=0,G._vx=_u(0,50,!0),G._vy=_u(0,50,!0),G.scrollX=ke,G.scrollY=Me,G.isDragging=G.isGesturing=G.isPressed=!1,Mp(this),G.enable=function(_e){return G.isEnabled||(Sn(Z?j:o,"scroll",mu),a.indexOf("scroll")>=0&&Sn(Z?j:o,"scroll",fe,Qe,K),a.indexOf("wheel")>=0&&Sn(o,"wheel",te,Qe,K),(a.indexOf("touch")>=0&&vp||a.indexOf("pointer")>=0)&&(Sn(o,mi[0],He,Qe,K),Sn(j,mi[2],L),Sn(j,mi[3],L),J&&Sn(o,"click",be,!0,!0),We&&Sn(o,"click",ut),ee&&Sn(j,"gesturestart",ue),R&&Sn(j,"gestureend",ie),H&&Sn(o,Or+"enter",ce),V&&Sn(o,Or+"leave",Ue),k&&Sn(o,Or+"move",Q)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=Te=lt=!1,G._vx.reset(),G._vy.reset(),C=ke(),v=Me(),_e&&_e.type&&He(_e),Re&&Re(G)),G},G.disable=function(){G.isEnabled&&(ws.filter(function(_e){return _e!==G&&Ea(_e.target)}).length||vn(Z?j:o,"scroll",mu),G.isPressed&&(G._vx.reset(),G._vy.reset(),vn($?o:j,mi[1],oe,!0)),vn(Z?j:o,"scroll",fe,K),vn(o,"wheel",te,K),vn(o,mi[0],He,K),vn(j,mi[2],L),vn(j,mi[3],L),vn(o,"click",be,!0),vn(o,"click",ut),vn(j,"gesturestart",ue),vn(j,"gestureend",ie),vn(o,Or+"enter",ce),vn(o,Or+"leave",Ue),vn(o,Or+"move",Q),G.isEnabled=G.isPressed=G.isDragging=!1,Be&&Be(G))},G.kill=G.revert=function(){G.disable();var _e=ws.indexOf(G);_e>=0&&ws.splice(_e,1),qi===G&&(qi=0)},ws.push(G),$&&Ea(o)&&(qi=G),G.enable(_)},CM(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();kt.version="3.14.2";kt.create=function(r){return new kt(r)};kt.register=bp;kt.getAll=function(){return ws.slice()};kt.getById=function(r){return ws.filter(function(e){return e.vars.id===r})[0]};Ep()&&an.registerPlugin(kt);var we,ys,rt,Ct,qn,mt,ef,tl,Ga,ya,ha,So,fn,fl,gu,yn,yh,Th,Ts,Ap,Ql,wp,En,xu,Cp,Rp,cr,vu,tf,Us,nf,Ta,Su,ec,Mo=1,hn=Date.now,tc=hn(),fi=0,da=0,bh=function(e,t,n){var i=Wn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Ah=function(e,t){return t&&(!Wn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},DM=function r(){return da&&requestAnimationFrame(r)},wh=function(){return fl=1},Ch=function(){return fl=0},Mi=function(e){return e},pa=function(e){return Math.round(e*1e5)/1e5||0},Pp=function(){return typeof window<"u"},Dp=function(){return we||Pp()&&(we=window.gsap)&&we.registerPlugin&&we},Qr=function(e){return!!~ef.indexOf(e)},Lp=function(e){return(e==="Height"?nf:rt["inner"+e])||qn["client"+e]||mt["client"+e]},Ip=function(e){return vr(e,"getBoundingClientRect")||(Qr(e)?function(){return Wo.width=rt.innerWidth,Wo.height=nf,Wo}:function(){return Wi(e)})},LM=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=vr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Lp(s):e["client"+s])||0}},IM=function(e,t){return!t||~Di.indexOf(e)?Ip(e):function(){return Wo}},wi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=vr(e,n))?a()-Ip(e)()[s]:Qr(e)?(qn[n]||mt[n])-Lp(i):e[n]-e["offset"+i])},Eo=function(e,t){for(var n=0;n<Ts.length;n+=3)(!t||~t.indexOf(Ts[n+1]))&&e(Ts[n],Ts[n+1],Ts[n+2])},Wn=function(e){return typeof e=="string"},pn=function(e){return typeof e=="function"},ma=function(e){return typeof e=="number"},Br=function(e){return typeof e=="object"},oa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},nc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ms=Math.abs,Up="left",Np="top",rf="right",sf="bottom",Kr="width",Zr="height",ba="Right",Aa="Left",wa="Top",Ca="Bottom",Ht="padding",ai="margin",$s="Width",af="Height",$t="px",oi=function(e){return rt.getComputedStyle(e)},UM=function(e){var t=oi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Rh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Wi=function(e,t){var n=t&&oi(e)[gu]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},nl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Fp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},NM=function(e){return function(t){return we.utils.snap(Fp(e),t)}},of=function(e){var t=we.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},FM=function(e){return function(t,n){return of(Fp(e))(t,n.direction)}},yo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},nn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},tn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},To=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Ph={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},bo={toggleActions:"play",anticipatePin:0},il={top:0,left:0,center:.5,bottom:1,right:1},ko=function(e,t){if(Wn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in il?il[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ao=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,g=Ct.createElement("div"),_=Qr(n)||vr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?mt:n,y=e.indexOf("start")!==-1,b=y?c:u,S="border-color:"+b+";font-size:"+f+";color:"+b+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(i===Kt?rf:sf)+":"+(a+parseFloat(d))+"px;"),o&&(S+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Vo(g,0,i,y),g},Vo=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+$s]=1,s["border"+o+$s]=0,s[n.p]=t+"px",we.set(e,s)},et=[],Mu={},Ha,Dh=function(){return hn()-fi>34&&(Ha||(Ha=requestAnimationFrame(Zi)))},Es=function(){(!En||!En.isPressed||En.startX>mt.clientWidth)&&(st.cache++,En?Ha||(Ha=requestAnimationFrame(Zi)):Zi(),fi||ts("scrollStart"),fi=hn())},ic=function(){Rp=rt.innerWidth,Cp=rt.innerHeight},_a=function(e){st.cache++,(e===!0||!fn&&!wp&&!Ct.fullscreenElement&&!Ct.webkitFullscreenElement&&(!xu||Rp!==rt.innerWidth||Math.abs(rt.innerHeight-Cp)>rt.innerHeight*.25))&&tl.restart(!0)},es={},OM=[],Op=function r(){return tn(tt,"scrollEnd",r)||Wr(!0)},ts=function(e){return es[e]&&es[e].map(function(t){return t()})||OM},Hn=[],Bp=function(e){for(var t=0;t<Hn.length;t+=5)(!e||Hn[t+4]&&Hn[t+4].query===e)&&(Hn[t].style.cssText=Hn[t+1],Hn[t].getBBox&&Hn[t].setAttribute("transform",Hn[t+2]||""),Hn[t+3].uncache=1)},zp=function(){return st.forEach(function(e){return pn(e)&&++e.cacheID&&(e.rec=e())})},lf=function(e,t){var n;for(yn=0;yn<et.length;yn++)n=et[yn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ta=!0,t&&Bp(t),t||ts("revert")},kp=function(e,t){st.cache++,(t||!Tn)&&st.forEach(function(n){return pn(n)&&n.cacheID++&&(n.rec=0)}),Wn(e)&&(rt.history.scrollRestoration=tf=e)},Tn,jr=0,Lh,BM=function(){if(Lh!==jr){var e=Lh=jr;requestAnimationFrame(function(){return e===jr&&Wr(!0)})}},Vp=function(){mt.appendChild(Us),nf=!En&&Us.offsetHeight||rt.innerHeight,mt.removeChild(Us)},Ih=function(e){return Ga(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Wr=function(e,t){if(qn=Ct.documentElement,mt=Ct.body,ef=[rt,Ct,qn,mt],fi&&!e&&!Ta){nn(tt,"scrollEnd",Op);return}Vp(),Tn=tt.isRefreshing=!0,Ta||zp();var n=ts("refreshInit");Ap&&tt.sort(),t||lf(),st.forEach(function(i){pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),Ta=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Su=1,Ih(!0),et.forEach(function(i){var s=wi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Ih(!1),Su=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),st.forEach(function(i){pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),kp(tf,1),tl.pause(),jr++,Tn=2,Zi(2),et.forEach(function(i){return pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Tn=tt.isRefreshing=!1,ts("refresh")},Eu=0,Go=1,Ra,Zi=function(e){if(e===2||!Tn&&!Ta){tt.isUpdating=!0,Ra&&Ra.update(0);var t=et.length,n=hn(),i=n-tc>=50,s=t&&et[0].scroll();if(Go=Eu>s?-1:1,Tn||(Eu=s),i&&(fi&&!fl&&n-fi>200&&(fi=0,ts("scrollEnd")),ha=tc,tc=n),Go<0){for(yn=t;yn-- >0;)et[yn]&&et[yn].update(0,i);Go=1}else for(yn=0;yn<t;yn++)et[yn]&&et[yn].update(0,i);tt.isUpdating=!1}Ha=0},yu=[Up,Np,sf,rf,ai+Ca,ai+ba,ai+wa,ai+Aa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ho=yu.concat([Kr,Zr,"boxSizing","max"+$s,"max"+af,"position",ai,Ht,Ht+wa,Ht+ba,Ht+Ca,Ht+Aa]),zM=function(e,t,n){Ns(n);var i=e._gsap;if(i.spacerIsNative)Ns(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},rc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=yu.length,a=t.style,o=e.style,l;s--;)l=yu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[sf]=o[rf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Kr]=nl(e,An)+$t,a[Zr]=nl(e,Kt)+$t,a[Ht]=o[ai]=o[Np]=o[Up]="0",Ns(i),o[Kr]=o["max"+$s]=n[Kr],o[Zr]=o["max"+af]=n[Zr],o[Ht]=n[Ht],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},kM=/([A-Z])/g,Ns=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(kM,"-$1").toLowerCase())}},wo=function(e){for(var t=Ho.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ho[s],n[Ho[s]]);return i.t=e,i},VM=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Wo={left:0,top:0},Uh=function(e,t,n,i,s,a,o,l,c,u,f,d,h,g){pn(e)&&(e=e(l)),Wn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?ko("0"+e.substr(3),n):0));var _=h?h.time():0,m,p,y;if(h&&h.seek(0),isNaN(e)||(e=+e),ma(e))h&&(e=we.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),o&&Vo(o,n,i,!0);else{pn(t)&&(t=t(l));var b=(e||"0").split(" "),S,T,w,A;y=Dn(t,l)||mt,S=Wi(y)||{},(!S||!S.left&&!S.top)&&oi(y).display==="none"&&(A=y.style.display,y.style.display="block",S=Wi(y),A?y.style.display=A:y.style.removeProperty("display")),T=ko(b[0],S[i.d]),w=ko(b[1]||"0",n),e=S[i.p]-c[i.p]-u+T+s-w,o&&Vo(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var D=e+n,x=a._isStart;m="scroll"+i.d2,Vo(a,D,i,x&&D>20||!x&&(f?Math.max(mt[m],qn[m]):a.parentNode[m])<=D+1),f&&(c=Wi(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+$t))}return h&&y&&(m=Wi(y),h.seek(d),p=Wi(y),h._caScrollDist=m[i.p]-p[i.p],e=e/h._caScrollDist*d),h&&h.seek(_),h?e:Math.round(e)},GM=/(webkit|moz|length|cssText|inset)/i,Nh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===mt){e._stOrig=s.cssText,o=oi(e);for(a in o)!+a&&!GM.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},Gp=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Co=function(e,t,n){var i={};i[t.p]="+="+n,we.set(e,i)},Fh=function(e,t){var n=Tr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,f){var d=a.tween,h=l.onComplete,g={};c=c||n();var _=Gp(n,c,function(){d.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,d&&d.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){st.cache++,a.tween&&Zi()},l.onComplete=function(){a.tween=0,h&&h.call(d)},d=a.tween=we.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},nn(e,"wheel",n.wheelHandler),tt.isTouch&&nn(e,"touchmove",n.wheelHandler),s},tt=(function(){function r(t,n){ys||r.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),vu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!da){this.update=this.refresh=this.kill=Mi;return}n=Rh(Wn(n)||ma(n)||n.nodeType?{trigger:n}:n,bo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,b=s.once,S=s.snap,T=s.pinReparent,w=s.pinSpacer,A=s.containerAnimation,D=s.fastScrollEnd,x=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?An:Kt,P=!f&&f!==0,U=Dn(n.scroller||rt),B=we.core.getCache(U),H=Qr(U),V=("pinType"in n?n.pinType:vr(U,"pinType")||H&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=P&&n.toggleActions.split(" "),$="markers"in n?n.markers:bo.markers,ee=H?0:parseFloat(oi(U)["border"+M.p2+$s])||0,R=this,ne=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Re=LM(U,H,M),Be=IM(U,H),We=0,$e=0,K=0,J=Tr(U,M),he,Pe,Se,Ve,lt,Te,ze,Ke,Ne,G,I,pt,Qe,ke,Me,C,v,N,Z,j,Y,ve,se,be,ye,re,ae,Ee,Ae,oe,He,L,ue,ie,fe,te,Q,ce,Ue;if(R._startClamp=R._endClamp=!1,R._dir=M,m*=45,R.scroller=U,R.scroll=A?A.time.bind(A):J,Ve=J(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Ap=1,n.refreshPriority===-9999&&(Ra=R)),B.tweenScroll=B.tweenScroll||{top:Fh(U,Kt),left:Fh(U,An)},R.tweenTo=he=B.tweenScroll[M.p],R.scrubDuration=function(pe){ue=ma(pe)&&pe,ue?L?L.duration(pe):L=we.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ue,paused:!0,onComplete:function(){return p&&p(R)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),oe=0,l||(l=i.vars.id)),S&&((!Br(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in mt.style&&we.set(H?[mt,qn]:U,{scrollBehavior:"auto"}),st.forEach(function(pe){return pn(pe)&&pe.target===(H?Ct.scrollingElement||qn:U)&&(pe.smooth=!1)}),Se=pn(S.snapTo)?S.snapTo:S.snapTo==="labels"?NM(i):S.snapTo==="labelsDirectional"?FM(i):S.directional!==!1?function(pe,Xe){return of(S.snapTo)(pe,hn()-$e<500?0:Xe.direction)}:we.utils.snap(S.snapTo),ie=S.duration||{min:.1,max:2},ie=Br(ie)?ya(ie.min,ie.max):ya(ie,ie),fe=we.delayedCall(S.delay||ue/2||.1,function(){var pe=J(),Xe=hn()-$e<500,Le=he.tween;if((Xe||Math.abs(R.getVelocity())<10)&&!Le&&!fl&&We!==pe){var qe=(pe-Te)/ke,Ot=i&&!P?i.totalProgress():qe,nt=Xe?0:(Ot-He)/(hn()-ha)*1e3||0,_t=we.utils.clamp(-qe,1-qe,Ms(nt/2)*nt/.185),Vt=qe+(S.inertia===!1?0:_t),Rt,yt,ft=S,wn=ft.onStart,St=ft.onInterrupt,ln=ft.onComplete;if(Rt=Se(Vt,R),ma(Rt)||(Rt=Vt),yt=Math.max(0,Math.round(Te+Rt*ke)),pe<=ze&&pe>=Te&&yt!==pe){if(Le&&!Le._initted&&Le.data<=Ms(yt-pe))return;S.inertia===!1&&(_t=Rt-qe),he(yt,{duration:ie(Ms(Math.max(Ms(Vt-Ot),Ms(Rt-Ot))*.185/nt/.05||0)),ease:S.ease||"power3",data:Ms(yt-pe),onInterrupt:function(){return fe.restart(!0)&&St&&St(R)},onComplete:function(){R.update(),We=J(),i&&!P&&(L?L.resetTo("totalProgress",Rt,i._tTime/i._tDur):i.progress(Rt)),oe=He=i&&!P?i.totalProgress():R.progress,y&&y(R),ln&&ln(R)}},pe,_t*ke,yt-pe-_t*ke),wn&&wn(R,he.tween)}}else R.isActive&&We!==pe&&fe.restart(!0)}).pause()),l&&(Mu[l]=R),d=R.trigger=Dn(d||h!==!0&&h),Ue=d&&d._gsap&&d._gsap.stRevert,Ue&&(Ue=Ue(R)),h=h===!0?d:Dn(h),Wn(o)&&(o={targets:d,className:o}),h&&(g===!1||g===ai||(g=!g&&h.parentNode&&h.parentNode.style&&oi(h.parentNode).display==="flex"?!1:Ht),R.pin=h,Pe=we.core.getCache(h),Pe.spacer?Me=Pe.pinState:(w&&(w=Dn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Pe.spacerIsNative=!!w,w&&(Pe.spacerState=wo(w))),Pe.spacer=N=w||Ct.createElement("div"),N.classList.add("pin-spacer"),l&&N.classList.add("pin-spacer-"+l),Pe.pinState=Me=wo(h)),n.force3D!==!1&&we.set(h,{force3D:!0}),R.spacer=N=Pe.spacer,Ae=oi(h),be=Ae[g+M.os2],j=we.getProperty(h),Y=we.quickSetter(h,M.a,$t),rc(h,N,Ae),v=wo(h)),$){pt=Br($)?Rh($,Ph):Ph,G=Ao("scroller-start",l,U,M,pt,0),I=Ao("scroller-end",l,U,M,pt,0,G),Z=G["offset"+M.op.d2];var ut=Dn(vr(U,"content")||U);Ke=this.markerStart=Ao("start",l,ut,M,pt,Z,0,A),Ne=this.markerEnd=Ao("end",l,ut,M,pt,Z,0,A),A&&(ce=we.quickSetter([Ke,Ne],M.a,$t)),!V&&!(Di.length&&vr(U,"fixedMarkers")===!0)&&(UM(H?mt:U),we.set([G,I],{force3D:!0}),re=we.quickSetter(G,M.a,$t),Ee=we.quickSetter(I,M.a,$t))}if(A){var _e=A.vars.onUpdate,Ce=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){R.update(0,0,1),_e&&_e.apply(A,Ce||[])})}if(R.previous=function(){return et[et.indexOf(R)-1]},R.next=function(){return et[et.indexOf(R)+1]},R.revert=function(pe,Xe){if(!Xe)return R.kill(!0);var Le=pe!==!1||!R.enabled,qe=fn;Le!==R.isReverted&&(Le&&(te=Math.max(J(),R.scroll.rec||0),K=R.progress,Q=i&&i.progress()),Ke&&[Ke,Ne,G,I].forEach(function(Ot){return Ot.style.display=Le?"none":"block"}),Le&&(fn=R,R.update(Le)),h&&(!T||!R.isActive)&&(Le?zM(h,N,Me):rc(h,N,oi(h),ye)),Le||R.update(Le),fn=qe,R.isReverted=Le)},R.refresh=function(pe,Xe,Le,qe){if(!((fn||!R.enabled)&&!Xe)){if(h&&pe&&fi){nn(r,"scrollEnd",Op);return}!Tn&&ne&&ne(R),fn=R,he.tween&&!Le&&(he.tween.kill(),he.tween=0),L&&L.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(xe){return xe.vars.immediateRender&&xe.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ot=Re(),nt=Be(),_t=A?A.duration():wi(U,M),Vt=ke<=.01||!ke,Rt=0,yt=qe||0,ft=Br(Le)?Le.end:n.end,wn=n.endTrigger||d,St=Br(Le)?Le.start:n.start||(n.start===0||!d?0:h?"0 0":"0 100%"),ln=R.pinnedContainer=n.pinnedContainer&&Dn(n.pinnedContainer,R),Bn=d&&Math.max(0,et.indexOf(R))||0,qt=Bn,Yt,Jt,Ni,is,Qt,E,O,X,W,z,le,ge,de;for($&&Br(Le)&&(ge=we.getProperty(G,M.p),de=we.getProperty(I,M.p));qt-- >0;)E=et[qt],E.end||E.refresh(0,1)||(fn=R),O=E.pin,O&&(O===d||O===h||O===ln)&&!E.isReverted&&(z||(z=[]),z.unshift(E),E.revert(!0,!0)),E!==et[qt]&&(Bn--,qt--);for(pn(St)&&(St=St(R)),St=bh(St,"start",R),Te=Uh(St,d,Ot,M,J(),Ke,G,R,nt,ee,V,_t,A,R._startClamp&&"_startClamp")||(h?-.001:0),pn(ft)&&(ft=ft(R)),Wn(ft)&&!ft.indexOf("+=")&&(~ft.indexOf(" ")?ft=(Wn(St)?St.split(" ")[0]:"")+ft:(Rt=ko(ft.substr(2),Ot),ft=Wn(St)?St:(A?we.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,Te):Te)+Rt,wn=d)),ft=bh(ft,"end",R),ze=Math.max(Te,Uh(ft||(wn?"100% 0":_t),wn,Ot,M,J()+Rt,Ne,I,R,nt,ee,V,_t,A,R._endClamp&&"_endClamp"))||-.001,Rt=0,qt=Bn;qt--;)E=et[qt]||{},O=E.pin,O&&E.start-E._pinPush<=Te&&!A&&E.end>0&&(Yt=E.end-(R._startClamp?Math.max(0,E.start):E.start),(O===d&&E.start-E._pinPush<Te||O===ln)&&isNaN(St)&&(Rt+=Yt*(1-E.progress)),O===h&&(yt+=Yt));if(Te+=Rt,ze+=Rt,R._startClamp&&(R._startClamp+=Rt),R._endClamp&&!Tn&&(R._endClamp=ze||-.001,ze=Math.min(ze,wi(U,M))),ke=ze-Te||(Te-=.01)&&.001,Vt&&(K=we.utils.clamp(0,1,we.utils.normalize(Te,ze,te))),R._pinPush=yt,Ke&&Rt&&(Yt={},Yt[M.a]="+="+Rt,ln&&(Yt[M.p]="-="+J()),we.set([Ke,Ne],Yt)),h&&!(Su&&R.end>=wi(U,M)))Yt=oi(h),is=M===Kt,Ni=J(),ve=parseFloat(j(M.a))+yt,!_t&&ze>1&&(le=(H?Ct.scrollingElement||qn:U).style,le={style:le,value:le["overflow"+M.a.toUpperCase()]},H&&oi(mt)["overflow"+M.a.toUpperCase()]!=="scroll"&&(le.style["overflow"+M.a.toUpperCase()]="scroll")),rc(h,N,Yt),v=wo(h),Jt=Wi(h,!0),X=V&&Tr(U,is?An:Kt)(),g?(ye=[g+M.os2,ke+yt+$t],ye.t=N,qt=g===Ht?nl(h,M)+ke+yt:0,qt&&(ye.push(M.d,qt+$t),N.style.flexBasis!=="auto"&&(N.style.flexBasis=qt+$t)),Ns(ye),ln&&et.forEach(function(xe){xe.pin===ln&&xe.vars.pinSpacing!==!1&&(xe._subPinOffset=!0)}),V&&J(te)):(qt=nl(h,M),qt&&N.style.flexBasis!=="auto"&&(N.style.flexBasis=qt+$t)),V&&(Qt={top:Jt.top+(is?Ni-Te:X)+$t,left:Jt.left+(is?X:Ni-Te)+$t,boxSizing:"border-box",position:"fixed"},Qt[Kr]=Qt["max"+$s]=Math.ceil(Jt.width)+$t,Qt[Zr]=Qt["max"+af]=Math.ceil(Jt.height)+$t,Qt[ai]=Qt[ai+wa]=Qt[ai+ba]=Qt[ai+Ca]=Qt[ai+Aa]="0",Qt[Ht]=Yt[Ht],Qt[Ht+wa]=Yt[Ht+wa],Qt[Ht+ba]=Yt[Ht+ba],Qt[Ht+Ca]=Yt[Ht+Ca],Qt[Ht+Aa]=Yt[Ht+Aa],C=VM(Me,Qt,T),Tn&&J(0)),i?(W=i._initted,Ql(1),i.render(i.duration(),!0,!0),se=j(M.a)-ve+ke+yt,ae=Math.abs(ke-se)>1,V&&ae&&C.splice(C.length-2,2),i.render(0,!0,!0),W||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ql(0)):se=ke,le&&(le.value?le.style["overflow"+M.a.toUpperCase()]=le.value:le.style.removeProperty("overflow-"+M.a));else if(d&&J()&&!A)for(Jt=d.parentNode;Jt&&Jt!==mt;)Jt._pinOffset&&(Te-=Jt._pinOffset,ze-=Jt._pinOffset),Jt=Jt.parentNode;z&&z.forEach(function(xe){return xe.revert(!1,!0)}),R.start=Te,R.end=ze,Ve=lt=Tn?te:J(),!A&&!Tn&&(Ve<te&&J(te),R.scroll.rec=0),R.revert(!1,!0),$e=hn(),fe&&(We=-1,fe.restart(!0)),fn=0,i&&P&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(Vt||K!==R.progress||A||_||i&&!i._initted)&&(i&&!P&&(i._initted||K||i.vars.immediateRender!==!1)&&i.totalProgress(A&&Te<-.001&&!K?we.utils.normalize(Te,ze,0):K,!0),R.progress=Vt||(Ve-Te)/ke===K?0:K),h&&g&&(N._pinOffset=Math.round(R.progress*se)),L&&L.invalidate(),isNaN(ge)||(ge-=we.getProperty(G,M.p),de-=we.getProperty(I,M.p),Co(G,M,ge),Co(Ke,M,ge-(qe||0)),Co(I,M,de),Co(Ne,M,de-(qe||0))),Vt&&!Tn&&R.update(),u&&!Tn&&!Qe&&(Qe=!0,u(R),Qe=!1)}},R.getVelocity=function(){return(J()-lt)/(hn()-ha)*1e3||0},R.endAnimation=function(){oa(R.callbackAnimation),i&&(L?L.progress(1):i.paused()?P||oa(i,R.direction<0,1):oa(i,i.reversed()))},R.labelToScroll=function(pe){return i&&i.labels&&(Te||R.refresh()||Te)+i.labels[pe]/i.duration()*ke||0},R.getTrailing=function(pe){var Xe=et.indexOf(R),Le=R.direction>0?et.slice(0,Xe).reverse():et.slice(Xe+1);return(Wn(pe)?Le.filter(function(qe){return qe.vars.preventOverlaps===pe}):Le).filter(function(qe){return R.direction>0?qe.end<=Te:qe.start>=ze})},R.update=function(pe,Xe,Le){if(!(A&&!Le&&!pe)){var qe=Tn===!0?te:R.scroll(),Ot=pe?0:(qe-Te)/ke,nt=Ot<0?0:Ot>1?1:Ot||0,_t=R.progress,Vt,Rt,yt,ft,wn,St,ln,Bn;if(Xe&&(lt=Ve,Ve=A?J():qe,S&&(He=oe,oe=i&&!P?i.totalProgress():nt)),m&&h&&!fn&&!Mo&&fi&&(!nt&&Te<qe+(qe-lt)/(hn()-ha)*m?nt=1e-4:nt===1&&ze>qe+(qe-lt)/(hn()-ha)*m&&(nt=.9999)),nt!==_t&&R.enabled){if(Vt=R.isActive=!!nt&&nt<1,Rt=!!_t&&_t<1,St=Vt!==Rt,wn=St||!!nt!=!!_t,R.direction=nt>_t?1:-1,R.progress=nt,wn&&!fn&&(yt=nt&&!_t?0:nt===1?1:_t===1?2:3,P&&(ft=!St&&F[yt+1]!=="none"&&F[yt+1]||F[yt],Bn=i&&(ft==="complete"||ft==="reset"||ft in i))),x&&(St||Bn)&&(Bn||f||!i)&&(pn(x)?x(R):R.getTrailing(x).forEach(function(Ni){return Ni.endAnimation()})),P||(L&&!fn&&!Mo?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",nt,i._tTime/i._tDur):(L.vars.totalProgress=nt,L.invalidate().restart())):i&&i.totalProgress(nt,!!(fn&&($e||pe)))),h){if(pe&&g&&(N.style[g+M.os2]=be),!V)Y(pa(ve+se*nt));else if(wn){if(ln=!pe&&nt>_t&&ze+1>qe&&qe+1>=wi(U,M),T)if(!pe&&(Vt||ln)){var qt=Wi(h,!0),Yt=qe-Te;Nh(h,mt,qt.top+(M===Kt?Yt:0)+$t,qt.left+(M===Kt?0:Yt)+$t)}else Nh(h,N);Ns(Vt||ln?C:v),ae&&nt<1&&Vt||Y(ve+(nt===1&&!ln?se:0))}}S&&!he.tween&&!fn&&!Mo&&fe.restart(!0),o&&(St||b&&nt&&(nt<1||!ec))&&Ga(o.targets).forEach(function(Ni){return Ni.classList[Vt||b?"add":"remove"](o.className)}),a&&!P&&!pe&&a(R),wn&&!fn?(P&&(Bn&&(ft==="complete"?i.pause().totalProgress(1):ft==="reset"?i.restart(!0).pause():ft==="restart"?i.restart(!0):i[ft]()),a&&a(R)),(St||!ec)&&(c&&St&&nc(R,c),k[yt]&&nc(R,k[yt]),b&&(nt===1?R.kill(!1,1):k[yt]=0),St||(yt=nt===1?1:3,k[yt]&&nc(R,k[yt]))),D&&!Vt&&Math.abs(R.getVelocity())>(ma(D)?D:2500)&&(oa(R.callbackAnimation),L?L.progress(1):oa(i,ft==="reverse"?1:!nt,1))):P&&a&&!fn&&a(R)}if(Ee){var Jt=A?qe/A.duration()*(A._caScrollDist||0):qe;re(Jt+(G._isFlipped?1:0)),Ee(Jt)}ce&&ce(-qe/A.duration()*(A._caScrollDist||0))}},R.enable=function(pe,Xe){R.enabled||(R.enabled=!0,nn(U,"resize",_a),H||nn(U,"scroll",Es),ne&&nn(r,"refreshInit",ne),pe!==!1&&(R.progress=K=0,Ve=lt=We=J()),Xe!==!1&&R.refresh())},R.getTween=function(pe){return pe&&he?he.tween:L},R.setPositions=function(pe,Xe,Le,qe){if(A){var Ot=A.scrollTrigger,nt=A.duration(),_t=Ot.end-Ot.start;pe=Ot.start+_t*pe/nt,Xe=Ot.start+_t*Xe/nt}R.refresh(!1,!1,{start:Ah(pe,Le&&!!R._startClamp),end:Ah(Xe,Le&&!!R._endClamp)},qe),R.update()},R.adjustPinSpacing=function(pe){if(ye&&pe){var Xe=ye.indexOf(M.d)+1;ye[Xe]=parseFloat(ye[Xe])+pe+$t,ye[1]=parseFloat(ye[1])+pe+$t,Ns(ye)}},R.disable=function(pe,Xe){if(pe!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Xe||L&&L.pause(),te=0,Pe&&(Pe.uncache=1),ne&&tn(r,"refreshInit",ne),fe&&(fe.pause(),he.tween&&he.tween.kill()&&(he.tween=0)),!H)){for(var Le=et.length;Le--;)if(et[Le].scroller===U&&et[Le]!==R)return;tn(U,"resize",_a),H||tn(U,"scroll",Es)}},R.kill=function(pe,Xe){R.disable(pe,Xe),L&&!Xe&&L.kill(),l&&delete Mu[l];var Le=et.indexOf(R);Le>=0&&et.splice(Le,1),Le===yn&&Go>0&&yn--,Le=0,et.forEach(function(qe){return qe.scroller===R.scroller&&(Le=1)}),Le||Tn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),Xe||i.kill()),Ke&&[Ke,Ne,G,I].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),Ra===R&&(Ra=0),h&&(Pe&&(Pe.uncache=1),Le=0,et.forEach(function(qe){return qe.pin===h&&Le++}),Le||(Pe.spacer=0)),n.onKill&&n.onKill(R)},et.push(R),R.enable(!1,!1),Ue&&Ue(R),i&&i.add&&!ke){var Ze=R.update;R.update=function(){R.update=Ze,st.cache++,Te||ze||R.refresh()},we.delayedCall(.01,R.update),ke=.01,Te=ze=0}else R.refresh();h&&BM()},r.register=function(n){return ys||(we=n||Dp(),Pp()&&window.document&&r.enable(),ys=da),ys},r.defaults=function(n){if(n)for(var i in n)bo[i]=n[i];return bo},r.disable=function(n,i){da=0,et.forEach(function(a){return a[i?"kill":"disable"](n)}),tn(rt,"wheel",Es),tn(Ct,"scroll",Es),clearInterval(So),tn(Ct,"touchcancel",Mi),tn(mt,"touchstart",Mi),yo(tn,Ct,"pointerdown,touchstart,mousedown",wh),yo(tn,Ct,"pointerup,touchend,mouseup",Ch),tl.kill(),Eo(tn);for(var s=0;s<st.length;s+=3)To(tn,st[s],st[s+1]),To(tn,st[s],st[s+2])},r.enable=function(){if(rt=window,Ct=document,qn=Ct.documentElement,mt=Ct.body,we&&(Ga=we.utils.toArray,ya=we.utils.clamp,vu=we.core.context||Mi,Ql=we.core.suppressOverwrites||Mi,tf=rt.history.scrollRestoration||"auto",Eu=rt.pageYOffset||0,we.core.globals("ScrollTrigger",r),mt)){da=1,Us=document.createElement("div"),Us.style.height="100vh",Us.style.position="absolute",Vp(),DM(),kt.register(we),r.isTouch=kt.isTouch,cr=kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),xu=kt.isTouch===1,nn(rt,"wheel",Es),ef=[rt,Ct,qn,mt],we.matchMedia?(r.matchMedia=function(c){var u=we.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},we.addEventListener("matchMediaInit",function(){zp(),lf()}),we.addEventListener("matchMediaRevert",function(){return Bp()}),we.addEventListener("matchMedia",function(){Wr(0,1),ts("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return ic(),ic})):console.warn("Requires GSAP 3.11.0 or later"),ic(),nn(Ct,"scroll",Es);var n=mt.hasAttribute("style"),i=mt.style,s=i.borderTopStyle,a=we.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Wi(mt),Kt.m=Math.round(o.top+Kt.sc())||0,An.m=Math.round(o.left+An.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(mt.setAttribute("style",""),mt.removeAttribute("style")),So=setInterval(Dh,250),we.delayedCall(.5,function(){return Mo=0}),nn(Ct,"touchcancel",Mi),nn(mt,"touchstart",Mi),yo(nn,Ct,"pointerdown,touchstart,mousedown",wh),yo(nn,Ct,"pointerup,touchend,mouseup",Ch),gu=we.utils.checkPrefix("transform"),Ho.push(gu),ys=hn(),tl=we.delayedCall(.2,Wr).pause(),Ts=[Ct,"visibilitychange",function(){var c=rt.innerWidth,u=rt.innerHeight;Ct.hidden?(yh=c,Th=u):(yh!==c||Th!==u)&&_a()},Ct,"DOMContentLoaded",Wr,rt,"load",Wr,rt,"resize",_a],Eo(nn),et.forEach(function(c){return c.enable(0,1)}),l=0;l<st.length;l+=3)To(tn,st[l],st[l+1]),To(tn,st[l],st[l+2])}},r.config=function(n){"limitCallbacks"in n&&(ec=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(So)||(So=i)&&setInterval(Dh,i),"ignoreMobileResize"in n&&(xu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Eo(tn)||Eo(nn,n.autoRefreshEvents||"none"),wp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Dn(n),a=st.indexOf(s),o=Qr(s);~a&&st.splice(a,o?6:2),i&&(o?Di.unshift(rt,i,mt,i,qn,i):Di.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Wn(n)?Dn(n):n).getBoundingClientRect(),o=a[s?Kr:Zr]*i||0;return s?a.right-o>0&&a.left+o<rt.innerWidth:a.bottom-o>0&&a.top+o<rt.innerHeight},r.positionInViewport=function(n,i,s){Wn(n)&&(n=Dn(n));var a=n.getBoundingClientRect(),o=a[s?Kr:Zr],l=i==null?o/2:i in il?il[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/rt.innerWidth:(a.top+l)/rt.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=es.killAll||[];es={},i.forEach(function(s){return s()})}},r})();tt.version="3.14.2";tt.saveStyles=function(r){return r?Ga(r).forEach(function(e){if(e&&e.style){var t=Hn.indexOf(e);t>=0&&Hn.splice(t,5),Hn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),vu())}}):Hn};tt.revert=function(r,e){return lf(!r,e)};tt.create=function(r,e){return new tt(r,e)};tt.refresh=function(r){return r?_a(!0):(ys||tt.register())&&Wr(!0)};tt.update=function(r){return++st.cache&&Zi(r===!0?2:0)};tt.clearScrollMemory=kp;tt.maxScroll=function(r,e){return wi(r,e?An:Kt)};tt.getScrollFunc=function(r,e){return Tr(Dn(r),e?An:Kt)};tt.getById=function(r){return Mu[r]};tt.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!fi};tt.snapDirectional=of;tt.addEventListener=function(r,e){var t=es[r]||(es[r]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(r,e){var t=es[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};tt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],d=[],h=we.delayedCall(i,function(){u(f,d),f=[],d=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&pn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return pn(s)&&(s=s(),nn(tt,"refresh",function(){return s=e.batchMax()})),Ga(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(tt.create(c))}),t};var Oh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},sc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(kt.isTouch?" pinch-zoom":""):"none",e===qn&&r(mt,t)},Ro={auto:1,scroll:1},HM=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||we.core.getCache(s),o=hn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ro[(l=oi(s)).overflowY]||Ro[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Qr(s)&&(Ro[(l=oi(s)).overflowY]||Ro[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Hp=function(e,t,n,i){return kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&HM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&nn(Ct,kt.eventTypes[0],zh,!1,!0)},onDisable:function(){return tn(Ct,kt.eventTypes[0],zh,!0)}})},WM=/(input|label|select|textarea)/i,Bh,zh=function(e){var t=WM.test(e.target.tagName);(t||Bh)&&(e._gsapAllow=!0,Bh=t)},XM=function(e){Br(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Dn(e.target)||qn,u=we.core.globals().ScrollSmoother,f=u&&u.get(),d=cr&&(e.content&&Dn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=Tr(c,Kt),g=Tr(c,An),_=1,m=(kt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,p=0,y=pn(i)?function(){return i(o)}:function(){return i||2.8},b,S,T=Hp(c,e.type,!0,s),w=function(){return S=!1},A=Mi,D=Mi,x=function(){l=wi(c,Kt),D=ya(cr?1:0,l),n&&(A=ya(0,wi(c,An))),b=jr},M=function(){d._gsap.y=pa(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},P=function(){if(S){requestAnimationFrame(w);var $=pa(o.deltaY/2),ee=D(h.v-$);if(d&&ee!==h.v+h.offset){h.offset=ee-h.v;var R=pa((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",d._gsap.y=R+"px",h.cacheID=st.cache,Zi()}return!0}h.offset&&M(),S=!0},U,B,H,V,k=function(){x(),U.isActive()&&U.vars.scrollY>l&&(h()>l?U.progress(1)&&h(l):U.resetTo("scrollY",l))};return d&&we.set(d,{y:"+=0"}),e.ignoreCheck=function(F){return cr&&F.type==="touchmove"&&P()||_>1.05&&F.type!=="touchstart"||o.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){S=!1;var F=_;_=pa((rt.visualViewport&&rt.visualViewport.scale||1)/m),U.pause(),F!==_&&sc(c,_>1.01?!0:n?!1:"x"),B=g(),H=h(),x(),b=jr},e.onRelease=e.onGestureStart=function(F,$){if(h.offset&&M(),!$)V.restart(!0);else{st.cache++;var ee=y(),R,ne;n&&(R=g(),ne=R+ee*.05*-F.velocityX/.227,ee*=Oh(g,R,ne,wi(c,An)),U.vars.scrollX=A(ne)),R=h(),ne=R+ee*.05*-F.velocityY/.227,ee*=Oh(h,R,ne,wi(c,Kt)),U.vars.scrollY=D(ne),U.invalidate().duration(ee).play(.01),(cr&&U.vars.scrollY>=l||R>=l-1)&&we.to({},{onUpdate:k,duration:ee})}a&&a(F)},e.onWheel=function(){U._ts&&U.pause(),hn()-p>1e3&&(b=0,p=hn())},e.onChange=function(F,$,ee,R,ne){if(jr!==b&&x(),$&&n&&g(A(R[2]===$?B+(F.startX-F.x):g()+$-R[1])),ee){h.offset&&M();var Re=ne[2]===ee,Be=Re?H+F.startY-F.y:h()+ee-ne[1],We=D(Be);Re&&Be!==We&&(H+=We-Be),h(We)}(ee||$)&&Zi()},e.onEnable=function(){sc(c,n?!1:"x"),tt.addEventListener("refresh",k),nn(rt,"resize",k),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),T.enable()},e.onDisable=function(){sc(c,!0),tn(rt,"resize",k),tt.removeEventListener("refresh",k),T.kill()},e.lockAxis=e.lockAxis!==!1,o=new kt(e),o.iOS=cr,cr&&!h()&&h(1),cr&&we.ticker.add(Mi),V=o._dc,U=we.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Gp(h,h(),function(){return U.pause()})},onUpdate:Zi,onComplete:V.vars.onComplete}),o};tt.sort=function(r){if(pn(r))return et.sort(r);var e=rt.pageYOffset||0;return tt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};tt.observe=function(r){return new kt(r)};tt.normalizeScroll=function(r){if(typeof r>"u")return En;if(r===!0&&En)return En.enable();if(r===!1){En&&En.kill(),En=r;return}var e=r instanceof kt?r:XM(r);return En&&En.target===e.target&&En.kill(),Qr(e.target)&&(En=e),e};tt.core={_getVelocityProp:_u,_inputObserver:Hp,_scrollers:st,_proxies:Di,bridge:{ss:function(){fi||ts("scrollStart"),fi=hn()},ref:function(){return fn}}};Dp()&&we.registerPlugin(tt);Ie.registerPlugin(tt);function qM(){function r(){return window.innerWidth<768}const e=document.querySelector(".h1"),t=document.querySelector(".is--kini"),n=document.querySelector(".claim-h")||document.querySelector(".claim-h-mob"),i=document.querySelectorAll(".nav-item-mobile"),s=document.querySelectorAll(".is--small"),a=document.querySelectorAll(".star-little");let o;r()?o=document.querySelector(".hero-marquee-mobile"):o=document.querySelector(".hero-marquee");const l=document.querySelector(".hero__section"),c=document.querySelector(".menu-type-wrapper");let u=0;function f(){u+=.008;const S=Math.sin(u),T=Ie.utils.mapRange(-1,1,100,700,S),w=Ie.utils.mapRange(-1,1,4,380,-S);Ie.set(e,{fontVariationSettings:`'wght' ${T}`}),Ie.set(t,{fontVariationSettings:`'wght' ${w}`}),requestAnimationFrame(f)}let d=0,h=0;const g=(S,T,w)=>S+(T-S)*w;function _(){h=g(h,d,.16);let S=Ie.utils.mapRange(.1*window.innerWidth,window.innerWidth,100,700,h),T=Ie.utils.mapRange(0,window.innerWidth*.9,360,4,h);Ie.set(e,{fontVariationSettings:`'wght' ${S}`}),Ie.set(t,{fontVariationSettings:`'wght' ${T}`}),requestAnimationFrame(_)}r()?f():(_(),window.addEventListener("mousemove",S=>{d=S.clientX})),r()||(i.forEach(S=>{S.addEventListener("mouseover",()=>{Ie.to(S,{fontVariationSettings:"'wght' 450",duration:.4})}),S.addEventListener("mouseleave",()=>{Ie.to(S,{fontVariationSettings:"'wght' 200",duration:.4})})}),s.forEach(S=>{S.addEventListener("mouseover",()=>{Ie.to(S,{fontVariationSettings:"'wght' 450",duration:.4})}),S.addEventListener("mouseleave",()=>{let T=200;r()&&(T=300),Ie.to(S,{fontVariationSettings:`'wght' ${T}`,duration:.4})})}));const m=o.querySelectorAll(".is--white"),p=Ie.to(o,{xPercent:-50,duration:32,repeat:-1,ease:"none"});r()||(o.addEventListener("mouseover",()=>{Ie.to(p,{timeScale:2}),m&&Ie.to(m,{opacity:1,duration:.2,ease:"none"}),Ie.to(o,{backgroundColor:"#202020",duration:.2,ease:"none"})}),o.addEventListener("mouseleave",()=>{Ie.to(p,{timeScale:1}),m&&Ie.to(m,{opacity:0,duration:.2,ease:"none"}),Ie.to(o,{backgroundColor:"#fffbf600",duration:.2,ease:"none"})})),a.forEach((S,T)=>{Ie.to(S,{rotation:360,duration:12-T,ease:"none",repeat:-1})}),Ie.to(c,{y:-120,scrollTrigger:{trigger:l,start:"top top",end:"bottom top",scrub:!0}}),Ie.to(n,{y:-80,scrollTrigger:{trigger:l,start:"bottom bottom",end:"bottom -50%",scrub:!0}});let y=100;function b(){y>350&&(y=350),Ie.set(n,{fontVariationSettings:`'wght' ${y}`}),requestAnimationFrame(b)}b(),window.addEventListener("scroll",()=>{y=Ie.utils.mapRange(0,800,100,350,window.scrollY)})}Ie.registerPlugin(tt);function YM(){function r(){return window.innerWidth<768}const e=document.querySelector(".hero__section"),t=document.querySelector(".menu-type-wrapper"),n=document.querySelectorAll(".info-item"),i=document.querySelectorAll(".info-p"),s=document.querySelectorAll(".footer-link"),a=document.querySelectorAll(".info-header");Ie.to(t,{y:-120,scrollTrigger:{trigger:e,start:"top top",end:"bottom top",scrub:!0}}),a.forEach(l=>{l.classList.contains("is--first")||Ie.to(l,{yPercent:100,scrollTrigger:{trigger:l,start:"top 96%",end:"top 4%",scrub:!0}})});function o(l){i[l].classList.contains("is-open")?(i[l].classList.remove("is-open"),Ie.to(i[l],{opacity:0,height:0,marginBottom:0,duration:.8,ease:"power2.out"})):(i[l].classList.add("is-open"),Ie.to(i[l],{opacity:1,height:"auto",marginBottom:64,duration:.8,ease:"power2.out"}))}n.forEach((l,c)=>{r()||(l.addEventListener("mouseover",()=>{Ie.to(l,{fontVariationSettings:"'wght' 400",duration:.4})}),l.addEventListener("mouseleave",()=>{Ie.to(l,{fontVariationSettings:"'wght' 200",duration:.4})})),l.addEventListener("click",()=>{o(c)})}),r()||s.forEach(l=>{l.addEventListener("mouseover",c=>{const u=c.currentTarget.firstElementChild;Ie.to(u,{fontVariationSettings:"'wght' 250",duration:.4})}),l.addEventListener("mouseleave",c=>{const u=c.currentTarget.firstElementChild;Ie.to(u,{fontVariationSettings:"'wght' 800",duration:.4})})})}Ie.registerPlugin(tt);function $M(){const r=document.querySelectorAll(".event-stripe-2"),e=document.querySelectorAll(".date-h"),t=document.querySelectorAll(".star-img"),n=document.querySelectorAll(".event-title-2"),i=document.querySelector(".hover-img-wrapper"),s=document.querySelectorAll(".img-hover"),a=document.querySelector(".download-link"),o=document.querySelector(".download-item");function l(){return window.innerWidth<768}function c(u){Ie.timeline({scrollTrigger:{trigger:u,start:"top 90%",end:"top -8%",scrub:!0}}).to(u,{opacity:1,duration:2}).to(u,{opacity:1,duration:3}).to(u,{opacity:0,duration:1})}r.forEach(c),e.forEach(c),t.forEach(c),Ie.to(t,{rotation:360,duration:12,ease:"none",repeat:-1}),l()||n.forEach((u,f)=>{u.addEventListener("mouseover",()=>{Ie.to(u,{fontVariationSettings:"'wght' 400",duration:.6}),Ie.to(i,{opacity:1,duration:.1}),Ie.to(s[f],{zIndex:1,duration:.1})}),u.addEventListener("mouseleave",()=>{Ie.to(u,{fontVariationSettings:"'wght' 250",duration:.6}),Ie.to(i,{opacity:0,duration:.1,onComplete:()=>{Ie.to(s[f],{zIndex:0,duration:.1})}})})}),l()||(a.addEventListener("mouseover",()=>{Ie.to(a,{scale:.97,backgroundColor:"#202020",duration:.6,ease:"power2.inOut"}),Ie.to(o,{fontVariationSettings:"'wght' 300",color:"#fffbf6",duration:.6,ease:"power2.inOut"})}),a.addEventListener("mouseleave",()=>{Ie.to(a,{scale:1,duration:.6,backgroundColor:"#20202000",ease:"power2.inOut"}),Ie.to(o,{fontVariationSettings:"'wght' 250",color:"#202020",duration:.6,ease:"power2.inOut"})})),i.clientWidth,i.clientHeight,document.documentElement.scrollHeight-window.innerHeight,l()||(window.addEventListener("mousemove",u=>{u.clientX,u.clientY}),window.addEventListener("scroll",()=>{}))}function KM(){l_(),document.querySelector("#webgl")&&AM(),qM(),YM(),$M()}KM();
