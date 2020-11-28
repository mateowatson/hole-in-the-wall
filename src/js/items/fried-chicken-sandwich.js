export default {
    name: 'Fried Chicken Sandwich',
    plural: 'Fried Chicken Sandwiches',
    image: '',
    amount: 0,
    cost: 4,
    price: 10,
    reqs: {
        ingredients: [
            { name: 'Chicken', amount: 1 },
            { name: 'Bun', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Fry', amount: 1 },
        ]
    }
}