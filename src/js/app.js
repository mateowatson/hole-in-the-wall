import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Vuex from 'vuex'
import vuexstore from './store'

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

