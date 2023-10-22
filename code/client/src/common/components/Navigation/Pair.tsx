import { ComponentProps, ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'

type Props = {
  children: ReactNode
} & ComponentProps<typeof Flex>

export default function Pair({ children, ...rest }: Props) {
  return (
    <Flex gap={2} align={'center'} {...rest}>
      {children}
    </Flex>
  )
}
