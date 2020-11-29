import Home from './views/Home'
import Kitchen from './views/Kitchen'
import PayExpenses from './views/PayExpenses'
import Menu from './views/Menu'

export default [
    { path: '/', component: Home },
    { path: '/kitchen', component: Kitchen },
    { path: '/pay-expenses', component: PayExpenses },
    { path: '/menu', component: Menu }
]