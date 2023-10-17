import { Image } from '@chakra-ui/react'
import Link from './ui/Link'

export default function Logo() {
  return (
    <Link to={'/'} p={0}>
      <Image src='/logo.png' alt='logo' w={'180px'} objectFit={'cover'} />
    </Link>
  )
}
