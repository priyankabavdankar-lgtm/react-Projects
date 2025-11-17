import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/home'
// import About from './Component/about'
import Service from './Component/service'
import Contact from './Component/contact'
import { Nav } from './Component/nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Detail } from './Component/Detail'
import { Dashboard } from './Component/Dashboard'
import { Student } from './Component/Student'
import { Teacher} from './Component/Teacher'
let About=React.lazy(()=>import('./Component/about'))
let router= createBrowserRouter([
  {
    path:"/",
    element:<><Nav/><Home/></>
  },
  {
    path:"/about",
    element:<><Nav/><About/></>
  },
  {
    path:"/service",
    element:<><Nav/><Service/></>
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
    path:"/dashboard/",
    element:<Dashboard/>,
    children:[
    {
      path:"student",
      element:<Student/>
    },
    {
    path:"teacher",
    element:<Teacher/>
    }
    ]
  }
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
