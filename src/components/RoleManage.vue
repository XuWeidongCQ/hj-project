<template>
    <div class="vue-views-wrapper">
        <div class="xu-row">
            <div class="xu-col-12">
                <role-detail-table :role-infos="roleInfos">
                </role-detail-table>
            </div>
        </div>
    </div>
</template>

<script>
  import RoleDetailTable from "@/components/RoleManageComp/RoleDetailTable";
  export default {
    name: "RoleManage",
    components: {RoleDetailTable},
    data(){
      return {
        roleInfos:[],//存放获取的角色信息
      }
    },
    methods:{
      //1.获取所有数据
      getRoleCollectionInfos: function () {
        this.$Http['roleManage']['getRoleCollectionInfos']()
        .then(res => {
          res.forEach(ele => {
            const {company,menuList} = ele;
            this.roleInfos.push({
              roleId:ele['id'],
              roleName:ele['roleName'],
              company:{companyId:company['id'],companyName:company['name']},
              remark:ele['remark'] || '无',
              createTime:ele['createTime']
            })
          })
        })
      }
    },
    created(){
      this.getRoleCollectionInfos()
    }
  }
</script>

<style scoped>

</style>