import { createContext } from "react";
import { NotesStore } from "./NotesStore";

export const rootStoreContext = createContext({
  notesStore: new NotesStore(),
});
