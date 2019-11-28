<template>
    <div>
        <div class="xubox mb-integer">
            <div class="xubox-title">
                <span>客户公司详情</span>
                <span class="xu-indicator xu-indicator-add xu-float-right" @click="showAddCompanyForm">添加公司</span>
            </div>
            <div class="xubox-content">
                <table class="xu-table xu-table-sm xu-table-hover xu-table-center">
                    <thead class="bg-info xu-text-level2 xu-text-white-level0">
                    <tr>
                        <th>#ID</th>
                        <th>公司名称</th>
                        <th>公司地址</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="company in companyInfos" :key="company.id">
                        <td>{{company.id}}</td>
                        <td>{{company.name}}</td>
                        <td>{{company.address}}</td>
                        <td>
                            <span class="xu-indicator xu-indicator-delete"
                                  @click="deleteCompanyInfo(company.id)">删除</span>
                            <span class="xu-indicator xu-indicator-edit"
                                  @click="showEditCompanyForm(company)">修改</span>
                            <!--                            <span class="xu-indicator xu-indicator-check">查看</span>-->
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="xu-text-center">
                    <xu-page-nav :is-shown="true"
                                 :size="serverData.size"
                                 :total-elements="serverData.totalElements"
                                 :total-page="serverData.totalPages">
                    </xu-page-nav>
                </div>
            </div>
        </div>
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
  import XuForm from "@/components/CommonComponents/XuComponent/XuForm";
  import XuPageNav from "@/components/CommonComponents/XuComponent/XuPageNav";
  import {notice} from "@/plugins/toastrConfig";

  export default {
    name: "CompanyManage",
    components:{
      XuForm,
      XuPageNav
    },
    data:function () {
      return {
        isFormShown:false,//是否显示信息窗口
        formRenderData:[],//用于表单渲染的数据
        formTitle:'',//信息窗口标题
        submitType:0,//信息窗口提交事件的类型，0-post，1-put
        selectedCompany:{},//被选中的公司
        serverData:{},//从服务器获取的所有数据
        companyInfos:[//存放获取的公司表的信息
          {id:1,name:'重庆大学',address:'沙正街117号'},
          {id:2,name:'重庆大学',address:'沙正街117号'},
          {id:3,name:'重庆大学',address:'沙正街117号'},
          {id:4,name:'重庆大学',address:'沙正街117号'},
          {id:5,name:'重庆大学',address:'沙正街117号'},
          {id:6,name:'重庆大学',address:'沙正街117号'},
        ]
      }
    },
    methods:{
      //1.获取所有客户公司信息
      getCompanyInfos:function () {
        this.companyInfos = [];
        this.$Http['backendManage']['getCompanyInfos']()
          .then( res => {
            this.serverData = res.data;
            const { content } = res.data;
            // console.log(res.data);
            content.forEach(ele => {
              this.companyInfos.push({id:ele.id,name:ele.name,address:ele.address})
            });
          })
          .catch( error => {})
      },
      //2.显示添加公司表单
      showAddCompanyForm:function () {
        this.formTitle = '添加客户公司信息';
        this.submitType = 0;
        this.formRenderData = [
          {content:'公司名称：',value:'',field:'name'},
          {content:'公司地址：',value:'',field:'address'},
        ];
        this.isFormShown = true
      },
      //3.删除公司信息
      deleteCompanyInfo:function (companyId) {
        this.$Http['backendManage']['delCompanyInfo'](companyId)
          .then( res => {
            const feedback = res.data === ''?'删除成功':res.data;
            res.data === '' && this.getCompanyInfos();
            this.$toastr.Add(notice(feedback));
          })
          .catch(error => {});
      },
      //4.显示修改客户公司信息窗口
      showEditCompanyForm:function(company){
        this.formTitle = '修改客户公司信息';
        this.submitType = 1;
        this.selectedCompany = company;
        this.formRenderData = [
          {content:'公司名称：',value:company.name,field:'name'},
          {content:'公司地址：',value:company.address,field:'address'},
        ];
        this.isFormShown = true
      },

      //*.信息窗口的提交按钮事件
      submit:function (formData) {
        switch (this.submitType) {
          //post事件类型
          case 0:
            this.$Http['backendManage']['postCompanyInfo'](formData)
              .then( res => {
                // console.log('提交成功');
                this.$toastr.Add(notice('创建成功'));
                this.getCompanyInfos()
              })
              .catch(error => {});
            break;
          case 1:
            formData['id'] = this.selectedCompany.id;
            this.$Http['backendManage']['editCompanyInfo'](formData)
              .then( res => {
                // console.log('提交成功');
                this.$toastr.Add(notice('修改成功'));
                this.getCompanyInfos()
              })
              .catch(error => {});
            break;
        }
      },
    },
    created(){
      this.getCompanyInfos()
    },
    mounted(){

    }
  }
</script>

<style scoped>

</style>