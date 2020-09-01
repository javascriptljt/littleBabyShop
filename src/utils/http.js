//引入axios生产环境插件
import axios from 'axios';
import {Toast} from 'vant';
import qs from 'qs';
//创建一个axios实例
const instance = axios.create({
    baseURL: 'http://www.pudge.wang:3001/',//默认url
    timeout: 50000,//请求超时时间
    headers: {'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'}//请求头
  });
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });



const http = {
    get(url,params){
        return new Promise((resolve,reject)=>{
            instance.get(url, params)
              .then( (response) =>{
                  resolve(response);
              })
              .catch( (error)=> {
                reject(error);
                Toast(error);
              });
            })
    },
    post(url,params){
      // let data = new FormData();
      // for(let i in params){
      //   data.append(i,params[i])
      // }
        return new Promise((resolve,reject)=>{
            instance.post(url,qs.stringify(params))
              .then( (response)=> {
                  resolve(response);
              })
              .catch( (error)=> {
                Toast('网络速度慢，请刷新');
                reject(error);
              });
        })
    }
};

export default http