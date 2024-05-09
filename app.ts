import express, { Request, Response } from 'express';
import { CentralLogic_Employee } from './logic';
import { isLeap } from './leap';
import { commands } from './handshake';



const app = express();
const port = 3000;

// a. GET request to return "CentralLogic-Employee"
app.get('/', (req: Request, res: Response) => {
  const revisedString = `${CentralLogic_Employee}`;
  res.json({ revisedString });
});

// b. GET request to get two parameters and concatenate them
app.get('/:param1/:param2', (req: Request, res: Response) => {
  const param1 = req.params.param1;
  const param2 = req.params.param2;
  const revisedString = `CentralLogic-${param1}${param2}`;
  res.json({ revisedString });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/leap/:year', (req: Request, res: Response) => {
    const year = parseInt(req.params.year, 10);
    const isLeapYear = isLeap(year);
    res.json({ isLeapYear });
  });

  app.get('/handshake/:value', (req: Request, res: Response) => {
    const value = parseInt(req.params.value, 10);
    const result = commands(value);
    res.json(result);
  });