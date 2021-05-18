import React, { FC, useState } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { useTranslation } from "react-i18next";
import { Spinner } from "components/common";
import { Container, Button } from "@material-ui/core";
import styles from "./styles.module.scss";

interface IHeaderLayoutProps {
  children: React.ReactNode;
}

const HeaderLayout: FC<IHeaderLayoutProps> = ({ children }) => {
  const { i18n, t } = useTranslation();
  const { signIn } = useSelector((state: RootStateOrAny) => ({
    signIn: state.main.signIn,
  }));
  const [lang, setLang] = useState("en");

  const handleClick = (val: string) => {
    setLang(val);
    i18n.changeLanguage(val);
  };

  return (
    <Container>
      {signIn.isLoading && <Spinner />}
      <div className={styles.wrapper}>
        <div className={styles.header}>{t("common.appName")}</div>
        <div className={styles.locale}>
          <Button
            size="small"
            onClick={() => handleClick("en")}
            disabled={lang === "en"}
          >
            EN
          </Button>
          <Button
            size="small"
            onClick={() => handleClick("ru")}
            disabled={lang === "ru"}
          >
            RU
          </Button>
          <Button
            size="small"
            onClick={() => handleClick("pl")}
            disabled={lang === "pl"}
          >
            PL
          </Button>
        </div>
      </div>
      {children}
    </Container>
  );
};

export default HeaderLayout;
