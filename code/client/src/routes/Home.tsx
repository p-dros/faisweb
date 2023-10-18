import GridBackground from '@/components/ui/GridBackground'
import { authLinks } from '@/config/links'
import { Box, Button, Center, Heading, Text, VStack } from '@chakra-ui/react'
import Link from '@ui/Link'

function Home() {
  return (
    <Center minH={'100vh'}>
      <GridBackground variant='radial' opacity={0.35} />
      <Box>
        <VStack gap={6} maxW={'4xl'} textAlign={'center'}>
          <Heading lineHeight={1.3} as={'h1'} size={'3xl'} fontWeight={'bold'}>
            The Best Courses <br />
            in One Place
          </Heading>
          <Text fontSize={'xl'} color={'gray.700'}>
            Explore, Save, and Connect with the Finest Courses in{' '}
            <Text
              to={'https://fais.uj.edu.pl/'}
              as={Link}
              fontWeight={600}
              color={'white'}
              p={0.5}
              bgColor={'purple.400'}
              display={'inline'}
              letterSpacing={'wide'}>
              FAIS
            </Text>{' '}
            Department
          </Text>
          <Button as={Link} to={authLinks.signUp.path}>
            {authLinks.signUp.title}
          </Button>
        </VStack>
      </Box>
    </Center>
  )
}

export default Home
