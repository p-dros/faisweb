import { createBrowserRouter } from 'react-router-dom'

import GlobalError from '@/pages/GlobalError'
import ProtectedLayout from '@/pages/ProtectedLayout'

import { Landing } from '@/pages/Landing'

import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'

import { Courses } from '@/pages/Courses'

import links from '@/config/links'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <GlobalError />,
    children: [
      {
        path: links.root,
        element: <Landing />,
      },
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: links.courses,
            element: <Courses />,
          },
        ],
      },
      {
        path: links.login,
        element: <Login />,
      },
      {
        path: links.register,
        element: <Register />,
      },
    ],
  },
])

export default router
