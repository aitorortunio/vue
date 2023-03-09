import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Assets from '../views/Assets.vue'
import Categories from '../views/Categories.vue'
import CryptoPrices from '../views/CryptoPrices.vue'
import DetailedAsset from '../views/DetailedAsset.vue'
import DetailedCategory from '../views/DetailedCategory.vue'




Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/assets',
        name: 'Assets',
        component: Assets
    },
    {
        path: '/asset/:id',
        name: 'DetailedAsset',
        component: DetailedAsset
    },
    {
        path: '/categories',
        name: 'Categories',
        component: Categories
    },
    {
        path: '/category/:id',
        name: 'DetailedCategory',
        component: DetailedCategory
    },
    {
        path: '/CryptoPrices',
        name: 'CryptoPrices',
        component: CryptoPrices
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router