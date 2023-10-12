import { tableState } from '../utils/types'
import type { tableTypes } from '../utils/types'

const Table = (tableData: tableTypes, index: number): JSX.Element => {
  return (
    <div key={index} className={`w-20 h-20 flex items-center justify-center rounded-xl
      ${tableData.state === tableState.free && 'bg-tableFree'}
      ${tableData.state === tableState.busy && 'bg-tableBusy'} 
      ${tableData.state === tableState.pay && 'bg-tablePay'} 
    `} >
      <span className="text-white text-3xl font-bold">{tableData.id}</span>
    </div>
  )
}

export default Table
