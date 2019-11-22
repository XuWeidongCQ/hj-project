<template>
    <div class="xubox xubox-content">
        <div class="table-title">
            <div class="search-field-container">
<!--                <label for="searchField">搜索：</label>-->
                <select id="searchField" name="searchField" class="searchField">
                    <option value="status">运行状态</option>
                    <option value="ECUNumber">设备编号</option>
                    <option value="engineNumber">机型编号</option>
                    <option value="manufactureDate">出厂日期</option>
                    <option value="userName">用户名</option>
                    <option value="userAddress">用户地址</option>
                </select>
                -
                <input class="searchField" type="text">
                <button class="btn-sm btn-primary ml-3"><span class="fa fa-search">  搜索</span></button>
            </div>
            <button class="btn-sm btn-info" @click="showDeviceInfoInputModal"><span class="fa fa-plus"></span>&nbsp;&nbsp;新增设备</button>
        </div>
        <table class="table border-bottom text-center table-sm">
            <thead>
            <tr>
                <th v-for="thead in theadContents">
                    {{ thead }}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="tbody in tbodyContents">
                <td>
                    <span v-if="tbody.status === 1" class="badge badge-success">{{ tbody.status | correctECUStatus }}</span>
                    <span class="badge badge-danger" v-else>{{ tbody.status | correctECUStatus }}</span>
                </td>
                <td>{{tbody.ECUNumber}}</td>
                <td>{{tbody.engineNumber}}</td>
                <td>{{tbody.manufactureDate}}</td>
                <td>{{tbody.userName}}</td>
                <td>{{tbody.userAddress}}</td>
                <td>
                    <button class="btn-icon" @click="showSingleModal(tbody.ECUNumber,tbody.engineNumber)"><span class="fa fa-eye"></span></button>
                    <button class="btn-icon" @click.stop="showDeviceInfoInputModal"><span class="fa fa-edit"></span></button>
                    <button class="btn-icon"><span class="fa fa-trash"></span></button>
                </td>
            </tr>
            </tbody>
        </table>
        <div class="table-footer">
            <ul class="pagination">
                <li class="page-item"><button class="page-link">1</button></li>
                <li class="page-item"><button class="page-link">2</button></li>
                <li class="page-item"><button class="page-link">3</button></li>
                <li class="page-item"><button class="page-link">4</button></li>
                <li class="page-item"><button class="page-link">5</button></li>
            </ul>
        </div>
        <!--设备编辑模态框-->
        <device-info-input-modal v-show="isModalVisible"
                                 @close="closeDeviceInfoInputModal">
        </device-info-input-modal>
        <!--单点监控模态框-->
        <single-monitor-modal v-if="isSingleMonitorVisible"
                              :point-info="propsToSingleMonitorModal"
                              @close="closeSingleModal">
        </single-monitor-modal>
    </div>
</template>

<script>
  import DeviceInfoInputModal from "@/components/CommonComponents/DeviceInfoInputPopUp";
  import SingleMonitorModal from "@/components/CommonComponents/SingleMonitorPopUp";
  export default {
    name: "TableStatics",
    data(){
      return {
        theadContents:['状态','设备编号','机型编号','出厂日期','用户名','用户地址','操作'],
        tbodyContents:[
          {status:0,ECUNumber:'122019080323',engineNumber:'32ab',manufactureDate:'2019-8-27',userName:'重庆某船厂',userAddress:'382550'},
          {status:0,ECUNumber:'122019080324',engineNumber:'33ab',manufactureDate:'2019-8-27',userName:'重庆某船厂',userAddress:'382550'},
          {status:0,ECUNumber:'122019080325',engineNumber:'34ab',manufactureDate:'2019-8-27',userName:'重庆某船厂',userAddress:'382550'},
          {status:0,ECUNumber:'122019080326',engineNumber:'35ab',manufactureDate:'2019-8-27',userName:'重庆某船厂',userAddress:'382550'},
          {status:0,ECUNumber:'122019080327',engineNumber:'36ab',manufactureDate:'2019-8-27',userName:'重庆某船厂',userAddress:'382550'},
          {status:1,ECUNumber:'122019080328',engineNumber:'37ab',manufactureDate:'2019-8-27',userName:'重庆某船厂',userAddress:'382550'},
          {status:1,ECUNumber:'122019080329',engineNumber:'38ab',manufactureDate:'2019-8-27',userName:'重庆某船厂',userAddress:'382550'},
          {status:1,ECUNumber:'122019080330',engineNumber:'39ab',manufactureDate:'2019-8-27',userName:'重庆某船厂',userAddress:'382550'},
          {status:1,ECUNumber:'122019080331',engineNumber:'40ab',manufactureDate:'2019-8-27',userName:'重庆某船厂',userAddress:'382550'},
        ],
        isModalVisible:false,
        isSingleMonitorVisible:false,
        propsToSingleMonitorModal:{} //用于向单点监控界面传递的信息
      }
    },
    components:{
      DeviceInfoInputModal,
      SingleMonitorModal
    },
    methods:{
      showDeviceInfoInputModal:function () {
        this.isModalVisible = true
      },
      closeDeviceInfoInputModal:function () {
        this.isModalVisible = false
      },
      showSingleModal:function (ECUNumber,engineNumber) {
        this.isSingleMonitorVisible = true;
        this.propsToSingleMonitorModal = {
          ECUNumber:ECUNumber,
          engineNumber:engineNumber
        };

      },
      closeSingleModal:function () {
        this.isSingleMonitorVisible = false
      }
    }
  }
</script>

<style scoped>
    .table-title {
        padding: 15px 10px;
        display: flex;
        justify-content: space-between;
    }
    .search-field-container {
        color: #676a6c;
    }
    .search-field-icon {
        display: inline-block;
        border: 1px solid #cccccc;
        height: 32px;
        line-height: 30px;
        background-color: transparent;
        border-radius: 3px;
    }
    .searchField{
        height: 30px;
        width: 140px;
        border-radius: 2px;
        font-size: 14px;
        font-weight: 100;
        padding: 3px 12px;
        border: solid 1px #cccccc;
    }
    .table>thead {
        background-color: #2f4050;
        color: white;
        border: none;
    }
    .table>tbody>tr:hover {
        background-color: #f3f3f4;
    }
    .table-footer {
        display: flex;
        justify-content: flex-end;
        padding: 10px 20px;
    }
</style>