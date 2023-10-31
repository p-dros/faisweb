import { Box, Flex, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  title: string
  children?: ReactNode
}

const CoursesFiltersGroup = ({ title, children }: Props) => {
  return (
    <Flex direction={'column'} gap={1}>
      <Text fontWeight={'medium'} fontSize={'lg'}>
        {title}
      </Text>
      <Box>{children}</Box>
    </Flex>
  )
}

export default CoursesFiltersGroup
