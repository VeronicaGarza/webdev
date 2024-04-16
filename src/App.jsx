import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

  const LayOut = () => {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet/>
        </main>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/services",
          element: <Services/>
        },
        {
          path: "/about",
          element: <About/>
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
