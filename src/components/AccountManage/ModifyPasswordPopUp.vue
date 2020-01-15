<template>
    <xu-modal :shown="true"
              :header-shown="true"
              :footer-shown="true"
              :header-style="{backgroundColor:'#00a8b3',color:'#ffffff'}"
              @close="close">
        <div slot="header">
            <span>修改密码</span>
        </div>
        <div slot="content">
            <div class="xu-form-control">
                <label class="xu-label-text">
                    <span>新密码：</span>
                    <input type="text" class="xu-input" :class="{'xu-illegal-border':!isValidate}" v-model="password">
                </label>
                <p class="xu-illegal-text" v-if="!isValidate">密码只能是8到12位的数字或者字母</p>
            </div>
        </div>
        <div slot="footer">
            <div class="xu-text-center">
                <button class="xu-btn xu-btn-primary mr-integer" @click="submit">确认</button>
                <button class="xu-btn xu-btn-cancel mb-integer" @click="close">取消</button>
            </div>
        </div>
    </xu-modal>
</template>

<script>
  import XuModal from "@/components/CommonComponents/XuComponent/XuModal";
  export default {
    name: "ModifyPasswordPopUp",
    components:{XuModal},
    data(){
      return {
        password:'',
        isValidate:true
      }
    },
    methods:{
      close:function () {
        this.$emit('close')
      },
      submit:function () {
        let reg = /^\w{8,12}$/; //这里边界很重要
        this.isValidate = reg.test(this.password);
        if (this.isValidate){
          this.$emit('changePsw',this.password)
        }
      },

    }
  }
</script>

<style scoped>

</style>