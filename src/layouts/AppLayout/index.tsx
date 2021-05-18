import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Container, Tabs, Tab, Button } from "@material-ui/core";
import { history } from "utils";
import { logout } from "modules/Main/reducers/main";
import styles from "./styles.module.scss";

interface IAppLayoutProps {
  children: React.ReactNode;
}

const MENU = {
  dashboard: 0,
  users: 1,
};

const AppLayout: FC<IAppLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { location } = history;
  const splitter = location.pathname.split("/");
  const locationValue = splitter[1];
  const disabled = splitter.length > 2;

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    const key = Object.keys(MENU).filter((key) => MENU[key] === newValue)[0];
    history.push(key);
  };

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div className={styles.root}>
      <div className={styles.button}>
        <Button color="primary" onClick={handleLogout}>
          {t("navigation.logout")}
        </Button>
      </div>
      <Tabs
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        value={MENU[locationValue]}
        onChange={handleChange}
      >
        <Tab label={t("navigation.dashboard")} disabled={disabled} />
        <Tab label={t("navigation.users")} disabled={disabled} />
      </Tabs>
      <Container className={styles.container}>{children}</Container>
    </div>
  );
};

export default AppLayout;
