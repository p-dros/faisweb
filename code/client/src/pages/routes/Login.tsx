import { signIn } from '@/api/auth'
import LoginForm from '@/components/Login/LoginForm'
import links from '@/config/links'
import { Center } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { authStore } from '@stores/authStore'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { loginSchema, LoginInputs } from '@/components/Login/loginValidations'

function Login() {
  const user = authStore((state) => state.currentUser)

  const methods = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<LoginInputs> = async ({ email, password }) => {
    await signIn({ email, password })
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
