import Link from '@/common/components/Link'
import links from '@/common/links'
import { Collections, CoursesResponse } from '@/types/pocketbase-types'
import { Badge, Card, CardBody, CardHeader, Container, Grid, GridItem, Heading, Text } from '@chakra-ui/react'

const mockCourses: CoursesResponse[] = [
  {
    ects: 4,
    name: 'Introduction to Computer Science',
    description:
      'This course provides an introduction to the fundamental concepts of computer science, including algorithms, data structures, programming languages, and software engineering principles.',
    semester: 1,
    id: '1',
    created: '2021-08-01T12:00:00Z',
    updated: '2021-08-01T12:00:00Z',
    collectionId: '1',
    collectionName: Collections.Courses,
    field: 'computer-science',
    isFaculty: false,
  },
  {
    ects: 6,
    name: 'Web Development',
    description:
      'This course covers the basics of web development, including HTML, CSS, and JavaScript. Students will learn how to create dynamic web pages and web applications.',
    semester: 2,
    isFaculty: false,
    id: '2',
    created: '2021-08-01T12:00:00Z',
    updated: '2021-08-01T12:00:00Z',
    collectionId: '1',
    collectionName: Collections.Courses,
    field: 'web-development',
  },
  {
    ects: 3,
    name: 'Database Systems',
    description:
      'This course covers the design and implementation of database systems. Topics include data modeling, relational databases, SQL, and database administration.',
    semester: 2,
    id: '3',
    created: '2021-08-01T12:00:00Z',
    updated: '2021-08-01T12:00:00Z',
    collectionId: '1',
    collectionName: Collections.Courses,
    field: 'database-systems',
    isFaculty: false,
  },
  {
    ects: 5,
    name: 'Artificial Intelligence',
    description:
      'This course covers the theory and practice of artificial intelligence. Topics include search algorithms, machine learning, natural language processing, and robotics.',
    semester: 2,
    id: '4',
    created: '2021-08-01T12:00:00Z',
    updated: '2021-08-01T12:00:00Z',
    collectionId: '1',
    collectionName: Collections.Courses,
    field: 'artificial-intelligence',
    isFaculty: true,
  },
  {
    ects: 4,
    name: 'Software Engineering',
    description:
      'This course covers the principles and practices of software engineering. Topics include requirements analysis, design patterns, testing, and project management.',
    semester: 2,
    id: '5',
    created: '2021-08-01T12:00:00Z',
    updated: '2021-08-01T12:00:00Z',
    collectionId: '1',
    collectionName: Collections.Courses,
    field: 'software-engineering',
    isFaculty: true,
  },
]

function Courses() {
  return (
    <Container maxW={'container.xl'} p={0}>
      <Grid templateColumns={{ base: '1fr', lg: '1fr 3fr' }} gap={2} p={4}>
        <GridItem>
          <Heading>Filter</Heading>
        </GridItem>
        <GridItem>
          <Grid gap={8} templateColumns={'repeat(auto-fill, minmax(300px, 1fr))'}>
            {mockCourses.map((course) => (
              <GridItem key={course.id}>
                <Link to={`${links.courses}/${course.id}`} style={{ textDecoration: 'none' }}>
                  <Card h={'full'} size={'sm'} _hover={{ bgColor: 'gray.100', transitionDuration: '120ms' }}>
                    <CardHeader>
                      {course.isFaculty ? (
                        <Badge colorScheme='blue'>Faculty</Badge>
                      ) : (
                        <Badge colorScheme='purple'>Obligatory</Badge>
                      )}
                      <Heading as={'h3'} size={'md'} mt={2}>
                        {course.name}
                      </Heading>
                    </CardHeader>
                    <CardBody>
                      <Text noOfLines={3}>{course.description}</Text>
                    </CardBody>
                  </Card>
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
