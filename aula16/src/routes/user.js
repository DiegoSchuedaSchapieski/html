import express, { Router } from 'express'
import { getPeople, createUser } from '../controllers/UserController.js'

const router = express.Router();
const users = ["Diego","Erich","Leticia","Luan"]

router
    .get('/users', getPeople)

export default router