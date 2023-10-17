import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import todoRouter from './routes/todo.route.js'
import cors from 'cors'

dotenv.config()

const server = express();

server.use(express.json())
server.use(cors())



mongoose.connect(process.env.DB).then(() => {
    console.log("Connected to MongoDB")
}).catch((error) => {
    console.log("MongoDB connecting error:", error)
})

server.use("/api/todos", todoRouter)

export default server

