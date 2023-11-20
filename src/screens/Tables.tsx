import { useEffect, useState } from 'react'
import Header from '../components/header'
import TablesSpaceView from '../components/tablesSpaceView'

import type { spacesDataTypes } from '../utils/types'

const Tables = (): JSX.Element => {
  const [spaces, setSpaces] = useState<spacesDataTypes>()
  const [selectedSpace, setSelectedSpace] = useState<number>(0)

  useEffect(() => {
    document.title = 'Mesas'
  }, [])

  useEffect(() => {
    fetch('http://192.168.1.94:3000/spaces/tables', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        origin: 'b8c5c6d1a8f7e4b9d0e3a2f5c4d1b7e8'
      }
    }).then(async res => await res.json())
      .then((data: spacesDataTypes) => {
        setSpaces(data)
      }
      ).catch((error: unknown) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <Header />
      <div className='w-full p-3 border flex gap-5'>
      {
        spaces?.map((space: any) => {
          return (
            <button key={space.id} onClick={() => { setSelectedSpace(space.id - 1) }}
            className={`py-1 px-4 rounded-lg bg-primaryRed1 text-white ${selectedSpace === space.id - 1 && 'bg-primaryRed2'}`}>
              {space.name}
            </button>
          )
        })
      }
      </div>
      <main>
        {
          spaces && <TablesSpaceView selectedSpace={selectedSpace} spacesData={spaces} />
        }
      </main>
    </>
  )
}

export default Tables
