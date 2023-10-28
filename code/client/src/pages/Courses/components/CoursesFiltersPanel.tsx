import { Box, Card, CardBody, Show } from '@chakra-ui/react'
import CoursesFiltersPanelMobile from './CoursesFiltersPanelMobile'

interface Props {}

function CoursesFilters({}: Props) {
  return (
    <Card>
      <CardBody>
        <Show above='md'></Show>
        <Show below='md'>
          <CoursesFiltersPanelMobile />
        </Show>
      </CardBody>
    </Card>
  )
}

function Filters() {
  return <Box>FILTERS</Box>
}

export default CoursesFilters
