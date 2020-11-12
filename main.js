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
      // inserisco un nuovo item nella lista
      this.todoList.push(this.newItem);
      // resetto l'input
      this.newItem = '';
    },

    removeItem(itemIndex) {
      // this.todoList.splice(index, 1)
      this.$delete(this.todoList, index)
    },
  }

});
