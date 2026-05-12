import { useState } from 'react';

export const BookingModal = ({ car, onClose }) => {
    const [formData, setFormData] = useState({ name: '', phone: '', date: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Tutaj normalnie wysyłamy dane do API, na razie zrobimy symulację
        console.log("Rezerwacja dla:", car.name, formData);
        setSent(true);
        setTimeout(() => onClose(), 2000);
    };

    return (
        <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
                {!sent ? (
                    <>
                        <h2 style={{ marginBottom: '10px' }}>Rezerwacja: {car.name}</h2>
                        <p style={{ color: '#94a3b8', marginBottom: '20px' }}>Zostaw dane, a oddzwonimy w celu potwierdzenia.</p>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <input
                                style={inputStyle}
                                type="text"
                                placeholder="Twoje Imię i Nazwisko"
                                required
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                            <input
                                style={inputStyle}
                                type="tel"
                                placeholder="Numer telefonu"
                                required
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                            <input
                                style={inputStyle}
                                type="date"
                                required
                                onChange={(e) => setFormData({...formData, date: e.target.value})}
                            />
                            <button className="btn-book" type="submit">Potwierdzam rezerwację</button>
                            <button type="button" onClick={onClose} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>Anuluj</button>
                        </form>
                    </>
                ) : (
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                        <h2 style={{ color: '#3b82f6' }}>Dziękujemy!</h2>
                        <p>Zgłoszenie zostało wysłane. Skontaktujemy się wkrótce.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

// Style dla modala
const modalOverlayStyle = {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    background: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
};

const modalContentStyle = {
    background: '#1e293b', padding: '40px', borderRadius: '24px', width: '90%', maxWidth: '450px',
    border: '1px solid #334155', color: 'white'
};

const inputStyle = {
    padding: '12px', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: 'white'
};