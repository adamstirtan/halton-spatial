import { createRouter, createWebHistory } from "vue-router";
import Home from "~/pages/index.vue";
import ProjectDetail from "~/pages/project-detail.vue";
import Services from "~/pages/services.vue";
import GetQuote from "~/pages/get-quote.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/projects", redirect: "/" },
  { path: "/projects/:slug", name: "ProjectDetail", component: ProjectDetail },
  { path: "/services", name: "Services", component: Services },
  { path: "/get-quote", name: "GetQuote", component: GetQuote },
  { path: "/portfolio", redirect: "/" },
  { path: "/about", redirect: "/services" },
  { path: "/contact", redirect: "/get-quote" },
  { path: "/pricing", redirect: "/services" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
