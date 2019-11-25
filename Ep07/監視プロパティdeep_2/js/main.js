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
        console.log('new: %s, old: %s',
          JSON.stringify(newVal, null, '\t'),
          JSON.stringify(oldVal, null, '\t'))
      },
      // app.colors[1].name = 'White'をコンソールに入力
      deep: true,
    }
  },
})