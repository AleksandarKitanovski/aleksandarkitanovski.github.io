import{s as S,n as _,d as q}from"../chunks/scheduler.-dhH77K1.js";import{S as x,i as y,e as d,p as f,s as C,c as g,l as h,q as v,d as l,n as H,b as m,o as $,r as E}from"../chunks/index.BYsXf19S.js";import{s as P}from"../chunks/entry.CY6R-AMR.js";const j=()=>{const s=P;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},k={subscribe(s){return j().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=d("h1"),o=f(r),n=C(),i=d("p"),u=f(c)},l(e){t=g(e,"H1",{});var a=h(t);o=v(a,r),a.forEach(l),n=H(e),i=g(e,"P",{});var p=h(i);u=v(p,c),p.forEach(l)},m(e,a){m(e,t,a),$(t,o),m(e,n,a),m(e,i,a),$(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(u,c)},i:_,o:_,d(e){e&&(l(t),l(n),l(i))}}}function z(s,t,r){let o;return q(s,k,n=>r(0,o=n)),[o]}let F=class extends x{constructor(t){super(),y(this,t,z,w,S,{})}};export{F as component};
