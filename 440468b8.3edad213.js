(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||l;return n?r.a.createElement(m,o(o({ref:t},p),{},{components:n})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),l=(n(0),n(106)),i=["components"],o={id:"maintenance",title:"Maintenance",sidebar_label:"Maintenance"},c={unversionedId:"developers/maintenance",id:"developers/maintenance",isDocsHomePage:!1,title:"Maintenance",description:"Maintenance",source:"@site/docs/developers/maintenance.md",slug:"/developers/maintenance",permalink:"/hris-api-docs/docs/developers/maintenance",editUrl:"https://github.com/hisptz/hris-api-docs/blob/main/docs/developers/maintenance.md",version:"current",sidebar_label:"Maintenance"},p=[{value:"Maintenance",id:"maintenance",children:[]}],b={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,i);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"maintenance"},"Maintenance"),Object(l.b)("p",null,"To perform maintenance you can interact with the ",Object(l.b)("em",{parentName:"p"},"maintenance")," resource. You should use ",Object(l.b)("em",{parentName:"p"},"POST")," or ",Object(l.b)("em",{parentName:"p"},"PUT")," as a method for requests. The following methods are available."),Object(l.b)("p",null,"Analytics tables clear will drop all analytics tables."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/maintenance/analyticsTablesClear\n")),Object(l.b)("p",null,"Analytics table analyze will collects statistics about the contents of analytics tables in the database."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/maintenance/analyticsTablesAnalyze\n")),Object(l.b)("p",null,"Expired invitations clear will remove all user account invitations which\nhave expired."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/maintenance/expiredInvitationsClear\n")),Object(l.b)("p",null,"Period pruning will remove periods which are not linked to any data\nvalues."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/maintenance/periodPruning\n")),Object(l.b)("p",null,"Zero data value removal will delete zero data values linked to data\nelements where zero data is defined as not significant:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/maintenance/zeroDataValueRemoval\n")),Object(l.b)("p",null,"Soft deleted data value removal will permanently delete soft deleted data values."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/maintenance/softDeletedDataValueRemoval\n")),Object(l.b)("p",null,"Soft deleted program stage instance removal will permanently delete soft deleted events."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/maintenance/softDeletedProgramStageInstanceRemoval\n")),Object(l.b)("p",null,"Soft deleted program instance removal will permanently delete soft deleted enrollments."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/maintenance/softDeletedProgramInstanceRemoval\n")),Object(l.b)("p",null,"Soft deleted tracked entity instance removal will permanently delete soft deleted tracked entity instances."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/maintenance/softDeletedTrackedEntityInstanceRemoval\n")),Object(l.b)("p",null,"Drop SQL views will drop all SQL views in the database. Note that it will not delete the HRHIS4 SQL view entities."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/maintenance/sqlViewsDrop\n")),Object(l.b)("p",null,"Create SQL views will recreate all SQL views in the database."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/maintenance/sqlViewsCreate\n")),Object(l.b)("p",null,"Category option combo update will remove obsolete and generate missing category option combos for all category combinations."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/maintenance/categoryOptionComboUpdate\n")),Object(l.b)("p",null,"It is also possible to update category option combos for a single category combo using the following endpoint."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/maintenance/categoryOptionComboUpdate/categoryCombo/<category-combo-uid>\n")),Object(l.b)("p",null,"Cache clearing will clear the application Hibernate cache and the analytics partition caches."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/maintenance/cacheClear\n")),Object(l.b)("p",null,"Org unit paths update will re-generate the organisation unit path property. This can be useful e.g. if you imported org units with SQL."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/maintenance/ouPathsUpdate\n")),Object(l.b)("p",null,"Data pruning will remove complete data set registrations, data approvals, data value audits and data values, in this case for an organisation unit."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/maintenance/dataPruning/organisationUnits/<org-unit-id>\n")),Object(l.b)("p",null,"Data pruning for data elements, which will remove data value audits and data values."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/maintenance/dataPruning/dataElement/<data-element-uid>\n")),Object(l.b)("p",null,"Metadata validation will apply all metadata validation rules and return the result of the operation."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/metadataValidation\n")),Object(l.b)("p",null,"App reload will refresh the HRHIS4 managed cache of installed apps by reading from the file system."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/appReload\n")),Object(l.b)("p",null,"Maintenance operations are supported in a batch style with a POST request to the api/maintenance resource where the operations are supplied as query parameters:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST PUT /api/maintenance?analyticsTablesClear=true&expiredInvitationsClear=true\n  &periodPruning=true&zeroDataValueRemoval=true&sqlViewsDrop=true&sqlViewsCreate=true\n  &categoryOptionComboUpdate=true&cacheClear=true&ouPathsUpdate=true\n")))}s.isMDXComponent=!0}}]);