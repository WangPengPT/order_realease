import{s as ae}from"./index-C9sHzxGz.js";import{s as ue,a as se,b as ie,c as de,d as re}from"./index-D2QaFu4X.js";import{s as pe,b as me}from"./index-2xuslDVO.js";import{B as fe,c as k,o as D,r as ve,m as ce,u as be,h as b,y as ge,E as _e,i as we,a as t,d as n,w as d,F as ye,n as _,t as P}from"./index-CPglD95J.js";import{s as xe}from"./index-BfprNMmG.js";import{s as Ve,a as he}from"./index-CvRyHg3R.js";import{s as ke}from"./index-DL6jIj-w.js";import{_ as De}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-f5mji0sK.js";import"./index-CidjEKZH.js";import"./index-DBFeidwZ.js";import"./index-CNFbPPBa.js";import"./index-B2QEePNG.js";import"./index-qwhjxsUf.js";var Ce=`
    .p-inputgroup,
    .p-inputgroup .p-iconfield,
    .p-inputgroup .p-floatlabel,
    .p-inputgroup .p-iftalabel {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .p-inputgroup .p-inputtext,
    .p-inputgroup .p-inputwrapper {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-inputgroupaddon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('inputgroup.addon.padding');
        background: dt('inputgroup.addon.background');
        color: dt('inputgroup.addon.color');
        border-block-start: 1px solid dt('inputgroup.addon.border.color');
        border-block-end: 1px solid dt('inputgroup.addon.border.color');
        min-width: dt('inputgroup.addon.min.width');
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
        border-inline-start: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:last-child {
        border-inline-end: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:has(.p-button) {
        padding: 0;
        overflow: hidden;
    }

    .p-inputgroupaddon .p-button {
        border-radius: 0;
    }

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iconfield > .p-component,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroup > .p-component:first-child,
    .p-inputgroup > .p-inputwrapper:first-child > .p-component,
    .p-inputgroup > .p-iconfield:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroupaddon:last-child,
    .p-inputgroup > .p-component:last-child,
    .p-inputgroup > .p-inputwrapper:last-child > .p-component,
    .p-inputgroup > .p-iconfield:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup .p-component:focus,
    .p-inputgroup .p-component.p-focus,
    .p-inputgroup .p-inputwrapper-focus,
    .p-inputgroup .p-component:focus ~ label,
    .p-inputgroup .p-component.p-focus ~ label,
    .p-inputgroup .p-inputwrapper-focus ~ label {
        z-index: 1;
    }

    .p-inputgroup > .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    .p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
        border-inline-start: 0;
    }
`,Ue={root:"p-inputgroup"},Ie=fe.extend({name:"inputgroup",style:Ce,classes:Ue}),$e={name:"BaseInputGroup",extends:pe,style:Ie,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},G={name:"InputGroup",extends:$e,inheritAttrs:!1};function Pe(C,y,S,U,M,j){return D(),k("div",ce({class:C.cx("root")},C.ptmi("root")),[ve(C.$slots,"default")],16)}G.render=Pe;const Se={class:"card flex flex-column",style:{height:"calc(100vh - 150px)"}},Me={class:"flex justify-content-end gap-2"},je={key:0},Fe={key:1},Le={class:"flex flex-row align-items-center gap-2"},Re={class:"flex align-items-center gap-1"},Be={class:"flex align-items-center gap-1"},Oe={class:"border-1"},Ne=["src"],Te={key:1,class:"upload-placeholder"},Ee={class:"flex flex-column"},Ge={class:"flex flex-column w-full"},Ae={class:"flex flex-row justify-content-between w-full"},qe={class:"w-6 m-2"},Xe={class:"w-6 m-2"},ze={class:"flex flex-row justify-content-between w-full"},He={class:"w-6 m-2"},Ke={class:"w-6 m-2"},Je={for:"on_label"},Qe={class:"flex flex-row justify-content-between w-full"},We={class:"w-6 m-2"},Ye={class:"flex align-items-center w-6 m-2"},Ze={class:"font-bold"},el={class:"flex flex-row justify-content-end align-items-center gap-2"},ll={class:"flex flex-row align-items-center m-2 mb-4 gap-2"},tl={class:"flex items-center align-items-center gap-1"},nl={class:"flex items-center align-items-center gap-1"},ol={class:"flex flex-column"},al={class:"flex flex-column w-full"},ul={class:"flex flex-row justify-content-between w-full"},sl={class:"w-6 m-2"},il={class:"w-6 m-2"},dl={class:"flex flex-row justify-content-between w-full"},rl={class:"w-6 m-2"},pl={class:"flex align-items-center w-6 m-2"},ml={class:"font-bold"},fl={class:"flex flex-row justify-content-end gap-2"},vl={__name:"MenuPage",setup(C){const y=be(),S=b([]),U=b({global:{value:null,matchMode:ge.CONTAINS}}),M=b({}),j=(a,e)=>{if(!e)return a;const s=e.toLowerCase();return a.filter(i=>{var p;const o=Object.entries(i).filter(([v])=>v!=="subitems").some(([v,w])=>String(w).toLowerCase().includes(s)),m=(p=i.subitems)==null?void 0:p.some(v=>Object.values(v).some(w=>String(w).toLowerCase().includes(s)));return o||m}).map(i=>{var m;const o=Object.entries(i).filter(([p])=>p!=="subitems").some(([p,v])=>String(v).toLowerCase().includes(s));return{...i,subitems:o?i.subitems:(m=i.subitems)==null?void 0:m.filter(p=>Object.values(p).some(v=>String(v).toLowerCase().includes(s)))}})},A=_e(()=>j(S.value,U.value.global.value)),q=b([]),c=b(null),l=b({}),F=b([]);let f=["name","note","subname"];const I=["","_en","_cn"];let x=["id","price","category","tags","image","soldout"];const V=b(!1),h=b(!1);function X(){V.value=!V.value}function z(){h.value=!h.value}function H(a){g=void 0,V.value=!0,$(a)}function K(a){g=void 0,h.value=!0,$(a)}function $(a,e){L=e,c.value=a;for(let s=0;s<f.length;s++)l.value[f[s]]=a[f[s]],l.value[f[s]+"_en"]=a[f[s]+"_en"],l.value[f[s]+"_cn"]=a[f[s]+"_cn"];l.value.disable=a.disable||!1;for(let s=0;s<x.length;s++)l.value[x[s]]=a[x[s]]}let L=!1;function R(){console.log("apply dish");let a={},e=!1;l.value.discount?(l.value.discount=Math.round(l.value.discount),l.value.discount>99&&(l.value.discount=99),l.value.discount<=0?(l.value.dis_price=void 0,l.value.discount=void 0):(l.value.dis_price=l.value.price*(100-l.value.discount),l.value.dis_price=Math.round(l.value.dis_price)/100,console.log(l.value.price*(100-l.value.discount)))):l.value.dis_price=void 0;for(let s=0;s<f.length;s++)for(let i=0;i<I.length;i++){const o=f[s]+I[i];c.value[o]!=l.value[o]&&(a[o]=l.value[o],e=!0)}for(let s=0;s<x.length;s++){let i=x[s];c.value[i]!=l.value[i]&&(e=!0,a[i]=l.value[i])}if(c.value.disable?l.value.disable||(e=!0,a.disable=!1):l.value.disable&&(e=!0,a.disable=!0),!e){y.add({severity:"error",summary:"错误",detail:"没有新的改变!",life:3e3});return}if(e){let s=!1;if(l.value.id=l.value.id.trim(),l.value.id!="")if(l.value.id==c.value.id)s=!0;else{s=!0;for(let i=0;i<_.menuData.value.length;i++)if(l.value.id==_.menuData.value[i].id){s=!1;break}}if(!s){y.add({severity:"error",summary:"错误",detail:`错误ID: ${l.value.id}`,life:3e3});return}if(L)a={...l.value},_.menuData.value.push(a),g?(g.subitems||(g.subitems=[g]),g.subitems.push(a),a.handle=c.value.handle):(a.handle="handle_"+a.id,q.value.push(a));else{a.org_id=c.value.id;for(let i=0;i<f.length;i++)for(let o=0;o<I.length;o++){const m=f[i]+I[o];c.value[m]=l.value[m]}c.value.disable=l.value.disable;for(let i=0;i<x.length;i++){let o=x[i];c.value[o]=l.value[o]}}h.value=!1,V.value=!1,console.log("update_data: ",a),_.updateMenuItem(a)}}function B(a,e){return!a||a==0?e:((1-a/100)*e).toFixed(2)}let g;function J(a){g=a;let e={id:"",handle:a.handle,category:a.category,subname:"",price:"0"};h.value=!0,$(e,!0)}function Q(){g=void 0;let a={id:"",handle:"",category:"",subname:"",price:"0"};V.value=!0,$(a,!0)}function O(){const a=[],e={};for(let s=0;s<_.menuData.value.length;s++){let i=_.menuData.value[s];if(e[i.handle]){let o=e[i.handle];o.subitems||(o.subitems=[o]),o.subitems.find(m=>m.id==i.id)||o.subitems.push(i)}else e[i.handle]=i,a.push(i)}S.value=a,W()}we(()=>{O()});function W(){const a={},e=["---","My Box","Pato assado"],s=[{name:"",value:""},{name:"My BOX",value:"My BOX"},{name:"Pato assado",value:"Pato assado"}];for(let i=0;i<_.menuData.value.length;i++){const o=_.menuData.value[i];o.category&&o.category!=""&&(a[o.category]||(a[o.category]=!0,s.push({name:o.category,value:o.category}),e.push(o.category))),o.tags&&o.tags!=""&&(a[o.tags]||(a[o.tags]=!0,s.push({name:o.tags,value:o.tags}),e.push(o.tags)))}F.value=e}const N=b(null);function Y(){N.value.click()}function Z(a){const e=a.target.files[0];e&&ee(e)}async function ee(a){let e;e="/upload_image";const i=new FormData;i.append("image",a);try{const o=await fetch(e,{method:"POST",body:i});if(!o.ok)throw new Error("上传失败");const m=await o.json();l.value.image=m.imageUrl,y.add({severity:"success",summary:"成功",detail:"图片上传成功",life:3e3})}catch(o){console.error("上传错误",o),y.add({severity:"error",summary:"错误",detail:"图片上传失败",life:3e3})}}async function le(){try{await _.refreshMenu(),O(),y.add({severity:"success",summary:"成功",detail:"菜单已刷新",life:3e3})}catch(a){console.error("刷新失败:",a),y.add({severity:"error",summary:"错误",detail:"刷新菜单失败",life:3e3})}}return(a,e)=>{const s=me,i=he,o=ke,m=Ve,p=se,v=ue,w=ie,r=xe,te=de,ne=G,oe=re,T=ae;return D(),k(ye,null,[t("div",Se,[n(v,{value:A.value,paginator:"",dataKey:"id",filterDisplay:"row",rows:10,scrollable:"",scrollHeight:"flex",class:"h-full flex flex-column",rowsPerPageOptions:[5,10,15,20,30,40],globalFilterFields:["id","name"],expandedRows:M.value,"onUpdate:expandedRows":e[1]||(e[1]=u=>M.value=u),paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"{first} to {last} of {totalRecords}"},{header:d(()=>[e[26]||(e[26]=t("h4",{class:"m-0 font-bold text-2xl text-left flex-grow-1"},"所有菜单",-1)),t("div",Me,[n(s,{label:"添加新菜",onClick:Q}),n(m,null,{default:d(()=>[n(i,null,{default:d(()=>e[25]||(e[25]=[t("i",{class:"pi pi-search"},null,-1)])),_:1,__:[25]}),n(o,{modelValue:U.value.global.value,"onUpdate:modelValue":e[0]||(e[0]=u=>U.value.global.value=u),placeholder:"查找..."},null,8,["modelValue"])]),_:1})])]),expansion:d(u=>[n(s,{label:"添加新子属性菜",onClick:J}),u.data.subitems?(D(),k("div",je,[n(v,{value:u.data.subitems},{default:d(()=>[n(p,{field:"id",header:"子ID"}),n(p,{field:"subname",header:"子名称"}),n(p,{class:"w-24 !text-end"},{body:d(({data:E})=>[n(s,{icon:"pi pi-pen-to-square",onClick:cl=>K(E),severity:"secondary",rounded:""},null,8,["onClick"])]),_:1})]),_:2},1032,["value"])])):(D(),k("div",Fe,P("Nothing")))]),paginatorstart:d(()=>[n(s,{type:"button",icon:"pi pi-refresh",onClick:le,text:""})]),default:d(()=>[n(p,{expander:"",style:{width:"5rem"}}),n(p,{field:"id",sortable:"",header:"ID"}),n(p,{field:"name",sortable:"",header:"名称"}),n(p,{class:"w-24 !text-end"},{body:d(({data:u})=>[n(s,{icon:"pi pi-pen-to-square",onClick:E=>H(u),severity:"secondary",rounded:""},null,8,["onClick"])]),_:1})]),_:1},8,["value","expandedRows"])]),n(T,{visible:V.value,"onUpdate:visible":e[15]||(e[15]=u=>V.value=u),class:"w-full h-full",header:"Edit Dish",modal:""},{default:d(()=>[t("div",Le,[t("div",Re,[n(w,{modelValue:l.value.disable,"onUpdate:modelValue":e[2]||(e[2]=u=>l.value.disable=u),binary:""},null,8,["modelValue"]),e[27]||(e[27]=t("label",null,"Disable",-1))]),t("div",Be,[n(w,{modelValue:l.value.soldout,"onUpdate:modelValue":e[3]||(e[3]=u=>l.value.soldout=u),binary:""},null,8,["modelValue"]),e[28]||(e[28]=t("label",null,"Soldout",-1))]),t("div",Oe,[l.value.image?(D(),k("img",{key:0,src:l.value.image,style:{height:"100px",width:"100px"},onClick:Y},null,8,Ne)):(D(),k("div",Te,e[29]||(e[29]=[t("div",{class:"q-mt-sm"},"点击选择图片",-1)]))),t("input",{type:"file",ref_key:"fileInput",ref:N,accept:"image/*",style:{display:"none"},onChange:Z},null,544)])]),t("div",Ee,[n(r,{variant:"on"},{default:d(()=>[n(o,{type:"text",modelValue:l.value.name,"onUpdate:modelValue":e[4]||(e[4]=u=>l.value.name=u),class:"w-full m-2"},null,8,["modelValue"]),e[30]||(e[30]=t("label",{for:"on_label"},"name(pt)",-1))]),_:1,__:[30]}),n(r,{variant:"on"},{default:d(()=>[n(o,{type:"text",modelValue:l.value.name_en,"onUpdate:modelValue":e[5]||(e[5]=u=>l.value.name_en=u),class:"w-full m-2"},null,8,["modelValue"]),e[31]||(e[31]=t("label",{for:"on_label"},"name(english)",-1))]),_:1,__:[31]}),n(r,{variant:"on"},{default:d(()=>[n(o,{type:"text",modelValue:l.value.name_cn,"onUpdate:modelValue":e[6]||(e[6]=u=>l.value.name_cn=u),class:"w-full m-2"},null,8,["modelValue"]),e[32]||(e[32]=t("label",{for:"on_label"},"name(中文)",-1))]),_:1,__:[32]}),e[41]||(e[41]=t("div",{class:"p-3"},null,-1)),n(r,{variant:"on"},{default:d(()=>[n(o,{type:"text",modelValue:l.value.note,"onUpdate:modelValue":e[7]||(e[7]=u=>l.value.note=u),class:"w-full m-2"},null,8,["modelValue"]),e[33]||(e[33]=t("label",{for:"on_label"},"descript(pt)",-1))]),_:1,__:[33]}),n(r,{variant:"on"},{default:d(()=>[n(o,{type:"text",modelValue:l.value.note_en,"onUpdate:modelValue":e[8]||(e[8]=u=>l.value.note_en=u),class:"w-full m-2"},null,8,["modelValue"]),e[34]||(e[34]=t("label",{for:"on_label"},"descript(english)",-1))]),_:1,__:[34]}),n(r,{variant:"on"},{default:d(()=>[n(o,{type:"text",modelValue:l.value.note_cn,"onUpdate:modelValue":e[9]||(e[9]=u=>l.value.note_cn=u),class:"w-full m-2"},null,8,["modelValue"]),e[35]||(e[35]=t("label",{for:"on_label"},"descript(中文)",-1))]),_:1,__:[35]}),e[42]||(e[42]=t("div",{class:"p-3"},null,-1)),t("div",Ge,[t("div",Ae,[t("div",qe,[n(r,{variant:"on"},{default:d(()=>[n(o,{type:"number",modelValue:l.value.id,"onUpdate:modelValue":e[10]||(e[10]=u=>l.value.id=u),class:"w-full m-2"},null,8,["modelValue"]),e[36]||(e[36]=t("label",{for:"on_label"},"id",-1))]),_:1,__:[36]})]),t("div",Xe,[n(r,{variant:"on"},{default:d(()=>[n(o,{type:"number",modelValue:l.value.price,"onUpdate:modelValue":e[11]||(e[11]=u=>l.value.price=u),class:"w-full m-2"},null,8,["modelValue"]),e[37]||(e[37]=t("label",{for:"on_label"},"price",-1))]),_:1,__:[37]})])]),t("div",ze,[t("div",He,[n(r,{variant:"on"},{default:d(()=>[n(o,{type:"text",modelValue:l.value.category,"onUpdate:modelValue":e[12]||(e[12]=u=>l.value.category=u),class:"w-full m-2"},null,8,["modelValue"]),e[38]||(e[38]=t("label",{for:"on_label"},"category",-1))]),_:1,__:[38]})]),t("div",Ke,[n(ne,null,{default:d(()=>[n(r,{variant:"on"},{default:d(()=>[n(te,{modelValue:l.value.tags,"onUpdate:modelValue":e[13]||(e[13]=u=>l.value.tags=u),options:F.value,class:"w-full m-2"},null,8,["modelValue","options"]),t("label",Je,P(l.value.tags),1)]),_:1})]),_:1})])]),t("div",Qe,[t("div",We,[n(r,{variant:"on"},{default:d(()=>[n(oe,{type:"number",modelValue:l.value.discount,"onUpdate:modelValue":e[14]||(e[14]=u=>l.value.discount=u),class:"w-full m-2",min:"0",max:"99"},null,8,["modelValue"]),e[39]||(e[39]=t("label",{for:"on_label"},"Discount",-1))]),_:1,__:[39]})]),t("div",Ye,[e[40]||(e[40]=t("label",null,"Discount Price: ",-1)),t("label",Ze," €"+P(B(l.value.discount,l.value.price)),1)])])]),t("div",el,[n(s,{label:"Cancel",onClick:X}),n(s,{label:"Save",onClick:R})])])]),_:1},8,["visible"]),n(T,{visible:h.value,"onUpdate:visible":e[24]||(e[24]=u=>h.value=u),class:"w-full h-full",header:"Edit Item",modal:""},{default:d(()=>[t("div",ll,[t("div",tl,[n(w,{modelValue:l.value.disable,"onUpdate:modelValue":e[16]||(e[16]=u=>l.value.disable=u),binary:""},null,8,["modelValue"]),e[43]||(e[43]=t("label",null,"Disable",-1))]),t("div",nl,[n(w,{modelValue:l.value.soldout,"onUpdate:modelValue":e[17]||(e[17]=u=>l.value.soldout=u),binary:""},null,8,["modelValue"]),e[44]||(e[44]=t("label",null,"Soldout",-1))])]),t("div",ol,[n(r,{variant:"on"},{default:d(()=>[n(o,{type:"text",modelValue:l.value.subname,"onUpdate:modelValue":e[18]||(e[18]=u=>l.value.subname=u),class:"w-full m-2"},null,8,["modelValue"]),e[45]||(e[45]=t("label",{for:"on_label"},"subname(pt)",-1))]),_:1,__:[45]}),n(r,{variant:"on"},{default:d(()=>[n(o,{type:"text",modelValue:l.value.subname_en,"onUpdate:modelValue":e[19]||(e[19]=u=>l.value.subname_en=u),class:"w-full m-2"},null,8,["modelValue"]),e[46]||(e[46]=t("label",{for:"on_label"},"subname(english)",-1))]),_:1,__:[46]}),n(r,{variant:"on"},{default:d(()=>[n(o,{type:"text",modelValue:l.value.subname_cn,"onUpdate:modelValue":e[20]||(e[20]=u=>l.value.subname_cn=u),class:"w-full m-2"},null,8,["modelValue"]),e[47]||(e[47]=t("label",{for:"on_label"},"subname(中文)",-1))]),_:1,__:[47]}),e[52]||(e[52]=t("div",{class:"p-3"},null,-1)),t("div",al,[t("div",ul,[t("div",sl,[n(r,{variant:"on"},{default:d(()=>[n(o,{type:"number",modelValue:l.value.id,"onUpdate:modelValue":e[21]||(e[21]=u=>l.value.id=u),class:"w-full m-2"},null,8,["modelValue"]),e[48]||(e[48]=t("label",{for:"on_label"},"id",-1))]),_:1,__:[48]})]),t("div",il,[n(r,{variant:"on"},{default:d(()=>[n(o,{type:"number",modelValue:l.value.price,"onUpdate:modelValue":e[22]||(e[22]=u=>l.value.price=u),class:"w-full m-2"},null,8,["modelValue"]),e[49]||(e[49]=t("label",{for:"on_label"},"price",-1))]),_:1,__:[49]})])]),t("div",dl,[t("div",rl,[n(r,{variant:"on"},{default:d(()=>[n(o,{type:"number",modelValue:l.value.discount,"onUpdate:modelValue":e[23]||(e[23]=u=>l.value.discount=u),class:"w-full m-2",min:"0",max:"99"},null,8,["modelValue"]),e[50]||(e[50]=t("label",{for:"on_label"},"Discount",-1))]),_:1,__:[50]})]),t("div",pl,[e[51]||(e[51]=t("label",null,"Discount Price: ",-1)),t("label",ml," €"+P(B(l.value.discount,l.value.price)),1)])])]),t("div",fl,[n(s,{label:"Cancel",onClick:z}),n(s,{label:"Save",onClick:R})])])]),_:1},8,["visible"])],64)}}},Pl=De(vl,[["__scopeId","data-v-2a3e06b6"]]);export{Pl as default};
