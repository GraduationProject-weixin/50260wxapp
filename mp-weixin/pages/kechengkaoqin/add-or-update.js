(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kechengkaoqin/add-or-update"],{"0310":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n,t,r,i,o,a){try{var c=e[o](a),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,i)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function c(e){o(a,r,i,c,u,"next",e)}function u(e){o(a,r,i,c,u,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("cd92"))}.bind(null,t)).catch(t.oe)},u={data:function(){return{cross:"",ro:{kechengId:!1,yonghuId:!1,kechengkaoqinTypes:!1,insertTime:!1,updateTime:!1,createTime:!1},ruleForm:{kechengId:"",yonghuId:"",kechengkaoqinTypes:"",kechengkaoqinValue:"",insertTime:"",updateTime:"",createTime:""},user:{},kechengkaoqinTypesOptions:[],kechengkaoqinTypesIndex:0}},components:{wPicker:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var n=this;return a(r.default.mark((function t(){var i,o,a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i={page:1,limit:100,dicCode:"kechengkaoqin_types"},t.next=3,n.$api.page("dictionary",i);case 3:if(o=t.sent,n.kechengkaoqinTypesOptions=o.data.list,!e.id){t.next=11;break}return n.ruleForm.id=e.id,t.next=9,n.$api.info("kechengkaoqin",n.ruleForm.id);case 9:a=t.sent,n.ruleForm=a.data;case 11:e.kechengkaoqinId&&(n.ruleForm.kechengkaoqinId=e.kechengkaoqinId);case 12:case"end":return t.stop()}}),t)})))()},methods:{kechengkaoqinTypesChange:function(e){this.kechengkaoqinTypesIndex=e.target.value,this.ruleForm.kechengkaoqinValue=this.kechengkaoqinTypesOptions[this.kechengkaoqinTypesIndex].indexName,this.ruleForm.kechengkaoqinTypes=this.kechengkaoqinTypesOptions[this.kechengkaoqinTypesIndex].codeIndex},insertTimeConfirm:function(e){console.log(e),this.ruleForm.insertTime=e.result,this.$forceUpdate()},updateTimeConfirm:function(e){console.log(e),this.ruleForm.updateTime=e.result,this.$forceUpdate()},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return a(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.ruleForm.id){t.next=5;break}return t.next=3,n.$api.update("kechengkaoqin",n.ruleForm);case 3:t.next=7;break;case 5:return t.next=7,n.$api.save("kechengkaoqin",n.ruleForm);case 7:e.setStorageSync("pingluenStateState",!0),n.$utils.msgBack("提交成功");case 9:case"end":return t.stop()}}),t)})))()},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,i=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(t,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=u}).call(this,t("543d")["default"])},"1a1c":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"cd92"))}},i=function(){var e=this,n=e.$createElement;e._self._c},o=[]},"69bf":function(e,n,t){"use strict";var r=t("f428"),i=t.n(r);i.a},ab9b:function(e,n,t){"use strict";t.r(n);var r=t("0310"),i=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=i.a},b2f6:function(e,n,t){"use strict";(function(e){t("f988");r(t("66fd"));var n=r(t("b53e"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},b53e:function(e,n,t){"use strict";t.r(n);var r=t("1a1c"),i=t("ab9b");for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);t("69bf");var a,c=t("f0c5"),u=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"589f3104",null,!1,r["a"],a);n["default"]=u.exports},f428:function(e,n,t){}},[["b2f6","common/runtime","common/vendor"]]]);