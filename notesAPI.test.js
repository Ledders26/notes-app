const NotesAPI = require('./notesAPI');


require('jest-fetch-mock').enableMocks()

describe('Server notes', () => {
    it('calls fetch and fins message from server', async () => {
      const api = new notesAPI();
      fetch.mockResponseOnce(JSON.stringify({
        note: 'Test Note',
      }));
  
      api.loadNotes('Test Note', (notesInfo) => {
        expect(notesInfo.note).toBe('Test Note');
      });
    });
  });