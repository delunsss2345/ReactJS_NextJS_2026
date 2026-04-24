import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import RecipeDetail from '../pages/RecipeDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'cooking-guide/:slug',
        element: <RecipeDetail />,
      },
      {
        path: 'recipe',
        element: <Navigate to="/cooking-guide/strawberry-shortcake" replace />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default router;
