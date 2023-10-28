import { createUser } from '@/api/auth'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'

import RegisterForm from './components/RegisterForm'
import { RegisterInputs, registerSchema } from '@/config/validations/RegisterValidations'
import links from '@/config/links'
import { authStore } from '@/stores/authStore'
import RegisterWrapper from './components/RegisterWrapper'
import { ClientResponseError } from 'pocketbase'

function Register() {
  const user = authStore((state) => state.currentUser)
  const navigate = useNavigate()

  const methods = useForm<RegisterInputs>({
    mode: 'onBlur',
    resolver: yupResolver(registerSchema),
  })

  const onSubmit: SubmitHandler<RegisterInputs> = async ({ email, name, password, passwordConfirm }) => {
    try {
      await createUser({ email, name, password, passwordConfirm })
      navigate(links.login)
    } catch (error) {
      if (error instanceof ClientResponseError) {
        methods.setError('root', {
          type: 'manual',
          message: error.response?.message || 'Failed to create user',
        })
      }
    }
  }

  if (user) {
    return <Navigate to={links.courses} />
  }
  return (
    <RegisterWrapper>
      <FormProvider {...methods}>
        <RegisterForm onSubmit={onSubmit} />
      </FormProvider>
    </RegisterWrapper>
  )
}

export default Register
