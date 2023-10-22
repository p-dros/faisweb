import links from '@/common/links'
import { authStore } from '@/stores/authStore'
import Navigation from '@components/Navigation'
import { Navigate, Outlet } from 'react-router-dom'

function Layout() {
  const user = authStore((state) => state.currentUser)

  if (!user) {
    return <Navigate to={links.login} />
  }
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default Layout
