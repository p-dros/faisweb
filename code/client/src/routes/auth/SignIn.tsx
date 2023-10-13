import { Button, FormControl, FormErrorMessage, FormLabel, Input, StackDivider, VStack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import AuthCard from './AuthCard'

interface Inputs {
  email: string
  password: string
}

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <AuthCard title={'Sign In'} additionalDescription={'Use your account'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack divider={<StackDivider />} gap={4}>
          <VStack>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input {...register('email', { required: true })} />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input type='password' {...register('password', { required: true })} />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
          </VStack>

          <Button isLoading={isSubmitting} type={'submit'} variant={'solid'} w={'full'}>
            Sign In
          </Button>
        </VStack>
      </form>
    </AuthCard>
  )
}

export default SignIn
