import { PRODUCTS } from '../data/products';

const wait = (ms) => new Promise(res => setTimeout(res, ms));

export async function getProducts(categoryId) {
  await wait(600); // retardo breve
  if (!categoryId || categoryId === 'todos') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === categoryId);
}

export async function getProductById(id) {
  await wait(600);
  return PRODUCTS.find(p => p.id === id);
}
