import React from 'react'

import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import About from './pages/About'
import Other from './pages/Other'
import PureGreen from './pages/PureGreen'
import Uline from './pages/Uline'
import Wellness from './pages/Wellness'
import Benefit from './pages/Benefit'
import InterVarsity from './pages/InterVarsity'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'other',
    element: <Other />,
  },
  {
    path: 'uline',
    element: <Uline />,
  },
  {
    path: 'wellness',
    element: <Wellness />,
  },
  {
    path: 'puregreen',
    element: <PureGreen />,
  },
  {
    path: 'intervarsity',
    element: <InterVarsity />,
  },
])

const root = document.getElementById('root')
if (root === null) {
  throw new Error('No root element found')
}

ReactDOM.createRoot(root).render(<RouterProvider router={router} />)
