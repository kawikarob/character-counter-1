(this["webpackJsonpcharacter-counter-1"]=this["webpackJsonpcharacter-counter-1"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(4),s=c.n(a),o=(c(9),c(2)),l=c(0);var i=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(o.a)(a,2),i=s[0],d=s[1],u=Object(n.useState)(),h=Object(o.a)(u,2),j=h[0],b=h[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"pt-10 pb-5",children:Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("p",{className:"text-2xl font-bold text-red-600",children:"TOP SECRET"}),Object(l.jsx)("p",{className:"text-xl font-bold p-2",children:"Character Counter"})]})}),Object(l.jsx)("div",{className:"flex justify-center pb-4",children:Object(l.jsx)("textarea",{rows:"8",style:{width:"50%",height:"30%",borderColor:"black",borderWidth:"3px",outline:"none",overflow:"auto"},autoFocus:!0,placeholder:"Enter Text Here",value:c,onChange:function(e){r(e.target.value),function(e){for(var t=e,c=new Set,n="",r={},a=0;a<t.length;a++){var s=t[a];r[s]=void 0===r[s]?1:r[s]+1,c.has(s)||(n+=s,c.add(s))}for(var o=[],l=0;l<n.length;l++){var i=n[l],u=r[i];o.push({character:i,count:u})}d(o);var h=[];for(var j in r)h.push([j,r[j]]);h.sort((function(e,t){return t[1]-e[1]}));for(var x="",f=0;f<h.length&&5!==(x+=h[f][0]).length;f++);b(x)}(e.target.value)}})}),Object(l.jsx)("div",{children:i.map((function(e){return Object(l.jsxs)("div",{className:"flex justify-center space-x-2",children:[Object(l.jsxs)("p",{className:"font-bold",children:[e.character,":",e.count]}),Object(l.jsx)("p",{className:"text-red-500 font-bold",children:j.includes(e.character)&&"Top 5"})]})}))})]})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,12)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(i,{})}),document.getElementById("root")),d()},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.947280fe.chunk.js.map