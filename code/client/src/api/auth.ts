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
  try {
    const user = await pb.collection('users').authWithPassword<UsersResponse>(email, password)

    return { user, error: null }
  } catch (error) {
    return {
      user: null,
      error,
    }
  }
}

export const createUser = async ({ email, password, passwordConfirm, name }: CreateUserParams) => {
  try {
    const user = await pb.collection('users').create({
      email,
      password,
      passwordConfirm,
      name,
    })
    return { user, error: null }
  } catch (error) {
    return {
      user: null,
      error,
    }
  }
}

export const signOut = () => pb.authStore.clear()
