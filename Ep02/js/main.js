var app = new Vue({
  el: '#app',
  data: {
    id: '',
    newTodo: '',
    todos: []
  },
  methods: {
    // 登録機能
    addTodo(event) {
      if (this.newTodo === '') return
      var todo = {
        id: this.todos.length + 1,
        todo: this.newTodo,
        isDone: false
      };
      this.todos.push(todo)
      this.newTodo = ''
    },
    // 削除機能
    deleteTodo(index) {
      this.todos.splice(index, 1)
    }
  }
})