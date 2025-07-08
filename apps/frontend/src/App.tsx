import './App.scss'
import './components/Navbar'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import CreateInvoice from './pages/CreateInvoice'
import CreateItem from './pages/CreateItem'
import CreateClient from './pages/CreateClient'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mt-20">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-invoice" element={<CreateInvoice />} />
          <Route path="/create-item" element={<CreateItem />} />
          <Route path="/create-client" element={<CreateClient />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
