import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { routeInfo } from './utils/routes';
import { ProductProvider } from './context/ProductContext';

const router = createBrowserRouter(routeInfo);

function App() {
  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  );
}

export default App;
