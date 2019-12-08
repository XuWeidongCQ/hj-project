import Vue from 'vue'
import router from './router'
import App from './App.vue'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'

import '@/plugins/XuCSS.css'
import XuCSS from "@/plugins/XuCSS"
import '@/plugins/shareCSS.css'
import commonJS from "@/plugins/commonJS"
import filters from "@/plugins/filters"
import Http from "@/service/Http";


import BaiduMap from 'vue-baidu-map'
import VueToastr from "vue-toastr";




Vue.config.productionTip = false;
Vue.prototype.extendJS = commonJS;
Vue.prototype.$Http = Http;
Vue.use(VueToastr,{});
// Vue.use(BaiduMap,{
//   ak:'HMsRLrPGidU6hIisM4HYgx0APRKhpm6p'
// });
//注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key,filters[key])
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
