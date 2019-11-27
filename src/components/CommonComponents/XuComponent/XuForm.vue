<template>
    <div>
        <xu-modal :shown="true"
                  :header-shown="true"
                  :footer-shown="true"
                  @close="close"
                  :header-style="{backgroundColor:'#fcfcfc'}"
                  v-if="isPopUp">
            <div slot="header">{{ formTitle }}</div>
            <div slot="content">
                <div class="xu-form-control" v-for="formItem in renderData">
                    <label class="xu-label-text">
                        <span>{{ formItem.content }}</span>
                        <input type="text" class="xu-input" v-model="formItem.value">
                    </label>
                </div>
            </div>
            <div slot="footer">
                <div class="xu-float-right clear">
                    <button class="xu-btn xu-btn-primary mr-integer" @click="submit">确认</button>
                    <button class="xu-btn xu-btn-cancel mb-integer" @click="close">取消</button>
                </div>
            </div>
        </xu-modal>
        <div v-else>

        </div>
    </div>
</template>

<script>
  import XuModal from "./XuModal";
  export default {
    name: "XuForm",
    components: {XuModal},
    props:{
      //接收数据1：是否是弹出式，默认为否
      isPopUp:{
        default:false,
        type:Boolean
      },
      //接收数据2：表单标题
      formTitle:{
        default: '表单',
        type: String
      },
      //接收数据3：要渲染的表单数据【重要】
      renderData:{
        default:[{content:'默认',value:'',field:''}],
        type:Array
      },
      // //接收数据4：表单确认按钮事件的类型（0-提交，1-修改）
      // submitType:{
      //   default:0,
      //   type:Number
      // }
    },
    methods:{
      //1.关闭事件
      close:function () {
        this.$emit('close')
      },
      //2.确认按钮事件
      submit:function () {
        const formData = {};
        this.renderData.forEach(ele => {formData[ele.field] = ele.value});
        this.$emit('submit',formData);
        this.$emit('close');
      }
    }
  }
</script>

<style scoped>

</style>