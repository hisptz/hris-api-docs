(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),s=t(7),o=(t(0),t(94)),a={id:"logs",title:"User Logs",sidebar_label:"User Logs"},c={unversionedId:"developers/settings/logs",id:"developers/settings/logs",isDocsHomePage:!1,title:"User Logs",description:"Introduction",source:"@site/docs/developers/settings/user.logs.md",slug:"/developers/settings/logs",permalink:"/hris-api-docs/docs/developers/settings/logs",editUrl:"https://github.com/hisptz/hris-api-docs/blob/main/docs/developers/settings/user.logs.md",version:"current",sidebar_label:"User Logs",sidebar:"menuSidebar",previous:{title:"Processes",permalink:"/hris-api-docs/docs/developers/settings/processes"},next:{title:"Apps",permalink:"/hris-api-docs/docs/developers/settings/apps"}},l=[{value:"Introduction",id:"introduction",children:[{value:"Get System logs for all users",id:"get-system-logs-for-all-users",children:[]},{value:"Get current user logs",id:"get-current-user-logs",children:[]},{value:"Get logs for a specific/selected User",id:"get-logs-for-a-specificselected-user",children:[]}]}],i={toc:l};function p(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"System users' logs and all interactions")),Object(o.b)("h3",{id:"get-system-logs-for-all-users"},"Get System logs for all users"),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Request Endpoint")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-JS"},"/api/userLogs\n")),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Sample Payload")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 100,\n    "total": 342,\n    "nextPage": "/api/userLogs?page=2"\n  },\n  "userLogs": [\n    {\n      "id": "Tdm8VRABBmT5Y",\n      "time": "2021-03-03T11:12:53.387Z",\n      "resource": "/api/users/logs",\n      "method": "GET",\n      "statuscode": "200",\n      "statusname": "OK",\n      "referer": {\n        "host": "loadbalance",\n        "accept": "*/*",\n        "cookie": "sess=s%3AFRrjApjeZ3qLWmlFbqmbHfBYgab-Tlln",\n        "connection": "close",\n        "user-agent": "insomnia/2020.5.2"\n      }\n    }\n  ]\n}\n')),Object(o.b)("br",null),Object(o.b)("h3",{id:"get-current-user-logs"},"Get current user logs"),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Request Endpoint")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/me/logs\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Sample Payload")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "id": "5849565a0256c",\n  "lastUpdated": "2021-02-26T09:08:38.000Z",\n  "firstName": "HRHIS",\n  "surname": "HRHIS",\n  "email": "hrhish@hrhis.hrhis",\n  "lastLogin": "2021-02-26T09:08:38.000Z",\n  "enabled": true,\n  "logs": [\n   {\n      "id": "ieAQYKNheBeJT",\n      "time": "2021-03-03T13:53:34.274Z",\n      "resource": "/api/userRoles?paging=false",\n      "method": "GET",\n      "statuscode": "200",\n      "statusname": "OK",\n      "referer": {\n        "host": "development",\n        "accept": "application/json, text/plain, */*",\n        "cookie": "sess=s%3A_ugR5i5TwfBYpeAnotjSM2Re7SIXAlPx",\n        "x-real-ip": "41.59.81.88",\n        "connection": "close",\n        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",\n        "if-none-match": "W/\\"3205-OpOj/RVAqjbsFiR8hILjUOmwIlY\\"",\n        "sec-fetch-dest": "empty",\n        "sec-fetch-mode": "cors",\n        "sec-fetch-site": "same-origin",\n        "accept-encoding": "gzip, deflate, br",\n        "accept-language": "en-US,en;q=0.9",\n        "x-forwarded-for": "41.59.81.88",\n        "x-forwarded-proto": "https"\n      }\n    }\n  ]\n}\n')),Object(o.b)("br",null),Object(o.b)("h3",{id:"get-logs-for-a-specificselected-user"},"Get logs for a specific/selected User"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Request Endpoint")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-JS"},"/api/users/5849565a0256c/logs\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Where ",Object(o.b)("inlineCode",{parentName:"p"},"5849565a0256c")," is the selected user ID")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "id": "5849565a0256c",\n  "lastUpdated": "2021-02-26T09:08:38.000Z",\n  "firstName": "HRHIS",\n  "surname": "HRHIS",\n  "email": "hrhish@hrhis.hrhis",\n  "lastLogin": "2021-02-26T09:08:38.000Z",\n  "enabled": true,\n  "logs": [\n   {\n      "id": "ieAQYKNheBeJT",\n      "time": "2021-03-03T13:53:34.274Z",\n      "resource": "/api/userRoles?paging=false",\n      "method": "GET",\n      "statuscode": "200",\n      "statusname": "OK",\n      "referer": {\n        "host": "development",\n        "accept": "application/json, text/plain, */*",\n        "cookie": "sess=s%3A_ugR5i5TwfBYpeAnotjSM2Re7SIXAlPx",\n        "x-real-ip": "41.59.81.88",\n        "connection": "close",\n        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",\n        "if-none-match": "W/\\"3205-OpOj/RVAqjbsFiR8hILjUOmwIlY\\"",\n        "sec-fetch-dest": "empty",\n        "sec-fetch-mode": "cors",\n        "sec-fetch-site": "same-origin",\n        "accept-encoding": "gzip, deflate, br",\n        "accept-language": "en-US,en;q=0.9",\n        "x-forwarded-for": "41.59.81.88",\n        "x-forwarded-proto": "https"\n      }\n    }\n  ]\n}\n')))}p.isMDXComponent=!0},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var r=t(0),s=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=s.a.createContext({}),p=function(e){var n=s.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return s.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},b=s.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,g=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return t?s.a.createElement(g,c(c({ref:n},i),{},{components:t})):s.a.createElement(g,c({ref:n},i))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var i=2;i<o;i++)a[i]=t[i];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);