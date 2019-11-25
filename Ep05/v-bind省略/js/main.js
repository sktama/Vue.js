Vue.filter('readMore', (text, length, suffix) => {
  return text.substring(0, length) + suffix
})

var app = new Vue({
  el: '#app',
  data: {
    url: 'https://jp.vuejs.org/index.html'
  },
})