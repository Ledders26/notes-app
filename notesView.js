class NotesView {
    constructor(model, api) {
      this.model = model;
      this.api = api;
      this.mainContainerEl = document.querySelector('#main-container');
      this.buttonEl = document.querySelector('#show-note-button');
      this.buttonEl.addEventListener('click', () => {
        this.addNewNote();
       });
     };

     addNewNote() {
      const noteEl = document.querySelector('#note-input');
      const noteElValue = noteEl.value;
      this.model.addNote(noteElValue);
      noteEl.value = '';
      this.displayNotes();
      };
    
      displayNotes() {
        this.deleteOldNote();
        const notes = this.model.getNotes()
        notes.forEach(note => { 
          const noteEl = document.createElement('div')
          noteEl.innerText = note
          noteEl.className = 'note';
          this.mainContainerEl.append(noteEl)
        });
      }

      deleteOldNote() {
        let notes = document.querySelectorAll('.note');
        console.log(notes);
        notes.forEach(note => {
          note.remove();
        });
      };
    };

 module.exports = NotesView;