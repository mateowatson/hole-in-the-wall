export default {
    name: 'Sloppy Joe',
    plural: 'Sloppy Joes',
    image: 'images/sloppy-joe.png',
    amount: 0,
    cost: 3,
    price: 9,
    reqs: {
        ingredients: [
            { name: 'Ground Beef', amount: 1 },
            { name: 'Ketchup', amount: 1 },
            { name: 'Bun', amount: 1 },
        ],
        actions: [
            { name: 'Mix', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Sautee', amount: 1 },
        ]
    }
}