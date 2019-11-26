Vue.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: '<p><button @click="count++">{{ count }}</button></p>'
})

var app = new Vue({
  el: '#app',
  data: {
  }
})