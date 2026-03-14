import{e2 as m,e3 as y,r as i,j as l,e4 as R}from"./vendor-react-fRuavyzb.js";import{a1 as u,s as h,o as z}from"./index-CuDh6I1H.js";m.Quill.register("modules/imageResize",y);function w({value:b,onChange:g,placeholder:f,className:x,enableImageUpload:t=!1}){const s=i.useRef(null),a=i.useCallback(()=>{const r=document.createElement("input");r.setAttribute("type","file"),r.setAttribute("accept","image/*"),r.click(),r.onchange=async()=>{const e=r.files?.[0];if(!e)return;if(e.size>5*1024*1024){u({title:"图片不能超过 5MB",variant:"destructive"});return}const v=e.name.split(".").pop(),c=`editor-${Date.now()}-${Math.random().toString(36).slice(2)}.${v}`,{error:n}=await h.storage.from("promo-images").upload(c,e);if(n){u({title:"上传失败",description:n.message,variant:"destructive"});return}const{data:{publicUrl:k}}=h.storage.from("promo-images").getPublicUrl(c),o=s.current?.getEditor();if(o){const d=o.getSelection(!0);o.insertEmbed(d.index,"image",k),o.setSelection(d.index+1,0)}}},[]),p=i.useMemo(()=>({toolbar:{container:[[{header:[1,2,3,!1]}],[{size:["small",!1,"large","huge"]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],[{align:[]}],["link",...t?["image"]:[]],["clean"]],handlers:t?{image:a}:{}},...t?{imageResize:{parchment:m.Quill.import("parchment"),modules:["Resize","DisplaySize"]}}:{}}),[t,a]),q=["header","size","bold","italic","underline","strike","color","background","list","bullet","align","link",...t?["image","width","height","style"]:[]];return l.jsxs("div",{className:z("rich-text-editor",x),children:[l.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .rich-text-editor {
            color: hsl(var(--foreground));
          }
          
          .rich-text-editor .ql-container {
            min-height: 200px;
            font-family: inherit;
            border-bottom-left-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
          }
          
          .rich-text-editor .ql-toolbar {
            border-top-left-radius: 0.5rem;
            border-top-right-radius: 0.5rem;
            background: hsl(var(--muted));
            border-color: hsl(var(--border));
          }
          
          .rich-text-editor .ql-container {
            border-color: hsl(var(--border));
          }
          
          .rich-text-editor .ql-editor {
            min-height: 200px;
          }
          
          /* 确保内联颜色样式能够正常显示 - 不覆盖用户选择的颜色 */
          
          .rich-text-editor .ql-editor.ql-blank::before {
            color: hsl(var(--muted-foreground));
            font-style: normal;
          }
          
          .rich-text-editor .ql-stroke {
            stroke: hsl(var(--foreground));
          }
          
          .rich-text-editor .ql-fill {
            fill: hsl(var(--foreground));
          }
          
          .rich-text-editor .ql-picker-label {
            color: hsl(var(--foreground));
          }
          
          .rich-text-editor .ql-toolbar button:hover,
          .rich-text-editor .ql-toolbar button:focus,
          .rich-text-editor .ql-toolbar button.ql-active {
            color: hsl(var(--primary));
          }
          
          .rich-text-editor .ql-toolbar button:hover .ql-stroke,
          .rich-text-editor .ql-toolbar button:focus .ql-stroke,
          .rich-text-editor .ql-toolbar button.ql-active .ql-stroke {
            stroke: hsl(var(--primary));
          }
          
          .rich-text-editor .ql-toolbar button:hover .ql-fill,
          .rich-text-editor .ql-toolbar button:focus .ql-fill,
          .rich-text-editor .ql-toolbar button.ql-active .ql-fill {
            fill: hsl(var(--primary));
          }
          
          .rich-text-editor .ql-picker-options {
            background: hsl(var(--background));
            border-color: hsl(var(--border));
          }
          
          .rich-text-editor .ql-picker-item:hover {
            color: hsl(var(--primary));
          }

          /* Image resize module styles */
          .rich-text-editor .ql-editor img {
            cursor: pointer;
            max-width: 100%;
          }
        `}}),l.jsx(R,{ref:s,theme:"snow",value:b,onChange:g,modules:p,formats:q,placeholder:f,className:"bg-background"})]})}export{w as R};
//# sourceMappingURL=RichTextEditor-yN2Bkn8f.js.map
