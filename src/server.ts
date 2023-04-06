import express from 'express';
import authRouter from './auth';
import categoryRouter from './category';
import productRouter from './product';

const app = express();

app.use(express.json());
app.use('/auth', authRouter);
app.use('/category', categoryRouter);
app.use('/product', productRouter);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
