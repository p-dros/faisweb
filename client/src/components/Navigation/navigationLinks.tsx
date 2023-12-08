import links from '@/config/links'
import { Icon } from '@chakra-ui/react'
import { FaUser } from 'react-icons/fa6'

export const navLinks = [
  {
    title: 'Courses',
    path: links.courses,
  },
  {
    title: 'Lecturers',
    path: links.lecturers,
  },
  {
    title: 'Rankings',
    path: links.ranking,
  },
] as const

export const userLinks = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <Icon as={FaUser} />,
  },
] as const
