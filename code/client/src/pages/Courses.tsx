import { getCourses } from '@/api/courses'
import Link from '@ui/Link'
import links from '@/config/links'
import { Container, Grid, GridItem, Heading } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import CourseCard from '../components/Courses/CourseCard'

function Courses() {
  const { data: courses, isLoading, error, isSuccess } = useQuery('courses', getCourses)

  if (error) {
    throw new Error("Couldn't fetch courses")
  }

  return (
    <Container maxW={'container.xl'} p={0}>
      <Grid templateColumns={{ base: '1fr', lg: '1fr 3fr' }} gap={2} p={4}>
        <GridItem>
          <Heading>Filter</Heading>
        </GridItem>
        <GridItem>
          <Grid gap={8} templateColumns={'repeat(auto-fill, minmax(300px, 1fr))'}>
            {isLoading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <GridItem key={index}>
                    <CourseCard.Skeleton />
                  </GridItem>
                ))
              : isSuccess &&
                courses.map((course) => (
                  <GridItem key={course.id}>
                    <Link to={`${links.courses}/${course.id}`} style={{ textDecoration: 'none' }}>
                      <CourseCard course={course} />
                    </Link>
                  </GridItem>
                ))}
          </Grid>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Courses
