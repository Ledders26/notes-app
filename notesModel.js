class NotesModel{
  constructor(){
    this.notes = []; 
  }

  getNotes(){
   return this.notes;
 }  

  addNote(note){
    this.notes.push(note);
  }
  clearHistory(){
    this.notes = [];
  }
};

module.exports = NotesModel;