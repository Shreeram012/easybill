export default function Hero() {
  return (
    <section className="min-h-screen pt-40 pb-20 bg-[url('../../public/cover.png')] bg-no-repeat bg-cover bg-center mx-36 rounded-xl flex flex-col justify-end" style={{filter:'brightness(0.95)', backgroundOrigin: 'content-box', color: 'white'}}>
        <div className="mx-8" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 fade-in-up" style={{animationDelay: '0.1s'}}>
            Invoices and accounting made easy
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl font-medium fade-in-up" style={{animationDelay: '0.3s'}}>
            Create invoices, track expenses, manage inventory and taxes with ease.
            Save time and money with automated features.
          </p>
          <form className="w-full max-w-xl fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="flex-1 w-full p-6 text-lg border border-gray-300 rounded-lg focus:border-mainDark"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="w-full absolute right-2 top-3 sm:w-auto px-5 py-3 text-white text-lg font-semibold rounded-lg transition bg-button hover:brightness-110"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
    </section>
  );
}
