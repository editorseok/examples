import React, { useState } from 'react';
import { useProduct } from '../context/ProductContext';
import { Table } from 'react-bootstrap';
import ProductDetail from './ProductDetail';

const ProductTable = () => {
  const [productId, setProductId] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);
  const { products } = useProduct();

  const handleClick = (id: number) => {
    setProductId(id);
    setShow(true);
  };

  return (
    <>
      <Table striped hover style={{ cursor: 'default' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Descript</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr onClick={() => handleClick(product.id)}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.desc}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ProductDetail
        productId={productId}
        modalShow={show}
        onHide={() => setShow(false)}
      />
      ;
    </>
  );
};

export default ProductTable;
