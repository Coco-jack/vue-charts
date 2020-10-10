import Vue from 'vue'
import Router from 'vue-router'
import Charts from '../pages/charts'
import Login from '../pages/login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/charts',
            name: 'Charts',
            component: Charts
        }
    ]
})
