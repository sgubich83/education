import React, { FC } from "react";
import { CircularProgress } from "@material-ui/core";
import styles from "./Spinner.module.scss";

const Spinner: FC = () => (
  <div className={styles.spinner}>
    <CircularProgress className={styles.spinnerPosition} />
  </div>
);

export default Spinner;
