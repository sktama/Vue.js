var app = new Vue({
  el: '#app',
  data: {
    price: 29800
  },
  filters: {
    numberFormat(val) {
      return val.toLocaleString()
    }
  }
})