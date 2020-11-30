<template>
    <SiteContent>
        <h1 class="text-center my-5">Menu</h1>

        <h2>Current Offerings</h2>
        <hr>
        <div class="container-fluid">
            <ul class="row list-unstyled">
                <MenuItem v-for="(item, itemIdx) in alphaItems" :key="itemIdx+'item-menu'"
                    :item="item" />
            </ul>

            <div class="row">
                <div class="col-12 position-relative">
                    <h2>Upgrade</h2>
                    <hr>
                    <div class="sticky-top bg-white pt-3 pb-3">
                        <p class="p-0 m-0">
                            Your Money:
                            <span :class="money >= 0 ? 'badge badge-success' : 'badge badge-danger'">
                                ${{ money.toFixed(2) }}
                            </span>
                        </p>
                    </div>
                    <h3>Ingredients</h3>
                    <BuyThing v-for="(ingredient, idx) in ingredients"
                        :key="idx+'ing-buy'" :thing="ingredient" :type="'ingredients'" />

                    <h3>Actions</h3>
                    <BuyThing v-for="(action, idx) in actions"
                        :key="idx+'act-buy'" :thing="action" :type="'actions'" />

                    <h3>Cooking Methods</h3>
                    <BuyThing v-for="(cookingMethod, idx) in cookingMethods"
                        :key="idx+'coo-buy'" :thing="cookingMethod"
                        :type="'cookingMethods'" />
                </div>
            </div>
        </div>
        
    </SiteContent>
</template>

<script>
import { mapState } from "vuex"
import { mapGetters } from "vuex"
import SiteContent from "./layouts/SiteContent"
import MenuItem from "./partials/components/MenuItem"
import BuyThing from "./partials/components/BuyThing"

export default {
    components: { SiteContent, MenuItem, BuyThing },

    computed: {
        alphaItems() {
            return this.itemsOffered.sort(function(a, b) {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        },

        ...mapState([
            'items','ingredients','actions','cookingMethods','money'
        ]),

        ...mapGetters([
            'itemsOffered'
        ]),
    },
};
</script>