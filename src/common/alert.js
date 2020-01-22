import React, { useState } from "react";
import { Alert } from "reactstrap";

export const ErrorAlert = ({ error }) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="danger" isOpen={visible} toggle={onDismiss}>
      {error}
    </Alert>
  );
};
