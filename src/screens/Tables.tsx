import { useEffect, useState } from 'react'
import Header from '../components/header'
import TablesSpaceView from '../components/tablesSpaceView'

const Tables = (): JSX.Element => {
  const [spaces, setSpaces] = useState([])

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
      .then((data: any) => {
        console.log(data)
        setSpaces(data)
      }
      ).catch((error: any) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <Header />
      {
        spaces?.map((space: any) => {
          return (
            <div key={space.id}>
              <h1>{space.name}</h1>
            </div>
          )
        })
      }
      <main>
        {
          spaces?.map((space: any) => {
            return (
              <TablesSpaceView key={space.id} selectedSpace={2} spacesData={
                spaces
              }/>
            )
          })
        }
      </main>
    </>
  )
}

export default Tables
