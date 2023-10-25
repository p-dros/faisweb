/**
 * This file was @generated using pocketbase-typegen
 */

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

export interface CommentsRecord {
  author: RecordIdString
  content?: string
  review: RecordIdString
}

export enum CoursesSeasonOptions {
  'summer' = 'summer',
  'winter' = 'winter',
}
export interface CoursesRecord {
  description: string
  difficulty?: number
  ects: number
  fields?: RecordIdString[]
  isOptional?: boolean
  name: string
  season?: CoursesSeasonOptions
  semester?: number
}

export interface FieldsRecord {
  courses?: RecordIdString[]
  description: string
  name: string
}

export interface ReviewsRecord {
  author: RecordIdString
  content?: string
  course: RecordIdString
}

export interface SubCommentsRecord {
  author: RecordIdString
  comment: RecordIdString
  content?: string
}

export enum UsersRoleOptions {
  'admin' = 'admin',
  'student' = 'student',
  'guest' = 'guest',
}
export interface UsersRecord {
  avatar?: string
  name: string
  role: UsersRoleOptions
}

// Response types include system fields and match responses from the PocketBase API
export type CommentsResponse<Texpand = unknown> = Required<CommentsRecord> & BaseSystemFields<Texpand>
export type CoursesResponse<Texpand = unknown> = Required<CoursesRecord> & BaseSystemFields<Texpand>
export type FieldsResponse<Texpand = unknown> = Required<FieldsRecord> & BaseSystemFields<Texpand>
export type ReviewsResponse<Texpand = unknown> = Required<ReviewsRecord> & BaseSystemFields<Texpand>
export type SubCommentsResponse<Texpand = unknown> = Required<SubCommentsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export interface CollectionRecords {
  comments: CommentsRecord
  courses: CoursesRecord
  fields: FieldsRecord
  reviews: ReviewsRecord
  sub_comments: SubCommentsRecord
  users: UsersRecord
}

export interface CollectionResponses {
  comments: CommentsResponse
  courses: CoursesResponse
  fields: FieldsResponse
  reviews: ReviewsResponse
  sub_comments: SubCommentsResponse
  users: UsersResponse
}
