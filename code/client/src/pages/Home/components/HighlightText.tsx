import { Text } from '@chakra-ui/react'
import { ComponentProps, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & ComponentProps<typeof Text>

function HighlightText(props: Props) {
  return (
    <Text
      fontWeight={600}
      color={'white'}
      p={0.5}
      bgColor={'purple.400'}
      display={'inline'}
      letterSpacing={'wide'}
      {...props}
    />
  )
}

export default HighlightText
