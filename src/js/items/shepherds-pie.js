export default {
    name: 'Shepherds Pie',
    plural: 'Shepherds Pies',
    image: 'images/shepherds-pie.png',
    amount: 0,
    cost: 4,
    price: 10,
    reqs: {
        ingredients: [
            { name: 'Ground Beef', amount: 1 },
            { name: 'Corn', amount: 1 },
            { name: 'Green Beans', amount: 1 },
            { name: 'Bell Peppers', amount: 1 },
            { name: 'Potatoes', amount: 1 },
        ],
        actions: [
            { name: 'Mix', amount: 1 },
            { name: 'Mash', amount: 1 },
        ],
        cookingMethods: [
            { name: 'Boil', amount: 1 },
            { name: 'Sautee', amount: 1 },
        ]
    }
}