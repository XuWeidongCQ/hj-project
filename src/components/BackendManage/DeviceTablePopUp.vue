<template>
    <div>
        <xu-modal :header-shown="true"
                  :footer-shown="true"
                  :shown="true"
                  :model-style="{marginTop:'150px'}"
                  @close="close">
            <div slot="header">
                <span>{{company.name}}-设备详情</span>
            </div>
            <div slot="content">
                <table class="xu-table xu-table-sm xu-table-center xu-table-border xu-table-hover min-width-1300">
                    <thead class="bg-info xu-text-level2 xu-text-white-level0">
                    <tr>
                        <th>#ID</th>
                        <th>控制系统编号</th>
                        <th>北斗卡号</th>
                        <th>最后一次在线时刻</th>
                        <th>出厂日期</th>
                        <th>使用日期</th>
                        <th>服务时长</th>
                        <th>创建时间</th>
                        <th>报废时间</th>
                        <th>状态</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="deviceInfo in devicesInfos" :key="deviceInfo.id">
                        <td>{{deviceInfo.id}}</td>
                        <td>{{deviceInfo.csNumber}}</td>
                        <td>{{deviceInfo.beidouId}}</td>
                        <td>{{deviceInfo.lastTime}}</td>
                        <td>{{deviceInfo.factoryDate}}</td>
                        <td>{{deviceInfo.startDate}}</td>
                        <td>{{deviceInfo.serviceLife}}</td>
                        <td>{{deviceInfo.createTime}}</td>
                        <td>{{deviceInfo.scrapTime}}</td>
                        <td>
                            <span class="xu-badge"
                                  :class="{'xu-badge-success':deviceInfo.isOnline,'xu-badge-error':deviceInfo.isOnline === false}">
                                {{deviceInfo.isOnline | isOnlineFilter }}
                            </span>
                            <span
                                class="xu-badge"
                                :class="{'xu-badge-success':deviceInfo.status === 1,
                                         'xu-badge-error':deviceInfo.status === 0,
                                         'xu-badge-warning':deviceInfo.status === 2}">
                                {{deviceInfo.status | statusFilter }}
                            </span>
                        </td>
                        <td>
                            <span class="xu-indicator xu-indicator-delete"
                                  @click="">删除</span>
                            <span class="xu-indicator xu-indicator-edit"
                                  @click="">修改</span>
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
            <div slot="footer">
                <span class="xu-indicator xu-indicator-add" @click="showAddDeviceForm">添加设备</span>
            </div>
        </xu-modal>
        <xu-form v-if="isFormShown"
                 :is-pop-up="true"
                 :form-title="formTitle"
                 :render-data="formRenderData"
                 @submit="submit($event)"
                 @close="isFormShown = false">
        </xu-form>
    </div>
</template>

<script>
  import XuModal from "@/components/CommonComponents/XuComponent/XuModal";
  import XuPageNav from "@/components/CommonComponents/XuComponent/XuPageNav";
  import XuForm from "@/components/CommonComponents/XuComponent/XuForm";
  import {notice} from "@/plugins/toastrConfig";

  export default {
    name: "DeviceTablePopUp",
    components:{XuModal,XuPageNav,XuForm},
    props:{
      //1.哪个公司
      company:{
        type:Object
      }
    },
    data(){
      return {
        isFormShown:false,//是否显示信息窗口
        formRenderData:[],//用于表单渲染的数据
        formTitle:'',//信息窗口标题
        submitType:0,//信息窗口提交事件的类型，0-post，1-put
        selectedDeviceInfo:{},//被选中的数据解析
        serverData:{},//从服务器获取的所有数据
        devicesInfos:[],//存放获取的公司设备信息
      }
    },
    filters:{
      isOnlineFilter:function (value) {
        switch (value) {
          case true:
            return '在线';
          case false:
            return '离线';
          default:
            return '未知'
        }
      },
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
      }
    },
    methods:{
      //0 关闭事件
      close:function(){
        this.$emit('close');
      },
      //1 获取一个公司的所有设备
      getDeviceInfos: function (page=0) {
        this.devicesInfos = [];
        this.$Http['backendManage']['getDeviceInfos'](this.company.id + '/devices',{params:{start:page}})
          .then(res => {
            // console.log(res.data);
            this.serverData = res.data;
            const {content} = res.data;
            content.forEach(ele => {
              this.devicesInfos.push({
                id:ele.id,
                csNumber: ele.csNumber,
                beidouId:ele.beidouId,
                factoryDate:ele.factoryDate,
                startDate:ele.startDate,
                serviceLife:ele.serviceLife,
                lastTime:ele.lastTime,
                createTime:ele.createTime,
                scrapTime:ele.scrapTime,
                isOnline:ele.online,
                status:ele.status,
                modelId:ele.model.id
              })
            })
          })
      },
      //2.新建一台设备
      showAddDeviceForm:function(){
        this.formTitle = '添加设备';
        this.submitType = 0;
        this.formRenderData = [
          {content:'控制系统编号：',value:'',field:'csNumber'},
          {content:'北斗编号：',value:'',field:'beidouId'},
          {content:'出厂日期：',value:'',field:'factoryDate',additionalInfo:{type:'date'}},
          {content:'使用时期：',value:'',field:'startDate',additionalInfo:{type:'date'}},
        ];
        this.isFormShown = true
      },

      //5.分页器跳转
      jumpSelectedPage:function(selectedPage){
        this.getDeviceInfos(selectedPage-1)
      },
      //*.信息窗口的提交按钮事件
      submit:function (formData) {
        switch (this.submitType) {
          //添加公司信息
          case 0:
            console.log(formData);
            this.$Http['backendManage']['postDeviceInfo'](formData)
              .then( res => {
                console.log(res.data);
                this.$toastr.Add(notice('创建成功'));
                this.getDeviceInfos()
              })
              .catch(error => {});
            break;
          //修改公司信息
          case 1:
            // formData['id'] = this.selectedCompany.id;
            // this.$Http['backendManage']['editCompanyInfo'](formData)
            //   .then( res => {
            //     console.log(res.data);
            //     this.$toastr.Add(notice('修改成功'));
            //     this.getCompanyInfos()
            //   })
            //   .catch(error => {});
            break;
        }
      }
    },
    created(){
      this.getDeviceInfos()
    }
  }
</script>

<style scoped>
    .min-width-1300 {
        min-width: 1300px;
    }
</style>