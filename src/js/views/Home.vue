<template>
    <SiteContent>
        <h1 class="text-center mt-5">Hole in the Wall</h1>
        <img src="https://via.placeholder.com/600x400" alt="Hole in the Wall"
            class="d-block position-relative mw-100 mx-auto pt-3 pb-3">
        
        <SiteNav />

        <SiteFooter />
    </SiteContent>
</template>

<script>
import SiteNav from './partials/components/SiteNav'
import SiteFooter from './partials/components/SiteFooter'
import SiteContent from "./layouts/SiteContent";

export default {
    components: { SiteNav, SiteFooter, SiteContent }
}
</script>