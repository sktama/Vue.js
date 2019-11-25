// 監視プロパティ
// var app = new Vue({
//   el: '#app',
//   data: {
//     firstName: '',
//     lastName: '',
//     fullName: ''
//   },
//   watch: {
//     firstName: function (val) {
//       this.fullName = val + ' ' + this.lastName
//     },
//     lastName: function (val) {
//       this.fullName = this.firstName + ' ' + this.lastName
//     }
//   },
// })

// 算出プロパティ
var app = new Vue({
  el: '#app',
  data: {
    firstName: '',
    lastName: '',
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  },
})