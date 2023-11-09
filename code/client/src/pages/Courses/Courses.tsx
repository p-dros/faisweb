import { getFilteredCourses } from '@/api/courses'
import { useFilterStore } from '@/stores/filtersStore'
import { Container, Grid, GridItem } from '@chakra-ui/react'
import { useDebounce } from '@uidotdev/usehooks'
import { useQuery } from 'react-query'
import CoursesFiltersPanel from './components/Filter/CoursesFiltersPanel'
import CoursesGallery from './components/Gallery/CoursesGallery'

function Courses() {
  const filters = useFilterStore((state) => state.filters)
  const debouncedName = useDebounce(filters.name, 500)
  const {
    data: courses,
    isLoading,
    isSuccess,
  } = useQuery(['courses', filters], () =>
    getFilteredCourses({
      filters: { ...filters, name: debouncedName },
      expand: 'fields',
    })
  )

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
