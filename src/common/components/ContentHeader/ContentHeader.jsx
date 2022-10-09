import React from "react";

import styles from "./ContentHeader.module.scss";
import { Button } from "react-bootstrap";
import classNames from "util/classNames";

const ContentHeader = ({ buttons }) => {
  return (
    <div className={styles.contentHeader__container}>
      <div
        className={classNames(
          styles.contentHeader__buttonContainer,
          "space-x-2"
        )}
      >
        {buttons}
      </div>
    </div>
  );
};

export default ContentHeader;
