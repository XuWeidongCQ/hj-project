<template>
    <div class="xubox">
        <div class="xubox-title"><span>设备概况</span></div>
        <div class="xubox-content">
            <table class="xu-table xu-table-hover xu-table-center">
                <thead class="bg-info xu-text-white-level0">
                <tr>
                    <th>状态</th>
                    <th>设备编号</th>
                    <th>机型编号</th>
                    <th>北斗卡号</th>
                    <th>公司</th>
                    <th>出厂日期</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="device in tableData" :key="device.id">
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
                    <td>{{device.modelNumber}}</td>
                    <td>{{device.beidouId}}</td>
                    <td>{{device.companyName}}</td>
                    <td>{{device.factoryDate}}</td>
                    <td>
                        <span class="xu-indicator xu-indicator-check">单点监控</span>
                        <span class="xu-indicator xu-indicator-edit">远程控制</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
  import TableStatics from "@/components/DeviceManageComp/TableStatics";
  export default {
    name: "DeviceTable",
    components: {TableStatics},
    props:{
      tableData:{
        type:Array,
        default:() => {return []}
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
    }
  }
</script>

<style scoped>

</style>