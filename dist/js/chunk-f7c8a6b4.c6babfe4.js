(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7c8a6b4"],{"11e9":function(e,t,a){var s=a("52a7"),i=a("4630"),r=a("6821"),n=a("6a99"),o=a("69a8"),l=a("c69a"),c=Object.getOwnPropertyDescriptor;t.f=a("9e1e")?c:function(e,t){if(e=r(e),t=n(t,!0),l)try{return c(e,t)}catch(a){}if(o(e,t))return i(!s.f.call(e,t),e[t])}},"4cb0":function(e,t,a){},"4f8d":function(e,t,a){},"5dbc":function(e,t,a){var s=a("d3f4"),i=a("8b97").set;e.exports=function(e,t,a){var r,n=t.constructor;return n!==a&&"function"==typeof n&&(r=n.prototype)!==a.prototype&&s(r)&&i&&i(e,r),e}},7860:function(e,t,a){"use strict";var s=a("eeae"),i=a.n(s);i.a},"8b97":function(e,t,a){var s=a("d3f4"),i=a("cb7c"),r=function(e,t){if(i(e),!s(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,s){try{s=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),s(e,[]),t=!(e instanceof Array)}catch(i){t=!0}return function(e,a){return r(e,a),t?e.__proto__=a:s(e,a),e}}({},!1):void 0),check:r}},9039:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-views-wrapper"},[a("div",{staticClass:"xubox"},[e._m(0),a("div",{staticClass:"xubox-content"},[a("div",{staticClass:"mb-integer xu-text-level3"},[a("label",{staticClass:"xu-label-text"},[a("span",[e._v("控制系统编号：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchInfo.csNumber,expression:"searchInfo.csNumber"}],staticClass:"xu-input",attrs:{type:"text",placeholder:"请输入控制系统编号"},domProps:{value:e.searchInfo.csNumber},on:{input:function(t){t.target.composing||e.$set(e.searchInfo,"csNumber",t.target.value)}}})]),a("button",{staticClass:"xu-btn xu-btn-info ml-integer",attrs:{disabled:""===e.searchInfo.csNumber},on:{click:function(t){return e.searchRepairInfos()}}},[e._v("搜索")])]),a("table",{staticClass:"xu-table xu-table-sm xu-table-border xu-table-center xu-table-hover xu-table-strip"},[e._m(1),a("tbody",e._l(e.repairInfos,function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.id))]),a("td",[e._v(e._s(t.csNumber))]),a("td",[e._v(e._s(t.partsName))]),a("td",[e._v(e._s(t.partsNumber))]),a("td",[e._v(e._s(t.replacementType))]),a("td",[e._v(e._s(t.repairMan))]),a("td",[e._v(e._s(t.repairDate))]),a("td",[e._v(e._s(t.remark))]),a("td",[a("span",{staticClass:"xu-indicator xu-indicator-delete",on:{click:function(a){return e.delRepairInfo(t.id)}}},[e._v("删除")]),a("span",{staticClass:"xu-indicator xu-indicator-edit",on:{click:function(a){return e.showEditForm(t)}}},[e._v("修改")])])])}),0)]),0===e.repairInfos.length?a("div",{staticClass:"hint-text"},[e._v("暂无记录")]):e._e(),a("div",{staticClass:"xu-text-center"},[a("xu-page-nav",{attrs:{"is-shown":0!==e.repairInfos.length,size:e.serverData.size,"now-page":e.serverData.number,"total-elements":e.serverData.totalElements,"total-page":e.serverData.totalPages},on:{selectedPage:function(t){return e.jumpSelectedPage(t)}}})],1)])]),e.isFormShown?a("xu-form",{attrs:{"is-pop-up":!0,"form-title":e.formTitle,"render-data":e.formRenderData},on:{submit:function(t){return e.submit(t)},close:function(t){e.isFormShown=!1}}}):e._e()],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xubox-title"},[a("span",[e._v("维修记录")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",{staticClass:"xu-bg-silver"},[a("tr",[a("th",[e._v("#ID")]),a("th",[e._v("控制系统编号")]),a("th",[e._v("零件名称")]),a("th",[e._v("数量")]),a("th",[e._v("类型")]),a("th",[e._v("维修人")]),a("th",[e._v("维修时间")]),a("th",[e._v("备注")]),a("th",[e._v("操作")])])])}],r=(a("ac6a"),a("b10a")),n=a("9502"),o={name:"RepairCenter",components:{XuForm:r["a"],XuPageNav:n["a"]},data:function(){return{searchInfo:{csNumber:""},isFormShown:!1,formRenderData:[],formTitle:"",submitType:0,selectedRepairInfo:{},serverData:{},repairInfos:[],isSearch:!1}},methods:{getRepairInfos:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.isSearch=!1,this.$Http["repairCenter"]["getRepairInfos"]("",{params:{start:t}}).then(function(t){e.repairInfos=[],e.serverData=t;var a=t.content;a&&a.forEach(function(t){e.repairInfos.push({id:t.id,csNumber:t.device.csNumber,did:t.device.id,partsName:t.partsName,partsNumber:t.partsNumber,replacementType:t.replacementType,repairMan:t.repairman,repairDate:t.repairDate,remark:t.remark})})})},showEditForm:function(e){this.selectedRepairInfo=e,this.formTitle="修改维修记录",this.submitType=1,this.formRenderData=[{content:"零件名称：",value:e.partsName,field:"partsName"},{content:"数量：",value:e.partsNumber,field:"partsNumber",additionalInfo:{type:"number"}},{content:"类型：",value:e.replacementType,field:"replacementType"},{content:"维修人：",value:e.repairMan,field:"repairman"},{content:"维修时间：",value:e.repairDate,field:"repairDate",additionalInfo:{type:"date"}},{content:"备注：",value:e.remark,field:"remark",additionalInfo:{type:"textarea"}}],this.isFormShown=!0},delRepairInfo:function(e){var t=this;this.$Http["repairCenter"]["delRepairInfo"](e).then(function(e){e&&t.getRepairInfos()}).catch(function(e){})},jumpSelectedPage:function(e){this.isSearch?this.searchRepairInfos(e-1):this.getRepairInfos(e-1)},searchRepairInfos:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.isSearch=!0,this.$Http["repairCenter"]["searchRepairInfos"]("",{params:{str:this.searchInfo.csNumber,start:t}}).then(function(t){e.repairInfos=[],e.serverData=t;var a=t.content;a&&a.forEach(function(t){e.repairInfos.push({id:t.id,csNumber:t.device.csNumber,did:t.device.id,partsName:t.partsName,partsNumber:t.partsNumber,replacementType:t.replacementType,repairMan:t.repairman,repairDate:t.repairDate,remark:t.remark})})})},submit:function(e){var t=this;e["id"]=this.selectedRepairInfo.id,e["device"]={id:this.selectedRepairInfo.did},this.$Http["repairCenter"]["editRepairInfo"](e).then(function(e){e&&t.getRepairInfos()}).catch(function(e){})}},watch:{"searchInfo.csNumber":function(e){""===e&&this.getRepairInfos()}},created:function(){this.getRepairInfos()}},l=o,c=a("2877"),u=Object(c["a"])(l,s,i,!1,null,"b46a46de",null);t["default"]=u.exports},9093:function(e,t,a){var s=a("ce10"),i=a("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return s(e,i)}},9502:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isShown?a("div",{staticClass:"wrapper"},[a("ul",{staticClass:"x-page-nav-wrapper"},[a("li",{staticClass:"x-page-item x-page-number",on:{click:e.previousPage}},[e._v("上一页")]),e._l(e.pageNumbers,function(t){return a("li",{staticClass:"x-page-item",class:{"x-page-number":"..."!==t,active:t===e.selectPage},on:{click:function(a){return e.getPage(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])}),a("li",{staticClass:"x-page-item x-page-number",on:{click:e.nextPage}},[e._v("下一页")]),a("li",{staticClass:"x-page-item"},[e._v("\n      共"+e._s(e.totalElements)+"条记录\n    ")]),a("li",{staticClass:"x-page-item"},[a("span",[e._v("跳到第")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.chosenPage,expression:"chosenPage"}],staticClass:"choose-page xu-input",attrs:{type:"number",min:"1",max:e.totalPage},domProps:{value:e.chosenPage},on:{input:function(t){t.target.composing||(e.chosenPage=t.target.value)}}}),a("span",[e._v("页")])]),a("li",{staticClass:"x-page-item"},[a("button",{staticClass:"xu-btn nav-btn",on:{click:e.choosePage}},[e._v("确定")])])],2)]):e._e()},i=[],r=(a("c5f6"),{name:"XuPageNav",props:{isShown:{type:Boolean,default:!1},size:{type:Number},totalElements:{type:Number},totalPage:{type:Number},nowPage:{type:Number}},data:function(){return{selectPage:1,chosenPage:"",pageNumbers:[]}},methods:{getArray:function(e,t){var a=[],s=t-e;if(s<0)return-1;for(var i=0;i<=s;i++)a[i]=e+i;return a},initPageNumbers:function(){this.totalPage<=6&&this.totalPage>=1?this.pageNumbers=this.getArray(1,this.totalPage):0===this.totalPage?this.pageNumbers=[0]:this.pageNumbers=[1,2,3,4,5,"...",this.totalPage]},adjustPageNumbers:function(e){this.totalPage>=7&&(1===e||2===e||3===e?this.pageNumbers=[1,2,3,4,5,"...",this.totalPage]:e===this.totalPage-2||e===this.totalPage-1||e===this.totalPage?this.pageNumbers=[1,"...",this.totalPage-4,this.totalPage-3,this.totalPage-2,this.totalPage-1,this.totalPage]:this.pageNumbers=[1,"...",e-1,e,e+1,"...",this.totalPage])},getPage:function(e){"..."!==e&&(this.selectPage=e,this.adjustPageNumbers(this.selectPage),this.$emit("selectedPage",this.selectPage))},previousPage:function(){this.selectPage>1&&(this.selectPage=this.selectPage-1,this.adjustPageNumbers(this.selectPage),this.$emit("selectedPage",this.selectPage))},nextPage:function(){this.selectPage<this.totalPage&&(this.selectPage=this.selectPage+1,this.adjustPageNumbers(this.selectPage),this.$emit("selectedPage",this.selectPage))},choosePage:function(){Number(this.chosenPage)>0&&Number(this.chosenPage)<=this.totalPage&&this.selectPage!==Number(this.chosenPage)&&(this.selectPage=Number(this.chosenPage),this.adjustPageNumbers(this.selectPage),this.chosenPage="",this.$emit("selectedPage",this.selectPage))},propsData:function(){console.log("1.isShown:",this.isShown),console.log("2.size:",this.size),console.log("3.totalElements:",this.totalElements),console.log("4.totalPage:",this.totalPage),console.log("5.nowPage:",this.nowPage)}},watch:{totalElements:function(){this.initPageNumbers(),this.selectPage=this.nowPage+1}}}),n=r,o=(a("f680"),a("2877")),l=Object(o["a"])(n,s,i,!1,null,"18c5e06b",null);t["a"]=l.exports},a54b:function(e,t,a){"use strict";var s=a("4f8d"),i=a.n(s);i.a},aa77:function(e,t,a){var s=a("5ca1"),i=a("be13"),r=a("79e5"),n=a("fdef"),o="["+n+"]",l="​",c=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),f=function(e,t,a){var i={},o=r(function(){return!!n[e]()||l[e]()!=l}),c=i[e]=o?t(p):n[e];a&&(i[a]=c),s(s.P+s.F*o,"String",i)},p=f.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=f},b10a:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.isPopUp?a("xu-modal",{attrs:{shown:!0,"header-shown":!0,"footer-shown":!0,"header-style":{backgroundColor:"#00a8b3",color:"#ffffff"}},on:{close:e.close}},[a("span",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.formTitle))]),a("div",{staticClass:"xu-text-level3",attrs:{slot:"content"},slot:"content"},e._l(e.renderData,function(t){return a("div",[t.additionalInfo&&"radio"===t.additionalInfo.type?a("div",{staticClass:"xu-form-control"},[a("span",{staticClass:"fix-width-100"},[e._v(e._s(t.content))]),e._l(t.additionalInfo.optional,function(s){return a("label",{staticClass:"xu-label-choose mr-integer"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"formItem.value"}],staticClass:"xu-choose xu-radio",attrs:{type:"radio"},domProps:{value:s,checked:e._q(t.value,s)},on:{change:function(a){return e.$set(t,"value",s)}}}),a("span",[e._v(e._s(s))])])})],2):t.additionalInfo&&"number"===t.additionalInfo.type?a("div",{staticClass:"xu-form-control"},[a("label",{staticClass:"xu-label-text"},[a("span",{staticClass:"fix-width-100"},[e._v(e._s(t.content))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"formItem.value"}],staticClass:"xu-input",attrs:{type:"number",disabled:0!==e.rules.length&&e.applyFormRules(t.field)},domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}})])]):t.additionalInfo&&"select"===t.additionalInfo.type?a("div",{staticClass:"xu-form-control"},[a("label",{staticClass:"xu-label-text"},[a("span",{staticClass:"fix-width-100"},[e._v(e._s(t.content))]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"formItem.value"}],staticClass:"xu-input",on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(t,"value",a.target.multiple?s:s[0])}}},e._l(t.additionalInfo.optional,function(t){return a("option",[e._v("\n                                "+e._s(t)+"\n                            ")])}),0)])]):t.additionalInfo&&"textarea"===t.additionalInfo.type?a("div",{staticClass:"xu-form-control"},[a("label",{staticClass:"xu-label-text"},[a("span",{staticClass:"fix-width-100"},[e._v(e._s(t.content))]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"formItem.value"}],staticClass:"xu-textarea",attrs:{type:"text",disabled:0!==e.rules.length&&e.applyFormRules(t.field)},domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}})])]):t.additionalInfo&&"date"===t.additionalInfo.type?a("div",{staticClass:"xu-form-control"},[a("label",{staticClass:"xu-label-text"},[a("span",{staticClass:"fix-width-100"},[e._v(e._s(t.content))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"formItem.value"}],staticClass:"xu-input",attrs:{type:"date",disabled:0!==e.rules.length&&e.applyFormRules(t.field)},domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}})])]):t.additionalInfo&&"checkbox"===t.additionalInfo.type?a("div",{staticClass:"xu-form-control clear"},[a("div",{staticClass:"checkbox-left"},[a("span",[e._v(e._s(t.content))])]),a("div",{staticClass:"checkbox-right"},e._l(t.additionalInfo.optional,function(s){return a("label",{staticClass:"xu-label-choose mr-integer"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"formItem.value"}],staticClass:"xu-choose xu-checkbox",attrs:{type:"checkbox"},domProps:{value:s,checked:Array.isArray(t.value)?e._i(t.value,s)>-1:t.value},on:{change:function(a){var i=t.value,r=a.target,n=!!r.checked;if(Array.isArray(i)){var o=s,l=e._i(i,o);r.checked?l<0&&e.$set(t,"value",i.concat([o])):l>-1&&e.$set(t,"value",i.slice(0,l).concat(i.slice(l+1)))}else e.$set(t,"value",n)}}}),a("span",[e._v(e._s(s))])])}),0)]):a("div",{staticClass:"xu-form-control"},[a("label",{staticClass:"xu-label-text"},[a("span",{staticClass:"fix-width-100"},[e._v(e._s(t.content))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"formItem.value"}],staticClass:"xu-input",attrs:{type:"text",disabled:0!==e.rules.length&&e.applyFormRules(t.field)},domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}})])])])}),0),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"xu-text-center"},[a("button",{staticClass:"xu-btn xu-btn-primary mr-integer",on:{click:e.submit}},[e._v("确认")]),a("button",{staticClass:"xu-btn xu-btn-cancel mb-integer",on:{click:e.close}},[e._v("取消")])])])]):a("div")],1)},i=[],r=(a("ac6a"),a("c41d")),n=a("3d71"),o={name:"XuForm",components:{XuModal:r["a"]},props:{isPopUp:{default:!1,type:Boolean},formTitle:{default:"表单",type:String},renderData:{default:function(){return[{content:"默认",value:"",field:""}]},type:Array},rules:{default:function(){return[]},type:Array},authRules:{default:function(){return[]},type:Array}},data:function(){return{}},methods:{close:function(){this.$emit("close")},submit:function(){var e=!1,t={};for(var a in this.renderData.forEach(function(e){t[e.field]=e.value}),t)if(!this.applyFormRules(a)&&""===t[a]){e=!0;break}if(e)Object(n["a"])("请完成所有内容再提交~","error");else{var s=this.authRules.length,i=!0;for(var r in t){for(var o=0;o<s;o++)if(r===this.authRules[o].field&&!this.authRules[o]["isPassAuth"](t[r])){i=!1,Object(n["a"])(this.authRules[o]["failAuthMsg"],"error");break}if(!i)break}i&&(this.$emit("submit",t),this.$emit("close"))}},applyFormRules:function(e){for(var t=0;t<this.rules.length;t++){var a=this.rules[t].field,s=this.rules[t].limitBy.field,i=this.rules[t].limitBy.value,r=void 0,n=!1;if(e===a){for(var o=0;o<this.renderData.length;o++)if(this.renderData[o].field===a){r=o;break}for(var l=0;l<this.renderData.length;l++)if(this.renderData[l].field===s&&String(this.renderData[l].value)===i){this.renderData[r].value="",n=!0;break}return n}}return!1}}},l=o,c=(a("7860"),a("2877")),u=Object(c["a"])(l,s,i,!1,null,"1fbd6ffb",null);t["a"]=u.exports},c41d:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.shown?a("div",{staticClass:"xu-modal-backdrop",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[a("div",{staticClass:"xu-modal",class:{fadeIn:e.shown},style:e.modelStyle},[e.headerShown?a("div",{staticClass:"xu-modal-header",style:e.headerStyle},[a("div",{staticClass:"modal-title-wrapper"},[e._t("header",[a("div",[e._v("这是模态框标题")])])],2),a("div",{staticClass:"close-icon",on:{click:e.close}},[e._v("×")])]):e._e(),a("div",{staticClass:"xu-modal-content"},[e._t("content",[a("div",[e._v("这是模态框内容")])])],2),e.footerShown?a("div",{staticClass:"xu-modal-footer"},[e._t("footer",[a("div",[e._v("这是模态框尾部")])])],2):e._e()])]):e._e()},i=[],r={name:"xu-modal",props:{shown:{type:Boolean,default:!1},footerShown:{type:Boolean,default:!1},headerShown:{type:Boolean,default:!1},headerStyle:{},modelStyle:{}},methods:{close:function(){this.$emit("close")}}},n=r,o=(a("a54b"),a("2877")),l=Object(o["a"])(n,s,i,!1,null,"52ce554c",null);t["a"]=l.exports},c5f6:function(e,t,a){"use strict";var s=a("7726"),i=a("69a8"),r=a("2d95"),n=a("5dbc"),o=a("6a99"),l=a("79e5"),c=a("9093").f,u=a("11e9").f,f=a("86cc").f,p=a("aa77").trim,d="Number",h=s[d],m=h,v=h.prototype,g=r(a("2aeb")(v))==d,b="trim"in String.prototype,x=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=b?t.trim():p(t,3);var a,s,i,r=t.charCodeAt(0);if(43===r||45===r){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:s=2,i=49;break;case 79:case 111:s=8,i=55;break;default:return+t}for(var n,l=t.slice(2),c=0,u=l.length;c<u;c++)if(n=l.charCodeAt(c),n<48||n>i)return NaN;return parseInt(l,s)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof h&&(g?l(function(){v.valueOf.call(a)}):r(a)!=d)?n(new m(x(t)),a,h):x(t)};for(var _,P=a("9e1e")?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;P.length>y;y++)i(m,_=P[y])&&!i(h,_)&&f(h,_,u(m,_));h.prototype=v,v.constructor=h,a("2aba")(s,d,h)}},eeae:function(e,t,a){},f680:function(e,t,a){"use strict";var s=a("4cb0"),i=a.n(s);i.a},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-f7c8a6b4.c6babfe4.js.map