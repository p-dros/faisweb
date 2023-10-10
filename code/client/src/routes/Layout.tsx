import { Box, Container } from '@chakra-ui/react'

import { Outlet } from 'react-router-dom'
import Header from '../components/header'

function Root() {
  return (
    <Box>
      <Container p={[4, 4]} maxW={'8xl'}>
        <Header />
        <Outlet />
      </Container>
    </Box>
  )
}

export default Root
