import{g as v,r as w,t as b,ah as l,o as V,c as x,a as p,_ as s,U as d,a9 as y,Y as h,aw as k,ax as I}from"./_@vue-06a77be8.js";import{_ as S,a3 as B}from"./__vendor-590820f2.js";import{s as C}from"./request-a1f5a8c6.js";import{_ as L}from"./plugin-vue_export-helper-46f75680.js";import{a as N}from"./_element-plus-276cec6a.js";import"./index-9272a763.js";import"./_@element-plus-9f6048df.js";const R="/admin",U=o=>C.post(`${R}/login`,o);const $=o=>(k("data-v-0fdf8d2f"),o=o(),I(),o),q={class:"login-wrap"},E=$(()=>p("div",{class:"pic"},"\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",-1)),K={class:"ms-login"},M={class:"login-btn"},F={__name:"Login",setup(o){S();const _=B(),m=v(""),t=w({username:"",password:"",code:""}),c={username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}]};b(()=>{});function i(){m.value.validate(u=>{if(u){const{username:e,password:n}=t;U({username:e,password:n}).then(a=>{N.success("\u767B\u5F55\u6210\u529F"),localStorage.setItem("ms_token",a.data.token),localStorage.setItem("name",a.data.username),_.push("/")})}})}return(u,e)=>{const n=l("el-input"),a=l("el-form-item"),f=l("el-button"),g=l("el-form");return V(),x("div",q,[E,p("div",K,[s(g,{inline:!0,"label-width":"120px",model:t,rules:c,ref_key:"loginRef",ref:m,class:"ms-content"},{default:d(()=>[s(a,{prop:"username",label:"\u8D26\u53F7\uFF1A"},{default:d(()=>[s(n,{modelValue:t.username,"onUpdate:modelValue":e[0]||(e[0]=r=>t.username=r),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),s(a,{prop:"password",label:"\u5BC6\u7801\uFF1A"},{default:d(()=>[s(n,{type:"password",placeholder:"\u8BF7\u8F93\u5165",modelValue:t.password,"onUpdate:modelValue":e[1]||(e[1]=r=>t.password=r),onKeyup:e[2]||(e[2]=y(r=>i(),["enter"]))},null,8,["modelValue"])]),_:1}),p("div",M,[s(f,{type:"primary",onClick:e[3]||(e[3]=r=>i())},{default:d(()=>[h("\u767B\u5F55")]),_:1})])]),_:1},8,["model"])])])}}};var H=L(F,[["__scopeId","data-v-0fdf8d2f"]]);export{H as default};
