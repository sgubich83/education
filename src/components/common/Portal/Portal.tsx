import React, { useState, FC } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./Portal.module.scss";

interface IPortalProps {
  children?: any;
  activator?(name: {
    setShow: (value: ((prevState: boolean) => boolean) | boolean) => void;
  }): boolean;
}

const Portal: FC = ({ children, activator }: IPortalProps) => {
  const [show, setShow] = useState(false);

  const content = (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <CloseIcon
          className={styles.modalClose}
          onClick={() => setShow(false)}
        />
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );

  return (
    <>
      {activator({ setShow })}
      {createPortal(
        <CSSTransition in={show} timeout={120} unmountOnExit>
          {() => <div>{content}</div>}
        </CSSTransition>,
        document.body
      )}
    </>
  );
};

export default Portal;
