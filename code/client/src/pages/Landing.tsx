import { Box, Button, Center, Heading, Text, VStack, Flex } from '@chakra-ui/react'
import GridBackground from '@ui/GridBackground'
import Link from '@ui/Link'
import links from '@/config/links'
import HighlightText from '../components/ui/HighlightText'
import { authStore } from '@stores/authStore'
import { Navigate } from 'react-router-dom'

function Landing() {
  const user = authStore((state) => state.currentUser)

  if (user) {
    return <Navigate to={links.courses} />
  }

  return (
    <Center minH={'100vh'} px={4}>
      <GridBackground variant='radial' opacity={0.35} />
      <Box>
        <VStack gap={6} maxW={'4xl'} textAlign={'center'}>
          <Heading lineHeight={1.3} as={'h1'} size={'3xl'} fontWeight={'bold'}>
            The Best Courses <br />
            in One Place
          </Heading>
          <Text fontSize={'xl'} color={'gray.700'}>
            Explore, Save, and Connect with the Finest Courses in <HighlightText>FAIS</HighlightText> Department
          </Text>
          <Flex gap={4} align={'center'}>
            <Button as={Link} to={links.register}>
              Get Started
            </Button>

            <Button as={Link} to={links.login}>
              Sign In
            </Button>
          </Flex>
        </VStack>
      </Box>
    </Center>
  )
}

export default Landing
