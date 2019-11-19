var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    url: 'https://jp.vuejs.org/',
    flag: true,
    languages: ['JavaScript', 'Ruby', 'Python']
  },
  methods: {
    onclick(){
      if(this.flag){
        this.message = 'Goodbye Vue.js',
        this.flag = false
      } else {
        this.message = 'Hello Vue.js!',
        this.flag = true
      }
    }
  }
})