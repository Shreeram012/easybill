import Footer from "../components/landing/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">About EasyBill</h1>
        </div>
      </header>
      <main className="flex-1 max-w-3xl mx-auto w-full py-12 px-4">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            EasyBill is a modern billing and invoicing platform designed to help freelancers, small businesses, and entrepreneurs manage their finances with ease. Our mission is to simplify billing, so you can focus on what matters most—growing your business.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            We believe that billing should be fast, intuitive, and stress-free. EasyBill provides powerful tools for creating invoices, tracking payments, and gaining insights into your revenue—all in one place.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Have questions or feedback? Reach out to us at{" "}
            <a href="mailto:support@easybill.com" className="text-blue-600 underline">
              support@easybill.com
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}