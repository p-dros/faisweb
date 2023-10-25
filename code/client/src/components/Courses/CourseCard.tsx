import { CoursesResponse } from '@/types/pocketbase-types'
import { Badge, Card, CardBody, CardHeader, Heading, Text, Skeleton, SkeletonText } from '@chakra-ui/react'

interface Props {
  course: CoursesResponse
}

function CourseCard({ course }: Props) {
  return (
    <Card
      h={'full'}
      size={'sm'}
      _hover={{ transform: 'scale(1.02)' }}
      transition={'150ms'}
      bgColor={!course.isOptional ? 'purple.100' : 'gray.200'}>
      <CardHeader>
        {course.isOptional ? <Badge>Optional</Badge> : <Badge>Obligatory</Badge>}
        <Heading as={'h3'} size={'md'} mt={2}>
          {course.name}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text noOfLines={3}>{course.description}</Text>
      </CardBody>
    </Card>
  )
}

function CardSkeleton() {
  return (
    <Card h={'full'} size={'sm'}>
      <CardHeader>
        <Skeleton height={'20px'} width={'70px'} />
        <SkeletonText noOfLines={1} mt={2} skeletonHeight={6} />
      </CardHeader>
      <CardBody>
        <SkeletonText noOfLines={3} skeletonHeight={3} />
      </CardBody>
    </Card>
  )
}

CourseCard.Skeleton = CardSkeleton

export default CourseCard
