const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')
const app = express();
const port = 8080;

app.use(express.json())
app.use(cors({
    origin: '*'
}))

const connection = mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    database: "aula_add",
    port: 3307
})

// Melhoria: Verificar erro na conexão de fato
connection.connect(err => {
    if (err) {
        console.error("Erro ao conectar no banco:", err);
    } else {
        console.log("Banco de dados conectado!");
    }
});

app.get('/', (req, res) => {
    return res.send("Servidor funcionando corretamente!")
})

app.get('/usuarios', (req, res) => {
    connection.query("SELECT * FROM usuario", (err, results) => {
        if(err){
            return res.status(500).send(err)
        }
        res.status(200).send(results)
    })
})

app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params
    connection.query("SELECT * FROM usuario WHERE id = ?", 
        [id], 
        (err, results) => {
            if(err){
                return res.status(500).send(err)
            }
            return res.status(200).send(results[0])
    })
})

app.post('/registro', (req, res) => {
    const { nome, email, senha } = req.body
    connection.query("INSERT INTO usuario (nome,email,senha) VALUES (?,?,?)",
        [nome, email, senha],
        (err) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send({ response: "Usuário registrado com sucesso!"})
        }
    )
})

app.delete('/deletar/:id', (req, res) => {
    const { id } = req.params 
    console.log(id)
    connection.query("DELETE FROM usuario WHERE id = ?", [id], (err) => {
        if(err) {
            console.log(err)
            return res.status(500).send({error: err})
        }
        return res.status(200).send({message: "Usuário deletado com sucesso!"})
    })
})

app.put('/atualizar/:id', (req, res) =>{
    const { id } = req.params
    const { nome, email, senha } = req.body
    connection.query("UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE id = ?",
        [nome, email, senha, id],
        (err) => {
            if(err) {
                return res.status(500).send({message : "Ocorreu um erro ao atualizar"})
            }
            return res.status(200).send({message :"Usuário atualizado com sucesso"})
        }
    )
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8080")
})