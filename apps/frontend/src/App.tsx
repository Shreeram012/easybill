import './App.scss'
import './components/Navbar'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import CreateInvoice from './pages/CreateInvoice'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mt-20">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create-invoice" element={<CreateInvoice />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
