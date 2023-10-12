import { Container } from '@chakra-ui/react'

import { Outlet } from 'react-router-dom'
import Navigation from '../components/navigation'

function Root() {
  return (
    <>
      <Navigation />
      <Container maxW={'container.xl'}>
        <Outlet />
      </Container>
    </>
  )
}

export default Root
