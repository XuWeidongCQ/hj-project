
const API = {
  //后台管理部分
  backendManage:{
    //1.获取所有客户公司信息
    getCompanyInfos:{
      method:'get',
      url:'/companys'
    },

    //2.获取客户公司信息
    getCompanyInfo:{
      method:'get',
      url:'/companys/' //'/companys/{id}'
    },

    //3.提交一份客户公司信息
    postCompanyInfo:{
      method:'post',
      url:'/companys'
    },

    //4.删除客户公司信息
    delCompanyInfo:{
      method:'delete',
      url:'/companys/' //'/companys/{id}'
    },

    //5.编辑客户公司信息
    editCompanyInfo:{
      method:'put',
      url:'/companys'
    },

    //6.获取某一公司的所有设备
    getDeviceInfos:{
      method:'get',
      url:'/companys/' // '/companys/{cid}/devices'
    },

    //7.获取某一台设备
    getDeviceInfo:{
      method:'get',
      url:'/devices/', // '/devices/{id}'
    },

    //8.提交一台设备信息
    postDeviceInfo:{
      method:'post',
      url:'/devices',
    },

    //9.删除一台设备信息
    delDeviceInfo:{
      method:'delete',
      url:'/devices/' // '/devices/{id}'
    },

    //10.修改一台设备
    editDeviceInfo:{
      method:'put',
      url:'/devices',
    }
  },
  //数据解析部分
  dataParse:{
    //1.获取所有机型
    getMachineModelInfos:{
      method:'get',
      url:'/models'
    },

    //2.获取机型
    getMachineModelInfo:{
      method:'get',
      url:'/models/' //'/models/{id}'
    },

    //3.提交一份机型数据
    postMachineModelInfo:{
      method:'post',
      url:'/models'
    },

    //4.删除一份机型数据
    delMachineModelInfo:{
      method:'delete',
      url:'/models/', //'/models/{id}'
    },

    //5.编辑一份机型数据
    editMachineModelInfo:{
      method:'put',
      url:'/models'
    },

    //6.获取某一机型的数据解析表
    getDataParseInfos:{
      method:'get',
      url:'/models/' //'/models/{model_id}/parses'
    },
    //7.获取某一条机型解析数据
    getDataParseInfo:{
      method:'get',
      url:'/parses/' //'/models/{id}'
    },
    //8.提交一条机型解析数据
    postDataParseInfo:{
      method:'post',
      url:'/parses'
    },
    //9.删除某一条机型解析数据
    delDataParseInfo:{
      method:'delete',
      url:'/parses/' //'/parses/{id}'
    },
    //10.修改一条机型解析数据
    editDataParseInfo:{
      method:'put',
      url:'/parses'
    },

    //11.获取某一条数据解析下的所有的配置信息
    getMachineConfigInfos:{
      method:'get',
      url:'/parses/' //'/parses/{pid}/matchs'
    },
    //12.获取某一条配置信息
    getMachineConfigInfo:{
      method:'get',
      url:'/matchs/' // '/matchs/{id}'
    },
    //13.提交一条配置信息
    postMachineConfigInfo:{
      method:'post',
      url:'/matchs'
    },
    //14.删除某一条配置信息
    delMachineConfigInfo:{
      method:'delete',
      url:'/matchs/' // '/matchs/{id}'
    },
    //15.修改一条配置信息
    editMachineConfigInfo:{
      method:'put',
      url:'/matchs'
    },
  },
  //维修中心部分
  repairCenter:{
    //1 获取某一设备的所有维修记录
    getOneDeviceRepairInfos:{
      method:'get',
      url:'/devices/' // '/devices/{device_id}/repairs'
    },
    //2 获取所有维修记录
    getRepairInfos:{
      method:'get',
      url:'/repairs'
    },
    //3 获取一条维修记录
    getRepairInfo:{
      method:'get',
      url:'/repairs/' // '/repairs/{id}'
    },
    //4 提交一条维修记录
    postRepairInfo:{
      method:'post',
      url:'/repairs'
    },
    //5 删除一条维修记录
    delRepairInfo:{
      method:'delete',
      url:'/repairs/', // '/repairs/{id}'
    },
    //6 修改一条维修记录
    editRepairInfo:{
      method:'put',
      url:'/repairs'
    }
  },
  //报警中心
  alarmCenter:{
    //1 获取所有设备的报警记录
    getAlarmInfos:{
      method:'get',
      url:'/alarms',
    },
    //2 获取一条报警记录
    getAlarmInfo:{
      method:'get',
      url:'/alarms/' // '/alarms/{id}'
    },
    //3 获取一台设备的所有报警记录
    getDeviceAlarmInfos:{
      method:'get',
      url:'/devices/' // '/devices/{device_id}/alarms'
    },
    //4 删除一条报警记录
    delAlarmInfo:{
      method:'delete',
      url:'/alarms/' // '/alarms/{id}'
    }
  }
};

export default API

