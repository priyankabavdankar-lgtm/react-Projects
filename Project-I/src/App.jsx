import { useState } from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Nav} from './Component/Nav'
import {Home} from './Component/Home'
import {Detail} from './Component/Detail'
import {Category} from './Component/Category'

function App() {
  let [search, setSearch] = useState("")
  function handleChange(e) {
    console.log(e.target.value);
    
    setSearch(e.target.value)
  }
  
  let router = createBrowserRouter ([
    {
      path:"/",
      element:<><Nav handleChange={handleChange}/><Home search={search}/></>
    },
    {
      path:"/detail/:id",
      element:<><Nav handleChange={handleChange}/><Detail/></>
    },
    {
      path:"/category/:name",
      element:<><Nav handleChange={handleChange}/><Category/></>
    }
  ])
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
