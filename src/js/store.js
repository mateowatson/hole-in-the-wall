export default {
    state: {
        money: 300.00,

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
            {
                name: 'Mix',
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
            {
                name: 'Bake',
                image: '',
                amount: 0,
            },
        ],

        items: [
            {
                name: 'Burger',
                plural: 'Burgers',
                image: '',
                amount: 0,
                cost: 2,
                price: 8,
                reqs: {
                    ingredients: [
                        { name: 'Ground Beef', amount: 1 },
                        { name: 'Bun', amount: 1 },
                    ],
                    actions: [
                        { name: 'Make Patty', amount: 1 },
                    ],
                    cookingMethods: [
                        { name: 'Grill', amount: 1 },
                    ]
                },
                postIngredients: [
                    'Ketchup', 'Cheese'
                ]
            },
            {
                name: 'Meatloaf',
                plural: 'Meatloafs',
                image: '',
                amount: 0,
                cost: 4,
                price: 10,
                reqs: {
                    ingredients: [
                        { name: 'Ground Beef', amount: 1 },
                        { name: 'Bread', amount: 1 },
                        { name: 'Ketchup', amount: 1 },
                    ],
                    actions: [
                        { name: 'Mix', amount: 1 },
                    ],
                    cookingMethods: [
                        { name: 'Bake', amount: 1 },
                    ]
                }
            },
        ],

        tickets: [
            {
                name: '20201126205534',
                items: [
                    { name: 'Burger', qty: 1 },
                ],
            },
            {
                name: '20201126085728',
                items: [
                    { name: 'Burger', qty: 1 },
                    { name: 'Meatloaf', qty: 3 }
                ],
            },
            {
                name: '20201126105733',
                items: [
                    { name: 'Burger', qty: 3 },
                    { name: 'Meatloaf', qty: 2 }
                ],
            }
        ],

        addedIngredients: [],

        addedActions: [],

        addedCookingMethods: [],
    },


    mutations: {
        m_ticket_fulfill(state, ticket) {
            state.tickets = state.tickets.filter(stateTicket => {
                return stateTicket.name !== ticket.name
            })
            // Remove items
            ticket.items.forEach(item => {
                state.items.forEach(stateItem => {
                    if(item.name === stateItem.name)
                        stateItem.amount -= item.qty
                })
            })
            // Add profit
            let ticketPrice = ticket.items.reduce((acc, item) => {
                state.items.forEach(stateItem => {
                    if(stateItem.name === item.name) {
                        acc = acc + (stateItem.price * item.qty)
                    }
                })
                return acc
            }, 0)
            state.money += ticketPrice
        },

        m_thing_increment(state, thing) {
            let match = state[thing.type].find((el) => {
                return el.name === thing.name
            })
            if(!match) return
            match.amount++

            // Reduce resources and money
            if('items' === thing.type) {
                match.reqs.ingredients.forEach(requiredIngredient => {
                    let ingredient = state.ingredients.find((el) => {
                        return el.name === requiredIngredient.name
                    })
                    ingredient.amount = ingredient.amount - requiredIngredient.amount
                })
                match.reqs.actions.forEach(requiredAction => {
                    let action = state.actions.find(el => {
                        return el.name === requiredAction.name
                    })
                    action.amount = action.amount - requiredAction.amount
                })
                match.reqs.cookingMethods.forEach(requiredCookingMethod => {
                    let cookingMethod = state.cookingMethods.find(el => {
                        return el.name === requiredCookingMethod.name
                    })
                    cookingMethod.amount = cookingMethod.amount - requiredCookingMethod.amount
                })
                state.money -= match.cost
            }
        },

        m_thing_decrement(state, thing) {
            if('items' === thing.type) return
            let match = state[thing.type].find(el => {
                return el.name === thing.name
            })
            if(!match) return
            if(0 === match.amount) return
            match.amount--
        },
    },

    getters: {
        possibleTickets: state => {
            let possibleTickets = []

            state.tickets.forEach(ticket => {
                let matchingTicketItems = 0
                
                ticket.items.forEach(ticketItem => {
                    let matchesTicketItem = false

                    state.items.forEach(item => {
                        if(item.name === ticketItem.name &&
                            item.amount >= ticketItem.qty) {
                            matchesTicketItem = true
                        }
                    })

                    if(matchesTicketItem)
                        matchingTicketItems++
                })
                
                if(matchingTicketItems === ticket.items.length)
                    possibleTickets.push(ticket)
            })

            return possibleTickets
        },

        possibleItems: state => {
            let possibleItems = []

            state.items.forEach(item => {
                let matchesIngredients = true
                let matchesActions = true
                let matchesCookingMethods = true

                item.reqs.ingredients.forEach(requiredIngredient => {
                    state.ingredients.forEach(ingredient => {
                        if(ingredient.name === requiredIngredient.name &&
                            requiredIngredient.amount > ingredient.amount) {
                            matchesIngredients = false
                        }
                    })
                })

                item.reqs.actions.forEach(requiredAction => {
                    state.actions.forEach(action => {
                        if(action.name === requiredAction.name &&
                            requiredAction.amount > action.amount) {
                            matchesActions = false
                        }
                    })
                })

                item.reqs.cookingMethods.forEach(requiredCookingMethod => {
                    state.cookingMethods.forEach(cookingMethod => {
                        if(cookingMethod.name === requiredCookingMethod.name &&
                            requiredCookingMethod.amount > cookingMethod.amount) {
                            matchesCookingMethods = false
                        }
                    })
                })

                if(matchesIngredients && matchesActions && matchesCookingMethods)
                    possibleItems.push(item)
            })

            return possibleItems
        },
    },
}