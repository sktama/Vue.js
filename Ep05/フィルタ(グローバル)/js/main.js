Vue.filter('numberFormat', (val) => {
  return val.toLocaleString()
})
var app = new Vue({
  el: '#app',
  data: {
    jpyPrice: 2980000000
  },
})