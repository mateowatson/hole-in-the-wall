export default {
    name: 'Chicken and Rice',
    plural: 'Chicken and Rices',
    image: 'images/chicken-and-rice.png',
    amount: 0,
    cost: 6,
    price: 17,
    reqs: {
        ingredients: [
            { name: 'Rice', amount: 1 },
            { name: 'Chicken', amount: 1 },
            { name: 'Cream of Mushroom', amount: 1 },
            { name: 'Bell Peppers', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
            { name: 'Mix', amount: 1 },
            { name: 'Stir', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Boil', amount: 1 },
            { name: 'Bake', amount: 1 },
        ]
    }
}