import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import RegistrationPage from './pages/registration';

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/registration",
      element: <RegistrationPage />,
    },
  ])
  return (
    <RouterProvider router={router} />
  );
};

export default App;



