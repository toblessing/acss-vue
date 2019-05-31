import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home'
import arranging from './views/arranging'
import autoArranging from './views/autoArranging'
import show from './views/show'
import self from './views/self'
import resources from './views/resources'
import find404 from './views/find404'
import login from './views/login'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path:'/login',
      component:login,
      name:'login',
      meta:{
        title:'登录'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        title: '自动排课'
      },
      children: [
        {
          path: '/',
          name: 'resources',
          component: resources,
          meta: {
            title: '教学资源管理'
          }
        },
        {
          path: '/arranging',
          name: 'arranging',
          component: arranging,
          meta: {
            title: '手动排课'
          }
        },
        {
          path: '/autoArranging',
          name: 'autoArranging',
          component: autoArranging,
          meta: {
            title: '自动排课'
          }
        },
        {
          path: '/show',
          name: 'show',
          component: show,
          meta: {
            title: '查看课表'
          }
        },
        {
          path: '/self',
          name: 'self',
          component: self,
          meta: {
            title: '我的资料'
          }
        }
      ]
    },
    {
      path: '/*',
      component: find404
    }

  ]

})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = "自动排课 • " + to.meta.title
  }
  next()
})
export default router
