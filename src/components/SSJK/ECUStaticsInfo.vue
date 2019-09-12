<template>
    <div>
        <div class="row">
            <div class="col-4">
                <div class="statics-info-container dev-online">
                        <span class="statics-icon"><span class="fa fa-desktop"></span></span>
                        <span class="statics-info">
                            <span class="statics-number">529</span><br>
                            <span class="statics-explain">在线</span>
                        </span>
                </div>
            </div>
            <div class="col-4">
                <div class="statics-info-container dev-normal">
                    <span class="statics-icon"><span class="fa fa-calendar-check-o"></span></span>
                    <span class="statics-info">
                            <span class="statics-number">509</span><br>
                            <span class="statics-explain">正常</span>
                        </span>
                </div>
            </div>
            <div class="col-4">
                <div class="statics-info-container dev-alert">
                    <span class="statics-icon"><span class="fa fa-lightbulb-o"></span></span>
                    <span class="statics-info">
                            <span class="statics-number">20</span><br>
                            <span class="statics-explain">报警</span>
                        </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ECUStaticsInfo"
  }
</script>

<style scoped>
    .statics-info-container{
        padding: 10px 30px;
        color: white;
        height:98px;
        border-radius: 5px;
    }
    .statics-icon {
        font-size: 50px;
        float: left;
        line-height: 78px;
    }
    .statics-info{
        float: right;
        display: inline-block;
    }
    .statics-number{
        float: right;
        font-size: 40px;
    }
    .statics-explain{
       float: right;
        font-size: 12px;
    }
    .dev-online{
        background-color: #1ab394;
    }
    .dev-normal {
        background-color: #23c6c8;
    }
    .dev-alert{
        background-color: #ed5565;
    }
</style>