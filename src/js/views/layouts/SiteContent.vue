<template>
    <div class="bg-dark">
        <div class="container bg-white min-vh-100">
            <div class="row">
                <div class="col col-lg-8 offset-lg-2">
                    <p class="my-5">
                        <router-link to="/" class="lead">Home</router-link>
                    </p>
                    <slot></slot>

                    <SiteNav />
                    <SiteFooter />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SiteNav from "../partials/components/SiteNav";
import SiteFooter from "../partials/components/SiteFooter";

export default {
    components: { SiteNav, SiteFooter },
};
</script>