
import axios from 'axios';
const _axios = axios.create({});
// 请求拦截器，可以做取消请求处理
// 发送重复链接时，取消请求
window.pendings = []; // 声明一个数组用于存储每个请求的取消函数和axios标识
const removePending = (config) => {
  for (const p in window.pendings) {
    // 当当前请求在数组中存在时执行函数体
    if (window.pendings[p].url === `${config.url[0]}&${JSON.stringify(config.data)}${config.method}`) {
      window.pendings[p].controller.abort(); // 执行取消操作
      window.pendings.splice(p, 1); // 数组移除当前请求
    }
  }
};
// // 请求拦截
_axios.interceptors.request.use(
  config => {
    // 在一个axios发送前执行一下取消操作
    removePending(config); 

    //存储该请求
    const controller = new AbortController();
    config.signal = controller.signal;
    window.pendings.push({
      url: `${config.url}&${JSON.stringify(config.data)}${config.method}`,
      controller
    })
    return config;

  },
  error => Promise.reject(error)
);

_axios.interceptors.request.use((config)=>{
  return config;
},null)

// 响应拦截器，可以做集中处理错误code
_axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
  },
  error => {
    if(error.code == 'ERR_CANCELED') {
      return Promise.resolve(error);
    }
    // Do something with response error
    const status = error.response.status;
    if (status == 401) {
      //跳转到登录页面
      window.location = `http://${window.location.host}/login.html`
    } else if (status == 403) {
      console.log('没有权限')
    } else if (status != 200) {
      console.log('网络错误')
    }
    return Promise.resolve(error.response.data);
  }
);
export default _axios

