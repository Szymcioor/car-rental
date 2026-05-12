export const CarCard = ({ car, onBook }) => (
    <div className="car-card">
        <img
            className="car-image"
            src={car.image || 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800'}
            alt={car.name}
        />
        <div className="car-info">
            <h3 className="car-name">{car.name}</h3>
            <p style={{color: '#94a3b8', fontSize: '0.9rem'}}>Luksusowy samochód sportowy</p>
            <div style={{marginTop: '20px'}}>
                <span style={{fontSize: '0.8rem', color: '#94a3b8', display: 'block'}}>Cena za dobę</span>
                <span className="car-price">{car.price}</span>
            </div>
            {/* Przekazujemy funkcję do przycisku */}
            <button className="btn-book" onClick={() => onBook(car)}>Rezerwuj teraz</button>
        </div>
    </div>
);