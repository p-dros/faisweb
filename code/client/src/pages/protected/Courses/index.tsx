import Link from '@/common/components/Link'
import links from '@/common/links'
import { CoursesResponse } from '@/types/pocketbase-types'
import { Container, Grid, GridItem, Heading } from '@chakra-ui/react'
import { useLoaderData } from 'react-router-dom'
import CourseCard from './components/CourseCard'

function Courses() {
  const courses = useLoaderData() as CoursesResponse[]

  return (
    <Container maxW={'container.xl'} p={0}>
      <Grid templateColumns={{ base: '1fr', lg: '1fr 3fr' }} gap={2} p={4}>
        <GridItem>
          <Heading>Filter</Heading>
        </GridItem>
        <GridItem>
          <Grid gap={8} templateColumns={'repeat(auto-fill, minmax(300px, 1fr))'}>
            {courses.map((course) => (
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
