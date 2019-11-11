<template>
    <div class="SSJK-wrapper">
        <e-c-u-statics-info></e-c-u-statics-info>
        <main-map></main-map>
    </div>
</template>

<script>
  import ECUStaticsInfo from "@/components/DeviceMonitor/ECUStaticsInfo";
  import MainMap from "@/components/DeviceMonitor/MainMap";
  export default {
    name: "SSJK",
    components:{
      ECUStaticsInfo,
      MainMap
    }
  }
</script>

<style scoped>
    .SSJK-wrapper {
        background-color: transparent;
        margin-top: 15px;
    }
</style>