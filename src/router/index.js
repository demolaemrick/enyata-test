import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/overview",
    name: "overview",

    components: {
      Navbar: () => import("@/components/organisms/Navbar.vue"),
      default: () => import("../views/OverView.vue"),
      Sidebar: () => import("@/components/organisms/Sidebar.vue"),
    },
  },
  {
    path: "/starships",
    name: "starships",

    components: {
      default: () => import("../views/OverView.vue"),
      Sidebar: () => import("@/components/organisms/Sidebar.vue"),
    },
  },
  {
    path: "/people",
    name: "people",

    components: {
      default: () => import("../views/OverView.vue"),
      Sidebar: () => import("@/components/organisms/Sidebar.vue"),
    },
  },
  {
    path: "/species",
    name: "species",

    components: {
      default: () => import("../views/OverView.vue"),
      Sidebar: () => import("@/components/organisms/Sidebar.vue"),
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
