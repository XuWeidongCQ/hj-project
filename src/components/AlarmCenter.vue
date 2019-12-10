<template>
    <div class="vue-views-wrapper">
        <div class="xubox">
            <div class="xubox-title">
                <span>报警记录</span>
            </div>
            <div class="xubox-content">
                <table class="xu-table xu-table-center xu-table-hover">
                    <thead class="bg-info xu-text-level2 xu-text-white-level0">
                    <tr>
                        <th>#ID</th>
                        <th>控制系统编号</th>
                        <th>信息</th>
                        <th>类型</th>
                        <th>报警时间</th>
                        <th>结束时间</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="alarmInfo in alarmInfos" :key="alarmInfo.id">
                        <td>{{ alarmInfo.id }}</td>
                        <td>{{ alarmInfo.csNumber }}</td>
                        <td>{{ alarmInfo.alarmInfo }}</td>
                        <td>
                            <span class="xu-badge" :class="{'xu-badge-error':alarmInfo.alarmType === 0,
                                                      'xu-badge-warning':alarmInfo.alarmType === 1}">
                                {{ alarmInfo.alarmType | alarmTypeFilter }}
                            </span>
                        </td>
                        <td>{{ alarmInfo.createTime }}</td>
                        <td>{{ alarmInfo.endTime }}</td>
                        <td>
                            <span class="xu-indicator xu-indicator-delete"
                                  @click="delAlarmInfo(alarmInfo.id)">删除</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="xu-text-center">
                    <xu-page-nav :is-shown="true"
                                 :size="serverData.size"
                                 :now-page="serverData.number"
                                 :total-elements="serverData.totalElements"
                                 :total-page="serverData.totalPages"
                                 @selectedPage="jumpSelectedPage($event)">
                    </xu-page-nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import XuPageNav from "@/components/CommonComponents/XuComponent/XuPageNav";
  import {notice} from "@/plugins/toastrConfig";

  export default {
    name: "AlarmCenter",
    components:{XuPageNav},
    data(){
      return {
        serverData:{},//从服务器获取的所有数据
        alarmInfos:[],//存放获取的报警记录
      }
    },
    filters:{
      alarmTypeFilter:function (value) {
        switch (value) {
          case 0:
            return '数据异常';
          case 1:
            return '设备故障'
        }
      }
    },
    methods:{
      //1 获取报警记录
      getAlarmInfos: function (page=0) {
        this.alarmInfos = [];
        this.$Http['alarmCenter']['getAlarmInfos']('',{params:{start:page}})
          .then(res => {
            this.serverData = res;
            const {content} = res;
            content.forEach(ele => {
              this.alarmInfos.push({
                id:ele.id,
                csNumber:ele.device.csNumber,
                alarmInfo:ele.alarmInfo,
                alarmType:ele.alarmType,
                createTime:ele.createTime,
                endTime:ele.endTime
              })
            })
          })
      },
      //2 删除一条报警记录
      delAlarmInfo: function (alarmInfoId) {
        this.$Http['alarmCenter']['delAlarmInfo'](alarmInfoId)
          .then( res => {
            res && this.getAlarmInfos()
          })
      },
      //3.分页器跳转
      jumpSelectedPage:function(selectedPage){
        this.getAlarmInfos(selectedPage-1)
      },
    },
    created(){
      this.getAlarmInfos()
    }
  }
</script>

<style scoped>

</style>