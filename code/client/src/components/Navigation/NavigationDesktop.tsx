import links from '@/config/links'
import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { authStore } from '@stores/authStore'
import Link from '@ui/Link'
import Logo from '@ui/Logo'

import { signOut } from '@/api/auth'
import { navLinks, userLinks } from './navigationLinks'

function NavigationDesktop() {
  const user = authStore((state) => state.currentUser)

  return (
    <Flex
      gap={8}
      alignItems={'center'}
      w={'full'}
      maxW={'container.xl'}
      justify={'space-between'}>
      <Flex gap={4}>
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
        <Menu>
          <MenuButton>
            <Avatar name={user.name} src={user.avatar} />
          </MenuButton>
          <MenuList fontSize={'lg'}>
            {userLinks.map(({ path, title }) => (
              <MenuItem key={path} textAlign={'center'} fontWeight={500}>
                <Link to={path} w={'full'}>
                  {title}
                </Link>
              </MenuItem>
            ))}
            <MenuDivider />
            <MenuItem>
              <Button
                fontSize={'lg'}
                w='full'
                textAlign={'center'}
                onClick={() => signOut()}
                variant={'unstyled'}
                as={Link}>
                Sign Out
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
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
