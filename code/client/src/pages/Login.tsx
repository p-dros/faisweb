import Form from '../components/Auth/Form'
import Link from '@ui/Link'
import { signIn } from '@/api/auth'
import { authStore } from '@stores/authStore'
import { Center, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { ClientResponseError } from 'pocketbase'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'

import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
})

type Inputs = yup.InferType<typeof schema>

function Login() {
  const user = authStore((state) => state.currentUser)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    const { error } = await signIn({
      email,
      password,
    })

    if (!error) {
      return
    }

    console.dir(error)

    if (error instanceof ClientResponseError) {
      if (error.message === 'Failed to authenticate.') {
        setError('password', {
          type: 'manual',
          message: 'Invalid email or password.',
        })
        return
      }
    }

    setError('root.serverError', {
      message: 'Something went wrong. Please try again later',
    })
  }

  if (user) {
    return <Navigate to={'/'} />
  }

  const serverError = errors.root?.serverError
  if (serverError) {
    throw new Error(serverError.message)
  }

  return (
    <Center minH={'100vh'} p={10}>
      <Form.Wrapper>
        <Form title='Sign in to FAISWeb' onSubmit={handleSubmit(onSubmit)} isSubmitting={isSubmitting}>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <Input {...register('email')} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel>Password</FormLabel>
            <Input type='password' {...register('password')} />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
        </Form>
        <Form.Footer>
          Don&apos;t have an account?{' '}
          <Link fontWeight={'bold'} color={'black'} to={'/sign-up'}>
            Create a free account
          </Link>
        </Form.Footer>
      </Form.Wrapper>
    </Center>
  )
}

export default Login
