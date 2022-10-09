import React from "react";
import styles from "./YInput.scss";

import { Form } from "react-bootstrap";
const YInput = ({ title, type, placeholder, value, onChange }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{title}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default YInput;
