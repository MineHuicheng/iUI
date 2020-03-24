import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/components/Home.vue';
// Admin Components
import Index from '@/pages/admin/Index.vue';
import New from '@/pages/admin/New.vue';
import Products from '@/pages/admin/Products.vue';
import Edit from '@/pages/admin/Edit.vue';
import Cart from '@/pages/Cart.vue';

Vue.use(VueRouter);

// 嵌套路由的功能，让我们能把相关联的页面组织在一起
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Admin",
    name: "Admin",
    // component: Admin
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
    component: Index,
    children: [
      {
        path: 'new',
        name: 'New',
        component: New,
      },
      {
        path: '',
        name: 'Products',
        component: Products,
      },
      {
        path: 'edit/:id', //动态路由
        name: 'Edit',
        component: Edit,
      }
    ]
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
