<template>
    <div class="SBGL-wrapper">
        <chart-statics></chart-statics>
        <table-statics></table-statics>
    </div>
</template>

<script>
  import ChartStatics from "@/components/SBGL/ChartStatics";
  import TableStatics from "@/components/SBGL/TableStatics";
  export default {
    name: "SBGL",
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