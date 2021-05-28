import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { useTranslation } from "react-i18next";
import { Form, Field, Formik, FormikProps, FormikHelpers } from "formik";
import * as yup from "yup";
import { Input } from "components/fields";
import { IFormValues } from "modules/Main/interfaces";
import { usePrevious } from "hooks";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Alert from "@material-ui/lab/Alert";
import { withPortal } from "hocs";
import { AuthorizationUtils } from "utils";
import { login } from "modules/Main/reducers/main";
import styles from "./styles.module.scss";

const Login: FC = () => {
  const dispatch = useDispatch();
  const { signIn } = useSelector((state: RootStateOrAny) => ({
    signIn: state.main.signIn,
  }));
  const [formBag, setFormBag] = useState(null);
  const [isLazyButton, setLazyButton] = useState(false);
  const { t } = useTranslation();
  const prevSignIn = usePrevious(signIn) || { isLoading: false };
  const { error } = signIn;

  const INITIAL_VALUES: IFormValues = {
    email: "",
    password: "",
  };

  const VALIDATION_SCHEMA = yup.object().shape({
    email: yup.string().required(t("common.required")),
    password: yup.string().required(t("common.required")),
  });

  useEffect(() => {
    if (prevSignIn.isLoading && !signIn.isLoading) {
      if (formBag || isLazyButton) {
        formBag && formBag.setSubmitting(false);
        setLazyButton(false);

        if (!signIn.error) {
          AuthorizationUtils.redirectToHomePage();
        }
      }
    }
  }, [formBag, signIn, prevSignIn, isLazyButton]);

  function handleSubmitForm(
    values: IFormValues,
    formikBag: FormikHelpers<IFormValues>
  ) {
    setFormBag(formikBag);
    dispatch(login(values));
  }

  const handleClick = () => {
    setLazyButton(true);
    dispatch(login({ email: "a@a.aa", password: "Password1" }));
  };

  function renderForm(props: FormikProps<IFormValues>) {
    const { isValid, isSubmitting } = props;
    return (
      <Form className={styles.form}>
        <Field
          component={Input}
          required
          name="email"
          label={t("login.user")}
          size="medium"
          placeholder={t("login.user")}
        />
        <Field
          component={Input}
          required
          type="password"
          name="password"
          label={t("login.password")}
          size="medium"
          placeholder={t("login.password")}
        />
        <div className={styles.button}>
          <Button
            size="large"
            type="submit"
            disabled={!isValid || isSubmitting}
            variant="contained"
            color="primary"
          >
            {t("login.signIn")}
          </Button>
        </div>
      </Form>
    );
  }

  return (
    <div className={styles.root}>
      <div>
        {t("login.signIn")}
        {withPortal(t("login.description"))}
      </div>
      {error && (
        <div className={styles.error}>
          <Alert severity="error">{error}</Alert>
        </div>
      )}
      <Formik
        validationSchema={VALIDATION_SCHEMA}
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmitForm}
        validateOnMount
        validateOnBlur
        validateOnChange
      >
        {(props) => renderForm(props)}
      </Formik>
      <div className={styles.form}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{t("common.hint")}</Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.hint}>
            <Typography className={styles.credentials}>
              {t("common.credentials")}
            </Typography>
            <Typography>a@a.aa</Typography>
            <Typography>Password1</Typography>
            <Typography style={{ marginTop: "20px" }}>
              <Button variant="outlined" onClick={handleClick}>
                {t("common.lazy.button")}
              </Button>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Login;
