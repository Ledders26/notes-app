const NotesModel = require('./notesModel');

describe('NotesModel', () => {
    it('can get an empty array', () => { 
      let model = new NotesModel();
      expect(model.getNotes()).toEqual([]);
    });
    it('can add a note', () => { 
      let model = new NotesModel();
      model.addNote('Buy milk');
    //   expect(new NotesModel().addNote(note)).toBe('Buy milk');
      expect(model.getNotes()).toEqual(['Buy milk']);
    });
    it('reset the notes', () => { 
        let model = new NotesModel(); 
        model.addNote('Buy milk');
        expect(model.getNotes()).toEqual(['Buy milk']);
        model.clearHistory();
        expect(model.getNotes()).toEqual([]);
      });
  });