import{d,$ as l,G as f,m as v,R as p,a0 as m,Y as g,a1 as h,K as r,C as y}from"./Ci81ED8T.js";import{u as _}from"./A0hbjWHe.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:t}=l(u),n=f(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&v("dd-navigation").value){const{navigation:a}=p();return{navigation:a}}const{data:o}=await _(`content-navigation-${m(n.value)}`,()=>h(n.value));return{navigation:o}},render(u){const t=g(),{navigation:n}=u,o=e=>r(y,{to:e._path},()=>e.title),a=(e,i)=>r("ul",i?{"data-level":i}:null,e.map(s=>s.children?r("li",null,[o(s),a(s.children,i+1)]):r("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),$=C;export{$ as default};
