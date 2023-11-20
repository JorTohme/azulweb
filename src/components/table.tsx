import { tableState } from '../utils/types'
import type { tableTypes } from '../utils/types'

const Table = (tableData: tableTypes, index: number): JSX.Element => {
  return (
    <div key={index} className={`w-20 h-20 flex items-center justify-center rounded-xl select-none cursor-pointer
      ${tableData.state === tableState.free && 'bg-tableFree hover:bg-tableFreeAccent'}
      ${tableData.state === tableState.busy && 'bg-tableBusy hover:bg-tableBusyAccent'} 
      ${tableData.state === tableState.pay && 'bg-tablePay hover:bg-tablePayAccent'}'} 
    `} >
      <span className="text-white text-3xl font-bold">{tableData.id}</span>
    </div>
  )
}

export default Table
