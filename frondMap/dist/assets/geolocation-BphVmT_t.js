import{l as d}from"./index-DduPXw3p.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=d("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]),u=(o,t,n,s)=>{const i=e(n-o),c=e(s-t),r=Math.sin(i/2)*Math.sin(i/2)+Math.cos(e(o))*Math.cos(e(n))*Math.sin(c/2)*Math.sin(c/2);return 6371*(2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r)))},e=o=>o*Math.PI/180,l=()=>new Promise((o,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(o,n=>{console.log("Geolocation error code:",n.code,"message:",n.message),t(n)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0}):t(new Error("Geolocation is not supported by this browser."))}),w=(o,t,n)=>{const s=/iPad|iPhone|iPod/.test(navigator.userAgent),a=/Android/.test(navigator.userAgent);s?window.open(`maps://maps.apple.com/?daddr=${o},${t}&q=${encodeURIComponent(n)}`,"_blank"):a?window.open(`geo:${o},${t}?q=${o},${t}(${encodeURIComponent(n)})`,"_blank"):window.open(`https://www.google.com/maps/dir/?api=1&destination=${o},${t}`,"_blank")};export{h as N,u as c,l as g,w as o};
