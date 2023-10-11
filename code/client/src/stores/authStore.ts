import { create } from 'zustand'
import PocketBase, { AuthModel } from 'pocketbase'

const BASE_URL = 'http://127.0.0.1:8090'

const pb = new PocketBase(BASE_URL)

interface AuthStore {
  currentUser: AuthModel
  setCurrentUser: (user: AuthModel) => void
}

export const authStore = create<AuthStore>()((set) => ({
  currentUser: pb.authStore.model,
  setCurrentUser: (user) => set(() => ({ currentUser: user })),
}))

pb.authStore.onChange((auth) => {
  console.log('auth changed', auth)
  authStore.setState({ currentUser: pb.authStore.model })
})
