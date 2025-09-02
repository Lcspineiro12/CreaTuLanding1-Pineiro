import { NavLink, Link } from 'react-router-dom';
import { CATEGORIES } from '../data/products';

const active = ({ isActive }) => ({
  textDecoration: isActive ? 'underline' : 'none'
});

export default function NavBar() {
  return (
    <header style={{ borderBottom: '1px solid #eee', marginBottom: 16 }}>
      <nav className="container" style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '12px 0' }}>
        <Link to="/" style={{ fontWeight: 700 }}>MiTienda</Link>

        <div style={{ display: 'flex', gap: 12 }}>
          {/* Menú de categorías dinámico (no crear rutas duplicadas por categoría) */}
          {CATEGORIES.map(cat => (
            <NavLink
              key={cat}
              to={cat === 'todos' ? '/' : `/category/${cat}`}
              style={active}
            >
              {cat.toUpperCase()}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
