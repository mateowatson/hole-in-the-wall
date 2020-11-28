export default {
    name: 'Red Beans and Rice',
    plural: 'Red Beans and Rice',
    image: '',
    amount: 0,
    cost: 6,
    price: 20,
    reqs: {
        ingredients: [
            { name: 'Sausage', amount: 1 },
            { name: 'Rice', amount: 1 },
            { name: 'Beans', amount: 1 },
            { name: 'Onions', amount: 1 },
            { name: 'Tomatoes', amount: 1 },
            { name: 'Bell Peppers', amount: 1 },
            { name: 'Cajun Seasoning', amount: 1 },
        ],
        actions: [
            { name: 'Chop', amount: 1 },
            { name: 'Mix', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Slow Cook', amount: 1 },
        ]
    }
}