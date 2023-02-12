import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";
import StaffPage from "../components/StaffPage.vue";
import ContactUsPage from "../components/ContactUsPage.vue"

const routes = [
    {
        path: '/Law-Firm/',
        component: HomePage
    },
    {
        path: '/Law-Firm/about',
        component: AboutPage
    },
    {
        path: '/Law-Firm/our-staff',
        component: StaffPage
    },
    {
        path: '/Law-Firm/contact-us',
        component: ContactUsPage
    }
];

const router = createRouter({
  history: createWebHistory(),
  base:'/Law-Firm/',
  routes,
});

export default router;
