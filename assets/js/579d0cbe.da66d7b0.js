"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),y=i,f=p["".concat(s,".").concat(y)]||p[y]||d[y]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1},o="Utility classes",l={unversionedId:"tailwind/intro-to-utility-classes",id:"tailwind/intro-to-utility-classes",title:"Utility classes",description:"\ud83d\udca1 The Tailwind docs have excellent explanations and diagrams on each utility class.",source:"@site/docs/tailwind/intro-to-utility-classes.md",sourceDirName:"tailwind",slug:"/tailwind/intro-to-utility-classes",permalink:"/docusaurus/docs/tailwind/intro-to-utility-classes",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tailwind",permalink:"/docusaurus/docs/category/tailwind"},next:{title:"Flexbox",permalink:"/docusaurus/docs/tailwind/flexbox"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"utility-classes"},"Utility classes"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 The ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs"},"Tailwind docs")," have excellent explanations and diagrams on each utility class. ")),(0,i.kt)("p",null,"Tailwind CSS is a utility-first framework that provides low-level, reusable classes, each serving a specific design purpose. Utility classes follow the format ",(0,i.kt)("inlineCode",{parentName:"p"},"{property}-{modifier}"),". You apply them inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"className")," attribute within a JSX container. By combining these utility classes directly in HTML, you can build complex designs without writing custom CSS."))}d.isMDXComponent=!0}}]);