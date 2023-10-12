import { Link as ChakraLink } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof RouterLink> & ComponentProps<typeof ChakraLink>

function Link(props: Props) {
  return <ChakraLink as={RouterLink} {...props} />
}

export default Link
