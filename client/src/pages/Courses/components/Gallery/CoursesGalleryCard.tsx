import { CoursesResponseWithFields } from '@/types/pocketbaseExtensions'
import { CoursesResponse } from '@/types/pocketbaseTypes'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Icon,
  Skeleton,
  SkeletonText,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ReactNode, useMemo } from 'react'

import {
  FaCalendar,
  FaGraduationCap,
  FaRegSnowflake,
  FaSun,
} from 'react-icons/fa6'
import CoursesGalleryCardFieldsBadges from './CoursesGalleryCardFieldsBadges'

interface Props {
  course: CoursesResponseWithFields
}

interface CourseInfo {
  label: string
  value: string | number
  icon: ReactNode
}

const getCourseInfo = ({
  ects,
  season,
  semester,
  type,
}: CoursesResponse): CourseInfo[] => {
  return [
    { label: 'ECTS', value: ects, icon: <Icon as={FaGraduationCap} /> },
    type === 'optional'
      ? {
          label: 'Season',
          value: season,
          icon: <Icon as={season === 'summer' ? FaSun : FaRegSnowflake} />,
        }
      : { label: 'Semester', value: semester, icon: <Icon as={FaCalendar} /> },
  ]
}

function CoursesGalleryCard({ course }: Props) {
  const courseInfo = useMemo(() => getCourseInfo(course), [course])

  return (
    <Card
      h={'full'}
      size={'sm'}
      _hover={{ bgColor: 'gray.100' }}
      transition={'background-color 50ms'}>
      <CardHeader>
        <Heading as={'h3'} size={'md'} mt={2}>
          {course.name}
          <CoursesGalleryCardFieldsBadges
            fields={course.expand?.fields || []}
          />
        </Heading>
      </CardHeader>
      <CardBody>
        <Text fontSize={'sm'}>{course.short_description}</Text>
      </CardBody>
      <CardFooter display={'block'}>
        <VStack divider={<StackDivider />} mt={6}>
          {courseInfo.map(({ label, value, icon }) => (
            <Flex
              key={label}
              gap={2}
              fontSize={'sm'}
              justify={'space-between'}
              w='full'>
              <Flex align={'center'} gap={2}>
                {icon}
                <Text fontWeight={'bold'}>{label}:</Text>
              </Flex>
              <Text>{value}</Text>
            </Flex>
          ))}
        </VStack>
      </CardFooter>
    </Card>
  )
}

function CoursesGalleryCardSkeleton() {
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

CoursesGalleryCard.Skeleton = CoursesGalleryCardSkeleton

export default CoursesGalleryCard
