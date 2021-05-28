(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return m}));var n=r(3),o=r(7),a=(r(0),r(106)),c=["components"],i={id:"forms",title:"Forms",sidebar_label:"Forms"},l={unversionedId:"developers/metadata/forms",id:"developers/metadata/forms",isDocsHomePage:!1,title:"Forms",description:"Welcome the Forms Module",source:"@site/docs/developers/metadata/forms.md",slug:"/developers/metadata/forms",permalink:"/hris-api-docs/docs/developers/metadata/forms",editUrl:"https://github.com/hisptz/hris-api-docs/blob/main/docs/developers/metadata/forms.md",version:"current",sidebar_label:"Forms",sidebar:"docs",previous:{title:"Introduction",permalink:"/hris-api-docs/docs/developers/basics"},next:{title:"Organisation Units",permalink:"/hris-api-docs/docs/developers/metadata/ou"}},s=[{value:"Welcome the Forms Module",id:"welcome-the-forms-module",children:[]},{value:"Form Sections",id:"form-sections",children:[]}],p={toc:s};function m(e){var t=e.components,r=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"welcome-the-forms-module"},"Welcome the Forms Module"),Object(a.b)("h2",{id:"form-sections"},"Form Sections"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Adding a form sections")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-JS"},"/api/formSections\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-JSON"},'{\n    "name": "Form Section Name",\n    "sort": 3,\n    "form": {"id": "Q9xLAnuFkRLsF"}\n}\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Updating a form section")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-JS"},"/api/formSections\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-JSON"},'{"name": "Watts Information",\n"sort": 2,\n"form":{"id":"USi3thE3EQ5Ey"}}\n')))}m.isMDXComponent=!0},106:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?o.a.createElement(b,i(i({ref:t},s),{},{components:r})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);