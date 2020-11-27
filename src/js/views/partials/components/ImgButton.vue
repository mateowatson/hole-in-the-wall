<template>
    <button class="d-inline-block btn btn-primary mx-1 my-2 position-relative"
        @mouseenter="showTooltip = true" @mouseleave="showTooltip = false"
        @click="incrementAmount">
        <img :src="thing.image" :alt="thing.name" class="position-relative">
        <transition name="hitw_tooltip-up">
            <Tooltip v-if="showTooltip">
                {{ thing.name }}
            </Tooltip>
        </transition>
        <span v-if="'items' === type"
            class="badge badge-danger position-absolute"
            style="top: 0; left: 0; transform: translate(-50%, -50%);">
            -${{ thing.cost }}
        </span>
        <ButtonAmount v-if="'items' !== type" :thing="thing" :type="type" />
    </button>
</template>

<script>
import Tooltip from './Tooltip'
import ButtonAmount from './ButtonAmount'

export default {
    props: ['thing', 'type'],
    data() {
        return {
            showTooltip: false
        }
    },
    methods: {
        incrementAmount() {
            this.$store.commit('m_thing_increment', {
                type: this.type,
                ...this.thing
            })
        },
    },
    components: { Tooltip, ButtonAmount }
}
</script>