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
    path: "/overview/:id",
    name: "movie",
    components: {
      Navbar: () => import("@/components/organisms/Navbar.vue"),
      default: () => import("@/components/organisms/Film.vue"),
      Sidebar: () => import("@/components/organisms/Sidebar.vue"),
    },
  },
  {
    path: "/starships",
    name: "starships",
    components: {
      Navbar: () => import("@/components/organisms/Navbar.vue"),
      default: () => import("../views/StarshipsView.vue"),
      Sidebar: () => import("@/components/organisms/Sidebar.vue"),
    },
  },
  {
    path: "/starships/:id",
    name: "starship",
    components: {
      Navbar: () => import("@/components/organisms/Navbar.vue"),
      default: () => import("@/components/organisms/Starship.vue"),
      Sidebar: () => import("@/components/organisms/Sidebar.vue"),
    },
  },
  {
    path: "/people",
    name: "people",

    components: {
      Navbar: () => import("@/components/organisms/Navbar.vue"),
      default: () => import("../views/PeopleView.vue"),
      Sidebar: () => import("@/components/organisms/Sidebar.vue"),
    },
  },
  {
    path: "/people/:id",
    name: "person",
    components: {
      Navbar: () => import("@/components/organisms/Navbar.vue"),
      default: () => import("@/components/organisms/Person.vue"),
      Sidebar: () => import("@/components/organisms/Sidebar.vue"),
    },
  },
  {
    path: "/species",
    name: "species",
    components: {
      Navbar: () => import("@/components/organisms/Navbar.vue"),
      default: () => import("../views/SpeciesView.vue"),
      Sidebar: () => import("@/components/organisms/Sidebar.vue"),
    },
  },
  {
    path: "/species/:id",
    name: "specie",
    components: {
      Navbar: () => import("@/components/organisms/Navbar.vue"),
      default: () => import("@/components/organisms/Specie.vue"),
      Sidebar: () => import("@/components/organisms/Sidebar.vue"),
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
