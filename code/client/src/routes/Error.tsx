import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

import { Center, Flex, Heading } from '@chakra-ui/react'

function ErrorPage() {
  const error = useRouteError()
  console.error(error)
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
    <Center h={'100vh'}>
      <Flex direction={'column'} align={'center'}>
        <Heading as={'h1'} size={'3xl'}>
          Oops!
        </Heading>
        <p>Sorry, an unexpected error has occured.</p>
        <p>
          <i>{errorMessage}</i>
        </p>
      </Flex>
    </Center>
  )
}

export default ErrorPage
