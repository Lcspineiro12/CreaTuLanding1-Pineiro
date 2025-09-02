import ItemCard from './ItemCard';

export default function ItemList({ items }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))', gap:16 }}>
      {items.map(prod => (
        <ItemCard key={prod.id} item={prod} />
      ))}
    </div>
  );
}
