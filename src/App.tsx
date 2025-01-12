

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import AppLayout from './component/AppLayout'
import Writing from './pages/Writing'
import Reading from './pages/Reading'
import ReadingDetail from './pages/ReadingDetail'
import ProtectedRoute from './component/ProtectedRoute'


const RouterMain = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path='/writing' element={<Writing />} />
            <Route path='/reading' element={<Reading />} />
            <Route path='/reading/detail' element={<ReadingDetail />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

const App = () => {
  return (
    <RouterMain />
  )
}

export default App