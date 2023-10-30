import links from '@/config/links'
import { CoursesResponse } from '@/types/pocketbaseTypes'
import { Grid, GridItem } from '@chakra-ui/react'
import Link from '@ui/Link'
import CoursesGalleryCard from './CoursesGalleryCard'

interface Props {
  courses: CoursesResponse[]
}

function CoursesGallery({ courses }: Props) {
  return (
    <Grid gap={8} templateColumns={'repeat(auto-fill, minmax(240px, 1fr))'}>
      {courses.map((course) => (
        <GridItem key={course.id}>
          <Link
            to={`${links.courses}/${course.id}`}
            style={{ textDecoration: 'none' }}>
            <CoursesGalleryCard course={course} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  )
}

function CoursesGallerySkeleton() {
  return (
    <Grid gap={8} templateColumns={'repeat(auto-fill, minmax(240px, 1fr))'}>
      {Array.from({ length: 18 }).map((_, index) => (
        <GridItem key={index}>
          <CoursesGalleryCard.Skeleton />
        </GridItem>
      ))}
    </Grid>
  )
}

CoursesGallery.Skeleton = CoursesGallerySkeleton

export default CoursesGallery
