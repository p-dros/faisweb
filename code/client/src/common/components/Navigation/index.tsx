import { Center, Icon, Show } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

import { FaBook, FaChalkboardTeacher } from 'react-icons/fa'
import { FaRankingStar, FaUser } from 'react-icons/fa6'
import links from '@/common/links'

export interface NavLink {
  title: string
  path: string
  icon?: ReactNode
}

const navLinks: NavLink[] = [
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
]

const userLinks: NavLink[] = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <Icon as={FaUser} />,
  },
]

function Navigation() {
  return (
    <Center
      position={'fixed'}
      paddingBlock={2}
      top={0}
      as='header'
      bgColor={'white'}
      borderColor={'gray.200'}
      borderWidth={1}
      w='full'>
      <Show below={'md'}>
        <Mobile navLinks={navLinks} userLinks={userLinks} />
      </Show>
      <Show above={'md'}>
        <Desktop navLinks={navLinks} userLinks={userLinks} />
      </Show>
    </Center>
  )
}

export default Navigation
