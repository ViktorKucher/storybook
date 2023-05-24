/*! For license information please see stories-Input-stories.3a24198d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunklab88=self.webpackChunklab88||[]).push([[437],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./src/stories/Input.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Standart:function(){return Standart},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Input_stories}});var _Standart$parameters,_Standart$parameters2,_Standart$parameters3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),Input=function Input(_ref){var type=_ref.type,borderRadius=_ref.borderRadius,style={width:_ref.width,height:_ref.height,borderRadius:borderRadius,borderColor:_ref.borderColor,color:_ref.color};return(0,jsx_runtime.jsx)("input",{type:type,style:style})};Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{description:"",type:{name:"string"},required:!1},borderRadius:{description:"",type:{name:"string"},required:!1},borderColor:{description:"",type:{name:"string"},required:!1},width:{description:"",type:{name:"string"},required:!1},height:{description:"",type:{name:"string"},required:!1},color:{description:"",type:{name:"string"},required:!1}}};var Input_stories={title:"Input",component:Input},Standart=function Template(args){return(0,jsx_runtime.jsx)(Input,(0,objectSpread2.Z)({},args))}.bind({});Standart.args={type:"text",borderRadius:"10px",width:"200px",height:"50px",borderColor:"green",color:"#000"},Standart.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Standart.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Standart$parameters=Standart.parameters)||void 0===_Standart$parameters?void 0:_Standart$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <Input {...args} />"},null===(_Standart$parameters2=Standart.parameters)||void 0===_Standart$parameters2||null===(_Standart$parameters3=_Standart$parameters2.docs)||void 0===_Standart$parameters3?void 0:_Standart$parameters3.source)})});var __namedExportsOrder=["Standart"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);