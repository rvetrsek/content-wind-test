import{X as c,G as n,r as u,o as l,L as s,c as i,e as d,h as m}from"./Ci81ED8T.js";const p=["src","alt"],k={__name:"ThemeImage",props:{srcLight:{type:String,required:!0},srcDark:{type:String,required:!0},alt:{type:String,default:""}},setup(e){const t=e,a=c(),o=n(()=>a.value==="dark"?t.srcDark:t.srcLight),r=u(!1);return l(()=>{r.value=!0}),(f,g)=>s(r)?(i(),d("img",{key:0,src:s(o),alt:e.alt},null,8,p)):m("",!0)}};export{k as default};