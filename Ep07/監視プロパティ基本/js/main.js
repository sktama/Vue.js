var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  watch: {
    message: function(newVal, oldVal) {
      console.log('new: %s, old: %s', newVal, oldVal)
    }
  },
})