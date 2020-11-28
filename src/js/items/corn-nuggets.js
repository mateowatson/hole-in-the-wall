export default {
    name: 'Corn Nuggets',
    plural: 'Corn Nuggets',
    image: '',
    amount: 0,
    cost: 3,
    price: 6,
    reqs: {
        ingredients: [
            { name: 'Corn', amount: 1 },
            { name: 'Milk', amount: 1 },
            { name: 'Flour', amount: 1 },
        ],
        actions: [
            { name: 'Batter', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Fry', amount: 1 },
        ]
    }
}