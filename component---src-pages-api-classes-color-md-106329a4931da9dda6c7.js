"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2853],{21593:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return i},default:function(){return x}});var t=a(87462),r=a(63366),d=(a(15007),a(64983)),m=a(91515),l=["components"],i={},o={_frontmatter:i},p=m.Z;function x(e){var n=e.components,a=(0,r.Z)(e,l);return(0,d.mdx)(p,(0,t.Z)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"../overview.md"}," /authoring-api")," / Color"),(0,d.mdx)("h1",{id:"class-color"},"Class: Color"),(0,d.mdx)("p",null,"Represents a color in one of any available RGB colorspaces."),(0,d.mdx)("h2",{id:"table-of-contents"},"Table of contents"),(0,d.mdx)("h3",{id:"constructors"},"Constructors"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"Color.md#constructor"},"constructor"))),(0,d.mdx)("h3",{id:"properties"},"Properties"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"Color.md#alpha"},"alpha")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"Color.md#blue"},"blue")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"Color.md#colorSpace"},"colorSpace")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"Color.md#green"},"green")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"Color.md#red"},"red"))),(0,d.mdx)("h3",{id:"methods"},"Methods"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"Color.md#getHex"},"getHex")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"Color.md#getIntegerComponents"},"getIntegerComponents")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"Color.md#createFromHex"},"createFromHex"))),(0,d.mdx)("h2",{id:"constructors-1"},"Constructors"),(0,d.mdx)("h3",{id:"a-idconstructor-nameconstructora-constructor"},(0,d.mdx)("a",{id:"constructor",name:"constructor"})," constructor"),(0,d.mdx)("p",null,"• ",(0,d.mdx)("strong",{parentName:"p"},"new Color"),"(",(0,d.mdx)("inlineCode",{parentName:"p"},"red"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"green"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"blue"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"alpha?"),")"),(0,d.mdx)("p",null,"Create a new Color. All color components should be in a 0 - 1 range. Non-finite\nvalues are treated as 0. Any values outside this range are clamped to within the\nrange."),(0,d.mdx)("h4",{id:"parameters"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Default value"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"red")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"number")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"undefined")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The red component in a range from 0 - 1.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"green")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"number")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"undefined")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The green component in a range from 0 - 1.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"blue")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"number")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"undefined")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The blue component in a range from 0 - 1.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"alpha")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"number")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"1")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"(optional) The alpha component in a range from 0 - 1.")))),(0,d.mdx)("h4",{id:"defined-in"},"Defined in"),(0,d.mdx)("p",null,"platform/authoring/api/src/Color.ts:69"),(0,d.mdx)("h2",{id:"properties-1"},"Properties"),(0,d.mdx)("h3",{id:"a-idalpha-namealphaa-alpha"},(0,d.mdx)("a",{id:"alpha",name:"alpha"})," alpha"),(0,d.mdx)("p",null,"• ",(0,d.mdx)("inlineCode",{parentName:"p"},"Readonly")," ",(0,d.mdx)("strong",{parentName:"p"},"alpha"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"number")),(0,d.mdx)("p",null,"The alpha channel in range from 0 - 1."),(0,d.mdx)("h4",{id:"defined-in-1"},"Defined in"),(0,d.mdx)("p",null,"platform/authoring/api/src/Color.ts:52"),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"a-idblue-namebluea-blue"},(0,d.mdx)("a",{id:"blue",name:"blue"})," blue"),(0,d.mdx)("p",null,"• ",(0,d.mdx)("inlineCode",{parentName:"p"},"Readonly")," ",(0,d.mdx)("strong",{parentName:"p"},"blue"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"number")),(0,d.mdx)("p",null,"The blue channel in range from 0 - 1."),(0,d.mdx)("h4",{id:"defined-in-2"},"Defined in"),(0,d.mdx)("p",null,"platform/authoring/api/src/Color.ts:47"),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"a-idcolorspace-namecolorspacea-colorspace"},(0,d.mdx)("a",{id:"colorSpace",name:"colorSpace"})," colorSpace"),(0,d.mdx)("p",null,"• ",(0,d.mdx)("inlineCode",{parentName:"p"},"Readonly")," ",(0,d.mdx)("strong",{parentName:"p"},"colorSpace"),": ",(0,d.mdx)("a",{parentName:"p",href:"../enums/ColorSpace.md#sRGB"},(0,d.mdx)("inlineCode",{parentName:"a"},"sRGB"))," = ",(0,d.mdx)("inlineCode",{parentName:"p"},"ColorSpace.sRGB")),(0,d.mdx)("p",null,"This color's color space. Currently only sRGB is supported."),(0,d.mdx)("h4",{id:"defined-in-3"},"Defined in"),(0,d.mdx)("p",null,"platform/authoring/api/src/Color.ts:57"),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"a-idgreen-namegreena-green"},(0,d.mdx)("a",{id:"green",name:"green"})," green"),(0,d.mdx)("p",null,"• ",(0,d.mdx)("inlineCode",{parentName:"p"},"Readonly")," ",(0,d.mdx)("strong",{parentName:"p"},"green"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"number")),(0,d.mdx)("p",null,"The green channel in range from 0 - 1."),(0,d.mdx)("h4",{id:"defined-in-4"},"Defined in"),(0,d.mdx)("p",null,"platform/authoring/api/src/Color.ts:42"),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"a-idred-namereda-red"},(0,d.mdx)("a",{id:"red",name:"red"})," red"),(0,d.mdx)("p",null,"• ",(0,d.mdx)("inlineCode",{parentName:"p"},"Readonly")," ",(0,d.mdx)("strong",{parentName:"p"},"red"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"number")),(0,d.mdx)("p",null,"The red channel in range from 0 - 1."),(0,d.mdx)("h4",{id:"defined-in-5"},"Defined in"),(0,d.mdx)("p",null,"platform/authoring/api/src/Color.ts:37"),(0,d.mdx)("h2",{id:"methods-1"},"Methods"),(0,d.mdx)("h3",{id:"a-idgethex-namegethexa-gethex"},(0,d.mdx)("a",{id:"getHex",name:"getHex"})," getHex"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"getHex"),"(): ",(0,d.mdx)("inlineCode",{parentName:"p"},"string")),(0,d.mdx)("p",null,'Get the color in hex "#RRGGBBAA" format. This format is only valid for the sRGB\ncolor space. If the color is in another color space, this will result in a lossy\nconversion.'),(0,d.mdx)("h4",{id:"returns"},"Returns"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"string")),(0,d.mdx)("h4",{id:"defined-in-6"},"Defined in"),(0,d.mdx)("p",null,"platform/authoring/api/src/Color.ts:103"),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"a-idgetintegercomponents-namegetintegercomponentsa-getintegercomponents"},(0,d.mdx)("a",{id:"getIntegerComponents",name:"getIntegerComponents"})," getIntegerComponents"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"getIntegerComponents"),"(): ",(0,d.mdx)("inlineCode",{parentName:"p"},"Object")),(0,d.mdx)("h4",{id:"returns-1"},"Returns"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"Object")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"alpha")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"number"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"blue")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"number"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"green")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"number"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"red")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"number"))))),(0,d.mdx)("h4",{id:"defined-in-7"},"Defined in"),(0,d.mdx)("p",null,"platform/authoring/api/src/Color.ts:122"),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"a-idcreatefromhex-namecreatefromhexa-createfromhex"},(0,d.mdx)("a",{id:"createFromHex",name:"createFromHex"})," createFromHex"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("inlineCode",{parentName:"p"},"Static")," ",(0,d.mdx)("strong",{parentName:"p"},"createFromHex"),"(",(0,d.mdx)("inlineCode",{parentName:"p"},"hex"),"): ",(0,d.mdx)("a",{parentName:"p",href:"Color.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"Color"))),(0,d.mdx)("p",null,'Create a new color from its equivalent RGBA hex representation. Currently only\nsupports formats "#RRGGBBAA" or "RRGGBBAA". If the hex value is invalid, this\nmethod will return transparent black.'),(0,d.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"hex")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The color in hex representation.")))),(0,d.mdx)("h4",{id:"returns-2"},"Returns"),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"Color.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"Color"))),(0,d.mdx)("p",null,"A new color matching the given hex representation, or transparent black if\nthe hex string cannot be parsed."),(0,d.mdx)("h4",{id:"defined-in-8"},"Defined in"),(0,d.mdx)("p",null,"platform/authoring/api/src/Color.ts:92"))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-classes-color-md-106329a4931da9dda6c7.js.map