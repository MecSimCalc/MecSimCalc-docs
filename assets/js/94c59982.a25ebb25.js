"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[2352],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(n),u=o,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||a;return n?r.createElement(h,p(p({ref:t},m),{},{components:n})):r.createElement(h,p({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Tools",sidebar_position:3},p="Tools",i={unversionedId:"code/tools",id:"code/tools",title:"Tools",description:"The Code step provides the developer**_ with an in-browser code editor equipped with syntax highlighting, intellisense, **Code Compare**, and **Debugging**. The **Code Compare** functionality allows the developer to compare the current (draft) version of the code with the published version (if the app is published). **Debugging** allows the _**developer to run the code with some test inputs to see the output values and to debug runtime errors.",source:"@site/docs/code/tools.md",sourceDirName:"code",slug:"/code/tools",permalink:"/code/tools",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Tools",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Code Output",permalink:"/code/code-output"},next:{title:"Overview",permalink:"/output/overview"}},s={},l=[{value:"Code Compare",id:"code-compare",level:2},{value:"Debugging",id:"debugging",level:2}],m={toc:l};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tools"},"Tools"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Code")," step provides the ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"developer"))," with an in-browser code editor equipped with syntax highlighting, intellisense, ",(0,o.kt)("strong",{parentName:"p"},"Code Compare"),", and ",(0,o.kt)("strong",{parentName:"p"},"Debugging"),". The ",(0,o.kt)("strong",{parentName:"p"},"Code Compare")," functionality allows the ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"developer"))," to compare the current (draft) version of the code with the published version (if the app is published). ",(0,o.kt)("strong",{parentName:"p"},"Debugging")," allows the ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"developer"))," to run the code with some test inputs to see the output values and to debug runtime errors."),(0,o.kt)("h2",{id:"code-compare"},"Code Compare"),(0,o.kt)("p",null,"Once an ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"app"))," is published, the published version of the code stays unaltered until you publish a newer version which will overwrite the previously published code. The ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"developer"))," can still edit a published ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"app")),' and alter the code, however, the version of the altered code stays in "draft" mode until the ',(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"developer"))," publishes the new version. ",(0,o.kt)("strong",{parentName:"p"},"Code Compare")," allows the ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"developer")),' to compare the current "draft" version with the already "published" version of the ',(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"app")),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"app"))," does not have a published version (never published), then ",(0,o.kt)("strong",{parentName:"p"},"Code Compare")," is not useful.")),(0,o.kt)("p",null,"As an example, consider the published ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"app")),", ",(0,o.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/app/6383921/text_spaces_manipulation_function"},"Text Spaces Manipulation Function"),'. In the current published version, the code strips the input text of all spaces. The image below shows the change made to the "draft" version of the ',(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"app")),'\'s code that doubles the spaces within the text. The version of the code on the right-hand-side is the current "draft" version while the one on the left-hand-side is the published version. The published version will only be replaced if the ',(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"developer"))," proceeds to ",(0,o.kt)("strong",{parentName:"p"},"Step 6")," and clicks on ",(0,o.kt)("strong",{parentName:"p"},"Publish"),"."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img alt",src:n(7049).Z,width:"1365",height:"183"}))),(0,o.kt)("h2",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Code")," step provides the ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"developer"))," with an in-browser code debugger. In addition to viewing error messages and tracebacks, the ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"developer"))," can also view the outputs from ",(0,o.kt)("inlineCode",{parentName:"p"},"print()"),"."),(0,o.kt)("p",null,"As an example, the code below is from the published ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"app"))," ",(0,o.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/app/6383921/text_spaces_manipulation_function"},"Text Spaces Manipulation Function"),", which uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"print")," function whose outputs can be viewed in the debugger but will not be visible when the ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"app"))," is used by the ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"user")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def main(inputs):\n    t = inputs[\'input_0\']\n    s = t.replace(" ","")\n    print("Original Text:",t)\n    print("New Text:",s)\n    return {"Original Text": t, "Stripped Text":s}\n')),(0,o.kt)("p",null,"Below is an image of the debugger with the printed output:"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img alt",src:n(4573).Z,width:"1002",height:"667"}))))}d.isMDXComponent=!0},7049:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/code_compare-8385a3397d49eb775308ae4996108f97.png"},4573:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/debugger-8d7022fae16c13cf66f0857a50d91f12.png"}}]);