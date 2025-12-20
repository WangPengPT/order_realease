import{x as d,p as h,s as i,u as m,ac as p,af as l,ab as n}from"./index-J_eLqhtQ.js";const _=()=>d({queryKey:["shop-items"],queryFn:async()=>{const{data:e,error:r}=await i.from("shop_items").select(`
          *,
          coupon_templates (
            id,
            title_zh,
            title_en,
            title_pt
          )
        `).eq("is_active",!0).order("sort_order",{ascending:!0});if(r)throw r;return e}}),f=()=>d({queryKey:["all-shop-items"],queryFn:async()=>{const{data:e,error:r}=await i.from("shop_items").select(`
          *,
          coupon_templates (
            id,
            title_zh,
            title_en,
            title_pt
          )
        `).order("sort_order",{ascending:!0});if(r)throw r;return e}}),q=()=>{const{user:e}=h();return d({queryKey:["user-purchase-limits",e==null?void 0:e.id],queryFn:async()=>{if(!(e!=null&&e.id))return[];const{data:r,error:t}=await i.from("user_purchase_limits").select("*").eq("user_id",e.id);if(t)throw t;return r},enabled:!!(e!=null&&e.id)})},v=()=>{const{t:e}=m(),{user:r}=h(),t=p();return l({mutationFn:async({itemId:s,shippingAddressId:a})=>{if(!(r!=null&&r.id))throw new Error("Not authenticated");const{data:u,error:o}=await i.rpc("purchase_shop_item",{p_user_id:r.id,p_item_id:s,p_shipping_address_id:a||null});if(o)throw o;const c=u;if(!c.success)throw new Error(c.error||"Unknown error");return c},onSuccess:()=>{t.invalidateQueries({queryKey:["user-points"]}),t.invalidateQueries({queryKey:["user-purchases"]}),t.invalidateQueries({queryKey:["user-purchase-limits"]}),t.invalidateQueries({queryKey:["shop-items"]}),t.invalidateQueries({queryKey:["user-coupons"]}),t.invalidateQueries({queryKey:["profiles"]}),n({title:e("common.success"),description:e("shop.purchaseSuccess")})},onError:s=>{const a={item_not_found:e("shop.errors.itemNotFound"),item_inactive:e("shop.errors.itemInactive"),out_of_stock:e("shop.errors.outOfStock"),insufficient_points:e("shop.errors.insufficientPoints"),limit_reached:e("shop.errors.limitReached"),address_required:e("shop.errors.addressRequired")};n({title:e("common.error"),description:a[s.message]||e("common.errorOccurred"),variant:"destructive"})}})},w=()=>{const{t:e}=m(),r=p();return l({mutationFn:async t=>{const{id:s,coupon_templates:a,...u}=t;if(s){const{error:o}=await i.from("shop_items").update(u).eq("id",s);if(o)throw o}else{const{error:o}=await i.from("shop_items").insert(u);if(o)throw o}},onSuccess:()=>{r.invalidateQueries({queryKey:["shop-items"]}),r.invalidateQueries({queryKey:["all-shop-items"]}),n({title:e("common.success"),description:e("common.saved")})},onError:()=>{n({title:e("common.error"),description:e("common.errorOccurred"),variant:"destructive"})}})},K=()=>{const{t:e}=m(),r=p();return l({mutationFn:async t=>{const{error:s}=await i.from("shop_items").delete().eq("id",t);if(s)throw s},onSuccess:()=>{r.invalidateQueries({queryKey:["shop-items"]}),r.invalidateQueries({queryKey:["all-shop-items"]}),n({title:e("common.success"),description:e("common.deleted")})},onError:()=>{n({title:e("common.error"),description:e("common.errorOccurred"),variant:"destructive"})}})};export{f as a,K as b,v as c,_ as d,q as e,w as u};
