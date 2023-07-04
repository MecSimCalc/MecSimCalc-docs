"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[2946],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=l(r),u=n,d=h["".concat(s,".").concat(u)]||h[u]||m[u]||i;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4826:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_label:"Overview",sidebar_position:1},o="Overview",p={unversionedId:"self-hosting-apps/overview",id:"self-hosting-apps/overview",title:"Overview",description:"Self-hosting is the practice of running and maintaining a website or service using a private web server, instead of using a service outside of someone's own control. - Wikipedia",source:"@site/docs/self-hosting-apps/overview.md",sourceDirName:"self-hosting-apps",slug:"/self-hosting-apps/overview",permalink:"/self-hosting-apps/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Example 3",permalink:"/maps/example-3"},next:{title:"Localhost",permalink:"/self-hosting-apps/localhost"}},s={},l=[{value:"Architecture",id:"architecture",level:2},{value:"Folders",id:"folders",level:2}],c={toc:l};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Self-hosting is the practice of running and maintaining a website or service using a private web server, instead of using a service outside of someone's own control. - Wikipedia")),(0,n.kt)("p",null,"You must first create your app on ",(0,n.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/create"},"MecSimCalc Create"),"."),(0,n.kt)("p",null,"Once created, you can either:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Publish directly to the ",(0,n.kt)("a",{parentName:"li",href:"https://mecsimcalc.com/explore"},"MecSimCalc platform")," for free"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"OR")),(0,n.kt)("li",{parentName:"ul"},"Download the app and host it yourself (eg. on a private server)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Follow these instructions on self-hosting")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We recommend that you publish directly to the MecSimCalc platform for ease-of-use and to get the latest updates, however, self-hosting is available for ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"advanced"))," users who wish to host their apps on their own servers.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This self-hosted version only allows for the ",(0,n.kt)("strong",{parentName:"p"},"viewing")," and ",(0,n.kt)("strong",{parentName:"p"},"running")," of existing apps. Creating new apps and editing apps can only be done on ",(0,n.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/"},"mecsimcalc.com"),".")),(0,n.kt)("p",null,"The self-hosted ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MecSim/MecSimCalc-self-hosted"},"source code")," is a NextJS website application with ReactJS and Typescript. This application has two pages."),(0,n.kt)("p",null,"The first page is the explore page, which lists all of the apps:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:r(6272).Z,width:"1893",height:"735"})),(0,n.kt)("p",null,"The second page is the app page, where the ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"user"))," can run the apps:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:r(7769).Z,width:"1892",height:"912"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Hosting"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/self-hosting-apps/Localhost"},"Localhost")),(0,n.kt)("td",{parentName:"tr",align:null},"Run on your local machine")))),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"This application uses the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Client%E2%80%93server_model"},"client-server model"),": there are two independent processes that communicate with each over over the network."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"server")," is written in ",(0,n.kt)("inlineCode",{parentName:"p"},"Python 3")," using the ",(0,n.kt)("a",{parentName:"p",href:"https://flask.palletsprojects.com/en/2.1.x/"},"Flask web framework"),". The server is responsible for keeping track of all the apps and will execute the Python code of each app. When requested by the client, the server will return the app details to the client."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"client")," is written in ",(0,n.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"ReactJS")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"Typescript")," (ie. Javascript with types) using the ",(0,n.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"NextJS")," framework. The client is responsible for displaying the webpage to the user, in other words, the client is everything that a ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"user"))," will see in the web browser. The client will request app data from the server and then display it to the user."),(0,n.kt)("h2",{id:"folders"},"Folders"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Folder"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"apps")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},".json")," files of all the apps")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"back-end")),(0,n.kt)("td",{parentName:"tr",align:null},"The server code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"front-end")),(0,n.kt)("td",{parentName:"tr",align:null},"The client code")))))}m.isMDXComponent=!0},6272:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/home_page-d5eb67835c81300772c463f63d94faa8.png"},7769:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/view_app_page-d2d5ee2531099bb48d7faa68b9c117bb.png"}}]);