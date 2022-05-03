"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[5508],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9212:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={sidebar_label:"Utility Functions",sidebar_position:6},s="Utility Functions",d={unversionedId:"Objects/utility",id:"Objects/utility",title:"Utility Functions",description:"The following provide a list of utility functions that appeared throughout these documentations. These functions can be used by the **developer** to work with different objects.",source:"@site/docs/Objects/utility.md",sourceDirName:"Objects",slug:"/Objects/utility",permalink:"/Objects/utility",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Utility Functions",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"CSV and Tables",permalink:"/Objects/tables"},next:{title:"Working with large files",permalink:"/Objects/LargeFiles"}},u=[{value:"Generating Graphs",id:"generating-graphs",children:[],level:2},{value:"Text Files",id:"text-files",children:[],level:2},{value:"Image Files",id:"image-files",children:[],level:2},{value:"Displaying Images",id:"displaying-images",children:[],level:2},{value:"Generating Tables",id:"generating-tables",children:[],level:2}],c={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"utility-functions"},"Utility Functions"),(0,r.kt)("p",null,"The following provide a list of utility functions that appeared throughout these documentations. These functions can be used by the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"developer"))," to work with different objects."),(0,r.kt)("h2",{id:"generating-graphs"},"Generating Graphs"),(0,r.kt)("p",null,"This utility function can be used to generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"matplotlib")," graph ready to be embedded in the output page using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<img>")," HTML tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import matplotlib.pyplot as plt\nimport numpy as np\nimport base64\nimport io\n\ndef plt_show(plt, width=500, dpi=100):\n    # Converts matplotlib plt to image data string\n    #   plt is the matplotlib pyplot or figure\n    #   width is the width of the graph image in pixels\n    #   dpi (dots per inch) is the resolution of the image\n    bytes = io.BytesIO()\n    plt.savefig(bytes, format=\'png\', dpi=dpi)  # Save as png image\n    if hasattr(plt, "close"):\n        plt.close()\n    bytes.seek(0)\n    base64_string = "data:image/png;base64," + \\\n        base64.b64encode(bytes.getvalue()).decode("utf-8")\n    return "<img src=\'" + base64_string + "\' width=\'" + str(width) + "\'>"\n\ndef main(inputs):\n    # Code to generate a plot using matplot lib (plt)\n    # The following line uses the plt_show function to create an embeddable image\n    img = plt_show(plt, 500)\n    return {"Image": img}\n')),(0,r.kt)("h2",{id:"text-files"},"Text Files"),(0,r.kt)("p",null,"This utility function can be used to generate a text file to be embedded in the output page using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<a>")," HTML tag allowing the user to download it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import base64\n\ndef Text_File(string,FileName):\n    #This function generates the required file_data string for download.\n    #You can call this function to generate a text file containing the "string" data\n    #FileName provides the name of the file when the user attempts to download it.\n    newdata=base64.b64encode(string.encode()).decode()\n    extension=".txt"\n    meta="data:text/plain;base64,"\n    encoded_data=meta+newdata\n    return "<a href=\'" + encoded_data + "\' download=\'"+FileName+extension+"\'>Download File</a>"\n\ndef main(inputs):\n    #code to generate the required string variable "t".\n    t=....\n    File=Text_File(t,"MyFile")\n    return {"File":File}\n')),(0,r.kt)("h2",{id:"image-files"},"Image Files"),(0,r.kt)("p",null,"This utility function can be used to generate an image file to be embedded in the output page using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<a>")," HTML tag allowing the user to download it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def Image_File(data,extension,FileName):\n    return "<a href=\'" + data + "\' download=\'"+FileName+"." + extension + "\'>Download Image</a>"\n\ndef main(inputs):\n    #code to generate encoded image file (encoded_data) and image format (extension).\n    imagefile=Image_File(encoded_data,extension,"MyImage")\n    return {\n        # Download using <a> tags\n        "File": imagefile,\n    }\n')),(0,r.kt)("h2",{id:"displaying-images"},"Displaying Images"),(0,r.kt)("p",null,"This utility function can be used to generate an image file to be embedded in the output page using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<img>")," HTML tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def Image_Embed(data):\n    return "<img src=\'" + data + "\'>"\n\ndef main(inputs):\n    #code to generate encoded image file (encoded_data)\n    image= Image_Embed(encoded_data)\n    return {\n        # Display using <img> tag\n        "Image": image,\n    }\n')),(0,r.kt)("h2",{id:"generating-tables"},"Generating Tables"),(0,r.kt)("p",null,"This utility function generates a string using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<table>")," HTML tag that can be embedded in the output page to display a table. This utility routine works only with tables having more than one column."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def build_html_table(columns, ColumnHeaders):\n    # <table> is the table\n    # <tr> is table row\n    # <th> is table header\n    # <td> is table data cell\n    # (1) Table opening table\n    html_table = "<table border=\'3\' cellpadding=\'5\' style=\'border-collapse:collapse;\'><tr>"\n    # (2) Add header row\n    rows=len(columns[0])\n    for h in ColumnHeaders:\n        html_table += "<th>"+h+"</th>"\n    html_table += "</tr>"\n    # (3) Add all data rows\n    for i in range(rows):\n        html_table += "<tr>"\n        for column in columns:\n            html_table += "<td>"+str(column[i])+"</td>"\n        html_table += "</tr>"\n    # (4) Add the table closing tag\n    html_table += "</table>"\n    return html_table\n\ndef main(inputs):\n    #Code to generate the arrays col1, col2, col3, ....\n    columns=[col1,col2,col3,....]\n    ColumnHeaders=["Title 1", "Title 2","Title 3",...]\n    table=build_html_table(columns,ColumnHeaders)\n    return {"Table":table }\n')))}p.isMDXComponent=!0}}]);