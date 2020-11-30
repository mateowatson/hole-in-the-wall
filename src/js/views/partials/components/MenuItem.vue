<template>
    <li class="col-12 col-sm-6 col-lg-4 mb-3">
        <span class="d-block text-center">
            <img class="d-inline-block" :src="item.image" :alt="item.name">
        </span>
        <span class="d-block text-center">
            {{ item.name }}, ${{ item.price }}
        </span>
        <span class="label small d-block text-center font-weight-bold">
            Recipe
        </span>
        <span class="d-block text-center">
            <span class="label small d-block">Ingredients:</span>
            <span v-for="(ingredient, ingIdx) in item.reqs.ingredients"
                :key="ingIdx+'ing-mi'"
                class="small text-muted">
                +{{ingredient.amount}}&nbsp;{{ingredient.name}},
            </span>
        </span>
        <span class="d-block text-center">
            <span class="label small d-block">Actions:</span>
            <span v-for="(action, actIdx) in item.reqs.actions"
                :key="actIdx+'act-mi'"
                class="small text-muted">
                +{{action.amount}}&nbsp;{{action.name}},
            </span>
        </span>
        <span class="d-block text-center">
            <span class="label small d-block">Cook:</span>
            <span v-for="(cookingMethod, cookIdx) in item.reqs.cookingMethods"
                :key="cookIdx+'cook-mi'"
                class="small text-muted">
                +{{cookingMethod.amount}}&nbsp;{{cookingMethod.name}},
            </span>
        </span>
    </li>
</template>

<script>
export default {
    props: ['item'],
}
</script>