<template>
    <div>
        <xu-modal :shown="true"
                  :header-shown="true"
                  @close="close">
            <div slot="header">单点监控模式</div>
            <div slot="content">
                <div class="box-title">
                    <span>客户公司：</span><span class="mr-4">某某厂</span>
                    <span>设备编号：</span><span class="mr-4">{{ pointInfo.ECUNumber }}</span>
                    <span>机型编号：</span><span>{{ pointInfo.engineNumber }}</span>
                </div>
                <div class="box-content">
                    <div class="row mb-integer">
                        <div class="col-7">
                            <div class="chart-container border" id="rotate-speed"></div>
                            <div class="chart-container border" id="grease-pressure"></div>
                            <div class="chart-container border" id="cooling-water"></div>
                        </div>
                        <div class="col-5">
                            <baidu-map class="map-container"
                                       :center="parameterHistoryRecord.startPoint"
                                       :scroll-wheel-zoom="true"
                                       :zoom="8">
                                <bm-polyline :path="parameterHistoryRecord.coordinates"
                                             :stroke-weight="2"
                                             stroke-color="red"></bm-polyline>
                                <bm-label content="开始" :position="parameterHistoryRecord.startPoint"></bm-label>
                                <bm-label content="结束" :position="parameterHistoryRecord.endPoint"></bm-label>
                                <bm-scale anchor="BMAP_ANCHOR_TOP_LEFT" :offset="{top:'5px',left:'5px'}"></bm-scale>
                                <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                            </baidu-map>
                        </div>
                    </div>
                    <div class="statics-info-wrapper mb-integer">
                        <div class="statics-item bg-light border">
                            <span>在线率:</span><span>98%</span>
                        </div>
                        <div class="statics-item bg-light border">
                            <span>累计在线时间:</span><span>1450s</span>
                        </div>
                        <div class="statics-item bg-light border">
                            <span>累计正常时间:</span><span>1450s</span>
                        </div>
                        <div class="statics-item bg-light border">
                            <span>累计报警时间:</span><span>98s</span>
                        </div>
                    </div>
                    <div class="table-container clearfix">
                        <div class="table-title">
                            <label class="xu-label-text">
                                <span>选择时段:</span>
                                <input type="datetime-local" name="startTime" class="xu-input">
                                —
                                <input type="datetime-local" name="endTime" class="xu-input">
                            </label>
                            <button class="xu-btn-sm xu-btn-info ml-3"><span class="fa fa-file-excel-o"></span>&nbsp;导出Excel</button>
                        </div>
                        <div class="history-table xu-fix-table-wrapper scrollBar-style">
                            <table class="xu-table xu-table-center xu-table-sm xu-table-hover">
                                <thead class="xu-text-white-level0">
                                <tr class="bg-info">
                                    <th v-for="thead in theadContents">
                                        {{ thead }}
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(item,index) in pointHistoryRecord" :key="index">
                                    <td>{{ item.time }}</td>
                                    <td>{{ item.rotateSpeed }}</td>
                                    <td>{{ item.greasePressure }}</td>
                                    <td>{{ item.coolingWaterTemperature }}</td>
                                    <td>
                                        <span v-if="item.status===1" class="badge badge-success">{{ item.status | correctECUStatus }}</span>
                                        <span v-else class="badge badge-danger">{{ item.status | correctECUStatus }}</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="warn-maintain-table">
                            <div class="warn-table mb-integer scrollBar-style">
                                <table class="xu-table xu-table-center xu-table-sm xu-table-hover">
                                    <thead class="xu-text-white-level0">
                                    <tr class="bg-warning">
                                        <th>信息</th>
                                        <th>类型</th>
                                        <th>故障码</th>
                                        <th>报警时间</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                            <div class="maintain-table scrollBar-style">
                                <table class="xu-table xu-table-center xu-table-sm xu-table-hover">
                                    <thead class="xu-text-white-level0">
                                    <tr class="bg-danger">
                                        <th>更换类型</th>
                                        <th>维修人</th>
                                        <th>备注</th>
                                        <th>维修时间</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </xu-modal>
    </div>
</template>

<script>
  import XuModal from "@/components/CommonComponents/XuComponent/XuModal";
  import XuCSS from "@/plugins/XuCSS";
  let echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/line');
  require('echarts/lib/component/tooltip');
  export default {
    name: "SingleMonitorModal",
    components:{
      XuModal
    },
    props:{
      pointInfo:Object,
    },
    data(){
      return {
        theadContents:['监测时间','转速/rpm','滑油压力/kpa','冷却水温度/℃','运行状态'],
        pointHistoryRecord:[
          {time:'2019-9-11 10:22',status:1,rotateSpeed:1000,greasePressure:1.3,coolingWaterTemperature:30,coordinate:{lng:136,lat:10}},
          {time:'2019-9-11 11:22',status:1,rotateSpeed:980,greasePressure:1.2,coolingWaterTemperature:35,coordinate:{lng:136,lat:10.2}},
          {time:'2019-9-11 12:22',status:0,rotateSpeed:970,greasePressure:1.4,coolingWaterTemperature:29,coordinate:{lng:136,lat:10.4}},
          {time:'2019-9-11 13:22',status:1,rotateSpeed:1120,greasePressure:1.6,coolingWaterTemperature:38,coordinate:{lng:136,lat:10.6}},
          {time:'2019-9-11 14:22',status:0,rotateSpeed:1234,greasePressure:1.3,coolingWaterTemperature:45,coordinate:{lng:136,lat:10.7}},
          {time:'2019-9-11 15:22',status:1,rotateSpeed:1090,greasePressure:1.7,coolingWaterTemperature:30,coordinate:{lng:136,lat:10.9}},
          {time:'2019-9-11 16:22',status:1,rotateSpeed:1256,greasePressure:1.9,coolingWaterTemperature:37,coordinate:{lng:136.5,lat:10}},
          {time:'2019-9-11 17:22',status:1,rotateSpeed:1050,greasePressure:1.1,coolingWaterTemperature:42,coordinate:{lng:136.6,lat:10.4}},
          {time:'2019-9-11 18:22',status:1,rotateSpeed:946,greasePressure:1.4,coolingWaterTemperature:39,coordinate:{lng:136.4,lat:10.8}},
          {time:'2019-9-11 19:22',status:1,rotateSpeed:989,greasePressure:1.3,coolingWaterTemperature:30,coordinate:{lng:136.9,lat:10.9}},
          {time:'2019-9-11 20:22',status:1,rotateSpeed:1045,greasePressure:1.2,coolingWaterTemperature:33,coordinate:{lng:137,lat:11.5}},
        ]
      }
    },
    computed:{
      parameterHistoryRecord:function () {
        let rotateSpeed = [],
            greasePressure = [],
            coolingWaterTemperature = [],
            time = [],
            coordinates = [];
        let len=this.pointHistoryRecord.length;
        for (let i=0;i<len;i++){
          rotateSpeed.push(this.pointHistoryRecord[i].rotateSpeed);
          greasePressure.push(this.pointHistoryRecord[i].greasePressure);
          coolingWaterTemperature.push(this.pointHistoryRecord[i].coolingWaterTemperature);
          time.push(this.pointHistoryRecord[i].time);
          coordinates.push(this.pointHistoryRecord[i].coordinate);
        }
        return {
          rotateSpeed:rotateSpeed,
          greasePressure:greasePressure,
          coolingWaterTemperature:coolingWaterTemperature,
          time:time,
          coordinates:coordinates,
          startPoint:this.pointHistoryRecord[0].coordinate,
          endPoint:this.pointHistoryRecord[len-1].coordinate
        }
      },
    },
    methods:{
      close:function () {
        this.$emit('close')
      },
      getRecordForTable:function(start,end){
        let result = [];
        for (let i=start,len=this.pointHistoryRecord.length;i<end;i++){
          result.push(this.pointHistoryRecord[i])
        }
        return result
      },
      drawRotateSpeedChart:function (pos,rotateSpeed,time) {
        let rotateSpeedChartInstance = echarts.init(pos);
        rotateSpeedChartInstance.setOption({
          color:['#3399ff'],
          tooltip: {
            trigger: 'item',
          },
          yAxis:{
            type:'value',
            name:'转速/rpm',
            nameLocation:'middle',
            nameGap:40,
            splitLine: {
              show: false
            }
          },
          xAxis:{
            type:'category',
            show:false,
            boundaryGap: false,
          },
          grid: {
            containLabel: false,
            left:'70px',
            right:'25px',
            top:'15px',
            bottom:'5px'
          },
          dataset: {
            source:{
              'time':time,
              'rotateSpeed':rotateSpeed,
            }
          },
          series:[
            {
              type: 'line',
              smooth:true,
              encode:{
                x:'time',
                y:'rotateSpeed'
              }
            },
          ]
        });
        window.addEventListener('resize',function () {
          rotateSpeedChartInstance.resize()
        });
      },
      drawGreasePressureChart:function (pos,greasePressure,time) {
        let greasePressureChartInstance = echarts.init(pos);
        greasePressureChartInstance.setOption({
          color:['#006600'],
          tooltip: {
            trigger: 'item',
          },
          yAxis:{
            type:'value',
            name:'滑油压力/kpa',
            nameLocation:'middle',
            nameGap:40,
            splitLine: {
              show: false
            }
          },
          xAxis:{
            type:'category',
            show:false,
            boundaryGap: false,
          },
          grid: {
            containLabel: false,
            left:'70px',
            right:'25px',
            top:'15px',
            bottom:'5px'
          },
          dataset: {
            source:{
              'time':time,
              'greasePressure':greasePressure,
            }
          },
          series:[
            {
              type: 'line',
              smooth:true,
              encode:{
                x:'time',
                y:'greasePressure'
              }
            },
          ]
        });
        window.addEventListener('resize',function () {
          greasePressureChartInstance.resize()
        });
      },
      drawCoolingWaterChart:function (pos,coolingWater,time) {
        let coolingWaterChartInstance = echarts.init(pos);
        coolingWaterChartInstance.setOption({
          color:['#ff6600'],
          tooltip: {
            trigger: 'item',
          },
          yAxis:{
            type:'value',
            name:'冷却水温度/℃',
            nameLocation:'middle',
            nameGap:40,
            splitLine: {
              show: false
            }
          },
          xAxis:{
            type:'category',
            boundaryGap: false,
          },
          grid: {
            containLabel: false,
            left:'70px',
            right:'25px',
            top:'15px',
            bottom:'25px'
          },
          dataset: {
            source:{
              'time':time,
              'coolingWater':coolingWater,
            }
          },
          series:[
            {
              type: 'line',
              smooth:true,
              encode:{
                x:'time',
                y:'coolingWater'
              }
            },
          ]
        });
        window.addEventListener('resize',function () {
          coolingWaterChartInstance.resize()
        });
      }
    },
    // filters:
    mounted(){
      this.drawRotateSpeedChart(document.getElementById('rotate-speed'),this.parameterHistoryRecord.rotateSpeed,this.parameterHistoryRecord.time);
      this.drawGreasePressureChart(document.getElementById('grease-pressure'),this.parameterHistoryRecord.greasePressure,this.parameterHistoryRecord.time);
      this.drawCoolingWaterChart(document.getElementById('cooling-water'),this.parameterHistoryRecord.coolingWaterTemperature,this.parameterHistoryRecord.time);
      XuCSS.fixTableThead()
    }
  }
</script>

<style scoped>
    .box-title {
        background-color: transparent;
        width: 1200px;
        font-size: 16px;
    }
    .chart-container {
        height: 100px;
    }
    .map-container {
        border: 1px solid black;
        height: 300px;
    }
    .statics-info-wrapper {
        display: flex;
        color: #4d5875;
        font-weight: 900;
        font-size: 18px;
        justify-content: space-between;
    }
    .statics-item {
        padding: 15px 20px;
        border-radius: 5px;
        width: 250px;
        text-align: center;
    }
    /*.table-container {*/
    /*    border: 1px solid #cccccc;*/
    /*}*/
    .history-table {
        width: 650px;
        height: 250px;
        float: left;
    }
    .table-title {
        padding: 10px 0;
    }
    .warn-maintain-table {
        float: right;
        height: 350px;
        width: 530px;
    }
    .warn-table {
        height: 170px;
        outline: 1px solid #cccccc;
    }
    .maintain-table {
        height: 170px;
        outline: 1px solid #cccccc;
    }
</style>