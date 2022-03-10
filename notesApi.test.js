const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableFetchMocks()

describe('NotesApi class', () => {
  it('can load notes using fetch', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      note: 'Ben & Shirley hate JSON'
    }));

    api.loadNotes
  });
});