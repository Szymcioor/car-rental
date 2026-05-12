import { Link } from 'react-router-dom';

export const Navbar = () => (
    <nav className="navbar">
        <div className="logo">
            <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                CAR<span>RENTAL</span>
            </Link>
        </div>
        <div className="nav-links">
            <Link to="/">Flota</Link>
            <Link to="/o-nas">O nas</Link>
            <Link to="/kontakt">Kontakt</Link>
        </div>
    </nav>
);