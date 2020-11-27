import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Vuex from 'vuex'
import vuexstore from './store'

window.hitw_dt = 0;
window.hitw_last = 0;
function setGameTime(ms) {
    requestAnimationFrame(setGameTime)
    const t = ms / 1000; // Let's work in seconds
    window.hitw_dt = t - window.hitw_last;
    window.hitw_last = t;
}
requestAnimationFrame(setGameTime)

Vue.use(Vuex)

Vue.use(VueRouter)

const store = new Vuex.Store(vuexstore);

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#hitw-app',
    router,
    store
})

