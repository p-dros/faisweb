import { pb } from '.'
import { CoursesResponse } from '@/types/pocketbase-types'

export function getCourses() {
  return pb.collection('courses').getFullList<CoursesResponse>()
}
