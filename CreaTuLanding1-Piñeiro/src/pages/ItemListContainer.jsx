import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import { getProducts } from '../lib/mockApi';

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams(); // <--- lee segmento URL
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // IMPORTANTE: incluir categoryId en dependencias
  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then(setItems)
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <div className="container">Cargando productos...</div>;

  return (
    <div className="container">
      <h1>{greeting}{categoryId && categoryId !== 'todos' ? ` / ${categoryId}` : ''}</h1>
      <ItemList items={items} />
    </div>
  );
}
