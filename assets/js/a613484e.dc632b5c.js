"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[9096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=s(n),h=o,u=m["".concat(p,".").concat(h)]||m[h]||c[h]||i;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9768:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>r,toc:()=>p,default:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_label:"Localhost",sidebar_position:2},l="Self hosting on localhost",r={unversionedId:"self-hosting-apps/localhost",id:"self-hosting-apps/localhost",title:"Self hosting on localhost",description:"This tutorial will guide you on how to download your apps and run it locally on your own computer at this url//localhost:3000.",source:"@site/docs/self-hosting-apps/localhost.md",sourceDirName:"self-hosting-apps",slug:"/self-hosting-apps/localhost",permalink:"/self-hosting-apps/localhost",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Localhost",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/self-hosting-apps/overview"},next:{title:"Utility Functions",permalink:"/utility"}},p=[{value:"Downloading the code",id:"downloading-the-code",children:[],level:2},{value:"Setting up the back-end server",id:"setting-up-the-back-end-server",children:[],level:2},{value:"Setting up the front-end client",id:"setting-up-the-front-end-client",children:[],level:2},{value:"Adding your apps",id:"adding-your-apps",children:[],level:2},{value:"Starting the application",id:"starting-the-application",children:[],level:2},{value:"Production build",id:"production-build",children:[],level:2}],s={toc:p};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"self-hosting-on-localhost"},"Self hosting on localhost"),(0,o.kt)("p",null,"This tutorial will guide you on how to download your apps and run it locally on your own computer at this url: ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is an ",(0,o.kt)("strong",{parentName:"p"},"advanced")," tutorial and prior experience using the terminal is expected"))),(0,o.kt)("h2",{id:"downloading-the-code"},"Downloading the code"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/MecSim/MecSimCalc-self-hosted"},"https://github.com/MecSim/MecSimCalc-self-hosted")," and download the source code. You can either:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Code")," > ",(0,o.kt)("strong",{parentName:"li"},"Download ZIP")," on the Github site, and then extract the ZIP file.\n",(0,o.kt)("img",{alt:"img alt",src:n(8987).Z})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OR")),(0,o.kt)("li",{parentName:"ul"},"Execute the ",(0,o.kt)("inlineCode",{parentName:"li"},"git clone")," command in your terminal (if you have ",(0,o.kt)("inlineCode",{parentName:"li"},"git")," installed).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/MecSim/MecSimCalc-self-hosted\n")),(0,o.kt)("h2",{id:"setting-up-the-back-end-server"},"Setting up the back-end server"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Download Python")," if you do not have it installed already.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This tutorial has been tested on Python 3.8."))),(0,o.kt)("li",{parentName:"ol"},"Open your terminal, and ",(0,o.kt)("inlineCode",{parentName:"li"},"cd")," into the ",(0,o.kt)("inlineCode",{parentName:"li"},"back-end")," folder.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd MecSimCalc-self-hosted/back-end/\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Install all the Python libraries in ",(0,o.kt)("inlineCode",{parentName:"li"},"requirements.txt")," using ",(0,o.kt)("inlineCode",{parentName:"li"},"pip install"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install -r requirements.txt\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Start the server:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python server.py\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"python server.py")," does not work, try ",(0,o.kt)("inlineCode",{parentName:"p"},"python3 server.py")))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"You should see the following printed to your terminal:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"* Serving Flask app 'server' (lazy loading)\n* Environment: production\n  WARNING: This is a development server. Do not use it in a production deployment.\n  Use a production WSGI server instead.\n* Debug mode: on\n* Running on http://127.0.0.1:5000 (Press CTRL+C to quit)\n* Restarting with stat\n* Debugger is active!\n* Debugger PIN: 742-486-046\n")),(0,o.kt)("h2",{id:"setting-up-the-front-end-client"},"Setting up the front-end client"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Download NodeJS")," if you do not have it installed already.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This tutorial has been tested on Node 16.7."))),(0,o.kt)("li",{parentName:"ol"},"Keep the Python server process running from before and open another terminal."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd")," into the ",(0,o.kt)("inlineCode",{parentName:"li"},"front-end")," folder:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd MecSimCalc-self-hosted/front-end/\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Install all the npm packages in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Start the front end server:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run build\nnpm run start\n")),(0,o.kt)("p",null,"The following should be printed to your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ready - started server on 0.0.0.0:3000, url: http://localhost:3000\ninfo  - Loaded env from \\MecSimCalc-self-hosted\\front-end\\.env\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:3000"},"http://localhost:3000")," to check the website is working.")),(0,o.kt)("h2",{id:"adding-your-apps"},"Adding your apps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://mecsimcalc.com/app"},"https://mecsimcalc.com/app")," and download your apps by clicking the ",(0,o.kt)("strong",{parentName:"li"},"Download")," button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(8845).Z})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the downloaded ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," files into the ",(0,o.kt)("inlineCode",{parentName:"p"},"MecSimCalc-self-hosted/apps")," folder.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Refresh ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," and voil\xe0, your apps should now show up."))),(0,o.kt)("h2",{id:"starting-the-application"},"Starting the application"),(0,o.kt)("p",null,"After the initial installation of the application, you do not need to re-install the ",(0,o.kt)("inlineCode",{parentName:"p"},"pip")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," packages. To start up your application again, do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open a a terminal, and ",(0,o.kt)("inlineCode",{parentName:"li"},"cd")," into the ",(0,o.kt)("inlineCode",{parentName:"li"},"front-end")," folder."),(0,o.kt)("li",{parentName:"ol"},"Execute ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run start"),"."),(0,o.kt)("li",{parentName:"ol"},"Open another terminal, and ",(0,o.kt)("inlineCode",{parentName:"li"},"cd")," into the ",(0,o.kt)("inlineCode",{parentName:"li"},"back-end")," folder."),(0,o.kt)("li",{parentName:"ol"},"Execute ",(0,o.kt)("inlineCode",{parentName:"li"},"python server.py"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:3000"},"http://localhost:3000"),".")),(0,o.kt)("p",null,"To shut down the application, simply close the two terminal windows."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the application is not working, check that both client and server processes are running in the terminals, and that there are no error messages in the terminals."))),(0,o.kt)("h2",{id:"production-build"},"Production build"),(0,o.kt)("p",null,"When your self-hosted application is ready to be deployed into production, make the following changes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"server.py"),", set ",(0,o.kt)("inlineCode",{parentName:"li"},"debug")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"False"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"server.run(debug=False)\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},".env"),", change ",(0,o.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_API")," to the url of your Python server, if needed."),(0,o.kt)("li",{parentName:"ol"},"Start the front-end server in production mode:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run build\nnpm run start\n")))}d.isMDXComponent=!0},8987:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/download_github_repo-a7d29ff9d1b24c9c17b7d7c5dd8777a6.png"},8845:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/download_my_apps-f74027d473a5c6e4a790cb96d7dc7a75.png"}}]);