import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/index.vue";
 import AddressList from "../components/address/AddressList.vue"
import Confirmation from "../components/address/ConfirmationPage.vue"

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/address-list', name: 'AddressList', component: AddressList },
    { path: '/confirmation', name: 'Confirmation', component: Confirmation },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
