import { Checkbox, Flex, FormControl, FormErrorMessage, FormLabel, Input, Text } from '@chakra-ui/react'
import Link from '@ui/Link'
import { yupResolver } from '@hookform/resolvers/yup'
import { createUser } from '@/api/auth'
import { ClientResponseError } from 'pocketbase'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Form from '../../components/Auth/Form'

import links from '@/config/links'
import * as yup from 'yup'
import Wrapper from '../../components/Auth/Register/Wrapper'

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

function Register() {
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
      navigate(links.login)
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
    <Wrapper>
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
            <Link fontWeight={'bold'} color={'black'} to={links.login}>
              Login Now
            </Link>
          </Text>
        </Form.Footer>
      </Form.Wrapper>
    </Wrapper>
  )
}

export default Register
