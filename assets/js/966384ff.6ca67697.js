"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[1619],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return u}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),l=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=l(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(t),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return t?n.createElement(h,i(i({ref:a},m),{},{components:t})):n.createElement(h,i({ref:a},m))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8065:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return c}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],p={sidebar_label:"Overview",sidebar_position:1},s="Overview",l={unversionedId:"maps/overview",id:"maps/overview",title:"Overview",description:"MecSimCalc supports the displaying of maps and makes working with geospatial data easy.",source:"@site/docs/maps/overview.md",sourceDirName:"maps",slug:"/maps/overview",permalink:"/maps/overview",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Large Files",permalink:"/files/large-files"},next:{title:"Example 1",permalink:"/maps/example-1"}},m=[{value:"GeoPandas",id:"geopandas",children:[],level:2},{value:"Folium",id:"folium",children:[],level:2}],d={toc:m};function c(e){var a=e.components,p=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,p,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MecSimCalc")," supports the displaying of maps and makes working with geospatial data easy.\nTwo popular Python libraries used in working with maps are ",(0,o.kt)("a",{parentName:"p",href:"#geopandas"},"GeoPandas")," and ",(0,o.kt)("a",{parentName:"p",href:"#folium"},"Folium"),"."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img alt",src:t(2329).Z}),"\n",(0,o.kt)("img",{alt:"img alt",src:t(1582).Z}))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Interactive")," map means the ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"user"))," can interact with the map through dragging, zooming, panning, hovering, and clicking actions.",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Static")," map means the map is an image that can not be interacted with."))),(0,o.kt)("h2",{id:"geopandas"},(0,o.kt)("a",{parentName:"h2",href:"https://geopandas.org/"},"GeoPandas")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://geopandas.org/"},"GeoPandas")," makes working with geospatial data in Python easier. GeoPandas extends the datatypes used by ",(0,o.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/docs/"},"Pandas")," to allow spatial operations on geometric types. Geometric operations are performed by ",(0,o.kt)("a",{parentName:"p",href:"https://shapely.readthedocs.io"},"shapely"),". GeoPandas further depends on ",(0,o.kt)("a",{parentName:"p",href:"https://fiona.readthedocs.io/"},"fiona")," for file access and ",(0,o.kt)("a",{parentName:"p",href:"https://matplotlib.org/"},"matplotlib")," for plotting.")),(0,o.kt)("p",null,"GeoPandas should be used when you either have a lot of data, have data structured as a table, or need to manipulate geospatial data. GeoPanda's ",(0,o.kt)("inlineCode",{parentName:"p"},"GeoDataFrame")," is an extension of Panda's ",(0,o.kt)("inlineCode",{parentName:"p"},"DataFrame"),", making it easy to manipulate large amounts of geospatial data."),(0,o.kt)("p",null,"Once the geospatial data to be visualized is stored as a ",(0,o.kt)("inlineCode",{parentName:"p"},"GeoDataFrame"),", it can easily be exported as an interactive Folium map or as a static Matplotlib plot."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All of Panda's ",(0,o.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html"},(0,o.kt)("inlineCode",{parentName:"a"},"DataFrame"))," methods can similarly be applied to GeoPanda's ",(0,o.kt)("a",{parentName:"p",href:"https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.html"},(0,o.kt)("inlineCode",{parentName:"a"},"GeoDataFrame")),".\nYou can think of ",(0,o.kt)("inlineCode",{parentName:"p"},"GeoDataFrame")," as a Panda's ",(0,o.kt)("inlineCode",{parentName:"p"},"DataFrame")," with added functionality for geospatial data."))),(0,o.kt)("p",null,"See GeoPandas documentation ",(0,o.kt)("a",{parentName:"p",href:"https://geopandas.org/en/stable/docs/user_guide.html"},"here"),"."),(0,o.kt)("p",null,"For detailed examples, see ",(0,o.kt)("a",{parentName:"p",href:"example-1"},"example 1")," and ",(0,o.kt)("a",{parentName:"p",href:"example-2"},"example 2"),"."),(0,o.kt)("h2",{id:"folium"},(0,o.kt)("a",{parentName:"h2",href:"https://python-visualization.github.io/folium/"},"Folium")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://python-visualization.github.io/folium/"},"Folium")," builds on the data wrangling strengths of the Python ecosystem and the mapping strengths of the ",(0,o.kt)("a",{parentName:"p",href:"https://leafletjs.com/"},"Leaflet.js")," library. Folium makes it easy to visualize data that\u2019s been manipulated in Python on an interactive Leaflet map. It enables both the binding of data to a map for choropleth visualizations as well as passing rich vector/raster/HTML visualizations as markers on the map.")),(0,o.kt)("p",null,"Folium is an interactive mapping library that displays a map that the ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"user"))," can drag, zoom, pan, click, and hover on. It also allows the drawing of shapes, such as lines, markers, and circles.\nFolium lacks the data manipulation of GeoPanda's ",(0,o.kt)("inlineCode",{parentName:"p"},"GeoDataFrame"),", and therefore, should only be used independently when visualizing very few data points. It is possible to prepare your data as a ",(0,o.kt)("inlineCode",{parentName:"p"},"GeoDataFrame"),", and then export it as a Folium map, as demonstrated in the examples."),(0,o.kt)("p",null,"See Folium documentation ",(0,o.kt)("a",{parentName:"p",href:"https://python-visualization.github.io/folium/modules.html"},"here"),"."),(0,o.kt)("p",null,"For a detailed example, see ",(0,o.kt)("a",{parentName:"p",href:"example-3"},"example 3"),"."))}c.isMDXComponent=!0},2329:function(e,a,t){a.Z=t.p+"assets/images/ex3_map-240e68ebb93d0434b8b1c3e146a0eafd.png"},1582:function(e,a,t){a.Z=t.p+"assets/images/map_1-5e214e88fdffc84886eed851629ce19a.png"}}]);