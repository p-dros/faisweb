import { createBrowserRouter } from 'react-router-dom'

import Landing from '@/pages/routes/Landing'
import GlobalError from '@/pages/errors/GlobalError'

import Login from '@/pages/routes/Login'
import Register from '@/pages/routes/Register'

import ProtectedLayout from '@/pages/layouts/Protected'
import Profile from '@/pages/routes/Profile'
import Courses from '@/pages/routes/Courses'
import CoursesError from '@/pages/errors/CourseError'

import links from '@/config/links'
import Course from '@/pages/routes/Course'

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
