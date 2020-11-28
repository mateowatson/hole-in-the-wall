export default {
    name: 'Fried Chicken Salad',
    plural: 'Fried Chicken Salads',
    image: '',
    amount: 0,
    cost: 5,
    price: 10,
    reqs: {
        ingredients: [
            { name: 'Lettuce', amount: 1 },
            { name: 'Tomatoes', amount: 1 },
            { name: 'Chicken', amount: 1 },
            { name: 'Flour', amount: 1 },
            { name: 'Milk', amount: 1 },
            { name: 'Egg', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
            { name: 'Slice', amount: 1 },
            { name: 'Batter', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Fry', amount: 1 },
        ]
    }
}