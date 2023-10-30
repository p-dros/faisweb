import { CoursesFilters } from '@/api/courses'
import { create } from 'zustand'

interface FilterStore {
  filters: CoursesFilters
  setFilters: (newFilters: Partial<CoursesFilters>) => void
}

const useFilterStore = create<FilterStore>()((set) => ({
  filters: {
    name: '',
    ects: {
      min: 0,
      max: 12,
    },
  },
  setFilters: (update) =>
    set((state) => ({ filters: { ...state.filters, ...update } })),
}))

export default useFilterStore
