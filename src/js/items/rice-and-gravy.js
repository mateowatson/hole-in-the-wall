export default {
    name: 'Rice and Gravy',
    plural: 'Rice and Gravys',
    image: '',
    amount: 0,
    cost: 4,
    price: 8,
    reqs: {
        ingredients: [
            { name: 'Flour', amount: 1 },
            { name: 'Rice', amount: 1 },
            { name: 'Onions', amount: 1 },
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