<template>
  <div class="wrapper"
       :class="{'switch-on':selectValue === 'on','switch-off':selectValue === 'off'}">
    <span class="toggle-circle"
          @click="changeValue"
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
    width: 2.4em;
    height: 1.4em;
    border-radius: 0.7em;
    position: relative;
    display: inline-block;
    padding: 0.2em;
    box-sizing: border-box;
  }
  .switch-on {
    background-color: #1aa6ff;
    transition: background-color 0.2s ease 0s;
  }

  .switch-off {
    background-color: #cccccc;
    transition: background-color 0.2s ease 0s;
  }

  .toggle-circle {
    position: absolute;
    display: inline-block;
    height: 1em;
    width: 1em;
    border-radius: 50%;
    cursor: pointer;
    box-sizing: border-box;
    background-color: #eeeeee;
  }
  .go-on {
    left: 0.2em;
    top: 0.2em;
    transform: translateX(0px);
    transition: transform 0.2s ease 0s;
  }
  .go-off {
    top: 0.2em;
    transform: translateX(1em);
    transition: transform 0.2s ease 0s;
  }
</style>
