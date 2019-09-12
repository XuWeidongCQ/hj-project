<template>
    <div class="info-window-wrapper">
        <div class="explain-container">
            <div class="left">
                <p>设备编号</p>
                <p>状态</p>
            </div>
            <div class="right">
                <p>{{ pointInfo.ECUNumber }}</p>
                <p>{{ pointInfo.status | correctECUStatus }}</p>
            </div>
        </div>
        <div class="data-container text-center">
            <div class="data-item mr-1">
                <p>转速</p>
                <p>{{ dataFromServe.rotateSpeed | correctRotateSpeed }}</p>
            </div>
            <div class="data-item mr-1">
                <p>滑油压力</p>
                <p>{{ dataFromServe.greasePressure | correctGreasePressure }}</p>
            </div>
            <div class="data-item">
                <p>冷却水</p>
                <p>{{ dataFromServe.coolingWater | correctCoolingWater }}</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "PointInfoWindow",
    props:{
      pointInfo:Object
    },
    data(){
      return {
        dataFromServe:{
          rotateSpeed:1500,
          greasePressure:1.3,
          coolingWater:34,
        }
      }
    },
    mounted(){
      let div = document.getElementsByClassName('info-window-wrapper')[0];
      div.style.top = this.pointInfo.y + 'px';
      div.style.left = this.pointInfo.x + 'px';
    }
  }
</script>

<style scoped>
    .info-window-wrapper {
        position: fixed;
        background-color: #f5f5f5;
        border: 1px solid #cccccc;
        padding: 10px;
        font-size: 14px;
        border-radius: 3px;
    }
    .explain-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .data-item {
        padding: 5px 0;
        display: inline-block;
        width: 70px;
        background-color: #53bee6;
        color: white;
        border-radius: 5px;
    }
    .alert {
        color: #ed5565;
    }
    .normal {
        color: #23c6c8;
    }
    p {
        margin: 0;
    }
</style>