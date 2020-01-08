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
                    <th>公司</th>
                    <th>出厂日期</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="device in deviceInfos">
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
                    <td>{{device.companyName}}</td>
                    <td>{{device.factoryDate}}</td>
                    <td>
                        <span class="xu-indicator xu-indicator-check" @click="showSingleMonitor(device)">单点监控</span>
                        <span class="xu-indicator xu-indicator-edit">远程控制</span>
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
  export default {
    name: "DeviceTable",
    components: {SingleMonitorPopUp,XuPageNav,XuSelect},
    props:{
      // tableData:{
      //   type:Array,
      //   default:() => {return []}
      // }
    },
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
        searchFields:['设备编号','机型名称','公司名称','出厂日期','设备状态']
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
    },
    methods:{
      //1.显示单点监控界面
      showSingleMonitor:function (device) {
        this.selectedDevice = {
          id:device.id,
          modelName:device.modelName,
          companyName:device.companyName
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
          content.forEach(ele => {
            this.deviceInfos.push({
              id:ele.id,
              companyName:ele['company']['name'],
              modelNumber:ele['model']['modelNumber'],
              modelName:ele['model']['modelName'],
              csNumber:ele['csNumber'],
              beidouId:ele['beidouId'],
              factoryDate:ele['factoryDate'],
              status:ele['status']
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
      }
    },
    created(){
      this.getTableData()
    }
  }
</script>

<style scoped>
    .comp-input-inter {
        color: #d4d7de;
        padding: 0 10px;
    }
</style>