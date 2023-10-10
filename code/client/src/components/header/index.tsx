import { Image, Flex, Center } from '@chakra-ui/react'
import Navigation from './Navigation'
import Link from './NavLink'

const Logo = () => (
  <Link to={'/'} p={0}>
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
)

function Header() {
  return (
    <Center position={'sticky'} bgGradient={'linear(to-b, blue.800, transparent)'} as='header'>
      <Flex top={0} justify={'space-between'} align={'center'} w={'full'} py={6} px={4} maxW={'1800px'}>
        <Logo />
        <Navigation />
      </Flex>
    </Center>
  )
}

export default Header
