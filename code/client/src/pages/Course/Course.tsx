import { getCourse } from '@/api/course'
import { Card, CardBody, Center, Spinner } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

function Course() {
  const { courseId } = useParams<{ courseId: string }>()

  if (!courseId) throw new Error('Course id is required')

  const {
    data: course,
    isLoading,
    isSuccess,
    error,
  } = useQuery(['course', courseId], () => getCourse(courseId))

  if (error) throw error

  return (
    <Card>
      <CardBody>
        {isLoading && (
          <Center minH={'sm'} w='full' h='full'>
            <Spinner />
          </Center>
        )}
        {isSuccess && <div>{course.name}</div>}
      </CardBody>
    </Card>
  )
}

export default Course
