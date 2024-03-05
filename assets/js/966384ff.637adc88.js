"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[1619],{7078:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(5893),n=t(1151);const i={sidebar_label:"Overview",sidebar_position:1},o="Overview",r={id:"maps/overview",title:"Overview",description:"MecSimCalc supports the displaying of maps and makes working with geospatial data easy.",source:"@site/docs/maps/overview.md",sourceDirName:"maps",slug:"/maps/overview",permalink:"/maps/overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Large Files",permalink:"/files/large-files"},next:{title:"Example 1",permalink:"/maps/example-1"}},d={},l=[{value:"GeoPandas",id:"geopandas",level:2},{value:"Folium",id:"folium",level:2}];function h(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"MecSimCalc"})," supports the displaying of maps and makes working with geospatial data easy.\nTwo popular Python libraries used in working with maps are ",(0,s.jsx)(a.a,{href:"#geopandas",children:"GeoPandas"})," and ",(0,s.jsx)(a.a,{href:"#folium",children:"Folium"}),"."]}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.img,{alt:"img alt",src:t(4135).Z+"",width:"1006",height:"605"}),"\n",(0,s.jsx)(a.img,{alt:"img alt",src:t(7901).Z+"",width:"466",height:"428"})]})}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Interactive"})," map means the ",(0,s.jsx)(a.em,{children:(0,s.jsx)(a.strong,{children:"user"})})," can interact with the map through dragging, zooming, panning, hovering, and clicking actions.",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(a.strong,{children:"Static"})," map means the map is an image that can not be interacted with."]})}),"\n",(0,s.jsx)(a.h2,{id:"geopandas",children:(0,s.jsx)(a.a,{href:"https://geopandas.org/",children:"GeoPandas"})}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"https://geopandas.org/",children:"GeoPandas"})," makes working with geospatial data in Python easier. GeoPandas extends the datatypes used by ",(0,s.jsx)(a.a,{href:"https://pandas.pydata.org/docs/",children:"Pandas"})," to allow spatial operations on geometric types. Geometric operations are performed by ",(0,s.jsx)(a.a,{href:"https://shapely.readthedocs.io",children:"shapely"}),". GeoPandas further depends on ",(0,s.jsx)(a.a,{href:"https://fiona.readthedocs.io/",children:"fiona"})," for file access and ",(0,s.jsx)(a.a,{href:"https://matplotlib.org/",children:"matplotlib"})," for plotting."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["GeoPandas should be used when you either have a lot of data, have data structured as a table, or need to manipulate geospatial data. GeoPanda's ",(0,s.jsx)(a.code,{children:"GeoDataFrame"})," is an extension of Panda's ",(0,s.jsx)(a.code,{children:"DataFrame"}),", making it easy to manipulate large amounts of geospatial data."]}),"\n",(0,s.jsxs)(a.p,{children:["Once the geospatial data to be visualized is stored as a ",(0,s.jsx)(a.code,{children:"GeoDataFrame"}),", it can easily be exported as an interactive Folium map or as a static Matplotlib plot."]}),"\n",(0,s.jsx)(a.admonition,{type:"tip",children:(0,s.jsxs)(a.p,{children:["All of Panda's ",(0,s.jsx)(a.a,{href:"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html",children:(0,s.jsx)(a.code,{children:"DataFrame"})})," methods can similarly be applied to GeoPanda's ",(0,s.jsx)(a.a,{href:"https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.html",children:(0,s.jsx)(a.code,{children:"GeoDataFrame"})}),".\nYou can think of ",(0,s.jsx)(a.code,{children:"GeoDataFrame"})," as a Panda's ",(0,s.jsx)(a.code,{children:"DataFrame"})," with added functionality for geospatial data."]})}),"\n",(0,s.jsxs)(a.p,{children:["See GeoPandas documentation ",(0,s.jsx)(a.a,{href:"https://geopandas.org/en/stable/docs/user_guide.html",children:"here"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["For detailed examples, see ",(0,s.jsx)(a.a,{href:"example-1",children:"example 1"})," and ",(0,s.jsx)(a.a,{href:"example-2",children:"example 2"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"folium",children:(0,s.jsx)(a.a,{href:"https://python-visualization.github.io/folium/",children:"Folium"})}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"https://python-visualization.github.io/folium/",children:"Folium"})," builds on the data wrangling strengths of the Python ecosystem and the mapping strengths of the ",(0,s.jsx)(a.a,{href:"https://leafletjs.com/",children:"Leaflet.js"})," library. Folium makes it easy to visualize data that\u2019s been manipulated in Python on an interactive Leaflet map. It enables both the binding of data to a map for choropleth visualizations as well as passing rich vector/raster/HTML visualizations as markers on the map."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["Folium is an interactive mapping library that displays a map that the ",(0,s.jsx)(a.em,{children:(0,s.jsx)(a.strong,{children:"user"})})," can drag, zoom, pan, click, and hover on. It also allows the drawing of shapes, such as lines, markers, and circles.\nFolium lacks the data manipulation of GeoPanda's ",(0,s.jsx)(a.code,{children:"GeoDataFrame"}),", and therefore, should only be used independently when visualizing very few data points. It is possible to prepare your data as a ",(0,s.jsx)(a.code,{children:"GeoDataFrame"}),", and then export it as a Folium map, as demonstrated in the examples."]}),"\n",(0,s.jsxs)(a.p,{children:["See Folium documentation ",(0,s.jsx)(a.a,{href:"https://python-visualization.github.io/folium/modules.html",children:"here"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["For a detailed example, see ",(0,s.jsx)(a.a,{href:"example-3",children:"example 3"}),"."]})]})}function c(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4135:(e,a,t)=>{t.d(a,{Z:()=>s});const s=t.p+"assets/images/ex3_map-240e68ebb93d0434b8b1c3e146a0eafd.png"},7901:(e,a,t)=>{t.d(a,{Z:()=>s});const s=t.p+"assets/images/map_1-5e214e88fdffc84886eed851629ce19a.png"},1151:(e,a,t)=>{t.d(a,{Z:()=>r,a:()=>o});var s=t(7294);const n={},i=s.createContext(n);function o(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);