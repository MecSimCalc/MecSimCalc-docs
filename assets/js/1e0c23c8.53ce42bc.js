"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[1533],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return k}});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),l=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},o=function(a){var e=l(a.components);return n.createElement(i.Provider,{value:e},a.children)},N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,i=a.parentName,o=r(a,["components","mdxType","originalType","parentName"]),c=l(t),k=s,h=c["".concat(i,".").concat(k)]||c[k]||N[k]||m;return t?n.createElement(h,p(p({ref:e},o),{},{components:t})):n.createElement(h,p({ref:e},o))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=c;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=a,r.mdxType="string"==typeof a?a:s,p[1]=r;for(var l=2;l<m;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3878:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return r},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return o},default:function(){return c}});var n=t(7462),s=t(3366),m=(t(7294),t(3905)),p=["components"],r={sidebar_label:"Latex",sidebar_position:2},i="Latex",l={unversionedId:"output/latex",id:"output/latex",title:"Latex",description:"MecSimCalc uses KateX for displaying latex equations within the Rich Text and Output in-browser editors.",source:"@site/docs/output/latex.md",sourceDirName:"output",slug:"/output/latex",permalink:"/output/latex",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Latex",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/output/overview"},next:{title:"Conditionals",permalink:"/output/conditionals"}},o=[{value:"Using Katex filter",id:"using-katex-filter",children:[{value:"String",id:"string",children:[],level:3},{value:"Python Variable",id:"python-variable",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],level:2},{value:"Equation button",id:"equation-button",children:[],level:2}],N={toc:o};function c(a){var e=a.components,r=(0,s.Z)(a,p);return(0,m.kt)("wrapper",(0,n.Z)({},N,r,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"latex"},"Latex"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"MecSimCalc")," uses ",(0,m.kt)("a",{parentName:"p",href:"https://katex.org/docs/supported.html"},"KateX")," for displaying ",(0,m.kt)("a",{parentName:"p",href:"https://www.latex-project.org/help/documentation/amsldoc.pdf"},"latex equations")," within the ",(0,m.kt)("a",{parentName:"p",href:"../inputs/input-types"},"Rich Text")," and ",(0,m.kt)("a",{parentName:"p",href:"overview"},(0,m.kt)("strong",{parentName:"a"},"Output"))," in-browser editors."),(0,m.kt)("h2",{id:"using-katex-filter"},"Using Katex filter"),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"| katex")," is a special filter that converts the string to its left into Katex/Latex when the ",(0,m.kt)("em",{parentName:"p"},(0,m.kt)("strong",{parentName:"em"},"app"))," is executed."),(0,m.kt)("h3",{id:"string"},"String"),(0,m.kt)("p",null,"A latex formula written in a string can be inserted using the following form:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},'{{ "latex expression" | katex }}\n')),(0,m.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,m.kt)("div",{parentName:"div",className:"admonition-heading"},(0,m.kt)("h5",{parentName:"div"},(0,m.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,m.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,m.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,m.kt)("div",{parentName:"div",className:"admonition-content"},(0,m.kt)("p",{parentName:"div"},"Unlike traditional latex expressions, the character ",(0,m.kt)("inlineCode",{parentName:"p"},"\\")," should be replaced with ",(0,m.kt)("inlineCode",{parentName:"p"},"\\\\"),". For example, the following expression is used to display the equation that follows:"),(0,m.kt)("p",{parentName:"div"},(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"P"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mfrac",{parentName:"mrow"},(0,m.kt)("mrow",{parentName:"mfrac"},(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"\u03c3"),(0,m.kt)("mi",{parentName:"msub"},"y")),(0,m.kt)("mi",{parentName:"mrow"},"t")),(0,m.kt)("mrow",{parentName:"mfrac"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mi",{parentName:"mrow"},"D"))),(0,m.kt)("mo",{parentName:"mrow"},"\xd7"),(0,m.kt)("mi",{parentName:"mrow"},"F"),(0,m.kt)("mo",{parentName:"mrow"},"\xd7"),(0,m.kt)("mi",{parentName:"mrow"},"L"),(0,m.kt)("mo",{parentName:"mrow"},"\xd7"),(0,m.kt)("mi",{parentName:"mrow"},"J"),(0,m.kt)("mo",{parentName:"mrow"},"\xd7"),(0,m.kt)("mi",{parentName:"mrow"},"T")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"P=\\frac{2 \\sigma_y t}{OD} \\times F \\times L \\times J \\times T")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.3034em",verticalAlign:"-0.345em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,m.kt)("span",{parentName:"span",className:"mfrac"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9584em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"D")))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,m.kt)("span",{parentName:"span",style:{top:"-3.5073em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"\u03c3"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1645em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.357em",marginLeft:"-0.0359em",marginRight:"0.0714em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"y")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2819em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"L"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.09618em"}},"J"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T")))))),(0,m.kt)("pre",{parentName:"div"},(0,m.kt)("code",{parentName:"pre"},'{{ "P=\\\\frac{2 \\\\sigma_y t}{OD} \\\\times F \\\\times L \\\\times J \\\\times T" | katex }}\n')))),(0,m.kt)("h3",{id:"python-variable"},"Python Variable"),(0,m.kt)("p",null,"Alternatively, the ",(0,m.kt)("em",{parentName:"p"},(0,m.kt)("strong",{parentName:"em"},"developer"))," can choose to return a latex expression as a string from the ",(0,m.kt)("inlineCode",{parentName:"p"},"main")," function in the ",(0,m.kt)("strong",{parentName:"p"},"Code")," step."),(0,m.kt)("p",null,"When using the ",(0,m.kt)("inlineCode",{parentName:"p"},"\\")," character in the Python string, you need to either:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"Escape the character by using ",(0,m.kt)("inlineCode",{parentName:"li"},"\\\\")," instead of ",(0,m.kt)("inlineCode",{parentName:"li"},"\\"),"."),(0,m.kt)("li",{parentName:"ul"},"Or use a ",(0,m.kt)("a",{parentName:"li",href:"https://www.journaldev.com/23598/python-raw-string"},"raw string"),", which allows you to only use ",(0,m.kt)("inlineCode",{parentName:"li"},"\\"),".",(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},"A raw string is simply created by adding the character ",(0,m.kt)("inlineCode",{parentName:"li"},"r")," before the string quotation marks. For example: ",(0,m.kt)("inlineCode",{parentName:"li"},'r"this is a raw string"'))))),(0,m.kt)("p",null,"Once the latex string is returned from the ",(0,m.kt)("inlineCode",{parentName:"p"},"main")," function, it must be embedded into the ",(0,m.kt)("strong",{parentName:"p"},"Output")," step using the ",(0,m.kt)("inlineCode",{parentName:"p"},"| katex")," filter. For example:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"{{ outputs.math_equation | katex }}\n")),(0,m.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,m.kt)("div",{parentName:"div",className:"admonition-heading"},(0,m.kt)("h5",{parentName:"div"},(0,m.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,m.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,m.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,m.kt)("div",{parentName:"div",className:"admonition-content"},(0,m.kt)("p",{parentName:"div"},"Click the ",(0,m.kt)("inlineCode",{parentName:"p"},"fx")," button in the toolbar to quickly insert ",(0,m.kt)("inlineCode",{parentName:"p"},'{{ "x^2" | katex }}')),(0,m.kt)("div",{style:{textAlign:"center"}},(0,m.kt)("p",{parentName:"div"},(0,m.kt)("img",{alt:"img alt",src:t(7212).Z}))))),(0,m.kt)("h3",{id:"example"},"Example"),(0,m.kt)("p",null,"As a demonstration, this ",(0,m.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/app/8432496/displaying_katex_equations"},(0,m.kt)("em",{parentName:"a"},(0,m.kt)("strong",{parentName:"em"},"app")))," provides an example where the ",(0,m.kt)("em",{parentName:"p"},(0,m.kt)("strong",{parentName:"em"},"user"))," inputs a value for ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"y")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"))))),", and the ",(0,m.kt)("em",{parentName:"p"},(0,m.kt)("strong",{parentName:"em"},"app"))," then displays the following equation using three different methods:\n",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"y"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"v"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mfrac",{parentName:"mrow"},(0,m.kt)("mrow",{parentName:"mfrac"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"x"),(0,m.kt)("mn",{parentName:"msup"},"2")),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mi",{parentName:"mrow"},"f"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mi",{parentName:"mrow"},"log"),(0,m.kt)("mo",{parentName:"mrow"},"\u2061"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("mrow",{parentName:"mfrac"},(0,m.kt)("mi",{parentName:"mrow"},"cos"),(0,m.kt)("mo",{parentName:"mrow"},"\u2061"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y=value=\\frac{x^2+f(x)+\\log(x)}{\\cos(x)}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.6289em",verticalAlign:"-0.52em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,m.kt)("span",{parentName:"span",className:"mfrac"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.1089em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mop mtight"},(0,m.kt)("span",{parentName:"span",className:"mtight"},"c"),(0,m.kt)("span",{parentName:"span",className:"mtight"},"o"),(0,m.kt)("span",{parentName:"span",className:"mtight"},"s")),(0,m.kt)("span",{parentName:"span",className:"mopen mtight"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"),(0,m.kt)("span",{parentName:"span",className:"mclose mtight"},")")))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,m.kt)("span",{parentName:"span",style:{top:"-3.485em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8913em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.931em",marginRight:"0.0714em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,m.kt)("span",{parentName:"span",className:"mbin mtight"},"+"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"mopen mtight"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"),(0,m.kt)("span",{parentName:"span",className:"mclose mtight"},")"),(0,m.kt)("span",{parentName:"span",className:"mbin mtight"},"+"),(0,m.kt)("span",{parentName:"span",className:"mop mtight"},(0,m.kt)("span",{parentName:"span",className:"mtight"},"l"),(0,m.kt)("span",{parentName:"span",className:"mtight"},"o"),(0,m.kt)("span",{parentName:"span",className:"mtight",style:{marginRight:"0.01389em"}},"g")),(0,m.kt)("span",{parentName:"span",className:"mopen mtight"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"),(0,m.kt)("span",{parentName:"span",className:"mclose mtight"},")"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.52em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,m.kt)("p",null,"The Python code for this app has the form:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},'def main(inputs):\n    y = inputs[\'y\']\n    string1 = "y=" + str(y) + "=\\\\frac{x^2+f(x)+\\\\log(x)}{\\\\cos{x}}"\n    string2 = "y=" + str(y) + r"=\\frac{x^2+f(x)+\\log(x)}{\\cos{x}}"\n    return {"Regular String": string1, "Raw String": string2, "y":y}\n')),(0,m.kt)("p",null,"The following is the output editor text:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},'Equation output using regular string:\n{{ outputs["Regular String"] | katex }}\n\nEquation output using raw string:\n{{ outputs["Raw String"] | katex }}\n\nEquation output using output editor:\n{{ "y=" | katex }}{{ outputs.y | katex }}{{ "=\\\\frac{x^2+f(x)+\\\\log(x)}{\\\\cos(x)}" | katex }}\n')),(0,m.kt)("h2",{id:"equation-button"},"Equation button"),(0,m.kt)("p",null,"Another way to insert a latex equation that ",(0,m.kt)("em",{parentName:"p"},"does not change")," is to click on the ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"f"),(0,m.kt)("mi",{parentName:"msub"},"x"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f_x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1076em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"}))))))))))," button in the toolbar:"),(0,m.kt)("div",{style:{textAlign:"center"}},(0,m.kt)("p",null,(0,m.kt)("img",{alt:"img alt",src:t(7724).Z}))),(0,m.kt)("p",null,"Then, a popup will appear where you can write your latex expression. In this case, you can simply use ",(0,m.kt)("inlineCode",{parentName:"p"},"\\")," instead of ",(0,m.kt)("inlineCode",{parentName:"p"},"\\\\"),"."),(0,m.kt)("div",{style:{textAlign:"center"}},(0,m.kt)("p",null,(0,m.kt)("img",{alt:"img alt",src:t(1047).Z}))),(0,m.kt)("p",null,"Once your equation is done, click ",(0,m.kt)("strong",{parentName:"p"},"Save")," and a rendered version of the equation will appear."),(0,m.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,m.kt)("div",{parentName:"div",className:"admonition-heading"},(0,m.kt)("h5",{parentName:"div"},(0,m.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,m.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,m.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,m.kt)("div",{parentName:"div",className:"admonition-content"},(0,m.kt)("p",{parentName:"div"},"Once the equation is saved, it can ",(0,m.kt)("strong",{parentName:"p"},"not")," be edited. Therefore, if your equation is very complex, then it is strongly recommended to either write the latex expression down somewhere or to use the ",(0,m.kt)("inlineCode",{parentName:"p"},"| katex")," filter ",(0,m.kt)("a",{parentName:"p",href:"#using-katex-filter"},"described above"),"."))))}c.isMDXComponent=!0},7724:function(a,e,t){e.Z=t.p+"assets/images/fx_btn-31a6b6e3a1e8fd2ae802c3dd3ede0223.png"},1047:function(a,e){e.Z="data:image/png;base64,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"},7212:function(a,e,t){e.Z=t.p+"assets/images/katex_btn-f1ada8d50a0581ceb818b7b72a316c4a.png"}}]);