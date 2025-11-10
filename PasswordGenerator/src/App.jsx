import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PasswordGenerate } from './Component/PasswordGenerate'
import { PasswordLogicSet } from './Component/PasswordLogicSet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PasswordLogicSet/>
    </>
  )
}

export default App
