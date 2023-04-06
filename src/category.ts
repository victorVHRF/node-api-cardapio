import express, { Request, Response } from 'express';

const router = express.Router();

interface Category {
  id: number;
  name: string;
}

const categories: Category[] = [
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' },
  { id: 3, name: 'Category 3' },
];

router.get('/', (req: Request, res: Response) => {
  return res.json(categories);
});

export default router;
