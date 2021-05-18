import React, { FC } from "react";
import { Task, Login } from "modules/Main/components";
import styles from "./styles.module.scss";

const MainPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Task />
      <Login />
    </div>
  );
};

export default MainPage;
