<template>
    <SiteContent>
        <h1 class="text-center my-5">Menu</h1>

        <h2>Current Offerings</h2>

        <div class="container-fluid">
            <ul class="row list-unstyled">
                <MenuItem v-for="(item, itemIdx) in alphaItems" :key="itemIdx+'item-menu'"
                    :item="item" />
            </ul>
        </div>
        
    </SiteContent>
</template>

<script>
import { mapState } from "vuex"
import { mapGetters } from "vuex"
import SiteContent from "./layouts/SiteContent"
import MenuItem from "./partials/components/MenuItem"

export default {
    components: { SiteContent, MenuItem },

    computed: {
        alphaItems() {
            return this.itemsOffered.sort(function(a, b) {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        },

        ...mapState([
            'items','ingredients','actions','cookingMethods'
        ]),

        ...mapGetters([
            'itemsOffered'
        ]),
    },
};
</script>