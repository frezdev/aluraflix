import { Home } from '@/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { RootLayout } from './layouts/root'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='/new' element={<h1>Agregar nuevo video</h1>} />
          <Route path='*' element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
