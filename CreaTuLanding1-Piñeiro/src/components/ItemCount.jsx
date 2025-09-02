import { useState } from 'react';

export default function ItemCount({ initial = 1, stock = 10, onAdd }) {
  const [count, setCount] = useState(initial);

  const dec = () => setCount(c => Math.max(1, c - 1));
  const inc = () => setCount(c => Math.min(stock, c + 1));

  return (
    <div style={{ display:'flex', gap:8, alignItems:'center' }}>
      <button onClick={dec} aria-label="menos" style={{ padding:'6px 10px' }}>-</button>
      <span>{count}</span>
      <button onClick={inc} aria-label="más" style={{ padding:'6px 10px' }}>+</button>
      <button onClick={() => onAdd?.(count)} style={{ marginLeft:12, padding:'6px 12px' }}>
        Agregar
      </button>
    </div>
  );
}
