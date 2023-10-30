import { pb } from '@/config/pocketbase'
import { CoursesResponse } from '@/types/pocketbaseTypes'

export interface CoursesFilters {
  name: string
  ects: {
    min: number
    max: number
  }
}

export async function getCourses(): Promise<CoursesResponse[]> {
  return await pb.collection('courses').getFullList<CoursesResponse>()
}

export async function getFilteredCourses({ name, ects }: CoursesFilters) {
  return await pb.collection('courses').getList<CoursesResponse>(1, 20, {
    filter: pb.filter(
      'name ~ {:name} && ects >= {:ectsMin} && ects <= {:ectsMax}',
      {
        name,
        ectsMin: ects.min,
        ectsMax: ects.max,
        isOptional: null,
      }
    ),
  })
}
