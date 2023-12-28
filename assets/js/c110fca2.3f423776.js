"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[355],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),k=i,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=k;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},8438:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:2},o="Link",l={unversionedId:"nextjs/next-link",id:"nextjs/next-link",title:"Link",description:"When linking to other pages, sections or external sites, a link tag is required. Next.js provides a ` component that we can use that extends off of the traditional  tag. As a result, we do not need to use  tags at all. href` is a required attribute is required that will specify where the link will take the user.",source:"@site/docs/nextjs/next-link.md",sourceDirName:"nextjs",slug:"/nextjs/next-link",permalink:"/docusaurus/docs/nextjs/next-link",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Next.js",permalink:"/docusaurus/docs/nextjs/"},next:{title:"Image",permalink:"/docusaurus/docs/nextjs/next-image"}},s={},u=[{value:"Using <code>&lt;Link&gt;</code>",id:"using-link",level:2},{value:"Internal Routes",id:"internal-routes",level:3},{value:"External Routes",id:"external-routes",level:3},{value:"Opening the Link in a New Tab",id:"opening-the-link-in-a-new-tab",level:3},{value:"Applying styling",id:"applying-styling",level:3}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"link"},"Link"),(0,i.kt)("p",null,"When linking to other pages, sections or external sites, a link tag is required. Next.js provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"<Link>")," component that we can use that extends off of the traditional ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," tag. As a result, we do not need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," tags at all. ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," is a required attribute is required that will specify where the link will take the user."),(0,i.kt)("h2",{id:"using-link"},"Using ",(0,i.kt)("inlineCode",{parentName:"h2"},"<Link>")),(0,i.kt)("h3",{id:"internal-routes"},"Internal Routes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import Link from "next/link";\n\nconst Component = () => {\n  return (\n    <>\n      <Link href="/dashboard">Dashboard</Link>\n    </>\n  );\n};\n')),(0,i.kt)("h3",{id:"external-routes"},"External Routes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import Link from "next/link";\n\nconst Component = () => {\n  return (\n    <>\n      <Link href="https://acm.cs.ucr.edu/">ACM Website</Link>\n    </>\n  );\n};\n')),(0,i.kt)("h3",{id:"opening-the-link-in-a-new-tab"},"Opening the Link in a New Tab"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import Link from "next/link";\n\nconst Component = () => {\n  return (\n    <>\n      <Link href="https://acm.cs.ucr.edu/" target="_blank">\n        ACM Website\n      </Link>\n    </>\n  );\n};\n')),(0,i.kt)("h3",{id:"applying-styling"},"Applying styling"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import Link from "next/link";\n\nconst Component = () => {\n  return (\n    <>\n      <Link href="https://acm.cs.ucr.edu/" className="bg-black text-white">\n        ACM Website\n      </Link>\n    </>\n  );\n};\n')))}d.isMDXComponent=!0}}]);