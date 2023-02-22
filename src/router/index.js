
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CountryDetail from '../views/CountryDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home-view',
    component: HomeView,
  },
  {
    path: '/:country',
    name: 'country-detail',
    component: CountryDetail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
