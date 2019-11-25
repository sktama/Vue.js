var app = new Vue({
  el: '#app',
  data: {
  },
  computed: {
    computedNum: () => {
      console.log('computed!')
      return Math.random()
    }
  },
  methods: {
    methodNum() {
      console.log('method!')
      return Math.random()
    }
  },
})