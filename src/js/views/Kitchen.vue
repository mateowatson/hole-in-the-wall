<template>
<div class="container-fluid">
    <div class="row">
        <div class="hitw_tickets col-lg-2 p-0 bg-dark text-light">
            <h2 class="h5 p-3">Tickets</h2>
            <Ticket v-for="ticket in tickets" :key="ticket.name" :ticket="ticket" />
        </div>

        <div class="hitw_possible-items col-lg-2 offset-lg-2 border-right">
            <h2 class="h5 pt-3">Possible Items</h2>

            <ImgButton v-for="(possibleItem, idx) in possibleItems"
                :key="idx+'pi'" :thing="possibleItem"
                :type="'items'" />

            <h2 class="h5 pt-3">Items</h2>

            <ul class="list-unstyled">
                <Item v-for="(item, idx) in items" :key="idx+'item-amt-kit'"
                    :thing="item" :type="'items'" />
            </ul>
        </div>

        <div class="hitw_main-board col-lg-8 offset-lg-4">
            <ul class="list-group list-group-horizontal mt-3">
                <li class="list-group-item">
                    Money:
                    <span :class="money >= 0 ? 'badge badge-success' : 'badge badge-danger'">
                        ${{ money.toFixed(2) }}
                    </span>
                </li>
                <li class="list-group-item">
                    {{ formattedMinInDay }} m
                    {{ formattedSecInDay }} s
                    left in day
                </li>
                <li class="list-group-item">
                    <router-link to="/">Pause / Home</router-link>
                </li>
            </ul>

            <div class="card mt-3">
                <div class="card-body">
                    <h2 class="h6">
                        Ingredients
                    </h2>

                    <ImgButton v-for="(ingredient, idx) in ingredients"
                        :key="idx+'ing-kit'" :thing="ingredient"
                        :type="'ingredients'" />
                </div>
            </div>

            <div class="card mt-3">
                <div class="card-body">
                    <h2 class="h6">
                        Actions
                    </h2>

                    <ImgButton v-for="(action, idx) in actions"
                        :key="idx+'act-kit'" :thing="action"
                        :type="'actions'" />
                </div>
            </div>

            <div class="card mt-3">
                <div class="card-body">
                    <h2 class="h6">
                        Cook
                    </h2>

                    <ImgButton v-for="(cookingMethod, idx) in cookingMethods"
                        :key="idx+'coo-kit'" :thing="cookingMethod"
                        :type="'cookingMethods'" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ImgButton from './partials/components/ImgButton'
import Ticket from './partials/components/Ticket'
import Item from './partials/components/Item'
import Timer from './partials/components/Timer'

export default {
    methods: {
        createTickets() {
            this.$store.dispatch('a_tickets_create')
        },
    },

    watch: {
        secondsLeftInDay(newVal, oldVal) {
            if(newVal < 0 && oldVal > 0) {
                setTimeout(function initEndOfDay(t) {
                    // check "delta time"
                    if(Date.now() - t >= 2000) {
                        this.$store.commit('m_tickets_clear')
                        this.$store.commit('m_add_per_day_expenses')
                        this.$router.push('/pay-expenses')
                    } else {
                        setTimeout(initEndOfDay.bind(this), 300, Date.now())
                    }
                }.bind(this), 3000, Date.now())
            }
        },

        tickets(newVal, oldVal) {
            if(newVal.length <= 0)
                this.createTickets()
        },
    },

    computed: {
        formattedMinInDay() {
            let val = Math.floor(this.secondsLeftInDay / 60)
            return val > 0 ? val : 0
        },

        formattedSecInDay() {
            let val = Math.floor(this.secondsLeftInDay % 60)
            return val > 0 ? val : 0
        },

        ...mapState([
            'ingredients','tickets','items','actions','cookingMethods','money',
            'secondsLeftInDay'
        ]),
        ...mapGetters([
            'possibleItems'
        ]),
    },

    created() {
        if(this.secondsLeftInDay <= 0) {
            this.$router.push('/pay-expenses')
            return
        }

        this.createTickets()

        setTimeout(function reduceSecondsLeftInDay(t) {
            // "delta time"
            let dt = Date.now() - t
            //this.secondsLeftInDay -= (dt / 1000)
            this.$store.commit('m_reduce_seconds_left_in_day', dt / 1000)
            setTimeout(reduceSecondsLeftInDay.bind(this), 300, Date.now())
        }.bind(this), 300, Date.now())


    },

    beforeRouteLeave (to, from, next) {
        // clear all setTimeouts
        var id = window.setTimeout(function() {}, 0);

        while (id--) {
            window.clearTimeout(id);
        }

        next()
    },

    components: { ImgButton, Ticket, Item, Timer }
}
</script>