import{s as n}from"./index-DbP2HlSH.js";import{B as l,c as r,o as a,e as o,a as d,m as t,r as s}from"./index-CS4Gn_Dm.js";var i=`
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
`,c={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},p=l.extend({name:"card",style:i,classes:c}),u={name:"BaseCard",extends:n,style:p,provide:function(){return{$pcCard:this,$parentInstance:this}}},m={name:"Card",extends:u,inheritAttrs:!1};function b(e,f,y,$,v,h){return a(),r("div",t({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(a(),r("div",t({key:0,class:e.cx("header")},e.ptm("header")),[s(e.$slots,"header")],16)):o("",!0),d("div",t({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(a(),r("div",t({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(a(),r("div",t({key:0,class:e.cx("title")},e.ptm("title")),[s(e.$slots,"title")],16)):o("",!0),e.$slots.subtitle?(a(),r("div",t({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[s(e.$slots,"subtitle")],16)):o("",!0)],16)):o("",!0),d("div",t({class:e.cx("content")},e.ptm("content")),[s(e.$slots,"content")],16),e.$slots.footer?(a(),r("div",t({key:1,class:e.cx("footer")},e.ptm("footer")),[s(e.$slots,"footer")],16)):o("",!0)],16)],16)}m.render=b;export{m as s};
