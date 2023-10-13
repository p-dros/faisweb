import { ReactNode } from 'react'
import { Icon } from '@chakra-ui/react'

import { FaChalkboardTeacher, FaBook, FaDoorOpen } from 'react-icons/fa'
import { FaRankingStar } from 'react-icons/fa6'

interface NavLink {
  title: ReactNode
  path: string
  icon?: ReactNode
}

export const navLinks: NavLink[] = [
  {
    title: 'Courses',
    path: '/courses',
    icon: <Icon as={FaBook} />,
  },
  {
    title: 'Lecturers',
    path: '/lecturers',
    icon: <Icon as={FaChalkboardTeacher} />,
  },
  {
    title: 'Rankings',
    path: '/ranking',
    icon: <Icon as={FaRankingStar} />,
  },
]

export const signInLink: NavLink = {
  title: 'Sign In',
  path: '/sign-in',
  icon: <Icon as={FaDoorOpen} />,
}

export const signUpLink: NavLink = {
  title: 'Get started',
  path: '/sign-up',
}
