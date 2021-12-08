import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "about" */ "../components/home.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import(/* webpackChunkName: "about" */ "../components/contact.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import(/* webpackChunkName: "about" */ "../components/projects.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
