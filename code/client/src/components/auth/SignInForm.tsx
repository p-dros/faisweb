import { Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Inputs {
  email: string
  password: string
}

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.email}>
        <FormLabel htmlFor='email'>Email address</FormLabel>
        <Input type='text' id='email' {...register('email', { required: true })} />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.password}>
        <FormLabel htmlFor='password'>Password</FormLabel>
        <Input type='password' id='password' {...register('password', { required: true })} />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme='teal' type='submit'>
        Sign In
      </Button>
    </form>
  )
}
