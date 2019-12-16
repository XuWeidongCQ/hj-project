<template>
    <div>
        <xu-modal :shown="true"
                  :header-shown="true"
                  :model-style="{'marginTop':'25px'}"
                  :header-style="{'backgroundColor':'#48a8ff','color':'#fcfcfc'}"
                  @close="close">
            <div slot="header">#{{deviceInfo.id}} 单点监控模式</div>
            <div slot="content">
                <div class="box-title">
                    <span>客户公司：</span><span class="mr-4">{{ deviceInfo.companyName }}</span>
                    <span>机型名称：</span><span>{{ deviceInfo.modelName }}</span>
                </div>
                <div class="box-content">
                    <div class="xu-row mb-integer">
                        <!--charts部分-->
                        <div class="xu-col-7">
                            <!--转速曲线图-->
                            <xu-chart :type="'line'"
                                      :chart-style="{height:'100px'}"
                                      :y-axis="{type:'value',name:'转速/rpm',nameLocation:'middle',nameGap:40,splitLine:{show:false}}"
                                      :x-axis="{type:'category',show:false,boundaryGap: false}"
                                      :grid="{containLabel: false, left:'70px', right:'0px', top:'15px', bottom:'5px'}"
                                      :data="{x:deviceHistoryRecord.time,y:deviceHistoryRecord.rotateSpeed}"></xu-chart>
                            <!--滑油压力曲线图-->
                            <xu-chart :type="'line'"
                                      :chart-style="{height:'100px'}"
                                      :y-axis="{type:'value',name:'滑油压力/kpa',nameLocation:'middle',nameGap:40,splitLine:{show:false}}"
                                      :x-axis="{type:'category',show:false,boundaryGap: false}"
                                      :grid="{containLabel: false, left:'70px', right:'0px', top:'15px', bottom:'5px'}"
                                      :data="{x:deviceHistoryRecord.time,y:deviceHistoryRecord.greasePressure}"></xu-chart>
                            <!--冷却水曲线图-->
                            <xu-chart :type="'line'"
                                      :chart-style="{height:'100px'}"
                                      :y-axis="{type:'value',name:'冷却水温度/℃',nameLocation:'middle',nameGap:40,splitLine:{show:false}}"
                                      :x-axis="{type:'category',boundaryGap: false}"
                                      :grid="{containLabel: false, left:'70px', right:'0px', top:'5px', bottom:'25px'}"
                                      :data="{x:deviceHistoryRecord.time,y:deviceHistoryRecord.coolingWaterTemperature}"></xu-chart>
                        </div>
                        <!--运行轨迹图-->
                        <div class="xu-col-5">
                            <baidu-map class="map-container"
                                       :center="track.coordinates[0]"
                                       :scroll-wheel-zoom="true"
                                       :zoom="7">
                                <bm-polyline :path="track.coordinates"
                                             :stroke-weight="2"
                                             stroke-color="red"></bm-polyline>
                                <!--使用v-if是因为position绑定的是异步数据，初次渲染的时候还没有数据，会报错-->
                                <bm-label content="开始" :position="track.coordinates[0]" v-if="track.coordinates[0]"></bm-label>
                                <bm-label content="结束" :position="track.coordinates[track.coordinates.length-1]" v-if="track.coordinates[0]"></bm-label>
                                <bm-scale anchor="BMAP_ANCHOR_TOP_LEFT" :offset="{top:'5px',left:'5px'}"></bm-scale>
                                <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                            </baidu-map>
                        </div>
                    </div>
                    <!--统计指标-->
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
                            <button class="xu-btn xu-btn-info ml-integer"><span class="fa fa-file-excel-o"></span>&nbsp;导出Excel</button>
                        </div>
                        <!--历史数据表格-->
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
                                <tr v-for="(item,index) in historyDataInfos" :key="index">
                                    <td>{{ item.time }}</td>
                                    <td>{{ item.rotateSpeed }}</td>
                                    <td>{{ item.greasePressure }}</td>
                                    <td>{{ item.coolingWaterTemperature }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <!--报警数据表格-->
                        <div class="warn-maintain-table">
                            <div class="warn-table mb-integer scrollBar-style">
                                <table class="xu-table xu-table-center xu-table-sm xu-table-hover">
                                    <thead class="xu-text-white-level0">
                                    <tr class="bg-warning">
                                        <th>信息</th>
                                        <th>类型</th>
                                        <th>报警时间</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(alarm,index) in alarmInfos" :key="index">
                                        <td>{{alarm.alarmInfo}}</td>
                                        <td>
                                            <span class="xu-badge" :class="{'xu-badge-error':alarm.alarmType === 0,
                                                      'xu-badge-warning':alarm.alarmType === 1}">
                                                {{ alarm.alarmType | alarmTypeFilter }}
                                            </span>
                                        </td>
                                        <td>{{alarm.alarmTime}}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div class="look-more-text" v-if="alarmInfos.length !== 0">查看更多</div>
                                <div v-if="alarmInfos.length === 0" class="hint-text">暂无记录</div>
                            </div>
                            <!--维修记录数据表格-->
                            <div class="maintain-table scrollBar-style">
                                <table class="xu-table xu-table-center xu-table-sm xu-table-hover">
                                    <thead class="xu-text-white-level0">
                                    <tr class="bg-danger">
                                        <th>更换类型</th>
                                        <th>维修人</th>
                                        <th>维修时间</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(repair,index) in repairInfos" :key="index">
                                        <td>{{ repair.replacementType }}</td>
                                        <td>{{ repair.repairman }}</td>
                                        <td>{{ repair.repairDate }}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div class="look-more-text" v-if="repairInfos.length !== 0">查看更多</div>
                                <div v-if="repairInfos.length === 0" class="hint-text">暂无记录</div>
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
  import { BaiduMap,BmScale,BmNavigation,BmPolyline,BmLabel } from 'vue-baidu-map/components'
  import XuCSS from "@/plugins/XuCSS";
  import XuChart from "@/components/CommonComponents/XuComponent/XuChart";

  let echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/line');
  require('echarts/lib/component/tooltip');
  export default {
    name: "SingleMonitorModal",
    components:{
      XuModal,
      BaiduMap,
      BmNavigation,
      BmScale,
      BmLabel,
      BmPolyline,
      XuChart
    },
    props:{
      deviceInfo:Object,
    },
    data(){
      return {
        theadContents:['监测时间','转速/rpm','滑油压力/kpa','冷却水温度/℃'],
        alarmInfos:[],//存放设备报警记录信息
        repairInfos:[],//存放设备维修记录信息
        historyDataInfos:[],//存放设备历史传感器数据
        trackInfos:[],//轨迹信息
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
      deviceHistoryRecord:function () {
        let rotateSpeed = [],
            greasePressure = [],
            coolingWaterTemperature = [],
            time = [];
        let len=this.historyDataInfos.length;
        for (let i=0;i<len;i++){
          rotateSpeed.push(this.historyDataInfos[i].rotateSpeed);
          greasePressure.push(this.historyDataInfos[i].greasePressure);
          coolingWaterTemperature.push(this.historyDataInfos[i].coolingWaterTemperature);
          time.push(this.historyDataInfos[i].time);
        }

        return {
          rotateSpeed:rotateSpeed,
          greasePressure:greasePressure,
          coolingWaterTemperature:coolingWaterTemperature,
          time:time,
        }
      },
      track:function () {
        let coordinates = [];
        for (let i=0;i<this.trackInfos.length;i++){
          coordinates.push({lat:this.trackInfos[i].latitude,lng:this.trackInfos[i].longitude})
        }
        return {
          coordinates:coordinates,
        }
      }
    },
    methods:{
      //1.关闭单点监控界面
      close:function () {
        this.$emit('close')
      },
      //2.获取整个界面的所需数据
      getSingleDeviceCollectionInfos:function(){
        this.$Http['singleMonitor']['getSingleDeviceCollectionInfos'](this.deviceInfo.id)
          .then(res => {
            const {alarms,datas:data,device,repairs} = res;
            //处理维修信息
            repairs && repairs.forEach(ele => {
              this.repairInfos.push({
                replacementType: ele.replacementType,
                repairman:ele.repairman,
                remark: ele.remark,
                repairDate:ele.repairDate
              })
            });
            //处理报警信息
            alarms && alarms.forEach(ele => {
              this.alarmInfos.push({
                alarmInfo: ele.alarmInfo,
                alarmType: ele.alarmType,
                alarmTime:ele.createTime
              })
            });
            //处理设备历史传感器数据-处理轨迹数据[要改]
            data && data.forEach(ele => {
              this.historyDataInfos.push({
                rotateSpeed:ele.speed,
                greasePressure:ele.greasePressure,
                coolingWaterTemperature:ele.waterTemp,
                time:ele.createTime
              });
              this.trackInfos.push({
                latitude:ele.latitude,
                longitude:ele.longitude
              })
            });
            //
          })
      },

    },
    filters:{
      alarmTypeFilter:function (value) {
        switch (value) {
          case 0:
            return '数据异常';
          case 1:
            return '设备故障'
        }
      }
    },
    created(){
      this.getSingleDeviceCollectionInfos()
    },
    mounted(){
      // console.log(this.deviceHistoryRecord.coordinates)

    },
    //异步数据更新后执行
    updated(){
      // console.log(this.deviceHistoryRecord.coordinates);
      // console.log(this.deviceHistoryRecord.startPoint);
      // console.log(this.deviceHistoryRecord.endPoint);
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
    .history-table {
        width: 650px;
        height: 350px;
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
    .hint-text {
        text-align: center;
        color: #999999;
        margin-top: 50px;
    }
    .look-more-text {
        cursor: pointer;
        text-align: center;
        color: #999999;
        margin-top: 15px;
        font-size: 13px;
    }
    .look-more-text:hover {
        color: #848484;
    }
</style>