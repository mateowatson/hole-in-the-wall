export default {
    name: 'Hamburger Steak',
    plural: 'Hamburger Steaks',
    image: 'images/hamburger-steak.png',
    amount: 0,
    cost: 3,
    price: 9,
    reqs: {
        ingredients: [
            { name: 'Ground Beef', amount: 1 },
            { name: 'Flour', amount: 1 },
            { name: 'Onions', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Sautee', amount: 1 },
        ]
    }
}