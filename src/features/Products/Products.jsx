import React, { useState, useEffect } from "react";
import "./Products.scss";

import { Row, Col, Modal, Button } from "react-bootstrap";
import YTable from "common/components/YTable/YTable";

import { ContentHeader, ContentWrapper } from ".";
import ProductCreateModal from "./components/ProductCreateModal";

import API from "app/api/API";

import { columns } from "./util";
import useYTable from "common/hooks/useYTable";
import ProductDeleteModal from "./components/ProductDeleteModal";
const formatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
});

const Products = () => {
  const [products, setProducts] = useState();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [modalMode, setModalMode] = useState("create");
  const [currentProductData, setCurrentProductData] = useState({});
  useEffect(() => {
    refreshProducts();
  }, []);

  const refreshProducts = () => {
    API.get("/shop/products")
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  };
  const handleClose = () => {
    setShowCreateModal(false);
    refreshProducts();
  };

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
    refreshProducts();
  };
  const handleEdit = () => {
    API.get("/shop/products/" + selectedRows[0].original._id)
      .then((data) => setCurrentProductData(data))
      .catch((err) => console.log(err));
  };
  const { selectedRows, onSelectedRowsChange } = useYTable();
  return (
    <ContentWrapper>
      <ContentHeader
        buttons={[
          <Button
            onClick={() => {
              setModalMode("create");
              setShowCreateModal(true);
            }}
            key="button1"
          >
            Create
          </Button>,
          <Button
            onClick={() => {
              setModalMode("edit");
              handleEdit();
              setShowCreateModal(true);
            }}
            variant="warning"
            key="button2"
            disabled={selectedRows.length !== 1}
          >
            Edit
          </Button>,
          <Button
            onClick={() => {
              setShowDeleteModal(true);
            }}
            variant="danger"
            key="button3"
            disabled={selectedRows.length <= 0}
          >
            Delete
          </Button>,
        ]}
      />
      <YTable
        data={products}
        columns={columns}
        onSelectedRowsChange={onSelectedRowsChange}
      />
      <ProductCreateModal
        show={showCreateModal}
        onClose={handleClose}
        modalMode={modalMode}
        currentData={currentProductData}
      />
      <ProductDeleteModal
        show={showDeleteModal}
        onClose={handleDeleteModalClose}
        selectedRows={selectedRows}
      />
    </ContentWrapper>
  );
};

export default Products;
