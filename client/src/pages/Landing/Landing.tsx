import LandingHero from './components/LandingHero'
import links from '@/config/links'
import { Center } from '@chakra-ui/react'
import { useAuthStore } from '@stores/authStore'
import GridBackground from '@ui/GridBackground'
import { Navigate } from 'react-router-dom'

function Landing() {
  const user = useAuthStore((state) => state.currentUser)

  if (user) {
    return <Navigate to={links.courses} />
  }

  return (
    <Center minH={'100vh'} px={4}>
      <GridBackground variant='radial' opacity={0.35} />
      <LandingHero />
    </Center>
  )
}

export default Landing
