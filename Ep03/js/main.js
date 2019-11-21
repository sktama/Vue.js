var app = new Vue({
  el: '#app',
  data: {
    bpi: null,
    hasError: false
  },
  mounted() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((res) => {
        this.bpi = res.data.bpi
      })
      .catch((err) => {
        this.hasError = true
      })
  },
  filters: {
    currencyDecimal(val) {
      return val.toFixed(2)
    }
  }
})