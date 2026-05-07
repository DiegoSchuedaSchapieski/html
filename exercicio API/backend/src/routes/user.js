import express from 'express';
import pedidoRoutes from './routes/PedidoRoutes.js';

const app = express();

app.use(express.json()); // ESSENCIAL: para o Express entender JSON no corpo da requisição
app.use(pedidoRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));