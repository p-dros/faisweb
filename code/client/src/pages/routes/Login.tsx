import { signIn } from '@/api/auth'
import LoginForm from '@/components/Login/LoginForm'
import links from '@/config/links'
import { Center } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { authStore } from '@stores/authStore'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { loginSchema, LoginInputs } from '@/components/Login/loginValidations'
import { ClientResponseError } from 'pocketbase'

function Login() {
  const user = authStore((state) => state.currentUser)

  const methods = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<LoginInputs> = async ({ email, password }) => {
    try {
      await signIn({ email, password })
    } catch (error) {
      if (error instanceof ClientResponseError) {
        methods.setError('root', {
          type: 'manual',
          message: error.response?.message || 'Failed to authenticate',
        })
      }
    }
  }

  if (user) {
    return <Navigate to={links.courses} />
  }
  return (
    <Center minH={'100vh'} p={10}>
      <FormProvider {...methods}>
        <LoginForm onSubmit={onSubmit} />
      </FormProvider>
    </Center>
  )
}

export default Login
