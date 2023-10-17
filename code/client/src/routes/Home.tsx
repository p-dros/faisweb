import { authLinks } from '@/config/links'
import { AbsoluteCenter, Box, Button, Center, Heading, Text, VStack } from '@chakra-ui/react'
import Link from '@ui/Link'

function Home() {
  return (
    <Center minH={'100vh'}>
      <AbsoluteCenter zIndex={-1} bgImage={'/grid.svg'} bgSize={'cover'} h={'full'} w={'full'}>
        <Box
          sx={{
            backgroundImage:
              'radial-gradient(at 27% 37%, white 0px, transparent 0%), radial-gradient(at 97% 21%, orange.200 0px, transparent 50%), radial-gradient(at 52% 99%, red.600 0px, transparent 50%), radial-gradient(at 10% 29%, purple.500 0px, transparent 50%), radial-gradient(at 97% 96%, yellow.100 0px, transparent 50%), radial-gradient(at 33% 50%, teal.400 0px, transparent 50%), radial-gradient(at 79% 53%, cyan.200 0px, transparent 50%)',
          }}
          h={'full'}
          w={'full'}
          opacity={0.4}
        />
      </AbsoluteCenter>
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
