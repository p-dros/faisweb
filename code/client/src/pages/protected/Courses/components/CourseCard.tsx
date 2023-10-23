import { CoursesResponse } from '@/types/pocketbase-types'
import { Badge, Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react'

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

export default CourseCard
