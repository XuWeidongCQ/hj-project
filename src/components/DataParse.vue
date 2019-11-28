<template>
    <div class="vue-views-wrapper">
        <machine-model-manage></machine-model-manage>
    </div>
</template>

<script>
  import MachineModelManage from "@/components/DataParse/MachineModelManage";
  export default {
    name: "DataParse",
    components: {MachineModelManage},
    data:function () {
      return {
      }
    },
  }
</script>

<style scoped>

</style>