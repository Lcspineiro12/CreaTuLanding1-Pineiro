import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h2>404 - Página no encontrada</h2>
      <p>El enlace puede estar mal escrito o la página no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}
