import ItemCount from './ItemCount';

export default function ItemDetail({ item }) {
  const { title, price, description, img } = item;

  const handleAdd = (qty) => {
    // futuro: agregar al carrito
    alert(`Agregaste ${qty} unidad(es) de "${title}"`);
  };

  return (
    <section style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, alignItems:'start' }}>
      <div style={{ background:'#fafafa', borderRadius:12, overflow:'hidden' }}>
        {img ? <img src={img} alt={title} /> : <div style={{ padding:'40px', textAlign:'center' }}>Sin imagen</div>}
      </div>
      <div>
        <h2 style={{ marginBottom:8 }}>{title}</h2>
        <p style={{ marginBottom:8, fontWeight:700 }}>${price.toLocaleString('es-AR')}</p>
        <p style={{ marginBottom:16 }}>{description}</p>
        <ItemCount initial={1} stock={10} onAdd={handleAdd} />
      </div>
    </section>
  );
}
