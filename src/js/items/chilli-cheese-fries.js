export default {
    name: 'Chilli Cheese Fries',
    plural: 'Chilli Cheese Fries',
    image: 'images/chilli-cheese-fries.png',
    amount: 0,
    cost: 6,
    price: 16,
    reqs: {
        ingredients: [
            { name: 'Ground Beef', amount: 1 },
            { name: 'Beans', amount: 1 },
            { name: 'Corn', amount: 1 },
            { name: 'Bell Peppers', amount: 1 },
            { name: 'Onions', amount: 1 },
            { name: 'Ketchup', amount: 1 },
            { name: 'Tomatoes', amount: 1 },
            { name: 'Potatoes', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
            { name: 'Mix', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Slow Cook', amount: 1 },
            { name: 'Fry', amount: 1 },
        ]
    }
}