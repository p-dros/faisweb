import { signIn } from '@/lib/auth'
import { authStore } from '@/stores/authStore'
import { Button, FormControl, FormErrorMessage, FormLabel, Input, StackDivider, VStack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import AuthCard from './AuthCard'
import { ClientResponseError } from 'pocketbase'

interface Inputs {
  email: string
  password: string
}

function SignIn() {
  const user = authStore((state) => state.currentUser)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    try {
      await signIn({
        email,
        password,
      })
    } catch (error: unknown) {
      if (error instanceof ClientResponseError) {
        if (error.status === 400) {
          setError('password', {
            type: 'manual',
            message: `Invalid email or password`,
          })
        }
      }
    }
  }

  if (user) {
    return <Navigate to={'/'} />
  }

  return (
    <AuthCard title={'Sign In'} additionalDescription={'Use your account'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack divider={<StackDivider />} gap={4}>
          <VStack>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input
                {...register('email', {
                  required: 'Required',
                  maxLength: 20,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input
                type='password'
                {...register('password', {
                  required: 'Required',
                })}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
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
