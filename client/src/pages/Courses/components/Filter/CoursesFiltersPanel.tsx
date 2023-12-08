import { Card, CardBody, Show } from '@chakra-ui/react'
import CoursesFilters from './CoursesFilters'
import CoursesFiltersPanelDesktop from './CoursesFiltersPanelDesktop'
import CoursesFiltersPanelMobile from './CoursesFiltersPanelMobile'

function CoursesFiltersPanel() {
  return (
    <Card>
      <CardBody>
        <Show above='lg'>
          <CoursesFiltersPanelDesktop>
            <CoursesFilters />
          </CoursesFiltersPanelDesktop>
        </Show>
        <Show below='lg'>
          <CoursesFiltersPanelMobile>
            <CoursesFilters />
          </CoursesFiltersPanelMobile>
        </Show>
      </CardBody>
    </Card>
  )
}

export default CoursesFiltersPanel
