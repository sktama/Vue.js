var app = new Vue({
  el: '#app',
  data: {
    bpi: null
  },
  mounted() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((res) => {
        this.$data.bpi = res.data.bpi
        console.log(this.$data.bpi)
      })
      // .then(function(res) {
      //   this.bpi = res.data.bpi
      //   console.log(this.bpi)
      // }.bind(this))
  }
})