import links from '@/config/links'
import { Center, Grid, GridItem } from '@chakra-ui/react'
import Link from '@ui/Link'
import CourseCard from './CoursesCard'
import { CoursesResponse } from '@/types/pocketbaseTypes'

interface Props {
  courses: CoursesResponse[]
}

function CoursesView({ courses }: Props) {
  return (
    <Grid gap={8} templateColumns={'repeat(auto-fill, minmax(240px, 1fr))'}>
      {courses.map((course) => (
        <GridItem key={course.id}>
          <Link
            to={`${links.courses}/${course.id}`}
            style={{ textDecoration: 'none' }}>
            <CourseCard course={course} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  )
}

function CoursesViewSkeleton() {
  return (
    <Grid gap={8} templateColumns={'repeat(auto-fill, minmax(240px, 1fr))'}>
      {Array.from({ length: 18 }).map((_, index) => (
        <GridItem key={index}>
          <CourseCard.Skeleton />
        </GridItem>
      ))}
    </Grid>
  )
}

function CoursesViewError() {
  return <Center>Error</Center>
}

CoursesView.Skeleton = CoursesViewSkeleton
CoursesView.Error = CoursesViewError

export default CoursesView
