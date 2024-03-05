"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[9933],{2692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(5893),i=n(1151);const s={sidebar_label:"Tables",sidebar_position:6},l="Tables",o={id:"output/tables",title:"Tables",description:"Exporting Tables",source:"@site/docs/output/tables.md",sourceDirName:"output",slug:"/output/tables",permalink:"/output/tables",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Tables",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Images",permalink:"/output/images"},next:{title:"Overview",permalink:"/files/overview"}},r={},c=[{value:"Exporting Tables",id:"exporting-tables",level:2},{value:"Using the <code>mecsimcalc</code> library",id:"using-the-mecsimcalc-library",level:2},{value:"Code",id:"code",level:3},{value:"Output",id:"output",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"tables",children:"Tables"}),"\n",(0,a.jsx)(t.h2,{id:"exporting-tables",children:"Exporting Tables"}),"\n",(0,a.jsxs)(t.p,{children:["There are different ways by which a table can be embedded in the ",(0,a.jsx)(t.strong,{children:"output"})," page. ",(0,a.jsx)(t.a,{href:"../getting-started/example-3",children:"Example 3"})," in the introduction section provides a detailed example that the ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"developer"})})," can follow in which a table is generated and embedded in the output page. The example provides two options:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.a,{href:"https://www.w3schools.com/html/html_tables.asp",children:(0,a.jsx)(t.code,{children:"<table>"})})," HTML tags can be used to generate a table directly in the output editor as shown in the ",(0,a.jsx)(t.a,{href:"/output/conditionals#for-statement",children:"Conditionals"})," section."]}),"\n",(0,a.jsxs)(t.li,{children:["The Pandas library is used to construct the data as a Pandas dataframe, and then the ",(0,a.jsx)(t.code,{children:".to_html()"})," method is used to convert the dataframe into HTML that can be displayed."]}),"\n",(0,a.jsxs)(t.li,{children:["Using the ",(0,a.jsx)(t.code,{children:"mecsimcalc"})," library to convert a Pandas dataframe into an HTML table."]}),"\n"]}),"\n",(0,a.jsxs)(t.h2,{id:"using-the-mecsimcalc-library",children:["Using the ",(0,a.jsx)(t.code,{children:"mecsimcalc"})," library"]}),"\n",(0,a.jsx)(t.h3,{id:"code",children:"Code"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import pandas as pd\nimport mecsimcalc as msc\n\n\ndef main(inputs):\n    table = inputs["table"]\n\n    # Pick header names for the Columns\n    column_names = ["Column 1", "Column 2", "Column 3"]\n\n    # Coverting the table to html using the mecsimcalc library\n    table_html = msc.print_table(column_names, table)\n\n    # If you want to modify the table, or extract data from it\n    # you can convert it to a dataframe using the mecsimcalc library\n    df = msc.table_to_dataframe(column_names, table)\n    dataframe_html_table = df.to_html(index = True)\n\n    return {\n        "html_table": html_table,\n        "dataframe_html_table": dataframe_html_table\n    }\n'})}),"\n",(0,a.jsx)(t.h3,{id:"output",children:"Output"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Displaying the table without converting it to a dataframe\n{{ outputs.html_table }}\n\nDisplaying the table after converting it to a dataframe\n{{ outputs.dataframe_html_table }}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var a=n(7294);const i={},s=a.createContext(i);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);