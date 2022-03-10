
/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

 
 describe('Notes view', () => {
   it('displays 2 notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
//Set up Model and View
     const model = new NotesModel();
     model.addNote("Buy Bread");
     model.addNote("Buy Milk");
     const view = new NotesView(model); 
     view.displayNotes();
     expect(document.querySelectorAll('div.note').length).toBe(2);
   });

   it('displays a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model); 
    document.querySelector('#note-input').value ='Test Note';
    document.querySelector('#show-note-button').click();
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('Test Note');

   });

    describe('Deleteing old notes',  () => {


    it('clears the old notes', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const model = new NotesModel();
      const view = new NotesView(model); 
      document.querySelector('#note-input').value ='Test Note 1';
      document.querySelector('#show-note-button').click();
      document.querySelector('#note-input').value ='Test Note 2';
      document.querySelector('#show-note-button').click();
      expect(document.querySelectorAll('div.note').length).toEqual(2);
    });
    });






















  // it('clears the old user inputs', () => {
  //   document.body.innerHTML = fs.readFileSync('./index.html');
  //   const model = new NotesModel();
  //   const view = new NotesView(model); 
  //   document.querySelector('#note-input').value ='Test Note 1';
  //   document.querySelector('#show-note-button').click();
  //   document.querySelector('#note-input').value ='Test Note 2';
  //   document.querySelector('#show-note-button').click();
  //   expect(document.querySelectorAll('div.note').length).toEqual(2);
  //   expect(document.querySelectorAll('div.note')[1].innerText).toEqual('Test Note 2');

  // });

 });
