import { pb } from '@/config/pocketbase'
import { CoursesResponse } from '@/types/pocketbaseTypes'

export async function getCourses(): Promise<CoursesResponse[]> {
  return await pb.collection('courses').getFullList<CoursesResponse>()
}
