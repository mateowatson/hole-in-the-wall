export default {
    state: {
        ingredients: [
            {
                name: 'Ground Beef',
                image: 'images/ground-beef.png',
                amount: 0,
            },
            {
                name: 'Bun',
                image: 'images/bun.png',
                amount: 0,
            },
            {
                name: 'Bread',
                image: '',
                amount: 0,
            },
            {
                name: 'Ketchup',
                image: '',
                amount: 0,
            },
        ],

        actions: [
            {
                name: 'Make Patty',
                image: '',
                amount: 0,
            },
        ],

        cookingMethods: [
            {
                name: 'Grill',
                image: '',
                amount: 0,
            },
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

        addedIngredients: [],

        addedActions: [],

        addedCookingMethods: [],
    },


    mutations: {
        m_thing_increment(state, thing) {
            let match = state[thing.type].find((el) => {
                return el.name === thing.name
            })
            if(!match) return
            match.amount++
        }
    },
}