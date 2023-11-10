import { Heading, Box } from '@chakra-ui/layout'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function CoursesFiltersPanelDesktop({ children }: Props) {
  return (
    <>
      <Heading as={'h3'} fontSize={'2xl'}>
        Filters
      </Heading>
      <Box mt={4}>{children}</Box>
    </>
  )
}

export default CoursesFiltersPanelDesktop
