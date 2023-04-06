import express, { Request, Response } from 'express';

const router = express.Router();

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 20.99 },
  { id: 3, name: 'Product 3', price: 30.99 },
];

router.get('/', (req: Request, res: Response) => {
  return res.json(products);
});

router.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  return res.json(product);
});

router.post('/', (req: Request, res: Response) => {
  const { name, price } = req.body;
  const id = products.length + 1;
  const newProduct: Product = { id, name, price };
  products.push(newProduct);
  return res.json(newProduct);
});

router.patch('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const productIndex = products.findIndex((p) => p.id === id);
  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  const { name, price } = req.body;
  const updatedProduct = { ...products[productIndex], name, price };
  products[productIndex] = updatedProduct;
  return res.json(updatedProduct);
});

router.delete('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const productIndex = products.findIndex((p) => p.id === id);
  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  products.splice(productIndex, 1);
  return res.json({ message: 'Product deleted successfully' });
});

export default router;
