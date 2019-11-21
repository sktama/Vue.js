var app = new Vue({
  el: '#app',
  data: {
    bpi: null,
    hasError: false,
    loading: true
  },
  mounted() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((res) => {
        this.bpi = res.data.bpi
      })
      .catch((err) => {
        this.hasError = true
      })
      .finally(() => {
        this.loading = false
      })
  },
  filters: {
    currencyDecimal(val) {
      return val.toFixed(2)
    }
  }
})