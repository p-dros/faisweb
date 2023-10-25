import { UsersResponse } from '@/types/pocketbase-types'
import { pb } from '@/config/pocketbase'

interface SignInParams {
  email: string
  password: string
}

interface CreateUserParams {
  email: string
  password: string
  passwordConfirm: string
  name: string
}

export const signIn = async ({ email, password }: SignInParams) => {
  return await pb.collection('users').authWithPassword<UsersResponse>(email, password)
}

export const createUser = async ({ email, password, passwordConfirm, name }: CreateUserParams) => {
  const user = await pb.collection('users').create({
    email,
    password,
    passwordConfirm,
    name,
  })
  return { user, error: null }
}

export const signOut = () => pb.authStore.clear()
