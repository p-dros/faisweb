import links from '@/config/links'
import { Grid, GridItem } from '@chakra-ui/react'
import Link from '@ui/Link'
import CourseCard from './CourseCard'
import { CoursesResponse } from '@/types/pocketbaseTypes'

interface Props {
  courses: CoursesResponse[]
}

function CoursesView({ courses }: Props) {
  return (
    <Grid gap={8} templateColumns={'repeat(auto-fill, minmax(300px, 1fr))'}>
      {courses.map((course) => (
        <GridItem key={course.id}>
          <Link to={`${links.courses}/${course.id}`} style={{ textDecoration: 'none' }}>
            <CourseCard course={course} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  )
}

function CoursesViewSkeleton() {
  return (
    <Grid gap={8} templateColumns={'repeat(auto-fill, minmax(300px, 1fr))'}>
      {Array.from({ length: 10 }).map((_, index) => (
        <GridItem key={index}>
          <CourseCard.Skeleton />
        </GridItem>
      ))}
    </Grid>
  )
}

CoursesView.Skeleton = CoursesViewSkeleton

export default CoursesView
