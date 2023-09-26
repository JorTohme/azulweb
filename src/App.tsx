import { useState } from 'react'

import './App.css'

function App (): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <>
      {count}
      <button onClick={() => { setCount(count + 1) }}>Click</button>
    </>
  )
}

export default App
