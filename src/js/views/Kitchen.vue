<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-xl-2 p-0 position-fixed vh-100 overflow-auto bg-dark text-light">
            <h2 class="h5 p-3">Tickets</h2>
            <Ticket v-for="(ticket, idx) in tickets" :key="idx+'tick'" :ticket="ticket" />
        </div>

        <div class="col-xl-2 offset-xl-2 position-fixed vh-100 overflow-auto
            border-right">
            <h2 class="h5 pt-3">Items</h2>

            <ul>
                <ThingAmount v-for="(item, idx) in items" :key="idx+'item-amt'"
                    :thing="item" :type="'items'" />
            </ul>

            <h2 class="h5 pt-3">Possible Items</h2>

            <ImgButton v-for="(possibleItem, idx) in possibleItems"
                :key="idx+'pi'" :thing="possibleItem"
                :type="'items'" />
        </div>

        <div class="col-xl-8 offset-xl-4">
            <h2 class="h6 mt-3">
                Money:
                <span :class="money >= 0 ? 'badge badge-success' : 'badge badge-danger'">
                    ${{ money.toFixed(2) }}
                </span>
            </h2>

            <div class="card mt-3">
                <div class="card-body">
                    <h2 class="h6">
                        Ingredients
                    </h2>

                    <ImgButton v-for="(ingredient, idx) in ingredients"
                        :key="idx+'ing'" :thing="ingredient"
                        :type="'ingredients'" />
                </div>
            </div>

            <div class="card mt-3">
                <div class="card-body">
                    <h2 class="h6">
                        Actions
                    </h2>

                    <ImgButton v-for="(action, idx) in actions"
                        :key="idx+'act'" :thing="action"
                        :type="'actions'" />
                </div>
            </div>

            <div class="card mt-3">
                <div class="card-body">
                    <h2 class="h6">
                        Cook
                    </h2>

                    <ImgButton v-for="(cookingMethod, idx) in cookingMethods"
                        :key="idx+'coo'" :thing="cookingMethod"
                        :type="'cookingMethods'" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ImgButton from './partials/ui-components/ImgButton'
import Ticket from './partials/ui-components/Ticket'
import ThingAmount from './partials/ui-components/ThingAmount'

export default {
    computed: {
        ...mapState([
            'ingredients','tickets','items','actions','cookingMethods','money'
        ]),
        ...mapGetters([
            'possibleItems'
        ]),
    },

    components: { ImgButton, Ticket, ThingAmount }
}
</script>