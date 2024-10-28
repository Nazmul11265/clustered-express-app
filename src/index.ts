import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Updated version of the app 2!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});