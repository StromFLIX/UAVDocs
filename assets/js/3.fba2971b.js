(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{118:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),l=a(109),o=a(112),s=a(60),c=a.n(s);function i(e){var t=e.sidebar;return 0===t.items.length?null:r.a.createElement("div",{className:Object(l.a)(c.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:c.a.sidebarItemTitle},t.title),r.a.createElement("ul",{className:c.a.sidebarItemList},t.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},r.a.createElement(o.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))}))))}},119:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=n;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},120:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(112),o=a(3),s=a(109),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(23).a,theme:c};function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},g=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=u({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=u({},a,{backgroundColor:null}),r};function y(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var f=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?g(e.theme,e.language):void 0;return t.themeDict=a})),m(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=u({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),m(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var o=n?{display:"inline-block"}:{},s=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(s))}})),m(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,o=u({},y(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),m(this,"tokenize",(function(e,t,a,n){var r={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,o=0,s=[],c=[s];o>-1;){for(;(l=n[o]++)<r[o];){var i=void 0,m=t[o],u=a[o][l];if("string"==typeof u?(m=o>0?m:["plain"],i=u):(m=h(m,u.type),u.alias&&(m=h(m,u.alias)),i=u.content),"string"==typeof i){var g=i.split(p),y=g.length;s.push({types:m,content:g[0]});for(var f=1;f<y;f++)d(s),c.push(s=[]),s.push({types:m,content:g[f]})}else o++,t.push(m),a.push(i),n.push(0),r.push(i.length)}o--,t.pop(),a.pop(),n.pop(),r.pop()}return d(s),c}(void 0!==o?this.tokenize(t,n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component);var b=a(119),v=a.n(b),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},E=a(116),j=a(108),N=function(){var e=Object(j.useThemeConfig)().prism,t=Object(E.a)().isDarkTheme,a=e.theme||k,n=e.darkTheme||a;return t?n:a},T=a(110),O=a(57),x=a.n(O),w=/{([\d,-]+)}/,L=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},_=/(?:title=")(.*)(?:")/;function C(e){var t=e.children,a=e.className,l=e.metastring,c=Object(j.useThemeConfig)().prism,m=Object(n.useState)(!1),u=m[0],p=m[1],d=Object(n.useState)(!1),h=d[0],g=d[1];Object(n.useEffect)((function(){g(!0)}),[]);var y=Object(n.useRef)(null),b=[],k="",E=N(),O=Array.isArray(t)?t.join(""):t;if(l&&w.test(l)){var C=l.match(w)[1];b=v()(C).filter((function(e){return e>0}))}l&&_.test(l)&&(k=l.match(_)[1]);var P=a&&a.replace(/language-/,"");!P&&c.defaultLanguage&&(P=c.defaultLanguage);var B=O.replace(/\n$/,"");if(0===b.length&&void 0!==P){for(var D,S="",I=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return L(["js","jsBlock"]);case"jsx":case"tsx":return L(["js","jsBlock","jsx"]);case"html":return L(["js","jsBlock","html"]);case"python":case"py":return L(["python"]);default:return L()}}(P),A=O.replace(/\n$/,"").split("\n"),R=0;R<A.length;){var z=R+1,F=A[R].match(I);if(null!==F){switch(F.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":S+=z+",";break;case"highlight-start":D=z;break;case"highlight-end":S+=D+"-"+(z-1)+","}A.splice(R,1)}else R+=1}b=v()(S),B=A.join("\n")}var M=function(){!function(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch{}a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus()}(B),p(!0),setTimeout((function(){return p(!1)}),2e3)};return r.a.createElement(f,Object(o.a)({},i,{key:String(h),theme:E,code:B,language:P}),(function(e){var t,a=e.className,n=e.style,l=e.tokens,c=e.getLineProps,i=e.getTokenProps;return r.a.createElement("div",{className:x.a.codeBlockContainer},k&&r.a.createElement("div",{style:n,className:x.a.codeBlockTitle},k),r.a.createElement("div",{className:Object(s.a)(x.a.codeBlockContent,P)},r.a.createElement("div",{tabIndex:0,className:Object(s.a)(a,x.a.codeBlock,"thin-scrollbar",(t={},t[x.a.codeBlockWithTitle]=k,t))},r.a.createElement("div",{className:x.a.codeBlockLines,style:n},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=c({line:e,key:t});return b.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(o.a)({key:t},a),e.map((function(e,t){return r.a.createElement("span",Object(o.a)({key:t},i({token:e,key:t})))})))})))),r.a.createElement("button",{ref:y,type:"button","aria-label":Object(T.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(x.a.copyButton),onClick:M},u?r.a.createElement(T.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(T.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var P=a(7),B=(a(58),a(59)),D=a.n(B),S=function(e){return function(t){var a,n=t.id,l=Object(P.a)(t,["id"]),o=Object(j.useThemeConfig)().navbar.hideOnScroll;return n?r.a.createElement(e,l,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",(a={},a[D.a.enhancedAnchor]=!o,a)),id:n}),l.children,r.a.createElement("a",{className:"hash-link",href:"#"+n,title:Object(T.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,l)}},I={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(C,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(l.a,e)},pre:function(e){var t=e.children;return r.a.createElement(C,Object(n.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:S("h1"),h2:S("h2"),h3:S("h3"),h4:S("h4"),h5:S("h5"),h6:S("h6")};t.a=I},124:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(109),o=a(111),s=a(110),c=a(112),i=a(120),m=a(123),u=a(86),p=a.n(u),d=a(108);t.a=function(e){var t,a,n=(t=Object(d.usePluralForm)().selectMessage,function(e){var a=Math.ceil(e);return t(a,Object(s.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),u=e.children,h=e.frontMatter,g=e.metadata,y=e.truncated,f=e.isBlogPostPage,b=void 0!==f&&f,v=g.date,k=g.formattedDate,E=g.permalink,j=g.tags,N=g.readingTime,T=h.author,O=h.title,x=h.image,w=h.keywords,L=h.author_url||h.authorURL,_=h.author_title||h.authorTitle,C=h.author_image_url||h.authorImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{keywords:w,image:x}),r.a.createElement("article",{className:b?void 0:"margin-bottom--xl"},(a=b?"h1":"h2",r.a.createElement("header",null,r.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",p.a.blogPostTitle)},b?O:r.a.createElement(c.a,{to:E},O)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:v,className:p.a.blogPostDate},k,N&&r.a.createElement(r.a.Fragment,null," \xb7 ",n(N)))),r.a.createElement("div",{className:"avatar margin-vert--md"},C&&r.a.createElement(c.a,{className:"avatar__photo-link avatar__photo",href:L},r.a.createElement("img",{src:C,alt:T})),r.a.createElement("div",{className:"avatar__intro"},T&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement(c.a,{href:L},T)),r.a.createElement("small",{className:"avatar__subtitle"},_)))))),r.a.createElement("div",{className:"markdown"},r.a.createElement(o.a,{components:i.a},u)),(j.length>0||y)&&r.a.createElement("footer",{className:"row margin-vert--lg"},j.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),j.map((function(e){var t=e.label,a=e.permalink;return r.a.createElement(c.a,{key:a,className:"margin-horiz--sm",to:a},t)}))),y&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:g.permalink,"aria-label":"Read more about "+O},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);