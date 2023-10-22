import { Center, Show } from '@chakra-ui/react'
import Desktop from './Desktop'
import Mobile from './Mobile'

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
        <Mobile />
      </Show>
      <Show above={'md'}>
        <Desktop />
      </Show>
    </Center>
  )
}

export default Navigation
