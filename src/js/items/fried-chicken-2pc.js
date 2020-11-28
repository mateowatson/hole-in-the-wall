export default {
    name: 'Fried Chicken 2pc',
    plural: 'Fried Chicken 2pc',
    image: 'images/fried-chicken-2pc.png',
    amount: 0,
    cost: 3,
    price: 9,
    reqs: {
        ingredients: [
            { name: 'Chicken', amount: 1 },
            { name: 'Flour', amount: 1 },
            { name: 'Milk', amount: 1 },
            { name: 'Egg', amount: 1 },
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