export default {
    name: 'Omelet',
    plural: 'Omelets',
    image: '',
    amount: 0,
    cost: 1,
    price: 5,
    reqs: {
        ingredients: [
            { name: 'Egg', amount: 1 },
            { name: 'Cheddar Cheese', amount: 1 },
            { name: 'Milk', amount: 1 },
            { name: 'Bell Peppers', amount: 1 },
        ],
        actions: [
            { name: 'Mix', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Sautee', amount: 1 },
        ]
    }
}