import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//防止重复点击同一个路由导致控制台报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};

const routes = [

]

const router = new VueRouter({
    routes,
    mode:history
})

export default router