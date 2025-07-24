import React from 'react';
import { Button, Modal } from 'react-bootstrap';

interface ProductDetailProps {
  productId: number;
  modalShow: boolean;
  onHide: () => void;
}

const ProductDetail = ({
  productId,
  modalShow,
  onHide,
  ...props
}: ProductDetailProps) => {
  return (
    <Modal
      show={modalShow}
      onHide={onHide}
      backdrop='static'
      aria-labelledby='product-detail-modal'
      {...props}>
      <Modal.Header closeButton>
        <Modal.Title id='product-detail-modal'>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body {productId}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductDetail;
