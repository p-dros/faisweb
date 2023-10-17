import { Container } from '@chakra-ui/react'

import { Outlet } from 'react-router-dom'
import Navigation from '@components/navigation'

function Layout() {
  return (
    <Container maxW={'container.xl'} p={2}>
      <Navigation />
      <Outlet />
    </Container>
  )
}

export default Layout
