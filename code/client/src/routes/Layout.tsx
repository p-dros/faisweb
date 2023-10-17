import { Container } from '@chakra-ui/react'

import { Outlet } from 'react-router-dom'
import Header from '../components/header'

function Root() {
  return (
    <>
      <Header />
      <Container maxW={'8xl'}>
        <Outlet />
      </Container>
    </>
  )
}

export default Root
