import { createRouter, createWebHistory } from 'vue-router';
import PasswordPage from '../components/PasswordPage.vue';
import MainPage from '../components/MainPage.vue';
import GalleryPage from '../components/GalleryPage.vue';

const routes = [
  { path: '/', component: PasswordPage },
  { path: '/main', component: MainPage },
  { path: '/gallery/:category', component: GalleryPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Use import.meta.env.BASE_URL
  routes,
});

export default router;