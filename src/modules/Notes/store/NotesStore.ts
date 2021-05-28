import { observable, action, decorate, computed } from "mobx";
import NotesService from "modules/Notes/api/NotesService";

export class NotesStore {
  notes: string[] = [];

  get completedNotes() {
    return this.notes;
  }

  loadNotes = () => {
    NotesService.getNotes().then((notes) => (this.notes = notes.data));
  };

  addNote = (note: string) => {
    NotesService.addNote({ value: note }).then((value) => {
      if (value.status === 200) {
        this.notes.push(note);
      }
    });
  };
}

decorate(NotesStore, {
  notes: observable,
  loadNotes: action,
  completedNotes: computed,
  addNote: action,
});
