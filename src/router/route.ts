import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "layout",
    redirect: "/home",
    children: [
      {
        //  首页
        path: "/home",
        name: "home",
        component: () => import("@/pages/layout/index.vue"),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
