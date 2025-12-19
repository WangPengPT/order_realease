import{u as R,r as c,j as T,p as j,s as C}from"./index-DwrhXWM3.js";import{m as u}from"./mapbox-gl-CX9xSvRx.js";import{c as N}from"./geolocation-DTCM05Xm.js";import{m as z}from"./map-icon-DR07RZr_.js";const S=({restaurants:m,onRestaurantClick:f,userLocation:t,radiusFilter:d,onMapInit:h,onMarkerClick:y,showViewDetailsButton:x=!1})=>{const{i18n:$,t:b}=R(),v=c.useRef(null),n=c.useRef(null),g=c.useRef([]),[p,k]=c.useState(!1),o=c.useRef(null);return c.useEffect(()=>{if(!v.current||n.current)return;const r="pk.eyJ1IjoieGlhb3hpb25nMTIzIiwiYSI6ImNtNTFjOXliYjF1Y2IyaXM4bnNzMGxvdnkifQ.mPcWqH7ndIrjEqlWIJVk8g";u.accessToken=r;const e=t?[t.lng,t.lat]:[-9.1393,38.7223];return n.current=new u.Map({container:v.current,style:"mapbox://styles/mapbox/light-v11",center:e,zoom:13,cooperativeGestures:!0,doubleClickZoom:!1}),n.current.addControl(new u.NavigationControl({visualizePitch:!0}),"top-right"),n.current.on("load",()=>{k(!0),h&&n.current&&h(n.current)}),()=>{var s;g.current.forEach(a=>a.remove()),g.current=[],o.current&&(o.current.remove(),o.current=null),(s=n.current)==null||s.remove(),n.current=null,k(!1)}},[]),c.useEffect(()=>{n.current&&t&&p&&n.current.flyTo({center:[t.lng,t.lat],zoom:14,duration:1500})},[t,p]),c.useEffect(()=>{if(!n.current||!p)return;g.current.forEach(e=>e.remove()),g.current=[],o.current&&(o.current.remove(),o.current=null);let r=m;if(t&&d&&(r=m.filter(e=>N(t.lat,t.lng,e.lat,e.lng)<=d)),r.forEach(e=>{const s=document.createElement("div");s.className="p-3 min-w-[200px]",s.innerHTML=`
        <div class="space-y-2">
          <h3 class="font-bold text-base text-foreground">${e.name}</h3>
          ${e.type&&e.type.length>0?`
            <div class="flex flex-wrap gap-1">
              ${e.type.slice(0,2).map(i=>`<span class="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">${i}</span>`).join("")}
            </div>
          `:""}
          ${e.rating?`
            <div class="flex items-center gap-1">
              <span style="color: #016450;">⭐</span>
              <span class="font-semibold text-sm">${e.rating.toFixed(1)}</span>
            </div>
          `:""}
          <p class="text-xs text-muted-foreground">${e.address}</p>
          ${x?`
            <button 
              id="view-details-${e.id}" 
              class="w-full mt-2 px-3 py-1.5 text-sm font-medium text-white rounded-md transition-colors"
              style="background-color: #016450;"
              onmouseover="this.style.opacity='0.9'"
              onmouseout="this.style.opacity='1'"
            >
              ${b("restaurants.viewDetails")}
            </button>
          `:""}
        </div>
      `;const a=new u.Popup({offset:25,closeButton:!0,closeOnClick:!1,closeOnMove:!1,maxWidth:"300px"}).setLngLat([e.lng,e.lat]).setDOMContent(s),l=document.createElement("div");l.className="custom-marker",l.style.backgroundImage=`url(${z})`,l.style.width="40px",l.style.height="40px",l.style.backgroundSize="contain",l.style.backgroundRepeat="no-repeat",l.style.backgroundPosition="center",l.style.cursor="pointer";const E=new u.Marker({element:l,draggable:!1}).setLngLat([e.lng,e.lat]).addTo(n.current),w=E.getElement();w.style.cursor="pointer";const I=i=>{i.stopPropagation(),i.preventDefault(),o.current&&o.current!==a&&o.current.remove(),a.addTo(n.current),o.current=a,n.current.easeTo({center:[e.lng,e.lat],zoom:17,duration:800}),y&&y(e)};w.addEventListener("click",I,!0),x&&a.on("open",()=>{const i=document.getElementById(`view-details-${e.id}`);i&&i.addEventListener("click",M=>{M.stopPropagation(),f(e)})}),a.on("close",()=>{o.current===a&&(o.current=null)}),g.current.push(E)}),r.length>0){const e=new u.LngLatBounds;r.forEach(s=>{e.extend([s.lng,s.lat])}),t&&e.extend([t.lng,t.lat]),n.current.fitBounds(e,{padding:50,maxZoom:15})}},[m,d,t,p,f,$.language,x,b,y]),c.useEffect(()=>{if(!n.current||!t||!p)return;const r=document.createElement("div");r.className="user-location-marker",r.style.backgroundColor="#3b82f6",r.style.width="20px",r.style.height="20px",r.style.borderRadius="50%",r.style.border="3px solid white",r.style.boxShadow="0 2px 4px rgba(0,0,0,0.3)";const e=new u.Marker(r).setLngLat([t.lng,t.lat]).addTo(n.current);return()=>{e.remove()}},[t,p]),T.jsx("div",{ref:v,className:"w-full h-full rounded-lg overflow-hidden"})},_=()=>j({queryKey:["activity-restaurant-counts"],queryFn:async()=>{const{data:m,error:f}=await C.from("activity_restaurants").select("activity_id");if(f)throw f;const t={};return m.forEach(d=>{t[d.activity_id]=(t[d.activity_id]||0)+1}),t}}),G="/assets/xiaoxiong-logo-v3-D4uDr23w.png";export{S as R,G as l,_ as u};
