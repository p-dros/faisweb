import { CoursesFilters } from '@/api/courses'
import { create } from 'zustand'

const DEFAULT_FILTERS: CoursesFilters = {
  name: '',
  ects: {
    min: 0,
    max: 12,
  },
  types: [],
}

interface FilterState {
  filters: CoursesFilters
}

interface FilterActions {
  actions: {
    setFilters: (newFilters: Partial<CoursesFilters>) => void
  }
}

export const useFilterStore = create<FilterState & FilterActions>()((set) => ({
  filters: DEFAULT_FILTERS,
  actions: {
    setFilters: (update) =>
      set((state) => ({ filters: { ...state.filters, ...update } })),
  },
}))

export const useFilterActions = () => useFilterStore((state) => state.actions)
