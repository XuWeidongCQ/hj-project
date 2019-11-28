
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
    }
  }
};

export default API

