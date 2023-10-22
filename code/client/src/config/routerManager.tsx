import { createBrowserRouter } from 'react-router-dom'

import Layout from '@/pages/Layout'
import ErrorPage from '@/pages/Error'

import Home from '@/pages/Home'
import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'
import Profile from '@/pages/Profile'
import Courses from '@/pages/Courses'

import links from '@/common/links'

const router = createBrowserRouter([
  {
    path: links.home,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: links.profile,
        element: <Profile />,
      },
      {
        path: links.courses,
        element: <Courses />,
      },
    ],
  },
  {
    path: links.login,
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: links.register,
    element: <Register />,
    errorElement: <ErrorPage />,
  },
])

export default router
