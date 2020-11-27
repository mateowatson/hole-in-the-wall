<template>
    <div class="border-bottom border-bottom-light container-fluid pt-3 pb-3"
        :class="isPossible ? 'bg-warning text-dark' : ''">
        <div class="row">
            <div class="col-xl-8 d-flex align-items-center"
                :class="isPossible ? 'col-xl-8' : 'col-xl-12'">
                <div>
                    <span class="badge badge-success d-inline-block mb-1">
                        +${{ ticketCost }}
                    </span>
                    <ul class="m-0 pl-3">
                        <li v-for="(item, idx) in ticket.items" :key="idx+'item'">
                            {{ item.qty }}
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-xl-4 d-flex align-items-center justify-content-center"
                v-if="isPossible">
                <button class="btn" style="box-shadow: none;" @click="fulfill">
                    <svg class="bi text-success" width="24" height="24"
                        fill="currentColor">
                        <use xlink:href="images/icons/bootstrap-icons.svg#plus-circle-fill"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    props: ['ticket'],

    computed: {
        isPossible() {
            let isPossible = false

            this.possibleTickets.forEach(possibleTicket => {
                if(possibleTicket.name === this.ticket.name)
                    isPossible = true
            })

            return isPossible
        },

        ticketCost() {
            return this.ticket.items.reduce((acc, item) => {
                return acc = acc + ( item.qty * this.items
                    .find(stateItem => stateItem.name === item.name).price )
            }, 0)
        },

        ...mapState([
            'items'
        ]),

        ...mapGetters([
            'possibleTickets'
        ]),
    },

    methods: {
        fulfill() {
            this.$store.commit('m_ticket_fulfill', {...this.ticket})
        },
    },
}
</script>

