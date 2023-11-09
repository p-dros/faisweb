import { pb } from '@/config/pocketbase'
import {
  CoursesResponse,
  CoursesTypeOptions,
  FieldsResponse,
} from '@/types/pocketbaseTypes'

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

type Props = {
  filters: CoursesFilters
  expand?: string
}

export async function getFilteredCourses({
  filters: { name, ects, types },
  expand,
}: Props) {
  let filterString = `name ~ {:name} && ects >= {:ectsMin} && ects <= {:ectsMax}`
  const filterParams = {
    name,
    ectsMin: ects.min,
    ectsMax: ects.max,
  }

  if (types.length > 0) {
    const filteredTypes = types.map((type) => `type = '${type}'`).join(' || ')
    filterString += ` && (${filteredTypes})`
  }

  return await pb
    .collection('courses')
    .getList<CoursesResponse<FieldsResponse[]>>(1, 20, {
      filter: pb.filter(filterString, filterParams),
      expand,
    })
}
