import{af as X,H as U,B as w,J as Y,R,K as C,L as H,ag as G,ah as ee,N as O,Z as x,Q as te,y as I,ai as T,a4 as $,q as r,aj as ne,V,e as d,j as h,m as a,g as A,X as M,k as p,n as k,_ as f,t as D,U as L,h as v,f as K,W as Z,Y as m,F as P,l as S,p as ie,s as F,ak as oe,a8 as N}from"./index-DtxVDuYP.js";import{C as ae}from"./_plugin-vue_export-helper-DnuUEa9S.js";var re=X(),se=U`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`,ce={root:function(e){var n=e.props;return["p-menu p-component",{"p-menu-overlay":n.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(e){var n=e.instance;return["p-menu-item",{"p-focus":n.id===n.focusedOptionId,"p-disabled":n.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},de=w.extend({name:"menu",style:se,classes:ce}),le={name:"BaseMenu",extends:C,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:de,provide:function(){return{$pcMenu:this,$parentInstance:this}}},j={name:"Menuitem",hostName:"Menu",extends:C,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,n){return e&&e.item?ne(e.item[n]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var n=this.getItemProp(this.item,"command");n&&n({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit("item-mousemove",{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:r({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:r({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon")),label:r({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},computed:{dataP:function(){return H({focus:this.isItemFocused(),disabled:this.disabled()})}},directives:{ripple:R}},ue=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled","data-p"],pe=["data-p"],he=["href","target"],fe=["data-p"],me=["data-p"];function ve(t,e,n,o,c,i){var b=V("ripple");return i.visible()?(a(),d("li",r({key:0,id:n.id,class:[t.cx("item"),n.item.class],role:"menuitem",style:n.item.style,"aria-label":i.label(),"aria-disabled":i.disabled(),"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1,"data-p":i.dataP},i.getPTOptions("item")),[A("div",r({class:t.cx("itemContent"),onClick:e[0]||(e[0]=function(g){return i.onItemClick(g)}),onMousemove:e[1]||(e[1]=function(g){return i.onItemMouseMove(g)}),"data-p":i.dataP},i.getPTOptions("itemContent")),[n.templates.item?n.templates.item?(a(),p(f(n.templates.item),{key:1,item:n.item,label:i.label(),props:i.getMenuItemProps(n.item)},null,8,["item","label","props"])):h("",!0):M((a(),d("a",r({key:0,href:n.item.url,class:t.cx("itemLink"),target:n.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[n.templates.itemicon?(a(),p(f(n.templates.itemicon),{key:0,item:n.item,class:k(t.cx("itemIcon"))},null,8,["item","class"])):n.item.icon?(a(),d("span",r({key:1,class:[t.cx("itemIcon"),n.item.icon],"data-p":i.dataP},i.getPTOptions("itemIcon")),null,16,fe)):h("",!0),A("span",r({class:t.cx("itemLabel"),"data-p":i.dataP},i.getPTOptions("itemLabel")),D(i.label()),17,me)],16,he)),[[b]])],16,pe)],16,ue)):h("",!0)}j.render=ve;function z(t){return Ae(t)||ye(t)||ge(t)||be()}function be(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ge(t,e){if(t){if(typeof t=="string")return E(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(t,e):void 0}}function ye(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ae(t){if(Array.isArray(t))return E(t)}function E(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var Pe={name:"Menu",extends:le,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&x.clear(this.container),this.container=null},methods:{itemClick:function(e){var n=e.item;this.disabled(n)||(n.command&&n.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(I(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var n=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)I(this.target),this.hide(),e.preventDefault();else{var n=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(T(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()},onEnterKey:function(e){var n=$(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),o=n&&$(n,'a[data-pc-section="itemlink"]');this.popup&&I(this.target),o?o.click():n&&n.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var n=T(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=z(n).findIndex(function(c){return c.id===e});return o>-1?o+1:0},findPrevOptionIndex:function(e){var n=T(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=z(n).findIndex(function(c){return c.id===e});return o>-1?o-1:0},changeFocusedOptionIndex:function(e){var n=T(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=e>=n.length?n.length-1:e<0?0:e;o>-1&&(this.focusedOptionIndex=n[o].getAttribute("id"))},toggle:function(e,n){this.overlayVisible?this.hide():this.show(e,n)},show:function(e,n){this.overlayVisible=!0,this.target=n??e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){te(e,{position:"absolute",top:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&x.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&I(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&x.clear(e)},alignOverlay:function(){ee(this.container,this.target);var e=O(this.target);e>O(this.container)&&(this.container.style.minWidth=O(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var o=e.container&&!e.container.contains(n.target),c=!(e.target&&(e.target===n.target||e.target.contains(n.target)));e.overlayVisible&&o&&c?e.hide():!e.popup&&o&&c&&(e.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new ae(this.target,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!G()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},onOverlayClick:function(e){re.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null},dataP:function(){return H({popup:this.popup})}},components:{PVMenuitem:j,Portal:Y}},ke=["id","data-p"],Ce=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],Ie=["id"];function Le(t,e,n,o,c,i){var b=L("PVMenuitem"),g=L("Portal");return a(),p(g,{appendTo:t.appendTo,disabled:!t.popup},{default:v(function(){return[K(Z,r({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:v(function(){return[!t.popup||c.overlayVisible?(a(),d("div",r({key:0,ref:i.containerRef,id:t.$id,class:t.cx("root"),onClick:e[3]||(e[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),"data-p":i.dataP},t.ptmi("root")),[t.$slots.start?(a(),d("div",r({key:0,class:t.cx("start")},t.ptm("start")),[m(t.$slots,"start")],16)):h("",!0),A("ul",r({ref:i.listRef,id:t.$id+"_list",class:t.cx("list"),role:"menu",tabindex:t.tabindex,"aria-activedescendant":c.focused?i.focusedOptionId:void 0,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},t.ptm("list")),[(a(!0),d(P,null,S(t.model,function(u,s){return a(),d(P,{key:i.label(u)+s.toString()},[u.items&&i.visible(u)&&!u.separator?(a(),d(P,{key:0},[u.items?(a(),d("li",r({key:0,id:t.$id+"_"+s,class:[t.cx("submenuLabel"),u.class],role:"none",ref_for:!0},t.ptm("submenuLabel")),[m(t.$slots,t.$slots.submenulabel?"submenulabel":"submenuheader",{item:u},function(){return[ie(D(i.label(u)),1)]})],16,Ie)):h("",!0),(a(!0),d(P,null,S(u.items,function(l,y){return a(),d(P,{key:l.label+s+"_"+y},[i.visible(l)&&!l.separator?(a(),p(b,{key:0,id:t.$id+"_"+s+"_"+y,item:l,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(l)&&l.separator?(a(),d("li",r({key:"separator"+s+y,class:[t.cx("separator"),u.class],style:l.style,role:"separator",ref_for:!0},t.ptm("separator")),null,16)):h("",!0)],64)}),128))],64)):i.visible(u)&&u.separator?(a(),d("li",r({key:"separator"+s.toString(),class:[t.cx("separator"),u.class],style:u.style,role:"separator",ref_for:!0},t.ptm("separator")),null,16)):(a(),p(b,{key:i.label(u)+s.toString(),id:t.$id+"_"+s,item:u,index:s,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,Ce),t.$slots.end?(a(),d("div",r({key:1,class:t.cx("end")},t.ptm("end")),[m(t.$slots,"end")],16)):h("",!0)],16,ke)):h("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}Pe.render=Le;var W={name:"ChevronRightIcon",extends:F};function we(t,e,n,o,c,i){return a(),d("svg",r({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[A("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1)]),16)}W.render=we;var B={name:"ChevronUpIcon",extends:F};function Te(t,e,n,o,c,i){return a(),d("svg",r({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[A("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"},null,-1)]),16)}B.render=Te;var Oe={root:"p-accordioncontent",content:"p-accordioncontent-content"},xe=w.extend({name:"accordioncontent",classes:Oe}),$e={name:"BaseAccordionContent",extends:C,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:xe,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},_={name:"AccordionContent",extends:$e,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return r(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function Ke(t,e,n,o,c,i){return t.asChild?m(t.$slots,"default",{key:1,class:k(t.cx("root")),active:i.$pcAccordionPanel.active,a11yAttrs:i.a11yAttrs}):(a(),p(Z,r({key:0,name:"p-toggleable-content"},t.ptm("transition",i.ptParams)),{default:v(function(){return[!i.$pcAccordion.lazy||i.$pcAccordionPanel.active?M((a(),p(f(t.as),r({key:0,class:t.cx("root")},i.attrs),{default:v(function(){return[A("div",r({class:t.cx("content")},t.ptm("content",i.ptParams)),[m(t.$slots,"default")],16)]}),_:3},16,["class"])),[[oe,i.$pcAccordion.lazy?!0:i.$pcAccordionPanel.active]]):h("",!0)]}),_:3},16))}_.render=Ke;var q={name:"ChevronDownIcon",extends:F};function Se(t,e,n,o,c,i){return a(),d("svg",r({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[A("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1)]),16)}q.render=Se;var Ee={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},He=w.extend({name:"accordionheader",classes:Ee}),Me={name:"BaseAccordionHeader",extends:C,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:He,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},J={name:"AccordionHeader",extends:Me,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowDownKey:function(e){var n=this.findNextPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onHomeKey(e),e.preventDefault()},onArrowUpKey:function(e){var n=this.findPrevPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var n=this.findFirstPanel();this.changeFocusedPanel(e,n),e.preventDefault()},onEndKey:function(e){var n=this.findLastPanel();this.changeFocusedPanel(e,n),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findPanel:function(e){return e==null?void 0:e.closest('[data-pc-name="accordionpanel"]')},findHeader:function(e){return $(e,'[data-pc-name="accordionheader"]')},findNextPanel:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=n?e:e.nextElementSibling;return o?N(o,"data-p-disabled")?this.findNextPanel(o):this.findHeader(o):null},findPrevPanel:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=n?e:e.previousElementSibling;return o?N(o,"data-p-disabled")?this.findPrevPanel(o):this.findHeader(o):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(e,n){I(this.findHeader(n))}},computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return r(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return H({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:B,ChevronDownIcon:q},directives:{ripple:R}};function De(t,e,n,o,c,i){var b=V("ripple");return t.asChild?m(t.$slots,"default",{key:1,class:k(t.cx("root")),active:i.$pcAccordionPanel.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):M((a(),p(f(t.as),r({key:0,"data-p":i.dataP,class:t.cx("root"),onClick:i.onClick},i.attrs),{default:v(function(){return[m(t.$slots,"default",{active:i.$pcAccordionPanel.active}),m(t.$slots,"toggleicon",{active:i.$pcAccordionPanel.active,class:k(t.cx("toggleicon"))},function(){return[i.$pcAccordionPanel.active?(a(),p(f(i.$pcAccordion.$slots.collapseicon?i.$pcAccordion.$slots.collapseicon:i.$pcAccordion.collapseIcon?"span":"ChevronUpIcon"),r({key:0,class:[i.$pcAccordion.collapseIcon,t.cx("toggleicon")],"aria-hidden":"true"},t.ptm("toggleicon",i.ptParams)),null,16,["class"])):(a(),p(f(i.$pcAccordion.$slots.expandicon?i.$pcAccordion.$slots.expandicon:i.$pcAccordion.expandIcon?"span":"ChevronDownIcon"),r({key:1,class:[i.$pcAccordion.expandIcon,t.cx("toggleicon")],"aria-hidden":"true"},t.ptm("toggleicon",i.ptParams)),null,16,["class"]))]})]}),_:3},16,["data-p","class","onClick"])),[[b]])}J.render=De;var Fe={root:function(e){var n=e.instance,o=e.props;return["p-accordionpanel",{"p-accordionpanel-active":n.active,"p-disabled":o.disabled}]}},Be=w.extend({name:"accordionpanel",classes:Fe}),Ne={name:"BaseAccordionPanel",extends:C,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Be,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},Q={name:"AccordionPanel",extends:Ne,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return r(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function ze(t,e,n,o,c,i){return t.asChild?m(t.$slots,"default",{key:1,class:k(t.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs}):(a(),p(f(t.as),r({key:0,class:t.cx("root")},i.attrs),{default:v(function(){return[m(t.$slots,"default")]}),_:3},16,["class"]))}Q.render=ze;var Ue=U`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`,Re={root:"p-accordion p-component"},Ve=w.extend({name:"accordion",style:Ue,classes:Re}),Ze={name:"BaseAccordion",extends:C,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:Ve,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},je={name:"Accordion",extends:Ze,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e==null?void 0:e.map(String):e==null?void 0:e.toString())}}},methods:{isItemActive:function(e){var n;return this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.includes(e):this.d_value===e},updateValue:function(e){var n,o=this.isItemActive(e);this.multiple?o?this.d_value=this.d_value.filter(function(c){return c!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=o?null:e,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.map(Number):Number(this.d_value)),this.$emit(o?"tab-close":"tab-open",{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name==="AccordionTab"},getTabProp:function(e,n){return e.props?e.props[n]:void 0},getKey:function(e,n){return this.getTabProp(e,"header")||n},getHeaderPT:function(e,n){var o=this;return{root:r({onClick:function(i){return o.onTabClick(i,n)}},this.getTabProp(e,"headerProps"),this.getTabPT(e,"header",n)),toggleicon:r(this.getTabProp(e,"headeractionprops"),this.getTabPT(e,"headeraction",n))}},getContentPT:function(e,n){return{root:r(this.getTabProp(e,"contentProps"),this.getTabPT(e,"toggleablecontent",n)),transition:this.getTabPT(e,"transition",n),content:this.getTabPT(e,"content",n)}},getTabPT:function(e,n,o){var c=this.tabs.length,i={props:e.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:o,count:c,first:o===0,last:o===c-1,active:this.isItemActive("".concat(o))}};return r(this.ptm("accordiontab.".concat(n),i),this.ptmo(this.getTabProp(e,"pt"),n,i))},onTabClick:function(e,n){this.$emit("tab-click",{originalEvent:e,index:n})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(n,o){return e.isAccordionTab(o)?n.push(o):o.children&&o.children instanceof Array&&o.children.forEach(function(c){e.isAccordionTab(c)&&n.push(c)}),n},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:Q,AccordionHeader:J,AccordionContent:_,ChevronUpIcon:B,ChevronRightIcon:W}};function We(t,e,n,o,c,i){var b=L("AccordionHeader"),g=L("AccordionContent"),u=L("AccordionPanel");return a(),d("div",r({class:t.cx("root")},t.ptmi("root")),[i.hasAccordionTab?(a(!0),d(P,{key:0},S(i.tabs,function(s,l){return a(),p(u,{key:i.getKey(s,l),value:"".concat(l),pt:{root:i.getTabPT(s,"root",l)},disabled:i.getTabProp(s,"disabled")},{default:v(function(){return[K(b,{class:k(i.getTabProp(s,"headerClass")),pt:i.getHeaderPT(s,l)},{toggleicon:v(function(y){return[y.active?(a(),p(f(t.$slots.collapseicon?t.$slots.collapseicon:t.collapseIcon?"span":"ChevronDownIcon"),r({key:0,class:[t.collapseIcon,y.class],"aria-hidden":"true",ref_for:!0},i.getTabPT(s,"headericon",l)),null,16,["class"])):(a(),p(f(t.$slots.expandicon?t.$slots.expandicon:t.expandIcon?"span":"ChevronUpIcon"),r({key:1,class:[t.expandIcon,y.class],"aria-hidden":"true",ref_for:!0},i.getTabPT(s,"headericon",l)),null,16,["class"]))]}),default:v(function(){return[s.children&&s.children.headericon?(a(),p(f(s.children.headericon),{key:0,isTabActive:i.isItemActive("".concat(l)),active:i.isItemActive("".concat(l)),index:l},null,8,["isTabActive","active","index"])):h("",!0),s.props&&s.props.header?(a(),d("span",r({key:1,ref_for:!0},i.getTabPT(s,"headertitle",l)),D(s.props.header),17)):h("",!0),s.children&&s.children.header?(a(),p(f(s.children.header),{key:2})):h("",!0)]}),_:2},1032,["class","pt"]),K(g,{pt:i.getContentPT(s,l)},{default:v(function(){return[(a(),p(f(s)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):m(t.$slots,"default",{key:1})],16)}je.render=We;export{je as a,Q as b,J as c,_ as d,W as e,Pe as s};
