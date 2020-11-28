export default {
    name: 'Deluxe Bacon Cheeseburger',
    plural: 'Deluxe Bacon Cheeseburger',
    image: 'images/cheeseburger.png',
    amount: 0,
    cost: 4,
    price: 10,
    reqs: {
        ingredients: [
            { name: 'Ground Beef', amount: 1 },
            { name: 'Bun', amount: 1 },
            { name: 'Cheddar Cheese', amount: 1 },
        ],
        actions: [
            { name: 'Slice', amount: 1 },
            { name: 'Make Patty', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Grill', amount: 1 },
        ]
    }
}