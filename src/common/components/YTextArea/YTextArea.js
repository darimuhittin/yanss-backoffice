import React from "react";
import styles from "./YTextArea.scss";

import { Form } from "react-bootstrap";
const YTextArea = ({ title, placeholder, rows, value, onChange }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{title}</Form.Label>
      <Form.Control
        as="textarea"
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default YTextArea;
