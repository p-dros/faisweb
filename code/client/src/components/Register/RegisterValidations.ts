import * as yup from 'yup'

export const registerSchema = yup.object({
  email: yup.string().required('Email is required').email('Invalid Email'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  passwordConfirm: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
  regulaminAccept: yup.boolean().oneOf([true], 'You must accept the regulamin'),
})

export type RegisterInputs = yup.InferType<typeof registerSchema>
