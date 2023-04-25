"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={slug:"introducing-llm-chain-v060",title:"Introducing LLM-chain v0.6.0: Powerful Templating and Improved Prompt System",authors:["whn"],tags:["llm-chain","update","large language models","rust","tera","templating","prompt system"]},l=void 0,i={permalink:"/blog/introducing-llm-chain-v060",editUrl:"https://github.com/sobelio/llm-chain/tree/main/blog/blog/2023-04-17/index.md",source:"@site/blog/2023-04-17/index.md",title:"Introducing LLM-chain v0.6.0: Powerful Templating and Improved Prompt System",description:"We are thrilled to announce the release of llm-chain v0.6.0, which introduces significant enhancements to our library. This update focuses on making the llm-chain more robust and versatile, allowing developers to build even more advanced applications with ease.",date:"2023-04-17T00:00:00.000Z",formattedDate:"April 17, 2023",tags:[{label:"llm-chain",permalink:"/blog/tags/llm-chain"},{label:"update",permalink:"/blog/tags/update"},{label:"large language models",permalink:"/blog/tags/large-language-models"},{label:"rust",permalink:"/blog/tags/rust"},{label:"tera",permalink:"/blog/tags/tera"},{label:"templating",permalink:"/blog/tags/templating"},{label:"prompt system",permalink:"/blog/tags/prompt-system"}],readingTime:1.695,hasTruncateMarker:!1,authors:[{name:"will rudenmalm",title:"making llm-chain",url:"https://github.com/williamhogman",imageURL:"https://github.com/williamhogman.png",key:"whn"}],frontMatter:{slug:"introducing-llm-chain-v060",title:"Introducing LLM-chain v0.6.0: Powerful Templating and Improved Prompt System",authors:["whn"],tags:["llm-chain","update","large language models","rust","tera","templating","prompt system"]},nextItem:{title:"Using ChatGPT in Rust with llm-chain",permalink:"/blog/using-chatgpt-in-rust"}},s={authorsImageUrls:[void 0]},p=[{value:"Major updates",id:"major-updates",level:3},{value:"1. The switch to the <code>tera</code> template language",id:"1-the-switch-to-the-tera-template-language",level:4},{value:"2. Improved prompt system",id:"2-improved-prompt-system",level:4},{value:"3. Updated LLaMA.cpp",id:"3-updated-llamacpp",level:4},{value:"Other improvements",id:"other-improvements",level:3},{value:"1. Safer error handling",id:"1-safer-error-handling",level:4},{value:"Time to move on from the old templating system",id:"time-to-move-on-from-the-old-templating-system",level:3}],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We are thrilled to announce the release of llm-chain v0.6.0, which introduces significant enhancements to our library. This update focuses on making the llm-chain more robust and versatile, allowing developers to build even more advanced applications with ease."),(0,r.kt)("h3",{id:"major-updates"},"Major updates"),(0,r.kt)("h4",{id:"1-the-switch-to-the-tera-template-language"},"1. The switch to the ",(0,r.kt)("inlineCode",{parentName:"h4"},"tera")," template language"),(0,r.kt)("p",null,"One of the most significant changes in this release is the introduction of the ",(0,r.kt)("inlineCode",{parentName:"p"},"tera")," template language. This powerful and flexible templating system enables developers to create dynamic and complex templates for their projects. The ",(0,r.kt)("inlineCode",{parentName:"p"},"tera")," language allows for more advanced control structures and filters, making it a substantial upgrade from the previous templating system."),(0,r.kt)("h4",{id:"2-improved-prompt-system"},"2. Improved prompt system"),(0,r.kt)("p",null,"Another notable update is the revamped prompt system. With llm-chain v0.6.0, the prompt system now supports both Chat and completion-style models. This improvement means developers no longer need to worry about whether they are using a completion or chat model when crafting prompts. This unified approach simplifies the development process and makes it easier to work with various types of language models."),(0,r.kt)("h4",{id:"3-updated-llamacpp"},"3. Updated LLaMA.cpp"),(0,r.kt)("p",null,"The latest version of LLaMA.cpp has been integrated into this release, ensuring better performance and stability for your projects."),(0,r.kt)("h3",{id:"other-improvements"},"Other improvements"),(0,r.kt)("h4",{id:"1-safer-error-handling"},"1. Safer error handling"),(0,r.kt)("p",null,"In addition to the major updates, llm-chain v0.6.0 also brings improvements to error handling. Templates now return ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," rather than panicking on errors, making it more convenient to handle any issues that may arise during development. Similarly, Executors also return ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," instead of panicking on errors, providing a more consistent and safer API."),(0,r.kt)("h3",{id:"time-to-move-on-from-the-old-templating-system"},"Time to move on from the old templating system"),(0,r.kt)("p",null,"With the introduction of the ",(0,r.kt)("inlineCode",{parentName:"p"},"tera")," template language, we strongly recommend moving away from the old templating system. This update provides a solid foundation for building even more advanced applications using the llm-chain library."),(0,r.kt)("p",null,"We hope you're as excited about these enhancements as we are! As always, we appreciate your feedback and support. If you have any questions or need help, please don't hesitate to reach out on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/kewN9Gtjt2"},"Discord")," !"),(0,r.kt)("p",null,"Happy coding! \ud83d\ude80"))}u.isMDXComponent=!0}}]);