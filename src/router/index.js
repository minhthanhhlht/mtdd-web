import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Quản lý dự án ở khắp nơi | MTDD" },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/dashboard/Dashboard.vue"
      ),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
      meta: { title: "Thông tin" },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Login.vue"),
      meta: { title: "Đăng nhập vào MTDD" },
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
      meta: { title: "Tạo tài khoản MTDD" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
