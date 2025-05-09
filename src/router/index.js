import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/index.vue";
import MapPicker from "../components/address/MapPicker.vue"
import AddressList from "../components/address/AddressList.vue"

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/map-picker', name: 'MapPicker', component: MapPicker },
    { path: '/address-list', name: 'AddressList', component: AddressList },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
