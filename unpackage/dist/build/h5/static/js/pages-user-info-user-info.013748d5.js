(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-info-user-info"],{"404f":function(t,n,e){"use strict";e.r(n);var i=e("8269"),a=e("d5e4");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);var r,u=e("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"08339067",null,!1,i["a"],r);n["default"]=c.exports},"52c2":function(t,n,e){"use strict";e.r(n);var i=e("f1ad"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"76bb":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uniList:e("7a89").default,uniListItem:e("4506").default,mainButton:e("404f").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("uni-list",{attrs:{border:!1}},[e("uni-list-item",{attrs:{clickable:!0,border:!1,title:"头像"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changeAvatar.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"round-circle bg-light",staticStyle:{width:"80rpx",height:"80rpx"},attrs:{slot:"footer",src:t.form.avatar,mode:""},slot:"footer"})],1),e("uni-list-item",{attrs:{clickable:!0,border:!1,title:"昵称"}},[e("v-uni-input",{staticStyle:{"text-align":"right"},attrs:{slot:"footer",type:"text",placeholder:"未填写"},slot:"footer",model:{value:t.form.nickname,callback:function(n){t.$set(t.form,"nickname",n)},expression:"form.nickname"}})],1),e("uni-list-item",{attrs:{clickable:!0,border:!1,title:"性别"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changeSex.apply(void 0,arguments)}}},[e("v-uni-text",{attrs:{slot:"footer"},slot:"footer"},[t._v(t._s(t.form.sex))])],1),e("uni-list-item",{attrs:{clickable:!0,border:!1,title:"手机"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigateTo("/pages/login/bind-phone/bind-phone")}}},[e("v-uni-text",{attrs:{slot:"footer"},slot:"footer"},[t._v(t._s(t.userInfo.phone||"未绑定"))])],1)],1),e("v-uni-view",{staticClass:"p-3"},[e("main-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.submit.apply(void 0,arguments)}}},[t._v("保存")])],1)],1)},o=[]},8269:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"bg-main main-btn",attrs:{"hover-class":"bg-main-hover"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1)},o=[]},c94b:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"main-button",data:function(){return{}},methods:{onClick:function(){this.$emit("click")}}};n.default=i},d3b5:function(t,n,e){"use strict";e.r(n);var i=e("76bb"),a=e("52c2");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);var r,u=e("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"6cc5ce48",null,!1,i["a"],r);n["default"]=c.exports},d5e4:function(t,n,e){"use strict";e.r(n);var i=e("c94b"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},f1ad:function(t,n,e){"use strict";(function(t){var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("5530")),o=e("26cb"),r={computed:(0,a.default)({},(0,o.mapState)("user",["userInfo"])),data:function(){return{form:{sex:"未知",nickname:"",avatar:"https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/44f8d690-4f3d-11eb-b680-7980c8a877b8.svg"}}},created:function(){this.form={avatar:this.userInfo.avatar,nickname:this.userInfo.nickname,sex:this.userInfo.sex}},methods:{changeSex:function(){var t=this,n=["未知","男","女"];uni.showActionSheet({itemList:n,success:function(e){t.form.sex=n[e.tapIndex]}})},changeAvatar:function(){var n=this;uni.chooseImage({count:1,success:function(e){t.log(e.tempFilePaths[0]),n.form.avatar=e.tempFilePaths[0],n.$api.upload(e.tempFilePaths[0],(function(n){t.log("上传进度",n)})).then((function(n){t.log(n)}))}})},submit:function(){var n=Object.assign(this.form,{});t.log(n),this.$store.commit("user/updateInfo",n),t.log(this.userInfo),this.$toast("保存成功")}}};n.default=r}).call(this,e("5a52")["default"])}}]);