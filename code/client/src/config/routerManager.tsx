import { createBrowserRouter } from 'react-router-dom'

import GlobalError from '@/pages/GlobalError'
import ProtectedLayout from '@/pages/ProtectedLayout'

import { Landing } from '@/pages/Landing'

import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'

import { Courses, CoursesError } from '@/pages/Courses'

import { Course } from '@/pages/Course'

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
            errorElement: <CoursesError />,
          },
          {
            path: `${links.courses}/:courseId`,
            element: <Course />,
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
