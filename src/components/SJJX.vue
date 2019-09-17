<template>
    <div class="sjjx-wrapper">
        <div class="sjjx-container">
<!--            <div class="table-title">-->
<!--                <span>已有数据</span>-->
<!--                {{ this.tbodyContents.length }}-->
<!--            </div>-->
            <table class="table border-bottom text-center">
                <thead>
                <tr>
                    <th v-for="thead in theadContents">
                        {{ thead }}
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="tbody in tbodyContents">
                    <td>{{tbody.dataName}}</td>
                    <td>{{tbody.identifier}}</td>
                    <td>{{tbody.dataType}}</td>
                    <td>{{tbody.dataRange}}</td>
                    <td>{{tbody.dataLocInMessage}}</td>
                    <td>
                        <button class="btn-icon"><span class="fa fa-edit"></span></button>
                        <button class="btn-icon"><span class="fa fa-trash"></span></button>
                    </td>
                </tr>
                </tbody>
            </table>
            <button class="btn btn-info"><span class="fa fa-plus"></span>&nbsp;&nbsp;添加数据</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: "SJJX",
    data:function () {
      return {
        theadContents:['数据名称','标识符','数据类型','数据范围','数据在电文中的位置','操作'],
        tbodyContents:[
          {dataName:'经度',identifier:'longitude',dataType:'float',dataRange:'-180~180',dataLocInMessage:'2-5'},
          {dataName:'纬度',identifier:'latitude',dataType:'float',dataRange:'-90~90',dataLocInMessage:'6-9'},
          {dataName:'转速',identifier:'rotateSpeed',dataType:'float',dataRange:'0~3000rpm',dataLocInMessage:'10-13'},
          {dataName:'运行状态',identifier:'status',dataType:'unsigned short',dataRange:'0-10',dataLocInMessage:'14-15'},
          {dataName:'滑油压力',identifier:'greasePressure',dataType:'float',dataRange:'0-1000kpa',dataLocInMessage:'16-19'},
          {dataName:'冷却水温度',identifier:'coolingWaterTemperature',dataType:'float',dataRange:'-20-120℃',dataLocInMessage:'20-23'},
        ],
      }
    }
  }
</script>

<style scoped>
    .sjjx-wrapper {
        background-color: transparent;
        margin-top: 15px;
    }
    .sjjx-container {
        background-color: #ffffff;
        margin: 15px 0;
        padding: 0 15px;
        height: 900px;
    }
    .btn-icon {
        background-color: transparent;
        padding: 0 6px;
        text-align: center;
        border:none;
        color: #999999;
        font-size: 18px;
    }
    .table>thead {
        background-color: black;
        color: white;
        border: none;
    }
    .table>tbody>tr:hover {
        background-color: #f3f3f4;
    }
</style>