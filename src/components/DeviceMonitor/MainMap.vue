<template>
    <div class="main-map-wrapper">
       <div class="row">
           <div class="col-12">
               <div>
                   <div class="info-filter-wrapper">
                       <label class="mb-0">
                           <span class="form-label">类型：</span>
                           <input class="default-input-text" type="text" name="ECUType">
                       </label>
                       <label class="ml-5 mb-0">
                           <span class="form-label">参数：</span>
                           <input class="default-input-text" type="text" name="ECUParameter">
                       </label>
                       <button class="btn btn-primary ml-5"><span class="fa fa-search"></span>  搜索</button>
                   </div>
                   <baidu-map class="map-wrapper"
                              :center="mapCenter"
                              :zoom="mapInitZoom"
                              :scroll-wheel-zoom="true">
                        <!--添加比例尺子组件-->
                       <bm-scale anchor="BMAP_ANCHOR_TOP_LEFT" :offset="{top:'5px',left:'5px'}"></bm-scale>
                       <!--添加缩放控件-->
                       <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-navigation>
                       <!--添加点-->
                       <div v-for="marker in ECUPositionCoordinates">
                           <bm-marker v-if="marker.status === 1"
                                      :position="marker.coordinate"
                                      :icon="icon.iconNormal"
                                      @mouseover="showInfoWindow($event,marker.ECUNumber,marker.status)"
                                      @mouseout="closeInfoWindow"
                                      @click="showSingleModal(marker.ECUNumber,marker.engineNumber)">

                           </bm-marker>
                           <bm-marker v-else
                                      :position="marker.coordinate"
                                      :icon="icon.iconAlert"
                                      @mouseover="showInfoWindow($event,marker.ECUNumber,marker.status)"
                                      @mouseout="closeInfoWindow"
                                      @click="showSingleModal(marker.ECUNumber,marker.engineNumber)">

                           </bm-marker>
                       </div>
                       <point-info-window :point-info="propsToInfoWindow" v-if="isInfoWindowVisible"></point-info-window>
                   </baidu-map>
                   <div class="map-change-wrapper">
                       <button class="btn btn-world" @click.stop="exChangeMap(3,'重庆')" v-show="!isWorldMap"><span class="fa fa-exchange"></span>  世界地图</button>
                       <button class="btn btn-china" @click.stop="exChangeMap(6,'武汉')" v-show="isWorldMap"><span class="fa fa-exchange"></span>  中国地图</button>
                   </div>
               </div>
           </div>
       </div>
       <single-monitor-modal @close="closeSingleModal" v-if="isSingleMonitorVisible" :point-info="propsToSingleMonitorModal"></single-monitor-modal>
    </div>
</template>

<script>
  import SingleMonitorModal from "@/components/CommonComponents/SingleMonitorModal";
  import PointInfoWindow from "@/components/CommonComponents/PointInfoWindow";
  export default {
    name: "MainMap",
    components:{
      PointInfoWindow,
      SingleMonitorModal
    },
    data:function () {
      return {
        ECUPositionCoordinates:[
          {ECUNumber:'122019080323',engineNumber:'32ab',status:1,coordinate:{lng:136,lat:10}},
          {ECUNumber:'122019080324',engineNumber:'33ab',status:1,coordinate:{lng:132,lat:15}},
          {ECUNumber:'122019080325',engineNumber:'34ab',status:1,coordinate:{lng:116,lat:39}},
          {ECUNumber:'122019080326',engineNumber:'35ab',status:0,coordinate:{lng:114,lat:30}},
          {ECUNumber:'122019080327',engineNumber:'36ab',status:0,coordinate:{lng:126,lat:13}},
          {ECUNumber:'122019080328',engineNumber:'37ab',status:0,coordinate:{lng:124,lat:16}},
        ],
        mapInitZoom:3,//缩放等级只能是3到19
        mapCenter:'重庆',
        isWorldMap:true,
        isSingleMonitorVisible:false,
        isInfoWindowVisible:false,
        propsToSingleMonitorModal:{}, //用于向单点监控界面传递的信息
        propsToInfoWindow:{},
        icon:{
          iconNormal:{
            url: require('@/assets/marker.png'),
            size:{width:30,height:30},
            opts:{
              anchor:{top:0,left:0},
              imageSize:{width:30,height:30}
            }
          },
          iconAlert:{
            url: require('@/assets/markerAlert.png'),
            size:{width:30,height:30},
            opts:{
              anchor:{top:0,left:0},
              imageSize:{width:30,height:30}
            }
          },
        }
      }
    },
    computed:{
      points:function () {
        let pointsNormal = [];
        let pointsAlert = [];
        for (let i=0,len=this.ECUPositionCoordinates.length;i<len;i++){
          if (this.ECUPositionCoordinates[i].status === 1){
            pointsNormal.push(this.ECUPositionCoordinates[i])
          } else {
            pointsAlert.push(this.ECUPositionCoordinates[i])
          }
        }
        return {
          pointsNormal:pointsNormal,
          pointsAlert:pointsAlert
        }
      }
    },
    methods:{
      exChangeMap:function (level,centerCity) {
        this.mapCenter = centerCity;
        this.mapInitZoom = level;
        level === 3?this.isWorldMap = true:this.isWorldMap = false;
      },
      showSingleModal:function(ECUNumber,engineNumber){
        this.isSingleMonitorVisible = true;
        this.propsToSingleMonitorModal = {
          ECUNumber:ECUNumber,
          engineNumber:engineNumber
        };
      },
      closeSingleModal:function(){
        this.isSingleMonitorVisible = false
      },
      showInfoWindow:function(event,ECUNumber,status){
        this.isInfoWindowVisible = true;
        this.propsToInfoWindow = {
          ECUNumber:ECUNumber,
          status:status,
          x:event.clientX,
          y:event.clientY,
        }
      },
      closeInfoWindow:function(){
        this.isInfoWindowVisible = false
      },
      test:function (event) {
        console.log(event)
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
    .main-map-wrapper{
        margin: 15px 0;
        background-color: transparent;
    }
    .map-wrapper {
        height: 705px;
        border: solid 3px white;
        position: relative;
    }
    .info-filter-wrapper {
        position: absolute;
        right: 30px;
        top: 15px;
        border-radius: 5px;
        padding: 10px 30px;
        background-color: #ffffff;
        z-index: 100;
        font-size: 14px;
    }
    .default-input-text {
        width: 150px;
        line-height: 20px;
    }
    .form-label{
        line-height: 20px;
        color: #2f4050;
        font-weight: 300;
    }
    .btn-click {
        margin-left: 30px;
        border-radius: 3px;
        border:none;
        background-color: #1c84c6;
        color: white;
        padding: 0 10px;
        vertical-align: middle;
        outline: none;
    }
    .btn-click:hover {
        background-color: #1a7bb9;
    }
    .map-change-wrapper{
        position: absolute;
        right: 30px;
        bottom: 0;
        padding: 10px 30px;
        background-color: transparent;
    }
    .btn-world {
        background-color: #41cac0;
        color: white;
    }
    .btn-world:hover{
        background-color: #39b2a9;
    }
    .btn-china {
        background-color: #58c9f3;
        color: white;
    }
    .btn-china:hover {
        background-color: #53bee6;
    }
</style>