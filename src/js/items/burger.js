export default {
    name: 'Burger',
    plural: 'Burgers',
    image: 'images/burger.png',
    amount: 0,
    cost: 2,
    price: 8,
    reqs: {
        ingredients: [
            { name: 'Ground Beef', amount: 1 },
            { name: 'Bun', amount: 1 },
        ],
        actions: [
            { name: 'Make Patty', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Grill', amount: 1 },
        ]
    },
}