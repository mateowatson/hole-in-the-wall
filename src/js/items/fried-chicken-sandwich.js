export default {
    name: 'Fried Chicken Sandwich',
    plural: 'Fried Chicken Sandwiches',
    image: 'images/fried-chicken-sandwich.png',
    amount: 0,
    cost: 4,
    price: 10,
    reqs: {
        ingredients: [
            { name: 'Chicken', amount: 1 },
            { name: 'Flour', amount: 1 },
            { name: 'Milk', amount: 1 },
            { name: 'Egg', amount: 1 },
            { name: 'Bun', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
            { name: 'Batter', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Fry', amount: 1 },
        ]
    }
}