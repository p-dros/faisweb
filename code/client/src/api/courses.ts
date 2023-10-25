import { pb } from '@/config/pocketbase'
import { CoursesResponse } from '@/types/pocketbase-types'
import { wait } from '@/utils/helpers'

export async function getCourses() {
  await wait(3000)
  return await pb.collection('courses').getFullList<CoursesResponse>()
}
