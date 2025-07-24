import Layout from '../layouts/Layout';
import About from '../pages/About';
import Home from '../pages/Home';

const routeInfo = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
    ],
  },
];

export { routeInfo };
