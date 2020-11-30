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

store.subscribe((mutation, state) => {
    if (state) {
        localStorage.setItem('hitw_state', JSON.stringify(state));
    }
});

const app = new Vue({
    el: '#hitw-app',
    router,
    store,
    created() {
        this.$store.dispatch('a_initialize_store');
    },
})

