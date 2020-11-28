export default {
    name: 'House Salad',
    plural: 'House Salads',
    image: 'images/house-salad.png',
    amount: 0,
    cost: 2,
    price: 3,
    reqs: {
        ingredients: [
            { name: 'Lettuce', amount: 1 },
            { name: 'Tomatoes', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
            { name: 'Slice', amount: 1 },
        ],
        cookingMethods: []
    }
}