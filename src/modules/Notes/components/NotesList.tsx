import React, { FC, useEffect } from "react";
import { observer } from "mobx-react";
import { NoteInput } from "modules/Notes/components";
import { useStores } from "modules/Notes/context";
import { List, ListItem, ListItemText } from "@material-ui/core";

const NotesList: FC = observer(() => {
  const { notesStore } = useStores();

  useEffect(() => {
    notesStore.loadNotes();
  }, [notesStore]);

  const getNoteView = () => (
    <List>
      {notesStore.completedNotes.map((note, index) => (
        <ListItem key={`${note}-${index}`}>
          <ListItemText primary={note} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div>
      <NoteInput addNote={notesStore.addNote} />
      {getNoteView()}
    </div>
  );
});

export default NotesList;
