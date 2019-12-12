<!--设备管理路由界面-->
<template>
    <div class="vue-views-wrapper">
        <chart-statics></chart-statics>
        <table-statics></table-statics>
    </div>
</template>

<script>
  import ChartStatics from "@/components/DeviceManage/ChartStatics";
  import TableStatics from "@/components/DeviceManage/TableStatics";
  export default {
    name: "DeviceManage",
    components:{
      ChartStatics,
      TableStatics
    }
  }
</script>

<style scoped>

</style>