<template>
    <div class="border-bottom border-bottom-light p-3">
        <ul class="m-0 pt-0 pb-0 pr-0 pl-3">
            <TicketItem v-for="(item, idx) in ticket"
                :key="idx+'item'" :item="item" />
        </ul>
    </div>
</template>

<script>
import TicketItem from './TicketItem'

export default {
    props: ['ticket'],

    components: { TicketItem }
}
</script>

