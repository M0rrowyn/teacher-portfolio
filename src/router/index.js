import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../pages/MainPage.vue';
import NotFound from '../components/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: MainPage
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
});

export default router;
