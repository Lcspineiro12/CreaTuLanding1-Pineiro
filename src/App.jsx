import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Catálogo principal */}
        <Route path="/" element={<ItemListContainer greeting="Catálogo" />} />
        {/* Catálogo filtrado por categoría */}
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Catálogo" />} />
        {/* Detalle de producto */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        {/* Redirección opcional /home -> / */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
