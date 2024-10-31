var tf=null,mtf=e=>{var t=new Blob([e],{type:"text/csv"});return null!==tf&&window.URL.revokeObjectURL(tf),tf=window.URL.createObjectURL(t),tf},df=(e,t)=>{var n=document.createElement("a");n.setAttribute("download",`${t}.csv`),n.href=mtf(e),n.click()},toCSV=e=>{let t=Object.keys(e[0]);const n=[Object.keys(e[0]),...e.map(e=>{let n=[];for(let r in t)n.push(e[t[r]].replaceAll(",",""));return n})].map(e=>e.join(",")).join("\n");return n},getDEFieldList=()=>{if(document.querySelectorAll(".de-content-fields-listings").length<=0)return"No Data Extension Found............................... Change iframe context to Email ⇓";var e=[];return document.querySelectorAll(".de-listing-name-view").forEach(t=>e.push(t.innerText)),e.length>0&&df(e.join(),"Blank_"+document.querySelector("#op-head-name-static").value),"Downloading file..."},getDESchema=()=>{if(document.querySelectorAll(".de-content-fields-listings").length<=0)return"No Data Extension Found............................... Change console context to iframe 'Email' ⇓";var e=[],t=document.querySelector(".lg-head-breadcrumb").innerText.replaceAll("\n"," "),n=document.querySelector("#op-head-name-static").value,r=document.querySelector(".carb-input-popover.op-key-pop").value;e.push("Path: ,"+t+",,,,\n"),e.push("DE Name: ,"+n+",,,,\n"),e.push("External Key: ,"+r+",,,,\n"),e.push(",,,,,\n"),e.push("Field Name,Data Type,Length,Primary Key,Nullable,Default Value\n");var o=document.querySelectorAll(".de-content-fields-listing").length-1;return document.querySelectorAll(".de-content-fields-listing").forEach((t,n)=>{n!=o&&e.push(t.querySelector(".de-listing-name-view").innerText+","+t.querySelector(".de-content-listing-txt span").innerText+","+t.querySelector(".de-listing-length-view").innerText+","+(t.querySelector(".de-content-listing-primary input").checked?"Yes":"")+","+(t.querySelector(".de-content-listing-nullable input").checked?"Yes":"No")+","+t.querySelector(".de-content-listing-dvalue-view").innerText+"\n")}),e.length>0&&df(e.join(""),"Schema_"+document.querySelector("#op-head-name-static").value),"Downloading file..."},getListsFromFolder=()=>{window.sfmcLists=window.sfmcLists||[];var e=1;console.log("Please wait...");var t=document.querySelector(".lg-head-breadcrumb.clearfix").innerText.replaceAll("\n"," ").trim()||"My Lists",n=setInterval(()=>{console.log("Page "+e);var r=document.querySelectorAll(".grp-center.div-center .row"),o=r.length,l=[];for(document.querySelectorAll(".grp-center.header-center [data-property]").forEach(e=>l.push(e.innerText)),i=2;i<=o-1;i++){var c=document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:first-of-type`).innerText,d=document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${l.indexOf("Subscriber Count")+1})`).innerText,a=document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${l.indexOf("External Key")+1})`).innerText,s=document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${l.indexOf("List ID")+1})`).innerText;window.sfmcLists.push({folder:t,deName:c,externalKey:a,listID:s,recordCount:d})}var u=document.querySelector(".btn.grid-nextpage");if("disabled"==u.getAttribute("disabled"))return clearInterval(n),void console.table(window.sfmcLists);u.click(),e++},5e3)},getDEsFromFolder=()=>{window.sfmcDEs=window.sfmcDEs||[];var e=1;console.log("Please wait...");var t=document.querySelector(".dg-head-breadcrumb.clearfix").innerText.replaceAll("\n"," ").trim()||"Data Extensions";document.querySelector("#de-grid-prefs").click(),document.querySelectorAll("#isSendable, #count, #fieldCount, #customerKey, #modifiedDate").forEach(e=>e.checked=!0),document.querySelector("#gridPrefsOkBtn").click();var n=setInterval(()=>{console.log("Page "+e);var r=document.querySelectorAll(".grp-left.div-left .row"),o=r.length-1,l=[];for(document.querySelectorAll(".grp-center.header-center [data-property]").forEach(e=>l.push(e.innerText)),i=2;i<=o;i++){var c=document.querySelector(`.grp-left.div-left .row:nth-of-type(${i}) .cell:last-of-type`).innerText,d=document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${l.indexOf("Sendable")+1})`).innerText,a=document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${l.indexOf("Record Count")+1})`).innerText.replaceAll(",",""),s=document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${l.indexOf("Field Count")+1})`).innerText,u=document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${l.indexOf("External Key")+1})`).innerText,f=document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${l.indexOf("Last Modified Date")+1})`).innerText;window.sfmcDEs.push({folder:t,deName:c,externalKey:u,sendable:d,fieldCount:s,recordCount:a,lastModified:f})}var p=document.querySelector(".btn.grid-nextpage");if("disabled"==p.getAttribute("disabled"))return clearInterval(n),console.table(window.sfmcDEs),void(document.querySelector("#downloadDEs span").innerText=" ("+window.sfmcDEs.length+")");p.click(),e++},1e3)},downloadDEs=e=>{if(window.sfmcDEs){var t=toCSV(window.sfmcDEs);return t.length>0&&df(t,"DEs_"+(new Date).toLocaleDateString()),"Downloading file..."}},downloadLists=e=>{if(window.sfmcLists){var t=toCSV(window.sfmcLists);return t.length>0&&df(t,"Lists_"+(new Date).toLocaleDateString()),"Downloading file..."}},DETools=[{id:"getDEsFromFolder",func:getDEsFromFolder,label:"Scrape DEs"},{id:"downloadDEs",func:downloadDEs,label:"Download DE List"},{id:"getListsFromFolder",func:getListsFromFolder,label:"Scrape Lists"},{id:"downloadLists",func:downloadLists,label:"Download Lists"},{id:"getDESchema",func:getDESchema,label:"Download DE Schema"},{id:"getDEFieldList",func:getDEFieldList,label:"Download Empty CSV with DE Fields"}],div=document.createElement("div");div.id="sfmcToolSetSM",Object.assign(div.style,{position:"absolute","z-index":1e3,width:"50%",left:"35%",bottom:"9px",display:"flex","justify-content":"center"}),DETools.forEach(e=>{let t=document.createElement("button");t.id=e.id,t.onclick=e.func,t.innerText=e.label,Object.assign(t.style,{background:"linear-gradient(to bottom,#fff,#dae5ed)",margin:"0 5px 10px",padding:"2px 10px","border-radius":"5px",border:"1px solid #b5c6d2","box-shadow":"1px 1px 2px 0 rgba(0,0,0,0.15)","font-size":"11px"}),div.append(t)}),document.querySelector("#divContent").prepend(div),document.querySelector("#downloadDEs").append(document.createElement("span"));
