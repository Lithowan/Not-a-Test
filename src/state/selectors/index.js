import { head, pipe, reverse } from 'ramda'

export function getUsers({ users }) {
  return users
}

export const getLatestUser = pipe(
  getUsers,
  reverse,
  head
)

export function isSorted({ sorted }) {
  return sorted
}