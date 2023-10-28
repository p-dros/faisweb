import { Center, Show } from '@chakra-ui/react'
import NavigationDesktop from './NavigationDesktop'
import NavigationMobile from './NavigationMobile'

function Navigation() {
  return (
    <Center
      position={'fixed'}
      px={6}
      py={4}
      top={0}
      as='header'
      bgColor={'white'}
      borderColor={'gray.200'}
      borderWidth={1}
      w='full'
      zIndex={'tooltip'}>
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
