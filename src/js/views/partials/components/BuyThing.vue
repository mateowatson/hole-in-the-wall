<template>
    <button class="btn btn-success mr-3 mb-3"
        :class="!canBuy ? 'disabled' : ''"
        :style="!canBuy ? 'pointer-events: none;' : ''"
        @click="buyThing">
        <span>
            ${{ thing.cost }} - {{ thing.name }} {{thing.stocked ? '(owned!)' : ''}}
        </span>
        <img :src="thing.image" alt="thing.name">
    </button>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: ['thing', 'type'],

    computed: {
        canBuy() {
            return !this.thing.stocked && this.money >= this.thing.cost
        },

        ...mapState([
            'money'
        ]),
    },

    methods: {
        buyThing() {
            if(!this.canBuy) return
            this.$store.commit('m_buy_thing', {
                type: this.type,
                ...this.thing
            })
        },
    },
}
</script>