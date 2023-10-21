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
import { SignOutButton } from '../buttons'
import Pair from './Pair'

import type { NavLink } from '.'

interface Props {
  navLinks: NavLink[]
  userLinks: NavLink[]
}

function Desktop({ navLinks, userLinks }: Props) {
  const user = authStore((state) => state.currentUser)

  return (
    <Grid gap={8} alignItems={'center'} templateColumns={'1fr 2fr 1fr'} w={'full'} maxW={'container.xl'}>
      <Logo />
      <Flex justifySelf={'center'} as={'nav'} gap={8}>
        {navLinks.map(({ path, title, icon }) => (
          <Button variant={'ghost'} as={Link} key={path} to={path} fontSize={'lg'}>
            <Pair>
              {icon}
              {title}
            </Pair>
          </Button>
        ))}
      </Flex>
      <Box justifySelf={'end'}>
        {user ? (
          <Menu>
            <MenuButton>
              <Avatar name={user.name} src={user.avatar} />
            </MenuButton>
            <MenuList>
              {userLinks.map(({ path, title, icon }) => (
                <MenuItem key={path}>
                  <Link to={path} w={'full'}>
                    <Pair fontSize={'lg'} icon={icon}>
                      <Text>{title}</Text>
                    </Pair>
                  </Link>
                </MenuItem>
              ))}
              <MenuDivider />
              <MenuItem>
                <SignOutButton variant={'ghost'} as={Link} />
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
