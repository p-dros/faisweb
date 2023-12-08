import { UsersResponse } from '@/types/pocketbaseTypes'
import { create } from 'zustand'
import { pb } from '@/config/pocketbase'

interface AuthState {
  currentUser: UsersResponse | null
}

interface AuthActions {
  actions: {
    setCurrentUser: (user: UsersResponse | null) => void
  }
}

export const useAuthStore = create<AuthState & AuthActions>()((set) => ({
  currentUser: pb.authStore.model as UsersResponse,
  actions: {
    setCurrentUser: (user) => set(() => ({ currentUser: user })),
  },
}))

export const useAuthActions = () => useAuthStore((state) => state.actions)

pb.authStore.onChange((auth) => {
  console.log('auth changed', auth)
  useAuthStore.setState({ currentUser: pb.authStore.model as UsersResponse })
})
