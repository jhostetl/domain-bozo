(this.webpackJsonprhymes=this.webpackJsonprhymes||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var r=t(6),c=t.n(r),a=t(5),s=t(3),i=t(1),o=t(0);var l=function(){for(var e=Object(i.useRef)(null),n=Object(i.useState)([]),t=Object(s.a)(n,2),r=t[0],c=t[1],l=Object(i.useState)([]),u=Object(s.a)(l,2),h=u[0],j=u[1],b=Object(i.useState)([]),d=Object(s.a)(b,2),f=d[0],m=d[1],v=[],O=function(e){var n=r[e],t=Object(o.jsx)(x,{onSave:function(){return function(e){if(h.includes(r[e]))j(h);else{var n=h.concat(r[e]);j(n)}}(e)},description:n},e);v.push(t)},p=0;p<r.length;p++)O(p);function y(){m("loading...");var n=e.current.value,t=[];fetch("https://api.datamuse.com/words?rel_rhy="+n).then((function(e){return e.json()})).then((function(e){if(e.length>0){var r=function(e,n){if("function"!==typeof n){var t=n;n=function(e){return e[t]}}var r,c=new Map,s=Object(a.a)(e);try{for(s.s();!(r=s.n()).done;){var i=r.value,o=n(i);c.has(o)||c.set(o,[]),c.get(o).push(i)}}catch(b){s.e(b)}finally{s.f()}var l,u={},h=Object(a.a)(Array.from(c.keys()).sort());try{for(h.s();!(l=h.n()).done;){var j=l.value;u[j]=c.get(j)}}catch(b){h.e(b)}finally{h.f()}return u}(e,"numSyllables");for(var s in r)for(var i in r[s])t.push(r[s][i].word);c(t),m("Words that rhyme with "+n)}else c(t),m("No words rhyme with "+n)})),e.current.value="",e.current.focus()}function x(e){return Object(o.jsxs)("li",{children:[e.description," ",Object(o.jsx)("button",{className:"btn btn-save btn-outline-secondary",onClick:e.onSave,children:"Save"})]})}return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:h.join(", ")}),Object(o.jsxs)("div",{className:"input-group col",children:[Object(o.jsx)("input",{className:"form-control",onKeyDown:function(e){"Enter"===e.key&&y()},ref:e,type:"text"}),Object(o.jsx)("button",{onClick:y,className:"btn btn-primary",children:"Show Rhyming Words"}),Object(o.jsx)("button",{onClick:function(){m("loading...");var n=e.current.value,t=[];fetch("https://api.datamuse.com/words?ml="+n).then((function(e){return e.json()})).then((function(e){if(e.length>0){for(var r=0;r<e.length;r++)t.push(e[r].word);c(t),m("Words with a similar meaning to "+n)}else c(t),m("No words with a similar meaning to "+n)})),e.current.value="",e.current.focus()},className:"btn btn-light btn-outline-dark",children:"Show Synonyms"})]}),Object(o.jsx)("h5",{className:"output_description",children:f}),Object(o.jsx)("ul",{children:v})]})};t(12),t(13);c.a.render(Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("nav",{className:"header navbar navbar-dark",children:Object(o.jsx)("a",{href:"/",children:Object(o.jsx)("span",{className:"navbar-brand mb-0 h1",children:"DB"})})}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h3",{children:"Rhyme Finder (579 Problem Set 6 in React)"}),Object(o.jsx)(l,{})]})]}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e1551621.chunk.js.map