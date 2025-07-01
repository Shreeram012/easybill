import "./App.css";
import "./components/landing/Navbar";
import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import Filler from "./components/landing/Filler";
import Footer from "./components/landing/Footer";

function App() {
  return (
    <div className="min-h-screen bg-main flex-col align-middle">
      <Navbar />
      <Hero />
      <Features />
      <Filler />
      <Footer />
    </div>
  );
}

export default App;
