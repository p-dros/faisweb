import { ReactNode } from 'react'

import { Center, Grid, Icon, Text, VStack } from '@chakra-ui/react'
import { FaQuoteLeft } from 'react-icons/fa6'

import GridBackground from '@ui/GridBackground'

interface Props {
  children: ReactNode
}

function RegisterWrapper({ children }: Props) {
  return (
    <Grid minH={'100vh'} templateColumns={{ base: '1fr', lg: '3fr 2fr' }}>
      <Center h={'full'} p={10}>
        {children}
      </Center>
      <Center position={'relative'}>
        <GridBackground variant='linear' />
        <Center h={'full'} w={'full'} maxW={'lg'} p={8}>
          <VStack fontSize={'2xl'} align={'start'} gap={8}>
            <Icon as={FaQuoteLeft} boxSize={6} mb={6} />
            <Text fontWeight={'semibold'} letterSpacing={'wide'}>
              &quot;Your website has made it incredibly easy to discover inspiration for my academic journey. The
              multitude of course options and user reviews are an invaluable resource!&quot;
            </Text>
            <Text textAlign={'end'} w='full' as={'i'}>
              Piotr Dros
            </Text>
          </VStack>
        </Center>
      </Center>
    </Grid>
  )
}

export default RegisterWrapper
