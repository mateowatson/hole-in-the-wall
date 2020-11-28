<template>
    <li class="position-relative">
        {{ ticketItem.qty }}
        <img :src="image" :alt="ticketItem.name"
            @mouseenter="showTooltip = true" @mouseleave="showTooltip = false"
            class="d-inline-block">
        <Tooltip v-if="showTooltip">
            {{ ticketItem.name }}
        </Tooltip>
    </li>
</template>

<script>
import { mapState } from 'vuex'
import Tooltip from './Tooltip'

export default {
    props: ['ticketItem'],

    data() {
        return {
            showTooltip: false
        }
    },

    computed: {
        image() {
            return this.items.reduce((acc, item) => {
                if(this.ticketItem.name === item.name)
                    acc = item.image
                return acc
            }, '')
        },

        ...mapState([
            'items'
        ]),
    },

    components: { Tooltip },
}
</script>