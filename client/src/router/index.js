import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";
import StaffPage from "../components/StaffPage.vue";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/our-staff',
        component: StaffPage
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
