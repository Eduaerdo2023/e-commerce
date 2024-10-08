// packages
import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

// Utils
import connectDB from "./config/db.js";
dotenv.config()
const port = process.env.PORT || 5000

connectDB()

const app = express()

import userRoutes from './routes/userRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/api/users', userRoutes)
app.use('/api/category', categoryRoutes)

app.listen(port, ()=> {
  `Server running on port ${port}`
})
