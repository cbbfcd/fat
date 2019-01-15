/*
 FAT v0.6.0
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/fat
*/
'use strict';(function(p,f,q){var k;(k=q.define)&&k.amd?k([],function(){return f}):(k=q.modules)?k[p.toLowerCase()]=f:"object"===typeof exports?module.exports=f:q[p]=f})("Fat",function(){function p(a,e,b,d,c,g,f,m,l,w,x,r){this.o=a;this.C=a.j;this.style=e;this.G=e.replace(/([A-Z])/g,"-$1").toLowerCase();this.a=d;this.b=c;this.g=d;this.s=g;this.m=f;this.duration=m;this.f=l;this.ease=k(l)?[]:null;this.start=0;this.i=w;this.h=x;this.F=b;this.c=r;this.D="px"!==g}function f(){this.id=++B;this.stack=[];
this.u=q.bind(this);this.exec=0}function q(a){var e=this.stack.length;if(e){this.exec=requestAnimationFrame(this.u);for(var b=!1,d=0;d<e;d++){var c=this.stack[d];c&&(b=!0,c.B(a)||(this.stack[d]=null))}y=a;b||this.destroy()}}function k(a){return"string"===typeof a}var z=Math.max(screen.width,screen.height),t=parseFloat,B=0,y=0,v=p.prototype;v.animate=function(a){var e=this.a===this.b||!1,b=this.o;a=Math.max(a-(this.start||(this.start=a)),0);var d=a>=this.duration;if(!e)if(d)var c=this.b;else this.ease?
c=this.ease.length?(this.b-this.a)*this.ease[z/this.duration*a+.5>>0]/1E4:(this.b-this.a)*a/this.duration:c=1===this.f.length?this.f(a/this.duration):this.f(a,this.a,this.b,this.duration),c=this.a+c,c=this.D?(c*z+.5>>0)/z:c+.5>>0;var g=this.style;e||this.g===c||(this.g=c,c+=this.s,"custom"!==g&&this.A(c));this.h&&this.h.call(b,d?1:a/this.duration,c);d&&(this.start=-1,this.i&&this.i.call(b))};v.B=function(a){if(-1===this.start)this.o[this.F]=null;else{var e=a-y;if(this.c){if(0<(this.c-=e))return!0;
this.c=0}this.animate(a);return!0}};v.A=function(a){this.C.setProperty(this.G,a,this.m?"important":void 0)};var u=f.prototype;u.w=function(a,e,b,d,c,g,f,m,l,w,x,r){if("custom"===e)d=d||0;else{var n=a.j||(a.j=a.style);d=(d="undefined"===typeof d?n[e]:d)?d:(a.l||(a.l=getComputedStyle(a)))[e]}n=""+d;"auto"===n&&(n="0");d=t(n);if(k(c)){var h=c;c=t(c);g||(g=h.substring((""+c).length))}g||(g=n.substring((""+d).length)||"");e=new p(a,e,b,d,c,g,f,m,l,w,x,r,!1,!1);this.stack[this.stack.length]=e;a[b]=e};u.animate=
function(a,e,b){if(a&&e){b?"function"===typeof b&&(b={callback:b}):b={};k(a)?a=document.querySelectorAll(a):a.length||(a=[a]);var d=b.callback||!1,c=b.step||0,g=b.force||0,f=b.init,m=b.delay||0,l=b.duration||400;b=b.ease||"";for(var w=Object.keys(e),x=w.length,r=0;r<x;r++){var n=w[r],h=e[n],p=void 0,q=void 0,t=r===x-1,v="_fat_"+n+this.id;"object"===typeof h&&(m=h.delay||m,l=h.duration||l,b=h.ease||b,p=h.from,q=h.unit,h=h.to);for(var u=0,z=a.length;u<z;u++){var A=a[u];f&&0===r&&(A.l=null);var y=!f&&
A[v];y?y.v(p,h,q,g,l,b,t&&d,t&&c,m):this.w(A,n,v,p,h,q,g,l,b,t&&d,t&&c,m)}}this.exec||(this.exec=requestAnimationFrame(this.u))}return this};u.destroy=function(){this.exec&&(this.exec=0,this.stack=[]);return this};u.create=function(){return new f};v.v=function(a,e,b,d,c,g,f,m,l){"undefined"===typeof a?a=this.g:a=t(a);k(e)&&(e=t(e));this.a=a;this.b=e;this.duration=c;this.start=0;this.m=d;this.f!==g&&(this.ease=k(g)?[]:null,this.f=g);this.i=f;this.h=m;this.c=l;b&&(this.s=b)};return new f}(),this);
