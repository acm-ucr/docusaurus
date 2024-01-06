"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2},o="Flexbox",l={unversionedId:"tailwind/flexbox",id:"tailwind/flexbox",title:"Flexbox",description:"Centering a child div inside parent div using Flexbox",source:"@site/docs/tailwind/flexbox.md",sourceDirName:"tailwind",slug:"/tailwind/flexbox",permalink:"/docusaurus/docs/tailwind/flexbox",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Utility classes",permalink:"/docusaurus/docs/tailwind/intro-to-utility-classes"},next:{title:"Colors",permalink:"/docusaurus/docs/tailwind/colors"}},s={},d=[{value:"Centering a child div inside parent div using Flexbox",id:"centering-a-child-div-inside-parent-div-using-flexbox",level:2},{value:"Adding spacing around a container",id:"adding-spacing-around-a-container",level:2},{value:"Nesting containers inside each other",id:"nesting-containers-inside-each-other",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flexbox"},"Flexbox"),(0,i.kt)("h2",{id:"centering-a-child-div-inside-parent-div-using-flexbox"},"Centering a child div inside parent div using Flexbox"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 Flexbox in Tailwind ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/flex"},"explanation + visualization"))),(0,i.kt)("p",null,"Here is how you would add utility classes to a ",(0,i.kt)("strong",{parentName:"p"},"parent div")," to center its ",(0,i.kt)("strong",{parentName:"p"},"child div")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div className="flex items-center justify-center">\n  <div>child container</div>\n</div>\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"flex")," class applies flexbox to the container. Flexbox allows containers to stretch and change order and orientation of their child containers. See ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/flex"},"this link")," for a visualization of flexbox in Tailwind. The other two classes ",(0,i.kt)("strong",{parentName:"p"},"only work when flex is applied"),". "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"items-center")," centers the child div within the parent div ",(0,i.kt)("strong",{parentName:"p"},"on its cross axis"),". By default, flexbox applies ",(0,i.kt)("inlineCode",{parentName:"p"},"flex-row")," (as opposed to ",(0,i.kt)("inlineCode",{parentName:"p"},"flex-col"),", More on ",(0,i.kt)("a",{parentName:"p",href:"#nesting-containers-inside-each-other"},"flex-row and flex-col")," later). the ",(0,i.kt)("inlineCode",{parentName:"p"},"flex-row")," axes look like this. "),(0,i.kt)("p",null," ",(0,i.kt)("img",{alt:"Cross axis and main axis",src:n(26).Z,width:"880",height:"462"})),(0,i.kt)("p",null,"As you can see, ",(0,i.kt)("inlineCode",{parentName:"p"},"items-center")," centers on the cross-axis, so the child is centered ",(0,i.kt)("strong",{parentName:"p"},"vertically"),"."),(0,i.kt)("p",null,"  ",(0,i.kt)("inlineCode",{parentName:"p"},"justify-center")," centers the child div within the parent div ",(0,i.kt)("strong",{parentName:"p"},"on its main axis"),". The parent is ",(0,i.kt)("inlineCode",{parentName:"p"},"flex-row")," and not ",(0,i.kt)("inlineCode",{parentName:"p"},"flex-col")," (",(0,i.kt)("a",{parentName:"p",href:"#nesting-containers-inside-each-other"},"difference"),"), so the child is centered horizontally. "),(0,i.kt)("h2",{id:"adding-spacing-around-a-container"},"Adding spacing around a container"),(0,i.kt)("p",null,"For the most part, use Flexbox instead of margins and paddings spacing elements. Choose margins and paddings for basic spacing needs within or around elements, ideal for simpler layout adjustments."),(0,i.kt)("p",null,"If you need a button to have more space around its inner text, for example, you can add padding around the text like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button className="px-12 py-1 border border-solid border-black rounded-full">\n  JOIN US\n</button>\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Join us button",src:n(3022).Z,width:"406",height:"146"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"px-12")," class adds horizontal padding and the ",(0,i.kt)("inlineCode",{parentName:"p"},"py-1")," class adds vertical padding."),(0,i.kt)("h2",{id:"nesting-containers-inside-each-other"},"Nesting containers inside each other"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 Difference between ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/flex-direction"},"flex-col and flex-row"))),(0,i.kt)("p",null,"Flexbox can organize align child containers on top of each other (",(0,i.kt)("inlineCode",{parentName:"p"},"flex-col"),") or next to each other (applied by default or with ",(0,i.kt)("inlineCode",{parentName:"p"},"flex-row"),")."),(0,i.kt)("p",null,"You can nest Flexbox containers to create more dynamic layouts."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'import { FaDiscord } from "react-icons/fa6";\nimport { IoIosMail } from "react-icons/io";\n\n<div className="flex flex-col p-2 rounded-lg border border-solid border-black">\n  <div>Staff Member</div>\n  <div className="flex gap-1 justify-center">\n    <button className="py-1 px-4 border border-solid border-black rounded-full">discord</button>\n    <button className="py-1 px-4 border border-solid border-black rounded-full">instagram</button>\n  </div>\n</div>\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staff member container",src:n(4749).Z,width:"536",height:"236"}),"\nNotice how there is an outer ",(0,i.kt)("inlineCode",{parentName:"p"},"flex-col")," container that only applies flex to its direct children and displays a column of the name and the group of buttons. The inner ",(0,i.kt)("inlineCode",{parentName:"p"},"flex-row")," container (same thing as omitting ",(0,i.kt)("inlineCode",{parentName:"p"},"flex-row"),") only applies flex to its direct children and displays a row of two buttons. See ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/flex-direction"},"here")," a visualization of flex-row and flex-col"))}u.isMDXComponent=!0},26:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fsln7je4ax7ft3er28hh-4af75fbf4625a4863f0f5c24be9629e1.png"},3022:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/join-us-button-e7e74465fb9b81871cced635664185e3.png"},4749:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/staff-member-component-e1d4269d41eea256e5b54ab9eabfeb3c.png"}}]);