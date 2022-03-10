(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        clearHistory() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#show-note-button");
          this.buttonEl.addEventListener("click", () => {
            this.addNewNote();
          });
        }
        addNewNote() {
          const noteEl = document.querySelector("#note-input");
          const noteElValue = noteEl.value;
          this.model.addNote(noteElValue);
          noteEl.value = "";
          this.displayNotes();
        }
        displayNotes() {
          this.deleteOldNote();
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
        deleteOldNote() {
          let notes = document.querySelectorAll(".note");
          console.log(notes);
          notes.forEach((note) => {
            note.remove();
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // notesAPI.js
  var require_notesAPI = __commonJS({
    "notesAPI.js"(exports, module) {
      var NotesAPI2 = class {
        loadNotes(notes, callback) {
          fetch("https://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = NotesAPI2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var NotesAPI = require_notesAPI();
  var api = new NotesAPI();
  var model = new NotesModel();
  var view = new NotesView(model, api);
  api.loadNotes((notes) => {
    model.setNotes(notes);
    view.displayNotes();
    console.log(notes);
  });
})();
