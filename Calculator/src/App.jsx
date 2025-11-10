import { useState } from 'react'
import './App.css'
import { Calculator } from './Component/Calculator'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ColorPallete } from './Component/ColorPallete';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 style={{color:"white"}}>My Calculator App</h1>
     <Calculator/>
     <ColorPallete/>
    </>
  )
}

export default App
