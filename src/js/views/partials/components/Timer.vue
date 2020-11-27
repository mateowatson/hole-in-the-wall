<template>
    <div class="position-relative w-100">
        <p class="small mb-0">{{ secondsLeft }} seconds remaining</p>
        <div class="hitw_progress">
            <div class="hitw_progress__bar" :style="'width: '+percTimeLeft+'%;'"></div>
        </div>
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
    },

    methods: {
        setLastTime(seconds) {
            this.lastTime = seconds
            setTimeout(this.setLastTime, 60, Date.now() / 1000)
        },
    },
    
    created() {
        const seconds = Date.now() / 1000
        this.lastTime = seconds
        this.startTime = seconds
        setTimeout(this.setLastTime, 60, seconds)
    },
}
</script>