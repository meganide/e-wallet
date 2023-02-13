import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AddCard from './views/AddCard/AddCard';
import Home from './views/Home/Home';
import Layout from './components/Layout/Layout';

function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'addcard',
          element: <AddCard />,
        },
      ]
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
