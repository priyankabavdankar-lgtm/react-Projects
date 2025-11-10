import { useState, useEffect } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from './Component/Card';

function App() {

  const[products, setProducts] = useState([])

  async function FetchData () {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/todos/")
      let data = await res.json();
      setProducts(data);
    }
     catch (error) {
      console.log(Error)
    }
    
  }

  useEffect (()=>{
      FetchData()
  }, [])

  return (
    <>
      <div className='container'>
        <div className='row'>
          {products.map(e=><Card data={e}></Card>)}
        </div>
      </div>
   
    </>
  )
}

export default App
