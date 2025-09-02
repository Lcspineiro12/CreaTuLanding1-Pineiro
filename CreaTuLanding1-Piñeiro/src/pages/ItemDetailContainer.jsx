import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { getProductById } from '../lib/mockApi';

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  // IMPORTANTE: incluir id en dependencias
  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then(setItem)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="container">Cargando detalle...</div>;
  if (!item) return <div className="container">Producto no encontrado.</div>;

  return (
    <div className="container">
      <ItemDetail item={item} />
    </div>
  );
}
