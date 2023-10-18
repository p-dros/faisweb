import { Image } from '@chakra-ui/react'
import Link from './ui/Link'
import { ComponentProps } from 'react'

type Props = Omit<ComponentProps<typeof Link>, 'to'>

export default function Logo(props: Props) {
  return (
    <Link {...props} to={'/'} p={0}>
      <Image src='/logo.png' alt='FAISWeb' w={'180px'} objectFit={'cover'} />
    </Link>
  )
}
