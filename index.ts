import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { userRouter } from './routes/userRoutes';

// Criação da aplicação Express
const app: Application = express();

// Definindo as rotas para usuários
app.use('/users/', userRouter);

// Middleware para converter o corpo das requisições para JSON
app.use(bodyParser.json());

// Rota de exemplo
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Seu servidor Express está rodando!');
});

// Configuração do servidor
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});