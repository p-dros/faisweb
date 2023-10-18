import { ComponentProps, ReactNode } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import Link from '@ui/Link'

type Props = {
  children: ReactNode
  icon: ReactNode
} & ComponentProps<typeof Link>

export default function IconLink({ to, children, icon, ...rest }: Props) {
  return (
    <Link {...rest} to={to}>
      <Flex gap={2} align={'center'}>
        {icon}
        <Box>{children}</Box>
      </Flex>
    </Link>
  )
}
