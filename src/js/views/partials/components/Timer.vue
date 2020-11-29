<template>
    <div class="position-relative w-100">
        <p class="small mb-1" :class="timeUp ? 'badge badge-danger' : ''">
            {{ Math.floor(secondsLeftInTicket) }} seconds remaining
        </p>
        <div class="hitw_progress">
            <div class="hitw_progress__bar" :style="'width: '+percTimeLeft+'%;'"></div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: ['secondsAllotted'],

    watch: {
        /* secondsLeftInTicket(newVal, oldVal) {
            if(newVal < oldVal && newVal === 0) {
                this.$store.commit('m_time_up', true)
            } else if(newVal > oldVal) {
                this.$store.commit('m_time_up', false)
            }
        }, */
    },

    computed: {
        secondsExpired() {
            return (this.secondsAllotted - this.secondsLeftInTicket).toFixed(0)
        },

        percTimeExpired() {
            return ((this.secondsExpired/this.secondsAllotted) * 100).toFixed(0)
        },

        percTimeLeft() {
            return 100 - this.percTimeExpired
        },
        ...mapState([
            'ticketStartTime','secondsLeftInTicket','timeUp'
        ]),
    },
    
    created() {
        /* setTimeout(function setLastTicketTime(t) {
            if(this.ticketStartTime <= 0)
                this.$store.commit('m_set_ticket_start_time', t / 1000)
            this.$store.commit('m_set_last_ticket_time', t / 1000)
            setTimeout(setLastTicketTime.bind(this), 300, Date.now())
        }.bind(this), 300, Date.now()) */
        setTimeout(function reduceSecondsLeftInTicket(t) {
            // "delta time"
            let dt = Date.now() - t
            //this.secondsLeftInDay -= (dt / 1000)
            if(!this.timeUp && this.secondsLeftInTicket <= 0) {
                this.$store.commit('m_set_seconds_left_in_ticket', this.secondsAllotted)
            } else {
                this.$store.commit('m_reduce_seconds_left_in_ticket', dt / 1000)
            }
            setTimeout(reduceSecondsLeftInTicket.bind(this), 300, Date.now())
        }.bind(this), 300, Date.now())
    },
}
</script>