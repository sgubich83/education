import React, { FC, useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Alert from "@material-ui/lab/Alert";
import { Spinner } from "components/common";
import { history } from "utils";
import { getUserDetails } from "modules/Users/reducers/users";
import styles from "./styles.module.scss";

const UserDetails: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const {
    userDetails: { isLoading, data, error },
  } = useSelector((state: RootStateOrAny) => ({
    userDetails: state.users.userDetails,
  }));

  function getCurrentUser() {
    const { location } = history;
    const locationKey = location.pathname.replace("/users/", "");
    dispatch(getUserDetails(locationKey));
  }

  useEffect(() => {
    getCurrentUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function onClick() {
    history.goBack();
  }

  if (error) {
    const currentError = error || t("common.not.found");
    return (
      <Alert severity="error" className={styles.error}>
        {currentError}
      </Alert>
    );
  }

  if (isLoading || !data) {
    return <Spinner />;
  }

  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardRoot}>
        <CardActions>
          <Button size="small" onClick={onClick}>
            <ArrowBackIcon />
          </Button>
        </CardActions>
        <div className={styles.content}>
          <Typography color="textPrimary">{t("users.id")}</Typography>
          <Typography color="textPrimary">{t("users.firstName")}</Typography>
          <Typography color="textPrimary">{t("users.surname")}</Typography>
          <Typography color="textPrimary">{t("users.email")}</Typography>
          <Typography color="textPrimary">{t("users.support")}</Typography>
        </div>
        <div className={styles.content}>
          <Typography color="textSecondary">{data.id}</Typography>
          <Typography color="textSecondary">{data.first_name}</Typography>
          <Typography color="textSecondary">{data.last_name}</Typography>
          <Typography color="textSecondary">{data.email}</Typography>
          <Typography color="textSecondary">{data.text}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserDetails;
