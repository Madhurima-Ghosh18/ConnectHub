import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import VideoCall from './Components/VideoCall'

const App = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/videocall/:roomID',
      element:<VideoCall/>
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
