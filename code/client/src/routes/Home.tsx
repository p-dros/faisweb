import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react'

function Home() {
  return (
    <Box>
      <Box
        position={'absolute'}
        h={'100vh'}
        w={'100vw'}
        top={0}
        left={0}
        zIndex={-1}
        bgGradient='radial-gradient(circle, orange.300, transparent 70%)'
        opacity={0.4}
      />
      <Center minH={'100vh'}>
        <VStack mb={20}>
          <Heading as={'h1'} size={'4xl'} fontWeight={'medium'} textAlign={'center'} maxW={'4xl'}>
            The Best Courses in one place
          </Heading>
          <Text fontSize={'2xl'}>Browse Fais courses</Text>
        </VStack>
      </Center>
    </Box>
  )
}

export default Home
