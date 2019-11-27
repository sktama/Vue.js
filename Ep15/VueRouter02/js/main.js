const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.userID}} </h2>
      <router-view></router-view>
    </div>
  `
}
const Profile = {
  template: `
    <div class="profile">
      <h2>Profile {{ $route.params.userID}} </h2>
    </div>
  `
}
const Posts = {
  template: `
    <div class="profile">
      <h2>Posts {{ $route.params.userID}} </h2>
    </div>
  `
}
const router = new VueRouter({
  routes: [
    {
      path: '/users/:userID', component: User,
      children: [
        {
          path: 'profile',
          component: Profile
        },
        {
          path: 'posts',
          component: Posts
        }
      ]
    }
  ]
})

const app = new Vue({
  router
}).$mount('#app')