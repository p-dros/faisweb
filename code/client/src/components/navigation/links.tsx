import { Icon } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { FaBook, FaChalkboardTeacher } from 'react-icons/fa'
import { FaKey, FaRankingStar, FaUser } from 'react-icons/fa6'

interface NavLink {
  title: string
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

export const userLinks: NavLink[] = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <Icon as={FaUser} />,
  },
]

export const authLinks = {
  signIn: {
    title: 'Sign In',
    path: '/sign-in',
    icon: <Icon as={FaKey} />,
  },
  signUp: {
    title: 'Get started',
    path: '/sign-up',
  },
}
