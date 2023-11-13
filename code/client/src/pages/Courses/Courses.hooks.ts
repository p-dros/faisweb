import { getFilteredCourses } from '@/api/courses'
import { useFilterStore } from '@/stores/filtersStore'
import { useDebounce } from '@uidotdev/usehooks'
import { useQuery } from 'react-query'

const DEBOUNCE_TIME = 500

export function useCourses() {
  const { name, ...otherFilters } = useFilterStore((state) => state.filters)
  const debouncedName = useDebounce(name, DEBOUNCE_TIME)
  return useQuery(['courses', otherFilters, debouncedName], () =>
    getFilteredCourses({
      filters: { ...otherFilters, name: debouncedName },
      expand: 'fields',
    })
  )
}
