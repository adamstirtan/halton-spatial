import { createRouter, createWebHistory } from "vue-router";
import Home from "~/pages/index.vue";
import About from "~/pages/about.vue";
import Portfolio from "~/pages/portfolio.vue";
import GetQuote from "~/pages/get-quote.vue";
import Contact from "~/pages/contact.vue";
import Pricing from "~/pages/pricing.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/portfolio", name: "Portfolio", component: Portfolio },
  { path: "/get-quote", name: "GetQuote", component: GetQuote },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/pricing", name: "Pricing", component: Pricing },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
