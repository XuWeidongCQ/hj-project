<template>
    <div class="xubox">
        <div class="xubox-title">
            <span>角色情况</span>
            <span class="xu-indicator xu-indicator-add xu-float-right">新增角色</span>
        </div>
        <div class="xubox-content">
            <table class="xu-table xu-table-center xu-table-hover">
                <thead class="bg-info xu-text-white-level0">
                <tr>
                    <th>#ID</th>
                    <th>角色名称</th>
                    <th>所属公司</th>
                    <th>创建时间</th>
                    <th>备注</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="role in roleInfos" :key="role.roleId">
                    <td>{{role.roleId}}</td>
                    <td>{{role.roleName}}</td>
                    <td>{{role.company.companyName}}</td>
                    <td>{{role.createTime}}</td>
                    <td>{{role.remark}}</td>
                    <td>
                        <span class="xu-indicator xu-indicator-edit">修改</span>
                        <span class="xu-indicator xu-indicator-delete">删除</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
  export default {
    name: "RoleDetailTable",
    props:{
      roleInfos:{
        type:Array,
        default:() => {return []}
      }
    }
  }
</script>

<style scoped>

</style>