export default {
    name: 'Green Bean Cassarole',
    plural: 'Green Bean Cassaroles',
    image: 'images/green-bean-cassarole.png',
    amount: 0,
    cost: 4,
    price: 10,
    reqs: {
        ingredients: [
            { name: 'Green Beans', amount: 1 },
            { name: 'Onions', amount: 1 },
            { name: 'Cream of Mushroom', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
            { name: 'Mix', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Bake', amount: 1 },
        ]
    }
}