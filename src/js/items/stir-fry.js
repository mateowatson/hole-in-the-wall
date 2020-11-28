export default {
    name: 'Stir Fry',
    plural: 'Stir Frys',
    image: 'images/stir-fry.png',
    amount: 0,
    cost: 5,
    price: 11,
    reqs: {
        ingredients: [
            { name: 'Rice', amount: 1 },
            { name: 'Onions', amount: 1 },
            { name: 'Bell Peppers', amount: 1 },
            { name: 'Green Beans', amount: 1 },
            { name: 'Corn', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Boil', amount: 1 },
            { name: 'Sautee', amount: 1 },
        ]
    }
}