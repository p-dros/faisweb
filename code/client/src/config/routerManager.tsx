import { createBrowserRouter } from 'react-router-dom'

import Layout from '@/pages/Layout'

import ErrorPage from '@/pages/Error'

import Home from '@/pages/Home'
import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/sign-in',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/sign-up',
    element: <Register />,
    errorElement: <ErrorPage />,
  },
])

export default router
