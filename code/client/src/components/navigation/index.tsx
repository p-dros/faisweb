import { Center, Show } from '@chakra-ui/react'
import Desktop from './Desktop'
import Mobile from './Mobile'

function Navigation() {
  return (
    <Center position={'sticky'} top={0} as='header' w='full' bgColor={'white'} boxShadow={'md'}>
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
