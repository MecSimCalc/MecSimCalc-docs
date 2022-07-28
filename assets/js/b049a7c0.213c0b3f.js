"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[2847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||p;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5646:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>i,toc:()=>u,default:()=>s});var r=n(7462),a=(n(7294),n(3905));const p={sidebar_label:"Input Group",sidebar_position:2},o="Input Group",i={unversionedId:"inputs/input-group",id:"inputs/input-group",title:"Input Group",description:"In order to visually organize the inputs, MecSimCalc platform allows the **developer** to visually group inputs into either an Input Group or a Table Group. An Input Group can be created in the Inputs step by clicking on Add Input Group.",source:"@site/docs/inputs/input-group.md",sourceDirName:"inputs",slug:"/inputs/input-group",permalink:"/inputs/input-group",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Input Group",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/inputs/overview"},next:{title:"Table Group",permalink:"/inputs/table-group"}},u=[{value:"Input Group Layout",id:"input-group-layout",children:[],level:2}],l={toc:u};function s(e){let{components:t,...p}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"input-group"},"Input Group"),(0,a.kt)("p",null,"In order to visually organize the inputs, ",(0,a.kt)("strong",{parentName:"p"},"MecSimCalc")," platform allows the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"developer"))," to visually group inputs into either an ",(0,a.kt)("strong",{parentName:"p"},"Input Group")," or a ",(0,a.kt)("a",{parentName:"p",href:"table-group"},(0,a.kt)("strong",{parentName:"a"},"Table Group")),". An ",(0,a.kt)("strong",{parentName:"p"},"Input Group")," can be created in the ",(0,a.kt)("strong",{parentName:"p"},"Inputs")," step by clicking on ",(0,a.kt)("strong",{parentName:"p"},"Add Input Group"),"."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(8492).Z}))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The different input types appear in the menu only if an ",(0,a.kt)("strong",{parentName:"p"},"Input Group")," or a ",(0,a.kt)("strong",{parentName:"p"},"Table Group")," has already been created."))),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"developer"))," can create as many new ",(0,a.kt)("strong",{parentName:"p"},"Input Groups")," as needed, which are arranged vertically on top of each other. Each ",(0,a.kt)("strong",{parentName:"p"},"Input Group")," can be renamed, deleted, or dragged to change its vertical position relative to the other ",(0,a.kt)("strong",{parentName:"p"},"Input Groups"),". For example, the image below shows two ",(0,a.kt)("strong",{parentName:"p"},"Input Groups"),' named "Input Group 1" and `"Input Group 2".'),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(6825).Z}))),(0,a.kt)("h2",{id:"input-group-layout"},"Input Group Layout"),(0,a.kt)("p",null,"In an ",(0,a.kt)("strong",{parentName:"p"},"Input Group"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"developer"))," can add as many inputs as needed.."),(0,a.kt)("li",{parentName:"ul"},"The inputs can be resized and moved within the input group using the mouse."),(0,a.kt)("li",{parentName:"ul"},"A maximum of 10 inputs can appear on the same row."),(0,a.kt)("li",{parentName:"ul"},"There is no restriction on the number of rows to be used.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The height of the ",(0,a.kt)("strong",{parentName:"li"},"Input Group")," will automatically adjust as more inputs are added, removed, or dragged.")))),(0,a.kt)("p",null,"As an example, the image below shows an input group with 5 different inputs (two numerical inputs, two text inputs, and one single select input)."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(4045).Z}))))}s.isMDXComponent=!0},8492:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/add_input_group-2a582a0b3cf81bbcb1c8faf2fce7d9ac.png"},4045:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/input_group-beaac37ab524cc13f6170f2b2a1dbf03.png"},6825:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/input_group_actions-21f1a7e29bf6b293d60ec51c68b381a7.png"}}]);