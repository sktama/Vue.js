var app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    message: ''
  },
  methods: {
    clickHandler(message) {
      this.message = message
      this.counter++
    }
  },
})