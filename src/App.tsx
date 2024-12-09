
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import AppLayout from './component/AppLayout'
import Writing from './pages/Writing'
type Props = {}


const RouterMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/writing' element={<Writing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const App = (props: Props) => {
  return (
    <RouterMain />
  )
}

export default App