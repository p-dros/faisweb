import { Link, Image, Flex } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import Navigation from './Navigation'

function Header() {
  return (
    <Flex as='header' justify={'space-between'} align={'center'}>
      <Link as={RouterLink} to={'/'}>
        <Image
          src='/logo.png'
          alt='logo'
          boxSize={'80px'}
          objectFit={'cover'}
          sx={{
            filter: 'brightness(0) invert(1)',
          }}
        />
      </Link>
      <Navigation />
    </Flex>
  )
}

export default Header
