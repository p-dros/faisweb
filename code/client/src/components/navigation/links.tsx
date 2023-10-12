import { ReactNode } from 'react'
import { Icon } from '@chakra-ui/react'

import { FaChalkboardTeacher, FaBook } from 'react-icons/fa'
import { FaRankingStar } from 'react-icons/fa6'

interface NavLink {
  title: ReactNode
  path: string
  icon?: ReactNode
}

export const links: NavLink[] = [
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
