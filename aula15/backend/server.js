const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')
const port = 8080;

app.use(express.json())
app.use(cor({
    origin: '*'
}))

const connection = mysql.createConnection({
    
})


app.get('/', (req, res) => {
    return res.send("Servidor funcionando normalmente")
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8080")
})