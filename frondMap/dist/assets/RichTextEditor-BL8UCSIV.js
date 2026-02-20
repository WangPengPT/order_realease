import{r as d,j as r,dI as s}from"./vendor-react-87iFmKFJ.js";import{g as c}from"./index-CQ-le21e.js";function b({value:t,onChange:o,placeholder:e,className:l}){const i=d.useMemo(()=>({toolbar:[[{header:[1,2,3,!1]}],[{size:["small",!1,"large","huge"]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],[{align:[]}],["link"],["clean"]]}),[]),a=["header","size","bold","italic","underline","strike","color","background","list","bullet","align","link"];return r.jsxs("div",{className:c("rich-text-editor",l),children:[r.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}}),r.jsx(s,{theme:"snow",value:t,onChange:o,modules:i,formats:a,placeholder:e,className:"bg-background"})]})}export{b as R};
//# sourceMappingURL=RichTextEditor-BL8UCSIV.js.map
