<template>
    <div class="position-relative w-100">
        <p class="small mb-1" :class="false ? 'badge badge-danger' : ''">
            {{ Math.floor(0) }} seconds remaining
        </p>
        <div class="hitw_progress">
            <div class="hitw_progress__bar" :style="'width: '+0+'%;'"></div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    
}
</script>