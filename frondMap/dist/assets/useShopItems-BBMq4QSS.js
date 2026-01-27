import{s as m,p as d,q as p,v as l}from"./vendor-react-Snp1tga-.js";import{u as h,s as i,Z as n}from"./index-CEyHsx64.js";const f=()=>m({queryKey:["shop-items"],queryFn:async()=>{const{data:e,error:r}=await i.from("shop_items").select(`
          *,
          coupon_templates (
            id,
            title_zh,
            title_en,
            title_pt
          )
        `).eq("is_active",!0).order("sort_order",{ascending:!0});if(r)throw r;return e}}),q=()=>m({queryKey:["all-shop-items"],queryFn:async()=>{const{data:e,error:r}=await i.from("shop_items").select(`
          *,
          coupon_templates (
            id,
            title_zh,
            title_en,
            title_pt
          )
        `).order("sort_order",{ascending:!0});if(r)throw r;return e}}),v=()=>{const{user:e}=h();return m({queryKey:["user-purchase-limits",e?.id],queryFn:async()=>{if(!e?.id)return[];const{data:r,error:s}=await i.from("user_purchase_limits").select("*").eq("user_id",e.id);if(s)throw s;return r},enabled:!!e?.id})},w=()=>{const{t:e}=d(),{user:r}=h(),s=p();return l({mutationFn:async({itemId:t,shippingAddressId:u})=>{if(!r?.id)throw new Error("Not authenticated");const{data:a,error:o}=await i.rpc("purchase_shop_item",{p_user_id:r.id,p_item_id:t,p_shipping_address_id:u||null});if(o)throw o;const c=a;if(!c.success)throw new Error(c.error||"Unknown error");return c},onSuccess:()=>{s.invalidateQueries({queryKey:["user-points"]}),s.invalidateQueries({queryKey:["user-purchases"]}),s.invalidateQueries({queryKey:["user-purchase-limits"]}),s.invalidateQueries({queryKey:["shop-items"]}),s.invalidateQueries({queryKey:["user-coupons"]}),s.invalidateQueries({queryKey:["profiles"]}),n({title:e("common.success"),description:e("shop.purchaseSuccess")})},onError:t=>{const u={item_not_found:e("shop.errors.itemNotFound"),item_inactive:e("shop.errors.itemInactive"),out_of_stock:e("shop.errors.outOfStock"),insufficient_points:e("shop.errors.insufficientPoints"),limit_reached:e("shop.errors.limitReached"),address_required:e("shop.errors.addressRequired")};n({title:e("common.error"),description:u[t.message]||e("common.errorOccurred"),variant:"destructive"})}})},K=()=>{const{t:e}=d(),r=p();return l({mutationFn:async s=>{const{id:t,coupon_templates:u,...a}=s;if(t){const{error:o}=await i.from("shop_items").update(a).eq("id",t);if(o)throw o}else{const{error:o}=await i.from("shop_items").insert(a);if(o)throw o}},onSuccess:()=>{r.invalidateQueries({queryKey:["shop-items"]}),r.invalidateQueries({queryKey:["all-shop-items"]}),n({title:e("common.success"),description:e("common.saved")})},onError:()=>{n({title:e("common.error"),description:e("common.errorOccurred"),variant:"destructive"})}})},Q=()=>{const{t:e}=d(),r=p();return l({mutationFn:async s=>{const{error:t}=await i.from("shop_items").delete().eq("id",s);if(t)throw t},onSuccess:()=>{r.invalidateQueries({queryKey:["shop-items"]}),r.invalidateQueries({queryKey:["all-shop-items"]}),n({title:e("common.success"),description:e("common.deleted")})},onError:()=>{n({title:e("common.error"),description:e("common.errorOccurred"),variant:"destructive"})}})};export{q as a,Q as b,w as c,f as d,v as e,K as u};
//# sourceMappingURL=useShopItems-BBMq4QSS.js.map
