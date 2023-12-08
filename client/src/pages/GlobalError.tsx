import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

import { Center, Flex, Box, Text, Heading } from '@chakra-ui/react'
import GridBackground from '@/components/ui/GridBackground'

function GlobalError() {
  const error = useRouteError()
  let errorMessage: string

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'string') {
    errorMessage = error
  } else {
    errorMessage = 'Unknown error'
  }

  return (
    <Center minH={'100vh'}>
      <GridBackground variant='linear' opacity={0.35} />

      <Flex direction={'column'} align={'center'} gap={4}>
        <Heading as={'h1'} size={'3xl'}>
          Oops!
        </Heading>
        <Box textAlign={'center'}>
          <Text>Sorry, an unexpected error has occured.</Text>
          <Text as={'i'}>{errorMessage}</Text>
        </Box>
      </Flex>
    </Center>
  )
}

export default GlobalError
