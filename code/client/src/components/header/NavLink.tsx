import { Link as ChakraLink } from '@chakra-ui/react'
import { ComponentProps } from 'react'
import { Link as RouterLink } from 'react-router-dom'

type Props = ComponentProps<typeof RouterLink> & ComponentProps<typeof ChakraLink>

function Link(props: Props) {
  return <ChakraLink as={RouterLink} {...props} />
}

export default Link
