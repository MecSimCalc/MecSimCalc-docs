"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[3282],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),g=s(n),c=i,u=g["".concat(l,".").concat(c)]||g[c]||d[c]||r;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1843:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return g}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],p={sidebar_label:"Images and Graphs",sidebar_position:4},l="Images, Graphs, and Image Files",s={unversionedId:"Objects/images",id:"Objects/images",title:"Images, Graphs, and Image Files",description:"Importing and Exporting Images",source:"@site/docs/Objects/images.md",sourceDirName:"Objects",slug:"/Objects/images",permalink:"/Objects/images",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Images and Graphs",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Text Files",permalink:"/Objects/TextFiles"},next:{title:"CSV and Tables",permalink:"/Objects/tables"}},m=[{value:"Importing and Exporting Images",id:"importing-and-exporting-images",children:[],level:2},{value:"Generating Graphs",id:"generating-graphs",children:[],level:2}],d={toc:m};function g(e){var t=e.components,p=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"images-graphs-and-image-files"},"Images, Graphs, and Image Files"),(0,r.kt)("h2",{id:"importing-and-exporting-images"},"Importing and Exporting Images"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/app/0672426/working_with_images"},"Working with Images")," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"app"))," is used here and embedded below for demonstration."),(0,r.kt)("div",{style:{width:"100%",height:"550px",overflow:"hidden"}},(0,r.kt)("iframe",{src:"https://mecsimcalc.com/app/0672426/working_with_images",style:{position:"relative",left:"-45px",top:"-48px"},width:"100%",height:"550",title:"MecSimCalc",frameborder:"0"})),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"app"))," imports an image, changes its width and height to 200 using the ",(0,r.kt)("inlineCode",{parentName:"p"},".thumbnail")," function available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PIL")," python library. One ",(0,r.kt)("a",{parentName:"p",href:"../Inputs/Input-Types"},(0,r.kt)("inlineCode",{parentName:"a"},"FileInput"))," is used with variable name set to ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," and the ",(0,r.kt)("strong",{parentName:"p"},"Accept")," option set to ",(0,r.kt)("inlineCode",{parentName:"p"},"image/*")," to limit the uploaded files to those with recognized image extensions. The inputs page is shown in the figure below:"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img alt",src:n(941).Z}))),(0,r.kt)("p",null,"Two utility functions are provided, one to generate an embeddable image using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<img>")," HTML tag and another to generate a downloadable file using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<a>")," HTML tag. The python ",(0,r.kt)("inlineCode",{parentName:"p"},"io")," library is used to create and edit file objects. The code used is given below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from PIL import Image\nimport base64\nimport io\n\ndef Image_File(data,extension,FileName):\n    return "<a href=\'" + data + "\' download=\'"+FileName+"." + extension + "\'>Download Image</a>"\ndef Image_Embed(data):\n    return "<img src=\'" + data + "\'>"\n\ndef main(inputs):\n    [meta, data] = inputs[\'file\'].split(";base64,")\n    metadata = meta + ";base64,"\n\n    # Decode the file data\n    file_data = io.BytesIO(base64.b64decode(data))\n\n    # Convert the file data into a Pillow\'s Image\n    img = Image.open(file_data)\n\n    # Manipulate the image\n    WIDTH = HEIGHT = 200\n    img.thumbnail((WIDTH, HEIGHT))  # resize\n\n    # Get downloadable data\n    buffer = io.BytesIO()\n    img.save(buffer, format=img.format)\n    encoded_data = metadata + base64.b64encode(buffer.getvalue()).decode()\n\n    imagefile=Image_File(encoded_data,img.format,"MyImage")\n    image=Image_Embed(encoded_data)\n    return {\n        # Display image using img tag\n        "Image": image,\n        # Download using <a> tags\n        "File": imagefile,\n    }\n')),(0,r.kt)("p",null,"Finally, the output page has the following lines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Displaying Image\n{{ outputs.Image}}\n\nDownloading Image\n{{ outputs.File}}\n")),(0,r.kt)("h2",{id:"generating-graphs"},"Generating Graphs"),(0,r.kt)("p",null,"Graphs generated using ",(0,r.kt)("inlineCode",{parentName:"p"},"matplotlib")," python library can be converted into an image and embedded in the output page using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<img>")," HTML tag. ",(0,r.kt)("a",{parentName:"p",href:"../Getting-Started/Example2"},"Example 2")," in the introduction section provides a detailed example that the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"developer"))," can follow."))}g.isMDXComponent=!0},941:function(e,t,n){t.Z=n.p+"assets/images/imageinput-0f5e93e77379dad9ed24ef8fa86eb009.png"}}]);