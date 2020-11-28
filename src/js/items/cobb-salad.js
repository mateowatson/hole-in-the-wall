export default {
    name: 'Cobb Salad',
    plural: 'Cobb Salads',
    image: '',
    amount: 0,
    cost: 3,
    price: 8,
    reqs: {
        ingredients: [
            { name: 'Lettuce', amount: 1 },
            { name: 'Tomatoes', amount: 1 },
            { name: 'Egg', amount: 1 },
            { name: 'Bleu Cheese', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
            { name: 'Slice', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Boil', amount: 1 },
        ]
    }
}