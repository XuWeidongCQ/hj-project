<template>
    <div class="xubox">
        <div class="xubox-title">
            <span>设备概况</span>
        </div>
        <div class="xubox-content">
            <div>
                <xu-select v-model="selectedField" :options="searchFields">
                </xu-select>
                <span class="comp-input-inter">—</span>
                <xu-select v-if="selectedField === '设备状态'"
                           v-model="selectedValue"
                           :options="['不限','正常','报警','报废']">
                </xu-select>
                <label class="xu-label-text" v-else>
                    <input class="xu-input" type="text" v-model="selectedValue" :placeholder="'请输入'+selectedField">
                </label>
                <button class="xu-btn xu-btn-info ml-integer" @click="searchDevices">搜索</button>
            </div>
            <table class="xu-table xu-table-hover xu-table-center xu-table-strip">
                <thead class="xu-bg-silver">
                <tr>
                    <th>状态</th>
                    <th>设备编号</th>
                    <th>机型名称</th>
                    <th>北斗卡号</th>
                    <th>5G接口</th>
                    <th>公司</th>
                    <th v-if="auth.includes('停止工作') || auth.includes('恢复工作')">启用</th>
                    <th>出厂日期</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="device in deviceInfos" :key="device.id">
                    <td>
                        <span
                            class="xu-badge"
                            :class="{'xu-badge-success':device.status === 1,
                                         'xu-badge-error':device.status === 0,
                                         'xu-badge-warning':device.status === 2}">
                                {{device.status | statusFilter }}
                            </span>
                    </td>
                    <td>{{device.csNumber}}</td>
                    <td>{{device.modelName}}</td>
                    <td>{{device.beidouId}}</td>
                    <td>{{device.ipPort}}</td>
                    <td>{{device.companyName}}</td>
                    <td v-if="auth.includes('停止工作') || auth.includes('恢复工作')">
                        <xu-switch :value="device.rotateStatus | rotateStatusFilter"
                                   :isShowConfirm='true'
                                   @toggle="changeRotateStatus($event,device.id)">
                        </xu-switch>
                    </td>
                    <td>{{device.factoryDate}}</td>
                    <td>
                        <span class="xu-indicator xu-indicator-delete"
                              @click="delDeviceInfo(device.id)">删除</span>
                        <span class="xu-indicator xu-indicator-check" 
                              @click="showSingleMonitor(device)" 
                              v-if="auth.includes('单点监控')">单点监控</span>

                    </td>
                </tr>
                </tbody>
            </table>
            <div class="xu-text-center">
                <xu-page-nav :is-shown="true"
                             :size="serverData.size"
                             :now-page="serverData.number"
                             :total-elements="serverData.totalElements"
                             :total-page="serverData.totalPages"
                             @selectedPage="jumpSelectedPage($event)">
                </xu-page-nav>
            </div>
        </div>
        <single-monitor-pop-up v-if="isSingleMonitorVisible"
                               :device-info="selectedDevice"
                               @close="isSingleMonitorVisible = false">
        </single-monitor-pop-up>
    </div>
</template>

<script>
  import SingleMonitorPopUp from "@/components/SharePopUp/SingleMonitor/SingleMonitorPopUp";
  import XuPageNav from "@/components/CommonComponents/XuComponent/XuPageNav";
  import XuSelect from "@/components/CommonComponents/XuComponent/XuSelect";
  import XuSwitch from "@/components/CommonComponents/XuComponent/XuSwitch";
  import { XuToastr } from "@/components/CommonComponents/XuComponent/XuToastr/XuToastr";
  export default {
    name: "DeviceTable",
    components: {SingleMonitorPopUp,XuPageNav,XuSelect,XuSwitch,XuToastr},
    data(){
      return {
        selectedDevice:{},
        isSingleMonitorVisible:false,
        serverData:{},
        deviceInfos:[],
        //用于查询的信息
        searchInfo:{
          csNumberOrFactoryDate:null,//设备编号
          modelName:null,//机型名称
          companyName:null,//公司名称
          factoryDate:null,//出厂日期
          status:null,//设备状态：0：报废 1：正常 2：报警
        },
        //用于搜索的信息
        searchData:[
          {name:'设备编号',field:'csNumberOrFactoryDate'},
          {name:'机型名称',field:'modelName'},
          {name:'公司名称',field:'companyName'},
          {name:'出厂日期',field:'factoryDate'},
          {name:'设备状态',field:'status'},
        ],
        //选择的搜索字段
        selectedField:'设备编号',
        selectedValue:'',
        searchFields:['设备编号','机型名称','公司名称','出厂日期','设备状态'],
        //权限
        auth:this.$store.getters['getLoginInfo']['auth']['buttonAuthList']
      }
    },
    filters:{
      statusFilter: function (value) {
        switch (value) {
          case 0:
            return '报废';
          case 1:
            return '正常';
          case 2:
            return '报警';
          default:
            return '未知'
        }
      },
      rotateStatusFilter: function (value) {
        switch (value) {
          case 0:
            return false;
          case 1:
            return true;
          default:
            return true
        }
      },
    },
    methods:{
      //1.显示单点监控界面
      showSingleMonitor:function (device) {
        this.selectedDevice = {
          id:device.id,
          modelName:device.modelName,
          companyName:device.companyName,
          rotateStatus:device.rotateStatus,
        };
        this.isSingleMonitorVisible = true;
      },
      //2.获取数据
      getTableData:function (page=0) {
        this.deviceInfos = [];
        this.$Http['deviceManage']['searchDevices'](this.searchInfo,{},'?start='+page)
        .then(res => {
          // console.log(res);
          // const {devices:tableData} = res;
          this.serverData = res;
          const {content} = res;
          // console.log(content);
          content.forEach(ele => {
            this.deviceInfos.push({
              id:ele.id,
              companyName:ele['company']['name'],
              modelNumber:ele['model']['modelNumber'],
              modelName:ele['model']['modelName'],
              csNumber:ele['csNumber'],
              beidouId:ele['beidouId'],
              factoryDate:ele['factoryDate'],
              status:ele['status'],
              rotateStatus:ele['rotateStatus'],
              ipPort:ele['ipPort'] === null ? '暂无' : ele['ipPort']
            })
          })
        })
      },
      //3.分页器跳转
      jumpSelectedPage:function(selectedPage){
        this.getTableData(selectedPage-1)
      },
      //4.搜索
      searchDevices:function () {
        const searchInfo = {field:this.selectedField,value:this.selectedValue};
        let value ='';
        if (searchInfo.field === '设备状态'){
          switch (searchInfo.value) {
            case "报废":
              value = 0;
              break;
            case "正常":
              value = 1;
              break;
            case "报警":
              value = 2;
              break;
            case "不限":
              value = null;
              break;
          }
          searchInfo.value = value;
        }
        this.searchData.forEach(ele => {
          if (ele['name'] === searchInfo.field){
            this.searchInfo[ele['field']] = searchInfo.value;
            this.selectedValue = '';
            this.getTableData()
          }
        });
      },
      //5 停止或者恢复发动机工作
      changeRotateStatus:function (status,deviceId) {
        const tranData = {id:deviceId};
        switch (status) {
          case true:
            this.$Http['deviceManage']['enableEngine'](tranData)
              .then(res => {
                // console.log(res)
                // this.getTableData();
            });
            break;
          case false:
            this.$Http['deviceManage']['disableEngine'](tranData)
              .then(res => {
                // console.log(res)
                // this.getTableData();
            });
        }
      },
      //6.删除一台设备
      delDeviceInfo:function(deviceInfoId){
        this.$Http['backendManage']['delDeviceInfo'](deviceInfoId)
          .then( res => {
            res && this.getTableData()
          })
          .catch(error => {});
      },
    },
    created(){
      this.getTableData();
    }
  }
</script>

<style scoped>
    .comp-input-inter {
        color: #d4d7de;
        padding: 0 10px;
    }
</style>