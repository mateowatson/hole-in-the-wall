<template>
    <SiteContent>
        <h1 class="text-center mt-5">Pay Expenses</h1>

        <div class="my-5">
            <p>
                Your Money:
                <span :class="money >= 0 ? 'badge badge-success' : 'badge badge-danger'">
                    ${{ money.toFixed(2) }}
                </span>
            </p>

            <p v-for="(expense, idx) in expenses" :key="idx+'expense-paye'">
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
    </SiteContent>
</template>

<script>
import { mapState } from "vuex"
import SiteContent from "./layouts/SiteContent";

export default {
    components: { SiteContent },

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