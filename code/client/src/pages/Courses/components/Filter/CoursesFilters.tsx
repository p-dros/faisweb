import useFilterStore from '@/stores/filtersStore'
import { SearchIcon } from '@chakra-ui/icons'
import {
  Input,
  InputGroup,
  InputLeftElement,
  StackDivider,
  VStack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  Flex,
} from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import CoursesFiltersGroup from './CoursesFiltersGroup'

function CoursesFilters() {
  const filters = useFilterStore((state) => state.filters)
  const setFilters = useFilterStore((state) => state.setFilters)

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ name: e.target.value })
  }
  const handleEctsSliderChange = (value: number[]) => {
    setFilters({ ects: { min: value[0], max: value[1] } })
  }

  return (
    <VStack divider={<StackDivider />} align={'initial'}>
      <CoursesFiltersGroup title={'Search'}>
        <InputGroup>
          <InputLeftElement pointerEvents={'none'}>
            <SearchIcon />
          </InputLeftElement>
          <Input onChange={handleNameChange} value={filters.name} />
        </InputGroup>
      </CoursesFiltersGroup>
      <CoursesFiltersGroup title={'ECTS Points'}>
        <RangeSlider
          defaultValue={[filters.ects.min, filters.ects.max]}
          min={0}
          max={12}
          onChangeEnd={handleEctsSliderChange}>
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <Flex justify={'space-between'}>
          <Box>{filters.ects.min}</Box>
          <Box>{filters.ects.max}</Box>
        </Flex>
      </CoursesFiltersGroup>
      <CoursesFiltersGroup title='Type'></CoursesFiltersGroup>
    </VStack>
  )
}

export default CoursesFilters
