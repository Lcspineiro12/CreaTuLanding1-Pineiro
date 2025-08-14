import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <main>
        {/* Enviamos un string por props (requisito) */}
        <ItemListContainer greeting="¡Bienvenido/a a mi tienda! Próximamente verás nuestro catálogo." />
      </main>
    </>
  )
}

export default App