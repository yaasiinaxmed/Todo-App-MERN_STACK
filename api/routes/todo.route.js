import express from 'express'
import { createTodo, deleteTodo, getTodo, getTodoById, updateTodo } from '../controllers/todo.controler.js'

const router = express.Router()

router.get("/", getTodo)
router.get('/:id', getTodoById)
router.post('/create', createTodo)
router.put('/update/:id', updateTodo)
router.delete('/delete/:id', deleteTodo)

export default router