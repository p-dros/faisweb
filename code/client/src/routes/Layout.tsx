import Navigation from '@components/navigation'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default Layout
