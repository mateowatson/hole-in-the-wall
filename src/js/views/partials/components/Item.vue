<template>
    <transition name="fade">
        <li v-if="thing.amount" class="d-inline-block position-relative">
            {{ thing.amount }}
            <img :src="thing.image" :alt="thing.name"
                @mouseenter="showTooltip = true" @mouseleave="showTooltip = false"
                class="d-inline-block">
                <Tooltip v-if="showTooltip">
                    {{ thing.name }}
                </Tooltip>
        </li>
    </transition>
</template>

<script>
import Tooltip from './Tooltip'

export default {
    props: ['thing', 'type'],

    data() {
        return {
            showTooltip: false
        }
    },
    
    components: { Tooltip }
}
</script>