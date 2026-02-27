const r=e=>{if(typeof e=="string")return e;const a=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][new Date().getDay()],t=e[a];return t?t.closed?"Closed today":t.splitShift?`${t.open} - ${t.close}, ${t.open2} - ${t.close2}`:`${t.open} - ${t.close}`:"Hours not available"};export{r as f};
//# sourceMappingURL=timeUtils-pgRxO0UB.js.map
