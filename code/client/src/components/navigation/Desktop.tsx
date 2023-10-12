import Link from '@ui/Link'
import { Avatar, Button, Flex } from '@chakra-ui/react'
import { authStore } from '@stores/authStore'
import { links } from './links'
import Logo from './Logo'

function Desktop() {
  const user = authStore((state) => state.currentUser)

  return (
    <Flex gap={8} align={'center'} justify={'space-between'} w={'full'} maxW={'container.xl'}>
      <Logo />
      <Flex as={'nav'} gap={8}>
        {links.map(({ path, title, icon }) => (
          <Link key={path} to={path} fontSize={'lg'} fontWeight={'medium'}>
            <Flex gap={2} align={'center'}>
              {icon}
              {title}
            </Flex>
          </Link>
        ))}
      </Flex>
      {user ? (
        <Link to={'/profile'}>
          <Avatar name={user.name} src={user.avatar} />
        </Link>
      ) : (
        <Flex gap={4}>
          <Button as={Link} to={'/sign-in'} variant={'outline'}>
            Sign In
          </Button>

          <Button as={Link} to={'/sign-up'} variant={'solid'} colorScheme='blue'>
            Sign Up
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

export default Desktop
