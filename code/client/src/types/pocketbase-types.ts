/**
 * This file was @generated using pocketbase-typegen
 */

export enum Collections {
  Courses = 'courses',
  Users = 'users',
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export interface BaseSystemFields<T = never> {
  id: RecordIdString
  created: IsoDateString
  updated: IsoDateString
  collectionId: string
  collectionName: Collections
  expand?: T
}

export type AuthSystemFields<T = never> = {
  email: string
  emailVisibility: boolean
  username: string
  verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export interface CoursesRecord {
  description?: string
  ects: number
  field?: string
  isFaculty?: boolean
  name: string
  semester: number
}

export interface UsersRecord {
  avatar?: string
  name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type CoursesResponse<Texpand = unknown> = Required<CoursesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export interface CollectionRecords {
  courses: CoursesRecord
  users: UsersRecord
}

export interface CollectionResponses {
  courses: CoursesResponse
  users: UsersResponse
}
