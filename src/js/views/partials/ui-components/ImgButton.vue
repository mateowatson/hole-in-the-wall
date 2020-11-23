<template>
    <button class="d-inline-block btn btn-primary mx-1 my-2 position-relative"
        @mouseover="showTooltip = true" @mouseout="showTooltip = false">
        <img :src="img" :alt="text">
        <Tooltip v-if="showTooltip">
            {{ text }}
        </Tooltip>
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