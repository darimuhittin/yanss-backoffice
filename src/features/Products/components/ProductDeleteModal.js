import API from "app/api/API";
import { Modal, Button } from "react-bootstrap";

const ProductDeleteModal = ({ show, onClose, selectedRows }) => {
  const handleDelete = () => {
    API.delete("/admin/products", {
      data: { ids: selectedRows.map((row) => row.original._id) },
    })
      .then((data) => {
        console.log(data);
        onClose();
      })
      .catch((err) => console.log(err));
  };
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete the selected products?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductDeleteModal;
