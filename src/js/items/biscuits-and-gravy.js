export default {
    name: 'Biscuits and Gravy',
    plural: 'Biscuits and Gravys',
    image: '',
    amount: 0,
    cost: 4,
    price: 10,
    reqs: {
        ingredients: [
            { name: 'Milk', amount: 1 },
            { name: 'Flour', amount: 1 },
            { name: 'eggs', amount: 1 },
            { name: 'Onions', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
            { name: 'Roll Dough', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Bake', amount: 1 },
            { name: 'Sautee', amount: 1 },
        ]
    }
}