import axios from 'axios'

export function request(config){
    // 创建axios实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:3000
    })
    //axois拦截器
    //1、请求拦截
    instance.interceptors.request.use(config=>{
        //请求拦截时需要将配置信息返回
        return config
    })
    //2、响应拦截器
    instance.interceptors.response.use(res=>{
        //将拦截的响应数据返回
        return res.data
    })
    //发送请求
    return instance(config)
}