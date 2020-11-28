export default {
    name: 'Chicken Salad',
    plural: 'Chicken Salads',
    image: 'images/chicken-salad.png',
    amount: 0,
    cost: 5,
    price: 13,
    reqs: {
        ingredients: [
            { name: 'Chicken', amount: 1 },
            { name: 'Bell Peppers', amount: 1 },
            { name: 'Mayo', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
            { name: 'Blend', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Boil', amount: 1 },
        ]
    }
}