import { getCourses } from '@/api/courses'
import { Container, Grid, GridItem } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import CoursesFiltersPanel from './components/CoursesFiltersPanel'
import CoursesView from './components/CoursesView'

function Courses() {
  const {
    data: courses,
    isLoading,
    isError,
    isSuccess,
  } = useQuery('courses', getCourses)

  return (
    <Container maxW={'container.xl'} p={0}>
      <Grid templateColumns={{ base: '1fr', lg: '1fr 3fr' }} gap={8} p={4}>
        <GridItem>
          <CoursesFiltersPanel />
        </GridItem>
        <GridItem>
          {isLoading && <CoursesView.Skeleton />}
          {isSuccess && <CoursesView courses={courses} />}
          {isError && <CoursesView.Error />}
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Courses
