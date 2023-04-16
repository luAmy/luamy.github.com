function r(n){let e="?";for(let t in n)n[t]===""?e+=`${t}&`:e+=`${t}=${n[t]}&`;return e=e.substring(0,e.length-1),e}export{r as g};
