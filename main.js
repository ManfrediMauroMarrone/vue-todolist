var app = new Vue ({
  el: '#root',

  data: {
    todoList: [
      'fare la spesa',
      'pagare bollette',
      'salvare il mondo',
      'trovare cura covid'
    ],

    newItem: '',
  },

  methods: {

    addItem() {
      this.todoList.push(this.newItem)
    },

    removeItem(index) {
      this.todoList.splice(index, 1)
    }
  }

});
