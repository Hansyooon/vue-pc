import Vue from "vue"
import VueRouter from "vue-router"
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Search from '../views/Search'
import AddCartSuccess from "../views/AddCartSuccess";
import ShopCart from "../views/ShopCart";
import Center from "../views/Center";
import Pay from "../views/Pay";
import PaySuccess from "../views/PaySuccess";
import Trade from "../views/Trade";
import store from '@store'

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

const router = new VueRouter({
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
        },
        {
			// 命名路由
			name: "addcartsuccess",
			path: "/addcartsuccess",
			component: AddCartSuccess,
		},
		{
			// 命名路由
			name: "shopcart",
			path: "/shopcart",
			component: ShopCart,
        },
    
		{
			// 命名路由
			name: "trade",
			path: "/trade",
			component: Trade,
		},
		{
			// 命名路由
			name: "pay",
			path: "/pay",
			component: Pay,
		},
		{
			// 命名路由
			name: "paysuccess",
			path: "/paysuccess",
			component: PaySuccess,
		},
		{
			// 命名路由
			name: "center",
			path: "/center/myorder",
			component: Center,
		},
    ],
    // 每次切换路由页面滚动条位置
    scrollBehavior() {
		return { x: 0, y: 0 };
	},
})
const permissionPaths = ["trade","pay","center"]
router.beforeEach((to,from,next)=>{
    if(permissionPaths.indexOf(to.name)>-1 && !store.state.user.token){
        next("login")
    }
    next()
})

export default router