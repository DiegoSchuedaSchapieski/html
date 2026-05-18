import { response } from "express";
import { connection } from "../database/db.js";

export const getPeople = (req, res) => {
    const users = connection.query('SELECT * FROM user', (err, results) => {
        if(err){
            return res.status(500).send({response: "Ocorreu algum erro"})
        }
        return res.status(200).send(results)
    })
}
//test
export const createUser = (req, res) => {
   const { name, email, password } = req.body;
    try{
        connection.query('Insert into user(name,email,password) values(?,?,?)',
            [ name, email, password ],
            (err,results) => {
                if(err){
                    return res.status(500).sned({response:"Ocorreu algum erro durante a inserção"})
                }
            }    
        )
        people.push({ name })
        return res.status(200).send({ response: "Usuário registrado!"})
    }
    catch{
        return res.status(500).send({ response: "Erro ao registrar"})
    }


}

export const updateUser = (req, res) =>{
    const { name, email, password } = req.body;
    const {id} = req.params
    try{
        connection.query('UPDATE user SET name=?, name=?, password WHERE id= ?',
           [ name, email, password ],
           (err, results) => {
            if(err){
                return req.status(501).send({ response :"Ocorreu algum erro durante a inserção"})
                }
           }
        )
        people.push({ name })
        return res.status(201).send({ response: "Usuário atualizado!"})
    }
    catch{
        return res.status(500).send({ response: "Erro ao registrar"})
    }
}

export const deleteUser = (req, res) =>{
    const {id} = req.body;
    try{
        connection.query('DELETE FROM * WHERE id= ?',
        [id],
        (err, results) => {
        if(err){
            return req.status(500).send({ response :"Ocorreu algum erro durante o delete"})
                }
            }
        )
        return res.status(200).send({response: "Usuário deletar!"})
    }catch{
        return res.status(500).send({ response: "Erro ao deletar"})
    }
}
