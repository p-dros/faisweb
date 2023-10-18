import Form from '@/components/auth/Form'
import Link from '@/components/ui/Link'
import { authLinks } from '@/config/links'
import { signIn } from '@/lib/auth'
import { authStore } from '@/stores/authStore'
import { Center, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { ClientResponseError } from 'pocketbase'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'

import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().email('Is not valid email').required('Email is required'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
})

type Inputs = yup.InferType<typeof schema>

function SignIn() {
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

    if (error instanceof ClientResponseError) {
      if (error.status === 400) {
        setError('password', {
          type: 'manual',
          message: `Invalid email or password`,
        })
      }
    }
  }

  if (user) {
    return <Navigate to={'/'} />
  }

  return (
    <Center minH={'100vh'} p={6}>
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
          <Link fontWeight={'bold'} color={'black'} to={authLinks.signUp.path}>
            Create a free account
          </Link>
        </Form.Footer>
      </Form.Wrapper>
    </Center>
  )
}

export default SignIn
