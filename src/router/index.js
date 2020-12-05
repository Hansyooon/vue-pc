import Vue from "vue"
import VueRouter from "vue-router"
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Search from '../views/Search'

import Detail from '@views/Detail'

const push = VueRouter.prototype.push
const replace = VueRouter.prototype.replace

VueRouter.prototype.push=function(location,onComlete,onAbort){
    //如果想要处理失败将参数直接传入
    if(onComlete&&onAbort){
        return push.call(this,location,onComlete,onAbort)
    }
    //如果不想处理失败，则给默认值
    return push.call(this,location,onComlete,()=>{})
}
VueRouter.prototype.replace=function(location,onComlete,onAbort){
    //如果想要处理失败将参数直接传入
    if(onComlete&&onAbort){
        return replace.call(this,location,onComlete,onAbort)
    }
    //如果不想处理失败，则给默认值
    return replace.call(this,location,onComlete,()=>{})
}

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/",
            component:Home
        },
        {
            path:"/login",
            component:Login,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/register",
            component:Register,
            meta:{
                showFooter:true
            }
        },
        {
            name:"search",
            path:"/search/:searchText?",
            component:Search,
            
        },
        {
            name:"detail",
            path:"/detail/:id",
            component:Detail
        }
    ],
    // 每次切换路由页面滚动条位置
    scrollBehavior() {
		return { x: 0, y: 0 };
	},
})