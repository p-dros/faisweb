import Link from '@ui/Link'
import { Grid, GridItem } from '@chakra-ui/react'
import CourseCard from './CourseCard'
import { CoursesResponse } from '@/types/pocketbase-types'
import links from '@/config/links'

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

export default CoursesView
