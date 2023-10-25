import { pb } from '@/config/pocketbase'
import { CoursesResponse } from '@/types/pocketbase-types'

export async function getCourses() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return await pb.collection('courses').getFullList<CoursesResponse>()
}
