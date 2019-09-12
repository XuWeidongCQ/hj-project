<template>
    <div>
        <div class="xu-modal-backdrop">
            <div class="xu-modal">
                <div class="xu-modal-header">
                    <span class="xu-modal-title">设备编辑</span>
                    <button @click="close" class="btn-close">×</button>
                </div>
                <div class="xu-modal-body">
                    <form>
                        <h5>设备基本信息-------------------------------------------------------------------</h5>
                        <div class="row mb-2">
                            <div class="col-4 text-right align-self-center">
                                <span class="form-label">控制系统编号：</span>
                            </div>
                            <div class="col-8">
                                <input class="text-input" type="text" name="ECUNumber" placeholder="唯一">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-4 text-right align-self-center">
                                <span class="form-label">发动机机型：</span>
                            </div>
                            <div class="col-8">
                                <input class="text-input" type="text" name="engineNumber" placeholder="数字+字母">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-4 text-right align-self-center">
                                <span class="form-label">用户名称：</span>
                            </div>
                            <div class="col-8">
                                <input class="text-input" type="text" name="userName">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-4 text-right align-self-center">
                                <span class="form-label">用户地址：</span>
                            </div>
                            <div class="col-8">
                                <input class="text-input" type="text" name="userAddress">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-4 text-right align-self-center">
                                <span class="form-label">出厂日期：</span>
                            </div>
                            <div class="col-8">
                                <input class="text-input" type="text" name="manufactureDate" placeholder="格式：xxxx-xx-xx">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-4 text-right align-self-center">
                                <span class="form-label">设备状态：</span>
                            </div>
                            <div class="col-8">
                                <select class="text-input" name="status">
                                    <option>维修中</option>
                                    <option>可用</option>
                                    <option>报废</option>
                                </select>
                            </div>
                        </div>
                        <h5>设备数据阈值-------------------------------------------------------------------</h5>
                        <div class="row mb-2">
                            <div class="col-4 text-right align-self-center">
                                <span class="form-label">转速阈值：</span>
                            </div>
                            <div class="col-8">
                                <input class="number-input" type="number" name="lowestRotateSpeed" placeholder="单位:rpm">
                                ~
                                <input class="number-input" type="number" name="highestRotateSpeed" placeholder="单位:rpm">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-4 text-right align-self-center">
                                <span class="form-label">滑油压力阈值：</span>
                            </div>
                            <div class="col-8">
                                <input class="number-input" type="number" name="lowestGreasePressure" placeholder="单位:kpa">
                                ~
                                <input class="number-input" type="number" name="highestGreasePressure" placeholder="单位:kpa">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-4 text-right align-self-center">
                                <span class="form-label">冷却水阈值：</span>
                            </div>
                            <div class="col-8">
                                <input class="number-input" type="number" name="lowestCoolingWaterTemperature" placeholder="单位:℃">
                                ~
                                <input class="number-input" type="number" name="highestCoolingWaterTemperature" placeholder="单位:℃">
                            </div>
                        </div>
                        <div class="text-right mt-4">
                            <button type="button" class="form-submit">确认</button>
                            <button type="reset" class="form-reset ml-4" @click="close">取消</button>
                        </div>

                    </form>
                </div>
                <div class="xu-modal-footer">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "DeviceInfoInputModal",
    methods:{
      close:function () {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>
    /*模态包裹块*/
    .xu-modal-backdrop {
        position: fixed;
        top:0;
        right: 0;
        bottom: 0;
        left:0;
        z-index: 1040;
        background-color: rgba(0,0,0,0.3);
        display: flex; /*这是为了保证模态框上下左右居中*/
        justify-content: center; /*这是为了保证模态框左右居中*/
        align-items: flex-start;
    }
    /*模态主内容块*/
    .xu-modal {
        border: 1px solid #cccccc;
        border-radius: 3px;
        background-color: white;
        margin-top: 100px;
    }
    .xu-modal-header {
        padding: 5px 10px 0 10px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f5f5f5;
        background-color: #f3f3f4;
    }
    .xu-modal-body {
        padding: 15px 10px 15px 10px;
        border-bottom: 1px solid #f5f5f5;
    }
    .xu-modal-footer {
        padding: 15px;
    }
    .btn-close {
        background-color: transparent;
        border: none;
        font-size: 21px;
        padding: 0;
        color: #999999;
        margin-top: -5px;
    }
    .btn-close:hover {
        color: #000000;
    }
    .xu-modal-title {
        color: #676a6c;
        font-size: 22px;
    }
    .form-label {
        color: #676a6c;
        font-size: 15px;
        font-weight: 600;
    }
    .text-input {
        height: 35px;
        width: 300px;
        border-radius: 2px;
        font-size: 14px;
        font-weight: 100;
        padding: 6px 12px;
        border: solid 1px #cccccc;
    }
    .number-input {
        height: 30px;
        width: 140px;
        border-radius: 2px;
        font-size: 14px;
        font-weight: 100;
        padding: 6px 12px;
        border: solid 1px #cccccc;
    }
    .form-submit {
        padding: 6px 20px;
        background-color: #23c6c8;
        color: white;
        border: 1px solid #23c6c8;
        border-radius: 3px;
    }
    .form-submit:hover {
        background-color: #39b2a9;
    }
    .form-reset {
        padding: 6px 20px;
        background-color: transparent;
        border: 1px solid #cccccc;
        border-radius: 3px;
    }
    .form-reset:hover {
        background-color: #f5f5f5;
    }
</style>