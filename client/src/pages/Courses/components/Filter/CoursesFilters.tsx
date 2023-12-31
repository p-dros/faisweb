import { useFilterActions, useFilterStore } from '@/stores/filtersStore'
import { CoursesTypeOptions } from '@/types/pocketbaseTypes'
import { SearchIcon } from '@chakra-ui/icons'
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  StackDivider,
  VStack,
} from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import CoursesFiltersGroup from './CoursesFiltersGroup'

function CoursesFilters() {
  const filters = useFilterStore((state) => state.filters)
  const { setFilters } = useFilterActions()

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ name: e.target.value })
  }
  const handleEctsSliderChange = (value: number[]) => {
    setFilters({ ects: { min: value[0], max: value[1] } })
  }

  const handleTypeChange = (value: (string | number)[]) => {
    setFilters({ types: value as CoursesTypeOptions[] })
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
      <CoursesFiltersGroup title='Type'>
        <CheckboxGroup onChange={handleTypeChange} value={filters.types}>
          <VStack align={'start'}>
            <Checkbox value='obligatory'>Obligatory</Checkbox>
            <Checkbox value='optional'>Optional</Checkbox>
          </VStack>
        </CheckboxGroup>
      </CoursesFiltersGroup>
    </VStack>
  )
}

export default CoursesFilters
