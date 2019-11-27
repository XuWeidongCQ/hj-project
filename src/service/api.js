
const API = {
  backendManage:{
    //获取所有客户公司信息
    getCompanyInfos:{
      method:'get',
      url:'/companys'
    },

    //获取客户公司信息
    getCompanyInfo:{
      method:'get',
      url:'/companys/'
    },

    //提交一份客户公司信息
    postCompanyInfo:{
      method:'post',
      url:'/companys'
    },

    //删除客户公司信息
    deleteCompanyInfo:{
      method:'delete',
      url:'/companys/'
    },

    //编辑客户公司信息
    editCompanyInfo:{
      method:'put',
      url:'/companys'
    }

  }
};

export default API

