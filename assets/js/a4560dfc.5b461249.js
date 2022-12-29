"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[9933],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8944:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"Tables",sidebar_position:6},i="Tables",l={unversionedId:"output/tables",id:"output/tables",title:"Tables",description:"Exporting Tables",source:"@site/docs/output/tables.md",sourceDirName:"output",slug:"/output/tables",permalink:"/output/tables",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Tables",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Images",permalink:"/output/images"},next:{title:"Overview",permalink:"/files/overview"}},s={},p=[{value:"Exporting Tables",id:"exporting-tables",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tables"},"Tables"),(0,a.kt)("h2",{id:"exporting-tables"},"Exporting Tables"),(0,a.kt)("p",null,"There are different ways by which a table can be embedded in the ",(0,a.kt)("strong",{parentName:"p"},"output")," page. ",(0,a.kt)("a",{parentName:"p",href:"../getting-started/example-3"},"Example 3")," in the introduction section provides a detailed example that the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"developer"))," can follow in which a table is generated and embedded in the output page. The example provides two options:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3schools.com/html/html_tables.asp"},(0,a.kt)("inlineCode",{parentName:"a"},"<table>"))," HTML tags can be used to generate a table directly in the output editor as shown in the ",(0,a.kt)("a",{parentName:"li",href:"../output/Conditionals#for-statement"},"Conditionals")," section."),(0,a.kt)("li",{parentName:"ol"},"The Pandas library is used to construct the data as a Pandas dataframe, and then the ",(0,a.kt)("inlineCode",{parentName:"li"},".to_html()")," method is used to convert the dataframe into HTML that can be displayed.")))}u.isMDXComponent=!0}}]);