export default {
    name: 'Deluxe Bacon Cheeseburger',
    plural: 'Deluxe Bacon Cheeseburger',
    image: '',
    amount: 0,
    cost: 6,
    price: 13,
    reqs: {
        ingredients: [
            { name: 'Ground Beef', amount: 1 },
            { name: 'Bun', amount: 1 },
            { name: 'Cheddar Cheese', amount: 1 },
            { name: 'Bacon', amount: 1 },
            { name: 'Mayo', amount: 1 },
            { name: 'Lettuce', amount: 1 },
            { name: 'Tomatoes', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
            { name: 'Slice', amount: 1 },
            { name: 'Make Patty', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Grill', amount: 1 },
        ]
    }
}