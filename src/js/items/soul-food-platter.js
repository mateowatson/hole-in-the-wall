export default {
    name: 'Soul Food Platter',
    plural: 'Soul Food Platters',
    image: 'images/soul-food-platter.png',
    amount: 0,
    cost: 8,
    price: 18,
    reqs: {
        ingredients: [
            { name: 'Potatoes', amount: 1 },
            { name: 'Corn', amount: 1 },
            { name: 'Green Beans', amount: 1 },
            { name: 'Milk', amount: 1 },
            { name: 'Flour', amount: 1 },
            { name: 'Chicken', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
            { name: 'Roll Dough', amount: 1 },
            { name: 'Mash', amount: 1 },
            { name: 'Batter', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Fry', amount: 1 },
            { name: 'Sautee', amount: 1 },
            { name: 'Bake', amount: 1 },
        ]
    }
}