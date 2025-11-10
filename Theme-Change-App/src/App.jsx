import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './Component/Home'
import { createContext } from 'react'

export let themeContext = createContext()
function App() {

  
const[color,setColor] = useState({
  "bgcolor":"white",
  "color":"black"
})

function changeColor() {
  if(color.bgcolor==="white"){
    setColor({ "bgcolor":"black",
  "color":"white"})
  }
  else{
    setColor({"bgcolor":"white",
  "color":"black"})
  }
}

  return (
    <>
    <themeContext.Provider value={color}>

      <button onClick={()=>changeColor()}>Change Theme</button>
     <Home/>

    </themeContext.Provider>
    </>
  )
}

export default App
