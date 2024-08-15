"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[9096],{874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(5893),s=t(1151);const o={sidebar_label:"Localhost",sidebar_position:2},l="Self hosting on localhost",r={id:"self-hosting-apps/localhost",title:"Self hosting on localhost",description:"This tutorial will guide you on how to download your apps and run it locally on your own computer at this url//localhost:3000.",source:"@site/docs/self-hosting-apps/localhost.md",sourceDirName:"self-hosting-apps",slug:"/self-hosting-apps/localhost",permalink:"/self-hosting-apps/localhost",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Localhost",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/self-hosting-apps/overview"},next:{title:"App Monetization",permalink:"/monetization"}},d={},c=[{value:"Downloading the code",id:"downloading-the-code",level:2},{value:"Setting up the back-end server",id:"setting-up-the-back-end-server",level:2},{value:"Setting up the front-end client",id:"setting-up-the-front-end-client",level:2},{value:"Adding your apps",id:"adding-your-apps",level:2},{value:"Starting the application",id:"starting-the-application",level:2},{value:"Production build",id:"production-build",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"self-hosting-on-localhost",children:"Self hosting on localhost"})}),"\n",(0,i.jsxs)(n.p,{children:["This tutorial will guide you on how to download your apps and run it locally on your own computer at this url: ",(0,i.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["This is an ",(0,i.jsx)(n.strong,{children:"advanced"})," tutorial and prior experience using the terminal is expected"]})}),"\n",(0,i.jsx)(n.h2,{id:"downloading-the-code",children:"Downloading the code"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.a,{href:"https://github.com/MecSim/MecSimCalc-self-hosted",children:"https://github.com/MecSim/MecSimCalc-self-hosted"})," and download the source code. You can either:"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Code"})," > ",(0,i.jsx)(n.strong,{children:"Download ZIP"})," on the Github site, and then extract the ZIP file.\n",(0,i.jsx)(n.img,{alt:"img alt",src:t(380).Z+"",width:"340",height:"266"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"OR"})}),"\n",(0,i.jsxs)(n.li,{children:["Execute the ",(0,i.jsx)(n.code,{children:"git clone"})," command in your terminal (if you have ",(0,i.jsx)(n.code,{children:"git"})," installed)."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone https://github.com/MecSim/MecSimCalc-self-hosted\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-the-back-end-server",children:"Setting up the back-end server"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"Download Python"})," if you do not have it installed already.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This tutorial has been tested on Python 3.8."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Open your terminal, and ",(0,i.jsx)(n.code,{children:"cd"})," into the ",(0,i.jsx)(n.code,{children:"back-end"})," folder."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd MecSimCalc-self-hosted/back-end/\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Install all the Python libraries in ",(0,i.jsx)(n.code,{children:"requirements.txt"})," using ",(0,i.jsx)(n.code,{children:"pip install"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pip install -r requirements.txt\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Start the server:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"python server.py\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"python server.py"})," does not work, try ",(0,i.jsx)(n.code,{children:"python3 server.py"})]})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"You should see the following printed to your terminal:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"* Serving Flask app 'server' (lazy loading)\n* Environment: production\n  WARNING: This is a development server. Do not use it in a production deployment.\n  Use a production WSGI server instead.\n* Debug mode: on\n* Running on http://127.0.0.1:5000 (Press CTRL+C to quit)\n* Restarting with stat\n* Debugger is active!\n* Debugger PIN: 742-486-046\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-the-front-end-client",children:"Setting up the front-end client"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"Download NodeJS"})," if you do not have it installed already.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This tutorial has been tested on Node 16.7."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Keep the Python server process running from before and open another terminal."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cd"})," into the ",(0,i.jsx)(n.code,{children:"front-end"})," folder:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd MecSimCalc-self-hosted/front-end/\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Install all the npm packages in ",(0,i.jsx)(n.code,{children:"package.json"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm install\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Start the front end server:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm run build\nnpm run start\n"})}),"\n",(0,i.jsx)(n.p,{children:"The following should be printed to your terminal:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ready - started server on 0.0.0.0:3000, url: http://localhost:3000\ninfo  - Loaded env from \\MecSimCalc-self-hosted\\front-end\\.env\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," to check the website is working."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"adding-your-apps",children:"Adding your apps"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.a,{href:"https://mecsimcalc.com/app",children:"https://mecsimcalc.com/app"})," and download your apps by clicking the ",(0,i.jsx)(n.strong,{children:"Download"})," button."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img",src:t(899).Z+"",width:"294",height:"541"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy the downloaded ",(0,i.jsx)(n.code,{children:".json"})," files into the ",(0,i.jsx)(n.code,{children:"MecSimCalc-self-hosted/apps"})," folder."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Refresh ",(0,i.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," and voil\xe0, your apps should now show up."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"starting-the-application",children:"Starting the application"}),"\n",(0,i.jsxs)(n.p,{children:["After the initial installation of the application, you do not need to re-install the ",(0,i.jsx)(n.code,{children:"pip"})," and ",(0,i.jsx)(n.code,{children:"npm"})," packages. To start up your application again, do the following:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open a a terminal, and ",(0,i.jsx)(n.code,{children:"cd"})," into the ",(0,i.jsx)(n.code,{children:"front-end"})," folder."]}),"\n",(0,i.jsxs)(n.li,{children:["Execute ",(0,i.jsx)(n.code,{children:"npm run start"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Open another terminal, and ",(0,i.jsx)(n.code,{children:"cd"})," into the ",(0,i.jsx)(n.code,{children:"back-end"})," folder."]}),"\n",(0,i.jsxs)(n.li,{children:["Execute ",(0,i.jsx)(n.code,{children:"python server.py"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To shut down the application, simply close the two terminal windows."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"If the application is not working, check that both client and server processes are running in the terminals, and that there are no error messages in the terminals."})}),"\n",(0,i.jsx)(n.h2,{id:"production-build",children:"Production build"}),"\n",(0,i.jsx)(n.p,{children:"When your self-hosted application is ready to be deployed into production, make the following changes:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In ",(0,i.jsx)(n.code,{children:"server.py"}),", set ",(0,i.jsx)(n.code,{children:"debug"})," to ",(0,i.jsx)(n.code,{children:"False"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"server.run(debug=False)\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["In ",(0,i.jsx)(n.code,{children:".env"}),", change ",(0,i.jsx)(n.code,{children:"NEXT_PUBLIC_API"})," to the url of your Python server, if needed."]}),"\n",(0,i.jsx)(n.li,{children:"Start the front-end server in production mode:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm run build\nnpm run start\n"})}),"\n",(0,i.jsx)(n.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,i.jsx)(n.p,{children:"Once you have completed the initial setup, you can start the application by running the following commands for future runs:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# In terminal 1\ncd back-end\npython server.py\n\n# In terminal 2\ncd front-end\nnpm run dev\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},380:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/download_github_repo-a7d29ff9d1b24c9c17b7d7c5dd8777a6.png"},899:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/download_my_apps-f74027d473a5c6e4a790cb96d7dc7a75.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var i=t(7294);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);