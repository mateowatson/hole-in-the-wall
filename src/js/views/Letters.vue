<template>
    <SiteContent>
        <div class="text-monospace pt-3">
            <div>
                <p>Dear nephew,</p>

                    <p>
                        If you are reading this message, it means I have passed
                        on. I left your cousins all my Lamborghinis and mansions, but you
                        get my most prized possession: Hole in the Wall, the
                        restaurant I never got to open. My dying wish is for you
                        to get it going once and for all. I know you are no chef, so
                        just learn one meal at a time. I recommend starting with
                        burgers and fries. You are not likely to succeed, but if
                        anyone can do it, that person's gonna be you, my most responsible
                        nephew!
                    </p>

                    <p>
                        Love,
                        Uncle Joe
                    </p>
            </div>

            <div>
                <p>Dear son,</p>

                <p>
                    If you are reading this message, it means I have passed
                    on. I left your cousins all my Lamborghinis and mansions, but you
                    get my most prized possession: Hole in the Wall, the
                    restaurant I never got to open. My dying wish is for you
                    to get it going once and for all. I know you are no chef, so
                    just learn one meal at a time. I recommend starting with
                    burgers and fries. You are not likely to succeed, but if
                    anyone can do it, that person's gonna be you, my most responsible
                    nephew!
                </p>

                <p>
                    Love,
                    Uncle Joe
                </p>
            </div>
        </div>
    </SiteContent>
</template>


<script>
import { mapState } from 'vuex'
import SiteContent from "./layouts/SiteContent"

export default {
    computed: {
        ...mapState([
            'money'
        ]),
    },
}
</script>