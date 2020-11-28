export default {
    name: 'French Fries',
    plural: 'French Fries',
    image: '',
    amount: 0,
    cost: 1,
    price: 3,
    reqs: {
        ingredients: [
            { name: 'Potatoes', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Fry', amount: 1 },
        ]
    }
}