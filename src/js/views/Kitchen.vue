<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-xl-3 p-0 position-fixed vh-100 overflow-auto bg-dark text-light">
            <Ticket v-for="(ticket, idx) in tickets"
                :key="idx" :ticket="ticket" />
        </div>

        <div class="col-xl-9 offset-xl-3">
            <div class="card mt-3">
                <div class="card-body">
                    <h2 class="card-title">
                        Ingredients
                    </h2>

                    <ImgButton v-for="(ingredient, idx) in ingredients"
                        :key="idx" :img="ingredient.image" :text="ingredient.name" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import ImgButton from './partials/ui-components/ImgButton'
import Ticket from './partials/ui-components/Ticket'

export default {
    computed: mapState([
        'ingredients','tickets','items',
    ]),

    components: { ImgButton, Ticket }
}
</script>