import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/index.vue";
import MapPicker from "../components/address/MapPicker.vue"

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/map-picker', name: 'MapPicker', component: MapPicker },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
