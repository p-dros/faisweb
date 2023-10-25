import { Icon } from '@chakra-ui/react'
import { FaBook, FaChalkboardTeacher } from 'react-icons/fa'
import { FaRankingStar, FaUser } from 'react-icons/fa6'
import links from '@/config/links'

export const navLinks = [
  {
    title: 'Courses',
    path: links.courses,
    icon: <Icon as={FaBook} />,
  },
  {
    title: 'Lecturers',
    path: links.lecturers,
    icon: <Icon as={FaChalkboardTeacher} />,
  },
  {
    title: 'Rankings',
    path: links.ranking,
    icon: <Icon as={FaRankingStar} />,
  },
] as const

export const userLinks = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <Icon as={FaUser} />,
  },
] as const
