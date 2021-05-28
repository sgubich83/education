import React from "react";
import { useTranslation } from "react-i18next";
import {
  List,
  ListItem,
  ListItemText,
  Grid,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import { withPortal } from "hocs";
import styles from "./styles.module.scss";

const Task = () => {
  const { t } = useTranslation();

  const TASKS = [
    {
      id: 1,
      text: t("common.work1"),
      description: t("common.description1"),
      status: DoneIcon,
    },
    {
      id: 2,
      text: t("common.work2"),
      description: t("common.description2"),
      status: DoneIcon,
    },
    {
      id: 3,
      text: t("common.work3"),
      description: t("common.description3"),
      status: DoneIcon,
    },
    {
      id: 4,
      text: t("common.work4"),
      description: t("common.description4"),
      status: DoneIcon,
    },
    {
      id: 5,
      text: t("common.work5"),
      description: t("common.description5"),
      status: DoneIcon,
    },
    {
      id: 6,
      text: t("common.work6"),
      description: t("common.description6"),
      status: DoneIcon,
    },
    {
      id: 7,
      text: t("common.work7"),
    },
  ];

  return (
    <div className={styles.wrapper}>
      {t("common.header")}
      <Grid item xs={12} md={6}>
        <List>
          {TASKS.map(({ id, text, description, status }) => {
            const Icon = status;
            return (
              <ListItem key={id}>
                <ListItemText primary={text} />
                <ListItemSecondaryAction>
                  {description && withPortal(description)}
                  {status && (
                    <IconButton edge="end" disabled>
                      <Icon />
                    </IconButton>
                  )}
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </div>
  );
};

export default Task;
