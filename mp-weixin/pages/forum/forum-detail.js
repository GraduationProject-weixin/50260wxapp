(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum/forum-detail"],{"0b26":function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return u}));var u={uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"509d"))}},r=function(){var n=this,t=n.$createElement;n._self._c},o=[]},"2efd":function(n,t,e){"use strict";var u=e("f285"),r=e.n(u);r.a},"33a2":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(e("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function o(n,t,e,u,r,o,a){try{var i=n[o](a),f=i.value}catch(c){return void e(c)}i.done?t(f):Promise.resolve(f).then(u,r)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(u,r){var a=n.apply(t,e);function i(n){o(a,u,r,i,f,"next",n)}function f(n){o(a,u,r,i,f,"throw",n)}i(void 0)}))}}var i=function(){e.e("components/forum-reply/forum-reply").then(function(){return resolve(e("f7b7"))}.bind(null,e)).catch(e.oe)},f={components:{userReply:i},data:function(){return{commentData:[],forum:{},user:{},forumContent:null,yonghuId:null,id:""}},onLoad:function(t){var e=this;return a(u.default.mark((function r(){var o,a,i,f,c;return u.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return e.id=t.id,o=n.getStorageSync("nowTable"),u.next=4,e.$api.session(o);case 4:return a=u.sent,e.user=a.data,u.next=8,e.$api.info("forum",t.id);case 8:return i=u.sent,e.forum=i.data,f={superIds:e.forum.id,forumStateTypes:2},u.next=13,e.$api.list("forum",f);case 13:c=u.sent,e.commentData=c.data.list;case 15:case"end":return u.stop()}}),r)})))()},onShow:function(){return a(u.default.mark((function n(){return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})))()},methods:{onChatTap:function(){this.$refs.popup.open(),this.forumContent=null},onFinishTap:function(){var t=this;return a(u.default.mark((function e(){var r,o;return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t,null!=r.forumContent&&""!=r.forumContent){e.next=4;break}return r.$utils.msg("请填写评论内容"),e.abrupt("return");case 4:return o={superIds:r.forum.id,forumStateTypes:2,yonghuId:r.user.id,forumContent:r.forumContent},e.next=7,r.$api.save("forum",o);case 7:r.$utils.msg("评论成功"),r.$refs.popup.close(),n.redirectTo({url:"/pages/forum/forum-detail?id="+r.forum.id});case 10:case"end":return e.stop()}}),e)})))()},onCloseWinTap:function(){this.$refs.popup.close()}}};t.default=f}).call(this,e("543d")["default"])},"4be6":function(n,t,e){"use strict";(function(n){e("f988");u(e("66fd"));var t=u(e("dc83"));function u(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},"5fda":function(n,t,e){"use strict";e.r(t);var u=e("33a2"),r=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,(function(){return u[n]}))}(o);t["default"]=r.a},dc83:function(n,t,e){"use strict";e.r(t);var u=e("0b26"),r=e("5fda");for(var o in r)"default"!==o&&function(n){e.d(t,n,(function(){return r[n]}))}(o);e("2efd");var a,i=e("f0c5"),f=Object(i["a"])(r["default"],u["b"],u["c"],!1,null,"9594aa1a",null,!1,u["a"],a);t["default"]=f.exports},f285:function(n,t,e){}},[["4be6","common/runtime","common/vendor"]]]);