import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Nav } from './Component/NAv'
import { Home } from './Component/Home'
import { About } from './Component/About'
import { Contact } from './Component/Contact'
import { Login } from './Component/Login'

let router = createBrowserRouter ([
{
  path:'/',
  element:<><Nav/><Home/></>
},
{
  path:'/about',
  element:<><Nav/><About/></>
},
{
  path:'/contact',
  element:<><Nav/><Contact/></>
},
{
  path:'/login',
  element:<><Nav/><Login/></>
}
]
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
