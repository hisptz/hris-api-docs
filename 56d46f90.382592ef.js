(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(3),p=n(7),r=(n(0),n(94)),s={id:"apps",title:"Apps",sidebar_label:"Apps"},o={unversionedId:"developers/settings/apps",id:"developers/settings/apps",isDocsHomePage:!1,title:"Apps",description:"Apps",source:"@site/docs/developers/settings/apps.md",slug:"/developers/settings/apps",permalink:"/hris-api-docs/docs/developers/settings/apps",editUrl:"https://github.com/hisptz/hris-api-docs/blob/main/docs/developers/settings/apps.md",version:"current",sidebar_label:"Apps",sidebar:"menuSidebar",previous:{title:"User Logs",permalink:"/hris-api-docs/docs/developers/settings/logs"},next:{title:"HRHIS User Manual",permalink:"/hris-api-docs/docs/users/user"}},l=[{value:"Apps",id:"apps",children:[{value:"Get apps",id:"get-apps",children:[]},{value:"Install an app",id:"install-an-app",children:[]},{value:"Delete an app",id:"delete-an-app",children:[]},{value:"Reload apps",id:"reload-apps",children:[]},{value:"Share apps between instances",id:"share-apps-between-instances",children:[]}]},{value:"App store",id:"app-store",children:[{value:"Get apps",id:"get-apps-1",children:[]},{value:"Install apps",id:"install-apps",children:[]}]}],i={toc:l};function c(e){var t=e.components,n=Object(p.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"apps"},"Apps"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"/api/apps")," endpoint can be used for installing, deleting and\nlisting apps. The app key is based on the app name, but with all\nnon-alphanumerical characters removed, and spaces replaced with a dash.\n",Object(r.b)("em",{parentName:"p"},"My app!")," will return the key ",Object(r.b)("em",{parentName:"p"},"My-app"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note")),Object(r.b)("p",{parentName:"blockquote"},"Previous to 2.28, the app key was derived from the name of the ZIP\narchive, excluding the file extension. URLs using the old format\nshould still return the correct app in the api.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"/api/apps\n")),Object(r.b)("h3",{id:"get-apps"},"Get apps"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note")),Object(r.b)("p",{parentName:"blockquote"},"Previous to 2.28 the app property folderName referred to the actual\npath of the installed app. With the ability to store apps on cloud\nservices, folderName's purpose changed, and will now refer to the app\nkey.")),Object(r.b)("p",null,"You can read the keys for apps by listing all apps from the apps\nresource and look for the ",Object(r.b)("em",{parentName:"p"},"key")," property. To list all installed apps in\nJSON:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'curl -u user:pass -H "Accept: application/json" "http://server.com/api/apps"\n')),Object(r.b)("p",null,"You can also simply point your web browser to the resource URL:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"http://server.com/api/apps\n")),Object(r.b)("p",null,"The apps list can also be filtered by app type and by name, by appending\none or more ",Object(r.b)("em",{parentName:"p"},"filter")," parameters to the URL:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"http://server.com/api/apps?filter=appType:eq:DASHBOARD_APP&filter=name:ilike:youtube\n")),Object(r.b)("p",null,"App names support the ",Object(r.b)("em",{parentName:"p"},"eq")," and ",Object(r.b)("em",{parentName:"p"},"ilike")," filter operators, while ",Object(r.b)("em",{parentName:"p"},"appType"),"\nsupports ",Object(r.b)("em",{parentName:"p"},"eq")," only."),Object(r.b)("h3",{id:"install-an-app"},"Install an app"),Object(r.b)("p",null,"To install an app, the following command can be issued:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -u user:pass -F file=@app.zip "http://server.com/api/apps"\n')),Object(r.b)("h3",{id:"delete-an-app"},"Delete an app"),Object(r.b)("p",null,"To delete an app, you can issue the following command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE -u user:pass "http://server.com/api/apps/<app-key>"\n')),Object(r.b)("h3",{id:"reload-apps"},"Reload apps"),Object(r.b)("p",null,"To force a reload of currently installed apps, you can issue the\nfollowing command. This is useful if you added a file manually directly\nto the file system, instead of uploading through the HRHIS4 user\ninterface."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT -u user:pass "http://server.com/api/apps"\n')),Object(r.b)("h3",{id:"share-apps-between-instances"},"Share apps between instances"),Object(r.b)("p",null,"If the HRHIS4 instance has been configured to use cloud storage, apps\nwill now be installed and stored on the cloud service. This will enable\nmultiple instances share the same versions on installed apps, instead of\ninstalling the same apps on each individual instance."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note")),Object(r.b)("p",{parentName:"blockquote"},"Previous to 2.28, installed apps would only be stored on the instance's\nlocal filesystem. Apps installed before 2.28 will still be available on the\ninstance it was installed, but it will not be shared with other\ninstances, as it's still located on the instances local filesystem.")),Object(r.b)("h2",{id:"app-store"},"App store"),Object(r.b)("p",null,"The Web API exposes the content of the HRHIS4 App Store as a JSON\nrepresentation which can found at the ",Object(r.b)("inlineCode",{parentName:"p"},"/api/appStore")," resource."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"/api/appStore\n")),Object(r.b)("h3",{id:"get-apps-1"},"Get apps"),Object(r.b)("p",null,"You can retrieve apps with a GET request:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"GET /api/appStore\n")),Object(r.b)("p",null,"A sample JSON response is described below."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  [\n    {\n      "name": "Tabular Tracker Capture",\n      "description": "Tabular Tracker Capture is an app that makes you more effective.",\n      "sourceUrl": "https://github.com/HRHIS4/App-repository",\n      "appType": "DASHBOARD_WIDGET",\n      "status": "PENDING",\n      "id": "NSD06BVoV21",\n      "developer": {\n        "name": "DHIS",\n        "organisation": "Uio",\n        "address": "Oslo",\n        "email": "dhis@abc.com",\n      },\n      "versions": [\n        {\n          "id": "upAPqrVgwK6",\n          "version": "1.2",\n          "minDhisVersion": "2.17",\n          "maxDhisVersion": "2.20",\n          "downloadUrl": "https://HRHIS4.org/download/appstore/tabular-capture-12.zip",\n          "demoUrl": "http://dev.hrhis.dhis2udsm.org/demo"\n        }\n      ],\n      "images": [\n        {\n          "id": "upAPqrVgwK6",\n          "logo": "true",\n          "imageUrl": "https://HRHIS4.org/download/appstore/tabular-capture-12.png",\n          "description": "added feature snapshot",\n          "caption": "dialog",\n        }\n      ]\n    }\n  ]\n}\n')),Object(r.b)("h3",{id:"install-apps"},"Install apps"),Object(r.b)("p",null,"You can install apps on your instance of HRHIS4 assuming you have the\nappropriate permissions. An app is referred to using the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," property\nof the relevant version of the app. An app is installed with a POST\nrequest with the version id to the following resource:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"POST /api/appStore/{app-version-id}\n")))}c.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),p=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=p.a.createContext({}),c=function(e){var t=p.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=c(e.components);return p.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},d=p.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=c(n),d=a,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||r;return n?p.a.createElement(m,o(o({ref:t},i),{},{components:n})):p.a.createElement(m,o({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var i=2;i<r;i++)s[i]=n[i];return p.a.createElement.apply(null,s)}return p.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);