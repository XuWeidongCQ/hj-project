

export default {
  //求数组的最小值
  min:function (array) {
    if (Array.isArray(array)) {
      let min = array[0];
      for (let i=1;i<array.length;i++){
        if (array[i] < min){
          min = array[i]
        }
      }
      return min
    } else {
      return -1
    }
  },
  //求数组的最大值
  max:function (array) {
    if (Array.isArray(array)) {
      let max = array[0];
      for (let i=1;i<array.length;i++){
        if (array[i] > max){
          max = array[i]
        }
      }
      return max
    } else {
      return -1
    }
  },
  //求数组全部元素之和
  sum:function (array) {
    if (Array.isArray(array)){
      let sum = array[0];
      for (let i=1;i<array.length;i++){
        sum = sum + array[i]
      }
      return sum;
    } else {
      return -1
    }
  },
  //产生时间的函数
  getDate:function () {
    let now;
    if (arguments[0]){
      now = new Date(arguments[0]);
    }else {
      now = new Date()
    }
    let nowYear = now.getFullYear();
    let nowMonth = now.getMonth() + 1;
    let nowDay = now.getDate();
    let nowHour = now.getHours();
    let nowMinute = now.getMinutes();
    let nowSecond = now.getSeconds();
    nowMonth < 10 ? nowMonth = '0' + nowMonth : nowMonth = '' + nowMonth;
    nowDay >= 10 ? nowDay = '' + nowDay : nowDay = '0' + nowDay;
    nowHour >= 10 ? nowHour = '' + nowHour : nowHour = '0' + nowHour;
    nowMinute >= 10 ? nowMinute = '' + nowMinute : nowMinute = '0' + nowMinute;
    nowSecond >= 10 ? nowSecond = '' + nowSecond : nowSecond = '0' + nowSecond;
    return {
      YYYYMMDD:nowYear+'-'+nowMonth+'-'+nowDay,
      YYYY:nowYear,
      HHMMSS:nowHour+':'+nowMinute+':'+nowSecond,
      YYYYMMDDHHMMSS:nowYear+'-'+nowMonth+'-'+nowDay+' '+nowHour+':'+nowMinute+':'+nowSecond,
      MMDDHHMMSS:nowMonth+'-'+nowDay+' '+nowHour+':'+nowMinute+':'+nowSecond,
    }
  },

  forEachObject:function (obj,fn) {
    //property就是对象中的键
    if (JSON.stringify(obj) !== '{}'){
      for (let property in obj){
        if (obj.hasOwnProperty(property)){
          fn(property,obj[property])
        }
      }
    }
  },
}
