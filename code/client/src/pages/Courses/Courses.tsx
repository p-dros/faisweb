import { getCourses } from '@/api/courses'
import CoursesView from './components/CoursesView'
import { Container, Grid, GridItem, Heading } from '@chakra-ui/react'
import { useQuery } from 'react-query'

function Courses() {
  const { data: courses, isLoading, isError, isSuccess, error } = useQuery('courses', getCourses)

  if (isError) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
    throw new Error('Something went wrong')
  }

  return (
    <Container maxW={'container.xl'} p={0}>
      <Grid templateColumns={{ base: '1fr', lg: '1fr 3fr' }} gap={2} p={4}>
        <GridItem>
          <Heading>Filter</Heading>
        </GridItem>
        <GridItem>
          {isLoading && <CoursesView.Skeleton />}
          {isSuccess && <CoursesView courses={courses} />}
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Courses
