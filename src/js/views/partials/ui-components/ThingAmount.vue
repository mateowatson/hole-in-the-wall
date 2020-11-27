<template>
    <transition name="fade">
        <li v-if="thing.amount" class="d-inline-block">
            <span class="d-inline-block btn btn-primary mx-1 my-2 position-relative"
                @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
                <img :src="thing.image" :alt="thing.name" class="position-relative">

                <span class="badge badge-dark position-absolute"
                    style="top: 0; left: 0; transform: translate(-50%, -50%);">
                    {{ thing.amount }}
                </span>

                <transition name="hitw_tooltip-up">
                    <Tooltip v-if="showTooltip">
                        {{ thing.name }}
                    </Tooltip>
                </transition>
            </span>
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