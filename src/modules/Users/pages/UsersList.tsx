import React, { FC, useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@material-ui/core";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import { Spinner } from "components/common";
import { getUsers } from "modules/Users/reducers/users";
import { history } from "utils";
import styles from "./styles.module.scss";

const UsersList: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const {
    usersList: { data, isLoading },
  } = useSelector((state: RootStateOrAny) => ({
    usersList: state.users.usersList,
  }));

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  function onClick(id: number) {
    history.push(`/users/${id}`);
  }

  if (isLoading || !data) {
    return <Spinner />;
  }

  return (
    <div className={styles.root}>
      <TableContainer component={Paper}>
        <Table className={styles.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>{t("users.id")}</TableCell>
              <TableCell align="right">{t("users.firstName")}</TableCell>
              <TableCell align="right">{t("users.surname")}</TableCell>
              <TableCell align="right">{t("users.email")}</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.data &&
              data.data.map((val: any) => (
                <TableRow key={val.id}>
                  <TableCell component="th" scope="row">
                    {val.id}
                  </TableCell>
                  <TableCell align="right">{val.email}</TableCell>
                  <TableCell align="right">{val.first_name}</TableCell>
                  <TableCell align="right">{val.last_name}</TableCell>
                  <TableCell align="right">
                    <IconButton edge="end" onClick={() => onClick(val.id)}>
                      <AccessibilityIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersList;
