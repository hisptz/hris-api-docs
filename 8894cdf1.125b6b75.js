(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{106:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,h=d["".concat(r,".").concat(u)]||d[u]||b[u]||i;return a?o.a.createElement(h,l(l({ref:t},c),{},{components:a})):o.a.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},150:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/login-1c181aa4148b7824a519d03110ec5552.png"},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),i=(a(0),a(106)),r={id:"user",title:"HRHIS User Manual",sidebar_label:"User"},l={unversionedId:"users/user/user",id:"users/user/user",isDocsHomePage:!1,title:"HRHIS User Manual",description:"INTRODUCTION",source:"@site/docs/users/user/user.md",slug:"/users/user/user",permalink:"/hris-api-docs/docs/users/user/user",editUrl:"https://github.com/hisptz/hris-api-docs/blob/main/docs/users/user/user.md",version:"current",sidebar_label:"User",sidebar:"docs",previous:{title:"Introduction",permalink:"/hris-api-docs/docs/users/introduction"},next:{title:"Health Worker Data",permalink:"/hris-api-docs/docs/users/health-worker/healthworker"}},s=[{value:"Apps Menu",id:"apps-menu",children:[]},{value:"Health Worker Data Module",id:"health-worker-data-module",children:[]},{value:"Import/Export Module",id:"importexport-module",children:[]},{value:"Data Quality",id:"data-quality",children:[]},{value:"Worker-portal",id:"worker-portal",children:[]},{value:"HRHIS Reports",id:"hrhis-reports",children:[]},{value:"HRHIS Dashboard",id:"hrhis-dashboard",children:[]},{value:"Maintenance Module",id:"maintenance-module",children:[]},{value:"Data administration",id:"data-administration",children:[]}],c={toc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"introduction"},"INTRODUCTION"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"HRHIS General Introduction",Object(i.b)("br",{parentName:"p"}),"\n","HRHIS is an open-source software for HRH information management developed by the Department of\nComputer Science, University of Dar es Salaam for the Ministry of Health and Social Welfare\n(Tanzania) to support the capture of data linked to any level in the organizational hierarchy\nand is customizable at both the input and output sides.\nThe HRHIS was implemented as an effort to improve human resources for health (HRH) management.\nA situation analysis indicated the existence of several databases within and outside the\nministry dealing with HRH, often with similar information fields. It was agreed these sources\nshould be harmonized, and housed under Health Management Information System (HMIS) for\nconsistency. The HRHIS software thus became part of the HMIS and was fully developed using the\nDistrict Health Information System (DHIS) software."),Object(i.b)("p",{parentName:"li"}," The HRHIS provides input/output mechanisms for data at different levels, such as national,\nregional, district or facility level. It is designed to provide flexibility to:")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Capture and store health personnel's data and history by organizational unit, cadre, and other\ncriteria;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add any number of datasets or elements required by any sector (such as the central health\nministry, local governments, civil services or private providers);")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Update organizational unit details according to users' requirements (e.g. allowing additional\nregions, districts and health facilities to be added dynamically without entering into system\ncodes);")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Generate web-enabled reports in different formats (general and aggregated), including\ngraphical reporting."))),Object(i.b)("h1",{id:"objective"},"Objective"),Object(i.b)("p",null,"This document aims at instructing users on how to use the HRHIS to achieve their goals in the"),Object(i.b)("p",null,"System."),Object(i.b)("h1",{id:"hrhis-modules"},"HRHIS Modules"),Object(i.b)("p",null,"Functions in HRHIS are groped into different modules/apps for easier organization of data and maintenance of the system. Currently HRHIS has 10 apps as listed below;"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Health worker data")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"import/export")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Data quality")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Data administration")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Maintenance")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Reports")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Training")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Worker portal")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Scheduler")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Dashboard"))),Object(i.b)("h1",{id:"using-hrhis-system"},"Using HRHIS system"),Object(i.b)("p",null,"Before using any system, one has to get access to it."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Accessing HRHIS")),Object(i.b)("p",null,"HRHIS system  is available via the ",Object(i.b)("a",{parentName:"p",href:"https://hrhis.dhis2udsm.org/"},"Web"),". Type ",Object(i.b)("inlineCode",{parentName:"p"},"https://hrhis.dhis2udsm.org/")," in the address bar/search bar of a web browser(an application used to access the internet such as Internet Explorer, Mozilla Firefox, Google Chrome, Opera, etc.) to access HRHIS login screen  provided that you are connected to the Internet."),Object(i.b)("p",null,"It is recommended to use Mozilla Firefox or Google Chrome. Internet Explorer is not advised to be used for accessing HRHIS, but if it is found necessary to use then, the latest version of the browser can be used). The HRHIS login page will appear as seen below,\n",Object(i.b)("img",{alt:"img alt",src:a(150).default})),Object(i.b)("h2",{id:"apps-menu"},"Apps Menu"),Object(i.b)("p",null,"After successfully logging in HRHIS, you can access different applications in the system via the apps menu located at the top right hand Conner below the label that shows initials of users' full name as seen in figure below."),Object(i.b)("p",null,"Each application corresponds to a specific module in the system. The steps to follow working with each module to achieve different user interests have been highlighted in the following sections."),Object(i.b)("h2",{id:"health-worker-data-module"},"Health Worker Data Module"),Object(i.b)("p",null," This module is used for managing all health worker data. Data entry, updating and viewing is performed in this application. This app is available in the Apps menu. To use Health worker data app follow the steps below:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Select the Health Worker Data application from the apps menu. This can be done by either searching the apps menu using the search bar available in apps menu or by scrolling down the Apps menu to find data entry app and select it.")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"After selecting the data entry app, an interface will appear as shown in the figure below.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"From the interface, select the organization unit and the specify the type of data entry form for which data has to be entered.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Form will be displayed with appropriate data based on the specified organization unit."))),Object(i.b)("h2",{id:"importexport-module"},"Import/Export Module"),Object(i.b)("p",null,"  Sometimes you may be having a large number of employees\u2019 records which pose a tedious work of adding them one by one into the system. Import/Export module allows users to enter massive data into the system. To access Import/Export application follow the steps below:"),Object(i.b)("p",null,"  1.Go to the application menu and select Import/Export application from the menu."),Object(i.b)("p",null,"  2.Click on the Import/Export application, HRHIS Import/Export application window will open up as in Figure below"),Object(i.b)("p",null,"  3.Go to the Data Import Template tab"),Object(i.b)("p",null,"  4.Select the organization in which you want to import data from the organization unit tree."),Object(i.b)("p",null,"  5.Click on Get Import Template to download the template of the form you want to import data. The excel sheet for importing data with all data entry fields will be downloaded."),Object(i.b)("p",null,"  6.Open the downloaded excel sheet and populate the data you want to import into the system and check the excel against the data you have to make sure that the fields are in appropriate order."),Object(i.b)("p",null,"  Note:\n",Object(i.b)("em",{parentName:"p"},"You are required to Get Import Templates for every organization unit you want to import data as the data will be uploaded to the organization unit from which the template was downloaded.")),Object(i.b)("p",null,"   7.To import data, go to Data Import tab."),Object(i.b)("p",null,"   8.Click on the 'Data Import File', to choose a file that has the data you want to import from the computer."),Object(i.b)("p",null,"   9.Click on 'import data' to import the data contained in the template to the system. Upon completion of data import a message will display the status, the logger will also display the detailed import status. If the import successful, data contained in the imported file will be added to the selected organization unit when downloading the template."),Object(i.b)("h2",{id:"data-quality"},"Data Quality"),Object(i.b)("p",null,"Data Quality app assists in checking the quality of data entered/imported into the system. This is mainly by checking and identifying duplicates that might exist in the data to avoid inconsistency. To access and use data quality application follow the steps below:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Go to the apps menu and select Data Quality app")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on Data Quality application, the data duplicate manager will open up as shown in Figure below.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select form from the list of forms as seen in Figure below")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on check for duplicates, the duplicates will be identified as in Figure below.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on View Duplicate on one of the identified duplicates, the records associated with such a duplicate will pop up as shown in Figure below.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on one of the records to view the appropriate actions that can be taken on handling the duplicate as shown in figure below."))),Object(i.b)("h2",{id:"worker-portal"},"Worker-portal"),Object(i.b)("p",null,"This app enables users to flag any incorrect fields associated with their records in the system. To access and use worker-portal app follow the steps below:"),Object(i.b)("p",null,"  1.Select Worker-portal app from the apps menu"),Object(i.b)("p",null,"  2.Click on the Worker-portal application, user profile window will open up allowing the user to flag incorrect fields."),Object(i.b)("p",null,"  3.Click on the flag beside an incorrect field and fill the correct details in the fields."),Object(i.b)("p",null,"  4.Click 'suggest changes' to save. Flagged field will turn into yellow color and the supervisor will be notified to take appropriate measures on the suggested changes."),Object(i.b)("h2",{id:"hrhis-reports"},"HRHIS Reports"),Object(i.b)("p",null,"Reports include predefined reports that shares templates but\nTo access report application do the following:"),Object(i.b)("p",null,"  1.Select report app from application menu"),Object(i.b)("p",null,"  2.Click on the report, the report window will open up to allow a user to specify the kind of report they want to access as in Figure 23. The system has two report groups; Metrics and Employee Reports."),Object(i.b)("p",null,"  3.Select the report group you want to work on. eg. Employee Report"),Object(i.b)("p",null,"  4.From Employee report group select name of the report eg. Providers Report"),Object(i.b)("p",null,"  5.Select the organization unit and then click on Update."),Object(i.b)("p",null,"  7.Providers' reports for selected organization units will be generated as displayed on Figure below."),Object(i.b)("p",null,"  8.Go to Records reports to access employees reports"),Object(i.b)("h2",{id:"hrhis-dashboard"},"HRHIS Dashboard"),Object(i.b)("p",null,"Dashboard is the default landing page of the system, it enables users to analyze data entered in the system easily and quickly. Dashboards can be inform of tables, charts, list and maps."),Object(i.b)("p",null,"To create the dashboard follow the steps below:"),Object(i.b)("p",null,"  1.Click on the + sign located at the top right side of your home page, dashboard form will be displayed as in Figure below to enable user to specify the name of dashboard."),Object(i.b)("p",null,"  2.Click save to save the dashboard, a new dashboard will be created as shown in Figure below."),Object(i.b)("p",null,"  3.Click on Add item and select the kind of item you would like to add into the dashboard. eg Chart"),Object(i.b)("p",null,"  4.Name your item and select the data dimensions(data, period and organization unit) associated with your item. A new dashboard item will be created. Click on Save Changes to save the item. You can add as many items into the dashboard as possible."),Object(i.b)("p",null,"  5.To edit/delete the item click on(:image)  at the top right of the item and select appropriate action."),Object(i.b)("p",null,"  6.To delete the dashboard click on icon at the top of the dashboard and select delete on the screen below."),Object(i.b)("h2",{id:"maintenance-module"},"Maintenance Module"),Object(i.b)("p",null,"  This module is concerned with management of all metadata for HRHIS system operation. To access Maintenance app follow steps below:"),Object(i.b)("p",null,"   1.Select maintenance app from the application menu"),Object(i.b)("p",null,"   2.Click on the Maintenance, maintenance window will open up as in Figure below where you can perform various metadata configurations. Go to each tab to configure metadata related to each category"),Object(i.b)("p",null,"   4.ClickClick on plus button to add a metadata in the respective category."),Object(i.b)("p",null,"   5.On adding a metadata new form will be displayed where you will be required to fill in details for the metadata creation as in Figure below.\n6.Click on image to view metadata available in the respective category, a list of metadata configured will be displayed.\n7.You can be able to perform various actions on a metadata by clicking on icon at the right of each metadata."),Object(i.b)("h2",{id:"data-administration"},"Data administration"),Object(i.b)("p",null,"   This module is concerned with the data analytic resource table in the system. To access data administration module do the following:"),Object(i.b)("p",null,"   1.Go to the applications menu and select Data Administration app"),Object(i.b)("p",null,"   2.Click on the app, Data administration screen will open as in Figure below."),Object(i.b)("p",null,"   3.To generate a resource table check the check-boxes at the left of every item listed in Figure 69 then click Generate Resource Table. You can also check one item to generate a resource table for it. While generating the resource table, the resource table logs will be displayed to show the progress as in Figure"))}p.isMDXComponent=!0}}]);