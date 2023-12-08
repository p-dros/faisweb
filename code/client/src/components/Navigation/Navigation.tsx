import { Center, Show } from '@chakra-ui/react'
import React from 'react'
import NavigationDesktop from './NavigationDesktop'
import NavigationMobile from './NavigationMobile'
import useScroll from '@/hooks/useScroll'

// Memoized NavigationMobile component
const MemoizedNavigationMobile = React.memo(NavigationMobile)

// Memoized NavigationDesktop component
const MemoizedNavigationDesktop = React.memo(NavigationDesktop)

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
        {/* Use the memoized version */}
        <MemoizedNavigationMobile />
      </Show>
      <Show above={'md'}>
        {/* Use the memoized version */}
        <MemoizedNavigationDesktop />
      </Show>
    </Center>
  )
}

export default Navigation
