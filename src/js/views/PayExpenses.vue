<template>
    <SiteContent>
        <p class="my-5">
            <router-link to="/" class="lead">Main Menu</router-link>
        </p>

        <h1 class="text-center mt-5">Pay Expenses</h1>

        <div class="my-5">
            <p>
                Your Money:
                <span :class="money >= 0 ? 'badge badge-success' : 'badge badge-danger'">
                    ${{ money.toFixed(2) }}
                </span>
            </p>

            <p v-for="(expense, idx) in expenses" :key="idx+'expense'">
                <button class="btn btn-primary" v-if="expense.due > 0"
                    @click="payExpense(expense)">
                    Pay {{ expense.name }}:
                    <span class="badge badge-danger">
                        -${{ expense.due }}
                    </span>
                </button>
                <button v-else class="btn btn-primary disabled"
                    style="pointer-events: none;">
                    {{ expense.name }}:
                    <span class="badge badge-success">
                        All paid up!
                    </span>
                </button>
            </p>
        </div>

        <SiteNav />

        <SiteFooter />
    </SiteContent>
</template>

<script>
import { mapState } from "vuex"
import SiteNav from "./partials/components/SiteNav";
import SiteFooter from "./partials/components/SiteFooter";
import SiteContent from "./layouts/SiteContent";

export default {
    components: { SiteNav, SiteFooter, SiteContent },

    methods: {
        payExpense(expense) {
            this.$store.commit('m_pay_per_day_expense', expense)
        },
    },

    computed: {
        ...mapState([
            'money','expenses'
        ]),
    },
};
</script>