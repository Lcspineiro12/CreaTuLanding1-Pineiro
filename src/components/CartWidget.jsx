function CartWidget() {
  // Un placeholder del carrito (icono + contador)
  const itemCount = 0
  return (
    <button className="cart">
      <span aria-hidden>🛒</span>
      <span className="cart__count">{itemCount}</span>
    </button>
  )
}

export default CartWidget