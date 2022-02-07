"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[830],{3905:function(e,t,n){n.d(t,{Zo:function(){return A},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},A=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,A=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(h,l(l({ref:t},A),{},{components:n})):r.createElement(h,l({ref:t},A))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4579:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return A},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_label:"Example 3",sidebar_position:6},s="Example 3: Generating a Multiplication Table",p={unversionedId:"Getting-Started/Example3",id:"Getting-Started/Example3",title:"Example 3: Generating a Multiplication Table",description:"This tutorial provides instructions to create an output table either using a utility function or the Pandas library. The first version appears in this link, while the second appears in this link.",source:"@site/docs/Getting-Started/Example3.md",sourceDirName:"Getting-Started",slug:"/Getting-Started/Example3",permalink:"/Getting-Started/Example3",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Example 3",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Generating Tables",permalink:"/Getting-Started/Tables"}},A=[{value:"Step 1: Info",id:"step-1-info",children:[],level:2},{value:"Step 2. Inputs",id:"step-2-inputs",children:[],level:2},{value:"Step 3. Code",id:"step-3-code",children:[],level:2},{value:"Step 4. Output",id:"step-4-output",children:[],level:2},{value:"Step 5. Docs",id:"step-5-docs",children:[],level:2},{value:"Step 6. Preview",id:"step-6-preview",children:[],level:2}],c={toc:A};function u(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"example-3-generating-a-multiplication-table"},"Example 3: Generating a Multiplication Table"),(0,i.kt)("p",null,"This tutorial provides instructions to create an output table either using a utility function or the Pandas library. The first version appears in this ",(0,i.kt)("a",{parentName:"p",href:"https://www.mecsimcalc.com/app/5389912/multiplication_table"},"link"),", while the second appears in this ",(0,i.kt)("a",{parentName:"p",href:"https://www.mecsimcalc.com/app/6325826/multiplication_table"},"link"),"."),(0,i.kt)("h2",{id:"step-1-info"},"Step 1: Info"),(0,i.kt)("p",null,"You can fill in the required fields as shown in the following figure. You can use the default ",(0,i.kt)("inlineCode",{parentName:"p"},"Favicon Image"),". The image available ",(0,i.kt)("a",{target:"_blank",href:n(3207).Z},"here")," was used as the ",(0,i.kt)("inlineCode",{parentName:"p"},"Primary Image"),"."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img alt",src:n(5734).Z}))),(0,i.kt)("h2",{id:"step-2-inputs"},"Step 2. Inputs"),(0,i.kt)("p",null,'For this example, you can use one input group termed "Multiplication Table" with two numerical inputs: "Multiplier" and "Table Range". The variable names assigned to them are ',(0,i.kt)("inlineCode",{parentName:"p"},"multiplier")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"range"),". The following image shows the inputs stage after creating these inputs:"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img alt",src:n(1315).Z}))),(0,i.kt)("p",null,"The following two images show the settings used for each of the inputs:"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img alt",src:n(2713).Z}))),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img alt",src:n(6962).Z}))),(0,i.kt)("h2",{id:"step-3-code"},"Step 3. Code"),(0,i.kt)("p",null,"We are going to present two different versions of the code that can be used to generate tables. In the first version, the utility function ",(0,i.kt)("inlineCode",{parentName:"p"},"build_html_table")," that takes an array of values of the table columns (",(0,i.kt)("inlineCode",{parentName:"p"},"columns"),") and an array of strings containing the headers (",(0,i.kt)("inlineCode",{parentName:"p"},"ColumnHeaders"),") and returns a string representing the HTML version of the table. Below is the code used in this version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def build_html_table(columns, ColumnHeaders):\n    # <table> is the table\n    # <tr> is table row\n    # <th> is table header\n    # <td> is table data cell\n    # (1) Table opening table\n    html_table = "<table border=\'3\' cellpadding=\'5\' style=\'border-collapse:collapse;\'><tr>"\n    # (2) Add header row\n    rows=len(columns[0])\n    for h in ColumnHeaders:\n        html_table += "<th>"+h+"</th>"\n    html_table += "</tr>"\n    # (3) Add all data rows\n    for i in range(rows):\n        html_table += "<tr>"\n        for column in columns:\n            html_table += "<td>"+str(column[i])+"</td>"\n        html_table += "</tr>"\n    # (4) Add the table closing tag\n    html_table += "</table>"\n    return html_table\n\ndef main(inputs):\n    m=inputs[\'multiplier\']\n    r=inputs[\'range\']\n    col1=[m for i in range(r)]\n    col2=[i+1 for i in range(r)]\n    col3=[col1[i]*col2[i] for i in range(r)]\n    columns=[col1,col2,col3]\n    ColumnHeaders=["First Number", "Second Number","Product"]\n    table=build_html_table(columns,ColumnHeaders)\n    return {"Multiplier": m, "Table":table }\n')),(0,i.kt)("p",null,"In the second version, we are going to use Pandas library to create an html table based on a pandas dataframe:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import pandas as pd\n\ndef main(inputs):\n    m=inputs[\'multiplier\']\n    r=inputs[\'range\']\n    rows=[[m,i+1,m*(i+1)] for i in range(r)]\n    ColumnHeaders=["First Number", "Second Number","Product"]\n    a=pd.DataFrame(data=rows, columns=ColumnHeaders)\n    table=a.to_html(index=False)\n    return {"Multiplier": m, "Table":table }\n')),(0,i.kt)("p",null,"Both versions return an html table that can be embedded directly into the output page as shown in the next step."),(0,i.kt)("h2",{id:"step-4-output"},"Step 4. Output"),(0,i.kt)("p",null,"The output page used for this example is shown in the following figure."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img alt",src:n(7025).Z}))),(0,i.kt)("h2",{id:"step-5-docs"},"Step 5. Docs"),(0,i.kt)("p",null,"You can skip adding documentation to the ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"app")),"."),(0,i.kt)("h2",{id:"step-6-preview"},"Step 6. Preview"),(0,i.kt)("p",null,"In the preview section, confirm that the app works as expected:"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img alt",src:n(1937).Z}))),(0,i.kt)("p",null,"Once ready, click on \u201cpublish\u201d to publish the app on the web.\nThe two versions of the app are available here:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.mecsimcalc.com/app/5389912/multiplication_table"},"https://www.mecsimcalc.com/app/5389912/multiplication_table")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.mecsimcalc.com/app/6325826/multiplication_table"},"https://www.mecsimcalc.com/app/6325826/multiplication_table")))}u.isMDXComponent=!0},3207:function(e,t,n){t.Z=n.p+"assets/files/MultiplicationTable-4c70ed2fceef2eac2ed264e809d966b0.png"},5734:function(e,t,n){t.Z=n.p+"assets/images/Ex3-354156672313ec5272e253c21ef5b918.png"},1315:function(e,t){t.Z="data:image/png;base64,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"},7025:function(e,t){t.Z="data:image/png;base64,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"},1937:function(e,t,n){t.Z=n.p+"assets/images/Ex3publish-06032741aa1da9e8ef2c6ea10439a90b.png"},2713:function(e,t,n){t.Z=n.p+"assets/images/Multiplier-dfa88c971f377a841d567e19e3cc7950.png"},6962:function(e,t,n){t.Z=n.p+"assets/images/range-f2e354324728f5c15c3954eca22a0e09.png"}}]);