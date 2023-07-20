"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2590],{91924:function(e,n,d){d.r(n),d.d(n,{_frontmatter:function(){return o},default:function(){return s}});var a=d(87462),t=d(63366),i=(d(15007),d(64983)),m=d(91515),r=["components"],o={},l={_frontmatter:o},p=m.Z;function s(e){var n=e.components,d=(0,t.Z)(e,r);return(0,i.mdx)(p,(0,a.Z)({},l,d,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"../overview.md"},"@hz/authoring-api")," / UserAction"),(0,i.mdx)("h1",{id:"interface-useractiont"},"Interface: UserAction<T",">"),(0,i.mdx)("p",null,"A UserAction is a simplified ActionHandler. Key differences:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"ActionSystem#addActionHandler supports 0..N handlers, a UserAction is a 1:1 mapping."),(0,i.mdx)("li",{parentName:"ol"},"Advanced features of ActionProcessor (filter, map, reduce, etc.) are not supported."),(0,i.mdx)("li",{parentName:"ol"},"A UserAction is user-visible. It provides a localized name, disabled\nstate, and optional keyboard shortcut to allow Horizon tenants to expose in the UI."),(0,i.mdx)("li",{parentName:"ol"},"Can be defined in both the UI thread and the Authoring thread."),(0,i.mdx)("li",{parentName:"ol"},"Declaration merging of ActionType is optional, but recommended for first-party code\nfor compile-time type checking.")),(0,i.mdx)("h2",{id:"type-parameters"},"Type parameters"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"T")),(0,i.mdx)("td",{parentName:"tr",align:"left"},"extends ",(0,i.mdx)("a",{parentName:"td",href:"../overview.md#ActionType"},(0,i.mdx)("inlineCode",{parentName:"a"},"ActionType"))," = ",(0,i.mdx)("a",{parentName:"td",href:"../overview.md#ActionType"},(0,i.mdx)("inlineCode",{parentName:"a"},"ActionType")))))),(0,i.mdx)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"BaseAction")),(0,i.mdx)("p",{parentName:"li"},"↳ ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("inlineCode",{parentName:"strong"},"UserAction"))))),(0,i.mdx)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.mdx)("h3",{id:"properties"},"Properties"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"UserAction.md#computedName"},"computedName")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"UserAction.md#context"},"context")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"UserAction.md#disabled"},"disabled")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"UserAction.md#isBrowserNative"},"isBrowserNative")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"UserAction.md#keybinding"},"keybinding")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"UserAction.md#name"},"name"))),(0,i.mdx)("h3",{id:"methods"},"Methods"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"UserAction.md#execute"},"execute")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"UserAction.md#needsToUpdate"},"needsToUpdate")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"UserAction.md#update"},"update"))),(0,i.mdx)("h2",{id:"properties-1"},"Properties"),(0,i.mdx)("h3",{id:"a-idcomputedname-namecomputednamea-computedname"},(0,i.mdx)("a",{id:"computedName",name:"computedName"})," computedName"),(0,i.mdx)("p",null,"• ",(0,i.mdx)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.mdx)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.mdx)("strong",{parentName:"p"},"computedName"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"string")),(0,i.mdx)("p",null,"(Optional) Internally translated name computed based on UserAction state.\nIf not provided, fallback to required name MessageDescriptor."),(0,i.mdx)("h4",{id:"defined-in"},"Defined in"),(0,i.mdx)("p",null,"platform/common/user-action/dist/UserAction.d.ts:52"),(0,i.mdx)("hr",null),(0,i.mdx)("h3",{id:"a-idcontext-namecontexta-context"},(0,i.mdx)("a",{id:"context",name:"context"})," context"),(0,i.mdx)("p",null,"• ",(0,i.mdx)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.mdx)("strong",{parentName:"p"},"context"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"boolean")),(0,i.mdx)("h4",{id:"defined-in-1"},"Defined in"),(0,i.mdx)("p",null,"platform/common/user-action/dist/UserAction.d.ts:67"),(0,i.mdx)("hr",null),(0,i.mdx)("h3",{id:"a-iddisabled-namedisableda-disabled"},(0,i.mdx)("a",{id:"disabled",name:"disabled"})," disabled"),(0,i.mdx)("p",null,"• ",(0,i.mdx)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.mdx)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.mdx)("strong",{parentName:"p"},"disabled"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"boolean")),(0,i.mdx)("p",null,"(Optional) UserActions may compute disabled state based on application/document state.\nIf undefined, the action will always be enabled."),(0,i.mdx)("h4",{id:"defined-in-2"},"Defined in"),(0,i.mdx)("p",null,"platform/common/user-action/dist/UserAction.d.ts:57"),(0,i.mdx)("hr",null),(0,i.mdx)("h3",{id:"a-idisbrowsernative-nameisbrowsernativea-isbrowsernative"},(0,i.mdx)("a",{id:"isBrowserNative",name:"isBrowserNative"})," isBrowserNative"),(0,i.mdx)("p",null,"• ",(0,i.mdx)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.mdx)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.mdx)("strong",{parentName:"p"},"isBrowserNative"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"boolean")),(0,i.mdx)("p",null,"(Optional) If set to true, we do NOT register the UserAction to Mousetrap handler.\nThis way we can have the formatted keyboard shortcut but let the browser handle the event."),(0,i.mdx)("h4",{id:"defined-in-3"},"Defined in"),(0,i.mdx)("p",null,"platform/common/user-action/dist/UserAction.d.ts:66"),(0,i.mdx)("hr",null),(0,i.mdx)("h3",{id:"a-idkeybinding-namekeybindinga-keybinding"},(0,i.mdx)("a",{id:"keybinding",name:"keybinding"})," keybinding"),(0,i.mdx)("p",null,"• ",(0,i.mdx)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.mdx)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.mdx)("strong",{parentName:"p"},"keybinding"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"KeybindingValue")),(0,i.mdx)("p",null,"(Optional) Default keybinding(s)"),(0,i.mdx)("h4",{id:"defined-in-4"},"Defined in"),(0,i.mdx)("p",null,"platform/common/user-action/dist/UserAction.d.ts:61"),(0,i.mdx)("hr",null),(0,i.mdx)("h3",{id:"a-idname-namenamea-name"},(0,i.mdx)("a",{id:"name",name:"name"})," name"),(0,i.mdx)("p",null,"• ",(0,i.mdx)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.mdx)("strong",{parentName:"p"},"name"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"MessageDescriptor")),(0,i.mdx)("p",null,"Default MessageDescriptor to translate as the ",(0,i.mdx)("a",{parentName:"p",href:"UserAction.md"},"UserAction")," name\nfor display in UI (e.g. context menu). Translation is performed by\nUserActionManager."),(0,i.mdx)("h4",{id:"defined-in-5"},"Defined in"),(0,i.mdx)("p",null,"platform/common/user-action/dist/UserAction.d.ts:47"),(0,i.mdx)("h2",{id:"methods-1"},"Methods"),(0,i.mdx)("h3",{id:"a-idexecute-nameexecutea-execute"},(0,i.mdx)("a",{id:"execute",name:"execute"})," execute"),(0,i.mdx)("p",null,"▸ ",(0,i.mdx)("strong",{parentName:"p"},"execute"),"(",(0,i.mdx)("inlineCode",{parentName:"p"},"actionMessage?"),"): ",(0,i.mdx)("inlineCode",{parentName:"p"},"void")),(0,i.mdx)("p",null,"Mutate UI or authoring/document state."),(0,i.mdx)("h4",{id:"parameters"},"Parameters"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"actionMessage?")),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"Readonly"),"<",(0,i.mdx)("inlineCode",{parentName:"td"},"Message"),"<",(0,i.mdx)("inlineCode",{parentName:"td"},"ActionTypeMap"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"T"),">"," & { ",(0,i.mdx)("inlineCode",{parentName:"td"},"metadata?"),": ",(0,i.mdx)("inlineCode",{parentName:"td"},"ActionMetadata"),"  }",">")))),(0,i.mdx)("h4",{id:"returns"},"Returns"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"void")),(0,i.mdx)("h4",{id:"overrides"},"Overrides"),(0,i.mdx)("p",null,"BaseAction.execute"),(0,i.mdx)("h4",{id:"defined-in-6"},"Defined in"),(0,i.mdx)("p",null,"platform/common/user-action/dist/UserAction.d.ts:84"),(0,i.mdx)("hr",null),(0,i.mdx)("h3",{id:"a-idneedstoupdate-nameneedstoupdatea-needstoupdate"},(0,i.mdx)("a",{id:"needsToUpdate",name:"needsToUpdate"})," needsToUpdate"),(0,i.mdx)("p",null,"▸ ",(0,i.mdx)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.mdx)("strong",{parentName:"p"},"needsToUpdate"),"(): ",(0,i.mdx)("inlineCode",{parentName:"p"},"boolean")),(0,i.mdx)("p",null,"(Optional) Called every frame while the action is registered. Imeplementations should\nreturn true when the UI or authoring/document state used disable the action is dirty.\nThe action must also define the ",(0,i.mdx)("a",{parentName:"p",href:"UserAction.md#update"},"update")," method."),(0,i.mdx)("h4",{id:"returns-1"},"Returns"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"boolean")),(0,i.mdx)("p",null,"whether the action needs to update disabled state."),(0,i.mdx)("h4",{id:"defined-in-7"},"Defined in"),(0,i.mdx)("p",null,"platform/common/user-action/dist/UserAction.d.ts:75"),(0,i.mdx)("hr",null),(0,i.mdx)("h3",{id:"a-idupdate-nameupdatea-update"},(0,i.mdx)("a",{id:"update",name:"update"})," update"),(0,i.mdx)("p",null,"▸ ",(0,i.mdx)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.mdx)("strong",{parentName:"p"},"update"),"(): ",(0,i.mdx)("inlineCode",{parentName:"p"},"void")),(0,i.mdx)("p",null,"(Optional) Update disabled state. Called when needsToUpdate() returns true.\nThe action must also define the ",(0,i.mdx)("a",{parentName:"p",href:"UserAction.md#needsToUpdate"},"needsToUpdate")," method."),(0,i.mdx)("h4",{id:"returns-2"},"Returns"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"void")),(0,i.mdx)("h4",{id:"defined-in-8"},"Defined in"),(0,i.mdx)("p",null,"platform/common/user-action/dist/UserAction.d.ts:80"))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-interfaces-user-action-md-872f4dab0747be2ef40d.js.map