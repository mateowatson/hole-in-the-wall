<template>
    <div class="position-relative w-100">
        <p class="small mb-1" :class="aboutToRunOut ? 'badge badge-danger' : ''">
            {{ formattedSecondsLeft }} seconds remaining
        </p>
        <div class="hitw_progress">
            <div class="hitw_progress__bar" :style="'width: '+percentLeft+'%;'"></div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    props: ['ticket'],

    methods: {
        reduceSecondsLeftInTicket(t) {
            // "delta time"
            let dt = (Date.now() / 1000) - t

            this.$store.commit('m_reduce_seconds_left_in_ticket', {
                ticket: this.ticket,
                dt
            } )
            
            if(! this.ticket.secondsLeft > 0) return
            setTimeout(
                this.reduceSecondsLeftInTicket, 300, Date.now() / 1000
            )
        },
    },

    watch: {
        hasRunOut(newVal, oldVal) {
            if(newVal === true && oldVal === false) {
                this.$store.commit('m_ticket_remove', this.ticket)
            }
        },
    },

    computed: {
        formattedSecondsLeft() {
            let output = Math.floor(this.ticket.secondsLeft)
            return output > 0 ? output : 0
        },

        aboutToRunOut() {
            return this.ticket.secondsLeft < 4
        },

        hasRunOut() {
            return this.ticket.secondsLeft <= 0
        },

        percentLeft() {
            return (this.ticket.secondsLeft / this.ticket.secondsAllotted) * 100
        }
    },

    created() {
        this.reduceSecondsLeftInTicket(Date.now() / 1000)



        /* setTimeout(function reduceSecondsLeftInTicket(t) {
            // "delta time"
            let dt = (Date.now() / 1000) - t

            this.$store.commit('m_reduce_seconds_left_in_ticket', {
                ticket: this.ticket,
                dt
            } )
            
            if(! this.ticket.secondsLeft > 0) return
            setTimeout(
                reduceSecondsLeftInTicket.bind(this), 300, Date.now() / 1000
            )
        }.bind(this), 300, Date.now() / 1000) */
    },
}
</script>