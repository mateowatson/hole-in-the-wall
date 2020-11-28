export default {
    name: 'Chicken Salad Sandwich',
    plural: 'Chicken Salad Sandwiches',
    image: '',
    amount: 0,
    cost: 5,
    price: 15,
    reqs: {
        ingredients: [
            { name: 'Chicken', amount: 1 },
            { name: 'Bell Peppers', amount: 1 },
            { name: 'Mayo', amount: 1 },
            { name: 'Bread', amount: 1 },
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