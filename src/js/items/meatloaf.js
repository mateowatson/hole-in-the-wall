export default {
    name: 'Meatloaf',
    plural: 'Meatloafs',
    image: 'images/meatloaf.png',
    amount: 0,
    cost: 4,
    price: 10,
    reqs: {
        ingredients: [
            { name: 'Ground Beef', amount: 1 },
            { name: 'Bread', amount: 1 },
            { name: 'Ketchup', amount: 1 },
        ],
        actions: [
            { name: 'Mix', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Bake', amount: 1 },
        ]
    }
}