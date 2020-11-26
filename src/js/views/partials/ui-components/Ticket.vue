<template>
    <div class="border-bottom border-bottom-light p-3">
        <ul class="m-0 pt-0 pb-0 pr-0 pl-3">
            <li v-for="(item, idx) in ticket" :key="idx+'item'" class="m-0 p-0">
                {{ item.qty }}
                {{ item.item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['ticket'],
}
</script>

