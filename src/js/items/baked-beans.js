export default {
    name: 'Baked Beans',
    plural: 'Baked Beans',
    image: '',
    amount: 0,
    cost: 8,
    price: 20,
    reqs: {
        ingredients: [
            { name: 'Beans', amount: 1 },
            { name: 'Tomatoes', amount: 1 },
            { name: 'Onions', amount: 1 },
        ],
        actions: [
            { name: 'Mix', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Bake', amount: 1 },
        ]
    }
}