import { CoursesResponse, FieldsResponse } from './pocketbaseTypes'

export type CoursesResponseWithFields = CoursesResponse<{
  fields: FieldsResponse[]
}>
