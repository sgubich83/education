import React, { FC, ChangeEvent, useState, KeyboardEvent } from "react";
import { useTranslation } from "react-i18next";
import { NotesStore } from "modules/Notes/store/NotesStore";
import { TextField, Button } from "@material-ui/core";
import styles from "./styles.module.scss";

type InputProps = {
  addNote: NotesStore["addNote"];
};

const NoteInput: FC<InputProps> = ({ addNote }) => {
  const { t } = useTranslation();
  const [note, setNote] = useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteHandler = () => {
    addNote(note);
    setNote("");
  };

  const onKeyPressAddNoteHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addNote(note);
      setNote("");
    }
  };

  return (
    <div className={styles.note} onKeyPress={onKeyPressAddNoteHandler}>
      <TextField
        style={{ marginRight: 10 }}
        value={note}
        onChange={updateNote}
        variant="outlined"
        size="small"
      />
      <Button
        color="primary"
        variant="contained"
        onClick={onAddNoteHandler}
        disabled={!note}
      >
        {t("notes.add")}
      </Button>
    </div>
  );
};

export default NoteInput;
