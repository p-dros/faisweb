import { UsersResponse } from '@/types/pocketbase-types'
import PocketBase from 'pocketbase'
import { create } from 'zustand'

const BASE_URL = 'http://127.0.0.1:8090'

const pb = new PocketBase(BASE_URL)

import { RecordAuthResponse } from 'pocketbase'

interface AuthStore {
  currentUser: UsersResponse | null
  setCurrentUser: (user: UsersResponse | null) => void
  login: (email: string, password: string) => Promise<RecordAuthResponse<UsersResponse>>
  signUp: (email: string, name: string, password: string) => Promise<UsersResponse>
}

export const authStore = create<AuthStore>()((set) => ({
  currentUser: pb.authStore.model as UsersResponse,
  setCurrentUser: (user) => set(() => ({ currentUser: user })),

  login: async (email, password) => {
    return await pb.collection('users').authWithPassword<UsersResponse>(email, password)
  },

  signUp: async (email, name, password) => {
    return await pb.collection('users').create<UsersResponse>({ email, password, passwordConfirm: password, name })
  },
}))

pb.authStore.onChange((auth) => {
  console.log('auth changed', auth)
  authStore.setState({ currentUser: pb.authStore.model as UsersResponse })
})
