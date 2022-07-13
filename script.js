const App = {
   data() {
      return {
         placeholderString: 'Введите название заметки',
         title: 'Список заметок',
         inputValue: '',
         notes: ['Заметка 1', 'Заметка 2', 'Заметка 3']
      }
   },
   methods: {
      inputChangeHandler(event) {
         this.inputValue = event.target.value
      },
      addNewNote() {
         if (this.inputValue !== '') {
            this.notes.push(this.inputValue)
            this.inputValue = ''
         }
      },
      removeNote(i, event) {
         this.notes.splice(i, 1)
      }
   }
}

Vue.createApp(App).mount('#app')
