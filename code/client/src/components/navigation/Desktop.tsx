import Link from '@ui/Link'
import { Avatar, Box, Button, Flex, Grid, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import { authStore } from '@stores/authStore'
import { navLinks, userLinks, authLinks } from '../../config/links'
import Logo from '../Logo'
import IconLink from './IconLink'
import { SignOutButton } from '../auth/buttons'

function Desktop() {
  const user = authStore((state) => state.currentUser)

  return (
    <Grid gap={8} alignItems={'center'} templateColumns={'1fr 2fr 1fr'} w={'full'} maxW={'container.xl'}>
      <Logo />
      <Flex justifySelf={'center'} as={'nav'} gap={8}>
        {navLinks.map(({ path, title, icon }) => (
          <IconLink key={path} to={path} fontSize={'lg'} icon={icon} title={title} />
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
                  <IconLink to={path} fontSize={'lg'} icon={icon} title={title} />
                </MenuItem>
              ))}
              <MenuDivider />
              <MenuItem>
                <SignOutButton as={Link} />
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Flex gap={4}>
            <Button as={Link} to={authLinks.signIn.path} variant={'ghost'}>
              {authLinks.signIn.title}
            </Button>

            <Button as={Link} to={authLinks.signUp.path} variant={'outline'}>
              {authLinks.signUp.title}
            </Button>
          </Flex>
        )}
      </Box>
    </Grid>
  )
}

export default Desktop
