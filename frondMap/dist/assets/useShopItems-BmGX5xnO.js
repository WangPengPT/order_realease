import{a as m,u as d,b as p}from"./vendor-query-BlSVl3IQ.js";import{y as h,Q as i,aF as n}from"./index-BF1tiRoq.js";import{u as l}from"./vendor-i18n-DxKeo2S1.js";const q=()=>m({queryKey:["shop-items"],queryFn:async()=>{const{data:e,error:r}=await i.from("shop_items").select(`
          *,
          coupon_templates (
            id,
            title_zh,
            title_en,
            title_pt
          )
        `).eq("is_active",!0).order("sort_order",{ascending:!0});if(r)throw r;return e}}),v=()=>m({queryKey:["all-shop-items"],queryFn:async()=>{const{data:e,error:r}=await i.from("shop_items").select(`
          *,
          coupon_templates (
            id,
            title_zh,
            title_en,
            title_pt
          )
        `).order("sort_order",{ascending:!0});if(r)throw r;return e}}),w=()=>{const{user:e}=h();return m({queryKey:["user-purchase-limits",e?.id],queryFn:async()=>{if(!e?.id)return[];const{data:r,error:t}=await i.from("user_purchase_limits").select("*").eq("user_id",e.id);if(t)throw t;return r},enabled:!!e?.id})},K=()=>{const{t:e}=l(),{user:r}=h(),t=d();return p({mutationFn:async({itemId:s,shippingAddressId:a})=>{if(!r?.id)throw new Error("Not authenticated");const{data:u,error:o}=await i.rpc("purchase_shop_item",{p_user_id:r.id,p_item_id:s,p_shipping_address_id:a||null});if(o)throw o;const c=u;if(!c.success)throw new Error(c.error||"Unknown error");return c},onSuccess:()=>{t.invalidateQueries({queryKey:["user-points"]}),t.invalidateQueries({queryKey:["user-purchases"]}),t.invalidateQueries({queryKey:["user-purchase-limits"]}),t.invalidateQueries({queryKey:["shop-items"]}),t.invalidateQueries({queryKey:["user-coupons"]}),t.invalidateQueries({queryKey:["profiles"]}),n({title:e("common.success"),description:e("shop.purchaseSuccess")})},onError:s=>{const a={item_not_found:e("shop.errors.itemNotFound"),item_inactive:e("shop.errors.itemInactive"),out_of_stock:e("shop.errors.outOfStock"),insufficient_points:e("shop.errors.insufficientPoints"),limit_reached:e("shop.errors.limitReached"),address_required:e("shop.errors.addressRequired")};n({title:e("common.error"),description:a[s.message]||e("common.errorOccurred"),variant:"destructive"})}})},Q=()=>{const{t:e}=l(),r=d();return p({mutationFn:async t=>{const{id:s,coupon_templates:a,...u}=t;if(s){const{error:o}=await i.from("shop_items").update(u).eq("id",s);if(o)throw o}else{const{error:o}=await i.from("shop_items").insert(u);if(o)throw o}},onSuccess:()=>{r.invalidateQueries({queryKey:["shop-items"]}),r.invalidateQueries({queryKey:["all-shop-items"]}),n({title:e("common.success"),description:e("common.saved")})},onError:()=>{n({title:e("common.error"),description:e("common.errorOccurred"),variant:"destructive"})}})},S=()=>{const{t:e}=l(),r=d();return p({mutationFn:async t=>{const{error:s}=await i.from("shop_items").delete().eq("id",t);if(s)throw s},onSuccess:()=>{r.invalidateQueries({queryKey:["shop-items"]}),r.invalidateQueries({queryKey:["all-shop-items"]}),n({title:e("common.success"),description:e("common.deleted")})},onError:()=>{n({title:e("common.error"),description:e("common.errorOccurred"),variant:"destructive"})}})};export{v as a,S as b,K as c,q as d,w as e,Q as u};
//# sourceMappingURL=useShopItems-BmGX5xnO.js.map
