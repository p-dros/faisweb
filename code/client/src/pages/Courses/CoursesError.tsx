import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Center,
} from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

function CoursesError() {
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
    <Center>
      <Alert
        status='error'
        variant={'subtle'}
        flexDirection={'column'}
        alignItems={'center'}
        textAlign={'center'}
        maxW={'lg'}>
        <AlertIcon />
        <AlertTitle fontSize={'xl'}>Courses could not be loaded</AlertTitle>
        <AlertDescription>
          Sorry, an unexpected error has occured. <br />
          {errorMessage}
        </AlertDescription>
      </Alert>
    </Center>
  )
}

export default CoursesError
