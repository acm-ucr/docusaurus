"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:4},o="Mapping and Filtering",p={unversionedId:"react/mapping-filtering",id:"react/mapping-filtering",title:"Mapping and Filtering",description:"If you have a list of data to render multiple times, you can use Javascript's map function to iterate through each data in an array or object. This prevents hard-coding data directly, and renders components more modularly (meaning we can add data without changing the code).",source:"@site/docs/react/mapping-filtering.md",sourceDirName:"react",slug:"/react/mapping-filtering",permalink:"/docusaurus/docs/react/mapping-filtering",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Props",permalink:"/docusaurus/docs/react/props"},next:{title:"React Hooks",permalink:"/docusaurus/docs/category/react-hooks"}},c={},l=[{value:"Filtering",id:"filtering",level:2}],s={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mapping-and-filtering"},"Mapping and Filtering"),(0,a.kt)("p",null,"If you have a list of data to render multiple times, you can use Javascript's ",(0,a.kt)("inlineCode",{parentName:"p"},"map")," function to iterate through each data in an array or object. This prevents hard-coding data directly, and renders components more modularly (meaning we can add data without changing the code)."),(0,a.kt)("h1",{id:"mapping"},"Mapping"),(0,a.kt)("p",null,"In the example below, we have a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"PRODUCE")," objects stored in the data folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/src/data/Produce.js"',title:'"/src/data/Produce.js"'},'export const PRODUCE = [\n    {\n        name: "Apple",\n        type: "Fruit",\n        price: 2,\n    },\n    {\n        name: "Lettuce",\n        type: "Vegetable",\n        price: 3,\n    },\n] \n')),(0,a.kt)("p",null,"You can iterate through each produce objects using the ",(0,a.kt)("inlineCode",{parentName:"p"},".map()")," function. In the example below, we iterate and render each element in ",(0,a.kt)("inlineCode",{parentName:"p"},"PRODUCE"),". The parameter of ",(0,a.kt)("inlineCode",{parentName:"p"},"map")," method is a callback function taking in ",(0,a.kt)("inlineCode",{parentName:"p"},"(element, index)"),". The function returns the code block displaying produce information. The parent tag of the map method must have a key attrbute."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/components/Grocery.jsx"',title:'"/src/components/Grocery.jsx"'},'import { PRODUCE } from "@/data/Produce.js";\n\nconst Grocery = () => {\n    return(\n        <>\n            {PRODUCE.map((produce, index) => (\n                <div key={index}>\n                    <p>Item: {produce.name}</p>\n                    <p>Price: {produce.price}</p>\n                </div>\n            ))}\n        </>\n    );\n}\n\nexport default Grocery;\n')),(0,a.kt)("h2",{id:"filtering"},"Filtering"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," method is similar to the ",(0,a.kt)("inlineCode",{parentName:"p"},"map")," method, however it will return a filtered list based on the given condition. The sample code below shows that ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," will return a list of fruits. In order to render the items of fruits, you will need to map through the filtered ",(0,a.kt)("inlineCode",{parentName:"p"},"PRODUCE")," list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/components/Grocery.jsx"',title:'"/src/components/Grocery.jsx"'},'const Grocery = () => {\n    return(\n        <>\n            {PRODUCE\n                .filter((produce) => produce.type === "Fruit")\n                .map((produce, index) => (\n                    <div key={index}>\n                        <p>Item: {produce.name}</p>\n                        <p>Price: {produce.price}</p>\n                    </div>\n            ))}\n        </>\n    );\n}\n')))}u.isMDXComponent=!0}}]);