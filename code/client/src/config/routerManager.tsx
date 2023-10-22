import { createBrowserRouter } from 'react-router-dom'

import Landing from '@/pages/Landing'
import ErrorPage from '@/pages/Error'

import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'

import Layout from '@/pages/protected/Layout'
import Profile from '@/pages/protected/Profile'
import Courses from '@/pages/protected/Courses'
import Dashboard from '@/pages/protected/Dashboard'

import links from '@/common/links'

const router = createBrowserRouter([
  {
    path: links.root,
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: links.dashboard,
        element: <Dashboard />,
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
