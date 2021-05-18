import React from "react";
import { Portal } from "components/common";
import { IconButton } from "@material-ui/core";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

export default function withPortal(val: string) {
  return (
    <Portal
      // @ts-ignore
      activator={({ setShow }) => (
        <IconButton edge="end" color="primary" onClick={() => setShow(true)}>
          <EmojiObjectsIcon />
        </IconButton>
      )}
    >
      {val}
    </Portal>
  );
}
