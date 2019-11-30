<template>
    <div>
        <xu-modal :shown="true"
                  :header-shown="true"
                  :footer-shown="true"
                  @close="close"
                  :header-style="{backgroundColor:'#fcfcfc'}"
                  v-if="isPopUp">
            <span slot="header">{{ formTitle }}</span>
            <div slot="content">
                <div v-for="formItem in renderData">
                    <!--1.type=radio-->
                    <div class="xu-form-control" v-if="formItem.additionalInfo && formItem.additionalInfo.type === 'radio'">
                        <span class="fix-width-80">{{ formItem.content }}</span>
                        <label class="xu-label-choose mr-integer" v-for="option in formItem.additionalInfo.optional">
                            <input type="radio" class="xu-choose xu-radio" :value="option" v-model="formItem.value">
                            <span>{{ option }}</span>
                        </label>
                    </div>
                    <!--2.type=number-->
                    <div class="xu-form-control" v-else-if="formItem.additionalInfo && formItem.additionalInfo.type === 'number'">
                        <label class="xu-label-text">
                            <span class="fix-width-80">{{ formItem.content }}</span>
                            <input type="number" class="xu-input" v-model="formItem.value"
                                   :disabled="rules.length !== 0 && applyFormRules(formItem.field)">
                        </label>
                    </div>
                    <!--2.select-->
                    <div class="xu-form-control" v-else-if="formItem.additionalInfo && formItem.additionalInfo.type === 'select'">
                        <label class="xu-label-text">
                            <span class="fix-width-80">{{ formItem.content }}</span>
                            <select v-model="formItem.value" class="xu-input">
                                <option v-for="option in formItem.additionalInfo.optional">
                                    {{ option }}
                                </option>
                            </select>
                        </label>
                    </div>
                    <!--*.type=text-->
                    <div class="xu-form-control" v-else>
                        <label class="xu-label-text">
                            <span class="fix-width-80">{{ formItem.content }}</span>
                            <input type="text" class="xu-input" v-model="formItem.value"
                                   :disabled="rules.length !== 0 && applyFormRules(formItem.field)">
                        </label>
                    </div>
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
      //接收数据4：表单禁用启用规则
      rules:{
        default:() => [],
        type:Array
      }
    },
    data:function(){
      return {

      }
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
      },
      //3.应用表单规则
      applyFormRules:function (field) {
        for (let i=0;i<this.rules.length;i++){
          let fieldLimited = this.rules[i].field;
          let fieldToLimit = this.rules[i].limitBy.field;
          let fieldToLimitValue = this.rules[i].limitBy.value;
          let valueLimitedIndex;
          let result = false;
          if (field === fieldLimited) {

            for (let j=0;j<this.renderData.length;j++){
              switch (this.renderData[j].field) {
                case fieldLimited:
                  valueLimitedIndex = j;
                  break;
                case fieldToLimit:
                  if (String(this.renderData[j].value) === fieldToLimitValue) {
                    this.renderData[valueLimitedIndex].value = '';
                    result = true;
                  }
                  break;
              }
            }
            return result;
          }
        }
        return false;
      }
    }
  }
</script>

<style scoped>
    .fix-width-80 {
        display: inline-block;
        width: 80px;
        text-align: right;
    }

</style>