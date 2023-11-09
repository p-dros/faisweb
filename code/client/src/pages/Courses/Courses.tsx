import { Container, Grid, GridItem } from '@chakra-ui/react'
import { useCourses } from './Courses.hooks'
import CoursesFiltersPanel from './components/Filter/CoursesFiltersPanel'
import CoursesGallery from './components/Gallery/CoursesGallery'

function Courses() {
  const { data: courses, isLoading, isSuccess, error } = useCourses()

  if (error) {
    throw error
  }

  return (
    <Container maxW={'container.xl'} p={0}>
      <Grid
        templateColumns={{ base: '1fr', lg: '1fr 3fr' }}
        justifyContent={'space-between'}
        gap={8}
        p={4}>
        <GridItem>
          <CoursesFiltersPanel />
        </GridItem>
        <GridItem>
          {isLoading && <CoursesGallery.Skeleton />}
          {isSuccess && <CoursesGallery courses={courses.items} />}
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Courses
