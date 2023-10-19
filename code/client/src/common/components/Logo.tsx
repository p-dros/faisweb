import { Image } from '@chakra-ui/react'
import Link from './Link'
import { ComponentProps } from 'react'
import links from '../links'

type Props = { size?: number } & Omit<ComponentProps<typeof Link>, 'to'>

export default function Logo({ size, ...rest }: Props) {
  return (
    <Link {...rest} to={links.home} p={0}>
      <Image src='/brand/logo.png' alt='FAISWeb' w={`${size ?? 180}px`} objectFit={'cover'} />
    </Link>
  )
}