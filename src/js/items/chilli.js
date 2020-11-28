export default {
    name: 'Chilli',
    plural: 'Chillis',
    image: '',
    amount: 0,
    cost: 5,
    price: 12,
    reqs: {
        ingredients: [
            { name: 'Ground Beef', amount: 1 },
            { name: 'Beans', amount: 1 },
            { name: 'Corn', amount: 1 },
            { name: 'Bell Peppers', amount: 1 },
            { name: 'Onions', amount: 1 },
            { name: 'Ketchup', amount: 1 },
            { name: 'Tomatoes', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
            { name: 'Mix', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Slow Cook', amount: 1 },
        ]
    }
}