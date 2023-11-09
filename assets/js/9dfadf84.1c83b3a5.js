"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[8166],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>h});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,i=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=p(a),u=l,h=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(h,r(r({ref:e},c),{},{components:a})):n.createElement(h,r({ref:e},c))}));function h(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[m]="string"==typeof t?t:l,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4898:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const i={slug:"vs-anvil-works-2023",title:"Anvil vs. MecSimCalc",authors:["wqiu"],tags:["Compare"]},r=void 0,s={permalink:"/blog/vs-anvil-works-2023",source:"@site/blog/2023-10-22-vs-anvil-works.md",title:"Anvil vs. MecSimCalc",description:"Banner",date:"2023-10-22T00:00:00.000Z",formattedDate:"October 22, 2023",tags:[{label:"Compare",permalink:"/blog/tags/compare"}],readingTime:4.555,hasTruncateMarker:!1,authors:[{name:"Weichen Qiu",title:"MecSimCalc Co-founder",url:"https://github.com/w3ichen",imageURL:"https://avatars.githubusercontent.com/u/57570491",key:"wqiu"}],frontMatter:{slug:"vs-anvil-works-2023",title:"Anvil vs. MecSimCalc",authors:["wqiu"],tags:["Compare"]},prevItem:{title:"Streamlit vs. MecSimCalc",permalink:"/blog/vs-streamlit-2023"},nextItem:{title:"MecSimCalc Hackathon 5.0 (January 21st - January 28th, 2023) Winners",permalink:"/blog/Comp01212023-Winners"}},o={authorsImageUrls:[void 0]},p=[{value:"Overview",id:"overview",level:2},{value:"Features Comparison",id:"features-comparison",level:2},{value:"The Workflow",id:"the-workflow",level:2},{value:"Anvil",id:"anvil",level:3},{value:"MecSimCalc",id:"mecsimcalc",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},m="wrapper";function d(t){let{components:e,...i}=t;return(0,l.kt)(m,(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Banner",src:a(925).Z,width:"1800",height:"500"})),(0,l.kt)("p",null,"In today's fast-paced digital world, the ability to develop web applications quickly and efficiently can make a significant difference for businesses and developers alike. Anvil and MecSimCalc are two tools that aim to simplify web app development, offering the power of Python without the complexity of traditional web development. In this article, we will compare Anvil and MecSimCalc across various dimensions to help you choose the one that best suits your needs."),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Before diving into the technical details, let's take a look at the basic information."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature"),(0,l.kt)("th",{parentName:"tr",align:null},"Anvil"),(0,l.kt)("th",{parentName:"tr",align:null},"MecSimCalc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Website"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://anvil.works/"},"Anvil Works")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mecsimcalc.com/"},"MecSimCalc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},'"Build web apps with nothing but Python. Build seriously powerful web apps with all the flexibility of Python. No web development experience required."'),(0,l.kt)("td",{parentName:"tr",align:null},'"The simplest way to build and share computational tools. Create and share your Python web apps in minutes for free."')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Target Audience"),(0,l.kt)("td",{parentName:"tr",align:null},"Businesses"),(0,l.kt)("td",{parentName:"tr",align:null},"Non-developers, e.g. engineers, consultants, educators, researchers, etc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Required Knowledge"),(0,l.kt)("td",{parentName:"tr",align:null},"Python, Anvil library"),(0,l.kt)("td",{parentName:"tr",align:null},"Python")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ideal Use Case"),(0,l.kt)("td",{parentName:"tr",align:null},"Full-fledged business websites with a database"),(0,l.kt)("td",{parentName:"tr",align:null},"Computational simulations and calculations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cost"),(0,l.kt)("td",{parentName:"tr",align:null},"Free"),(0,l.kt)("td",{parentName:"tr",align:null},"Free")))),(0,l.kt)("h2",{id:"features-comparison"},"Features Comparison"),(0,l.kt)("p",null,"Now, let's dive into the specific features and functionalities of both Anvil and MecSimCalc."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature"),(0,l.kt)("th",{parentName:"tr",align:null},"Anvil"),(0,l.kt)("th",{parentName:"tr",align:null},"MecSimCalc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://anvil.works/docs"},"anvil.works/docs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.mecsimcalc.com"},"docs.mecsimcalc.com"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Blog"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://anvil.works/blog"},"anvil.works/blog")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.mecsimcalc.com/blog"},"docs.mecsimcalc.com/blog"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Discourse Forum"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://anvil.works/community"},"anvil.works/community")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://community.mecsimcalc.com"},"community.mecsimcalc.com"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Drag-and-drop interface"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cloud Deployment"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Self-Host"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Github Integration"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Built-in Database"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705 Postgres DB"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Built-in External Integrations"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705 Stripe, OAuth, Jupyter, Email, etc."),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"In-Browser Editor"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705 No intellisense"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Run in Background"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Custom Domain"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"App Marketplace"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,l.kt)("h2",{id:"the-workflow"},"The Workflow"),(0,l.kt)("p",null,"Creating web applications should be a straightforward process. Let's explore how Anvil and MecSimCalc facilitate the app building and deploying process."),(0,l.kt)("h3",{id:"anvil"},"Anvil"),(0,l.kt)("p",null,"Anvil runs a web server that communicates with a database and other processes."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 1:")," Create a new app by selecting an Anvil template."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Create page",src:a(9838).Z,width:"1192",height:"502"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 2:")," On the inputs page, use the side menu on the right to configure each input and use drag-and-drop to add more inputs from the toolbox. The inputs are linked to the code by selecting the appropriate code function within each input's side menu."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Inputs page",src:a(5106).Z,width:"1600",height:"775"})),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"New component",src:a(1987).Z,width:"604",height:"377"}))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 3:")," On the code page, use custom Anvil functions to write Python code that executes commands, like interacting with databases, using the provided input values."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Code page",src:a(9266).Z,width:"1232",height:"838"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 4:")," Finally, to deploy the app, click on the ",(0,l.kt)("em",{parentName:"p"},"Publish")," button and set the appropriate settings in the popup window."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Publish",src:a(4657).Z,width:"1027",height:"757"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 5:")," The app is now deployed and accessible at an Anvil url.\nKeep in mind that Anvil apps on the free tier come with a banner at the top."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Anvil app",src:a(7911).Z,width:"1600",height:"522"})),(0,l.kt)("h3",{id:"mecsimcalc"},"MecSimCalc"),(0,l.kt)("p",null,"Internally, MecSimCalc uses serverless functions to run Python functions, making it suitable for computational simulations and calculations, which may require more compute power and longer runtimes."),(0,l.kt)("p",null,"Here is a simplified workflow for creating and deploying a basic MecSimCalc app:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 1:")," Visit ",(0,l.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/create"},"https://mecsimcalc.com/create")," and select one of the templates to create a new app.\n",(0,l.kt)("img",{alt:"Create page",src:a(2941).Z,width:"1886",height:"1004"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Step 2:")," On the inputs step, use the drag-and-drop interface to add, position, and delete the inputs. Customize each input by clicking on it.\n",(0,l.kt)("img",{alt:"Inputs step",src:a(4664).Z,width:"1914",height:"1328"}),"\n",(0,l.kt)("img",{alt:"Edit inputs",src:a(9477).Z,width:"2028",height:"1416"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Step 3:")," On the code step, write Python code that uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"inputs")," to calculate the outputs. No need to learn new functions nor any installations. Use the toolbar on the right to install Python packages, debug the code, and list the input variables.\n",(0,l.kt)("img",{alt:"Code step",src:a(2021).Z,width:"2016",height:"1292"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Step 4:")," On the outputs step, use the rich text editor to stylize the outputs section and embed the output variables generated from the code.\n",(0,l.kt)("img",{alt:"Outputs step",src:a(2648).Z,width:"2012",height:"1146"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Step 5:")," Finally, to deploy the app, simply click on the ",(0,l.kt)("em",{parentName:"p"},"Publish")," button at the bottom of the Preview step and the app will be accessible and searchable on MecSimCalc within a few seconds.\n",(0,l.kt)("img",{alt:"Publish",src:a(78).Z,width:"2012",height:"998"}),"\nThis is what the final app looks like:\n",(0,l.kt)("img",{alt:"MecSimCalc app",src:a(8732).Z,width:"1792",height:"1728"})),(0,l.kt)("h2",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"Anvil and MecSimCalc present distinct approaches to simplifying web application development, harnessing the capabilities of Python without necessitating extensive programming expertise. Anvil, catering to comprehensive website creation, boasts an array of features, potentially introducing complexity, whereas MecSimCalc targets non-technical users, streamlining intricate computations."),(0,l.kt)("p",null,"MecSimCalc specifically excels in simplifying complex calculations using Python, offering a more straightforward learning curve due to its sequential layout and familiar Python code structure. In contrast, Anvil's robust feature set, while powerful for creating full-scale websites, may require a few hours for users to grasp the Anvil web layout and anvil code library."),(0,l.kt)("p",null,"Anvil suits businesses seeking database interaction within a website, while MecSimCalc serves as an optimal choice for non-developers aspiring to create simple web apps like calculators. Its strength lies in facilitating app development for non-technical users."),(0,l.kt)("p",null,"Ultimately, the selection between Anvil and MecSimCalc hinges on individual needs and the complexity of the intended web applications. Both tools leverage the capabilities of Python but cater to different audiences and offer distinct features."))}d.isMDXComponent=!0},7911:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/anvil_app-8fc75f126b8f055c10636cd102150367.png"},9266:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/anvil_code-ebd697072253e78fe99e4f638cb50ef6.png"},9838:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/anvil_create-9776fbf9698e1a7591d104b1ae724a32.jpg"},5106:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/anvil_inputs-ade82f072682da2bfccc25d309bdd332.png"},1987:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/anvil_new_component-8b3f5cb1a20fb421a11024ca5de9f7b6.png"},4657:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/anvil_publish-764b9be1c55d3ae215681c4647dda7cf.png"},8732:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mecsimcalc_app-bca1a5d384cf4621c257823ba872bc99.png"},2021:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mecsimcalc_code-a93134d8821024e18499c7ce83270a19.png"},2941:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mecsimcalc_create-cfba4c2a6da80a1eb9299ee03c3f1126.png"},9477:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mecsimcalc_edit_inputs-9299e972d352edf6dc910871c9f6f308.png"},4664:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mecsimcalc_inputs-53163803f18ac1fcada8ea734b241e6b.png"},2648:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mecsimcalc_outputs-a052e33e859f21f71fc49ec5e3f5ac6f.png"},78:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mecsimcalc_publish-9db6a1804fa5cbdd54ee3d5e7c1007e6.png"},925:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/vs_anvil_banner-df42381badd44aadcacfd8628a4c5547.jpg"}}]);