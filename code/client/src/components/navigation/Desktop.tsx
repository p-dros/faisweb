import Link from '@ui/Link'
import { Avatar, Box, Button, Flex, Grid } from '@chakra-ui/react'
import { authStore } from '@stores/authStore'
import { navLinks, signInLink, signUpLink } from './links'
import Logo from './Logo'

function Desktop() {
  const user = authStore((state) => state.currentUser)

  return (
    <Grid gap={8} alignItems={'center'} templateColumns={'1fr 2fr 1fr'} w={'full'} maxW={'container.xl'}>
      <Logo />
      <Flex justifySelf={'center'} as={'nav'} gap={8}>
        {navLinks.map(({ path, title, icon }) => (
          <Link key={path} to={path} fontSize={'lg'} fontWeight={'medium'}>
            <Flex gap={2} align={'center'}>
              {icon}
              {title}
            </Flex>
          </Link>
        ))}
      </Flex>
      <Box justifySelf={'end'}>
        {user ? (
          <Link to={'/profile'}>
            <Avatar name={user.name} src={user.avatar} />
          </Link>
        ) : (
          <Flex gap={4}>
            <Button as={Link} to={signInLink.path} variant={'ghost'}>
              {signInLink.title}
            </Button>

            <Button as={Link} to={signUpLink.path} variant={'outline'}>
              {signUpLink.title}
            </Button>
          </Flex>
        )}
      </Box>
    </Grid>
  )
}

export default Desktop
