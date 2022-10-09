import React, { useState, useEffect } from "react";

import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import YInput from "common/components/YInput/YInput";
import YFileInput from "common/components/YFileInput/YFileInput";
import YTextArea from "common/components/YTextArea/YTextArea";

import API from "app/api/API";
const ProductCreateModal = ({ show, onClose, modalMode, currentData }) => {
  const [productImages, setProductImages] = useState([]);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productStock, setProductStock] = useState(0);
  const [productPrice, setProductPrice] = useState(0);

  const submitForm = () => {
    const body = {
      images: productImages,
      name: productName,
      price: productPrice,
      desc: productDescription,
      stock: productStock,
    };
    console.log(body);
    API.postForm("/admin/products", body)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  const onCreate = () => {
    submitForm();
    onClose();
  };

  const onEdit = () => {
    const body = {
      images: productImages,
      name: productName,
      price: productPrice,
      desc: productDescription,
      stock: productStock,
    };
    API.put("/admin/products/" + currentData._id, body)
      .then((data) => {
        console.log(data);
        onClose();
      })
      .catch((err) => console.log(err));
  };

  const clearAllData = () => {
    setProductName("");
    setProductDescription("");
    setProductStock(0);
    setProductPrice(0);
  };
  useEffect(() => {
    if (modalMode === "create") {
      clearAllData();
    } else if (modalMode === "edit") {
      console.log("here");
      setProductImages(currentData.images);
      setProductName(currentData.name);
      setProductDescription(currentData.desc);
      setProductStock(currentData.stock);
      setProductPrice(currentData.price);
    }
  }, [currentData, modalMode]);
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {modalMode === "create" ? "Urun Olustur" : "Urun Duzenle"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <YFileInput
            multiple
            onChange={(e) => {
              setProductImages(e.target.files);
            }}
          />
          <YInput
            title="Urun Adi"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
          <YTextArea
            title="Aciklama"
            rows={3}
            value={productDescription}
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
          />
          <Row>
            <Col>
              <YInput
                title="Stok"
                type={"number"}
                value={productStock}
                onChange={(e) => {
                  setProductStock(e.target.value);
                }}
              />
            </Col>
            <Col>
              <YInput
                title="Fiyat"
                type="number"
                value={productPrice}
                onChange={(e) => {
                  setProductPrice(e.target.value);
                }}
              />
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={modalMode === "create" ? onCreate : onEdit}
        >
          {modalMode === "create" ? "Create" : "Edit"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductCreateModal;
