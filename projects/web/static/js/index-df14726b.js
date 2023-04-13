import{t as S,ah as O,o as N,T as P,U as R,_ as I,u as _,p as w,at as L}from"./_@vue-8661df55.js";import{Z as A,_ as T,$ as C,a0 as b,a1 as J,a2 as D}from"./__vendor-d29dd9de.js";import{z as G,E as V,i as k}from"./_element-plus-22095640.js";import"./_@element-plus-205714a8.js";const y=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}};y();const M={__name:"App",setup(e){A(),T();const t="default",s=3e3;return w("ec",C),S(()=>{console.log("onMounted")}),(o,n)=>{const r=O("router-view");return N(),P(_(V),{size:t,"z-index":s,locale:_(G)},{default:R(()=>[I(r)]),_:1},8,["locale"])}}};function x(){return{session:{set(s,o){!sessionStorage||s!=null&&o!=null&&sessionStorage.setItem(s,o)},get(s){return!sessionStorage||s==null?null:sessionStorage.getItem(s)},setJSON(s,o){o!=null&&this.set(s,JSON.stringify(o))},getJSON(s){const o=this.get(s);if(o!=null)return JSON.parse(o)},remove(s){sessionStorage.removeItem(s)}},local:{set(s,o){!localStorage||s!=null&&o!=null&&localStorage.setItem(s,o)},get(s){return!localStorage||s==null?null:localStorage.getItem(s)},setJSON(s,o){o!=null&&this.set(s,JSON.stringify(o))},getJSON(s){const o=this.get(s);if(o!=null)return JSON.parse(o)},remove(s){localStorage.removeItem(s)}}}}const{session:H,local:i}=x();var u=b({state(){return{permissions:i.getJSON("permissions")||[],roles:i.getJSON("roles")||[],menus:i.getJSON("menus")||[],garbageMenus:i.getJSON("garbageMenus")||[],userRouter:[],noviceGuidance:i.get("noviceGuidance")||"Y",garbageNoviceGuidance:i.get("garbageNoviceGuidance")||"Y",configStatus:i.get("configStatus")||"DISABLED",showPassWin:!1}},mutations:{login(e,t){window.userToken=t,i.set("ms_token",t)},logout(e){window.userToken="",e.name="",localStorage.clear()},setNoviceGuidance(e,t){e.noviceGuidance=t,i.set("noviceGuidance",t||"N")},setGarbageNoviceGuidance(e,t){e.garbageNoviceGuidance=t,i.set("garbageNoviceGuidance",t||"N")},setShowPassWin(e,t){e.showPassWin=t},setPermissions(e,t){e.permissions=t,i.setJSON("permissions",t)},setRoles(e,t){e.roles=t,i.setJSON("roles",t)},setUserInfo(e,t){e.userInfo=t,i.setJSON("userInfo",t)},setMenus(e,t){e.menus=t,i.setJSON("menus",t)},setGarbageMenus(e,t){e.garbageMenus=t,i.setJSON("garbageMenus",t)},setUserRouter(e,t){e.userRouter=t},setNoviceGuidance(e,t){e.noviceGuidance=t,i.set("noviceGuidance",t)},setConfigStatus(e,t){e.configStatus=t,i.set("configStatus",t)}},getters:{roles:e=>e.roles,permissions:e=>e.permissions},plugins:[]});const z="modulepreload",d={},$="/",c=function(t,s){return!s||s.length===0?t():Promise.all(s.map(o=>{if(o=`${$}${o}`,o in d)return;d[o]=!0;const n=o.endsWith(".css"),r=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":z,n||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),n)return new Promise((p,l)=>{a.addEventListener("load",p),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},W=[{path:"/",redirect:"/home",component:()=>c(()=>import("./Layout-a0d39176.js"),["static/js/Layout-a0d39176.js","assets/Layout-360ddf8e.css","static/js/__vendor-d29dd9de.js","assets/__vendor-42cc8d67.css","static/js/_@vue-8661df55.js","static/js/_element-plus-22095640.js","assets/_element-plus-699910fa.css","static/js/_@element-plus-205714a8.js","static/js/plugin-vue_export-helper-46f75680.js"]),children:[{path:"/home",component:()=>c(()=>import("./Index-7bffdc38.js"),["static/js/Index-7bffdc38.js","assets/Index-3eb12270.css","static/js/__vendor-d29dd9de.js","assets/__vendor-42cc8d67.css","static/js/_@vue-8661df55.js","static/js/_element-plus-22095640.js","assets/_element-plus-699910fa.css","static/js/_@element-plus-205714a8.js","static/js/plugin-vue_export-helper-46f75680.js"]),meta:{title:"\u623F\u95F4\u5217\u8868"}},{path:"/room/group",component:()=>c(()=>import("./group-cb40b108.js"),["static/js/group-cb40b108.js","assets/group-d3184638.css","assets/Pagination.vue_vue_type_style_index_0_scoped_true_lang-6a444ff1.css","static/js/_element-plus-22095640.js","assets/_element-plus-699910fa.css","static/js/__vendor-d29dd9de.js","assets/__vendor-42cc8d67.css","static/js/_@vue-8661df55.js","static/js/_@element-plus-205714a8.js","static/js/plus-fbf0de5b.js","static/js/Pagination-cb60d865.js","static/js/plugin-vue_export-helper-46f75680.js","static/js/request-5e2837fc.js"]),meta:{title:"\u623F\u95F4\u5206\u7EC4"}},{path:"/attend/rule",component:()=>c(()=>import("./rule-c0f861bd.js"),["static/js/rule-c0f861bd.js","assets/rule-88a3f8db.css","static/js/_element-plus-22095640.js","assets/_element-plus-699910fa.css","static/js/__vendor-d29dd9de.js","assets/__vendor-42cc8d67.css","static/js/_@vue-8661df55.js","static/js/_@element-plus-205714a8.js","static/js/plugin-vue_export-helper-46f75680.js"]),meta:{title:"\u8003\u52E4\u89C4\u5219"}},{path:"/attend/statis",component:()=>c(()=>import("./statis-e391070b.js"),["static/js/statis-e391070b.js","assets/statis-0d619ce2.css","assets/Pagination.vue_vue_type_style_index_0_scoped_true_lang-6a444ff1.css","static/js/_element-plus-22095640.js","assets/_element-plus-699910fa.css","static/js/__vendor-d29dd9de.js","assets/__vendor-42cc8d67.css","static/js/_@vue-8661df55.js","static/js/_@element-plus-205714a8.js","static/js/Pagination-cb60d865.js","static/js/plugin-vue_export-helper-46f75680.js"]),meta:{title:"\u8003\u52E4\u7EDF\u8BA1"}},{path:"/attend/qrcode",component:()=>c(()=>import("./qrcode-5dba8b5c.js"),["static/js/qrcode-5dba8b5c.js","static/js/__vendor-d29dd9de.js","assets/__vendor-42cc8d67.css","static/js/_@vue-8661df55.js"]),meta:{title:"\u8003\u52E4\u4E8C\u7EF4\u7801"}},{path:"/people/list",component:()=>c(()=>import("./list-155ecaaf.js"),["static/js/list-155ecaaf.js","assets/list-c9972afb.css","assets/Pagination.vue_vue_type_style_index_0_scoped_true_lang-6a444ff1.css","static/js/_element-plus-22095640.js","assets/_element-plus-699910fa.css","static/js/__vendor-d29dd9de.js","assets/__vendor-42cc8d67.css","static/js/_@vue-8661df55.js","static/js/_@element-plus-205714a8.js","static/js/plus-fbf0de5b.js","static/js/Pagination-cb60d865.js","static/js/plugin-vue_export-helper-46f75680.js"]),meta:{title:"\u4EBA\u5458\u5217\u8868"}},{path:"/people/group",component:()=>c(()=>import("./group-24a00196.js"),["static/js/group-24a00196.js","assets/group-04383c81.css","assets/Pagination.vue_vue_type_style_index_0_scoped_true_lang-6a444ff1.css","static/js/_element-plus-22095640.js","assets/_element-plus-699910fa.css","static/js/__vendor-d29dd9de.js","assets/__vendor-42cc8d67.css","static/js/_@vue-8661df55.js","static/js/_@element-plus-205714a8.js","static/js/plus-fbf0de5b.js","static/js/plugin-vue_export-helper-46f75680.js"]),meta:{title:"\u90E8\u95E8\u5C42\u7EA7"}},{path:"/commission/statis",component:()=>c(()=>import("./statis-60d938dd.js"),["static/js/statis-60d938dd.js","assets/statis-e53e6fec.css","assets/Pagination.vue_vue_type_style_index_0_scoped_true_lang-6a444ff1.css","static/js/_element-plus-22095640.js","assets/_element-plus-699910fa.css","static/js/__vendor-d29dd9de.js","assets/__vendor-42cc8d67.css","static/js/_@vue-8661df55.js","static/js/_@element-plus-205714a8.js","static/js/Pagination-cb60d865.js","static/js/plugin-vue_export-helper-46f75680.js"]),meta:{title:"\u5206\u4F63\u7EDF\u8BA1"}},{path:"/commission/service",component:()=>c(()=>import("./service-783c2804.js"),["static/js/service-783c2804.js","assets/service-411508ce.css","assets/Pagination.vue_vue_type_style_index_0_scoped_true_lang-6a444ff1.css","static/js/_element-plus-22095640.js","assets/_element-plus-699910fa.css","static/js/__vendor-d29dd9de.js","assets/__vendor-42cc8d67.css","static/js/_@vue-8661df55.js","static/js/_@element-plus-205714a8.js","static/js/Pagination-cb60d865.js","static/js/plugin-vue_export-helper-46f75680.js"]),meta:{title:"\u670D\u52A1\u8D39\u5206\u4F63"}},{path:"/commission/goods",component:()=>c(()=>import("./goods-fed4f334.js"),["static/js/goods-fed4f334.js","assets/goods-aabaff25.css","assets/Pagination.vue_vue_type_style_index_0_scoped_true_lang-6a444ff1.css","static/js/_element-plus-22095640.js","assets/_element-plus-699910fa.css","static/js/__vendor-d29dd9de.js","assets/__vendor-42cc8d67.css","static/js/_@vue-8661df55.js","static/js/_@element-plus-205714a8.js","static/js/Pagination-cb60d865.js","static/js/plugin-vue_export-helper-46f75680.js"]),meta:{title:"\u5546\u54C1\u5206\u4F63"}},{path:"/goods/list",component:()=>c(()=>import("./list-a8848344.js"),["static/js/list-a8848344.js","assets/list-21f9bf11.css","assets/Pagination.vue_vue_type_style_index_0_scoped_true_lang-6a444ff1.css","static/js/_element-plus-22095640.js","assets/_element-plus-699910fa.css","static/js/__vendor-d29dd9de.js","assets/__vendor-42cc8d67.css","static/js/_@vue-8661df55.js","static/js/_@element-plus-205714a8.js","static/js/plus-fbf0de5b.js","static/js/Pagination-cb60d865.js","static/js/plugin-vue_export-helper-46f75680.js"]),meta:{title:"\u5546\u54C1\u5217\u8868"}},{path:"/goods/group",component:()=>c(()=>import("./group-f5eadf16.js"),["static/js/group-f5eadf16.js","assets/group-6e7d0da5.css","assets/Pagination.vue_vue_type_style_index_0_scoped_true_lang-6a444ff1.css","static/js/_element-plus-22095640.js","assets/_element-plus-699910fa.css","static/js/__vendor-d29dd9de.js","assets/__vendor-42cc8d67.css","static/js/_@vue-8661df55.js","static/js/_@element-plus-205714a8.js","static/js/plus-fbf0de5b.js","static/js/Pagination-cb60d865.js","static/js/plugin-vue_export-helper-46f75680.js"]),meta:{title:"\u5546\u54C1\u5206\u7C7B"}}]},{path:"/login",name:"login",component:()=>c(()=>import("./Login-32a36c0d.js"),["static/js/Login-32a36c0d.js","assets/Login-d61c16ce.css","static/js/_element-plus-22095640.js","assets/_element-plus-699910fa.css","static/js/__vendor-d29dd9de.js","assets/__vendor-42cc8d67.css","static/js/_@vue-8661df55.js","static/js/_@element-plus-205714a8.js","static/js/request-5e2837fc.js","static/js/plugin-vue_export-helper-46f75680.js"]),meta:{title:"\u767B\u5F55",keepAlive:!1}}],g=J({history:D(),routes:W,scrollBehavior(e,t,s){return{left:0,top:0,behavior:"smooth"}}});g.beforeEach((e,t,s)=>{document.title=`${e.meta.title}`,!(window.userToken||localStorage.getItem("ms_token"))&&e.path!=="/login"?s("/login"):s()});var f={inserted(e,t,s){const{value:o}=t,n="admin",r=u.getters&&u.getters.roles;if(o&&o instanceof Array&&o.length>0){const a=o;r.some(l=>n===l||a.includes(l))||e.parentNode&&e.parentNode.removeChild(e)}else throw new Error('\u8BF7\u8BBE\u7F6E\u89D2\u8272\u6743\u9650\u6807\u7B7E\u503C"')}},h={mounted(e,t,s){const{value:o}=t,n="*:*:*",r=u.getters&&u.getters.permissions;if(o&&o instanceof Array&&o.length>0){const a=o;r.some(l=>n===l||a.includes(l))||e.parentNode&&e.parentNode.removeChild(e)}else throw new Error("\u8BF7\u8BBE\u7F6E\u64CD\u4F5C\u6743\u9650\u6807\u7B7E\u503C")}},v={mounted:function(e,t){e.addEventListener("click",()=>{e.style.pointerEvents==""&&(e.style.pointerEvents="none",setTimeout(()=>{e.style.pointerEvents=""},t.value||1e3))})}};const E=function(e){e.directive("hasRole",f),e.directive("hasPermi",h),e.directive("preventReClick",v)};window.Vue&&(window.hasRole=f,window.hasPermi=h,window.preventReClick=v,Vue.use(E));const m=L(M);m.use(g);m.use(u);m.use(k,{zIndex:3e3});m.use(E);m.mount("#app");export{u as s};
