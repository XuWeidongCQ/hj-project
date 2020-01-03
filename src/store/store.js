
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    'login':{
      username:'' || sessionStorage.getItem('username'),
      password:'' || sessionStorage.getItem('password'),
      token:'' || sessionStorage.getItem('token'),
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
    }
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