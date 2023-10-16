import { ComponentProps, ReactNode } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import Link from '@ui/Link'

type Props = {
  title: string
  icon: ReactNode
} & Omit<ComponentProps<typeof Link>, 'title'>

export default function IconLink({ to, title, icon, ...rest }: Props) {
  return (
    <Link {...rest} to={to}>
      <Flex gap={2} align={'center'}>
        {icon}
        <Text>{title}</Text>
      </Flex>
    </Link>
  )
}
