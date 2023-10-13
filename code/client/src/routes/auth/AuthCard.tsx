import Logo from '@ui/Logo'
import { Card, CardBody, CardHeader, Center, Flex, Heading, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  title: string
  children?: ReactNode
  additionalDescription?: string
}

function AuthCard({ title, children, additionalDescription }: Props) {
  return (
    <Center minH={'100vh'}>
      <Card align={'center'}>
        <CardHeader>
          <Flex gap={2} direction={'column'} align={'center'}>
            <Logo />
            <Heading size={'md'} fontWeight={'medium'}>
              {title}
            </Heading>
            <Text fontWeight={'thin'}>{additionalDescription}</Text>
          </Flex>
        </CardHeader>
        <CardBody>{children}</CardBody>
      </Card>
    </Center>
  )
}

export default AuthCard
