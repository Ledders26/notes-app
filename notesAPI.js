class NotesAPI {
    loadNotes(notes, callback ) {
        fetch('https://localhost:3000/notes')
          .then(response => response.json())
          .then(data => {
            callback(data)
          });
      };
};

module.exports = NotesAPI;