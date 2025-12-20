import{p as d,x as _,s as n,o as p,ac as l,af as m,a2 as u}from"./index-CYYXDY6E.js";const f=()=>{const{user:t}=d();return _({queryKey:["merchantRestaurants",t==null?void 0:t.id],queryFn:async()=>{if(!t)return[];const{data:e,error:r}=await n.from("merchant_restaurants").select(`
          restaurant_id,
          restaurants:restaurant_id (
            id,
            name,
            name_en,
            name_pt,
            address,
            image_url,
            lat,
            lng,
            rating,
            type,
            type_en,
            type_pt,
            phone,
            website_url,
            description,
            description_en,
            description_pt,
            opening_hours,
            show_website_button,
            created_at,
            updated_at
          )
        `).eq("user_id",t.id);if(r)throw r;return(e==null?void 0:e.map(a=>a.restaurants).filter(Boolean))||[]},enabled:!!t})},w=t=>{const{user:e}=d(),{data:r=[]}=f();return _({queryKey:["myParticipatingRestaurants",t,e==null?void 0:e.id],queryFn:async()=>{if(!e||r.length===0)return[];const a=r.map(o=>o.id),{data:i,error:c}=await n.from("activity_restaurants").select("restaurant_id").eq("activity_id",t).in("restaurant_id",a);if(c)throw c;return(i==null?void 0:i.map(o=>o.restaurant_id))||[]},enabled:!!e&&!!t&&r.length>0})},h=()=>{const{user:t}=d(),{toast:e}=p(),r=l();return m({mutationFn:async({activityId:a,restaurantId:i,skipTermsCheck:c=!1})=>{if(!t)throw new Error("User not authenticated");if(!c){const{data:s}=await n.from("profiles").select("activity_terms_agreed").eq("id",t.id).single(),{data:y}=await n.from("activity_restaurants").select("id").eq("activity_id",a).eq("restaurant_id",i).maybeSingle();if(!y&&!(s!=null&&s.activity_terms_agreed))throw new Error("TERMS_NOT_AGREED")}const{data:o}=await n.from("activity_restaurants").select("id").eq("activity_id",a).eq("restaurant_id",i).maybeSingle();if(o){const{error:s}=await n.from("activity_restaurants").delete().eq("id",o.id);if(s)throw s;return{action:"removed"}}else{const{error:s}=await n.from("activity_restaurants").insert({activity_id:a,restaurant_id:i});if(s)throw s;return{action:"added"}}},onSuccess:a=>{r.invalidateQueries({queryKey:["activityRestaurants"]}),r.invalidateQueries({queryKey:["myParticipatingRestaurants"]}),e({title:u.t(a.action==="added"?"toast.restaurantJoined":"toast.restaurantLeft"),description:u.t(a.action==="added"?"toast.restaurantJoinedDesc":"toast.restaurantLeftDesc")})},onError:a=>{a.message==="TERMS_NOT_AGREED"?e({title:u.t("toast.termsNotAgreed"),description:u.t("toast.termsNotAgreedDesc"),variant:"destructive"}):e({title:u.t("toast.participationUpdateFailed"),description:u.t("toast.participationUpdateFailedDesc"),variant:"destructive"})}})};export{w as a,h as b,f as u};
