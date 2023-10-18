import Form from '@/components/auth/Form'
import GridBackground from '@/components/ui/GridBackground'
import Link from '@/components/ui/Link'
import { authLinks } from '@/config/links'
import { createUser } from '@/lib/auth'
import {
  Box,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Icon,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { ClientResponseError } from 'pocketbase'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaQuoteLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().required('Email is required').email('Invalid Email'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  passwordConfirm: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
  regulaminAccept: yup.boolean().oneOf([true], 'You must accept the regulamin'),
})

type Inputs = yup.InferType<typeof schema>

function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Inputs> = async ({ email, name, password, passwordConfirm }) => {
    const { error } = await createUser({ email, name, password, passwordConfirm })

    if (!error) {
      navigate('/sign-in')
      return
    }

    if (error instanceof ClientResponseError) {
      const emailData = error.response?.data?.email
      if (emailData.code && emailData.code === 'validation_invalid_email') {
        setError('email', {
          type: 'server',
          message: emailData.message,
        })
        return
      }
    }

    setError('root.serverError', {
      message: 'Something went wrong. Please try again later',
    })
  }

  const serverError = errors.root?.serverError
  if (serverError) {
    throw new Error(serverError.message)
  }

  return (
    <Grid minH={'100vh'} templateColumns={{ base: '1fr', lg: '3fr 2fr' }}>
      <Center h={'full'} p={6}>
        <Form.Wrapper>
          <Form title='Create a free account' onSubmit={handleSubmit(onSubmit)} isSubmitting={isSubmitting}>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input {...register('email')} />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.name}>
              <FormLabel>Name</FormLabel>
              <Input {...register('name')} />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <Flex gap={4} wrap={{ base: 'wrap', md: 'nowrap' }}>
              <FormControl isInvalid={!!errors.password}>
                <FormLabel>Password</FormLabel>
                <Input type='password' {...register('password')} />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.passwordConfirm}>
                <FormLabel>Confirm Password</FormLabel>
                <Input type='password' {...register('passwordConfirm')} />
                <FormErrorMessage>{errors.passwordConfirm?.message}</FormErrorMessage>
              </FormControl>
            </Flex>
            <FormControl isInvalid={!!errors.regulaminAccept} mt={6}>
              <Checkbox {...register('regulaminAccept')}>I agree to the regulamin</Checkbox>
              <FormErrorMessage>{errors.regulaminAccept?.message}</FormErrorMessage>
            </FormControl>
          </Form>
          <Form.Footer>
            <Text>
              Already have an account?{' '}
              <Link fontWeight={'bold'} color={'black'} to={authLinks.signIn.path}>
                Login Now
              </Link>
            </Text>
          </Form.Footer>
        </Form.Wrapper>
      </Center>
      <Center position={'relative'}>
        <GridBackground variant='linear' />
        <Center h={'full'} w={'full'} maxW={'lg'} p={8}>
          <VStack fontSize={'2xl'} align={'start'} gap={8}>
            <Icon as={FaQuoteLeft} boxSize={6} mb={6} />
            <Text fontWeight={'semibold'} letterSpacing={'wide'}>
              &quot;Your website has made it incredibly easy to discover inspiration for my academic journey. The
              multitude of course options and user reviews are an invaluable resource!&quot;
            </Text>
            <Box textAlign={'end'} w='full'>
              Piotr Dros
            </Box>
          </VStack>
        </Center>
      </Center>
    </Grid>
  )
}

export default SignUp
