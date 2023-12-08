import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react'

import { SubmitHandler, useFormContext } from 'react-hook-form'
import FormWrapper from '@/components/ui/FormWrapper'
import Link from '@ui/Link'

import { LoginInputs } from '@/config/validations/loginValidations'

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
    <FormWrapper>
      <FormWrapper.Form
        title='Sign in to FAISWeb'
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        errorMessage={errors.root?.message}>
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
      </FormWrapper.Form>
      <FormWrapper.Footer>
        Don&apos;t have an account?{' '}
        <Link fontWeight={'bold'} color={'black'} to={'/sign-up'}>
          Create a free account
        </Link>
      </FormWrapper.Footer>
    </FormWrapper>
  )
}
