<template>
  <div class="wrapper"
       @click="changeValue"
       :class="{'switch-on':selectValue === 'on','switch-off':selectValue === 'off'}">
    <span class="toggle-circle"
          :class="{'go-on':selectValue === 'on','go-off':selectValue === 'off'}">
    </span>
  </div>
</template>

<script>
  export default {
    name: "XuSwitch",
    props:{
      //1 v-model必须的传递参数
      value:{
        type:String
      }
    },
    data:function () {
      return {
        selectValue:this.value,//组件内部选择的值
      }
    },
    methods:{
      changeValue:function () {
        if (this.selectValue === 'off'){
          this.selectValue = 'on';
        } else {
          this.selectValue = 'off';
        }
        this.$emit('hasSelected',this.selectValue);
        this.$emit('input',this.selectValue)
      }
    },
  }
</script>

<style scoped>
  .wrapper {
    width: 36px;
    height: 20px;
    border-radius: 11px;
    position: relative;
    display: inline-block;
    padding: 2px;
    box-sizing: border-box;
    cursor: pointer;
    text-align: start;
  }
  .switch-on {
    background-color: #1aa6ff;
    transition: background-color 0.2s ease 0s;
  }

  .switch-off {
    background-color: #dcdfe6;
    transition: background-color 0.2s ease 0s;
  }

  .toggle-circle {
    position: absolute;
    display: inline-block;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: #f2f6fc;
  }
  .go-on {
    left: 2px;
    top: 2px;
    transform: translateX(0px);
    transition: transform 0.2s ease 0s;
  }
  .go-off {
    top: 2px;
    transform: translateX(16px);
    transition: transform 0.2s ease 0s;
  }
</style>
