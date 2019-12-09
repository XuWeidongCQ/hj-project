
import axios from 'axios'
import API from "@/service/api";
import { XuToastr } from "@/components/CommonComponents/XuComponent/XuToastr/XuToastr";


//需要登录才能访问的接口
let axiosInst = axios.create({
  baseURL:'http://172.20.29.59:8080/beidou'
});


let Http = {};
//请求拦截器
axiosInst.interceptors.request.use(config =>{
  // console.log(config);
  const {method} = config;
  switch (method) {
    case "delete":
      return new Promise(resolve => {
        XuToastr('确认删除',()=>{
          resolve(config)
        });
      });

    case "get":
      return config;
    default:
      return config;
  }
},error => {
  console.log(error);
  return Promise.reject(error)
});


//响应拦截器
axiosInst.interceptors.response.use(res=>{
  // console.log(res);
  //1.reqConfig    -HTTP请求的配置
  //2.resData      -HTTP请求响应的数据
  //3.resStatus    -HTTP请求的状态
  //4.reqMethod    -HTTP请求的方法
  //5.reqData      -HTTP请求过程中上传的数据(放在请求体中)
  //6.reqParams    -HTTP请求过程中上传的数据(放在url中)
  const {config:reqConfig,data:resData,status:resStatus} = res;
  const {method:reqMethod,data:reqData,params:reqParams} = reqConfig;
  // console.log(`请求方法为${reqMethod}`,`请求数据为${reqData}`,'请求参数为',reqParams);

  // switch (reqMethod) {
  //   case "post":
  //     if (resData){
  //       const {code,message} = resData;
  //
  //     }
  // }
  if (resData.content){
    // console.log(resData.content)
  } else {
    // console.log(resData);
  }
  return res //必须返回，不然响应会被阻断
},error => {
  console.log(error);
  return Promise.reject(error)
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