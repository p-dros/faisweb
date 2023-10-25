import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Heading, VStack } from '@chakra-ui/react'
import { ComponentProps, ReactNode } from 'react'
import Logo from './Logo'

interface FormWrapperProps {
  children: ReactNode
}

type FormProps = {
  title: string
  children: ReactNode
  errorMessage?: string
  isSubmitting?: boolean
} & ComponentProps<'form'>

interface FooterProps {
  children: ReactNode
}

function Form({ title, children, isSubmitting, errorMessage, ...rest }: FormProps) {
  return (
    <Box w={'full'}>
      <Heading as='h1' mb={4} fontWeight={'medium'} letterSpacing={'wide'}>
        {title}
      </Heading>
      <form {...rest}>
        <VStack>
          {children}
          {errorMessage && (
            <Alert borderRadius={'md'} status='error'>
              <AlertIcon />
              <Box>
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{errorMessage}</AlertDescription>
              </Box>
            </Alert>
          )}
          <Button mt={4} isLoading={isSubmitting ?? false} type={'submit'} variant={'solid'} w={'full'}>
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

function Footer({ children }: FooterProps) {
  return <Box color={'gray.500'}>{children}</Box>
}

function FormWrapper({ children }: FormWrapperProps) {
  return (
    <VStack align={'start'} gap={20}>
      <Logo />
      {children}
    </VStack>
  )
}

Form.Footer = Footer
Form.Wrapper = FormWrapper

export default Form
