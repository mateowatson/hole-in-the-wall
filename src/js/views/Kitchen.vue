<template>
<div class="container-fluid">
    <div class="row">
        <div class="hitw_tickets col-lg-2 p-0 bg-dark text-light">
            <h2 class="h5 p-3">Tickets</h2>
            <div class="pl-3 pr-3 pb-3">
                <Timer v-if="tickets.length"
                    :seconds-allotted="tickets[0] ? tickets[0].secondsAllotted : 0" />
            </div>
            <Ticket v-for="(ticket, idx) in tickets" :key="idx+'tick'" :ticket="ticket" />
        </div>

        <div class="hitw_possible-items col-lg-2 offset-lg-2 border-right">
            <h2 class="h5 pt-3">Possible Items</h2>

            <ImgButton v-for="(possibleItem, idx) in possibleItems"
                :key="idx+'pi'" :thing="possibleItem"
                :type="'items'" />

            <h2 class="h5 pt-3">Items</h2>

            <ul class="list-unstyled">
                <Item v-for="(item, idx) in items" :key="idx+'item-amt'"
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
                <li class="list-group-item">Morbi leo risus</li>
            </ul>

            <div class="card mt-3">
                <div class="card-body">
                    <h2 class="h6">
                        Ingredients
                    </h2>

                    <ImgButton v-for="(ingredient, idx) in ingredients"
                        :key="idx+'ing'" :thing="ingredient"
                        :type="'ingredients'" />
                </div>
            </div>

            <div class="card mt-3">
                <div class="card-body">
                    <h2 class="h6">
                        Actions
                    </h2>

                    <ImgButton v-for="(action, idx) in actions"
                        :key="idx+'act'" :thing="action"
                        :type="'actions'" />
                </div>
            </div>

            <div class="card mt-3">
                <div class="card-body">
                    <h2 class="h6">
                        Cook
                    </h2>

                    <ImgButton v-for="(cookingMethod, idx) in cookingMethods"
                        :key="idx+'coo'" :thing="cookingMethod"
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
        initTimeUp() {
            setTimeout(function commitLoss(t) {
                // check "delta time"
                if(Date.now() - t >= 2000) {
                    this.$store.commit('m_ticket_lose_first')
                } else {
                    setTimeout(commitLoss.bind(this), 300, Date.now())
                }
            }.bind(this), 2000, Date.now())
        }
    },

    watch: {
        // Mercifully allow 3 seconds more after timeup
        timeUp(newVal, oldVal) {
            if(true === newVal && false === oldVal) {
                this.initTimeUp()
            }
        },

        secondsLeftInDay(newVal, oldVal) {
            if(newVal < 0 && oldVal > 0) {
                setTimeout(function initEndOfDay(t) {
                    // check "delta time"
                    if(Date.now() - t >= 2000) {
                        this.$router.push('/')
                    } else {
                        setTimeout(initEndOfDay.bind(this), 300, Date.now())
                    }
                }.bind(this), 3000, Date.now())
            }
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
            'ingredients','tickets','items','actions','cookingMethods','money','timeUp',
            'secondsLeftInDay'
        ]),
        ...mapGetters([
            'possibleItems'
        ]),
    },

    created() {
        if(this.secondsLeftInDay <= 0) {
            this.$router.push('/')
            return
        }

        if(this.timeUp) {
            this.initTimeUp()
        }

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