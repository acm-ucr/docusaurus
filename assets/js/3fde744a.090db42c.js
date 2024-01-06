"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8394],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>b});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(b,c(c({ref:n},l),{},{components:t})):r.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3835:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:1},c="Components",i={unversionedId:"react/components",id:"react/components",title:"Components",description:"React components are code blocks representing UI elements. Every website has complex UI that can be broken down into smaller and reusable components. These components could be pages, buttons, navigation bar, etc.",source:"@site/docs/react/components.md",sourceDirName:"react",slug:"/react/components",permalink:"/docusaurus/docs/react/components",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/docusaurus/docs/category/react"},next:{title:"Importing and Exporting",permalink:"/docusaurus/docs/react/importing-exporting"}},s={},p=[{value:"Creating a Component",id:"creating-a-component",level:2}],l={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"components"},"Components"),(0,o.kt)("p",null,"React components are code blocks representing UI elements. Every website has complex UI that can be broken down into smaller and reusable components. These components could be pages, buttons, navigation bar, etc."),(0,o.kt)("h2",{id:"creating-a-component"},"Creating a Component"),(0,o.kt)("p",null,"React components are written in ",(0,o.kt)("inlineCode",{parentName:"p"},"JSX")," files. ACM @ UCR's naming convention requires ",(0,o.kt)("inlineCode",{parentName:"p"},"JSX")," files to be in Pascal case. Components should also be named one word describing the component."),(0,o.kt)("p",null,"These component files are typically placed in ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/components")," in an ACM project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"acm-ucr-website # root folder\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 app\n    \u251c\u2500\u2500 components\n    \u2502   \u2514\u2500\u2500 Component.jsx\n    \u2514\u2500\u2500 data\n")),(0,o.kt)("p",null,"React components are written similarly to Javascript functions. Every component must have exactly one parent tag to nest all ",(0,o.kt)("inlineCode",{parentName:"p"},"HTML"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"JSX")," tags. The ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," holds any JSX elements. The component should be exported in order to use the component elsewhere in the code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/components/Component.jsx"',title:'"/src/components/Component.jsx"'},"const First = () => {\n    return (\n        <div>\n            Hello World\n        </div>\n    );\n}\n\nexport default First;\n")))}u.isMDXComponent=!0}}]);