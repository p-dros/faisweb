import { getCourse } from '@/api/course'
import {
  Box,
  Card,
  CardBody,
  Center,
  Container,
  Heading,
  Spinner,
} from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import CourseRatings from './components/CourseRatings'

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
    <Container maxW='8xl'>
      <Card>
        <CardBody>
          {isLoading && (
            <Center minH={'sm'} w='full' h='full'>
              <Spinner />
            </Center>
          )}
          {isSuccess && (
            <>
              <Box textAlign={'center'}>
                <Heading as={'h1'} size={'2xl'} fontWeight={'medium'}>
                  {course.name}
                </Heading>
              </Box>
              <CourseRatings course={course} />
            </>
          )}
        </CardBody>
      </Card>
    </Container>
  )
}

export default Course
