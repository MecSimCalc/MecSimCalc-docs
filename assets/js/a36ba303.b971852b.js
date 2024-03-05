"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[4156],{7834:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=n(5893),a=n(1151);const o={sidebar_label:"Images",sidebar_position:5},s="Images",r={id:"output/images",title:"Images",description:"This page will cover importing and exporting images",source:"@site/docs/output/images.md",sourceDirName:"output",slug:"/output/images",permalink:"/output/images",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Images",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Latex",permalink:"/output/latex"},next:{title:"Tables",permalink:"/output/tables"}},l={},d=[];function c(e){const i={a:"a",code:"code",em:"em",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"images",children:"Images"}),"\n",(0,t.jsx)(i.p,{children:"This page will cover importing and exporting images"}),"\n",(0,t.jsx)("div",{style:{width:"100%",height:"550px",overflow:"hidden"},children:(0,t.jsx)("iframe",{src:"https://mecsimcalc.com/app/0672426/working_with_images",style:{position:"relative",left:"-45px",top:"-48px"},width:"100%",height:"550",title:"MecSimCalc",frameBorder:"0"})}),"\n",(0,t.jsxs)(i.p,{children:["This ",(0,t.jsx)(i.em,{children:(0,t.jsx)(i.strong,{children:"app"})})," imports an image, changes its width and height to 200 using the ",(0,t.jsx)(i.code,{children:".thumbnail"})," function from the Python Image Library (PIL). One ",(0,t.jsx)(i.a,{href:"../inputs/input-types",children:(0,t.jsx)(i.code,{children:"FileInput"})})," is used with a variable name of ",(0,t.jsx)(i.code,{children:"file"})," and the ",(0,t.jsx)(i.strong,{children:"Accept"})," option is set to ",(0,t.jsx)(i.code,{children:"image/*"})," in order to limit the uploaded files to those with recognized image extensions. The inputs page is shown in the image below:"]}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"img alt",src:n(3522).Z+"",width:"847",height:"221"})})}),"\n",(0,t.jsx)(i.p,{children:"Two utility functions are provided:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Image_File"})," generates a downloadable file using the ",(0,t.jsx)(i.code,{children:"<a>"})," HTML tag."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Image_Embed"})," generates an embeddable image using the ",(0,t.jsx)(i.code,{children:"<img>"})," HTML tag ."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["The Python ",(0,t.jsx)(i.code,{children:"io"})," library is used to create and edit file objects. The code used is given below:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:'from PIL import Image\nimport mecsimcalc as msc\n\ndef main(inputs):\n    # Get the file object from the input\n    image_input = inputs[\'file\']\n\n    # Convert the file object to a PIL object\n    PIL_object = msc.input_to_PIL(image_input)\n\n    # generate an html image tag, a download link at the original size\n    image_original, download_link_original = msc.print_image(PIL_object, original_size=True, download=True)\n\n    # generate an html image tag, a download link and resizing the image\n    image_resized, download_link_resized = msc.print_image(PIL_object, width=500, height=500, download=True)\n\n    return {\n        "original_image": image_original, # Display original image\n        "original_download": download_link_original # Download link for original image\n        "resized_image": image, # Display resized image\n        "resized_download": download_link, # Download resized image\n    }\n'})}),"\n",(0,t.jsx)(i.p,{children:"Finally, the output page has the following lines:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"Displaying original image\n{{ outputs.original_image }}\n\nDownloading original image\n{{ outputs.original_download }}\n\nDisplaying resized image\n{{ outputs.resized_image }}\n\nDownloading resized image\n{{ outputs.resized_download }}\n"})})]})}function g(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3522:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/image_input-0f5e93e77379dad9ed24ef8fa86eb009.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>s});var t=n(7294);const a={},o=t.createContext(a);function s(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);