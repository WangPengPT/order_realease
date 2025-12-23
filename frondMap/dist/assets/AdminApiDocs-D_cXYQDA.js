import{j as e}from"./vendor-ui-DAmPMpEA.js";import{r as T,C as l,j as n,i as m,t as o,o as S,w as D,d as x,B as v,a1 as y,g as U,y as A,q as d}from"./index-BcrfGQEh.js";import{r as p}from"./vendor-react-iAJ0IrSD.js";import{C as z,a as Y,b as R}from"./collapsible-D8JvcdyC.js";import{u as G}from"./vendor-i18n-DxKeo2S1.js";import{L as u}from"./lock-QhxtbcQI.js";import{C as _}from"./copy-CvrIxvPN.js";import{T as K}from"./ticket-BIMDfaCH.js";import{K as H}from"./key-B-h86fwt.js";import{F as c}from"./file-text-CT0gf2Ab.js";import"./vendor-charts-Bz7hPIBd.js";import"./vendor-query-BlSVl3IQ.js";import"./vendor-supabase-KNAP0qdW.js";import"./index-DPX4vtt3.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=T("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=T("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]),ae=()=>{const{t:X,i18n:I}=G(),[j,N]=p.useState(null),[h,f]=p.useState("activity-list"),[b,C]=p.useState(["activity","coupon","auth","restaurant"]),r="https://tzdgqhwyzsxkxnncgzap.supabase.co/functions/v1",g=[{id:"activity",title:"活动 API",icon:J,endpoints:[{id:"activity-list",title:"获取活动列表",method:"GET",path:"/activity-api?action=list",description:"获取所有可见活动列表"},{id:"activity-detail",title:"获取活动详情",method:"GET",path:"/activity-api?action=detail",description:"获取指定活动详细信息"},{id:"activity-favorite",title:"检查收藏状态",method:"GET",path:"/activity-api?action=check_favorite",description:"检查用户是否收藏活动"},{id:"activity-restaurant-user-favorites",title:"餐厅活动列表",method:"GET",path:"/activity-api?action=restaurant_user_favorites",description:"获取餐厅参与的所有有效活动，标注用户收藏状态"}]},{id:"coupon",title:"优惠券 API",icon:K,endpoints:[{id:"coupon-query",title:"查询优惠券",method:"GET",path:"/coupon-api?action=query",description:"根据优惠券码查询详情"},{id:"coupon-use",title:"使用优惠券",method:"POST",path:"/coupon-api?action=use",description:"标记优惠券为已使用"}]},{id:"auth",title:"认证 API",icon:H,endpoints:[{id:"private-token",title:"生成私域Token",method:"POST",path:"/generate-private-token",description:"为用户生成私域导航Token"},{id:"auth-login",title:"用户登录",method:"POST",path:"/auth-api?action=login",description:"使用邮箱密码登录获取令牌"},{id:"auth-verify",title:"验证令牌",method:"POST",path:"/auth-api?action=verify",description:"验证访问令牌并获取用户信息"},{id:"auth-refresh",title:"刷新令牌",method:"POST",path:"/auth-api?action=refresh",description:"使用刷新令牌获取新访问令牌"},{id:"auth-logout",title:"用户登出",method:"POST",path:"/auth-api?action=logout",description:"登出并使令牌失效"}]},{id:"restaurant",title:"餐厅 API",icon:U,endpoints:[{id:"restaurant-list",title:"获取餐厅列表",method:"GET",path:"/restaurants-api",description:"获取所有餐厅信息"},{id:"restaurant-redirect",title:"Key ID 跳转",method:"GET",path:"/r/:keyId",description:"通过餐厅 Key ID 跳转到餐厅详情页"}]}],w=(t,a)=>{navigator.clipboard.writeText(t),N(a),A.success(I.language==="zh"?"已复制到剪贴板":"Copied to clipboard"),setTimeout(()=>N(null),2e3)},s=({code:t,section:a})=>e.jsxs("div",{className:"relative",children:[e.jsx("pre",{className:"bg-muted p-3 md:p-4 rounded-lg overflow-x-auto text-xs md:text-sm font-mono max-w-full",children:e.jsx("code",{className:"whitespace-pre-wrap break-all md:whitespace-pre md:break-normal",children:t})}),e.jsx(v,{variant:"ghost",size:"icon",className:"absolute top-1 right-1 md:top-2 md:right-2 h-7 w-7 md:h-8 md:w-8",onClick:()=>w(t,a),children:j===a?e.jsx(y,{className:"h-3 w-3 md:h-4 md:w-4 text-green-500"}):e.jsx(_,{className:"h-3 w-3 md:h-4 md:w-4"})})]}),E=t=>{C(a=>a.includes(t)?a.filter(P=>P!==t):[...a,t])},i=({method:t})=>{const a={GET:"bg-green-500/10 text-green-600 border-green-500/20",POST:"bg-blue-500/10 text-blue-600 border-blue-500/20",PUT:"bg-yellow-500/10 text-yellow-600 border-yellow-500/20",DELETE:"bg-red-500/10 text-red-600 border-red-500/20"};return e.jsx("span",{className:x("text-xs font-mono px-1.5 py-0.5 rounded border",a[t]||"bg-muted"),children:t})},O=()=>{switch(h){case"activity-list":return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx(i,{method:"GET"}),e.jsx("code",{className:"text-sm font-mono bg-muted px-2 py-1 rounded",children:"/activity-api?action=list"})]}),e.jsx("p",{className:"text-muted-foreground",children:"获取所有可见活动列表，支持分页和状态筛选"})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[e.jsx(c,{className:"h-4 w-4"}),"请求参数"]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs md:text-sm",children:[e.jsx("thead",{className:"bg-muted/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-24",children:"参数"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-24",children:"类型"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-16",children:"必填"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium min-w-[120px]",children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"action"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"outline",className:"text-xs",children:"是"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"固定值: list"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"page"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"number"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"secondary",className:"text-xs",children:"否"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"页码，默认 1"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"limit"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"number"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"secondary",className:"text-xs",children:"否"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"每页数量，默认 20，最大 100"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"status"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"secondary",className:"text-xs",children:"否"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"状态筛选: active, upcoming, ended, all"})]})]})]})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"请求示例"}),e.jsx(s,{code:`curl -X GET "${r}/activity-api?action=list&page=1&limit=10&status=active" \\
  -H "x-api-key: YOUR_API_KEY"`,section:"activity-list-example"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"响应示例"}),e.jsx(s,{code:`{
  "success": true,
  "data": {
    "activities": [
      {
        "id": "uuid",
        "title": { "zh": "...", "en": "...", "pt": "..." },
        "intro": { "zh": "...", "en": "...", "pt": "..." },
        "image_url": "https://...",
        "start_date": "2024-06-01T00:00:00Z",
        "end_date": "2024-08-31T23:59:59Z",
        "service_type": "both",
        "status": "active",
        "subscriber_count": 156,
        "restaurant_count": 25
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 50,
      "total_pages": 5
    }
  }
}`,section:"activity-list-response"})]})]});case"activity-detail":return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx(i,{method:"GET"}),e.jsx("code",{className:"text-sm font-mono bg-muted px-2 py-1 rounded",children:"/activity-api?action=detail&id=ID"})]}),e.jsx("p",{className:"text-muted-foreground",children:"获取指定活动的详细信息，包括参与餐厅列表"})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[e.jsx(c,{className:"h-4 w-4"}),"请求参数"]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs md:text-sm",children:[e.jsx("thead",{className:"bg-muted/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-24",children:"参数"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-28",children:"类型"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-16",children:"必填"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium min-w-[100px]",children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"action"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"outline",className:"text-xs",children:"是"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"固定值: detail"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"id"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string (UUID)"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"outline",className:"text-xs",children:"是"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"活动 ID"})]})]})]})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"请求示例"}),e.jsx(s,{code:`curl -X GET "${r}/activity-api?action=detail&id=activity-uuid" \\
  -H "x-api-key: YOUR_API_KEY"`,section:"activity-detail-example"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"响应示例"}),e.jsx(s,{code:`{
  "success": true,
  "data": {
    "id": "uuid",
    "title": { "zh": "...", "en": "...", "pt": "..." },
    "content": { "zh": "...", "en": "...", "pt": "..." },
    "usage_instructions": { "zh": "...", "en": "...", "pt": "..." },
    "handbook": { "zh": "...", "en": "...", "pt": "..." },
    "status": "active",
    "subscriber_count": 156,
    "participating_restaurants": [
      {
        "id": "restaurant-uuid",
        "name": "餐厅名称",
        "address": "地址...",
        "rating": 4.5
      }
    ]
  }
}`,section:"activity-detail-response"})]})]});case"activity-favorite":return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx(i,{method:"GET"}),e.jsx("code",{className:"text-sm font-mono bg-muted px-2 py-1 rounded",children:"/activity-api?action=check_favorite"})]}),e.jsx("p",{className:"text-muted-foreground",children:"检查指定用户是否收藏了指定活动"})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[e.jsx(c,{className:"h-4 w-4"}),"请求参数"]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs md:text-sm",children:[e.jsx("thead",{className:"bg-muted/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-24",children:"参数"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-28",children:"类型"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-16",children:"必填"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium min-w-[100px]",children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"action"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"outline",className:"text-xs",children:"是"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"固定值: check_favorite"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"activity_id"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string (UUID)"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"outline",className:"text-xs",children:"是"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"活动 ID"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"user_id"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string (UUID)"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"outline",className:"text-xs",children:"是"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"用户 ID"})]})]})]})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"请求示例"}),e.jsx(s,{code:`curl -X GET "${r}/activity-api?action=check_favorite&activity_id=xxx&user_id=xxx" \\
  -H "x-api-key: YOUR_API_KEY"`,section:"favorite-check-example"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"响应示例"}),e.jsx(s,{code:`{
  "success": true,
  "data": {
    "activity_id": "activity-uuid",
    "user_id": "user-uuid",
    "is_favorited": true,
    "favorited_at": "2024-06-01T10:00:00Z"
  }
}`,section:"favorite-check-response"})]})]});case"activity-restaurant-user-favorites":return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx(i,{method:"GET"}),e.jsx("code",{className:"text-sm font-mono bg-muted px-2 py-1 rounded",children:"/activity-api?action=restaurant_user_favorites"})]}),e.jsx("p",{className:"text-muted-foreground",children:"获取指定餐厅参与的所有活动完整信息，供客户端进行有效性验证，并标注用户收藏状态"})]}),e.jsxs("div",{className:"bg-muted/50 rounded-lg p-4 space-y-2",children:[e.jsx("h5",{className:"font-medium text-sm",children:"使用场景"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"适用于外部系统需要查询餐厅参与的所有活动。返回活动完整信息（标题、简介、图片、时间、服务类型、徽章、折扣等），由客户端根据时间和重复规则自行判断活动是否有效。"})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[e.jsx(c,{className:"h-4 w-4"}),"请求参数"]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs md:text-sm",children:[e.jsx("thead",{className:"bg-muted/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-24",children:"参数"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-24",children:"类型"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-16",children:"必填"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium min-w-[100px]",children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"action"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"outline",className:"text-xs",children:"是"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"固定值: restaurant_user_favorites"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"restaurant_key_id"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"outline",className:"text-xs",children:"是"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"餐厅 Key ID (自定义标识符)"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"user_id"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string (UUID)"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"secondary",className:"text-xs",children:"否"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"用户 ID（可选，用于标注收藏状态）"})]})]})]})})})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 space-y-2 border border-blue-200 dark:border-blue-900",children:[e.jsxs("h5",{className:"font-medium text-sm flex items-center gap-2",children:[e.jsx(u,{className:"h-4 w-4"}),"筛选逻辑"]}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• 餐厅参与: 活动在 activity_restaurants 表中与该餐厅关联"}),e.jsx("li",{children:"• 活动条件: visible=true, status=published"}),e.jsx("li",{children:"• 返回活动完整信息，客户端根据 start_date, end_date, repeat_mode, repeat_weekday, repeat_days_before 自行判断有效性"}),e.jsx("li",{children:"• 每个活动标注 is_favorited 字段表示用户收藏状态"})]})]}),e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-950/30 rounded-lg p-4 space-y-2 border border-amber-200 dark:border-amber-900",children:[e.jsx("h5",{className:"font-medium text-sm",children:"重复模式说明"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"none"}),": 不重复，仅在 start_date 到 end_date 期间有效"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"daily"}),": 每天重复"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"weekly"}),": 每周重复，repeat_weekday 指定星期几 (0=周日, 1=周一, ..., 6=周六)"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"monthly"}),": 每月重复"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"yearly"}),": 每年重复"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"days_before"}),": 提前几天模式，在 end_date 前 repeat_days_before 天开始有效"]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"请求示例"}),e.jsx(s,{code:`curl -X GET "${r}/activity-api?action=restaurant_user_favorites&restaurant_key_id=saldanha01&user_id=xxx" \\
  -H "x-api-key: YOUR_API_KEY"`,section:"restaurant-user-favorites-example"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"响应示例"}),e.jsx(s,{code:`{
  "success": true,
  "data": {
    "restaurant_key_id": "saldanha01",
    "user_id": "user-uuid",
    "activities": [
      {
        "activity_id": "activity-uuid",
        "title": {
          "zh": "夏日特惠",
          "en": "Summer Special",
          "pt": "Especial de Verão"
        },
        "intro": {
          "zh": "活动简介...",
          "en": "Activity intro...",
          "pt": "Introdução..."
        },
        "image_url": "https://example.com/image.jpg",
        "start_date": "2024-06-01",
        "end_date": "2024-08-31",
        "repeat_mode": "none",
        "repeat_weekday": null,
        "repeat_days_before": null,
        "service_type": "both",
        "badge": {
          "text": {
            "zh": "热门",
            "en": "Hot",
            "pt": "Quente"
          },
          "color": "#ff6b35"
        },
        "discount": {
          "type": "percentage",
          "value": 20,
          "key": "DISCOUNT20"
        },
        "is_favorited": true
      },
      {
        "activity_id": "activity-uuid-2",
        "title": {
          "zh": "周二特惠",
          "en": "Tuesday Deal",
          "pt": "Oferta de Terça"
        },
        "intro": {
          "zh": "每周二专享...",
          "en": "Every Tuesday...",
          "pt": "Toda terça-feira..."
        },
        "image_url": "https://example.com/tuesday.jpg",
        "start_date": "2024-01-01",
        "end_date": null,
        "repeat_mode": "weekly",
        "repeat_weekday": 2,
        "repeat_days_before": null,
        "service_type": "dine_in",
        "badge": {
          "text": {
            "zh": null,
            "en": null,
            "pt": null
          },
          "color": null
        },
        "discount": {
          "type": "fixed_amount",
          "value": 5,
          "key": null
        },
        "is_favorited": false
      },
      {
        "activity_id": "activity-uuid-3",
        "title": {
          "zh": "节日预热",
          "en": "Holiday Warmup",
          "pt": "Aquecimento de Férias"
        },
        "intro": {
          "zh": "节日前7天开始...",
          "en": "Starts 7 days before...",
          "pt": "Começa 7 dias antes..."
        },
        "image_url": "https://example.com/holiday.jpg",
        "start_date": "2024-12-01",
        "end_date": "2024-12-25",
        "repeat_mode": "days_before",
        "repeat_weekday": null,
        "repeat_days_before": 7,
        "service_type": "both",
        "badge": {
          "text": {
            "zh": "预热",
            "en": "Warmup",
            "pt": "Aquecimento"
          },
          "color": "#e74c3c"
        },
        "discount": {
          "type": "percentage",
          "value": 15,
          "key": "HOLIDAY15"
        },
        "is_favorited": false
      }
    ]
  }
}`,section:"restaurant-user-favorites-response"})]}),e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-950/30 rounded-lg p-4 space-y-2 border border-yellow-200 dark:border-yellow-900",children:[e.jsx("h5",{className:"font-medium text-sm",children:"响应字段说明"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"title"}),": 活动标题（多语言对象：zh/en/pt）"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"intro"}),": 活动简介（多语言对象：zh/en/pt）"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"image_url"}),": 活动封面图片URL"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"start_date"}),": 活动开始日期（YYYY-MM-DD格式）"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"end_date"}),": 活动结束日期（可为null表示无限期）"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"repeat_mode"}),": 重复模式 (none/daily/weekly/monthly/yearly)"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"repeat_weekday"}),": 周几重复 (0=周日, 1=周一, ..., 6=周六，仅当repeat_mode=weekly时有效)"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"service_type"}),": 服务类型 (dine_in/takeaway/both)"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"badge.text"}),": 徽章文本（多语言对象：zh/en/pt）"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"badge.color"}),": 徽章颜色（十六进制颜色值）"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"discount.type"}),": percentage (百分比折扣) 或 fixed_amount (固定金额)"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"discount.value"}),": 折扣值（百分比为数字如20表示减20%，固定金额为欧元数值）"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"discount.key"}),": 折扣标识符（可选）"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"is_favorited"}),": 用户是否收藏该活动（若未传 user_id 则始终为 false）"]})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-950/30 rounded-lg p-4 space-y-3 border border-green-200 dark:border-green-900",children:[e.jsxs("h5",{className:"font-medium text-sm flex items-center gap-2",children:[e.jsx(k,{className:"h-4 w-4"}),"客户端验证逻辑（重要）"]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["服务端仅根据 ",e.jsx("code",{className:"bg-muted px-1 rounded",children:"start_date"})," 和 ",e.jsx("code",{className:"bg-muted px-1 rounded",children:"end_date"})," 进行基础筛选。",e.jsx("code",{className:"bg-muted px-1 rounded",children:"repeat_mode"})," 和 ",e.jsx("code",{className:"bg-muted px-1 rounded",children:"repeat_weekday"})," 字段由客户端自行处理。"]}),e.jsxs("div",{className:"bg-muted/50 rounded p-3 text-sm font-mono",children:[e.jsx("p",{className:"text-xs text-muted-foreground mb-2",children:"// 客户端验证示例 (JavaScript)"}),e.jsx("pre",{className:"text-xs overflow-x-auto whitespace-pre-wrap",children:`function isActivityValidNow(activity) {
  const now = new Date();
  const startDate = new Date(activity.start_date);
  const endDate = activity.end_date ? new Date(activity.end_date) : null;
  
  // 基础日期范围检查
  if (now < startDate) return false;
  if (endDate && now > endDate) return false;
  
  // 周重复模式检查
  if (activity.repeat_mode === 'weekly' && activity.repeat_weekday !== null) {
    const currentWeekday = now.getDay(); // 0=周日, 1=周一, ..., 6=周六
    if (currentWeekday !== activity.repeat_weekday) {
      return false;
    }
  }
  
  return true;
}`})]}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:'repeat_mode = "none"'}),": 活动在 start_date 到 end_date 期间持续有效"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:'repeat_mode = "weekly"'}),": 活动仅在每周指定的 repeat_weekday 当天有效"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:'repeat_mode = "daily"'}),": 活动每天有效（在日期范围内）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:'repeat_mode = "monthly"'}),": 活动每月有效（在日期范围内）"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:'repeat_mode = "yearly"'}),": 活动每年有效（在日期范围内）"]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"无 user_id 请求示例"}),e.jsx(s,{code:`curl -X GET "${r}/activity-api?action=restaurant_user_favorites&restaurant_key_id=saldanha01" \\
  -H "x-api-key: YOUR_API_KEY"

// 响应: 所有活动的 is_favorited 均为 false`,section:"restaurant-user-favorites-no-user"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"餐厅不存在响应"}),e.jsx(s,{code:`{
  "error": "Restaurant not found with the provided key_id"
}`,section:"restaurant-user-favorites-not-found"})]})]});case"coupon-query":return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx(i,{method:"GET"}),e.jsx("code",{className:"text-sm font-mono bg-muted px-2 py-1 rounded",children:"/coupon-api?action=query&code=CODE"})]}),e.jsx("p",{className:"text-muted-foreground",children:"根据优惠券码查询优惠券详细信息，包括模板信息和用户领取记录"})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[e.jsx(c,{className:"h-4 w-4"}),"请求参数"]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs md:text-sm",children:[e.jsx("thead",{className:"bg-muted/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-24",children:"参数"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-24",children:"类型"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-16",children:"必填"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium min-w-[100px]",children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"action"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"outline",className:"text-xs",children:"是"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"固定值: query"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"code"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"outline",className:"text-xs",children:"是"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"优惠券码"})]})]})]})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"请求示例"}),e.jsx(s,{code:`curl -X GET "${r}/coupon-api?action=query&code=ABC-12345678" \\
  -H "x-api-key: YOUR_API_KEY"`,section:"coupon-query-example"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"响应示例"}),e.jsx(s,{code:`{
  "success": true,
  "data": {
    "coupon_code": {
      "id": "uuid",
      "code": "ABC-12345678",
      "is_active": true,
      "usage_limit": 1,
      "used_count": 0
    },
    "template": {
      "title": { "zh": "分享优惠券", "en": "Share Coupon", "pt": "..." },
      "discount_type": "percentage",
      "discount_value": 10,
      "valid_from": "2024-01-01T00:00:00Z",
      "valid_until": "2024-12-31T23:59:59Z"
    },
    "is_valid": true,
    "claims": [
      {
        "user_id": "uuid",
        "user_name": "张三",
        "claimed_at": "2024-06-01T10:00:00Z",
        "used_at": null
      }
    ]
  }
}`,section:"coupon-query-response"})]})]});case"coupon-use":return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx(i,{method:"POST"}),e.jsx("code",{className:"text-sm font-mono bg-muted px-2 py-1 rounded",children:"/coupon-api?action=use"})]}),e.jsx("p",{className:"text-muted-foreground",children:"将用户的优惠券标记为已使用"})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[e.jsx(c,{className:"h-4 w-4"}),"请求参数 (Body JSON)"]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs md:text-sm",children:[e.jsx("thead",{className:"bg-muted/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-28",children:"参数"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-20",children:"类型"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-16",children:"必填"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium min-w-[100px]",children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"user_coupon_id"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"secondary",className:"text-xs",children:"可选*"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"用户优惠券记录 ID"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"code"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"secondary",className:"text-xs",children:"可选*"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"优惠券码（与 user_id 配合）"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"user_id"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"secondary",className:"text-xs",children:"可选*"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"用户 ID（与 code 配合）"})]})]})]})})}),e.jsx("p",{className:"text-sm text-muted-foreground mt-2",children:"* 必须提供 user_coupon_id 或同时提供 code + user_id"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"请求示例"}),e.jsx(s,{code:`curl -X POST "${r}/coupon-api?action=use" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "code": "ABC-12345678", "user_id": "user-uuid" }'`,section:"coupon-use-example"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"响应示例"}),e.jsx(s,{code:`{
  "success": true,
  "message": "Coupon used successfully",
  "data": {
    "user_coupon_id": "uuid",
    "used_at": "2024-06-01T15:30:00Z"
  }
}`,section:"coupon-use-response"})]})]});case"private-token":return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx(i,{method:"POST"}),e.jsx("code",{className:"text-sm font-mono bg-muted px-2 py-1 rounded",children:"/generate-private-token"})]}),e.jsx("p",{className:"text-muted-foreground",children:"为已登录用户生成带有加密签名的私域导航 Token"})]}),e.jsx(l,{className:"bg-amber-500/5 border-amber-500/20",children:e.jsx(n,{className:"pt-4",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(u,{className:"h-5 w-5 text-amber-600 mt-0.5"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("p",{className:"font-medium text-amber-700 dark:text-amber-400",children:"认证方式不同"}),e.jsx("p",{className:"text-muted-foreground mt-1",children:"此接口使用用户 JWT Token 认证，而非 API Key"})]})]})})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"功能说明"}),e.jsxs("div",{className:"grid gap-2 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"h-1.5 w-1.5 rounded-full bg-primary"}),e.jsx("span",{children:"Token 有效期 5 分钟"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"h-1.5 w-1.5 rounded-full bg-primary"}),e.jsx("span",{children:"每次请求生成新 Token（含随机 nonce）"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"h-1.5 w-1.5 rounded-full bg-primary"}),e.jsx("span",{children:"包含餐厅 ID 和用户 ID（用于收藏状态查询）"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"认证方式"}),e.jsx(s,{code:`Headers:
Authorization: Bearer USER_JWT_TOKEN`,section:"token-auth"})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[e.jsx(c,{className:"h-4 w-4"}),"请求参数 (Body JSON)"]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs md:text-sm",children:[e.jsx("thead",{className:"bg-muted/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-28",children:"参数"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-28",children:"类型"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-16",children:"必填"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium min-w-[100px]",children:"说明"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"restaurant_id"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string (UUID)"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"outline",className:"text-xs",children:"是"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"要导航到的餐厅 ID"})]})})]})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"请求示例"}),e.jsx(s,{code:`curl -X POST "${r}/generate-private-token" \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{ "restaurant_id": "restaurant-uuid" }'`,section:"token-example"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"响应示例"}),e.jsx(s,{code:`{
  "token": "eyJyaWQiOiJyZXN0YXVyYW50LXV1aWQiLC...c2lnbmF0dXJlMTIz"
}`,section:"token-response"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"Token 结构"}),e.jsxs("div",{className:"bg-muted/50 p-4 rounded-lg text-sm space-y-2",children:[e.jsxs("p",{children:["格式: ",e.jsx("code",{className:"bg-muted px-1 rounded",children:"base64(payload).signature"})]}),e.jsx("p",{children:"Payload 字段:"}),e.jsxs("ul",{className:"list-disc list-inside ml-2 space-y-1 text-muted-foreground",children:[e.jsxs("li",{children:[e.jsx("code",{children:"rid"}),": 餐厅 ID"]}),e.jsxs("li",{children:[e.jsx("code",{children:"uid"}),": 用户 ID（用于查询收藏状态）"]}),e.jsxs("li",{children:[e.jsx("code",{children:"exp"}),": 过期时间戳 (毫秒)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"nonce"}),": 随机字符串"]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"外部系统验证示例"}),e.jsx(s,{code:`// 从 URL 获取 Token
const token = new URLSearchParams(location.search).get('t');

// 解析验证
function verifyToken(token, secret) {
  const [base64Payload, signature] = token.split('.');
  const expectedSig = btoa(secret + base64Payload).slice(0, 16);
  
  if (signature !== expectedSig) return null;
  
  const payload = JSON.parse(atob(base64Payload));
  if (Date.now() > payload.exp) return null;
  
  return payload; // { rid, uid, exp, nonce }
}`,section:"token-verify-example"})]})]});case"auth-login":return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx(i,{method:"POST"}),e.jsx("code",{className:"text-sm font-mono bg-muted px-2 py-1 rounded",children:"/auth-api?action=login"})]}),e.jsx("p",{className:"text-muted-foreground",children:"使用邮箱和密码登录，获取访问令牌和刷新令牌"})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[e.jsx(c,{className:"h-4 w-4"}),"请求参数 (Body JSON)"]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs md:text-sm",children:[e.jsx("thead",{className:"bg-muted/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-24",children:"参数"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-20",children:"类型"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-16",children:"必填"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium min-w-[100px]",children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"email"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"outline",className:"text-xs",children:"是"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"用户邮箱"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"password"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"outline",className:"text-xs",children:"是"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"用户密码"})]})]})]})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"请求示例"}),e.jsx(s,{code:`curl -X POST "${r}/auth-api?action=login" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "email": "user@example.com", "password": "your_password" }'`,section:"auth-login-example"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"响应示例"}),e.jsx(s,{code:`{
  "success": true,
  "user": {
    "id": "user-uuid",
    "email": "user@example.com",
    "display_name": "用户名",
    "avatar_url": "https://...",
    "role": "user"
  },
  "session": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh_token": "xxx-refresh-token-xxx",
    "expires_at": 1735257600,
    "expires_in": 3600
  }
}`,section:"auth-login-response"})]})]});case"auth-verify":return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx(i,{method:"POST"}),e.jsx("code",{className:"text-sm font-mono bg-muted px-2 py-1 rounded",children:"/auth-api?action=verify"})]}),e.jsx("p",{className:"text-muted-foreground",children:"验证访问令牌是否有效，并获取用户信息"})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[e.jsx(c,{className:"h-4 w-4"}),"请求参数 (Body JSON)"]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs md:text-sm",children:[e.jsx("thead",{className:"bg-muted/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-28",children:"参数"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-20",children:"类型"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-16",children:"必填"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium min-w-[100px]",children:"说明"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"access_token"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"outline",className:"text-xs",children:"是"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"登录获取的访问令牌"})]})})]})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"请求示例"}),e.jsx(s,{code:`curl -X POST "${r}/auth-api?action=verify" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }'`,section:"auth-verify-example"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"响应示例"}),e.jsx(s,{code:`{
  "success": true,
  "valid": true,
  "user": {
    "id": "user-uuid",
    "email": "user@example.com",
    "display_name": "用户名",
    "avatar_url": "https://...",
    "role": "user"
  }
}`,section:"auth-verify-response"})]})]});case"auth-refresh":return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx(i,{method:"POST"}),e.jsx("code",{className:"text-sm font-mono bg-muted px-2 py-1 rounded",children:"/auth-api?action=refresh"})]}),e.jsx("p",{className:"text-muted-foreground",children:"使用刷新令牌获取新的访问令牌"})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[e.jsx(c,{className:"h-4 w-4"}),"请求参数 (Body JSON)"]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs md:text-sm",children:[e.jsx("thead",{className:"bg-muted/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-28",children:"参数"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-20",children:"类型"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-16",children:"必填"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium min-w-[100px]",children:"说明"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"refresh_token"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"outline",className:"text-xs",children:"是"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"登录时获取的刷新令牌"})]})})]})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"请求示例"}),e.jsx(s,{code:`curl -X POST "${r}/auth-api?action=refresh" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "refresh_token": "xxx-refresh-token-xxx" }'`,section:"auth-refresh-example"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"响应示例"}),e.jsx(s,{code:`{
  "success": true,
  "session": {
    "access_token": "new-access-token...",
    "refresh_token": "new-refresh-token...",
    "expires_at": 1735261200,
    "expires_in": 3600
  }
}`,section:"auth-refresh-response"})]})]});case"auth-logout":return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx(i,{method:"POST"}),e.jsx("code",{className:"text-sm font-mono bg-muted px-2 py-1 rounded",children:"/auth-api?action=logout"})]}),e.jsx("p",{className:"text-muted-foreground",children:"登出用户并使令牌失效"})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[e.jsx(c,{className:"h-4 w-4"}),"请求参数 (Body JSON)"]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs md:text-sm",children:[e.jsx("thead",{className:"bg-muted/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-28",children:"参数"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-20",children:"类型"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-16",children:"必填"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium min-w-[100px]",children:"说明"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"access_token"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"outline",className:"text-xs",children:"是"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"要使其失效的访问令牌"})]})})]})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"请求示例"}),e.jsx(s,{code:`curl -X POST "${r}/auth-api?action=logout" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }'`,section:"auth-logout-example"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"响应示例"}),e.jsx(s,{code:`{
  "success": true,
  "message": "Logged out successfully"
}`,section:"auth-logout-response"})]})]});case"restaurant-redirect":return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx(i,{method:"GET"}),e.jsx("code",{className:"text-sm font-mono bg-muted px-2 py-1 rounded",children:"/r/:keyId"})]}),e.jsx("p",{className:"text-muted-foreground",children:"通过餐厅的 Key ID 快速跳转到餐厅详情页面。这是一个前端路由，不需要 API Key 认证。"})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[e.jsx(c,{className:"h-4 w-4"}),"路径参数"]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs md:text-sm",children:[e.jsx("thead",{className:"bg-muted/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-24",children:"参数"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-24",children:"类型"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-16",children:"必填"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium min-w-[120px]",children:"说明"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"keyId"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"outline",className:"text-xs",children:"是"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"餐厅的 Key ID，在餐厅管理中设置"})]})})]})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"使用示例"}),e.jsx(s,{code:`# 假设餐厅的 Key ID 为 "xiaoxiong"
# 直接在浏览器中访问以下 URL 即可跳转到该餐厅详情页

${window.location.origin}/r/xiaoxiong

# 系统会自动查找 key_id 为 "xiaoxiong" 的餐厅
# 并重定向到 /restaurant/{餐厅UUID}`,section:"restaurant-redirect-example"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"行为说明"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(d,{variant:"outline",className:"shrink-0 mt-0.5",children:"成功"}),e.jsxs("span",{children:["如果找到匹配的餐厅，自动跳转到 ",e.jsxs("code",{className:"bg-muted px-1 rounded",children:["/restaurant/","{id}"]})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(d,{variant:"destructive",className:"shrink-0 mt-0.5",children:"失败"}),e.jsx("span",{children:"如果未找到餐厅，显示错误提示并提供浏览所有餐厅的链接"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-sm text-muted-foreground",children:[e.jsx("li",{children:"印刷物料上使用简短易记的链接（如名片、传单）"}),e.jsx("li",{children:"二维码生成，方便顾客扫码直达餐厅页面"}),e.jsx("li",{children:"社交媒体分享时使用更简洁的 URL"}),e.jsx("li",{children:"POS 系统或第三方应用快速跳转"})]})]})]});case"restaurant-list":return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx(i,{method:"GET"}),e.jsx("code",{className:"text-sm font-mono bg-muted px-2 py-1 rounded",children:"/restaurants-api"})]}),e.jsx("p",{className:"text-muted-foreground",children:"获取所有餐厅的详细信息"})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[e.jsx(c,{className:"h-4 w-4"}),"查询参数 (可选)"]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs md:text-sm",children:[e.jsx("thead",{className:"bg-muted/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-32",children:"参数"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-24",children:"类型"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-16",children:"必填"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium min-w-[100px]",children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"key_id"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"string"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"secondary",className:"text-xs",children:"否"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"按餐厅 Key ID 筛选"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"include_hidden"})}),e.jsx("td",{className:"p-2 md:p-3 text-muted-foreground whitespace-nowrap",children:"boolean"}),e.jsx("td",{className:"p-2 md:p-3",children:e.jsx(d,{variant:"secondary",className:"text-xs",children:"否"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"是否包含隐藏餐厅（默认 false）"})]})]})]})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"请求示例"}),e.jsx(s,{code:`# 获取所有可见餐厅
curl -X GET "${r}/restaurants-api"

# 按 Key ID 筛选
curl -X GET "${r}/restaurants-api?key_id=xiaoxiong"

# 包含隐藏餐厅
curl -X GET "${r}/restaurants-api?include_hidden=true"`,section:"restaurant-list-example"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"响应示例"}),e.jsx(s,{code:`{
  "success": true,
  "count": 15,
  "data": [
    {
      "id": "uuid",
      "name": "小熊餐厅",
      "name_en": "Xiaoxiong Restaurant",
      "name_pt": "Restaurante Xiaoxiong",
      "address": "Rua Example 123, Lisboa",
      "phone": "+351 123 456 789",
      "type": ["中餐", "川菜"],
      "type_en": ["Chinese", "Sichuan"],
      "type_pt": ["Chinês", "Sichuan"],
      "description": "正宗川菜",
      "image_url": "https://...",
      "website_url": "https://...",
      "lat": 38.7223,
      "lng": -9.1393,
      "rating": 4.5,
      "opening_hours": {...},
      "visible": true,
      "key_id": "xiaoxiong",
      "announcement_zh": "新品上市",
      "announcement_en": "New dishes",
      "announcement_pt": "Novos pratos",
      "show_website_button": true,
      "show_dish_gallery": true,
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-06-01T12:00:00Z"
    }
  ]
}`,section:"restaurant-list-response"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"返回字段说明"}),e.jsx("div",{className:"border rounded-lg overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs md:text-sm",children:[e.jsx("thead",{className:"bg-muted/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left p-2 md:p-3 font-medium whitespace-nowrap w-32",children:"字段"}),e.jsx("th",{className:"text-left p-2 md:p-3 font-medium min-w-[100px]",children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"name"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"餐厅中文名称"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"name_en / name_pt"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"英文/葡语名称"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"type"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"餐厅类型标签数组（中文）"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"lat / lng"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"餐厅地理坐标"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"rating"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"平均评分 (0-5)"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"opening_hours"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"营业时间 JSON 对象"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"key_id"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"餐厅唯一标识符（用于短链接）"})]}),e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 md:p-3",children:e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"announcement_*"})}),e.jsx("td",{className:"p-2 md:p-3 break-words",children:"餐厅公告（多语言）"})]})]})]})})})]})]});default:return e.jsx("div",{children:"选择左侧的 API 端点查看详情"})}};return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h1",{className:"text-2xl md:text-3xl font-bold",children:"API 文档"}),e.jsx("p",{className:"text-muted-foreground mt-2 text-sm md:text-base",children:"外部系统可以通过以下 API 接口与平台系统进行交互"})]}),e.jsx("div",{className:"lg:hidden mb-6",children:e.jsx(l,{children:e.jsx(n,{className:"p-3",children:e.jsx("select",{value:h,onChange:t=>f(t.target.value),className:"w-full p-2 border rounded-md bg-background text-sm",children:g.map(t=>e.jsx("optgroup",{label:t.title,children:t.endpoints.map(a=>e.jsxs("option",{value:a.id,children:["[",a.method,"] ",a.title]},a.id))},t.id))})})})}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx("div",{className:"w-64 flex-shrink-0 hidden lg:block",children:e.jsxs(l,{className:"sticky top-20",children:[e.jsx(m,{className:"pb-3",children:e.jsxs(o,{className:"text-sm flex items-center gap-2",children:[e.jsx(S,{className:"h-4 w-4"}),"API 端点"]})}),e.jsx(n,{className:"p-0",children:e.jsx("div",{className:"px-3 pb-4 space-y-1 max-h-[60vh] overflow-y-auto",children:g.map(t=>e.jsxs(z,{open:b.includes(t.id),onOpenChange:()=>E(t.id),children:[e.jsxs(Y,{className:"flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t.icon,{className:"h-4 w-4"}),t.title]}),e.jsx(D,{className:x("h-4 w-4 transition-transform",b.includes(t.id)&&"rotate-90")})]}),e.jsx(R,{className:"pl-4 space-y-0.5",children:t.endpoints.map(a=>e.jsxs("button",{onClick:()=>f(a.id),className:x("w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors text-left",h===a.id?"bg-primary/10 text-primary font-medium":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:[e.jsx(i,{method:a.method}),e.jsx("span",{className:"truncate",children:a.title})]},a.id))})]},t.id))})})]})}),e.jsxs("div",{className:"flex-1 min-w-0 space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsxs(l,{children:[e.jsx(m,{className:"pb-3",children:e.jsxs(o,{className:"text-sm flex items-center gap-2",children:[e.jsx(u,{className:"h-4 w-4"}),"认证方式"]})}),e.jsxs(n,{children:[e.jsx(s,{code:`Headers:
x-api-key: YOUR_API_KEY`,section:"auth"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-2",children:"请联系管理员获取 API Key"})]})]}),e.jsxs(l,{children:[e.jsx(m,{className:"pb-3",children:e.jsxs(o,{className:"text-sm flex items-center gap-2",children:[e.jsx(k,{className:"h-4 w-4"}),"Base URL"]})}),e.jsx(n,{children:e.jsxs("div",{className:"relative",children:[e.jsx("pre",{className:"bg-muted p-3 rounded-lg text-xs font-mono break-all whitespace-pre-wrap overflow-hidden",children:e.jsx("code",{children:r})}),e.jsx(v,{variant:"ghost",size:"icon",className:"absolute top-1 right-1 h-7 w-7",onClick:()=>w(r,"baseUrl"),children:j==="baseUrl"?e.jsx(y,{className:"h-3 w-3 text-green-500"}):e.jsx(_,{className:"h-3 w-3"})})]})})]})]}),e.jsx(l,{children:e.jsx(n,{className:"pt-6 overflow-x-auto",children:O()})}),e.jsxs(l,{children:[e.jsx(m,{children:e.jsx(o,{className:"text-lg",children:"错误码说明"})}),e.jsx(n,{children:e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3",children:[{code:"200",desc:"请求成功",color:"bg-green-500/10 text-green-600 border-green-500/20"},{code:"400",desc:"参数错误",color:"bg-yellow-500/10 text-yellow-600 border-yellow-500/20"},{code:"401",desc:"未授权",color:"bg-red-500/10 text-red-600 border-red-500/20"},{code:"404",desc:"资源不存在",color:"bg-orange-500/10 text-orange-600 border-orange-500/20"},{code:"500",desc:"服务器错误",color:"bg-red-500/10 text-red-600 border-red-500/20"}].map(t=>e.jsxs("div",{className:x("px-3 py-2 rounded-lg border text-center",t.color),children:[e.jsx("div",{className:"font-mono font-bold",children:t.code}),e.jsx("div",{className:"text-xs mt-0.5",children:t.desc})]},t.code))})})]})]})]})]})};export{ae as default};
//# sourceMappingURL=AdminApiDocs-D_cXYQDA.js.map
