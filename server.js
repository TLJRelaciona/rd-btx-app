import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.get('/ping', (req, res) => {
  res.send('Servidor online!');
});
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});