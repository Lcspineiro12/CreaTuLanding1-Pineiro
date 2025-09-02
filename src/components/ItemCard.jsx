import { Link } from 'react-router-dom';

export default function ItemCard({ item }) {
  const { id, title, price, img } = item;
  return (
    <article style={{ border:'1px solid #eee', borderRadius:12, padding:12 }}>
      <div style={{ aspectRatio:'1/1', overflow:'hidden', borderRadius:8, marginBottom:8, background:'#fafafa' }}>
        {/* Si no tenés imágenes, dejá el div vacío o poné un placeholder */}
        {img ? <img src={img} alt={title} style={{ width:'100%', height:'100%', objectFit:'cover' }} /> : null}
      </div>
      <h3 style={{ marginBottom:4 }}>{title}</h3>
      <p style={{ marginBottom:8 }}>${price.toLocaleString('es-AR')}</p>
      <Link to={`/item/${id}`} style={{ display:'inline-block', padding:'8px 12px', border:'1px solid #333', borderRadius:8 }}>
        Ver detalle
      </Link>
    </article>
  );
}
