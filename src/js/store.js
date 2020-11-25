export default {
    state: {
        ingredients: [
            {
                name: 'Ground Beef',
                image: 'images/ground-beef.png'
            },
            {
                name: 'Bun',
                image: 'images/bun.png',
            },
            {
                name: 'Bread',
                image: '',
            },
            {
                name: 'Ketchup',
                image: '',
            },
        ],

        actions: [
            'Make Patty',
        ],

        cookingMethods: [
            'Grill'
        ],

        items: [
            {
                name: 'Burger',
                plural: 'Burgers',
                reqs: {
                    ingredients: [
                        'Ground Beef', 'Bun'
                    ],
                    actions: [
                        'Make Patty'
                    ],
                    cookingMethods: [
                        'Grill'
                    ]
                },
                postIngredients: [
                    'Ketchup', 'Cheese'
                ]
            },
            {
                name: 'Meatloaf',
                plural: 'Meatloafs',
                reqs: {
                    ingredients: [
                        'Ground Beef', 'Bread', 'Ketchup'
                    ],
                    actions: [
                        'Mix'
                    ],
                    cookingMethods: [
                        'Bake'
                    ]
                }
            },
        ],

        tickets: [
            [
                {
                    item: 'Burger',
                    qty: 1
                },
                {
                    item: 'Meatloaf',
                    qty: 3
                }
            ]
        ],
    },

    mutations: {
        
    },
}