(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-setting"],{"404f":function(t,n,e){"use strict";e.r(n);var i=e("8269"),u=e("d5e4");for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);var a,o=e("f0c5"),c=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,"08339067",null,!1,i["a"],a);n["default"]=c.exports},"7ca3":function(t,n,e){"use strict";e.r(n);var i=e("ca99"),u=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=u.a},8269:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"bg-main main-btn",attrs:{"hover-class":"bg-main-hover"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1)},r=[]},c561:function(t,n,e){"use strict";e.r(n);var i=e("e56d"),u=e("7ca3");for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);var a,o=e("f0c5"),c=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,"28d0d566",null,!1,i["a"],a);n["default"]=c.exports},c94b:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"main-button",data:function(){return{}},methods:{onClick:function(){this.$emit("click")}}};n.default=i},ca99:function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=i(e("5530")),r=e("26cb"),a={computed:(0,u.default)({},(0,r.mapState)("user",["userInfo"])),data:function(){return{}},methods:{handleLoginOut:function(){var t=this;uni.showModal({content:"是否退出登录？",success:function(n){n.cancel||t.$store.dispatch("user/logout").then((function(n){t.$toast("退出登录成功")}))}})}}};n.default=a},d5e4:function(t,n,e){"use strict";e.r(n);var i=e("c94b"),u=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=u.a},e56d:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var i={uniList:e("7a89").default,uniListItem:e("4506").default,mainButton:e("404f").default},u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("uni-list",{attrs:{border:!1}},[e("uni-list-item",{attrs:{clickable:!0,border:!1,title:"账户安全",showArrow:!0},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.authJump("/pages/login/user-safe")}}}),e("uni-list-item",{attrs:{clickable:!0,border:!1,title:"清除缓存"}},[e("v-uni-text",{attrs:{slot:"footer"},slot:"footer"},[t._v("1.2M")])],1),e("uni-list-item",{attrs:{clickable:!0,border:!1,title:"检查更新",showArrow:!0}}),e("uni-list-item",{attrs:{border:!1,title:"当前版本"}},[e("v-uni-text",{attrs:{slot:"footer"},slot:"footer"},[t._v("1.0.0")])],1)],1),t.userInfo?e("v-uni-view",{staticClass:"p-3"},[e("main-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleLoginOut.apply(void 0,arguments)}}},[t._v("退出登录")])],1):t._e()],1)},r=[]}}]);