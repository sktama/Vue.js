var app = new Vue({
  el: '#app',
  data: {
    message: ''
  },
  methods: {
    clickHandler() {
      this.message = new Date().toLocaleTimeString()
    }
  },
})