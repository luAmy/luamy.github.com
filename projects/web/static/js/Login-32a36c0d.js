import{f as g,g as v,j as w,h as V,a as b}from"./_element-plus-22095640.js";import{g as x,r as y,t as I,o as h,c as k,a as d,_ as t,U as l,a9 as E,Y as S,aw as B,ax as F}from"./_@vue-8661df55.js";import{_ as L,a3 as N}from"./__vendor-d29dd9de.js";import{s as R}from"./request-5e2837fc.js";import{_ as U}from"./plugin-vue_export-helper-46f75680.js";import"./_@element-plus-205714a8.js";import"./index-df14726b.js";const $="/admin",q=o=>R.post(`${$}/login`,o);const C=o=>(B("data-v-737d4e04"),o=o(),F(),o),K={class:"login-wrap"},M=C(()=>d("div",{class:"pic"},"\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",-1)),j={class:"ms-login"},T={class:"login-btn"},Y={__name:"Login",setup(o){L();const i=N(),p=x(""),s=y({username:"",password:"",code:""}),_={username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}]};I(()=>{});function m(){p.value.validate(u=>{if(u){const{username:e,password:n}=s;q({username:e,password:n}).then(a=>{b.success("\u767B\u5F55\u6210\u529F"),localStorage.setItem("ms_token",a.data.token),localStorage.setItem("name",a.data.username),i.push("/")})}})}return(u,e)=>{const n=g,a=v,c=w,f=V;return h(),k("div",K,[M,d("div",j,[t(f,{inline:!0,"label-width":"120px",model:s,rules:_,ref_key:"loginRef",ref:p,class:"ms-content"},{default:l(()=>[t(a,{prop:"username",label:"\u8D26\u53F7\uFF1A"},{default:l(()=>[t(n,{modelValue:s.username,"onUpdate:modelValue":e[0]||(e[0]=r=>s.username=r),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),t(a,{prop:"password",label:"\u5BC6\u7801\uFF1A"},{default:l(()=>[t(n,{type:"password",placeholder:"\u8BF7\u8F93\u5165",modelValue:s.password,"onUpdate:modelValue":e[1]||(e[1]=r=>s.password=r),onKeyup:e[2]||(e[2]=E(r=>m(),["enter"]))},null,8,["modelValue"])]),_:1}),d("div",T,[t(c,{type:"primary",onClick:e[3]||(e[3]=r=>m())},{default:l(()=>[S("\u767B\u5F55")]),_:1})])]),_:1},8,["model"])])])}}};var P=U(Y,[["__scopeId","data-v-737d4e04"]]);export{P as default};
