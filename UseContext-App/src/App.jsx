import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createContext } from 'react'
import { A } from './Component/A'

export let countContext = createContext()

function App() {
  const [count, setCount] = useState(80)
  const [name, setName] = useState("react")

  return (
    <>
     <countContext.Provider value={[count,name]}>
      <A/>
     </countContext.Provider>
     
    </>
  )
}

export default App
