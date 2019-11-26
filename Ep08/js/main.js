var app = new Vue({
  el: '#app',
  data: {
    items: null,
    keyword: '',
    message: ''
  },
  watch: {
    keyword: function(newkyeword, oldkyeword) {
      this.message = 'Waiting for you stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
  },
  methods: {
    getAnswer() {
      if (this.keyword === '') {
        this.items = null
        this.message = ''
        return
      }
      this.message = 'Loading...'
      var vm = this
      var params = { page: 1, per_page: 20, query: this.keyword }
      axios.get('https://qiita.com/api/v2/items', { params })
        .then((res) => {
          vm.items = res.data
        })
        .catch((err) => {
          vm.message = 'Error!' + err
        })
        .finally(() => {
          vm.message = ''
        })
    }
  },
})