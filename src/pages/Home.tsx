import { Button } from 'react-bootstrap';
import { useProduct } from '../context/ProductContext';

const Home = () => {
  const { productId, setProductId } = useProduct();
  const handleClick = () => {
    setProductId((prev) => prev + 1);
  };
  return (
    <div>
      <p>Id: {productId}</p>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default Home;
