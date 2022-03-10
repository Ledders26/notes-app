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
});