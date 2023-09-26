import { useState } from 'react'

import './App.css'

function App (): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <>
      {count}
      <button className='
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded
      ' onClick={() => { setCount(count + 1) }}>Click</button>
    </>
  )
}

export default App
