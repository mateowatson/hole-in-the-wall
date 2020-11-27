<template>
    <div class="mt-1 d-flex align-items-center justify-content-center">
        <span class="badge badge-dark mr-1">{{ thing.amount }}</span>

        <button class="badge badge-danger border-0 ml-1" @click.stop="decrementThing"
            v-if="thing.amount">
            -
        </button>
    </div>
</template>

<script>
export default {
    props: ['thing', 'type'],

    methods: {
        decrementThing() {
            this.$store.commit('m_thing_decrement', {
                type: this.type,
                ...this.thing
            })
        },
    },
}
</script>