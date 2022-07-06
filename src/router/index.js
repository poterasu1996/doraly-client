import { createRouter, createWebHistory } from "vue-router";
import ProductPage from '../views/ProductPage';
import HomePage from '../views/HomePage';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/products',
        name: 'ProductPage',
        component: ProductPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router