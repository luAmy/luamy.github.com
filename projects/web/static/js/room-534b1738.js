import{s as r}from"./request-d4805155.js";function n(o){let t="?";for(let e in o)o[e]===""?t+=`${e}&`:t+=`${e}=${o[e]}&`;return t=t.substring(0,t.length-1),t}const s="/admin/room",i=o=>r.get(`${s}/list${n(o)}`,{}),m=o=>r.post(`${s}/creatRoom`,o),a=o=>r.post(`${s}/delRoom`,o),$=o=>r.get(`${s}/roomType`,o);export{i as a,m as c,a as d,$ as r};
