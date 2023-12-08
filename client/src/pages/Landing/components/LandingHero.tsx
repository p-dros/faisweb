import links from '@/config/links'
import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import Link from '@ui/Link'
import HighlightText from '@ui/HighlightText'

function LandingHero() {
  return (
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
  )
}

export default LandingHero
