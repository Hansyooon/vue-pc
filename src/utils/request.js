import axios from 'axios'

const instance = axios.create({
    //  / 代表当前服务器地址
    baseURL:"./api",//公共的基础路径
    headers:{
        //token:"xxx"登录接口不需要所以不用写
    },

})

instance.interceptors.request.use(
    (config)=>{
        return config
    }
)

instance.interceptors.response.use(
    (response)=>{
        if(response.data.code === 200){
            return response.data.data
        }

        return Promise.reject(response.data.message)
    },

    (error) =>{
        const message = error.message || "网络错误"

        return Promise.reject(message)
    }
)

export default instance

