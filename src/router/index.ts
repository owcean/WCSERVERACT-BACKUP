import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/Home.vue';
import StudentForm from '../components/Student.vue';
import AdminForm from '../components/Admin.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/student',
      name: 'student',
      component: StudentForm,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminForm,
    }
  ],
});

export default router;
