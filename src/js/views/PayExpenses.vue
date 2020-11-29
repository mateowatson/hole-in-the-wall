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

            <p>
                <button class="btn btn-primary">
                    Pay Business Manager:
                    <span class="badge badge-danger">
                        -$25
                    </span>
                </button>
            </p>

            <p>
                <button class="btn btn-primary disabled"
                    style="pointer-events: none;">
                    Pay Waiter:
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

    computed: {
        ...mapState([
            'money',
        ]),
    },
};
</script>