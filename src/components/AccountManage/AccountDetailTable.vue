<template>
    <div class="xubox">
        <div class="xubox-title">
            <span>账号情况</span>
            <span class="xu-indicator xu-indicator-add xu-float-right">新建</span>
        </div>
        <div class="xubox-content">
            <div class="xubox-content">
                <table class="xu-table xu-table-center xu-table-hover">
                    <thead class="bg-info xu-text-white-level0">
                    <tr>
                        <th>#账号ID</th>
                        <th>用户名</th>
                        <th>角色</th>
                        <th>手机号</th>
                        <th>所属公司</th>
                        <th>状态</th>
                        <th>创建时间</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="account in accountInfos" :key="account.accountId">
                        <td>{{account.accountId}}</td>
                        <td>{{account.username}}</td>
                        <td>{{account.role.roleName}}</td>
                        <td>{{account.mobile}}</td>
                        <td>{{account.role.company.companyName}}</td>
                        <td>
                            <xu-switch :value="account.status | statusFilter" @hasSelected="">
                            </xu-switch>
<!--                            <span class="xu-badge"-->
<!--                                  :class="{'xu-badge-success':account.status === 1,'xu-badge-error':account.status === 0}">-->
<!--                                {{account.status | statusFilter}}-->
<!--                            </span>-->
                        </td>
                        <td>{{account.createTime}}</td>
                        <td>
                            <span class="xu-indicator xu-indicator-edit">修改</span>
                            <span class="xu-indicator xu-indicator-delete">删除</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
  import XuSwitch from "@/components/CommonComponents/XuComponent/XuSwitch";
  export default {
    name: "AccountDetailTable",
    components: {XuSwitch},
    props:{
      accountInfos:{
        type:Array,
        default:() => { return []}
      }
    },
    methods:{
      test:function ($event,count) {
        console.log($event);
        console.log(count);
      }
    },
    filters:{
      statusFilter:function (value) {
        switch (value) {
          case 0:
            return 'off';
          case 1:
            return 'on';
          default:
            return 'off'
        }
      }
    }
  }
</script>

<style scoped>

</style>