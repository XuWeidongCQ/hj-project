
const API = {
  backendManage:{
    //1.获取所有客户公司信息
    getCompanyInfos:{
      method:'get',
      url:'/companys'
    },

    //2.获取客户公司信息
    getCompanyInfo:{
      method:'get',
      url:'/companys/'
    },

    //3.提交一份客户公司信息
    postCompanyInfo:{
      method:'post',
      url:'/companys'
    },

    //4.删除客户公司信息
    delCompanyInfo:{
      method:'delete',
      url:'/companys/'
    },

    //5.编辑客户公司信息
    editCompanyInfo:{
      method:'put',
      url:'/companys'
    }

  },
  dataParse:{
    //1.获取所有机型
    getMachineModelInfos:{
      method:'get',
      url:'/models'
    },

    //2.获取机型
    getMachineModelInfo:{
      method:'get',
      url:'/models/'
    },

    //3.提交一份机型数据
    postMachineModelInfo:{
      method:'post',
      url:'/models'
    },

    //4.删除一份机型数据
    delMachineModelInfo:{
      method:'delete',
      url:'/models/',
    },

    //5.编辑一份机型数据
    editMachineModelInfo:{
      method:'put',
      url:'/models'
    },

    //6.获取某一机型的数据解析表
    getDataParseInfos:{
      method:'get',
      url:'/models/'
    },
    //7.获取某一条机型解析数据
    getDataParseInfo:{
      method:'get',
      url:'/parses/'
    },
    //8.提交一条机型解析数据
    postDataParseInfo:{
      method:'post',
      url:'/parses'
    },
    //9.删除某一条机型解析数据
    delDataParseInfo:{
      method:'delete',
      url:'/parses/'
    },
    //10.修改一条机型解析数据
    editDataParseInfo:{
      method:'put',
      url:'/parses'
    },


    //11.获取某一条数据解析下的所有的配置信息
    getMachineConfigInfos:{
      method:'get',
      url:'/parses/'
    },
    //12.获取某一条配置信息
    getMachineConfigInfo:{
      method:'get',
      url:'/matchs/'
    },
    //13.提交一条配置信息
    postMachineConfigInfo:{
      method:'post',
      url:'/matchs'
    },
    //14.删除某一条配置信息
    delMachineConfigInfo:{
      method:'delete',
      url:'/matchs/'
    },
    //15.修改一条配置信息
    editMachineConfigInfo:{
      method:'put',
      url:'/matchs'
    },
  }
};

export default API

