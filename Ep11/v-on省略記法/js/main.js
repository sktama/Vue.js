var app = new Vue({
  el: '#app',
  data: {
    message: ''
  },
  methods: {
    clear() {
      this.message = ''
    },
    clickHandler() {
      alert('Shift + Click!')
    }
  },
})