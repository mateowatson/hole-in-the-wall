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
    store,
    methods: {
        setGameTime(ms) {
            store.dispatch('a_set_game_time', ms)
            requestAnimationFrame(this.setGameTime)
        }
    },
    created() {
        requestAnimationFrame(this.setGameTime)
    }
})
