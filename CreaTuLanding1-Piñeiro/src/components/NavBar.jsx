import CartWidget from './CartWidget'

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        {/* Logo de tu tienda */}
        <a href="#" className="brand">MiTienda</a>
      </div>

      <nav className="navbar__links">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </nav>

      <div className="navbar__cart">
        <CartWidget />
      </div>
    </header>
  )
}

export default NavBar