var app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    message: ''
  },
  methods: {
    clickHandler($event, message) {
      console.log($event)
      this.message = message
      this.counter++
    }
  },
})