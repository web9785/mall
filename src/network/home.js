// 首页网络请求
import {request} from './request'

export function getHomeData(){
    return request({
        url:'/home/multidata'
    })
}