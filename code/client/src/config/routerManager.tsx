import { createBrowserRouter } from 'react-router-dom'

import Landing from '@/pages/Landing'
import GlobalError from '@/layouts/GlobalError'

import Login from '@/pages/Login'
import Register from '@/pages/Register'

import ProtectedLayout from '@/layouts/Protected'
import Profile from '@/pages/Profile'
import Courses from '@/pages/Courses'
import CoursesError from '@components/Courses/Error'

import links from '@/config/links'
import Course from '@/pages/Course'

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
            path: links.profile,
            element: <Profile />,
          },
          {
            path: links.courses,
            element: <Courses />,
          },
          {
            path: `${links.courses}/:courseId`,
            element: <Course />,
            errorElement: <CoursesError />,
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
