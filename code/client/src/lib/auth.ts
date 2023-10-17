import { UsersResponse } from '@/types/pocketbase-types'
import { pb } from './pocketbase'

interface SignInParams {
  email: string
  password: string
}

interface SignUpParams {
  email: string
  password: string
  passwordConfirm: string
  name: string
}

export const signIn = async ({ email, password }: SignInParams) => {
  return await pb.collection('users').authWithPassword<UsersResponse>(email, password)
}

export const signUp = async ({ email, password, passwordConfirm, name }: SignUpParams) => {
  return await pb.collection('users').create<UsersResponse>({ email, password, passwordConfirm, name })
}

export const signOut = () => pb.authStore.clear()
