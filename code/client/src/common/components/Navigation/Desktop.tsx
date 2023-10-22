import links from '@/common/links'
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import Link from '@components/Link'
import Logo from '@components/Logo'
import { authStore } from '@stores/authStore'

import { navLinks, userLinks } from './navLinks'
import { signOut } from '@/common/lib/auth'

function Desktop() {
  const user = authStore((state) => state.currentUser)

  return (
    <Grid gap={8} alignItems={'center'} templateColumns={'1fr 2fr 1fr'} w={'full'} maxW={'container.xl'}>
      <Logo />
      <Flex justifySelf={'center'} as={'nav'} gap={8}>
        {navLinks.map(({ path, title, icon }) => (
          <Button variant={'ghost'} as={Link} key={path} to={path} fontSize={'lg'}>
            <Flex align={'center'} gap={2}>
              {icon}
              <Text>{title}</Text>
            </Flex>
          </Button>
        ))}
      </Flex>
      <Box justifySelf={'end'}>
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
                <Button fontSize={'lg'} w='full' onClick={() => signOut()} variant={'ghost'} as={Link}>
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
      </Box>
    </Grid>
  )
}

export default Desktop
