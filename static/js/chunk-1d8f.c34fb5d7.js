(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1d8f"],{"0Bwi":function(t,e,a){"use strict";var o=a("RWP0");a.n(o).a},"Gqe/":function(t,e,a){"use strict";var o=a("t3Un");e.a={login:function(t){return Object(o.a)({url:"/user/login",method:"post",data:t})}}},RWP0:function(t,e,a){},ntYl:function(t,e,a){"use strict";a.r(e);var o=a("Gqe/"),n=a("X4fA"),l={name:"Login",data:function(){return{loginForm:{account:"test",password:"123456",readAgreement:0,readAgreementValue:!1},loading:!1,redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},methods:{handleLogin:function(){var t=this;this.loading=!0,this.loginForm.readAgreement=this.loginForm.readAgreementValue?1:0,o.a.login(this.loginForm).then(function(e){var a=e.data.currentUser;Object(n.c)(a.token),t.loading=!1;var o=decodeURIComponent(t.$route.query.redirect||"/dashboard");t.$router.push({path:o})}).catch(function(e){t.loading=!1})}}},r=(a("0Bwi"),a("KHd+")),s=Object(r.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticStyle:{height:"80%"}},[a("el-main",{staticStyle:{"padding-top":"200px"}},[a("el-col",{attrs:{span:8,offset:1}},[a("div",[a("h2",[t._v("欢迎登录  "),a("span",{staticClass:"relationName"},[a("a",{attrs:{href:"https://www.yueshushu.top"}},[t._v("两个蝴蝶飞")])]),t._v("  自用交易软件")])]),t._v(" "),a("div",{staticClass:"mar30"},[a("p",{staticStyle:{"font-size":"18px",color:"red"}},[t._v("股票有风险,入市需谨慎")])])]),t._v(" "),a("el-col",{attrs:{span:10}},[a("div",[a("el-form",{ref:"loginForm",staticClass:"loginForm",attrs:{model:t.loginForm,"auto-complete":"on","label-position":"left"}},[a("el-form-item",{attrs:{prop:"username"}},[a("el-col",{attrs:{span:8}},[a("label",{staticClass:"control-label"},[t._v("登录账号:")])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{type:"text","auto-complete":"on",placeholder:"请输入用户名"},model:{value:t.loginForm.account,callback:function(e){t.$set(t.loginForm,"account",e)},expression:"loginForm.account"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{prop:"username"}},[a("el-col",{attrs:{span:8}},[a("label",{staticClass:"control-label"},[t._v("密码:")])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{type:"password","auto-complete":"on",placeholder:"请输入密码"},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1)],1),t._v(" "),a("el-form-item",[a("el-col",{attrs:{span:6}},[a("el-checkbox",{attrs:{label:"1"},model:{value:t.loginForm.readAgreementValue,callback:function(e){t.$set(t.loginForm,"readAgreementValue",e)},expression:"loginForm.readAgreementValue"}},[t._v("我已同意并知晓")])],1),t._v(" "),a("el-col",{staticClass:"notes",attrs:{span:18}},[a("p",[t._v("本软件不提供股市任何有价值的信息,不能做为股市投资软件使用")])])],1),t._v(" "),a("el-form-item",[a("el-col",{attrs:{offset:5}},[a("el-button",{staticStyle:{width:"40%"},attrs:{loading:t.loading,"element-loading-text":"登录中,请稍候...",type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("\n                登录\n              ")])],1)],1),t._v(" "),a("el-form-item",[a("el-col",{attrs:{offset:5}},[t._v("\n              本软件不提供注册服务。 如有需要,请 "),a("a",{attrs:{href:"tencent://message/?uin=1290513799&Exe=QQ&Site=Simplelife&Menu=ye"}},[a("span",{staticClass:"relationUser"},[t._v("联系系统管理员")])])])],1)],1)],1)])],1),t._v(" "),a("el-footer",[a("div",{staticClass:"copyText"},[a("small",[t._v("© 2021 "),a("a",{attrs:{href:"https://blog.csdn.net/yjltx1234csdn",target:"_blank"}},[t._v("岳叔叔")])]),a("br")])])],1)},[],!1,null,"24c04bca",null);s.options.__file="index.vue";e.default=s.exports}}]);