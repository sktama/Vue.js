var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    clickHandler() {
      this.message = this.message.split('').reverse().join('')
    }
  },
})