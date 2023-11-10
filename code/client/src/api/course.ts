import { pb } from '@/config/pocketbase'
import { CoursesResponse } from '@/types/pocketbaseTypes'

export async function getCourse(id: string) {
  return await pb.collection('courses').getOne<CoursesResponse>(id)
}
