var app = new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  methods: {
    clickHandler() {
      this.counter++
    }
  },
})