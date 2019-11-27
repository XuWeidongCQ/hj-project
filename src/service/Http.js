
import axios from 'axios'
import API from "@/service/api";

let axiosInst = axios.create({
  baseURL:'http://172.20.29.59:8080/beidou'
});

let Http = {};


Object.keys(API).forEach(key => {
  const uiPart = API[key];
  Http[key] = {};
  for (let requestName in uiPart){
    if (uiPart.hasOwnProperty(requestName)){
      const method = uiPart[requestName]['method'];
      const url = uiPart[requestName]['url'];

      switch (method) {
        case 'get':
          Http[key][requestName] = function (config={},urlSuffix='') {
            return axiosInst[method](url+urlSuffix,config)
          };
          break;
        case 'delete':
          Http[key][requestName] = function (urlSuffix='',config={}) {
            return axiosInst[method](url+urlSuffix,config)
          };
          break;
        case 'post':
          Http[key][requestName] = function (data={},config={},urlSuffix='') {
            return axiosInst[method](url+urlSuffix,data,config)
          };
          break;
        case 'put':
          Http[key][requestName] = function (data={},config={},urlSuffix='') {
            return axiosInst[method](url+urlSuffix,data,config)
          };
          break;
        default:
          Http[key][requestName] = null;
      }
    }
  }

});

export default Http