<template>
    <div class="chart-wrapper">
        <div class="row">
            <div class="col-8">
                <div class="chart-head">
                    <span class="chart-title">ECU数量</span>
                    <div class="item-label">
                        <span class="mr-3"><span class="fa fa-circle dev-normal"></span> 正常</span>
                        <span class=""><span class="fa fa-circle dev-alert"></span>  报警</span>
                    </div>
                </div>
                <div class="chart-body">
                    <div id="line-chart"></div>
                </div>
            </div>
            <div class="col-4">
                <div class="chart-head">
                    <span class="chart-title">百分比</span>
                    <div class="item-label">
                        <span class="mr-3"><span class="fa fa-circle dev-normal"></span> 正常</span>
                        <span class=""><span class="fa fa-circle dev-alert"></span>  报警</span>
                    </div>
                </div>
                <div class="chart-body">
                    <div id="pie-chart"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  //按需引入
  let echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/line');
  require('echarts/lib/chart/pie');
  require('echarts/lib/component/tooltip');
  export default {
    name: "ChartStatics",
    data:function () {
      return {
        oneWeek:['9-2','9-3','9-4','9-5','9-6','9-7','9-8'],
        ECUNormal:[456,478,460,490,550,536,520],
        ECUAlert:[9,4,13,11,3,18,14],
      }
    },
    methods:{
      drawLineChart:function (pos,period,ECUNormal,ECUAlert) {
        let lineChartInstance = echarts.init(pos);
        lineChartInstance.setOption({
          color:['#23c6c8','#ed5565'],
          tooltip: {
            trigger: 'item',
          },
          yAxis:{type:'value'},
          xAxis:{type:'category'},
          grid: {
            containLabel: true,
            left:'15px',
            right:'15px',
            top:'15px',
            bottom:'15px'
          },
          dataset: {
            source:{
              'period':period,
              'ECUNormal':ECUNormal,
              'ECUAlert':ECUAlert,
            }
          },
          series:[
            {
              type: 'line',
              smooth:true,
              itemStyle:{
                borderWidth:4
              },
              lineStyle:{
                width:4
              },
              encode:{
                x:'period',
                y:'ECUNormal'
              }
            },
            {
              type: 'line',
              smooth:true,
              itemStyle:{
                borderWidth:4
              },
              lineStyle:{
                width:4
              },
              encode:{
                x:'period',
                y:'ECUAlert'
              }
            }
          ]
        });
        window.addEventListener('resize',function () {
          lineChartInstance.resize()
        });
      },
      drawPieChart:function(pos,ECUNormal,ECUAlert){
        let pieChartInstance = echarts.init(pos);
        pieChartInstance.setOption({
          color:['#23c6c8','#ed5565'],
          tooltip: {
            trigger: 'item',
          },
          grid: {
            containLabel: true,
            left:'15px',
            right:'15px',
            top:'15px',
            bottom:'15px'
          },
          dataset:{
            source:{
              'itemName':['正常','报警'],
              'ECUNumber':[ECUNormal,ECUAlert]
            }
          },
          series:[
            {
              type:'pie',
              radius:['50%','70%'],
              hoverAnimation:false,
              label:{
                formatter:'{d}%'
              },
              encode:{
                itemName:'itemName',
                value:'ECUNumber'
              }
            }
          ]
        });
        window.addEventListener('resize',function () {
          pieChartInstance.resize()
        });
      },
    },
    computed:{
      totalECUNormal:function () {
        return this.extendJS.sum(this.ECUNormal)
      },
      totalECUAlert:function () {
        return this.extendJS.sum(this.ECUAlert)
      }
    },
    mounted(){
      this.drawLineChart(document.getElementById('line-chart'),this.oneWeek,this.ECUNormal,this.ECUAlert);
      this.drawPieChart(document.getElementById('pie-chart'),this.totalECUNormal,this.totalECUAlert);
    }
  }
</script>

<style scoped>
    .chart-wrapper {
        background-color: white;
    }
    .chart-head {
        padding: 15px 0;
        display: flex;
        justify-content: space-between;
    }
    .chart-body {
        /*border: solid 1px black;*/
    }
    #line-chart{
        height: 300px;
    }
    #pie-chart {
        height: 300px;
    }
    .dev-normal{
        color: #23c6c8;
    }
    .dev-alert{
        color: #ed5565;
    }
    .chart-title {
        padding: 0 5px;
        font-weight: 600;
    }
    .item-label{
        font-size: 14px;
        font-weight: 100;
        padding-right: 20px;
    }
</style>