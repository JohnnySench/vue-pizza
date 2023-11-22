import { createRouter, createWebHistory } from "vue-router";
import General from "../pages/General.vue";


const routes = [
    {
        path: '/',
        name: 'main',
        component: General
    }
]


const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;



