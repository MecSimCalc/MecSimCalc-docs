"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[6759],{5807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var A=n(5893),i=n(1151);const d={sidebar_label:"Text Files",sidebar_position:2},s="Text Files",a={id:"files/text-files",title:"Text Files",description:"This app has two inputs input0 and a file input with variable name",source:"@site/docs/files/text-files.md",sourceDirName:"files",slug:"/files/text-files",permalink:"/files/text-files",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Text Files",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/files/overview"},next:{title:"Large Files",permalink:"/files/large-files"}},c={},o=[];function r(e){const t={a:"a",code:"code",em:"em",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(t.h1,{id:"text-files",children:"Text Files"}),"\n",(0,A.jsx)("div",{style:{width:"100%",height:"600px",overflow:"hidden"},children:(0,A.jsx)("iframe",{src:"https://mecsimcalc.com/app/5545072/text_files",style:{position:"relative",left:"-45px",top:"-48px"},width:"100%",height:"600",title:"MecSimCalc",frameBorder:"0"})}),"\n",(0,A.jsxs)(t.p,{children:["This app has two inputs: a text field with variable name: ",(0,A.jsx)(t.code,{children:"input_0"})," and a file input with variable name: ",(0,A.jsx)(t.code,{children:"input_1"}),". The ",(0,A.jsx)(t.strong,{children:"Accept"})," option of the ",(0,A.jsx)(t.a,{href:"../inputs/input-types",children:(0,A.jsx)(t.code,{children:"FileInput"})})," is set to ",(0,A.jsx)(t.code,{children:".txt"})," in order to limit the uploaded files to those with ",(0,A.jsx)(t.code,{children:".txt"})," extension. The inputs page is shown in the image below:"]}),"\n",(0,A.jsx)("div",{style:{textAlign:"center"},children:(0,A.jsx)(t.p,{children:(0,A.jsx)(t.img,{alt:"img alt",src:n(2234).Z+"",width:"858",height:"233"})})}),"\n",(0,A.jsxs)(t.p,{children:["The code for this ",(0,A.jsx)(t.em,{children:(0,A.jsx)(t.strong,{children:"app"})})," is shown below. First, the text input by the user is saved to a variable ",(0,A.jsx)(t.code,{children:"t"}),". For convenience, a utility function named ",(0,A.jsx)(t.code,{children:"Text_File(string, filename)"})," is provided below, which returns a string that can embedded in the output page for the ",(0,A.jsx)(t.em,{children:(0,A.jsx)(t.strong,{children:"user"})})," to download."]}),"\n",(0,A.jsxs)(t.p,{children:["In the line ",(0,A.jsx)(t.code,{children:"newdata = base64.b64encode(string.encode()).decode()"}),":"]}),"\n",(0,A.jsxs)(t.ul,{children:["\n",(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.code,{children:"string.encode()"})," converts the string object into a bytes object that can then be encoded in base64 using the ",(0,A.jsx)(t.code,{children:"b64encode"})," function."]}),"\n",(0,A.jsxs)(t.li,{children:["The resulting bytes data is decoded using the ",(0,A.jsx)(t.code,{children:".decode()"})," method and the result, which is a string, is saved in the variable ",(0,A.jsx)(t.code,{children:"newdata"}),"."]}),"\n"]}),"\n",(0,A.jsxs)(t.p,{children:["The file type and encoding is stored as a string in the variable ",(0,A.jsx)(t.code,{children:"meta"}),". The final data is the concatenation of ",(0,A.jsx)(t.code,{children:"meta"})," and ",(0,A.jsx)(t.code,{children:"newdata"}),". The file data is returned using the ",(0,A.jsx)(t.code,{children:"<a>"})," tag with the name: ",(0,A.jsx)(t.code,{children:"filename.txt"}),", where ",(0,A.jsx)(t.code,{children:"filename"})," is the name chosen when the utility routine is called."]}),"\n",(0,A.jsxs)(t.p,{children:["As for the input file data, it is extracted from the file, decoded using ",(0,A.jsx)(t.code,{children:".base64decode"}),", converted into a string using ",(0,A.jsx)(t.code,{children:".decode()"})," method, and returned as the value of ",(0,A.jsx)(t.code,{children:"Text From File"}),"."]}),"\n",(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:"language-python",children:'import base64\n\ndef Text_File(string, filename):\n    # This function generates the required file_data string for download.\n    # You can call this function to generate a text file containing the "string" data\n    # filename provides the name of the file when the user attempts to download it.\n    newdata = base64.b64encode(string.encode()).decode()\n    extension = ".txt"\n    meta = "data:text/plain;base64,"\n    encoded_data = meta + newdata\n    return "<a href=\'" + encoded_data + "\' download=\'" + filename + extension + "\'>Download File</a>"\n\ndef main(inputs):\n    # Extracting text from file\n    [meta,data] = inputs[\'input_1\'].split(";base64,")\n    decoded_string_object = base64.b64decode(data).decode()\n\n    # preparing input text for download\n    t = inputs[\'input_0\']\n    File = Text_File(t,"MyFile")\n    return {"Text From File":decoded_string_object, "File":File}\n'})}),"\n",(0,A.jsx)(t.p,{children:"The following lines are added to the output editor to display the text that was extracted from the input file and to provide the download link for the generated text file:"}),"\n",(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{children:'The text from the text file is: {{ outputs["Text From File"] }}\nThe file to download: {{ outputs.File }}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(r,{...e})}):r(e)}},2234:(e,t,n)=>{n.d(t,{Z:()=>A});const A="data:image/png;base64,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"},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var A=n(7294);const i={},d=A.createContext(i);function s(e){const t=A.useContext(d);return A.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),A.createElement(d.Provider,{value:t},e.children)}}}]);