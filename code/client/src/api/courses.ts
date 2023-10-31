import { pb } from '@/config/pocketbase'
import { CoursesResponse, CoursesTypeOptions } from '@/types/pocketbaseTypes'

export async function getCourses(): Promise<CoursesResponse[]> {
  return await pb.collection('courses').getFullList<CoursesResponse>()
}

export type CoursesFilters = {
  name: string
  ects: {
    min: number
    max: number
  }
  types: CoursesTypeOptions[]
}

export async function getFilteredCourses({
  name,
  ects,
  types,
}: CoursesFilters) {
  const filteredTypes = types.map((type) => `type = '${type}'`).join(' || ')

  if (types.length === 0) {
    return await pb.collection('courses').getList<CoursesResponse>(1, 20, {
      filter: pb.filter(
        `name ~ {:name} && ects >= {:ectsMin} && ects <= {:ectsMax}`,
        {
          name,
          ectsMin: ects.min,
          ectsMax: ects.max,
        }
      ),
    })
  }

  return await pb.collection('courses').getList<CoursesResponse>(1, 20, {
    filter: pb.filter(
      `name ~ {:name} && ects >= {:ectsMin} && ects <= {:ectsMax} && (${filteredTypes})`,
      {
        name,
        ectsMin: ects.min,
        ectsMax: ects.max,
      }
    ),
  })
}
