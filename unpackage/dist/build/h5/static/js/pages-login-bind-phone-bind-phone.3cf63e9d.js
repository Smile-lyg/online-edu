(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-bind-phone-bind-phone"],{"3e68":function(t,e,n){"use strict";n.r(e);var a=n("ea44"),i=n("4556");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var u,r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"9ca4ebd0",null,!1,a["a"],u);e["default"]=s.exports},4556:function(t,e,n){"use strict";n.r(e);var a=n("b368"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},b368:function(t,e,n){"use strict";(function(t){var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530"));n("96cf");var o=a(n("1da1")),u={data:function(){return{formData:{phone:"",code:""},uinfo:{}}},created:function(){this.uinfo=this.$store.state.user.userInfo},methods:{back:function(){uni.navigateBack({delta:1})},submit:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=(0,i.default)({},e.formData),o=null,n.next=4,e.$api.bindPhone(a);case 4:o=n.sent,t.log(o),e.$toast("绑定成功"),e.uinfo.phone=a.phone,e.$store.commit("user/updateUser",e.uinfo),setTimeout((function(){e.back()}),350);case 10:case"end":return n.stop()}}),n)})))()}}};e.default=u}).call(this,n("5a52")["default"])},ea44:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uniIcons:n("baed").default,codeBtn:n("f7ff").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("v-uni-view",{staticClass:"login-back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[n("uni-icons",{attrs:{type:"left",size:"20",color:"#fff"}})],1),n("v-uni-view",{staticClass:"login-bg"}),n("v-uni-view",{staticClass:"login-box"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",{},[t._v("绑定手机号")])],1),n("v-uni-view",{staticClass:"login-form"},[n("uni-icons",{attrs:{type:"person",size:"20",color:""}}),n("v-uni-input",{staticClass:"round",attrs:{type:"text",value:"",placeholder:"请输入手机号"},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}})],1),n("v-uni-view",{staticClass:"login-form"},[n("uni-icons",{attrs:{type:"email",size:"20",color:""}}),n("v-uni-input",{staticClass:"round",attrs:{type:"text",value:"",placeholder:"验证码"},model:{value:t.formData.code,callback:function(e){t.$set(t.formData,"code",e)},expression:"formData.code"}}),n("code-btn",{attrs:{phone:t.formData.phone}})],1),n("v-uni-view",{staticClass:"bg-main btn",attrs:{"hover-class":"bg-main-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("绑定")])],1)],1)},o=[]}}]);