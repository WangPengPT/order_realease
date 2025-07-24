import{s as ne}from"./index-Bw7hyTyp.js";import{s as ae,b as oe}from"./index-CTzv-46u.js";import{B as ue,c as k,o as C,r as se,m as ie,u as de,h as g,s as pe,C as re,i as me,a as u,d as t,w as d,F as fe,n as _,t as T}from"./index-BE-aujn6.js";import{s as ve,a as ce,b as ge,c as be}from"./index-CxnzbnEW.js";import{s as _e}from"./index-Dsb0oVIZ.js";import{s as ye,a as we}from"./index-CCbwSnEu.js";import{s as xe}from"./index-B2NFfM60.js";import{_ as Ve}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-B_mkyFsU.js";import"./index-fMZjR7Sn.js";import"./index-BB8ejdNj.js";import"./index-DoQR-XDg.js";import"./index-B2_HMXbk.js";var he=`
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
`,ke={root:"p-inputgroup"},Ce=ue.extend({name:"inputgroup",style:he,classes:ke}),De={name:"BaseInputGroup",extends:ae,style:Ce,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},E={name:"InputGroup",extends:De,inheritAttrs:!1};function Ue(D,w,S,U,P,M){return C(),k("div",ie({class:D.cx("root")},D.ptmi("root")),[se(D.$slots,"default")],16)}E.render=Ue;const Ie={class:"card flex flex-column",style:{height:"calc(100vh - 150px)"}},$e={class:"flex justify-content-end gap-2"},Se={key:0},Pe={key:1},Me={class:"flex flex-row align-items-center gap-2"},je={class:"flex align-items-center gap-1"},Fe={class:"flex align-items-center gap-1"},Le={class:"border-1"},Re=["src"],Be={key:1,class:"upload-placeholder"},Oe={class:"flex flex-column"},Ne={class:"flex flex-column w-full"},Te={class:"flex flex-row justify-content-between w-full"},Ee={class:"w-6 m-2"},Ge={class:"w-6 m-2"},Ae={class:"flex flex-row justify-content-between w-full"},qe={class:"w-6 m-2"},Xe={class:"w-6 m-2"},ze={for:"on_label"},He={class:"flex flex-row justify-content-end align-items-center gap-2"},Ke={class:"flex flex-row align-items-center m-2 mb-4 gap-2"},Je={class:"flex items-center align-items-center gap-1"},Qe={class:"flex items-center align-items-center gap-1"},We={class:"flex flex-column"},Ye={class:"flex flex-column w-full"},Ze={class:"flex flex-row justify-content-between w-full"},el={class:"w-6 m-2"},ll={class:"w-6 m-2"},tl={class:"flex flex-row justify-content-end gap-2"},nl={__name:"MenuPage",setup(D){const w=de(),S=g([]),U=g({global:{value:null,matchMode:pe.CONTAINS}}),P=g({}),M=(a,e)=>{if(!e)return a;const s=e.toLowerCase();return a.filter(i=>{var p;const n=Object.entries(i).filter(([v])=>v!=="subitems").some(([v,y])=>String(y).toLowerCase().includes(s)),m=(p=i.subitems)==null?void 0:p.some(v=>Object.values(v).some(y=>String(y).toLowerCase().includes(s)));return n||m}).map(i=>{var m;const n=Object.entries(i).filter(([p])=>p!=="subitems").some(([p,v])=>String(v).toLowerCase().includes(s));return{...i,subitems:n?i.subitems:(m=i.subitems)==null?void 0:m.filter(p=>Object.values(p).some(v=>String(v).toLowerCase().includes(s)))}})},G=re(()=>M(S.value,U.value.global.value)),A=g([]),c=g(null),l=g({}),j=g([]);let f=["name","note","subname"];const I=["","_en","_cn"];let x=["id","price","category","tags","image","soldout"];const V=g(!1),h=g(!1);function q(){V.value=!V.value}function X(){h.value=!h.value}function z(a){b=void 0,V.value=!0,$(a)}function H(a){b=void 0,h.value=!0,$(a)}function $(a,e){F=e,c.value=a;for(let s=0;s<f.length;s++)l.value[f[s]]=a[f[s]],l.value[f[s]+"_en"]=a[f[s]+"_en"],l.value[f[s]+"_cn"]=a[f[s]+"_cn"];l.value.disable=a.disable||!1;for(let s=0;s<x.length;s++)l.value[x[s]]=a[x[s]]}let F=!1;function L(){console.log("apply dish");let a={},e=!1;for(let s=0;s<f.length;s++)for(let i=0;i<I.length;i++){const n=f[s]+I[i];c.value[n]!=l.value[n]&&(a[n]=l.value[n],e=!0)}for(let s=0;s<x.length;s++){let i=x[s];c.value[i]!=l.value[i]&&(e=!0,a[i]=l.value[i])}if(c.value.disable?l.value.disable||(e=!0,a.disable=!1):l.value.disable&&(e=!0,a.disable=!0),!e){w.add({severity:"error",summary:"错误",detail:"没有新的改变!",life:3e3});return}if(e){let s=!1;if(l.value.id=l.value.id.trim(),l.value.id!="")if(l.value.id==c.value.id)s=!0;else{s=!0;for(let i=0;i<_.menuData.value.length;i++)if(l.value.id==_.menuData.value[i].id){s=!1;break}}if(!s){w.add({severity:"error",summary:"错误",detail:`错误ID: ${l.value.id}`,life:3e3});return}if(F)a={...l.value},_.menuData.value.push(a),b?(b.subitems||(b.subitems=[b]),b.subitems.push(a),a.handle=c.value.handle):(a.handle="handle_"+a.id,A.value.push(a));else{a.org_id=c.value.id;for(let i=0;i<f.length;i++)for(let n=0;n<I.length;n++){const m=f[i]+I[n];c.value[m]=l.value[m]}c.value.disable=l.value.disable;for(let i=0;i<x.length;i++){let n=x[i];c.value[n]=l.value[n]}}h.value=!1,V.value=!1,console.log("update_data: ",a),_.updateMenuItem(a)}}let b;function K(a){b=a;let e={id:"",handle:a.handle,category:a.category,subname:"",price:"0"};h.value=!0,$(e,!0)}function J(){b=void 0;let a={id:"",handle:"",category:"",subname:"",price:"0"};V.value=!0,$(a,!0)}function R(){const a=[],e={};for(let s=0;s<_.menuData.value.length;s++){let i=_.menuData.value[s];if(e[i.handle]){let n=e[i.handle];n.subitems||(n.subitems=[n]),n.subitems.find(m=>m.id==i.id)||n.subitems.push(i)}else e[i.handle]=i,a.push(i)}S.value=a,Q()}me(()=>{R()});function Q(){const a={},e=["---","My Box","Pato assado"],s=[{name:"",value:""},{name:"My BOX",value:"My BOX"},{name:"Pato assado",value:"Pato assado"}];for(let i=0;i<_.menuData.value.length;i++){const n=_.menuData.value[i];n.category&&n.category!=""&&(a[n.category]||(a[n.category]=!0,s.push({name:n.category,value:n.category}),e.push(n.category))),n.tags&&n.tags!=""&&(a[n.tags]||(a[n.tags]=!0,s.push({name:n.tags,value:n.tags}),e.push(n.tags)))}j.value=e}const B=g(null);function W(){B.value.click()}function Y(a){const e=a.target.files[0];e&&Z(e)}async function Z(a){let e;e="/upload_image";const i=new FormData;i.append("image",a);try{const n=await fetch(e,{method:"POST",body:i});if(!n.ok)throw new Error("上传失败");const m=await n.json();l.value.image=m.imageUrl,w.add({severity:"success",summary:"成功",detail:"图片上传成功",life:3e3})}catch(n){console.error("上传错误",n),w.add({severity:"error",summary:"错误",detail:"图片上传失败",life:3e3})}}async function ee(){try{await _.refreshMenu(),R(),w.add({severity:"success",summary:"成功",detail:"菜单已刷新",life:3e3})}catch(a){console.error("刷新失败:",a),w.add({severity:"error",summary:"错误",detail:"刷新菜单失败",life:3e3})}}return(a,e)=>{const s=oe,i=we,n=xe,m=ye,p=ce,v=ve,y=ge,r=_e,le=be,te=E,O=ne;return C(),k(fe,null,[u("div",Ie,[t(v,{value:G.value,paginator:"",dataKey:"id",filterDisplay:"row",rows:10,scrollable:"",scrollHeight:"flex",class:"h-full flex flex-column",rowsPerPageOptions:[5,10,15,20,30,40],globalFilterFields:["id","name"],expandedRows:P.value,"onUpdate:expandedRows":e[1]||(e[1]=o=>P.value=o),paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"{first} to {last} of {totalRecords}"},{header:d(()=>[e[24]||(e[24]=u("h4",{class:"m-0 font-bold text-2xl text-left flex-grow-1"},"所有菜单",-1)),u("div",$e,[t(s,{label:"添加新菜",onClick:J}),t(m,null,{default:d(()=>[t(i,null,{default:d(()=>e[23]||(e[23]=[u("i",{class:"pi pi-search"},null,-1)])),_:1,__:[23]}),t(n,{modelValue:U.value.global.value,"onUpdate:modelValue":e[0]||(e[0]=o=>U.value.global.value=o),placeholder:"查找..."},null,8,["modelValue"])]),_:1})])]),expansion:d(o=>[t(s,{label:"添加新子属性菜",onClick:K}),o.data.subitems?(C(),k("div",Se,[t(v,{value:o.data.subitems},{default:d(()=>[t(p,{field:"id",header:"子ID"}),t(p,{field:"subname",header:"子名称"}),t(p,{class:"w-24 !text-end"},{body:d(({data:N})=>[t(s,{icon:"pi pi-pen-to-square",onClick:al=>H(N),severity:"secondary",rounded:""},null,8,["onClick"])]),_:1})]),_:2},1032,["value"])])):(C(),k("div",Pe,T("Nothing")))]),paginatorstart:d(()=>[t(s,{type:"button",icon:"pi pi-refresh",onClick:ee,text:""})]),default:d(()=>[t(p,{expander:"",style:{width:"5rem"}}),t(p,{field:"id",sortable:"",header:"ID"}),t(p,{field:"name",sortable:"",header:"名称"}),t(p,{class:"w-24 !text-end"},{body:d(({data:o})=>[t(s,{icon:"pi pi-pen-to-square",onClick:N=>z(o),severity:"secondary",rounded:""},null,8,["onClick"])]),_:1})]),_:1},8,["value","expandedRows"])]),t(O,{visible:V.value,"onUpdate:visible":e[14]||(e[14]=o=>V.value=o),class:"w-full h-full",header:"Edit Dish",modal:""},{default:d(()=>[u("div",Me,[u("div",je,[t(y,{modelValue:l.value.disable,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value.disable=o),binary:""},null,8,["modelValue"]),e[25]||(e[25]=u("label",null,"Disable",-1))]),u("div",Fe,[t(y,{modelValue:l.value.soldout,"onUpdate:modelValue":e[3]||(e[3]=o=>l.value.soldout=o),binary:""},null,8,["modelValue"]),e[26]||(e[26]=u("label",null,"Soldout",-1))]),u("div",Le,[l.value.image?(C(),k("img",{key:0,src:l.value.image,style:{height:"100px",width:"100px"},onClick:W},null,8,Re)):(C(),k("div",Be,e[27]||(e[27]=[u("div",{class:"q-mt-sm"},"点击选择图片",-1)]))),u("input",{type:"file",ref_key:"fileInput",ref:B,accept:"image/*",style:{display:"none"},onChange:Y},null,544)])]),u("div",Oe,[t(r,{variant:"on"},{default:d(()=>[t(n,{type:"text",modelValue:l.value.name,"onUpdate:modelValue":e[4]||(e[4]=o=>l.value.name=o),class:"w-full m-2"},null,8,["modelValue"]),e[28]||(e[28]=u("label",{for:"on_label"},"name(pt)",-1))]),_:1,__:[28]}),t(r,{variant:"on"},{default:d(()=>[t(n,{type:"text",modelValue:l.value.name_en,"onUpdate:modelValue":e[5]||(e[5]=o=>l.value.name_en=o),class:"w-full m-2"},null,8,["modelValue"]),e[29]||(e[29]=u("label",{for:"on_label"},"name(english)",-1))]),_:1,__:[29]}),t(r,{variant:"on"},{default:d(()=>[t(n,{type:"text",modelValue:l.value.name_cn,"onUpdate:modelValue":e[6]||(e[6]=o=>l.value.name_cn=o),class:"w-full m-2"},null,8,["modelValue"]),e[30]||(e[30]=u("label",{for:"on_label"},"name(中文)",-1))]),_:1,__:[30]}),e[37]||(e[37]=u("div",{class:"p-3"},null,-1)),t(r,{variant:"on"},{default:d(()=>[t(n,{type:"text",modelValue:l.value.note,"onUpdate:modelValue":e[7]||(e[7]=o=>l.value.note=o),class:"w-full m-2"},null,8,["modelValue"]),e[31]||(e[31]=u("label",{for:"on_label"},"descript(pt)",-1))]),_:1,__:[31]}),t(r,{variant:"on"},{default:d(()=>[t(n,{type:"text",modelValue:l.value.note_en,"onUpdate:modelValue":e[8]||(e[8]=o=>l.value.note_en=o),class:"w-full m-2"},null,8,["modelValue"]),e[32]||(e[32]=u("label",{for:"on_label"},"descript(english)",-1))]),_:1,__:[32]}),t(r,{variant:"on"},{default:d(()=>[t(n,{type:"text",modelValue:l.value.note_cn,"onUpdate:modelValue":e[9]||(e[9]=o=>l.value.note_cn=o),class:"w-full m-2"},null,8,["modelValue"]),e[33]||(e[33]=u("label",{for:"on_label"},"descript(中文)",-1))]),_:1,__:[33]}),e[38]||(e[38]=u("div",{class:"p-3"},null,-1)),u("div",Ne,[u("div",Te,[u("div",Ee,[t(r,{variant:"on"},{default:d(()=>[t(n,{type:"number",modelValue:l.value.id,"onUpdate:modelValue":e[10]||(e[10]=o=>l.value.id=o),class:"w-full m-2"},null,8,["modelValue"]),e[34]||(e[34]=u("label",{for:"on_label"},"id",-1))]),_:1,__:[34]})]),u("div",Ge,[t(r,{variant:"on"},{default:d(()=>[t(n,{type:"number",modelValue:l.value.price,"onUpdate:modelValue":e[11]||(e[11]=o=>l.value.price=o),class:"w-full m-2"},null,8,["modelValue"]),e[35]||(e[35]=u("label",{for:"on_label"},"price",-1))]),_:1,__:[35]})])]),u("div",Ae,[u("div",qe,[t(r,{variant:"on"},{default:d(()=>[t(n,{type:"text",modelValue:l.value.category,"onUpdate:modelValue":e[12]||(e[12]=o=>l.value.category=o),class:"w-full m-2"},null,8,["modelValue"]),e[36]||(e[36]=u("label",{for:"on_label"},"category",-1))]),_:1,__:[36]})]),u("div",Xe,[t(te,null,{default:d(()=>[t(r,{variant:"on"},{default:d(()=>[t(le,{modelValue:l.value.tags,"onUpdate:modelValue":e[13]||(e[13]=o=>l.value.tags=o),options:j.value,class:"w-full m-2"},null,8,["modelValue","options"]),u("label",ze,T(l.value.tags),1)]),_:1})]),_:1})])])]),u("div",He,[t(s,{label:"Cancel",onClick:q}),t(s,{label:"Save",onClick:L})])])]),_:1},8,["visible"]),t(O,{visible:h.value,"onUpdate:visible":e[22]||(e[22]=o=>h.value=o),class:"w-full h-full",header:"Edit Item",modal:""},{default:d(()=>[u("div",Ke,[u("div",Je,[t(y,{modelValue:l.value.disable,"onUpdate:modelValue":e[15]||(e[15]=o=>l.value.disable=o),binary:""},null,8,["modelValue"]),e[39]||(e[39]=u("label",null,"Disable",-1))]),u("div",Qe,[t(y,{modelValue:l.value.soldout,"onUpdate:modelValue":e[16]||(e[16]=o=>l.value.soldout=o),binary:""},null,8,["modelValue"]),e[40]||(e[40]=u("label",null,"Soldout",-1))])]),u("div",We,[t(r,{variant:"on"},{default:d(()=>[t(n,{type:"text",modelValue:l.value.subname,"onUpdate:modelValue":e[17]||(e[17]=o=>l.value.subname=o),class:"w-full m-2"},null,8,["modelValue"]),e[41]||(e[41]=u("label",{for:"on_label"},"subname(pt)",-1))]),_:1,__:[41]}),t(r,{variant:"on"},{default:d(()=>[t(n,{type:"text",modelValue:l.value.subname_en,"onUpdate:modelValue":e[18]||(e[18]=o=>l.value.subname_en=o),class:"w-full m-2"},null,8,["modelValue"]),e[42]||(e[42]=u("label",{for:"on_label"},"subname(english)",-1))]),_:1,__:[42]}),t(r,{variant:"on"},{default:d(()=>[t(n,{type:"text",modelValue:l.value.subname_cn,"onUpdate:modelValue":e[19]||(e[19]=o=>l.value.subname_cn=o),class:"w-full m-2"},null,8,["modelValue"]),e[43]||(e[43]=u("label",{for:"on_label"},"subname(中文)",-1))]),_:1,__:[43]}),e[46]||(e[46]=u("div",{class:"p-3"},null,-1)),u("div",Ye,[u("div",Ze,[u("div",el,[t(r,{variant:"on"},{default:d(()=>[t(n,{type:"number",modelValue:l.value.id,"onUpdate:modelValue":e[20]||(e[20]=o=>l.value.id=o),class:"w-full m-2"},null,8,["modelValue"]),e[44]||(e[44]=u("label",{for:"on_label"},"id",-1))]),_:1,__:[44]})]),u("div",ll,[t(r,{variant:"on"},{default:d(()=>[t(n,{type:"number",modelValue:l.value.price,"onUpdate:modelValue":e[21]||(e[21]=o=>l.value.price=o),class:"w-full m-2"},null,8,["modelValue"]),e[45]||(e[45]=u("label",{for:"on_label"},"price",-1))]),_:1,__:[45]})])])]),u("div",tl,[t(s,{label:"Cancel",onClick:X}),t(s,{label:"Save",onClick:L})])])]),_:1},8,["visible"])],64)}}},_l=Ve(nl,[["__scopeId","data-v-7b22083a"]]);export{_l as default};
