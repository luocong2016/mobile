(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-111583f0"],{"0225":function(e,s,t){"use strict";var o=t("db01"),n=t.n(o);n.a},"266e":function(e,s,t){"use strict";var o=t("9b39"),n=t.n(o);n.a},"9b39":function(e,s,t){},ac2a:function(e,s,t){"use strict";t.r(s);var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"login"},[e._m(0),t("div",{staticClass:"login__content"},[t("van-field",{attrs:{placeholder:"手机号码/帐号","left-icon":"user-o","error-message":e.usernameError},model:{value:e.username,callback:function(s){e.username=s},expression:"username"}}),"password"===e.loginWay?t("van-field",{attrs:{placeholder:"登录密码","left-icon":"lock",type:e.passwordType},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}},[t("van-icon",{attrs:{slot:"right-icon",name:e.passwordIcon},on:{click:e.switchPasswordType},slot:"right-icon"})],1):t("van-field",{attrs:{placeholder:"短信验证码","left-icon":"comment-o",type:"text"},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}},[t("verification-code",{attrs:{slot:"button"},on:{sendVerifyCode:e.sendVerifyCode},slot:"button"})],1),t("div",{staticClass:"button-wrap"},[t("van-button",{attrs:{size:"large",type:"info"},on:{click:e.handleLogin}},[e._v("登录")])],1),t("div",{staticClass:"more-wrap"},[t("router-link",{staticClass:"link",attrs:{to:"/register"}},[e._v("没有账号？去注册")]),t("div",{staticClass:"switch-way",on:{click:e.switchLoginWay}},[e._v(e._s(e.loginWayObj.toggleMsg))])],1)],1)])},n=[function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",{staticClass:"login__header"},[o("div",{staticClass:"login__header--logo"},[o("img",{attrs:{src:t("cf05"),alt:"default_logo"}})])])}],i=t("5530"),a=t("2f62"),r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("van-button",{staticClass:"verificationCode",attrs:{size:"mini",type:"primary","native-type":"button",disabled:!!e.codeRestTime},on:{click:e.btnClick}},[e._v(" "+e._s(e.codeRestTime?e.codeRestTime+"S":"发送验证码")+" ")])},c=[],l=(t("a9e3"),{name:"VerificationCode",props:{btnMsg:{type:String,default:"发送验证码"},restTime:{type:Number,default:60}},data:function(){return{codeRestTime:0}},methods:{btnClick:function(){var e=this;this.codeRestTime=this.restTime;var s=setInterval((function(){--e.codeRestTime,e.codeRestTime||(clearInterval(s),s=null)}),1e3);this.$emit("sendVerifyCode")}}}),d=l,u=(t("266e"),t("2877")),p=Object(u["a"])(d,r,c,!1,null,"53cf0393",null),f=p.exports,m={name:"Login",components:{VerificationCode:f},data:function(){return{username:"18650000000",password:"123456",code:"",loginWay:"password",passwordType:"password",usernameError:""}},computed:{loginWayObj:function(){return"password"===this.loginWay?{icon:"closed-eye",toggleMsg:"验证码登录"}:{icon:"eye",toggleMsg:"密码登录"}},passwordIcon:function(){return"password"===this.passwordType?"closed-eye":"eye"}},methods:Object(i["a"])(Object(i["a"])({},Object(a["b"])({login:"user/login"})),{},{switchPasswordType:function(){this.passwordType="password"===this.passwordType?"text":"password"},sendVerifyCode:function(){this.usernameError="",this.username||(this.usernameError="手机号码必填")},handleLogin:function(){var e={username:this.username,password:this.password,$router:this.$router,$route:this.$route};this.login(e)},switchLoginWay:function(){this.password=this.code="",this.loginWay="password"===this.loginWay?"verifyCode":"password"}})},w=m,g=(t("0225"),Object(u["a"])(w,o,n,!1,null,null,null));s["default"]=g.exports},cf05:function(e,s,t){e.exports=t.p+"img/logo.82b9c7a5.png"},db01:function(e,s,t){}}]);
//# sourceMappingURL=chunk-111583f0.746a253c.js.map