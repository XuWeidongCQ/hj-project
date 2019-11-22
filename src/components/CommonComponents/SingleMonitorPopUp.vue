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
                    <div class="row">
                        <div class="col-7">
                            <div class="chart-container border-bottom" id="rotate-speed"></div>
                            <div class="chart-container border-bottom" id="grease-pressure"></div>
                            <div class="chart-container" id="cooling-water"></div>
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
                    <div class="table-container">
                        <div class="table-title">
                            <label class="mt-1">
                                <span>选择时段:</span>
                                <input type="text" name="startTime">
                                ——
                                <input type="text" name="endTime">
                            </label>
                            <button><span class="fa fa-file-excel-o"></span>&nbsp;导出Excel</button>
                        </div>
                        <table class="table table-sm border-bottom text-center">
                            <thead>
                            <tr>
                                <th v-for="thead in theadContents">
                                    {{ thead }}
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in getRecordForTable(0,5)">
                                <td>{{ item.time }}</td>
                                <td>{{ item.ECUNumber }}</td>
                                <td>{{ item.rotateSpeed }}</td>
                                <td>{{ item.greasePressure }}</td>
                                <td>{{ item.coolingWaterTemperature }}</td>
                                <td>
                                    <span v-if="item.status===1" class="dev-normal">{{ item.status | correctECUStatus }}</span>
                                    <span v-else class="dev-alert">{{ item.status | correctECUStatus }}</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </xu-modal>
    </div>
</template>

<script>
  import XuModal from "@/components/CommonComponents/XuModal";
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
        theadContents:['监测时间','设备编号','转速/rpm','滑油压力/kpa','冷却水温度/℃','运行状态'],
        pointHistoryRecord:[
          {ECUNumber:'122019080323',engineNumber:'32ab',time:'2019-9-11 10:22',status:1,rotateSpeed:1000,greasePressure:1.3,coolingWaterTemperature:30,coordinate:{lng:136,lat:10}},
          {ECUNumber:'122019080323',engineNumber:'32ab',time:'2019-9-11 11:22',status:1,rotateSpeed:980,greasePressure:1.2,coolingWaterTemperature:35,coordinate:{lng:136,lat:10.2}},
          {ECUNumber:'122019080323',engineNumber:'32ab',time:'2019-9-11 12:22',status:0,rotateSpeed:970,greasePressure:1.4,coolingWaterTemperature:29,coordinate:{lng:136,lat:10.4}},
          {ECUNumber:'122019080323',engineNumber:'32ab',time:'2019-9-11 13:22',status:1,rotateSpeed:1120,greasePressure:1.6,coolingWaterTemperature:38,coordinate:{lng:136,lat:10.6}},
          {ECUNumber:'122019080323',engineNumber:'32ab',time:'2019-9-11 14:22',status:0,rotateSpeed:1234,greasePressure:1.3,coolingWaterTemperature:45,coordinate:{lng:136,lat:10.7}},
          {ECUNumber:'122019080323',engineNumber:'32ab',time:'2019-9-11 15:22',status:1,rotateSpeed:1090,greasePressure:1.7,coolingWaterTemperature:30,coordinate:{lng:136,lat:10.9}},
          {ECUNumber:'122019080323',engineNumber:'32ab',time:'2019-9-11 16:22',status:1,rotateSpeed:1256,greasePressure:1.9,coolingWaterTemperature:37,coordinate:{lng:136.5,lat:10}},
          {ECUNumber:'122019080323',engineNumber:'32ab',time:'2019-9-11 17:22',status:1,rotateSpeed:1050,greasePressure:1.1,coolingWaterTemperature:42,coordinate:{lng:136.6,lat:10.4}},
          {ECUNumber:'122019080323',engineNumber:'32ab',time:'2019-9-11 18:22',status:1,rotateSpeed:946,greasePressure:1.4,coolingWaterTemperature:39,coordinate:{lng:136.4,lat:10.8}},
          {ECUNumber:'122019080323',engineNumber:'32ab',time:'2019-9-11 19:22',status:1,rotateSpeed:989,greasePressure:1.3,coolingWaterTemperature:30,coordinate:{lng:136.9,lat:10.9}},
          {ECUNumber:'122019080323',engineNumber:'32ab',time:'2019-9-11 20:22',status:1,rotateSpeed:1045,greasePressure:1.2,coolingWaterTemperature:33,coordinate:{lng:137,lat:11.5}},
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
      this.drawGreasePressureChart(document.getElementById('grease-pressure'),this.parameterHistoryRecord.greasePressure,this.parameterHistoryRecord.time)
      this.drawCoolingWaterChart(document.getElementById('cooling-water'),this.parameterHistoryRecord.coolingWaterTemperature,this.parameterHistoryRecord.time)
    }
  }
</script>

<style scoped>
    .box-title {
        color: #676a6c;
        background-color: transparent;
        width: 1200px;
        font-size: 14px;
    }
    .chart-container {
        height: 100px;
    }
    .map-container {
        border: 1px solid black;
        height: 300px;
    }
    .table>thead {
        background-color: black;
        color: white;
        border: none;
    }
    .table>tbody>tr:hover {
        background-color: #f5f5f5;
    }
    .dev-normal{
        display: inline-block;
        padding: 4px 8px;
        background-color: #23c6c8;
        border-radius: 3px;
        color: white;
        font-size: 12px;
    }
    .dev-alert {
        display: inline-block;
        padding: 4px 8px;
        background-color: #ed5565;
        border-radius: 3px;
        color: white;
        font-size: 12px;
    }
    .table-footer {
        display: flex;
        justify-content: flex-end;
        padding: 5px 20px;
    }
    .table-title {
        padding: 10px 10px;
        height: 45px;
        display: flex;
        justify-content: flex-end;
        /*line-height: 45px;*/
    }
    .table-title input {
        height: 25px;
        width: 140px;
        border-radius: 2px;
        font-size: 14px;
        font-weight: 100;
        padding: 3px 12px;
        border: solid 1px #cccccc;
    }
    .table-title button {
        margin-left: 20px;
        display: inline-block;
        border: 1px solid #58c9f3;
        height: 30px;
        line-height: 30px;
        background-color: #58c9f3;
        border-radius: 3px;
        font-size: 15px;
        color: #ffffff;
    }
    .table-title button:hover{
        background-color: #53bee6;
    }
</style>