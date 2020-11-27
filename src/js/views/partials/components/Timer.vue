<template>
    <div class="progressss">
        {{lastTime}}<br>
        {{timeLeft}}
        
        <div class="progressss-bar" role="progressssbar" aria-valuenow="0"
        aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lastTime: 0,
            secondsAllotted: 30
        }
    },
    computed: {
        timeLeft() {
            return ((this.secondsAllotted - this.lastTime)/30) * 100
        },
    },
    methods: {
        setLastTime() {
            this.lastTime = window.hitw_last
            setTimeout(this.setLastTime, 500)
        },
    },
    created() {
        this.startTime = Date.now()
        setTimeout(this.setLastTime, 500)
    },
}
</script>