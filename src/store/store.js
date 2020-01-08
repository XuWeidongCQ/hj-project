
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    'login':{
      loginTime: ''||sessionStorage.getItem('loginTime'),
      username:'' || sessionStorage.getItem('username'),
      password:'' || sessionStorage.getItem('password'),
      token:'' || sessionStorage.getItem('token'),
      roleName:'' || sessionStorage.getItem('roleName'),
      menuList: sessionStorage.getItem('menuList'),
      companyName:''||sessionStorage.getItem('companyName')
    }
  },
  getters:{
    getUsername:function (state) {
      return state['login']['username']
    },
    getPassword:function (state) {
      return state['login']['password']
    },
    getToken:function (state) {
      return state['login']['token']
    },
    getRoleName:function (state) {
      return state['login']['roleName']
    },
    getMenuList:function (state) {
      return state['login']['menuList']
    },
    getCompanyName:function (state) {
      return state['login']['companyName']
    },
    getLoginTime:function (state,part,key) {
      return state['login']['loginTime']
    }
  },
  mutations:{
    //1.写入用户名
    addUsername:function (state,payload) {
      state['login']['username'] = payload;
      sessionStorage.setItem('username',payload);
    },
    //2.写入用户密码
    addPassword:function (state, payload) {
      state['login']['password'] = payload;
      sessionStorage.setItem('password',payload);
    },
    //3.写入token
    addToken:function (state, payload) {
      state['login']['token'] = payload;
      sessionStorage.setItem('token',payload);
    },
    //4.写入角色名
    addRoleName:function (state, payload) {
      state['login']['roleName'] = payload;
      sessionStorage.setItem('roleName',payload);
    },
    //5.写入可查看菜单列表
    addMenuList:function (state, payload) {
      state['login']['menuList'] = payload;
      sessionStorage.setItem('menuList',payload);
    },
    //6.写入账号所属公司
    addCompanyName:function (state,payload) {
      state['login']['companyName'] = payload;
      sessionStorage.setItem('companyName',payload);
    },
    //7.写入登录时间
    addLoginTime:function(state,payload){
      state['login']['loginTime'] = payload;
      sessionStorage.setItem('loginTime',payload)
    },
  },
  actions:{
    changeUsername:function (context,payload) {
      context.commit('addUsername',payload)
    },
    changePassword:function (context,payload) {
      context.commit('addPassword',payload)
    },
    changeToken:function (context,payload) {
      context.commit('addToken',payload)
    }
  }
});

export { store }