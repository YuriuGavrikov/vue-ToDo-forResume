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
      addNewNote() {
         if (this.inputValue !== '') {
            this.notes.push(this.inputValue)
            this.inputValue = ''
         }
      },
      removeNote(i, event) {
         this.notes.splice(i, 1)
      }
   },
   computed: {
      doubleCountComputed() {
         console.log('doubleCountComputed');
         return this.notes.length * 2
      },
   },
   watch: {
      inputValue(value) {
         if (value.length > 10) this.inputValue = '';
         console.log('input Value chenged', value);
      }
   }
}

Vue.createApp(App).mount('#app')
