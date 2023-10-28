import links from '@/config/links'
import { authStore } from '@/stores/authStore'
import { Box } from '@chakra-ui/react'
import Navigation from '@/components/Navigation'
import { Navigate, Outlet } from 'react-router-dom'
import GridBackground from '@/components/ui/GridBackground'

function ProtectedLayout() {
  const user = authStore((state) => state.currentUser)

  if (!user) {
    return <Navigate to={links.login} />
  }
  return (
    <Box position={'relative'} minH={'100vh'}>
      <GridBackground variant='linear' />
      <Navigation />
      <Box pt={24} px={4}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default ProtectedLayout
