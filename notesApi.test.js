const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

describe('Server notes', () => {
  it('calls fetch and fins message from server', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      note: 'Test Note',
    }));

    api.loadNotes((notesInfo) => {
      expect(notesInfo.note).toBe('Test Note');
    });
  });

  // it('calls fetch and sends a new note', async () => {
  //   const api = new NotesApi();
  //   let newNote = JSON.stringify("Remember to reflect on your progress this week")
  //   fetch.mockResponseOnce(JSON.stringify({
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": 'application/json'
  //     },
  //     body: {
  //       newNote
  //     },
  //   }));
  //   api.createNote(newNote, notes => {
  //     expect(notes.note).toEqual([newNote]);
  //   });
  // });
});