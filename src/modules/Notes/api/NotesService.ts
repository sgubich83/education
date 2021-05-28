import { BaseAPI } from "api";
import { INote } from "modules/Notes/interfaces";

class NotesService extends BaseAPI {
  getNotes() {
    return this.call({
      method: "GET",
      url: "/notes",
    });
  }

  addNote(data: INote) {
    return this.call({
      method: "POST",
      url: "/note",
      data,
    });
  }
}

export default new NotesService();
