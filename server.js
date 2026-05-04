import express from 'express'
import initRoutes from './src/routes/routes.js'
const app = express();

const port = 8080;

// app.use(express.json(initRoutes(app))); ele ia processar e daí chamar
// chama direto
initRoutes(app) 

app.get('/', (req, res) => {
    return res.send("A api está rodando")
})

app.listen(port | 8081, () => {
    console.log("O servidor está rodando em http://localhost:8080")
})