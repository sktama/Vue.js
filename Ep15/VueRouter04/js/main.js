const A = { template: '<div><h2>This is A.</h2></div>' }
const router = new VueRouter({
  routes: [
    {
      path: '/a',
      component: A,
      alias: '/b'
    }
  ]
})

const app = new Vue({
  router
}).$mount('#app')