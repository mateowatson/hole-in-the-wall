export default {
    name: 'BLT',
    plural: 'BLTs',
    image: 'images/blt.png',
    amount: 0,
    cost: 5,
    price: 10,
    reqs: {
        ingredients: [
            { name: 'Bread', amount: 1 },
            { name: 'Bacon', amount: 1 },
            { name: 'Lettuce', amount: 1 },
            { name: 'Tomato', amount: 1 },
            { name: 'Mayo', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
            { name: 'Slice', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Fry', amount: 1 },
        ]
    }
}