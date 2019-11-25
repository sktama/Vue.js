var app = new Vue({
  el: '#app',
  data: {
    colors: [
      { name: 'Red' },
      { name: 'Green' },
      { name: 'Blue' },
    ]
  },
  watch: {
    colors: {
      handler: function (newVal, oldVal) {
        console.log('Update!')
      },
      // app.colors[1].name = 'White'をコンソールに入力
      deep: false
    }
  },
})