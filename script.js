const App = {
   data() {
      return {
         title: 'Типа чат',
         userName: 'Введите ваше имя',
         placeholderString: 'Введите название заметки',
         userNameValue: '',
         inputValue: '',
         noteItem: {},
         notes: [{ n: 'yuiri', t: 'Заметка 1' }, { n: 'max', t: 'Заметка 1' }, { n: 'andrey', t: 'Заметка 1' }]
      }
   },
   methods: {
      addNewNote() {
         if (this.inputValue !== '' && this.userNameValue !== '') {

            this.noteItem.n = this.userNameValue
            this.noteItem.t = this.inputValue

            this.notes.push(this.noteItem)

            this.userNameValue = ''
            this.inputValue = ''

            console.log(this.notes);
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
         if (value.length > 20) this.inputValue = '';
         console.log('input Value chenged', value);
      }
   }
}

Vue.createApp(App).mount('#app')
