import{v as $t,B as vt,x as xt,y as St,f as u,q as r,l as et,i as x,z as at,A as P,C as kt,h as s,t as h,n as dt,r as B,g as y,F as Q,p as Y,k as v,e as k,j as A,D as te,u as yt,s as _t,d as ee,E as pe,G as fe,c as mt,w as ve,m as it,R as ae,H as Et,I as he,J as Vt,K as be,L as Nt,M as me,N as Mt,O as At,P as Lt,Q as ge,S as ye,T as zt,o as $e,a as xe,U as we,V as ke,b as _e}from"./index-BQuQzlEq.js";import{D as W,s as Tt,a as Te,c as tt,b as Kt,d as se,e as Ie,f as Ce}from"./index-XfIGEo7C.js";import{s as H,a as ne}from"./index-DVkZZFkR.js";import{_ as qt}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as Wt,d as Ht,b as Ut,a as Qt,s as Jt}from"./index-D0hdonQI.js";import{s as De}from"./index-ZIxzGsld.js";var Se=$t`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,Be={root:function(e){var n=e.props;return["p-tag p-component",{"p-tag-info":n.severity==="info","p-tag-success":n.severity==="success","p-tag-warn":n.severity==="warn","p-tag-danger":n.severity==="danger","p-tag-secondary":n.severity==="secondary","p-tag-contrast":n.severity==="contrast","p-tag-rounded":n.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Pe=vt.extend({name:"tag",style:Se,classes:Be}),Ne={name:"BaseTag",extends:xt,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Pe,provide:function(){return{$pcTag:this,$parentInstance:this}}};function It(t){"@babel/helpers - typeof";return It=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},It(t)}function ze(t,e,n){return(e=Ae(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ae(t){var e=Le(t,"string");return It(e)=="symbol"?e:e+""}function Le(t,e){if(It(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var c=n.call(t,e);if(It(c)!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var wt={name:"Tag",extends:Ne,inheritAttrs:!1,computed:{dataP:function(){return St(ze({rounded:this.rounded},this.severity,this.severity))}}},qe=["data-p"];function Oe(t,e,n,c,$,o){return r(),u("span",P({class:t.cx("root"),"data-p":o.dataP},t.ptmi("root")),[t.$slots.icon?(r(),et(kt(t.$slots.icon),P({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(r(),u("span",P({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):x("",!0),t.value!=null||t.$slots.default?at(t.$slots,"default",{key:2},function(){return[s("span",P({class:t.cx("label")},t.ptm("label")),h(t.value),17)]}):x("",!0)],16,qe)}wt.render=Oe;var Re=$t`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`,Ee={root:function(e){var n=e.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Ve=vt.extend({name:"avatar",style:Re,classes:Ee}),je={name:"BaseAvatar",extends:xt,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ve,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function Ct(t){"@babel/helpers - typeof";return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ct(t)}function Gt(t,e,n){return(e=Fe(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Fe(t){var e=Me(t,"string");return Ct(e)=="symbol"?e:e+""}function Me(t,e){if(Ct(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var c=n.call(t,e);if(Ct(c)!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var oe={name:"Avatar",extends:je,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}},computed:{dataP:function(){return St(Gt(Gt({},this.shape,this.shape),this.size,this.size))}}},Ke=["aria-labelledby","aria-label","data-p"],We=["data-p"],He=["data-p"],Ue=["src","alt","data-p"];function Qe(t,e,n,c,$,o){return r(),u("div",P({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root"),{"data-p":o.dataP}),[at(t.$slots,"default",{},function(){return[t.label?(r(),u("span",P({key:0,class:t.cx("label")},t.ptm("label"),{"data-p":o.dataP}),h(t.label),17,We)):t.$slots.icon?(r(),et(kt(t.$slots.icon),{key:1,class:dt(t.cx("icon"))},null,8,["class"])):t.icon?(r(),u("span",P({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon"),{"data-p":o.dataP}),null,16,He)):t.image?(r(),u("img",P({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return o.onError&&o.onError.apply(o,arguments)})},t.ptm("image"),{"data-p":o.dataP}),null,16,Ue)):x("",!0)]})],16,Ke)}oe.render=Qe;const Je={class:"grid"},Ge={class:"flex flex-column"},Xe=["onClick"],Ye={class:"p-1 flex-shrink-0 w-7rem h-7rem flex align-items-center justify-content-center overflow-hidden"},Ze=["src","alt"],ta={class:"flex flex-column justify-content-center"},ea={class:"font-bold"},aa={class:"flex flex-wrap gap-2"},sa={class:"flex gap-1 align-items-center"},na={class:"text-color-secondary line2"},oa={key:0,class:"text-xl font-bold text-primary"},ia={key:1,class:"flex align-items-center gap-1"},ra={class:"text-l font-bold text-color-secondary"},la={class:"text-sm line-through text-500"},ua={key:2,class:"flex gap-2 mr-2",id:"card-quantity"},da={class:"w-2rem text-xl text-center"},ca={key:3,class:"flex gap-2 mr-2"},pa={key:0,class:"m-2 mt-0"},fa={class:"flex flex-row justify-content-between align-content-center"},va={class:"flex flex-column"},ha={class:"text-l font-bold"},ba={key:0,class:"text-l font-bold text-color-secondary"},ma={key:1,class:"flex align-items-center gap-1"},ga={class:"text-l font-bold text-color-secondary"},ya={class:"text-sm line-through text-500"},$a={key:0,class:"flex ml-2 mr-2"},xa={class:"w-2rem text-xl text-center"},wa={key:1,class:"flex gap-2 mr-3 pt-2 pb-2"},ka={class:"max-w-5rem flex align-items-center"},_a={class:"font-bold whitespace-nowrap"},Ta={class:"mb-2 flex justify-content-center"},Ia={class:"font-bold text-center"},Ca={class:"mb-2"},Da={class:"text-color-secondary m-0 line-height-3 line2 text-center"},Sa={class:"mb-2"},Ba={class:"flex justify-content-center"},Pa=["src","alt"],Na={class:"flex align-items-center gap-2"},za=["src","alt"],Aa={class:"flex align-items-center gap-3 ml-auto"},La={__name:"DishList",props:{updateCartItemCount:{type:Function,required:!0},rateDish:{type:Function,required:!0},likedItemsRef:Array,dislikedItemsRef:Array},setup(t){const e=W.dishes;let n={rated:!1,id:null,like:0,rate:0};function c(){var d;const a=k.currentPageData.value,i=(d=a==null?void 0:a.data)==null?void 0:d.logoPath;return i?i:"/images/logo_logo.png"}function $(a){return a}const o=(a,i)=>{const d=e.value[a].quantity+i;d>=0&&(e.value[a].quantity=d,M.updateCartItemCount(i))},C=(a,i)=>{const d=W.dishDatas.value[a].quantity+i;d>=0&&(W.dishDatas.value[a].quantity=d,M.updateCartItemCount(i))},w=a=>W.dishDatas.value[a]?W.dishDatas.value[a].quantity:0,F=a=>{const i=W.dishDatas.value[a];if(i){if(!i.category){const d=e.value.find(O=>O.handle===i.handle);if(d.limit)return R(d)}return R(i)}return!0},R=a=>{const i=a.quantity;let d=3;if(a.price>0&&(d=9),a.limit){const O=a.id,_=q(),ht=(_.peopleType.adults+_.peopleType.children)*a.limit,ot=_.order.find(gt=>gt.dishid==O);let bt=0;if(a.subitem)for(const gt of a.subitem){bt+=w(gt);const Bt=_.order.find(Pt=>Pt.dishid==X(gt));Bt&&(bt+=Bt.quantity)}else bt+=a.quantity,ot&&(bt+=ot.quantity);return i>=d||ht&&bt>=ht}return i>=d},J=a=>W.dishDatas.value[a]?!W.dishDatas.value[a].disable:!0,z=a=>W.dishDatas.value[a]?W.dishDatas.value[a].soldout:!1,V=a=>W.dishDatas.value[a]?k.getItemLocalValue(W.dishDatas.value[a],"subname"):"",X=a=>W.dishDatas.value[a]?W.dishDatas.value[a].id:0,S=a=>W.dishDatas.value[a]?W.dishDatas.value[a].price:10,st=a=>W.dishDatas.value[a]?W.dishDatas.value[a].dis_price:10,Z=a=>{const i=W.dishDatas.value[a];return i&&i.discount?i.discount:0},rt=a=>Z(a)>0,L=a=>S(a)>0?!rt(a):!1,q=()=>k.getTableValue();function G(){M.rateDish(n.id,n.like,n.rate,n.rated),n.id=null,n.like=0,n.rate=0,n.rated=!1}const nt=a=>{const i=M.likedItemsRef.indexOf(a);if(n.id=a.id,i!==-1)M.likedItemsRef.splice(i,1),n.like+=-1,n.rate+=-1,n.rated=!1;else{n.rated=!0,M.likedItemsRef.push(a);const d=M.dislikedItemsRef.indexOf(a);d!==-1?(M.dislikedItemsRef.splice(d,1),n.like+=1):(n.like+=1,n.rate+=1)}},ft=a=>{const i=M.dislikedItemsRef.indexOf(a);if(n.id=a.id,i!==-1)M.dislikedItemsRef.splice(i,1),n.rate+=-1,n.rated=!1;else{n.rated=!0,M.dislikedItemsRef.push(a);const d=M.likedItemsRef.indexOf(a);d!==-1?(M.likedItemsRef.splice(d,1),n.like+=-1):n.rate+=1}},M=t,lt=B(!1),f=B({}),g=a=>{lt.value=!0,f.value=a},I=a=>{a.target.src="/images/default.png"};function N(a){l(a.target,300)}function T(a){l(a.target,110)}function l(a,i){const d=a.naturalWidth,O=a.naturalHeight,_=Math.min(d,i),ht=_/d,ot=O*ht;a.style.width=`${_}px`,a.style.height=`${ot}px`}return(a,i)=>(r(),u(Q,null,[s("div",Je,[(r(!0),u(Q,null,Y(v(e),(d,O)=>(r(),u("div",{key:O,class:"col-12 sm:col-12 md:col-6 lg:col-4 border-round surface-section shadow-1 p-2"},[s("div",Ge,[s("div",{class:dt(["flex flex-row",d.subitem?"":"flex-grow-1"]),onClick:_=>g(d)},[s("div",Ye,[s("img",{src:d.image,alt:d.name,class:"w-full h-full",style:{"object-fit":"cover"},onError:I,onLoad:T},null,40,Ze)]),s("div",ta,[s("div",ea,h(v(k).getItemLocalValue(d,"name")),1),s("div",null,[s("div",aa,[s("div",sa,[(r(),u(Q,null,Y(5,_=>s("i",{key:_,class:dt(["pi invert-star",_<=Math.floor(d.likes/d.rates*5)?"pi-star-fill":_-.5<=d.likes/d.rates*5?"pi-star-half-fill":"pi-star"]),style:{color:"black"}},null,2)),64)),s("p",null,"("+h(d.rates?d.rates:0)+")",1)])])]),s("div",null,[s("p",na,h(v(k).getItemLocalValue(d,"description")),1)])])],10,Xe),d.subitem===void 0?(r(),u("div",{key:0,class:dt(["flex ml-2 mr-2 mb-2",d.price>0?"justify-content-between":"justify-content-end"])},[!d.discount&&d.price>0?(r(),u("span",oa,"€"+h(d.price),1)):x("",!0),d.discount?(r(),u("div",ia,[s("span",ra,"€"+h(d.dis_price),1),s("span",la,"€"+h(d.price),1),y(v(wt),{severity:"danger",value:"-"+d.discount+"%"},null,8,["value"])])):x("",!0),d.soldout?x("",!0):(r(),u("div",ua,[y(v(H),{icon:"pi pi-minus",rounded:"",disabled:d.quantity<=0,onClick:_=>o(O,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),s("span",da,h(d.quantity),1),y(v(H),{icon:"pi pi-plus",rounded:"",disabled:R(d),onClick:_=>o(O,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])),d.soldout?(r(),u("div",ca,[y(v(wt),{severity:"danger",value:a.$t("common.soldout")},null,8,["value"])])):x("",!0)],2)):x("",!0),d.subitem?(r(!0),u(Q,{key:1},Y(d.subitem,(_,ht)=>(r(),u(Q,{key:"index"},[J(_)?(r(),u("div",pa,[s("div",fa,[s("div",va,[s("span",ha,h(V(_)),1),L(_)?(r(),u("span",ba,"€"+h(S(_)),1)):x("",!0),rt(_)?(r(),u("div",ma,[s("span",ga,"€"+h(st(_)),1),s("span",ya,"€"+h(S(_)),1),y(v(wt),{severity:"danger",value:"-"+Z(_)+"%"},null,8,["value"])])):x("",!0)]),z(_)?x("",!0):(r(),u("div",$a,[y(v(H),{icon:"pi pi-minus",rounded:"",disabled:w(_)<=0,onClick:ot=>C(_,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),s("span",xa,h(w(_)),1),y(v(H),{icon:"pi pi-plus",rounded:"",disabled:F(_),onClick:ot=>C(_,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])),z(_)?(r(),u("div",wa,[y(v(wt),{severity:"danger",value:a.$t("common.soldout")},null,8,["value"])])):x("",!0)])])):x("",!0)],64))),128)):x("",!0)])]))),128))]),y(v(Tt),{visible:lt.value,"onUpdate:visible":i[2]||(i[2]=d=>lt.value=d),modal:"",header:"dish",style:te([{width:"23rem"},{width:"80vw","max-width":"700px"}]),onHide:i[3]||(i[3]=d=>G())},{header:A(()=>[s("div",ka,[y(v(oe),{image:c(),class:"w-full"},null,8,["image"])]),s("span",_a,h(a.$t("common.details")),1)]),default:A(()=>[s("div",Ta,[s("span",Ia,h(f.value.name),1)]),s("div",Ca,[s("span",Da,h(f.value.description),1)]),s("div",Sa,[s("div",Ba,[s("img",{class:"w-full h-auto object-contain",src:f.value.image,alt:f.value.name,onError:I,onLoad:N},null,40,Pa)])]),s("div",Na,[(r(!0),u(Q,null,Y(f.value.allergies,(d,O)=>(r(),u("img",{src:"images/"+d+".png",alt:d,class:"w-2rem h-2rem border-round flex-shrink-0",style:{"object-fit":"cover","min-width":"2rem"}},null,8,za))),256)),s("div",Aa,[s("button",{onClick:i[0]||(i[0]=d=>nt(f.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[s("i",{class:dt(["pi pi-thumbs-up text-xl",M.likedItemsRef.includes(f.value)?"text-green-500":"text-gray-400"])},null,2)]),s("button",{onClick:i[1]||(i[1]=d=>ft(f.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[s("i",{class:dt(["pi pi-thumbs-down text-xl",M.dislikedItemsRef.includes(f.value)?"text-red-500":"text-gray-400"])},null,2)])])])]),_:1},8,["visible"])],64))}},qa=qt(La,[["__scopeId","data-v-338ec55e"]]);var Oa=$t`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,Ra={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Ea=vt.extend({name:"card",style:Oa,classes:Ra}),Va={name:"BaseCard",extends:xt,style:Ea,provide:function(){return{$pcCard:this,$parentInstance:this}}},ie={name:"Card",extends:Va,inheritAttrs:!1};function ja(t,e,n,c,$,o){return r(),u("div",P({class:t.cx("root")},t.ptmi("root")),[t.$slots.header?(r(),u("div",P({key:0,class:t.cx("header")},t.ptm("header")),[at(t.$slots,"header")],16)):x("",!0),s("div",P({class:t.cx("body")},t.ptm("body")),[t.$slots.title||t.$slots.subtitle?(r(),u("div",P({key:0,class:t.cx("caption")},t.ptm("caption")),[t.$slots.title?(r(),u("div",P({key:0,class:t.cx("title")},t.ptm("title")),[at(t.$slots,"title")],16)):x("",!0),t.$slots.subtitle?(r(),u("div",P({key:1,class:t.cx("subtitle")},t.ptm("subtitle")),[at(t.$slots,"subtitle")],16)):x("",!0)],16)):x("",!0),s("div",P({class:t.cx("content")},t.ptm("content")),[at(t.$slots,"content")],16),t.$slots.footer?(r(),u("div",P({key:1,class:t.cx("footer")},t.ptm("footer")),[at(t.$slots,"footer")],16)):x("",!0)],16)],16)}ie.render=ja;var Fa=$t`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`,Ma={root:function(e){var n=e.instance,c=e.props;return["p-textarea p-component",{"p-filled":n.$filled,"p-textarea-resizable ":c.autoResize,"p-textarea-sm p-inputfield-sm":c.size==="small","p-textarea-lg p-inputfield-lg":c.size==="large","p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-textarea-fluid":n.$fluid}]}},Ka=vt.extend({name:"textarea",style:Fa,classes:Ma}),Wa={name:"BaseTextarea",extends:Te,props:{autoResize:Boolean},style:Ka,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function Dt(t){"@babel/helpers - typeof";return Dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Dt(t)}function Ha(t,e,n){return(e=Ua(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ua(t){var e=Qa(t,"string");return Dt(e)=="symbol"?e:e+""}function Qa(t,e){if(Dt(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var c=n.call(t,e);if(Dt(c)!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var jt={name:"Textarea",extends:Wa,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){e.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return P(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return St(Ha({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},Ja=["value","name","disabled","aria-invalid","data-p"];function Ga(t,e,n,c,$,o){return r(),u("textarea",P({class:t.cx("root"),value:t.d_value,name:t.name,disabled:t.disabled,"aria-invalid":t.invalid||void 0,"data-p":o.dataP,onInput:e[0]||(e[0]=function(){return o.onInput&&o.onInput.apply(o,arguments)})},o.attrs),null,16,Ja)}jt.render=Ga;const Xa={key:0,class:"text-3xl font-bold"},Ya={class:"flex flex-column gap-3 p-1"},Za={key:0,class:"flex flex-column gap-1"},ts={key:0,class:"m-0"},es={key:0,class:"m-0"},as={class:"flex justify-content-between gap-4 mt-1"},ss={class:"flex align-items-center gap-2"},ns=["src","alt"],os={class:"flex-grow-1 min-width-0 max-w-18rem"},is={class:"flex flex-column gap-1"},rs={class:"flex align-items-center gap-2"},ls={class:"text-xl font-bold line1 whitespace-nowrap overflow-hidden text-overflow-ellipsis",style:{"max-width":"20rem"}},us={class:"flex align-items-end gap-1"},ds={key:0,class:"text-xl font-bold text-primary"},cs={key:1,class:"text-xl font-bold text-primary"},ps={key:2,class:"text-sm text-color-secondary"},fs={key:0,class:"text-xs text-primary"},vs={class:"flex-shrink-0 flex flex-wrap justify-content-between align-items-center gap-1"},hs={class:"flex flex-wrap justify-content-between align-content-center"},bs={class:"flex align-items-center gap-1"},ms={class:"w-2rem text-center"},gs={class:"flex flex-column gap-2 mt-2"},ys={for:"in_label"},$s={for:"in_label"},xs={class:"bottom-0 left-0 mt-2"},ws={class:"text-2xl font-bold"},ks={class:"text-2xl font-bold text-primary pl-2"},_s={class:"flex justify-content-between"},Ts={__name:"Cart",props:{updateCartItemCount:{type:Function,required:!0},checkout:{type:Function,required:!0},isTakeaway:Boolean},setup(t,{expose:e}){const n=ee(),{t:c}=yt(),$=tt.cartDishs;k.freeCounts;const o=B([]),C=B(),w=B(),F=B(!1),R=B(!1),J=B(!0),z=B(""),V=B("");function X(l,a){let i="";return l.forEach(d=>{i=i+c(`${a}Data.ingredients.${d.id}`)+" / "}),i}function S(l,a,i){const d=k.customDishAPI.getCustomDishByName(l);if(d){const O=d.types[a].typeName;return c(`${i}Data.${O}`)}else return null}const st=(l,a)=>{const i=o.value[l].quantity+a;i>=0&&(o.value[l].quantity=i,q.updateCartItemCount(a))};function Z(l){l&&C.value&&(C.value.dishNote=w.value?w.value:void 0),R.value=!1}function rt(){w.value&&(w.value=void 0),C.value&&(C.value=void 0)}function L(l){C.value=l,w.value=C.value.dishNote?C.value.dishNote:void 0,R.value=!0}const q=t;e({showDishList:l=>{F.value=!0,o.value.length=0;for(let a=0;a<l.length;a++)o.value.push(l[a]);J.value=o.value.length==0&&$.length==0}});function nt(l){switch(l){case"Bibimbap":return"customDishBibimbap";case"Sushi Aleatória®":return"customDishSushiBox";case"MY BOX":return"customDishMyBox";default:return"Unexpected"}}function ft(l){tt.removeItem(l)}function M(){q.isTakeaway?lt():f()}function lt(){n.push({path:"/paymentPage"})}function f(){q.checkout({name:z.value,note:V.value})&&(F.value=!1),$.value.forEach(l=>{l.dishNote=void 0}),o.value.forEach(l=>{l.dishNote=void 0}),V.value="",localStorage.removeItem("order_cartDishs"),localStorage.removeItem("order_dishDatas")}function g(l){return l.subname!=""&&l.subname!="Default Title"?l.name+" "+l.subname:l.name}function I(){let l=0;return $.value.forEach(a=>{l+=a.dis_price?a.dis_price*a.count:a.price*a.count}),o.value.forEach(a=>{l+=a.dis_price?a.dis_price*a.quantity:a.price*a.quantity}),"€"+l.toFixed(2)}const N=l=>{l.target.src="/images/default.png"},T=l=>{const a=l.quantity;let i=3;return l.price>0&&(i=9),a>=i};return(l,a)=>(r(),u(Q,null,[y(v(Tt),{class:"bg-primary-reverse text-sm md:text-lg lg:text-xl",visible:F.value,"onUpdate:visible":a[2]||(a[2]=i=>F.value=i),modal:"",header:l.$t("common.cart"),style:te([{backgroundColor:"rgba(250, 250, 250, 1)",height:"100%",minWidth:"24rem"},{width:"80vw","max-width":"700px"}]),dismissableMask:!0},{footer:A(()=>[s("div",xs,[s("span",ws,h(l.$t("common.total"))+": ",1),s("span",ks,h(I()),1),y(v(H),{icon:"pi pi-plus",class:"p-button-success p-button-rounded ml-3",onClick:M,label:t.isTakeaway?v(c)("common.pay"):v(c)("common.send")},null,8,["label"])])]),default:A(()=>[J.value?(r(),u("h2",Xa,"Cart is empty.")):x("",!0),s("div",Ya,[(r(!0),u(Q,null,Y(v($),(i,d)=>(r(),et(v(ie),{style:{overflow:"hidden"},key:d},{title:A(()=>[_t(h(l.$t(`common.${i.name.toLowerCase().replace(/\s+/g,"")}`)),1)]),subtitle:A(()=>[_t(h(l.$t("common.price"))+" : "+h(i.price)+"€",1)]),content:A(()=>[v(k).customDishAPI.customDishes.value.find(O=>O.name==i.name)?(r(),u("div",Za,[(r(!0),u(Q,null,Y(i.notesAndId,(O,_)=>(r(),u("div",null,[i.notesAndId[_].length!==0?(r(),u("span",ts,h(S(i.name,_,nt(i.name)))+": "+h(X(i.notesAndId[_],nt(i.name))),1)):x("",!0)]))),256)),s("div",null,[i.dishNote?(r(),u("span",es,h(l.$t("common.note"))+": "+h(i.dishNote),1)):x("",!0)])])):x("",!0)]),footer:A(()=>[s("div",as,[y(v(H),{label:l.$t("common.edit")+" "+l.$t("common.note"),severity:"contrast",onClick:O=>L(i)},null,8,["label","onClick"]),y(v(H),{label:l.$t("common.remove"),severity:"danger",onClick:O=>ft(i)},null,8,["label","onClick"])])]),_:2},1024))),128)),(r(!0),u(Q,null,Y(o.value,(i,d)=>(r(),u("div",{key:d,class:"p-2 border-round shadow-1 transition-all transition-duration-200 hover:shadow-3 flex flex-column gap-1"},[s("div",ss,[s("img",{src:i.image,alt:i.name,class:"w-4rem h-4rem border-round flex-shrink-0",onError:N,style:{"object-fit":"cover","min-width":"4rem"}},null,40,ns),s("div",os,[s("div",is,[s("div",rs,[s("span",ls,h(g(i)),1)])]),s("div",us,[i.dis_price?(r(),u("span",ds,"€"+h(i.dis_price),1)):x("",!0),!i.dis_price&&i.price>0?(r(),u("span",cs,"€"+h(i.price),1)):x("",!0),i.price>0?(r(),u("span",ps,"/uni.")):x("",!0)])])]),s("div",null,[i.dishNote?(r(),u("span",fs,h(l.$t("common.note")+": "+i.dishNote),1)):x("",!0)]),s("div",vs,[s("div",hs,[y(v(H),{label:l.$t("common.edit")+" "+l.$t("common.note"),severity:"contrast",class:"w-3.5rem h-2rem",onClick:O=>L(i)},null,8,["label","onClick"])]),s("div",bs,[y(v(H),{icon:"pi pi-minus",rounded:"",disabled:i.quantity<=0,onClick:O=>st(d,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),s("span",ms,h(i.quantity),1),y(v(H),{icon:"pi pi-plus",rounded:"",disabled:T(i),onClick:O=>st(d,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])])]))),128))]),s("div",gs,[y(v(Kt),{variant:"in"},{default:A(()=>[y(v(se),{id:"in_label",modelValue:z.value,"onUpdate:modelValue":a[0]||(a[0]=i=>z.value=i),variant:"filled",maxlength:"20"},null,8,["modelValue"]),s("label",ys,h(l.$t("common.name")),1)]),_:1}),y(v(Kt),{variant:"in"},{default:A(()=>[y(v(jt),{id:"in_label",class:"min-w-full",rows:"5",modelValue:V.value,"onUpdate:modelValue":a[1]||(a[1]=i=>V.value=i),variant:"filled",maxlength:"200"},null,8,["modelValue"]),s("label",$s,h(l.$t("common.observation")),1)]),_:1})])]),_:1},8,["visible","header"]),y(v(Tt),{visible:R.value,"onUpdate:visible":a[6]||(a[6]=i=>R.value=i),header:l.$t("common.note"),onHide:a[7]||(a[7]=i=>rt()),modal:"",dismissableMask:!0},{default:A(()=>[y(v(jt),{modelValue:w.value,"onUpdate:modelValue":a[3]||(a[3]=i=>w.value=i),rows:"5",cols:"30",placeholder:l.$t("common.edit")+" "+l.$t("common.note")+"...",maxlength:"100"},null,8,["modelValue","placeholder"]),s("div",_s,[y(v(H),{label:l.$t("common.cancel"),severity:"danger",onClick:a[4]||(a[4]=i=>Z(!1))},null,8,["label"]),y(v(H),{label:l.$t("common.save"),severity:"primary",size:"sm",onClick:a[5]||(a[5]=i=>Z(!0))},null,8,["label"])])]),_:1},8,["visible","header"])],64))}},Is=qt(Ts,[["__scopeId","data-v-0acb271b"]]);var Cs=$t`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,Ds={root:"p-overlaybadge"},Ss=vt.extend({name:"overlaybadge",style:Cs,classes:Ds}),Bs={name:"OverlayBadge",extends:ne,style:Ss,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},re={name:"OverlayBadge",extends:Bs,inheritAttrs:!1,components:{Badge:ne}};function Ps(t,e,n,c,$,o){var C=pe("Badge");return r(),u("div",P({class:t.cx("root")},t.ptmi("root")),[at(t.$slots,"default"),y(C,P(t.$props,{pt:t.ptm("pcBadge")}),null,16,["pt"])],16)}re.render=Ps;function Xt(t){switch(t){case"Sushi Aleatória®":return"customDishSushiBox";case"Bibimbap":return"customDishBibimbap";case"MY BOX":return"customDishMyBox";default:return"unexpected"}}const Ns={class:"m-3"},zs={class:"flex flex-column gap-2"},As={class:"w-full flex justify-content-center"},Ls={key:0,class:"max-w-19rem"},qs=["src"],Os={style:{width:"300px",height:"300px",background:"url(/boxImage/box.png)"}},Rs={key:0,class:"flex align-items-center justify-content-center text-4xl font-bold text-white w-full h-full"},Es={key:1,class:"grid m-0 p-2"},Vs=["onClick"],js={class:"flex align-items-center justify-content-center font-bold m-0 p-0",style:{width:"94px",height:"94px"}},Fs=["src"],Ms={class:"flex flex-wrap justify-content-between align-items-center m-1"},Ks={class:"flex gap-1 align-items-center"},Ws={key:0},Hs={class:"font-bold mb-2"},Us={key:1,class:"flex justify-content-between gap-2 mt-3"},Qs={class:"font-bold mb-2"},Js={class:"flex mr-2"},Gs={class:"w-3rem text-xl text-center"},Xs={class:"font-bold block mb-2"},Ys={class:"flex flex-wrap"},Zs={key:2,class:"flex flex-wrap gap-2 mt-3"},tn={class:"font-bold block mb-2"},en={class:"font-bold block mb-2 text-center"},an={class:"flex flex-wrap gap-2 mt-3"},sn={__name:"CustomDish",props:{currentCustomDish:Object},setup(t){const{locale:e}=yt(),n=t,c=fe(),{t:$}=yt(),o=mt(()=>n.currentCustomDish),C=mt(()=>o.boxImages),w=B(0),F=mt(()=>o.value.initialPrice),R=B(F.value);ve(()=>o.value,f=>{R.value=(f==null?void 0:f.initialPrice)??0,w.value=0,J.value=null});const J=B(null),z=mt(()=>{const f=e.value,g=`title_${f}`,I=`description_${f}`;return o.value.descriptions.map(N=>({title:N[g],descriptions:N.descriptions.map(T=>T[I]),image:N==null?void 0:N.image}))}),V=mt(()=>{var I,N;const f=Number(((I=o.value)==null?void 0:I.like)??0),g=Number(((N=o.value)==null?void 0:N.rate)??0);return g?f/g*5:0});function X(f,g,I){const N=f[g];if(N.selected){N.selected=!1;return}else{const l=f.filter(a=>a.selected).length;if(I===1){ft(f),N.selected=!0;return}l<I&&(N.selected=!0)}}function S(f,g,I){X(f,g,I),st(f)}function st(f){let g=F.value;if(!f||!Array.isArray(f))return R.value=g,g;const I=f.reduce((N,T)=>{if(!T.dishes||!Array.isArray(T.dishes))return N;const l=T.dishes.reduce((a,i)=>a+(i.selected?i.price:0),0);return N+l},0);return g+=I,R.value=g,g}function Z(f){return f.selected}function rt(){if(!M(o.value.types))return;const f=q(o.value.types),g=G(o.value.types);tt.addItem({dishid:-1,name:o.value.name,category:o.value.category,count:w.value!==0?w.value:1,price:R.value===0?st():R.value,notes:f,notesAndId:g}),console.log("CART: ",tt.cartDishs),nt(o.value.types),it.show({severity:"info",summary:"info",detail:$("customDishBibimbapVue.addToCartSuccessBibimbap")})}function L(f){return!f||!f.dishes?"":f.dishes.filter(I=>I.selected).map(I=>I.name).join(",")}function q(f){return f?f.map(g=>L(g)):[]}function G(f){return f?f.map(g=>g.dishes?g.dishes.filter(I=>I.selected).map(I=>({id:I.dishid,name:I.name})):[]):[]}function nt(f){f&&f.forEach(g=>{g.dishes&&g.dishes.forEach(I=>{I.selected=!1})})}function ft(f){f.forEach(g=>g.selected=!1)}function M(f){if(o.value.options.quantity&&w.value<=0)return it.show({severity:"warn",detail:$("notification.quantity_must_be_positive")}),!1;for(const g of f){const I=g.dishes.filter(N=>N.selected).length;if(console.log(I,g.minQuantity),I<g.minQuantity){const N=g.typeName;return it.show({severity:"warn",detail:$("notification.select_type_of",{name:N})}),!1}}return!0}function lt(f){f?k.customDishAPI.like(o.value.id)&&(J.value="like",c.add({severity:"success",summary:$("common.success"),detail:$("common.rate")+" "+$("common.success"),life:750})):k.customDishAPI.unLike(o.value.id)&&(J.value="unlike",c.add({severity:"success",summary:$("common.success"),detail:$("common.rate")+" "+$("common.success"),life:750}))}return(f,g)=>{var I,N;return r(),u("div",Ns,[s("div",zs,[y(v(Qt),{class:"w-full max-w-xl mx-auto"},{default:A(()=>[(r(!0),u(Q,null,Y(z.value,(T,l)=>(r(),et(v(Ut),{key:l,value:l},{default:A(()=>[y(v(Wt),null,{default:A(()=>[_t(h(T.title),1)]),_:2},1024),y(v(Ht),null,{default:A(()=>{var a;return[(r(!0),u(Q,null,Y(T.descriptions,(i,d)=>(r(),u("p",{key:d},h(i),1))),128)),s("div",As,[(a=T.image)!=null&&a.src?(r(),u("div",Ls,[s("img",{src:T.image.src,class:"w-full"},null,8,qs)])):x("",!0)])]}),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1}),((N=(I=o.value)==null?void 0:I.value)==null?void 0:N.name)==="MY BOX"?(r(),et(v(Qt),{key:0,class:"w-full max-w-xl mx-auto"},{default:A(()=>[y(v(Ut),{value:"0"},{default:A(()=>[y(v(Wt),null,{default:A(()=>[_t(" 🥩 "+h(f.$t("common.showMybox")),1)]),_:1}),y(v(Ht),null,{default:A(()=>[s("div",Os,[f.isEmptyArray(C.value)?(r(),u("div",Rs,h(f.$t("common.myboxAlarm")),1)):x("",!0),f.isEmptyArray(C.value)?x("",!0):(r(),u("div",Es,[(r(!0),u(Q,null,Y(C.value,T=>(r(),u("div",{class:"col-4 p-0",onClick:l=>f.imageSelectAction(T)},[s("div",js,[T?(r(),u("img",{key:0,class:"m-0 p-0",src:f.imagePath(T),style:{width:"82px",height:"82px"}},null,8,Fs)):x("",!0)])],8,Vs))),256))]))])]),_:1})]),_:1})]),_:1})):x("",!0)]),s("div",Ms,[s("div",Ks,[(r(),u(Q,null,Y(5,T=>s("i",{key:T,class:dt(["pi invert-star",T<=Math.floor(V.value)?"pi-star-fill":T-.5<=V.value?"pi-star-half":"pi-star"]),style:{color:"black"}},null,2)),64)),s("p",null,"("+h(o.value.rate?o.value.rate:0)+")",1)]),s("div",null,[y(v(H),{text:"",icon:"pi pi-thumbs-up",severity:J.value==="like"?"success":"",onClick:g[0]||(g[0]=T=>lt(!0))},null,8,["severity"]),y(v(H),{text:"",icon:"pi pi-thumbs-down",severity:J.value==="unlike"?"danger":"",onClick:g[1]||(g[1]=T=>lt(!1))},null,8,["severity"])])]),o.value.options.extraInfo?(r(),u("div",Ws,[s("label",Hs,h(o.value.options.extraInfo),1)])):x("",!0),o.value.options.quantity?(r(),u("div",Us,[s("div",null,[s("label",Qs,h(f.$t("common.quantity"))+" / "+h(f.$t("common.pieces")),1)]),s("div",Js,[y(v(H),{icon:"pi pi-minus",disabled:w.value<=0,onClick:g[2]||(g[2]=T=>w.value-=o.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"]),s("span",Gs,h(w.value),1),y(v(H),{icon:"pi pi-plus",disabled:w.value>=o.value.options.maxQuantity,onClick:g[3]||(g[3]=T=>w.value+=o.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"])])])):x("",!0),(r(!0),u(Q,null,Y(o.value.types,(T,l)=>(r(),u("div",null,[s("label",Xs,h(l+1)+". "+h(f.$t(`${v(Xt)(o.value.name)}Data.${T.typeName}`)),1),s("div",Ys,[(r(!0),u(Q,null,Y(T.dishes,(a,i)=>(r(),et(v(H),{key:i,onClick:d=>S(T.dishes,i,w.value==0?T.maxQuantity:T.maxQuantity*w.value),class:dt([{"p-button-primary":Z(a),"p-button-outlined":!Z(a)},"m-1"])},{default:A(()=>[s("p",{class:dt({"text-gray-700":!Z(a)})},h(f.$t(`${v(Xt)(o.value.name)}Data.ingredients.${a.dishid}`)),3)]),_:2},1032,["onClick","class"]))),128))])]))),256)),F.value!==0?(r(),u("div",Zs,[s("label",tn,h(f.$t("common.price"))+":",1),s("label",en,h(R.value+"€"),1)])):x("",!0),s("div",an,[y(v(H),{icon:"pi pi-shopping-cart",onClick:g[4]||(g[4]=T=>rt()),label:f.$t("common.addToCart"),class:"m-3",severity:"primary",raised:""},null,8,["label"])])])}}},nn=qt(sn,[["__scopeId","data-v-fd2c3fd7"]]);var on=$t`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
    }

    .p-tabs-scrollable > .p-tablist {
        overflow: hidden;
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        background: dt('tabs.tablist.background');
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`,rn={root:function(e){var n=e.props;return["p-tabs p-component",{"p-tabs-scrollable":n.scrollable}]}},ln=vt.extend({name:"tabs",style:on,classes:rn}),un={name:"BaseTabs",extends:xt,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:ln,provide:function(){return{$pcTabs:this,$parentInstance:this}}},le={name:"Tabs",extends:un,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function dn(t,e,n,c,$,o){return r(),u("div",P({class:t.cx("root")},t.ptmi("root")),[at(t.$slots,"default")],16)}le.render=dn;var cn={root:"p-tablist",content:function(e){var n=e.instance;return["p-tablist-content",{"p-tablist-viewport":n.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},pn=vt.extend({name:"tablist",classes:cn}),fn={name:"BaseTabList",extends:xt,props:{},style:pn,provide:function(){return{$pcTabList:this,$parentInstance:this}}},ue={name:"TabList",extends:fn,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,n=this.getVisibleButtonWidths(),c=Et(e)-n,$=Math.abs(e.scrollLeft),o=c*.8,C=$-o,w=Math.max(C,0);e.scrollLeft=Mt(e)?-1*w:w},onNextButtonClick:function(){var e=this.$refs.content,n=this.getVisibleButtonWidths(),c=Et(e)-n,$=Math.abs(e.scrollLeft),o=c*.8,C=$+o,w=e.scrollWidth-c,F=Math.min(C,w);e.scrollLeft=Mt(e)?-1*F:F},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,n=e.content,c=e.inkbar,$=e.tabs;if(c){var o=Vt(n,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(c.style.height=be(o)+"px",c.style.top=Nt(o).top-Nt($).top+"px"):(c.style.width=me(o)+"px",c.style.left=Nt(o).left-Nt($).left+"px")}},updateButtonState:function(){var e=this.$refs,n=e.list,c=e.content,$=c.scrollTop,o=c.scrollWidth,C=c.scrollHeight,w=c.offsetWidth,F=c.offsetHeight,R=Math.abs(c.scrollLeft),J=[Et(c),he(c)],z=J[0],V=J[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=$!==0,this.isNextButtonEnabled=n.offsetHeight>=F&&parseInt($)!==C-V):(this.isPrevButtonEnabled=R!==0,this.isNextButtonEnabled=n.offsetWidth>=w&&parseInt(R)!==o-z)},getVisibleButtonWidths:function(){var e=this.$refs,n=e.prevButton,c=e.nextButton,$=0;return this.showNavigators&&($=((n==null?void 0:n.offsetWidth)||0)+((c==null?void 0:c.offsetWidth)||0)),$}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return St({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:Ie,ChevronRightIcon:De},directives:{ripple:ae}},vn=["data-p"],hn=["aria-label","tabindex"],bn=["data-p"],mn=["aria-orientation"],gn=["aria-label","tabindex"];function yn(t,e,n,c,$,o){var C=At("ripple");return r(),u("div",P({ref:"list",class:t.cx("root"),"data-p":o.dataP},t.ptmi("root")),[o.showNavigators&&$.isPrevButtonEnabled?Lt((r(),u("button",P({key:0,ref:"prevButton",type:"button",class:t.cx("prevButton"),"aria-label":o.prevButtonAriaLabel,tabindex:o.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return o.onPrevButtonClick&&o.onPrevButtonClick.apply(o,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(r(),et(kt(o.templates.previcon||"ChevronLeftIcon"),P({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,hn)),[[C]]):x("",!0),s("div",P({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return o.onScroll&&o.onScroll.apply(o,arguments)}),"data-p":o.dataP},t.ptm("content")),[s("div",P({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":o.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[at(t.$slots,"default"),s("span",P({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,mn)],16,bn),o.showNavigators&&$.isNextButtonEnabled?Lt((r(),u("button",P({key:1,ref:"nextButton",type:"button",class:t.cx("nextButton"),"aria-label":o.nextButtonAriaLabel,tabindex:o.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return o.onNextButtonClick&&o.onNextButtonClick.apply(o,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(r(),et(kt(o.templates.nexticon||"ChevronRightIcon"),P({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,gn)),[[C]]):x("",!0)],16,vn)}ue.render=yn;var $n={root:function(e){var n=e.instance,c=e.props;return["p-tab",{"p-tab-active":n.active,"p-disabled":c.disabled}]}},xn=vt.extend({name:"tab",classes:$n}),wn={name:"BaseTab",extends:xt,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:xn,provide:function(){return{$pcTab:this,$parentInstance:this}}},de={name:"Tab",extends:wn,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var n=this.findNextTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var n=this.findPrevTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var n=this.findFirstTab();this.changeFocusedTab(e,n),e.preventDefault()},onEndKey:function(e){var n=this.findLastTab();this.changeFocusedTab(e,n),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findNextTab:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=n?e:e.nextElementSibling;return c?zt(c,"data-p-disabled")||zt(c,"data-pc-section")==="activebar"?this.findNextTab(c):Vt(c,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=n?e:e.previousElementSibling;return c?zt(c,"data-p-disabled")||zt(c,"data-pc-section")==="activebar"?this.findPrevTab(c):Vt(c,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,n){ye(n),this.scrollInView(n)},scrollInView:function(e){var n;e==null||(n=e.scrollIntoView)===null||n===void 0||n.call(e,{block:"nearest"})}},computed:{active:function(){var e;return ge((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return P(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return St({active:this.active})}},directives:{ripple:ae}};function kn(t,e,n,c,$,o){var C=At("ripple");return t.asChild?at(t.$slots,"default",{key:1,dataP:o.dataP,class:dt(t.cx("root")),active:o.active,a11yAttrs:o.a11yAttrs,onClick:o.onClick}):Lt((r(),et(kt(t.as),P({key:0,class:t.cx("root"),"data-p":o.dataP,onClick:o.onClick},o.attrs),{default:A(function(){return[at(t.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[C]])}de.render=kn;const _n={class:"fixed top-0 left-0 w-full bg-primary-reverse",style:{"z-index":"10"}},Tn={class:"grid mt-3 ml-3"},In={class:"max-w-5rem flex align-items-center"},Cn=["src"],Dn={class:"flex align-items-center"},Sn={key:0,class:"text-color font-bold p-1"},Bn={key:1,class:"text-color font-bold p-1"},Pn={class:"card flex mr-3",style:{"margin-left":"auto"}},Nn={style:{display:"flex","align-items":"center"}},zn={style:{"flex-grow":"1",width:"0",overflow:"hidden"}},An={class:"mt-2"},Ln={class:"flex justify-content-end mt-2"},qn={__name:"HeaderTabs",props:{types:Array,typeIndex:Number,tableId:String,tabItems:Array},emits:["clickType","switchToWelcome"],setup(t,{emit:e}){const{t:n}=yt();function c(){var G;const L=k.currentPageData.value,q=(G=L==null?void 0:L.data)==null?void 0:G.logoPath;return q?q:"/images/logo_logo.png"}function $(){return k.getTable()}const o=B(),C=mt(()=>[{label:n("common.options"),items:[{label:n("common.pay"),icon:"pi pi-wallet",command:()=>{st()}},{label:n("common.call"),icon:"pi pi-user-plus",command:()=>{k.send_cmd($(),{cmd:"call"}),it.show_info(n("notification.call_msg"))}}]}]);function w(L){return L}const F=L=>{o.value.toggle(L)},R=L=>{J.value.toggle(L)},J=B(),z=B(!1),V=B(),X=B(),S=B(!0);function st(){z.value=!0}function Z(){S.value=V.value?!(V.value.toString().length===9||V.value.toString().length===0):!1,z.value=!1}function rt(){S.value?it.show_warn(n("notification.cancel_msg")):(k.send_cmd($(),{cmd:"pay",nif:V.value,note:X.value}),it.show_info(n("notification.pay_msg")),S.value=!0),V.value&&(V.value=void 0),X.value&&(X.value=void 0)}return(L,q)=>(r(),u(Q,null,[s("div",_n,[s("div",Tn,[s("div",In,[s("img",{src:c(),class:"w-full",clickble:"",onClick:q[0]||(q[0]=()=>L.$emit("switchToWelcome"))},null,8,Cn)]),s("div",Dn,[t.tableId?(r(),u("p",Sn,h(L.$t("common.table"))+": "+h(t.tableId),1)):x("",!0),t.tableId?x("",!0):(r(),u("p",Bn,h(L.$t("common.takeAway")),1))]),s("div",Pn,[t.tableId?(r(),et(v(H),{key:0,icon:"pi pi-bell",rounded:"","aria-label":"Filter",onClick:F,"aria-haspopup":"true","aria-controls":"overlay_menu"})):x("",!0),y(v(Jt),{ref_key:"menu",ref:o,id:"overlay_menu",model:C.value,popup:!0},null,8,["model"])])]),s("div",Nn,[s("div",null,[y(v(H),{icon:"pi pi-bars",variant:"text",rounded:"","aria-label":"Filter",onClick:R,"aria-haspopup":"true","aria-controls":"tab_menu"}),y(v(Jt),{ref_key:"tabMenu",ref:J,id:"tab_menu",model:t.tabItems,popup:!0},null,8,["model"])]),s("div",zn,[y(v(le),{value:t.typeIndex,scrollable:"",showNavigators:!1},{default:A(()=>[y(v(ue),null,{default:A(()=>[(r(!0),u(Q,null,Y(t.types,(G,nt)=>(r(),et(v(de),{value:nt,onClick:()=>L.$emit("clickType",nt),class:"text-sm md:text-lg lg:text-xl"},{default:A(()=>[_t(h(G),1)]),_:2},1032,["value","onClick"]))),256))]),_:1})]),_:1},8,["value"])])])]),y(v(Tt),{visible:z.value,"onUpdate:visible":q[4]||(q[4]=G=>z.value=G),header:"结账",class:"flex flex-column",modal:!0,dismissableMask:!0,onHide:rt},{default:A(()=>[s("div",null,[q[5]||(q[5]=s("label",null,"NIF:",-1)),y(v(Ce),{modelValue:V.value,"onUpdate:modelValue":q[1]||(q[1]=G=>V.value=G),inputId:"withoutgrouping",useGrouping:!1,fluid:"",class:"w-full m-1"},null,8,["modelValue"])]),s("div",An,[s("label",null,h(L.$t("common.note"))+":",1),y(v(se),{type:"text",modelValue:X.value,"onUpdate:modelValue":q[2]||(q[2]=G=>X.value=G),class:"w-full m-1"},null,8,["modelValue"])]),s("div",Ln,[y(v(H),{label:L.$t("common.send"),onClick:q[3]||(q[3]=G=>Z())},null,8,["label"])])]),_:1},8,["visible"])],64))}},On={class:"w-full h-full flex flex-column"},Rn={class:"fixed bottom-0 left-0 w-full h-3rem bg-primary-reverse p-3"},En={class:"h-full flex align-items-center justify-content-between w-full"},Vn={class:"m-2"},jn={class:"m-2"},Fn={style:{"max-height":"60vh","overflow-y":"auto","padding-bottom":"60px"}},Mn={class:"flex flex-column border-bottom-1"},Kn={key:0,class:"flex justify-content-between"},Wn={class:"flex flex-column"},Hn={class:"font-bold"},Un={class:"text-right"},Qn={key:1,class:"flex justify-content-between"},Jn={class:"flex flex-column"},Gn={class:"font-bold"},Xn={class:"text-right"},Yn={key:0},Zn={key:1,class:"flex flex-column"},to={class:"flex flex-column"},eo={class:"font-bold"},ao={class:"text-right"},so={class:"total-footer bg-primary-reverse"},Yt=2,Zt="order_time_key",no={__name:"HomePage",setup(t){const e=ee(),n=_e(),{t:c}=yt(),{locale:$}=yt(),o=B(!1),C=B([""]),w=B(0),F=tt.cartItemCount,R=B(!1),J=B([]),z=B(0),V=B({}),X=B(!1),S=W.dishDatas,st=B(null),Z=B(null),rt=B([]),L=B([]);function q(p){p.touches[0].clientX,p.touches[0].clientY}const G=()=>{w.value<C.value.length-1&&(w.value++,O(),g(w.value))},nt=()=>{w.value>0&&(w.value--,O(),g(w.value))};let ft=()=>window.env.ENABLE_ROAST_DUCK;mt(()=>parseFloat(k.table.value.order.reduce((p,b)=>p+b.price*b.quantity,0).toFixed(2)));function M(p){F.value=F.value+p}B(lt(k.customDishAPI.customDishes.value));function lt(p){return p.map(b=>({...b,oldLike:0,update:!1}))}const f=(p,b,m,E)=>{k.rateDish(p,b,m),E&&it.show_success(c("notification.rating_submitted"))};function g(p){let b=k.getOrderMenuTab()[p];k.customDishAPI.customDishes.value.map(K=>K.name).includes(b)?(X.value=!0,V.value=k.customDishAPI.customDishes.value.find(K=>K.name==b)):X.value=!1;let E=k.getMenu();if(E.length==0){console.log("exit");return}let U=[];for(let K=0;K<S.value.length;K++){let D=S.value[K];if(D.category==b){if(D.disable){if(!D.subitem)continue;let j=!0;for(let ut=0;ut<D.subitem.length;ut++)E[D.subitem[ut]].disable||(j=!1);if(j)continue}U.push(D)}}W.showDishList(U)}const I=()=>{k.refreshTableFromServer(),k.getTableTotalAmount(z),R.value=!0},N=(p,b,m)=>{const E=S.value.find(U=>U.id===p);E&&(E.likes=b,E.rates=m)},T=p=>{let b=p.id;p.org_id&&(b=p.org_id);for(let m=0;m<S.value.length;m++)if(S.value[m].id==b)for(const E in p){let U=E;E.startsWith("note")&&(U=U.replace("note","description")),S.value[m][U]=p[E]}},l={pt:[],zh:[],en:[]};function a(){return new Promise(p=>{let b=()=>{const m=k.getMenu();m.length>0?p(m):setTimeout(b,200)};b()})}function i(){return new Promise(p=>{let b=()=>{const m=k.getOrderMenuTab();m.length>0?p(m):setTimeout(b,200)};b()})}async function d(){var p=await a();k.onMenuItemChanged=T,k.onRatingChanged=N,S.value.length=0,ft()&&k.settings.value.hasBox&&(l.pt.push("My BOX"),l.zh.push("自定义九宫格"),l.en.push("My BOX")),ft()&&k.settings.value.hasBibimbap&&(l.pt.push("Bibimbap"),l.zh.push("石锅拌饭"),l.en.push("Bibimbap"));const b={en:{},zh:{}};for(let D=0;D<p.length;D++){let j=p[D];const ut=D;let ct={description:j.note,allergies:j.x,quantity:0,index:ut,description_cn:j.note_cn,description_en:j.note_en,likes:j.likes||0,rates:j.rates||0};if(ct={...j,...ct},b.zh[ct.category]=j.category_cn,b.en[ct.category]=j.category_en,S.value.push(ct),ct.category=="")for(let Rt=0;Rt<S.value.length;Rt++){const pt=S.value[Rt];if(pt.handle&&pt.handle==j.handle&&pt.category!=""){pt.subitem||(pt.subitem=[pt.index]),pt.subitem.push(S.value.length-1),ct.name=pt.name,ct.image==""&&(ct.image=pt.image);break}}}const m=await i();for(let D=0;D<m.length;D++)l.pt.push(m[D]),l.zh.push(b.zh[m[D]]||m[D]),l.en.push(b.en[m[D]]||m[D]);const E=localStorage.getItem("order_cartDishs");E&&E!="undefined"&&(tt.cartDishs.value=JSON.parse(E),tt.cartItemCount.value=tt.cartDishs.value.length);const U=localStorage.getItem("order_dishDatas");if(U&&U!="undefined"){let D=JSON.parse(U);for(let j=0;j<D.length;j++)for(let ut=0;ut<S.value.length;ut++)D[j].id==S.value[ut].id&&(S.value[ut].quantity=D[j].quantity,tt.cartItemCount.value+=D[j].quantity)}let K=localStorage.getItem("language")||we.global.locale;C.value=l[K]||l.pt;for(let D=0;D<C.value.length;D++){const j=D;J.value.push({label:C.value[D],command:()=>{_(j),O()}})}}const O=()=>{ke(()=>{const p=document.querySelector(".p-tablist-viewport"),b=document.querySelector(".p-tab.p-tab-active");if(p&&b){const m=b.offsetLeft-p.offsetWidth/2+b.offsetWidth/2;p.scrollTo({left:m,behavior:"smooth"})}})},_=p=>{g(p),w.value=p,O()},ht=()=>{var p=[];for(let m=0;m<S.value.length;m++){var b=S.value[m];b.quantity>0&&p.push(b)}Z.value.showDishList(p)};function ot(){return k.getTable()}k.params.port,st.value=k.table.value.order;function bt(p){var b=c("notification.too_fast",{remainTime:p});it.show_warn(b)}const gt=p=>{const b=[];for(let K=0;K<tt.cartDishs.value.length;K++){var m=tt.cartDishs.value[K];b.push({dishid:m.dishid,name:m.name,quantity:m.count,notes:m.notes,limit:m.limit,price:m.dis_price?m.dis_price:m.price,dishNote:m.dishNote})}for(let K=0;K<S.value.length;K++){var m=S.value[K];m.quantity>0&&b.push({dishid:m.id,name:m.name,quantity:m.quantity,limit:m.limit,price:m.dis_price?m.dis_price:m.price,dishNote:m.dishNote})}if(b.length===0)return it.show_warn(c("notification.select_at_least_one")),!1;console.log("cart item:",b);const E=JSON.parse(localStorage.getItem(Zt)||"{}"),U=Date.now();if(!E.startTime||U-E.startTime>Yt*1e3)E.startTime=U;else{const K=Yt-parseInt((U-E.startTime)/1e3);bt(K);return}return localStorage.setItem(Zt,JSON.stringify(E)),o.value=!0,k.submit_order({name:p.name,note:p.note,table:ot(),items:b}),!0};function Bt(){const p=localStorage.getItem("language");p&&($.value=p)}function Pt(){for(let p=0;p<S.value.length;p++){const b=S.value[p];b.quantity=0}o.value=!1,F.value=0,tt.cartDishs.value.length=0}$e(async()=>{await d(),Bt(),g(w.value),k.clear_order_data=()=>{Pt()},k.setOnOrderConfirmed(p=>{console.log("setOnOrderConfirmed..."),Pt();const b=p;it.show_success(c("notification.order_submitted",{id:b}))}),k.setOnShowError(p=>{o.value=!1,it.show_error(p)})});let Ot=!1;function ce(){localStorage.removeItem("login_time"),Ot=!0;const p=n.query.table;p?e.push({path:"/",query:{table:p}}):e.push({path:"/takeReserve"})}function Ft(){localStorage.setItem("order_cartDishs",JSON.stringify(tt.cartDishs.value));const p=[],b=W.dishDatas.value;for(let m=0;m<b.length;m++)b[m].quantity>0&&p.push({id:b[m].id,quantity:b[m].quantity});localStorage.setItem("order_dishDatas",JSON.stringify(p)),(tt.cartDishs.value.length>0||p.length>0)&&localStorage.setItem("login_time",JSON.stringify(Date.now())),Ot&&(Ot=!1,localStorage.removeItem("login_time"))}return xe(()=>{Ft()}),window.addEventListener("beforeunload",p=>{k.cleanup(),Ft()}),(p,b)=>{const m=At("touch"),E=At("touch-options");return r(),u(Q,null,[s("div",On,[y(qn,{types:v(k).orderMenuTab,typeIndex:w.value,tabItems:J.value,tableId:ot(),onClickType:_,onSwitchToWelcome:ce},null,8,["types","typeIndex","tabItems","tableId"]),b[2]||(b[2]=s("div",{class:"md:pb-2 lg:pb-5",style:{"padding-top":"7rem"}},null,-1)),Lt((r(),u("div",{onTouchstart:q,style:{"overflow-x":"hidden","touch-action":"pan-y"},class:"h-full"},[X.value?(r(),et(nn,{key:0,currentCustomDish:V.value},null,8,["currentCustomDish"])):(r(),et(qa,{key:1,updateCartItemCount:M,rateDish:f,likedItemsRef:rt.value,dislikedItemsRef:L.value},null,8,["likedItemsRef","dislikedItemsRef"]))],32)),[[m,G,"swipe",{left:!0,passive:!0}],[m,nt,"swipe",{right:!0,passive:!0}],[E,{swipeTolerance:100}]]),b[3]||(b[3]=s("div",{class:"pb-6"},null,-1)),s("div",Rn,[s("div",En,[s("div",Vn,[ot()?(r(),et(v(H),{key:0,label:p.$t("common.orders"),icon:"pi pi-list",class:"p-button-secondary",onClick:I},null,8,["label"])):x("",!0)]),s("div",jn,[y(v(re),{value:v(F),severity:"danger",onClick:ht},{default:A(()=>b[1]||(b[1]=[s("i",{class:"pi pi-shopping-cart",style:{"font-size":"2rem"}},null,-1)])),_:1,__:[1]},8,["value"])])])])]),y(Is,{ref_key:"cartRef",ref:Z,updateCartItemCount:M,checkout:gt,isTakeaway:ot()==null},null,8,["isTakeaway"]),y(v(Tt),{visible:R.value,"onUpdate:visible":b[0]||(b[0]=U=>R.value=U),header:p.$t("common.completedOrders"),modal:"",style:{width:"80vw","max-width":"700px"}},{default:A(()=>{var U,K;return[s("div",Fn,[s("div",Mn,[(U=z.value.adultPrice)!=null&&U.quantity&&z.value.adultPrice.quantity!=0?(r(),u("div",Kn,[s("div",Wn,[s("span",Hn,h(p.$t("common.adult")),1),s("small",null,h(p.$t("common.quantity"))+": "+h(z.value.adultPrice.quantity),1)]),s("div",Un,[s("span",null,"€"+h((Number(z.value.adultPrice.price)*z.value.adultPrice.quantity).toFixed(2)),1)])])):x("",!0),(K=z.value.childrenPrice)!=null&&K.quantity&&z.value.childrenPrice.quantity!=0?(r(),u("div",Qn,[s("div",Jn,[s("span",Gn,h(p.$t("common.children")),1),s("small",null,h(p.$t("common.quantity"))+": "+h(z.value.childrenPrice.quantity),1)]),s("div",Xn,[s("span",null,"€"+h((Number(z.value.childrenPrice.price)*z.value.childrenPrice.quantity).toFixed(2)),1)])])):x("",!0)]),v(k).table.value.order.length===0?(r(),u("div",Yn,h(p.$t("common.noOrders")),1)):(r(),u("div",Zn,[(r(!0),u(Q,null,Y(v(k).table.value.order,(D,j)=>(r(),u("div",{key:j,class:"flex justify-content-between border-bottom-1 pb-2"},[s("div",to,[s("span",eo,h(v(k).getDishName(D)),1),s("small",null,h(p.$t("common.quantity"))+": "+h(D.quantity),1)]),s("div",ao,[s("span",null,"€"+h((D.price*D.quantity).toFixed(2)),1)])]))),128))]))]),s("div",so,h(p.$t("common.total"))+": €"+h(z.value.total),1)]}),_:1},8,["visible","header"])],64)}}},po=qt(no,[["__scopeId","data-v-289c372e"]]);export{po as default};
