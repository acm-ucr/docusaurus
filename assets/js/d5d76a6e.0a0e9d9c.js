"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:4},o="Pushing Changes",s={unversionedId:"git-version-control/push",id:"git-version-control/push",title:"Pushing Changes",description:"After the changes have been made, your changes need to be staged, then commited, and finally pushed to a branch.",source:"@site/docs/git-version-control/push.md",sourceDirName:"git-version-control",slug:"/git-version-control/push",permalink:"/docusaurus/docs/git-version-control/push",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Branches",permalink:"/docusaurus/docs/git-version-control/branches"},next:{title:"Pulling Changes",permalink:"/docusaurus/docs/git-version-control/pull"}},l={},c=[{value:"Staging Changes",id:"staging-changes",level:2},{value:"Add All Files (Recommended)",id:"add-all-files-recommended",level:3},{value:"Add Some Files",id:"add-some-files",level:3},{value:"Committing Changes",id:"committing-changes",level:2},{value:"Pushing to a Branch",id:"pushing-to-a-branch",level:2}],u={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pushing-changes"},"Pushing Changes"),(0,r.kt)("p",null,"After the changes have been made, your changes need to be staged, then commited, and finally pushed to a branch."),(0,r.kt)("h2",{id:"staging-changes"},"Staging Changes"),(0,r.kt)("p",null,"The primary command is ",(0,r.kt)("inlineCode",{parentName:"p"},"git add"),". It places the files in an intemediary stage, where they do not affect the git repository and currently lie in a staging area. They will not make any affects until they are committed."),(0,r.kt)("h3",{id:"add-all-files-recommended"},"Add All Files (Recommended)"),(0,r.kt)("p",null,"To add all files, you should use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git add .\n")),(0,r.kt)("p",null,"Where the ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is a regular expression indicating all files within the current working directory. It is recommended to add all files to prevent any build issues that may occur."),(0,r.kt)("h3",{id:"add-some-files"},"Add Some Files"),(0,r.kt)("p",null,"It is also possible to add files individually, however, this is not recommended since you may miss particular files. For example, if you have a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," that you need to stage, you can use the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git add package.json\n")),(0,r.kt)("h2",{id:"committing-changes"},"Committing Changes"),(0,r.kt)("p",null,"Once staged, you will need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"git commit"),' to commit the changes to the git repository. It is recommended to add a message flag to prevent complicated in-text editors. The message should indicate what changes were made. For example, if you worked on adding a new filter, then the message should indicate "added new filter" or something similar. The purpose is to indicate to the other developers, what changes were made.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "message here"\n')),(0,r.kt)("p",null,"Many times, there will be pre-commit hooks installed, which will run some checks prior to committing. If they are successful, then the changes will occur, otherwise it will send an error. Primarily for web applications, ",(0,r.kt)("a",{parentName:"p",href:"https://typicode.github.io/husky/"},"Husky")," will be used to run these pre-commit checks. The following shows a successful and failure message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Success message\n[acm-hydra/dev 53b10a4] add filter attribute\n1 file changed, 1 insertion(+)\n\n\n# Failure Message\nhusky - pre-commit hook exited with code 1 (error)\n")),(0,r.kt)("p",null,"If Husky fails, check the logs provided by Husky to see where the error lies. Once the changes are made, they have to be staged and committed again."),(0,r.kt)("h2",{id:"pushing-to-a-branch"},"Pushing to a Branch"),(0,r.kt)("p",null,"Once the changes have successfully been staged and committed, then you can push to a remote branch via ",(0,r.kt)("inlineCode",{parentName:"p"},"git push"),". Once you have created a branch, you can push via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git push origin branch_name\n")),(0,r.kt)("p",null,"For example, if your feature branch name is ",(0,r.kt)("inlineCode",{parentName:"p"},"acm-ucr/new_filter")," then the push command would look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git push origin acm-ucr/new_filter\n")),(0,r.kt)("p",null,"NOTE: it is not recommended to setup upstream origin or simply use ",(0,r.kt)("inlineCode",{parentName:"p"},"git push"),", there is ambiguity in terms of what branch you will be pushing too and can lead to further problems."),(0,r.kt)("p",null,"Once your changes are pushed, you will be able to create a pull request."))}h.isMDXComponent=!0}}]);