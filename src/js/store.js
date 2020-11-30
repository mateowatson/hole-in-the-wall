import burger from './items/burger'
import meatloaf from './items/meatloaf'
import shepherdsPie from './items/shepherds-pie'
import sloppyJoe from './items/sloppy-joe'
import hamburgerSteak from './items/hamburger-steak'
import friedChicken2pc from './items/fried-chicken-2pc'
import omelet from './items/omelet'
import chickenSalad from './items/chicken-salad'
import chickenSaladSandwich from './items/chicken-salad-sandwich'
import frenchFries from './items/french-fries'
import grilledCheeseSandwich from './items/grilled-cheese-sandwich'
import blt from './items/blt'
import breakfastPlatterWBacon from './items/breakfast-platter-w-bacon'
import cornNuggets from './items/corn-nuggets'
import soulFoodPlatter from './items/soul-food-platter'
import bakedPotato from './items/baked-potato'
import tomatoSandwich from './items/tomato-sandwich'
import deluxeBaconCheeseBurger from './items/deluxe-bacon-cheeseburger'
import cheeseburger from './items/cheeseburger'
import greenBeanCasserole from './items/green-bean-casserole'
import friedChickenSandwich from './items/fried-chicken-sandwich'
import houseSalad from './items/house-salad'
import cobbSalad from './items/cobb-salad'
import friedChickenSalad from './items/fried-chicken-salad'
import scrambledEggs from './items/scrambled-eggs'
import chilli from './items/chilli'
import chilliCheeseFries from './items/chilli-cheese-fries'
import redBeansAndRice from './items/red-beans-and-rice'
import bakedBeans from './items/baked-beans'
import englishBreakfast from './items/english-breakfast'
import chickenAndRice from './items/chicken-and-rice'
import riceAndGravy from './items/rice-and-gravy'
import biscuitsAndGravy from './items/biscuits-and-gravy'
import stirFry from './items/stir-fry'
import toast from './items/toast'

import utils from './utils'

export default {
    state: {
        secondsPerDay: 300,
        secondsLeftInDay: 300,

        // referring to current ticket
        timeUp: false,
        ticketStartTime: 0,
        secondsLeftInTicket: 0,

        money: 300.00,

        expenses: [
            {
                name: 'Business Manager',
                perDayCost: 50,
                due: 0
            },
            {
                name: 'Waiter',
                perDayCost: 15,
                due: 0
            },
        ],

        ingredients: [
            { name: 'Ground Beef', image: 'images/ground-beef.png', stocked: true,  amount: 0,},
            { name: 'Chicken', image: 'images/cheddar-cheese.png', stocked: false, amount: 0, },
            { name: 'Bun', image: 'images/bun.png', stocked: true,  amount: 0,},
            { name: 'Bread', image: 'images/bread.png', stocked: false, amount: 0, },
            { name: 'Ketchup', image: 'images/ketchup.png', stocked: false, amount: 0, },
            { name: 'Corn', image: 'images/corn.png', stocked: false, amount: 0, },
            { name: 'Green Beans', image: 'images/green-beans.png', stocked: false, amount: 0, },
            { name: 'Bell Peppers', image: 'images/bell-peppers.png', stocked: false, amount: 0, },
            { name: 'Potatoes', image: 'images/potatoes.png', stocked: true,  amount: 0,},
            { name: 'Milk', image: 'images/milk.png', stocked: false, amount: 0, },
            { name: 'Flour', image: 'images/flour.png', stocked: false, amount: 0, },
            { name: 'Egg', image: 'images/egg.png', stocked: false, amount: 0, },
            { name: 'Cheddar Cheese', image: 'images/cheddar-cheese.png', stocked: false, amount: 0, },
            { name: 'Mayo', image: 'images/mayo.png', stocked: false, amount: 0, },
            { name: 'Lettuce', image: 'images/lettuce.png', stocked: false, amount: 0, },
            { name: 'Tomatoes', image: 'images/tomatoes.png', stocked: false, amount: 0, },
            { name: 'Bacon', image: 'images/bacon.png', stocked: false, amount: 0, },
            { name: 'Cream of Mushroom', image: 'images/cream-of-mushroom.png', stocked: false, amount: 0, },
            { name: 'Onions', image: 'images/onions.png', stocked: false, amount: 0, },
            { name: 'Bleu Cheese', image: 'images/bleu-cheese.png', stocked: false, amount: 0, },
            { name: 'Beans', image: 'images/beans.png', stocked: false, amount: 0, },
            { name: 'Rice', image: 'images/rice.png', stocked: false, amount: 0, },
            { name: 'Sausage', image: 'images/sausage.png', stocked: false, amount: 0, },
            { name: 'Cajun Seasoning', image: 'images/cajun-seasoning.png', stocked: false, amount: 0, },
        ],

        actions: [
            { name: 'Make Patty', image: 'images/make-patty.png', stocked: true, amount: 0, },
            { name: 'Mix', image: 'images/mix.png', stocked: false, amount: 0, },
            { name: 'Mash', image: 'images/mash.png', stocked: false, amount: 0, },
            { name: 'Chop', image: 'images/chop.png', stocked: true, amount: 0, },
            { name: 'Batter', image: 'images/batter.png', stocked: false, amount: 0, },
            { name: 'Blend', image: 'images/blend.png', stocked: false, amount: 0, },
            { name: 'Slice', image: 'images/slice.png', stocked: false, amount: 0, },
            { name: 'Stir', image: 'images/stir.png', stocked: false, amount: 0, },
            { name: 'Roll Dough', image: 'images/roll-dough.png', stocked: false, amount: 0, },
        ],

        cookingMethods: [
            { name: 'Grill', image: 'images/grill.png', stocked: true, amount: 0, },
            { name: 'Bake', image: 'images/bake.png', stocked: false, amount: 0, },
            { name: 'Boil', image: 'images/boil.png', stocked: false, amount: 0, },
            { name: 'Sautee', image: 'images/sautee.png', stocked: false, amount: 0, },
            { name: 'Fry', image: 'images/fry.png', stocked: true, amount: 0, },
            { name: 'Slow Cook', image: 'images/slow-cook.png', stocked: false, amount: 0, },
        ],

        items: [
            { ...burger },
            { ...meatloaf },
            { ...shepherdsPie },
            { ...sloppyJoe },
            { ...hamburgerSteak },
            { ...friedChicken2pc },
            { ...omelet },
            { ...chickenSalad },
            { ...chickenSaladSandwich },
            { ...frenchFries },
            { ...grilledCheeseSandwich },
            { ...blt },
            { ...breakfastPlatterWBacon },
            { ...cornNuggets },
            { ...soulFoodPlatter },
            { ...bakedPotato },
            { ...tomatoSandwich },
            { ...deluxeBaconCheeseBurger },
            { ...cheeseburger },
            { ...greenBeanCasserole },
            { ...friedChickenSandwich },
            { ...houseSalad },
            { ...cobbSalad },
            { ...friedChickenSalad },
            { ...scrambledEggs },
            { ...chilli },
            { ...chilliCheeseFries },
            { ...redBeansAndRice },
            { ...englishBreakfast },
            { ...bakedBeans },
            { ...chickenAndRice },
            { ...riceAndGravy },
            { ...biscuitsAndGravy },
            { ...stirFry },
            { ...toast },
        ],

        tickets: [],

        ticketsExamples: [
            {
                name: '20201126205534',
                items: [
                    { name: 'Burger', qty: 1 },
                ],
                secondsAllotted: 15,
            },
            {
                name: '20201126085728',
                items: [
                    { name: 'Burger', qty: 1 },
                    { name: 'Meatloaf', qty: 3 }
                ],
                timeCreated: '20201126223810',
                secondsAllotted: 30,
            },
            {
                name: '20201126105733',
                items: [
                    { name: 'Burger', qty: 3 },
                    { name: 'Meatloaf', qty: 2 }
                ],
                secondsAllotted: 45,
            }
        ],

        addedIngredients: [],

        addedActions: [],

        addedCookingMethods: [],
    },


    mutations: {
        m_add_per_day_expenses(state) {
            state.expenses.forEach(expense => {
                expense.due = expense.perDayCost
            })
        },

        m_pay_per_day_expense(state, toPayExpense) {
            state.expenses.forEach(expense => {
                if(toPayExpense.name === expense.name) {
                    state.money -= expense.due
                    expense.due = 0
                }
            })

            // reset day
            state.secondsLeftInDay = state.secondsPerDay
        },

        m_reduce_seconds_left_in_day(state, s) {
            state.secondsLeftInDay -= s
        },

        m_reduce_seconds_left_in_ticket(state, s) {
            if(state.secondsLeftInTicket - s > 0) {
                state.secondsLeftInTicket -= s
                state.timeUp = false
            } else {
                state.secondsLeftInTicket = 0
                state.timeUp = true
            }
        },

        m_set_seconds_left_in_ticket(state, s) {
            state.secondsLeftInTicket = s
            state.timeUp = false
        },

        m_set_last_ticket_time(state, time) {
            state.lastTicketTime = time
        },

        m_set_ticket_start_time(state, time) {
            state.ticketStartTime = time
        },

        m_tickets_create(state, tickets) {
            state.tickets = tickets
        },

        m_tickets_clear(state) {
            state.tickets = []
        },

        m_ticket_lose_first(state) {
            let ticketLost = state.tickets[0]
            if(!ticketLost) return
            let moneyLost = ticketLost.items.reduce((acc, item) => {
                let itemCost = 2 * item.qty
                acc += itemCost
                return acc
            }, 0)
            state.money -= moneyLost
            state.tickets.shift()
            // Restart timer
            state.ticketStartTime = Date.now() / 1000
            state.lastTicketTime = Date.now() / 1000
            state.timeUp = false
            //state.secondsLeftInTicket = state.secondsAllotted
        },

        m_ticket_fulfill(state, ticket) {
            let shouldRestartTimer = false
            if(state.tickets[0] && ticket.name === state.tickets[0].name) {
                console.log('bbbb');
                shouldRestartTimer = true
            }
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
            // Maybe restart timer
            if(shouldRestartTimer) {
                state.ticketStartTime = Date.now() / 1000
                state.lastTicketTime = Date.now() / 1000
                state.timeUp = false
            }
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

        m_time_up(state, bool) {
            state.timeUp = bool
        },
    },

    actions: {
        a_tickets_create({state, getters, commit}) {
            let ticketsSecondsAllottedSum = 0
            let ticketNamesUsed = []
            let tickets = []
            
            ticketsCreate()

            commit('m_tickets_create', tickets)

            function ticketsCreate() {
                let newTicket = {}
                newTicket.name = utils.rand(1, 200).toString() + Date.now().toString()
                if(ticketNamesUsed.includes(newTicket.name)) {
                    return ticketsCreate()
                }
                newTicket.items = []
                newTicket.secondsAllotted = 0
                let numItems = utils.rand(1, 6)
                let itemsUsed = []
                for (let i = 0; i < numItems; i++) {
                    let itemsOffered = getters.itemsOffered
                        .filter(gi => !itemsUsed.includes(gi.name))
                    if(!itemsOffered.length > 0)
                        continue;
                    newTicket.items[i] = {}
                    newTicket.items[i].name = utils.randOneFrom(itemsOffered).name
                    itemsUsed.push(newTicket.items[i].name)
                    newTicket.items[i].qty = utils.rand(1, 5)
                    let item = itemsOffered
                        .find(sitem => sitem.name === newTicket.items[i].name)
                    let ingLength = item.reqs.ingredients.length > 0 ? item.reqs.ingredients.length : 1
                    let actLength = item.reqs.actions.length > 0 ? item.reqs.actions.length : 1
                    let cookLength = item.reqs.cookingMethods.length > 0 ? item.reqs.cookingMethods.length : 1
                    newTicket.secondsAllotted += ingLength * newTicket.items[i].qty
                    newTicket.secondsAllotted += actLength * newTicket.items[i].qty
                    newTicket.secondsAllotted += cookLength * newTicket.items[i].qty
                }
                if(newTicket.secondsAllotted < 10)
                    newTicket.secondsAllotted = 10
                ticketsSecondsAllottedSum += newTicket.secondsAllotted
                ticketNamesUsed.push(newTicket.name)
                tickets.push(newTicket)
                if(ticketsSecondsAllottedSum < state.secondsPerDay)
                    return ticketsCreate()
            }
        },
    },

    getters: {
        secondsAllotted(state) {
            return state.tickets[0] ? state.tickets[0].secondsAllotted : 0
        },

        possibleTickets(state) {
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

        possibleItems(state) {
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

        itemsOffered(state) {
            let possibleItems = []

            state.items.forEach(item => {
                let matchesIngredients = true
                let matchesActions = true
                let matchesCookingMethods = true

                item.reqs.ingredients.forEach(requiredIngredient => {
                    state.ingredients.forEach(ingredient => {
                        if(ingredient.name === requiredIngredient.name &&
                            !ingredient.stocked) {
                            matchesIngredients = false
                        }
                    })
                })

                item.reqs.actions.forEach(requiredAction => {
                    state.actions.forEach(action => {
                        if(action.name === requiredAction.name &&
                            !action.stocked) {
                            matchesActions = false
                        }
                    })
                })

                item.reqs.cookingMethods.forEach(requiredCookingMethod => {
                    state.cookingMethods.forEach(cookingMethod => {
                        if(cookingMethod.name === requiredCookingMethod.name &&
                            !cookingMethod.stocked) {
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