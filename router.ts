import { createRouter, createWebHistory } from "vue-router";
import Home from "~/pages/index.vue";
import Projects from "~/pages/projects.vue";
import ProjectDetail from "~/pages/project-detail.vue";
import Services from "~/pages/services.vue";
import GetQuote from "~/pages/get-quote.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/projects/:slug", name: "ProjectDetail", component: ProjectDetail },
  { path: "/services", name: "Services", component: Services },
  { path: "/get-quote", name: "GetQuote", component: GetQuote },
  { path: "/portfolio", redirect: "/projects" },
  { path: "/about", redirect: "/services" },
  { path: "/contact", redirect: "/get-quote" },
  { path: "/pricing", redirect: "/services" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
