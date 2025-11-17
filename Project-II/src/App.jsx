import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './Component/Home'
import {Nav} from './Component/Nav'
import {About} from './Component/About'
import {Contact} from './Component/Contact'
import {Detail} from './Component/Detail'
import {Login} from './Component/Login'

function App() {
  const [count, setCount] = useState(0)
  let router = createBrowserRouter ([
    {
      path: "/",
      element:<><Nav/><Home/></>
    },
    {
    path: "/about",
    element:<><Nav/><About/></>
    },
    {
      path:"/contact",
      element:<><Nav/><Contact/></>
    },
    {
      path:"/detail/:id",
      element:<><Nav/><Detail/></>
    },
    {
      path:"/login",
      element:<><Nav/><Login/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
