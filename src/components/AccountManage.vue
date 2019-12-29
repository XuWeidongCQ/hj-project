<template>
    <div class="vue-views-wrapper">
        <account-detail-table :account-infos="accountInfos">

        </account-detail-table>
    </div>
</template>

<script>
  import AccountDetailTable from "@/components/AccountManage/AccountDetailTable";
  export default {
    name: "AccountManage",
    components: {AccountDetailTable},
    data(){
      return {
        accountInfos:[]//存放所有账号信息
      }
    },
    methods:{
      //1.获取该界面的所有数据
      getAccountCollectionInfos: function () {
        this.$Http['accountManage']['getAccountCollectionInfos']()
        .then(res => {
          // console.log(res)

          res.forEach(ele => {
            const {role,menuList} = ele;
            this.accountInfos.push({
              accountId:ele.id,
              username:ele.username,
              mobile:ele.mobile,
              status:ele.status,
              role:{
                roleId:role['id'],
                roleName:role['roleName'],
                company:{companyId:role['company']['id'],companyName:role['company']['name']}},
              createTime:ele.createTime,
            })
          })
        })
      }
    },
    created(){
      this.getAccountCollectionInfos()
    }
  }
</script>

<style scoped>

</style>