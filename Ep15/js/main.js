const Top = { template: '<div>Top</div>' }
const User = { template: '<div>User</div>' }
const User123 = { template: '<div>User {{ $route.params.userID }}</div>' }
const router = new VueRouter({
  routes: [
    {
      path: '/top',
      component: Top
    },
    {
      path: '/users',
      component: User
    },
    {
      path: '/users/:userID',
      component: User123
    }
  ]
})

const app = new Vue({
  // router: router
  router
}).$mount('#app')