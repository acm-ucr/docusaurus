"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2865],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>b});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(o),m=r,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return o?n.createElement(b,l(l({ref:t},d),{},{components:o})):n.createElement(b,l({ref:t},d))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4227:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:3},l="Colors",i={unversionedId:"tailwind/colors",id:"tailwind/colors",title:"Colors",description:"\ud83d\udca1 You can find color theme styles in the repo's tailwind.config.js file",source:"@site/docs/tailwind/colors.md",sourceDirName:"tailwind",slug:"/tailwind/colors",permalink:"/docusaurus/docs/tailwind/colors",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Flexbox",permalink:"/docusaurus/docs/tailwind/flexbox"},next:{title:"Tailwind Grid",permalink:"/docusaurus/docs/tailwind/grid"}},c={},s=[{value:"Solid colors",id:"solid-colors",level:2},{value:"Gradient colors",id:"gradient-colors",level:2},{value:"Background",id:"background",level:3},{value:"Text",id:"text",level:3}],d={toc:s},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"colors"},"Colors"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 You can find color theme styles in the repo's ",(0,r.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u2757 Do not use default Tailwind color styles like ",(0,r.kt)("inlineCode",{parentName:"p"},"red-500")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"black"),". always use the colors defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"tailwind.config.js"))),(0,r.kt)("p",null,"Every ACM website has a personal Tailwind theme in ",(0,r.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," based on its design doc that has custom colors. This is to avoid hardcoded and inconsistent color usage."),(0,r.kt)("h2",{id:"solid-colors"},"Solid colors"),(0,r.kt)("p",null,"The color style names are prefaced by the name of the website (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"acm-blue-100"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hackathon-red"),", etc.)."),(0,r.kt)("p",null,"You can directly attach these color styles to Tailwind utility classes."),(0,r.kt)("p",null,"In the R-Tools repo, for example, you could color the text black with ",(0,r.kt)("inlineCode",{parentName:"p"},"text-rtools-black")," and the background teal with ",(0,r.kt)("inlineCode",{parentName:"p"},"bg-rtools-teal-100"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<button className="text-rtools-black bg-rtools-teal-100 px-12 py-1 border border-solid border-black rounded-full">\n  JOIN US\n</button>\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:o(9425).Z,width:"360",height:"112"})),(0,r.kt)("h2",{id:"gradient-colors"},"Gradient colors"),(0,r.kt)("h3",{id:"background"},"Background"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1  For more color gradient variations see the ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/gradient-color-stops"},"Tailwind docs"))),(0,r.kt)("p",null,"To add a left-to-right background gradient, apply the ",(0,r.kt)("inlineCode",{parentName:"p"},"bg-gradient-to-r")," class, pick the left color with ",(0,r.kt)("inlineCode",{parentName:"p"},"from-{color}")," and the right color with ",(0,r.kt)("inlineCode",{parentName:"p"},"to-{color}"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<button className="bg-gradient-to-r from-rtools-teal-100 to-rtools-purple-200 px-12 py-1 border border-solid border-black rounded-full">\n  JOIN US\n</button>\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Join us button with gradient",src:o(1106).Z,width:"396",height:"126"})),(0,r.kt)("h3",{id:"text"},"Text"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1  Gradient text ",(0,r.kt)("a",{parentName:"p",href:"https://design2tailwind.com/blog/tailwindcss-gradient-text/"},"full tutorial"))),(0,r.kt)("p",null,"To turn the background gradient from above into text gradient, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"text-transparent")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bg-clip-text")," classes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<button className="text-transparent bg-clip-text bg-gradient-to-r bg-gradient-to-r from-rtools-teal-100 to-rtools-purple-200 px-12 py-1 border border-solid border-black rounded-full">\n  JOIN US\n</button>\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:o(2965).Z,width:"962",height:"259"})))}u.isMDXComponent=!0},2965:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Screenshot_2023-12-25_at_20.46.38-removebg-preview-3a02d6cc0371acc4dcaa91ed531a95c4.png"},9425:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/join-us-button-color-f8797f0f5491e3165aa7461cd209e65f.png"},1106:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/join-us-button-gradient-c836c2acae8cbcc3fc0ce47c4d444c8e.png"}}]);