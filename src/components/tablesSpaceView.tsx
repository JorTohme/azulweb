import Table from './table'

import type { spaceTypes, tableTypes } from '../utils/types'

const TablesSpaceView = ({ selectedSpace, spacesData }: spaceTypes): JSX.Element => {
  return (
    <div className='p-6 flex gap-5'>
      {spacesData[selectedSpace].tables.map((table: tableTypes, index: number) => (
        Table(table, index)
      ))}
    </div>
  )
}

export default TablesSpaceView
