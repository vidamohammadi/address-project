import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/index.vue";
 import AddressList from "../components/address/AddressList.vue"

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/address-list', name: 'AddressList', component: AddressList },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
