import{s as h}from"./index-CWtKsrnp.js";async function g(f,c,n,e=1e3){let a=[],l=0,r=!0;for(;r;){let s=h.from(f).select(c).range(l*e,(l+1)*e-1);n&&(s=n(s));const{data:t,error:o}=await s;if(o)throw o;t&&t.length>0?(a=a.concat(t),r=t.length===e,l++):r=!1}return a}export{g as f};
//# sourceMappingURL=paginatedQuery-0aSZsXF2.js.map
