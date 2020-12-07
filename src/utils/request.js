import axios from 'axios'

import { Message } from "element-ui";
import getUserTempId from "@utils/getUserTempId";
import store from '@store'

import NProgress from "nprogress";
import "nprogress/nprogress.css";

const userTempId = getUserTempId();

const instance = axios.create({
    //  / 代表当前服务器地址
    baseURL:"./api",//公共的基础路径
    headers:{
        //token:"xxx"登录接口不需要所以不用写
    },

})
// 设置请求拦截器
instance.interceptors.request.use(
    (config)=>{
        NProgress.start();
        // config 请求的配置对象
        const token = store.state.user.token
        if(token){
            config.headers.token = token;
        }
        
        config.headers.userTempId = userTempId;
        
        return config
    }
)
// 设置响应拦截器
instance.interceptors.response.use(
    // 响应成功：响应码状态为 2xx
    (response)=>{

        NProgress.done();
        // 响应成功不代表功能成功，只代表响应结果
        // 功能成功需要看 数据中的code值
        // 成功为 200
        // 失败为 201 202 等
        // console.log(response)
        if(response.data.code === 200){
            return response.data.data
        }
        const message = response.data.message
        
        Message.error(message);
        return Promise.reject(message)
    },

    // 响应失败： 状态码不是2xx
    (error) =>{
        NProgress.done();
        const message = error.message || "网络错误"

        Message.error(message);
        return Promise.reject(message)
    }
)

export default instance

