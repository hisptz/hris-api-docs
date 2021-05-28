(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{106:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),c=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||s;return t?a.a.createElement(m,o(o({ref:n},l),{},{components:t})):a.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),s=(t(0),t(106)),i=["components"],o={id:"users",title:"Users",sidebar_label:"Users"},u={unversionedId:"developers/settings/users",id:"developers/settings/users",isDocsHomePage:!1,title:"Users",description:"User query",source:"@site/docs/developers/settings/users.md",slug:"/developers/settings/users",permalink:"/hris-api-docs/docs/developers/settings/users",editUrl:"https://github.com/hisptz/hris-api-docs/blob/main/docs/developers/settings/users.md",version:"current",sidebar_label:"Users",sidebar:"docs",previous:{title:"Datastore",permalink:"/hris-api-docs/docs/developers/data/datastore"},next:{title:"Settings",permalink:"/hris-api-docs/docs/developers/settings/settings"}},l=[{value:"User query",id:"user-query",children:[]},{value:"User credentials query",id:"user-credentials-query",children:[]},{value:"User account create and update",id:"user-account-create-and-update",children:[]},{value:"User account invitations",id:"user-account-invitations",children:[]},{value:"User replication",id:"user-replication",children:[]},{value:"Current user information and associations",id:"current-user-information-and-associations",children:[]}],c={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,i);return Object(s.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"user-query"},"User query"),Object(s.b)("p",null,"The ",Object(s.b)("em",{parentName:"p"},"users")," resource offers additional query parameters beyond the\nstandard parameters (e.g. paging). To query for users at the users\nresource you can use the following parameters."),Object(s.b)("p",null,'A query for max 10 users with "konan" as first name or surname (case\nin-sensitive) who have a subset of authorities compared to the current\nuser:'),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"/api/users?query=konan&authSubset=true&pageSize=10\n")),Object(s.b)("h3",{id:"user-credentials-query"},"User credentials query"),Object(s.b)("p",null,"An alternative to the previous user query, is to directly query the user\ncredentials (the part where username, etc., resides) using\n",Object(s.b)("em",{parentName:"p"},"/api/userCredentials")," endpoint, it supports all regular field and\nobject filters as the other endpoints."),Object(s.b)("p",null,"Get user credentials where username is admin:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"/api/userCredentials?filter=username:eq:admin\n")),Object(s.b)("p",null,"Get username and code from all user credentials where username starts\nwith\n",Object(s.b)("em",{parentName:"p"},"adm"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"/api/userCredentials?fields=username,code&filter=username:^like:adm\n")),Object(s.b)("h3",{id:"user-account-create-and-update"},"User account create and update"),Object(s.b)("p",null,"Both creating and updating a user is supported through the API. The\npayload itself is similar to other payloads in the API, so they\nsupport collection references etc. A simple example payload to create\nwould be, the password should be sent in plain text (remember to only\nuse this on a SSL enabled server) and will be encrypted on the backend:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "Mj8balLULKp",\n  "firstName": "John",\n  "surname": "Doe",\n  "email": "johndoe@mail.com",\n  "userCredentials": {\n    "id": "lWCkJ4etppc",\n    "userInfo": {\n    "id": "Mj8balLULKp"\n  },\n  "username": "johndoe123",\n  "password": "Your-password-123",\n  "skype": "john.doe",\n  "telegram": "joh.doe",\n  "whatsApp": "+1-541-754-3010",\n  "facebookMessenger": "john.doe",\n  "avatar": {\n    "id": "<fileResource id>"\n  },\n  "userRoles": [\n    {\n      "id": "Ufph3mGRmMo"\n    }\n  ]\n  },\n  "organisationUnits": [\n    {\n      "id": "Rp268JB6Ne4"\n    }\n  ],\n  "userGroups": [\n    {\n      "id": "wl5cDMuUhmF"\n    }\n  ]\n}\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -d @u.json "http://server/api/users" -u user:pass \n  -H "Content-Type: application/json" \n')),Object(s.b)("p",null,"In the user creation payload, user groups are only supported when importing\nor ",Object(s.b)("em",{parentName:"p"},"POSTing")," a single user at a time. If you attempt to create more than one\nuser while specifiying user groups, you will not recieve an error and the\nusers will be created but no user groups will be assigned. This is by design\nand is limited because of the many-to-many relationship between Users and\nUser Groups whereby User Groups is the owner of the relationship. To update\nor create mulitple users and their user groups, consider a program to ",Object(s.b)("em",{parentName:"p"},"POST"),"\none at a time, or ",Object(s.b)("em",{parentName:"p"},"POST")," / import all users followed by another action to\nupdate their user groups while specifiying the new user's identifiers."),Object(s.b)("p",null,"After the user is created, a ",Object(s.b)("em",{parentName:"p"},"Location")," header is sent back with the\nnewly generated ID (you can also provide your own using /api/system/id\nendpoint). The same payload can then be used to do updates, but remember\nto then use ",Object(s.b)("em",{parentName:"p"},"PUT")," instead of ",Object(s.b)("em",{parentName:"p"},"POST")," and the endpoint is now\n",Object(s.b)("em",{parentName:"p"},"/api/users/ID"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT -d @u.json "http://server/api/users/ID" -u user:pass \n  -H "Content-Type: application/json" \n')),Object(s.b)("p",null,"For more info about the full payload available, please see ",Object(s.b)("inlineCode",{parentName:"p"},"/api/schemas/user"),"."),Object(s.b)("p",null,"For more info about uploading and retrieving user avatars, please see the\n",Object(s.b)("inlineCode",{parentName:"p"},"/fileResources")," endpoint."),Object(s.b)("h3",{id:"user-account-invitations"},"User account invitations"),Object(s.b)("p",null,"The Web API supports inviting people to create user accounts through the\n",Object(s.b)("inlineCode",{parentName:"p"},"invite")," resource. To create an invitation you should POST a user in XML\nor JSON format to the invite resource. A specific username can be forced\nby defining the username in the posted entity. By omitting the username,\nthe person will be able to specify it herself. The system will send out\nan invitation through email. This requires that email settings have been\nproperly configured. The invite resource is useful in order to securely\nallow people to create accounts without anyone else knowing the password\nor by transferring the password in plain text. The payload to use for\nthe invite is the same as for creating users. An example payload in JSON\nlooks like this:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "firstName": "John",\n  "surname": "Doe",\n  "email": "johndoe@mail.com",\n  "userCredentials": {\n    "username": "johndoe",\n    "userRoles": [{\n      "id": "Euq3XfEIEbx"\n    }]\n  },\n  "organisationUnits": [ {\n    "id": "ImspTQPwCqd"\n  } ],\n  "userGroups": [ {\n    "id": "vAvEltyXGbD"\n  }]\n}\n')),Object(s.b)("p",null,"The user invite entity can be posted like this:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'curl -d @invite.json "localhost/api/users/invite" -u admin:district\n  -H "Content-Type:application/json" \n')),Object(s.b)("p",null,"To send out invites for multiple users at the same time you must use a\nslightly different format. For JSON:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "users": [ {\n    "firstName": "John",\n    "surname": "Doe",\n    "email": "johndoe@mail.com",\n    "userCredentials": {\n      "username": "johndoe",\n      "userRoles": [ {\n        "id": "Euq3XfEIEbx"\n      } ]\n    },\n    "organisationUnits": [ {\n      "id": "ImspTQPwCqd"\n      } ]\n    }, {\n    "firstName": "Tom",\n    "surname": "Johnson",\n    "email": "tomj@mail.com",\n    "userCredentials": {\n      "userRoles": [ {\n        "id": "Euq3XfEIEbx"\n      } ]\n    },\n    "organisationUnits": [ {\n      "id": "ImspTQPwCqd"\n      } ]\n    }\n  ]\n}\n')),Object(s.b)("p",null,"To create multiple invites you can post the payload to the\napi/users/invites resource like this:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'curl -d @invites.json "localhost/api/users/invites" -u admin:district\n  -H "Content-Type:application/json"\n')),Object(s.b)("p",null,"There are certain requirements for user account invitations to be sent\nout:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Email SMTP server must be configured properly on the server.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The user to be invited must have specified a valid email.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The user to be invited must not be granted user roles with critical\nauthorities (see below).")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"If username is specified it must not be already taken by another\nexisting user."))),Object(s.b)("p",null,"If any of these requirements are not met the invite resource will return\nwith a ",Object(s.b)("em",{parentName:"p"},"409 Conflict")," status code together with a descriptive message."),Object(s.b)("p",null,"The critical authorities which cannot be granted with invites include:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"ALL")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Scheduling administration")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Set system settings")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Add, update, delete and list user roles")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Add, update, delete and view SQL views"))),Object(s.b)("h3",{id:"user-replication"},"User replication"),Object(s.b)("p",null,"To replicate a user you can use the ",Object(s.b)("em",{parentName:"p"},"replica")," resource. Replicating a\nuser can be useful when debugging or reproducing issues reported by a\nparticular user. You need to provide a new username and password for the\nreplicated user which you will use to authenticate later. Note that you\nneed the ALL authority to perform this action. To replicate a user you\ncan post a JSON payload looking like below:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "replica",\n  "password": "Replica.1234"\n}\n')),Object(s.b)("p",null,"This payload can be posted to the replica resource, where you provide\nthe identifier of the user to replicate in the URL:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"/api/users/<uid>/replica\n")),Object(s.b)("p",null,"An example of replicating a user using curl looks like this:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'curl -d @replica.json "localhost/api/users/N3PZBUlN8vq/replica"\n  -H "Content-Type:application/json" -u admin:district\n')),Object(s.b)("h2",{id:"current-user-information-and-associations"},"Current user information and associations"),Object(s.b)("p",null,"In order to get information about the currently authenticated user and\nits associations to other resources you can work with the ",Object(s.b)("em",{parentName:"p"},"me")," resource\n(you can also refer to it by its old name ",Object(s.b)("em",{parentName:"p"},"currentUser"),"). The current\nuser related resources gives your information which is useful when\nbuilding clients for instance for data entry and user management. The\nfollowing describes these resources and their purpose."),Object(s.b)("p",null,"Provides basic information about the user that you are currently logged\nin as, including username, user credentials, assigned organisation\nunits:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"/api/me\n")),Object(s.b)("p",null,"Gives information about currently unread messages and interpretations:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"/api/me/dashboard\n")),Object(s.b)("p",null,"Lists all messages and interpretations in the inbox (including replies):"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"/api/me/inbox\n")),Object(s.b)("p",null,"In order to change password, this end point can be used to validate\nnewly entered password. Password validation will be done based on\nPasswordValidationRules configured in the system. This end point support\nPOST and password string should be sent in POST body."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"/api/me/validatePassword\n")),Object(s.b)("p",null,"While changing password, this end point (support POST) can be used to\nverify old password. Password string should be sent in POST body."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"/api/me/verifyPassword\n")),Object(s.b)("p",null,"Gives the full profile information for current user. This endpoint\nsupport both ",Object(s.b)("em",{parentName:"p"},"GET")," to retrieve profile and ",Object(s.b)("em",{parentName:"p"},"POST")," to update profile (the\nexact same format is used):"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"/api/me/user-account\n")),Object(s.b)("p",null,"Returns the set of authorities granted to the current user:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"/api/me/authorization\n")),Object(s.b)("p",null,"Returns true or false, indicating whether the current user has been\ngranted the given ",Object(s.b)("inlineCode",{parentName:"p"},"<auth>")," authorization:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"/api/me/authorization/<auth>\n")),Object(s.b)("p",null,"Lists all organisation units directly assigned to the user:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"/api/me/organisationUnits\n")),Object(s.b)("p",null,"Gives all the datasets assigned to the users organisation units, and\ntheir direct children. This endpoint contains all required information\nto build a form based on one of our datasets. If you want all\ndescendants of your assigned organisation units, you can use the query\nparameter ",Object(s.b)("em",{parentName:"p"},"includeDescendants=true")," :"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"/api/me/dataSets\n")),Object(s.b)("p",null,"Gives all the programs assigned to the users organisation units, and\ntheir direct children. This endpoint contains all required information\nto build a form based on one of our datasets. If you want all\ndescendants of your assigned organisation units, you can use the query\nparameter ",Object(s.b)("em",{parentName:"p"},"includeDescendants=true")," :"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"/api/me/programs\n")),Object(s.b)("p",null,"Gives the data approval levels which are relevant to the current user:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"/api/me/dataApprovalLevels\n")))}p.isMDXComponent=!0}}]);