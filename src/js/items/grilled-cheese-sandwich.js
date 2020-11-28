export default {
    name: 'Grilled Cheese Sandwich',
    plural: 'Grilled Cheese Sandwiches',
    image: '',
    amount: 0,
    cost: 1,
    price: 3,
    reqs: {
        ingredients: [
            { name: 'Cheddar Cheese', amount: 1 },
            { name: 'Bread', amount: 1 },
        ],
        actions: [],
        cookingMethods: [
            { name: 'Grill', amount: 1 },
        ]
    }
}