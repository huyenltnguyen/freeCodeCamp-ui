"use strict";(self.webpackChunk_freecodecamp_ui=self.webpackChunk_freecodecamp_ui||[]).push([[16],{"./src/button/button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsADownloadLink:()=>AsADownloadLink,AsALink:()=>AsALink,AsASubmitButton:()=>AsASubmitButton,Danger:()=>Danger,Default:()=>Default,Disabled:()=>Disabled,FullWidth:()=>FullWidth,Info:()=>Info,Large:()=>Large,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),_form_control__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/form-control/index.ts"),_form_group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/form-group/index.ts"),_control_label__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/control-label/index.ts"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/button/index.ts");const story={title:"Components/Button",component:___WEBPACK_IMPORTED_MODULE_4__.$,parameters:{controls:{include:["children","variant","size","disabled","block","href","download","target","onClick"]}},argTypes:{variant:{options:["primary","danger","info"]},size:{options:["small","medium","large"]},disabled:{options:[!0,!1],control:{type:"radio"}},block:{options:[!0,!1],control:{type:"radio"}},target:{options:["_self","_blank","_parent","_top"]},onClick:{action:"clicked"},href:{control:{type:"text"}},download:{control:{type:"text"}}}},Default={args:{children:"Button"}},Danger={args:{variant:"danger",children:"Button"}},Info={args:{variant:"info",children:"Button"}},Large={args:{size:"large",children:"Button"}},Small={args:{size:"small",children:"Button"}},Disabled={args:{children:"Button",disabled:!0}},FullWidth={args:{children:"Button",block:!0}},AsALink={args:{children:"I'm a link that looks like a button",href:"https://www.freecodecamp.org"}},AsADownloadLink={args:{children:"I'm a download link",href:"https://www.freecodecamp.org",download:"my_file.txt"}},AsASubmitButton={render:()=>{const[username,setUsername]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return react__WEBPACK_IMPORTED_MODULE_0__.createElement("form",{onSubmit:()=>{alert("Submitted")}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_form_group__WEBPACK_IMPORTED_MODULE_2__.g,{controlId:"username"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_control_label__WEBPACK_IMPORTED_MODULE_3__.m,null,"Username"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_form_control__WEBPACK_IMPORTED_MODULE_1__.M,{componentClass:"input",type:"text",onChange:event=>{setUsername(event.target.value)}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_4__.$,{type:"submit",disabled:!username},"Submit"))}},__WEBPACK_DEFAULT_EXPORT__=story;Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Button"\n  }\n}',...Default.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "danger",\n    children: "Button"\n  }\n}',...Danger.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "info",\n    children: "Button"\n  }\n}',...Info.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "large",\n    children: "Button"\n  }\n}',...Large.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "small",\n    children: "Button"\n  }\n}',...Small.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Button",\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Button",\n    block: true\n  }\n}',...FullWidth.parameters?.docs?.source}}},AsALink.parameters={...AsALink.parameters,docs:{...AsALink.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "I\'m a link that looks like a button",\n    href: "https://www.freecodecamp.org"\n  }\n}',...AsALink.parameters?.docs?.source}}},AsADownloadLink.parameters={...AsADownloadLink.parameters,docs:{...AsADownloadLink.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "I\'m a download link",\n    href: "https://www.freecodecamp.org",\n    download: "my_file.txt"\n  }\n}',...AsADownloadLink.parameters?.docs?.source}}},AsASubmitButton.parameters={...AsASubmitButton.parameters,docs:{...AsASubmitButton.parameters?.docs,source:{originalSource:"{\n  render: FormWithSubmitButton\n}",...AsASubmitButton.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Danger","Info","Large","Small","Disabled","FullWidth","AsALink","AsADownloadLink","AsASubmitButton"]},"./src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,Q:()=>HeadlessButton});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const defaultClassNames=["relative","inline-block","mt-[0.5px]","border-solid","border-3","active:before:w-full","active:before:h-full","active:before:absolute","active:before:inset-0","active:before:border-3","active:before:border-transparent","active:before:bg-gray-900","active:before:opacity-20","text-center","cursor-pointer","no-underline"],StylessButton=react.forwardRef(((_ref2,ref)=>{let{className,onClick,disabled,children,type="button",...rest}=_ref2;return react.createElement("button",_extends({className,onClick:event=>{disabled?event.preventDefault():onClick&&onClick(event)},"aria-disabled":disabled,ref,type},rest),children)})),Link=react.forwardRef(((_ref3,ref)=>{let{className,href,download,target,children,...rest}=_ref3;return react.createElement("a",_extends({className,download,target,ref,href},rest),children)})),HeadlessButton=react.forwardRef(((_ref4,ref)=>{let{onClick,className,children,disabled,href,download,target,...rest}=_ref4;return href&&!disabled?react.createElement(Link,_extends({className,href,download,target,ref,onClick},rest),children):react.createElement(StylessButton,_extends({className,onClick,disabled,ref},rest),children)})),Button=react.forwardRef(((_ref5,ref)=>{let{className,size="medium",disabled,variant="primary",block,...rest}=_ref5;const buttonStyle=[className,(0,react.useMemo)((()=>(_ref=>{let{size,variant,disabled,block}=_ref;const classNames=[...defaultClassNames];switch(block&&classNames.push("block","w-full"),variant){case"danger":classNames.push("border-foreground-danger","bg-background-danger","text-foreground-danger","hover:bg-foreground-danger","hover:text-background-danger","hover:border-foreground-danger","dark:hover:bg-background-danger","dark:hover:text-foreground-danger");break;case"info":classNames.push("border-foreground-info","bg-background-info","text-foreground-info","hover:bg-foreground-info","hover:text-background-info","hover:border-foreground-info","dark:hover:bg-background-info","dark:hover:text-foreground-info");break;default:classNames.push("bg-background-quaternary","text-foreground-secondary",...disabled?["active:before:hidden","border-gray-450","aria-disabled:cursor-not-allowed","aria-disabled:opacity-80"]:["border-foreground-secondary","hover:bg-foreground-primary","hover:text-background-primary","hover:border-foreground-secondary","dark:hover:bg-background-primary","dark:hover:text-foreground-primary"])}switch(size){case"large":classNames.push("px-4 py-2.5 text-lg");break;case"small":classNames.push("px-2.5 py-1 text-sm");break;default:classNames.push("px-3 py-1.5 text-md")}return classNames.join(" ")})({size,variant,disabled,block})),[size,variant,disabled,block])].join(" ");return react.createElement(HeadlessButton,_extends({className:buttonStyle,ref,disabled},rest))}));Button.displayName="Button",HeadlessButton.displayName="HeadlessButton",StylessButton.displayName="StylessButton",Link.displayName="Link";try{HeadlessButton.displayName="Button",HeadlessButton.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"danger"'},{value:'"info"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"submit"'}]}},block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean | undefined"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},download:{defaultValue:null,description:"",name:"download",required:!1,type:{name:"string | undefined"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/control-label/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>ControlLabel});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),form_group=__webpack_require__("./src/form-group/form-group.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const validationLabel={success:"text-background-info",warning:"text-background-warning",error:"text-background-danger"},ControlLabel=_ref=>{let{className,htmlFor,srOnly,...props}=_ref;const{controlId,validationState}=(0,react.useContext)(form_group.c),defaultClasses=[validationState?validationLabel[validationState]:"text-foreground-primary",srOnly?"sr-only":void 0,className].join(" ");return react.createElement("label",_extends({className:defaultClasses,htmlFor:htmlFor||controlId},props))};try{ControlLabel.displayName="ControlLabel",ControlLabel.__docgenInfo={description:"",displayName:"ControlLabel",props:{htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string | undefined"}},srOnly:{defaultValue:null,description:"",name:"srOnly",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/control-label/control-label.tsx#ControlLabel"]={docgenInfo:ControlLabel.__docgenInfo,name:"ControlLabel",path:"src/control-label/control-label.tsx#ControlLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/form-control/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>FormControl});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),form_group=__webpack_require__("./src/form-group/form-group.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const FormControlFeedback=_ref=>{let{children,className,...props}=_ref;const classes=[className,"absolute top-[30px] right-0 z-2 block w-8 h-8 leading-8 text-center pointer-events-none text-green-700"].join(" ");return react.createElement("span",_extends({className:classes},props),children)};try{FormControlFeedback.displayName="FormControlFeedback",FormControlFeedback.__docgenInfo={description:"",displayName:"FormControlFeedback",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-control/form-control-feedback.tsx#FormControlFeedback"]={docgenInfo:FormControlFeedback.__docgenInfo,name:"FormControlFeedback",path:"src/form-control/form-control-feedback.tsx#FormControlFeedback"})}catch(__react_docgen_typescript_loader_error){}function form_control_static_extends(){return form_control_static_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},form_control_static_extends.apply(null,arguments)}const FormControlStatic=_ref=>{let{className,children,...props}=_ref;const classes=["py-1.5 mb-0 min-h-43-px text-foreground-secondary",className].join(" ");return react.createElement("p",form_control_static_extends({className:classes},props),children)};try{FormControlStatic.displayName="FormControlStatic",FormControlStatic.__docgenInfo={description:"",displayName:"FormControlStatic",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-control/form-control-static.tsx#FormControlStatic"]={docgenInfo:FormControlStatic.__docgenInfo,name:"FormControlStatic",path:"src/form-control/form-control-static.tsx#FormControlStatic"})}catch(__react_docgen_typescript_loader_error){}function form_control_extends(){return form_control_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},form_control_extends.apply(null,arguments)}let variantClass;const defaultClasses="outline-0 block w-full py-1.5 px-2.5 text-md text-foreground-primary bg-background-primary bg-none rounded-none border-1 border-solid border-background-quaternary shadow-none transition ease-in-out duration-150 focus:border-foreground-tertiary",FormControl=_ref=>{let{componentClass,...props}=_ref;const{controlId}=(0,react.useContext)(form_group.c),{id,className}=props,Component=componentClass||"input";"textarea"!==Component&&(variantClass=" h-8");const classes=[className,defaultClasses,variantClass].join(" ");return react.createElement(Component,form_control_extends({id:id||controlId,className:classes},props))};FormControl.Feedback=FormControlFeedback,FormControl.Static=FormControlStatic;try{FormControl.displayName="FormControl",FormControl.__docgenInfo={description:"",displayName:"FormControl",props:{componentClass:{defaultValue:null,description:"",name:"componentClass",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-control/form-control.tsx#FormControl"]={docgenInfo:FormControl.__docgenInfo,name:"FormControl",path:"src/form-control/form-control.tsx#FormControl"})}catch(__react_docgen_typescript_loader_error){}},"./src/form-group/form-group.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>FormContext,g:()=>FormGroup});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const FormContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),defaultClasses="mb-3.5 relative",FormGroup=_ref=>{let{className,validationState,controlId,as,...props}=_ref;const context={controlId,validationState},Component=as||"div",classes=[defaultClasses,className].join(" ");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormContext.Provider,{value:context},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,_extends({className:classes,as},props,{validationstate:validationState})))};try{FormGroup.displayName="FormGroup",FormGroup.__docgenInfo={description:"",displayName:"FormGroup",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"typeof Component | undefined"}},controlId:{defaultValue:null,description:"",name:"controlId",required:!1,type:{name:"string | undefined"}},validationState:{defaultValue:null,description:"",name:"validationState",required:!1,type:{name:'"success" | "warning" | "error" | null | undefined'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-group/form-group.tsx#FormGroup"]={docgenInfo:FormGroup.__docgenInfo,name:"FormGroup",path:"src/form-group/form-group.tsx#FormGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/form-group/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>_form_group__WEBPACK_IMPORTED_MODULE_0__.g});var _form_group__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/form-group/form-group.tsx")}}]);