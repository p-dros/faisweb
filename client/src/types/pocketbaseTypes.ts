/**
 * This file was @generated using pocketbase-typegen
 */

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
  Comments = 'comments',
  Courses = 'courses',
  Fields = 'fields',
  Reviews = 'reviews',
  SubComments = 'sub_comments',
  Users = 'users',
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
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

export type CommentsRecord = {
  author: RecordIdString
  content?: string
  review: RecordIdString
}

export type CoursesSeasonOptions = 'summer' | 'winter'

export type CoursesTypeOptions = 'optional' | 'obligatory'

export type CoursesVerificationFormOptions = 'exam' | 'assesment'

export type CoursesRecord = {
  description: string
  short_description?: string
  difficulty?: number
  ects?: number
  fields?: RecordIdString[]
  name: string
  season?: CoursesSeasonOptions
  semester?: number
  type: CoursesTypeOptions
  verification_form: CoursesVerificationFormOptions
}

export type FieldsRecord = {
  courses?: RecordIdString[]
  description: string
  name: string
  shortcut?: string
}

export type ReviewsRecord = {
  author: RecordIdString
  content?: string
  course: RecordIdString
}

export type SubCommentsRecord = {
  author: RecordIdString
  comment: RecordIdString
  content?: string
}

export type UsersRoleOptions = 'admin' | 'student' | 'guest'

export type UsersRecord = {
  avatar?: string
  name: string
  role: UsersRoleOptions
}

// Response types include system fields and match responses from the PocketBase API
export type CommentsResponse<Texpand = unknown> = Required<CommentsRecord> &
  BaseSystemFields<Texpand>
export type CoursesResponse<Texpand = unknown> = Required<CoursesRecord> &
  BaseSystemFields<Texpand>
export type FieldsResponse<Texpand = unknown> = Required<FieldsRecord> &
  BaseSystemFields<Texpand>
export type ReviewsResponse<Texpand = unknown> = Required<ReviewsRecord> &
  BaseSystemFields<Texpand>
export type SubCommentsResponse<Texpand = unknown> =
  Required<SubCommentsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> &
  AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
  comments: CommentsRecord
  courses: CoursesRecord
  fields: FieldsRecord
  reviews: ReviewsRecord
  sub_comments: SubCommentsRecord
  users: UsersRecord
}

export type CollectionResponses = {
  comments: CommentsResponse
  courses: CoursesResponse
  fields: FieldsResponse
  reviews: ReviewsResponse
  sub_comments: SubCommentsResponse
  users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
  collection(idOrName: 'comments'): RecordService<CommentsResponse>
  collection(idOrName: 'courses'): RecordService<CoursesResponse>
  collection(idOrName: 'fields'): RecordService<FieldsResponse>
  collection(idOrName: 'reviews'): RecordService<ReviewsResponse>
  collection(idOrName: 'sub_comments'): RecordService<SubCommentsResponse>
  collection(idOrName: 'users'): RecordService<UsersResponse>
}
