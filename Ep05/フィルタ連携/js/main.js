Vue.filter('numberFormat', (val) => {
  return val.toLocaleString()
})
Vue.filter('toUSD', (val) => {
  return val / 100
})
var app = new Vue({
  el: '#app',
  data: {
    price: 298000
  },
})