export default {
    name: 'Tomato Sandwich',
    plural: 'Tomato Sandwich',
    image: '',
    amount: 0,
    cost: 2,
    price: 4,
    reqs: {
        ingredients: [
            { name: 'Tomatoes', amount: 1 },
            { name: 'Mayo', amount: 1 },
            { name: 'Bread', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
        ],
        cookingMethods: []
    }
}