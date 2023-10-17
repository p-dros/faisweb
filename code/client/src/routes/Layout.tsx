import { Outlet } from 'react-router-dom'
import Navigation from '@components/navigation'

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default Layout
