export interface tableTypes {
  id: number
  people: number
  space_id: number
  state: string
}

export interface spacesDataTypes {
  id: number
  name: string
  tables: tableTypes[]
}

export interface spaceTypes {
  selectedSpace: number
  spacesData: spacesDataTypes[]
}

export const tableState = {
  free: 'free',
  busy: 'busy',
  pay: 'pay'
}
