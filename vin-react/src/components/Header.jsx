import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="brand">
        <img src="/assets/img/logoSmall.jpg" alt="Logo Vinoteca Torrents" />
        <h1>Vinoteca Torrents</h1>
      </Link>

      <nav className="navbar" aria-label="Navegación principal">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/productos">Productos</NavLink>
        <NavLink to="/ubicacion">Ubicación</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  );
}

export default Header;
