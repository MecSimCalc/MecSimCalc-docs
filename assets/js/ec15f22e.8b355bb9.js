"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[901],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4653:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],p={sidebar_label:"Generating Graphics",sidebar_position:3},l=void 0,s={unversionedId:"Getting-Started/Graphics",id:"Getting-Started/Graphics",title:"Graphics",description:"MecSimCalc platform is built over Jinja allowing embedding of many python elements into an HTML file. If a **developer** wishes to display graphics such as those generated using matplotlib, they can use a utility function plt_show provided in the following snippet of code, that exports the matplotlib object into an image embeddable into the output page.",source:"@site/docs/Getting-Started/Graphics.md",sourceDirName:"Getting-Started",slug:"/Getting-Started/Graphics",permalink:"/Getting-Started/Graphics",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Generating Graphics",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Example 1",permalink:"/Getting-Started/Example1"},next:{title:"Example 2",permalink:"/Getting-Started/Example2"}},c=[],m={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"MecSimCalc platform is built over ",(0,a.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/en/3.0.x/"},"Jinja")," allowing embedding of many python elements into an HTML file. If a ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"developer"))," wishes to display graphics such as those generated using ",(0,a.kt)("a",{parentName:"p",href:"https://matplotlib.org/"},"matplotlib"),", they can use a utility function ",(0,a.kt)("inlineCode",{parentName:"p"},"plt_show")," provided in the following snippet of code, that exports the matplotlib object into an image embeddable into the output page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import matplotlib.pyplot as plt\nimport numpy as np\nimport base64\nimport io\n\ndef plt_show(plt, width=500, dpi=100):\n    # Converts matplotlib plt to data string\n    # dpi (dots per inch) is the resolution of the image\n    # width is width of image in pixels\n    bytes = io.BytesIO()\n    plt.savefig(bytes, format=\'png\', dpi=dpi)  # Save as png image\n    plt.close()\n    bytes.seek(0)\n    base64_string = "data:image/png;base64," + \\\n        base64.b64encode(bytes.getvalue()).decode("utf-8")\n    return "<img src=\'" + base64_string + "\' width=\'" + str(width) + "\'>"\n\ndef main(inputs):\n    # Code to generate a plot using matplot lib (plt)\n    # The following line uses the plt_show function to create an embeddable image\n    img = plt_show(plt, 500)\n    return {"Image": img}\n')),(0,a.kt)("p",null,"As an example, the following snippet of code creates and exports an image of the cos function between 0 and 2Pi."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import matplotlib.pyplot as plt\nimport numpy as np\nimport base64\nimport io\n\ndef plt_show(plt, width=500, dpi=100):\n    # Converts matplotlib plt to data string\n    # dpi (dots per inch) is the resolution of the image\n    # width is width of image in pixels\n    bytes = io.BytesIO()\n    plt.savefig(bytes, format=\'png\', dpi=dpi)  # Save as png image\n    plt.close()\n    bytes.seek(0)\n    base64_string = "data:image/png;base64," + \\\n        base64.b64encode(bytes.getvalue()).decode("utf-8")\n    return "<img src=\'" + base64_string + "\' width=\'" + str(width) + "\'>"\n\ndef main(inputs):\n    x=np.arange(0,2*np.pi,0.1)\n    y=np.cos(x)\n    plt.plot(x,y,label="cos")\n    # Labels\n    plt.xlabel("x")\n    plt.ylabel("y")\n    # The following line uses the plt_show function to create an embeddable image\n    img = plt_show(plt, 500)\n    return {"Image": img}\n')))}u.isMDXComponent=!0}}]);