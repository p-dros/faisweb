import { Image } from '@chakra-ui/react'
import Link from './Link'

export default function Logo() {
  return (
    <Link to={'/'} p={0}>
      <Image src='/logo.png' alt='logo' boxSize={'80px'} objectFit={'cover'} />
    </Link>
  )
}
