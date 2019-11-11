import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'
import '@/plugins/shareCSS.css'
import BaiduMap from 'vue-baidu-map'
import commonJS from "@/plugins/commonJS"
import filters from "@/plugins/filters"


Vue.config.productionTip = false;
Vue.prototype.extendJS = commonJS;
Vue.use(BaiduMap,{
  ak:'HMsRLrPGidU6hIisM4HYgx0APRKhpm6p'
});
//注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key,filters[key])
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
