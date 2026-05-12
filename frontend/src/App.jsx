import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar} from "../components/Navbar.jsx";
import {CarCard} from "../components/CarCard.jsx";
import {BookingModal} from "../components/BookingModal.jsx";
import AdminPanel from '../components/AdminPanel.jsx';
import About from '../components/About';
import Contact from '../components/Kontakt.jsx';

const Home = ({ cars, loading }) => {
    const [selectedCar, setSelectedCar] = useState(null);

    return (
        <>
            <section className="hero">
                <h1>WYNAJEM <span style={{ color: '#3b82f6' }}>PREMIUM</span></h1>
                <p>Najlepsza flota samochodów luksusowych dostępna 24/7.</p>
            </section>

            <main className="container">
                <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Nasza Flota</h2>

                {loading ? (
                    <p style={{ color: '#94a3b8' }}>Ładowanie luksusowych maszyn...</p>
                ) : (
                    <div className="car-grid">
                        {cars.map((car) => (
                            <CarCard
                                key={car.id}
                                car={car}
                                onBook={(chosenCar) => setSelectedCar(chosenCar)}
                            />
                        ))}
                    </div>
                )}

                {/* Wyświetl modal tylko jeśli wybrano auto */}
                {selectedCar && (
                    <BookingModal
                        car={selectedCar}
                        onClose={() => setSelectedCar(null)}
                    />
                )}

                <hr style={{ margin: '80px 0', borderColor: '#334155' }} />

                {/* Panel administracyjny do dodawania aut */}
                <AdminPanel />
            </main>
        </>
    );
};

// --- GŁÓWNA APLIKACJA ---
function App() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    // Pobieranie danych z Twojego API na Cloudflare
    useEffect(() => {
        fetch("https://car-api-v3.dembiak.workers.dev")
            .then((res) => res.json())
            .then((data) => {
                setCars(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Błąd pobierania danych:", err);
                setLoading(false);
            });
    }, []);

    return (
        <Router>
            <div className="min-h-screen">
                <Navbar />

                <Routes>
                    <Route
                        path="/"
                        element={<Home cars={cars} loading={loading} />}
                    />
                    <Route path="/o-nas" element={<About />} />
                    <Route path="/kontakt" element={<Contact />} />
                </Routes>

                <footer style={{
                    padding: '60px 20px',
                    textAlign: 'center',
                    borderTop: '1px solid #334155',
                    marginTop: '100px',
                    color: '#64748b',
                    fontSize: '0.9rem'
                }}>
                    <p>&copy; Szymon Dembski 4P.</p>
                    <p style={{ marginTop: '10px', fontSize: '0.7rem', opacity: 0.5 }}>Powered by React(Vite) & Cloudflare D1</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;