
import axios from 'axios'
import API from "@/service/api";
import {store} from "@/store/store";
import { XuToastr } from "@/components/CommonComponents/XuComponent/XuToastr/XuToastr";
import { XuAlert } from "@/components/CommonComponents/XuComponent/XuAlert/XuAlert";


//需要登录才能访问的接口
let axiosInst = axios.create({
  baseURL:'http://172.20.29.59:8080/beidou'
});

// console.log(router);

let Http = {};
const {state:{login}} = store;

//请求拦截器
axiosInst.interceptors.request.use(config =>{
  // console.log(config);
  // console.log(login);
  const {method,headers} = config;
  headers['common']['Access-Token'] = login['token'];
  // console.log(headers);
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
  //请求错误时，返回的数据和响应状态码
  const {data,status} = error.response;
  console.log(error);
  console.log('请求出错','响应状态码：',status);
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
  // console.log(reqConfig);
  const {code,message,data} = resData;
  // console.log(resStatus);
  switch (reqMethod) {
    //1.获取数据，不进行统一处理
    case "get":
      if (resData === ''){
        return []
      } else {
        return resData;
      }
    //2.   提交数据，对反馈信息进行统一处理
    //2.1  提交成功返回提交的信息
    //2.2  提交成功返回{code(=0成功，=1失败) message data}
    case "post":
      // console.log(resData);
      switch (code) {
        case -1:
          XuAlert(message,'error');
          return false;
        case 1:
          XuAlert('提交成功','success');
          return true;
        case 2:
          XuAlert('搜索完毕','success');
          return data;
        default:
          return resData;
      }

    //3.删除数据，成功删除返回空字符串，否则返回提示字符串
    case "delete":
      if (resData === ''){
        XuAlert('删除成功','success');
        return true
      } else {
        XuAlert(resData,'error');
        return false
      }
    //4.修改数据,目前没有做任何限制
    case "put":
      switch (code) {
        case -1:
          XuAlert(message,'error');
          return false;
        case 1:
          XuAlert('修改成功','success');
          return true;
        default:
          return resData;
      }

    default:
      return res
  }
},error => {
  //错误响应时，返回的数据和响应状态码
  const {data,status} = error.response;
  // console.log(error);
  console.log('响应出错','响应状态码：',status);
  switch (data['code']) {
    case -3:
      XuAlert(data['message'],'error');
      // router.push('/');
      break;
    case -4:
      XuAlert('该账户没有权限','error');
      // router.push('/');
  }
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