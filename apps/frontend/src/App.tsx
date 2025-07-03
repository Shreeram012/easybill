import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import CreateInvoice from "./pages/CreateInvoice";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create-invoice" element={<CreateInvoice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
