<template>
    <div class="hitw_progress">
        <div class="hitw_progress__bar" :style="'width: '+percTimeLeft+'%;'"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            startTime: 0,
            lastTime: 0,
            secondsAllotted: 30
        }
    },
    computed: {
        secondsExpired() {
            return (this.lastTime - this.startTime).toFixed(2)
        },

        percTimeExpired() {
            return ((this.secondsExpired/this.secondsAllotted) * 100).toFixed(2)
        },

        percTimeLeft() {
            return 100 - this.percTimeExpired
        },
    },

    methods: {
        setLastTime(ms) {
            this.lastTime = ms
            setTimeout(this.setLastTime, 100, Date.now() / 1000)
        },
    },
    
    created() {
        this.startTime = Date.now() / 1000
        setTimeout(this.setLastTime, 100, Date.now() / 1000)
    },
}
</script>