<template>
    <div class="vue-views-wrapper">
        <account-detail-table>
        </account-detail-table>
    </div>
</template>

<script>
  import AccountDetailTable from "@/components/AccountManage/AccountDetailTable";
  export default {
    name: "AccountManage",
    components: {AccountDetailTable},
  }
</script>

<style scoped>

</style>