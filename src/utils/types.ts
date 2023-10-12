export interface tableTypes {
  id: number
  people: number
  space_id: number
  state: string
}

export interface spaceTypes {
  selectedSpace: number
  spacesData: Record<number, {
    id: number
    name: string
    tables: tableTypes[]
  }>
}

export const tableState = {
  free: 'free',
  busy: 'busy',
  pay: 'pay'
}
