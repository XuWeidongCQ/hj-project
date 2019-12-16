<template>
    <div class="xu-select-wrapper" @click.capture="test">
        <label class="span-area">
            <input type="text" class="xu-select-value"
                   :value="selectValue"
                   :class="{'active':isActive}"
                   @click="onclick"
                   @blur="onblur"
                   readonly>
        </label>
        <ul class="xu-select-option-wrapper scrollBar-style" v-show="isSpread">
            <li v-for="option in options" class="xu-select-option" @click="select(option)">{{ option }}</li>
        </ul>

    </div>
</template>

<script>
  export default {
    name: "XuSelect",
    props:['value','options'],
    data(){
      return {
        isTest:false,
        isSpread:false,
        isSelect:true,
        isActive:false,
        selectValue:this.value
      }
    },
    methods:{
      test:function() {
        console.log('outer');
        // this.isSpread = true;
        this.isTest = true;
      },
      select:function (option) {
        this.isSelect = true;
        this.isSpread = false;
        this.isTest = false;
        this.selectValue = option;
        this.$emit('input',option)
      },
      onclick:function() {
        console.log('click-input');
        this.isTest && (this.isSpread = !this.isSpread);
        // this.isSpread = !this.isSpread;
        this.isActive = true
      },
      onblur:function () {
        // !this.isTest && (this.isSpread = false);
        //还原
        this.isSpread = false;
        this.isSelect = false;
        this.isActive = false;
        this.isTest = false;
      }
    }
  }
</script>

<style scoped>
    .xu-select-wrapper {
        position: relative;
        display: inline-block;
    }
    .xu-select-wrapper .xu-select-value {
        display: block;
        width: 100%;
        padding: 8px 25px 6px 10px;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        font-size: 1em;
        line-height: 1em;
        cursor: pointer;
    }
    .xu-select-wrapper .xu-select-value:focus {
        outline: none;
    }
    .active {
        border: 1px solid #48a8ff !important;
        border-radius: 4px;
        /*transition: all 0.8ms ease-in;*/
    }
    .xu-select-wrapper .xu-select-option-wrapper {
        position: absolute;
        left: 0;
        right: 0;
        /*margin-top: 10px;*/
        padding: 5px 0;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        background-color: #ffffff;
        max-height: 200px;
    }
    .xu-select-wrapper .xu-select-option {
        display: block;
        padding: 0 25px 5px 6px;
        height: 1.8em;
        line-height: 1.8em;
    }
    .xu-select-wrapper .xu-select-option:hover {
        cursor: pointer;
        background-color: #28a745;
        color: #ffffff;
    }
    /*滚动条样式*/
    .scrollBar-style{
        overflow: auto;
        -ms-scrollbar-face-color: #e3e3e3;/*IE滚动部分的颜色*/
        -ms-scrollbar-track-color: #bcbcbc;/*IE滚动槽部分的颜色*/
    }
    /*webkit样式*/
    .scrollBar-style::-webkit-scrollbar {/*滚动槽部分的样式*/
        width: 5px;
        border-radius: 2px;
        background-color: #e6e6e6;
    }

    .scrollBar-style::-webkit-scrollbar-thumb{/*滚动部分的样式*/
        background-color: #9a9a9a;
        border-radius: 3px;
    }
    .scrollBar-style::-webkit-scrollbar-thumb:hover {
        background-color: #808080;
    }
</style>