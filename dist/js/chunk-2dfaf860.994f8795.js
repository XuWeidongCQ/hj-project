(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dfaf860"],{"024f":function(a,t,e){},"25d8":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"vue-views-wrapper"},[e("e-c-u-statics-info",{attrs:{"statistical-data":a.statisticalData}}),e("main-map",{attrs:{"map-device-infos":a.mapDeviceInfos,"company-names-dropdown":a.companyNamesDropdown,"model-names-dropdown":a.modelNamesDropdown},on:{searchInputDone:function(t){return a.getSearchResults(t)}}})],1)},i=[],n=(e("6762"),e("2fdb"),e("7f7f"),e("ac6a"),function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-3"},[e("div",{staticClass:"statics-info-container dev-total"},[a._m(0),e("span",{staticClass:"statics-info"},[e("span",{staticClass:"statics-number"},[a._v("\n                            "+a._s(a.statisticalData.totalNum)+"\n                        ")]),e("br"),e("span",{staticClass:"statics-explain"},[a._v("设备总数")])])])]),e("div",{staticClass:"col-3"},[e("div",{staticClass:"statics-info-container dev-online"},[a._m(1),e("span",{staticClass:"statics-info"},[e("span",{staticClass:"statics-number"},[a._v("\n                            "+a._s(a.statisticalData.onlineNum)+"\n                        ")]),e("br"),e("span",{staticClass:"statics-explain"},[a._v("在线设备数目")])])])]),e("div",{staticClass:"col-3"},[e("div",{staticClass:"statics-info-container dev-normal"},[a._m(2),e("span",{staticClass:"statics-info"},[e("span",{staticClass:"statics-number"},[a._v("\n                            "+a._s(a.statisticalData.normalNum)+"\n                        ")]),e("br"),e("span",{staticClass:"statics-explain"},[a._v("正常设备数目")])])])]),e("div",{staticClass:"col-3"},[e("div",{staticClass:"statics-info-container dev-alert"},[a._m(3),e("span",{staticClass:"statics-info"},[e("span",{staticClass:"statics-number"},[a._v("\n                            "+a._s(a.statisticalData.alarmNum)+"\n                        ")]),e("br"),e("span",{staticClass:"statics-explain"},[a._v("报警设备数目")])])])])])])}),o=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("span",{staticClass:"statics-icon"},[e("span",{staticClass:"fa fa-desktop"})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("span",{staticClass:"statics-icon"},[e("span",{staticClass:"fa fa-laptop"})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("span",{staticClass:"statics-icon"},[e("span",{staticClass:"fa fa-calendar-check-o"})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("span",{staticClass:"statics-icon"},[e("span",{staticClass:"fa fa-lightbulb-o"})])}],c={name:"ECUStaticsInfo",props:{statisticalData:{type:Object}},data:function(){return{}},filters:{httpError:function(a){if(void 0===a)return"--"}}},r=c,l=(e("ce1a"),e("2877")),m=Object(l["a"])(r,n,o,!1,null,"d5a64ab8",null),d=m.exports,p=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"main-map-wrapper"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"info-filter-wrapper clear"},[e("div",{staticClass:"left xu-float-left"},[e("div",{staticClass:"mb-integer"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.searchData.csNumberOrFactoryDate,expression:"searchData.csNumberOrFactoryDate"}],staticClass:"xu-input",attrs:{type:"text",placeholder:"请输入控制系统编号/出厂日期20190812"},domProps:{value:a.searchData.csNumberOrFactoryDate},on:{input:function(t){t.target.composing||a.$set(a.searchData,"csNumberOrFactoryDate",t.target.value)}}}),e("label",{staticClass:"xu-label-choose"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.searchData.status,expression:"searchData.status"}],staticClass:"xu-choose xu-checkbox",attrs:{type:"checkbox"},domProps:{value:2,checked:Array.isArray(a.searchData.status)?a._i(a.searchData.status,2)>-1:a.searchData.status},on:{change:function(t){var e=a.searchData.status,s=t.target,i=!!s.checked;if(Array.isArray(e)){var n=2,o=a._i(e,n);s.checked?o<0&&a.$set(a.searchData,"status",e.concat([n])):o>-1&&a.$set(a.searchData,"status",e.slice(0,o).concat(e.slice(o+1)))}else a.$set(a.searchData,"status",i)}}}),e("span",[a._v("报警")])])]),e("div",[e("span",[a._v("机型名称：")]),e("xu-select",{attrs:{options:a.modelNamesDropdown,"prefix-options":["不限"]},model:{value:a.searchData.modelName,callback:function(t){a.$set(a.searchData,"modelName",t)},expression:"searchData.modelName"}}),e("span",{staticClass:"ml-integer"},[a._v("公司名称：")]),e("xu-select",{attrs:{"style-obj":{width:"220px"},options:a.companyNamesDropdown,"prefix-options":["不限"]},model:{value:a.searchData.companyName,callback:function(t){a.$set(a.searchData,"companyName",t)},expression:"searchData.companyName"}})],1)]),e("div",{staticClass:"right xu-float-right"},[e("button",{staticClass:"xu-btn xu-btn-lg xu-btn-primary",on:{click:a.searchDevices}},[a._v("查找")])])]),e("baidu-map",{staticClass:"map-wrapper",attrs:{ak:"HMsRLrPGidU6hIisM4HYgx0APRKhpm6p",center:a.mapCenter,zoom:a.mapInitZoom,"scroll-wheel-zoom":!0}},[e("bm-scale",{attrs:{anchor:"BMAP_ANCHOR_TOP_LEFT",offset:{top:"5px",left:"5px"}}}),e("bm-navigation",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_LEFT"}}),a._l(a.mapDeviceInfos,function(t){return e("div",[1===t.isAlert?e("bm-marker",{attrs:{position:t.coordinate,icon:a.icon.iconNormal},on:{mouseover:function(e){return a.showInfoWindow(e,t.infoWindowData)},mouseout:a.closeInfoWindow,click:function(e){return a.showSingleModal(t)}}}):e("bm-marker",{attrs:{position:t.coordinate,icon:a.icon.iconAlert},on:{mouseover:function(e){return a.showInfoWindow(e,t.infoWindowData)},mouseout:a.closeInfoWindow,click:function(e){return a.showSingleModal(t)}}})],1)}),a.isInfoWindowVisible?e("point-info-window",{attrs:{"point-info":a.propsToInfoWindow}}):a._e()],2),e("div",{staticClass:"map-change-wrapper"},[e("button",{directives:[{name:"show",rawName:"v-show",value:!a.isWorldMap,expression:"!isWorldMap"}],staticClass:"btn btn-world",on:{click:function(t){return t.stopPropagation(),a.exChangeMap(3,"重庆")}}},[e("span",{staticClass:"fa fa-exchange"}),a._v("  世界地图")]),e("button",{directives:[{name:"show",rawName:"v-show",value:a.isWorldMap,expression:"isWorldMap"}],staticClass:"btn btn-china",on:{click:function(t){return t.stopPropagation(),a.exChangeMap(6,"武汉")}}},[e("span",{staticClass:"fa fa-exchange"}),a._v("  中国地图")])])],1)]),a.isSingleMonitorVisible?e("single-monitor-modal",{attrs:{"device-info":a.propsToSingleMonitorModal},on:{close:a.closeSingleModal}}):a._e()],1)},u=[],f=e("bd0c"),h=e("be73"),v=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"info-window-wrapper"},[e("div",{staticClass:"explain-container"},[a._m(0),e("div",{staticClass:"right"},[e("p",[a._v(a._s(a.pointInfo.data.csNumber))]),e("p",[a._v(a._s(a.pointInfo.data.beidouId))]),e("p",[a._v(a._s(a.pointInfo.data.status))])])]),e("div",{staticClass:"data-container"},[e("div",{staticClass:"data-item"},[e("p",[a._v("转速")]),e("p",[a._v(a._s(a.pointInfo.data.rotateSpeed+"rpm"))])]),e("div",{staticClass:"data-item"},[e("p",[a._v("滑油压力")]),e("p",[a._v(a._s(a.pointInfo.data.greasePressure+"kpa"))])]),e("div",{staticClass:"data-item"},[e("p",[a._v("冷却水")]),e("p",[a._v(a._s(a.pointInfo.data.coolingWater+"℃"))])])])])},D=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"left"},[e("p",[a._v("设备控制系统编号：")]),e("p",[a._v("北斗卡号：")]),e("p",[a._v("状态：")])])}],N={name:"PointInfoWindow",props:{pointInfo:Object},data:function(){return{}},mounted:function(){var a=document.getElementsByClassName("info-window-wrapper")[0];a.style.top=this.pointInfo.y+"px",a.style.left=this.pointInfo.x+"px"}},w=N,g=(e("b109"),Object(l["a"])(w,v,D,!1,null,"04373d6b",null)),b=g.exports,C=e("a483"),_={name:"MainMap",components:{PointInfoWindow:b,SingleMonitorModal:h["a"],BaiduMap:f["BaiduMap"],BmMarker:f["BmMarker"],BmScale:f["BmScale"],BmNavigation:f["BmNavigation"],XuSelect:C["a"]},props:{mapDeviceInfos:{type:Array,default:function(){return[]}},modelNamesDropdown:{type:Array,default:function(){return[]}},companyNamesDropdown:{type:Array,default:function(){return[]}}},data:function(){return{searchData:{csNumberOrFactoryDate:"",modelName:"不限",companyName:"不限",status:[]},mapInitZoom:6,mapCenter:"重庆",isWorldMap:!1,isSingleMonitorVisible:!1,isInfoWindowVisible:!1,propsToSingleMonitorModal:{},propsToInfoWindow:{},icon:{iconNormal:{url:e("3b84"),size:{width:20,height:20},opts:{anchor:{top:0,left:0},imageSize:{width:20,height:20}}},iconAlert:{url:e("cd1d"),size:{width:20,height:20},opts:{anchor:{top:0,left:0},imageSize:{width:20,height:20}}}}}},methods:{exChangeMap:function(a,t){this.mapCenter=t,this.mapInitZoom=a,this.isWorldMap=3===a},showSingleModal:function(a){this.propsToSingleMonitorModal={id:a.id,modelName:a.modelName,companyName:a.companyName,rotateStatus:a.rotateStatus},this.isSingleMonitorVisible=!0},closeSingleModal:function(){this.isSingleMonitorVisible=!1},showInfoWindow:function(a,t){var e=this,s=a.clientX,i=a.clientY;setTimeout(function(){e.isInfoWindowVisible=!0,e.propsToInfoWindow={data:t,x:s,y:i}},100)},closeInfoWindow:function(){var a=this;setTimeout(function(){a.isInfoWindowVisible=!1},150)},searchDevices:function(){var a={csNumberOrFactoryDate:""===this.searchData.csNumberOrFactoryDate?null:this.searchData.csNumberOrFactoryDate,modelName:"不限"===this.searchData.modelName?null:this.searchData.modelName,companyName:"不限"===this.searchData.companyName?null:this.searchData.companyName,status:0===this.searchData.status.length?null:this.searchData.status[0]};this.$emit("searchInputDone",a)}}},y=_,x=(e("40a1"),Object(l["a"])(y,p,u,!1,null,"c0257c76",null)),I=x.exports,M={name:"DeviceMonitor",components:{ECUStaticsInfo:d,MainMap:I},data:function(){return{statisticalData:{},mapDeviceInfos:[],modelNamesDropdown:[],companyNamesDropdown:[]}},methods:{getCollection:function(){var a=this;this.statisticalData={},this.mapDeviceInfos=[],this.modelNamesDropdown=[],this.companyNamesDropdown=[],this.$Http["deviceMonitor"]["getCollection"]().then(function(t){var e=t.statistical,s=t.devices;a.statisticalData={totalNum:e.totalNum,onlineNum:e.onlineNum,normalNum:e.normalNum,alarmNum:e.alarmNum},s&&s.forEach(function(t){a.mapDeviceInfos.push({id:t.id,rotateStatus:t.rotateStatus,isAlert:t.status,modelName:t.model.modelName,companyName:t.company.name,infoWindowData:{isAlert:t.status,status:0===t.dataDevices.length?"":t.dataDevices[0].status,csNumber:t.csNumber,beidouId:t.beidouId,rotateSpeed:0===t.dataDevices.length?"":t.dataDevices[0].speed,greasePressure:0===t.dataDevices.length?"":t.dataDevices[0].greasePressure,coolingWater:0===t.dataDevices.length?"":t.dataDevices[0].waterTemp},coordinate:{lng:0===t.dataDevices.length?"":t.dataDevices[0].longitude,lat:0===t.dataDevices.length?"":t.dataDevices[0].latitude}}),a.modelNamesDropdown.includes(t.model.modelName)||a.modelNamesDropdown.push(t.model.modelName),a.companyNamesDropdown.includes(t.company.name)||a.companyNamesDropdown.push(t.company.name)})})},getSearchResults:function(a){var t=this;this.mapDeviceInfos=[],this.$Http["deviceMonitor"]["searchDevices"](a).then(function(a){var e=a.statistical,s=a.devices;t.statisticalData={totalNum:e.totalNum,onlineNum:e.onlineNum,normalNum:e.normalNum,alarmNum:e.alarmNum},s.forEach(function(a){t.mapDeviceInfos.push({id:a.id,isAlert:a.status,modelName:a.model.modelName,companyName:a.company.name,infoWindowData:{isAlert:a.status,status:0===a.dataDevices.length?"":a.dataDevices[0].status,csNumber:a.csNumber,beidouId:a.beidouId,rotateSpeed:0===a.dataDevices.length?"":a.dataDevices[0].speed,greasePressure:0===a.dataDevices.length?"":a.dataDevices[0].greasePressure,coolingWater:0===a.dataDevices.length?"":a.dataDevices[0].waterTemp},coordinate:{lng:0===a.dataDevices.length?"":a.dataDevices[0].longitude,lat:0===a.dataDevices.length?"":a.dataDevices[0].latitude}})})})}},created:function(){this.getCollection()}},S=M,W=Object(l["a"])(S,s,i,!1,null,"864de5a2",null);t["default"]=W.exports},"3b84":function(a,t,e){a.exports=e.p+"img/marker.37a7ac87.png"},"40a1":function(a,t,e){"use strict";var s=e("d16f"),i=e.n(s);i.a},"66d0":function(a,t,e){},b109:function(a,t,e){"use strict";var s=e("66d0"),i=e.n(s);i.a},cd1d:function(a,t,e){a.exports=e.p+"img/markerAlert.32ed9e2b.png"},ce1a:function(a,t,e){"use strict";var s=e("024f"),i=e.n(s);i.a},d16f:function(a,t,e){}}]);
//# sourceMappingURL=chunk-2dfaf860.994f8795.js.map