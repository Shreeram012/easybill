import Features from "../components/landing/Features";
import Filler from "../components/landing/Filler";
import Footer from "../components/landing/Footer";
import Hero from "../components/landing/Hero";

export default function Landing() {
    return (
        <div className="min-h-screen bg-main flex-col align-middle">
        <Hero />
        <Features />
        <Filler />
        <Footer />
        </div>
    );
}