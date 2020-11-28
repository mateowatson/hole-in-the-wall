export default {
    name: 'English Breakfast',
    plural: 'English Breakfasts',
    image: 'images/english-breakfast.png',
    amount: 0,
    cost: 8,
    price: 20,
    reqs: {
        ingredients: [
            { name: 'Flour', amount: 1 },
            { name: 'Milk', amount: 1 },
            { name: 'Bacon', amount: 1 },
            { name: 'Sausage', amount: 1 },
            { name: 'Beans', amount: 1 },
            { name: 'Tomatoes', amount: 1 },
            { name: 'Onions', amount: 1 },
            { name: 'Eggs', amount: 1 },
        ],
        actions: [
            { name: 'Stir', amount: 1 },
            { name: 'Roll Dough', amount: 1 },
            { name: 'Mix', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Fry', amount: 1 },
            { name: 'Bake', amount: 1 },
            { name: 'Sautee', amount: 1 },
        ]
    }
}