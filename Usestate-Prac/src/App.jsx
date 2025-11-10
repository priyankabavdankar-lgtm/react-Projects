import { useState } from 'react'
import './App.css'
import { UserForm } from './Component/UseStateForm'

function App() {

 let [count, setCount] = useState(0)

 let increment = () => {
  setCount (count+1)
 }

 let decrement = () => {
  setCount (count-1)
 }

 let reset = () => {
  setCount(0)
 }

  return (
    <>
      <h1>count is {count}</h1>

      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => reset()}>Reset</button>

     <UserForm></UserForm>
    </>
  )
}

export default App
