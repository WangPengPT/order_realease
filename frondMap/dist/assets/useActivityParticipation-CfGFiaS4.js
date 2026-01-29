import{s as _,q as m,v as l}from"./vendor-react-Hsdnn-sD.js";import{i as o}from"./vendor-i18n-jtdHZIRR.js";import{u as c,s as i,j as y}from"./index-DcRJh3Ql.js";const f=()=>{const{user:e}=c();return _({queryKey:["merchantRestaurants",e?.id],queryFn:async()=>{if(!e)return[];const{data:a,error:r}=await i.from("merchant_restaurants").select(`
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
        `).eq("user_id",e.id);if(r)throw r;return a?.map(t=>t.restaurants).filter(Boolean)||[]},enabled:!!e})},q=e=>{const{user:a}=c(),{data:r=[]}=f();return _({queryKey:["myParticipatingRestaurants",e,a?.id],queryFn:async()=>{if(!a||r.length===0)return[];const t=r.map(n=>n.id),{data:u,error:d}=await i.from("activity_restaurants").select("restaurant_id").eq("activity_id",e).in("restaurant_id",t);if(d)throw d;return u?.map(n=>n.restaurant_id)||[]},enabled:!!a&&!!e&&r.length>0})},v=()=>{const{user:e}=c(),{toast:a}=y(),r=m();return l({mutationFn:async({activityId:t,restaurantId:u,skipTermsCheck:d=!1})=>{if(!e)throw new Error("User not authenticated");if(!d){const{data:s}=await i.from("profiles").select("activity_terms_agreed").eq("id",e.id).single(),{data:p}=await i.from("activity_restaurants").select("id").eq("activity_id",t).eq("restaurant_id",u).maybeSingle();if(!p&&!s?.activity_terms_agreed)throw new Error("TERMS_NOT_AGREED")}const{data:n}=await i.from("activity_restaurants").select("id").eq("activity_id",t).eq("restaurant_id",u).maybeSingle();if(n){const{error:s}=await i.from("activity_restaurants").delete().eq("id",n.id);if(s)throw s;return{action:"removed"}}else{const{error:s}=await i.from("activity_restaurants").insert({activity_id:t,restaurant_id:u});if(s)throw s;return{action:"added"}}},onSuccess:t=>{r.invalidateQueries({queryKey:["activityRestaurants"]}),r.invalidateQueries({queryKey:["myParticipatingRestaurants"]}),a({title:o.t(t.action==="added"?"toast.restaurantJoined":"toast.restaurantLeft"),description:o.t(t.action==="added"?"toast.restaurantJoinedDesc":"toast.restaurantLeftDesc")})},onError:t=>{t.message==="TERMS_NOT_AGREED"?a({title:o.t("toast.termsNotAgreed"),description:o.t("toast.termsNotAgreedDesc"),variant:"destructive"}):a({title:o.t("toast.participationUpdateFailed"),description:o.t("toast.participationUpdateFailedDesc"),variant:"destructive"})}})};export{q as a,v as b,f as u};
//# sourceMappingURL=useActivityParticipation-CfGFiaS4.js.map
