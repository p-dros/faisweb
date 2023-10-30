import { Center, Show } from '@chakra-ui/react'
import NavigationDesktop from './NavigationDesktop'
import NavigationMobile from './NavigationMobile'
import useScroll from '@/hooks/useScroll'

function Navigation() {
  const { hasScrolled, scrollDirection } = useScroll()

  return (
    <Center
      position={'fixed'}
      px={6}
      py={4}
      as='header'
      borderColor={'gray.200'}
      boxShadow={'sm'}
      bgColor={'white'}
      top={hasScrolled && scrollDirection === 'down' ? '-100%' : 0}
      w='full'
      transition={'top 350ms'}
      zIndex={'banner'}>
      <Show below={'md'}>
        <NavigationMobile />
      </Show>
      <Show above={'md'}>
        <NavigationDesktop />
      </Show>
    </Center>
  )
}

export default Navigation
