class NotesView {
    constructor(model) {
      this.model = model;
      this.mainContainerEl = document.querySelector('#main-container');
      this.buttonEl = document.querySelector('#show-note-button');
      this.buttonEl.addEventListener('click', () => {
        this.addNewNote();
       });
      //console.log(this.mainContainerEl);
     };

     addNewNote() {
      const noteEl = document.querySelector('#note-input').value;
      this.model.addNote(noteEl);
      this.displayNotes();
      document.querySelector('#note-input').value = '';
      };
    
      displayNotes() {
        this.removeOldNotes();
        const notes = this.model.getNotes()
        notes.forEach(note => { 
          const noteEl = document.createElement('div')
          noteEl.innerText = note
          noteEl.className = 'note';
          this.mainContainerEl.append(noteEl)
        });
      }

      removeOldNotes() {
        const oldNotes = document.querySelectorAll('.note');
        oldNotes.forEach(note =>{
          note.remove();
        });
      };

    //   displayMessage() {
    //     let inputEl = document.querySelector('#message-input') // finds the message input
    //     letold div = document.createElement('div'); // creates a div
    //     div.setAttribute('id', 'message') // calls the div - message
    //     div.innerText = inputEl.value; // sents the content of the div, to the value of the input
    //     this.mainContainerEl.append(div); // adds the div with the input value to the webpage
    // }
    };


 module.exports = NotesView;