
const Kontakt = () => {
    return (
        <div className="container">
            <h1 style={{fontSize: '3rem', color: '#3b82f6'}}>KONTAKT</h1>
            <div className="car-grid" style={{marginTop: '40px'}}>
                <div className="car-card" style={{padding: '30px'}}>
                    <h3>Adres Biura</h3>
                    <p style={{color: '#94a3b8'}}>ul. Wyścigowa 12, Warszawa</p>
                </div>
                <div className="car-card" style={{padding: '30px'}}>
                    <h3>Telefon</h3>
                    <p style={{color: '#94a3b8'}}>+48 123 456 789</p>
                </div>
                <div className="car-card" style={{padding: '30px'}}>
                    <h3>E-mail</h3>
                    <p style={{color: '#94a3b8'}}>biuro@email.pl</p>
                </div>
            </div>
        </div>
    );
};

export default Kontakt;