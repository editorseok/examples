import { Button } from 'react-bootstrap';
import { useProduct } from '../context/ProductContext';
import ProductTable from '../components/ProductTable';

const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { products, setProducts } = useProduct();

  const handleClick = () => {
    setProducts((items) => [
      ...items,
      { id: items.length + 1, name: 'name', desc: 'desc' },
    ]);
  };
  return (
    <div>
      <Button onClick={handleClick}>Click Me</Button>
      <ProductTable />
    </div>
  );
};

export default Home;
