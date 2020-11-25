<template>
    <button class="d-inline-block btn btn-primary mx-1 my-2 position-relative"
        @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
        <img :src="img" :alt="text" class="position-relative">
        <transition name="hitw_tooltip-up">
            <Tooltip v-if="showTooltip">
                {{ text }}
            </Tooltip>
        </transition>
    </button>
</template>

<script>
import Tooltip from './Tooltip'

export default {
    data() {
        return {
            showTooltip: false
        }
    },
    props: ['img', 'text'],
    components: { Tooltip }
}
</script>