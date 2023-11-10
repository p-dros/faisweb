import links from '@/config/links'
import { Avatar, Button, Flex, Icon, Text } from '@chakra-ui/react'
import { useAuthStore } from '@stores/authStore'
import Link from '@ui/Link'
import Logo from '@ui/Logo'

import { signOut } from '@/api/auth'
import { FaDoorOpen } from 'react-icons/fa6'
import { navLinks } from './navigationLinks'
import { pb } from '@/config/pocketbase'

function NavigationDesktop() {
  const user = useAuthStore((state) => state.currentUser)
  console.log(user?.avatar)
  return (
    <Flex
      gap={8}
      alignItems={'center'}
      w={'full'}
      maxW={'container.xl'}
      justify={'space-between'}>
      <Flex gap={8}>
        <Logo />
        <Flex as={'nav'} gap={2}>
          {navLinks.map(({ path, title }) => (
            <Button
              variant={'ghost'}
              as={Link}
              key={path}
              to={path}
              fontSize={'lg'}>
              <Text>{title}</Text>
            </Button>
          ))}
        </Flex>
      </Flex>
      {user ? (
        <Flex align={'center'} gap={2}>
          <Link to={links.profile}>
            <Avatar
              name={user.name}
              src={pb.files.getUrl(user, user.avatar, { thumb: '10x10' })}
            />
          </Link>
          <Button aria-label='Sign Out' variant={'ghost'} onClick={signOut}>
            <Icon as={FaDoorOpen} />
          </Button>
        </Flex>
      ) : (
        <Flex gap={4}>
          <Button as={Link} to={links.login} variant={'ghost'}>
            Sign In
          </Button>

          <Button as={Link} to={links.register} variant={'outline'}>
            Sign Up
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

export default NavigationDesktop
