export default {
    name: 'Baked Potato',
    plural: 'Baked Potatoes',
    image: 'images/baked-potato.png',
    amount: 0,
    cost: 1,
    price: 3,
    reqs: {
        ingredients: [
            { name: 'Potatoes', amount: 1 },
        ],
        actions: [],
        cookingMethods: [
            { name: 'Bake', amount: 1 },
        ]
    }
}