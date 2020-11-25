<template>
    <li class="m-0 p-0">
        {{ item.qty }}
        {{ item.qty === 1 ? item.item : plural }}
    </li>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: ['item'],

    computed: {
        plural() {
            const itemObj = this.items.find((el, idx, arr) => {
                return el.name === this.item.item
            })

            if(itemObj && itemObj.plural) return itemObj.plural

            return this.item.item 
        },

        ...mapState([
            'items',
        ])
    }
}
</script>