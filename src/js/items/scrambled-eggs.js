export default {
    name: 'Scrambled Eggs',
    plural: 'Scrambled Eggs',
    image: 'images/scrambled-eggs.png',
    amount: 0,
    cost: 2,
    price: 4,
    reqs: {
        ingredients: [
            { name: 'Eggs', amount: 1 },
            { name: 'Milk', amount: 1 },
        ],
        actions: [
            { name: 'Stir', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Sautee', amount: 1 },
        ]
    }
}