(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-setting"],{"1a63":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uniList:n("7a89").default,uniListItem:n("4506").default,mainButton:n("404f").default},u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-list",{attrs:{border:!1}},[n("uni-list-item",{attrs:{clickable:!0,border:!1,title:"账户安全",showArrow:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.authJump("/pages/login/user-safe")}}}),n("uni-list-item",{attrs:{clickable:!0,border:!1,title:"清除缓存"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearSize.apply(void 0,arguments)}}},[n("v-uni-text",{attrs:{slot:"footer"},slot:"footer"},[t._v(t._s(t._f("formatCurSize")(t.currentSize)))])],1),n("uni-list-item",{attrs:{clickable:!0,border:!1,title:"检查更新",showArrow:!0}}),n("uni-list-item",{attrs:{border:!1,title:"当前版本"}},[n("v-uni-text",{attrs:{slot:"footer"},slot:"footer"},[t._v("1.0.0")])],1)],1),t.userInfo?n("v-uni-view",{staticClass:"p-3"},[n("main-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleLoginOut.apply(void 0,arguments)}}},[t._v("退出登录")])],1):t._e()],1)},r=[]},"404f":function(t,e,n){"use strict";n.r(e);var i=n("8269"),u=n("d5e4");for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);var o,a=n("f0c5"),c=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"08339067",null,!1,i["a"],o);e["default"]=c.exports},"7ca3":function(t,e,n){"use strict";n.r(e);var i=n("ca99"),u=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=u.a},8269:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"bg-main main-btn",attrs:{"hover-class":"bg-main-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1)},r=[]},c561:function(t,e,n){"use strict";n.r(e);var i=n("1a63"),u=n("7ca3");for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);var o,a=n("f0c5"),c=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"793d7566",null,!1,i["a"],o);e["default"]=c.exports},c94b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"main-button",data:function(){return{}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},ca99:function(t,e,n){"use strict";var i=n("4ea4");n("4160"),n("d3b7"),n("159b"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=i(n("5530")),r=n("26cb"),o=i(n("fc65")),a={computed:(0,u.default)({},(0,r.mapState)("user",["userInfo"])),data:function(){return{currentSize:0,keys:[]}},filters:{formatCurSize:function(t){return o.default.bytesToSize(t)}},created:function(){this.getSize()},methods:{handleLoginOut:function(){var t=this;uni.showModal({content:"是否退出登录？",success:function(e){e.cancel||t.$store.dispatch("user/logout").then((function(e){t.$toast("退出登录成功")}))}})},getSize:function(){var t=this;uni.getStorageInfo({success:function(e){t.currentSize=e.currentSize,t.keys=e.keys}})},clearSize:function(){var t=this;uni.showModal({content:"是否要清除缓存",success:function(e){e.cancel||(t.keys.forEach((function(t){uni.removeStorageSync(t)})),t.$toast("清除缓存成功"),t.getSize())}})}}};e.default=a},d5e4:function(t,e,n){"use strict";n.r(e);var i=n("c94b"),u=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=u.a},fc65:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={bytesToSize:function(t){if(0===t)return"0 KB";var e=1e3,n=["KB","MB","GB"],i=Math.floor(Math.log(t)/Math.log(e));return(t/Math.pow(e,i)).toPrecision(3)+" "+n[i]}};e.default=i}}]);