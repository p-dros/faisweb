import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'

import { SubmitHandler, useFormContext } from 'react-hook-form'
import Form from '@ui/Form'
import Link from '@ui/Link'

import { LoginInputs } from './loginValidations'

interface LoginFormProps {
  onSubmit: SubmitHandler<LoginInputs>
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useFormContext<LoginInputs>()

  return (
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
  )
}
