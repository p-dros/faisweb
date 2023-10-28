import { pb } from '@/config/pocketbase'
import { CoursesResponse } from '@/types/pocketbaseTypes'
import { wait } from '@/utils/helpers'

export async function getCourses(): Promise<CoursesResponse[]> {
  await wait(3000)
  return await pb.collection('courses').getFullList<CoursesResponse>()
}
