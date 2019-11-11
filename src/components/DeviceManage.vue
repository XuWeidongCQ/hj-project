<template>
    <div class="SBGL-wrapper">
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
    .SBGL-wrapper{
        background-color: transparent;
        margin: 15px 0;
    }
</style>