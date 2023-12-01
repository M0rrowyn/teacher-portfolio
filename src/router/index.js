import { createRouter, createWebHistory } from 'vue-router';
import HeroPage from '../pages/HeroPage.vue';
import AboutMe from '../pages/AboutMe.vue';
import GalleryPage from '../pages/GalleryPage.vue';
import WorkExamples from '../pages/WorkExamples.vue';

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
      path: '/work-examples',
      name: 'workExamples',
      component: WorkExamples
    },
    {
      path: '/contact',
      name: 'contact',
      component: AboutMe
    }
  ]
});

export default router;
