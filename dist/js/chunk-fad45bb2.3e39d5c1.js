(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fad45bb2"],{"11e9":function(e,t,a){var n=a("52a7"),s=a("4630"),i=a("6821"),o=a("6a99"),c=a("69a8"),r=a("c69a"),l=Object.getOwnPropertyDescriptor;t.f=a("9e1e")?l:function(e,t){if(e=i(e),t=o(t,!0),r)try{return l(e,t)}catch(a){}if(c(e,t))return s(!n.f.call(e,t),e[t])}},"26c0":function(e,t,a){"use strict";var n=a("5312"),s=a.n(n);s.a},4917:function(e,t,a){"use strict";var n=a("cb7c"),s=a("9def"),i=a("0390"),o=a("5f1b");a("214f")("match",1,(function(e,t,a,c){return[function(a){var n=e(this),s=void 0==a?void 0:a[t];return void 0!==s?s.call(a,n):new RegExp(a)[t](String(n))},function(e){var t=c(a,e,this);if(t.done)return t.value;var r=n(e),l=String(this);if(!r.global)return o(r,l);var u=r.unicode;r.lastIndex=0;var d,f=[],m=0;while(null!==(d=o(r,l))){var h=String(d[0]);f[m]=h,""===h&&(r.lastIndex=i(l,s(r.lastIndex),u)),m++}return 0===m?null:f}]}))},"4cb0":function(e,t,a){},5312:function(e,t,a){},"5dbc":function(e,t,a){var n=a("d3f4"),s=a("8b97").set;e.exports=function(e,t,a){var i,o=t.constructor;return o!==a&&"function"==typeof o&&(i=o.prototype)!==a.prototype&&n(i)&&s&&s(e,i),e}},"8b97":function(e,t,a){var n=a("d3f4"),s=a("cb7c"),i=function(e,t){if(s(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{n=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(s){t=!0}return function(e,a){return i(e,a),t?e.__proto__=a:n(e,a),e}}({},!1):void 0),check:i}},9093:function(e,t,a){var n=a("ce10"),s=a("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,s)}},9502:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isShown?a("div",{staticClass:"wrapper"},[a("ul",{staticClass:"x-page-nav-wrapper"},[a("li",{staticClass:"x-page-item x-page-number",on:{click:e.previousPage}},[e._v("上一页")]),e._l(e.pageNumbers,(function(t){return a("li",{staticClass:"x-page-item",class:{"x-page-number":"..."!==t,active:t===e.selectPage},on:{click:function(a){return e.getPage(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])})),a("li",{staticClass:"x-page-item x-page-number",on:{click:e.nextPage}},[e._v("下一页")]),a("li",{staticClass:"x-page-item"},[e._v("\n      共"+e._s(e.totalElements)+"条记录\n    ")]),a("li",{staticClass:"x-page-item"},[a("span",[e._v("跳到第")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.chosenPage,expression:"chosenPage"}],staticClass:"choose-page xu-input",attrs:{type:"number",min:"1",max:e.totalPage},domProps:{value:e.chosenPage},on:{input:function(t){t.target.composing||(e.chosenPage=t.target.value)}}}),a("span",[e._v("页")])]),a("li",{staticClass:"x-page-item"},[a("button",{staticClass:"xu-btn nav-btn",on:{click:e.choosePage}},[e._v("确定")])])],2)]):e._e()},s=[],i=(a("c5f6"),{name:"XuPageNav",props:{isShown:{type:Boolean,default:!1},size:{type:Number},totalElements:{type:Number},totalPage:{type:Number},nowPage:{type:Number}},data:function(){return{selectPage:1,chosenPage:"",pageNumbers:[]}},methods:{getArray:function(e,t){var a=[],n=t-e;if(n<0)return-1;for(var s=0;s<=n;s++)a[s]=e+s;return a},initPageNumbers:function(){this.totalPage<=6&&this.totalPage>=1?this.pageNumbers=this.getArray(1,this.totalPage):0===this.totalPage?this.pageNumbers=[0]:this.pageNumbers=[1,2,3,4,5,"...",this.totalPage]},adjustPageNumbers:function(e){this.totalPage>=7&&(1===e||2===e||3===e?this.pageNumbers=[1,2,3,4,5,"...",this.totalPage]:e===this.totalPage-2||e===this.totalPage-1||e===this.totalPage?this.pageNumbers=[1,"...",this.totalPage-4,this.totalPage-3,this.totalPage-2,this.totalPage-1,this.totalPage]:this.pageNumbers=[1,"...",e-1,e,e+1,"...",this.totalPage])},getPage:function(e){"..."!==e&&(this.selectPage=e,this.adjustPageNumbers(this.selectPage),this.$emit("selectedPage",this.selectPage))},previousPage:function(){this.selectPage>1&&(this.selectPage=this.selectPage-1,this.adjustPageNumbers(this.selectPage),this.$emit("selectedPage",this.selectPage))},nextPage:function(){this.selectPage<this.totalPage&&(this.selectPage=this.selectPage+1,this.adjustPageNumbers(this.selectPage),this.$emit("selectedPage",this.selectPage))},choosePage:function(){Number(this.chosenPage)>0&&Number(this.chosenPage)<=this.totalPage&&this.selectPage!==Number(this.chosenPage)&&(this.selectPage=Number(this.chosenPage),this.adjustPageNumbers(this.selectPage),this.chosenPage="",this.$emit("selectedPage",this.selectPage))},propsData:function(){console.log("1.isShown:",this.isShown),console.log("2.size:",this.size),console.log("3.totalElements:",this.totalElements),console.log("4.totalPage:",this.totalPage),console.log("5.nowPage:",this.nowPage)}},watch:{totalElements:function(){this.initPageNumbers(),this.selectPage=this.nowPage+1}}}),o=i,c=(a("f680"),a("2877")),r=Object(c["a"])(o,n,s,!1,null,"18c5e06b",null);t["a"]=r.exports},aa77:function(e,t,a){var n=a("5ca1"),s=a("be13"),i=a("79e5"),o=a("fdef"),c="["+o+"]",r="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(e,t,a){var s={},c=i((function(){return!!o[e]()||r[e]()!=r})),l=s[e]=c?t(f):o[e];a&&(s[a]=l),n(n.P+n.F*c,"String",s)},f=d.trim=function(e,t){return e=String(s(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},c5f6:function(e,t,a){"use strict";var n=a("7726"),s=a("69a8"),i=a("2d95"),o=a("5dbc"),c=a("6a99"),r=a("79e5"),l=a("9093").f,u=a("11e9").f,d=a("86cc").f,f=a("aa77").trim,m="Number",h=n[m],p=h,v=h.prototype,g=i(a("2aeb")(v))==m,b="trim"in String.prototype,_=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){t=b?t.trim():f(t,3);var a,n,s,i=t.charCodeAt(0);if(43===i||45===i){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+t}for(var o,r=t.slice(2),l=0,u=r.length;l<u;l++)if(o=r.charCodeAt(l),o<48||o>s)return NaN;return parseInt(r,n)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof h&&(g?r((function(){v.valueOf.call(a)})):i(a)!=m)?o(new p(_(t)),a,h):_(t)};for(var P,y=a("9e1e")?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;y.length>I;I++)s(p,P=y[I])&&!s(h,P)&&d(h,P,u(p,P));h.prototype=v,v.constructor=h,a("2aba")(n,m,h)}},cd1a:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-views-wrapper"},[a("company-manage")],1)},s=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"xubox mb-integer"},[a("div",{staticClass:"xubox-title"},[a("span",[e._v("客户公司详情")]),a("span",{staticClass:"xu-indicator xu-indicator-add xu-float-right",on:{click:e.showAddCompanyForm}},[e._v("添加公司")])]),a("div",{staticClass:"xubox-content"},[a("table",{staticClass:"xu-table xu-table-hover xu-table-center xu-table-strip"},[e._m(0),a("tbody",e._l(e.companyInfos,(function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.id))]),a("td",[e._v(e._s(t.name))]),a("td",[e._v(e._s(t.address))]),a("td",[a("span",{staticClass:"xu-indicator xu-indicator-delete",on:{click:function(a){return e.deleteCompanyInfo(t.id)}}},[e._v("删除")]),a("span",{staticClass:"xu-indicator xu-indicator-edit",on:{click:function(a){return e.showEditCompanyForm(t)}}},[e._v("修改")]),a("span",{staticClass:"xu-indicator xu-indicator-check",on:{click:function(a){return e.showDeviceTable(t)}}},[e._v("查看设备")])])])})),0)])])]),e.isDeviceTableShown?a("device-table-pop-up",{attrs:{company:e.selectedCompany},on:{close:function(t){e.isDeviceTableShown=!1}}}):e._e(),e.isFormShown?a("xu-form",{attrs:{"is-pop-up":!0,"form-title":e.formTitle,"render-data":e.formRenderData},on:{submit:function(t){return e.submit(t)},close:function(t){e.isFormShown=!1}}}):e._e()],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",{staticClass:"xu-bg-silver"},[a("tr",[a("th",[e._v("#ID")]),a("th",[e._v("公司名称")]),a("th",[e._v("公司地址")]),a("th",[e._v("操作")])])])}],c=(a("7f7f"),a("ac6a"),a("b10a")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("xu-modal",{attrs:{"header-shown":!0,"footer-shown":!0,shown:!0,"model-style":{marginTop:"150px"}},on:{close:e.close}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(e.company.name)+"-设备详情")])]),a("div",{attrs:{slot:"content"},slot:"content"},[a("table",{staticClass:"xu-table xu-table-sm xu-table-center xu-table-border xu-table-hover xu-table-strip min-width-1300"},[a("thead",{staticClass:"xu-bg-silver"},[a("tr",[a("th",[e._v("#ID")]),a("th",[e._v("控制系统编号")]),a("th",[e._v("机型名称")]),a("th",[e._v("北斗卡号")]),a("th",[e._v("最后一次在线时刻")]),a("th",[e._v("出厂日期")]),a("th",[e._v("使用日期")]),a("th",[e._v("服务时长")]),a("th",[e._v("报废时间")]),a("th",[e._v("状态")]),a("th",[e._v("创建时间")]),a("th",[e._v("操作")])])]),a("tbody",e._l(e.devicesInfos,(function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.id))]),a("td",[e._v(e._s(t.csNumber))]),a("td",[e._v(e._s(t.model.modelName))]),a("td",[e._v(e._s(t.beidouId))]),a("td",[e._v(e._s(t.lastTime))]),a("td",[e._v(e._s(t.factoryDate))]),a("td",[e._v(e._s(t.startDate))]),a("td",[e._v(e._s(e._f("serviceLifeFilter")(t.serviceLife)))]),a("td",[e._v(e._s(t.scrapTime))]),a("td",[a("span",{staticClass:"xu-badge",class:{"xu-badge-success":t.isOnline,"xu-badge-error":!1===t.isOnline}},[e._v("\n                            "+e._s(e._f("isOnlineFilter")(t.isOnline))+"\n                        ")]),a("span",{staticClass:"xu-badge",class:{"xu-badge-success":1===t.status,"xu-badge-error":0===t.status,"xu-badge-warning":2===t.status}},[e._v("\n                            "+e._s(e._f("statusFilter")(t.status))+"\n                        ")])]),a("td",[e._v(e._s(t.createTime))]),a("td",[a("span",{staticClass:"xu-indicator xu-indicator-delete",on:{click:function(a){return e.delDeviceInfo(t.id)}}},[e._v("删除")]),a("span",{staticClass:"xu-indicator xu-indicator-edit",on:{click:function(a){return e.showEditDeviceForm(t)}}},[e._v("修改")])])])})),0)]),a("div",{staticClass:"xu-text-center"},[a("xu-page-nav",{attrs:{"is-shown":!0,size:e.serverData.size,"now-page":e.serverData.number,"total-elements":e.serverData.totalElements,"total-page":e.serverData.totalPages},on:{selectedPage:function(t){return e.jumpSelectedPage(t)}}})],1)]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("span",{staticClass:"xu-indicator xu-indicator-add",on:{click:e.showAddDeviceForm}},[e._v("添加设备")])])]),e.isFormShown?a("xu-form",{attrs:{"is-pop-up":!0,"form-title":e.formTitle,"render-data":e.formRenderData,rules:e.getFormRules()},on:{submit:function(t){return e.submit(t)},close:function(t){e.isFormShown=!1}}}):e._e()],1)},l=[],u=(a("4917"),a("28a5"),a("c41d")),d=a("9502"),f=(a("e6cf"),{name:"DeviceTablePopUp",components:{XuModal:u["a"],XuPageNav:d["a"],XuForm:c["a"]},props:{company:{type:Object}},data:function(){return{isFormShown:!1,formRenderData:[],formTitle:"",submitType:0,selectedDeviceInfo:{},serverData:{},devicesInfos:[],modelInfos:[]}},filters:{isOnlineFilter:function(e){switch(e){case!0:return"在线";case!1:return"离线";default:return"未知"}},statusFilter:function(e){switch(e){case 0:return"报废";case 1:return"正常";case 2:return"报警";default:return"未知"}},serviceLifeFilter:function(e){var t=Math.floor(e/36e5),a=Math.floor(e%36e5/6e4);return"".concat(t,"h").concat(a,"min")}},methods:{close:function(){this.$emit("close")},getFormRules:function(){return[{field:"scrapTime",limitBy:{field:"status",value:"否",rule:"disable"}}]},getDeviceInfos:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.$Http["backendManage"]["getDeviceInfos"](this.company.id+"/devices",{params:{start:t}}).then((function(t){e.devicesInfos=[],e.serverData=t;var a=t.content;a.forEach((function(t){e.devicesInfos.push({id:t.id,csNumber:t.csNumber,beidouId:t.beidouId,factoryDate:t.factoryDate,startDate:t.startDate,serviceLife:t.serviceLife,lastTime:t.lastTime,createTime:t.createTime,scrapTime:t.scrapTime,isOnline:t.online,status:t.status,model:t.model})}))})),this.$Http["dataParse"]["getMachineModelInfos"]().then((function(t){e.modelInfos=[],t.forEach((function(t){e.modelInfos.push({id:t.id,modelName:t.modelName,modelNumber:t.modelNumber})}))}))},showAddDeviceForm:function(){var e=this.modelInfos.map((function(e){return"ID#"+e.id+"—"+e.modelName}));this.formTitle="添加设备",this.submitType=0,this.formRenderData=[{content:"选择机型：",value:"",field:"modelName",additionalInfo:{type:"select",optional:e}},{content:"控制系统编号：",value:"",field:"csNumber"},{content:"北斗编号：",value:"",field:"beidouId"},{content:"出厂日期：",value:"",field:"factoryDate",additionalInfo:{type:"date"}},{content:"使用时期：",value:"",field:"startDate",additionalInfo:{type:"date"}},{content:"是否报废：",value:"否",field:"status",additionalInfo:{type:"radio",optional:["是","否"]}},{content:"报废时间：",value:"",field:"scrapTime",additionalInfo:{type:"date"}}],this.isFormShown=!0},showEditDeviceForm:function(e){var t=this.modelInfos.map((function(e){return"ID#"+e.id+"—"+e.modelName})),a=0===e.status?"是":"否",n=e.scrapTime?e.scrapTime.split(" ")[0]:"";this.selectedDeviceInfo=e,this.formTitle="修改设备信息",this.submitType=1,this.formRenderData=[{content:"选择机型：",value:"ID#"+e.model.id+"—"+e.model.modelName,field:"modelName",additionalInfo:{type:"select",optional:t}},{content:"控制系统编号：",value:e.csNumber,field:"csNumber"},{content:"北斗编号：",value:e.beidouId,field:"beidouId"},{content:"出厂日期：",value:e.factoryDate,field:"factoryDate",additionalInfo:{type:"date"}},{content:"使用时期：",value:e.startDate,field:"startDate",additionalInfo:{type:"date"}},{content:"是否报废：",value:a,field:"status",additionalInfo:{type:"radio",optional:["是","否"]}},{content:"报废时间：",value:n,field:"scrapTime",additionalInfo:{type:"date"}}],this.isFormShown=!0},delDeviceInfo:function(e){var t=this;this.$Http["backendManage"]["delDeviceInfo"](e).then((function(e){e&&t.getDeviceInfos()})).catch((function(e){}))},jumpSelectedPage:function(e){this.getDeviceInfos(e-1)},submit:function(e){var t=this,a=/(\d+)(?=—)/,n=e.modelName.match(a)[0];switch("否"===e["status"]?(e.status=1,delete e.scrapTime):(e.status=0,e.scrapTime+=" 00:00:00"),delete e.modelName,e["model"]={id:n},e["company"]={id:this.company.id},this.submitType){case 0:this.$Http["backendManage"]["postDeviceInfo"](e).then((function(e){e&&t.getDeviceInfos()})).catch((function(e){}));break;case 1:e["id"]=this.selectedDeviceInfo.id,this.$Http["backendManage"]["editDeviceInfo"](e).then((function(e){e&&t.getDeviceInfos()})).catch((function(e){}));break}}},created:function(){this.getDeviceInfos()}}),m=f,h=(a("26c0"),a("2877")),p=Object(h["a"])(m,r,l,!1,null,"5e3a4382",null),v=p.exports,g={name:"CompanyManage",components:{XuForm:c["a"],DeviceTablePopUp:v},data:function(){return{isFormShown:!1,isDeviceTableShown:!1,formRenderData:[],formTitle:"",submitType:0,selectedCompany:{},companyInfos:[{id:1,name:"重庆大学",address:"沙正街117号"},{id:2,name:"重庆大学",address:"沙正街117号"},{id:3,name:"重庆大学",address:"沙正街117号"},{id:4,name:"重庆大学",address:"沙正街117号"},{id:5,name:"重庆大学",address:"沙正街117号"},{id:6,name:"重庆大学",address:"沙正街117号"}]}},methods:{getCompanyInfos:function(){var e=this;this.$Http["backendManage"]["getCompanyInfos"]().then((function(t){e.companyInfos=[],t.forEach((function(t){e.companyInfos.push({id:t.id,name:t.name,address:t.address})}))})).catch((function(e){}))},showAddCompanyForm:function(){this.formTitle="添加客户公司信息",this.submitType=0,this.formRenderData=[{content:"公司名称：",value:"",field:"name"},{content:"公司地址：",value:"",field:"address"}],this.isFormShown=!0},deleteCompanyInfo:function(e){var t=this;this.$Http["backendManage"]["delCompanyInfo"](e).then((function(e){e&&t.getCompanyInfos()})).catch((function(e){}))},showEditCompanyForm:function(e){this.formTitle="修改客户公司信息",this.submitType=1,this.selectedCompany=e,this.formRenderData=[{content:"公司名称：",value:e.name,field:"name"},{content:"公司地址：",value:e.address,field:"address"}],this.isFormShown=!0},jumpSelectedPage:function(e){this.getCompanyInfos(e-1)},showDeviceTable:function(e){this.selectedCompany=e,this.isDeviceTableShown=!0},submit:function(e){var t=this;switch(this.submitType){case 0:this.$Http["backendManage"]["postCompanyInfo"](e).then((function(e){e&&t.getCompanyInfos()})).catch((function(e){}));break;case 1:e["id"]=this.selectedCompany.id,this.$Http["backendManage"]["editCompanyInfo"](e).then((function(e){e&&t.getCompanyInfos()})).catch((function(e){}));break}}},created:function(){},mounted:function(){this.getCompanyInfos()}},b=g,_=Object(h["a"])(b,i,o,!1,null,"3070d3f8",null),P=_.exports,y={name:"BackendManage",components:{CompanyManage:P}},I=y,x=Object(h["a"])(I,n,s,!1,null,"7d0e93a2",null);t["default"]=x.exports},e6cf:function(e,t,a){"use strict"},f680:function(e,t,a){"use strict";var n=a("4cb0"),s=a.n(n);s.a},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-fad45bb2.3e39d5c1.js.map