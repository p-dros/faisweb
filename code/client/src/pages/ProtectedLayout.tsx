import links from '@/config/links'
import { authStore } from '@/stores/authStore'
import { Box } from '@chakra-ui/react'
import Navigation from '@/components/Navigation'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedLayout() {
  const user = authStore((state) => state.currentUser)

  if (!user) {
    return <Navigate to={links.login} />
  }
  return (
    <>
      <Navigation />
      <Box mt={24} px={4}>
        <Outlet />
      </Box>
    </>
  )
}

export default ProtectedLayout
