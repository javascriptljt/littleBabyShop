import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    name:'default',
    redirect:'/Home'
  },
  {
    path:'/Home',
    component:()=>import('../views/Home.vue'),
    children:[
      {
        path:'',
        redirect:'index'
      },
      {
        path:'index',
        name:'index',
        component:()=>import('../components/HomeRoute/index.vue'),
        meta:{
          title:"首页"
        }
      },
      {
        path:'classic',
        name:'classic',
        component:()=>import('../components/HomeRoute/classic.vue'),
        meta:{
          title:"分类"
        }
      },
      {
        path:'cart',
        name:'cart',
        component:()=>import('../components/HomeRoute/cart.vue'),
        meta:{
          title:"购物车"
        }
      },
      {
        path:'mine',
        name:'mine',
        component:()=>import('../components/HomeRoute/mine.vue'),
        meta:{
          title:"会员中心"
        }
      },
      {
        path:'details/:id',
        name:'details',
        component:()=>import('../components/HomeRoute/Details.vue'),
        meta:{
          title:"商品详情"
        },
      }
    ]
  },
  {
    path:'/Reg',
    component:()=>import('../views/Reg.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
