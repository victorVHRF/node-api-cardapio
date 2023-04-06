import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json());

const SECRET_KEY = 'my-secret-key';

interface User {
  id: number;
  username: string;
  password: string;
}

const users: User[] = [
  { id: 1, username: 'adm', password: 'adm' },
//   { id: 2, username: 'user2', password: 'password2' },
];

router.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY);

  return res.json({ token });
});

export default router;
