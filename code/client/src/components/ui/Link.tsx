import { Link as ChakraLink } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { ComponentProps, forwardRef } from 'react'

type Props = ComponentProps<typeof RouterLink> & ComponentProps<typeof ChakraLink>

const Link = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  return <ChakraLink as={RouterLink} {...props} ref={ref} />
})

Link.displayName = 'Link'

export default Link
