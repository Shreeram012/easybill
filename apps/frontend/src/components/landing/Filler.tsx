const Filler: React.FC = () => {
    return (
        <section className="max-w-full mx-32 px-4 py-16">
            <div className="flex justify-between mx-36">
                <img src="../../public/f1.png" alt="img-1" />
                <img src="../../public/f2.png" alt="img-2" />
                <img src="../../public/f3.png" alt="img-3" />
            </div>
            <div className="flex flex-col items-center justify-center mt-16 gap-5">
                <h1 className="text-5xl md:text-6xl font-extrabold">Ready to get started?</h1>
                <button
                type="button"
                className="w-full sm:w-auto px-5 py-3 text-white text-lg font-semibold rounded-lg bg-button hover:brightness-110"
              >
                Get Started
              </button>
            </div>
        </section>
    )
}

export default Filler;
