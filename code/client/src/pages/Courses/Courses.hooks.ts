import { getFilteredCourses } from '@/api/courses'
import { useFilterStore } from '@/stores/filtersStore'
import { useDebounce } from '@uidotdev/usehooks'
import { useQuery } from 'react-query'

export function useCourses() {
  const filters = useFilterStore((state) => state.filters)
  const debouncedName = useDebounce(filters.name, 500)
  return useQuery(['courses', filters], () =>
    getFilteredCourses({
      filters: { ...filters, name: debouncedName },
      expand: 'fields',
    })
  )
}
