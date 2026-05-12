
const Hero = () => {
    return (
        <section className="relative py-24 px-6 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent -z-10"></div>
            <div className="max-w-4xl mx-auto text-center">
                <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block text-white">Premium Car Rental</span>
                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white">
                    POCZUJ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">ADRENALINĘ</span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Ekskluzywna flota samochodów sportowych i luksusowych dostępna na wyciągnięcie ręki. Bez zbędnych formalności.
                </p>
            </div>
        </section>
    );
};

export default Hero;