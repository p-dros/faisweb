import { TypedPocketBase } from '@/types/pocketbaseTypes'
import PocketBase from 'pocketbase'

const BASE_URL = 'https://faisweb.pockethost.io/'

export const pb = new PocketBase(BASE_URL) as TypedPocketBase
