import { signOut } from '@/lib/auth'
import { Button, Flex, Icon, Text } from '@chakra-ui/react'
import { ComponentProps } from 'react'
import { FaDoorOpen } from 'react-icons/fa6'

type SignOutButtonProps = {
  gap?: number
} & Omit<ComponentProps<typeof Button>, 'onClick'>

export function SignOutButton({ gap, ...rest }: SignOutButtonProps) {
  return (
    <Button {...rest} onClick={() => signOut()}>
      <Flex gap={gap ?? 2} align={'center'}>
        <Icon as={FaDoorOpen} />
        <Text>Sign Out</Text>
      </Flex>
    </Button>
  )
}
