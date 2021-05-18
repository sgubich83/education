import React, { FC } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

interface IErrorProps {
  type?: "error" | "warning" | "info" | "success";
  titleText?: string;
  description?: string;
}

const ErrorMessage: FC<IErrorProps> = (props) => {
  const { type = "error", titleText = "Error", description = "Error" } = props;

  return (
    <Alert severity={type}>
      <AlertTitle>{titleText}</AlertTitle>
      {description}
    </Alert>
  );
};

export default ErrorMessage;
