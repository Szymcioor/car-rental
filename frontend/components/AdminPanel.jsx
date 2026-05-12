import { useState } from 'react';

const AdminPanel = () => {
    const [formData, setFormData] = useState({ name: '', price: '', image: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Wysyłanie...');

        const res = await fetch("https://car-api-v3.dembiak.workers.dev", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            setStatus('✅ Samochód został dodany pomyślnie!');
            setFormData({ name: '', price: '', image: '' });
            setTimeout(() => window.location.reload(), 1500); // Odśwież, by zobaczyć zmiany
        } else {
            setStatus('❌ Błąd podczas dodawania.');
        }
    };

    return (
        <div style={{ background: '#1e293b', padding: '30px', borderRadius: '20px', border: '1px solid #334155', marginTop: '40px' }}>
            <h2 style={{ marginBottom: '20px' }}>Dodaj nowy samochód</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input
                    style={inputStyle}
                    placeholder="Nazwa auta (np. Porsche 911)"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                />
                <input
                    style={inputStyle}
                    placeholder="Cena (np. 1500 zł / doba)"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    required
                />
                <input
                    style={inputStyle}
                    placeholder="Link do zdjęcia (URL)"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                />
                <button className="btn-book" type="submit">Dodaj do bazy danych</button>
            </form>
            {status && <p style={{ marginTop: '15px', fontSize: '0.9rem', color: '#60a5fa' }}>{status}</p>}
        </div>
    );
};

const inputStyle = {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #334155',
    background: '#0f172a',
    color: 'white',
    outline: 'none'
};

export default AdminPanel;