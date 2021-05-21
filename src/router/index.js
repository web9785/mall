import Vue from "vue"
import VueRouter from 'vue-router'

const Home = ()=>import("views/home/Home")
const Cart = ()=>import("views/cart/Cart")
const Category = ()=>import("views/category/Category")
const User = ()=>import("views/user/User")

Vue.use(VueRouter);

//防止重复点击同一个路由导致控制台报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/user',
        component:User
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router