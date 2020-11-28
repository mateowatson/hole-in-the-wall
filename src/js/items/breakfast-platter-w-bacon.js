export default {
    name: 'Breakfast Platter w/ Bacon',
    plural: 'Breakfast Platters w/ Bacon',
    image: 'images/breakfast-platter-w-bacon.png',
    amount: 0,
    cost: 6,
    price: 13,
    reqs: {
        ingredients: [
            { name: 'Flour', amount: 1 },
            { name: 'Milk', amount: 1 },
            { name: 'Bacon', amount: 1 },
            { name: 'Eggs', amount: 1 },
        ],
        actions: [
            { name: 'Stir', amount: 1 },
            { name: 'Roll Dough', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Fry', amount: 1 },
            { name: 'Bake', amount: 1 },
            { name: 'Sautee', amount: 1 },
        ]
    }
}