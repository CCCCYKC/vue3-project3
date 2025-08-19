import axios from 'axios'
import { Elmessage } from 'element-plus'

const instance = axios.create({
    baseURL: 'https://v3pz.itndedu.com/v3pz',
    timeout: 10000,   // 超时时间
});


// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 获取token
    const token = localStorage.getItem('token');
    // 不需要token的api
    const whiteUrl = ['/get/code', '/user/authentication', '/login'];
    // 对于不在白名单里面的api，请求头里面要加上token
    if (token && whiteUrl.includes(config.url)) {
        config.headers['x-token'] = token;
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对接口异常的数据，给予用户提示
    if (response.data.code === -1) {
        Elmessage.warning(response.data.message);
    }
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});