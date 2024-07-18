import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

// Pages
import Home from './pages/Home/Home.jsx'
import SignIn from './pages/SignIn/SignIn.jsx'
import User from './pages/User/User.jsx'

// Layout
import Layout from './layout/Navigation.jsx'
import Footer from './layout/Footer.jsx'


let user = 1;


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/user',
    element: <User />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout user={user} />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
