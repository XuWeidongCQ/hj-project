
import axios from 'axios'
import API from "@/service/api";

let axiosInst = axios.create({
  baseURL:'http://172.20.29.59:8080/beidou'
});

let Http = {};
//请求拦截器
axiosInst.interceptors.request.use(config => {
  // console.log(config);
  return config
});


//响应拦截器
axiosInst.interceptors.response.use(res=>{
  const data = res.data;
  if (data.content){
    console.log(data.content)
  } else {
    console.log(data);
  }
  return res //必须返回，不然响应会被阻断
});


Object.keys(API).forEach(key => {
  const uiPart = API[key];
  Http[key] = {};
  for (let requestName in uiPart){
    if (uiPart.hasOwnProperty(requestName)){
      const method = uiPart[requestName]['method'];
      const url = uiPart[requestName]['url'];

      switch (method) {
        case 'get':
          Http[key][requestName] = function (suffixUrl='',config={}) {
            return axiosInst[method](url+suffixUrl,config)
          };
          break;
        case 'delete':
          Http[key][requestName] = function (suffixUrl='',config={}) {
            return axiosInst[method](url+suffixUrl,config)
          };
          break;
        case 'post':
          Http[key][requestName] = function (data={},config={},suffixUrl='') {
            return axiosInst[method](url+suffixUrl,data,config)
          };
          break;
        case 'put':
          Http[key][requestName] = function (data={},config={},suffixUrl='') {
            return axiosInst[method](url+suffixUrl,data,config)
          };
          break;
        default:
          Http[key][requestName] = null;
      }
    }
  }

});

export default Http