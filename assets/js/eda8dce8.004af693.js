"use strict";(self.webpackChunkocs_docs=self.webpackChunkocs_docs||[]).push([[6260],{9613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,v=d["".concat(o,".").concat(f)]||d[f]||m[f]||l;return n?a.createElement(v,i(i({ref:t},s),{},{components:n})):a.createElement(v,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5632:function(e,t,n){n.d(t,{Z:function(){return ne}});var a=n(9496),r=n(9186),l=n(1626),i=n(5440),c=n(7520),o=n(670),u=n(7499),s="collapseSidebarButton_SgP0",m="collapseSidebarButtonIcon_puW7";function d(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",s),onClick:t},a.createElement(o.Z,{className:m}))}var f=n(3105),v=n(3482),p=n(8353),b=n(5443),h=n(3010),g=n(9523),k=n(8961),y=n(4639),E=n(5170),_=Symbol("EmptyContext"),C=a.createContext(_);function x(e){var t=e.children,n=(0,a.useState)(null),r=n[0],l=n[1],i=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return a.createElement(C.Provider,{value:i},t)}var L=n(6874),N=n(5088),O=["item","onItemClick","activePath","level","index"];function Z(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function S(e){var t=e.item,n=e.onItemClick,r=e.activePath,c=e.level,o=e.index,u=(0,h.Z)(e,O),s=t.items,m=t.label,d=t.collapsible,f=t.className,v=t.href,x=function(e){var t=(0,N.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,k.Wl)(e):void 0}),[e,t])}(t),S=(0,k._F)(t,r),I=(0,y.Mg)(v,r),H=(0,E.u)({initialState:function(){return!!d&&(!S&&t.collapsed)}}),w=H.collapsed,P=H.setCollapsed;!function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,g.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:S,collapsed:w,setCollapsed:P});var T=function(){var e=(0,a.useContext)(C);if(e===_)throw new g.i6("DocSidebarItemsExpandedStateProvider");return e}(),j=T.expandedItem,A=T.setExpandedItem;function M(e){void 0===e&&(e=!w),A(e?null:o),P(e)}var D=(0,i.L)().docs.sidebar.autoCollapseCategories;return(0,a.useEffect)((function(){d&&j&&j!==o&&D&&P(!0)}),[d,j,o,P,D]),a.createElement("li",{className:(0,l.Z)(p.k.docs.docSidebarItemCategory,p.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":w},f)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":I})},a.createElement(L.Z,(0,b.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":d,"menu__link--sublist-caret":!v&&d,"menu__link--active":S}),onClick:d?function(e){null==n||n(t),v?M(!1):(e.preventDefault(),M())}:function(){null==n||n(t)},"aria-current":I?"page":void 0,"aria-expanded":d?!w:void 0,href:d?null!=x?x:"#":x},u),m),v&&d&&a.createElement(Z,{categoryLabel:m,onClick:function(e){e.preventDefault(),M()}})),a.createElement(E.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:w},a.createElement(B,{items:s,tabIndex:w?-1:0,onItemClick:n,activePath:r,level:c+1})))}var I=n(3759),H=n(7702),w="menuExternalLink_Gz2z",P=["item","onItemClick","activePath","level","index"];function T(e){var t=e.item,n=e.onItemClick,r=e.activePath,i=e.level,c=(e.index,(0,h.Z)(e,P)),o=t.href,u=t.label,s=t.className,m=(0,k._F)(t,r),d=(0,I.Z)(o);return a.createElement("li",{className:(0,l.Z)(p.k.docs.docSidebarItemLink,p.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",s),key:u},a.createElement(L.Z,(0,b.Z)({className:(0,l.Z)("menu__link",!d&&w,{"menu__link--active":m}),"aria-current":m?"page":void 0,to:o},d&&{onClick:n?function(){return n(t)}:void 0},c),u,!d&&a.createElement(H.Z,null)))}var j="menuHtmlItem_6ufC";function A(e){var t=e.item,n=e.level,r=e.index,i=t.value,c=t.defaultStyle,o=t.className;return a.createElement("li",{className:(0,l.Z)(p.k.docs.docSidebarItemLink,p.k.docs.docSidebarItemLinkLevel(n),c&&j+" menu__list-item",o),key:r,dangerouslySetInnerHTML:{__html:i}})}var M=["item"];function D(e){var t=e.item,n=(0,h.Z)(e,M);switch(t.type){case"category":return a.createElement(S,(0,b.Z)({item:t},n));case"html":return a.createElement(A,(0,b.Z)({item:t},n));default:return a.createElement(T,(0,b.Z)({item:t},n))}}var R=["items"];function z(e){var t=e.items,n=(0,h.Z)(e,R);return a.createElement(x,null,t.map((function(e,t){return a.createElement(D,(0,b.Z)({key:t,item:e,index:t},n))})))}var B=(0,a.memo)(z),F="menu_bfhX",W="menuWithAnnouncementBar_K3kX";function X(e){var t=e.path,n=e.sidebar,r=e.className,i=function(){var e=(0,f.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,v.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",F,i&&W,r)},a.createElement("ul",{className:(0,l.Z)(p.k.docs.docSidebarMenu,"menu__list")},a.createElement(B,{items:n,activePath:t,level:1})))}var q="sidebar_EO9P",Y="sidebarWithHideableNavbar_YeuH",U="sidebarHidden_EYBU",G="sidebarLogo_u57g";function K(e){var t=e.path,n=e.sidebar,r=e.onCollapse,o=e.isHidden,u=(0,i.L)(),s=u.navbar.hideOnScroll,m=u.docs.sidebar.hideable;return a.createElement("div",{className:(0,l.Z)(q,s&&Y,o&&U)},s&&a.createElement(c.Z,{tabIndex:-1,className:G}),a.createElement(X,{path:t,sidebar:n}),m&&a.createElement(d,{onClick:r}))}var V=a.memo(K),J=n(9958),Q=n(2960),$=function(e){var t=e.sidebar,n=e.path,r=(0,J.e)();return a.createElement("ul",{className:(0,l.Z)(p.k.docs.docSidebarMenu,"menu__list")},a.createElement(B,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function ee(e){return a.createElement(Q.Zo,{component:$,props:e})}var te=a.memo(ee);function ne(e){var t=(0,r.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(V,e),l&&a.createElement(te,e))}},670:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(5443),r=n(9496);function l(e){return r.createElement("svg",(0,a.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},236:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(5443),r=n(3010),l=n(9496);function i(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var c=l.memo(i),o=["parentIndex"];function u(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,o);n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}var m=n(5440);function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function f(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function v(){var e=(0,l.useRef)(0),t=(0,m.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function p(e){var t=(0,l.useRef)(void 0),n=v();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),o=f(c,{anchorTopOffset:n.current}),u=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}var b=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,i=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,f=e.linkActiveClassName,v=void 0===f?void 0:f,h=e.minHeadingLevel,g=e.maxHeadingLevel,k=(0,r.Z)(e,b),y=(0,m.L)(),E=null!=h?h:y.tableOfContents.minHeadingLevel,_=null!=g?g:y.tableOfContents.maxHeadingLevel,C=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return s({toc:u(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:E,maxHeadingLevel:_});return p((0,l.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:E,maxHeadingLevel:_}}),[d,v,E,_])),l.createElement(c,(0,a.Z)({toc:C,className:i,linkClassName:d},k))}},6882:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(9496),r=n(1626),l=n(6874),i="tag_WlXi",c="tagRegular_hzDx",o="tagWithCount_mqpk";function u(e){var t=e.permalink,n=e.label,u=e.count;return a.createElement(l.Z,{href:t,className:(0,r.Z)(i,u?o:c)},n,u&&a.createElement("span",null,u))}},1789:function(e,t,n){n.r(t),n.d(t,{FeatList:function(){return f},assets:function(){return m},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=n(5443),r=n(3010),l=(n(9496),n(9613)),i=(n(4840),n(6882),n(7374),n(5632),n(236)),c=["components"],o={title:"\u529f\u80fd\u5217\u8868",hide_table_of_contents:!0,hide_title:!0},u=void 0,s={unversionedId:"feat-list",id:"feat-list",title:"\u529f\u80fd\u5217\u8868",description:"",source:"@site/docs/feat-list.mdx",sourceDirName:".",slug:"/feat-list",permalink:"/docs/feat-list",draft:!1,editUrl:"https://github.com/enncy/ocs-docs/tree/main/docs/feat-list.mdx",tags:[],version:"current",frontMatter:{title:"\u529f\u80fd\u5217\u8868",hide_table_of_contents:!0,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u5173\u4e8e",permalink:"/docs/about"},next:{title:"\u811a\u672c\u6559\u7a0b",permalink:"/docs/script"}},m={},d=[],f=function(){return"undefined"==typeof OCS?(0,l.kt)("h1",{style:{textAlign:"center",marginTop:"100px"}},"\u9875\u9762\u52a0\u8f7d\u4e2d..."):(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col"},(0,l.kt)("h1",null,"\u529f\u80fd\u5217\u8868"),(0,l.kt)("blockquote",null," \u6b64\u9875\u9762\u5c55\u793aOCS\u6240\u6709\u811a\u672c\u529f\u80fd\u7684\u5217\u8868\uff0c\u5982\u679c\u4f60\u9700\u8981\u7684\u529f\u80fd\u4e0d\u5b58\u5728\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\u3002 "),(0,l.kt)("div",null,"\u5f53\u524d\u7a33\u5b9a\u7248\u672c\u4e3a: ",OCS.VERSION),(0,l.kt)("div",null,"\u4e3b\u8981\u811a\u672c\u6709 : ",OCS.definedScripts.map((function(e,t){return(0,l.kt)("code",{style:{marginRight:"12px"},key:t},(0,l.kt)("a",{href:"#"+e.name},e.name))}))),(0,l.kt)("hr",null),(0,l.kt)("div",null,OCS.definedScripts.map((function(e,t){return(0,l.kt)("div",{key:t},(0,l.kt)("div",{className:"feat-list-anchor",id:e.name}),(0,l.kt)("h1",{className:"anchor"},e.name),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,"\u5171\u6709 ",e.routes.length," \u4e2a\u811a\u672c , ",e.panels.length," \u4e2a\u663e\u793a\u7a97\u53e3 "),e.routes.map((function(t,n){return(0,l.kt)("div",{key:n},(0,l.kt)("div",{className:"feat-list-anchor",id:e.name+"-"+t.name}),(0,l.kt)("b",{className:"anchor ",key:n},t.name),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("div",null,"\u8fd0\u884c\u9875\u9762"),(0,l.kt)("ul",null,("object"==typeof t.url?t.url:[t.url]).map((function(e,t){return(0,l.kt)("li",{key:t},(0,l.kt)("code",null,"*"===e.replace(/\*/g,"*")?"\u6240\u6709\u9875\u9762":e))}))))))})))})))),(0,l.kt)("div",{className:"col--2"},(0,l.kt)("div",{style:{overflowY:"auto",position:"sticky",top:"4rem",maxHeight:"calc(100vh - 8rem)"},className:"thin-scrollbar theme-doc-toc-desktop"},(0,l.kt)(i.Z,{toc:OCS.definedScripts.map((function(e,t){return[{value:e.name,id:e.name,level:2},e.routes.map((function(t){return{value:t.name,id:e.name+"-"+t.name,level:3}}))].flat()})).flat(),mdxType:"TOCItems"}))))},v={toc:d,FeatList:f};function p(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(f,{mdxType:"FeatList"}))}p.isMDXComponent=!0}}]);