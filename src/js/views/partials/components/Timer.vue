<template>
    <div class="position-relative w-100">
        <p class="small mb-1" :class="timeUp ? 'badge badge-danger' : ''">
            {{ secondsLeft }} seconds remaining
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

    data() {
        return {
            lastTime: 0,
        }
    },

    watch: {
        secondsLeft(newVal, oldVal) {
            if(newVal < oldVal && newVal === 0) {
                this.$store.commit('m_time_up', true)
            } else if(newVal > oldVal) {
                this.$store.commit('m_time_up', false)
            }
        },
    },

    computed: {
        startTime() {
            return this.newStartTime ? this.newStartTime : Date.now() / 1000
        },

        secondsExpired() {
            return (this.lastTime - this.startTime).toFixed(0)
        },

        percTimeExpired() {
            return ((this.secondsExpired/this.secondsAllotted) * 100).toFixed(0)
        },

        percTimeLeft() {
            return 100 - this.percTimeExpired
        },

        secondsLeft() {
            const secondsleft = this.secondsAllotted - this.secondsExpired
            return secondsleft >= 0 ? secondsleft : 0
        },

        ...mapState([
            'newStartTime','timeUp','tickets'
        ]),
    },

    methods: {
        setLastTime(time) {
            this.lastTime = time
            if(!this.tickets.length) return
            setTimeout(this.setLastTime, 60, Date.now() / 1000)
        },
    },
    
    created() {
        const time = Date.now() / 1000
        this.lastTime = time
        setTimeout(this.setLastTime, 60, time)
    },
}
</script>