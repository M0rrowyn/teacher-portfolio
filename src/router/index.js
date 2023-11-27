import { createRouter, createWebHistory } from 'vue-router';
import HeroPage from '../pages/HeroPage.vue';
import AboutMe from '../pages/AboutMe.vue';
import GalleryPage from '../pages/GalleryPage.vue';
import FeedbackPage from '../pages/FeedbackPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hero-page',
      component: HeroPage
    },
    {
      path: '/about-me',
      name: 'aboutMe',
      component: AboutMe
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryPage
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: FeedbackPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: AboutMe
    }
  ]
});

export default router;
