(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6808:function(e,t,n){Promise.resolve().then(n.t.bind(n,6964,23)),Promise.resolve().then(n.t.bind(n,8079,23)),Promise.resolve().then(n.t.bind(n,7917,23)),Promise.resolve().then(n.t.bind(n,3038,23)),Promise.resolve().then(n.bind(n,796)),Promise.resolve().then(n.bind(n,4915)),Promise.resolve().then(n.t.bind(n,5251,23)),Promise.resolve().then(n.t.bind(n,7935,23)),Promise.resolve().then(n.t.bind(n,9538,23)),Promise.resolve().then(n.t.bind(n,9066,23))},2597:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return c},unstable_getImgProps:function(){return unstable_getImgProps}});let o=n(1024),i=n(3655),a=n(7707),s=n(6964),l=o._(n(5324)),unstable_getImgProps=e=>{(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},c=s.Image},4233:function(e,t,n){"use strict";n.r(t),n.d(t,{Button:function(){return Button}});var o=n(7437),i=n(1638),a=n.n(i);n(2265);var s=n(7042);let Button=e=>{let{children:t,className:n,...i}=e;return(0,o.jsx)("button",{className:(0,s.Z)(a().main,n),...i,children:t})}},796:function(e,t,n){"use strict";n.r(t),n.d(t,{GitButton:function(){return GitButton}});var o=n(7437),i=n(6691),a=n.n(i),s=n(4233);let l="https://github.com/mpcl5",GitButton=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("a",{href:l,className:"d-none d-md-inline-block",children:(0,o.jsx)(s.Button,{onClick:()=>{window.open(l,"_blank")},children:(0,o.jsx)(a(),{src:"/img/github.svg",alt:"github",width:104,height:26,priority:!0})})})})},4915:function(e,t,n){"use strict";n.r(t),n.d(t,{NavigationBar:function(){return NavigationBar}});var o=n(7437),i=n(8445),a=n.n(i),s=n(4206),l=n.n(s),c=n(1396),u=n.n(c),_=n(7042),f=n(4033);let m=[{label:"/Home",path:"/"},{label:"/Contact",path:"/contact"},{label:"/Blog",path:"https://blog.masoud.live/"},{label:"/Publications",path:"/publications"}],NavigationBar=()=>{let e=(0,f.usePathname)();return(0,o.jsx)("ul",{className:"".concat(a().className," ").concat(l().main," d-none d-md-flex"),children:m.map(t=>(0,o.jsx)("li",{className:(0,_.Z)(t.path===e&&l().active),children:(0,o.jsx)(u(),{href:t.path,children:t.label})},t.path))})}},5251:function(){},1638:function(e){e.exports={main:"Button_main__V3KTt"}},7917:function(e){e.exports={main:"Footer_main__Lg_gg"}},9538:function(e){e.exports={main:"Logo_main__j_Igg"}},4206:function(e){e.exports={main:"NavigationBar_main__hk_PI",active:"NavigationBar_active__RKnbx"}},9066:function(e){e.exports={main:"SandwichButton_main__iguHk"}},7935:function(e){e.exports={main:"Header_main__KZ18k"}},8079:function(e){e.exports={style:{fontFamily:"'__Work_Sans_1fc36d', '__Work_Sans_Fallback_1fc36d'",fontStyle:"normal"},className:"__className_1fc36d"}},3038:function(e){e.exports={style:{fontFamily:"'__Fira_Mono_8e6ba5', '__Fira_Mono_Fallback_8e6ba5'",fontWeight:700,fontStyle:"normal"},className:"__className_8e6ba5"}},8445:function(e){e.exports={style:{fontFamily:"'__Fira_Mono_a533b8', '__Fira_Mono_Fallback_a533b8'",fontWeight:400,fontStyle:"normal"},className:"__className_a533b8"}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=n(2265),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var o,a={},u=null,_=null;for(o in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(_=t.ref),t)s.call(t,o)&&!c.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:i,type:e,key:u,ref:_,props:a,_owner:l.current}}t.Fragment=a,t.jsx=q,t.jsxs=q},7437:function(e,t,n){"use strict";e.exports=n(622)},6691:function(e,t,n){e.exports=n(2597)},1396:function(e,t,n){e.exports=n(4724)},4033:function(e,t,n){e.exports=n(290)},7042:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e){if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t)}return o}(e))&&(o&&(o+=" "),o+=t);return o}}},function(e){e.O(0,[929,971,864,744],function(){return e(e.s=6808)}),_N_E=e.O()}]);