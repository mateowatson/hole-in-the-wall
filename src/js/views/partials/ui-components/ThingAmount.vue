<template>
    <transition name="fade">
        <li v-if="thing.amount">
            {{ thing.amount }}
            {{ thing.name }}
            <button class="badge badge-danger border-0" @click="decrementAmount"
                v-if="'items' !== type">
                -1
            </button>
        </li>
    </transition>
</template>

<script>
export default {
    props: ['thing', 'type'],

    methods: {
        decrementAmount() {
            this.$store.commit('m_thing_decrement', {
                type: this.type,
                ...this.thing
            })
        },
    },
}
</script>