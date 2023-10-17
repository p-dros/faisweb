import { UsersResponse } from '@/types/pocketbase-types'
import { create } from 'zustand'
import { pb } from '@/lib/pocketbase'

interface AuthStore {
  currentUser: UsersResponse | null
  setCurrentUser: (user: UsersResponse | null) => void
}

export const authStore = create<AuthStore>()((set) => ({
  currentUser: pb.authStore.model as UsersResponse,
  setCurrentUser: (user) => set(() => ({ currentUser: user })),
}))

pb.authStore.onChange((auth) => {
  console.log('auth changed', auth)
  authStore.setState({ currentUser: pb.authStore.model as UsersResponse })
})
