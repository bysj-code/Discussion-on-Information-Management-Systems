(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/detail"],{"2d62":function(t,n,e){"use strict";(function(t){e("6cdc"),e("921b");i(e("66fd"));var n=i(e("4afa"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},4375:function(t,n,e){},"4afa":function(t,n,e){"use strict";e.r(n);var i=e("c2be"),r=e("77ae");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("9b1f");var s,u=e("f0c5"),o=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"3fbd1994",null,!1,i["a"],s);n["default"]=o.exports},5177:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,i,r,a,s){try{var u=t[a](s),o=u.value}catch(c){return void e(c)}u.done?n(o):Promise.resolve(o).then(i,r)}function s(t){return function(){var n=this,e=arguments;return new Promise((function(i,r){var s=t.apply(n,e);function u(t){a(s,i,r,u,o,"next",t)}function o(t){a(s,i,r,u,o,"throw",t)}u(void 0)}))}}var u={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=s(i.default.mark((function t(n){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=n.id,n.userid&&(this.userid=n.userid);case 2:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onShow:function(){var n=s(i.default.mark((function n(e){var r,a;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.init(),r=t.getStorageSync("nowTable"),n.next=4,this.$api.session(r);case 4:a=n.sent,this.user=a.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return n.stop()}}),n,this)})));function e(t){return n.apply(this,arguments)}return e}(),destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","news"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(n){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(n.id,"&userid=")+this.userid)},onAcrossTap:function(n,e,i,r,a){if(t.setStorageSync("crossTable","news"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",i),t.setStorageSync("statusColumnValue",a),t.setStorageSync("tips",r),""!=i&&!i.startsWith("[")){var s=t.getStorageSync("crossObj");for(var u in s)if(u==i&&s[u]==a)return void this.$utils.msg(r)}this.$utils.jump("../".concat(n,"/add-or-update?cross=true"))},init:function(){var t=s(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("news",this.id);case 2:n=t.sent,this.detail=n.data,this.detail.content=this.detail.content.replace(/img src/gi,'img style="width:100%;" src');case 5:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=s(i.default.mark((function t(n){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.endSuccess(n.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(n){var e=this;n=e.$base.url+n,t.downloadFile({url:n,success:function(t){200===t.statusCode&&(e.$utils.msg("下载成功"),window.open(n))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=s(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$utils.jump("../discussnews/add-or-update?refid=".concat(this.id));case 1:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onSHTap:function(){this.$refs.popup.open()}}};n.default=u}).call(this,e("543d")["default"])},"77ae":function(t,n,e){"use strict";e.r(n);var i=e("5177"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},"9b1f":function(t,n,e){"use strict";var i=e("4375"),r=e.n(i);r.a},c2be:function(t,n,e){"use strict";var i={"mescroll-uni":()=>Promise.all([e.e("common/vendor"),e.e("components/mescroll-uni/mescroll-uni")]).then(e.bind(null,"f05e"))},r=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}))}},[["2d62","common/runtime","common/vendor"]]]);