import { Box, Container } from '@chakra-ui/react'

import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <Box>
      <Container paddingBlock={4} maxW={'1300px'}>
        <Outlet />
      </Container>
    </Box>
  )
}

export default Root
